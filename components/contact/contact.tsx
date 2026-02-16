"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

/* -------------------------------- Carousel -------------------------------- */

const InfiniteMovingCarousel = ({ images }: { images: string[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!carouselRef.current) return;

    setWidth(carouselRef.current.clientWidth);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setWidth(entry.target.clientWidth);
        }
      });
    });

    observer.observe(carouselRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
      className="w-full overflow-hidden"
    >
      <motion.div
        initial={{ x: -width }}
        animate={{ x: -(width / 2 + 24) }}
        transition={{
          duration: 3 * images.length,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        ref={carouselRef}
        className="flex w-max items-center gap-12"
      >
        {[...images, ...images].map((image, index) => (
          <img
            key={`partner-${index}`}
            src={image}
            alt={`Partner ${index + 1}`}
            className="size-24 shrink-0 object-contain dark:invert"
          />
        ))}
      </motion.div>
    </div>
  );
};

/* ------------------------------- Form Group -------------------------------- */

const FormGroup = ({ children }: { children: React.ReactNode }) => (
  <div className="flex w-full flex-col gap-2">{children}</div>
);

/* -------------------------------- Component -------------------------------- */

interface ContactProps {
  badge?: string;
  heading?: string;
  benefits?: string[];
  companies?: string[];
  className?: string;
}

const Contact = ({
  badge = "CONTACT US",
  heading = "Partner with Australia's leading research experts",
  benefits = [
    "Evidence-based insights for the public and NFP sectors.",
    "Bespoke research design and data analytics services.",
    "Expert advisory led by Qualified Professional Researchers.",
  ],
  companies = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
  ],
  className,
}: ContactProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [interest, setInterest] = useState("");

  /* ------------------------------ Submit Handler ------------------------------ */

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      message: formData.get("message"),
      interest,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      e.currentTarget.reset();
      setInterest("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={cn("py-32", className)}>
      <BlurFade delay={0.25} inView>
        <div className="container">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-4">
            {/* Left */}
            <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-8">
              <Badge variant="outline">{badge}</Badge>
              <h3 className="mt-2 max-w-md text-center text-3xl font-medium lg:text-left lg:text-5xl">
                {heading}
              </h3>

              <ul className="flex flex-col">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex max-w-md items-start gap-2 px-4 lg:border-b lg:py-6"
                  >
                    <ArrowRight className="hidden size-6 lg:block" />
                    <p className="text-center font-medium lg:text-left">
                      {benefit}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-20 hidden w-full lg:block">
                <InfiniteMovingCarousel images={companies} />
              </div>
            </div>

            {/* Right - Form */}
            <Card className="w-full max-w-xl place-self-center bg-muted/70 px-4 pt-10 pb-4 lg:max-w-none">
              <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                <div className="flex gap-4">
                  <FormGroup>
                    <Label>First Name</Label>
                    <Input name="firstName" placeholder="First name" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Last Name</Label>
                    <Input name="lastName" placeholder="Last name" />
                  </FormGroup>
                </div>

                <FormGroup>
                  <Label>Work Email</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="name@organization.gov.au"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Organization</Label>
                  <Input name="organization" placeholder="Company or Agency" />
                </FormGroup>

                <FormGroup>
                  <Label>How can we help?</Label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Area of Interest</Label>
                  <Select value={interest} onValueChange={setInterest}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="strategic">Strategic Consulting</SelectItem>
                      <SelectItem value="qualitative">Qualitative Research</SelectItem>
                      <SelectItem value="quantitative">Quantitative Research</SelectItem>
                      <SelectItem value="analytics">Data Analytics</SelectItem>
                      <SelectItem value="other">General Enquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </FormGroup>

                <Button type="submit" disabled={loading} className="w-fit self-end">
                  {loading ? "Sending..." : "Send Message"}
                </Button>

                {success && (
                  <p className="text-sm text-green-600">
                    Message sent successfully. We’ll be in touch.
                  </p>
                )}

                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}
              </form>
            </Card>

            <div className="mt-20 block lg:hidden">
              <InfiniteMovingCarousel images={companies} />
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

export default Contact;

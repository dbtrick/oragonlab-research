"use client";

import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";

interface Services4Props {
  className?: string;
}

const Location = ({ className }: Services4Props) => {
  const services = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Melbourne Office",
      description:
        "65 Oxford Street, Collingwood VIC 3066\nT 03 9526 9000",
      items: [
        "PO Box 1076, Collingwood VIC 3066",
        "Australia",
        "info@oragon.com",
        "ABN: 12345678912",
      ],
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Canberra Office",
      description:
        "Ground Floor, 2 Brindabella Circuit, Brindabella Business Park, Canberra Airport ACT 2609\nT 02 6109 6300",
      items: [
        "GPO Box 2093, Canberra ACT 2601",
        "Australia",
        "info@oragon.com",
        "ABN: 12345678912",
      ],
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Sydney Office",
      description:
        "Level 26, 44 Market Street, Sydney NSW 2000\nT 02 9089 8694",
      items: [
        "Australia",
        "info@oragon.com",
        "ABN: 12345678912",
      ],
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Brisbane Office",
      description:
        "Level 4, 80 Ann Street, Brisbane QLD 4000\nT 07 3112 5270",
      items: [
        "Australia",
        "info@oragon.com",
        "ABN: 12345678912",
      ],
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <BlurFade delay={0.25} inView>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Our Offices
            </h2>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
            <p className="mx-auto max-w-2xl text-lg tracking-tight text-muted-foreground md:text-xl">
              Our teams operate nationally to support government, institutions,
              and private sector research.
            </p>
            </BlurFade>
          </div>

          <BlurFade delay={0.25 * 2} inView>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="space-y-6 rounded-lg border border-border p-8 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted p-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>

                <p className="whitespace-pre-line leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default Location;

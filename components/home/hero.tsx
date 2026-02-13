"use client";

import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className={cn("py-32", className)}>
      
      <div className="container">
        <div className="z-10 mx-auto flex max-w-4xl flex-col items-center gap-14 text-center">
          <BlurFade delay={0.25} inView>
          <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg" alt="logo" className="h-14" />
          </BlurFade>
          <div>
            <BlurFade delay={0.25} inView>
            <h1 className="mb-4 text-3xl font-medium text-pretty lg:text-6xl">
              Research that drives decisions.
            </h1>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Oragon Lab delivers precise social and market insights. We turn 
              complex data into actionable strategy for government and enterprise.
            </p>
            </BlurFade>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
            <BlurFade delay={0.25 * 2} inView>
            <Link href="/contact" passHref>
              <Button size="lg" className="w-full sm:w-fit">
                <MessageSquare className="mr-2 h-4" />
                Discuss a Project
              </Button>
            </Link>
            </BlurFade>
            <div className="flex flex-col items-center gap-2 lg:items-start">
               <BlurFade delay={0.25 * 2} inView>
              <span className="inline-flex items-center -space-x-1">
                <Avatar className="size-7 border">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                    alt="placeholder"
                  />
                </Avatar>
                <Avatar className="size-7 border">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp"
                    alt="placeholder"
                  />
                </Avatar>
                <Avatar className="size-7 border">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp"
                    alt="placeholder"
                  />
                </Avatar>
                <Avatar className="size-7 border">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp"
                    alt="placeholder"
                  />
                </Avatar>
              </span>
              </BlurFade>
              <BlurFade delay={0.25 * 2} inView>
              <p className="text-xs text-muted-foreground">
                Trusted by 50+ Organizations
              </p>
              </BlurFade>
            </div>
          </div>
        </div>
         <BlurFade delay={0.25 * 2} inView>
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
          alt="placeholder"
          className="mx-auto mt-24 aspect-video max-h-[700px] w-full max-w-7xl rounded-t-lg object-cover shadow-md"
        />
        </BlurFade>
      </div>
    </section>
  );
};

export default Hero;

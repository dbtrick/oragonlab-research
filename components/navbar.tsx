"use client";


import { Book, Menu, Sunset, Trees, Zap, Building2, ShieldCheck, TrendingUp, Users,
  BarChart3,
  Database,
  BriefcaseBusiness, GraduationCap, BookOpenText, Newspaper, BookCheck   } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { usePathname } from "next/navigation";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    // src: string;
    // alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "https://oragonlab-research.vercel.app/",
    // src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    // alt: "logo",
    title: "ORAGON LAB RESEARCH",
  },
  menu = [
    // { title: "Home", url: "#" },
    {
  title: "Services",
  url: "#",
  items: [
    {
      title: "Qualitative Research",
      description: "In-depth interviews, focus groups, and behavioral insights.",
      icon: <Users className="size-5 shrink-0" />,
      url: "/services/qualitative-research",
    },
    {
      title: "Quantitative Research",
      description: "Surveys, statistical analysis, and large-scale data collection.",
      icon: <BarChart3 className="size-5 shrink-0" />,
      url: "/services/quantitative-research",
    },
    {
      title: "Data Analytics",
      description: "Advanced modeling, dashboards, and evidence-based reporting.",
      icon: <Database className="size-5 shrink-0" />,
      url: "/services/data-analytics",
    },
    {
      title: "Strategic Consulting",
      description: "Actionable insights to support planning and decision-making.",
      icon: <BriefcaseBusiness className="size-5 shrink-0" />,
      url: "/services/strategic-consulting",
    },
  ],
},

    {
  title: "Company",
  url: "#",
  items: [
    {
      title: "About Oragon",
      description: "Learn about our mission, values, and leadership.",
      icon: <Building2 className="size-5 shrink-0" />,
      url: "/company/about-oragon",
    },
    {
      title: "Standards & Ethics",
      description: "Our commitment to research quality, compliance, and integrity.",
      icon: <ShieldCheck className="size-5 shrink-0" />,
      url: "/company/standard-and-ethics",
    },
    {
      title: "Track Record",
      description: "Proven impact across government, NGOs, and private institutions.",
      icon: <TrendingUp className="size-5 shrink-0" />,
      url: "/company/track-record",
    },
    {
      title: "Careers", 
      description: "Join our team of researchers and data strategists.",
      icon: <GraduationCap className="size-5 shrink-0" />,
      url: "/company/careers",
    },
  ],
},

{
      title: "Insights",
      url: "/insights",
    },

 {
      title: "Sectors",
      url: "/sectors",
    },


  ],
  auth = {
    signup: { title: "Contact us", url: "/contact" },
  },
  className,
}: Navbar1Props) => {

  const pathname = usePathname();

  return (
        <section
      className={cn(
        "sticky top-0 z-50 w-full bg-background py-4 shadow-sm",
        className
      )}
    >

      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            {<a href={logo.url} className="flex items-center gap-2">
              {/* <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              /> */}
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>}
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item, pathname))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild size="sm">
              <a href={auth.signup.url}>{auth.signup.title}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
<div className="block lg:hidden">
  <div className="flex items-center justify-between">
    {/* Logo */}
    <a href={logo.url} className="flex items-center gap-2">
              {/* <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              /> */}
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{logo.title}</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 p-4">
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col gap-4"
          >
          
            {menu.map((item) => renderMobileMenuItem(item, pathname))}
          </Accordion>

          <div className="flex flex-col gap-3">
            <Button asChild>
              <a href={auth.signup.url}>{auth.signup.title}</a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  </div>
</div>

      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem, pathname: string) => {

const parentPath =
     item.title === "Services"
    ? "/services"
    : item.title === "Company"
    ? "/company"
    : item.url;
    
    

const active =
  pathname === parentPath ||
  pathname.startsWith(parentPath + "/") ||
  item.items?.some(
    (subItem) =>
      pathname === subItem.url ||
      pathname.startsWith(subItem.url + "/")
  );

  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        {/* We add the active class to the Trigger here */}
        <NavigationMenuTrigger className={cn(active && "text-primary")}>
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          <ul className="grid w-80 gap-3 p-4">
            {item.items.map((subItem) => (
              <NavigationMenuLink asChild key={subItem.title}>
                <SubMenuLink 
                  item={subItem} 
                  isActive={pathname === subItem.url} 
                />
              </NavigationMenuLink>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className={cn(
          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground",
          active && "text-primary" 
        )}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, pathname: string) => {
  const isChildActive = item.items?.some((subItem) => pathname === subItem.url);
  
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className={cn(
          "text-md py-0 font-semibold hover:no-underline",
          isChildActive && "text-primary"
        )}>
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink 
              key={subItem.title} 
              item={subItem} 
              isActive={pathname === subItem.url} 
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  const isActive = item.url === pathname;

  return (
    <a
      key={item.title}
      href={item.url}
      className={cn("text-md font-semibold", isActive && "text-primary")} 
    >
      {item.title}
    </a>
  );
};

const SubMenuLink = ({
  item,
  isActive,
}: {
  item: MenuItem;
  isActive?: boolean;
}) => {
  return (
    <a
      className={cn(
        "flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:text-accent-foreground",
        isActive && "text-primary"
      )}
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
        )}
      </div>
    </a>
  );
};

export default Navbar;


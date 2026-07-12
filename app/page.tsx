import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Programs } from "@/components/sections/programs";
import { Events } from "@/components/sections/events";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <About />
        <Programs />
        <Events />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

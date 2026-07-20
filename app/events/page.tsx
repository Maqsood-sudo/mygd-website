import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = { title: "Events | MYGD" };

export default function EventsPage() {
  return (
    <PlaceholderPage
      eyebrow="Events"
      title="Events"
      description="The full events calendar is being built out here. Check back soon, or reach out below to hear about what's coming next."
      icon={CalendarDays}
    />
  );
}

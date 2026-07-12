import type { Metadata } from "next";
import { Users } from "lucide-react";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = { title: "Brothers' Events — MYGD" };

export default function BrothersEventsPage() {
  return (
    <PlaceholderPage
      eyebrow="Events"
      title="Brothers' Events"
      description="The full brothers' events calendar is being built out here. Check back soon, or reach out below to hear about what's coming next."
      icon={Users}
    />
  );
}

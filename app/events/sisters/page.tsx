import type { Metadata } from "next";
import { HandHeart } from "lucide-react";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = { title: "Sisters' Events — MYGD" };

export default function SistersEventsPage() {
  return (
    <PlaceholderPage
      eyebrow="Events"
      title="Sisters' Events"
      description="The full sisters' events calendar is being built out here. Check back soon, or reach out below to hear about what's coming next."
      icon={HandHeart}
    />
  );
}

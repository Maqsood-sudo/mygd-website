import type { Metadata } from "next";
import { Flower2 } from "lucide-react";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = { title: "Sisters | MYGD" };

export default function SistersPage() {
  return (
    <PlaceholderPage
      eyebrow="Sisters"
      title="Sisters"
      description="This page is being built out. Check back soon, or reach out below in the meantime."
      icon={Flower2}
    />
  );
}

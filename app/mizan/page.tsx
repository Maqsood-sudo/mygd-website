import type { Metadata } from "next";
import { Scale } from "lucide-react";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = { title: "Mizan | MYGD" };

export default function MizanPage() {
  return (
    <PlaceholderPage
      eyebrow="Mizan"
      title="Mizan"
      description="This page is being built out. Check back soon, or reach out below in the meantime."
      icon={Scale}
    />
  );
}

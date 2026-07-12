import type { Metadata } from "next";
import { Shirt } from "lucide-react";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = { title: "Merch — MYGD" };

export default function MerchPage() {
  return (
    <PlaceholderPage
      eyebrow="Merch"
      title="MYGD Merch"
      description="Our merch store is on the way. Check back soon, or reach out below if you want early access."
      icon={Shirt}
    />
  );
}

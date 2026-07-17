import type { Metadata } from "next";
import { Shirt } from "lucide-react";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = { title: "Shop — MYGD" };

export default function ShopPage() {
  return (
    <PlaceholderPage
      eyebrow="Shop"
      title="MYGD Shop"
      description="Our shop is on the way. Check back soon, or reach out below if you want early access."
      icon={Shirt}
    />
  );
}

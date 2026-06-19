import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { TalksCarousel } from "@/components/home/TalksCarousel";
import { PhotoWall } from "@/components/home/PhotoWall";
import { WhatIsTedx } from "@/components/home/WhatIsTedx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TEDxCongaree Vista — Ideas, people & stories from Columbia" },
      { name: "description", content: "A community-run TEDx event in Columbia, South Carolina." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TalksCarousel />
      <PhotoWall />
      <WhatIsTedx />
    </>
  );
}

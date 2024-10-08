import InfoCard from "@/components/infoCard";
import UnsplashImage from "@/components/unsplashImage";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Dynamic fetching - Next Gallery",
};

export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <div className="flex flex-col  px-5 content-center justify-center items-center pt-10">
      <InfoCard>
        This page fetches data dynamically. Every time you refresh the page, you
        get a new image from the Unsplash API.
      </InfoCard>
      <Suspense fallback="Loading...">
        <UnsplashImage fetchTypeOption={"dynamic"} />
      </Suspense>
    </div>
  );
}

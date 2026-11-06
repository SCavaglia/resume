import { AppLayout } from "@/components/layouts/app-layout";
import { Demos } from "@/components/sections/demos";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <AppLayout>
        <Hero />
        <Demos />
      </AppLayout>
    </>
  );
}

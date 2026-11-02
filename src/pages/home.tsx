import { AppLayout } from "@/components/layouts/app-layout";
import Demos from "@/components/sections/demos";
import { Hero } from "@/components/sections/hero";

function Home() {
  return (
    <>
      <AppLayout>
        <Hero />
        <Demos />
      </AppLayout>
    </>
  );
}

export default Home;

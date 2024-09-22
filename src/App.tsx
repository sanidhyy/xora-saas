import { Download } from "./sections/Download";
import { Faq } from "./sections/Faq";
import { Features } from "./sections/Features";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Pricing } from "./sections/Pricing";
import { Testimonials } from "./sections/Testimonials";

export const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />

      <Hero />

      <Features />

      <Pricing />

      <Faq />

      <Testimonials />

      <Download />
    </main>
  );
};

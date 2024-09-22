import { Features } from "./sections/Features";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";

export const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />

      <Hero />

      <Features />
    </main>
  );
};

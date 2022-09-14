import {
  Header,
  Hero,
  Services,
  Testimonials,
  Gallery,
  Footer,
} from './components';

export const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Services />
      <Testimonials />
      <Gallery />
    </main>
    <Footer />
  </>
);

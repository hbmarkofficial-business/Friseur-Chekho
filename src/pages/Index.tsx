import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Bonn | Friseur Chekho</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Friseur Chekho in Bonn für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bonn"
        />
        <link rel="canonical" href="https://friseur-chekho.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Friseur Chekho | Premium Barbershop Bonn" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Bonn."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://friseur-chekho.de" />
        <meta property="og:image" content="https://friseur-chekho.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Friseur Chekho | Premium Barbershop Bonn" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://friseur-chekho.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Friseur Chekho",
            "image": "https://friseur-chekho.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Oppenhoffstraße 24",
              "addressLocality": "Bonn",
              "postalCode": "53111",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.7374",
              "longitude": "7.0982"
            },
            "url": "https://friseur-chekho.de",
            "telephone": "+49 1573 9050168",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-18:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/friseurchekho",
              "https://www.instagram.com/friseurchekho"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

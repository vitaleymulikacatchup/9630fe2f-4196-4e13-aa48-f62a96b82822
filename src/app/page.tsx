"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

const assetMap = [
  {"id":"hero-hero","url":"https://images.pexels.com/photos/34326374/pexels-photo-34326374.png?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a hand holding a coffee cup beside a laptop on a desk, indoors."},
  {"id":"about-image","url":"https://images.pexels.com/photos/6567816/pexels-photo-6567816.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Business professionals discussing interior design samples during a project meeting."},
  {"id":"feature-1","url":"https://images.pexels.com/photos/6373088/pexels-photo-6373088.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A close-up of a hand holding a smartphone with a blank white screen, ideal for digital mockups."},
  {"id":"feature-2","url":"https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Sleek modern solar panels under a vibrant blue sky with clouds, symbolizing clean energy."},
  {"id":"feature-3","url":"https://images.pexels.com/photos/8438940/pexels-photo-8438940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A woman plays chess with a robotic arm, illustrating technology and strategy in a modern context."},
  {"id":"product-1","url":"https://images.pexels.com/photos/13871187/pexels-photo-13871187.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a luxurious DXRacer gaming chair, highlighting its white and brown design and comfortable padding."},
  {"id":"product-2","url":"https://images.pexels.com/photos/939331/pexels-photo-939331.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Bright modern workspace with laptop, potted plants, and desk lamp near a window."},
  {"id":"product-3","url":"https://images.pexels.com/photos/7862496/pexels-photo-7862496.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A close-up view of an RGB backlit gaming keyboard with a vibrant purple glow, perfect for tech and gaming enthusiasts."}
];

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Services", id: "feature" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="Webild"
          />
        </div>
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Webild"
            description="Create your dream website effortlessly."
            imageSrc={assetMap.find(a => a.id === "hero-hero")?.url ?? "/public/images/placeholder.webp"}
            imageAlt={assetMap.find(a => a.id === "hero-hero")?.alt ?? "Close-up of a hand holding a coffee cup beside a laptop on a desk, indoors."}
            buttons={[
              { text: "Get Started", href: "about" },
              { text: "Learn More", href: "feature" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="We build digital solutions that make a difference."
            buttons={[
              { text: "Discover Our Story", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            title="Our Features"
            description="Explore the capabilities that set us apart."
            features={[
              {
                title: "Digital Marketing",
                description: "Innovative strategies to boost your presence.",
                imageSrc: assetMap.find(a => a.id === "feature-1")?.url ?? "/public/images/placeholder.webp",
                imageAlt: assetMap.find(a => a.id === "feature-1")?.alt ?? "A close-up of a hand holding a smartphone with a blank white screen, ideal for digital mockups."
              },
              {
                title: "Cloud Solutions",
                description: "Scalable and secure cloud services.",
                imageSrc: assetMap.find(a => a.id === "feature-2")?.url ?? "/public/images/placeholder.webp",
                imageAlt: assetMap.find(a => a.id === "feature-2")?.alt ?? "Sleek modern solar panels under a vibrant blue sky with clouds, symbolizing clean energy."
              },
              {
                title: "Innovation",
                description: "Continuous improvement through technology.",
                imageSrc: assetMap.find(a => a.id === "feature-3")?.url ?? "/public/images/placeholder.webp",
                imageAlt: assetMap.find(a => a.id === "feature-3")?.alt ?? "A woman plays chess with a robotic arm, illustrating technology and strategy in a modern context."
              }
            ]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            title="Our Products"
            description="High-quality items curated for your needs."
            products={[
              {
                id: "1",
                brand: "Comfort Furn",
                name: "Office Chair",
                price: "$199",
                rating: 5,
                reviewCount: "1200",
                imageSrc: assetMap.find(a => a.id === "product-1")?.url ?? "/public/images/placeholder.webp",
                imageAlt: assetMap.find(a => a.id === "product-1")?.alt ?? "Close-up of a luxurious DXRacer gaming chair, highlighting its white and brown design and comfortable padding."
              },
              {
                id: "2",
                brand: "Bright Lamp",
                name: "Desk Lamp",
                price: "$49",
                rating: 4,
                reviewCount: "800",
                imageSrc: assetMap.find(a => a.id === "product-2")?.url ?? "/public/images/placeholder.webp",
                imageAlt: assetMap.find(a => a.id === "product-2")?.alt ?? "Bright modern workspace with laptop, potted plants, and desk lamp near a window."
              },
              {
                id: "3",
                brand: "KeyTech",
                name: "Keyboard",
                price: "$99",
                rating: 4,
                reviewCount: "950",
                imageSrc: assetMap.find(a => a.id === "product-3")?.url ?? "/public/images/placeholder.webp",
                imageAlt: assetMap.find(a => a.id === "product-3")?.alt ?? "A close-up view of an RGB backlit gaming keyboard with a vibrant purple glow, perfect for tech and gaming enthusiasts."
              }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Stay Connected"
            title="Join Our Newsletter"
            description="Be the first to receive the latest updates and offers."
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
            imageAlt={assetMap.find(a => a.id === "about-image")?.alt ?? "Business professionals discussing interior design samples during a project meeting."}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              {
                title: "Company",
                items: [
                  { label: "About", href: "about" },
                  { label: "Careers", href: "https://example.com/careers" }
                ]
              },
              {
                title: "Resources",
                items: [
                  { label: "Blog", href: "blog" },
                  { label: "Support", href: "https://example.com/support" }
                ]
              }
            ]}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
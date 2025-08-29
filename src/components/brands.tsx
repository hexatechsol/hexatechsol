import Image from "next/image";

const brands = [
  {
    name: "Brand A",
    logo: "/1.jpg",
    hint: "tech logo",
  },
  {
    name: "Brand B",
    logo: "/2.jpg",
    hint: "energy logo",
  },
  {
    name: "Brand C",
    logo: "/3.jpg",
    hint: "security logo",
  },
  {
    name: "Brand D",
    logo: "/4.jpg",
    hint: "solar logo",
  },
  {
    name: "Brand E",
    logo: "/5.jpg",
    hint: "camera logo",
  },
  {
    name: "Brand F",
    logo: "/6.jpg",
    hint: "tech company",
  },
];

export default function BrandsSection() {
  return (
    <section id="brands" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Trusted Partners
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            We work with the best brands in the industry to deliver quality and reliability.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {brands.map((brand, index) => (
            <div key={index} className="relative h-16 w-36 transition-transform duration-300 hover:scale-110">
              <Image
                src={brand.logo}
                alt={brand.name}
                data-ai-hint={brand.hint}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

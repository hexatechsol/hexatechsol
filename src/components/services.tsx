import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sun, Camera } from "lucide-react";

const services = [
  {
    icon: <Sun className="h-10 w-10 text-primary" />,
    title: "Solar Fitting",
    description: "Harness the power of the sun with our top-tier solar panel installation services. We provide custom solutions to reduce your carbon footprint and save on energy bills.",
  },
  {
    icon: <Camera className="h-10 w-10 text-primary" />,
    title: "CCTV Installation",
    description: "Protect what matters most with our advanced CCTV systems. We offer comprehensive security camera solutions for residential and commercial properties.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Premier Tech Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            We deliver cutting-edge technology with professional installation and
            unparalleled support.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  {service.icon}
                  <div className="grid gap-1">
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                 <CardDescription className="text-center">
                      {service.description}
                  </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

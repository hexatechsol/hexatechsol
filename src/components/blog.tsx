import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    category: "Hybrid Solar",
    title: "What is Hybrid Solar System?",
    excerpt: "Hybrid solar systems are like the Swiss Army knives of solar energy—they combine the best features of both grid-tied and off-grid setups to give you flexibility, reliability, and energy independence.",
    image: {
      src: "./hybrid.jpg",
      hint: "solar panels guide",
    },
    link: "#",
  },
  {
    category: "On Grid",
    title: "What is On Grid Solar system?",
    excerpt: "An on-grid solar system—also called a grid-tied or grid-connected system—is the most common type of solar setup used in homes and businesses. It’s designed to work in sync with your local electricity grid, offering a smart way to reduce your energy bills without needing batteries",
    image: {
      src: "./ongrid.jpg",
      hint: "cctv placement strategy",
    },
    link: "#",
  },
  {
    category: "Analog Cameras",
    title: "What is Analog CCTV camera?",
    excerpt: "An analog CCTV camera is a classic type of surveillance camera that captures video and transmits it as an analog signal over coaxial cables to a Digital Video Recorder (DVR). It’s the old-school backbone of many security systems—simple, reliable, and still widely used today",
    image: {
      src: "./analog.jpg",
      hint: "smart home technology",
    },
    link: "#",
  },
  {
    category: "Tech Insights",
    title: "What is IP CCTV camera?",
    excerpt: "An IP camera (Internet Protocol camera) is a modern digital surveillance device that sends and receives video data over a network—either a local area network (LAN) or the internet 🌐📸. Unlike analog CCTV cameras, they don’t need a direct connection to a DVR. They’re smarter, sharper, and more flexible.",
    image: {
      src: "./ip.jpg",
      hint: "smart home technology",
    },
    link: "#",
  },
  {
    category: "Tech Insights",
    title: "What is Wifi CCTV Camera?",
    excerpt: "A Wi-Fi camera—also known as a wireless CCTV camera—is a smart surveillance device that connects to your home or office network using Wi-Fi, allowing you to monitor your space without the hassle of long cables 📶📷. It’s perfect for flexible setups, remote viewing, and modern security needs.",
    image: {
      src: "./wifi.jpg",
      hint: "smart home technology",
    },
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Stay updated with the latest in solar and security technology.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="relative h-56 w-full">
                  <img
                    src={post.image.src}
                    alt={post.title}
                    data-ai-hint={post.image.hint}

                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                 <Badge variant="default" className="mb-2 bg-accent text-accent-foreground hover:bg-accent/90">{post.category}</Badge>
                 <CardTitle className="mb-2 text-xl">{post.title}</CardTitle>
                 <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

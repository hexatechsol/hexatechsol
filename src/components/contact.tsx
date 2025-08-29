import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
    {
        icon: <Mail className="h-6 w-6 text-primary" />,
        title: "Email",
        value: "hexatectsolutions.online@gmail.com",
        href: "mailto:hexatectsolutions.online@gmail.com"
    },
    {
        icon: <Phone className="h-6 w-6 text-primary" />,
        title: "Phone",
        value: "+923711376983",
        href: "tel:+923711376983"
    },
    {
        icon: <MapPin className="h-6 w-6 text-primary" />,
        title: "Address",
        value: "plot # 6/3 sheet # 21, Model Colony, Karachi. ",
    }
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Have a question or ready to start a project? We'd love to hear
            from you.
          </p>
        </div>
        <div className="max-w-lg mx-auto">
            <div className="flex flex-col gap-8">
                {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                            {info.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">{info.title}</h3>
                            {info.href ? (
                                <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">{info.value}</a>
                            ) : (
                                <p className="text-muted-foreground">{info.value}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

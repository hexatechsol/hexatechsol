
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <a 
      href="https://www.facebook.com/profile.php?id=61580089133967" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
      </a>
    )
  }
  
  
  function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <a 
      href="https://www.instagram.com/hexa_.tech/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
      </a>
    )
  }
  
  
  function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <a 
      href="https://wa.me/923711376983?text=Hello%20I%20want%20to%20know%20about%20your%20services" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <svg 
          {...props}
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24"
      >
          <path 
              fill="currentColor"
              d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91c0-5.46-4.45-9.91-9.91-9.91zM12.04 20.15h-.01c-1.55 0-3.07-.42-4.4-1.21l-.31-.18l-3.26.86l.88-3.18l-.2-.33c-.87-1.45-1.32-3.12-1.32-4.82c0-4.47 3.64-8.11 8.11-8.11c4.47 0 8.11 3.64 8.11 8.11c0 4.47-3.64 8.11-8.11 8.11zm4.5-6.1c-.25-.12-1.47-.72-1.7-.8c-.22-.08-.38-.12-.54.12c-.16.25-.64.8-.79.96c-.14.16-.29.18-.54.06c-.25-.12-1.06-.39-2.02-1.25c-.75-.66-1.26-1.48-1.4-1.73c-.14-.25-.01-.38.11-.5c.11-.11.25-.29.37-.43s.16-.25.25-.41c.08-.16.04-.3-.02-.42c-.06-.12-.54-1.3-.74-1.78c-.2-.48-.4-.42-.54-.42c-.14 0-.3 0-.46.01c-.16 0-.42.06-.64.3c-.22.25-.86.84-.86 2.04c0 1.2.88 2.36 1 2.52c.12.16 1.73 2.63 4.2 3.7c.59.25 1.05.4 1.41.51c.59.18 1.13.16 1.56.1c.48-.07.86-.35 1.18-.68c.32-.33.32-.61.22-.68c-.1-.07-.25-.12-.5-.24z"
          />
      </svg>
    </a>
    )
  }

  const AnimatedText = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);
  
    const textToType = "Use Our AI Advisor For Planning Your Project";
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, typingSpeed);
  
      return () => {
        clearInterval(ticker);
      };
    }, [text, typingSpeed]);
  
    const tick = () => {
      let fullText = textToType;
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setTypingSpeed(prevSpeed => prevSpeed / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setTypingSpeed(2000); // Pause before deleting
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100);
      }
    };
  
    return (
      <p className="max-w-3xl text-lg text-white md:text-xl">
        {text}
        <span className="animate-ping">|</span>
      </p>
    );
  };

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <img
          src="./solar.jpg"
          alt="Modern home with solar panels"
          data-ai-hint="modern architecture home"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background to-transparent backdrop-blur-sm" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6 p-4">
        <div>
            <h1 className="text-4xl font-bold tracking-tighter text-white md:text-6xl lg:text-7xl">
            Powering Your Future
            </h1>
            <h1 className="text-4xl font-bold tracking-tighter text-white md:text-6xl lg:text-7xl">
            Securing Your Present
            </h1>
        </div>
        <AnimatedText />

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#services">Explore Services</Link>
          </Button>
        </div>
        <div className="flex items-center gap-4 mt-4">
            <a href="#" aria-label="Instagram" className="text-white hover:text-primary transition-colors">
                <InstagramIcon className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Facebook" className="text-white hover:text-primary transition-colors">
                <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="#" aria-label="WhatsApp" className="text-white hover:text-primary transition-colors">
                <WhatsAppIcon className="h-6 w-6" />
            </a>
        </div>
      </div>
    </section>
  );
}

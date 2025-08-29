import Link from "next/link";
import { Hexagon } from "lucide-react";

export const Logo = () => (
  <Link href="/" className="flex items-center gap-2" aria-label="HexaTech Home">
    <Hexagon className="h-7 w-7 text-primary" />
    <span className="text-xl font-bold tracking-tight text-foreground">
      HexaTech
    </span>
  </Link>
);

import { Logo } from "@/components/logo";

export default function Footer() {
  return (
    <footer className="bg-black border-t">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <img src="./hexalogo.png" alt="Hexatech Logo" className="h-10 w-auto"/>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HexaTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

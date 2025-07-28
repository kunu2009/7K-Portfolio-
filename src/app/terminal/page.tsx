import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Terminal, ArrowLeft } from "lucide-react";

export default function TerminalPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center text-center p-8 bg-background">
       <Terminal className="h-24 w-24 text-primary mb-8 animate-pulse" />
       <h1 className="font-headline text-5xl font-bold mb-4">The Terminal</h1>
       <p className="text-xl text-muted-foreground mb-8 max-w-lg">
         This interactive, command-line portfolio is currently under construction. Check back soon.
       </p>
       <Button asChild>
         <Link href="/">
           <ArrowLeft className="mr-2 h-4 w-4" />
           Back to Selection
         </Link>
       </Button>
    </div>
  )
}

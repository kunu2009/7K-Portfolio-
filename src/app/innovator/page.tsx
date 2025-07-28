import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Telescope, ArrowLeft } from "lucide-react";

export default function InnovatorPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center text-center p-8 bg-background">
       <Telescope className="h-24 w-24 text-primary mb-8 animate-pulse" />
       <h1 className="font-headline text-5xl font-bold mb-4">The Innovator</h1>
       <p className="text-xl text-muted-foreground mb-8 max-w-lg">
         This experimental view is currently under construction. Check back soon for a non-linear, interactive way to explore the 7K Ecosystem.
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

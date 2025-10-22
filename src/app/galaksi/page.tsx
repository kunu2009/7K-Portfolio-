"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";
import GalaksiStyle1 from "./style-1";
import GalaksiStyle2 from "./style-2";
import GalaksiStyle3 from "./style-3";

const styles = [
  { id: 1, name: "Solar System", component: GalaksiStyle1 },
  { id: 2, name: "Planet Explorer", component: GalaksiStyle2 },
  { id: 3, name: "Cosmic Journey", component: GalaksiStyle3 },
];

export default function GalaksiPage() {
  const [activeStyle, setActiveStyle] = useState(1);
  const StyleComponent = styles.find(s => s.id === activeStyle)?.component || GalaksiStyle1;

  return (
    <div className="relative">
      {/* Style Switcher - Floating */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 bg-background/80 backdrop-blur-lg border border-border rounded-lg p-3 shadow-xl">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
          <Layers className="h-3.5 w-3.5" />
          <span>Galaxy Style</span>
        </div>
        {styles.map((style) => (
          <Button
            key={style.id}
            variant={activeStyle === style.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveStyle(style.id)}
            className="text-xs w-full"
          >
            {style.name}
          </Button>
        ))}
      </div>

      <StyleComponent />
    </div>
  );
}

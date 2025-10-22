"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";
import ArcadeStyle1 from "./style-1";
import ArcadeStyle2 from "./style-2";
import ArcadeStyle3 from "./style-3";

const styles = [
  { id: 1, name: "Retro Stats", component: ArcadeStyle1 },
  { id: 2, name: "Cabinet", component: ArcadeStyle2 },
  { id: 3, name: "Battle Select", component: ArcadeStyle3 },
];

export default function ArcadePage() {
  const [activeStyle, setActiveStyle] = useState(1);
  const StyleComponent = styles.find(s => s.id === activeStyle)?.component || ArcadeStyle1;

  return (
    <div className="relative">
      {/* Style Switcher - Floating */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 bg-background/80 backdrop-blur-lg border border-border rounded-lg p-3 shadow-xl">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
          <Layers className="h-3.5 w-3.5" />
          <span>Arcade Style</span>
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

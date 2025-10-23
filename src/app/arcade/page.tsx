"use client";

import { useState } from "react";
import { CollapsibleStyleSwitcher } from "@/components/collapsible-style-switcher";
import { BackToPortfolioButton } from "@/components/back-to-portfolio-button";
import ArcadeStyle1 from "./style-1";
import ArcadeStyle2 from "./style-2";
import ArcadeStyle3 from "./style-3";
import ArcadeStyle4 from "./style-4";
import ArcadeStyle5 from "./style-5";
import ArcadeStyle6 from "./style-6";
import ArcadeStyle7 from "./style-7";
import ArcadeStyle8 from "./style-8";

const styles = [
  { id: 1, name: "Bounce Game", component: ArcadeStyle1 },
  { id: 2, name: "Retro Stats", component: ArcadeStyle2 },
  { id: 3, name: "Cabinet", component: ArcadeStyle3 },
  { id: 4, name: "Battle Select", component: ArcadeStyle4 },
  { id: 5, name: "🐍 Snake", component: ArcadeStyle5 },
  { id: 6, name: "🎮 Tetris", component: ArcadeStyle6 },
  { id: 7, name: "🧠 Memory Match", component: ArcadeStyle7 },
  { id: 8, name: "🤖 Stan AI", component: ArcadeStyle8 },
];

export default function ArcadePage() {
  const [activeStyle, setActiveStyle] = useState(1);
  const StyleComponent = styles.find(s => s.id === activeStyle)?.component || ArcadeStyle1;

  return (
    <div className="relative">
      <BackToPortfolioButton position="top-left" />
      <CollapsibleStyleSwitcher
        currentStyle={activeStyle}
        onStyleChange={setActiveStyle}
        totalStyles={styles.length}
        position="top-right"
      />
      <StyleComponent />
    </div>
  );
}

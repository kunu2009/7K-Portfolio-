"use client";

import { useState } from "react";
import { CollapsibleStyleSwitcher } from "@/components/collapsible-style-switcher";
import ArcadeStyle1 from "./style-1";
import ArcadeStyle2 from "./style-2";
import ArcadeStyle3 from "./style-3";
import ArcadeStyle4 from "./style-4";

const styles = [
  { id: 1, name: "Bounce Game (Original)", component: ArcadeStyle1 },
  { id: 2, name: "Retro Stats", component: ArcadeStyle2 },
  { id: 3, name: "Cabinet", component: ArcadeStyle3 },
  { id: 4, name: "Battle Select", component: ArcadeStyle4 },
];

export default function ArcadePage() {
  const [activeStyle, setActiveStyle] = useState(1);
  const StyleComponent = styles.find(s => s.id === activeStyle)?.component || ArcadeStyle1;

  return (
    <div className="relative">
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

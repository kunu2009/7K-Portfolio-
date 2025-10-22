"use client";

import { useState } from "react";
import { CollapsibleStyleSwitcher } from "@/components/collapsible-style-switcher";
import SliderStyle1 from "./style-1";
import SliderStyle2 from "./style-2";
import SliderStyle3 from "./style-3";

const styles = [
  { id: 1, name: "Gradient", component: SliderStyle1 },
  { id: 2, name: "Horizontal", component: SliderStyle2 },
  { id: 3, name: "Auto-Play", component: SliderStyle3 },
];

export default function SliderPage() {
  const [activeStyle, setActiveStyle] = useState(1);
  const StyleComponent = styles.find(s => s.id === activeStyle)?.component || SliderStyle1;

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

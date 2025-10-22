"use client";

import { useState } from "react";
import { CollapsibleStyleSwitcher } from "@/components/collapsible-style-switcher";
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

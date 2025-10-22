"use client";

import { useState } from "react";
import { CollapsibleStyleSwitcher } from "@/components/collapsible-style-switcher";
import { BackToPortfolioButton } from "@/components/back-to-portfolio-button";
import GalaksiStyle1 from "./style-1";
import GalaksiStyle2 from "./style-2";
import GalaksiStyle3 from "./style-3";
import GalaksiStyle4 from "./style-4";

const styles = [
  { id: 1, name: "Explorer (Original)", component: GalaksiStyle1 },
  { id: 2, name: "Solar System", component: GalaksiStyle2 },
  { id: 3, name: "Planet Explorer", component: GalaksiStyle3 },
  { id: 4, name: "Cosmic Journey", component: GalaksiStyle4 },
];

export default function GalaksiPage() {
  const [activeStyle, setActiveStyle] = useState(1);
  const StyleComponent = styles.find(s => s.id === activeStyle)?.component || GalaksiStyle1;

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

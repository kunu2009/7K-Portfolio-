"use client";

import { useState } from "react";
import { CollapsibleStyleSwitcher } from "@/components/collapsible-style-switcher";
import PortfolioCardStyle1 from "./style-1";
import PortfolioCardStyle2 from "./style-2";
import PortfolioCardStyle3 from "./style-3";

const styles = [
  { id: 1, name: "Professional", component: PortfolioCardStyle1 },
  { id: 2, name: "Creative", component: PortfolioCardStyle2 },
  { id: 3, name: "Minimal", component: PortfolioCardStyle3 },
];

export default function PortfolioCardPage() {
  const [activeStyle, setActiveStyle] = useState(1);
  const StyleComponent = styles.find(s => s.id === activeStyle)?.component || PortfolioCardStyle1;

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

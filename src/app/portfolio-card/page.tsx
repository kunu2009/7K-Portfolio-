"use client";

import { useState } from "react";
import { CollapsibleStyleSwitcher } from "@/components/collapsible-style-switcher";
import PortfolioCardStyle1 from "./style-1";
import PortfolioCardStyle2 from "./style-2";
import PortfolioCardStyle3 from "./style-3";
import PortfolioCardStyle4 from "./style-4";

const styles = [
  { id: 1, name: "Card (Original)", component: PortfolioCardStyle1 },
  { id: 2, name: "Professional", component: PortfolioCardStyle2 },
  { id: 3, name: "Creative", component: PortfolioCardStyle3 },
  { id: 4, name: "Minimal", component: PortfolioCardStyle4 },
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

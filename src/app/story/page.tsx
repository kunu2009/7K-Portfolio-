"use client";

import { useState } from "react";
import { CollapsibleStyleSwitcher } from "@/components/collapsible-style-switcher";
import { BackToPortfolioButton } from "@/components/back-to-portfolio-button";
import StoryStyle1 from "./style-1";
import StoryStyle2 from "./style-2";
import StoryStyle3 from "./style-3";
import StoryStyle4 from "./style-4";

const styles = [
  { id: 1, name: "Book (Original)", component: StoryStyle1 },
  { id: 2, name: "Instagram", component: StoryStyle2 },
  { id: 3, name: "Magazine", component: StoryStyle3 },
  { id: 4, name: "Timeline", component: StoryStyle4 },
];

export default function StoryPage() {
  const [activeStyle, setActiveStyle] = useState(1);
  const StyleComponent = styles.find(s => s.id === activeStyle)?.component || StoryStyle1;

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

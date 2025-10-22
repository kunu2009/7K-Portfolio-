"use client";

import { useState } from "react";
import { CollapsibleStyleSwitcher } from "@/components/collapsible-style-switcher";
import StoryStyle1 from "./style-1";
import StoryStyle2 from "./style-2";
import StoryStyle3 from "./style-3";

const styles = [
  { id: 1, name: "Instagram", component: StoryStyle1 },
  { id: 2, name: "Book", component: StoryStyle2 },
  { id: 3, name: "Timeline", component: StoryStyle3 },
];

export default function StoryPage() {
  const [activeStyle, setActiveStyle] = useState(1);
  const StyleComponent = styles.find(s => s.id === activeStyle)?.component || StoryStyle1;

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

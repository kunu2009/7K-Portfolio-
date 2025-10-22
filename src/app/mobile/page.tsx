"use client";

import { useState } from "react";
import { CollapsibleStyleSwitcher } from "@/components/collapsible-style-switcher";
import MobileStyle1 from "./style-1";
import MobileStyle2 from "./style-2";
import MobileStyle3 from "./style-3";

const styles = [
  { id: 1, name: "iOS", component: MobileStyle1 },
  { id: 2, name: "Android", component: MobileStyle2 },
  { id: 3, name: "Minimal", component: MobileStyle3 },
];

export default function MobileShellPage() {
  const [activeStyle, setActiveStyle] = useState(1);
  const StyleComponent = styles.find(s => s.id === activeStyle)?.component || MobileStyle1;

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

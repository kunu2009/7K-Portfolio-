"use client";

import { useState } from "react";
import { CollapsibleStyleSwitcher } from "@/components/collapsible-style-switcher";
import TerminalStyle1 from "./style-1";
import TerminalStyle2 from "./style-2";
import TerminalStyle3 from "./style-3";
import TerminalStyle4 from "./style-4";

const styles = [
  { id: 1, name: "Classic (Original)", component: TerminalStyle1 },
  { id: 2, name: "Classic Alt", component: TerminalStyle2 },
  { id: 3, name: "Cyberpunk", component: TerminalStyle3 },
  { id: 4, name: "Matrix", component: TerminalStyle4 },
];

export default function TerminalPage() {
  const [activeStyle, setActiveStyle] = useState(1);
  const StyleComponent = styles.find(s => s.id === activeStyle)?.component || TerminalStyle1;

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

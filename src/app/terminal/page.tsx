"use client";

import { useState } from "react";
import { CollapsibleStyleSwitcher } from "@/components/collapsible-style-switcher";
import TerminalStyle1 from "./style-1";
import TerminalStyle2 from "./style-2";
import TerminalStyle3 from "./style-3";

const styles = [
  { id: 1, name: "Classic", component: TerminalStyle1 },
  { id: 2, name: "Cyberpunk", component: TerminalStyle2 },
  { id: 3, name: "Matrix", component: TerminalStyle3 },
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

import { usesCustomWindowControls } from "@/lib/platform";
import { WindowControls } from "./WindowControls";
import "./TitleBar.css";

/** Draggable strip at the top of the content column. Double-click toggles maximize. */
export function TitleBar() {
  return (
    <div className="titlebar" data-tauri-drag-region>
      {usesCustomWindowControls() && <WindowControls />}
    </div>
  );
}

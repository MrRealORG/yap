import { getCurrentWindow } from "@tauri-apps/api/window";
import { useEffect, useState } from "react";

/** Tracks whether the current Tauri window is maximized. */
export function useWindowMaximized(): boolean {
  const [maximized, setMaximized] = useState(false);

  useEffect(() => {
    const appWindow = getCurrentWindow();
    let disposed = false;

    const sync = () =>
      appWindow.isMaximized().then((value) => {
        if (!disposed) setMaximized(value);
      });

    sync();
    const unlisten = appWindow.onResized(sync);

    return () => {
      disposed = true;
      unlisten.then((stop) => stop());
    };
  }, []);

  return maximized;
}

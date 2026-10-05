import { isTauri } from "@tauri-apps/api/core";

export type Platform = "macos" | "windows" | "linux";

export function getPlatform(): Platform {
  const ua = navigator.userAgent;
  if (/Mac/i.test(ua)) return "macos";
  if (/Win/i.test(ua)) return "windows";
  return "linux";
}

/** True when the app draws its own window buttons (Windows/Linux inside Tauri). */
export function usesCustomWindowControls(): boolean {
  return isTauri() && getPlatform() !== "macos";
}

/**
 * Marks the document with the current platform and, inside the Tauri window,
 * native translucency (Acrylic on Windows, vibrancy on macOS). Styles use these
 * to let the desktop show through and to make room for macOS traffic lights.
 */
export function applyPlatformAttributes() {
  const root = document.documentElement;
  root.dataset.platform = getPlatform();

  if (isTauri()) {
    root.dataset.vibrancy = "native";
  }
}

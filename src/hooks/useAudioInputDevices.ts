import { useEffect, useState } from "react";

export interface AudioInputDevice {
  id: string;
  label: string;
}

/**
 * Lists microphones the system exposes, updating when devices are plugged in or
 * removed. Labels are only available once microphone access has been granted,
 * so unlabeled devices are skipped until then.
 */
export function useAudioInputDevices(): AudioInputDevice[] {
  const [devices, setDevices] = useState<AudioInputDevice[]>([]);

  useEffect(() => {
    const mediaDevices = navigator.mediaDevices;
    if (!mediaDevices?.enumerateDevices) return;

    let disposed = false;

    const refresh = async () => {
      const all = await mediaDevices.enumerateDevices();
      if (disposed) return;
      setDevices(
        all
          .filter((d) => d.kind === "audioinput" && d.label && d.deviceId !== "default")
          .map((d) => ({ id: d.deviceId, label: d.label })),
      );
    };

    refresh().catch(() => setDevices([]));
    mediaDevices.addEventListener("devicechange", refresh);

    return () => {
      disposed = true;
      mediaDevices.removeEventListener("devicechange", refresh);
    };
  }, []);

  return devices;
}

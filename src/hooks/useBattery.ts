import { useEffect, useState } from 'react';
import { subscribeToBattery, BatteryInfo } from '../native/batteryModule';

export function useBattery() {
  const [battery, setBattery] = useState<BatteryInfo>({
    level: 0,
    charging: false,
  });

  useEffect(() => {
    const subscription = subscribeToBattery(info => {
      setBattery(info);
    });

    return () => subscription.remove();
  }, []);

  return battery;
}

import { NativeModules, NativeEventEmitter } from 'react-native';

const { BatteryModule } = NativeModules;
const emitter = new NativeEventEmitter(BatteryModule);

export interface BatteryInfo {
  level: number;
  charging: boolean;
}

export function subscribeToBattery(callback: (info: BatteryInfo) => void) {
  return emitter.addListener('BatteryUpdated', callback);
}

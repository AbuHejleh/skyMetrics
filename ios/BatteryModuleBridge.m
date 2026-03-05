//
//  BatteryModuleBridge.m
//  skyMetrics
//
//  Created by Hejleh on 03/03/2026.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(BatteryModule, RCTEventEmitter)
RCT_EXTERN_METHOD(startObservingBattery)
@end


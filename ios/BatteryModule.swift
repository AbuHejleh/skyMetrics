//
//  Battery.swift
//  skyMetrics
//
//  Created by Hejleh on 03/03/2026.
//

import Foundation
import UIKit
import React

@objc(BatteryModule)
class BatteryModule: RCTEventEmitter {

    override init() {
        super.init()
        UIDevice.current.isBatteryMonitoringEnabled = true

        // ObserveR for battery
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(batteryChanged),
            name: UIDevice.batteryLevelDidChangeNotification,
            object: nil
        )

        // Observer for charging state
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(batteryChanged),
            name: UIDevice.batteryStateDidChangeNotification,
            object: nil
        )
    }

    @objc
    func batteryChanged() {
        // MAKE SURE IT IS ALWAYYS INTEGER
        let level = Int(UIDevice.current.batteryLevel * 100) 
        let state = UIDevice.current.batteryState
        let charging = (state == .charging || state == .full)

        sendEvent(withName: "BatteryUpdated", body: [
            "level": level,
            "charging": charging
        ])
    }

    override func supportedEvents() -> [String]! {
        return ["BatteryUpdated"]
    }
    override static func requiresMainQueueSetup() -> Bool {
        return false
    }
}

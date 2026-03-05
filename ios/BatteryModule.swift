import Foundation
import UIKit
import React

@objc(BatteryModule)
class BatteryModule: RCTEventEmitter {

    override init() {
        super.init()
        UIDevice.current.isBatteryMonitoringEnabled = true
    }

    private var hasListeners = false

    override func startObserving() {
        hasListeners = true

        NotificationCenter.default.addObserver(
            self,
            selector: #selector(batteryChanged),
            name: UIDevice.batteryLevelDidChangeNotification,
            object: nil
        )
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(batteryChanged),
            name: UIDevice.batteryStateDidChangeNotification,
            object: nil
        )

        // initial battery info ...
        batteryChanged()
    }

    override func stopObserving() {
        hasListeners = false
        NotificationCenter.default.removeObserver(self)
    }

    @objc
    func batteryChanged() {
        guard hasListeners else { return }

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

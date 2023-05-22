let dist3 = 0
let dist2 = 0
let dist1 = 0
basic.showString("loading")
basic.pause(2000)
basic.forever(function () {
    if (dist1 <= 18 && dist2 <= 18) {
        robotbit.MotorRun(robotbit.Motors.M1A, 150)
        robotbit.MotorRun(robotbit.Motors.M2A, -150)
        basic.pause(2000)
    } else if (dist2 <= 18 && dist3 <= 18) {
        robotbit.MotorRun(robotbit.Motors.M1A, 150)
        robotbit.MotorRun(robotbit.Motors.M2A, -150)
        basic.pause(2000)
    } else if (dist1 <= 12) {
        robotbit.MotorRun(robotbit.Motors.M1A, -150)
        robotbit.MotorRun(robotbit.Motors.M2A, 150)
        basic.pause(1000)
    } else if (dist3 <= 12) {
        robotbit.MotorRun(robotbit.Motors.M1A, 150)
        robotbit.MotorRun(robotbit.Motors.M2A, -150)
        basic.pause(1000)
    } else {
        robotbit.MotorRun(robotbit.Motors.M1A, 130)
        robotbit.MotorRun(robotbit.Motors.M2A, 130)
    }
})
basic.forever(function () {
    dist1 = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P13,
    PingUnit.Centimeters
    )
    dist2 = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    dist3 = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
})

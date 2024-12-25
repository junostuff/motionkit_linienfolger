input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.ArrowNorth, 1000)
    los = true
})
let los = false
basic.showIcon(IconNames.No)
basic.pause(1000)
basic.clearScreen()
let richtung = 3
basic.forever(function () {
    basic.clearScreen()
    while (los) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            richtung = 0
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            richtung = 1
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 15)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            richtung = 2
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 15)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        } else {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && richtung == 0) {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
            } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && richtung == 1) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 15)
            } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && richtung == 2) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 15)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 70)
            } else {
            	
            }
        }
    }
})

function roadRadar([speed, area]) {
    if (speed > 20 && area === 'residential') {
        if (speed <= 40) {
            console.log('speeding')
        } else if (speed <= 60) {
            console.log('excessive speeding')
        } else {
            console.log('reckless driving')
        }
    } else if (speed > 50 && area === 'city') {
        if (speed <= 70) {
            console.log('speeding')
        } else if (speed <= 90) {
            console.log('excessive speeding')
        } else {
            console.log('reckless driving')
        }
    } else if (speed > 90 && area === 'interstate') {
        if (speed <= 110) {
            console.log('speeding')
        } else if (speed <= 130) {
            console.log('excessive speeding')
        } else {
            console.log('reckless driving')
        }
    }else if (speed > 130 && area === 'motorway') {
        if (speed <= 150) {
            console.log('speeding')
        } else if (speed <= 170) {
            console.log('excessive speeding')
        } else {
            console.log('reckless driving')
        }
    }
}

roadRadar([40, 'city'])
roadRadar([21, 'residential']) //speeding
roadRadar([120, 'interstate']) //excessive speeding
roadRadar([200, 'motorway']) //reckless driving

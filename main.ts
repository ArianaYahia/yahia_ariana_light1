while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() > 6) {
        light.clear()
    } else if (input.lightLevel() > 13) {
        light.setAll(light.rgb(0, 0, 255))
    } else {
        light.setAll(light.rgb(255, 100, 0))
    }
    
}

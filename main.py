while True:
    print("Light Level:" + input.light_level())
    if input.light_level() > 6: 
        light.clear()
    elif input.light_level() > 13:
        light.set_all(light.rgb(0, 0, 255 ))
    else:
        light.set_all(light.rgb(255, 100, 0 ))
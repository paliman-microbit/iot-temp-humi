let humi = 0
let temp = 0
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr3
)
lcd1602.set_backlight(lcd1602.on_off.on)
lcd1602.putString("Starting...", 0, 0)
KSRobot_IOT.Wifi_setup(
SerialPin.P15,
SerialPin.P8,
"my_home",
"2901518700",
KSRobot_IOT.IOT_Config.STATION
)
KSRobot_IOT.MQTT_set(
"broker.hivemq.com",
1883,
"123456",
"",
""
)
KSRobot_IOT.MQTTSubscribe1(KSRobot_IOT.TOPIC.Topic0, "paliman/temp")
KSRobot_IOT.MQTTSubscribe1(KSRobot_IOT.TOPIC.Topic1, "paliman/humi")
lcd1602.putString(KSRobot_IOT.Get_IP(), 0, 0)
lcd1602.putString("iot1", 0, 1)
basic.pause(2000)
lcd1602.clear()
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P2,
    true,
    false,
    true
    )
    lcd1602.putString("temp ", 0, 0)
    lcd1602.putString("humi ", 0, 1)
    temp = Math.round(dht11_dht22.readData(dataType.temperature))
    humi = Math.round(dht11_dht22.readData(dataType.humidity))
    KSRobot_IOT.MQTTPublish1(KSRobot_IOT.TOPIC.Topic0, convertToText(temp))
    KSRobot_IOT.MQTTPublish1(KSRobot_IOT.TOPIC.Topic1, convertToText(humi))
    lcd1602.putNumber(temp, 5, 0)
    lcd1602.putNumber(humi, 5, 1)
    basic.pause(5000)
})

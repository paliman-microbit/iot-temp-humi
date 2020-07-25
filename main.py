KSRobot_IOT.MQTT_Data1(KSRobot_IOT.TOPIC.Topic0, function (message) {
    lcd1602.putString(message, 0, 1)
})
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
lcd1602.set_backlight(lcd1602.on_off.on)
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
KSRobot_IOT.MQTTSubscribe1(KSRobot_IOT.TOPIC.Topic0, "iot1")
basic.showString(KSRobot_IOT.Get_IP())
lcd1602.putString(KSRobot_IOT.Get_IP(), 0, 0)
lcd1602.putString("iot1", 0, 1)

#include <Arduino.h>
// #include <Preferences.h>
// Preferences preferences;

void setup()
{
  Serial.begin(9600);
  Serial.println();
  pinMode(2, OUTPUT);
}

void loop()
{
  Serial.println("Hello, World!");
  digitalWrite(02, HIGH);
  delay(10000);
}
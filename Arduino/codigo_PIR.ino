// Definição dos pinos com base na imagem do circuito
const int pinoPIR = 8;  
const int pinoLED = 3; 

int estadoSensor = 0;   // Variável para armazenar a leitura do sensor

void setup() {
  pinMode(pinoPIR, INPUT);   // ENTRADA
  pinMode(pinoLED, OUTPUT);  // SAÍDA
  
  Serial.begin(9600);
}

void loop() {
  // Lê o valor do pino digital 8 (PIR)
  estadoSensor = digitalRead(pinoPIR);

  // Se o sensor detectar movimento (Sinal HIGH / 1)
  if (estadoSensor == HIGH) {
    digitalWrite(pinoLED, HIGH); // Liga o LED
  } 
  else {
    digitalWrite(pinoLED, LOW);  // Desliga o LED
  }
}

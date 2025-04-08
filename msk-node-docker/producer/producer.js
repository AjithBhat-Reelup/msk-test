// producer.js
const { Kafka } = require('kafkajs');

// Replace these with your own MSK brokers
const kafka = new Kafka({
  clientId: 'my-msk-producer',
  brokers: [
    'b-1.msktest.8nqmwf.c4.kafka.ap-south-1.amazonaws.com:9092',
    'b-2.msktest.8nqmwf.c4.kafka.ap-south-1.amazonaws.com:9092',
    'b-3.msktest.8nqmwf.c4.kafka.ap-south-1.amazonaws.com:9092'
  ],
  // If using TLS or SASL, add ssl: true and sasl settings here.
});

const producer = kafka.producer();

const run = async () => {
  try {
    await producer.connect();

    const sendResult = await producer.send({
      topic: 'MSKTESTTopic',
      messages: [{ key: 'key1', value: 'Hello from Dockerized Producer!' }],
    });

    console.log('Message sent successfully:', sendResult);
  } catch (error) {
    console.error('Error in producer:', error);
  } finally {
    await producer.disconnect();
  }
};

run();

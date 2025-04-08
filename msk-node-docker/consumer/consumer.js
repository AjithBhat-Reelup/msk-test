// consumer.js
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-msk-consumer',
  brokers: [
    'b-1.msktest.8nqmwf.c4.kafka.ap-south-1.amazonaws.com:9092',
    'b-2.msktest.8nqmwf.c4.kafka.ap-south-1.amazonaws.com:9092',
    'b-3.msktest.8nqmwf.c4.kafka.ap-south-1.amazonaws.com:9092'
  ],
});

const consumer = kafka.consumer({ groupId: 'my-consumer-group' });

const run = async () => {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: 'MSKTESTTopic', fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          partition,
          offset: message.offset,
          key: message.key ? message.key.toString() : null,
          value: message.value.toString(),
        });
      },
    });
  } catch (error) {
    console.error('Error in consumer:', error);
  }
};

run();

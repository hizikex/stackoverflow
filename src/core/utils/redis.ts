import { createClient } from 'redis';

const client = createClient({
  host: 'localhost',
  port: 6379,
});

client.on('connect', () => {
  console.log('Connected to Redis');
});

client.on('error', (err: any) => {
  console.error('Redis Client Error: ', err);
});

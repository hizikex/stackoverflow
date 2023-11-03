import * as redis from 'redis';

const client = redis.createClient({
  host: 'localhost',
  port: 6379,
});

client.on('connect', () => {
  console.log('Connected to Redis');
});

client.on('error', (err: any) => {
  console.error('Redis Error: ', err);
});

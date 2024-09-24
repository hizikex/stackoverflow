import { delay, Queue } from "bullmq";

export const redisOptions = {
  host: "127.0.0.1",
  port: 6379,
};

const emailQueue = new Queue("email");

export const myQueue = new Queue("myQueue", { connection: redisOptions });

async function addJob(job: any) {
  // const options = { repeat: { every: 5000 } };

  await myQueue.add(job.name, job, { removeOnComplete: true, removeOnFail: true });
};

export const welcomeMessage = () => {
  console.log("Sending a welcome message every few seconds");
};

export const exportData = (job: any) => {
  const { name, path } = job.data.jobData;
  console.log(`Exporting ${name} data to ${path}`);
};

export const lowerCase = (job: any) => {
  const { name } = job.data;
  console.log(`Lowering ${name}`);
};

(async () => {
  await addJob({ name: "welcomeMessage" });
  await addJob({
    name: "exportData",
    jobData: {
      name: "Sales Report Question",
      path: "localhost:1122/api/questions/questionlist"
    }
  });
  await addJob({
    name: "lowerCase",
    jobData: {
      name: "SING_HALLALU_YAH",
      path: "Somebody shout halleluyah",
    },
    delay: 50000
  });
})();

(async () => {
  const jobs = await emailQueue.addBulk([
      { name: "welcomeEmail", data: { email: "user1@example.com" } },
      { name: "orderConfirmation", data: { email: "user2@example.com" } },
      { name: "passwordReset", data: { email: "user3@example.com" } },
    ]);
})();
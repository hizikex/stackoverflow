import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { Server, Socket } from 'socket.io';
import http from 'http';
import { Errors } from './core/constant/errors';
import { routes } from './api/Route';
import { handleErrors } from './api/middleware/handleError';
import { serverAdapter } from './core/queue/bull-board';

const app = express();

const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: "http://localhost:1122",
    credentials: true,
  },
});

const onlineUsers: Map<string, string> = new Map();

io.on("connection", (socket: Socket) => {
  console.log("A user connected!");

  socket.on("add-user", (userId: string) => {
    onlineUsers.set(userId, socket.id);

    console.log(`New user added with ID: ${userId}`);
  });

  socket.on("send-msg", (data: { to: string, msg: string }) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected!");
  });
});

io.on('user-added', (newUser: any) => {
  console.log('New user added:', newUser);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  morgan(
    'date[web] :method :url :status :response-time ms - :res[content-length]',
  ),
);
app.use('/', routes());
app.use('/admin/queues', serverAdapter.getRouter());

app.use((req, res, _next): void => {
  res.status(404).send({
    status: false,
    error: 'not found',
    message: Errors.RESOURCE_NOT_FOUND,
    data: {},
    path: req.url,
  });
});
app.use(handleErrors);

export default app;

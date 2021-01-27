import { createConnection, Schema } from 'mongoose';

const db = createConnection(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

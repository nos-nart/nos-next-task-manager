import { UserSchema, IUser } from '@/models/user.model';
import { createConnection } from 'mongoose';
import { serverRuntimeConfig } from 'next.config';

const db = createConnection(
  serverRuntimeConfig.databaseUrl,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
)
exports.db = db;

db.on('error', (error) => {
  console.error(`MongoDB connection error ~> ${error}`);
  process.exit(1);
})

exports.connected = new Promise((resolve) => db.once('open', resolve));

// models
const User = db.model('User', UserSchema);
export { User };

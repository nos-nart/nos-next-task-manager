import { UserSchema } from '@/models/user.model';
import { createConnection } from 'mongoose';
import { serverRuntimeConfig } from 'next.config';

const db = createConnection(
  serverRuntimeConfig.databaseUri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
)

db.on('error', (error) => {
  console.error(`MongoDB connection error ~> ${error}`);
  process.exit(1);
})

exports.connected = new Promise((resolve) => db.once('open', resolve));

// models
exports.User = db.model('User', UserSchema);

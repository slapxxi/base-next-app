import { MongoClient } from 'mongodb';
import { NextApiHandler, NextApiResponse } from 'next';
import { MiddlewareRequest } from '../types';

let client = new MongoClient(process.env.MONGODB_URI as string, {
  useNewUrlParser: true,
  useUnifiedTopology: false,
});

function withDatabase(handler: NextApiHandler) {
  return (req: MiddlewareRequest, res: NextApiResponse) => {
    if (!client.isConnected()) {
      return client.connect().then(() => {
        req.db = client.db(process.env.DB_NAME);
        return handler(req, res);
      });
    }

    req.db = client.db(process.env.DB_NAME);

    return handler(req, res);
  };
}

export default withDatabase;

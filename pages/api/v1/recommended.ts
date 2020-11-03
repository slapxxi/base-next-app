import Cors from 'cors';
import { initMiddleware } from '../../../lib/middleware/initMiddleware';
import withDatabase from '../../../lib/middleware/withDatabse';
import { DbApiHandler } from '../../../lib/types';

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
);

let handler: DbApiHandler = async (req, res) => {
  await cors(req, res);

  if (req.db) {
    let items = await req.db
      .collection('items')
      .find({}, { projection: { _id: 0 } })
      .toArray();
    return res.json({ status: 'ok', data: items });
  }

  res.json({ status: 'error', message: 'Db not working as expected' });
};

export default withDatabase(handler);

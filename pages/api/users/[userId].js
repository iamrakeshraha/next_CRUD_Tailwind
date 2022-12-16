import connectMongo from '../../../database/conn';
import {
  deleteUser,
  getUser,
  postUser,
  putUser,
} from '../../../database/controller';

export default function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'MongoDB connection error' })
  );

  const { method } = req;

  switch (method) {
    case 'GET':
      getUser(req, res);
      break;
    case 'PUT':
      putUser(req, res);
      break;
    case 'DELETE':
      deleteUser(req, res);
      break;
    default:
      // res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`method ${method} not Allow`);
      break;
  }
}

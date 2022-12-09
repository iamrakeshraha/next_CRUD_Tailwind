import connectMongo from '../../../database/conn';
import getUsers from '../../../database/controller';

export default function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'MongoDB connection error' })
  );

  const { method } = req;

  switch (method) {
    case 'GET':
      getUsers(req, res);
    //   break;
    case 'POST':
      res.status(200).json({ method, name: 'POST Method' });
      break;
    case 'PUT':
      res.status(200).json({ method, name: 'PUT Method' });
      break;
    case 'DELETE':
      res.status(200).json({ method, name: 'DELETE Method' });
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`method ${method} not Allow`);
  }
}

export default async function getUsers(req, res) {
  //   console.log('getUsers');
  try {
    res.status(200).json({ user: 'GET Request' });
  } catch (error) {
    res.status(404).json({ error: 'Error while fatching data' });
  }
}

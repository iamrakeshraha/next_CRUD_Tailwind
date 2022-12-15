//*Controller*//

import Users from '../model/user';

// get: http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});

    if (!users) return res.status(404).json({ error: 'Data not found' });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: 'Error while fatching data' });
  }
}

// get: http://localhost:3000/api/user/1
export async function getUser(req, res) {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await Users.findById(userId);
      res.status(200).json(user);
    }
    res.status(404).json({ error: 'user not selected' });
  } catch (error) {
    res.status(404).json({ error: 'Error detect in fetching user data..' });
  }
}

// post: http://localhost:3000/api/users
export async function postUser(req, res) {
  try {
    const formData = await req.body;

    if (!formData)
      return res.status(404).json({ error: 'Form Data value not provided...' });
    Users.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(404).json({ error });
  }
}

// put: http://localhost:3000/api/users/:id
export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    }

    res.status(404).json({ error: 'User not selected' });
  } catch (error) {
    res.status(404).json({ error: 'Error while updating the data..!' });
  }
}

// delete: http://localhost:3000/api/users/:id
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;
    const user = await Users.findById(userId);

    if (user) {
      const userName = await user.name;
      await Users.findByIdAndDelete(userId);
      res.status(200).json({ massage: `${userName} was successfully deleted` });
    }
    res.status(404).json({ error: 'User already deleted..' });
  } catch (error) {
    res.status(404).json({ error: 'Error while deleting data.!' });
  }
}

const BASE_URL = 'http://localhost:3000';

//all users
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/users`);
  const res = await response.json();

  return res;
};

//single user
export const getuser = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/${userId}`);
  const res = await response.json();

  return res;
};

//post a new user
export async function addUser(formData) {
  try {
    const Options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}/api/users`, Options);
    const res = await response.json();

    return res;
  } catch (error) {
    return error;
  }
}

//update user
export async function updateUser(userId, formData) {
  const Options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  };

  const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
  const res = await response.json();

  return res;
}

//delete user
export const deleteUser = async (userId) => {
  const Options = {
    method: 'DELETE',
  };

  const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
  const res = JSON.stringify(response);

  return res;
};

import { useReducer } from 'react';
import { addUser } from '../lib/helper';
import { useQuery } from 'react-query';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function AddUserForm() {
  const [formData, setFormData] = useReducer(formReducer, {});

  // const { isLoading, isError, data } = useQuery('user', addUser);

  // console;
  const onSubmitButtonClick = () => {
    alert('Submit');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formData', formData);
    // setVisible(false);
  };

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          name="name"
          className="border w-full px-3 py-1 focus:outline-none rounded"
          placeholder="Name"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="email"
          className="border w-full px-3 py-1 focus:outline-none rounded"
          placeholder="Email"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          name="date"
          className="border px-5 py-3 focus:outline-none rounded-md"
          placeholder="Date"
          onChange={setFormData}
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            name="status"
            id="radioDefault1"
            value="active"
            onChange={setFormData}
            className="form-ckeck-input appearance-none rounded-full border border-gray-300 h-4 w-4 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration:200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          ></input>
          <label htmlFor="radioDefault1" className="inline-block tet-gray-800">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="status"
            id="radioDefault2"
            value="inactive"
            onChange={setFormData}
            className="form-ckeck-input appearance-none rounded-full border border-gray-300 h-4 w-4 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration:200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          ></input>
          <label htmlFor="radioDefault2" className="inline-block tet-gray-800">
            Inactive
          </label>
        </div>
      </div>

      <button
        className="flex justify-center text-md w-2/6 bg-green-500 text-white border px-4 py-2 hover:bg-gray-50 hover:text-gray-800 hover:border-green-500 rounded-md"
        onClick={onSubmitButtonClick}
      >
        Submit
      </button>
    </form>
  );
}

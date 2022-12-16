import { useState } from 'react';
import Form from './form';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import { getUsers } from '../lib/helper';
import { useQuery } from 'react-query';

export default function Table() {
  const [flag, setFlag] = useState(false);

  const { isLoading, isError, data, error } = useQuery('user', getUsers);

  // console.log('response', data);

  if (isLoading) return <div>user loading...........</div>;
  if (isError) return <div>Got error {error}</div>;

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          {/* <th>
            <span className="text-gray-200">User Id</span>
          </th> */}
          <th>
            <span className="text-gray-200">Name</span>
          </th>
          <th>
            <span className="text-gray-200">Email</span>
          </th>
          <th>
            <span className="text-gray-200">Birthday</span>
          </th>
          <th>
            <span className="text-gray-200">Status</span>
          </th>
          <th>
            <span className="text-gray-200">Action</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {data
          ? data.map((obj, index) => <TableRow {...obj} key={index} />)
          : null}
      </tbody>
    </table>
  );
}

function TableRow({ name, email, birthDay, status }) {
  // console.log(name);

  return (
    <tr className="bg-gray-50 text-center">
      {/* <td className="px-16 py-2">{key}</td> */}
      <td className="px-16 py-2 flex flex-row items-center">
        <span className="text-center ml-2 font-semibold">{name}</span>
      </td>
      <td className="px-16 py-2">{email}</td>
      <td className="px-16 py-2">{birthDay}</td>
      <td className="px-16 py-2">
        <button className="cursor">
          <span
            className={`${
              status == 'Active'
                ? 'bg-green-500'
                : status == 'Inactive'
                ? 'bg-rose-500'
                : 'bg-gray-500'
            } text-white px-5 py-1 rounded-full`}
          >
            {status || 'Unknown'}
          </span>
        </button>
      </td>
      <td className="px-16 py-2 flex justify-around gap-5">
        <button className="cursor">
          <BiEdit size={25} color={'rgb(34,197,94)'}></BiEdit>
        </button>
        <button className="cursor">
          <BiTrashAlt size={25} color={'rgb(244,63,94)'}></BiTrashAlt>
        </button>
      </td>
    </tr>
  );
}

export default function Table() {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th>
            <span className="text-gray-200">User Id</span>
          </th>
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
        <tr className="bg-gray-50 text-center">
          <td className="px-16 py-2">1</td>
          <td className="px-16 py-2 flex flex-row items-center">
            <span className="text-center ml-2 font-semibold">Alexander</span>
          </td>
          <td className="px-16 py-2">alex@gmail.com</td>
          <td className="px-16 py-2">17/03/1990</td>
          <td className="px-16 py-2">
            <button className="cursor">
              <span className="bg-red-500 text-white px-5 py-1 rounded-full">
                Inactive
              </span>
            </button>
          </td>
          <td className="px-16 py-2">
            <button className="cursor"></button>
          </td>
          <td className="px-16 py-2">
            <button></button>
          </td>
        </tr>
        <tr className="bg-gray-50 text-center">
          <td className="px-16 py-2">2</td>
          <td className="px-16 py-2 flex flex-row items-center">
            <span className="text-center ml-2 font-semibold">Satyajit Ray</span>
          </td>
          <td className="px-16 py-2">ray@gmail.com</td>
          <td className="px-16 py-2">07/01/1942</td>
          <td className="px-16 py-2">
            <button className="cursor">
              <span className="bg-green-500 text-white px-5 py-1 rounded-full">
                Active
              </span>
            </button>
          </td>
          <td className="px-16 py-2">
            <button className="cursor"></button>
          </td>
          <td className="px-16 py-2">
            <button></button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default function Form() {
  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4 ">
      <div className="input-type">
        <input
          type="text"
          name="name"
          className="border w-full px-3 py-1 focus:outline-none rounded"
          placeholder="Name"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="email"
          className="border w-full px-3 py-1 focus:outline-none rounded"
          placeholder="Email"
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          name="date"
          className="border px-5 py-3 focus:outline-none rounded-md"
          placeholder="Date"
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            name="status"
            id="radioDefault1"
            value="active"
            className="form-ckeck-input appearance-none rounded-full border border-gray-300 h-4 w-4 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration:200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          ></input>
          <lebel forHtml="radioDefault1" className="inline-block tet-gray-800">
            Active
          </lebel>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="status"
            id="radioDefault2"
            value="active"
            className="form-ckeck-input appearance-none rounded-full border border-gray-300 h-4 w-4 bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration:200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          ></input>
          <lebel forHtml="radioDefault2" className="inline-block tet-gray-800">
            Inactive
          </lebel>
        </div>
      </div>

      <button className="flex justify-center text-md w-2/6 bg-green-500 text-white border px-4 py-2 hover:bg-gray-50 hover:text-gray-800 hover:border-green-500 rounded-md">
        Submit
      </button>
    </form>
  );
}

import React, { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [username, setUsername] = useState("");
  return (
    <div className="w-screen flex flex-col items-center h-screen justify-center">
      <h1 className="text-3xl">{a}</h1>
      <form
        action="submit"
        className="flex flex-col border-solid border-1 p-10 bg-black rounded-2xl my-5 text-white"
      >
        <input
          value={username}
          type="text"
          name="name"
          id="name"
          className="border-2 border-solid"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-green-500 rounded-lg p-2 hover:bg-green-700 m-1"
          onClick={(kuchBhi) => {
            console.log(username);
            setUsername('');
            kuchBhi.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
      <div className="flex gap-5">
        <button
          className="bg-green-500 rounded-lg p-2 hover:bg-green-700"
          onClick={() => setA(a + 1)}
        >
          Increment
        </button>
        <button
          className=" bg-green-500 rounded-lg p-2 hover:bg-green-700"
          onClick={() => setA(a > 0 ? a - 1 : 0)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;

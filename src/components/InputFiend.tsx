import Logo from "./Logo";
import { FaEyeSlash } from "react-icons/fa";

const InputFiend = () => {
  return (
    <div className="wrapper text-white bg-transparent text-center md:w-[70rem] space-y-5 py-5 ">
      <div>
        <Logo color={"text-black"} />
        <p className="text-green-900 font-semibold">
          Your Own Password Manager
        </p>
      </div>
      <div className="flex flex-col text-black justify-center gap-4 ">
        <input
          required
          type="text"
          name=""
          id=""
          className="input"
          placeholder="Enter URL"
        />
        <div
          className="flex flex-col md:flex-row justify-between gap-4 
        "
        >
          <div className="md:w-[50%] input flex justify-between">
            <input type="text" placeholder="Enter username" />
            <button>
              <FaEyeSlash />
            </button>
          </div>
          <input
            required
            type=""
            placeholder="Enter password..."
            className="md:w-[50%] input"
          />
        </div>
      </div>
      <div className="flex justify-center py-2">
        <button className="text-black bg-green-500 flex justify-center items-center w-44 rounded-full py-2 gap-2 border border-green-900 hover:bg-green-400 duration-300">
          <img src="/public/add.svg" alt="add" className="w-8 h-8" />
          <p className=" ">Add password</p>
        </button>
      </div>
    </div>
  );
};

export default InputFiend;

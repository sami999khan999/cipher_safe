import { ChangeEvent, FormEvent, useState } from "react";
import Logo from "./Logo";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Table from "./Table";

const InputField = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setForm({
      site: "",
      username: "",
      password: "",
    });
  };

  const formData = [
    {
      site: "Googlejdhfeuisfhuedhfusiehfuesuidhfuvusdhf",
      username: "Sami",
      password: "PASSWORD",
    },
    {
      site: "Google",
      username: "Sami",
      password: "PASSWORD",
    },
    {
      site: "Google",
      username: "Sami",
      password: "PASSWORD",
    },
  ];

  return (
    <>
      <div className="wrapper text-white bg-transparent text-center md:w-[70rem] space-y-5 py-5">
        <div>
          <Logo color={"text-black"} />
          <p className="text-green-900 font-semibold">
            Your Own Password Manager
          </p>
        </div>

        <form
          className="flex flex-col text-black justify-center gap-4"
          onSubmit={submitHandler}
        >
          <input
            required
            value={form.site}
            onChange={handleFormChange}
            autoComplete="url"
            type="text"
            name="site"
            className="input"
            placeholder="Enter URL"
          />
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <input
              type="text"
              value={form.username}
              onChange={handleFormChange}
              autoComplete="username"
              name="username"
              placeholder="Enter username"
              className="md:w-[50%] input"
            />

            <div className="md:w-[50%] input flex justify-between">
              <input
                required
                value={form.password}
                onChange={handleFormChange}
                autoComplete="current-password"
                type={isVisible ? "text" : "password"}
                placeholder="Enter password..."
                name="password"
                className="focus:outline-none w-[85%]"
              />
              <button
                type="button"
                onClick={() => setIsVisible((prev) => !prev)}
                className="flex justify-center items-center focus:outline-none"
              >
                {isVisible ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div className="flex justify-center py-2">
            <button
              type="submit"
              className="text-black bg-green-500 flex justify-center items-center w-44 rounded-full py-2 gap-2 border border-green-900 hover:bg-green-400 duration-300"
            >
              <img src="/public/add.svg" alt="add" className="w-8 h-8" />
              <p>Add password</p>
            </button>
          </div>
        </form>
      </div>

      <div>
        <Table formData={formData} />
      </div>
    </>
  );
};

export default InputField;

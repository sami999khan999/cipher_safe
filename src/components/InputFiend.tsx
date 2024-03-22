import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Logo from "./Logo";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Table, { formProps } from "./Table";
import { createPassword, getAllPasswords } from "../utils/fetchApi";
import { useUser } from "@clerk/clerk-react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Skeliton from "./Skeliton";

const InputField = () => {
  const user = useUser();
  const [isVisible, setIsVisible] = useState(false);
  const [formArr, setFormArr] = useState<formProps[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting((prv) => !prv);
    setFormArr([form, ...formArr]);

    createPassword({ ...form, clerkId: user.user?.id });

    setForm({
      site: "",
      username: "",
      password: "",
    });
  };

  useEffect(() => {
    const fetchPasswords = async () => {
      try {
        const response = await getAllPasswords(user.user?.id, currentPage);
        console.log(response.totalePages);
        if (response) {
          setFormArr(response.passwords);
          setTotalPages(response.totalePages);
        }
      } catch (error) {
        console.error("Error fetching passwords:", error);
      }
      setLoading(false);
    };

    fetchPasswords();

    return () => {};
  }, [user.user?.id, currentPage, isSubmitting]);

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
              <img src="/public/add2.svg" alt="add" className="w-8 h-8" />
              <p>Add password</p>
            </button>
          </div>
        </form>
      </div>

      {loading ? (
        <Skeliton />
      ) : (
        <div className="wrapper w-[70rem]">
          <Table
            formData={formArr}
            setFormData={setFormArr}
            setTotalePages={setTotalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <div className=" text-3xl text-green-800 flex justify-center">
            {totalPages > 1 && (
              <div className="space-x-14 mt-2 mx-5 flex bg-green-100 p-2 rounded-md ">
                <button
                  onClick={() => setCurrentPage((prv) => prv - 1)}
                  disabled={currentPage === 1}
                >
                  <IoIosArrowDropleft />
                </button>
                <span className="text-xl">
                  {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((prv) => prv + 1)}
                  disabled={currentPage === totalPages}
                >
                  <IoIosArrowDropright />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default InputField;

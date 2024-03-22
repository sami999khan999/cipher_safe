import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import EditModal from "./EditModal";
import { deletePasswoed } from "../utils/fetchApi";

export interface formProps {
  // _id: string;
  // clerkId: string;
  site: string;
  username: string;
  password: string;
}

const Table = ({
  formData,
  setFormData,
}: {
  formData: formProps[];
  setFormData: React.Dispatch<React.SetStateAction<formProps[]>>;
}) => {
  const [editIsOpen, setEditIsOpen] = useState<boolean>(false);
  const [visiblePasswordId, setVisiblePasswordId] = useState<number | null>(
    null
  );

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);

    toast.success("Password copied successfully");
  };

  const deleteHandler = async (data: any) => {
    console.log(data);
    await deletePasswoed(data._id);
    setFormData(formData.filter((item) => item.site !== data.site));
  };

  return (
    <>
      <div className="md:wrapper mx-auto  mt-6">
        {formData.length > 0 ? (
          <>
            <h2 className="font-bold text-2xl px-2 py-2 text-green-950">
              Your Passwords
            </h2>

            <div className="flex">
              <table className="wrapper text-center  overflow-hidden table-fixed rounded-xl">
                <thead className="bg-green-600 border-2">
                  <tr>
                    <th className="px-6 py-3">Site</th>
                    <th className="px-6 py-3">Username</th>
                    <th className="px-6 py-3">Password</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-green-100 ">
                  {formData.map((data, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2 whitespace-nowrap  w-48 ">
                        <div
                          onClick={() => copyToClipboard(data.site)}
                          className="overflow-hidden cursor-pointer  hover:bg-green-400 rounded-full"
                        >
                          {data.site}
                        </div>
                      </td>
                      <td className="border px-4 py-2 whitespace-nowrap overflow-hidden">
                        <div
                          onClick={() => copyToClipboard(data.username)}
                          className="overflow-hidden cursor-pointer  hover:bg-green-400 rounded-full"
                        >
                          {data.username}
                        </div>
                      </td>
                      <td className="border px-4 py-2 whitespace-nowrap overflow-hidden">
                        <div
                          onClick={() => {
                            copyToClipboard(data.password);
                            setVisiblePasswordId(index);
                          }}
                          className="overflow-hidden cursor-pointer hover:bg-green-400 rounded-full"
                        >
                          {visiblePasswordId === index ? (
                            data.password
                          ) : (
                            <span>
                              &#8226;&#8226;&#8226;&#8226;&#8226;&#8226;
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="border w-16 px-4 py-2 whitespace-nowrap overflow-hidden">
                        <div className="text-lg space-x-4">
                          <button
                            className="hover:text-green-700 duration-200"
                            onClick={() => setEditIsOpen((prv) => !prv)}
                          >
                            <FaEdit />
                          </button>

                          <button
                            onClick={() => deleteHandler(data)}
                            className="hover:text-green-700 duration-200"
                          >
                            <MdDelete />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className="text-xl font-semibold text-center md:text-2xl">
            No Passwords To Show
          </p>
        )}
        {editIsOpen && <EditModal setEditIsOpen={setEditIsOpen} />}
      </div>
    </>
  );
};

export default Table;

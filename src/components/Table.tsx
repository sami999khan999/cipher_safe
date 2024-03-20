import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import CopyButton from "./CopyButton";
import { MdDelete } from "react-icons/md";

export type formProps = {
  site: string;
  username: string;
  password: string;
};

const Table = ({ formData }: { formData: formProps[] }) => {
  const [isCopyActive, setIsCopyActive] = useState<boolean>(false);
  const [editIsOpen, setEditIsOpen] = useState<boolean>(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="md:wrapper mx-auto md:w-[70rem] mt-6">
        {formData.length > 0 ? (
          <>
            <div className="flex justify-between">
              <h2 className="font-bold text-2xl px-2 py-2 text-green-950">
                Your Passwords
              </h2>

              <div className="flex gap-8 text-green-950 text-xl  bg-green-600 px-8 rounded-t-xl">
                <button
                  className="hover:text-gray-900 duration-200"
                  onClick={() => setIsCopyActive((prv) => !prv)}
                >
                  <FaCopy />
                </button>

                <button
                  className="hover:text-gray-900 duration-200"
                  onClick={() => setEditIsOpen((prv) => !prv)}
                >
                  <FaEdit />
                </button>

                <button onClick={() => setDeleteIsOpen((prv) => !prv)}>
                  <MdDelete />
                </button>
              </div>
            </div>

            <div className="flex">
              <table className="wrapper text-center  overflow-hidden table-fixed">
                <thead className="bg-green-600 border-2">
                  <tr>
                    <th className="px-6 py-3">Site</th>
                    <th className="px-6 py-3">Username</th>
                    <th className="px-6 py-3">Password</th>
                  </tr>
                </thead>
                <tbody className="bg-green-100 overflow-hidden">
                  {formData.map((data, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2 whitespace-nowrap overflow-hidden">
                        {isCopyActive ? (
                          <>
                            <div className="flex justify-between items-center">
                              <div className="whitespace-nowrap overflow-hidden">
                                {data.site}
                              </div>
                              <CopyButton content={data.site} index={index} />
                            </div>
                          </>
                        ) : (
                          <div className="overflow-hidden">{data.site}</div>
                        )}
                      </td>

                      <td className="border px-4 py-2 whitespace-nowrap overflow-hidden">
                        {isCopyActive || editIsOpen ? (
                          <>
                            <div className="flex justify-between items-center">
                              <div className="whitespace-nowrap overflow-hidden">
                                {data.username}
                              </div>
                              {isCopyActive && (
                                <CopyButton
                                  content={data.username}
                                  index={index}
                                />
                              )}

                              {deleteIsOpen && (
                                <button
                                  className="ml-3 px-1 py-1 bg-green-700 text-white rounded-md"
                                  onClick={() => setEditIsOpen((prv) => !prv)}
                                >
                                  <MdDelete />
                                </button>
                              )}

                              {editIsOpen && (
                                <button
                                  className="ml-3 px-1 py-1 bg-green-700 text-white rounded-md"
                                  onClick={() => setEditIsOpen((prv) => !prv)}
                                >
                                  <FaEdit />
                                </button>
                              )}
                            </div>
                          </>
                        ) : (
                          <div className="overflow-hidden">{data.username}</div>
                        )}
                      </td>

                      <td className="border px-4 py-2 whitespace-nowrap overflow-hidden">
                        {isCopyActive ? (
                          <>
                            <div className="flex justify-between items-center">
                              <div className="whitespace-nowrap overflow-hidden">
                                {data.password}
                              </div>
                              <CopyButton
                                content={data.password}
                                index={index}
                              />
                            </div>
                          </>
                        ) : (
                          <div className="overflow-hidden">{data.password}</div>
                        )}
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
      </div>
      {/* {editIsOpen && <EditModal setEditIsOpen={setEditIsOpen} />} */}
    </>
  );
};

export default Table;

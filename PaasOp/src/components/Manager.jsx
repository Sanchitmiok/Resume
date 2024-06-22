import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";
import {
  faHome,
  faEye,
  faAddressBook,
  faEyeSlash,
  faTrash,
  faClipboard,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
function Manager() {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);
  const ref = useRef();
  const Passref = useRef();
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast.info("🦄 Copied!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };
  const handleye = () => {
    console.log(ref.current.icon);
    if (ref.current.icon === "faEye") {
      ref.current.icon = "faEyeSlash";
      Passref.current.type = "password";
    } else {
      Passref.current.type = "text";
      ref.current.icon = "faEye";
    }
  };
  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const savepassword = () => {
    setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    setForm({ site: "", username: "", password: "" });
    // console.log([...passwordArray, { ...form, id: uuidv4() }]);
  };
  const EditPass = (id) => {
    console.log("deleting", id);
    setForm(passwordArray.filter((item) => item.id === id)[0]);
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
  };
  const DeletePass = (id) => {
    console.log("deleting", id);
    let c = confirm("Do you really want to delete");
    if (c) {
      setpasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
    }
  };

  return (
    <div className="bg-blue-300 text-center h-[86vh]">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="font-bold text-lg">
        {" "}
        <span className="text-green-500">&lt;</span> Pass
        <span className="text-green-500">Op/&gt;</span>
      </div>
      <p className="text-md">Your password manager</p>
      <div className="flex flex-col p-4 text-black gap-4 items-center">
        <input
          value={form.site}
          onChange={handlechange}
          placeholder="Enter website url"
          type="text"
          className="rounded-full border border-green-500 md:w-[60%] lg:w-[40%] w-full sm:m-2 p-4 py-1"
          name="site"
          id="1"
        />
        <div className="md:w-[60%] lg:w-[40%] w-full sm:m-2 flex justify-between gap-4">
          <input
            value={form.username}
            onChange={handlechange}
            placeholder="Enter username "
            type="text"
            className="rounded-full border border-green-500  w-full p-4 py-1"
            name="username"
            id="2"
          />
          <div className="relative">
            <input
              ref={Passref}
              value={form.password}
              onChange={handlechange}
              placeholder="Enter your Password"
              type="password"
              className="rounded-full border border-green-500 p-4 py-1"
              name="password"
              id="3"
            />
            <FontAwesomeIcon
              ref={ref}
              icon={faEye}
              className="absolute top-2 right-3 cursor-pointer"
              onClick={handleye}
            />
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={savepassword}
          className="bg-purple-500 rounded-full px-5 py-2 m-5 text-white"
        >
          Add Password
          <FontAwesomeIcon
            icon={faAddressBook}
            className="text-green-500 px-2"
          />
        </button>
      </div>
      <div className="flex flex-col items-center h-[50vh] overflow-auto">
        <h1 className="font-bold">Passwords</h1>
        {passwordArray.length === 0 && <div>No passwords stored</div>}
        {passwordArray.length != 0 && (
          <table className="table-auto items-center md:w-[60%] lg:w-[40%] w-full ">
            <thead className="bg-green-700 ">
              <tr className="">
                <th className="py-2">Website</th>
                <th className="py-2"></th>
                <th className="py-2">Username</th>
                <th className="py-2"></th>
                <th className="py-2">Password</th>
                <th className="py-2"></th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              {passwordArray.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="py-2">{item.site}</td>
                    <td
                      className="cursor-pointer border-r border-black"
                      onClick={() => copyText(item.site)}
                    >
                      <FontAwesomeIcon icon={faClipboard} />
                    </td>
                    <td className="py-2">{item.username}</td>
                    <td
                      className="cursor-pointer border-r border-black"
                      onClick={() => copyText(item.username)}
                    >
                      <FontAwesomeIcon icon={faClipboard} />
                    </td>
                    <td className="py-2">{item.password}</td>
                    <td
                      className="cursor-pointer border-r border-black"
                      onClick={() => copyText(item.password)}
                    >
                      <FontAwesomeIcon icon={faClipboard} />
                    </td>
                    <td>
                      <div className="flex justify-center gap-3">
                        <FontAwesomeIcon
                          onClick={() => DeletePass(item.id)}
                          className="cursor-pointer"
                          icon={faTrash}
                        />
                        <FontAwesomeIcon
                          onClick={() => EditPass(item.id)}
                          className="cursor-pointer"
                          icon={faPenNib}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Manager;

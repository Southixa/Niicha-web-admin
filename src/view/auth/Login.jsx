
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../../assets/logos.jpeg";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { LoginApi } from "../../api/auth";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Perform client-side validation
      if (username === "") {
        setErrorUsername("username is required!");
        setLoading(false);
        return;
      }
      setErrorUsername("");

      if (password === "") {
        setErrorPassword("password is requird");
        setLoading(false);
        return;
      }
      setErrorPassword("");

      // Send registration data to the server
      const response = await LoginApi(username, password);
      if (response) {
        navigate("/");
        Swal.fire({
          title: "ສຳເລັດ",
          text: "ເຂົ້າສູ່ລະບົບສຳເລັດ",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "ຜິດພາດ1",
          text: "ອີເມວ ຫລື ລະຫັດບໍ່ຖືກຕ້ອງ1",
          icon: "error",
        });
      }
    } catch (error) {
      // Handle registration errors
      Swal.fire({
        title: "ຜິດພາດ2",
        text: "ຊື່ຜູ້ໃຊ້ ຫລື ລະຫັດບໍ່ຖືກຕ້ອງ2",
        icon: "error",
      });
    }
    setLoading(false);
  };

  // Swal.fire({
  //   title: "ສຳເລັດ",
  //   text: "ເຂົ້າສູ່ລະບົບສຳເລັດ",
  //   icon: "success",
  // })

  return (
    <section className="bg-gray-50 flex items-center justify-center w-full dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 w-[500px] mx-auto md:h-screen lg:py-0">
        <img className="w-20 h-20 mb-5 rounded-lg" src={Logo} alt="logo" />
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 sm:p-8">
            <h1 className="text-[30px] text-center mt-5 mb-10 font-bold  text-gray-900 dark:text-white">
              Login
            </h1>
            <form className=""
              onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Username</label>
                <input type="text" name="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                block w-full p-2.5 dark:bg-gray-700 mb-[2px] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {errorUsername !== "" ? (
                <div className="flex text-red-700 text-sm"> {errorUsername} </div>
              ) : (
                ""
              )}

              <div className=" mt-2">
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" placeholder="••••••••"
                  className="bg-gray-50 border mb-[2px] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                  onChange={(e) => setPassword(e.target.value)}
                  value={password} />
              </div>
              {errorPassword !== "" ? (
                <div className="flex text-red-700 text-sm"> {errorPassword} </div>
              ) : (
                ""
              )}


              <div className="flex items-center justify-between mt-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">ຈື່ຂ້ອຍ</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">ລືມລະຫັດຜ່ານ?</a>
              </div>
              <button type="submit" className="w-full mt-5 mb-3 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                {loading ? "ກຳລັງລ໋ອກອິນ" : "ລ໋ອກອິນ"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                ຍັງບໍ່ມີທັນລົງທະບຽນແມ່ນບໍ່ ? <Link to={"/register"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  ລົງທະບຽນ
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { RegisterApi } from "../../api/auth";
import Logo from "../../assets/logos.jpeg"; // Imported but not used, consider removing if not needed
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setConfirmErrorPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (username === "") {
        setErrorUsername("Enter your username");
        setLoading(false);
        return;
      }
      setErrorUsername("");

      if (password === "") {
        setErrorPassword("Password is required!");
        setLoading(false);
        return;
      }
      setErrorPassword("");

      if (confirmPassword !== password) {
        setConfirmErrorPassword("Password does not match!");
        setLoading(false);
        return;
      }
      setConfirmErrorPassword("");

      const response = await RegisterApi(username, password);

      if (response) {
        navigate('/login');
        Swal.fire({
          title: "ສຳເລັດ",
          text: "ລົງທະບຽນສຳເລັດ",
          icon: "success",
        });
        setLoading(false);
      } else {
        Swal.fire({
          title: "ຜິດພາດ",
          text: "Username ນີ້ມີແລ້ວ",
          icon: 'error'
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "ເກີດຂໍ້ຜິດພາດ",
        text: "ລົງທະບຽນບໍ່ສຳເລັດ",
        icon: "error"
      });
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 flex items-center justify-center w-full dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 w-[500px] mx-auto md:h-screen lg:py-0">
        <img className="w-20 h-20 mb-5 rounded-lg" src={Logo} alt="logo" />
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Register
            </h1>
            <form className="" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Username</label>
                <input type="text" name="username" className="bg-gray-50 border mb-[2px] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {errorUsername && <div className="flex mt-1 text-red-700">{errorUsername}</div>}

              <div className=" mt-3">
                <label className="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" placeholder="••••••••"
                  className="bg-gray-50 border mb-[2px] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                  onChange={(e) => setPassword(e.target.value)}
                  value={password} />
              </div>
              {errorPassword && <div className="flex text-red-700">{errorPassword}</div>}

              <div className=" mt-3">
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="••••••••"
                  className="bg-gray-50 border mb-[2px] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword} />
              </div>
              {errorConfirmPassword && <div className="flex text-red-700">{errorConfirmPassword}</div>}

              <button type="submit" className="w-full mt-5 mb-3 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                {loading ? "ກຳລັງລົງທະບຽນ" : "ລົງທະບຽນ"}
              </button>
              <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                ເຄີຍລົງທະບຽນແລ້ວແມ່ນບໍ່? <Link to={"/login"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  ລ໋ອກອິນ
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

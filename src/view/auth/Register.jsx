import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../../assets/logos.jpeg";
import Swal from "sweetalert2";
import { RegisterApi } from "../../api/auth";
const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorComfirmPassword, setErrorComfirmPassword] = useState("");

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
      if (password !== comfirmPassword) {
        setErrorComfirmPassword("Passwords do not match");
        setLoading(false);
        return;
      }
      setErrorComfirmPassword("");
    
      const response = await RegisterApi(username, password);

      if (response) {
        navigate("/");
        Swal.fire({
          title: "ສຳເລັດ",
          text: "ເຂົ້າສູ່ລະບົບສຳເລັດ",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "ຜິດພາດ",
          text: "ອີເມວ ຫລື ລະຫັດບໍ່ຖືກຕ້ອງ1",
          icon: "error",
        });
      }
    } catch (error) {
      // Handle registration errors
      Swal.fire({
        title: "ຜິດພາດ",
        text: "ຊື່ຜູ້ໃຊ້ ຫລື ລະຫັດບໍ່ຖືກຕ້ອງ",
        icon: "error",
      });
    }
    setLoading(false);
  };

  return (
    <div className="w-screen flex justify-center items-center">
      <div>
        <Card color="transparent" shadow={false} className="bg-gray-300s">
          <div className="w-full h-40 flex justify-center items-center">
            <img src={Logo} className="w-32 h-32 rounded-full object-cover" />
          </div>

          <Typography
            variant="h4"
            color="blue-gray"
            className="text-center mt-2"
          >
            Register
          </Typography>
          <Typography color="gray" className="mt-1 font-normal text-center">
            Welcome to Niicha cafe
          </Typography>
          <form
            //onSubmit={handleSubmit}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                username
              </Typography>
              <Input
                size="lg"
                placeholder="username"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={errorUsername}
                labelProps={{
                  className: "before:content-none after:content-none ",
                }}
              />
              {errorUsername !== "" ? (
                <div className="flex text-red-700"> {errorUsername} </div>
              ) : (
                ""
              )}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errorPassword !== "" ? (
                <div className="flex text-red-700"> {errorPassword} </div>
              ) : (
                ""
              )}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Comfirm Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                value={comfirmPassword}
                onChange={(e) => setComfirmPassword(e.target.value)}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errorComfirmPassword !== "" ? (
                <div className="flex text-red-700"> {errorComfirmPassword} </div>
              ) : (
                ""
              )}
            </div>

            <Button
              onClick={(e) => handleSubmit(e)}
              className="mt-6 text-lg"
              fullWidth
            >
              ລົງທະບຽນ
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              ທ່ານເຄີຍລົງທະບຽນແມ່ນບໍ່?{" "}
              <a href="/" className="font-medium text-gray-900">
                ເຂົ້າສູ່ລະບົບ
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};
export default Register;

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
        // navigate("/");
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
    <div className="w-screen flex justify-center items-center">
      <div>
        <Card color="transparent" shadow={false} className="bg-gray-300s">
          <div className="w-full h-40 flex justify-center items-center">
            <img src={Logo} className="w-32 h-32 rounded-full object-cover" />
          </div>

          <Typography variant="h4" color="blue-gray" className="text-center mt-2">
            Login
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
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  Remember
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button
              onClick={(e) => handleSubmit(e)}
              className="mt-6 text-lg"
              fullWidth
            >
              ເຂົ້າສູ່ລະບົບ
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              ທ່ານຍັງບໍ່ເຄີຍລົງທະບຽນແມ່ນບໍ່?{" "}
              <a href="/register" className="font-medium text-gray-900">
                ລົງທະບຽນ
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};
export default Login;

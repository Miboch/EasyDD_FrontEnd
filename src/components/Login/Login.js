import banner from "../../assets/images/login_splash.png";

const Login = () => {
  return (
    <div className="bg-appLoginColor box-border h-screen w-screen">
      <div className="flex items-center flex-col justify-center h-screen">
        <img src={banner} alt="picture" />
        <div id="Input-form" className=" mt-20 w-80 flex flex-col">
          <div id="username/label" className="m-1 flex items-start flex-col">
            <label className="text-xl" style={{ color: "#fafafa" }} for="name">
              Username
            </label>
            <input
              className="p-1 w-80"
              style={{ color: "#F575CA", backgroundColor: "#333333" }}
              type="text"
              id="name"
              placeholder="Name"
            ></input>
          </div>
          <div id="password/label" className="m-1 flex items-start flex-col">
            <label
              className="text-xl"
              style={{ color: "#fafafa" }}
              for="password"
            >
              Password
            </label>
            <input
              className="p-1 w-80"
              style={{ color: "#F575CA", backgroundColor: "#333333" }}
              type="password"
              id="password"
              placeholder="Password"
            ></input>
          </div>
          <button className="m-3 w-14 rounded text-twhite bg-appoff   hover:bg-pinkpink ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

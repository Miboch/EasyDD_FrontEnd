import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  return (
    <div className="bg-appLoginColor box-border h-screen w-screen flex items-center flex-col justify-center">
      <h1 className="text-twhite text-5xl m-4">
        Join the <span className="text-pinkpink text-7xl">Dark</span> Side....
      </h1>
      <div className="flex flex-col">
        <div className="grid grid-flow-col grid-cols-2 grid-rows-2">
          <div className="flex flex-col m-1">
            <label className="text-twhite self-start" for="name">
              UserName
            </label>
            <input className="bg-appoff" type="text" id="name"></input>
          </div>
          <div className="flex flex-col m-1">
            <label className="text-twhite self-start" for="email">
              Email
            </label>
            <input className="bg-appoff" type="email" id="email"></input>
          </div>
          <div className="flex flex-col m-1">
            <label className="text-twhite self-start" for="password">
              Password
            </label>
            <input className="bg-appoff" type="password" id="password"></input>
          </div>
          <div className="flex flex-col m-1">
            <label className="text-twhite self-start" for="Cpass">
              Confirm Password
            </label>
            <input className="bg-appoff" type="password" id="cpass"></input>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="m-3 w-14 self-start rounded text-twhite bg-appoff   hover:bg-pinkpink ">
            Submit
          </button>
          <Link to="/" className="m-1 text-pinkpink hover:text-twhite">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

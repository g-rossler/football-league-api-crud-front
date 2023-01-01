import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-start flex-col sm:p-10">
      <h1 className="text-neutral-50 font-poppins text-5xl text-center pb-32 pt-32">
        Welcome to the English Football League
      </h1>
      <div className="flex flex-col sm:flex-row h-auto items-center justify-center gap-3.5 ">
        <Link to="/teams">
          <div className="w-full flex-auto">
            <div className="h-full w-80 mx-auto">
              <div className="flex w-full bg-white shadow rounded-lg py-2 px-2 border-2 border-emerald-500">
                <button
                  type="button"
                  className="m-auto inset-0 text-xl font-semibold leading-7 text-center text-emerald-500 font-poppins"
                >
                  See Teams
                </button>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/add-team">
          <div className="w-full">
            <div className="flex-1 h-full w-80 mx-auto">
              <div className="flex w-full bg-white shadow rounded-lg py-2 px-2 border-2 border-emerald-500">
                <button
                  type="button"
                  className="m-auto inset-0 text-xl font-semibold leading-7 text-center text-emerald-500 font-poppins"
                >
                  Create New Team
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;

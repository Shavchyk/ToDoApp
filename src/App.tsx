import BreakpointChecker from "./components/BreakpointChecker";

function App() {
  return (
    <>
      <div className="absolute">
        <BreakpointChecker />
      </div>
      <div className=" justify-center flex p-5">
        <h1 className="text-center  p-3 pl-12 pr-12 text-xl rounded-2xl font-bold w-fit text-white bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-yellow-500  ">
          To Do App
        </h1>
      </div>
    </>
  );
}

export default App;

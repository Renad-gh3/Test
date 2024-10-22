import "./App.css";

function App() {
  return (
    <section
      dir="rtl"
      className="grid h-svh w-svh grid-rows-[3fr_1fr] grid-cols-[1fr_1fr]  "
    >
      <div className="bg-red-500 ">Nhyan</div>
      <div className=" bg-lime-500 col-start-2  row-start-1 row-end-[-1]">
        Renad
      </div>
      <div className=" bg-sky-500">Rama</div>
    </section>
  );
}

export default App;

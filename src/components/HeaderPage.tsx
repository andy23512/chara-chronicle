import Clock from "./Clock";

function HeaderPage() {
  return (
    <div className="h-screen flex items-center justify-center flex-wrap">
      <div className="flex gap-16 justify-center flex-col lg:flex-row items-center">
        <div className="size-64 flex-none">
          <Clock />
        </div>
        <div className="flex-none flex items-center justify-center gap-8 flex-col w-[500px]">
          <h1 className="text-5xl lg:text-7xl font-bold">CharaChronicle</h1>
          <h2 className="w-full flex justify-between text-lg lg:text-2xl">
            <span>Every Character,</span>
            <span>Every Chord,</span>
            <span>Every Milestone</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;

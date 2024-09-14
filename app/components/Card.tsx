export default function Card() {
  return (
    <div className=" [perspective:500px]">
      <div
        id="card"
        className="w-[40rem] h-[30rem] bg-primary flex items-center outline-t-2 outline-green-500"
      >
        <div className="w-full h-2 bg-blue-500" />
      </div>
    </div>
  );
}

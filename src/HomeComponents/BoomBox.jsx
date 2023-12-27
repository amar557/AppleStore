import Button from "../components/Button";
import BoomBoxImg from "../pictures/BoomBox.png";
const Times = [
  {
    number: 23,
    notation: "hours",
  },
  {
    number: 23,
    notation: "hours",
  },
  {
    number: 23,
    notation: "hours",
  },
  {
    number: 23,
    notation: "hours",
  },
];
function BoomBox() {
  return (
    <div className="mx-auto mt-8 w-10/12 border-b-2 pb-8">
      <div className=" grid  h-[30rem] grid-cols-2 items-center bg-black px-16">
        <div className=" text-white">
          <h1 className="mb-8 text-sm font-semibold text-[#00FF66]">
            categories
          </h1>
          <h1 className="mb-3 text-4xl font-bold capitalize  tracking-wider">
            enhance your <br /> music experience
          </h1>
          <div className="my-6 flex space-x-3">
            {Times.map((obj, i) => (
              <Timings number={obj.number} notation={obj.notation} key={i} />
            ))}
          </div>
          <div>
            <Button content="buy now" color="bg-[#00FF66]" w="36" />
          </div>
        </div>
        <div className="">
          <img src={BoomBoxImg} alt="boombox" />
        </div>
      </div>
    </div>
  );
}
function Timings({ number, notation }) {
  return (
    <div className="box-border flex h-[4rem] w-[4rem] flex-col items-center justify-center rounded-[50%] bg-white text-center leading-5 text-black">
      <p className="font-bold">{number}</p>
      <p className="pb-1">{notation}</p>
    </div>
  );
}
export default BoomBox;

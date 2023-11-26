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
    <div className="mt-8 grid grid-cols-12 pb-8 border-b-2">
      <div className="col-start-2 col-end-12 h-[30rem] bg-black grid grid-cols-12 items-center">
        <div className="text-white col-start-2 col-end-6">
          <h1 className="font-semibold text-sm text-[#00FF66] mb-8">
            categories
          </h1>
          <h1 className="text-4xl capitalize tracking-wider font-bold  mb-3">
            enhance your <br /> music experience
          </h1>
          <div className="flex space-x-3 my-6">
            {Times.map((obj, i) => (
              <Timings number={obj.number} notation={obj.notation} key={i} />
            ))}
          </div>
          <div>
            <Button content="buy now" color="bg-[#00FF66]" w="9rem" />
          </div>
        </div>
        <div className="col-start-6 col-end-12">
          <img src={BoomBoxImg} alt="boombox" />
        </div>
      </div>
    </div>
  );
}
function Timings({ number, notation }) {
  return (
    <div className="bg-white text-black text-center rounded-[50%] w-[4rem] flex items-center justify-center flex-col h-[4rem] leading-5 box-border">
      <p className="font-bold">{number}</p>
      <p className="pb-1">{notation}</p>
    </div>
  );
}
export default BoomBox;

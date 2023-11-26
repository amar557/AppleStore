import playStation from "../pictures/playStation.png";
import WomansCollectionImg from "../pictures/womenCollection.png";
import echoSpeakerImg from "../pictures/echoSpeakers.png";
import perfumeImg from "../pictures/Perfume.png";
function Featured() {
  return (
    <div className="mt-12 grid grid-cols-12 grid-rows-[1fr_1fr_2fr_2fr_2fr_2fr]  gap-6 items-stretch ">
      <div className="col-start-2 text-red-500 font-bold self-end">
        Featured
      </div>
      <h1 className="capitalize col-start-2 mt-3 font-semibold text-xl row-start-2 self-end col-end-5 ">
        new arrival
      </h1>
      <div className="row-start-3  bg-black col-start-2 col-end-6 row-end-7 flex items-center justify-center relative">
        <img src={playStation} alt="playstation" />
        <Typography
          text="play section 5"
          content="Black and White version of the PS5 coming out on sale."
        />
      </div>
      <div className="row-start-3 bg-black col-start-6 col-end-12 row-end-5 flex items-center justify-end relative">
        <img src={WomansCollectionImg} alt="womancollection" />
        <Typography
          text="women's collection"
          content="Featured woman collections that give you another vibe."
        />
      </div>
      <div className="row-start-5 bg-black row-end-7 col-start-6 col-end-9 flex items-center justify-center relative">
        <img src={echoSpeakerImg} alt="echospeaker" />
        <Typography text="speakers" content="amazon wireless speaker" />
      </div>
      <div className="row-start-5 bg-black row-end-7 col-start-9 col-end-12 flex items-center justify-center relative ">
        <img src={perfumeImg} alt="perfumeImg" />
        <Typography text="perfume" content="GUCCI INTENSE OUD EDP" />
      </div>
    </div>
  );
}
function Typography({ text, content }) {
  return (
    <div className="absolute bottom-8 left-4 capitalize font-poppins text-white">
      <h1 className="font-semibold mb-1"> {text}</h1>
      <div className="text-[11px] font-normal capitalize">{content}</div>
      <button className="border-b-[1px] border-slate-300">shop now</button>
    </div>
  );
}
export default Featured;

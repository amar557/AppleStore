import storyImg from "../pictures/storyPic.png";
function Story() {
  return (
    <div className=" mt-20 flex  flex-col gap-x-5 font-poppins md:flex-row  md:items-center md:justify-between lg:space-x-10 ">
      <div className=" text-sm md:w-1/2 md:text-lg">
        <h1 className="text-lg font-semibold capitalize md:text-3xl md:font-bold">
          our Story
        </h1>
        <p className="mt-8 ">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>
        <p className="mb-5 mt-6   ">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>
      <div className="md:w-1/2 ">
        <img src={storyImg} alt="" className=" h-1/2 md:h-96 lg:h-fit" />
      </div>
    </div>
  );
}

export default Story;

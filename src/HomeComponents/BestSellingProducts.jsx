import Button from "../components/Button";
import ProductsPage from "./ProductItem";
import shirtImg from "../pictures/shirt.png";
import purseImg from "../pictures/purse.png";
import SpeakerImg from "../pictures/speakers.png";
import TableImg from "../pictures/table.png";
const productsData = [
  {
    img: shirtImg,
    heading: "the north coat",
    rate: "$260",
    Disrate: "$360",
    fill: true,
    rating: "65",
  },
  {
    img: purseImg,
    heading: "gucci daffle bag",
    rate: "$960",
    Disrate: "$1160",
    fill: true,
    rating: "65",
  },
  {
    img: SpeakerImg,
    heading: "RGB liquid cpu cooler",
    rate: "$160",
    Disrate: "$170",
    fill: true,
    rating: "65",
  },
  {
    img: TableImg,
    heading: "small book self",
    rate: "$360",
    Disrate: "",
    fill: true,
    rating: "65",
  },
];

function BestSellingProducts() {
  return (
    <div className="mx-auto mt-16 flex w-10/12 flex-col  items-center justify-center   border-b-2 ">
      <div className="col-start-2 self-start text-sm font-bold capitalize text-red-500">
        this month
      </div>
      <div className="  mb-3 flex w-full items-center justify-between">
        <h1 className="text-xl font-bold capitalize">best selling products</h1>
        <Button content="view all" />
      </div>

      <div className="mb-8 grid w-full grid-cols-1 gap-x-14 sm:grid-cols-2  lg:grid-cols-4 ">
        {productsData.map((data, i) => (
          <ProductsPage
            key={i}
            image={data.img}
            heading={data.heading}
            rate={data.rate}
            Disrate={data.Disrate}
            fill={data.fill}
            sale={false}
            cartBtn={false}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSellingProducts;

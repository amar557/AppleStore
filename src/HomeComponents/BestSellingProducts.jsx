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
    <div className="grid grid-cols-12 grid-rows-[1fr_2fr_6fr] items-center   mt-[4rem]  border-b-2 ">
      <div className="col-start-2 text-red-500 font-bold text-sm capitalize">
        this month
      </div>
      <div className="flex items-center justify-between row-start-2 col-start-2 col-end-12">
        <h1 className="text-xl capitalize font-bold">best selling products</h1>
        <Button content="view all" />
      </div>
      <div className="grid grid-cols-12 col-start-2 col-end-13 ">
        <div className="flex space-x-9 mb-8">
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
    </div>
  );
}

export default BestSellingProducts;

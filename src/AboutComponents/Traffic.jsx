import {
  faCartArrowDown,
  faDollarSign,
  faStore,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
  {
    icon: faStore,
    rating: "10.5",
    content: "sallers active our site",
  },
  {
    icon: faDollarSign,
    rating: "33",
    content: "monthly products sale",
  },
  {
    icon: faCartArrowDown,
    rating: "45.5",
    content: "customer active our site",
  },
  {
    icon: faSackDollar,
    rating: "25",
    content: "anual gross sale in our site",
  },
];
function Traffic() {
  return (
    <div className=" mx-auto  my-24 grid  grid-cols-1 grid-rows-4 justify-between gap-x-5 space-y-5 sm:grid-cols-2   sm:grid-rows-2  lg:grid-cols-4 lg:grid-rows-1  ">
      {data.map((data, i) => (
        <IconComponent
          icon={data.icon}
          rating={data.rating}
          content={data.content}
          key={i}
        />
      ))}
    </div>
  );
}

function IconComponent({ icon, rating, content }) {
  return (
    <>
      <div className="group flex flex-col items-center justify-center rounded-md border-2 p-4">
        <div className="flex  h-10 w-10 items-center justify-center rounded-[50%] bg-black p-2 text-white ring-4 ring-slate-300">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h1 className="my-4 text-xl font-bold">{rating}</h1>
        <p className="text-center">{content}</p>
      </div>
    </>
  );
}
export default Traffic;

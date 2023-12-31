import BestSellingProducts from "../HomeComponents/BestSellingProducts";
import BoomBox from "../HomeComponents/BoomBox";
import Categories from "../HomeComponents/Categories";
import Featured from "../HomeComponents/Featured";
import Main from "../HomeComponents/HomeMain";
import IconsSection from "../HomeComponents/IconsSection";
import OurProducts from "../HomeComponents/OurProducts";
import Products from "../HomeComponents/Products";

function Home() {
  return (
    <div>
      <Main />
      <Products />
      <Categories />
      <BestSellingProducts />
      <BoomBox />
      <OurProducts />
      <Featured />
      <IconsSection />
    </div>
  );
}

export default Home;

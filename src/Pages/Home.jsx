import BestSellingProducts from "../HomeComponents/BestSellingProducts";
import BoomBox from "../HomeComponents/BoomBox";
import Categories from "../HomeComponents/Categories";
import Featured from "../HomeComponents/Featured";
import Main from "../HomeComponents/HomeMain";
import IconsSection from "../HomeComponents/IconsSection";
import OurProducts from "../HomeComponents/OurProducts";
import Products from "../HomeComponents/Products";
import Pages from "../components/Swiper";

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
      <Pages />
    </div>
  );
}

export default Home;

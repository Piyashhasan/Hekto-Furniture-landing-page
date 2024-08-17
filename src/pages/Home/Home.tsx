import Banner from "../../components/Home/Banner/Banner";
import FeatureProducts from "../../components/Home/FeatureProducts/FeatureProducts";
import LatestProducts from "../../components/Home/LatestProducts/LatestProducts";
import MainNav from "../../components/Home/MainNav/MainNav";
import ShopexOffer from "../../components/Home/ShopexOffer/ShopexOffer";
import TopNav from "../../components/Home/TopNav/TopNav";
import UniqueFeature from "../../components/Home/UniqueFeature/UniqueFeature";

const Home = () => {
  return (
    <>
      <TopNav />
      <MainNav />
      <Banner />
      <FeatureProducts />
      <LatestProducts />
      <ShopexOffer />
      <UniqueFeature />
    </>
  );
};

export default Home;

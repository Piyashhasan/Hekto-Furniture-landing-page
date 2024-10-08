import Banner from "../../components/Home/Banner/Banner";
import BottomFooter from "../../components/Home/BottomFooter/BottomFooter";
import FeatureProducts from "../../components/Home/FeatureProducts/FeatureProducts";
import Footer from "../../components/Home/Footer/Footer";
import LatestProducts from "../../components/Home/LatestProducts/LatestProducts";
import MainNav from "../../components/Home/MainNav/MainNav";
import ShopexOffer from "../../components/Home/ShopexOffer/ShopexOffer";
import TopNav from "../../components/Home/TopNav/TopNav";
import TrendingProducts from "../../components/Home/TrendingProducts/TrendingProducts";
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
      <TrendingProducts />
      <Footer />
      <BottomFooter />
    </>
  );
};

export default Home;

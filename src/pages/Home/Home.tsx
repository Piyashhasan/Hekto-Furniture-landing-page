import Banner from "../../components/Home/Banner/Banner";
import FeatureProducts from "../../components/Home/FeatureProducts/FeatureProducts";
import MainNav from "../../components/Home/MainNav/MainNav";
import TopNav from "../../components/Home/TopNav/TopNav";

const Home = () => {
  return (
    <>
      <TopNav />
      <MainNav />
      <Banner />
      <FeatureProducts />
    </>
  );
};

export default Home;

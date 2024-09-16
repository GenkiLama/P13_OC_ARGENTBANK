import Banner from "../../component/banner/Banner";
import Features from "../../component/features/Features"
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Features />
    </div>
  );
};

export default Home;

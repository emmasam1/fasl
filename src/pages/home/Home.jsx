import Banner from "../../components/banner/Banner";
import Services from "../../components/services/Services";
import Statement from "../../components/statement/Statement";
import Scroll from "../../components/top/Scroll";
import Mission from "../mission/Mission";

const Home = () => {
  return (
    <div>
      <Banner />
      <Mission />
      <Services />
      <Statement />
      <Scroll />
    </div>
  );
};

export default Home;

import Banner from "../../components/banner/Banner";
import Services from "../../components/services/Services";
import Statement from "../../components/statement/Statement";
import Mission from "../mission/Mission";

const Home = () => {
  return (
    <div>
      <Banner />
      <Mission />
      <Services />
      <Statement />
    </div>
  );
};

export default Home;

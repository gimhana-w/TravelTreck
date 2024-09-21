import Nav from "../Nave/Nave.jsx";
import Hero from "./Hero.jsx";
import Tdest from "./Topdestination.jsx";
import Footer from "../../components/Footer/index.jsx";
import Packages from "./Packages.jsx";
import TopActivity from "./TopActivity.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import BookVehicle from "./BookVehicle.jsx";
import Reviews from "./Reviews.jsx";

function Home() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <Tdest></Tdest> <WhyChooseUs />
      <Packages />
      <TopActivity />
      <BookVehicle />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;

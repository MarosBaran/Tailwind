import { NavLink } from "react-router-dom";
import HomePageContent from "../components/HomePageContent";

const HomePage = () => {
  return (
    <HomePageContent title={"Welcome!"}>
      <button className=" my-5 font-mono text-3xl text-white bg-transparent hover:bg-white hover:text-light-green font-semibold py-2 px-4 border border-white hover:border-transparent rounded ">
        <NavLink to="/events">Events</NavLink>
      </button>
    </HomePageContent>
  );
};

export default HomePage;

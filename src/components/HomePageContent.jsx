import { Link } from "react-router-dom";
import githubLogo from "../assets/github-mark-white.png";
import linkedinLogo from "../assets/linkedinLogo.png";

function HomePageContent({ title, children }) {
  return (
    <div className="bg-[url('./assets/events_background.jpeg')] bg-cover bg-no-repeat ">
      <div className="flex items-center justify-center  flex-col  animate-slide h-[calc(100vh_-_48px)]  ">
        <h1 className=" font-mono text-6xl  sm:text-9xl text-light-blue ">
          {title}
        </h1>
        <p className=" font-mono text-2xl font-medium sm:text-5xl text-blue">
          Checkout all the events
        </p>
        {children}
        <p className=" font-mono text-xl sm:text-2xl text-light-blue">
          Developed by Maroš Baran
        </p>
        <div className="flex items-center justify-between py-1 w-1/4   sm:py-4  sm:w-24">
          <Link to={"https://github.com/MarosBaran"} target="_blank">
            <img
              src={githubLogo}
              width="40px"
              height="40px"
              alt="github logo"
            />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/maro%C5%A1-baran-8b7419280/"}
            target="_blank"
          >
            <img
              src={linkedinLogo}
              width="40px"
              height="40px"
              alt="linkedIn logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePageContent;

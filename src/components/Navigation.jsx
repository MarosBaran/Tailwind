import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className=" bg-light-green ">
      <ul className="flex space-x-2 justify-center items-center h-12 ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-black underline"
                : " text-dark-green font-black "
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive
                ? "text-white font-black underline"
                : " text-dark-green font-black "
            }
          >
            Events
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

import { Outlet } from "react-router-dom";

const EventLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default EventLayout;

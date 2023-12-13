import { MdMenuOpen } from "react-icons/md";
const Sidebar = ({ setSelected }) => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className=" flex flex-row justify-start w-12 p-2">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <MdMenuOpen />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-2 w-60 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li onClick={() => setSelected("Home")}>
              <a>Home</a>
            </li>
            <li onClick={() => setSelected("Create post")}>
              <a>Create post</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

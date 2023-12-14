import { FaInstagram } from "react-icons/fa6";
const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start w-full">
          <a className="btn btn-ghost text-xl m-0">
            MyGram
            <FaInstagram />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Services</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

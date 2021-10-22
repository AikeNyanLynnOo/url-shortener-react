const Navbar = (props) => {
  return (
    <nav className="flex items-center h-16 px-3 sm:px-16 lg:px-32 my-nav py-3">
      <h1 className="font-extrabold text-xl sm:text-2xl mr-3 flex-1 sm:flex-none">
        <a href="/">Shortly</a>
      </h1>
      <div className="hidden sm:flex content-between items-center flex-1 ml-2">
        <ul className="flex-1">
          <li className="inline mx-2 lg:mx-4">
            <a href="/#">Features</a>
          </li>
          <li className="inline mx-2 lg:mx-4">
            <a href="/#">Pricing</a>
          </li>
          <li className="inline mx-2 lg:mx-4">
            <a href="/#">Resoruces</a>
          </li>
        </ul>
        <ul>
          <li className="inline mx-2 lg:mx-4">
            <a href="/#">Login</a>
          </li>
          <li className="inline">
            <button className="text-white cursor-pointer rounded-2xl h-9 px-5 primary-btn">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
      <img
        src={"./images/menu.png"}
        alt="menu-icon"
        className="block sm:hidden h-7 w-7 cursor-pointer"
        onMouseOver={(e) => (e.currentTarget.src = "./images/menu_active.png")}
        onMouseLeave={(e) => (e.currentTarget.src = "./images/menu.png")}
      />
    </nav>
  );
};
export default Navbar;

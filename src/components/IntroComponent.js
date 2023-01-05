const Intro = (props) => {
  return (
    <div className="block sm:flex items-center justify-between sm:pl-16 lg:pl-32 py-10 overflow-x-hidden intro">
      <img
        src={"./images/illustration-working.svg"}
        alt="intro-img"
        className="sm:static sm:-right-0 sm:-mr-20 h-64 sm:h-60 md:h-96 order-last my-intro-img"
      />
      <div className="mt-5 sm:mt-0 text-center sm:text-left px-3 sm:px-1">
        <h2 className="font-extrabold text-3xl md:text-5xl lg:text-7xl">
          More than just shorter links
        </h2>
        <p className="mt-3 sm:mr-12">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="text-white cursor-pointer rounded-3xl h-10 px-5 mt-6 primary-btn">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Intro;

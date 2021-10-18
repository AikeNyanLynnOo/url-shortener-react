import React from "react";
import LinkCard from "./LinkCardComponent";

class Mid extends React.Component {
  render() {
    return (
      <section>
        <section className="relative mt-20 sm:mt-16 my-mid">
          <form
            className="absolute -top-20 sm:-top-16 left-2/4 transform -translate-x-2/4 my-width p-4 sm:p-10 block sm:flex justify-between items-center rounded-md border"
            style={{ backgroundImage: `url("/images/bg-shorten-desktop.svg")` }}
          >
            <input
              type="text"
              placeholder="Shorten a link here..."
              className="flex-1 h-12 px-5 mr-5 rounded-md focus:ring-0 focus:outline-none w-full sm:w-auto"
            />
            <span className="text-red-600 italic block sm:hidden mt-1">
              Please add a link
            </span>
            <button className="text-white cursor-pointer rounded-md h-12 px-5 w-full sm:w-auto mt-3 sm:mt-0 primary-btn">
              Shorten it!
            </button>
            <span className="text-red-600 italic absolute hidden sm:inline">
              Please add a link
            </span>
          </form>
          <section className="absolute top-24 sm:top-20 left-2/4 transform -translate-x-2/4 my-width py-4">
            Recent links
            <div className="overflow-y-scroll h-72 my-links mt-2">
              {[
                {
                  origin: "https://frontendmentor.io",
                  result: "https://rel.ink/k4IKyk",
                },
                {
                  origin: "https://frontendmentor.io",
                  result: "https://rel.ink/k4IKyk",
                },
                {
                  origin: "https://frontendmentor.io",
                  result: "https://rel.ink/k4IKyk",
                },
                {
                  origin: "https://frontendmentor.io",
                  result: "https://rel.ink/k4IKyk",
                },
                {
                  origin: "https://frontendmentor.io",
                  result: "https://rel.ink/k4IKyk",
                },
              ].map((link, idx) => {
                return <LinkCard key={idx} link={link} />;
              })}
            </div>
          </section>
        </section>
        <section className="my-mid-info py-4 px-3 sm:px-16 lg:px-32">
          <div className="my-width mx-auto text-center">
            <h3 className="font-extrabold text-4xl">Advanced Statistics</h3>
            <p className="mt-5 px-3 lg:px-16 xl:px-40">
              Track how your links are performing access the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="block lg:flex h-auto mt-14 py-4 my-info-flex">
            <div className="bg-white rounded-lg relative flex-1 self-start pb-6 pt-14 mt-5 lg:mt-0 text-center lg:text-left my-card">
              <div className="absolute -top-8 left-2/4 transform -translate-x-2/4 lg:transform translate-x-2/4 lg:left-7 p-5 rounded-full my-circle">
                <img
                  src={"/images/icon-brand-recognition.svg"}
                  className="h-7 w-7"
                  alt="brand-icon"
                />
              </div>
              <h4 className="font-semibold text-xl mb-4 mx-7">
                Brand recognition
              </h4>
              <p className="mx-7 leading-7">
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <p className="mx-auto h-16 w-2 lg:h-2 lg:w-8 small-block self-center"></p>
            <div className="bg-white rounded-lg relative flex-1 pb-6 pt-14 lg:mt-0 self-center text-center lg:text-left my-card">
              <div className="absolute -top-8 left-2/4 transform -translate-x-2/4 lg:transform translate-x-2/4 lg:left-7 p-5 rounded-full my-circle">
                <img
                  src={"/images/icon-detailed-records.svg"}
                  className="h-7 w-7"
                  alt="brand-icon"
                />
              </div>
              <h4 className="font-semibold text-xl mb-4 mx-7">
                Brand recognition
              </h4>
              <p className="mx-7 leading-7">
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <p className="mx-auto h-16 w-2 lg:h-2 lg:w-8 small-block self-center"></p>
            <div className="bg-white rounded-lg relative flex-1 pb-6 pt-14 lg:mt-0 self-end text-center lg:text-left my-card">
              <div className="absolute -top-8 left-2/4 transform -translate-x-2/4 lg:transform translate-x-2/4 lg:left-7 p-5 rounded-full my-circle">
                <img
                  src={"/images/icon-fully-customizable.svg"}
                  className="h-7 w-7"
                  alt="brand-icon"
                />
              </div>
              <h4 className="font-semibold text-xl mb-4 mx-7">
                Brand recognition
              </h4>
              <p className="mx-7 leading-7">
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Mid;

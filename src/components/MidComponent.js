import React from "react";
import LinkCard from "./LinkCardComponent";
import Card from "./CardComponent";

import { INFO } from "../shared/data";

class Mid extends React.Component {
  render() {
    return (
      <section>
        <section
          className={`relative mt-20 sm:mt-16 my-mid ${
            this.props.appState.recentLinks &&
            this.props.appState.recentLinks.length > 0
              ? "mid-height"
              : "h-28"
          }`}
        >
          <form
            className="absolute -top-20 sm:-top-16 left-2/4 transform -translate-x-2/4 my-width p-4 sm:p-10 block sm:flex justify-between items-center rounded-md bg-no-repeat bg-center bg-cover border"
            style={{ backgroundImage: `url("/images/bg-shorten-desktop.svg")` }}
            method="POST"
          >
            <input
              type="text"
              name="orgLink"
              value={this.props.appState.orgLink}
              onChange={this.props.handleChange}
              placeholder="Shorten a link here..."
              className="flex-1 h-12 px-5 mr-5 rounded-md focus:ring-0 focus:outline-none w-full sm:w-auto"
            />
            {this.props.appState.isLoading && (
              <span className="text-white italic block sm:hidden mt-1">
                Loading...
              </span>
            )}
            {this.props.appState.isSuccess && (
              <span className="text-green-500 italic block sm:hidden mt-1">
                Successful
              </span>
            )}
            {this.props.appState.errMsg && (
              <span className="text-red-400 italic block sm:hidden mt-1">
                {this.props.appState.errMsg}
              </span>
            )}

            <button
              className="text-white cursor-pointer rounded-md h-12 px-5 w-full sm:w-auto mt-3 sm:mt-0 primary-btn"
              onClick={this.props.shortenLink}
            >
              Shorten it!
            </button>

            {this.props.appState.isLoading && (
              <span className="text-white italic absolute hidden sm:inline mt-1">
                Loading...
              </span>
            )}
            {this.props.appState.isSuccess && (
              <span className="text-green-500 italic absolute hidden sm:inline mt-1">
                Successful
              </span>
            )}
            {this.props.appState.errMsg && (
              <span className="text-red-400 italic absolute hidden sm:inline mt-1">
                {this.props.appState.errMsg}
              </span>
            )}
          </form>
          {!this.props.appState.isLoading &&
            this.props.appState.recentLinks.length > 0 && (
              <section className="absolute top-24 sm:top-20 left-2/4 transform -translate-x-2/4 my-width py-4">
                Recent links
                <div className="overflow-y-scroll h-72 my-links mt-2">
                  {this.props.appState.recentLinks.map((link, idx) => {
                    return (
                      <LinkCard
                        key={idx}
                        link={link}
                        id={idx}
                        deleteLink={this.props.deleteLink}
                      />
                    );
                  })}
                </div>
              </section>
            )}
        </section>
        <section className="my-mid-info pt-4 pb-20 px-3 sm:px-16 lg:px-32">
          <div className="my-width mx-auto text-center">
            <h3 className="font-extrabold text-3xl md:text-4xl">
              Advanced Statistics
            </h3>
            <p className="mt-5 px-3 lg:px-16 xl:px-40">
              Track how your links are performing access the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="block lg:flex h-auto mt-14 py-4 my-info-flex">
            <Card
              selfAlign={INFO[0].seftAlign}
              img={INFO[0].img}
              title={INFO[0].title}
              description={INFO[0].description}
            />
            <p className="mx-auto h-16 w-2 lg:h-2 lg:w-8 small-block self-center"></p>
            <Card
              selfAlign={INFO[1].seftAlign}
              img={INFO[1].img}
              title={INFO[1].title}
              description={INFO[1].description}
            />
            <p className="mx-auto h-16 w-2 lg:h-2 lg:w-8 small-block self-center"></p>
            <Card
              selfAlign={INFO[2].seftAlign}
              img={INFO[2].img}
              title={INFO[2].title}
              description={INFO[2].description}
            />
          </div>
        </section>
        <section
          className="py-16 w-full bg-no-repeat bg-center bg-cover boost-section"
          style={{ backgroundImage: `url("/images/bg-shorten-desktop.svg")` }}
        >
          <h5 className="text-white text-center font-extrabold text-3xl md:text-4xl">
            Boost your links today
          </h5>
          <button className="text-white rounded-3xl block w-40 mx-auto cursor-pointer py-3 mt-5 primary-btn">
            Get Started
          </button>
        </section>
      </section>
    );
  }
}

export default Mid;

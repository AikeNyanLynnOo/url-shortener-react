import { useState } from "react";

const LinkCard = ({ link, id, deleteLink }) => {
  const [isCopy, setIsCopy] = useState(false);

  const makeCopy = (text) => {
    navigator.clipboard.writeText(text).then(
      function () {
        setIsCopy(true);
      },
      function (err) {
        setIsCopy(false);
      }
    );
  };
  return (
    <div className="rounded-md bg-white  my-link-card mt-3 px-4 py-3 ">
      <div className="block md:flex content-between items-center ">
        <p className="flex-1 truncate sm:mr-8 my-3 md:my-0">{link.orgLink}</p>
        <hr className="block md:hidden" />
        <div className="block md:flex my-3 md:my-0 items-center justify-between">
          <a
            href={`https://${link.shortLink}`}
            rel="noreferrer"
            target="_blank"
            className="truncate mr-3 block md:inline short-link"
          >
            {link.shortLink}
          </a>
          <div className="my-3 md:my-0 flex justify-between items-center md:block">
            <button
              className="text-white cursor-pointer rounded-md h-9 px-5 flex-1 text-sm copy-btn primary-btn"
              onClick={() => makeCopy(link.shortLink)}
            >
              {(!isCopy && "Copy") || "Copied!"}
            </button>
            <img
              src={"./images/trash.png"}
              alt="delete icon"
              className="h-6 w-6 inline-block ml-3 cursor-pointer"
              onClick={() => {
                setIsCopy(false);
                deleteLink(id);
              }}
            />
          </div>
        </div>
      </div>
      <p className="italic text-gray-500">{link.date}</p>
    </div>
  );
};
export default LinkCard;

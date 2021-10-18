const LinkCard = ({ link }) => {
  return (
    <div className="rounded-md bg-white block sm:flex content-between items-center px-4 py-3 mt-3 my-link-card">
      <p className="flex-1 truncate sm:mr-8 my-3 sm:my-0">{link.origin}</p>
      <hr className="block sm:hidden" />
      <div className="">
        <a
          href={link.result}
          className="truncate mr-3 block sm:inline my-2 sm:my-0 short-link"
        >
          {link.result}
        </a>
        <button className="text-white cursor-pointer rounded-md h-9 px-5 w-full sm:w-auto my-2 sm:my-0 primary-btn">
          Copy
        </button>
      </div>
    </div>
  );
};
export default LinkCard;

const LinkCard = ({ link }) => {
  return (
    <div className="rounded-md bg-white block md:flex content-between items-center px-4 py-3 mt-3 my-link-card">
      <p className="flex-1 truncate sm:mr-8 my-3 md:my-0">{link.origin}</p>
      <hr className="block md:hidden" />
      <div className="block md:flex my-3 md:my-0 items-center justify-between">
        <a
          href={link.result}
          className="truncate mr-3 block md:inline short-link"
        >
          {link.result}-asdkfkasdfkjkasdjfkjask
        </a>
        <div className="my-3 md:my-0 flex justify-between items-center md:block">
          <button className="text-white cursor-pointer rounded-md h-9 px-5 flex-1 primary-btn">
            Copy
          </button>
          <img
            src={"/images/trash.png"}
            alt="delete icon"
            className="h-6 w-6 inline-block ml-3 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
export default LinkCard;

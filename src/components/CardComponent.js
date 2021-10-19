const Card = ({ selfAlign, img, title, description }) => {
  return (
    <div
      className={`bg-white rounded-lg relative flex-1 pb-6 pt-14 lg:mt-0 ${selfAlign} text-center lg:text-left my-card`}
    >
      <div className="absolute -top-8 left-2/4 transform -translate-x-2/4 lg:left-7 lg:transform lg:translate-x-0 p-5 rounded-full my-circle">
        <img src={img} className="h-7 w-7" alt="brand-icon" />
      </div>
      <h4 className="font-semibold text-xl mb-4 mx-7">{title}</h4>
      <p className="mx-7 leading-7">{description}</p>
    </div>
  );
};

export default Card;

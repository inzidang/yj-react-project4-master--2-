export default function ButtonSlide({ text }) {
  return (
    <div className="">
      <button
      type="submit"
        className="border border-neutral-400 px-6 py-1
      bg-gray-800 
      text-white 
      hover:text-neutral-600 
        hover:shadow-[inset_30rem_0_0_0] 
      hover:shadow-white duration-[400ms,700ms] 
        transition-[color,box-shadow]"
      >
        <p>{text}</p>
      </button>
    </div>
  );
}

function Button({ content, color = "bg-red-500", w = "28" }) {
  return (
    <div
      className={`w-${w} rounded-sm px-2   text-center text-xs font-[400] capitalize text-white md:py-3 md:w-${w} ${color} hover:cursor-pointer hover:bg-blend-color`}
    >
      {content}
    </div>
  );
}

export default Button;

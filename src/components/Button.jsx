function Button({ content, color = "bg-red-500", w = "11rem" }) {
  return (
    <div
      className={` p-2 w-[11rem] rounded-sm capitalize text-center text-white font-[400] ${color} hover:cursor-pointer`}
    >
      {content}
    </div>
  );
}

export default Button;

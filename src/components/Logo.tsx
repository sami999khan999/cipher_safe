const Logo = ({ color }: { color?: string }) => {
  return (
    <div
      className={`text-xl ${
        color ? color : "text-gray-300"
      } font-semibold md:text-2xl`}
    >
      <span className="text-green-600 font-bold">{"<"}</span>
      Cipher
      <span className="text-green-600 font-bold">Safe/{">"}</span>
    </div>
  );
};

export default Logo;

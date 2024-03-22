const Skeliton = () => {
  return (
    <div className="wrapper w-[70rem] mt-12">
      <div className="h-10 bg-green-100 w-56 mb-2 rounded-sm"></div>
      <div className=" animate-pulse rounded-sm overflow-hidden">
        <div className="h-10 bg-green-300"></div>
        <div className="h-10 bg-green-100"></div>
        <div className="h-10 bg-green-200"></div>
        <div className="h-10 bg-green-100"></div>
        <div className="h-10 bg-green-200"></div>
        <div className="h-10 bg-green-100"></div>
        <div className="h-10 bg-green-200"></div>
      </div>
      <div className="flex gap-1 animate-pulse justify-center mt-2">
        <div className="bg-green-300 h-8 w-16"></div>
        <div className="bg-green-200 h-8 w-16"></div>
        <div className="bg-green-300 h-8 w-16"></div>
      </div>
    </div>
  );
};

export default Skeliton;

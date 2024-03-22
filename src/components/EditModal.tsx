const EditModal = ({ setEditIsOpen }: any) => {
  const handleInnerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-green-900/50 backdrop-blur-sm "
      onClick={() => setEditIsOpen((prv: boolean) => !prv)}
    >
      <div
        className="w-[20rem] h-[35rem] bg-slate-500 z-10"
        onClick={handleInnerClick}
      ></div>
    </div>
  );
};

export default EditModal;

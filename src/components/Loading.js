import ReactLoading from "react-loading";
const Loading = () => {
  return (
    <div className="flex w-full h-full flex-col gap-1 md:gap-2 items-center justify-center">
      <ReactLoading type="bubbles" color="#38B2AC" className="w-[10%] h-[10%]" />
      <span>Loading</span>
    </div>
  );
};

export default Loading;

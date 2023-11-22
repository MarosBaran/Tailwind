const LoadingIndicator = () => {
  return (
    <div className="flex gap-2 justify-center items-center h-[calc(100vh-48px)]">
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue"></div>
    </div>
  );
};
export default LoadingIndicator;

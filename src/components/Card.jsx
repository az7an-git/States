const Card = ({ title, children }) => {
  return (
    <div className="flex flex-col justify-between items-center text-blue-700 bg-white p-4 rounded-xl shadow-md border border-blue-200 w-full sm:w-66 min-h-[220px] transition-all hover:scale-[1.02]">
      <h2 className="text-lg font-semibold text-center mb-1">{title}</h2>
      <div className="flex flex-col items-center gap-2 w-full">{children}</div>
    </div>
  );
};

export default Card;

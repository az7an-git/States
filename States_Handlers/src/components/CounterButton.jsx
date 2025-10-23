const CounterButton = ({ label, onClick, variant = "primary" }) => {
  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "bg-blue-100 hover:bg-blue-200 text-blue-700";

  return (
    <button
      onClick={onClick}
      className={`${styles} px-3 py-1.5 rounded-md text-sm font-medium transition flex-1`}
    >
      {label}
    </button>
  );
};

export default CounterButton;

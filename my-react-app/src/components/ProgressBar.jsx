export const ProgressBar = ({ value = 0 }) => {
  
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div className="bg-gray-200 dark:bg-gray-700 h-2 mt-2 rounded">
      
      <div
        className="bg-blue-500 h-2 rounded transition-all duration-300"
        style={{ width: `${safeValue}%` }}
      ></div>

    </div>
  );
};
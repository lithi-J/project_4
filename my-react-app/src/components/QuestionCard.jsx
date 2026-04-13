export const QuestionCard = ({ q, onAnswer }) => {
  if (!q) return <p>No question available</p>;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow text-gray-800 dark:text-gray-100">

      <h2 className="font-bold text-lg mb-3">
        {q.question}
      </h2>

      {q.options?.map((o, i) => (
        <button
          key={i}
          onClick={() => onAnswer(o.category)} // ✅ FIX
          className="block w-full mt-2 p-2 border rounded hover:bg-blue-500 hover:text-white transition"
        >
          {o.text} {/* ✅ FIX */}
        </button>
      ))}

    </div>
  );
};
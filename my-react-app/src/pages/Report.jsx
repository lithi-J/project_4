import { useLocation } from "react-router-dom";

export default function Report() {
  const { state } = useLocation();
  const answers = state?.answers || [];

  // ✅ count categories
  const counts = {
    Technology: 0,
    Creative: 0,
    Management: 0,
  };

  answers.forEach((a) => {
    if (counts[a] !== undefined) {
      counts[a]++;
    }
  });

  // ✅ convert to percentage
  const total = answers.length || 1;
  const stats = Object.entries(counts).map(([key, value]) => ({
    name: key,
    value: (value / total) * 100,
  }));

  return (
    <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 rounded shadow text-gray-800 dark:text-gray-100">

      <h2 className="text-xl font-bold mb-4">Your Report</h2>

      {stats.map((item, i) => (
        <div key={i} className="mb-4">

          <p className="mb-1">{item.name}</p>

          <div className="bg-gray-200 dark:bg-gray-700 h-2 rounded">
            <div
              className="bg-green-500 h-2 rounded transition-all"
              style={{ width: item.value + "%" }}
            ></div>
          </div>

        </div>
      ))}

    </div>
  );
}
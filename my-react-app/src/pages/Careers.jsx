import { useState, useMemo } from "react";
import { careers } from "../data/careers";

export default function Careers() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return careers.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, careers]); // ✅ added careers

  return (
    <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 rounded shadow text-gray-800 dark:text-gray-100">

      <h2 className="text-xl font-bold mb-3">Careers</h2>

      <input
        type="text"
        placeholder="Search careers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full rounded mb-3"
      />

      {/* Results */}
      {filtered.length > 0 ? (
        filtered.map((c) => (
          <div
            key={c.id}
            className="p-3 border rounded mb-2 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
          >
            <h3 className="font-semibold">{c.name}</h3>
            <p className="text-sm">{c.category}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No results found</p>
      )}

    </div>
  );
}
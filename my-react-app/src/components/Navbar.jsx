import { useTheme } from "../context/ThemeContext";

export const Navbar = () => {
  const { dark, setDark } = useTheme();

  return (
    <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow text-gray-800 dark:text-gray-100">
      
      <h1 className="font-bold text-lg">
        Dashboard
      </h1>

      <button
        onClick={() => setDark(!dark)}
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:opacity-80 transition"
      >
        {dark ? "☀ Light" : "🌙 Dark"}
      </button>

    </div>
  );
};
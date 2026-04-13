import { useState, useEffect } from "react";

export const ProfileModal = ({ open, setOpen, profile, setProfile }) => {
  const [temp, setTemp] = useState(profile || { name: "", email: "", stream: "" });

  useEffect(() => {
    setTemp(profile || { name: "", email: "", stream: "" });
  }, [profile]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center"
      onClick={() => setOpen(false)} // ✅ close on outside click
    >
      <div
        className="bg-white dark:bg-gray-800 p-5 rounded w-80 text-gray-800 dark:text-gray-100"
        onClick={(e) => e.stopPropagation()} // ✅ prevent close when clicking inside
      >
        <h2 className="text-lg font-bold mb-3">Edit Profile</h2>

        <input
          className="border p-2 w-full mb-2 rounded"
          placeholder="Name"
          value={temp.name}
          onChange={(e) => setTemp({ ...temp, name: e.target.value })}
        />

        <input
          className="border p-2 w-full mb-2 rounded"
          placeholder="Email"
          value={temp.email}
          onChange={(e) => setTemp({ ...temp, email: e.target.value })}
        />

        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Stream"
          value={temp.stream}
          onChange={(e) => setTemp({ ...temp, stream: e.target.value })}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={() => setOpen(false)}
            className="px-3 py-1 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              setProfile(temp);
              setOpen(false);
            }}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
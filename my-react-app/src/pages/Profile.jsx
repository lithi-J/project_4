import { useState, useEffect } from "react";
import { ProfileModal } from "../components/ProfileModal";

// random image
const getRandomDP = () =>
  `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`;

export default function Profile() {
  const [open, setOpen] = useState(false);

  const [profile, setProfile] = useState({
    name: "John",
    email: "john@mail.com",
    stream: "CSE",
    dp: getRandomDP(),
  });

  useEffect(() => {
    setProfile((prev) => ({
      ...prev,
      dp: getRandomDP(),
    }));
  }, []);

  return (
    <div className="max-w-md mx-auto mt-6 bg-white dark:bg-gray-800 p-5 rounded shadow text-gray-800 dark:text-gray-100">

      {/* ✅ Flex layout */}
      <div className="flex items-center gap-4">

        {/* ✅ Left side DP */}
        <img
          src={profile.dp}
          alt="Profile"
          onClick={() => setOpen(true)}
          className="w-20 h-20 rounded-full border cursor-pointer hover:scale-105 transition"
        />

        {/* ✅ Right side details */}
        <div>
          <h2 className="text-lg font-bold">{profile.name}</h2>
          <p className="text-sm">{profile.email}</p>
          <p className="text-sm">{profile.stream}</p>
        </div>

      </div>

      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Edit Profile
      </button>

      {/* Modal */}
      <ProfileModal
        open={open}
        setOpen={setOpen}
        profile={profile}
        setProfile={setProfile}
      />
    </div>
  );
}
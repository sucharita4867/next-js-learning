import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-2 border-r-2">
        <Link
          href={"/"}
          className="text-2xl font-bold hover:border px-3 py-2 border-gray-400"
        >
          DevStory
        </Link>
        <div className="flex flex-col gap-5 mt-10">
          <Link
            className="py-2 px-4 w-full bg-gray-500 rounded"
            href={"/dashboard/add-story"}
          >
            Add Story
          </Link>
          <Link
            className="py-2 px-4 w-full bg-gray-500 rounded"
            href={"/dashboard/my-profile"}
          >
            My Profile
          </Link>
          <Link
            className="py-2 px-4 w-full bg-gray-500 rounded"
            href={"/dashboard/settings"}
          >
            Settings
          </Link>
        </div>
      </div>
      <div className="col-span-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;

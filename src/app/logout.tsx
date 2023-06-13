"use client";
import { signOut } from "next-auth/react";
function Logout() {
  function logout() {
    signOut();
  }
  return (
    <button
      onClick={logout}
      className="py-1 px-5 hover:bg-rose-700 transition bg-rose-600 text-white rounded "
    >
      Logout
    </button>
  );
}

export default Logout;

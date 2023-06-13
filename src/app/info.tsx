"use client";
import { useSession } from "next-auth/react";

function Info() {
  const { data, status } = useSession();
  return (
    <div>
      <img
        className="block mx-auto"
        src={data?.user?.image as string}
        alt="image"
      />
      <h2>Status: {status}</h2>
      <h2>Name: {data?.user?.name}</h2>
      <h2>Email: {data?.user?.email}</h2>
    </div>
  );
}

export default Info;

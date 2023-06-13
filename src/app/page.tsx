import Info from "./info";
import Logout from "./logout";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-xl">This is Protected Page</h2>
      <Info />
      <Logout />
    </main>
  );
}

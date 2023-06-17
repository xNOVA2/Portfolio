import { BsCloudMoon } from "react-icons/bs";
import Link from "next/link";
export default function Navbar() {
  return (
  <div className=" text-sm  flex justify-around py-5">
    <div>
      <h1 className="text-2xl font-bold"> <Link href='/'>DevAli</Link></h1>
    </div>
    <div className="flex gap-4">
      
     <button className="bg-indigo-500 py-2 px-2 rounded text-white">Resume</button>
    </div>
  </div>
  );
}

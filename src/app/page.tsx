import Image from "next/image";
import './style.css'
import Home from "@/components/home";
import MouseTrail from "@/components/mouseTrail";

export default function Page() {
  return (
    <div>
      <MouseTrail/>
      <Home/>
    </div>
  );
}

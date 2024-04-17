import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <>
 <div className="hero min-h-screen magicpattern">
<div className="hero-content text-center">
  <div className="max-w-md">
    <h1 className="text-6xl headTitle font-bold">GPTGenius</h1>
    <p className="py-6 text-lg  leading-loose">GPTGenius: Your AI language companion. Powered by OpenAI, it enhances your conversations, content creation, and more!</p>
    <Link href='/chat' className="btn costumebtn ">
      Get Started
    </Link>
  </div>

</div>
 </div>
  </>;
}

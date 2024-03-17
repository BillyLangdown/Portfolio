import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
export default function NavBar(){
    return (
        <nav className="py-8 md:py-16 lg:py-20 xl:py-26  flex justify-between align-middle md:justify-around">
          <Image
            className="w-auto h-8 md:h-10 lg:h-20 "
            src={"/logo-transparent-png.png"}
            alt="A type-based logo reading Billy Langdown"
            width={1000}
            height={1000}
          />
          <div className="flex items-center text-gray-800 text-3xl lg:text-4xl xl:text-6xl" >
            <a href="https://github.com/BillyLangdown" className="mr-4 ">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/billy-l-263072142/">
              <AiFillLinkedin />
            </a>
          </div>
        </nav>
    )
}
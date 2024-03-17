
import Image from "next/image";
import Api from "/public/postgres-logo.png";
import JavaScript from "/public/JavascriptIcon.png";
import Jest from "/public/JestIcon.png";
import Express from "/public/Express.png";
import Psql from "/public/psql.png";
import Node from "/public/nodeIcon.png";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import logo from "/public/logo-transparent-png.png"

export default function newsapi() {
  return (
    <main className="bg-gradient-to-br from-slate-200 to-blue-900 p-8">
      <section>
        <nav className="py-8 md:py-16 lg:py-24 xl:py-30 mb-6 flex justify-between md:justify-around">
          <img
            className="w-auto h-8 md:h-10 lg:h-20 pt-1"
            src={logo}
            alt="A type-based logo reading Billy Langdown"
          />
          <div className="flex items-center text-gray-800 text-lg lg:text-4xl xl:text-5xl" >
            <a href="https://github.com/BillyLangdown" className="mr-4">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/billy-l-263072142/">
              <AiFillLinkedin />
            </a>
          </div>
        </nav>

        <a className="text-2xl" href="/">
          <IoIosArrowBack />
        </a>

        <div className="bg-gray-200 rounded-lg py-5 mt-5">
          <div className="flex justify-center my-5 px-5 md:px-24 lg:px-64">
            <Image src={Api} />
          </div>

          <div className=" flex justify-center pb-6">
            <h2 className=" text-2xl font-openSans font-bold text-gray-800">
              NC News Api
            </h2>
          </div>
          <div>
            <p className="px-8 md:px-16 lg:px-48 xl:px-80 text-center text-sm lg:text-lg">
              In this solo project, I developed a RESTful API using JavaScript
              and Node.js, strictly following Test-Driven Development principles
              with Jest. Building the project from scratch provided valuable
              insights into website functionality and enhanced my skills in
              designing robust and scalable APIs along with giving me working
              experience with SQL using PSQL.
            </p>
          </div>
          <div className="flex justify-center gap-5 py-5">
            <Link
              href={
                "https://github.com/https://github.com/BillyLangdown/news-api"
              }
            >
              <button className=" bg-gradient-to-br from-gray-300 to-blue-500  text-xs rounded-lg p-1 border-2 tracking-wider  active:border-gray-200 duration-300 active:text-white">
                GitHub
              </button>
            </Link>
            <Link
              href={
                "https://nc-news-api-vw2o.onrender.co/api"
              }
            >
              <button className=" bg-gradient-to-br from-gray-300 to-blue-500  text-xs rounded-lg p-1 border-2 tracking-wider  active:border-gray-200 duration-300 active:text-white">
                Live API
              </button>
            </Link>
          </div>
          <div>
            <ul className=" flex justify-center gap-5 py-3 px-8 items-center">
              <li className="image-item">
                {" "}
                <Image src={JavaScript} className=" w-10 h-auto" />
              </li>
              <li className="image-item">
                {" "}
                <Image src={Jest} className="w-10 h-auto" />
              </li>
              <li className="image-item">
                {" "}
                <Image src={Node} className="w-10 h-auto rounded-full" />
              </li>
              <li className="image-item">
                {" "}
                <Image src={Express} className="w-20 h-auto" />
              </li>
              <li className="image-item">
                {" "}
                <Image src={Psql} className="w-10 h-auto" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div>
        <p className="flex justify-center text-xs text-slate-300">- billy.langdown01@gmail.com -</p>
      </div>
    </main>
  );
}

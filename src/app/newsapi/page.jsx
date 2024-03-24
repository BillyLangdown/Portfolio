import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import NavBar from "../Navbar";

export default function NewsApiPage() {
  return (
    <main className="bg-gradient-to-br from-slate-200 to-blue-900 p-8">
      <section>
        <NavBar />

        <a className="text-2xl" href="/">
          <IoIosArrowBack />
        </a>

        <div className="bg-gray-200 rounded-lg py-5 mt-5">
          <div className="flex justify-center my-5 px-5 md:px-24 lg:px-64">
            <Image
              src="/postgres-logo.png"
              alt="The Postgres icon"
              width={5000}
              height={5000}
            />
          </div>

          <div className="flex justify-center pb-6">
            <h2 className="text-2xl font-openSans font-bold text-gray-800">
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
            <a
              href={"https://github.com/BillyLangdown/news-api"}
              className="inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-blue-200 before:to-blue-600 before:rounded-full before:opacity-0 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100"
            >
              GitHub
            </a>
            <a
              href="https://nc-news-api-vw2o.onrender.com/api"
              className="inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-blue-200 before:to-blue-600 before:rounded-full before:opacity-0 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100"
            >
              Live API
            </a>
          </div>
          <div>
            <ul className="flex justify-center gap-5 py-3 px-8 items-center">
              <li className="image-item">
                <Image
                  src="/JavascriptIcon.png"
                  alt="The JavaScript Icon"
                  className="w-10 h-auto"
                  width={5000}
                  height={5000}
                />
              </li>
              <li className="image-item">
                <Image
                  src="/JestIcon.png"
                  alt="The Jest Icon"
                  className="w-10 h-auto"
                  width={5000}
                  height={5000}
                />
              </li>
              <li className="image-item">
                <Image
                  src="/nodeIcon.png"
                  alt="The Node Icon"
                  className="w-10 h-auto"
                  width={5000}
                  height={5000}
                />
              </li>
              <li className="image-item">
                <Image
                  src="/Express.png"
                  alt="The Express Icon"
                  className="w-10 h-auto"
                  width={5000}
                  height={5000}
                />
              </li>
              <li className="image-item">
                <Image
                  src="/psql.png"
                  alt="The psql icon"
                  className="w-10 h-auto"
                  width={5000}
                  height={5000}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div>
        <p className="flex justify-center text-xs text-slate-300">
          - billy.langdown01@gmail.com -
        </p>
      </div>
    </main>
  );
}

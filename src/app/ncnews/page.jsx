import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from 'react-icons/io';
import NavBar from "../Navbar";


export default function ncnews() {
  return (
    <main className="bg-gradient-to-br from-slate-200 to-blue-900 p-8">
      <section>
       <NavBar/>

        <a className="text-2xl" href="/">
          <IoIosArrowBack />
        </a>

        <div className="bg-gray-200 rounded-lg py-5 mt-5">
          <div className="flex justify-center rounded-lg  p-5 md:px-24 lg:px-64 xl:px-80">
            <Image
              src="/NCNewsFrontend.png"
              alt="A screenshot of the homepage of NC News, a news web application."
              width={5000}
              height={5000}
            />
          </div>

          <div className="flex justify-center pb-2">
            <h2 className=" text-2xl font-openSans font-bold text-gray-800">
              NC News Frontend
            </h2>
          </div>
          <div>
            <p className="px-8 md:px-16 lg:px-48 xl:px-80 text-center text-sm lg:text-lg my-5">
              In this solo project, I developed a frontend web application that
              interacts with the API I previously built. Leveraging my expertise
              in JavaScript and newly acquired React skills, I crafted an
              intuitive user interface that allows users to seamlessly browse
              and publish articles, sign in to predefined user profiles, and
              actively engage with articles by leaving comments and votes. To
              enhance the visual appeal and expedite development, I also
              experimented with using Bootstrap for styling, thereby
              streamlining the overall design process.
            </p>
          </div>
          <div className="flex justify-center gap-5 py-5">
            <a href={"https://github.com/BillyLangdown/fe-nc-news"} className="inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-blue-200 before:to-blue-600 before:rounded-full before:opacity-0 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100">
             
                GitHub
            
            </a>
            <a href={"https://billyl-nc-news.netlify.app"} className="inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-blue-200 before:to-blue-600 before:rounded-full before:opacity-0 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100">
              Live Site
            
            </a>
          </div>
          <div>
            <ul className="flex justify-center gap-5 py-10 px-8 items-center">
              <li className="image-item">
                <Image
                  src="/JavascriptIcon.png"
                  alt="The JavaScript logo"
                  className="w-10 h-auto"
                  width={5000}
                  height={5000}
                />
              </li>
              <li className="image-item">
                <Image
                  src="/ReactIcon.png"
                  alt="The React logo"
                  className="w-10 h-auto"
                  width={5000}
                  height={5000}
                />
              </li>
              <li className="image-item">
                <Image
                  src="/BootstrapIcon.png"
                  alt="The Bootstrap logo"
                  className="w-10 h-auto rounded-full"
                  width={5000}
                  height={5000}
                />
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
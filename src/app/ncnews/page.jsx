import Image from "next/image";
import ncnewsphoto from "/Users/billylangdown/Desktop/PortfolioWebsite/portfolio/public/NCNewsFrontend.png";
import JavaScript from "/Users/billylangdown/Desktop/PortfolioWebsite/portfolio/public/JavascriptIcon.png";
import ReactIcon from "/Users/billylangdown/Desktop/PortfolioWebsite/portfolio/public/ReactIcon.png";
import Bootstrap from "/Users/billylangdown/Desktop/PortfolioWebsite/portfolio/public/BootstrapIcon.png";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosArrowBack } from 'react-icons/io';

export default function ncnews() {
  return (
    <main className="bg-gradient-to-br from-slate-200 to-blue-900 p-8">
      <section>
        <nav className="py-8 md:py-16 lg:py-24 xl:py-30 mb-6 flex justify-between md:justify-around">
          <img
            className="w-auto h-8 md:h-10 lg:h-20 pt-1"
            src="/logo-transparent-png.png"
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
          <div className="flex justify-center rounded-lg  p-5 md:px-24 lg:px-64 xl:px-80">
            <Image
              src={ncnewsphoto}
              alt="A screenshot of the homepage of NC News, a news web application."
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
            <Link href={"https://github.com/BillyLangdown/fe-nc-news"}>
              <button className=" bg-gradient-to-br from-gray-300 to-blue-500  text-xs rounded-lg p-1 border-2 tracking-wider  active:border-gray-200 duration-300 active:text-white">
                GitHub
              </button>
            </Link>
            <Link href={"https://billyl-nc-news.netlify.app"}>
              <button className=" bg-gradient-to-br from-gray-300 to-blue-500  text-xs rounded-lg p-1 border-2 tracking-wider  active:border-gray-200 duration-300 active:text-white">
                Live site
              </button>
            </Link>
          </div>
          <div>
            <ul className="flex justify-center gap-5 py-10 px-8 items-center">
              <li className="image-item">
                <Image
                  src={JavaScript}
                  alt="The JavaScript logo"
                  className="w-10 h-auto"
                />
              </li>
              <li className="image-item">
                <Image
                  src={ReactIcon}
                  alt="The React logo"
                  className="w-10 h-auto"
                />
              </li>
              <li className="image-item">
                <Image
                  src={Bootstrap}
                  alt="The Bootstrap logo"
                  className="w-10 h-auto rounded-full"
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
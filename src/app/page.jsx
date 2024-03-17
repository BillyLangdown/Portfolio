"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "./Navbar";


export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-200 to-blue-900 p-8">
      <section>
        <NavBar/>
        <div className="relative w-full flex justify-center">
          <Image
            className="shadow-2xl rounded-full w-3/5 md:w-2/5  h-auto mb-5"
            src="/Homepng.png"
            alt="A full body photograph of a man  in a black t shirt and shorts stood against a painted wall."
            width={1000}
            height={1000}
          />
        </div>
        <div className="text-center py-5">
          <h2 className="text-2xl lg:text-4xl text-slate-100 py-2 font-openSans font-medium ">
            Billy Langdown
          </h2>
          <h3 className="text-xl lg:text-2xl py-2 text-gray-200">
            Junior Software Developer
          </h3>
          <p className="text-md lg:text-lg xl:text-2xl py-5 px-5 md:px-20 lg:px-40  leading-7  text-gray-200">
            Passionate about technology and with a background in branding and
            media production, I&apos;m seeking a role that fuses creativity with my
            love for programming – let&apos;s chat if you&apos;re looking for a valuable
            addition to your team.
          </p>
        </div>
        <div className="flex justify-center">
          <h2 className="text-center text-xl lg:text-2xl xl:text-5xl font-openSans text-slate-200 font-semibold ">
            Projects:
          </h2>
        </div>
        <div>
          <Link href="/cultureconnect">
            <div className=" bg-gradient-to-br  from-gray-400 to-gray-700 rounded-lg shadow-2xl p-6 md:p-12 lg:p-20  py-4 my-10 mx-5 md:mx-10 lg:mx-64 xl:mx-72 text-center">
              <h3 className=" text-start text-xl lg:text-2xl xl:text-5xl font-openSans text-slate-200 pb-5 font-semibold">
                CultureConnect
              </h3>
              <Image
                src="/CultureConnect.png"
                className="rounded-lg mb-3 image"
                alt="A Digital image of the CultureConnect mobile application on a mocked up iphone."
                width={5000}
                height={5000}
              />
              <p className="text-slate-300 md:text-lg lg:text-2xl">
                CultureConnect is a community-focused hybrid application for iOS
                & Android.
              </p>
            </div>
          </Link>
          <Link href="/newsapi">
            <div className=" bg-gradient-to-br  from-gray-400 to-gray-700 rounded-lg shadow-2xl p-6 md:p-12 lg:p-20  py-4 my-10 mx-5 md:mx-10 lg:mx-64 xl:mx-72 text-center">
              <h3 className=" text-start text-xl lg:text-2xl xl:text-5xl font-openSans text-slate-200 pb-5 font-semibold">
                NC News Api
              </h3>
              <Image
                src="/postgres-logo.png"
                className="rounded-lg  mb-3"
                alt="The Logo for Postgres SQL, A digitally drawn blue elephant."
                width={5000}
                height={5000}
              />
              <p className="text-slate-300 md:text-lg lg:text-2xl">
                {" "}
                An API, controlling requests for data used on a news website.
              </p>
            </div>
          </Link>
          <Link href="/ncnews">
            <div className=" bg-gradient-to-br  from-gray-400 to-gray-700 rounded-lg shadow-2xl p-6 md:p-12 lg:p-20  py-4 my-10 mx-5 md:mx-10 lg:mx-64 xl:mx-72 text-center">
              <h3 className=" text-start text-xl lg:text-2xl xl:text-5xl font-openSans text-slate-200 pb-5 font-semibold">
                NC News Frontend
              </h3>
              <Image
                src= "/NCNewsFrontend.png"
                className="rounded-lg  mb-3"
                alt="A Digital image of the CultureConnect mobile application on a mocked up iphone."
                width={5000}
                height={5000}
              />
              <p className="text-slate-300 md:text-lg lg:text-2xl">
                {" "}
                The Frontend of a NC news web application. Read, write &
                interact with articles.
              </p>
            </div>
          </Link>
        </div>
      </section>
      <div>
        <p className="flex justify-center text-xs text-slate-300">- billy.langdown01@gmail.com -</p>
      </div>
    </main>
  );
}

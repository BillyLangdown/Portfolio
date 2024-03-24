import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import NavBar from "../Navbar";

export default function cultureconnect() {
  return (
    <main className="bg-gradient-to-br from-slate-200 to-blue-900 p-8">
      <section>
       <NavBar/>

        <a className="text-2xl" href="/">
          <IoIosArrowBack />
        </a>

        <div className="bg-gray-200 rounded-lg py-10 my-10  ">
          <div className="flex justify-center ">
            <div className="aspect-video w-3/4 p-1 lg:p-10">
              <iframe
                className="h-full w-full  "
                src="https://www.youtube.com/embed/syxOqc9XhZ4"
                allowFullScreen
                title="CultureConnect Video"
              ></iframe>
            </div>
          </div>

          <div className=" flex justify-center p-6">
            <h2 className=" text-2xl font-openSans font-bold text-gray-800">
              CultureConnect
            </h2>
          </div>
          <div>
            <p className=" p-5 px-8 md:px-16 lg:px-48 xl:px-80 text-center text-sm lg:text-xl">
              Collaborating with fellow junior developers, we developed a mobile
              app for Android and iOS, emphasizing community unity through
              cultural event sharing. Employing technologies like Expo MapView
              and postcodes.io for location tracking, alongside Supabase for
              cloud-based backend services, we aimed for user-centric design.
              Despite challenges and iterative component revisions, our teamwork
              and commitment yielded a robust, cloud-enabled app fostering
              cultural connections.
            </p>
            <div className="flex justify-center gap-5 py-5">
              <a
                href={
                  "https://github.com/JoravarSinghPunia/CultureConnect-Application"
                }
                className="inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-blue-200 before:to-blue-600 before:rounded-full before:opacity-0 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100"
              >
                
                  GitHub
           
              </a>
            </div>
          </div>
          <div>
            <ul className=" flex justify-center gap-5 py-3 px-12 items-center">
              <li className="image-item">
                {" "}
                <Image
                  src="/TypeScriptIcon.png"
                  className=" w-10 h-auto"
                  alt="The icon for TypeScript Language"
                  width={5000}
                  height={5000}
                />
              </li>
              <li className="image-item">
                {" "}
                <Image
                  src="/ReactNativeicon.png"
                  className="w-10 h-auto"
                  alt="The React Native Icon"
                  width={5000}
                  height={5000}
                />
              </li>
              <li className="image-item">
                {" "}
                <Image
                  src="/ExpoIcon.png"
                  className="w-10 h-auto"
                  alt="The Expo Icon used with react"
                  width={5000}
                  height={5000}
                />
              </li>
              <li className="image-item">
                {" "}
                <Image
                  src="/SupabaseIcon.png"
                  className="w-20 h-auto"
                  alt="The Supabase Icon"
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

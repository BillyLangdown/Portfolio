
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosArrowBack } from 'react-icons/io';



export default function cultureconnect() {
  return (
    <main className="bg-gradient-to-br from-slate-200 to-blue-900 p-8">
      <section>
        <nav className="py-8 md:py-16 lg:py-24 xl:py-30 mb-6 flex justify-between md:justify-around">
          <Image
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

        <a className="text-2xl" href="/"><IoIosArrowBack/></a>

        

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
              <Link
                href={
                  "https://github.com/JoravarSinghPunia/CultureConnect-Application"
                }
              >
                <button className=" bg-gradient-to-br from-gray-300 to-blue-500  text-xs rounded-lg p-1 border-2 tracking-wider  active:border-gray-200 duration-300 active:text-white">
                  GitHub
                </button>
              </Link>
            </div>
          </div>
          <div>
            <ul className=" flex justify-center gap-5 py-3 px-12 items-center">
              <li className="image-item">
                {" "}
                <Image src="/TypeScriptIcon.png" className=" w-10 h-auto" />
              </li>
              <li className="image-item">
                {" "}
                <Image src="/ReactNativeicon.png" className="w-10 h-auto" />
              </li>
              <li className="image-item">
                {" "}
                <Image src="/ExpoIcon.png" className="w-10 h-auto" />
              </li>
              <li className="image-item">
                {" "}
                <Image src="/SupabaseIcon.png" className="w-20 h-auto" />
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

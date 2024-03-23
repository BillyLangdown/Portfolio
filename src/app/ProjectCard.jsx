import Image from "next/image";

export default function ProjectCard({ name, img, description, alt }) {
  return (
    <div className="bg-slate-200 max-w-5/6 flex-col justify-content-center my-5 rounded-lg">
      <div>
      <Image
       className="flex justify-items-center w-full rounded-t-lg overflow-hidden"
  src={img}
  alt={alt}
  width={500}
  height={500}
/>
      </div>
      <div className="flex flex-col justify-center items-center px-5">
        <h3 className="text-md lg:text-2xl xl:text-5xl font-openSans text-gray-600 font-semibold text-center">
          {name}
        </h3>
        <p className="text-gray-600 md:text-md lg:text-2xl text-center overflow-hidden">
          {description}
        </p>
      </div>
    </div>
  );
}


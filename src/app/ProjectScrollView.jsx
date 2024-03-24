import Link from "next/link";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ProjectScrollView() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="flex justify-center items-center">
      <Slider {...settings} ref={sliderRef} className="w-full md:w-3/4">
        <div className="flex justify-self-center">
          <Link href="/cultureconnect">
            <ProjectCard
              name={"CultureConnect"}
              img={"/CultureConnect.png"}
              description={
                "A community focused hybrid mobile application"
              }
              alt={
                "A digital mockup of CultureConnect Application login screen."
              }
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="/newsapi">
            <ProjectCard
              name={"NC News Api"}
              img={"/postgres-logo.png"}
              description={
                "An API, controlling requests for data used on a news website."
              }
              alt={
                "A digitally drawn blue elephant followed by text reading postegresql"
              }
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="/ncnews">
            <ProjectCard
              name={"NC News Frontend"}
              img={"/NCNewsFrontend.png"}
              description={
                "The Frontend of a NC news web application."
              }
              alt={
                "A Screen shot of a web application that displays articles"
              }
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
}

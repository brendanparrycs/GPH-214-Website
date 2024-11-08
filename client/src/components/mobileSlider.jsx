import SubSection from "./subSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { useRef } from "react";

export default function MobileSlider() {
  const slider = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="bg-black bg-opacity-50 border border-black rounded-full size-5 p-2"
        onClick={() => slider?.current?.slickPrev()}
      />
      <Slider ref={slider} {...settings} className="w-3/4">
        <div>
          <SubSection title="Distance from Sun" value="XXX,XXX,XXX" unit="MI" />
        </div>
        <div>
          <SubSection title="Length of Year" value="4,333" unit="Days" />
        </div>
        <div>
          <SubSection title="Axial Tilt" value="3.13" unit="Degrees" />
        </div>
      </Slider>
      <FontAwesomeIcon
        icon={faAngleRight}
        className="bg-black bg-opacity-50 border border-black rounded-full size-5 p-2"
        onClick={() => slider?.current?.slickNext()}
      />
    </>
  );
}

import SubSection from "./subSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { useRef } from "react";

export default function MobileSlider({ RG, orbit, solarConstant }) {
  const slider = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-full flex items-center justify-between px-4 md:hidden">
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="bg-black bg-opacity-50 border border-black rounded-full size-5 p-2"
        onClick={() => slider?.current?.slickPrev()}
      />
      <Slider ref={slider} {...settings} className="w-3/4">
        <div>
          <SubSection title="Distance from Sun" value={RG} unit="MI" />
        </div>
        <div>
          <SubSection title="Axial Tilt" value={orbit} unit="DEG" />
        </div>
        <div>
          <SubSection
            title="Solar Constant"
            value={solarConstant}
            unit={`W/m\u00B2`}
          />
        </div>
      </Slider>
      <FontAwesomeIcon
        icon={faAngleRight}
        className="bg-black bg-opacity-50 border border-black rounded-full size-5 p-2"
        onClick={() => slider?.current?.slickNext()}
      />
    </div>
  );
}

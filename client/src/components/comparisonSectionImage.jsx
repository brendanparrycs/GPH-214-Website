import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function ComparisonSectionImage({ image, credits, link }) {
  const [imageOpen, setImageOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = imageOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [imageOpen]);

  return (
    <>
      {/* Regular image with credit */}
      <div className="flex flex-col items-center w-1/3 gap-2 justify-center">
        <img
          src={image}
          className="w-96 max-h-96 object-contain object-right mx-auto md:mx-0 cursor-zoom-in"
          onClick={() => setImageOpen(true)}
        />
        {credits && (
          <p className="text-xs text-center">
            {credits}{" "}
            {link && (
              <a href={link} target="_blank">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-red-700"
                />
              </a>
            )}
          </p>
        )}
      </div>
      {/* Large image on click display */}
      {imageOpen && (
        <div
          className="fixed inset-0 backdrop-blur flex justify-center items-center z-50"
          onClick={() => setImageOpen(false)}
        >
          <img src={image} className="size-5/6 object-contain" />
        </div>
      )}
    </>
  );
}

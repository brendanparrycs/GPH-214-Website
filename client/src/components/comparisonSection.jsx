import { useEffect, useState } from "react";

export default function ComparisonSection({
  title,
  caption,
  paragraph1,
  paragraph2,
  image,
}) {
  const [imageOpen, setImageOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = imageOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [imageOpen]);

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:justify-between">
      <div className="flex flex-col gap-4 md:w-1/2">
        <div>
          <h2 className="text-red-700 text-xl">{title}</h2>
          <p className="text-xs text-gray-400">{caption}</p>
        </div>
        <p className="text-sm">{paragraph1}</p>
        <p className="text-sm">{paragraph2}</p>
      </div>
      <img
        src={image}
        className="w-96 max-h-96 object-contain object-right mx-auto md:mx-0 cursor-zoom-in"
        onClick={() => setImageOpen(true)}
      />
      {imageOpen && (
        <div
          className="fixed inset-0 backdrop-blur flex justify-center items-center z-50"
          onClick={() => setImageOpen(false)}
        >
          <img src={image} className="size-5/6 object-contain" />
        </div>
      )}
    </div>
  );
}

import ComparisonSectionImage from "./comparisonSectionImage";

export default function ComparisonSection({
  title,
  caption,
  paragraph1,
  paragraph2,
  image,
  credits,
  link,
}) {
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
      <ComparisonSectionImage image={image} credits={credits} link={link} />
    </div>
  );
}

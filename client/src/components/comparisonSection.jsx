import placeholderImage from "../images/placeholderImage.avif";

export default function ComparisonSection() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:justify-between">
      <div className="flex flex-col gap-4 md:w-1/2">
        <div>
          <h2 className="text-red-700 text-xl">Section Title</h2>
          <p className="text-xs text-gray-400">
            Lorem ipsum odor amet, consectetuer adipiscing elit.
          </p>
        </div>
        <p className="text-sm">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ipsum nullam ex
          in, ligula fringilla dui. Aliquam ultrices potenti vivamus et gravida
          diam velit donec. Magna hendrerit placerat mollis penatibus faucibus.
          Mollis vitae adipiscing luctus molestie hac egestas tellus molestie.
          Justo magnis mollis, amet ullamcorper orci suspendisse dignissim.
        </p>
      </div>
      <img src={placeholderImage} className="w-96 mx-auto md:mx-0" />
    </div>
  );
}

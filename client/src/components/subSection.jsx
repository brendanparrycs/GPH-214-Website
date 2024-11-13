export default function SubSection({ title, value, unit }) {
  return (
    <div className="flex items-center justify-center md:flex-1">
      <div>
        <h2 className="text-lg md:text-xl xl:text-2xl">{title}</h2>
        <p className="flex items-end gap-2 md:text-lg xl:text-xl">
          {value}
          <span className="text-dark-saturated-red text-xs md:text-sm xl:text-base">
            {unit}
          </span>
        </p>
      </div>
    </div>
  );
}

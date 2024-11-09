export default function SubSection({ title, value, unit }) {
  return (
    <div className="flex items-center justify-center md:flex-1">
      <div>
        <p className="text-lg md:text-xl xl:text-2xl">{title}</p>
        <p className="flex items-end gap-2 md:text-lg xl:text-xl">
          {value}
          <span className="text-red-600 text-xs md:text-sm xl:text-base">
            {unit}
          </span>
        </p>
      </div>
    </div>
  );
}

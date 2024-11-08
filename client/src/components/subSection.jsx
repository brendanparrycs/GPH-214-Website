export default function SubSection({ title, value, unit }) {
  return (
    <div className="w-full flex-shrink-0 flex flex-col justify-center items-center">
      <div>
        <p className="text-xl">{title}</p>
        <p className="flex items-end gap-2">
          {value}
          <span className="text-red-600 text-xs">{unit}</span>
        </p>
      </div>
    </div>
  );
}

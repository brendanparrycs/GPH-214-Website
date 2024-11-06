export default function SubSection({ title, value, unit }) {
  return (
    <div className="h-full flex flex-col flex-1 justify-center items-center">
      <div>
        <p className="text-3xl">{title}</p>
        <p className="text-xl flex items-end text-left">
          {value}
          <span className="text-red-600 text-base ml-2">{unit}</span>
        </p>
      </div>
    </div>
  );
}

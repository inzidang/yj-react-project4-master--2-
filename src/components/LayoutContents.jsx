export default function LayoutContents({
  width = "max-w-7xl",
  title,
  children,
}) {
  return (
    <section className={`w-full justify-center flex py-16`}>
      <div className={`w-full flex flex-col ${width}`}>
        <div className="w-full sapce-y-16">
          <h1 className="text-4xl py-2 flex justify-center">{title}</h1>
          {children}
        </div>
      </div>
    </section>
  );
}

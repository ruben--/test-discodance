export function Hero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl">{subtitle}</p>}
      </div>
    </div>
  );
}

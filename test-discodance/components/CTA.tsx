export function CTA({
  title,
  description,
  buttonText,
  buttonLink
}: {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink?: string;
}) {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        {description && <p className="text-xl mb-8 text-gray-300">{description}</p>}
        <a
          href={buttonLink || '#'}
          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}

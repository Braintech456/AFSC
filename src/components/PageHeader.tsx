export default function PageHeader({ title, subtitle }: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle && (
          <p className="text-blue-100 mt-2">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

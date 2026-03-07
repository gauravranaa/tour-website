import Link from "next/link";

interface ExpeditionCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ExpeditionCard({
  title,
  description,
  image,
  link,
}: ExpeditionCardProps) {
  return (
    <Link href={link}>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">
        
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>

          <span className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full">
            View Details
          </span>
        </div>

      </div>
    </Link>
  );
}
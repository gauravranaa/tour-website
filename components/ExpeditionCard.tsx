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
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden 
      transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl 
      cursor-pointer group">

        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover 
          transition-transform duration-500 group-hover:scale-110"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>

          <p className="text-gray-600 mb-4">{description}</p>

          <span className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full
          transition-all duration-300 group-hover:bg-orange-600 
          group-hover:scale-105 group-hover:-translate-y-1 shadow-md group-hover:shadow-xl">
            View Details →
          </span>
        </div>

      </div>
    </Link>
  );
}
import Link from "next/link";
import Image from "next/image";

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
    <Link href={link} className="group">
      <div
        className="bg-white rounded-2xl shadow-md overflow-hidden
        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >
        {/* Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-600 transition">
            {title}
          </h3>

          <p className="text-gray-600 text-sm mb-5">
            {description}
          </p>

          <span
            className="inline-block bg-orange-500 text-white px-5 py-2 rounded-full
            transition-all duration-300 group-hover:bg-orange-600
            group-hover:scale-105 shadow-md"
          >
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
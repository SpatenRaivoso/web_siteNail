
import { Link } from "react-router-dom";

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image?: string;
}

const ServiceCard: React.FC<ServiceProps> = ({
  id,
  title,
  description,
  price,
  duration,
  image,
}) => {
  return (
    <div className="beauty-card group">
      {image && (
        <div className="mb-4 h-48 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <h3 className="text-xl font-serif font-medium text-beauty-darkGray mb-2">
        {title}
      </h3>
      <p className="text-beauty-darkGray/80 mb-4 text-sm">{description}</p>
      <div className="flex justify-between items-center mb-4">
        <div className="text-beauty-darkGray font-medium">{price}</div>
        <div className="text-sm text-beauty-darkGray/70">{duration}</div>
      </div>
      <Link
        to={`/onboarding?service=${id}`}
        className="block w-full text-center bg-beauty-pink hover:bg-beauty-nude text-beauty-darkGray font-medium py-2 rounded-lg transition-colors"
      >
        Agendar
      </Link>
    </div>
  );
};

export default ServiceCard;


import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfessionalProps {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  specialties: string[];
}

const ProfessionalCard: React.FC<ProfessionalProps> = ({
  id,
  name,
  role,
  bio,
  image,
  specialties,
}) => {
  // Extract initials for avatar fallback
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="beauty-card flex flex-col items-center text-center">
      <Avatar className="w-24 h-24 mb-4">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback className="bg-beauty-nude text-beauty-darkGray">
          {initials}
        </AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-serif font-medium text-beauty-darkGray">
        {name}
      </h3>
      <p className="text-beauty-nude font-medium mb-2">{role}</p>
      <p className="text-beauty-darkGray/80 text-sm mb-4">{bio}</p>
      
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {specialties.map((specialty, index) => (
          <span
            key={index}
            className="text-xs bg-beauty-pink/20 text-beauty-darkGray px-3 py-1 rounded-full"
          >
            {specialty}
          </span>
        ))}
      </div>
      
      <Link
        to={`/profissionais/${id}`}
        className="mt-auto w-full text-center bg-beauty-pink hover:bg-beauty-nude text-beauty-darkGray font-medium py-2 rounded-lg transition-colors"
      >
        Ver Perfil
      </Link>
    </div>
  );
};

export default ProfessionalCard;

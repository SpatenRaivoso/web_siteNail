
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface AppointmentProps {
  id: string;
  service: string;
  professional: string;
  date: Date;
  time: string;
  status: "scheduled" | "completed" | "canceled";
  onReschedule?: (id: string) => void;
  onCancel?: (id: string) => void;
}

const AppointmentCard: React.FC<AppointmentProps> = ({
  id,
  service,
  professional,
  date,
  time,
  status,
  onReschedule,
  onCancel,
}) => {
  const formattedDate = format(date, "EEEE, d 'de' MMMM", { locale: ptBR });
  
  const getStatusBadge = () => {
    switch (status) {
      case "scheduled":
        return (
          <span className="px-3 py-1 text-xs bg-beauty-pink/30 text-beauty-darkGray rounded-full">
            Agendado
          </span>
        );
      case "completed":
        return (
          <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full">
            Concluído
          </span>
        );
      case "canceled":
        return (
          <span className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
            Cancelado
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="beauty-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-beauty-darkGray">{service}</h3>
        {getStatusBadge()}
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-beauty-darkGray/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-beauty-nude"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          {professional}
        </div>
        
        <div className="flex items-center text-beauty-darkGray/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-beauty-nude"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="capitalize">{formattedDate}</span>
        </div>
        
        <div className="flex items-center text-beauty-darkGray/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-beauty-nude"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {time}
        </div>
      </div>
      
      {status === "scheduled" && (
        <div className="flex space-x-2 pt-4 border-t border-beauty-nude/20">
          <Button
            variant="outline"
            className="flex-1 border-beauty-nude hover:bg-beauty-nude/10"
            onClick={() => onReschedule && onReschedule(id)}
          >
            Reagendar
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
            onClick={() => onCancel && onCancel(id)}
          >
            Cancelar
          </Button>
        </div>
      )}
      
      {status === "completed" && (
        <Button
          className="w-full bg-beauty-pink hover:bg-beauty-nude text-beauty-darkGray"
        >
          Agendar Novamente
        </Button>
      )}
    </div>
  );
};

export default AppointmentCard;

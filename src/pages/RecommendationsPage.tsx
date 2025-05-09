
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import ProfessionalCard from "@/components/ProfessionalCard";
import { format, addDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Dados simulados
const recommendedServices = [
  {
    id: "1",
    title: "Manicure em Gel",
    description: "Tratamento completo para suas unhas com acabamento em gel que proporciona maior durabilidade",
    price: "R$ 85,00",
    duration: "75 min",
    image: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&q=80&w=500",
  },
  {
    id: "2",
    title: "Pedicure Spa",
    description: "Tratamento relaxante para os pés com esfoliação, massagem e esmaltação",
    price: "R$ 75,00",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&q=80&w=500",
  },
  {
    id: "3",
    title: "Podologia Completa",
    description: "Cuidado especializado para as unhas dos pés, tratamento de calosidades e prevenção",
    price: "R$ 120,00",
    duration: "90 min",
    image: "https://images.unsplash.com/photo-1588005340398-0fa0a3eb7c30?auto=format&q=80&w=500",
  }
];

const recommendedProfessionals = [
  {
    id: "1",
    name: "Camila Silva",
    role: "Nail Designer",
    bio: "Especialista em nail art e unhas em gel com 8 anos de experiência",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&q=80&w=500",
    specialties: ["Nail Art", "Unhas em Gel", "Manicure"]
  },
  {
    id: "2",
    name: "Renata Oliveira",
    role: "Podóloga",
    bio: "Podóloga especializada no tratamento de unhas encravadas e calosidades",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&q=80&w=500",
    specialties: ["Podologia", "Pedicure", "Tratamentos Especiais"]
  }
];

const availableDates = Array.from({ length: 5 }).map((_, i) => addDays(new Date(), i + 1));

const availableTimeSlots = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
];

const RecommendationsPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      
      <div className="min-h-[calc(100vh-80px)] bg-beauty-lightGray py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-beauty-darkGray mb-4">
              Recomendações Personalizadas
            </h1>
            <p className="text-beauty-darkGray/80">
              Com base nas suas preferências, selecionamos os melhores serviços, profissionais e horários disponíveis para você.
            </p>
          </div>
          
          {/* Serviços Recomendados */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-medium text-beauty-darkGray mb-8">
              Serviços Recomendados para Você
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendedServices.map(service => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  duration={service.duration}
                  image={service.image}
                />
              ))}
            </div>
          </section>
          
          {/* Profissionais Recomendados */}
          <section className="mb-16 bg-white rounded-xl p-8 shadow-sm border border-beauty-nude/20">
            <h2 className="text-2xl font-serif font-medium text-beauty-darkGray mb-6">
              Profissionais Recomendados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {recommendedProfessionals.map(professional => (
                <div 
                  key={professional.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedProfessional === professional.id
                      ? "border-beauty-nude bg-beauty-pink/20"
                      : "border-gray-200 hover:border-beauty-nude/50"
                  }`}
                  onClick={() => setSelectedProfessional(professional.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img 
                        src={professional.image} 
                        alt={professional.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-beauty-darkGray">{professional.name}</h3>
                      <p className="text-sm text-beauty-darkGray/70">{professional.role}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {professional.specialties.slice(0, 2).map((specialty, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-beauty-pink/20 text-beauty-darkGray px-2 py-0.5 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Agendamento */}
          <section className="mb-16 bg-white rounded-xl p-8 shadow-sm border border-beauty-nude/20">
            <h2 className="text-2xl font-serif font-medium text-beauty-darkGray mb-6">
              Horários Disponíveis
            </h2>
            
            {/* Datas */}
            <div className="mb-8">
              <h3 className="font-medium text-beauty-darkGray mb-4">Escolha uma Data</h3>
              <div className="flex flex-wrap gap-3">
                {availableDates.map((date) => {
                  const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                  
                  return (
                    <button
                      key={date.toISOString()}
                      className={`px-4 py-3 rounded-lg border transition-colors ${
                        isSelected
                          ? "bg-beauty-nude/30 border-beauty-nude text-beauty-darkGray"
                          : "border-gray-200 hover:border-beauty-nude/50 text-beauty-darkGray/80"
                      }`}
                      onClick={() => setSelectedDate(date)}
                    >
                      <div className="text-sm font-medium">{format(date, "EEE", { locale: ptBR })}</div>
                      <div className="text-lg">{format(date, "dd")}</div>
                      <div className="text-xs">{format(date, "MMM", { locale: ptBR })}</div>
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Horários */}
            {selectedDate && (
              <div className="mb-8">
                <h3 className="font-medium text-beauty-darkGray mb-4">
                  Horários em {format(selectedDate, "d 'de' MMMM", { locale: ptBR })}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
                  {availableTimeSlots.map((time) => (
                    <button
                      key={time}
                      className={`px-3 py-2 rounded-lg border transition-colors ${
                        selectedTime === time
                          ? "bg-beauty-nude/30 border-beauty-nude text-beauty-darkGray"
                          : "border-gray-200 hover:border-beauty-nude/50 text-beauty-darkGray/80"
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </section>
          
          {/* Botão de Confirmar */}
          <div className="text-center">
            <Button
              className={`bg-beauty-pink hover:bg-beauty-nude text-beauty-darkGray px-10 py-6 rounded-lg text-lg font-medium ${
                !(selectedDate && selectedTime && selectedProfessional)
                  ? "opacity-70 cursor-not-allowed"
                  : ""
              }`}
              disabled={!(selectedDate && selectedTime && selectedProfessional)}
            >
              Confirmar Agendamento
            </Button>
            <p className="mt-4 text-sm text-beauty-darkGray/70">
              Por favor, selecione um serviço, profissional, data e horário para continuar.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default RecommendationsPage;

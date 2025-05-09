
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppointmentCard from "@/components/AppointmentCard";
import { toast } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Dados simulados
const upcomingAppointments = [
  {
    id: "1",
    service: "Manicure em Gel",
    professional: "Camila Silva",
    date: new Date("2025-06-15"),
    time: "14:00",
    status: "scheduled" as const
  },
  {
    id: "2",
    service: "Pedicure Completa",
    professional: "Renata Oliveira",
    date: new Date("2025-06-22"),
    time: "10:00",
    status: "scheduled" as const
  }
];

const pastAppointments = [
  {
    id: "3",
    service: "Manicure Simples",
    professional: "Bruno Mendes",
    date: new Date("2025-05-28"),
    time: "16:00",
    status: "completed" as const
  },
  {
    id: "4",
    service: "Tratamento de Podologia",
    professional: "Renata Oliveira",
    date: new Date("2025-05-15"),
    time: "11:00",
    status: "completed" as const
  },
  {
    id: "5",
    service: "Alongamento em Acrílico",
    professional: "Camila Silva",
    date: new Date("2025-04-30"),
    time: "09:00",
    status: "canceled" as const
  }
];

const recommendations = [
  {
    id: "1",
    title: "Hidratação de Cutículas",
    description: "Aplicar óleo de cutículas diariamente para manter a hidratação e prevenir ressecamento.",
    type: "care" as const
  },
  {
    id: "2",
    title: "Esmalte Fortalecedor",
    description: "Usar esmalte fortalecedor entre aplicações para fortalecer as unhas quebradiças.",
    type: "product" as const
  },
  {
    id: "3",
    title: "Manutenção do Alongamento",
    description: "Agendar retoque do alongamento em 15 dias para manter a aparência e evitar quebras.",
    type: "service" as const
  }
];

const ClientDashboard = () => {
  const [currentTab, setCurrentTab] = useState("upcoming");

  const handleReschedule = (id: string) => {
    console.log("Reagendar agendamento:", id);
    toast.info("Em breve você será redirecionado para reagendar seu horário.");
  };

  const handleCancel = (id: string) => {
    console.log("Cancelar agendamento:", id);
    toast.success("Seu agendamento foi cancelado com sucesso!");
  };

  return (
    <>
      <Navbar />
      
      <div className="min-h-[calc(100vh-80px)] bg-beauty-lightGray py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-serif font-semibold text-beauty-darkGray mb-2">
                Olá, Marina!
              </h1>
              <p className="text-beauty-darkGray/80">
                Bem-vinda à sua área de cliente.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/onboarding">
                <Button className="bg-beauty-pink hover:bg-beauty-nude text-beauty-darkGray">
                  Novo Agendamento
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Appointments */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-beauty-nude/20 p-6">
              <Tabs value={currentTab} onValueChange={setCurrentTab}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-serif font-medium text-beauty-darkGray">
                    Seus Agendamentos
                  </h2>
                  <TabsList className="bg-beauty-lightGray">
                    <TabsTrigger value="upcoming" className="data-[state=active]:bg-beauty-pink data-[state=active]:text-beauty-darkGray">
                      Próximos
                    </TabsTrigger>
                    <TabsTrigger value="past" className="data-[state=active]:bg-beauty-pink data-[state=active]:text-beauty-darkGray">
                      Anteriores
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="upcoming">
                  {upcomingAppointments.length > 0 ? (
                    <div className="space-y-6">
                      {upcomingAppointments.map(appointment => (
                        <AppointmentCard
                          key={appointment.id}
                          id={appointment.id}
                          service={appointment.service}
                          professional={appointment.professional}
                          date={appointment.date}
                          time={appointment.time}
                          status={appointment.status}
                          onReschedule={handleReschedule}
                          onCancel={handleCancel}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-beauty-darkGray/70 mb-4">
                        Você não tem agendamentos próximos.
                      </p>
                      <Link to="/onboarding">
                        <Button className="bg-beauty-pink hover:bg-beauty-nude text-beauty-darkGray">
                          Agendar Horário
                        </Button>
                      </Link>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="past">
                  {pastAppointments.length > 0 ? (
                    <div className="space-y-6">
                      {pastAppointments.map(appointment => (
                        <AppointmentCard
                          key={appointment.id}
                          id={appointment.id}
                          service={appointment.service}
                          professional={appointment.professional}
                          date={appointment.date}
                          time={appointment.time}
                          status={appointment.status}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-beauty-darkGray/70">
                        Você ainda não tem histórico de agendamentos.
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Recommendations */}
            <div className="bg-white rounded-xl shadow-sm border border-beauty-nude/20 p-6">
              <h2 className="text-xl font-serif font-medium text-beauty-darkGray mb-6">
                Recomendações Personalizadas
              </h2>
              
              <div className="space-y-6">
                {recommendations.map(rec => (
                  <div
                    key={rec.id}
                    className="p-4 border border-beauty-nude/20 rounded-lg bg-beauty-lightGray/50"
                  >
                    <div className="flex items-start mb-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        rec.type === "care" 
                          ? "bg-beauty-pink/30" 
                          : rec.type === "product" 
                          ? "bg-beauty-nude/40"
                          : "bg-green-100"
                      }`}>
                        {rec.type === "care" && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-beauty-darkGray">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        )}
                        {rec.type === "product" && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-beauty-darkGray">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        )}
                        {rec.type === "service" && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-beauty-darkGray">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        )}
                      </div>
                      <h3 className="font-medium text-beauty-darkGray">{rec.title}</h3>
                    </div>
                    <p className="text-sm text-beauty-darkGray/80 ml-11">
                      {rec.description}
                    </p>
                    
                    {rec.type === "service" && (
                      <div className="mt-3 ml-11">
                        <Link to="/onboarding">
                          <Button
                            variant="outline"
                            className="text-sm border-beauty-nude hover:bg-beauty-nude/10 text-beauty-darkGray"
                            size="sm"
                          >
                            Agendar
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-beauty-nude/20">
                <h3 className="font-medium text-beauty-darkGray mb-3">
                  Lembretes
                </h3>
                <div className="bg-beauty-pink/20 p-3 rounded-lg text-sm">
                  <p className="text-beauty-darkGray/80">
                    Seu próximo retoque de alongamento está previsto para daqui a 1 semana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ClientDashboard;

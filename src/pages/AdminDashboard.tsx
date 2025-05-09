
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Navbar from "@/components/layout/Navbar";

// Dados simulados
const revenueData = [
  { name: "Jan", receita: 4200 },
  { name: "Fev", receita: 5400 },
  { name: "Mar", receita: 4800 },
  { name: "Abr", receita: 6200 },
  { name: "Mai", receita: 7500 },
  { name: "Jun", receita: 6800 },
];

const serviceData = [
  { name: "Manicure", value: 35 },
  { name: "Pedicure", value: 28 },
  { name: "Alongamento", value: 22 },
  { name: "Podologia", value: 15 },
];

const todayAppointments = [
  {
    id: "1",
    client: "Marina Costa",
    service: "Manicure em Gel",
    time: "10:00",
    professional: "Camila Silva",
    status: "confirmed"
  },
  {
    id: "2",
    client: "Juliana Almeida",
    service: "Pedicure Completa",
    time: "11:30",
    professional: "Bruno Mendes",
    status: "confirmed"
  },
  {
    id: "3",
    client: "Patricia Lopes",
    service: "Tratamento de Podologia",
    time: "14:00",
    professional: "Renata Oliveira",
    status: "pending"
  },
  {
    id: "4",
    client: "Carla Mendes",
    service: "Alongamento em Acrílico",
    time: "16:30",
    professional: "Camila Silva",
    status: "confirmed"
  }
];

const AdminDashboard = () => {
  const [currentTab, setCurrentTab] = useState("overview");

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-beauty-lightGray py-6">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-serif font-semibold text-beauty-darkGray mb-2">
                Painel Administrativo
              </h1>
              <p className="text-beauty-darkGray/80">
                Gerencie agendamentos, clientes e acompanhe métricas.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-beauty-pink hover:bg-beauty-nude text-beauty-darkGray">
                Novo Agendamento Manual
              </Button>
            </div>
          </div>
          
          {/* Metrics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white border-beauty-nude/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-beauty-darkGray/70">
                  Agendamentos Hoje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-beauty-darkGray">4</div>
                <p className="text-xs text-beauty-darkGray/60 mt-1">
                  <span className="text-green-600">↑ 8%</span> em relação à semana passada
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-beauty-nude/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-beauty-darkGray/70">
                  Receita Mensal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-beauty-darkGray">R$ 7.500</div>
                <p className="text-xs text-beauty-darkGray/60 mt-1">
                  <span className="text-green-600">↑ 12%</span> em relação ao mês anterior
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-beauty-nude/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-beauty-darkGray/70">
                  Novos Clientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-beauty-darkGray">24</div>
                <p className="text-xs text-beauty-darkGray/60 mt-1">
                  <span className="text-green-600">↑ 18%</span> em relação ao mês anterior
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-beauty-nude/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-beauty-darkGray/70">
                  Taxa de Ocupação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-beauty-darkGray">78%</div>
                <p className="text-xs text-beauty-darkGray/60 mt-1">
                  <span className="text-red-600">↓ 3%</span> em relação à semana passada
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="mb-8">
            <Tabs value={currentTab} onValueChange={setCurrentTab}>
              <div className="border-b border-beauty-nude/20 mb-6">
                <TabsList className="bg-transparent">
                  <TabsTrigger 
                    value="overview" 
                    className="border-b-2 border-transparent data-[state=active]:border-beauty-nude data-[state=active]:bg-transparent text-beauty-darkGray rounded-none"
                  >
                    Visão Geral
                  </TabsTrigger>
                  <TabsTrigger 
                    value="appointments" 
                    className="border-b-2 border-transparent data-[state=active]:border-beauty-nude data-[state=active]:bg-transparent text-beauty-darkGray rounded-none"
                  >
                    Agendamentos
                  </TabsTrigger>
                  <TabsTrigger 
                    value="clients" 
                    className="border-b-2 border-transparent data-[state=active]:border-beauty-nude data-[state=active]:bg-transparent text-beauty-darkGray rounded-none"
                  >
                    Clientes
                  </TabsTrigger>
                  <TabsTrigger 
                    value="services" 
                    className="border-b-2 border-transparent data-[state=active]:border-beauty-nude data-[state=active]:bg-transparent text-beauty-darkGray rounded-none"
                  >
                    Serviços
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="overview">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <Card className="lg:col-span-2 border-beauty-nude/20">
                    <CardHeader>
                      <CardTitle className="text-lg font-medium text-beauty-darkGray">
                        Receita Mensal
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="receita" fill="#E8D6D0" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-beauty-nude/20">
                    <CardHeader>
                      <CardTitle className="text-lg font-medium text-beauty-darkGray">
                        Serviços Populares
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {serviceData.map((item, index) => (
                        <div key={index} className="mb-4">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-beauty-darkGray">{item.name}</span>
                            <span className="text-sm font-medium text-beauty-darkGray">{item.value}%</span>
                          </div>
                          <div className="w-full h-2 bg-beauty-lightGray rounded-full">
                            <div
                              className="h-full bg-beauty-nude rounded-full"
                              style={{ width: `${item.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="mt-8 border-beauty-nude/20">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium text-beauty-darkGray">
                      Agendamentos de Hoje
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-beauty-nude/20">
                            <th className="text-left py-3 px-4 text-sm font-medium text-beauty-darkGray">Cliente</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-beauty-darkGray">Serviço</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-beauty-darkGray">Horário</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-beauty-darkGray">Profissional</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-beauty-darkGray">Status</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-beauty-darkGray">Ação</th>
                          </tr>
                        </thead>
                        <tbody>
                          {todayAppointments.map((appointment) => (
                            <tr key={appointment.id} className="border-b border-beauty-nude/10">
                              <td className="py-4 px-4 text-sm text-beauty-darkGray">{appointment.client}</td>
                              <td className="py-4 px-4 text-sm text-beauty-darkGray">{appointment.service}</td>
                              <td className="py-4 px-4 text-sm text-beauty-darkGray">{appointment.time}</td>
                              <td className="py-4 px-4 text-sm text-beauty-darkGray">{appointment.professional}</td>
                              <td className="py-4 px-4 text-sm">
                                <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                                  appointment.status === "confirmed"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}>
                                  {appointment.status === "confirmed" ? "Confirmado" : "Pendente"}
                                </span>
                              </td>
                              <td className="py-4 px-4 text-sm">
                                <div className="flex space-x-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs h-8 border-beauty-nude text-beauty-darkGray hover:bg-beauty-nude/10"
                                  >
                                    Detalhes
                                  </Button>
                                  {appointment.status === "pending" && (
                                    <Button
                                      size="sm"
                                      className="text-xs h-8 bg-beauty-pink hover:bg-beauty-nude text-beauty-darkGray"
                                    >
                                      Confirmar
                                    </Button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="appointments">
                <div className="text-center py-16">
                  <h3 className="text-xl font-serif font-medium text-beauty-darkGray mb-4">
                    Área em Desenvolvimento
                  </h3>
                  <p className="text-beauty-darkGray/80 mb-6">
                    A gestão completa de agendamentos estará disponível em breve.
                  </p>
                  <Button className="bg-beauty-pink hover:bg-beauty-nude text-beauty-darkGray">
                    Ver Agendamentos de Hoje
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="clients">
                <div className="text-center py-16">
                  <h3 className="text-xl font-serif font-medium text-beauty-darkGray mb-4">
                    Área em Desenvolvimento
                  </h3>
                  <p className="text-beauty-darkGray/80 mb-6">
                    O gerenciamento de clientes estará disponível em breve.
                  </p>
                  <Button className="bg-beauty-pink hover:bg-beauty-nude text-beauty-darkGray">
                    Adicionar Cliente
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="services">
                <div className="text-center py-16">
                  <h3 className="text-xl font-serif font-medium text-beauty-darkGray mb-4">
                    Área em Desenvolvimento
                  </h3>
                  <p className="text-beauty-darkGray/80 mb-6">
                    O gerenciamento de serviços estará disponível em breve.
                  </p>
                  <Button className="bg-beauty-pink hover:bg-beauty-nude text-beauty-darkGray">
                    Adicionar Serviço
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

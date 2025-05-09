
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProfessionalCard from "@/components/ProfessionalCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfessionalsPage = () => {
  const [activeTab, setActiveTab] = useState("todos");

  const professionals = {
    todos: [
      {
        id: "1",
        name: "Camila Silva",
        role: "Nail Designer",
        bio: "Especialista em unhas artísticas e alongamentos com mais de 8 anos de experiência",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&q=80&w=500",
        specialties: ["Nail Art", "Alongamentos", "Unhas em Gel"]
      },
      {
        id: "2",
        name: "Renata Oliveira",
        role: "Podóloga",
        bio: "Podóloga formada com especialização em tratamentos para unhas encravadas e calos",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&q=80&w=500", 
        specialties: ["Podologia Clínica", "Unhas Encravadas", "Tratamentos Especiais"]
      },
      {
        id: "3",
        name: "Bruno Mendes",
        role: "Manicure e Pedicure",
        bio: "Expert em cuidados com as unhas e especialista em técnicas de relaxamento durante o atendimento",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&q=80&w=500",
        specialties: ["Manicure", "Pedicure", "Esmaltação em Gel"]
      },
      {
        id: "4",
        name: "Laura Santos",
        role: "Nail Designer Senior",
        bio: "Especialista em desenhos artísticos e técnicas avançadas de nail art com reconhecimento internacional",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&q=80&w=500",
        specialties: ["Nail Art Avançada", "Pedrarias", "Técnicas 3D"]
      },
      {
        id: "5",
        name: "Fernanda Costa",
        role: "Especialista em Alongamentos",
        bio: "Técnica exclusiva em alongamentos naturais e duradouros usando métodos inovadores",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&q=80&w=500",
        specialties: ["Alongamento em Gel", "Alongamento em Fibra", "Manutenção"]
      },
      {
        id: "6",
        name: "Rafael Gomes",
        role: "Podólogo Clínico",
        bio: "Especialista em podologia clínica com formação em fisioterapia podal",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&q=80&w=500",
        specialties: ["Podologia Avançada", "Reflexologia", "Tratamentos Ortopédicos"]
      }
    ],
    nailDesigners: [
      {
        id: "1",
        name: "Camila Silva",
        role: "Nail Designer",
        bio: "Especialista em unhas artísticas e alongamentos com mais de 8 anos de experiência",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&q=80&w=500",
        specialties: ["Nail Art", "Alongamentos", "Unhas em Gel"]
      },
      {
        id: "4",
        name: "Laura Santos",
        role: "Nail Designer Senior",
        bio: "Especialista em desenhos artísticos e técnicas avançadas de nail art com reconhecimento internacional",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&q=80&w=500",
        specialties: ["Nail Art Avançada", "Pedrarias", "Técnicas 3D"]
      },
      {
        id: "5",
        name: "Fernanda Costa",
        role: "Especialista em Alongamentos",
        bio: "Técnica exclusiva em alongamentos naturais e duradouros usando métodos inovadores",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&q=80&w=500",
        specialties: ["Alongamento em Gel", "Alongamento em Fibra", "Manutenção"]
      }
    ],
    podologos: [
      {
        id: "2",
        name: "Renata Oliveira",
        role: "Podóloga",
        bio: "Podóloga formada com especialização em tratamentos para unhas encravadas e calos",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&q=80&w=500", 
        specialties: ["Podologia Clínica", "Unhas Encravadas", "Tratamentos Especiais"]
      },
      {
        id: "6",
        name: "Rafael Gomes",
        role: "Podólogo Clínico",
        bio: "Especialista em podologia clínica com formação em fisioterapia podal",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&q=80&w=500",
        specialties: ["Podologia Avançada", "Reflexologia", "Tratamentos Ortopédicos"]
      }
    ],
    manicure: [
      {
        id: "3",
        name: "Bruno Mendes",
        role: "Manicure e Pedicure",
        bio: "Expert em cuidados com as unhas e especialista em técnicas de relaxamento durante o atendimento",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&q=80&w=500",
        specialties: ["Manicure", "Pedicure", "Esmaltação em Gel"]
      }
    ]
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-beauty-darkGray mb-4">
            Nossos Profissionais
          </h1>
          <p className="text-beauty-darkGray/80">
            Conheça nossa equipe de especialistas altamente qualificados, prontos para 
            transformar suas unhas e proporcionar a melhor experiência em cuidados estéticos.
          </p>
        </div>

        <Tabs defaultValue="todos" className="w-full" onValueChange={setActiveTab} value={activeTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-beauty-lightGray">
              <TabsTrigger value="todos" className="px-6 py-3">Todos</TabsTrigger>
              <TabsTrigger value="nailDesigners" className="px-6 py-3">Nail Designers</TabsTrigger>
              <TabsTrigger value="podologos" className="px-6 py-3">Podólogos</TabsTrigger>
              <TabsTrigger value="manicure" className="px-6 py-3">Manicure & Pedicure</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="todos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionals.todos.map((professional) => (
                <ProfessionalCard
                  key={professional.id}
                  id={professional.id}
                  name={professional.name}
                  role={professional.role}
                  bio={professional.bio}
                  image={professional.image}
                  specialties={professional.specialties}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nailDesigners">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionals.nailDesigners.map((professional) => (
                <ProfessionalCard
                  key={professional.id}
                  id={professional.id}
                  name={professional.name}
                  role={professional.role}
                  bio={professional.bio}
                  image={professional.image}
                  specialties={professional.specialties}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="podologos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionals.podologos.map((professional) => (
                <ProfessionalCard
                  key={professional.id}
                  id={professional.id}
                  name={professional.name}
                  role={professional.role}
                  bio={professional.bio}
                  image={professional.image}
                  specialties={professional.specialties}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="manicure">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionals.manicure.map((professional) => (
                <ProfessionalCard
                  key={professional.id}
                  id={professional.id}
                  name={professional.name}
                  role={professional.role}
                  bio={professional.bio}
                  image={professional.image}
                  specialties={professional.specialties}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </>
  );
};

export default ProfessionalsPage;

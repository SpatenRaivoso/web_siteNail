
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("manicure");

  const services = {
    manicure: [
      {
        id: "1",
        title: "Manicure Tradicional",
        description: "Cuidado completo para suas unhas das mãos com esmaltação tradicional",
        price: "R$ 45,00",
        duration: "45 min",
        image: "https://images.unsplash.com/photo-1604654894611-6973b364cbbb?auto=format&q=80&w=500",
      },
      {
        id: "2",
        title: "Esmaltação em Gel",
        description: "Esmaltação em gel para maior durabilidade e brilho intenso",
        price: "R$ 65,00",
        duration: "60 min",
        image: "https://images.unsplash.com/photo-1600791200466-aa84b35d0664?auto=format&q=80&w=500",
      },
      {
        id: "3",
        title: "Spa de Mãos",
        description: "Tratamento completo com esfoliação, hidratação e massagem relaxante",
        price: "R$ 80,00",
        duration: "60 min",
        image: "https://images.unsplash.com/photo-1610992015324-fc55b0823df1?auto=format&q=80&w=500",
      }
    ],
    pedicure: [
      {
        id: "4",
        title: "Pedicure Completa",
        description: "Tratamento e embelezamento para os pés, incluindo esfoliação e massagem",
        price: "R$ 55,00",
        duration: "60 min",
        image: "https://images.unsplash.com/photo-1632345031435-8727f6897d34?auto=format&q=80&w=500",
      },
      {
        id: "5",
        title: "Esmaltação em Gel para Pés",
        description: "Esmaltação em gel para maior durabilidade e brilho intenso",
        price: "R$ 70,00",
        duration: "50 min",
        image: "https://images.unsplash.com/photo-1519882189396-71f93cb4714d?auto=format&q=80&w=500",
      },
      {
        id: "6",
        title: "Spa de Pés",
        description: "Tratamento completo com esfoliação, hidratação e massagem relaxante",
        price: "R$ 90,00",
        duration: "70 min",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&q=80&w=500",
      }
    ],
    alongamentos: [
      {
        id: "7",
        title: "Alongamento em Gel",
        description: "Alongamento de unhas com técnica de aplicação em gel para um resultado natural",
        price: "R$ 120,00",
        duration: "90 min",
        image: "https://images.unsplash.com/photo-1602619025225-5f04dd2febba?auto=format&q=80&w=500",
      },
      {
        id: "8",
        title: "Alongamento em Acrílico",
        description: "Alongamento com acrílico para unhas mais resistentes e duradouras",
        price: "R$ 140,00",
        duration: "100 min",
        image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&q=80&w=500",
      },
      {
        id: "9",
        title: "Alongamento com Fibra de Vidro",
        description: "Alongamento com fibra de vidro para unhas naturais e resistentes",
        price: "R$ 160,00",
        duration: "110 min",
        image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&q=80&w=500",
      }
    ],
    podologia: [
      {
        id: "10",
        title: "Avaliação Podológica",
        description: "Avaliação completa dos pés para identificar problemas e necessidades específicas",
        price: "R$ 60,00",
        duration: "30 min",
        image: "https://images.unsplash.com/photo-1616681260820-8a137f277b7e?auto=format&q=80&w=500",
      },
      {
        id: "11",
        title: "Tratamento de Unhas Encravadas",
        description: "Tratamento especializado para unhas encravadas e correção da curvatura",
        price: "R$ 90,00",
        duration: "45 min",
        image: "https://images.unsplash.com/photo-1643731994521-25f718517b75?auto=format&q=80&w=500",
      },
      {
        id: "12",
        title: "Remoção de Calosidades",
        description: "Remoção de calos e calosidades nos pés para maior conforto ao caminhar",
        price: "R$ 80,00",
        duration: "40 min",
        image: "https://images.unsplash.com/photo-1625246333195-78d73c5207fd?auto=format&q=80&w=500",
      }
    ]
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-beauty-darkGray mb-4">
            Nossos Serviços
          </h1>
          <p className="text-beauty-darkGray/80">
            Oferecemos uma variedade de serviços de beleza para unhas e cuidados com os pés.
            Escolha o serviço que melhor atende às suas necessidades.
          </p>
        </div>

        <Tabs defaultValue="manicure" className="w-full" onValueChange={setActiveTab} value={activeTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-beauty-lightGray">
              <TabsTrigger value="manicure" className="px-6 py-3">Manicure</TabsTrigger>
              <TabsTrigger value="pedicure" className="px-6 py-3">Pedicure</TabsTrigger>
              <TabsTrigger value="alongamentos" className="px-6 py-3">Alongamentos</TabsTrigger>
              <TabsTrigger value="podologia" className="px-6 py-3">Podologia</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="manicure">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.manicure.map((service) => (
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
          </TabsContent>

          <TabsContent value="pedicure">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.pedicure.map((service) => (
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
          </TabsContent>

          <TabsContent value="alongamentos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.alongamentos.map((service) => (
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
          </TabsContent>

          <TabsContent value="podologia">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.podologia.map((service) => (
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
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </>
  );
};

export default ServicesPage;

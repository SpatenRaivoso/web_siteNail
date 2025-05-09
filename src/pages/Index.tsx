
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import ProfessionalCard from "@/components/ProfessionalCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Dados de amostra
const featuredServices = [
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
    title: "Pedicure Completa",
    description: "Tratamento e embelezamento para os pés, incluindo esfoliação e massagem",
    price: "R$ 55,00",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d34?auto=format&q=80&w=500",
  },
  {
    id: "3",
    title: "Alongamento em Gel",
    description: "Alongamento de unhas com técnica de aplicação em gel para um resultado natural",
    price: "R$ 120,00",
    duration: "90 min",
    image: "https://images.unsplash.com/photo-1602619025225-5f04dd2febba?auto=format&q=80&w=500",
  }
];

const featuredProfessionals = [
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
  }
];

const testimonials = [
  {
    id: "1",
    name: "Marina Costa",
    text: "Amei o atendimento! A Camila é muito atenciosa e fez um trabalho incrível nas minhas unhas. Já agendei meu retorno!",
    rating: 5,
    service: "Alongamento de Unhas"
  },
  {
    id: "2",
    name: "Patricia Lopes",
    text: "Excelente serviço de podologia. A Renata identificou e resolveu um problema que eu tinha há anos. Super recomendo!",
    rating: 5,
    service: "Podologia"
  },
  {
    id: "3",
    name: "Carla Mendes",
    text: "Atendimento rápido, ambiente limpo e agradável. As unhas ficaram perfeitas e a durabilidade é impressionante.",
    rating: 4,
    service: "Manicure em Gel"
  }
];

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-beauty-pink py-16 md:py-24">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-3xl md:text-5xl font-serif font-semibold text-beauty-darkGray mb-6 leading-tight">
              Beleza e cuidados para suas unhas e pés
            </h1>
            <p className="text-beauty-darkGray/80 text-lg mb-8">
              Agende serviços de manicure, pedicure, alongamentos e podologia com os melhores profissionais. Experiência personalizada e resultados que você merece.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/onboarding">
                <Button className="w-full sm:w-auto bg-white hover:bg-beauty-nude text-beauty-darkGray border border-beauty-nude font-medium px-8 py-3 rounded-lg">
                  Agendar Agora
                </Button>
              </Link>
              <Link to="/servicos">
                <Button variant="outline" className="w-full sm:w-auto border-beauty-nude text-beauty-darkGray hover:bg-beauty-nude/10 font-medium px-8 py-3 rounded-lg">
                  Ver Serviços
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1610992015324-fc55b0823df1?auto=format&q=80" 
                alt="Serviços de Beleza" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-beauty-nude rounded-full hidden md:block"></div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-semibold text-beauty-darkGray mb-4">
              Por que escolher a BeautyNail?
            </h2>
            <p className="text-beauty-darkGray/80">
              Oferecemos um atendimento personalizado e de qualidade, com foco em proporcionar a melhor experiência para o seu cuidado pessoal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-beauty-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-beauty-darkGray">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-beauty-darkGray mb-2">Higiene Garantida</h3>
              <p className="text-beauty-darkGray/80">
                Materiais esterilizados e de alta qualidade para garantir sua segurança e bem-estar durante os procedimentos.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-beauty-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-beauty-darkGray">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-beauty-darkGray mb-2">Pontualidade</h3>
              <p className="text-beauty-darkGray/80">
                Respeitamos seu tempo. Agendamentos precisos e sem atrasos para que você possa organizar seu dia.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-beauty-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-beauty-darkGray">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-beauty-darkGray mb-2">Atendimento Personalizado</h3>
              <p className="text-beauty-darkGray/80">
                Entendemos suas necessidades específicas e oferecemos um tratamento personalizado para alcançar os melhores resultados.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Services */}
      <section className="py-16 bg-beauty-lightGray">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-beauty-darkGray">
              Serviços Populares
            </h2>
            <Link to="/servicos" className="text-beauty-darkGray font-medium hover:text-beauty-nude transition-colors">
              Ver Todos
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
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
        </div>
      </section>
      
      {/* Professionals */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-beauty-darkGray">
              Nossos Especialistas
            </h2>
            <Link to="/profissionais" className="text-beauty-darkGray font-medium hover:text-beauty-nude transition-colors">
              Ver Todos
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProfessionals.map((professional) => (
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
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-beauty-pink">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-beauty-darkGray text-center mb-10">
            O que dizem nossos clientes
          </h2>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="relative bg-white rounded-2xl p-8 shadow-sm">
              <div className="absolute top-4 right-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-beauty-pink/30" viewBox="0 0 16 16">
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                </svg>
              </div>
              
              <div className="space-y-4">
                <div className="flex">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-yellow-400" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-beauty-darkGray italic">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div>
                  <p className="font-medium text-beauty-darkGray">{testimonials[activeTestimonial].name}</p>
                  <p className="text-sm text-beauty-darkGray/70">{testimonials[activeTestimonial].service}</p>
                </div>
              </div>
              
              <div className="flex justify-between mt-6">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-beauty-lightGray hover:bg-beauty-nude/20 transition-colors"
                  aria-label="Depoimento anterior"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-beauty-darkGray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-beauty-lightGray hover:bg-beauty-nude/20 transition-colors"
                  aria-label="Próximo depoimento"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-beauty-darkGray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="absolute -z-10 top-4 left-4 w-full h-full bg-beauty-nude/50 rounded-2xl"></div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="bg-white border border-beauty-nude/30 rounded-2xl p-10 md:p-16 shadow-sm text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-beauty-darkGray mb-6">
              Agende seu horário hoje mesmo
            </h2>
            <p className="text-beauty-darkGray/80 max-w-2xl mx-auto mb-8">
              Transforme suas unhas e cuide dos seus pés com a BeautyNail. Preencha nosso questionário rápido para que possamos oferecer a melhor experiência personalizada.
            </p>
            <Link to="/onboarding">
              <Button className="bg-beauty-pink hover:bg-beauty-nude text-beauty-darkGray px-10 py-6 rounded-lg text-lg font-medium">
                Começar Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;

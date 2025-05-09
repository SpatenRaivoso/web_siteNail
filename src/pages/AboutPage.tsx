
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-beauty-darkGray mb-6 text-center">
            Sobre a BeautyNail
          </h1>

          <div className="mb-12 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&q=80&w=1000" 
              alt="Nossa equipe" 
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-beauty-darkGray/80 mb-6">
              Fundada em 2018, a BeautyNail nasceu da paixão por beleza e cuidados estéticos. 
              Nossa missão é proporcionar experiências transformadoras, elevando a autoestima 
              e o bem-estar de nossos clientes através de serviços personalizados e de alta qualidade.
            </p>

            <h2 className="text-2xl font-serif font-medium text-beauty-darkGray mt-10 mb-4">
              Nossa História
            </h2>
            <p className="text-beauty-darkGray/80 mb-6">
              A BeautyNail começou como um pequeno estúdio especializado em nail art. Ao longo dos anos, 
              expandimos nossos serviços para incluir tratamentos completos de manicure, pedicure, 
              alongamentos e podologia. Hoje, somos referência em cuidados estéticos para unhas e pés, 
              atendendo centenas de clientes mensalmente.
            </p>

            <h2 className="text-2xl font-serif font-medium text-beauty-darkGray mt-10 mb-4">
              Diferenciais
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="beauty-card">
                <h3 className="text-xl font-serif font-medium text-beauty-darkGray mb-2">
                  Excelência em Atendimento
                </h3>
                <p className="text-beauty-darkGray/80">
                  Nossos profissionais são constantemente treinados para oferecer o melhor atendimento, 
                  com foco total nas necessidades específicas de cada cliente.
                </p>
              </div>
              
              <div className="beauty-card">
                <h3 className="text-xl font-serif font-medium text-beauty-darkGray mb-2">
                  Biossegurança
                </h3>
                <p className="text-beauty-darkGray/80">
                  Utilizamos materiais descartáveis e processos rigorosos de esterilização 
                  para garantir a segurança e o bem-estar de nossos clientes.
                </p>
              </div>
              
              <div className="beauty-card">
                <h3 className="text-xl font-serif font-medium text-beauty-darkGray mb-2">
                  Produtos de Qualidade
                </h3>
                <p className="text-beauty-darkGray/80">
                  Trabalhamos apenas com as melhores marcas do mercado, garantindo 
                  resultados superiores e duradouros.
                </p>
              </div>
              
              <div className="beauty-card">
                <h3 className="text-xl font-serif font-medium text-beauty-darkGray mb-2">
                  Tecnologia e Inovação
                </h3>
                <p className="text-beauty-darkGray/80">
                  Acompanhamos as tendências globais e investimos constantemente em 
                  novas técnicas e tecnologias para oferecer o que há de melhor.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-medium text-beauty-darkGray mt-10 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-beauty-darkGray/80 mb-6">
              Nossa equipe é formada por profissionais apaixonados e especializados, cada um com 
              anos de experiência em suas respectivas áreas. Todos passam por treinamentos contínuos 
              para se manterem atualizados com as tendências e técnicas mais recentes do mercado.
            </p>

            <h2 className="text-2xl font-serif font-medium text-beauty-darkGray mt-10 mb-4">
              Visão e Valores
            </h2>

            <div className="my-6 p-6 bg-beauty-pink/20 rounded-xl">
              <p className="text-beauty-darkGray font-medium italic">
                "Ser reconhecida como referência em beleza e cuidados estéticos, 
                proporcionando experiências transformadoras e resultados excepcionais."
              </p>
            </div>

            <ul className="space-y-2 my-6 list-disc pl-5">
              <li className="text-beauty-darkGray/80">
                <span className="font-medium text-beauty-darkGray">Excelência:</span> Busca constante pela perfeição em todos os serviços.
              </li>
              <li className="text-beauty-darkGray/80">
                <span className="font-medium text-beauty-darkGray">Ética:</span> Compromisso com a transparência e honestidade em todas as relações.
              </li>
              <li className="text-beauty-darkGray/80">
                <span className="font-medium text-beauty-darkGray">Inovação:</span> Busca contínua por novas técnicas e tendências.
              </li>
              <li className="text-beauty-darkGray/80">
                <span className="font-medium text-beauty-darkGray">Cliente no centro:</span> Todas as decisões são tomadas pensando no bem-estar e satisfação dos clientes.
              </li>
              <li className="text-beauty-darkGray/80">
                <span className="font-medium text-beauty-darkGray">Sustentabilidade:</span> Compromisso com práticas ambientalmente responsáveis.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { format, addDays } from "date-fns";
import { ptBR } from "date-fns/locale";

// Dados simulados
const availableDates = Array.from({ length: 5 }).map((_, i) => addDays(new Date(), i + 1));
const availableTimeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

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

const OnboardingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nailType: "",
    desiredServices: [] as string[],
    frequency: "",
    specialRequests: "",
    allergies: "",
    concernAreas: [] as string[],
    selectedDate: null as Date | null,
    selectedTime: null as string | null,
    selectedProfessional: null as string | null,
    selectedServiceId: ""
  });

  useEffect(() => {
    // Parse query string to check for service parameter
    const searchParams = new URLSearchParams(location.search);
    const serviceId = searchParams.get('service');
    if (serviceId) {
      setFormData({
        ...formData,
        selectedServiceId: serviceId,
        desiredServices: [serviceId]
      });
    }
  }, [location]);

  const totalSteps = 4; // Agora são 4 etapas, incluindo a escolha de horário

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (name: string, value: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        [name]: [...(formData[name as keyof typeof formData] as string[] || []), value],
      });
    } else {
      setFormData({
        ...formData,
        [name]: (formData[name as keyof typeof formData] as string[]).filter(
          (item) => item !== value
        ),
      });
    }
  };

  const handleNext = () => {
    // Validação simples
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone) {
        toast.error("Por favor, preencha todos os campos obrigatórios.");
        return;
      }
    } else if (step === 2) {
      if (!formData.nailType || formData.desiredServices.length === 0) {
        toast.error("Por favor, selecione o tipo de unha e ao menos um serviço.");
        return;
      }
    } else if (step === 3) {
      // Verificar se o usuário preencheu os campos adicionais conforme necessário
      // (opcional)
    } else if (step === 4) {
      if (!formData.selectedDate || !formData.selectedTime || !formData.selectedProfessional) {
        toast.error("Por favor, selecione data, horário e profissional.");
        return;
      }
    }

    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = () => {
    // Aqui você enviaria os dados para o backend
    console.log("Form data submitted:", formData);
    toast.success("Agendamento realizado com sucesso!");
    navigate("/"); // Retorna para a tela inicial após agendamento
  };

  const setSelectedDate = (date: Date) => {
    setFormData({
      ...formData,
      selectedDate: date
    });
  };

  const setSelectedTime = (time: string) => {
    setFormData({
      ...formData,
      selectedTime: time
    });
  };

  const setSelectedProfessional = (professionalId: string) => {
    setFormData({
      ...formData,
      selectedProfessional: professionalId
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        // ... keep existing code (personal information form)
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
              />
            </div>
            
            <div className="space-y-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
              />
            </div>
            
            <div className="space-y-4">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>
        );
        
      case 2:
        // ... keep existing code (service preferences form)
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-beauty-darkGray mb-3">Tipo de Unha</h3>
                <RadioGroup
                  value={formData.nailType}
                  onValueChange={(value) => handleRadioChange("nailType", value)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="normal" value="normal" />
                    <Label htmlFor="normal" className="cursor-pointer">Unha Normal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="brittle" value="brittle" />
                    <Label htmlFor="brittle" className="cursor-pointer">Unha Quebradiça</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="damaged" value="damaged" />
                    <Label htmlFor="damaged" className="cursor-pointer">Unha Danificada</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="ingrown" value="ingrown" />
                    <Label htmlFor="ingrown" className="cursor-pointer">Unha Encravada</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-beauty-darkGray mb-3">Serviços Desejados</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="manicure"
                      checked={formData.desiredServices.includes("manicure")}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange("desiredServices", "manicure", !!checked)
                      }
                    />
                    <Label htmlFor="manicure" className="cursor-pointer">Manicure</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="pedicure"
                      checked={formData.desiredServices.includes("pedicure")}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange("desiredServices", "pedicure", !!checked)
                      }
                    />
                    <Label htmlFor="pedicure" className="cursor-pointer">Pedicure</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="gel"
                      checked={formData.desiredServices.includes("gel")}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange("desiredServices", "gel", !!checked)
                      }
                    />
                    <Label htmlFor="gel" className="cursor-pointer">Unhas em Gel</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="acrylic"
                      checked={formData.desiredServices.includes("acrylic")}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange("desiredServices", "acrylic", !!checked)
                      }
                    />
                    <Label htmlFor="acrylic" className="cursor-pointer">Unhas em Acrílico</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="nailArt"
                      checked={formData.desiredServices.includes("nailArt")}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange("desiredServices", "nailArt", !!checked)
                      }
                    />
                    <Label htmlFor="nailArt" className="cursor-pointer">Nail Art</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="podology"
                      checked={formData.desiredServices.includes("podology")}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange("desiredServices", "podology", !!checked)
                      }
                    />
                    <Label htmlFor="podology" className="cursor-pointer">Podologia</Label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-beauty-darkGray mb-3">Frequência Desejada</h3>
                <RadioGroup
                  value={formData.frequency}
                  onValueChange={(value) => handleRadioChange("frequency", value)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="weekly" value="weekly" />
                    <Label htmlFor="weekly" className="cursor-pointer">Semanal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="biweekly" value="biweekly" />
                    <Label htmlFor="biweekly" className="cursor-pointer">Quinzenal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="monthly" value="monthly" />
                    <Label htmlFor="monthly" className="cursor-pointer">Mensal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="occasional" value="occasional" />
                    <Label htmlFor="occasional" className="cursor-pointer">Ocasional</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );
        
      case 3:
        // ... keep existing code (additional details form)
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="specialRequests">Você tem alguma preferência específica?</Label>
              <Textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Conte-nos sobre suas preferências específicas quanto a estilos, cores, etc."
                rows={4}
              />
            </div>
            
            <div className="space-y-4">
              <Label htmlFor="allergies">Alergias ou Sensibilidades</Label>
              <Textarea
                id="allergies"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                placeholder="Você tem alguma alergia ou sensibilidade que devemos saber?"
                rows={3}
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-beauty-darkGray mb-3">Áreas de Preocupação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="dryness"
                      checked={formData.concernAreas.includes("dryness")}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange("concernAreas", "dryness", !!checked)
                      }
                    />
                    <Label htmlFor="dryness" className="cursor-pointer">Ressecamento</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="brittleness"
                      checked={formData.concernAreas.includes("brittleness")}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange("concernAreas", "brittleness", !!checked)
                      }
                    />
                    <Label htmlFor="brittleness" className="cursor-pointer">Fragilidade</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ingrownNails"
                      checked={formData.concernAreas.includes("ingrownNails")}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange("concernAreas", "ingrownNails", !!checked)
                      }
                    />
                    <Label htmlFor="ingrownNails" className="cursor-pointer">Unhas Encravadas</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="calluses"
                      checked={formData.concernAreas.includes("calluses")}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange("concernAreas", "calluses", !!checked)
                      }
                    />
                    <Label htmlFor="calluses" className="cursor-pointer">Calosidades</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="fungus"
                      checked={formData.concernAreas.includes("fungus")}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange("concernAreas", "fungus", !!checked)
                      }
                    />
                    <Label htmlFor="fungus" className="cursor-pointer">Micose</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="painfulNails"
                      checked={formData.concernAreas.includes("painfulNails")}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange("concernAreas", "painfulNails", !!checked)
                      }
                    />
                    <Label htmlFor="painfulNails" className="cursor-pointer">Dor nas Unhas</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 4:
        // Nova etapa para agendamento
        return (
          <div className="space-y-6">
            {/* Profissionais Recomendados */}
            <section className="mb-8">
              <h3 className="font-medium text-beauty-darkGray mb-4">Escolha um Profissional</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendedProfessionals.map(professional => (
                  <div 
                    key={professional.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      formData.selectedProfessional === professional.id
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
            
            {/* Datas */}
            <section className="mb-8">
              <h3 className="font-medium text-beauty-darkGray mb-4">Escolha uma Data</h3>
              <div className="flex flex-wrap gap-3">
                {availableDates.map((date) => {
                  const isSelected = formData.selectedDate && 
                    date.toDateString() === formData.selectedDate.toDateString();
                  
                  return (
                    <button
                      type="button"
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
            </section>
            
            {/* Horários */}
            {formData.selectedDate && (
              <section className="mb-8">
                <h3 className="font-medium text-beauty-darkGray mb-4">
                  Horários em {format(formData.selectedDate, "d 'de' MMMM", { locale: ptBR })}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
                  {availableTimeSlots.map((time) => (
                    <button
                      type="button"
                      key={time}
                      className={`px-3 py-2 rounded-lg border transition-colors ${
                        formData.selectedTime === time
                          ? "bg-beauty-nude/30 border-beauty-nude text-beauty-darkGray"
                          : "border-gray-200 hover:border-beauty-nude/50 text-beauty-darkGray/80"
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </section>
            )}

            <div className="bg-beauty-pink/10 rounded-lg p-4 mt-6">
              <p className="text-sm text-beauty-darkGray/80">
                Ao confirmar seu agendamento, você concorda com nossa política de cancelamento. 
                Cancelamentos com menos de 24 horas de antecedência estão sujeitos a cobrança de 50% do valor do serviço.
              </p>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      
      <OnboardingLayout
        step={step}
        totalSteps={totalSteps}
        title={
          step === 1
            ? "Vamos conhecer você"
            : step === 2
            ? "Suas preferências"
            : step === 3
            ? "Detalhes adicionais"
            : "Agendamento"
        }
        description={
          step === 1
            ? "Conte-nos um pouco sobre você para que possamos personalizar sua experiência."
            : step === 2
            ? "Ajude-nos a entender suas necessidades para recomendar os melhores serviços."
            : step === 3
            ? "Informações adicionais que nos ajudarão a proporcionar a melhor experiência."
            : "Escolha o profissional, data e horário para seu atendimento."
        }
      >
        <form>
          {renderStep()}
          
          <div className="flex justify-between mt-10">
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              className={`border-beauty-nude text-beauty-darkGray hover:bg-beauty-nude/10 ${
                step === 1 ? "opacity-0 cursor-default" : ""
              }`}
              disabled={step === 1}
            >
              Voltar
            </Button>
            <Button
              type="button"
              onClick={handleNext}
              className="bg-beauty-pink hover:bg-beauty-nude text-beauty-darkGray"
            >
              {step === totalSteps ? "Confirmar Agendamento" : "Próximo"}
            </Button>
          </div>
        </form>
      </OnboardingLayout>
      
      <Footer />
    </>
  );
};

export default OnboardingPage;

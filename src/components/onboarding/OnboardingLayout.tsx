
import React, { ReactNode } from "react";

interface StepProps {
  step: number;
  totalSteps: number;
  title: string;
  description: string;
  children: ReactNode;
}

const OnboardingLayout: React.FC<StepProps> = ({
  step,
  totalSteps,
  title,
  description,
  children,
}) => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-beauty-lightGray py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-beauty-nude/20 overflow-hidden">
          <div className="p-8">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="text-sm font-medium text-beauty-nude">
                  Etapa {step} de {totalSteps}
                </div>
                <div className="ml-4 flex-1 h-2 bg-beauty-lightGray rounded-full">
                  <div
                    className="h-full bg-beauty-nude rounded-full transition-all duration-300"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-serif font-medium text-beauty-darkGray mb-2">
                {title}
              </h1>
              <p className="text-beauty-darkGray/80">{description}</p>
            </div>
            
            <div className="fade-in">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingLayout;

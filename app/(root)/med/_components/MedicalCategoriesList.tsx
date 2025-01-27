import React from 'react';
import { cn } from "@/lib/utils";
import { Pill, Leaf, Droplets } from 'lucide-react';
import { AnimatedList } from '@/components/ui/animated-list';

interface MedicalItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const medicalCategories: MedicalItem[] = [
  {
    title: "Allopathic",
    description: "Modern medicine using scientifically developed drugs for quick symptom relief and targeted treatment.",
    icon: <Pill className="text-white" size={24} />,
  },
  {
    title: "Ayurvedic",
    description: "Traditional Indian medicine focusing on natural remedies, herbs, and holistic healing.",
    icon: <Leaf className="text-white" size={24} />,
  },
  {
    title: "Homeopathic",
    description: "Alternative medicine using highly diluted substances to stimulate the body's self-healing process.",
    icon: <Droplets className="text-white" size={24} />,
  },
];

const MedicalCard = ({ title, description, icon }: MedicalItem) => {
  return (
    <figure className={cn(
      "relative mx-auto min-h-fit w-full max-w-[600px] cursor-pointer overflow-hidden rounded-2xl p-4",
      "transition-all duration-200 ease-in-out hover:scale-[102%]",
      "bg-[#fffcf2] border-2 border-red-500",
      "transform-gpu"
    )}>
      <div className="flex flex-row items-start gap-4">
        <div className="flex size-12 items-center justify-center rounded-full bg-red-800">
          {icon}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-xl font-bold text-gray-900 mb-2">
            {title}
          </figcaption>
          <p className="text-sm text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function MedicalCategoriesList({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn(
      "relative w-full flex flex-col gap-4 p-6",
      className
    )}>
      <AnimatedList>
        {medicalCategories.map((item, idx) => (
          <MedicalCard {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

export default MedicalCategoriesList;


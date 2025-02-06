'use client'
import React from 'react';
import { cn } from "@/lib/utils";
import { Pill, Leaf, Droplets, LucideIcon } from 'lucide-react';
import { AnimatedList } from '@/components/ui/animated-list';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Medicine {
  name: string;
  description: string;
}

interface MedicalItem {
  title: string;
  description: string;
  IconComponent: LucideIcon;
  medicines: Medicine[];
}

const medicalCategories: MedicalItem[] = [
  {
    title: "Allopathic",
    description: "Modern medicine using scientifically developed drugs for quick symptom relief and targeted treatment. Based on extensive clinical research and standardized dosing.",
    IconComponent: Pill,
    medicines: [
      {
        name: "Nefopam",
        description: "Non-opioid pain reliever",
      },
      {
        name: "Ibuprofen",
        description: "Non-steroidal anti-inflammatory drug (NSAID)",
      },
      {
        name: "Indomethacin",
        description: "Potent anti-inflammatory medication",
      }
    ]
  },
  {
    title: "Ayurvedic",
    description: "Traditional Indian medicine focusing on natural remedies, herbs, and holistic healing. Emphasizes balance between body, mind, and spirit using natural substances.",
    IconComponent: Leaf,
    medicines: [
      {
        name: "Mahasudharshan Churna",
        description: "A powerful Ayurvedic blend for fever, detoxification, and immune support.",
      },
      {
        name: "Mahasudharshan Ghan Vati",
        description: "Herbal tablets used to manage viral fevers and infections.",
      },
      {
        name: "Godanti Bhasma",
        description: "Used to reduce high fever, migraines, and body aches",
      },
      {
        name: "Tribhuvan Kirti Rasa",
        description: "An Ayurvedic formula that helps with fever due to cold and flu",
      },
      {
        name: "Mahajwarankush Rasa",
        description: "Used for treating chronic fever and immune system imbalance.",
      }
    ]
  },
  {
    title: "Homeopathic",
    description: "Alternative medicine using highly diluted substances to stimulate the body's self-healing process. Based on the principle of 'like cures like'.",
    IconComponent: Droplets,
    medicines: [
      {
        name: "Aconite",
        description: "Used for fever with sudden onset, restlessness, and thirst for cold water, especially after cold wind exposure.",
      },
      {
        name: "Bryonia Alba",
        description: "Helps with fever accompanied by body aches, dry mouth, and excessive thirst.",
      },
      {
        name: "Arsenicum Album",
        description: " Effective for fevers with weakness, burning pain, and anxiety, often linked to respiratory infections.",
      },
      {
        name: "Euphrasia",
        description: "Treats fever with eye irritation, watery discharge, and cold symptoms",
      },
      {
        name: "Natrum Muriaticum",
        description: "Helps with fevers that cause chills, dehydration, and excessive dryness",
      }
    ]
  }
];

const MedicineList = ({ medicines }: { medicines: Medicine[] }) => {
  return (
    <div className="space-y-6 max-h-[80vh] overflow-y-auto pr-4 text-lg">
      {medicines.map((medicine, index) => (
        <div key={index} className="p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-xl">
          <h3 className="font-semibold text-2xl text-gray-900">{medicine.name}</h3>
          <p className="text-lg text-gray-600 mt-3">{medicine.description}</p>
        </div>
      ))}
    </div>
  );
};

const MedicalCard = ({ title, description, IconComponent, medicines }: MedicalItem) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <figure
        onClick={() => setIsOpen(true)}
        className={cn(
          "relative mx-auto min-h-[160px] w-full max-w-[1000px] cursor-pointer overflow-hidden rounded-2xl p-8",
          "transition-all duration-200 ease-in-out hover:scale-[104%]",
          "bg-[#fffcf2] border-2 border-red-500",
          "transform-gpu"
        )}
      >
        <div className="flex flex-row items-start gap-8">
          <div className="flex size-20 items-center justify-center rounded-full bg-red-800">
            <IconComponent className="text-white" size={40} />
          </div>
          <div className="flex flex-col">
            <figcaption className="text-3xl font-bold text-gray-900 mb-4">
              {title}
            </figcaption>
            <p className="text-lg text-gray-600">
              {description}
            </p>
          </div>
        </div>
      </figure>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl max-h-[95vh] text-xl">
          <DialogHeader className="pb-6">
            <DialogTitle className="flex items-center gap-4 text-3xl">
              <div className="flex size-12 items-center justify-center rounded-full bg-red-800">
                <IconComponent className="text-white" size={28} />
              </div>
              {title} Medicines
            </DialogTitle>
          </DialogHeader>
          <MedicineList medicines={medicines} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export function MedicalCategoriesList({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn(
      "relative w-full h-[95vh] flex flex-col gap-8 p-10 overflow-hidden pt-9",
      className
    )}>
      <div className="flex-1 overflow-y-auto">
        <AnimatedList className="space-y-8 pt-12 text-xl">
          {medicalCategories.map((item, idx) => (
            <MedicalCard {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>
    </div>
  );
}

export default MedicalCategoriesList;

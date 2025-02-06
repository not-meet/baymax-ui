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
  usage: string;
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
        usage: "Used for moderate to severe pain without causing drowsiness"
      },
      {
        name: "Ibuprofen",
        description: "Non-steroidal anti-inflammatory drug (NSAID)",
        usage: "Helps reduce pain, inflammation, and fever in conditions like arthritis and muscle pain"
      },
      {
        name: "Indomethacin",
        description: "Potent anti-inflammatory medication",
        usage: "Used for arthritis, gout, and other inflammatory conditions to relieve swelling and pain"
      }
    ]
  },
  {
    title: "Ayurvedic",
    description: "Traditional Indian medicine focusing on natural remedies, herbs, and holistic healing. Emphasizes balance between body, mind, and spirit using natural substances.",
    IconComponent: Leaf,
    medicines: [
      {
        name: "Ashwagandha",
        description: "Adaptogenic herb known as Indian Ginseng",
        usage: "Helps reduce stress and anxiety, improves sleep quality"
      },
      {
        name: "Turmeric",
        description: "Anti-inflammatory herb with curcumin",
        usage: "Supports joint health, immunity, and reduces inflammation"
      },
      {
        name: "Triphala",
        description: "Herbal blend of three fruits",
        usage: "Aids digestion, detoxification, and gut health"
      },
      {
        name: "Brahmi",
        description: "Traditional cognitive enhancer",
        usage: "Improves memory, focus, and mental clarity"
      },
      {
        name: "Shatavari",
        description: "Adaptogenic herb for vitality",
        usage: "Supports hormonal balance and immune system"
      }
    ]
  },
  {
    title: "Homeopathic",
    description: "Alternative medicine using highly diluted substances to stimulate the body's self-healing process. Based on the principle of 'like cures like'.",
    IconComponent: Droplets,
    medicines: [
      {
        name: "Arnica Montana",
        description: "Natural pain reliever derived from mountain daisy",
        usage: "Treats muscle soreness, bruising, and post-injury recovery"
      },
      {
        name: "Oscillococcinum",
        description: "Popular flu remedy",
        usage: "Reduces flu-like symptoms and fever"
      },
      {
        name: "Nux Vomica",
        description: "Digestive aid from strychnos nux-vomica seeds",
        usage: "Helps with digestive issues, nausea, and hangover symptoms"
      },
      {
        name: "Belladonna",
        description: "Remedy for sudden onset conditions",
        usage: "Treats fever, inflammation, and headaches"
      },
      {
        name: "Rhus Toxicodendron",
        description: "Remedy derived from poison ivy",
        usage: "Helps with joint stiffness and sprains"
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
          <p className="text-lg text-gray-500 mt-3">Usage: {medicine.usage}</p>
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

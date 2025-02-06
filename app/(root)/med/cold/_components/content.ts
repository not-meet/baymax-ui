import { Pill, Leaf, Droplets, LucideIcon } from 'lucide-react';

export interface Medicine {
  name: string;
  description: string;
}

export interface MedicalItem {
  title: string;
  description: string;
  IconComponent: LucideIcon;
  medicines: Medicine[];
}

export const allopathicMedicines: Medicine[] = [
  {
    name: "Azelastine",
    description: "Fast-acting antihistamine",
  },
  {
    name: "Diphenhydramine",
    description: "Sedating antihistamine",
  },
  {
    name: "Loratadine",
    description: "Non-drowsy allergy medication",
  },
  {
    name: "Ibuprofen",
    description: "Pain reliever and anti-inflammatory drug",
  }
];

export const ayurvedicMedicines: Medicine[] = [
  {
    name: "Ashwagandha",
    description: "Adaptogenic herb known as Indian Ginseng",
  },
  {
    name: "Guduchi Tablet",
    description: "Helps fight cold, infections, and boosts immunity.",
  },
  {
    name: "Jatiphaladi Churna",
    description: "Soothes respiratory discomfort and balances excess Kapha, relieving cold symptoms.",
  },
  {
    name: "Brahmi",
    description: "Traditional cognitive enhancer",
  },
  {
    name: "Shatavari",
    description: "Adaptogenic herb for vitality",
  }
];

export const homeopathicMedicines: Medicine[] = [
  {
    name: 'Aconitum Napellus',
    description: "Used for colds with sudden onset, fever, and dry cough.",
  },
  {
    name: 'Arsenicum Album',
    description: "Helps with frequent colds, sore throats, and burning nasal discharge",
  },
  {
    name: "Belladonna",
    description: "Effective for colds with fever, flushed face, and a throbbing headache.",
  },
  {
    name: "Euphrasia",
    description: "Best for colds with watery eyes, nasal discharge, and irritation.",
  },
  {
    name: "Pulsatilla",
    description: "Effective for colds with thick, yellow mucus, usually in children.",
  }
];


export const medicalCategories: MedicalItem[] = [
  {
    title: "Allopathic",
    description: "Modern medicine using scientifically developed drugs for quick symptom relief and targeted treatment. Based on extensive clinical research and standardized dosing.",
    IconComponent: Pill,
    medicines: allopathicMedicines
  },
  {
    title: "Ayurvedic",
    description: "Traditional Indian medicine focusing on natural remedies, herbs, and holistic healing. Emphasizes balance between body, mind, and spirit using natural substances.",
    IconComponent: Leaf,
    medicines: ayurvedicMedicines
  },
  {
    title: "Homeopathic",
    description: "Alternative medicine using highly diluted substances to stimulate the body's self-healing process. Based on the principle of 'like cures like'.",
    IconComponent: Droplets,
    medicines: homeopathicMedicines
  }
];

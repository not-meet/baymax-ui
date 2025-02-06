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
    name: "Propranolol",
    description: "Beta-blocker for heart-related conditions",
  },
  {
    name: "Sumatriptan",
    description: "Migraine and cluster headache reliever",
  },
  {
    name: "Zolmitriptan",
    description: "Fast-acting migraine medication",
  }
];

export const ayurvedicMedicines: Medicine[] = [
  {
    name: "Godanti Bhasma",
    description: " A mineral-based formulation used to relieve chronic migraines and severe headaches.",
  },
  {
    name: "Chandrakala Rasa",
    description: "Helps with headaches caused by excessive heat and acidity.",
  },
  {
    name: 'Kamadugha Rasa (Mouktika Yukta)',
    description: "Balances Pitta dosha and soothes headaches due to stress and inflammation.",
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
    name: 'Kali Phos',
    description: "Used for stress-induced headaches, mental fatigue, and nervous exhaustion.",
  },
  {
    name: 'Cimicifuga Racemosa',
    description: "Helps with tension headaches, especially in the neck and shoulders.",
  },
  {
    name: "Gelsemium Sempervirens",
    description: "Effective for dull headaches accompanied by dizziness and heaviness in the head."
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

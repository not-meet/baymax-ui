import { Pill, Leaf, Droplets, LucideIcon } from 'lucide-react';

export interface Medicine {
  name: string;
  description: string;
  usage: string;
}

export interface MedicalItem {
  title: string;
  description: string;
  IconComponent: LucideIcon;
  medicines: Medicine[];
}


export const allopathicMedicines: Medicine[] = [
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
  },
];

export const ayurvedicMedicines: Medicine[] = [
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
];

export const homeopathicMedicines: Medicine[] = [
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

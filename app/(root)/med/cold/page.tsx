"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { MedicalBoxCold } from "../_components/MedicalBoxcold";
import { MedicalCategoriesList } from '../_components/MedicalCategoriesList'
import { motion, AnimatePresence } from "framer-motion";

export default function Cold() {
  const router = useRouter();
  const [showCategories, setShowCategories] = useState(false);

  return (
    <main className="w-full min-h-screen relative z-10">
      <AnimatePresence mode="wait">
        {!showCategories ? (
          <motion.div
            key="cold-content"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <MedicalBoxCold />
            <div className="absolute top-8 right-8">
              <PulsatingButton
                onClick={() => setShowCategories(true)}
                className="bg-[#ffcccc] hover:bg-opacity-90 text-black px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-200"
                pulseColor="#ff9999"
              >
                See some more suggestions
              </PulsatingButton>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="categories"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <div className="absolute top-8 right-8 z-20">
              <PulsatingButton
                onClick={() => setShowCategories(false)}
                className="bg-[#ffcccc] hover:bg-opacity-90 text-black px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-200"
                pulseColor="#ff9999"
              >
                Back to Cold Remedies
              </PulsatingButton>
            </div>
            <MedicalCategoriesList />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

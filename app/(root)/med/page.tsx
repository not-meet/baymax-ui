"use client"
import MedicalCategoriesList from "./_components/MedicalCategoriesList";
import MedicineBoxReveal from "./_components/MedicineBoxReveal";
import { useState, useEffect } from 'react';
import { BoxReveal } from "@/components/ui/box-reveal";

export default function YourPage() {
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCategories(true);
    }, 2000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-start justify-between relative">
        <div className="w-3/5 flex justify-center">
          <MedicineBoxReveal />
        </div>

        <div className="w-2/5 mt-72 pr-8">
          <div className={`transition-opacity duration-1000 ${showCategories ? 'opacity-100' : 'opacity-0'}`}>
            {showCategories && (
              <>
                <BoxReveal boxColor={"#d19441"} duration={0.5}>
                  <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                    Other Options<span className="text-[#FF6B6B]">.</span>
                  </h2>
                </BoxReveal>
                <MedicalCategoriesList />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

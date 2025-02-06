import { BoxReveal } from "@/components/ui/box-reveal";

export function MedicineBoxHeadache() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <BoxReveal boxColor={"#e8caa0"} duration={0.5}>
          <p className="text-[8rem] font-semibold leading-tight">
            Ergotamine<span className="text-[#FF6B6B]">.</span>
          </p>
        </BoxReveal>
        <BoxReveal boxColor={"#edd4b3"} duration={0.5}>
          <h2 className="mt-[3rem] text-[4rem] font-medium">
            I'd recommend <span className="text-[#FF6B6B]">Ergotamine</span> based on your problem.
          </h2>
        </BoxReveal>
        <BoxReveal boxColor={"#FFFCF2"} duration={0.5}>
          <div className="mt-8 space-y-6">
            <p className="text-4xl leading-relaxed">
              Ergotamine - A vasoconstrictor used primarily for migraine relief.
              It helps narrow the blood vessels in the brain to reduce headache symptoms.
            </p>
            <p className="text-4xl leading-relaxed">
              Effective for acute migraine attacks and often combined with caffeine
              to enhance its effects.
            </p>
            <p className="text-4xl leading-relaxed">
              Should be taken at the first sign of a migraine for best results.
            </p>
          </div>
        </BoxReveal>
      </div>
    </div>
  );
}

export default MedicineBoxHeadache;

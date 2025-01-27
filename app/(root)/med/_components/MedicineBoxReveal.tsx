import { BoxReveal } from "@/components/ui/box-reveal";

export function MedicineBoxReveal() {
  return (
    <div className="size-full max-w-3lg items-center justify-center overflow-hidden pt-8 ml-7">
      <BoxReveal boxColor={"#e8caa0"} duration={0.5}>
        <p className="text-[5rem] font-semibold leading-tight">
          Medicines<span className="text-[#FF6B6B]">.</span>
        </p>
      </BoxReveal>
      <BoxReveal boxColor={"#edd4b3"} duration={0.5}>
        <h2 className="mt-[2.5rem] text-[2.5rem] font-medium">
          Healing through <span className="text-[#FF6B6B]">multiple approaches</span>
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={"#FFFCF2"} duration={0.5}>
        <div className="mt-6 space-y-4">
          <p className="text-2xl leading-relaxed">
            Paracetamol - Commonly used for fever and pain relief.
            Effective for mild to moderate symptoms.
          </p>
          <p className="text-2xl leading-relaxed">
            Ashwagandha - Ancient herb known for stress relief and
            improving overall vitality.
          </p>
          <p className="text-2xl leading-relaxed">
            Arnica Montana - Homeopathic remedy for bruising and
            muscle soreness.
          </p>
        </div>
      </BoxReveal>
    </div>
  );
}

export default MedicineBoxReveal;

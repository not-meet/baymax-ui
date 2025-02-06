import { BoxReveal } from "@/components/ui/box-reveal";

export function MedicalBoxFever() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <BoxReveal boxColor={"#e8caa0"} duration={0.5}>
          <p className="text-[8rem] font-semibold leading-tight">
            Medicines<span className="text-[#FF6B6B]">.</span>
          </p>
        </BoxReveal>
        <BoxReveal boxColor={"#edd4b3"} duration={0.5}>
          <h2 className="mt-[3rem] text-[4rem] font-medium">
            Healing through <span className="text-[#FF6B6B]">multiple approaches</span>
          </h2>
        </BoxReveal>
        <BoxReveal boxColor={"#FFFCF2"} duration={0.5}>
          <div className="mt-8 space-y-6">
            <p className="text-4xl leading-relaxed">
              Paracetamol - Commonly used for fever and pain relief.
              Effective for mild to moderate symptoms.
            </p>
            <p className="text-4xl leading-relaxed">
              Ashwagandha - Ancient herb known for stress relief and
              improving overall vitality.
            </p>
            <p className="text-4xl leading-relaxed">
              Arnica Montana - Homeopathic remedy for bruising and
              muscle soreness.
            </p>
          </div>
        </BoxReveal>
      </div>
    </div>
  );
}

export default MedicalBoxFever();

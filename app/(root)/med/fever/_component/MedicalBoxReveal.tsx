import { BoxReveal } from "@/components/ui/box-reveal";

export function MedicineBoxFever() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <BoxReveal boxColor={"#e8caa0"} duration={0.5}>
          <p className="text-[8rem] font-semibold leading-tight">
            For Fever<span className="text-[#FF6B6B]">.</span>
          </p>
        </BoxReveal>
        <BoxReveal boxColor={"#edd4b3"} duration={0.5}>
          <h2 className="mt-[3rem] text-[4rem] font-medium">
            I'd recommend <span className="text-[#FF6B6B]">Paracetamol</span>
          </h2>
        </BoxReveal>
        <BoxReveal boxColor={"#FFFCF2"} duration={0.5}>
          <div className="mt-8 space-y-6">
            <p className="text-4xl leading-relaxed">
              Paracetamol is widely used to reduce fever and relieve mild to moderate pain.
              It works by affecting the body's temperature regulation center in the brain and
              helps in relieving symptoms without causing stomach irritation.
            </p>
            <p className="text-4xl leading-relaxed">
              It is often recommended for flu, colds, headaches, and body aches.
              However, it's essential to follow dosage instructions to avoid any side effects.
            </p>
            <p className="text-4xl leading-relaxed">
              Always consult a healthcare professional if symptoms persist or worsen.
            </p>
          </div>
        </BoxReveal>
      </div>
    </div>
  );
}

export default MedicineBoxFever;

import { BoxReveal } from "@/components/ui/box-reveal";

export function MedicineBoxCold() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <BoxReveal boxColor={"#e8caa0"} duration={0.5}>
          <p className="text-[8rem] font-semibold leading-tight">
            For Cold<span className="text-[#FF6B6B]">.</span>
          </p>
        </BoxReveal>
        <BoxReveal boxColor={"#edd4b3"} duration={0.5}>
          <h2 className="mt-[3rem] text-[4rem] font-medium">
            I'd recommend <span className="text-[#FF6B6B]">Levocetirizine</span>
          </h2>
        </BoxReveal>
        <BoxReveal boxColor={"#FFFCF2"} duration={0.5}>
          <div className="mt-8 space-y-6">
            <p className="text-4xl leading-relaxed">
              Levocetirizine is an antihistamine used to relieve symptoms of allergic conditions such as runny nose, sneezing, watery eyes, and itching. It is commonly prescribed for seasonal allergies, hay fever, and chronic urticaria (hives).
            </p>
          </div>
        </BoxReveal>
      </div>
    </div>
  );
}

export default MedicineBoxCold();

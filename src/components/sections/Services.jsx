import { motion } from "framer-motion";
import { FiCpu, FiCode, FiTerminal } from "react-icons/fi";
import { SERVICES } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";
import TiltCard from "../ui/TiltCard";

const ICONS = { brain: FiCpu, code: FiCode, terminal: FiTerminal };

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          label="What I Bring"
          title="Where I can help."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <TiltCard className="glass h-full rounded-2xl p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric/30 to-purple/30 text-2xl text-cyan">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

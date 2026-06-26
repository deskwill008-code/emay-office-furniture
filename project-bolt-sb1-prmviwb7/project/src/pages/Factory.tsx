import { motion } from 'framer-motion';
import { CheckCircle2, Factory as FactoryIcon, Gauge, PackageCheck, Recycle, Ruler, ShieldCheck, Truck } from 'lucide-react';
import SEO from '../components/SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

const capabilities = [
  { icon: FactoryIcon, title: '50,000 m² Facility', desc: 'Integrated manufacturing campus with steel processing, woodworking, upholstery, and assembly under one roof.' },
  { icon: Gauge, title: 'Automated Production', desc: 'Robotic welding arms, CNC cutting machines, and automated powder coating lines with 0.1mm precision.' },
  { icon: PackageCheck, title: '200K+ Annual Output', desc: 'Production capacity of 200,000+ units annually with scalable surge capacity for large contracts.' },
  { icon: ShieldCheck, title: '12-Point QC', desc: 'Dimensional accuracy, surface finish, mechanism function, load testing, and packaging integrity checks.' },
  { icon: Ruler, title: 'Custom Engineering', desc: 'In-house R&D team with 3D modeling and rapid prototyping. Custom samples ready in 7-14 days.' },
  { icon: Truck, title: 'Global Logistics', desc: 'Experienced export team handling FOB, CIF, and DDP delivery with full customs documentation.' },
  { icon: Recycle, title: 'Sustainable Practices', desc: '95% steel scrap recycling, water-based adhesives, FSC-certified wood, 60% renewable energy.' },
];

const processSteps = [
  { step: '01', title: 'Raw Material Inspection', desc: 'Cold-rolled steel coils, E1-grade MFC panels, and high-density foam are inspected upon arrival for compliance with our specifications.' },
  { step: '02', title: 'Steel Processing', desc: 'Automated cutting, bending, and robotic welding create precision frames. Phosphate treatment ensures coating adhesion.' },
  { step: '03', title: 'Surface Treatment', desc: 'Electrostatic powder coating in controlled booths. Epoxy finishes are cured at high temperature for scratch and rust resistance.' },
  { step: '04', title: 'Woodworking', desc: 'CNC machines cut desktop panels to exact dimensions. Edge banding and drilling are fully automated for consistency.' },
  { step: '05', title: 'Upholstery & Assembly', desc: 'Fabric covers are sewn and fitted over foam molds. Mechanisms are installed and tested before final assembly.' },
  { step: '06', title: 'Quality Control', desc: 'Every unit undergoes 12-point inspection. Load tests, mechanism cycles, and surface checks ensure zero-defect shipping.' },
  { step: '07', title: 'Packaging & Shipping', desc: 'Knock-down packaging with reinforced corners and moisture barriers. Palletized for safe ocean freight transport.' },
];

export default function Factory() {
  return (
    <>
      <SEO
        title="Factory & Manufacturing"
        description="Tour our 50,000 m² manufacturing facility. See how precision engineering, automated production, and strict quality control produce world-class office furniture."
        keywords="office furniture factory, furniture manufacturing, Ningbo factory, B2B furniture production, ISO 9001 factory"
      />

      {/* Hero */}
      <section className="relative bg-brand-900 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 to-brand-900/70" />
        <div className="relative container-wide py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-gold-400 uppercase tracking-wider">Factory Tour</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Inside Our Manufacturing</h1>
            <p className="text-surface-200 max-w-2xl text-lg">
              A 50,000 m² integrated facility where precision engineering meets industrial-scale production. Every product is built to international standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Factory Gallery */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-[16/10] bg-surface-100 rounded-sm overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/1957474/pexels-photo-1957474.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern office furniture production line"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="aspect-[16/10] bg-surface-100 rounded-sm overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Ergonomic chair manufacturing"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-[16/10] bg-surface-100 rounded-sm overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Height adjustable desk assembly"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="aspect-[16/10] bg-surface-100 rounded-sm overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Conference table workshop"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-surface-50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-medium text-gold-600 uppercase tracking-wider">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-2">Factory Capabilities</h2>
            <p className="text-surface-600 mt-3">Integrated manufacturing from raw material to finished product.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white p-6 rounded-sm shadow-sm card-hover"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-sm flex items-center justify-center text-brand-700 mb-4">
                  <cap.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-brand-900 mb-2">{cap.title}</h3>
                <p className="text-sm text-surface-600 leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-medium text-gold-600 uppercase tracking-wider">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-2">Manufacturing Process</h2>
            <p className="text-surface-600 mt-3">From raw material to finished product, every step is controlled and documented.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex gap-6 items-start"
              >
                <div className="w-16 h-16 bg-brand-900 text-white rounded-sm flex items-center justify-center text-xl font-bold shrink-0">
                  {step.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-semibold text-brand-900">{step.title}</h3>
                  <p className="text-sm text-surface-600 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="bg-brand-900 py-12">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: CheckCircle2, label: 'ISO 9001 Certified' },
              { icon: ShieldCheck, label: 'BIFMA Compliant' },
              { icon: Recycle, label: 'FSC Certified Wood' },
              { icon: Gauge, label: '0.3% Defect Rate' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-gold-400">
                  <item.icon size={24} />
                </div>
                <span className="text-white font-medium text-sm">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

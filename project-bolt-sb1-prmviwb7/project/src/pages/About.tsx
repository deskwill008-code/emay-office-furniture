import { motion } from 'framer-motion';
import { Award, Clock, Globe2, ShieldCheck, Target, Users } from 'lucide-react';
import SEO from '../components/SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

const values = [
  {
    icon: Target,
    title: 'Precision Engineering',
    desc: 'Every product is designed with 0.1mm tolerances and tested to exceed international durability standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality First',
    desc: '12-point inspection process with a 0.3% defect rate. We do not ship products we would not use ourselves.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    desc: 'We view every client as a long-term partner. Dedicated account managers and transparent communication.',
  },
  {
    icon: Globe2,
    title: 'Global Standards',
    desc: 'Manufactured to BIFMA, CE, and ISO 9001 standards. Products trusted in 50+ countries.',
  },
];

const timeline = [
  { year: '2006', title: 'Founded', desc: 'Ningbo Emay Tech established as a small metal furniture workshop in Ningbo, China.' },
  { year: '2010', title: 'First Export', desc: 'Began exporting to European markets with CE-certified filing cabinets and office desks.' },
  { year: '2014', title: 'ISO 9001 Certified', desc: 'Achieved ISO 9001 quality management certification and expanded to 15,000 m² facility.' },
  { year: '2017', title: 'Ergonomic Line Launch', desc: 'Introduced height adjustable desks and ergonomic chairs with German motor systems.' },
  { year: '2020', title: 'Factory Expansion', desc: 'Opened second production facility. Total capacity reached 200,000 units annually.' },
  { year: '2024', title: 'Global Reach', desc: 'Serving clients in 50+ countries with a 50,000 m² integrated manufacturing campus.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Ningbo Emay Tech Co., Ltd - a professional furniture manufacturer with 15+ years of experience serving global B2B clients."
        keywords="about Ningbo Emay Tech, furniture manufacturer, company history, B2B furniture factory"
      />

      {/* Hero */}
      <section className="bg-brand-900 py-16 md:py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-gold-400 uppercase tracking-wider">About Us</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Engineering Better Workspaces</h1>
            <p className="text-surface-200 max-w-2xl text-lg">
              Since 2006, Ningbo Emay Tech has been designing and manufacturing premium office furniture for distributors, retailers, and corporate clients across 50+ countries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-[4/3] bg-surface-100 rounded-sm overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Modern office workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">Our Mission</h2>
              <p className="text-surface-600 leading-relaxed mb-4">
                We believe that great workspaces drive great work. Our mission is to manufacture office furniture that combines ergonomic science, industrial durability, and contemporary design at prices that make quality accessible to businesses of all sizes.
              </p>
              <p className="text-surface-600 leading-relaxed mb-6">
                From a small metal workshop in 2006 to a 50,000 m² integrated manufacturing facility today, our commitment to precision and partnership has never wavered. Every desk, chair, and cabinet that leaves our factory carries the expertise of 15+ years and the pride of 300+ skilled workers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-sm flex items-center justify-center text-brand-700">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-brand-900">15+</div>
                    <div className="text-xs text-surface-500">Years Experience</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-sm flex items-center justify-center text-brand-700">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-brand-900">300+</div>
                    <div className="text-xs text-surface-500">Team Members</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-sm flex items-center justify-center text-brand-700">
                    <Globe2 size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-brand-900">50+</div>
                    <div className="text-xs text-surface-500">Countries Served</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-sm flex items-center justify-center text-brand-700">
                    <Award size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-brand-900">6</div>
                    <div className="text-xs text-surface-500">Global Certifications</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface-50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-medium text-gold-600 uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-2">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white p-8 rounded-sm shadow-sm flex gap-5"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-sm flex items-center justify-center text-brand-700 shrink-0">
                  <val.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-900 mb-2">{val.title}</h3>
                  <p className="text-sm text-surface-600 leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-medium text-gold-600 uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-2">Company History</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-brand-700 rounded-full" />
                  <div className="w-px flex-1 bg-surface-200 mt-2" />
                </div>
                <div className="pb-8">
                  <span className="text-sm font-bold text-gold-600">{item.year}</span>
                  <h3 className="text-lg font-semibold text-brand-900 mt-1">{item.title}</h3>
                  <p className="text-sm text-surface-600 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

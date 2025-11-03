import { motion } from 'framer-motion';
import { Search, Package, Truck, Megaphone } from 'lucide-react';

const items = [
  {
    icon: Search,
    title: 'Pesquisa & Fit de Mercado',
    desc: 'Mergulhamos no seu público para encontrar oportunidades reais e posicionamento claro.',
  },
  {
    icon: Package,
    title: 'Produto Sob Medida',
    desc: 'Desenvolvimento, fornecedores e qualidade premium alinhados à sua marca.',
  },
  {
    icon: Truck,
    title: 'Operação & Logística',
    desc: 'Do estoque ao last mile: gestão completa para escala com eficiência.',
  },
  {
    icon: Megaphone,
    title: 'Marketing com UGC',
    desc: 'Estratégias criativas e co-criadas para converter comunidade em clientes.',
  },
];

export default function WhatWeDo() {
  return (
    <section id="o-que-fazemos" className="bg-white text-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight"
          style={{ fontFamily: 'Manrope, Inter, system-ui' }}
        >
          O que fazemos
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-[#1A1A1A]/10 bg-[#F8F8F8] p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white border border-[#1A1A1A]/10">
                  <item.icon className="h-6 w-6 text-[#1A1A1A]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-[#1A1A1A]/70">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

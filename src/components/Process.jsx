import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Entendimento & Estratégia',
    desc: 'Alinhamos visão, público e metas. Definimos posicionamento e proposta de valor.',
  },
  {
    title: 'Criação do Produto',
    desc: 'Desenvolvemos linhas exclusivas com fornecedores e qualidade premium.',
  },
  {
    title: 'Operação & Lançamento',
    desc: 'Cuidamos de estoque, logística e suporte. Você cria conteúdo e co-dirige o plano.',
  },
  {
    title: 'Escala & Iteração',
    desc: 'Acompanhamento contínuo com dados para otimizar oferta, CAC e margem.',
  },
];

export default function Process() {
  return (
    <section id="processo" className="bg-[#F8F8F8] text-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight"
          style={{ fontFamily: 'Manrope, Inter, system-ui' }}
        >
          Nosso processo
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl border border-[#1A1A1A]/10 bg-white p-6"
            >
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-[#1A1A1A] text-white flex items-center justify-center font-bold">
                {(i + 1).toString().padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-[#1A1A1A]/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

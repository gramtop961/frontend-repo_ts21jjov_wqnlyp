import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', handle: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return 'Informe seu nome';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'E-mail inválido';
    if (!form.handle.trim()) return 'Informe sua @ principal';
    if (!/^[0-9()+\-\s]{8,}$/.test(form.phone)) return 'Telefone inválido';
    return '';
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="contato" className="bg-white text-[#1A1A1A]">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-center"
          style={{ fontFamily: 'Manrope, Inter, system-ui' }}
        >
          Vamos construir sua marca
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-center text-[#1A1A1A]/70"
        >
          Preencha os dados e nosso time entrará em contato.
        </motion.p>

        <form onSubmit={onSubmit} className="mt-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Nome</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                className="mt-2 w-full rounded-lg border border-[#1A1A1A]/20 bg-[#F8F8F8] px-4 py-3 outline-none focus:border-[#1A1A1A]"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="text-sm font-medium">E-mail</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="mt-2 w-full rounded-lg border border-[#1A1A1A]/20 bg-[#F8F8F8] px-4 py-3 outline-none focus:border-[#1A1A1A]"
                placeholder="voce@exemplo.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">@ Rede Social Principal</label>
              <input
                type="text"
                name="handle"
                value={form.handle}
                onChange={onChange}
                className="mt-2 w-full rounded-lg border border-[#1A1A1A]/20 bg-[#F8F8F8] px-4 py-3 outline-none focus:border-[#1A1A1A]"
                placeholder="@seuusuario"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Telefone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                className="mt-2 w-full rounded-lg border border-[#1A1A1A]/20 bg-[#F8F8F8] px-4 py-3 outline-none focus:border-[#1A1A1A]"
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="pt-2 flex items-center gap-4">
            <button type="submit" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1A1A1A] text-white border border-[#1A1A1A]">
              Enviar
            </button>
            {submitted && (
              <span className="text-sm text-[#1A1A1A]/70">Obrigado! Recebemos seus dados e entraremos em contato.</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ShoppingBag, ChevronRight, Menu, X, ArrowRight, Instagram, Facebook, Star, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SHOPEE_URL ="https://www.nike.com.br/tenis-nike-revolution-8-masculino-058889.html?cor=IE&utm_source=google&utm_medium=cpc&utm_campaign=Google_PLA_Cal%C3%A7ados_Demais&gad_source=1&gad_campaignid=22909826568&gbraid=0AAAAADob9lNyVWLQvH6TYppgcTimuvqXR&gclid=Cj0KCQjw8PDPBhCeARIsAOJwmWUEvd98ZNIJ9UppObX9zIbPqI2IrsLebwygc5blRphCc0Tm4u2hY6caAvh5EALw_wcB&utm_referrer=https%3A%2F%2Fwww.google.com%2F"; // Placeholder for user's Shopee store

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const categories = [
    {
      title: "Iluminação",
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800",
      items: "24 items"
    },
    {
      title: "Têxteis",
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=800",
      items: "18 items"
    },
    {
      title: "Cerâmicas",
      image: "https://images.unsplash.com/photo-1590422443656-787be81f57d0?auto=format&fit=crop&q=80&w=800",
      items: "12 items"
    }
  ];

  const featured = [
    {
      name: "Vaso Minimalista Ocre",
      price: "R$ 89,90",
      image: "https://images.unsplash.com/photo-1612177302194-06d91cd10196?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Abajur Curve Black",
      price: "R$ 249,00",
      image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Manta Linen Soft",
      price: "R$ 159,00",
      image: "https://images.unsplash.com/photo-1554100654-f5899994c653?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav 
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4 ${
          isScrolled ? 'bg-brand-beige/80 backdrop-blur-md shadow-sm translate-y-0' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="font-serif text-2xl tracking-tighter font-medium text-brand-charcoal">
            CHARM<span className="italic font-light">DECOR</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 items-center">
            <a href="#colecoes" className="text-sm uppercase tracking-widest hover:text-brand-earth transition-colors">Coleções</a>
            <a href="#loja" className="text-sm uppercase tracking-widest hover:text-brand-earth transition-colors">Produtos</a>
            <a href="#sobre" className="text-sm uppercase tracking-widest hover:text-brand-earth transition-colors">Sobre</a>
            <a 
              href={SHOPEE_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-shopee text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest flex items-center gap-2 hover:brightness-110 transition-all shadow-md shadow-brand-shopee/20"
            >
              <ShoppingBag size={14} /> Shopee
            </a>
          </div>

          <button 
            className="md:hidden text-brand-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-beige pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 items-center text-center">
              <a href="#colecoes" className="font-serif text-3xl" onClick={() => setMobileMenuOpen(false)}>Coleções</a>
              <a href="#loja" className="font-serif text-3xl" onClick={() => setMobileMenuOpen(false)}>Produtos</a>
              <a href="#sobre" className="font-serif text-3xl" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
              <a 
                href={SHOPEE_URL} 
                className="w-full bg-brand-shopee text-white py-4 rounded-xl font-serif text-xl flex justify-center items-center gap-3"
              >
                Comprar na Shopee <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2117" 
            alt="Interior decor"
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-brand-beige uppercase tracking-[0.3em] text-xs mb-6 font-bold"
          >
            Curadoria Exclusiva
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-serif text-5xl md:text-8xl text-brand-beige leading-tight mb-10"
          >
            Transforme seu <br /> 
            <span className="italic text-brand-earth">refúgio</span> particular
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a 
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-brand-shopee text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:brightness-110 transition-all hover:scale-105 active:scale-95 group shadow-2xl shadow-brand-shopee/30"
            >
              Comprar na Shopee
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-1 h-12 rounded-full border border-brand-beige flex justify-center pt-2">
            <div className="w-0.5 h-2 bg-brand-beige rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Brief Intro */}
      <section id="sobre" className="py-24 md:py-36 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div {...fadeIn} className="flex-1">
            <h2 className="font-serif text-4xl md:text-5xl leading-snug mb-8">
              Acreditamos que a decoração é o espelho da sua <span className="italic">alma</span>.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              Nossa curadoria busca harmonizar o moderno com o artesanal, trazendo peças únicas que transformam espaços comuns em santuários de tranquilidade e estilo.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="font-serif text-3xl text-brand-earth">+500</p>
                <p className="text-[10px] uppercase tracking-widest opacity-60">Produtos Únicos</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-brand-earth">100%</p>
                <p className="text-[10px] uppercase tracking-widest opacity-60">Curadoria Própria</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 w-full"
          >
            <img 
              id="intro-image"
              src="https://images.unsplash.com/photo-1513694203232-719a285e022f?auto=format&fit=crop&q=80&w=2069" 
              alt="Cozy interior"
              className="rounded-[40px] shadow-2xl w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="colecoes" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-brand-earth uppercase tracking-[0.3em] text-xs font-bold">Explorar</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">Nossas Coleções</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative cursor-pointer overflow-hidden rounded-3xl aspect-[3/4]"
              >
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8">
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-2 font-medium">{cat.items}</p>
                  <h3 className="text-white font-serif text-3xl">{cat.title}</h3>
                  <div className="mt-4 flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-xs uppercase tracking-widest">Ver Coleção</span>
                    <ChevronRight size={14} className="ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="loja" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <motion.div {...fadeIn}>
              <span className="text-brand-earth uppercase tracking-[0.3em] text-xs font-bold">Seleção da Semana</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4">Mais Desejados</h2>
            </motion.div>
            <motion.a 
              href={SHOPEE_URL}
              className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest border-b border-brand-charcoal pb-1 hover:text-brand-earth hover:border-brand-earth transition-all"
            >
              Ver Tudo na Shopee <ArrowUpRight size={16} />
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featured.map((prod, i) => (
              <motion.div
                key={prod.name}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[32px] mb-6 bg-brand-beige aspect-square">
                  <img 
                    src={prod.image} 
                    alt={prod.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ShoppingBag size={18} className="text-brand-shopee" />
                  </div>
                </div>
                <h4 className="font-serif text-xl mb-1">{prod.name}</h4>
                <p className="text-brand-earth font-medium">{prod.price}</p>
                <a 
                  href={SHOPEE_URL} 
                  className="mt-4 inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 group-hover:text-brand-shopee transition-colors underline underline-offset-4"
                >
                  COMPRAR NA SHOPEE
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-brand-earth text-brand-earth" />)}
            </div>
            <p className="font-serif text-2xl md:text-3xl italic leading-snug mb-8">
              "A entrega foi super rápida pela Shopee e as peças são ainda mais bonitas pessoalmente. Transformou completamente a vibe do meu escritório."
            </p>
            <p className="text-xs uppercase tracking-widest font-semibold">— Fernanda Rodrigues, Cliente Satisfeita</p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-brand-charcoal rounded-[48px] py-24 px-6 md:px-24 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
             <img src="https://images.unsplash.com/photo-1544450173-8c8d234f244a?auto=format&fit=crop&q=80&w=1500" alt="pattern" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10">
            <h2 className="font-serif text-brand-beige text-4xl md:text-7xl mb-12 leading-tight">
              Pronto para reinventar <br /> seu <span className="italic font-light">ambiente</span>?
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                id="cta-button-final"
                href={SHOPEE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-shopee text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all w-full md:w-auto text-center shadow-xl shadow-brand-shopee/20"
              >
                Ir para Loja Shopee
              </a>
              <p className="text-brand-beige/60 text-xs uppercase tracking-widest max-w-[200px] text-center md:text-left font-medium">
                📦 Entrega garantida para todo o Brasil
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-brand-charcoal/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <a href="#" className="font-serif text-3xl tracking-tighter font-medium text-brand-charcoal block mb-6">
              CHARM<span className="italic font-light">DECOR</span>
            </a>
            <p className="text-gray-500 text-sm max-w-xs">Oferecendo peças de design que contam histórias e trazem vida para sua casa.</p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Links</p>
              <a href="#colecoes" className="text-sm hover:text-brand-earth transition-colors">Coleções</a>
              <a href="#loja" className="text-sm hover:text-brand-earth transition-colors">Produtos</a>
              <a href="#sobre" className="text-sm hover:text-brand-earth transition-colors">Sobre Nós</a>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Social</p>
              <a href="#" className="flex items-center gap-2 text-sm hover:text-brand-earth transition-colors"><Instagram size={14}/> Instagram</a>
              <a href="#" className="flex items-center gap-2 text-sm hover:text-brand-earth transition-colors"><Facebook size={14}/> Facebook</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-400 font-medium text-center md:text-left">
          <p>© 2024 CHARM DECOR. TODOS OS DIREITOS RESERVADOS.</p>
          <p>FEITO COM AMOR POR <span className="text-brand-charcoal">CHARM DECOR</span></p>
        </div>
      </footer>
    </div>
  );
}

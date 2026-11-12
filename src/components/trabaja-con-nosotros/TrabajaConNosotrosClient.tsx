'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ExternalLink,
  Briefcase,
  Users,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  FileCheck2,
  Sparkles,
  ArrowRight,
  Send,
  Building
} from 'lucide-react';

export default function TrabajaConNosotrosClient() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileParallaxStyle = {
    transform: `translateY(${scrollY * 0.3}px)`,
    transition: 'transform 0.5s ease-out',
  };

  const steps = [
    {
      number: '01',
      title: 'Ingresa a la plataforma',
      description: 'Accede a nuestro portal seguro de recepción de hojas de vida mediante el botón principal.',
      icon: ExternalLink,
    },
    {
      number: '02',
      title: 'Diligencia tus datos',
      description: 'Completa tu información personal, académica y experiencia laboral en el formulario.',
      icon: FileCheck2,
    },
    {
      number: '03',
      title: 'Adjunta tu CV',
      description: 'Carga tu hoja de vida actualizada en formato PDF con todos tus soportes.',
      icon: Send,
    },
    {
      number: '04',
      title: 'Evaluación y selección',
      description: 'Nuestro equipo de Talento Humano revisará tu perfil conforme a las vacantes vigentes.',
      icon: CheckCircle2,
    },
  ];

  const benefits = [
    {
      title: 'Crecimiento y Aprendizaje',
      description: 'Oportunidades de capacitación constante y desarrollo en el dinámico sector de la salud y distribución farmacéutica.',
      icon: Briefcase,
    },
    {
      title: 'Cultura de Respeto y Equipo',
      description: 'Un entorno laboral cálido, solidario y basado en la comunicación abierta y el trabajo colaborativo.',
      icon: Users,
    },
    {
      title: 'Compromiso y Transparencia',
      description: 'Empresa respaldada por los más altos estándares éticos, de calidad y cumplimiento normativo en Colombia.',
      icon: ShieldCheck,
    },
    {
      title: 'Bienestar y Estabilidad',
      description: 'Condiciones de trabajo dignas, ambiente seguro y programas orientados a la calidad de vida de nuestros colaboradores.',
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="w-full pt-16 relative">
      {/* Header con efecto parallax (consistente con el branding del sitio) */}
      <div className="relative py-16 min-h-[60vh] mb-0 overflow-hidden">
        {/* Fondo con efecto parallax - Mobile */}
        <div className="block md:hidden w-full h-full absolute inset-0">
          <img
            src="/assets/trama1.png"
            alt="Background pattern"
            className="w-full h-full object-cover"
            style={{ ...mobileParallaxStyle, opacity: 0.6 }}
          />
        </div>

        {/* Fondo con efecto parallax - Desktop */}
        <div
          className="hidden md:block absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/trama1.png')",
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 0.5,
          }}
        ></div>

        {/* Overlay con degradado institucional */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-[#D4741C]/50 z-10"></div>

        {/* Contenido del título */}
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">
          <div className="w-20 h-1 bg-[#561A16] mb-6"></div>
          <h1 className="text-4xl md:text-5xl text-center text-[#561A16] font-bold mb-6 font-poppins">
            Trabaja con Nosotros
          </h1>
          <p className="text-base md:text-lg text-center text-[#561A16] font-open max-w-3xl leading-relaxed">
            En Colombo Farmacéutica SAS creemos que nuestro mayor activo es el talento humano. Si eres una persona apasionada, con vocación de servicio y comprometida con el bienestar y la salud, te invitamos a ser parte de nuestra familia.
          </p>
          <div className="w-20 h-1 bg-[#561A16] mt-6"></div>
        </div>
      </div>

      {/* Sección Principal de Contenido */}
      <div className="bg-gradient-to-br from-white via-white to-orange-600 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-16">

          {/* Tarjeta Principal de Llamado a la Acción (CTA Portal) */}
          <div className="relative bg-white rounded-3xl shadow-xl border border-orange-200/80 overflow-hidden">
            {/* Barra superior con gradiente de marca */}
            <div className="h-3 w-full bg-gradient-to-r from-[#561A16] via-[#C6441C] to-[#D4741C]"></div>

            <div className="p-8 md:p-12 flex flex-col items-center text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#561A16] font-poppins mb-4 max-w-3xl">
                Postula tu Perfil y Únete a Nuestro Equipo
              </h2>

              <p className="text-gray-700 font-open text-base md:text-lg max-w-2xl leading-relaxed mb-8">
                Hemos dispuesto una plataforma centralizada para que registres tu información profesional de manera rápida, confiable y segura. Tu postulación ingresará directamente a la base de datos de nuestro departamento de Talento Humano.
              </p>

              {/* Botón Principal con enlace a app.colombofarmaceutica.com */}
              <a
                href="https://app.colombofarmaceutica.com/hojas-de-vida"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#C6441C] to-[#561A16] hover:from-[#561A16] hover:to-[#C6441C] text-white text-lg font-semibold shadow-lg hover:shadow-2xl hover:shadow-orange-600/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                <span>Registrar mi Hoja de Vida</span>
                <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <p className="text-xs sm:text-sm text-gray-500 font-open mt-4 flex items-center justify-center gap-1.5">
                <span>Accederás al sistema oficial en:</span>
                <span className="font-mono text-[#C6441C] font-semibold">app.colombofarmaceutica.com/hojas-de-vida</span>
              </p>
            </div>
          </div>

          {/* Proceso de Postulación en 4 pasos */}
          <div>
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#561A16] font-poppins mb-3">
                ¿Cómo es el proceso de postulación?
              </h3>
              <p className="text-gray-600 font-open max-w-xl mx-auto">
                Sigue estos sencillos pasos para que tu hoja de vida sea tenida en cuenta en nuestros procesos de selección.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.number}
                    className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-black text-[#D4741C]/40 font-poppins">
                          {step.number}
                        </span>
                        <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#C6441C]">
                          <IconComponent className="w-6 h-6" />
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-[#561A16] font-poppins mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600 font-open leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Por qué trabajar con nosotros (Beneficios y Valores) */}
          <div className="pt-4">
            <div className="text-center mb-12">
              <div className="w-16 h-1 bg-[#561A16] mx-auto mb-4"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#561A16] font-poppins mb-3">
                ¿Por qué formar parte de Colombo Farmacéutica?
              </h3>
              <p className="text-gray-600 font-open max-w-2xl mx-auto">
                Promovemos un ambiente humano, inclusivo y profesional donde cada persona tiene la oportunidad de aportar y crecer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#C6441C] to-[#561A16] text-white flex items-center justify-center shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#561A16] font-poppins mb-1.5">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-600 font-open leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tarjeta de imagen institucional / confianza */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-orange-200/60 bg-gradient-to-r from-[#561A16] via-[#C6441C] to-[#D4741C] text-white p-8 md:p-12">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <span className="inline-block text-xs uppercase tracking-widest text-orange-200 font-semibold">
                  Talento con Propósito
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-poppins">
                  Tu vocación hace la diferencia en la salud de nuestra gente
                </h3>
                <p className="text-white/90 font-open text-sm md:text-base leading-relaxed max-w-xl">
                  Estamos constantemente en búsqueda de personal calificado en áreas administrativas, logísticas, comerciales y de regencia farmacéutica para nuestras diferentes operaciones.
                </p>
                <div className="pt-2">
                  <a
                    href="https://app.colombofarmaceutica.com/hojas-de-vida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#C6441C] hover:bg-orange-50 font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                  >
                    <span>Enviar postulación ahora</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="md:col-span-4 relative h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg border-2 border-white/20">
                <Image
                  src="/assets/img-oficinas.jpg"
                  alt="Instalaciones Colombo Farmacéutica"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import profileImage from "./assets/pic3.png";

function Icon({ name, className = "h-6 w-6" }) {
  const icons = {
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    chart: <path d="M4 19V5M9 19v-8M14 19V8M19 19v-5" />,
    camera: <><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3" /></>,
    check: <path d="M20 6 9 17l-5-5" />,
    instagram: <><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.5" /><path d="M17.5 6.5h.01" /></>,
    megaphone: <><path d="M4 13V9h4l10-4v12L8 13H4z" /><path d="M8 13l2 6" /></>,
    message: <path d="M21 12a8 8 0 0 1-8 8H7l-4 3 1.4-5A8 8 0 1 1 21 12z" />,
    pen: <><path d="M4 20l4-1 10.5-10.5a2.1 2.1 0 0 0-3-3L5 16z" /><path d="M13.5 6.5l4 4" /></>,
    sparkles: <><path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z" /><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" /></>,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></>,
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

export const portfolioSmokeTests = [
  { name: "renders four service cards", expected: 4 },
  { name: "renders four project highlights", expected: 4 },
  { name: "contains primary CTA buttons", expected: ["Ver trabalhos", "Falar comigo", "WhatsApp"] },
  { name: "uses local profile image instead of remote url", expected: "pic3.png" },
  { name: "contains Photoshop and Meta Ads experience", expected: ["Photoshop", "Meta Ads"] },
  { name: "does not show removed CTA buttons", expectedNotToContain: ["Baixar CV", "Enviar Email"] },
];

export default function PortfolioSocialMediaLandingPage() {
  const services = [
    { icon: <Icon name="instagram" />, title: "Gestão de Redes Sociais", text: "Planeamento, publicação, organização do feed e comunicação diária com a audiência." },
    { icon: <Icon name="pen" />, title: "Criação de Conteúdo", text: "Ideias criativas para posts, reels, stories, copywriting e campanhas digitais." },
    { icon: <Icon name="target" />, title: "Publicidade Digital", text: "Estratégias para aumentar alcance, atrair clientes e fortalecer marcas online." },
    { icon: <Icon name="chart" />, title: "Análise de Resultados", text: "Leitura de métricas, relatórios simples e melhorias baseadas no desempenho." },
  ];

  const projects = ["Campanhas para pequenos negócios", "Calendários editoriais mensais", "Design de posts para Instagram", "Estratégias de crescimento orgânico"];

  return (
    <main className="min-h-screen overflow-hidden bg-neutral-950 text-white">
      <section className="relative px-6 py-8 md:px-12 lg:px-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.25),transparent_35%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_32%)]" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-neutral-950"><Icon name="sparkles" className="h-5 w-5" /></div>
            <span>Meu Portfólio</span>
          </div>
          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#projetos" className="hover:text-white">Projetos</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </div>
          <a href="https://wa.me/918089731695" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full bg-white text-neutral-950 hover:bg-white/90">Falar comigo</Button>
          </a>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
              <Icon name="megaphone" className="h-4 w-4" /> Social Media • Publicidade • Conteúdo Digital
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">Transformo ideias em marcas com presença digital.</h1>
              <p className="max-w-xl text-lg leading-8 text-white/70">Sou Gerente de Social Media, com experiência em Photoshop, Meta Ads, criação de conteúdo estratégico e campanhas digitais focadas em crescimento, engajamento e posicionamento de marca.</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-full bg-pink-500 px-7 py-6 text-base hover:bg-pink-600">Ver trabalhos <Icon name="arrow" className="ml-2 h-5 w-5" /></Button>
            </div>

            <div className="grid max-w-2xl grid-cols-2 gap-4 pt-4 md:grid-cols-5">
              <div><p className="text-3xl font-bold">20+</p><p className="text-sm text-white/60">Posts criados</p></div>
              <div><p className="text-3xl font-bold">8+</p><p className="text-sm text-white/60">Campanhas</p></div>
              <div><p className="text-3xl font-bold">100%</p><p className="text-sm text-white/60">Foco criativo</p></div>
              <div><p className="text-3xl font-bold">Meta</p><p className="text-sm text-white/60">Ads</p></div>
              <div><p className="text-3xl font-bold">PS</p><p className="text-sm text-white/60">Photoshop</p></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-pink-500/30 via-blue-500/20 to-purple-500/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-transparent shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-neutral-900">
                <img src={profileImage} alt="Foto de perfil" className="h-full w-full object-cover" data-testid="profile-image" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(10,10,10,0.5)_78%,rgba(10,10,10,0.95)_100%)]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-950/90 via-neutral-950/25 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-md">
                  <p className="text-sm uppercase tracking-[0.25em] text-pink-300">Gerente de</p>
                  <h3 className="mt-2 text-3xl font-bold text-white">Social Media</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">Photoshop • Meta Ads • Estratégia Digital</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="servicos" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">Serviços</p>
            <h2 className="text-4xl font-bold md:text-5xl">Como posso ajudar a tua marca</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} data-testid="service-card">
                <Card className="h-full rounded-3xl border-white/10 bg-white/[0.06] transition hover:-translate-y-1 hover:bg-white/[0.09]">
                  <CardContent className="space-y-5 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/15 text-pink-300">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="leading-7 text-white/60">{service.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">Portfólio</p>
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">Projetos que mostram estratégia e criatividade.</h2>
            <p className="text-lg leading-8 text-white/65">Cada projeto é pensado para melhorar a comunicação visual, atrair atenção e aproximar a marca do seu público.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <div key={project} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6" data-testid="project-card">
                <Icon name="check" className="mb-5 h-7 w-7 text-pink-400" />
                <h3 className="text-xl font-semibold">{project}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-3">
            <div><Icon name="camera" className="mb-5 h-9 w-9 text-pink-400" /><h2 className="text-3xl font-bold">Meu processo</h2></div>
            <div className="grid gap-5 md:grid-cols-3 lg:col-span-2">
              {["Pesquisa", "Criação", "Publicação"].map((step, index) => (
                <div key={step} className="rounded-3xl bg-neutral-950/50 p-6">
                  <p className="mb-4 text-sm text-white/40">0{index + 1}</p>
                  <h3 className="mb-3 text-xl font-semibold">{step}</h3>
                  <p className="text-sm leading-6 text-white/60">{index === 0 && "Entendo a marca, o público e os objetivos da comunicação."}{index === 1 && "Crio ideias, legendas, visuais e formatos adequados para cada canal."}{index === 2 && "Organizo o calendário, publico conteúdos e acompanho os resultados."}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">Contacto</p>
          <h2 className="mb-6 text-4xl font-bold md:text-6xl">Vamos criar uma presença digital mais forte?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/65">Estou disponível para colaborar com marcas, pequenos negócios, criadores e projetos que precisam de comunicação digital mais profissional.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://wa.me/918089731695" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button className="rounded-full bg-pink-500 px-8 py-6 text-base hover:bg-pink-600"><Icon name="message" className="mr-2 h-5 w-5" /> WhatsApp</Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

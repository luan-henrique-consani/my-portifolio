import { Button } from "@/components/ui/button";
import { TechIcon } from "./TechIcon";

export const PortfolioHero = () => {
  return (
    <div className="relative min-h-screen bg-portfolio-gradient text-text-primary overflow-hidden">
      {/* Background decorative elements - removed red shadows */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Keeping minimal background effects */}
      </div>

      <div className="relative container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div>
              <p className="text-text-secondary text-base md:text-lg mb-2">Olá, me chamo Luan Consani</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Desenvolvedor
                  

                <span className="text-red-primary">FULLSTACK</span>
              </h1>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                com experiência em landing pages, criação de e-commerce, sites corporativos.
                  

                E sou um entusiasta de novas tecnologias.
              </p>
            </div>
            <a href="#my-work" className="scroll-smooth">
              <Button
                className="bg-red-primary hover:bg-red-secondary text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                Mas, como eu trabalho?
              </Button>
            </a>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-red-gradient rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/2248c355-e931-4868-ac6f-87c3754c515d.png"
                  alt="Luan Consani"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements around the image */}
              <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 bg-red-primary rounded-full"></div>
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-4 h-4 md:w-6 md:h-6 bg-red-secondary rounded-full"></div>
              <div className="absolute top-1/2 -right-3 md:-right-6 w-3 h-3 md:w-4 md:h-4 bg-red-primary/70 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-12 md:mt-20 space-y-8 md:space-y-12">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Illustration - increased size */}
            <div className="flex justify-center order-last lg:order-first">
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                <img
                  src="/lovable-uploads/d34ed906-e609-437d-9870-b09414297955.png"
                  alt="Developer illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* About Text */}
            <section id="my-work" className="scroll-mt-24">
            <div className="space-y-4 md:space-y-6 text-center lg:text-left px-4 md:px-0">
              <p className="text-text-secondary text-sm md:text-lg leading-relaxed">
                Sou Luan Henrique Consani, tenho 18 anos e trabalho com automações
                inteligentes usando o n8n como base e a Inteligência Artificial como aliada. Crio
                fluxos personalizados que <span className="text-red-primary font-semibold">automatizam atendimentos, agendamentos, vendas
                  e outros processos, sempre com foco em eficiência, escala e resultado</span>.
              </p>

              <p className="text-text-secondary text-sm md:text-lg leading-relaxed">
                Também desenvolvo páginas otimizadas para performance e conversão,
                <span className="text-red-primary font-semibold"> aplicando técnicas modernas de front-end, SEO e responsividade</span>. Tudo que
                construo é pensado para funcionar rápido, integrar com sistemas e facilitar a
                vida do usuário.
              </p>

              <p className="text-text-secondary text-sm md:text-lg leading-relaxed">
                Meu objetivo é ajudar empresas a <span className="text-red-primary font-semibold">economizar tempo</span>, vender mais e escalar
                com tecnologia.
              </p>


              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mt-6 md:mt-8">
                <TechIcon name="javascript" className="w-8 h-8 md:w-12 md:h-12" />
                <TechIcon name="typescript" className="w-8 h-8 md:w-12 md:h-12" />
                <TechIcon name="react" className="w-8 h-8 md:w-12 md:h-12" />
                <TechIcon name="tailwind" className="w-8 h-8 md:w-12 md:h-12" />
                <TechIcon name="n8n" className="w-8 h-8 md:w-12 md:h-12" />
              </div>
            </div>
            </section>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-12 md:mt-20 px-4 md:px-0">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 leading-tight">
            Meus Projetos
          </h2>
          <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
            {/* Project 1 */}
            <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-red-primary/20 transition-all duration-300">
              <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/project1.png"
                  alt="TS Merchandising - Projeto de E-commerce"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <a
                href="https://tsmerchandising.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-primary hover:text-red-secondary text-lg md:text-xl font-semibold hover:underline transition-colors duration-300"
              >
                TS Merchandising
              </a>
              <p className="text-text-secondary text-sm md:text-base text-center">
                E-commerce completo com estratégias de merchandising
              </p>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-red-primary/20 transition-all duration-300">
              <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/project2.png"
                  alt="Academia do Dinheiro - Plataforma Educacional"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <a
                href="https://academiadodinheiro.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-primary hover:text-red-secondary text-lg md:text-xl font-semibold hover:underline transition-colors duration-300"
              >
                Academia do Dinheiro
              </a>
              <p className="text-text-secondary text-sm md:text-base text-center">
                Plataforma educacional para renda passiva e aposentadoria
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}        <div className="mt-12 md:mt-20 px-4 md:px-0">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 leading-tight">
            Quais são as vantagens de trabalhar comigo?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-card-bg p-4 md:p-8 rounded-2xl text-center space-y-3 md:space-y-4 hover:bg-red-primary/10 transition-all duration-300">
              <div className="flex justify-center">
                <TechIcon name="brain" className="w-12 h-12 md:w-16 md:h-16 text-red-primary" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-red-primary leading-tight">Visão Estratégica desde o Início!</h3>
              <p className="text-text-secondary text-xs md:text-sm">
                Não entrego apenas a parte técnica — penso como empreendedor.
              </p>
            </div>

            <div className="bg-card-bg p-4 md:p-8 rounded-2xl text-center space-y-3 md:space-y-4 hover:bg-red-primary/10 transition-all duration-300">
              <div className="flex justify-center">
                <TechIcon name="bolt" className="w-12 h-12 md:w-16 md:h-16 text-red-primary" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-red-primary leading-tight">Entregas Ágeis com Alta Qualidade</h3>
              <p className="text-text-secondary text-xs md:text-sm">
                Sou rápido, mas sem perder qualidade.
              </p>
            </div>

            <div className="bg-card-bg p-4 md:p-8 rounded-2xl text-center space-y-3 md:space-y-4 hover:bg-red-primary/10 transition-all duration-300">
              <div className="flex justify-center">
                <TechIcon name="puzzle" className="w-12 h-12 md:w-16 md:h-16 text-red-primary" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-red-primary leading-tight">Soluções Personalizadas</h3>
              <p className="text-text-secondary text-xs md:text-sm">
                Cada fluxo, cada site, cada automação é feita sob medida.
              </p>
            </div>

            <div className="bg-card-bg p-4 md:p-8 rounded-2xl text-center space-y-3 md:space-y-4 hover:bg-red-primary/10 transition-all duration-300">
              <div className="flex justify-center">
                <TechIcon name="analytics" className="w-12 h-12 md:w-16 md:h-16 text-red-primary" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-red-primary leading-tight">Suporte e Evolução Contínua</h3>
              <p className="text-text-secondary text-xs md:text-sm">
                Meu trabalho não para na entrega.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-12 md:mt-20 text-center px-4 md:px-0">
          <blockquote className="text-lg md:text-2xl lg:text-3xl font-semibold text-text-primary italic leading-relaxed">
            "Enquanto muitos ainda fazem manualmente, você pode automatizar com inteligência."
          </blockquote>

          <Button
            className="mt-6 md:mt-8 bg-red-primary hover:bg-red-secondary text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Me chame já!
          </Button>
        </div>

        {/* Footer Social Links */}
        <div className="mt-12 md:mt-20 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 px-4 md:px-0">
          <a href="#" className="flex items-center space-x-2 text-text-secondary hover:text-red-primary transition-colors">
            <TechIcon name="instagram" className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-base">@luanconsani28</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-text-secondary hover:text-red-primary transition-colors">
            <TechIcon name="linkedin" className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-base">Luan Henrique Consani</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-text-secondary hover:text-red-primary transition-colors">
            <TechIcon name="github" className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-base">luan-henrique-consani</span>
          </a>
        </div>
      </div>
    </div>
   );
};

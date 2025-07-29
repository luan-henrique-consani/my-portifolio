import { Button } from "@/components/ui/button";
import { TechIcon } from "./TechIcon";

export const PortfolioHero = () => {
  return (
    <div className="relative min-h-screen bg-dark-bg text-text-primary overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-red-secondary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-primary/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-text-secondary text-lg mb-2">Olá, me chamo Luan Consani</p>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Desenvolvedor
                <br />
                <span className="text-red-primary">FULLSTACK</span>
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed">
                com experiência em landing pages, criação de e-commerce, sites corporativos.
                <br />
                E sou um entusiasta de novas tecnologias.
              </p>
            </div>

            <Button 
              className="bg-red-primary hover:bg-red-secondary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Mas, como eu trabalho?
            </Button>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-red-gradient rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/2248c355-e931-4868-ac6f-87c3754c515d.png"
                  alt="Luan Consani"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-primary rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-red-secondary rounded-full"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-red-primary/70 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-20 space-y-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <img 
                  src="/lovable-uploads/d34ed906-e609-437d-9870-b09414297955.png"
                  alt="Developer illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              <p className="text-text-secondary text-lg leading-relaxed">
                Sou Luan Henrique Consani, tenho 18 anos e trabalho com automações
                inteligentes usando o n8n como base e a Inteligência Artificial como aliada. Crio
                fluxos personalizados que <span className="text-red-primary font-semibold">automatizam atendimentos, agendamentos, vendas
                e outros processos, sempre com foco em eficiência, escala e resultado</span>.
              </p>
              
              <p className="text-text-secondary text-lg leading-relaxed">
                Também desenvolvo páginas otimizadas para performance e conversão,
                <span className="text-red-primary font-semibold"> aplicando técnicas modernas de front-end, SEO e responsividade</span>. Tudo que
                construo é pensado para funcionar rápido, integrar com sistemas e facilitar a
                vida do usuário.
              </p>
              
              <p className="text-text-secondary text-lg leading-relaxed">
                Meu objetivo é ajudar empresas a <span className="text-red-primary font-semibold">economizar tempo</span>, vender mais e escalar
                com tecnologia.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-4 mt-8">
                <TechIcon name="javascript" className="w-12 h-12" />
                <TechIcon name="typescript" className="w-12 h-12" />
                <TechIcon name="react" className="w-12 h-12" />
                <TechIcon name="tailwind" className="w-12 h-12" />
                <TechIcon name="n8n" className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Quais são as vantagens de trabalhar comigo?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card-bg p-8 rounded-2xl text-center space-y-4 hover:bg-red-primary/10 transition-all duration-300">
              <div className="flex justify-center">
                <TechIcon name="brain" className="w-16 h-16 text-red-primary" />
              </div>
              <h3 className="text-xl font-bold text-red-primary">Visão Estratégica desde o Início!</h3>
              <p className="text-text-secondary text-sm">
                Não entrego apenas a parte técnica — penso como empreendedor.
              </p>
            </div>

            <div className="bg-card-bg p-8 rounded-2xl text-center space-y-4 hover:bg-red-primary/10 transition-all duration-300">
              <div className="flex justify-center">
                <TechIcon name="bolt" className="w-16 h-16 text-red-primary" />
              </div>
              <h3 className="text-xl font-bold text-red-primary">Entregas Ágeis com Alta Qualidade</h3>
              <p className="text-text-secondary text-sm">
                Sou rápido, mas sem perder qualidade.
              </p>
            </div>

            <div className="bg-card-bg p-8 rounded-2xl text-center space-y-4 hover:bg-red-primary/10 transition-all duration-300">
              <div className="flex justify-center">
                <TechIcon name="puzzle" className="w-16 h-16 text-red-primary" />
              </div>
              <h3 className="text-xl font-bold text-red-primary">Soluções Personalizadas</h3>
              <p className="text-text-secondary text-sm">
                Cada fluxo, cada site, cada automação é feita sob medida.
              </p>
            </div>

            <div className="bg-card-bg p-8 rounded-2xl text-center space-y-4 hover:bg-red-primary/10 transition-all duration-300">
              <div className="flex justify-center">
                <TechIcon name="analytics" className="w-16 h-16 text-red-primary" />
              </div>
              <h3 className="text-xl font-bold text-red-primary">Suporte e Evolução Contínua</h3>
              <p className="text-text-secondary text-sm">
                Meu trabalho não para na entrega.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <blockquote className="text-2xl lg:text-3xl font-semibold text-text-primary italic">
            "Enquanto muitos ainda fazem manualmente, você pode automatizar com inteligência."
          </blockquote>
          
          <Button 
            className="mt-8 bg-red-primary hover:bg-red-secondary text-white px-12 py-4 text-lg rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Me chame já!
          </Button>
        </div>

        {/* Footer Social Links */}
        <div className="mt-20 flex justify-center space-x-8">
          <a href="#" className="flex items-center space-x-2 text-text-secondary hover:text-red-primary transition-colors">
            <TechIcon name="instagram" className="w-6 h-6" />
            <span>@luanconsani28</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-text-secondary hover:text-red-primary transition-colors">
            <TechIcon name="linkedin" className="w-6 h-6" />
            <span>Luan Henrique Consani</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-text-secondary hover:text-red-primary transition-colors">
            <TechIcon name="github" className="w-6 h-6" />
            <span>luan-henrique-consani</span>
          </a>
        </div>
      </div>
    </div>
  );
};
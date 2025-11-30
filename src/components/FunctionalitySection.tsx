import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2 } from "lucide-react";

const FunctionalitySection = () => {
  const requirements = [
    "Experiência de uso completa de ponta a ponta",
    "Simulação de input de dados e processamento",
    "Feedback visual para o usuário",
    "Grid responsivo e design adaptável",
    "Paleta de cores consistente e acessível",
    "Animações e interações fluidas",
  ];

  return (
    <section id="functionality" className="section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
              Justificativa da Nova Funcionalidade
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A nova funcionalidade foi desenvolvida com base em uma análise detalhada 
              da persona e suas necessidades específicas dentro do ecossistema do App INATEL. 
              O objetivo é proporcionar uma experiência mais intuitiva e eficiente, 
              resolvendo problemas identificados através de pesquisa com usuários.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Através da implementação desta funcionalidade, buscamos melhorar 
              significativamente a jornada do usuário, reduzindo o tempo necessário 
              para realizar tarefas comuns e aumentando a satisfação geral com o aplicativo.
            </p>
            <Button size="lg" className="group shadow-elegant">
              Ver Projeto Completo
              <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          <Card className="border-2 hover:border-primary/50 transition-all shadow-elegant animate-fade-in-up">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">
                Requisitos Implementados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FunctionalitySection;

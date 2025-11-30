import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListChecks, Network, GitBranch } from "lucide-react";

const AnalysisSection = () => {
  return (
    <section id="analysis" className="section-padding">
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Análise Técnica
          </h2>
          <p className="text-lg text-muted-foreground">
            Documentação detalhada da análise de tarefas e fluxo de informação
          </p>
        </div>

        <Tabs defaultValue="task" className="max-w-5xl mx-auto animate-fade-in-up">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="task" className="text-base">
              Análise da Tarefa
            </TabsTrigger>
            <TabsTrigger value="flow" className="text-base">
              Fluxo de Informação
            </TabsTrigger>
          </TabsList>

          <TabsContent value="task">
            <Card className="border-2 hover:border-primary/50 transition-all shadow-elegant">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ListChecks className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-2xl">
                    Análise da Tarefa
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    Decomposição da Tarefa
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Análise hierárquica das ações do usuário, identificando cada etapa 
                    necessária para completar a tarefa de forma eficiente.
                  </p>
                  <div className="grid gap-3">
                    {[
                      "Identificação do objetivo do usuário",
                      "Mapeamento de subtarefas necessárias",
                      "Análise de pontos de decisão críticos",
                      "Identificação de possíveis erros e recuperação",
                      "Otimização do caminho crítico",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold text-sm">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    Coerência com o Desenvolvimento
                  </h3>
                  <p className="text-muted-foreground">
                    O framework de análise está totalmente alinhado com o desenvolvimento 
                    das telas, garantindo que cada elemento visual corresponda a uma 
                    funcionalidade mapeada na análise de tarefas.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="flow">
            <Card className="border-2 hover:border-primary/50 transition-all shadow-elegant">
              <CardHeader className="bg-gradient-to-r from-accent/5 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Network className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-heading text-2xl">
                    Fluxo de Informação
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    Diagrama de Classes
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Estrutura de dados e relacionamentos entre componentes, 
                    definindo como a informação flui através do sistema.
                  </p>
                  <div className="bg-muted/30 rounded-lg p-6 border-2 border-dashed border-border">
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                      <div className="p-4 bg-background rounded-lg border-2 border-primary/30 hover:border-primary/60 transition-colors">
                        <GitBranch className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="text-sm font-semibold text-center">Entrada</p>
                      </div>
                      <div className="text-2xl text-muted-foreground">→</div>
                      <div className="p-4 bg-background rounded-lg border-2 border-accent/30 hover:border-accent/60 transition-colors">
                        <GitBranch className="h-8 w-8 text-accent mx-auto mb-2" />
                        <p className="text-sm font-semibold text-center">Processamento</p>
                      </div>
                      <div className="text-2xl text-muted-foreground">→</div>
                      <div className="p-4 bg-background rounded-lg border-2 border-primary/30 hover:border-primary/60 transition-colors">
                        <GitBranch className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="text-sm font-semibold text-center">Saída</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    Integração com Interface
                  </h3>
                  <p className="text-muted-foreground">
                    O fluxo de informação está diretamente mapeado para elementos visuais 
                    na interface, criando uma experiência coesa onde cada interação do 
                    usuário corresponde a uma ação no sistema.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AnalysisSection;

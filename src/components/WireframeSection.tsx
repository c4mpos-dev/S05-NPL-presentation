import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Monitor, Tablet, Layout } from "lucide-react";

const WireframeSection = () => {
  return (
    <section id="wireframe" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Wireframes e Design
          </h2>
          <p className="text-lg text-muted-foreground">
            Protótipos e estrutura visual da interface desenvolvida
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 hover:border-primary/50 transition-all shadow-elegant animate-fade-in-up">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl">
                  Estrutura Visual
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                Os wireframes foram desenvolvidos considerando as melhores práticas de UX/UI, 
                garantindo uma hierarquia visual clara e navegação intuitiva.
              </p>
              <ul className="space-y-3">
                {[
                  "Layout responsivo e adaptável",
                  "Hierarquia visual bem definida",
                  "Espaçamento consistente (grid system)",
                  "Componentes reutilizáveis",
                  "Feedback visual em todas interações",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all shadow-elegant animate-fade-in-up delay-100">
            <CardHeader className="bg-gradient-to-r from-accent/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-heading text-2xl">
                  Design Responsivo
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                A interface foi projetada para funcionar perfeitamente em diferentes 
                dispositivos e tamanhos de tela, mantendo a usabilidade em todas as plataformas.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Smartphone, label: "Mobile", size: "< 768px" },
                  { icon: Tablet, label: "Tablet", size: "768-1024px" },
                  { icon: Monitor, label: "Desktop", size: "> 1024px" },
                ].map((device, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-all text-center group"
                  >
                    <device.icon className="h-8 w-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold text-sm mb-1">{device.label}</p>
                    <p className="text-xs text-muted-foreground">{device.size}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-primary/20 shadow-elegant animate-fade-in-up">
          <CardContent className="pt-6">
            <div className="bg-muted/30 rounded-lg p-8 md:p-12 border-2 border-dashed border-border min-h-[400px] flex flex-col items-center justify-center">
              <Layout className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="font-heading font-semibold text-2xl mb-2 text-center">
                Wireframe Placeholder
              </h3>
              <p className="text-muted-foreground text-center max-w-md">
                Esta área é destinada aos wireframes e mockups das telas desenvolvidas. 
                Os wireframes demonstram o fluxo completo da funcionalidade implementada.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WireframeSection;

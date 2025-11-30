import { ExternalLink, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container-width px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">I</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">INATEL</h3>
                <p className="text-xs text-muted-foreground">
                  Instituto Nacional de Telecomunicações
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Projeto acadêmico desenvolvido como parte do curso de Interface de Usuário.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { label: "Início", id: "hero" },
                { label: "Sobre", id: "about" },
                { label: "Funcionalidade", id: "functionality" },
                { label: "User Story", id: "user-story" },
              ].map((item) => (
                <li key={item.id}>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => {
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Documentação</h4>
            <ul className="space-y-2">
              {[
                { label: "Análise", id: "analysis" },
                { label: "Wireframe", id: "wireframe" },
              ].map((item) => (
                <li key={item.id}>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => {
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Conecte-se</h4>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="outline"
                className="hover:border-primary/50 hover:bg-primary/10"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover:border-primary/50 hover:bg-primary/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover:border-primary/50 hover:bg-primary/10"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} INATEL. Todos os direitos reservados.
            </p>
            <Button
              variant="link"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Ver Código no GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

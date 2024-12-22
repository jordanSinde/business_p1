import { Card, CardContent } from "@/components/ui/card";
import { Building2, Factory, Globe2, Handshake } from "lucide-react";

const features = [
  {
    title: "Connexion Internationale",
    description: "Accédez à un réseau d'entreprises du monde entier et développez vos opportunités commerciales à l'international.",
    icon: Globe2,
  },
  {
    title: "Partenariats Ciblés",
    description: "Trouvez des partenaires selon vos critères spécifiques et développez des collaborations stratégiques.",
    icon: Handshake,
  },
  {
    title: "Opportunités Locales",
    description: "Développez votre présence au Cameroun en découvrant les meilleures opportunités locales.",
    icon: Building2,
  },
  {
    title: "Mise en Relation",
    description: "Connectez-vous directement avec vos futurs partenaires et établissez des relations commerciales durables.",
    icon: Factory,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <feature.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
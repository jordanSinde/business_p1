import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const partnershipDomains = [
  {
    title: "Équipements",
    description: "Production, transformation, stockage, conditionnement",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    title: "Intrants de production",
    description: "Engrais, produits agricoles",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    title: "Nouvelles techniques",
    description: "Techniques innovantes de production",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=400&h=300",
  },
];

export function PartnershipDomains() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Domaines de Partenariat
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {partnershipDomains.map((domain) => (
            <Card key={domain.title} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={domain.image}
                  alt={domain.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{domain.title}</h3>
                <p className="text-muted-foreground">{domain.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
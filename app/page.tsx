import { Button } from "@/components/ui/button";
import { FeaturesSection } from "@/components/features-section";
import { PartnershipDomains } from "@/components/partnership-domains";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80"
            alt="Business partnership"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Trouvez votre partenaire commercial idéal
          </h1>
          <p className="text-xl mb-8">
            Une plateforme dédiée aux entreprises locales et internationales pour créer des opportunités de croissance au Cameroun
          </p>
          <Link href="/search">
            <Button size="lg" className="text-lg">
              Commencer la recherche
            </Button>
          </Link>
        </div>
      </section>

      <FeaturesSection />
      <PartnershipDomains />
    </main>
  );
}
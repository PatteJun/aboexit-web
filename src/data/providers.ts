export interface Provider {
  id: string;
  name: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  address: string;
  category: string;
}

export const providers: Provider[] = [
  {
    id: "telekom",
    name: "Deutsche Telekom",
    slug: "telekom",
    description: "Kündigung für Deutsche Telekom Verträge - Hier finden Sie alle Informationen und eine Vorlage für Ihre Kündigung bei der Telekom.",
    metaTitle: "Telekom Kündigung - Kostenlose Kündigungsvorlage & Anleitung 2024",
    metaDescription: "✓ Telekom Vertrag kündigen ➤ Kostenlose Kündigungsvorlage ✓ Kündigungsfristen ✓ Tipps zur Kündigung ➤ Jetzt einfach online kündigen!",
    address: "Deutsche Telekom AG\nLandgrabenweg 151\n53227 Bonn",
    category: "telekommunikation"
  },
  {
    id: "vodafone",
    name: "Vodafone",
    slug: "vodafone",
    description: "Kündigung für Vodafone Verträge - Hier finden Sie alle Informationen und eine Vorlage für Ihre Kündigung bei Vodafone.",
    metaTitle: "Vodafone Kündigung - Kostenlose Kündigungsvorlage & Anleitung 2024",
    metaDescription: "✓ Vodafone Vertrag kündigen ➤ Kostenlose Kündigungsvorlage ✓ Kündigungsfristen ✓ Tipps zur Kündigung ➤ Jetzt einfach online kündigen!",
    address: "Vodafone GmbH\nFerdinand-Braun-Platz 1\n40549 Düsseldorf",
    category: "telekommunikation"
  },
  {
    id: "netflix",
    name: "Netflix",
    slug: "netflix",
    description: "Kündigung für Netflix Abonnement - Hier finden Sie alle Informationen und eine Vorlage für Ihre Kündigung bei Netflix.",
    metaTitle: "Netflix Kündigung - Kostenlose Kündigungsvorlage & Anleitung 2024",
    metaDescription: "✓ Netflix Abo kündigen ➤ Kostenlose Kündigungsvorlage ✓ Kündigungsfristen ✓ Tipps zur Kündigung ➤ Jetzt einfach online kündigen!",
    address: "Netflix International B.V.\nKarperstraat 8-10\n1075 KZ Amsterdam\nNiederlande",
    category: "streaming"
  }
];
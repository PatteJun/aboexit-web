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
  },
  {
    id: "amazon",
    name: "Amazon Prime",
    slug: "amazon-prime",
    description: "Kündigung für Amazon Prime Abonnement - Hier finden Sie alle Informationen und eine Vorlage für Ihre Kündigung bei Amazon Prime.",
    metaTitle: "Amazon Prime Kündigung - Kostenlose Kündigungsvorlage & Anleitung 2024",
    metaDescription: "✓ Amazon Prime kündigen ➤ Kostenlose Kündigungsvorlage ✓ Kündigungsfristen ✓ Tipps zur Kündigung ➤ Jetzt einfach online kündigen!",
    address: "Amazon Europe Core S.à r.l.\n38 avenue John F. Kennedy\nL-1855 Luxembourg",
    category: "streaming"
  },
  {
    id: "sky",
    name: "Sky",
    slug: "sky",
    description: "Kündigung für Sky Abonnement - Hier finden Sie alle Informationen und eine Vorlage für Ihre Kündigung bei Sky.",
    metaTitle: "Sky Kündigung - Kostenlose Kündigungsvorlage & Anleitung 2024",
    metaDescription: "✓ Sky Abo kündigen ➤ Kostenlose Kündigungsvorlage ✓ Kündigungsfristen ✓ Tipps zur Kündigung ➤ Jetzt einfach online kündigen!",
    address: "Sky Deutschland Fernsehen GmbH & Co. KG\nMedienallee 26\n85774 Unterföhring",
    category: "streaming"
  },
  {
    id: "eon",
    name: "E.ON",
    slug: "eon",
    description: "Kündigung für E.ON Verträge - Hier finden Sie alle Informationen und eine Vorlage für Ihre Kündigung bei E.ON.",
    metaTitle: "E.ON Kündigung - Kostenlose Kündigungsvorlage & Anleitung 2024",
    metaDescription: "✓ E.ON Vertrag kündigen ➤ Kostenlose Kündigungsvorlage ✓ Kündigungsfristen ✓ Tipps zur Kündigung ➤ Jetzt einfach online kündigen!",
    address: "E.ON Energie Deutschland GmbH\nArnulfstraße 203\n80634 München",
    category: "energie"
  },
  {
    id: "rwe",
    name: "RWE",
    slug: "rwe",
    description: "Kündigung für RWE Verträge - Hier finden Sie alle Informationen und eine Vorlage für Ihre Kündigung bei RWE.",
    metaTitle: "RWE Kündigung - Kostenlose Kündigungsvorlage & Anleitung 2024",
    metaDescription: "✓ RWE Vertrag kündigen ➤ Kostenlose Kündigungsvorlage ✓ Kündigungsfristen ✓ Tipps zur Kündigung ➤ Jetzt einfach online kündigen!",
    address: "RWE AG\nHuyssenallee 2\n45128 Essen",
    category: "energie"
  },
  {
    id: "innogy",
    name: "Innogy",
    slug: "innogy",
    description: "Kündigung für Innogy Verträge - Hier finden Sie alle Informationen und eine Vorlage für Ihre Kündigung bei Innogy.",
    metaTitle: "Innogy Kündigung - Kostenlose Kündigungsvorlage & Anleitung 2024",
    metaDescription: "✓ Innogy Vertrag kündigen ➤ Kostenlose Kündigungsvorlage ✓ Kündigungsfristen ✓ Tipps zur Kündigung ➤ Jetzt einfach online kündigen!",
    address: "Innogy SE\nOpernplatz 1\n45128 Essen",
    category: "energie"
  }
];
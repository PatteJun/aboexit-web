interface PrivacyContent {
    title: string;
    content: string;
  }
  
  export const privacyContent: Record<string, PrivacyContent> = {
    en: {
      title: 'Privacy Policy',
      content: 'This is the privacy policy for our website...',
    },
    de: {
      title: 'Datenschutz',
      content: 'Dies ist die Datenschutzerklärung für unsere Website...',
    },
    fr: {
      title: 'Politique de confidentialité',
      content: 'Ceci est la politique de confidentialité de notre site Web...',
    },
    it: {
      title: 'Informativa sulla privacy',
      content: 'Questa è l\'informativa sulla privacy del nostro sito web...',
    },
  };
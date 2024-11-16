interface ImprintContent {
    title: string;
    content: string;
  }
  
  export const imprintContent: Record<string, ImprintContent> = {
    en: {
      title: 'Imprint',
      content: 'This is the imprint for our website...',
    },
    de: {
      title: 'Impressum',
      content: 'Dies ist das Impressum unserer Website...',
    },
    fr: {
      title: 'Mentions légales',
      content: 'Ceci est l\'impressum de notre site Web...',
    },
    it: {
      title: 'Impressum',
      content: 'Questo è l\'impressum del nostro sito web...',
    },
  };
interface PrivacyContent {
    title: string;
    content: string;
  }
  
  export const privacyContent: Record<string, PrivacyContent> = {
    en: {
      title: 'Privacy Policy',
      content: `
        <p><br><br>We are committed to protecting your privacy. This privacy policy explains how we handle your personal data when you visit our website.<br><br></p>
        
        <h3>Data Collection</h3>
        <p>We do not collect any personal data from our users. Our website does not use cookies or any other tracking technologies that collect personal information.<br><br></p>
        
        <h3>Plausible Analytics</h3>
        <p>We use Plausible Analytics to gather insights about our website traffic. Plausible is a privacy-friendly analytics tool that does not use cookies and does not collect personal data. All data is aggregated and anonymized, ensuring that individual users cannot be identified.<br><br></p>
        
        <h3>Data Sharing</h3>
        <p>We do not share any personal data with third parties, as we do not collect any personal data.<br><br></p>
        
        <h3>Your Rights</h3>
        <p>Since we do not collect any personal data, there are no personal data rights to exercise. However, if you have any questions or concerns about our privacy practices, please feel free to contact us.<br><br></p>
        
        <h3>Contact Information</h3>
        <p>If you have any questions about this privacy policy, you can contact us at:<br><br></p>
        <p>Christoph Paterok<br>
        Sudermanplatz 2<br>
        50670 Köln<br>
        Deutschland<br>
        Telephone: +49 (0) 151 288 72425<br><br></p>
        
        <p>This privacy policy may be updated from time to time. We encourage you to review it periodically.</p>
      `,
    },
    de: {
      title: 'Datenschutz',
      content: `
        <p><br><br>Wir legen großen Wert auf den Schutz Ihrer Daten. Diese Datenschutzerklärung erklärt, wie wir Ihre persönlichen Daten behandeln, wenn Sie unsere Website besuchen.<br><br></p>
        
        <h3>Datenerhebung</h3>
        <p>Wir erheben keine persönlichen Daten von unseren Nutzern. Unsere Website verwendet keine Cookies oder andere Tracking-Technologien, die persönliche Informationen sammeln.<br><br></p>
        
        <h3>Plausible Analytics</h3>
        <p>Wir verwenden Plausible Analytics, um Einblicke in den Website-Verkehr zu erhalten. Plausible ist ein datenschutzfreundliches Analysetool, das keine Cookies verwendet und keine persönlichen Daten sammelt. Alle Daten werden aggregiert und anonymisiert, sodass einzelne Nutzer nicht identifiziert werden können.<br><br></p>
        
        <h3>Datenweitergabe</h3>
        <p>Wir geben keine persönlichen Daten an Dritte weiter, da wir keine persönlichen Daten erheben.<br><br></p>
        
        <h3>Ihre Rechte</h3>
        <p>Da wir keine persönlichen Daten erheben, gibt es keine persönlichen Datenrechte auszuüben. Wenn Sie jedoch Fragen oder Bedenken zu unseren Datenschutzpraktiken haben, können Sie uns gerne kontaktieren.<br><br></p>
        
        <h3>Kontaktinformationen</h3>
        <p>Wenn Sie Fragen zu dieser Datenschutzerklärung haben, können Sie uns kontaktieren unter:<br><br></p>
        <p>Christoph Paterok<br>
        Sudermanplatz 2<br>
        50670 Köln<br>
        Deutschland<br>
        Telefon: +49 (0) 151 288 72425<br><br></p>
        
        <p>Diese Datenschutzerklärung kann von Zeit zu Zeit aktualisiert werden. Wir empfehlen Ihnen, sie regelmäßig zu überprüfen.</p>
      `,
    },
    // Add other languages as needed
  };
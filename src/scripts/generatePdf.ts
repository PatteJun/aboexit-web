import html2pdf from 'html2pdf.js';

interface Translations {
  'letter.contract.reference': string;
  'letter.validation': string;
}

export function initializePdfGeneration(translations: Translations) {
  const contractNumberInput = document.querySelector('[data-field="contractNumber"]') as HTMLInputElement;
  const contractReference = document.querySelector('.contract-reference') as HTMLParagraphElement;
  const generatePdfButton = document.getElementById('generatePdf');
  const letterContent = document.getElementById('letterContent');

  // Handle contract number input
  contractNumberInput?.addEventListener('input', (e) => {
    const value = (e.target as HTMLInputElement).value;
    if (value) {
      contractReference.textContent = translations['letter.contract.reference'].replace('{number}', value);
    } else {
      contractReference.textContent = '';
    }
  });

  // Save form data in localStorage
  const inputs = document.querySelectorAll('.input-field, .signature-field') as NodeListOf<HTMLInputElement>;
  inputs.forEach(input => {
    const field = input.dataset.field;
    
    // Load saved value
    const savedValue = localStorage.getItem(`cancellation-${field}`);
    if (savedValue) {
      input.value = savedValue;
      if (field === 'contractNumber') {
        contractReference.textContent = translations['letter.contract.reference'].replace('{number}', savedValue);
      }
    }

    // Save on input
    input.addEventListener('input', (e) => {
      const value = (e.target as HTMLInputElement).value;
      localStorage.setItem(`cancellation-${field}`, value);
    });
  });

  // PDF Generation
  generatePdfButton?.addEventListener('click', () => {
    // Check if required fields are filled
    const name = document.querySelector('[data-field="name"]') as HTMLInputElement;
    const street = document.querySelector('[data-field="street"]') as HTMLInputElement;
    const city = document.querySelector('[data-field="city"]') as HTMLInputElement;
    const signature = document.querySelector('[data-field="signature"]') as HTMLInputElement;

    if (!name.value || !street.value || !city.value || !signature.value) {
      alert(translations['letter.validation']);
      return;
    }

    // Add PDF generation class
    letterContent?.classList.add('generating-pdf');

    // PDF options
    const opt = {
      margin: 20,
      filename: 'cancellation.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        letterRendering: true,
        useCORS: true
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait'
      }
    };

    // Generate PDF
    html2pdf().set(opt).from(letterContent).save().then(() => {
      letterContent?.classList.remove('generating-pdf');
    });
  });
}
export function formatDate(locale: string): string {
    return new Date().toLocaleDateString(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }
  
  export function initializeDynamicDates(locale: string): void {
    const dates = document.querySelectorAll('[data-dynamic-date]');
    
    const updateDates = () => {
      const formattedDate = formatDate(locale);
      dates.forEach(element => {
        element.textContent = formattedDate;
      });
    };
  
    // Initial update
    updateDates();
  }
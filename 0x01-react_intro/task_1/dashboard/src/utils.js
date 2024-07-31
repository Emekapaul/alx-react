export function getFullYear() {
    const currentYear = new Date();
    return currentYear.getFullYear();
  }
  
export function getFooterCopy(isIndex) {
    return (isIndex) ? 'Holberton School' : 'Holberton School main dashboard';
  }
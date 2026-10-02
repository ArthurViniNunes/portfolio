// A constant, application-owned script: no user input is interpolated here.
export const themeScript = `try{document.documentElement.dataset.theme=localStorage.getItem('portfolio-theme')==='dark'?'dark':'light'}catch{document.documentElement.dataset.theme='light'}`;

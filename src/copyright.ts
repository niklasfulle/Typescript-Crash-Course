// Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear


const yearElemet = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
yearElemet.setAttribute("datetime", thisYear);
yearElemet.textContent = thisYear.toString();
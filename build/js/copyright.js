"use strict";
// Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
const yearElemet = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
yearElemet.setAttribute("datetime", thisYear);
yearElemet.textContent = thisYear.toString();

var szam = "2";

export function elagazas1() {
      if (szam === 2) {
          console.log("A számunk = " + szam);
      } else {
          console.log("A számunk nem = " + szam);
      }
  }
  
  
  /* a szám változóról döntsük el, hogy ps-e? */
  
export function elagazas2() {
          if (szam === 0) {
      console.log("A szám 0");
      } else if (szam % 2 === 0) {
      console.log(szam + " páros");
      } else {
      console.log(szam + " páratlan");
      }
  }
  
  /* Írjuk ki a consolra 10-szer az alábbi üzenetet */
 export function forCiklus() {
      for (let index = 0; index < 10; index++) {
          console.log(`A(z) ${index+1}. üzenet`);
      }
  }
      
  /* Ugyanaz a feladat, csak while ciklussal */
 export function whileCiklus(){
      let index = 0;
      while (index < 10) {
          console.log("Ez az első üzenet");
          index++;
      }
  }
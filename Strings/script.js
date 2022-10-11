'use strict';
const userInfoOutput = document.getElementById('main');

let user = {
  vardas: 'Serbentautas',
  pavarde: 'Bordiuras',
};

let resultHtml = `
  <h2 class='card'>User information</h2>
  <p>Vartotojo vardas yra <strong>${user.vardas}</strong>, o pavardė <strong>${user.pavarde}</strong>. </p>
`;

console.log('resultHtml', resultHtml);

userInfoOutput.innerHTML = resultHtml;

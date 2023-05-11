/*
------------------------------------------------------------------------------------------------------------
    Copyright Felipe Sena | 2023 | Licenced under the GNU General Public Licence | Read the licence on the LICENCE.txt file
------------------------------------------------------------------------------------------------------------
*/

'use strict';

const points = localStorage.getItem('points');
const rounds = localStorage.getItem('rounds');

document.getElementById('results').innerHTML = `${points} / ${rounds} PONTOS`;

localStorage.clear(); // Just safety to prevent exploiting I guess?
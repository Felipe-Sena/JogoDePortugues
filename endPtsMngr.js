/*
------------------------------------------------------------------------------------------------------------
    Copyright Felipe Sena | 2023 | Licenced under the GNU General Public Licence | Read the licence on the LICENCE.txt file
------------------------------------------------------------------------------------------------------------
*/

'use strict';

const points = localStorage.getItem('points');
console.log(points)

document.getElementById('results').innerHTML = `${points} / 6 PONTOS`;
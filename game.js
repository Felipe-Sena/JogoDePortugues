/*
------------------------------------------------------------------------------------------------------------
    Copyright Felipe Sena | 2023 | Licenced under the GNU General Public Licence | Read the licence on the LICENCE.txt file
------------------------------------------------------------------------------------------------------------
*/

'use strict';

// Modules

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
const log = console.log;

// Variables

let points = 0;
let args;

// GameInput

log(data);


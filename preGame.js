/*
------------------------------------------------------------------------------------------------------------
    Copyright Felipe Sena | 2023 | Licenced under the GNU General Public Licence | Read the licence on the LICENCE.txt file
------------------------------------------------------------------------------------------------------------
*/

localStorage.clear();

function run() {
    let inputValue = document.getElementById('nbr_sbmt');
    if (!inputValue.value) {
        // Use the default value of 6 rounds
        localStorage.setItem('rounds', 6);
    } else {
        // Use user inputted values
        localStorage.setItem('rounds', inputValue.value);
    }
    window.location.href='jogo.html';
}
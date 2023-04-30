
//let capslock = false;

const wrapper = document.createElement('div');
wrapper.className = "wrapper";
document.body.prepend(wrapper);


const outputPanel = document.createElement('textarea');
outputPanel.className = "output-panel";
wrapper.prepend(outputPanel);

const virtualKeyboardLangRu = document.createElement('div');
virtualKeyboardLangRu.className = "virtual-keyboard-ru";
wrapper.append(virtualKeyboardLangRu);


const keyboardRus = [
[['Backquote', 'ё', 'Ё', '`', '~'],
['Digit1', '1', '!', '1', '!'],
['Digit2', '2', '"', '2', '@'],
['Digit3', '3', '№', '3', '#'],
['Digit4', '4', ';', '4', '$'],
['Digit5', '5', '%', '5', '%'],
['Digit6', '6', ':', '6', '^'],
['Digit7', '7', '?', '7', '&'],
['Digit8', '8', '*', '8', '*'],
['Digit9', '9', '(', '9', '('],
['Digit0', '0', ')', '0', ')'],
['Minus', '-', '_', '-', '_'],
['Equal', '=', '+', '=', '+'],
['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
],
[['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
['KeyQ', 'й', 'Й', 'q', 'Q'],
['KeyW', 'ц', 'Ц', 'w', 'W'],
['KeyE', 'у', 'У', 'e', 'E'],
['KeyR', 'к', 'К', 'r', 'R'],
['KeyT', 'е', 'Е', 't', 'T'],
['KeyY', 'н', 'Н', 'y', 'Y'],
['KeyU', 'г', 'Г', 'u', 'U'],
['KeyI', 'ш', 'Ш', 'i', 'I'],
['KeyO', 'щ', 'Щ', 'o', 'O'],
['KeyP', 'з', 'З', 'p', 'P'],
['BracketLeft', 'х', 'Х', '[','{'],
['BracketRight', 'ъ', 'Ъ', ']', '}'],
['Backslash', '\\', '/', '\\', '|'],
['Delete', 'Del', 'Del', 'Del', 'Del'],
],
[['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
['KeyA', 'ф', 'Ф', 'a', 'A'],
['KeyS', 'ы', 'Ы', 's', 'S'],
['KeyD', 'в', 'В', 'd', 'D'],
['KeyF', 'а', 'А', 'f', 'F'],
['KeyG', 'п', 'П', 'g', 'G'],
['KeyH', 'р', 'Р', 'h', 'H'],
['KeyJ', 'о', 'О', 'j', 'J'],
['KeyK', 'л', 'Л', 'k', 'K'],
['KeyL', 'д', 'Д', 'l', 'L'],
['Semicolon', 'ж', 'Ж', ';', ':'],
['Quote', 'э', 'Э', `'`, `"`],
['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
],
[['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
['KeyZ', 'я', 'Я', 'z', 'Z'],
['KeyX', 'ч', 'Ч', 'x', 'X'],
['KeyC', 'с', 'С', 'c', 'C'],
['KeyV', 'м', 'М', 'v', 'V'],
['KeyB', 'и', 'И', 'b', 'B'],
['KeyN', 'т', 'Т', 'n', 'N'],
['KeyM', 'ь', 'Ь', 'm', 'M'],
['Comma', 'б', 'Б', '.', '<'],
['Period', 'ю', 'Ю', '.', '>'],
['Slash', '.', ',', '/', '?'],
['ArrowUp', '▲', '▲', '▲', '▲'],
['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
],
[['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
['Space', ' ', ' ', ' ', ' '],
['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
['ArrowLeft', '◄', '◄',  '◄',  '◄'],
['ArrowDown', '▼', '▼', '▼', '▼'],
['ArrowRight', '►', '►', '►', '►'],
['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
],
]

for (let i = 0; i < keyboardRus.length; i++) {
    const line = document.createElement('div');
    line.className = "line";
    virtualKeyboardLangRu.appendChild(line);
  for (let j = 0; j < keyboardRus[i].length; j += 1) {
    const digital = document.createElement('div');
    digital.className = "digital";
   line.appendChild(digital);
   digital.classList.add(keyboardRus[i][j][0]);

   const digitalRus = document.createElement('div');
   digitalRus.className = "digital-rus rus";
   digital.appendChild(digitalRus);

   const digitalEn = document.createElement('div');
   digitalEn.className = "digital-en en";
   digital.appendChild(digitalEn);

   const digitalSmallRus = document.createElement('span');
   digitalSmallRus.className = "digital__small digital__small_rus";
   digitalRus.appendChild(digitalSmallRus);
   digitalSmallRus.innerHTML = `${keyboardRus[i][j][1]}`

   const digitalShiftRus = document.createElement('span');
   digitalShiftRus.className = "digital__shift digital__shift_rus hidden";
   digitalRus.appendChild(digitalShiftRus);
   digitalShiftRus.innerHTML = `${keyboardRus[i][j][2]}`

   const digitalSmallEn = document.createElement('span');
   digitalSmallEn.className = "digital__small digital__small_en";
   digitalEn.appendChild(digitalSmallEn);
   digitalSmallEn.innerHTML = `${keyboardRus[i][j][3]}`

   const digitalShiftEn = document.createElement('span');
   digitalShiftEn.className = "digital__shift digital__shift_en hidden";
   digitalEn.appendChild(digitalShiftEn);
   digitalShiftEn.innerHTML = `${keyboardRus[i][j][4]}`
};
}

let digitals = document.querySelectorAll('.digital-rus span');
let spaceDigital = document.querySelector('.digital.Space');
let shiftRightDigital = document.querySelector('.digital.ShiftRight');
let shiftLeftDigital = document.querySelector('.digital.ShiftLeft');
let capsLockDigital = document.querySelector('.digital.CapsLock');
let altLeftDigital = document.querySelector('.digital.AltLeft');
let altRightDigital = document.querySelector('.digital.AltRight');
let ctrlRightDigital = document.querySelector('.digital.ControlRight');
let ctrlLeftDigital = document.querySelector('.digital.ControlLeft');
let metaLeftDigital = document.querySelector('.digital.MetaLeft');


window.addEventListener('keydown', function(e) {
    for(let i = 0; i < digitals.length; i++) {
        if(e.key == digitals[i].textContent) {
            digitals[i].classList.add('active')
        }
        if(e.code == 'Space') {
            spaceDigital.classList.add('active')
        }
        if(e.code == 'AltLeft') {
            altLeftDigital.classList.add('active')
        }
        if(e.code == 'AltRight') {
            altRightDigital.classList.add('active')
        }
        if(e.code == 'ControlRight') {
            ctrlRightDigital.classList.add('active')
        }
        if(e.code == 'ControlLeft') {
            ctrlLeftDigital.classList.add('active')
        }
        if(e.code == 'MetaLeft') {
            metaLeftDigital.classList.add('active')
        }
        if(e.code == 'ShiftRight') {
            shiftRightDigital.classList.remove('active')
        }
        if(e.code == 'ShiftLeft') {
            shiftLeftDigital.classList.remove('active')
        }
        if(e.code == 'CapsLock') {
            capsLockDigital.classList.toggle('active');
        }
    }
})
window.addEventListener('keyup', function(e) {
    for(let i = 0; i <digitals.length; i++) {
        if(e.key == digitals[i].textContent) {
            digitals[i].classList.remove('active')
            digitals[i].classList.add('remove')
        }
        if(e.code == 'Space') {
            spaceDigital.classList.remove('active');
            spaceDigital.classList.add('remove');
        }
        if(e.code == 'ShiftLeft') {
            shiftRightDigital.classList.remove('active')
            shiftRightDigital.classList.remove('remove')
        }
        if(e.code == 'ShiftRight') {
            shiftLeftDigital.classList.remove('active')
            shiftLeftDigital.classList.remove('remove')
        }
        if(e.code == 'AltLeft') {
            altLeftDigital.classList.remove('active')
            altLeftDigital.classList.remove('remove')
        }
        if(e.code == 'AltRight') {
            altRightDigital.classList.remove('active')
            altRightDigital.classList.remove('remove')
        }
        if(e.code == 'ControlRight') {
            ctrlRightDigital.classList.remove('active')
            ctrlRightDigital.classList.remove('remove')
        }
        if(e.code == 'ControlLeft') {
            ctrlLeftDigital.classList.remove('active')
            ctrlLeftDigital.classList.remove('remove')
        }
        if(e.code == 'MetaLeft') {
            metaLeftDigital.classList.remove('active')
            metaLeftDigital.classList.remove('remove')
        }
        if(e.code == 'MetaLeft') {
            metaLeftDigital.classList.remove('active')
            metaLeftDigital.classList.remove('remove')
        }
        setTimeout(()=> {
            digitals[i].classList.remove('remove')
        },200)
    }
})




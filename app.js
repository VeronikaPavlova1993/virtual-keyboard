const wrapper = document.createElement('div');
wrapper.className = "wrapper";
document.body.prepend(wrapper);


const outputPanel = document.createElement('textarea');
outputPanel.className = "output-panel";
wrapper.prepend(outputPanel);

const virtualKeyboardLangRu = document.createElement('div');
virtualKeyboardLangRu.className = "virtual-keyboard-ru";
wrapper.append(virtualKeyboardLangRu);


let language = 'ru';
let capsLock = false;


const keyboardRus = [
[['Backquote', 'ё', 'Ё'],
['Digit1', '1', '!'],
['Digit2', '2', '"'],
['Digit3', '3', '№'],
['Digit4', '4', ';'],
['Digit5', '5', '%'],
['Digit6', '6', ':'],
['Digit7', '7', '?'],
['Digit8', '8', '*'],
['Digit9', '9', '('],
['Digit0', '0', ')'],
['Minus', '-', '_'],
['Equal', '=', '+'],
['Backspace', 'Backspace', 'Backspace'],
],
[['Tab', 'Tab', 'Tab'],
['KeyQ', 'й', 'Й'],
['KeyW', 'ц', 'Ц'],
['KeyE', 'у', 'У'],
['KeyR', 'к', 'К'],
['KeyT', 'е', 'Е'],
['KeyY', 'н', 'Н'],
['KeyU', 'г', 'Г'],
['KeyI', 'ш', 'Ш'],
['KeyO', 'щ', 'Щ'],
['KeyP', 'з', 'З'],
['BracketLeft', 'х', 'Х'],
['BracketRight', 'ъ', 'Ъ'],
['Backslash', '\\', '/'],
['Delete', 'Del', 'Del'],
],
[['CapsLock', 'CapsLock', 'CapsLock'],
['KeyA', 'ф', 'Ф'],
['KeyS', 'ы', 'Ы'],
['KeyD', 'в', 'В'],
['KeyF', 'а', 'А'],
['KeyG', 'п', 'П'],
['KeyH', 'р', 'Р'],
['KeyJ', 'о', 'О'],
['KeyK', 'л', 'Л'],
['KeyL', 'д', 'Д'],
['Semicolon', 'ж', 'Ж'],
['Quote', 'э', 'Э'],
['Enter', 'Enter', 'Enter'],
],
[['ShiftLeft', 'Shift', 'Shift'],
['KeyZ', 'я', 'Я'],
['KeyX', 'ч', 'Ч'],
['KeyC', 'с', 'С'],
['KeyV', 'м', 'М'],
['KeyB', 'и', 'И'],
['KeyN', 'т', 'Т'],
['KeyM', 'ь', 'Ь'],
['Comma', 'б', 'Б'],
['Period', 'ю', 'Ю'],
['Slash', '.', ','],
['ArrowUp', '▲', '▲'],
['ShiftRight', 'Shift', 'Shift'],
],
[['ControlLeft', 'Ctrl', 'Ctrl'],
['MetaLeft', 'Win', 'Win'],
['AltLeft', 'Alt', 'Alt'],
['Space', ' ', ' '],
['AltRight', 'Alt', 'Alt'],
['ArrowLeft', '◄', '◄'],
['ArrowDown', '▼', '▼'],
['ArrowRight', '►', '►'],
['ControlRight', 'Ctrl', 'Ctrl'],
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

   const digitalSmall = document.createElement('span');
   digitalSmall.className = "digital__small";
   digital.appendChild(digitalSmall);
   digitalSmall.innerHTML = `${keyboardRus[i][j][1]}`

   const digitalShift = document.createElement('span');
   digitalShift.className = "digital__shift covert";
   digital.appendChild(digitalShift);
   digitalShift.innerHTML = `${keyboardRus[i][j][2]}`
};
};

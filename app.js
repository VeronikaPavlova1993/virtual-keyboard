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
   digitalRus.className = "digital-rus";
   digital.appendChild(digitalRus);

   const digitalEn = document.createElement('div');
   digitalEn.className = "digital-en";
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


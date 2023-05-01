
const wrapper = document.createElement('div');
wrapper.className = "wrapper";
document.body.prepend(wrapper);


const outputPanel = document.createElement('textArea');
outputPanel.className = "output-panel";
wrapper.prepend(outputPanel);

const virtualKeyboardLangRu = document.createElement('div');
virtualKeyboardLangRu.className = "virtual-keyboard-ru";
wrapper.append(virtualKeyboardLangRu);

const languageSwitching = document.createElement('div');
languageSwitching.className = "language-switching";
languageSwitching.innerText = "Для преключения языка клавиатуры используйте сочетание клавиш SHIFT + CTRL\n *клавиатура создана в операционной системе Windows";
wrapper.append(languageSwitching);


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
['Comma', 'б', 'Б', ',', '<'],
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
   digitalEn.className = "digital-eng eng hidden";
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
   digitalSmallEn.className = "digital__small digital__small_eng hidden";
   digitalEn.appendChild(digitalSmallEn);
   digitalSmallEn.innerHTML = `${keyboardRus[i][j][3]}`

   const digitalShiftEn = document.createElement('span');
   digitalShiftEn.className = "digital__shift digital__shift_eng hidden";
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

  let capslock = false;

  const variationCase = () => {
    const langBlock = document.querySelectorAll(`.${lang}`);
    for (let i = 0; i < langBlock.length; i++) {
      langBlock[i].querySelectorAll('span')[0].classList.toggle('hidden');
      langBlock[i].querySelectorAll('span')[1].classList.toggle('hidden');
    }
  };
 let lang = 'rus';
  const variationLang = () => {
    const language = document.querySelectorAll(`.${lang}`);
    for (let i = 0; i < language.length; i++) {
      language[i].classList.toggle('hidden');
      language[i].querySelectorAll('span')[0].classList.toggle('hidden');
    }
    if (lang === 'rus') {
      lang = 'eng';
      localStorage.setItem('lang', lang);
    } else {
      lang = 'rus';
      localStorage.setItem('lang', lang);
    }
    const followingLang = document.querySelectorAll(`.${lang}`);
    for (let i = 0; i < followingLang.length; i += 1) {
      followingLang[i].classList.toggle('hidden');
      followingLang[i].querySelectorAll('span')[0].classList.toggle('hidden');
    }
  };
  if (localStorage.lang === 'eng') {
    variationLang();
  }

  document.addEventListener('keydown', function(e) {
    const elem = document.getElementsByClassName(e.code)[0];
    if (e.shiftKey && e.ctrlKey) {
        elem.classList.add('active');
        variationLang();
        return false;
      }
      switch (e.code) {
        case 'MetaLeft':
            elem.classList.add('active')
          break;
        case 'Tab':
          elem.classList.add('active')
          outputPanel.value += '   ';
          break;
        case 'Enter':
        elem.classList.add('active')
          outputPanel.value += '\n';
          break;
        case 'CapsLock':
            if (capslock) {
                elem.classList.remove('active');
                capslock = false;
            } else {
                elem.classList.add('active')
                capslock = true;
                variationCase();
            }
        case 'Backspace':
          outputPanel.value = outputPanel.value.substr(0, outputPanel.value.length - 1);
          elem.classList.add('active')
          break;
        case 'Delete':
          elem.classList.add('active')
          break;
        case 'AltLeft':
        case 'AltRight':
          elem.classList.add('active')
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
            e.preventDefault();
            elem.classList.add('active')
            variationCase();
            break;
        case 'ControlLeft':
        case 'ControlRight':
          elem.classList.add('active')
          break;
        default:
          elem.classList.add('active')
          outputPanel.value += elem.querySelectorAll(':not(.hidden)')[1].textContent;
          break;
      }
    }, 10);

    document.addEventListener('keyup', (e) => {
        const elem = virtualKeyboardLangRu.getElementsByClassName(e.code)[0];
        elem.classList.remove('active');
        switch (elem.classList[1]) {
        case 'ShiftLeft':
        case 'ShiftRight':
               elem.classList.remove('active');
               variationCase();
        case 'CapsLock':
            if (capslock !== true) {
                elem.classList.remove('active');
                elem.closest('.digital');
                variationCase();
              } else {
               elem.classList.add('active');
               elem.closest('.digital');
              }
              break; 
        case 'Tab':
            elem.classList.remove('active');
            break;
      };
    });

  virtualKeyboardLangRu.addEventListener('mousedown', (e) => {
    const elem = e.target.closest('.digital');
    switch (elem.classList[1]) {
      case 'Tab':
         elem.classList.add('active')
         outputPanel.value += ' ';
         break;
      case 'MetaLeft':
         elem.classList.add('active')
          break;
      case 'Enter':
         elem.classList.add('active')
         outputPanel.value += '\n';
         break;
      case 'Delete':
         elem.classList.add('active')
         break;
      case 'Backspace':
         elem.classList.add('active')
         outputPanel.value = outputPanel.value.substr(0, outputPanel.value.length - 1);
         break;
        case 'CapsLock':
            elem.classList.add('active');
            if (capslock) {
              elem.classList.remove('active');
              capslock = false;
            } else {
              elem.classList.add('active');
              capslock = true;
              variationCase();
            }
      case 'ShiftLeft':
      case 'ShiftRight':
         e.preventDefault();
         elem.classList.add('active')
       variationCase();
      case 'ControlLeft':
      case 'ControlRight':
         elem.classList.add('active')
         break;
      case 'AltLeft':
      case 'AltRight':
          elem.classList.add('active')
          break;
      default:
       elem.classList.add('active')
        outputPanel.value += elem.querySelectorAll(':not(.hidden)')[1].textContent;
        break;
    }
  });
  
  document.addEventListener('mouseup', (e) => {
    const elem = e.target.closest('.digital');
    switch (elem.classList[1]) {
      case 'ShiftLeft':
      case 'ShiftRight':
        elem.classList.remove('active');
        variationCase();
      case 'CapsLock':
        if (capslock !== true) {
          elem.classList.remove('active');
          elem.closest('.digital');
        } else {
         elem.classList.add('active');
         elem.closest('.digital');
         variationCase();
        }
        break;
      default:
        elem.classList.remove('active');
        break;
    }
  });
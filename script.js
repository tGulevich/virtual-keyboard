const KEY_CODES = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

const SPECIAL_KEYS = ['Tab', 'CapsLock', 'Shift', 'Ctrl', 'Option', 'Alt', 'Control', 'Meta',  'Command', '←', '↑', '↓', '→', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];

const KEY_EN = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\'', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\\', 'Enter', 'Shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Ctrl', 'Option', 'Command', ' ', 'Command', 'Option', '←', '↑', '↓', '→'];

const KEY_UPPER_EN = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\'', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\\', 'Enter', 'Shift', '`', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', 'Ctrl', 'Option', 'Command', ' ', 'Command', 'Option', '←', '↑', '↓', '→'];

const KEY_RU = ['>', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', '`', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'Shift', 'Ctrl', 'Option', 'Command', ' ', 'Command', 'Option', '←', '↑', '↓', '→'];

const KEY_UPPER_RU = ['>', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ё', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', '`', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', 'Shift', 'Ctrl', 'Option', 'Command', ' ', 'Command', 'Option', '←', '↑', '↓', '→'];

//let textarea = document.querySelector('.input-field').textContent;


function createDOM() {
    let keyboardDiv = document.createElement('div');
    keyboardDiv.className = "keyboard";

    KEY_CODES.forEach(el => {
        let keyDiv = document.createElement('div');
        keyDiv.className = 'key';
        if (el === 'Backspace' || el === 'Tab') {
            keyDiv.classList.add('key-l');
            keyDiv.classList.add('small-font');
        } else if (el === 'Space') {
            keyDiv.classList.add('key-space');
        } else if (el === 'CapsLock') {
            keyDiv.classList.add('key-xl');
            keyDiv.classList.add('small-font');            
        } else if (el === 'ShiftLeft' || el === 'ShiftRight' || el === 'Enter') {
            keyDiv.classList.add('key-xl');
            keyDiv.classList.add('small-font');
        } else if (el === 'MetaLeft' || el === 'MetaRight') {
            keyDiv.classList.add('key-m');
            keyDiv.classList.add('small-font');
        } else if (el === 'ControlLeft' || el === 'AltLeft' || el === 'AltRight') {
            keyDiv.classList.add('small-font');
        }
        keyboardDiv.append(keyDiv);
    });

    let container = document.createElement('div');
    container.className = "container";
    container.innerHTML = '<textarea name="" id="" cols="30" rows="10" class="input-field"></textarea>';
    container.append(keyboardDiv);
    document.body.append(container);
} 

function clickKey(keys) {

    keys.forEach(el => {
        el.addEventListener('click', function(evt) {
            if (evt.target.textContent === 'CapsLock') {
                evt.target.classList.toggle('active');

                if (evt.target.classList.contains('active')) {
                    setSymbols(keys, KEY_UPPER_EN);
                } else {
                    setSymbols(keys, KEY_EN);   
                }
                
            } else {
                evt.target.classList.add('active');
                setTimeout(() => {evt.target.classList.remove('active');}, 200);

                addSymbol(evt.target.textContent, evt.target.textContent);
            }
        });

    });
}

function pressKey(keys) {
    document.addEventListener('keydown', (evt) => {
        let keyIndex = KEY_CODES.indexOf(evt.code);
        keys[keyIndex].classList.add('active');

        if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') {
            setSymbols(keys, KEY_UPPER_EN);
        }
        
        if (evt.getModifierState('CapsLock') == true) {
            setSymbols(keys, KEY_UPPER_EN);
        }
        
    });
    document.addEventListener('keyup', (evt) => {
        let symbol = evt.key;
        let keyIndex = KEY_CODES.indexOf(evt.code);
        keys[keyIndex].classList.remove('active');

        if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') {
            setSymbols(keys, KEY_EN);
        }

        if (evt.getModifierState('CapsLock') == false) {
            setSymbols(keys, KEY_EN);
        } 
        
        addSymbol(symbol);
        
;    });
}

function setSymbols(keys, symbols) {
    keys.forEach((el, i) => {
        el.textContent = symbols[i];
    })
}

function addSymbol(symbol) {
    let textarea = document.querySelector('.input-field').value;
    if (SPECIAL_KEYS.indexOf(symbol) >= 0) {
        symbol = '';
    } else if (symbol === 'Backspace') {
        textarea = textarea.slice(0, -1);
    } else if (symbol === 'Enter') {
        textarea += '\n';
    } else {
        textarea += symbol;
    }
    
    document.querySelector('.input-field').value = textarea;

}

window.onload = () => {
    createDOM();
    const KEYS = document.querySelectorAll('.key');
    setSymbols(KEYS, KEY_EN);
    clickKey(KEYS);
    pressKey(KEYS);
    
    
};


// Выровнять символы на кнопках ++++
// Анимация нажатия и наведения на клавищи ++++
// Анимация клавиш при нажатии на клавиатуре ++++
// Функция шифт +++
// Функция капслок +++

// Сделать переключение на русский язык

// нажатие кнопок (или клики) выводит символы в поле текстареа
// Клавиши энтер и бэкспейс
// навигация по тексту стрелочками
// как убирать сразу много символов не отпуская бэкспейс


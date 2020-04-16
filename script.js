const KEY_CODES = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

const SPECIAL_KEYS = ['CapsLock', 'Shift', 'Ctrl', 'Option', 'Alt', 'Control', 'Meta', 'Command', '←', '↑', '↓', '→', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];

const TEXT_KEYS = [['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\'', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\\', 'Enter', 'Shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Ctrl', 'Option', 'Command', ' ', 'Command', 'Option', '←', '↑', '↓', '→'], ['±', '!', '@', '#', '$', '%', 'ˆ', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '?', 'Enter', 'Shift', '˜', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '/', 'Shift', 'Ctrl', 'Option', 'Command', ' ', 'Command', 'Option', '←', '↑', '↓', '→'], ['>', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', '`', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'Shift', 'Ctrl', 'Option', 'Command', ' ', 'Command', 'Option', '←', '↑', '↓', '→'], ['<', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ё', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', '[', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', 'Shift', 'Ctrl', 'Option', 'Command', ' ', 'Command', 'Option', '←', '↑', '↓', '→']];

const [KEY_EN, KEY_UPPER_EN, KEY_RU, KEY_UPPER_RU] = TEXT_KEYS;

class Keyboard {
  constructor() {
    this.lang = localStorage.getItem('language') || 'EN';
    this.upper = localStorage.getItem('upper') || false;
  }

  createDOM() {
    this.body = document.querySelector('body');
    this.keyboardDiv = document.createElement('div');
    this.keyboardDiv.className = 'keyboard';

    KEY_CODES.forEach((el) => {
      const keyDiv = document.createElement('div');
      keyDiv.className = 'key';
      if (el === 'Backspace' || el === 'Tab') {
        keyDiv.classList.add('key-l', 'small-font');
      } else if (el === 'Space') {
        keyDiv.classList.add('key-space');
      } else if (el === 'CapsLock') {
        keyDiv.classList.add('key-xl', 'small-font', 'caps');
      } else if (el === 'ShiftLeft' || el === 'ShiftRight' || el === 'Enter') {
        keyDiv.classList.add('key-xl', 'small-font');
      } else if (el === 'MetaLeft' || el === 'MetaRight') {
        keyDiv.classList.add('key-m', 'small-font');
      } else if (el === 'ControlLeft' || el === 'AltLeft' || el === 'AltRight') {
        keyDiv.classList.add('small-font');
      }
      this.keyboardDiv.append(keyDiv);
    });

    this.tip = document.createElement('div');
    this.tip.className = 'tip';
    this.tip.textContent = 'Change language: Shift + Option || Shift + Alt';

    this.container = document.createElement('div');
    this.container.className = 'container';

    this.input = document.createElement('textarea');
    this.input.className = 'input-field';
    this.input.setAttribute('autofocus', 'autofocus');
    this.input.addEventListener('keydown', (evt) => evt.preventDefault());
    this.input.addEventListener('blur', (event) => {
      event.target.focus();
    });

    this.container.append(this.input);
    this.container.append(this.keyboardDiv);
    this.container.append(this.tip);
    this.body.append(this.container);
  }

  static setSymbols(keys, symbols) {
    keys.forEach((el, i) => {
      el.textContent = symbols[i]; // eslint-disable-line no-param-reassign
    });
  }

  static addSymbol(symbol) {
    let textarea = document.querySelector('.input-field').value;
    if (SPECIAL_KEYS.indexOf(symbol) >= 0) {
      textarea += '';
    } else if (symbol === 'Backspace') {
      textarea = textarea.slice(0, -1);
    } else if (symbol === 'Enter') {
      textarea += '\n';
    } else if (symbol === 'Tab') {
      textarea += '  ';
    } else {
      textarea += symbol;
    }
    document.querySelector('.input-field').value = textarea;
  }

  clickKey(keys) {
    const keyboard = document.querySelector('.keyboard');
    keyboard.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('key')) {
        if (evt.target.textContent === 'CapsLock') {
          evt.target.classList.toggle('active');
          if (evt.target.classList.contains('active')) {
            if (this.lang === 'EN') {
              Keyboard.setSymbols(keys, KEY_UPPER_EN);
            } else {
              Keyboard.setSymbols(keys, KEY_UPPER_RU);
            }
          } else if (this.lang === 'EN') {
            Keyboard.setSymbols(keys, KEY_EN);
          } else {
            Keyboard.setSymbols(keys, KEY_RU);
          }
        } else {
          evt.target.classList.add('active');
          setTimeout(() => { evt.target.classList.remove('active'); }, 200);
          Keyboard.addSymbol(evt.target.textContent);
        }
      }
    });
  }

  pressKey(keys) {
    document.addEventListener('keydown', (evt) => {
      const keyIndex = KEY_CODES.indexOf(evt.code);
      if (KEY_CODES.indexOf(evt.code) >= 0 && evt.code !== 'CapsLock') {
        keys[keyIndex].classList.add('active');
      }

      if (evt.code === 'CapsLock') {
        keys[keyIndex].classList.toggle('active');
      }

      if (evt.altKey && evt.shiftKey) {
        this.lang = (this.lang === 'EN') ? this.lang = 'RU' : 'EN';
        localStorage.setItem('language', this.lang);
      }

      if (evt.shiftKey) {
        if (this.lang === 'EN') {
          Keyboard.setSymbols(keys, KEY_UPPER_EN);
        } else {
          Keyboard.setSymbols(keys, KEY_UPPER_RU);
        }
      }

      if (evt.getModifierState('CapsLock')) {
        this.upper = true;
        localStorage.setItem('upper', this.upper);
        if (evt.shiftKey) {
          if (this.lang === 'EN') {
            Keyboard.setSymbols(keys, KEY_EN);
          } else {
            Keyboard.setSymbols(keys, KEY_RU);
          }
        } else if (this.lang === 'EN') {
          Keyboard.setSymbols(keys, KEY_UPPER_EN);
        } else {
          Keyboard.setSymbols(keys, KEY_UPPER_RU);
        }
      } else {
        this.upper = false;
        localStorage.setItem('upper', this.upper);
      }

      if (evt.repeat) {
        if (keys[keyIndex]) {
          Keyboard.addSymbol(keys[keyIndex].textContent);
        }
      } else if (keys[keyIndex]) {
        Keyboard.addSymbol(keys[keyIndex].textContent);
      }
    });

    document.addEventListener('keyup', (evt) => {
      if (evt.code === 'Tab') {
        evt.preventDefault();
      }

      if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') {
        if (evt.getModifierState('CapsLock')) {
          if (this.lang === 'EN') {
            Keyboard.setSymbols(keys, KEY_UPPER_EN);
          } else {
            Keyboard.setSymbols(keys, KEY_UPPER_RU);
          }
        } else if (this.lang === 'EN') {
          Keyboard.setSymbols(keys, KEY_EN);
        } else {
          Keyboard.setSymbols(keys, KEY_RU);
        }
      }

      if (evt.getModifierState('CapsLock') === false) {
        if (!evt.shiftKey) {
          if (this.lang === 'EN') {
            Keyboard.setSymbols(keys, KEY_EN);
          } else {
            Keyboard.setSymbols(keys, KEY_RU);
          }
        } else if (this.lang === 'EN') {
          Keyboard.setSymbols(keys, KEY_UPPER_EN);
        } else {
          Keyboard.setSymbols(keys, KEY_UPPER_RU);
        }
      }
      const keyIndex = KEY_CODES.indexOf(evt.code);
      if (KEY_CODES.indexOf(evt.code) >= 0) {
        keys[keyIndex].classList.remove('active');
      }
    });
  }
}

function getLocalStorageInfo(keys) {
  if (localStorage.getItem('language') === 'EN') {
    if (localStorage.getItem('upper') === 'true') {
      Keyboard.setSymbols(keys, KEY_UPPER_EN);
      document.querySelector('.caps').classList.add('active');
    } else {
      Keyboard.setSymbols(keys, KEY_EN);
    }
  } else if (localStorage.getItem('upper') === 'true') {
    Keyboard.setSymbols(keys, KEY_UPPER_RU);
    document.querySelector('.caps').classList.add('active');
  } else {
    Keyboard.setSymbols(keys, KEY_RU);
  }
}

window.onload = () => {
  const keyboard = new Keyboard();
  keyboard.createDOM();

  const KEYS = document.querySelectorAll('.key');
  getLocalStorageInfo(KEYS);
  keyboard.clickKey(KEYS);
  keyboard.pressKey(KEYS);
};

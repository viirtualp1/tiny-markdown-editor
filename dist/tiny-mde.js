(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TinyMDE = {}));
})(this, (function (exports) { 'use strict';

  const svg = {
    blockquote: `<svg height="18" width="18"><rect width="5" height="5" x="3" y="4" ry="1"/><rect ry="1" y="4" x="10" height="5" width="5"/><path d="M8 6.999v3c0 1-1 3-1 3s-.331 1-1.331 1h-1c-1 0-.669-1-.669-1s1-2 1-3v-3zm7 0v3c0 1-1 3-1 3s-.331 1-1.331 1h-1c-1 0-.669-1-.669-1s1-2 1-3v-3z"/></svg>`,
    bold: `<svg height="18" width="18"><path d="M4 2a1 1 0 00-1 1v12a1 1 0 001 1h6c4 0 5-2 5-4 0-1.322-.434-2.636-1.885-3.381C13.772 7.885 14 6.945 14 6c0-2-1-4-5-4zm1 2h4c1.668 0 2.32.393 2.6.672.28.279.4.662.4 1.328s-.12 1.057-.4 1.338c-.275.274-1.014.646-2.6.662H5zm5 6c1.666.005 2.318.388 2.596.666.277.278.404.667.404 1.334s-.127 1.06-.404 1.338c-.278.278-.93.66-2.596.662l-4.992.004L5 10z"/></svg>`,
    clear_formatting: `<svg height="18" width="18"><path d="M11.03 1a1 1 0 00-.74.3l-9 9a1 1 0 000 1.4l4 4A1 1 0 006 16h2a1 1 0 00.7-.3l8-8a1 1 0 000-1.4l-5-5a1 1 0 00-.67-.3zM8.7 5.7l3.58 3.6L7.6 14H6.4l-3-3 5.3-5.3z"/><rect ry=".8" rx=".8" y="14" x="16" height="2" width="2"/><rect width="2" height="2" x="13" y="14" rx=".8" ry=".8"/><rect ry=".8" rx=".8" y="14" x="10" height="2" width="2"/></svg>`,
    code: `<svg height="18" width="18"><path d="M13.5 2.994a.5.5 0 00-.5.5.5.5 0 000 .034V4.53a5.993 5.993 0 00-7.451-.445A6 6 0 1012.45 13.9a5.99 5.99 0 001.346-1.334.5.5 0 00.096-.101.5.5 0 00-.12-.698.5.5 0 00-.697.12l-.004-.005a5 5 0 01-1.197 1.2 5 5 0 111.215-6.965.5.5 0 00.697.12.5.5 0 00.211-.44V4.745H14V3.493a.5.5 0 00-.5-.5z"/></svg>`,
    h1: `<svg height="18" width="18"><path d="M3 2s0-1 1-1h1c1 0 1 1 1 1v6h6V2s0-1 1-1h1c1 0 1 1 1 1v14s0 1-1 1h-1c-1 0-1-1-1-1v-6H6v6s0 1-1 1H4c-1 0-1-1-1-1z"/></svg>`,
    h2: `<svg height="18" width="18"><path d="M4 2s0-1 1-1 1 1 1 1v6c1-1 2-1 4-1 3 0 4 2 4 4v5s0 1-1 1-1-1-1-1v-5c0-1.094-1-2-2-2-2 0-3 0-4 2v5s0 1-1 1-1-1-1-1z"/></svg>`,
    hr: `<svg height="18" width="18"><rect ry="1" y="8" height="2" width="18" style="font-variation-settings:normal;marker:none"/></svg>`,
    image: `<svg height="18" width="18"><path d="M1 2v14h16V2H1zm2 2h12v7l-3-3-4 4-2-2-3 3V4z"/><circle r="1.5" cy="6.5" cx="5.5"/></svg>`,
    italic: `<svg height="18" width="18"><path d="M9 2a1 1 0 000 2L7 14a1 1 0 100 2h2a1 1 0 000-2l2-10a1 1 0 100-2z"/></svg>`,
    link: `<svg height="18" width="18"><path d="M9.07 5.18a3.9 3.9 0 00-1.52.43C6.31 6.22 5.3 7.29 4.3 8.29c-1 1-2.07 2.02-2.68 3.26-.31.62-.5 1.33-.41 2.07.09.75.48 1.47 1.1 2.09.61.61 1.33 1 2.08 1.1.74.09 1.45-.1 2.07-.42 1.24-.61 2.26-1.68 3.26-2.68.46-.47.94-.94 1.39-1.44l-.43.26c-.68.34-1.49.56-2.36.46-.2-.03-.4-.08-.6-.14-.79.76-1.55 1.45-2.16 1.76-.38.19-.67.24-.92.21-.26-.03-.54-.14-.92-.53-.39-.38-.5-.66-.53-.91-.03-.26.02-.55.21-.93.39-.76 1.32-1.74 2.32-2.74 1-1 1.98-1.93 2.74-2.32.38-.19.67-.24.93-.21.25.03.53.14.91.53.39.38.5.66.53.92v.06l1.12-1.06.44-.47c-.18-.3-.4-.6-.67-.87-.62-.61-1.34-1-2.09-1.1a3.08 3.08 0 00-.55-.01z"/><path d="M13.07.86a3.9 3.9 0 00-1.52.43c-1.24.62-2.26 1.69-3.26 2.69-.46.47-.94.94-1.39 1.43.15-.08.28-.18.43-.25a4.4 4.4 0 012.36-.46c.2.02.4.07.6.14.79-.77 1.55-1.46 2.16-1.76.38-.19.67-.25.93-.21.25.03.53.14.91.52.39.38.5.66.53.92.03.26-.02.55-.21.93-.39.76-1.32 1.74-2.32 2.74-1 1-1.98 1.93-2.74 2.31-.38.2-.67.25-.93.22-.25-.04-.53-.15-.91-.53-.39-.38-.5-.66-.53-.92V9c-.36.33-.73.67-1.12 1.06l-.43.46c.17.3.4.6.66.87.62.62 1.34 1 2.08 1.1.75.1 1.46-.1 2.08-.41 1.24-.62 2.26-1.69 3.26-2.69s2.07-2.02 2.68-3.26c.31-.62.5-1.32.41-2.07a3.63 3.63 0 00-1.1-2.08c-.61-.62-1.33-1-2.07-1.1a3.08 3.08 0 00-.56-.02z"/></svg>`,
    ol: `<svg height="18" width="18"><path d="M1.5 7a.5.5 0 100 1h1a.5.5 0 01.5.5c0 .164-.08.31-.14.355l-1.655 1.25A.492.492 0 001 10.5a.5.5 0 00.5.5h2a.5.5 0 000-1H3l.398-.299A1.5 1.5 0 002.5 7z"/><path d="M1.5 12c-.667 0-.667 1 0 1h1.25c.333 0 .333.5 0 .5H2.5c-.667 0-.667 1 0 1h.25c.333 0 .333.5 0 .5H1.5c-.667 0-.667 1 0 1h1c.398 0 .78-.131 1.06-.365.282-.235.44-.554.44-.885a1.121 1.121 0 00-.303-.75c.191-.204.3-.47.303-.75 0-.332-.158-.651-.44-.885-.3-.241-.675-.37-1.06-.365z"/><rect y="13" x="6" height="2" width="12" ry="1"/><rect ry="1" width="12" height="2" x="6" y="8"/><rect y="3" x="6" height="2" width="12" ry="1"/><path d="M1.5 2a.5.5 0 100 1H2v2h-.5a.5.5 0 100 1h2a.5.5 0 100-1H3V2.5c0-.277-.223-.5-.5-.5z"/></svg>`,
    strikethrough: `<svg width="18" height="18"><path d="M10 2C6 2 4 4 4 6c0 .338.08.672.193 1h2.34C6.113 6.629 6 6.295 6 6c0-.334.117-.725.691-1.154C7.265 4.416 8.331 4 10 4h3a1 1 0 000-2zm1.477 9c.413.368.523.706.523 1 0 .334-.127.712-.701 1.143-.575.43-1.632.85-3.299.857l-1.006.007V14H5a1 1 0 000 2h3c4 0 6-2 6-4 0-.338-.081-.672-.195-1z"/><rect ry="1" y="8" x="1" height="2" width="16"/></svg>`,
    ul: `<svg height="18" width="18"><circle cx="2" cy="9" r="2"/><circle cy="4" cx="2" r="2"/><rect y="3" x="6" height="2" width="12" ry="1"/><circle cx="2" cy="14" r="2"/><rect ry="1" width="12" height="2" x="6" y="8"/><rect y="13" x="6" height="2" width="12" ry="1"/></svg>`
  };

  const isMacLike = /(Mac|iPhone|iPod|iPad)/i.test(typeof navigator !== "undefined" ? navigator.platform : "");
  const DefaultCommands = {
    'bold': {
      name: 'bold',
      action: 'bold',
      innerHTML: svg.bold,
      title: 'Bold',
      hotkey: 'Mod-B'
    },
    'italic': {
      name: 'italic',
      action: 'italic',
      innerHTML: svg.italic,
      title: 'Italic',
      hotkey: 'Mod-I'
    },
    'strikethrough': {
      name: 'strikethrough',
      action: 'strikethrough',
      innerHTML: svg.strikethrough,
      title: 'Strikethrough',
      hotkey: 'Mod2-Shift-5'
    },
    'code': {
      name: 'code',
      action: 'code',
      innerHTML: svg.code,
      title: 'Format as code'
    },
    'h1': {
      name: 'h1',
      action: 'h1',
      innerHTML: svg.h1,
      title: 'Level 1 heading',
      hotkey: 'Mod-Shift-1'
    },
    'h2': {
      name: 'h2',
      action: 'h2',
      innerHTML: svg.h2,
      title: 'Level 2 heading',
      hotkey: 'Mod-Shift-2'
    },
    'ul': {
      name: 'ul',
      action: 'ul',
      innerHTML: svg.ul,
      title: 'Bulleted list'
    },
    'ol': {
      name: 'ol',
      action: 'ol',
      innerHTML: svg.ol,
      title: 'Numbered list'
    },
    'blockquote': {
      name: 'blockquote',
      action: 'blockquote',
      innerHTML: svg.blockquote,
      title: 'Quote',
      hotkey: 'Mod2-Shift-Q'
    },
    'insertLink': {
      name: 'insertLink',
      action: editor => {
        if (editor.isInlineFormattingAllowed()) editor.wrapSelection('[', ']()');
      },
      enabled: (editor, focus, anchor) => editor.isInlineFormattingAllowed(focus, anchor) ? false : null,
      innerHTML: svg.link,
      title: 'Insert link',
      hotkey: 'Mod-K'
    },
    'insertImage': {
      name: 'insertImage',
      action: editor => {
        if (editor.isInlineFormattingAllowed()) editor.wrapSelection('![', ']()');
      },
      enabled: (editor, focus, anchor) => editor.isInlineFormattingAllowed(focus, anchor) ? false : null,
      innerHTML: svg.image,
      title: 'Insert image',
      hotkey: 'Mod2-Shift-I'
    },
    'hr': {
      name: 'hr',
      action: editor => editor.paste('\n***\n'),
      enabled: () => false,
      innerHTML: svg.hr,
      title: 'Insert horizontal line',
      hotkey: 'Mod2-Shift-L'
    }
  };
  class CommandBar {
    constructor(props) {
      this.e = null;
      this.editor = null;
      this.commands = [];
      this.buttons = {};
      this.state = {};
      this.hotkeys = [];
      let element = props.element;
      if (element && !element.tagName) {
        element = document.getElementById(props.element);
      }
      if (!element) {
        element = document.body;
      }
      this.createCommandBarElement(element, props.commands || ['bold', 'italic', 'strikethrough', '|', 'code', '|', 'h1', 'h2', '|', 'ul', 'ol', '|', 'blockquote', 'hr', '|', 'insertLink', 'insertImage']);
      document.addEventListener('keydown', e => this.handleKeydown(e));
      if (props.editor) this.setEditor(props.editor);
    }
    createCommandBarElement(parentElement, commands) {
      this.e = document.createElement('div');
      this.e.className = 'TMCommandBar';
      for (let command of commands) {
        if (command == '|') {
          let el = document.createElement('div');
          el.className = 'TMCommandDivider';
          this.e.appendChild(el);
        } else {
          let commandName;
          if (typeof command == "string") {
            // Reference to default command

            if (DefaultCommands[command]) {
              commandName = command;
              this.commands[commandName] = DefaultCommands[commandName];
            } else {
              continue;
            }
          } else if (typeof command == "object" && command.name) {
            commandName = command.name;
            this.commands[commandName] = {};
            if (DefaultCommands[commandName]) Object.assign(this.commands[commandName], DefaultCommands[commandName]);
            Object.assign(this.commands[commandName], command);
          } else {
            continue;
          }
          let title = this.commands[commandName].title || commandName;
          if (this.commands[commandName].hotkey) {
            const keys = this.commands[commandName].hotkey.split('-');
            // construct modifiers
            let modifiers = [];
            let modifierexplanation = [];
            for (let i = 0; i < keys.length - 1; i++) {
              switch (keys[i]) {
                case 'Ctrl':
                  modifiers.push('ctrlKey');
                  modifierexplanation.push('Ctrl');
                  break;
                case 'Cmd':
                  modifiers.push('metaKey');
                  modifierexplanation.push('⌘');
                  break;
                case 'Alt':
                  modifiers.push('altKey');
                  modifierexplanation.push('Alt');
                  break;
                case 'Option':
                  modifiers.push('altKey');
                  modifierexplanation.push('⌥');
                  break;
                case 'Win':
                  modifiers.push('metaKey');
                  modifierexplanation.push('⊞ Win');
                  break;
                case 'Shift':
                  modifiers.push('shiftKey');
                  modifierexplanation.push('⇧');
                  break;
                case 'Mod':
                  // Mod is a convenience mechanism: Ctrl on Windows, Cmd on Mac
                  if (isMacLike) {
                    modifiers.push('metaKey');
                    modifierexplanation.push('⌘');
                  } else {
                    modifiers.push('ctrlKey');
                    modifierexplanation.push('Ctrl');
                  }
                  break;
                case 'Mod2':
                  modifiers.push('altKey');
                  if (isMacLike) modifierexplanation.push('⌥');else modifierexplanation.push('Alt');
                  break;
                // Mod2 is a convenience mechanism: Alt on Windows, Option on Mac
              }
            }

            modifierexplanation.push(keys[keys.length - 1]);
            let hotkey = {
              modifiers: modifiers,
              command: commandName
            };
            // TODO Right now this is working only for letters and numbers
            if (keys[keys.length - 1].match(/^[0-9]$/)) {
              hotkey.code = `Digit${keys[keys.length - 1]}`;
            } else {
              hotkey.key = keys[keys.length - 1].toLowerCase();
            }
            this.hotkeys.push(hotkey);
            title = title.concat(` (${modifierexplanation.join('+')})`);
          }
          this.buttons[commandName] = document.createElement('div');
          this.buttons[commandName].className = 'TMCommandButton TMCommandButton_Disabled';
          this.buttons[commandName].title = title;
          this.buttons[commandName].innerHTML = this.commands[commandName].innerHTML;
          this.buttons[commandName].addEventListener('mousedown', e => this.handleClick(commandName, e));
          this.e.appendChild(this.buttons[commandName]);
        }
      }
      parentElement.appendChild(this.e);
    }
    handleClick(commandName, event) {
      if (!this.editor) return;
      event.preventDefault();
      if (typeof this.commands[commandName].action == "string") {
        if (this.state[commandName] === false) this.editor.setCommandState(commandName, true);else this.editor.setCommandState(commandName, false);
      } else if (typeof this.commands[commandName].action == "function") {
        this.commands[commandName].action(this.editor);
      }
    }
    setEditor(editor) {
      this.editor = editor;
      editor.addEventListener('selection', e => this.handleSelection(e));
    }
    handleSelection(event) {
      if (event.commandState) {
        for (let command in this.commands) {
          if (event.commandState[command] === undefined) {
            if (this.commands[command].enabled) this.state[command] = this.commands[command].enabled(this.editor, event.focus, event.anchor);else this.state[command] = event.focus ? false : null;
          } else {
            this.state[command] = event.commandState[command];
          }
          if (this.state[command] === true) {
            this.buttons[command].className = 'TMCommandButton TMCommandButton_Active';
          } else if (this.state[command] === false) {
            this.buttons[command].className = 'TMCommandButton TMCommandButton_Inactive';
          } else {
            this.buttons[command].className = 'TMCommandButton TMCommandButton_Disabled';
          }
        }
      }
    }
    handleKeydown(event) {
      outer: for (let hotkey of this.hotkeys) {
        if (hotkey.key && event.key.toLowerCase() == hotkey.key || hotkey.code && event.code == hotkey.code) {
          // Key matches hotkey. Look for any required modifier that wasn't pressed
          for (let modifier of hotkey.modifiers) {
            if (!event[modifier]) continue outer;
          }
          // Everything matches.
          this.handleClick(hotkey.command, event);
          return;
        }
      }
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var check = function (it) {
    return it && it.Math === Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$b =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || commonjsGlobal || Function('return this')();

  var fails$7 = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$6 = fails$7;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$6(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] !== 7;
  });

  var makeBuiltInExports = {};
  var makeBuiltIn$2 = {
    get exports(){ return makeBuiltInExports; },
    set exports(v){ makeBuiltInExports = v; },
  };

  var fails$5 = fails$7;
  var functionBindNative = !fails$5(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = function () {/* empty */}.bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$1 = functionBindNative;
  var FunctionPrototype$1 = Function.prototype;
  var call$3 = FunctionPrototype$1.call;
  var uncurryThisWithBind = NATIVE_BIND$1 && FunctionPrototype$1.bind.bind(call$3, call$3);
  var functionUncurryThis = NATIVE_BIND$1 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$3.apply(fn, arguments);
    };
  };

  var documentAll$2 = typeof document == 'object' && document.all;

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;
  var documentAll_1 = {
    all: documentAll$2,
    IS_HTMLDDA: IS_HTMLDDA
  };

  var $documentAll$1 = documentAll_1;
  var documentAll$1 = $documentAll$1.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable$8 = $documentAll$1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$2 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$1 = isNullOrUndefined$2;
  var $TypeError$5 = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$1 = function (it) {
    if (isNullOrUndefined$1(it)) throw new $TypeError$5("Can't call method on " + it);
    return it;
  };

  var requireObjectCoercible = requireObjectCoercible$1;
  var $Object$1 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$1 = function (argument) {
    return $Object$1(requireObjectCoercible(argument));
  };

  var uncurryThis$4 = functionUncurryThis;
  var toObject = toObject$1;
  var hasOwnProperty = uncurryThis$4({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
  };

  var DESCRIPTORS$6 = descriptors;
  var hasOwn$3 = hasOwnProperty_1;
  var FunctionPrototype = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$6 && Object.getOwnPropertyDescriptor;
  var EXISTS$1 = hasOwn$3(FunctionPrototype, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS$1 && function something() {/* empty */}.name === 'something';
  var CONFIGURABLE$1 = EXISTS$1 && (!DESCRIPTORS$6 || DESCRIPTORS$6 && getDescriptor(FunctionPrototype, 'name').configurable);
  var functionName = {
    EXISTS: EXISTS$1,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE$1
  };

  var global$a = global$b;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$2 = Object.defineProperty;
  var defineGlobalProperty$1 = function (key, value) {
    try {
      defineProperty$2(global$a, key, {
        value: value,
        configurable: true,
        writable: true
      });
    } catch (error) {
      global$a[key] = value;
    }
    return value;
  };

  var global$9 = global$b;
  var defineGlobalProperty = defineGlobalProperty$1;
  var SHARED = '__core-js_shared__';
  var store$3 = global$9[SHARED] || defineGlobalProperty(SHARED, {});
  var sharedStore = store$3;

  var uncurryThis$3 = functionUncurryThis;
  var isCallable$7 = isCallable$8;
  var store$2 = sharedStore;
  var functionToString = uncurryThis$3(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$7(store$2.inspectSource)) {
    store$2.inspectSource = function (it) {
      return functionToString(it);
    };
  }
  var inspectSource$1 = store$2.inspectSource;

  var global$8 = global$b;
  var isCallable$6 = isCallable$8;
  var WeakMap$1 = global$8.WeakMap;
  var weakMapBasicDetection = isCallable$6(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var isCallable$5 = isCallable$8;
  var $documentAll = documentAll_1;
  var documentAll = $documentAll.all;
  var isObject$5 = $documentAll.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable$5(it) || it === documentAll;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable$5(it);
  };

  var objectDefineProperty = {};

  var global$7 = global$b;
  var isObject$4 = isObject$5;
  var document$1 = global$7.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject$4(document$1) && isObject$4(document$1.createElement);
  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$5 = descriptors;
  var fails$4 = fails$7;
  var createElement = documentCreateElement;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$5 && !fails$4(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a !== 7;
  });

  var DESCRIPTORS$4 = descriptors;
  var fails$3 = fails$7;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$4 && fails$3(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () {/* empty */}, 'prototype', {
      value: 42,
      writable: false
    }).prototype !== 42;
  });

  var isObject$3 = isObject$5;
  var $String$3 = String;
  var $TypeError$4 = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$2 = function (argument) {
    if (isObject$3(argument)) return argument;
    throw new $TypeError$4($String$3(argument) + ' is not an object');
  };

  var NATIVE_BIND = functionBindNative;
  var call$2 = Function.prototype.call;
  var functionCall = NATIVE_BIND ? call$2.bind(call$2) : function () {
    return call$2.apply(call$2, arguments);
  };

  var global$6 = global$b;
  var isCallable$4 = isCallable$8;
  var aFunction = function (argument) {
    return isCallable$4(argument) ? argument : undefined;
  };
  var getBuiltIn$1 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$6[namespace]) : global$6[namespace] && global$6[namespace][method];
  };

  var uncurryThis$2 = functionUncurryThis;
  var objectIsPrototypeOf = uncurryThis$2({}.isPrototypeOf);

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var global$5 = global$b;
  var userAgent = engineUserAgent;
  var process = global$5.process;
  var Deno = global$5.Deno;
  var versions = process && process.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;
  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }
  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */
  var V8_VERSION = engineV8Version;
  var fails$2 = fails$7;
  var global$4 = global$b;
  var $String$2 = global$4.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$2(function () {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String$2(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */
  var NATIVE_SYMBOL$1 = symbolConstructorDetection;
  var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

  var getBuiltIn = getBuiltIn$1;
  var isCallable$3 = isCallable$8;
  var isPrototypeOf = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
  var $Object = Object;
  var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable$3($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
  };

  var $String$1 = String;
  var tryToString$1 = function (argument) {
    try {
      return $String$1(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$2 = isCallable$8;
  var tryToString = tryToString$1;
  var $TypeError$3 = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$1 = function (argument) {
    if (isCallable$2(argument)) return argument;
    throw new $TypeError$3(tryToString(argument) + ' is not a function');
  };

  var aCallable = aCallable$1;
  var isNullOrUndefined = isNullOrUndefined$2;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$1 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
  };

  var call$1 = functionCall;
  var isCallable$1 = isCallable$8;
  var isObject$2 = isObject$5;
  var $TypeError$2 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$1(fn = input.toString) && !isObject$2(val = call$1(fn, input))) return val;
    if (isCallable$1(fn = input.valueOf) && !isObject$2(val = call$1(fn, input))) return val;
    if (pref !== 'string' && isCallable$1(fn = input.toString) && !isObject$2(val = call$1(fn, input))) return val;
    throw new $TypeError$2("Can't convert object to primitive value");
  };

  var sharedExports = {};
  var shared$3 = {
    get exports(){ return sharedExports; },
    set exports(v){ sharedExports = v; },
  };

  var store$1 = sharedStore;
  (shared$3.exports = function (key, value) {
    return store$1[key] || (store$1[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.33.0',
    mode: 'global',
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var uncurryThis$1 = functionUncurryThis;
  var id = 0;
  var postfix = Math.random();
  var toString = uncurryThis$1(1.0.toString);
  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
  };

  var global$3 = global$b;
  var shared$2 = sharedExports;
  var hasOwn$2 = hasOwnProperty_1;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;
  var Symbol$1 = global$3.Symbol;
  var WellKnownSymbolsStore = shared$2('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;
  var wellKnownSymbol$1 = function (name) {
    if (!hasOwn$2(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$2(Symbol$1, name) ? Symbol$1[name] : createWellKnownSymbol('Symbol.' + name);
    }
    return WellKnownSymbolsStore[name];
  };

  var call = functionCall;
  var isObject$1 = isObject$5;
  var isSymbol$1 = isSymbol$2;
  var getMethod = getMethod$1;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol = wellKnownSymbol$1;
  var $TypeError$1 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$1(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call(exoticToPrim, input, pref);
      if (!isObject$1(result) || isSymbol$1(result)) return result;
      throw new $TypeError$1("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;
  var isSymbol = isSymbol$2;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$1 = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };

  var DESCRIPTORS$3 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var anObject$1 = anObject$2;
  var toPropertyKey = toPropertyKey$1;
  var $TypeError = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$3 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject$1(O);
    P = toPropertyKey(P);
    anObject$1(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    }
    return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject$1(O);
    P = toPropertyKey(P);
    anObject$1(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) {/* empty */}
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var createPropertyDescriptor$1 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var DESCRIPTORS$2 = descriptors;
  var definePropertyModule = objectDefineProperty;
  var createPropertyDescriptor = createPropertyDescriptor$1;
  var createNonEnumerableProperty$1 = DESCRIPTORS$2 ? function (object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var shared$1 = sharedExports;
  var uid = uid$2;
  var keys = shared$1('keys');
  var sharedKey$1 = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$2 = global$b;
  var isObject = isObject$5;
  var createNonEnumerableProperty = createNonEnumerableProperty$1;
  var hasOwn$1 = hasOwnProperty_1;
  var shared = sharedStore;
  var sharedKey = sharedKey$1;
  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$1 = global$2.TypeError;
  var WeakMap = global$2.WeakMap;
  var set, get, has;
  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };
  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw new TypeError$1('Incompatible receiver, ' + TYPE + ' required');
      }
      return state;
    };
  };
  if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set = function (it, metadata) {
      if (store.has(it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get = function (it) {
      return store.get(it) || {};
    };
    has = function (it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey('state');
    set = function (it, metadata) {
      if (hasOwn$1(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$1(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$1(it, STATE);
    };
  }
  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var uncurryThis = functionUncurryThis;
  var fails$1 = fails$7;
  var isCallable = isCallable$8;
  var hasOwn = hasOwnProperty_1;
  var DESCRIPTORS$1 = descriptors;
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
  var inspectSource = inspectSource$1;
  var InternalStateModule = internalState;
  var enforceInternalState = InternalStateModule.enforce;
  var getInternalState = InternalStateModule.get;
  var $String = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$1 = Object.defineProperty;
  var stringSlice = uncurryThis(''.slice);
  var replace = uncurryThis(''.replace);
  var join = uncurryThis([].join);
  var CONFIGURABLE_LENGTH = DESCRIPTORS$1 && !fails$1(function () {
    return defineProperty$1(function () {/* empty */}, 'length', {
      value: 8
    }).length !== 8;
  });
  var TEMPLATE = String(String).split('String');
  var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
    if (stringSlice($String(name), 0, 7) === 'Symbol(') {
      name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      if (DESCRIPTORS$1) defineProperty$1(value, 'name', {
        value: name,
        configurable: true
      });else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
      defineProperty$1(value, 'length', {
        value: options.arity
      });
    }
    try {
      if (options && hasOwn(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$1) defineProperty$1(value, 'prototype', {
          writable: false
        });
        // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) {/* empty */}
    var state = enforceInternalState(value);
    if (!hasOwn(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    }
    return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$1(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
  }, 'toString');

  var makeBuiltIn = makeBuiltInExports;
  var defineProperty = objectDefineProperty;
  var defineBuiltInAccessor$1 = function (target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, {
      getter: true
    });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, {
      setter: true
    });
    return defineProperty.f(target, name, descriptor);
  };

  var anObject = anObject$2;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.unicodeSets) result += 'v';
    if (that.sticky) result += 'y';
    return result;
  };

  var global$1 = global$b;
  var DESCRIPTORS = descriptors;
  var defineBuiltInAccessor = defineBuiltInAccessor$1;
  var regExpFlags = regexpFlags;
  var fails = fails$7;

  // babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
  var RegExp$1 = global$1.RegExp;
  var RegExpPrototype = RegExp$1.prototype;
  var FORCED = DESCRIPTORS && fails(function () {
    var INDICES_SUPPORT = true;
    try {
      RegExp$1('.', 'd');
    } catch (error) {
      INDICES_SUPPORT = false;
    }
    var O = {};
    // modern V8 bug
    var calls = '';
    var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';
    var addGetter = function (key, chr) {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty(O, key, {
        get: function () {
          calls += chr;
          return true;
        }
      });
    };
    var pairs = {
      dotAll: 's',
      global: 'g',
      ignoreCase: 'i',
      multiline: 'm',
      sticky: 'y'
    };
    if (INDICES_SUPPORT) pairs.hasIndices = 'd';
    for (var key in pairs) addGetter(key, pairs[key]);

    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var result = Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call(O);
    return result !== expected || calls !== expected;
  });

  // `RegExp.prototype.flags` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  if (FORCED) defineBuiltInAccessor(RegExpPrototype, 'flags', {
    configurable: true,
    get: regExpFlags
  });

  // const replacements = {
  //   ASCIIPunctuation: '!"#$%&\'()*+,\\-./:;<=>?@\\[\\]^_`{|}~',
  //   TriggerChars: '`_\*\[\]\(\)',
  //   Scheme: `[A-Za-z][A-Za-z0-9\+\.\-]{1,31}`,
  //   Email: `[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*`, // From CommonMark spec

  // }
  const replacements = {
    ASCIIPunctuation: /[!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~\\]/,
    NotTriggerChar: /[^`_*[\]()<>!~]/,
    Scheme: /[A-Za-z][A-Za-z0-9+.-]{1,31}/,
    Email: /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/,
    // From CommonMark spec
    HTMLOpenTag: /<HTMLTagName(?:HTMLAttribute)*\s*\/?>/,
    HTMLCloseTag: /<\/HTMLTagName\s*>/,
    HTMLTagName: /[A-Za-z][A-Za-z0-9-]*/,
    HTMLComment: /<!--(?:[^>-]|(?:[^>-](?:[^-]|-[^-])*[^-]))-->/,
    HTMLPI: /<\?(?:|.|(?:[^?]|\?[^>])*)\?>/,
    HTMLDeclaration: /<![A-Z]+\s[^>]*>/,
    HTMLCDATA: /<!\[CDATA\[.*?\]\]>/,
    HTMLAttribute: /\s+[A-Za-z_:][A-Za-z0-9_.:-]*(?:HTMLAttValue)?/,
    HTMLAttValue: /\s*=\s*(?:(?:'[^']*')|(?:"[^"]*")|(?:[^\s"'=<>`]+))/,
    KnownTag: /address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul/
  };

  // From CommonMark.js.
  const punctuationLeading = new RegExp(/^(?:[!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B])/);
  const punctuationTrailing = new RegExp(/(?:[!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B])$/);

  // export const inlineTriggerChars = new RegExp(`[${replacements.TriggerChars}]`);

  /**
   * This is CommonMark's block grammar, but we're ignoring nested blocks here.
   */
  const lineGrammar = {
    TMH1: {
      regexp: /^( {0,3}#\s)(.*?)((?:\s+#+\s*)?)$/,
      replacement: '<span class="TMMark TMMark_TMH1">$1</span>$$2<span class="TMMark TMMark_TMH1">$3</span>'
    },
    TMH2: {
      regexp: /^( {0,3}##\s)(.*?)((?:\s+#+\s*)?)$/,
      replacement: '<span class="TMMark TMMark_TMH2">$1</span>$$2<span class="TMMark TMMark_TMH2">$3</span>'
    },
    TMH3: {
      regexp: /^( {0,3}###\s)(.*?)((?:\s+#+\s*)?)$/,
      replacement: '<span class="TMMark TMMark_TMH3">$1</span>$$2<span class="TMMark TMMark_TMH3">$3</span>'
    },
    TMH4: {
      regexp: /^( {0,3}####\s)(.*?)((?:\s+#+\s*)?)$/,
      replacement: '<span class="TMMark TMMark_TMH4">$1</span>$$2<span class="TMMark TMMark_TMH4">$3</span>'
    },
    TMH5: {
      regexp: /^( {0,3}#####\s)(.*?)((?:\s+#+\s*)?)$/,
      replacement: '<span class="TMMark TMMark_TMH5">$1</span>$$2<span class="TMMark TMMark_TMH5">$3</span>'
    },
    TMH6: {
      regexp: /^( {0,3}######\s)(.*?)((?:\s+#+\s*)?)$/,
      replacement: '<span class="TMMark TMMark_TMH6">$1</span>$$2<span class="TMMark TMMark_TMH6">$3</span>'
    },
    TMBlockquote: {
      regexp: /^( {0,3}>[ ]?)(.*)$/,
      replacement: '<span class="TMMark TMMark_TMBlockquote">$1</span>$$2'
    },
    TMCodeFenceBacktickOpen: {
      regexp: /^( {0,3}(?<seq>````*)\s*)([^`]*?)(\s*)$/,
      replacement: '<span class="TMMark TMMark_TMCodeFenceBacktick">$1</span><span class="TMInfoString">$3</span>$4'
    },
    TMCodeFenceTildeOpen: {
      regexp: /^( {0,3}(?<seq>~~~~*)\s*)(.*?)(\s*)$/,
      replacement: '<span class="TMMark TMMark_TMCodeFenceTilde">$1</span><span class="TMInfoString">$3</span>$4'
    },
    TMCodeFenceBacktickClose: {
      regexp: /^( {0,3}(?<seq>````*))(\s*)$/,
      replacement: '<span class="TMMark TMMark_TMCodeFenceBacktick">$1</span>$3'
    },
    TMCodeFenceTildeClose: {
      regexp: /^( {0,3}(?<seq>~~~~*))(\s*)$/,
      replacement: '<span class="TMMark TMMark_TMCodeFenceTilde">$1</span>$3'
    },
    TMBlankLine: {
      regexp: /^([ \t]*)$/,
      replacement: '$0'
    },
    TMSetextH1Marker: {
      regexp: /^ {0,3}=+\s*$/,
      replacement: '<span class="TMMark TMMark_TMSetextH1Marker">$0</span>'
    },
    TMSetextH2Marker: {
      regexp: /^ {0,3}-+\s*$/,
      replacement: '<span class="TMMark TMMark_TMSetextH1Marker">$0</span>'
    },
    TMHR: {
      regexp: /^( {0,3}(\*[ \t]*\*[ \t]*\*[ \t*]*)|(-[ \t]*-[ \t]*-[ \t-]*)|(_[ \t]*_[ \t]*_[ \t_]*))$/,
      replacement: '<span class="TMMark TMMark_TMHR">$0</span>'
    },
    TMUL: {
      regexp: /^( {0,3}[+*-] {1,4})(.*)$/,
      replacement: '<span class="TMMark TMMark_TMUL">$1</span>$$2'
    },
    TMOL: {
      regexp: /^( {0,3}\d{1,9}[.)] {1,4})(.*)$/,
      replacement: '<span class="TMMark TMMark_TMOL">$1</span>$$2'
    },
    // TODO: This is currently preventing sublists (and any content within list items, really) from working
    TMIndentedCode: {
      regexp: /^( {4}|\t)(.*)$/,
      replacement: '<span class="TMMark TMMark_TMIndentedCode">$1</span>$2'
    },
    TMLinkReferenceDefinition: {
      // TODO: Link destination can't include unbalanced parantheses, but we just ignore that here
      regexp: /^( {0,3}\[\s*)([^\s\]](?:[^\]]|\\\])*?)(\s*\]:\s*)((?:[^\s<>]+)|(?:<(?:[^<>\\]|\\.)*>))?(\s*)((?:\((?:[^()\\]|\\.)*\))|(?:"(?:[^"\\]|\\.)*")|(?:'(?:[^'\\]|\\.)*'))?(\s*)$/,
      replacement: '<span class="TMMark TMMark_TMLinkReferenceDefinition">$1</span><span class="TMLinkLabel TMLinkLabel_Definition">$2</span><span class="TMMark TMMark_TMLinkReferenceDefinition">$3</span><span class="TMLinkDestination">$4</span>$5<span class="TMLinkTitle">$6</span>$7',
      labelPlaceholder: 2 // this defines which placeholder in the above regex is the link "label"
    }
  };

  /**
   * HTML blocks have multiple different classes of opener and closer. This array defines all the cases
   */
  var htmlBlockGrammar = [{
    start: /^ {0,3}<(?:script|pre|style)(?:\s|>|$)/i,
    end: /(?:<\/script>|<\/pre>|<\/style>)/i,
    paraInterrupt: true
  }, {
    start: /^ {0,3}<!--/,
    end: /-->/,
    paraInterrupt: true
  }, {
    start: /^ {0,3}<\?/,
    end: /\?>/,
    paraInterrupt: true
  }, {
    start: /^ {0,3}<![A-Z]/,
    end: />/,
    paraInterrupt: true
  }, {
    start: /^ {0,3}<!\[CDATA\[/,
    end: /\]\]>/,
    paraInterrupt: true
  }, {
    start: /^ {0,3}(?:<|<\/)(?:KnownTag)(?:\s|>|\/>|$)/i,
    end: false,
    paraInterrupt: true
  }, {
    start: /^ {0,3}(?:HTMLOpenTag|HTMLCloseTag)\s*$/,
    end: false,
    paraInterrupt: false
  }];

  /**
   * Structure of the object:
   * Top level entries are rules, each consisting of a regular expressions (in string format) as well as a replacement.
   * In the regular expressions, replacements from the object 'replacements' will be processed before compiling into the property regexp.
   */
  var inlineGrammar = {
    escape: {
      regexp: /^\\(ASCIIPunctuation)/,
      replacement: '<span class="TMMark TMMark_TMEscape">\\</span>$1'
    },
    code: {
      regexp: /^(`+)((?:[^`])|(?:[^`].*?[^`]))(\1)/,
      replacement: '<span class="TMMark TMMark_TMCode">$1</span><code class="TMCode">$2</code><span class="TMMark TMMark_TMCode">$3</span>'
    },
    autolink: {
      regexp: /^<((?:Scheme:[^\s<>]*)|(?:Email))>/,
      replacement: '<span class="TMMark TMMark_TMAutolink">&lt;</span><span class="TMAutolink">$1</span><span class="TMMark TMMark_TMAutolink">&gt;</span>'
    },
    html: {
      regexp: /^((?:HTMLOpenTag)|(?:HTMLCloseTag)|(?:HTMLComment)|(?:HTMLPI)|(?:HTMLDeclaration)|(?:HTMLCDATA))/,
      replacement: '<span class="TMHTML">$1</span>'
    },
    linkOpen: {
      regexp: /^\[/,
      replacement: ''
    },
    imageOpen: {
      regexp: /^!\[/,
      replacement: ''
    },
    linkLabel: {
      regexp: /^(\[\s*)([^\]]*?)(\s*\])/,
      replacement: '',
      labelPlaceholder: 2
    },
    default: {
      regexp: /^(.|(?:NotTriggerChar+))/,
      replacement: '$1'
    }
  };

  // Process replacements in regexps
  const replacementRegexp = new RegExp(Object.keys(replacements).join('|'));

  // Inline
  const inlineRules = [...Object.keys(inlineGrammar)];
  for (let rule of inlineRules) {
    let re = inlineGrammar[rule].regexp.source;
    // Replace while there is something to replace. This means it also works over multiple levels (replacements containing replacements)
    while (re.match(replacementRegexp)) {
      re = re.replace(replacementRegexp, string => {
        return replacements[string].source;
      });
    }
    inlineGrammar[rule].regexp = new RegExp(re, inlineGrammar[rule].regexp.flags);
  }

  // HTML Block (only opening rule is processed currently)
  for (let rule of htmlBlockGrammar) {
    let re = rule.start.source;
    // Replace while there is something to replace. This means it also works over multiple levels (replacements containing replacements)
    while (re.match(replacementRegexp)) {
      re = re.replace(replacementRegexp, string => {
        return replacements[string].source;
      });
    }
    rule.start = new RegExp(re, rule.start.flags);
  }

  /**
   * Escapes HTML special characters (<, >, and &) in the string.
   * @param {string} string The raw string to be escaped
   * @returns {string} The string, ready to be used in HTML
   */
  function htmlescape(string) {
    return (string ? string : '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  /**
   * Contains the commands that can be sent to the editor. Contains objects with a name representing the name of the command.
   * Each of the objects contains the following keys:
   *
   *   - type: Can be either inline (for inline formatting) or line (for block / line formatting).
   *   - className: Used to determine whether the command is active at a given position.
   *     For line formatting, this looks at the class of the line element. For inline elements, tries to find an enclosing element with that class.
   *   - set / unset: Contain instructions how to set and unset the command. For line type commands, both consist of a pattern and replacement that
   *     will be applied to each line (using String.replace). For inline type commands, the set object contains a pre and post string which will
   *     be inserted before and after the selection. The unset object contains a prePattern and a postPattern. Both should be regular expressions and
   *     they will be applied to the portion of the line before and after the selection (using String.replace, with an empty replacement string).
   */
  const commands = {
    // Replacements for unset for inline commands are '' by default
    bold: {
      type: 'inline',
      className: 'TMStrong',
      set: {
        pre: '**',
        post: '**'
      },
      unset: {
        prePattern: /(?:\*\*|__)$/,
        postPattern: /^(?:\*\*|__)/
      }
    },
    italic: {
      type: 'inline',
      className: 'TMEm',
      set: {
        pre: '__',
        post: '__'
      },
      unset: {
        prePattern: /__$/,
        postPattern: /^__/
      }
    },
    code: {
      type: 'inline',
      className: 'TMCode',
      set: {
        pre: '`',
        post: '`'
      },
      unset: {
        prePattern: /`+$/,
        postPattern: /^`+/
      } // FIXME this doesn't ensure balanced backticks right now
    },

    strikethrough: {
      type: 'inline',
      className: 'TMStrikethrough',
      set: {
        pre: '~~',
        post: '~~'
      },
      unset: {
        prePattern: /~~$/,
        postPattern: /^~~/
      }
    },
    h1: {
      type: 'line',
      className: 'TMH1',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '# $2'
      },
      unset: {
        pattern: /^( {0,3}#\s+)(.*?)((?:\s+#+\s*)?)$/,
        replacement: '$2'
      }
    },
    h2: {
      type: 'line',
      className: 'TMH2',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '## $2'
      },
      unset: {
        pattern: /^( {0,3}##\s+)(.*?)((?:\s+#+\s*)?)$/,
        replacement: '$2'
      }
    },
    h3: {
      type: 'line',
      className: 'TMH3',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '### $2'
      },
      unset: {
        pattern: /^( {0,3}###\s+)(.*?)((?:\s+#+\s*)?)$/,
        replacement: '$2'
      }
    },
    h4: {
      type: 'line',
      className: 'TMH4',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '#### $2'
      },
      unset: {
        pattern: /^( {0,3}####\s+)(.*?)((?:\s+#+\s*)?)$/,
        replacement: '$2'
      }
    },
    h5: {
      type: 'line',
      className: 'TMH5',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '##### $2'
      },
      unset: {
        pattern: /^( {0,3}#####\s+)(.*?)((?:\s+#+\s*)?)$/,
        replacement: '$2'
      }
    },
    h6: {
      type: 'line',
      className: 'TMH6',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '###### $2'
      },
      unset: {
        pattern: /^( {0,3}######\s+)(.*?)((?:\s+#+\s*)?)$/,
        replacement: '$2'
      }
    },
    ul: {
      type: 'line',
      className: 'TMUL',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '- $2'
      },
      unset: {
        pattern: /^( {0,3}[+*-] {1,4})(.*)$/,
        replacement: '$2'
      }
    },
    ol: {
      type: 'line',
      className: 'TMOL',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '$#. $2'
      },
      unset: {
        pattern: /^( {0,3}\d{1,9}[.)] {1,4})(.*)$/,
        replacement: '$2'
      }
    },
    blockquote: {
      type: 'line',
      className: 'TMBlockquote',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '> $2'
      },
      unset: {
        pattern: /^( {0,3}>[ ]?)(.*)$/,
        replacement: '$2'
      }
    }
  };

  class Editor {
    constructor() {
      let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.e = null;
      this.textarea = null;
      this.lines = [];
      this.lineElements = [];
      this.lineTypes = [];
      this.lineCaptures = [];
      this.lineReplacements = [];
      this.linkLabels = [];
      this.lineDirty = [];
      this.lastCommandState = null;
      this.listeners = {
        change: [],
        selection: []
      };
      let element = props.element;
      this.textarea = props.textarea;
      if (this.textarea && !this.textarea.tagName) {
        this.textarea = document.getElementById(this.textarea);
        if (!element) element = this.textarea;
      }
      if (element && !element.tagName) {
        element = document.getElementById(props.element);
      }
      if (!element) {
        element = document.getElementsByTagName('body')[0];
      }
      if (element.tagName == 'TEXTAREA') {
        this.textarea = element;
        element = this.textarea.parentNode;
      }
      if (this.textarea) {
        this.textarea.style.display = 'none';
      }
      this.createEditorElement(element);
      // TODO Placeholder for empty content
      this.setContent(props.content || (this.textarea ? this.textarea.value : false) || '# Hello TinyMDE!\nEdit **here**');
    }

    /**
     * Creates the editor element inside the target element of the DOM tree
     * @param element The target element of the DOM tree
     */
    createEditorElement(element) {
      this.e = document.createElement('div');
      this.e.className = 'TinyMDE';
      this.e.contentEditable = true;
      // The following is important for formatting purposes, but also since otherwise the browser replaces subsequent spaces with  &nbsp; &nbsp;
      // That breaks a lot of stuff, so we do this here and not in CSS—therefore, you don't have to remember to but this in the CSS file
      this.e.style.whiteSpace = 'pre-wrap';
      // Avoid formatting (B / I / U) popping up on iOS
      this.e.style.webkitUserModify = 'read-write-plaintext-only';
      if (this.textarea && this.textarea.parentNode == element && this.textarea.nextSibling) {
        element.insertBefore(this.e, this.textarea.nextSibling);
      } else {
        element.appendChild(this.e);
      }
      this.e.addEventListener("input", e => this.handleInputEvent(e));
      // this.e.addEventListener("keydown", (e) => this.handleKeydownEvent(e));
      document.addEventListener("selectionchange", e => this.handleSelectionChangeEvent(e));
      this.e.addEventListener("paste", e => this.handlePaste(e));
      // this.e.addEventListener('keydown', (e) => this.handleKeyDown(e));
      this.lineElements = this.e.childNodes; // this will automatically update
    }

    /**
     * Sets the editor content.
     * @param {string} content The new Markdown content
     */
    setContent(content) {
      // Delete any existing content
      while (this.e.firstChild) {
        this.e.removeChild(this.e.firstChild);
      }
      this.lines = content.split(/(?:\r\n|\r|\n)/);
      this.lineDirty = [];
      for (let lineNum = 0; lineNum < this.lines.length; lineNum++) {
        let le = document.createElement('div');
        this.e.appendChild(le);
        this.lineDirty.push(true);
      }
      this.lineTypes = new Array(this.lines.length);
      this.updateFormatting();
      this.fireChange();
    }

    /**
     * Gets the editor content as a Markdown string.
     * @returns {string} The editor content as a markdown string
     */
    getContent() {
      return this.lines.join('\n');
    }

    /**
     * This is the main method to update the formatting (from this.lines to HTML output)
     */
    updateFormatting() {
      // First, parse line types. This will update this.lineTypes, this.lineReplacements, and this.lineCaptures
      // We don't apply the formatting yet
      this.updateLineTypes();
      // Collect any valid link labels from link reference definitions—we need that for formatting to determine what's a valid link
      this.updateLinkLabels();
      // Now, apply the formatting
      this.applyLineTypes();
    }

    /**
     * Updates this.linkLabels: For every link reference definition (line type TMLinkReferenceDefinition), we collect the label
     */
    updateLinkLabels() {
      this.linkLabels = [];
      for (let l = 0; l < this.lines.length; l++) {
        if (this.lineTypes[l] == 'TMLinkReferenceDefinition') {
          this.linkLabels.push(this.lineCaptures[l][lineGrammar.TMLinkReferenceDefinition.labelPlaceholder]);
        }
      }
    }

    /**
     * Helper function to replace placeholders from a RegExp capture. The replacement string can contain regular dollar placeholders (e.g., $1),
     * which are interpreted like in String.replace(), but also double dollar placeholders ($$1). In the case of double dollar placeholders,
     * Markdown inline grammar is applied on the content of the captured subgroup, i.e., $$1 processes inline Markdown grammar in the content of the
     * first captured subgroup, and replaces `$$1` with the result.
     *
     * @param {string} replacement The replacement string, including placeholders.
     * @param  capture The result of a RegExp.exec() call
     * @returns The replacement string, with placeholders replaced from the capture result.
     */
    replace(replacement, capture) {
      return replacement.replace(/(\${1,2})([0-9])/g, (str, p1, p2) => {
        if (p1 == '$') return htmlescape(capture[p2]);else return `<span class="TMInlineFormatted">${this.processInlineStyles(capture[p2])}</span>`;
      });
    }

    /**
     * Applies the line types (from this.lineTypes as well as the capture result in this.lineReplacements and this.lineCaptures)
     * and processes inline formatting for all lines.
     */
    applyLineTypes() {
      for (let lineNum = 0; lineNum < this.lines.length; lineNum++) {
        if (this.lineDirty[lineNum]) {
          let contentHTML = this.replace(this.lineReplacements[lineNum], this.lineCaptures[lineNum]);
          // this.lineHTML[lineNum] = (contentHTML == '' ? '<br />' : contentHTML); // Prevent empty elements which can't be selected etc.
          this.lineElements[lineNum].className = this.lineTypes[lineNum];
          this.lineElements[lineNum].removeAttribute('style');
          this.lineElements[lineNum].innerHTML = contentHTML == '' ? '<br />' : contentHTML; // Prevent empty elements which can't be selected etc.
        }

        this.lineElements[lineNum].dataset.lineNum = lineNum;
      }
    }

    /**
     * Determines line types for all lines based on the line / block grammar. Captures the results of the respective line
     * grammar regular expressions.
     * Updates this.lineTypes, this.lineCaptures, and this.lineReplacements.
     */
    updateLineTypes() {
      let codeBlockType = false;
      let codeBlockSeqLength = 0;
      let htmlBlock = false;
      for (let lineNum = 0; lineNum < this.lines.length; lineNum++) {
        let lineType = 'TMPara';
        let lineCapture = [this.lines[lineNum]];
        let lineReplacement = '$$0'; // Default replacement for paragraph: Inline format the entire line

        // Check ongoing code blocks
        // if (lineNum > 0 && (this.lineTypes[lineNum - 1] == 'TMCodeFenceBacktickOpen' || this.lineTypes[lineNum - 1] == 'TMFencedCodeBacktick')) {
        if (codeBlockType == 'TMCodeFenceBacktickOpen') {
          // We're in a backtick-fenced code block, check if the current line closes it
          let capture = lineGrammar.TMCodeFenceBacktickClose.regexp.exec(this.lines[lineNum]);
          if (capture && capture.groups['seq'].length >= codeBlockSeqLength) {
            lineType = 'TMCodeFenceBacktickClose';
            lineReplacement = lineGrammar.TMCodeFenceBacktickClose.replacement;
            lineCapture = capture;
            codeBlockType = false;
          } else {
            lineType = 'TMFencedCodeBacktick';
            lineReplacement = '$0';
            lineCapture = [this.lines[lineNum]];
          }
        }
        // if (lineNum > 0 && (this.lineTypes[lineNum - 1] == 'TMCodeFenceTildeOpen' || this.lineTypes[lineNum - 1] == 'TMFencedCodeTilde')) {
        else if (codeBlockType == 'TMCodeFenceTildeOpen') {
          // We're in a tilde-fenced code block
          let capture = lineGrammar.TMCodeFenceTildeClose.regexp.exec(this.lines[lineNum]);
          if (capture && capture.groups['seq'].length >= codeBlockSeqLength) {
            lineType = 'TMCodeFenceTildeClose';
            lineReplacement = lineGrammar.TMCodeFenceTildeClose.replacement;
            lineCapture = capture;
            codeBlockType = false;
          } else {
            lineType = 'TMFencedCodeTilde';
            lineReplacement = '$0';
            lineCapture = [this.lines[lineNum]];
          }
        }

        // Check HTML block types
        if (lineType == 'TMPara' && htmlBlock === false) {
          for (let htmlBlockType of htmlBlockGrammar) {
            if (this.lines[lineNum].match(htmlBlockType.start)) {
              // Matching start condition. Check if this tag can start here (not all start conditions allow breaking a paragraph).
              if (htmlBlockType.paraInterrupt || lineNum == 0 || !(this.lineTypes[lineNum - 1] == 'TMPara' || this.lineTypes[lineNum - 1] == 'TMUL' || this.lineTypes[lineNum - 1] == 'TMOL' || this.lineTypes[lineNum - 1] == 'TMBlockquote')) {
                htmlBlock = htmlBlockType;
                break;
              }
            }
          }
        }
        if (htmlBlock !== false) {
          lineType = 'TMHTMLBlock';
          lineReplacement = '$0'; // No formatting in TMHTMLBlock
          lineCapture = [this.lines[lineNum]]; // This should already be set but better safe than sorry

          // Check if HTML block should be closed
          if (htmlBlock.end) {
            // Specific end condition
            if (this.lines[lineNum].match(htmlBlock.end)) {
              htmlBlock = false;
            }
          } else {
            // No specific end condition, ends with blank line
            if (lineNum == this.lines.length - 1 || this.lines[lineNum + 1].match(lineGrammar.TMBlankLine.regexp)) {
              htmlBlock = false;
            }
          }
        }

        // Check all regexps if we haven't applied one of the code block types
        if (lineType == 'TMPara') {
          for (let type in lineGrammar) {
            if (lineGrammar[type].regexp) {
              let capture = lineGrammar[type].regexp.exec(this.lines[lineNum]);
              if (capture) {
                lineType = type;
                lineReplacement = lineGrammar[type].replacement;
                lineCapture = capture;
                break;
              }
            }
          }
        }

        // If we've opened a code block, remember that
        if (lineType == 'TMCodeFenceBacktickOpen' || lineType == 'TMCodeFenceTildeOpen') {
          codeBlockType = lineType;
          codeBlockSeqLength = lineCapture.groups['seq'].length;
        }

        // Link reference definition and indented code can't interrupt a paragraph
        if ((lineType == 'TMIndentedCode' || lineType == 'TMLinkReferenceDefinition') && lineNum > 0 && (this.lineTypes[lineNum - 1] == 'TMPara' || this.lineTypes[lineNum - 1] == 'TMUL' || this.lineTypes[lineNum - 1] == 'TMOL' || this.lineTypes[lineNum - 1] == 'TMBlockquote')) {
          // Fall back to TMPara
          lineType = 'TMPara';
          lineCapture = [this.lines[lineNum]];
          lineReplacement = '$$0';
        }

        // Setext H2 markers that can also be interpreted as an empty list item should be regarded as such (as per CommonMark spec)
        if (lineType == 'TMSetextH2Marker') {
          let capture = lineGrammar.TMUL.regexp.exec(this.lines[lineNum]);
          if (capture) {
            lineType = 'TMUL';
            lineReplacement = lineGrammar.TMUL.replacement;
            lineCapture = capture;
          }
        }

        // Setext headings are only valid if preceded by a paragraph (and if so, they change the type of the previous paragraph)
        if (lineType == 'TMSetextH1Marker' || lineType == 'TMSetextH2Marker') {
          if (lineNum == 0 || this.lineTypes[lineNum - 1] != 'TMPara') {
            // Setext marker is invalid. However, a H2 marker might still be a valid HR, so let's check that
            let capture = lineGrammar.TMHR.regexp.exec(this.lines[lineNum]);
            if (capture) {
              // Valid HR
              lineType = 'TMHR';
              lineCapture = capture;
              lineReplacement = lineGrammar.TMHR.replacement;
            } else {
              // Not valid HR, format as TMPara
              lineType = 'TMPara';
              lineCapture = [this.lines[lineNum]];
              lineReplacement = '$$0';
            }
          } else {
            // Valid setext marker. Change types of preceding para lines
            let headingLine = lineNum - 1;
            const headingLineType = lineType == 'TMSetextH1Marker' ? 'TMSetextH1' : 'TMSetextH2';
            do {
              if (this.lineTypes[headingLineType] != headingLineType) {
                this.lineTypes[headingLine] = headingLineType;
                this.lineDirty[headingLineType] = true;
              }
              this.lineReplacements[headingLine] = '$$0';
              this.lineCaptures[headingLine] = [this.lines[headingLine]];
              headingLine--;
            } while (headingLine >= 0 && this.lineTypes[headingLine] == 'TMPara');
          }
        }
        // Lastly, save the line style to be applied later
        if (this.lineTypes[lineNum] != lineType) {
          this.lineTypes[lineNum] = lineType;
          this.lineDirty[lineNum] = true;
        }
        this.lineReplacements[lineNum] = lineReplacement;
        this.lineCaptures[lineNum] = lineCapture;
      }
    }

    /**
     * Updates all line contents from the HTML, then re-applies formatting.
     */
    updateLineContentsAndFormatting() {
      this.clearDirtyFlag();
      this.updateLineContents();
      this.updateFormatting();
    }

    /**
     * Attempts to parse a link or image at the current position. This assumes that the opening [ or ![ has already been matched.
     * Returns false if this is not a valid link, image. See below for more information
     * @param {string} originalString The original string, starting at the opening marker ([ or ![)
     * @param {boolean} isImage Whether or not this is an image (opener == ![)
     * @returns false if not a valid link / image.
     * Otherwise returns an object with two properties: output is the string to be included in the processed output,
     * charCount is the number of input characters (from originalString) consumed.
     */
    parseLinkOrImage(originalString, isImage) {
      // Skip the opening bracket
      let textOffset = isImage ? 2 : 1;
      let opener = originalString.substr(0, textOffset);
      let type = isImage ? 'TMImage' : 'TMLink';
      let currentOffset = textOffset;
      let bracketLevel = 1;
      let linkText = false;
      let linkRef = false;
      let linkLabel = [];
      let linkDetails = []; // If matched, this will be an array: [whitespace + link destination delimiter, link destination, link destination delimiter, whitespace, link title delimiter, link title, link title delimiter + whitespace]. All can be empty strings.

      textOuter: while (currentOffset < originalString.length && linkText === false /* empty string is okay */) {
        let string = originalString.substr(currentOffset);

        // Capture any escapes and code blocks at current position, they bind more strongly than links
        // We don't have to actually process them here, that'll be done later in case the link / image is valid, but we need to skip over them.
        for (let rule of ['escape', 'code', 'autolink', 'html']) {
          let cap = inlineGrammar[rule].regexp.exec(string);
          if (cap) {
            currentOffset += cap[0].length;
            continue textOuter;
          }
        }

        // Check for image. It's okay for an image to be included in a link or image
        if (string.match(inlineGrammar.imageOpen.regexp)) {
          // Opening image. It's okay if this is a matching pair of brackets
          bracketLevel++;
          currentOffset += 2;
          continue textOuter;
        }

        // Check for link (not an image because that would have been captured and skipped over above)
        if (string.match(inlineGrammar.linkOpen.regexp)) {
          // Opening bracket. Two things to do:
          // 1) it's okay if this part of a pair of brackets.
          // 2) If we are currently trying to parse a link, this nested bracket musn't start a valid link (no nested links allowed)
          bracketLevel++;
          // if (bracketLevel >= 2) return false; // Nested unescaped brackets, this doesn't qualify as a link / image
          if (!isImage) {
            if (this.parseLinkOrImage(string, false)) {
              // Valid link inside this possible link, which makes this link invalid (inner links beat outer ones)
              return false;
            }
          }
          currentOffset += 1;
          continue textOuter;
        }

        // Check for closing bracket
        if (string.match(/^\]/)) {
          bracketLevel--;
          if (bracketLevel == 0) {
            // Found matching bracket and haven't found anything disqualifying this as link / image.
            linkText = originalString.substr(textOffset, currentOffset - textOffset);
            currentOffset++;
            continue textOuter;
          }
        }

        // Nothing matches, proceed to next char
        currentOffset++;
      }

      // Did we find a link text (i.e., find a matching closing bracket?)
      if (linkText === false) return false; // Nope

      // So far, so good. We've got a valid link text. Let's see what type of link this is
      let nextChar = currentOffset < originalString.length ? originalString.substr(currentOffset, 1) : '';

      // REFERENCE LINKS
      if (nextChar == '[') {
        let string = originalString.substr(currentOffset);
        let cap = inlineGrammar.linkLabel.regexp.exec(string);
        if (cap) {
          // Valid link label
          currentOffset += cap[0].length;
          linkLabel.push(cap[1], cap[2], cap[3]);
          if (cap[inlineGrammar.linkLabel.labelPlaceholder]) {
            // Full reference link
            linkRef = cap[inlineGrammar.linkLabel.labelPlaceholder];
          } else {
            // Collapsed reference link
            linkRef = linkText.trim();
          }
        } else {
          // Not a valid link label
          return false;
        }
      } else if (nextChar != '(') {
        // Shortcut ref link
        linkRef = linkText.trim();

        // INLINE LINKS
      } else {
        // nextChar == '('

        // Potential inline link
        currentOffset++;
        let parenthesisLevel = 1;
        inlineOuter: while (currentOffset < originalString.length && parenthesisLevel > 0) {
          let string = originalString.substr(currentOffset);

          // Process whitespace
          let cap = /^\s+/.exec(string);
          if (cap) {
            switch (linkDetails.length) {
              case 0:
                linkDetails.push(cap[0]);
                break;
              // Opening whitespace
              case 1:
                linkDetails.push(cap[0]);
                break;
              // Open destination, but not a destination yet; desination opened with <
              case 2:
                // Open destination with content in it. Whitespace only allowed if opened by angle bracket, otherwise this closes the destination
                if (linkDetails[0].match(/</)) {
                  linkDetails[1] = linkDetails[1].concat(cap[0]);
                } else {
                  if (parenthesisLevel != 1) return false; // Unbalanced parenthesis
                  linkDetails.push(''); // Empty end delimiter for destination
                  linkDetails.push(cap[0]); // Whitespace in between destination and title
                }

                break;
              case 3:
                linkDetails.push(cap[0]);
                break;
              // Whitespace between destination and title
              case 4:
                return false;
              // This should never happen (no opener for title yet, but more whitespace to capture)
              case 5:
                linkDetails.push('');
              // Whitespace at beginning of title, push empty title and continue
              case 6:
                linkDetails[5] = linkDetails[5].concat(cap[0]);
                break;
              // Whitespace in title
              case 7:
                linkDetails[6] = linkDetails[6].concat(cap[0]);
                break;
              // Whitespace after closing delimiter
              default:
                return false;
              // We should never get here
            }

            currentOffset += cap[0].length;
            continue inlineOuter;
          }

          // Process backslash escapes
          cap = inlineGrammar.escape.regexp.exec(string);
          if (cap) {
            switch (linkDetails.length) {
              case 0:
                linkDetails.push('');
              // this opens the link destination, add empty opening delimiter and proceed to next case
              case 1:
                linkDetails.push(cap[0]);
                break;
              // This opens the link destination, append it
              case 2:
                linkDetails[1] = linkDetails[1].concat(cap[0]);
                break;
              // Part of the link destination
              case 3:
                return false;
              // Lacking opening delimiter for link title
              case 4:
                return false;
              // Lcaking opening delimiter for link title
              case 5:
                linkDetails.push('');
              // This opens the link title
              case 6:
                linkDetails[5] = linkDetails[5].concat(cap[0]);
                break;
              // Part of the link title
              default:
                return false;
              // After link title was closed, without closing parenthesis
            }

            currentOffset += cap[0].length;
            continue inlineOuter;
          }

          // Process opening angle bracket as deilimiter of destination
          if (linkDetails.length < 2 && string.match(/^</)) {
            if (linkDetails.length == 0) linkDetails.push('');
            linkDetails[0] = linkDetails[0].concat('<');
            currentOffset++;
            continue inlineOuter;
          }

          // Process closing angle bracket as delimiter of destination
          if ((linkDetails.length == 1 || linkDetails.length == 2) && string.match(/^>/)) {
            if (linkDetails.length == 1) linkDetails.push(''); // Empty link destination
            linkDetails.push('>');
            currentOffset++;
            continue inlineOuter;
          }

          // Process  non-parenthesis delimiter for title.
          cap = /^["']/.exec(string);
          // For this to be a valid opener, we have to either have no destination, only whitespace so far,
          // or a destination with trailing whitespace.
          if (cap && (linkDetails.length == 0 || linkDetails.length == 1 || linkDetails.length == 4)) {
            while (linkDetails.length < 4) linkDetails.push('');
            linkDetails.push(cap[0]);
            currentOffset++;
            continue inlineOuter;
          }

          // For this to be a valid closer, we have to have an opener and some or no title, and this has to match the opener
          if (cap && (linkDetails.length == 5 || linkDetails.length == 6) && linkDetails[4] == cap[0]) {
            if (linkDetails.length == 5) linkDetails.push(''); // Empty link title
            linkDetails.push(cap[0]);
            currentOffset++;
            continue inlineOuter;
          }
          // Other cases (linkDetails.length == 2, 3, 7) will be handled with the "default" case below.

          // Process opening parenthesis
          if (string.match(/^\(/)) {
            switch (linkDetails.length) {
              case 0:
                linkDetails.push('');
              // this opens the link destination, add empty opening delimiter and proceed to next case
              case 1:
                linkDetails.push('');
              // This opens the link destination
              case 2:
                // Part of the link destination
                linkDetails[1] = linkDetails[1].concat('(');
                if (!linkDetails[0].match(/<$/)) parenthesisLevel++;
                break;
              case 3:
                linkDetails.push('');
              //  opening delimiter for link title
              case 4:
                linkDetails.push('(');
                break;
              // opening delimiter for link title
              case 5:
                linkDetails.push('');
              // opens the link title, add empty title content and proceed to next case
              case 6:
                // Part of the link title. Un-escaped parenthesis only allowed in " or ' delimited title
                if (linkDetails[4] == '(') return false;
                linkDetails[5] = linkDetails[5].concat('(');
                break;
              default:
                return false;
              // After link title was closed, without closing parenthesis
            }

            currentOffset++;
            continue inlineOuter;
          }

          // Process closing parenthesis
          if (string.match(/^\)/)) {
            if (linkDetails.length <= 2) {
              // We are inside the link destination. Parentheses have to be matched if not in angle brackets
              while (linkDetails.length < 2) linkDetails.push('');
              if (!linkDetails[0].match(/<$/)) parenthesisLevel--;
              if (parenthesisLevel > 0) {
                linkDetails[1] = linkDetails[1].concat(')');
              }
            } else if (linkDetails.length == 5 || linkDetails.length == 6) {
              // We are inside the link title.
              if (linkDetails[4] == '(') {
                // This closes the link title
                if (linkDetails.length == 5) linkDetails.push('');
                linkDetails.push(')');
              } else {
                // Just regular ol' content
                if (linkDetails.length == 5) linkDetails.push(')');else linkDetails[5] = linkDetails[5].concat(')');
              }
            } else {
              parenthesisLevel--; // This should decrease it from 1 to 0...
            }

            if (parenthesisLevel == 0) {
              // No invalid condition, let's make sure the linkDetails array is complete
              while (linkDetails.length < 7) linkDetails.push('');
            }
            currentOffset++;
            continue inlineOuter;
          }

          // Any old character
          cap = /^./.exec(string);
          if (cap) {
            switch (linkDetails.length) {
              case 0:
                linkDetails.push('');
              // this opens the link destination, add empty opening delimiter and proceed to next case
              case 1:
                linkDetails.push(cap[0]);
                break;
              // This opens the link destination, append it
              case 2:
                linkDetails[1] = linkDetails[1].concat(cap[0]);
                break;
              // Part of the link destination
              case 3:
                return false;
              // Lacking opening delimiter for link title
              case 4:
                return false;
              // Lcaking opening delimiter for link title
              case 5:
                linkDetails.push('');
              // This opens the link title
              case 6:
                linkDetails[5] = linkDetails[5].concat(cap[0]);
                break;
              // Part of the link title
              default:
                return false;
              // After link title was closed, without closing parenthesis
            }

            currentOffset += cap[0].length;
            continue inlineOuter;
          }
          throw "Infinite loop"; // we should never get here since the last test matches any character
        }

        if (parenthesisLevel > 0) return false; // Parenthes(es) not closed
      }

      if (linkRef !== false) {
        // Ref link; check that linkRef is valid
        let valid = false;
        for (let label of this.linkLabels) {
          if (label == linkRef) {
            valid = true;
            break;
          }
        }
        let label = valid ? "TMLinkLabel TMLinkLabel_Valid" : "TMLinkLabel TMLinkLabel_Invalid";
        let output = `<span class="TMMark TMMark_${type}">${opener}</span><span class="${type} ${linkLabel.length < 3 || !linkLabel[1] ? label : ""}">${this.processInlineStyles(linkText)}</span><span class="TMMark TMMark_${type}">]</span>`;
        if (linkLabel.length >= 3) {
          output = output.concat(`<span class="TMMark TMMark_${type}">${linkLabel[0]}</span>`, `<span class="${label}">${linkLabel[1]}</span>`, `<span class="TMMark TMMark_${type}">${linkLabel[2]}</span>`);
        }
        return {
          output: output,
          charCount: currentOffset
        };
      } else if (linkDetails) {
        // Inline link

        // This should never happen, but better safe than sorry.
        while (linkDetails.length < 7) {
          linkDetails.push('');
        }
        return {
          output: `<span class="TMMark TMMark_${type}">${opener}</span><span class="${type}">${this.processInlineStyles(linkText)}</span><span class="TMMark TMMark_${type}">](${linkDetails[0]}</span><span class="${type}Destination">${linkDetails[1]}</span><span class="TMMark TMMark_${type}">${linkDetails[2]}${linkDetails[3]}${linkDetails[4]}</span><span class="${type}Title">${linkDetails[5]}</span><span class="TMMark TMMark_${type}">${linkDetails[6]})</span>`,
          charCount: currentOffset
        };
      }
      return false;
    }

    /**
     * Formats a markdown string as HTML, using Markdown inline formatting.
     * @param {string} originalString The input (markdown inline formatted) string
     * @returns {string} The HTML formatted output
     */
    processInlineStyles(originalString) {
      let processed = '';
      let stack = []; // Stack is an array of objects of the format: {delimiter, delimString, count, output}
      let offset = 0;
      let string = originalString;
      outer: while (string) {
        // Process simple rules (non-delimiter)
        for (let rule of ['escape', 'code', 'autolink', 'html']) {
          let cap = inlineGrammar[rule].regexp.exec(string);
          if (cap) {
            string = string.substr(cap[0].length);
            offset += cap[0].length;
            processed += inlineGrammar[rule].replacement
            // .replace(/\$\$([1-9])/g, (str, p1) => processInlineStyles(cap[p1])) // todo recursive calling
            .replace(/\$([1-9])/g, (str, p1) => htmlescape(cap[p1]));
            continue outer;
          }
        }

        // Check for links / images
        let potentialLink = string.match(inlineGrammar.linkOpen.regexp);
        let potentialImage = string.match(inlineGrammar.imageOpen.regexp);
        if (potentialImage || potentialLink) {
          let result = this.parseLinkOrImage(string, potentialImage);
          if (result) {
            processed = `${processed}${result.output}`;
            string = string.substr(result.charCount);
            offset += result.charCount;
            continue outer;
          }
        }

        // Check for em / strong delimiters
        let cap = /(^\*+)|(^_+)/.exec(string);
        if (cap) {
          let delimCount = cap[0].length;
          const delimString = cap[0];
          const currentDelimiter = cap[0][0]; // This should be * or _

          string = string.substr(cap[0].length);

          // We have a delimiter run. Let's check if it can open or close an emphasis.

          const preceding = offset > 0 ? originalString.substr(0, offset) : ' '; // beginning and end of line count as whitespace
          const following = offset + cap[0].length < originalString.length ? string : ' ';
          const punctuationFollows = following.match(punctuationLeading);
          const punctuationPrecedes = preceding.match(punctuationTrailing);
          const whitespaceFollows = following.match(/^\s/);
          const whitespacePrecedes = preceding.match(/\s$/);

          // These are the rules for right-flanking and left-flanking delimiter runs as per CommonMark spec
          let canOpen = !whitespaceFollows && (!punctuationFollows || !!whitespacePrecedes || !!punctuationPrecedes);
          let canClose = !whitespacePrecedes && (!punctuationPrecedes || !!whitespaceFollows || !!punctuationFollows);

          // Underscores have more detailed rules than just being part of left- or right-flanking run:
          if (currentDelimiter == '_' && canOpen && canClose) {
            canOpen = punctuationPrecedes;
            canClose = punctuationFollows;
          }

          // If the delimiter can close, check the stack if there's something it can close
          if (canClose) {
            let stackPointer = stack.length - 1;
            // See if we can find a matching opening delimiter, move down through the stack
            while (delimCount && stackPointer >= 0) {
              if (stack[stackPointer].delimiter == currentDelimiter) {
                // We found a matching delimiter, let's construct the formatted string

                // Firstly, if we skipped any stack levels, pop them immediately (non-matching delimiters)
                while (stackPointer < stack.length - 1) {
                  const entry = stack.pop();
                  processed = `${entry.output}${entry.delimString.substr(0, entry.count)}${processed}`;
                }

                // Then, format the string
                if (delimCount >= 2 && stack[stackPointer].count >= 2) {
                  // Strong
                  processed = `<span class="TMMark">${currentDelimiter}${currentDelimiter}</span><strong class="TMStrong">${processed}</strong><span class="TMMark">${currentDelimiter}${currentDelimiter}</span>`;
                  delimCount -= 2;
                  stack[stackPointer].count -= 2;
                } else {
                  // Em
                  processed = `<span class="TMMark">${currentDelimiter}</span><em class="TMEm">${processed}</em><span class="TMMark">${currentDelimiter}</span>`;
                  delimCount -= 1;
                  stack[stackPointer].count -= 1;
                }

                // If that stack level is empty now, pop it
                if (stack[stackPointer].count == 0) {
                  let entry = stack.pop();
                  processed = `${entry.output}${processed}`;
                  stackPointer--;
                }
              } else {
                // This stack level's delimiter type doesn't match the current delimiter type
                // Go down one level in the stack
                stackPointer--;
              }
            }
          }
          // If there are still delimiters left, and the delimiter run can open, push it on the stack
          if (delimCount && canOpen) {
            stack.push({
              delimiter: currentDelimiter,
              delimString: delimString,
              count: delimCount,
              output: processed
            });
            processed = ''; // Current formatted output has been pushed on the stack and will be prepended when the stack gets popped
            delimCount = 0;
          }

          // Any delimiters that are left (closing unmatched) are appended to the output.
          if (delimCount) {
            processed = `${processed}${delimString.substr(0, delimCount)}`;
          }
          offset += cap[0].length;
          continue outer;
        }

        // Check for strikethrough delimiter
        cap = /^~~/.exec(string);
        if (cap) {
          let consumed = false;
          let stackPointer = stack.length - 1;
          // See if we can find a matching opening delimiter, move down through the stack
          while (!consumed && stackPointer >= 0) {
            if (stack[stackPointer].delimiter == '~') {
              // We found a matching delimiter, let's construct the formatted string

              // Firstly, if we skipped any stack levels, pop them immediately (non-matching delimiters)
              while (stackPointer < stack.length - 1) {
                const entry = stack.pop();
                processed = `${entry.output}${entry.delimString.substr(0, entry.count)}${processed}`;
              }

              // Then, format the string
              processed = `<span class="TMMark">~~</span><del class="TMStrikethrough">${processed}</del><span class="TMMark">~~</span>`;
              let entry = stack.pop();
              processed = `${entry.output}${processed}`;
              consumed = true;
            } else {
              // This stack level's delimiter type doesn't match the current delimiter type
              // Go down one level in the stack
              stackPointer--;
            }
          }

          // If there are still delimiters left, and the delimiter run can open, push it on the stack
          if (!consumed) {
            stack.push({
              delimiter: '~',
              delimString: '~~',
              count: 2,
              output: processed
            });
            processed = ''; // Current formatted output has been pushed on the stack and will be prepended when the stack gets popped
          }

          offset += cap[0].length;
          string = string.substr(cap[0].length);
          continue outer;
        }

        // Process 'default' rule
        cap = inlineGrammar.default.regexp.exec(string);
        if (cap) {
          string = string.substr(cap[0].length);
          offset += cap[0].length;
          processed += inlineGrammar.default.replacement.replace(/\$([1-9])/g, (str, p1) => htmlescape(cap[p1]));
          continue outer;
        }
        throw 'Infinite loop!';
      }

      // Empty the stack, any opening delimiters are unused
      while (stack.length) {
        const entry = stack.pop();
        processed = `${entry.output}${entry.delimString.substr(0, entry.count)}${processed}`;
      }
      return processed;
    }

    /**
     * Clears the line dirty flag (resets it to an array of false)
     */
    clearDirtyFlag() {
      this.lineDirty = new Array(this.lines.length);
      for (let i = 0; i < this.lineDirty.length; i++) {
        this.lineDirty[i] = false;
      }
    }

    /**
     * Updates the class properties (lines, lineElements) from the DOM.
     * @returns true if contents changed
     */
    updateLineContents() {
      // this.lineDirty = [];
      // Check if we have changed anything about the number of lines (inserted or deleted a paragraph)
      // < 0 means line(s) removed; > 0 means line(s) added
      let lineDelta = this.e.childElementCount - this.lines.length;
      if (lineDelta) {
        // yup. Let's try how much we can salvage (find out which lines from beginning and end were unchanged)
        // Find lines from the beginning that haven't changed...
        let firstChangedLine = 0;
        while (firstChangedLine <= this.lines.length && firstChangedLine <= this.lineElements.length && this.lineElements[firstChangedLine] // Check that the line element hasn't been deleted
        && this.lines[firstChangedLine] == this.lineElements[firstChangedLine].textContent) {
          firstChangedLine++;
        }

        // End also from the end
        let lastChangedLine = -1;
        while (-lastChangedLine < this.lines.length && -lastChangedLine < this.lineElements.length && this.lines[this.lines.length + lastChangedLine] == this.lineElements[this.lineElements.length + lastChangedLine].textContent) {
          lastChangedLine--;
        }
        let linesToDelete = this.lines.length + lastChangedLine + 1 - firstChangedLine;
        if (linesToDelete < -lineDelta) linesToDelete = -lineDelta;
        if (linesToDelete < 0) linesToDelete = 0;
        let linesToAdd = [];
        for (let l = 0; l < linesToDelete + lineDelta; l++) {
          linesToAdd.push(this.lineElements[firstChangedLine + l].textContent);
        }
        this.spliceLines(firstChangedLine, linesToDelete, linesToAdd, false);
      } else {
        // No lines added or removed
        for (let line = 0; line < this.lineElements.length; line++) {
          let e = this.lineElements[line];
          let ct = e.textContent;
          if (this.lines[line] !== ct) {
            // Line changed, update it
            this.lines[line] = ct;
            this.lineDirty[line] = true;
          }
        }
      }
    }

    /**
     * Processes a new paragraph.
     * @param sel The current selection
     */
    processNewParagraph(sel) {
      if (!sel) return;

      // Update lines from content
      this.updateLineContents();
      let continuableType = false;
      // Let's see if we need to continue a list

      let checkLine = sel.col > 0 ? sel.row : sel.row - 1;
      switch (this.lineTypes[checkLine]) {
        case 'TMUL':
          continuableType = 'TMUL';
          break;
        case 'TMOL':
          continuableType = 'TMOL';
          break;
        case 'TMIndentedCode':
          continuableType = 'TMIndentedCode';
          break;
      }
      let lines = this.lines[sel.row].replace(/\n\n$/, '\n').split(/(?:\r\n|\n|\r)/);
      if (lines.length == 1) {
        // No new line
        this.updateFormatting();
        return;
      }
      this.spliceLines(sel.row, 1, lines, true);
      sel.row++;
      sel.col = 0;
      if (continuableType) {
        // Check if the previous line was non-empty
        let capture = lineGrammar[continuableType].regexp.exec(this.lines[sel.row - 1]);
        if (capture) {
          // Convention: capture[1] is the line type marker, capture[2] is the content
          if (capture[2]) {
            // Previous line has content, continue the continuable type

            // Hack for OL: increment number
            if (continuableType == 'TMOL') {
              capture[1] = capture[1].replace(/\d{1,9}/, result => {
                return parseInt(result[0]) + 1;
              });
            }
            this.lines[sel.row] = `${capture[1]}${this.lines[sel.row]}`;
            this.lineDirty[sel.row] = true;
            sel.col = capture[1].length;
          } else {
            // Previous line has no content, remove the continuable type from the previous row
            this.lines[sel.row - 1] = '';
            this.lineDirty[sel.row - 1] = true;
          }
        }
      }
      this.updateFormatting();
    }

    // /**
    //  * Processes a "delete" input action.
    //  * @param {object} focus The selection
    //  * @param {boolean} forward If true, performs a forward delete, otherwise performs a backward delete
    //  */
    // processDelete(focus, forward) {
    //   if (!focus) return;
    //   let anchor = this.getSelection(true);
    //   // Do we have a non-empty selection?
    //   if (focus.col != anchor.col || focus.row != anchor.row) {
    //     // non-empty. direction doesn't matter.
    //     this.paste('', anchor, focus);
    //   } else {
    //     if (forward) {
    //       if (focus.col < this.lines[focus.row].length) this.paste('', {row: focus.row, col: focus.col + 1}, focus);
    //       else if (focus.col < this.lines.length) this.paste('', {row: focus.row + 1, col: 0}, focus);
    //       // Otherwise, we're at the very end and can't delete forward
    //     } else {
    //       if (focus.col > 0) this.paste('', {row: focus.row, col: focus.col - 1}, focus);
    //       else if (focus.row > 0) this.paste('', {row: focus.row - 1, col: this.lines[focus.row - 1].length - 1}, focus);
    //       // Otherwise, we're at the very beginning and can't delete backwards
    //     }
    //   }

    // }

    /**
     * Gets the current position of the selection counted by row and column of the editor Markdown content (as opposed to the position in the DOM).
     *
     * @param {boolean} getAnchor if set to true, gets the selection anchor (start point of the selection), otherwise gets the focus (end point).
     * @return {object} An object representing the selection, with properties col and row.
     */
    getSelection() {
      let getAnchor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      const selection = window.getSelection();
      let startNode = getAnchor ? selection.anchorNode : selection.focusNode;
      if (!startNode) return null;
      let offset = startNode.nodeType === Node.TEXT_NODE ? getAnchor ? selection.anchorOffset : selection.focusOffset : 0;
      if (startNode == this.e) {
        return {
          row: 0,
          col: offset
        };
      }
      let col = this.computeColumn(startNode, offset);
      if (col === null) return null; // We are outside of the editor

      // Find the row node
      let node = startNode;
      while (node.parentElement != this.e) {
        node = node.parentElement;
      }
      let row = 0;
      // Check if we can read a line number from the data-line-num attribute.
      // The last condition is a security measure since inserting a new paragraph copies the previous rows' line number
      if (node.dataset && node.dataset.lineNum && (!node.previousSibling || node.previousSibling.dataset.lineNum != node.dataset.lineNum)) {
        row = parseInt(node.dataset.lineNum);
      } else {
        while (node.previousSibling) {
          row++;
          node = node.previousSibling;
        }
      }
      return {
        row: row,
        col: col,
        node: startNode
      };
    }

    /**
     * Computes a column within an editor line from a node and offset within that node.
     * @param {Node} startNode The node
     * @param {int} offset THe selection
     * @returns {int} the column, or null if the node is not inside the editor
     */
    computeColumn(startNode, offset) {
      let node = startNode;
      let col = offset;
      // First, make sure we're actually in the editor.
      while (node && node.parentNode != this.e) {
        node = node.parentNode;
      }
      if (node == null) return null;
      node = startNode;
      while (node.parentNode != this.e) {
        if (node.previousSibling) {
          node = node.previousSibling;
          col += node.textContent.length;
        } else {
          node = node.parentNode;
        }
      }
      return col;
    }

    /**
     * Computes DOM node and offset within that node from a position expressed as row and column.
     * @param {int} row Row (line number)
     * @param {int} col Column
     * @returns An object with two properties: node and offset. offset may be null;
     */
    computeNodeAndOffset(row, col) {
      let bindRight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (row >= this.lineElements.length) {
        // Selection past the end of text, set selection to end of text
        row = this.lineElements.length - 1;
        col = this.lines[row].length;
      }
      if (col > this.lines[row].length) {
        col = this.lines[row].length;
      }
      const parentNode = this.lineElements[row];
      let node = parentNode.firstChild;
      let childrenComplete = false;
      // default return value
      let rv = {
        node: parentNode.firstChild ? parentNode.firstChild : parentNode,
        offset: 0
      };
      while (node != parentNode) {
        if (!childrenComplete && node.nodeType === Node.TEXT_NODE) {
          if (node.nodeValue.length >= col) {
            if (bindRight && node.nodeValue.length == col) {
              // Selection is at the end of this text node, but we are binding right (prefer an offset of 0 in the next text node)
              // Remember return value in case we don't find another text node
              rv = {
                node: node,
                offset: col
              };
              col = 0;
            } else {
              return {
                node: node,
                offset: col
              };
            }
          } else {
            col -= node.nodeValue.length;
          }
        }
        if (!childrenComplete && node.firstChild) {
          node = node.firstChild;
        } else if (node.nextSibling) {
          childrenComplete = false;
          node = node.nextSibling;
        } else {
          childrenComplete = true;
          node = node.parentNode;
        }
      }

      // Either, the position was invalid and we just return the default return value
      // Or we are binding right and the selection is at the end of the line
      return rv;
    }

    /**
     * Sets the selection based on rows and columns within the editor Markdown content.
     * @param {object} focus Object representing the selection, needs to have properties row and col.
     * @param anchor Anchor of the selection. If not given, assumes the current anchor.
     */
    setSelection(focus) {
      let anchor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!focus) return;
      let range = document.createRange();
      let {
        node: focusNode,
        offset: focusOffset
      } = this.computeNodeAndOffset(focus.row, focus.col, anchor && anchor.row == focus.row && anchor.col > focus.col); // Bind selection right if anchor is in the same row and behind the focus
      let anchorNode = null,
        anchorOffset = null;
      if (anchor && (anchor.row != focus.row || anchor.col != focus.col)) {
        let {
          node,
          offset
        } = this.computeNodeAndOffset(anchor.row, anchor.col, focus.row == anchor.row && focus.col > anchor.col);
        anchorNode = node;
        anchorOffset = offset;
      }
      if (anchorNode) range.setStart(anchorNode, anchorOffset);else range.setStart(focusNode, focusOffset);
      range.setEnd(focusNode, focusOffset);
      let windowSelection = window.getSelection();
      windowSelection.removeAllRanges();
      windowSelection.addRange(range);
    }

    /**
     * Event handler for input events
     */
    handleInputEvent(event) {
      let focus = this.getSelection();
      if ((event.inputType == 'insertParagraph' || event.inputType == 'insertLineBreak') && focus) {
        this.clearDirtyFlag();
        this.processNewParagraph(focus);
      } else {
        if (!this.e.firstChild) {
          this.e.innerHTML = '<div class="TMBlankLine"><br></div>';
        } else {
          for (let childNode = this.e.firstChild; childNode; childNode = childNode.nextSibling) {
            if (childNode.nodeType != 3 || childNode.tagName != 'DIV') {
              // Found a child node that's either not an element or not a div. Wrap it in a div.
              let divWrapper = document.createElement('div');
              this.e.insertBefore(divWrapper, childNode);
              this.e.removeChild(childNode);
              divWrapper.appendChild(childNode);
            }
          }
        }
        this.updateLineContentsAndFormatting();
      }
      if (focus) this.setSelection(focus);
      this.fireChange();
    }

    /**
     * Event handler for "selectionchange" events.
     */
    handleSelectionChangeEvent() {
      this.fireSelection();
    }

    /**
     * Convenience function to "splice" new lines into the arrays this.lines, this.lineDirty, this.lineTypes, and the DOM elements
     * underneath the editor element.
     * This method is essentially Array.splice, only that the third parameter takes an un-spread array (and the forth parameter)
     * determines whether the DOM should also be adjusted.
     *
     * @param {int} startLine Position at which to start changing the array of lines
     * @param {int} linesToDelete Number of lines to delete
     * @param {array} linesToInsert Array of strings representing the lines to be inserted
     * @param {boolean} adjustLineElements If true, then <div> elements are also inserted in the DOM at the respective position
     */
    spliceLines(startLine) {
      let linesToDelete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      let linesToInsert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      let adjustLineElements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      if (adjustLineElements) {
        for (let i = 0; i < linesToDelete; i++) {
          this.e.removeChild(this.e.childNodes[startLine]);
        }
      }
      let insertedBlank = [];
      let insertedDirty = [];
      for (let i = 0; i < linesToInsert.length; i++) {
        insertedBlank.push('');
        insertedDirty.push(true);
        if (adjustLineElements) {
          if (this.e.childNodes[startLine]) this.e.insertBefore(document.createElement('div'), this.e.childNodes[startLine]);else this.e.appendChild(document.createElement('div'));
        }
      }
      this.lines.splice(startLine, linesToDelete, ...linesToInsert);
      this.lineTypes.splice(startLine, linesToDelete, ...insertedBlank);
      this.lineDirty.splice(startLine, linesToDelete, ...insertedDirty);
    }

    /**
     * Event handler for the "paste" event
     */
    handlePaste(event) {
      event.preventDefault();

      // get text representation of clipboard
      let text = (event.originalEvent || event).clipboardData.getData('text/plain');

      // insert text manually
      this.paste(text);
    }

    /**
     * Pastes the text at the current selection (or at the end, if no current selection)
     * @param {string} text
     */
    paste(text) {
      let anchor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      let focus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (!anchor) anchor = this.getSelection(true);
      if (!focus) focus = this.getSelection(false);
      let beginning, end;
      if (!focus) {
        focus = {
          row: this.lines.length - 1,
          col: this.lines[this.lines.length - 1].length
        }; // Insert at end
      }

      if (!anchor) {
        anchor = focus;
      }
      if (anchor.row < focus.row || anchor.row == focus.row && anchor.col <= focus.col) {
        beginning = anchor;
        end = focus;
      } else {
        beginning = focus;
        end = anchor;
      }
      let insertedLines = text.split(/(?:\r\n|\r|\n)/);
      let lineBefore = this.lines[beginning.row].substr(0, beginning.col);
      let lineEnd = this.lines[end.row].substr(end.col);
      insertedLines[0] = lineBefore.concat(insertedLines[0]);
      let endColPos = insertedLines[insertedLines.length - 1].length;
      insertedLines[insertedLines.length - 1] = insertedLines[insertedLines.length - 1].concat(lineEnd);
      this.spliceLines(beginning.row, 1 + end.row - beginning.row, insertedLines);
      focus.row = beginning.row + insertedLines.length - 1;
      focus.col = endColPos;
      this.updateFormatting();
      this.setSelection(focus);
      this.fireChange();
    }

    /**
     * Computes the (lowest in the DOM tree) common ancestor of two DOM nodes.
     * @param {Node} node1 the first node
     * @param {Node} node2 the second node
     * @returns {Node} The commen ancestor node, or null if there is no common ancestor
     */
    computeCommonAncestor(node1, node2) {
      if (!node1 || !node2) return null;
      if (node1 == node2) return node1;
      const ancestry = node => {
        let ancestry = [];
        while (node) {
          ancestry.unshift(node);
          node = node.parentNode;
        }
        return ancestry;
      };
      const ancestry1 = ancestry(node1);
      const ancestry2 = ancestry(node2);
      if (ancestry1[0] != ancestry2[0]) return null;
      let i;
      for (i = 0; ancestry1[i] == ancestry2[i]; i++);
      return ancestry1[i - 1];
    }

    /**
     * Finds the (lowest in the DOM tree) enclosing DOM node with a given class.
     * @param {object} focus The focus selection object
     * @param {object} anchor The anchor selection object
     * @param {string} className The class name to find
     * @returns {Node} The enclosing DOM node with the respective class (inside the editor), if there is one; null otherwise.
     */
    computeEnclosingMarkupNode(focus, anchor, className) {
      let node = null;
      if (!focus) return null;
      if (!anchor) {
        node = focus.node;
      } else {
        if (focus.row != anchor.row) return null;
        node = this.computeCommonAncestor(focus.node, anchor.node);
      }
      if (!node) return null;
      while (node != this.e) {
        if (node.className && node.className.includes(className)) return node;
        node = node.parentNode;
      }
      // Ascended all the way to the editor element
      return null;
    }

    /**
     * Returns the state (true / false) of all commands.
     * @param focus Focus of the selection. If not given, assumes the current focus.
     * @param anchor Anchor of the selection. If not given, assumes the current anchor.
     */
    getCommandState() {
      let focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      let anchor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      let commandState = {};
      if (!focus) focus = this.getSelection(false);
      if (!anchor) anchor = this.getSelection(true);
      if (!focus) {
        for (let cmd in commands) {
          commandState[cmd] = null;
        }
        return commandState;
      }
      if (!anchor) anchor = focus;
      let start, end;
      if (anchor.row < focus.row || anchor.row == focus.row && anchor.col < focus.col) {
        start = anchor;
        end = focus;
      } else {
        start = focus;
        end = anchor;
      }
      if (end.row > start.row && end.col == 0) {
        end.row--;
        end.col = this.lines[end.row].length; // Selection to beginning of next line is said to end at the beginning of the last line
      }

      for (let cmd in commands) {
        if (commands[cmd].type == 'inline') {
          if (!focus || focus.row != anchor.row || !this.isInlineFormattingAllowed(focus, anchor)) {
            commandState[cmd] = null;
          } else {
            // The command state is true if there is a respective enclosing markup node (e.g., the selection is enclosed in a <b>..</b>) ...
            commandState[cmd] = !!this.computeEnclosingMarkupNode(focus, anchor, commands[cmd].className) ||
            // ... or if it's an empty string preceded by and followed by formatting markers, e.g. **|** where | is the cursor

            focus.col == anchor.col && !!this.lines[focus.row].substr(0, focus.col).match(commands[cmd].unset.prePattern) && !!this.lines[focus.row].substr(focus.col).match(commands[cmd].unset.postPattern);
          }
        }
        if (commands[cmd].type == 'line') {
          if (!focus) {
            commandState[cmd] = null;
          } else {
            let state = this.lineTypes[start.row] == commands[cmd].className;
            for (let line = start.row; line <= end.row; line++) {
              if (this.lineTypes[line] == commands[cmd].className != state) {
                state = null;
                break;
              }
            }
            commandState[cmd] = state;
          }
        }
      }
      return commandState;
    }

    /**
     * Sets a command state
     * @param {string} command
     * @param {boolean} state
     */
    setCommandState(command, state) {
      if (commands[command].type == 'inline') {
        let anchor = this.getSelection(true);
        let focus = this.getSelection(false);
        if (!anchor) anchor = focus;
        if (!anchor) return;
        if (anchor.row != focus.row) return;
        if (!this.isInlineFormattingAllowed(focus, anchor)) return;
        let markupNode = this.computeEnclosingMarkupNode(focus, anchor, commands[command].className);
        this.clearDirtyFlag();

        // First case: There's an enclosing markup node, remove the markers around that markup node
        if (markupNode) {
          this.lineDirty[focus.row] = true;
          const startCol = this.computeColumn(markupNode, 0);
          const len = markupNode.textContent.length;
          const left = this.lines[focus.row].substr(0, startCol).replace(commands[command].unset.prePattern, '');
          const mid = this.lines[focus.row].substr(startCol, len);
          const right = this.lines[focus.row].substr(startCol + len).replace(commands[command].unset.postPattern, '');
          this.lines[focus.row] = left.concat(mid, right);
          anchor.col = left.length;
          focus.col = anchor.col + len;
          this.updateFormatting();
          this.setSelection(focus, anchor);
          this.fireChange();

          // Second case: Empty selection with surrounding formatting markers, remove those
        } else if (focus.col == anchor.col && !!this.lines[focus.row].substr(0, focus.col).match(commands[command].unset.prePattern) && !!this.lines[focus.row].substr(focus.col).match(commands[command].unset.postPattern)) {
          this.lineDirty[focus.row] = true;
          const left = this.lines[focus.row].substr(0, focus.col).replace(commands[command].unset.prePattern, '');
          const right = this.lines[focus.row].substr(focus.col).replace(commands[command].unset.postPattern, '');
          this.lines[focus.row] = left.concat(right);
          focus.col = anchor.col = left.length;
          this.updateFormatting();
          this.setSelection(focus, anchor);
          this.fireChange();

          // Not currently formatted, insert formatting markers
        } else {
          // Trim any spaces from the selection
          let {
            startCol,
            endCol
          } = focus.col < anchor.col ? {
            startCol: focus.col,
            endCol: anchor.col
          } : {
            startCol: anchor.col,
            endCol: focus.col
          };
          let match = this.lines[focus.row].substr(startCol, endCol - startCol).match(/^(?<leading>\s*).*\S(?<trailing>\s*)$/);
          if (match) {
            startCol += match.groups.leading.length;
            endCol -= match.groups.trailing.length;
          }
          focus.col = startCol;
          anchor.col = endCol;

          // Just insert markup before and after and hope for the best.
          this.wrapSelection(commands[command].set.pre, commands[command].set.post, focus, anchor);
          this.fireChange();
          // TODO clean this up so that markup remains properly nested
        }
      } else if (commands[command].type == 'line') {
        let anchor = this.getSelection(true);
        let focus = this.getSelection(false);
        if (!anchor) anchor = focus;
        if (!focus) return;
        this.clearDirtyFlag();
        let start = anchor.row > focus.row ? focus : anchor;
        let end = anchor.row > focus.row ? anchor : focus;
        if (end.row > start.row && end.col == 0) {
          end.row--;
        }
        for (let line = start.row; line <= end.row; line++) {
          if (state && this.lineTypes[line] != commands[command].className) {
            this.lines[line] = this.lines[line].replace(commands[command].set.pattern, commands[command].set.replacement.replace('$#', line - start.row + 1));
            this.lineDirty[line] = true;
          }
          if (!state && this.lineTypes[line] == commands[command].className) {
            this.lines[line] = this.lines[line].replace(commands[command].unset.pattern, commands[command].unset.replacement);
            this.lineDirty[line] = true;
          }
        }
        this.updateFormatting();
        this.setSelection({
          row: end.row,
          col: this.lines[end.row].length
        }, {
          row: start.row,
          col: 0
        });
        this.fireChange();
      }
    }

    /**
     * Returns whether or not inline formatting is allowed at the current focus
     * @param {object} focus The current focus
     */
    isInlineFormattingAllowed() {
      // TODO Remove parameters from all calls
      const sel = window.getSelection();
      if (!sel || !sel.focusNode || !sel.anchorNode) return false;

      // Check if we can find a common ancestor with the class `TMInlineFormatted`

      // Special case: Empty selection right before `TMInlineFormatted`
      if (sel.isCollapsed && sel.focusNode.nodeType == 3 && sel.focusOffset == sel.focusNode.nodeValue.length) {
        let node;
        for (node = sel.focusNode; node && node.nextSibling == null; node = node.parentNode);
        if (node && node.nextSibling.className && node.nextSibling.className.includes('TMInlineFormatted')) return true;
      }

      // Look for a common ancestor
      let ancestor = this.computeCommonAncestor(sel.focusNode, sel.anchorNode);
      if (!ancestor) return false;

      // Check if there's an ancestor of class 'TMInlineFormatted' or 'TMBlankLine'
      while (ancestor && ancestor != this.e) {
        if (ancestor.className && (ancestor.className.includes('TMInlineFormatted') || ancestor.className.includes('TMBlankLine'))) return true;
        ancestor = ancestor.parentNode;
      }
      return false;
    }

    /**
     * Wraps the current selection in the strings pre and post. If the selection is not on one line, returns.
     * @param {string} pre The string to insert before the selection.
     * @param {string} post The string to insert after the selection.
     * @param {object} focus The current selection focus. If null, selection will be computed.
     * @param {object} anchor The current selection focus. If null, selection will be computed.
     */
    wrapSelection(pre, post) {
      let focus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      let anchor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      if (!focus) focus = this.getSelection(false);
      if (!anchor) anchor = this.getSelection(true);
      if (!focus || !anchor || focus.row != anchor.row) return;
      this.lineDirty[focus.row] = true;
      const startCol = focus.col < anchor.col ? focus.col : anchor.col;
      const endCol = focus.col < anchor.col ? anchor.col : focus.col;
      const left = this.lines[focus.row].substr(0, startCol).concat(pre);
      const mid = endCol == startCol ? '' : this.lines[focus.row].substr(startCol, endCol - startCol);
      const right = post.concat(this.lines[focus.row].substr(endCol));
      this.lines[focus.row] = left.concat(mid, right);
      anchor.col = left.length;
      focus.col = anchor.col + mid.length;
      this.updateFormatting();
      this.setSelection(focus, anchor);
    }

    /**
     * Toggles the command state for a command (true <-> false)
     * @param {string} command The editor command
     */
    toggleCommandState(command) {
      if (!this.lastCommandState) this.lastCommandState = this.getCommandState();
      this.setCommandState(command, !this.lastCommandState[command]);
    }

    /**
     * Fires a change event. Updates the linked textarea and notifies any event listeners.
     */
    fireChange() {
      if (!this.textarea && !this.listeners.change.length) return;
      const content = this.getContent();
      if (this.textarea) this.textarea.value = content;
      for (let listener of this.listeners.change) {
        listener({
          content: content,
          linesDirty: this.linesDirty
        });
      }
    }

    /**
     * Fires a "selection changed" event.
     */
    fireSelection() {
      if (this.listeners.selection && this.listeners.selection.length) {
        let focus = this.getSelection(false);
        let anchor = this.getSelection(true);
        let commandState = this.getCommandState(focus, anchor);
        if (this.lastCommandState) {
          Object.assign(this.lastCommandState, commandState);
        } else {
          this.lastCommandState = Object.assign({}, commandState);
        }
        for (let listener of this.listeners.selection) {
          listener({
            focus: focus,
            anchor: anchor,
            commandState: this.lastCommandState
          });
        }
      }
    }

    /**
     * Adds an event listener.
     * @param {string} type The type of event to listen to. Can be 'change' or 'selection'
     * @param {*} listener Function of the type (event) => {} to be called when the event occurs.
     */
    addEventListener(type, listener) {
      if (type.match(/^(?:change|input)$/i)) {
        this.listeners.change.push(listener);
      }
      if (type.match(/^(?:selection|selectionchange)$/i)) {
        this.listeners.selection.push(listener);
      }
    }
  }

  exports.CommandBar = CommandBar;
  exports.Editor = Editor;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbInNyYy9zdmcvc3ZnLmpzIiwic3JjL1RpbnlNREVDb21tYW5kQmFyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWNhbGxhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1mbGFncy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLmZsYWdzLmpzIiwic3JjL2dyYW1tYXIuanMiLCJzcmMvVGlueU1ERS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdmcgPSB7XG4gIGJsb2NrcXVvdGU6IGA8c3ZnIGhlaWdodD1cIjE4XCIgd2lkdGg9XCIxOFwiPjxyZWN0IHdpZHRoPVwiNVwiIGhlaWdodD1cIjVcIiB4PVwiM1wiIHk9XCI0XCIgcnk9XCIxXCIvPjxyZWN0IHJ5PVwiMVwiIHk9XCI0XCIgeD1cIjEwXCIgaGVpZ2h0PVwiNVwiIHdpZHRoPVwiNVwiLz48cGF0aCBkPVwiTTggNi45OTl2M2MwIDEtMSAzLTEgM3MtLjMzMSAxLTEuMzMxIDFoLTFjLTEgMC0uNjY5LTEtLjY2OS0xczEtMiAxLTN2LTN6bTcgMHYzYzAgMS0xIDMtMSAzcy0uMzMxIDEtMS4zMzEgMWgtMWMtMSAwLS42NjktMS0uNjY5LTFzMS0yIDEtM3YtM3pcIi8+PC9zdmc+YCxcbiAgYm9sZDogYDxzdmcgaGVpZ2h0PVwiMThcIiB3aWR0aD1cIjE4XCI+PHBhdGggZD1cIk00IDJhMSAxIDAgMDAtMSAxdjEyYTEgMSAwIDAwMSAxaDZjNCAwIDUtMiA1LTQgMC0xLjMyMi0uNDM0LTIuNjM2LTEuODg1LTMuMzgxQzEzLjc3MiA3Ljg4NSAxNCA2Ljk0NSAxNCA2YzAtMi0xLTQtNS00em0xIDJoNGMxLjY2OCAwIDIuMzIuMzkzIDIuNi42NzIuMjguMjc5LjQuNjYyLjQgMS4zMjhzLS4xMiAxLjA1Ny0uNCAxLjMzOGMtLjI3NS4yNzQtMS4wMTQuNjQ2LTIuNi42NjJINXptNSA2YzEuNjY2LjAwNSAyLjMxOC4zODggMi41OTYuNjY2LjI3Ny4yNzguNDA0LjY2Ny40MDQgMS4zMzRzLS4xMjcgMS4wNi0uNDA0IDEuMzM4Yy0uMjc4LjI3OC0uOTMuNjYtMi41OTYuNjYybC00Ljk5Mi4wMDRMNSAxMHpcIi8+PC9zdmc+YCxcbiAgY2xlYXJfZm9ybWF0dGluZzogYDxzdmcgaGVpZ2h0PVwiMThcIiB3aWR0aD1cIjE4XCI+PHBhdGggZD1cIk0xMS4wMyAxYTEgMSAwIDAwLS43NC4zbC05IDlhMSAxIDAgMDAwIDEuNGw0IDRBMSAxIDAgMDA2IDE2aDJhMSAxIDAgMDAuNy0uM2w4LThhMSAxIDAgMDAwLTEuNGwtNS01YTEgMSAwIDAwLS42Ny0uM3pNOC43IDUuN2wzLjU4IDMuNkw3LjYgMTRINi40bC0zLTMgNS4zLTUuM3pcIi8+PHJlY3Qgcnk9XCIuOFwiIHJ4PVwiLjhcIiB5PVwiMTRcIiB4PVwiMTZcIiBoZWlnaHQ9XCIyXCIgd2lkdGg9XCIyXCIvPjxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiB4PVwiMTNcIiB5PVwiMTRcIiByeD1cIi44XCIgcnk9XCIuOFwiLz48cmVjdCByeT1cIi44XCIgcng9XCIuOFwiIHk9XCIxNFwiIHg9XCIxMFwiIGhlaWdodD1cIjJcIiB3aWR0aD1cIjJcIi8+PC9zdmc+YCxcbiAgY29kZTogYDxzdmcgaGVpZ2h0PVwiMThcIiB3aWR0aD1cIjE4XCI+PHBhdGggZD1cIk0xMy41IDIuOTk0YS41LjUgMCAwMC0uNS41LjUuNSAwIDAwMCAuMDM0VjQuNTNhNS45OTMgNS45OTMgMCAwMC03LjQ1MS0uNDQ1QTYgNiAwIDEwMTIuNDUgMTMuOWE1Ljk5IDUuOTkgMCAwMDEuMzQ2LTEuMzM0LjUuNSAwIDAwLjA5Ni0uMTAxLjUuNSAwIDAwLS4xMi0uNjk4LjUuNSAwIDAwLS42OTcuMTJsLS4wMDQtLjAwNWE1IDUgMCAwMS0xLjE5NyAxLjIgNSA1IDAgMTExLjIxNS02Ljk2NS41LjUgMCAwMC42OTcuMTIuNS41IDAgMDAuMjExLS40NFY0Ljc0NUgxNFYzLjQ5M2EuNS41IDAgMDAtLjUtLjV6XCIvPjwvc3ZnPmAsXG4gIGgxOiBgPHN2ZyBoZWlnaHQ9XCIxOFwiIHdpZHRoPVwiMThcIj48cGF0aCBkPVwiTTMgMnMwLTEgMS0xaDFjMSAwIDEgMSAxIDF2Nmg2VjJzMC0xIDEtMWgxYzEgMCAxIDEgMSAxdjE0czAgMS0xIDFoLTFjLTEgMC0xLTEtMS0xdi02SDZ2NnMwIDEtMSAxSDRjLTEgMC0xLTEtMS0xelwiLz48L3N2Zz5gLFxuICBoMjogYDxzdmcgaGVpZ2h0PVwiMThcIiB3aWR0aD1cIjE4XCI+PHBhdGggZD1cIk00IDJzMC0xIDEtMSAxIDEgMSAxdjZjMS0xIDItMSA0LTEgMyAwIDQgMiA0IDR2NXMwIDEtMSAxLTEtMS0xLTF2LTVjMC0xLjA5NC0xLTItMi0yLTIgMC0zIDAtNCAydjVzMCAxLTEgMS0xLTEtMS0xelwiLz48L3N2Zz5gLFxuICBocjogYDxzdmcgaGVpZ2h0PVwiMThcIiB3aWR0aD1cIjE4XCI+PHJlY3Qgcnk9XCIxXCIgeT1cIjhcIiBoZWlnaHQ9XCIyXCIgd2lkdGg9XCIxOFwiIHN0eWxlPVwiZm9udC12YXJpYXRpb24tc2V0dGluZ3M6bm9ybWFsO21hcmtlcjpub25lXCIvPjwvc3ZnPmAsXG4gIGltYWdlOiBgPHN2ZyBoZWlnaHQ9XCIxOFwiIHdpZHRoPVwiMThcIj48cGF0aCBkPVwiTTEgMnYxNGgxNlYySDF6bTIgMmgxMnY3bC0zLTMtNCA0LTItMi0zIDNWNHpcIi8+PGNpcmNsZSByPVwiMS41XCIgY3k9XCI2LjVcIiBjeD1cIjUuNVwiLz48L3N2Zz5gLFxuICBpdGFsaWM6IGA8c3ZnIGhlaWdodD1cIjE4XCIgd2lkdGg9XCIxOFwiPjxwYXRoIGQ9XCJNOSAyYTEgMSAwIDAwMCAyTDcgMTRhMSAxIDAgMTAwIDJoMmExIDEgMCAwMDAtMmwyLTEwYTEgMSAwIDEwMC0yelwiLz48L3N2Zz5gLFxuICBsaW5rOiBgPHN2ZyBoZWlnaHQ9XCIxOFwiIHdpZHRoPVwiMThcIj48cGF0aCBkPVwiTTkuMDcgNS4xOGEzLjkgMy45IDAgMDAtMS41Mi40M0M2LjMxIDYuMjIgNS4zIDcuMjkgNC4zIDguMjljLTEgMS0yLjA3IDIuMDItMi42OCAzLjI2LS4zMS42Mi0uNSAxLjMzLS40MSAyLjA3LjA5Ljc1LjQ4IDEuNDcgMS4xIDIuMDkuNjEuNjEgMS4zMyAxIDIuMDggMS4xLjc0LjA5IDEuNDUtLjEgMi4wNy0uNDIgMS4yNC0uNjEgMi4yNi0xLjY4IDMuMjYtMi42OC40Ni0uNDcuOTQtLjk0IDEuMzktMS40NGwtLjQzLjI2Yy0uNjguMzQtMS40OS41Ni0yLjM2LjQ2LS4yLS4wMy0uNC0uMDgtLjYtLjE0LS43OS43Ni0xLjU1IDEuNDUtMi4xNiAxLjc2LS4zOC4xOS0uNjcuMjQtLjkyLjIxLS4yNi0uMDMtLjU0LS4xNC0uOTItLjUzLS4zOS0uMzgtLjUtLjY2LS41My0uOTEtLjAzLS4yNi4wMi0uNTUuMjEtLjkzLjM5LS43NiAxLjMyLTEuNzQgMi4zMi0yLjc0IDEtMSAxLjk4LTEuOTMgMi43NC0yLjMyLjM4LS4xOS42Ny0uMjQuOTMtLjIxLjI1LjAzLjUzLjE0LjkxLjUzLjM5LjM4LjUuNjYuNTMuOTJ2LjA2bDEuMTItMS4wNi40NC0uNDdjLS4xOC0uMy0uNC0uNi0uNjctLjg3LS42Mi0uNjEtMS4zNC0xLTIuMDktMS4xYTMuMDggMy4wOCAwIDAwLS41NS0uMDF6XCIvPjxwYXRoIGQ9XCJNMTMuMDcuODZhMy45IDMuOSAwIDAwLTEuNTIuNDNjLTEuMjQuNjItMi4yNiAxLjY5LTMuMjYgMi42OS0uNDYuNDctLjk0Ljk0LTEuMzkgMS40My4xNS0uMDguMjgtLjE4LjQzLS4yNWE0LjQgNC40IDAgMDEyLjM2LS40NmMuMi4wMi40LjA3LjYuMTQuNzktLjc3IDEuNTUtMS40NiAyLjE2LTEuNzYuMzgtLjE5LjY3LS4yNS45My0uMjEuMjUuMDMuNTMuMTQuOTEuNTIuMzkuMzguNS42Ni41My45Mi4wMy4yNi0uMDIuNTUtLjIxLjkzLS4zOS43Ni0xLjMyIDEuNzQtMi4zMiAyLjc0LTEgMS0xLjk4IDEuOTMtMi43NCAyLjMxLS4zOC4yLS42Ny4yNS0uOTMuMjItLjI1LS4wNC0uNTMtLjE1LS45MS0uNTMtLjM5LS4zOC0uNS0uNjYtLjUzLS45MlY5Yy0uMzYuMzMtLjczLjY3LTEuMTIgMS4wNmwtLjQzLjQ2Yy4xNy4zLjQuNi42Ni44Ny42Mi42MiAxLjM0IDEgMi4wOCAxLjEuNzUuMSAxLjQ2LS4xIDIuMDgtLjQxIDEuMjQtLjYyIDIuMjYtMS42OSAzLjI2LTIuNjlzMi4wNy0yLjAyIDIuNjgtMy4yNmMuMzEtLjYyLjUtMS4zMi40MS0yLjA3YTMuNjMgMy42MyAwIDAwLTEuMS0yLjA4Yy0uNjEtLjYyLTEuMzMtMS0yLjA3LTEuMWEzLjA4IDMuMDggMCAwMC0uNTYtLjAyelwiLz48L3N2Zz5gLFxuICBvbDogYDxzdmcgaGVpZ2h0PVwiMThcIiB3aWR0aD1cIjE4XCI+PHBhdGggZD1cIk0xLjUgN2EuNS41IDAgMTAwIDFoMWEuNS41IDAgMDEuNS41YzAgLjE2NC0uMDguMzEtLjE0LjM1NWwtMS42NTUgMS4yNUEuNDkyLjQ5MiAwIDAwMSAxMC41YS41LjUgMCAwMC41LjVoMmEuNS41IDAgMDAwLTFIM2wuMzk4LS4yOTlBMS41IDEuNSAwIDAwMi41IDd6XCIvPjxwYXRoIGQ9XCJNMS41IDEyYy0uNjY3IDAtLjY2NyAxIDAgMWgxLjI1Yy4zMzMgMCAuMzMzLjUgMCAuNUgyLjVjLS42NjcgMC0uNjY3IDEgMCAxaC4yNWMuMzMzIDAgLjMzMy41IDAgLjVIMS41Yy0uNjY3IDAtLjY2NyAxIDAgMWgxYy4zOTggMCAuNzgtLjEzMSAxLjA2LS4zNjUuMjgyLS4yMzUuNDQtLjU1NC40NC0uODg1YTEuMTIxIDEuMTIxIDAgMDAtLjMwMy0uNzVjLjE5MS0uMjA0LjMtLjQ3LjMwMy0uNzUgMC0uMzMyLS4xNTgtLjY1MS0uNDQtLjg4NS0uMy0uMjQxLS42NzUtLjM3LTEuMDYtLjM2NXpcIi8+PHJlY3QgeT1cIjEzXCIgeD1cIjZcIiBoZWlnaHQ9XCIyXCIgd2lkdGg9XCIxMlwiIHJ5PVwiMVwiLz48cmVjdCByeT1cIjFcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMlwiIHg9XCI2XCIgeT1cIjhcIi8+PHJlY3QgeT1cIjNcIiB4PVwiNlwiIGhlaWdodD1cIjJcIiB3aWR0aD1cIjEyXCIgcnk9XCIxXCIvPjxwYXRoIGQ9XCJNMS41IDJhLjUuNSAwIDEwMCAxSDJ2MmgtLjVhLjUuNSAwIDEwMCAxaDJhLjUuNSAwIDEwMC0xSDNWMi41YzAtLjI3Ny0uMjIzLS41LS41LS41elwiLz48L3N2Zz5gLFxuICBzdHJpa2V0aHJvdWdoOiBgPHN2ZyB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIj48cGF0aCBkPVwiTTEwIDJDNiAyIDQgNCA0IDZjMCAuMzM4LjA4LjY3Mi4xOTMgMWgyLjM0QzYuMTEzIDYuNjI5IDYgNi4yOTUgNiA2YzAtLjMzNC4xMTctLjcyNS42OTEtMS4xNTRDNy4yNjUgNC40MTYgOC4zMzEgNCAxMCA0aDNhMSAxIDAgMDAwLTJ6bTEuNDc3IDljLjQxMy4zNjguNTIzLjcwNi41MjMgMSAwIC4zMzQtLjEyNy43MTItLjcwMSAxLjE0My0uNTc1LjQzLTEuNjMyLjg1LTMuMjk5Ljg1N2wtMS4wMDYuMDA3VjE0SDVhMSAxIDAgMDAwIDJoM2M0IDAgNi0yIDYtNCAwLS4zMzgtLjA4MS0uNjcyLS4xOTUtMXpcIi8+PHJlY3Qgcnk9XCIxXCIgeT1cIjhcIiB4PVwiMVwiIGhlaWdodD1cIjJcIiB3aWR0aD1cIjE2XCIvPjwvc3ZnPmAsXG4gIHVsOiBgPHN2ZyBoZWlnaHQ9XCIxOFwiIHdpZHRoPVwiMThcIj48Y2lyY2xlIGN4PVwiMlwiIGN5PVwiOVwiIHI9XCIyXCIvPjxjaXJjbGUgY3k9XCI0XCIgY3g9XCIyXCIgcj1cIjJcIi8+PHJlY3QgeT1cIjNcIiB4PVwiNlwiIGhlaWdodD1cIjJcIiB3aWR0aD1cIjEyXCIgcnk9XCIxXCIvPjxjaXJjbGUgY3g9XCIyXCIgY3k9XCIxNFwiIHI9XCIyXCIvPjxyZWN0IHJ5PVwiMVwiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIyXCIgeD1cIjZcIiB5PVwiOFwiLz48cmVjdCB5PVwiMTNcIiB4PVwiNlwiIGhlaWdodD1cIjJcIiB3aWR0aD1cIjEyXCIgcnk9XCIxXCIvPjwvc3ZnPmBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN2ZzsiLCJpbXBvcnQgc3ZnIGZyb20gJy4vc3ZnL3N2Zyc7XG5cbmNvbnN0IGlzTWFjTGlrZSA9IC8oTWFjfGlQaG9uZXxpUG9kfGlQYWQpL2kudGVzdCh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiID8gbmF2aWdhdG9yLnBsYXRmb3JtIDogXCJcIik7XG5cbmNvbnN0IERlZmF1bHRDb21tYW5kcyA9IHtcbiAgJ2JvbGQnOiB7XG4gICAgbmFtZTogJ2JvbGQnLFxuICAgIGFjdGlvbjogJ2JvbGQnLFxuICAgIGlubmVySFRNTDogc3ZnLmJvbGQsXG4gICAgdGl0bGU6ICdCb2xkJyxcbiAgICBob3RrZXk6ICdNb2QtQicsXG4gIH0sXG4gICdpdGFsaWMnOiB7XG4gICAgbmFtZTogJ2l0YWxpYycsXG4gICAgYWN0aW9uOiAnaXRhbGljJyxcbiAgICBpbm5lckhUTUw6IHN2Zy5pdGFsaWMsXG4gICAgdGl0bGU6ICdJdGFsaWMnLFxuICAgIGhvdGtleTogJ01vZC1JJyxcbiAgfSxcbiAgJ3N0cmlrZXRocm91Z2gnOiB7XG4gICAgbmFtZTogJ3N0cmlrZXRocm91Z2gnLFxuICAgIGFjdGlvbjogJ3N0cmlrZXRocm91Z2gnLFxuICAgIGlubmVySFRNTDogc3ZnLnN0cmlrZXRocm91Z2gsXG4gICAgdGl0bGU6ICdTdHJpa2V0aHJvdWdoJyxcbiAgICBob3RrZXk6ICdNb2QyLVNoaWZ0LTUnLFxuICB9LFxuICAnY29kZSc6IHtcbiAgICBuYW1lOiAnY29kZScsXG4gICAgYWN0aW9uOiAnY29kZScsXG4gICAgaW5uZXJIVE1MOiBzdmcuY29kZSxcbiAgICB0aXRsZTogJ0Zvcm1hdCBhcyBjb2RlJyxcbiAgfSxcbiAgJ2gxJzoge1xuICAgIG5hbWU6ICdoMScsXG4gICAgYWN0aW9uOiAnaDEnLFxuICAgIGlubmVySFRNTDogc3ZnLmgxLFxuICAgIHRpdGxlOiAnTGV2ZWwgMSBoZWFkaW5nJyxcbiAgICBob3RrZXk6ICdNb2QtU2hpZnQtMScsXG4gIH0sXG4gICdoMic6IHtcbiAgICBuYW1lOiAnaDInLFxuICAgIGFjdGlvbjogJ2gyJyxcbiAgICBpbm5lckhUTUw6IHN2Zy5oMixcbiAgICB0aXRsZTogJ0xldmVsIDIgaGVhZGluZycsXG4gICAgaG90a2V5OiAnTW9kLVNoaWZ0LTInLFxuICB9LFxuICAndWwnOiB7XG4gICAgbmFtZTogJ3VsJyxcbiAgICBhY3Rpb246ICd1bCcsXG4gICAgaW5uZXJIVE1MOiBzdmcudWwsXG4gICAgdGl0bGU6ICdCdWxsZXRlZCBsaXN0JyxcbiAgfSxcbiAgJ29sJzoge1xuICAgIG5hbWU6ICdvbCcsXG4gICAgYWN0aW9uOiAnb2wnLFxuICAgIGlubmVySFRNTDogc3ZnLm9sLFxuICAgIHRpdGxlOiAnTnVtYmVyZWQgbGlzdCcsXG4gIH0sXG4gICdibG9ja3F1b3RlJzoge1xuICAgIG5hbWU6ICdibG9ja3F1b3RlJyxcbiAgICBhY3Rpb246ICdibG9ja3F1b3RlJyxcbiAgICBpbm5lckhUTUw6IHN2Zy5ibG9ja3F1b3RlLFxuICAgIHRpdGxlOiAnUXVvdGUnLFxuICAgIGhvdGtleTogJ01vZDItU2hpZnQtUScsXG4gIH0sXG4gICdpbnNlcnRMaW5rJzoge1xuICAgIG5hbWU6ICdpbnNlcnRMaW5rJyxcbiAgICBhY3Rpb246IChlZGl0b3IpID0+IHtpZiAoZWRpdG9yLmlzSW5saW5lRm9ybWF0dGluZ0FsbG93ZWQoKSkgZWRpdG9yLndyYXBTZWxlY3Rpb24oJ1snLCAnXSgpJyl9LFxuICAgIGVuYWJsZWQ6IChlZGl0b3IsIGZvY3VzLCBhbmNob3IpID0+IGVkaXRvci5pc0lubGluZUZvcm1hdHRpbmdBbGxvd2VkKGZvY3VzLCBhbmNob3IpID8gZmFsc2UgOiBudWxsLFxuICAgIGlubmVySFRNTDogc3ZnLmxpbmssXG4gICAgdGl0bGU6ICdJbnNlcnQgbGluaycsXG4gICAgaG90a2V5OiAnTW9kLUsnLFxuICB9LFxuICAnaW5zZXJ0SW1hZ2UnOiB7XG4gICAgbmFtZTogJ2luc2VydEltYWdlJyxcbiAgICBhY3Rpb246IChlZGl0b3IpID0+IHtpZiAoZWRpdG9yLmlzSW5saW5lRm9ybWF0dGluZ0FsbG93ZWQoKSkgZWRpdG9yLndyYXBTZWxlY3Rpb24oJyFbJywgJ10oKScpfSxcbiAgICBlbmFibGVkOiAoZWRpdG9yLCBmb2N1cywgYW5jaG9yKSA9PiBlZGl0b3IuaXNJbmxpbmVGb3JtYXR0aW5nQWxsb3dlZChmb2N1cywgYW5jaG9yKSA/IGZhbHNlIDogbnVsbCxcbiAgICBpbm5lckhUTUw6IHN2Zy5pbWFnZSxcbiAgICB0aXRsZTogJ0luc2VydCBpbWFnZScsXG4gICAgaG90a2V5OiAnTW9kMi1TaGlmdC1JJyxcbiAgfSxcbiAgJ2hyJzoge1xuICAgIG5hbWU6ICdocicsXG4gICAgYWN0aW9uOiAoZWRpdG9yKSA9PiBlZGl0b3IucGFzdGUoJ1xcbioqKlxcbicpLFxuICAgIGVuYWJsZWQ6ICgpID0+IGZhbHNlLFxuICAgIGlubmVySFRNTDogc3ZnLmhyLFxuICAgIHRpdGxlOiAnSW5zZXJ0IGhvcml6b250YWwgbGluZScsXG4gICAgaG90a2V5OiAnTW9kMi1TaGlmdC1MJ1xuICB9XG59XG5cblxuY2xhc3MgQ29tbWFuZEJhciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5lID0gbnVsbDtcbiAgICB0aGlzLmVkaXRvciA9IG51bGw7XG4gICAgdGhpcy5jb21tYW5kcyA9IFtdO1xuICAgIHRoaXMuYnV0dG9ucyA9IHt9O1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLmhvdGtleXMgPSBbXTtcblxuICAgIGxldCBlbGVtZW50ID0gcHJvcHMuZWxlbWVudDtcbiAgICBpZiAoZWxlbWVudCAmJiAhZWxlbWVudC50YWdOYW1lKSB7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvcHMuZWxlbWVudCk7XG4gICAgfVxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmJvZHk7IFxuICAgIH1cbiAgICB0aGlzLmNyZWF0ZUNvbW1hbmRCYXJFbGVtZW50KGVsZW1lbnQsIHByb3BzLmNvbW1hbmRzIHx8IFsnYm9sZCcsICdpdGFsaWMnLCAnc3RyaWtldGhyb3VnaCcsICd8JywgJ2NvZGUnLCAnfCcsICdoMScsICdoMicsICd8JywgJ3VsJywgJ29sJywgJ3wnLCAnYmxvY2txdW90ZScsICdocicsICd8JywgJ2luc2VydExpbmsnLCAnaW5zZXJ0SW1hZ2UnXSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB0aGlzLmhhbmRsZUtleWRvd24oZSkpO1xuICAgIGlmIChwcm9wcy5lZGl0b3IpIHRoaXMuc2V0RWRpdG9yKHByb3BzLmVkaXRvcik7XG4gIH1cblxuICBjcmVhdGVDb21tYW5kQmFyRWxlbWVudChwYXJlbnRFbGVtZW50LCBjb21tYW5kcykge1xuICAgIHRoaXMuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZS5jbGFzc05hbWUgPSAnVE1Db21tYW5kQmFyJztcblxuICAgIGZvciAobGV0IGNvbW1hbmQgb2YgY29tbWFuZHMpIHtcbiAgICAgIGlmIChjb21tYW5kID09ICd8Jykge1xuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gJ1RNQ29tbWFuZERpdmlkZXInO1xuICAgICAgICB0aGlzLmUuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNvbW1hbmROYW1lO1xuICAgICAgICBpZiAodHlwZW9mIGNvbW1hbmQgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIC8vIFJlZmVyZW5jZSB0byBkZWZhdWx0IGNvbW1hbmRcblxuICAgICAgICAgIGlmIChEZWZhdWx0Q29tbWFuZHNbY29tbWFuZF0pIHtcbiAgICAgICAgICAgIGNvbW1hbmROYW1lID0gY29tbWFuZDtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHNbY29tbWFuZE5hbWVdID0gRGVmYXVsdENvbW1hbmRzW2NvbW1hbmROYW1lXTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29tbWFuZCA9PSBcIm9iamVjdFwiICYmIGNvbW1hbmQubmFtZSkge1xuICAgICAgICAgIGNvbW1hbmROYW1lID0gY29tbWFuZC5uYW1lO1xuICAgICAgICAgIHRoaXMuY29tbWFuZHNbY29tbWFuZE5hbWVdID0ge307IFxuICAgICAgICAgIGlmIChEZWZhdWx0Q29tbWFuZHNbY29tbWFuZE5hbWVdKSBPYmplY3QuYXNzaWduKHRoaXMuY29tbWFuZHNbY29tbWFuZE5hbWVdLCBEZWZhdWx0Q29tbWFuZHNbY29tbWFuZE5hbWVdKTtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY29tbWFuZHNbY29tbWFuZE5hbWVdLCBjb21tYW5kKTtcbiAgICAgICAgXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0aXRsZSA9IHRoaXMuY29tbWFuZHNbY29tbWFuZE5hbWVdLnRpdGxlIHx8IGNvbW1hbmROYW1lO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbW1hbmRzW2NvbW1hbmROYW1lXS5ob3RrZXkpIHtcbiAgICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5jb21tYW5kc1tjb21tYW5kTmFtZV0uaG90a2V5LnNwbGl0KCctJyk7XG4gICAgICAgICAgLy8gY29uc3RydWN0IG1vZGlmaWVyc1xuICAgICAgICAgIGxldCBtb2RpZmllcnMgPSBbXTtcbiAgICAgICAgICBsZXQgbW9kaWZpZXJleHBsYW5hdGlvbiA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5c1tpXSkge1xuICAgICAgICAgICAgICBjYXNlICdDdHJsJzogbW9kaWZpZXJzLnB1c2goJ2N0cmxLZXknKTsgbW9kaWZpZXJleHBsYW5hdGlvbi5wdXNoKCdDdHJsJyk7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdDbWQnOiBtb2RpZmllcnMucHVzaCgnbWV0YUtleScpOyBtb2RpZmllcmV4cGxhbmF0aW9uLnB1c2goJ+KMmCcpOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnQWx0JzogbW9kaWZpZXJzLnB1c2goJ2FsdEtleScpOyBtb2RpZmllcmV4cGxhbmF0aW9uLnB1c2goJ0FsdCcpOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnT3B0aW9uJzogbW9kaWZpZXJzLnB1c2goJ2FsdEtleScpOyBtb2RpZmllcmV4cGxhbmF0aW9uLnB1c2goJ+KMpScpOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnV2luJzogbW9kaWZpZXJzLnB1c2goJ21ldGFLZXknKTsgbW9kaWZpZXJleHBsYW5hdGlvbi5wdXNoKCfiip4gV2luJyk7IGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ1NoaWZ0JzogIG1vZGlmaWVycy5wdXNoKCdzaGlmdEtleScpOyBtb2RpZmllcmV4cGxhbmF0aW9uLnB1c2goJ+KHpycpOyBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlICdNb2QnOiAvLyBNb2QgaXMgYSBjb252ZW5pZW5jZSBtZWNoYW5pc206IEN0cmwgb24gV2luZG93cywgQ21kIG9uIE1hY1xuICAgICAgICAgICAgICAgIGlmIChpc01hY0xpa2UpIHttb2RpZmllcnMucHVzaCgnbWV0YUtleScpOyBtb2RpZmllcmV4cGxhbmF0aW9uLnB1c2goJ+KMmCcpO30gXG4gICAgICAgICAgICAgICAgZWxzZSB7bW9kaWZpZXJzLnB1c2goJ2N0cmxLZXknKTsgbW9kaWZpZXJleHBsYW5hdGlvbi5wdXNoKCdDdHJsJyk7fSBcbiAgICAgICAgICAgICAgICBicmVhazsgXG4gICAgICAgICAgICAgIGNhc2UgJ01vZDInOiBcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnYWx0S2V5Jyk7IFxuICAgICAgICAgICAgICAgIGlmIChpc01hY0xpa2UpIG1vZGlmaWVyZXhwbGFuYXRpb24ucHVzaCgn4oylJyk7XG4gICAgICAgICAgICAgICAgZWxzZSBtb2RpZmllcmV4cGxhbmF0aW9uLnB1c2goJ0FsdCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBNb2QyIGlzIGEgY29udmVuaWVuY2UgbWVjaGFuaXNtOiBBbHQgb24gV2luZG93cywgT3B0aW9uIG9uIE1hY1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBtb2RpZmllcmV4cGxhbmF0aW9uLnB1c2goa2V5c1trZXlzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICBsZXQgaG90a2V5ID0ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBtb2RpZmllcnM6IG1vZGlmaWVycyxcbiAgICAgICAgICAgIGNvbW1hbmQ6IGNvbW1hbmROYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgICAgLy8gVE9ETyBSaWdodCBub3cgdGhpcyBpcyB3b3JraW5nIG9ubHkgZm9yIGxldHRlcnMgYW5kIG51bWJlcnNcbiAgICAgICAgICBpZiAoa2V5c1trZXlzLmxlbmd0aCAtIDFdLm1hdGNoKC9eWzAtOV0kLykpIHtcbiAgICAgICAgICAgIGhvdGtleS5jb2RlID0gYERpZ2l0JHtrZXlzW2tleXMubGVuZ3RoIC0gMV19YDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG90a2V5LmtleSA9IGtleXNba2V5cy5sZW5ndGggLSAxXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmhvdGtleXMucHVzaChob3RrZXkpO1xuICAgICAgICAgIHRpdGxlID0gdGl0bGUuY29uY2F0KGAgKCR7bW9kaWZpZXJleHBsYW5hdGlvbi5qb2luKCcrJyl9KWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idXR0b25zW2NvbW1hbmROYW1lXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmJ1dHRvbnNbY29tbWFuZE5hbWVdLmNsYXNzTmFtZSA9ICdUTUNvbW1hbmRCdXR0b24gVE1Db21tYW5kQnV0dG9uX0Rpc2FibGVkJztcbiAgICAgICAgdGhpcy5idXR0b25zW2NvbW1hbmROYW1lXS50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmJ1dHRvbnNbY29tbWFuZE5hbWVdLmlubmVySFRNTCA9IHRoaXMuY29tbWFuZHNbY29tbWFuZE5hbWVdLmlubmVySFRNTDtcblxuICAgICAgICB0aGlzLmJ1dHRvbnNbY29tbWFuZE5hbWVdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGNvbW1hbmROYW1lLCBlKSk7XG4gICAgICAgIHRoaXMuZS5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbnNbY29tbWFuZE5hbWVdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmUpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soY29tbWFuZE5hbWUsIGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmVkaXRvcikgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbW1hbmRzW2NvbW1hbmROYW1lXS5hY3Rpb24gPT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKHRoaXMuc3RhdGVbY29tbWFuZE5hbWVdID09PSBmYWxzZSkgdGhpcy5lZGl0b3Iuc2V0Q29tbWFuZFN0YXRlKGNvbW1hbmROYW1lLCB0cnVlKTtcbiAgICAgIGVsc2UgdGhpcy5lZGl0b3Iuc2V0Q29tbWFuZFN0YXRlKGNvbW1hbmROYW1lLCBmYWxzZSk7ICBcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmNvbW1hbmRzW2NvbW1hbmROYW1lXS5hY3Rpb24gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLmNvbW1hbmRzW2NvbW1hbmROYW1lXS5hY3Rpb24odGhpcy5lZGl0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHNldEVkaXRvcihlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcbiAgICBlZGl0b3IuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uJywgKGUpID0+IHRoaXMuaGFuZGxlU2VsZWN0aW9uKGUpKTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5jb21tYW5kU3RhdGUpIHtcbiAgICAgIGZvciAobGV0IGNvbW1hbmQgaW4gdGhpcy5jb21tYW5kcykge1xuICAgICAgICBpZiAoZXZlbnQuY29tbWFuZFN0YXRlW2NvbW1hbmRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5jb21tYW5kc1tjb21tYW5kXS5lbmFibGVkKSB0aGlzLnN0YXRlW2NvbW1hbmRdID0gdGhpcy5jb21tYW5kc1tjb21tYW5kXS5lbmFibGVkKHRoaXMuZWRpdG9yLCBldmVudC5mb2N1cywgZXZlbnQuYW5jaG9yKTtcbiAgICAgICAgICBlbHNlIHRoaXMuc3RhdGVbY29tbWFuZF0gPSBldmVudC5mb2N1cyA/IGZhbHNlIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW2NvbW1hbmRdID0gZXZlbnQuY29tbWFuZFN0YXRlW2NvbW1hbmRdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGVbY29tbWFuZF0gPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmJ1dHRvbnNbY29tbWFuZF0uY2xhc3NOYW1lID0gJ1RNQ29tbWFuZEJ1dHRvbiBUTUNvbW1hbmRCdXR0b25fQWN0aXZlJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlW2NvbW1hbmRdID09PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuYnV0dG9uc1tjb21tYW5kXS5jbGFzc05hbWUgPSAnVE1Db21tYW5kQnV0dG9uIFRNQ29tbWFuZEJ1dHRvbl9JbmFjdGl2ZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5idXR0b25zW2NvbW1hbmRdLmNsYXNzTmFtZSA9ICAnVE1Db21tYW5kQnV0dG9uIFRNQ29tbWFuZEJ1dHRvbl9EaXNhYmxlZCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlkb3duKGV2ZW50KSB7XG4gICAgb3V0ZXI6IGZvciAobGV0IGhvdGtleSBvZiB0aGlzLmhvdGtleXMpIHtcbiAgICAgIGlmICgoaG90a2V5LmtleSAmJiBldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PSBob3RrZXkua2V5KSB8fCAoaG90a2V5LmNvZGUgJiYgZXZlbnQuY29kZSA9PSBob3RrZXkuY29kZSkpIHtcbiAgICAgICAgLy8gS2V5IG1hdGNoZXMgaG90a2V5LiBMb29rIGZvciBhbnkgcmVxdWlyZWQgbW9kaWZpZXIgdGhhdCB3YXNuJ3QgcHJlc3NlZFxuICAgICAgICBmb3IgKGxldCBtb2RpZmllciBvZiBob3RrZXkubW9kaWZpZXJzKSB7XG4gICAgICAgICAgaWYgKCFldmVudFttb2RpZmllcl0pIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV2ZXJ5dGhpbmcgbWF0Y2hlcy5cbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayhob3RrZXkuY29tbWFuZCwgZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1hbmRCYXI7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IHRoaXMgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3Rcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbnZhciBJU19IVE1MRERBID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhbGw6IGRvY3VtZW50QWxsLFxuICBJU19IVE1MRERBOiBJU19IVE1MRERBXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkb2N1bWVudEFsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1hbGwnKTtcblxudmFyIGRvY3VtZW50QWxsID0gJGRvY3VtZW50QWxsLmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG5tb2R1bGUuZXhwb3J0cyA9ICRkb2N1bWVudEFsbC5JU19IVE1MRERBID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgJGRvY3VtZW50QWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWFsbCcpO1xuXG52YXIgZG9jdW1lbnRBbGwgPSAkZG9jdW1lbnRBbGwuYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICRkb2N1bWVudEFsbC5JU19IVE1MRERBID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpIHx8IGl0ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pIDogZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiAnMy4zMy4wJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE0LTIwMjMgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My4zMy4wL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sWydmb3InXSB8fCBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzT3duKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpXG4gICAgICA/IFN5bWJvbFtuYW1lXVxuICAgICAgOiBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIG1ha2VCdWlsdEluKGRlc2NyaXB0b3IuZ2V0LCBuYW1lLCB7IGdldHRlcjogdHJ1ZSB9KTtcbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLnNldCwgbmFtZSwgeyBzZXR0ZXI6IHRydWUgfSk7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eS5mKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS5mbGFnc2AgZ2V0dGVyIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5oYXNJbmRpY2VzKSByZXN1bHQgKz0gJ2QnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQuZG90QWxsKSByZXN1bHQgKz0gJ3MnO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC51bmljb2RlU2V0cykgcmVzdWx0ICs9ICd2JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG52YXIgcmVnRXhwRmxhZ3MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gYmFiZWwtbWluaWZ5IGFuZCBDbG9zdXJlIENvbXBpbGVyIHRyYW5zcGlsZXMgUmVnRXhwKCcuJywgJ2QnKSAtPiAvLi9kIGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbnZhciBSZWdFeHAgPSBnbG9iYWwuUmVnRXhwO1xudmFyIFJlZ0V4cFByb3RvdHlwZSA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cbnZhciBGT1JDRUQgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBJTkRJQ0VTX1NVUFBPUlQgPSB0cnVlO1xuICB0cnkge1xuICAgIFJlZ0V4cCgnLicsICdkJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgSU5ESUNFU19TVVBQT1JUID0gZmFsc2U7XG4gIH1cblxuICB2YXIgTyA9IHt9O1xuICAvLyBtb2Rlcm4gVjggYnVnXG4gIHZhciBjYWxscyA9ICcnO1xuICB2YXIgZXhwZWN0ZWQgPSBJTkRJQ0VTX1NVUFBPUlQgPyAnZGdpbXN5JyA6ICdnaW1zeSc7XG5cbiAgdmFyIGFkZEdldHRlciA9IGZ1bmN0aW9uIChrZXksIGNocikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBrZXksIHsgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxscyArPSBjaHI7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IH0pO1xuICB9O1xuXG4gIHZhciBwYWlycyA9IHtcbiAgICBkb3RBbGw6ICdzJyxcbiAgICBnbG9iYWw6ICdnJyxcbiAgICBpZ25vcmVDYXNlOiAnaScsXG4gICAgbXVsdGlsaW5lOiAnbScsXG4gICAgc3RpY2t5OiAneSdcbiAgfTtcblxuICBpZiAoSU5ESUNFU19TVVBQT1JUKSBwYWlycy5oYXNJbmRpY2VzID0gJ2QnO1xuXG4gIGZvciAodmFyIGtleSBpbiBwYWlycykgYWRkR2V0dGVyKGtleSwgcGFpcnNba2V5XSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxuICB2YXIgcmVzdWx0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihSZWdFeHBQcm90b3R5cGUsICdmbGFncycpLmdldC5jYWxsKE8pO1xuXG4gIHJldHVybiByZXN1bHQgIT09IGV4cGVjdGVkIHx8IGNhbGxzICE9PSBleHBlY3RlZDtcbn0pO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS5mbGFnc2AgZ2V0dGVyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG5pZiAoRk9SQ0VEKSBkZWZpbmVCdWlsdEluQWNjZXNzb3IoUmVnRXhwUHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiByZWdFeHBGbGFnc1xufSk7XG4iLCIvLyBjb25zdCByZXBsYWNlbWVudHMgPSB7XG4vLyAgIEFTQ0lJUHVuY3R1YXRpb246ICchXCIjJCUmXFwnKCkqKyxcXFxcLS4vOjs8PT4/QFxcXFxbXFxcXF1eX2B7fH1+Jyxcbi8vICAgVHJpZ2dlckNoYXJzOiAnYF9cXCpcXFtcXF1cXChcXCknLFxuLy8gICBTY2hlbWU6IGBbQS1aYS16XVtBLVphLXowLTlcXCtcXC5cXC1dezEsMzF9YCxcbi8vICAgRW1haWw6IGBbYS16QS1aMC05LiEjJCUmJyorLz0/Xl9cXGB7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcXFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSpgLCAvLyBGcm9tIENvbW1vbk1hcmsgc3BlY1xuXG4vLyB9XG5jb25zdCByZXBsYWNlbWVudHMgPSB7XG4gIEFTQ0lJUHVuY3R1YXRpb246IC9bIVwiIyQlJicoKSorLFxcLS4vOjs8PT4/QFtcXF1eX2B7fH1+XFxcXF0vLCAgXG4gIE5vdFRyaWdnZXJDaGFyOiAvW15gXypbXFxdKCk8PiF+XS8sXG4gIFNjaGVtZTogL1tBLVphLXpdW0EtWmEtejAtOSsuLV17MSwzMX0vLFxuICBFbWFpbDogL1thLXpBLVowLTkuISMkJSYnKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqLywgLy8gRnJvbSBDb21tb25NYXJrIHNwZWNcbiAgSFRNTE9wZW5UYWc6IC88SFRNTFRhZ05hbWUoPzpIVE1MQXR0cmlidXRlKSpcXHMqXFwvPz4vLFxuICBIVE1MQ2xvc2VUYWc6IC88XFwvSFRNTFRhZ05hbWVcXHMqPi8sXG4gIEhUTUxUYWdOYW1lOiAvW0EtWmEtel1bQS1aYS16MC05LV0qLywgXG4gIEhUTUxDb21tZW50OiAvPCEtLSg/OltePi1dfCg/OltePi1dKD86W14tXXwtW14tXSkqW14tXSkpLS0+LyxcbiAgSFRNTFBJOiAvPFxcPyg/OnwufCg/OlteP118XFw/W14+XSkqKVxcPz4vLFxuICBIVE1MRGVjbGFyYXRpb246IC88IVtBLVpdK1xcc1tePl0qPi8sXG4gIEhUTUxDREFUQTogLzwhXFxbQ0RBVEFcXFsuKj9cXF1cXF0+LyxcbiAgSFRNTEF0dHJpYnV0ZTogL1xccytbQS1aYS16XzpdW0EtWmEtejAtOV8uOi1dKig/OkhUTUxBdHRWYWx1ZSk/LyxcbiAgSFRNTEF0dFZhbHVlOiAvXFxzKj1cXHMqKD86KD86J1teJ10qJyl8KD86XCJbXlwiXSpcIil8KD86W15cXHNcIic9PD5gXSspKS8sXG4gIEtub3duVGFnOiAvYWRkcmVzc3xhcnRpY2xlfGFzaWRlfGJhc2V8YmFzZWZvbnR8YmxvY2txdW90ZXxib2R5fGNhcHRpb258Y2VudGVyfGNvbHxjb2xncm91cHxkZHxkZXRhaWxzfGRpYWxvZ3xkaXJ8ZGl2fGRsfGR0fGZpZWxkc2V0fGZpZ2NhcHRpb258ZmlndXJlfGZvb3Rlcnxmb3JtfGZyYW1lfGZyYW1lc2V0fGgxfGgyfGgzfGg0fGg1fGg2fGhlYWR8aGVhZGVyfGhyfGh0bWx8aWZyYW1lfGxlZ2VuZHxsaXxsaW5rfG1haW58bWVudXxtZW51aXRlbXxuYXZ8bm9mcmFtZXN8b2x8b3B0Z3JvdXB8b3B0aW9ufHB8cGFyYW18c2VjdGlvbnxzb3VyY2V8c3VtbWFyeXx0YWJsZXx0Ym9keXx0ZHx0Zm9vdHx0aHx0aGVhZHx0aXRsZXx0cnx0cmFja3x1bC9cbn1cblxuLy8gRnJvbSBDb21tb25NYXJrLmpzLiBcbmNvbnN0IHB1bmN0dWF0aW9uTGVhZGluZyA9IG5ldyBSZWdFeHAoL14oPzpbIVwiIyQlJicoKSorLFxcLS4vOjs8PT4/QFtcXF1cXFxcXl9ge3x9flxceEExXFx4QTdcXHhBQlxceEI2XFx4QjdcXHhCQlxceEJGXFx1MDM3RVxcdTAzODdcXHUwNTVBLVxcdTA1NUZcXHUwNTg5XFx1MDU4QVxcdTA1QkVcXHUwNUMwXFx1MDVDM1xcdTA1QzZcXHUwNUYzXFx1MDVGNFxcdTA2MDlcXHUwNjBBXFx1MDYwQ1xcdTA2MERcXHUwNjFCXFx1MDYxRVxcdTA2MUZcXHUwNjZBLVxcdTA2NkRcXHUwNkQ0XFx1MDcwMC1cXHUwNzBEXFx1MDdGNy1cXHUwN0Y5XFx1MDgzMC1cXHUwODNFXFx1MDg1RVxcdTA5NjRcXHUwOTY1XFx1MDk3MFxcdTBBRjBcXHUwREY0XFx1MEU0RlxcdTBFNUFcXHUwRTVCXFx1MEYwNC1cXHUwRjEyXFx1MEYxNFxcdTBGM0EtXFx1MEYzRFxcdTBGODVcXHUwRkQwLVxcdTBGRDRcXHUwRkQ5XFx1MEZEQVxcdTEwNEEtXFx1MTA0RlxcdTEwRkJcXHUxMzYwLVxcdTEzNjhcXHUxNDAwXFx1MTY2RFxcdTE2NkVcXHUxNjlCXFx1MTY5Q1xcdTE2RUItXFx1MTZFRFxcdTE3MzVcXHUxNzM2XFx1MTdENC1cXHUxN0Q2XFx1MTdEOC1cXHUxN0RBXFx1MTgwMC1cXHUxODBBXFx1MTk0NFxcdTE5NDVcXHUxQTFFXFx1MUExRlxcdTFBQTAtXFx1MUFBNlxcdTFBQTgtXFx1MUFBRFxcdTFCNUEtXFx1MUI2MFxcdTFCRkMtXFx1MUJGRlxcdTFDM0ItXFx1MUMzRlxcdTFDN0VcXHUxQzdGXFx1MUNDMC1cXHUxQ0M3XFx1MUNEM1xcdTIwMTAtXFx1MjAyN1xcdTIwMzAtXFx1MjA0M1xcdTIwNDUtXFx1MjA1MVxcdTIwNTMtXFx1MjA1RVxcdTIwN0RcXHUyMDdFXFx1MjA4RFxcdTIwOEVcXHUyMzA4LVxcdTIzMEJcXHUyMzI5XFx1MjMyQVxcdTI3NjgtXFx1Mjc3NVxcdTI3QzVcXHUyN0M2XFx1MjdFNi1cXHUyN0VGXFx1Mjk4My1cXHUyOTk4XFx1MjlEOC1cXHUyOURCXFx1MjlGQ1xcdTI5RkRcXHUyQ0Y5LVxcdTJDRkNcXHUyQ0ZFXFx1MkNGRlxcdTJENzBcXHUyRTAwLVxcdTJFMkVcXHUyRTMwLVxcdTJFNDJcXHUzMDAxLVxcdTMwMDNcXHUzMDA4LVxcdTMwMTFcXHUzMDE0LVxcdTMwMUZcXHUzMDMwXFx1MzAzRFxcdTMwQTBcXHUzMEZCXFx1QTRGRVxcdUE0RkZcXHVBNjBELVxcdUE2MEZcXHVBNjczXFx1QTY3RVxcdUE2RjItXFx1QTZGN1xcdUE4NzQtXFx1QTg3N1xcdUE4Q0VcXHVBOENGXFx1QThGOC1cXHVBOEZBXFx1QThGQ1xcdUE5MkVcXHVBOTJGXFx1QTk1RlxcdUE5QzEtXFx1QTlDRFxcdUE5REVcXHVBOURGXFx1QUE1Qy1cXHVBQTVGXFx1QUFERVxcdUFBREZcXHVBQUYwXFx1QUFGMVxcdUFCRUJcXHVGRDNFXFx1RkQzRlxcdUZFMTAtXFx1RkUxOVxcdUZFMzAtXFx1RkU1MlxcdUZFNTQtXFx1RkU2MVxcdUZFNjNcXHVGRTY4XFx1RkU2QVxcdUZFNkJcXHVGRjAxLVxcdUZGMDNcXHVGRjA1LVxcdUZGMEFcXHVGRjBDLVxcdUZGMEZcXHVGRjFBXFx1RkYxQlxcdUZGMUZcXHVGRjIwXFx1RkYzQi1cXHVGRjNEXFx1RkYzRlxcdUZGNUJcXHVGRjVEXFx1RkY1Ri1cXHVGRjY1XXxcXHVEODAwW1xcdUREMDAtXFx1REQwMlxcdURGOUZcXHVERkQwXXxcXHVEODAxXFx1REQ2RnxcXHVEODAyW1xcdURDNTdcXHVERDFGXFx1REQzRlxcdURFNTAtXFx1REU1OFxcdURFN0ZcXHVERUYwLVxcdURFRjZcXHVERjM5LVxcdURGM0ZcXHVERjk5LVxcdURGOUNdfFxcdUQ4MDRbXFx1REM0Ny1cXHVEQzREXFx1RENCQlxcdURDQkNcXHVEQ0JFLVxcdURDQzFcXHVERDQwLVxcdURENDNcXHVERDc0XFx1REQ3NVxcdUREQzUtXFx1RERDOVxcdUREQ0RcXHVERERCXFx1RERERC1cXHVERERGXFx1REUzOC1cXHVERTNEXFx1REVBOV18XFx1RDgwNVtcXHVEQ0M2XFx1RERDMS1cXHVEREQ3XFx1REU0MS1cXHVERTQzXFx1REYzQy1cXHVERjNFXXxcXHVEODA5W1xcdURDNzAtXFx1REM3NF18XFx1RDgxQVtcXHVERTZFXFx1REU2RlxcdURFRjVcXHVERjM3LVxcdURGM0JcXHVERjQ0XXxcXHVEODJGXFx1REM5RnxcXHVEODM2W1xcdURFODctXFx1REU4Ql0pLyk7XG5cbmNvbnN0IHB1bmN0dWF0aW9uVHJhaWxpbmcgPSBuZXcgUmVnRXhwKC8oPzpbIVwiIyQlJicoKSorLFxcLS4vOjs8PT4/QFtcXF1cXFxcXl9ge3x9flxceEExXFx4QTdcXHhBQlxceEI2XFx4QjdcXHhCQlxceEJGXFx1MDM3RVxcdTAzODdcXHUwNTVBLVxcdTA1NUZcXHUwNTg5XFx1MDU4QVxcdTA1QkVcXHUwNUMwXFx1MDVDM1xcdTA1QzZcXHUwNUYzXFx1MDVGNFxcdTA2MDlcXHUwNjBBXFx1MDYwQ1xcdTA2MERcXHUwNjFCXFx1MDYxRVxcdTA2MUZcXHUwNjZBLVxcdTA2NkRcXHUwNkQ0XFx1MDcwMC1cXHUwNzBEXFx1MDdGNy1cXHUwN0Y5XFx1MDgzMC1cXHUwODNFXFx1MDg1RVxcdTA5NjRcXHUwOTY1XFx1MDk3MFxcdTBBRjBcXHUwREY0XFx1MEU0RlxcdTBFNUFcXHUwRTVCXFx1MEYwNC1cXHUwRjEyXFx1MEYxNFxcdTBGM0EtXFx1MEYzRFxcdTBGODVcXHUwRkQwLVxcdTBGRDRcXHUwRkQ5XFx1MEZEQVxcdTEwNEEtXFx1MTA0RlxcdTEwRkJcXHUxMzYwLVxcdTEzNjhcXHUxNDAwXFx1MTY2RFxcdTE2NkVcXHUxNjlCXFx1MTY5Q1xcdTE2RUItXFx1MTZFRFxcdTE3MzVcXHUxNzM2XFx1MTdENC1cXHUxN0Q2XFx1MTdEOC1cXHUxN0RBXFx1MTgwMC1cXHUxODBBXFx1MTk0NFxcdTE5NDVcXHUxQTFFXFx1MUExRlxcdTFBQTAtXFx1MUFBNlxcdTFBQTgtXFx1MUFBRFxcdTFCNUEtXFx1MUI2MFxcdTFCRkMtXFx1MUJGRlxcdTFDM0ItXFx1MUMzRlxcdTFDN0VcXHUxQzdGXFx1MUNDMC1cXHUxQ0M3XFx1MUNEM1xcdTIwMTAtXFx1MjAyN1xcdTIwMzAtXFx1MjA0M1xcdTIwNDUtXFx1MjA1MVxcdTIwNTMtXFx1MjA1RVxcdTIwN0RcXHUyMDdFXFx1MjA4RFxcdTIwOEVcXHUyMzA4LVxcdTIzMEJcXHUyMzI5XFx1MjMyQVxcdTI3NjgtXFx1Mjc3NVxcdTI3QzVcXHUyN0M2XFx1MjdFNi1cXHUyN0VGXFx1Mjk4My1cXHUyOTk4XFx1MjlEOC1cXHUyOURCXFx1MjlGQ1xcdTI5RkRcXHUyQ0Y5LVxcdTJDRkNcXHUyQ0ZFXFx1MkNGRlxcdTJENzBcXHUyRTAwLVxcdTJFMkVcXHUyRTMwLVxcdTJFNDJcXHUzMDAxLVxcdTMwMDNcXHUzMDA4LVxcdTMwMTFcXHUzMDE0LVxcdTMwMUZcXHUzMDMwXFx1MzAzRFxcdTMwQTBcXHUzMEZCXFx1QTRGRVxcdUE0RkZcXHVBNjBELVxcdUE2MEZcXHVBNjczXFx1QTY3RVxcdUE2RjItXFx1QTZGN1xcdUE4NzQtXFx1QTg3N1xcdUE4Q0VcXHVBOENGXFx1QThGOC1cXHVBOEZBXFx1QThGQ1xcdUE5MkVcXHVBOTJGXFx1QTk1RlxcdUE5QzEtXFx1QTlDRFxcdUE5REVcXHVBOURGXFx1QUE1Qy1cXHVBQTVGXFx1QUFERVxcdUFBREZcXHVBQUYwXFx1QUFGMVxcdUFCRUJcXHVGRDNFXFx1RkQzRlxcdUZFMTAtXFx1RkUxOVxcdUZFMzAtXFx1RkU1MlxcdUZFNTQtXFx1RkU2MVxcdUZFNjNcXHVGRTY4XFx1RkU2QVxcdUZFNkJcXHVGRjAxLVxcdUZGMDNcXHVGRjA1LVxcdUZGMEFcXHVGRjBDLVxcdUZGMEZcXHVGRjFBXFx1RkYxQlxcdUZGMUZcXHVGRjIwXFx1RkYzQi1cXHVGRjNEXFx1RkYzRlxcdUZGNUJcXHVGRjVEXFx1RkY1Ri1cXHVGRjY1XXxcXHVEODAwW1xcdUREMDAtXFx1REQwMlxcdURGOUZcXHVERkQwXXxcXHVEODAxXFx1REQ2RnxcXHVEODAyW1xcdURDNTdcXHVERDFGXFx1REQzRlxcdURFNTAtXFx1REU1OFxcdURFN0ZcXHVERUYwLVxcdURFRjZcXHVERjM5LVxcdURGM0ZcXHVERjk5LVxcdURGOUNdfFxcdUQ4MDRbXFx1REM0Ny1cXHVEQzREXFx1RENCQlxcdURDQkNcXHVEQ0JFLVxcdURDQzFcXHVERDQwLVxcdURENDNcXHVERDc0XFx1REQ3NVxcdUREQzUtXFx1RERDOVxcdUREQ0RcXHVERERCXFx1RERERC1cXHVERERGXFx1REUzOC1cXHVERTNEXFx1REVBOV18XFx1RDgwNVtcXHVEQ0M2XFx1RERDMS1cXHVEREQ3XFx1REU0MS1cXHVERTQzXFx1REYzQy1cXHVERjNFXXxcXHVEODA5W1xcdURDNzAtXFx1REM3NF18XFx1RDgxQVtcXHVERTZFXFx1REU2RlxcdURFRjVcXHVERjM3LVxcdURGM0JcXHVERjQ0XXxcXHVEODJGXFx1REM5RnxcXHVEODM2W1xcdURFODctXFx1REU4Ql0pJC8pO1xuXG4vLyBleHBvcnQgY29uc3QgaW5saW5lVHJpZ2dlckNoYXJzID0gbmV3IFJlZ0V4cChgWyR7cmVwbGFjZW1lbnRzLlRyaWdnZXJDaGFyc31dYCk7XG5cbi8qKlxuICogVGhpcyBpcyBDb21tb25NYXJrJ3MgYmxvY2sgZ3JhbW1hciwgYnV0IHdlJ3JlIGlnbm9yaW5nIG5lc3RlZCBibG9ja3MgaGVyZS4gIFxuICovIFxuY29uc3QgbGluZUdyYW1tYXIgPSB7IFxuICBUTUgxOiB7IFxuICAgIHJlZ2V4cDogL14oIHswLDN9I1xccykoLio/KSgoPzpcXHMrIytcXHMqKT8pJC8sIFxuICAgIHJlcGxhY2VtZW50OiAnPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrX1RNSDFcIj4kMTwvc3Bhbj4kJDI8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1IMVwiPiQzPC9zcGFuPidcbiAgfSxcbiAgVE1IMjogeyBcbiAgICByZWdleHA6IC9eKCB7MCwzfSMjXFxzKSguKj8pKCg/OlxccysjK1xccyopPykkLywgXG4gICAgcmVwbGFjZW1lbnQ6ICc8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1IMlwiPiQxPC9zcGFuPiQkMjxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUgyXCI+JDM8L3NwYW4+J1xuICB9LFxuICBUTUgzOiB7IFxuICAgIHJlZ2V4cDogL14oIHswLDN9IyMjXFxzKSguKj8pKCg/OlxccysjK1xccyopPykkLywgXG4gICAgcmVwbGFjZW1lbnQ6ICc8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1IM1wiPiQxPC9zcGFuPiQkMjxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUgzXCI+JDM8L3NwYW4+J1xuICB9LFxuICBUTUg0OiB7IFxuICAgIHJlZ2V4cDogL14oIHswLDN9IyMjI1xccykoLio/KSgoPzpcXHMrIytcXHMqKT8pJC8sIFxuICAgIHJlcGxhY2VtZW50OiAnPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrX1RNSDRcIj4kMTwvc3Bhbj4kJDI8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1INFwiPiQzPC9zcGFuPidcbiAgfSxcbiAgVE1INTogeyBcbiAgICByZWdleHA6IC9eKCB7MCwzfSMjIyMjXFxzKSguKj8pKCg/OlxccysjK1xccyopPykkLywgXG4gICAgcmVwbGFjZW1lbnQ6ICc8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1INVwiPiQxPC9zcGFuPiQkMjxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUg1XCI+JDM8L3NwYW4+J1xuICB9LFxuICBUTUg2OiB7IFxuICAgIHJlZ2V4cDogL14oIHswLDN9IyMjIyMjXFxzKSguKj8pKCg/OlxccysjK1xccyopPykkLywgXG4gICAgcmVwbGFjZW1lbnQ6ICc8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1INlwiPiQxPC9zcGFuPiQkMjxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUg2XCI+JDM8L3NwYW4+J1xuICB9LFxuICBUTUJsb2NrcXVvdGU6IHsgXG4gICAgcmVnZXhwOiAvXiggezAsM30+WyBdPykoLiopJC8sIFxuICAgIHJlcGxhY2VtZW50OiAnPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrX1RNQmxvY2txdW90ZVwiPiQxPC9zcGFuPiQkMidcbiAgfSxcbiAgVE1Db2RlRmVuY2VCYWNrdGlja09wZW46IHsgXG4gICAgcmVnZXhwOiAvXiggezAsM30oPzxzZXE+YGBgYCopXFxzKikoW15gXSo/KShcXHMqKSQvLCBcbiAgICByZXBsYWNlbWVudDogJzxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUNvZGVGZW5jZUJhY2t0aWNrXCI+JDE8L3NwYW4+PHNwYW4gY2xhc3M9XCJUTUluZm9TdHJpbmdcIj4kMzwvc3Bhbj4kNCdcbiAgfSxcbiAgVE1Db2RlRmVuY2VUaWxkZU9wZW46IHsgXG4gICAgcmVnZXhwOiAvXiggezAsM30oPzxzZXE+fn5+fiopXFxzKikoLio/KShcXHMqKSQvLCBcbiAgICByZXBsYWNlbWVudDogJzxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUNvZGVGZW5jZVRpbGRlXCI+JDE8L3NwYW4+PHNwYW4gY2xhc3M9XCJUTUluZm9TdHJpbmdcIj4kMzwvc3Bhbj4kNCdcbiAgfSxcbiAgVE1Db2RlRmVuY2VCYWNrdGlja0Nsb3NlOiB7IFxuICAgIHJlZ2V4cDogL14oIHswLDN9KD88c2VxPmBgYGAqKSkoXFxzKikkLywgXG4gICAgcmVwbGFjZW1lbnQ6ICc8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1Db2RlRmVuY2VCYWNrdGlja1wiPiQxPC9zcGFuPiQzJ1xuICB9LFxuICBUTUNvZGVGZW5jZVRpbGRlQ2xvc2U6IHsgXG4gICAgcmVnZXhwOiAvXiggezAsM30oPzxzZXE+fn5+fiopKShcXHMqKSQvLCBcbiAgICByZXBsYWNlbWVudDogJzxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUNvZGVGZW5jZVRpbGRlXCI+JDE8L3NwYW4+JDMnXG4gIH0sXG4gIFRNQmxhbmtMaW5lOiB7IFxuICAgIHJlZ2V4cDogL14oWyBcXHRdKikkLywgXG4gICAgcmVwbGFjZW1lbnQ6ICckMCdcbiAgfSxcbiAgVE1TZXRleHRIMU1hcmtlcjogeyBcbiAgICByZWdleHA6IC9eIHswLDN9PStcXHMqJC8sIFxuICAgIHJlcGxhY2VtZW50OiAnPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrX1RNU2V0ZXh0SDFNYXJrZXJcIj4kMDwvc3Bhbj4nXG4gIH0sXG4gIFRNU2V0ZXh0SDJNYXJrZXI6IHsgXG4gICAgcmVnZXhwOiAvXiB7MCwzfS0rXFxzKiQvLCBcbiAgICByZXBsYWNlbWVudDogJzxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTVNldGV4dEgxTWFya2VyXCI+JDA8L3NwYW4+J1xuICB9LFxuICBUTUhSOiB7IFxuICAgIHJlZ2V4cDogL14oIHswLDN9KFxcKlsgXFx0XSpcXCpbIFxcdF0qXFwqWyBcXHQqXSopfCgtWyBcXHRdKi1bIFxcdF0qLVsgXFx0LV0qKXwoX1sgXFx0XSpfWyBcXHRdKl9bIFxcdF9dKikpJC8sIFxuICAgIHJlcGxhY2VtZW50OiAnPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrX1RNSFJcIj4kMDwvc3Bhbj4nXG4gIH0sXG4gIFRNVUw6IHsgXG4gICAgcmVnZXhwOiAvXiggezAsM31bKyotXSB7MSw0fSkoLiopJC8sIFxuICAgIHJlcGxhY2VtZW50OiAnPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrX1RNVUxcIj4kMTwvc3Bhbj4kJDInXG4gIH0sXG4gIFRNT0w6IHsgXG4gICAgcmVnZXhwOiAvXiggezAsM31cXGR7MSw5fVsuKV0gezEsNH0pKC4qKSQvLCBcbiAgICByZXBsYWNlbWVudDogJzxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTU9MXCI+JDE8L3NwYW4+JCQyJ1xuICB9LFxuICAvLyBUT0RPOiBUaGlzIGlzIGN1cnJlbnRseSBwcmV2ZW50aW5nIHN1Ymxpc3RzIChhbmQgYW55IGNvbnRlbnQgd2l0aGluIGxpc3QgaXRlbXMsIHJlYWxseSkgZnJvbSB3b3JraW5nXG4gIFRNSW5kZW50ZWRDb2RlOiB7IFxuICAgIHJlZ2V4cDogL14oIHs0fXxcXHQpKC4qKSQvLCBcbiAgICByZXBsYWNlbWVudDogJzxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUluZGVudGVkQ29kZVwiPiQxPC9zcGFuPiQyJ1xuICB9LFxuICBUTUxpbmtSZWZlcmVuY2VEZWZpbml0aW9uOiB7XG4gICAgLy8gVE9ETzogTGluayBkZXN0aW5hdGlvbiBjYW4ndCBpbmNsdWRlIHVuYmFsYW5jZWQgcGFyYW50aGVzZXMsIGJ1dCB3ZSBqdXN0IGlnbm9yZSB0aGF0IGhlcmUgXG4gICAgcmVnZXhwOiAvXiggezAsM31cXFtcXHMqKShbXlxcc1xcXV0oPzpbXlxcXV18XFxcXFxcXSkqPykoXFxzKlxcXTpcXHMqKSgoPzpbXlxcczw+XSspfCg/OjwoPzpbXjw+XFxcXF18XFxcXC4pKj4pKT8oXFxzKikoKD86XFwoKD86W14oKVxcXFxdfFxcXFwuKSpcXCkpfCg/OlwiKD86W15cIlxcXFxdfFxcXFwuKSpcIil8KD86Jyg/OlteJ1xcXFxdfFxcXFwuKSonKSk/KFxccyopJC8sIFxuICAgIHJlcGxhY2VtZW50OiAnPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrX1RNTGlua1JlZmVyZW5jZURlZmluaXRpb25cIj4kMTwvc3Bhbj48c3BhbiBjbGFzcz1cIlRNTGlua0xhYmVsIFRNTGlua0xhYmVsX0RlZmluaXRpb25cIj4kMjwvc3Bhbj48c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1MaW5rUmVmZXJlbmNlRGVmaW5pdGlvblwiPiQzPC9zcGFuPjxzcGFuIGNsYXNzPVwiVE1MaW5rRGVzdGluYXRpb25cIj4kNDwvc3Bhbj4kNTxzcGFuIGNsYXNzPVwiVE1MaW5rVGl0bGVcIj4kNjwvc3Bhbj4kNycsXG4gICAgbGFiZWxQbGFjZWhvbGRlcjogMiwgLy8gdGhpcyBkZWZpbmVzIHdoaWNoIHBsYWNlaG9sZGVyIGluIHRoZSBhYm92ZSByZWdleCBpcyB0aGUgbGluayBcImxhYmVsXCJcbiAgfSxcbn07XG5cbi8qKlxuICogSFRNTCBibG9ja3MgaGF2ZSBtdWx0aXBsZSBkaWZmZXJlbnQgY2xhc3NlcyBvZiBvcGVuZXIgYW5kIGNsb3Nlci4gVGhpcyBhcnJheSBkZWZpbmVzIGFsbCB0aGUgY2FzZXNcbiAqL1xudmFyIGh0bWxCbG9ja0dyYW1tYXIgPSBbXG4gIHsgc3RhcnQ6IC9eIHswLDN9PCg/OnNjcmlwdHxwcmV8c3R5bGUpKD86XFxzfD58JCkvaSwgZW5kOiAvKD86PFxcL3NjcmlwdD58PFxcL3ByZT58PFxcL3N0eWxlPikvaSwgcGFyYUludGVycnVwdDogdHJ1ZSB9LFxuICB7IHN0YXJ0OiAvXiB7MCwzfTwhLS0vLCBlbmQ6IC8tLT4vLCBwYXJhSW50ZXJydXB0OiB0cnVlIH0sXG4gIHsgc3RhcnQ6IC9eIHswLDN9PFxcPy8sIGVuZDogL1xcPz4vLCBwYXJhSW50ZXJydXB0OiB0cnVlIH0sXG4gIHsgc3RhcnQ6IC9eIHswLDN9PCFbQS1aXS8sIGVuZDogLz4vLCBwYXJhSW50ZXJydXB0IDogdHJ1ZX0sXG4gIHsgc3RhcnQ6IC9eIHswLDN9PCFcXFtDREFUQVxcWy8sIGVuZDogL1xcXVxcXT4vLCBwYXJhSW50ZXJydXB0IDogdHJ1ZX0sXG4gIHsgc3RhcnQ6IC9eIHswLDN9KD86PHw8XFwvKSg/Oktub3duVGFnKSg/Olxcc3w+fFxcLz58JCkvaSwgZW5kOiBmYWxzZSwgcGFyYUludGVycnVwdDogdHJ1ZX0sXG4gIHsgc3RhcnQ6IC9eIHswLDN9KD86SFRNTE9wZW5UYWd8SFRNTENsb3NlVGFnKVxccyokLywgZW5kOiBmYWxzZSwgcGFyYUludGVycnVwdDogZmFsc2V9LFxuXTtcblxuLyoqXG4gKiBTdHJ1Y3R1cmUgb2YgdGhlIG9iamVjdDpcbiAqIFRvcCBsZXZlbCBlbnRyaWVzIGFyZSBydWxlcywgZWFjaCBjb25zaXN0aW5nIG9mIGEgcmVndWxhciBleHByZXNzaW9ucyAoaW4gc3RyaW5nIGZvcm1hdCkgYXMgd2VsbCBhcyBhIHJlcGxhY2VtZW50LlxuICogSW4gdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIHJlcGxhY2VtZW50cyBmcm9tIHRoZSBvYmplY3QgJ3JlcGxhY2VtZW50cycgd2lsbCBiZSBwcm9jZXNzZWQgYmVmb3JlIGNvbXBpbGluZyBpbnRvIHRoZSBwcm9wZXJ0eSByZWdleHAuXG4gKi9cbnZhciBpbmxpbmVHcmFtbWFyID0ge1xuICBlc2NhcGUgOiB7XG4gICAgcmVnZXhwOiAvXlxcXFwoQVNDSUlQdW5jdHVhdGlvbikvLFxuICAgIHJlcGxhY2VtZW50IDogJzxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUVzY2FwZVwiPlxcXFw8L3NwYW4+JDEnXG4gIH0sXG4gIGNvZGUgOiB7XG4gICAgcmVnZXhwOiAvXihgKykoKD86W15gXSl8KD86W15gXS4qP1teYF0pKShcXDEpLyxcbiAgICByZXBsYWNlbWVudCA6ICc8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1Db2RlXCI+JDE8L3NwYW4+PGNvZGUgY2xhc3M9XCJUTUNvZGVcIj4kMjwvY29kZT48c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1Db2RlXCI+JDM8L3NwYW4+JyBcbiAgfSxcbiAgYXV0b2xpbmsgOiB7XG4gICAgcmVnZXhwOiAvXjwoKD86U2NoZW1lOlteXFxzPD5dKil8KD86RW1haWwpKT4vLFxuICAgIHJlcGxhY2VtZW50OiAnPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrX1RNQXV0b2xpbmtcIj4mbHQ7PC9zcGFuPjxzcGFuIGNsYXNzPVwiVE1BdXRvbGlua1wiPiQxPC9zcGFuPjxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUF1dG9saW5rXCI+Jmd0Ozwvc3Bhbj4nXG4gIH0sXG4gIGh0bWwgOiB7XG4gICAgcmVnZXhwOiAvXigoPzpIVE1MT3BlblRhZyl8KD86SFRNTENsb3NlVGFnKXwoPzpIVE1MQ29tbWVudCl8KD86SFRNTFBJKXwoPzpIVE1MRGVjbGFyYXRpb24pfCg/OkhUTUxDREFUQSkpLyxcbiAgICByZXBsYWNlbWVudDogJzxzcGFuIGNsYXNzPVwiVE1IVE1MXCI+JDE8L3NwYW4+JyxcbiAgfSxcbiAgbGlua09wZW4gOiB7XG4gICAgcmVnZXhwOiAvXlxcWy8sXG4gICAgcmVwbGFjZW1lbnQ6ICcnXG4gIH0sXG4gIGltYWdlT3BlbiA6IHtcbiAgICByZWdleHA6IC9eIVxcWy8sXG4gICAgcmVwbGFjZW1lbnQgOiAnJ1xuICB9LFxuICBsaW5rTGFiZWwgOiB7XG4gICAgcmVnZXhwOiAvXihcXFtcXHMqKShbXlxcXV0qPykoXFxzKlxcXSkvLFxuICAgIHJlcGxhY2VtZW50OiAnJyxcbiAgICBsYWJlbFBsYWNlaG9sZGVyOiAyXG4gIH0sXG4gIGRlZmF1bHQgOiB7XG4gICAgcmVnZXhwOiAvXigufCg/Ok5vdFRyaWdnZXJDaGFyKykpLyxcbiAgICByZXBsYWNlbWVudDogJyQxJ1xuICB9XG59O1xuXG4vLyBQcm9jZXNzIHJlcGxhY2VtZW50cyBpbiByZWdleHBzXG5jb25zdCByZXBsYWNlbWVudFJlZ2V4cCA9IG5ldyBSZWdFeHAoT2JqZWN0LmtleXMocmVwbGFjZW1lbnRzKS5qb2luKCd8JykpO1xuXG4vLyBJbmxpbmVcbmNvbnN0IGlubGluZVJ1bGVzID1bLi4uT2JqZWN0LmtleXMoaW5saW5lR3JhbW1hcildO1xuZm9yIChsZXQgcnVsZSBvZiBpbmxpbmVSdWxlcykge1xuICBsZXQgcmUgPSBpbmxpbmVHcmFtbWFyW3J1bGVdLnJlZ2V4cC5zb3VyY2U7XG4gIC8vIFJlcGxhY2Ugd2hpbGUgdGhlcmUgaXMgc29tZXRoaW5nIHRvIHJlcGxhY2UuIFRoaXMgbWVhbnMgaXQgYWxzbyB3b3JrcyBvdmVyIG11bHRpcGxlIGxldmVscyAocmVwbGFjZW1lbnRzIGNvbnRhaW5pbmcgcmVwbGFjZW1lbnRzKVxuICB3aGlsZSAocmUubWF0Y2gocmVwbGFjZW1lbnRSZWdleHApKSB7XG4gICAgcmUgPSByZS5yZXBsYWNlKHJlcGxhY2VtZW50UmVnZXhwLCAoc3RyaW5nKSA9PiB7IHJldHVybiByZXBsYWNlbWVudHNbc3RyaW5nXS5zb3VyY2U7IH0pO1xuICB9XG4gIGlubGluZUdyYW1tYXJbcnVsZV0ucmVnZXhwID0gbmV3IFJlZ0V4cChyZSwgaW5saW5lR3JhbW1hcltydWxlXS5yZWdleHAuZmxhZ3MpO1xufVxuXG4vLyBIVE1MIEJsb2NrIChvbmx5IG9wZW5pbmcgcnVsZSBpcyBwcm9jZXNzZWQgY3VycmVudGx5KVxuZm9yIChsZXQgcnVsZSBvZiBodG1sQmxvY2tHcmFtbWFyKSB7XG4gIGxldCByZSA9IHJ1bGUuc3RhcnQuc291cmNlO1xuICAvLyBSZXBsYWNlIHdoaWxlIHRoZXJlIGlzIHNvbWV0aGluZyB0byByZXBsYWNlLiBUaGlzIG1lYW5zIGl0IGFsc28gd29ya3Mgb3ZlciBtdWx0aXBsZSBsZXZlbHMgKHJlcGxhY2VtZW50cyBjb250YWluaW5nIHJlcGxhY2VtZW50cylcbiAgd2hpbGUgKHJlLm1hdGNoKHJlcGxhY2VtZW50UmVnZXhwKSkge1xuICAgIHJlID0gcmUucmVwbGFjZShyZXBsYWNlbWVudFJlZ2V4cCwgKHN0cmluZykgPT4geyByZXR1cm4gcmVwbGFjZW1lbnRzW3N0cmluZ10uc291cmNlOyB9KTtcbiAgfVxuICBydWxlLnN0YXJ0ID0gbmV3IFJlZ0V4cChyZSwgcnVsZS5zdGFydC5mbGFncyk7XG59XG5cbi8qKlxuICogRXNjYXBlcyBIVE1MIHNwZWNpYWwgY2hhcmFjdGVycyAoPCwgPiwgYW5kICYpIGluIHRoZSBzdHJpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSByYXcgc3RyaW5nIHRvIGJlIGVzY2FwZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzdHJpbmcsIHJlYWR5IHRvIGJlIHVzZWQgaW4gSFRNTFxuICovXG5mdW5jdGlvbiBodG1sZXNjYXBlKHN0cmluZykge1xuICByZXR1cm4gKHN0cmluZyA/IHN0cmluZyA6ICcnKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG4vKipcbiAqIENvbnRhaW5zIHRoZSBjb21tYW5kcyB0aGF0IGNhbiBiZSBzZW50IHRvIHRoZSBlZGl0b3IuIENvbnRhaW5zIG9iamVjdHMgd2l0aCBhIG5hbWUgcmVwcmVzZW50aW5nIHRoZSBuYW1lIG9mIHRoZSBjb21tYW5kLlxuICogRWFjaCBvZiB0aGUgb2JqZWN0cyBjb250YWlucyB0aGUgZm9sbG93aW5nIGtleXM6XG4gKiBcbiAqICAgLSB0eXBlOiBDYW4gYmUgZWl0aGVyIGlubGluZSAoZm9yIGlubGluZSBmb3JtYXR0aW5nKSBvciBsaW5lIChmb3IgYmxvY2sgLyBsaW5lIGZvcm1hdHRpbmcpLlxuICogICAtIGNsYXNzTmFtZTogVXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgY29tbWFuZCBpcyBhY3RpdmUgYXQgYSBnaXZlbiBwb3NpdGlvbi4gXG4gKiAgICAgRm9yIGxpbmUgZm9ybWF0dGluZywgdGhpcyBsb29rcyBhdCB0aGUgY2xhc3Mgb2YgdGhlIGxpbmUgZWxlbWVudC4gRm9yIGlubGluZSBlbGVtZW50cywgdHJpZXMgdG8gZmluZCBhbiBlbmNsb3NpbmcgZWxlbWVudCB3aXRoIHRoYXQgY2xhc3MuXG4gKiAgIC0gc2V0IC8gdW5zZXQ6IENvbnRhaW4gaW5zdHJ1Y3Rpb25zIGhvdyB0byBzZXQgYW5kIHVuc2V0IHRoZSBjb21tYW5kLiBGb3IgbGluZSB0eXBlIGNvbW1hbmRzLCBib3RoIGNvbnNpc3Qgb2YgYSBwYXR0ZXJuIGFuZCByZXBsYWNlbWVudCB0aGF0IFxuICogICAgIHdpbGwgYmUgYXBwbGllZCB0byBlYWNoIGxpbmUgKHVzaW5nIFN0cmluZy5yZXBsYWNlKS4gRm9yIGlubGluZSB0eXBlIGNvbW1hbmRzLCB0aGUgc2V0IG9iamVjdCBjb250YWlucyBhIHByZSBhbmQgcG9zdCBzdHJpbmcgd2hpY2ggd2lsbFxuICogICAgIGJlIGluc2VydGVkIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIHNlbGVjdGlvbi4gVGhlIHVuc2V0IG9iamVjdCBjb250YWlucyBhIHByZVBhdHRlcm4gYW5kIGEgcG9zdFBhdHRlcm4uIEJvdGggc2hvdWxkIGJlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgYW5kIFxuICogICAgIHRoZXkgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3J0aW9uIG9mIHRoZSBsaW5lIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIHNlbGVjdGlvbiAodXNpbmcgU3RyaW5nLnJlcGxhY2UsIHdpdGggYW4gZW1wdHkgcmVwbGFjZW1lbnQgc3RyaW5nKS5cbiAqL1xuY29uc3QgY29tbWFuZHMgPSB7XG4gIC8vIFJlcGxhY2VtZW50cyBmb3IgdW5zZXQgZm9yIGlubGluZSBjb21tYW5kcyBhcmUgJycgYnkgZGVmYXVsdFxuICBib2xkOiB7XG4gICAgdHlwZTogJ2lubGluZScsIFxuICAgIGNsYXNzTmFtZTogJ1RNU3Ryb25nJywgXG4gICAgc2V0OiB7cHJlOiAnKionLCBwb3N0OiAnKionfSwgXG4gICAgdW5zZXQ6IHtwcmVQYXR0ZXJuOiAvKD86XFwqXFwqfF9fKSQvLCBwb3N0UGF0dGVybjogL14oPzpcXCpcXCp8X18pL31cbiAgfSwgXG4gIGl0YWxpYzoge1xuICAgIHR5cGU6ICdpbmxpbmUnLCBcbiAgICBjbGFzc05hbWU6ICdUTUVtJywgXG4gICAgc2V0OiB7cHJlOiAnKicsIHBvc3Q6ICcqJ30sIFxuICAgIHVuc2V0OiB7cHJlUGF0dGVybjogLyg/OlxcKnxfKSQvLCBwb3N0UGF0dGVybjogL14oPzpcXCp8XykvfVxuICB9LFxuICBjb2RlOiB7XG4gICAgdHlwZTogJ2lubGluZScsIFxuICAgIGNsYXNzTmFtZTogJ1RNQ29kZScsIFxuICAgIHNldDoge3ByZTogJ2AnLCBwb3N0OiAnYCd9LCBcbiAgICB1bnNldDoge3ByZVBhdHRlcm46IC9gKyQvLCBwb3N0UGF0dGVybjogL15gKy99IC8vIEZJWE1FIHRoaXMgZG9lc24ndCBlbnN1cmUgYmFsYW5jZWQgYmFja3RpY2tzIHJpZ2h0IG5vd1xuICB9LCBcbiAgc3RyaWtldGhyb3VnaDoge1xuICAgIHR5cGU6ICdpbmxpbmUnLCBcbiAgICBjbGFzc05hbWU6ICdUTVN0cmlrZXRocm91Z2gnLCBcbiAgICBzZXQ6IHtwcmU6ICd+ficsIHBvc3Q6ICd+fid9LCBcbiAgICB1bnNldDoge3ByZVBhdHRlcm46L35+JC8sIHBvc3RQYXR0ZXJuOiAvXn5+LyB9XG4gIH0sXG4gIGgxOiB7XG4gICAgdHlwZTogJ2xpbmUnLCBcbiAgICBjbGFzc05hbWU6ICdUTUgxJywgXG4gICAgc2V0OiB7cGF0dGVybjogL14oIHswLDN9KD86KD86Iyt8WzAtOV17MSw5fVspLl18Wz5cXC0qK10pXFxzKyk/KSguKikkLywgcmVwbGFjZW1lbnQ6ICcjICQyJ30sIFxuICAgIHVuc2V0OiB7cGF0dGVybjogL14oIHswLDN9I1xccyspKC4qPykoKD86XFxzKyMrXFxzKik/KSQvLCByZXBsYWNlbWVudDogJyQyJ31cbiAgfSxcbiAgaDI6IHtcbiAgICB0eXBlOiAnbGluZScsIFxuICAgIGNsYXNzTmFtZTogJ1RNSDInLCBcbiAgICBzZXQ6IHtwYXR0ZXJuOiAvXiggezAsM30oPzooPzojK3xbMC05XXsxLDl9WykuXXxbPlxcLSorXSlcXHMrKT8pKC4qKSQvLCByZXBsYWNlbWVudDogJyMjICQyJ30sIFxuICAgIHVuc2V0OiB7cGF0dGVybjogL14oIHswLDN9IyNcXHMrKSguKj8pKCg/OlxccysjK1xccyopPykkLywgcmVwbGFjZW1lbnQ6ICckMid9XG4gIH0sXG4gIGgzOiB7XG4gICAgdHlwZTogJ2xpbmUnLCBcbiAgICBjbGFzc05hbWU6ICdUTUgzJywgXG4gICAgc2V0OiB7cGF0dGVybjogL14oIHswLDN9KD86KD86Iyt8WzAtOV17MSw5fVspLl18Wz5cXC0qK10pXFxzKyk/KSguKikkLywgcmVwbGFjZW1lbnQ6ICcjIyMgJDInfSwgXG4gICAgdW5zZXQ6IHtwYXR0ZXJuOiAvXiggezAsM30jIyNcXHMrKSguKj8pKCg/OlxccysjK1xccyopPykkLywgcmVwbGFjZW1lbnQ6ICckMid9XG4gIH0sXG4gIGg0OiB7XG4gICAgdHlwZTogJ2xpbmUnLCBcbiAgICBjbGFzc05hbWU6ICdUTUg0JywgXG4gICAgc2V0OiB7cGF0dGVybjogL14oIHswLDN9KD86KD86Iyt8WzAtOV17MSw5fVspLl18Wz5cXC0qK10pXFxzKyk/KSguKikkLywgcmVwbGFjZW1lbnQ6ICcjIyMjICQyJ30sIFxuICAgIHVuc2V0OiB7cGF0dGVybjogL14oIHswLDN9IyMjI1xccyspKC4qPykoKD86XFxzKyMrXFxzKik/KSQvLCByZXBsYWNlbWVudDogJyQyJ31cbiAgfSxcbiAgaDU6IHtcbiAgICB0eXBlOiAnbGluZScsIFxuICAgIGNsYXNzTmFtZTogJ1RNSDUnLCBcbiAgICBzZXQ6IHtwYXR0ZXJuOiAvXiggezAsM30oPzooPzojK3xbMC05XXsxLDl9WykuXXxbPlxcLSorXSlcXHMrKT8pKC4qKSQvLCByZXBsYWNlbWVudDogJyMjIyMjICQyJ30sIFxuICAgIHVuc2V0OiB7cGF0dGVybjogL14oIHswLDN9IyMjIyNcXHMrKSguKj8pKCg/OlxccysjK1xccyopPykkLywgcmVwbGFjZW1lbnQ6ICckMid9XG4gIH0sXG4gIGg2OiB7XG4gICAgdHlwZTogJ2xpbmUnLCBcbiAgICBjbGFzc05hbWU6ICdUTUg2JywgXG4gICAgc2V0OiB7cGF0dGVybjogL14oIHswLDN9KD86KD86Iyt8WzAtOV17MSw5fVspLl18Wz5cXC0qK10pXFxzKyk/KSguKikkLywgcmVwbGFjZW1lbnQ6ICcjIyMjIyMgJDInfSwgXG4gICAgdW5zZXQ6IHtwYXR0ZXJuOiAvXiggezAsM30jIyMjIyNcXHMrKSguKj8pKCg/OlxccysjK1xccyopPykkLywgcmVwbGFjZW1lbnQ6ICckMid9XG4gIH0sXG4gIHVsOiB7XG4gICAgdHlwZTogJ2xpbmUnLCBcbiAgICBjbGFzc05hbWU6ICdUTVVMJywgXG4gICAgc2V0OiB7cGF0dGVybjogL14oIHswLDN9KD86KD86Iyt8WzAtOV17MSw5fVspLl18Wz5cXC0qK10pXFxzKyk/KSguKikkLywgcmVwbGFjZW1lbnQ6ICctICQyJ30sIFxuICAgIHVuc2V0OiB7cGF0dGVybjogL14oIHswLDN9WysqLV0gezEsNH0pKC4qKSQvLCByZXBsYWNlbWVudDogJyQyJ31cbiAgfSxcbiAgb2w6IHtcbiAgICB0eXBlOiAnbGluZScsIFxuICAgIGNsYXNzTmFtZTogJ1RNT0wnLCBcbiAgICBzZXQ6IHtwYXR0ZXJuOiAvXiggezAsM30oPzooPzojK3xbMC05XXsxLDl9WykuXXxbPlxcLSorXSlcXHMrKT8pKC4qKSQvLCByZXBsYWNlbWVudDogJyQjLiAkMid9LCBcbiAgICB1bnNldDoge3BhdHRlcm46IC9eKCB7MCwzfVxcZHsxLDl9Wy4pXSB7MSw0fSkoLiopJC8sIHJlcGxhY2VtZW50OiAnJDInfVxuICB9LCBcbiAgYmxvY2txdW90ZToge1xuICAgIHR5cGU6ICdsaW5lJywgXG4gICAgY2xhc3NOYW1lOiAnVE1CbG9ja3F1b3RlJywgXG4gICAgc2V0OiB7cGF0dGVybjogL14oIHswLDN9KD86KD86Iyt8WzAtOV17MSw5fVspLl18Wz5cXC0qK10pXFxzKyk/KSguKikkLywgcmVwbGFjZW1lbnQ6ICc+ICQyJ30sIFxuICAgIHVuc2V0OiB7cGF0dGVybjogL14oIHswLDN9PlsgXT8pKC4qKSQvLCByZXBsYWNlbWVudDogJyQyJ31cbiAgfSxcbn07XG5cbmV4cG9ydCB7IGxpbmVHcmFtbWFyLCBpbmxpbmVHcmFtbWFyLCBwdW5jdHVhdGlvbkxlYWRpbmcsIHB1bmN0dWF0aW9uVHJhaWxpbmcsIGh0bWxlc2NhcGUsIGh0bWxCbG9ja0dyYW1tYXIsIGNvbW1hbmRzIH07IiwiaW1wb3J0IHsgaW5saW5lR3JhbW1hciwgbGluZUdyYW1tYXIsIHB1bmN0dWF0aW9uTGVhZGluZywgcHVuY3R1YXRpb25UcmFpbGluZywgaHRtbGVzY2FwZSwgaHRtbEJsb2NrR3JhbW1hciwgY29tbWFuZHMgfSBmcm9tIFwiLi9ncmFtbWFyXCI7XG5cbmNsYXNzIEVkaXRvciB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMgPSB7fSkgeyAgICBcbiAgICB0aGlzLmUgPSBudWxsO1xuICAgIHRoaXMudGV4dGFyZWEgPSBudWxsO1xuICAgIHRoaXMubGluZXMgPSBbXTtcbiAgICB0aGlzLmxpbmVFbGVtZW50cyA9IFtdO1xuICAgIHRoaXMubGluZVR5cGVzID0gW107XG4gICAgdGhpcy5saW5lQ2FwdHVyZXMgPSBbXTtcbiAgICB0aGlzLmxpbmVSZXBsYWNlbWVudHMgPSBbXTtcbiAgICB0aGlzLmxpbmtMYWJlbHMgPSBbXTtcbiAgICB0aGlzLmxpbmVEaXJ0eSA9IFtdO1xuICAgIHRoaXMubGFzdENvbW1hbmRTdGF0ZSA9IG51bGw7XG5cbiAgICB0aGlzLmxpc3RlbmVycyA9IHtcbiAgICAgIGNoYW5nZTogW10sXG4gICAgICBzZWxlY3Rpb246IFtdLFxuICAgIH07XG5cbiAgICBsZXQgZWxlbWVudCA9IHByb3BzLmVsZW1lbnQ7XG4gICAgdGhpcy50ZXh0YXJlYSA9IHByb3BzLnRleHRhcmVhO1xuXG4gICAgaWYgKHRoaXMudGV4dGFyZWEgJiYgIXRoaXMudGV4dGFyZWEudGFnTmFtZSkge1xuICAgICAgdGhpcy50ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMudGV4dGFyZWEpO1xuICAgICAgaWYgKCFlbGVtZW50KSBlbGVtZW50ID0gdGhpcy50ZXh0YXJlYTtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudCAmJiAhZWxlbWVudC50YWdOYW1lKSB7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvcHMuZWxlbWVudCk7XG4gICAgfVxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07IFxuICAgIH1cbiAgICBpZiAoZWxlbWVudC50YWdOYW1lID09ICdURVhUQVJFQScpIHtcbiAgICAgIHRoaXMudGV4dGFyZWEgPSBlbGVtZW50O1xuICAgICAgZWxlbWVudCA9IHRoaXMudGV4dGFyZWEucGFyZW50Tm9kZTsgXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGV4dGFyZWEpIHtcbiAgICAgIHRoaXMudGV4dGFyZWEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUVkaXRvckVsZW1lbnQoZWxlbWVudCk7XG4gICAgLy8gVE9ETyBQbGFjZWhvbGRlciBmb3IgZW1wdHkgY29udGVudFxuICAgIHRoaXMuc2V0Q29udGVudChwcm9wcy5jb250ZW50IHx8ICh0aGlzLnRleHRhcmVhID8gdGhpcy50ZXh0YXJlYS52YWx1ZSA6IGZhbHNlKSB8fCAnIyBIZWxsbyBUaW55TURFIVxcbkVkaXQgKipoZXJlKionKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBlZGl0b3IgZWxlbWVudCBpbnNpZGUgdGhlIHRhcmdldCBlbGVtZW50IG9mIHRoZSBET00gdHJlZVxuICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgdGFyZ2V0IGVsZW1lbnQgb2YgdGhlIERPTSB0cmVlXG4gICAqL1xuICBjcmVhdGVFZGl0b3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgICB0aGlzLmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmUuY2xhc3NOYW1lID0gJ1RpbnlNREUnO1xuICAgIHRoaXMuZS5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICAgIC8vIFRoZSBmb2xsb3dpbmcgaXMgaW1wb3J0YW50IGZvciBmb3JtYXR0aW5nIHB1cnBvc2VzLCBidXQgYWxzbyBzaW5jZSBvdGhlcndpc2UgdGhlIGJyb3dzZXIgcmVwbGFjZXMgc3Vic2VxdWVudCBzcGFjZXMgd2l0aCAgJm5ic3A7ICZuYnNwO1xuICAgIC8vIFRoYXQgYnJlYWtzIGEgbG90IG9mIHN0dWZmLCBzbyB3ZSBkbyB0aGlzIGhlcmUgYW5kIG5vdCBpbiBDU1PigJR0aGVyZWZvcmUsIHlvdSBkb24ndCBoYXZlIHRvIHJlbWVtYmVyIHRvIGJ1dCB0aGlzIGluIHRoZSBDU1MgZmlsZVxuICAgIHRoaXMuZS5zdHlsZS53aGl0ZVNwYWNlID0gJ3ByZS13cmFwJzsgXG4gICAgLy8gQXZvaWQgZm9ybWF0dGluZyAoQiAvIEkgLyBVKSBwb3BwaW5nIHVwIG9uIGlPU1xuICAgIHRoaXMuZS5zdHlsZS53ZWJraXRVc2VyTW9kaWZ5ID0gJ3JlYWQtd3JpdGUtcGxhaW50ZXh0LW9ubHknO1xuICAgIGlmICh0aGlzLnRleHRhcmVhICYmIHRoaXMudGV4dGFyZWEucGFyZW50Tm9kZSA9PSBlbGVtZW50ICYmIHRoaXMudGV4dGFyZWEubmV4dFNpYmxpbmcpIHtcbiAgICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZSwgdGhpcy50ZXh0YXJlYS5uZXh0U2libGluZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmUpO1xuICAgIH1cblxuICAgIHRoaXMuZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChlKSk7XG4gICAgLy8gdGhpcy5lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB0aGlzLmhhbmRsZUtleWRvd25FdmVudChlKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdGlvbmNoYW5nZVwiLCAoZSkgPT4gdGhpcy5oYW5kbGVTZWxlY3Rpb25DaGFuZ2VFdmVudChlKSk7XG4gICAgdGhpcy5lLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCAoZSkgPT4gdGhpcy5oYW5kbGVQYXN0ZShlKSk7XG4gICAgLy8gdGhpcy5lLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5oYW5kbGVLZXlEb3duKGUpKTtcbiAgICB0aGlzLmxpbmVFbGVtZW50cyA9IHRoaXMuZS5jaGlsZE5vZGVzOyAvLyB0aGlzIHdpbGwgYXV0b21hdGljYWxseSB1cGRhdGVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlZGl0b3IgY29udGVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgVGhlIG5ldyBNYXJrZG93biBjb250ZW50XG4gICAqL1xuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICAvLyBEZWxldGUgYW55IGV4aXN0aW5nIGNvbnRlbnRcbiAgICB3aGlsZSAodGhpcy5lLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuZS5yZW1vdmVDaGlsZCh0aGlzLmUuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHRoaXMubGluZXMgPSBjb250ZW50LnNwbGl0KC8oPzpcXHJcXG58XFxyfFxcbikvKTtcbiAgICB0aGlzLmxpbmVEaXJ0eSA9IFtdO1xuICAgIGZvciAobGV0IGxpbmVOdW0gPSAwOyBsaW5lTnVtIDwgdGhpcy5saW5lcy5sZW5ndGg7IGxpbmVOdW0rKykge1xuICAgICAgbGV0IGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmUuYXBwZW5kQ2hpbGQobGUpO1xuICAgICAgdGhpcy5saW5lRGlydHkucHVzaCh0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5saW5lVHlwZXMgPSBuZXcgQXJyYXkodGhpcy5saW5lcy5sZW5ndGgpO1xuICAgIHRoaXMudXBkYXRlRm9ybWF0dGluZygpO1xuICAgIHRoaXMuZmlyZUNoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGVkaXRvciBjb250ZW50IGFzIGEgTWFya2Rvd24gc3RyaW5nLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZWRpdG9yIGNvbnRlbnQgYXMgYSBtYXJrZG93biBzdHJpbmdcbiAgICovXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZXMuam9pbignXFxuJyk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgbWFpbiBtZXRob2QgdG8gdXBkYXRlIHRoZSBmb3JtYXR0aW5nIChmcm9tIHRoaXMubGluZXMgdG8gSFRNTCBvdXRwdXQpXG4gICAqL1xuICB1cGRhdGVGb3JtYXR0aW5nKCkge1xuICAgIC8vIEZpcnN0LCBwYXJzZSBsaW5lIHR5cGVzLiBUaGlzIHdpbGwgdXBkYXRlIHRoaXMubGluZVR5cGVzLCB0aGlzLmxpbmVSZXBsYWNlbWVudHMsIGFuZCB0aGlzLmxpbmVDYXB0dXJlc1xuICAgIC8vIFdlIGRvbid0IGFwcGx5IHRoZSBmb3JtYXR0aW5nIHlldFxuICAgIHRoaXMudXBkYXRlTGluZVR5cGVzKCk7XG4gICAgLy8gQ29sbGVjdCBhbnkgdmFsaWQgbGluayBsYWJlbHMgZnJvbSBsaW5rIHJlZmVyZW5jZSBkZWZpbml0aW9uc+KAlHdlIG5lZWQgdGhhdCBmb3IgZm9ybWF0dGluZyB0byBkZXRlcm1pbmUgd2hhdCdzIGEgdmFsaWQgbGlua1xuICAgIHRoaXMudXBkYXRlTGlua0xhYmVscygpO1xuICAgIC8vIE5vdywgYXBwbHkgdGhlIGZvcm1hdHRpbmdcbiAgICB0aGlzLmFwcGx5TGluZVR5cGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGlzLmxpbmtMYWJlbHM6IEZvciBldmVyeSBsaW5rIHJlZmVyZW5jZSBkZWZpbml0aW9uIChsaW5lIHR5cGUgVE1MaW5rUmVmZXJlbmNlRGVmaW5pdGlvbiksIHdlIGNvbGxlY3QgdGhlIGxhYmVsXG4gICAqL1xuICB1cGRhdGVMaW5rTGFiZWxzKCkge1xuICAgIHRoaXMubGlua0xhYmVscyA9IFtdO1xuICAgIGZvciAobGV0IGwgPSAwOyBsIDwgdGhpcy5saW5lcy5sZW5ndGg7IGwrKykge1xuICAgICAgaWYgKHRoaXMubGluZVR5cGVzW2xdID09ICdUTUxpbmtSZWZlcmVuY2VEZWZpbml0aW9uJykge1xuICAgICAgICB0aGlzLmxpbmtMYWJlbHMucHVzaCh0aGlzLmxpbmVDYXB0dXJlc1tsXVtsaW5lR3JhbW1hci5UTUxpbmtSZWZlcmVuY2VEZWZpbml0aW9uLmxhYmVsUGxhY2Vob2xkZXJdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIHRvIHJlcGxhY2UgcGxhY2Vob2xkZXJzIGZyb20gYSBSZWdFeHAgY2FwdHVyZS4gVGhlIHJlcGxhY2VtZW50IHN0cmluZyBjYW4gY29udGFpbiByZWd1bGFyIGRvbGxhciBwbGFjZWhvbGRlcnMgKGUuZy4sICQxKSxcbiAgICogd2hpY2ggYXJlIGludGVycHJldGVkIGxpa2UgaW4gU3RyaW5nLnJlcGxhY2UoKSwgYnV0IGFsc28gZG91YmxlIGRvbGxhciBwbGFjZWhvbGRlcnMgKCQkMSkuIEluIHRoZSBjYXNlIG9mIGRvdWJsZSBkb2xsYXIgcGxhY2Vob2xkZXJzLCBcbiAgICogTWFya2Rvd24gaW5saW5lIGdyYW1tYXIgaXMgYXBwbGllZCBvbiB0aGUgY29udGVudCBvZiB0aGUgY2FwdHVyZWQgc3ViZ3JvdXAsIGkuZS4sICQkMSBwcm9jZXNzZXMgaW5saW5lIE1hcmtkb3duIGdyYW1tYXIgaW4gdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAqIGZpcnN0IGNhcHR1cmVkIHN1Ymdyb3VwLCBhbmQgcmVwbGFjZXMgYCQkMWAgd2l0aCB0aGUgcmVzdWx0LlxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VtZW50IFRoZSByZXBsYWNlbWVudCBzdHJpbmcsIGluY2x1ZGluZyBwbGFjZWhvbGRlcnMuXG4gICAqIEBwYXJhbSAgY2FwdHVyZSBUaGUgcmVzdWx0IG9mIGEgUmVnRXhwLmV4ZWMoKSBjYWxsXG4gICAqIEByZXR1cm5zIFRoZSByZXBsYWNlbWVudCBzdHJpbmcsIHdpdGggcGxhY2Vob2xkZXJzIHJlcGxhY2VkIGZyb20gdGhlIGNhcHR1cmUgcmVzdWx0LlxuICAgKi9cbiAgcmVwbGFjZShyZXBsYWNlbWVudCwgY2FwdHVyZSkge1xuICAgIHJldHVybiByZXBsYWNlbWVudFxuICAgICAgLnJlcGxhY2UoLyhcXCR7MSwyfSkoWzAtOV0pL2csIChzdHIsIHAxLCBwMikgPT4ge1xuICAgICAgICBpZiAocDEgPT0gJyQnKSByZXR1cm4gaHRtbGVzY2FwZShjYXB0dXJlW3AyXSk7XG4gICAgICAgIGVsc2UgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIlRNSW5saW5lRm9ybWF0dGVkXCI+JHt0aGlzLnByb2Nlc3NJbmxpbmVTdHlsZXMoY2FwdHVyZVtwMl0pfTwvc3Bhbj5gO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyB0aGUgbGluZSB0eXBlcyAoZnJvbSB0aGlzLmxpbmVUeXBlcyBhcyB3ZWxsIGFzIHRoZSBjYXB0dXJlIHJlc3VsdCBpbiB0aGlzLmxpbmVSZXBsYWNlbWVudHMgYW5kIHRoaXMubGluZUNhcHR1cmVzKSBcbiAgICogYW5kIHByb2Nlc3NlcyBpbmxpbmUgZm9ybWF0dGluZyBmb3IgYWxsIGxpbmVzLlxuICAgKi9cbiAgYXBwbHlMaW5lVHlwZXMoKSB7XG4gICAgZm9yIChsZXQgbGluZU51bSA9IDA7IGxpbmVOdW0gPCB0aGlzLmxpbmVzLmxlbmd0aDsgbGluZU51bSsrKSB7XG4gICAgICBpZiAodGhpcy5saW5lRGlydHlbbGluZU51bV0pIHtcbiAgICAgICAgbGV0IGNvbnRlbnRIVE1MID0gdGhpcy5yZXBsYWNlKHRoaXMubGluZVJlcGxhY2VtZW50c1tsaW5lTnVtXSwgdGhpcy5saW5lQ2FwdHVyZXNbbGluZU51bV0pO1xuICAgICAgICAvLyB0aGlzLmxpbmVIVE1MW2xpbmVOdW1dID0gKGNvbnRlbnRIVE1MID09ICcnID8gJzxiciAvPicgOiBjb250ZW50SFRNTCk7IC8vIFByZXZlbnQgZW1wdHkgZWxlbWVudHMgd2hpY2ggY2FuJ3QgYmUgc2VsZWN0ZWQgZXRjLlxuICAgICAgICB0aGlzLmxpbmVFbGVtZW50c1tsaW5lTnVtXS5jbGFzc05hbWUgPSB0aGlzLmxpbmVUeXBlc1tsaW5lTnVtXTtcbiAgICAgICAgdGhpcy5saW5lRWxlbWVudHNbbGluZU51bV0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICB0aGlzLmxpbmVFbGVtZW50c1tsaW5lTnVtXS5pbm5lckhUTUwgPSAoY29udGVudEhUTUwgPT0gJycgPyAnPGJyIC8+JyA6IGNvbnRlbnRIVE1MKTsgLy8gUHJldmVudCBlbXB0eSBlbGVtZW50cyB3aGljaCBjYW4ndCBiZSBzZWxlY3RlZCBldGMuXG4gICAgICB9XG4gICAgICB0aGlzLmxpbmVFbGVtZW50c1tsaW5lTnVtXS5kYXRhc2V0LmxpbmVOdW0gPSBsaW5lTnVtO1xuICAgIH0gICAgXG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBsaW5lIHR5cGVzIGZvciBhbGwgbGluZXMgYmFzZWQgb24gdGhlIGxpbmUgLyBibG9jayBncmFtbWFyLiBDYXB0dXJlcyB0aGUgcmVzdWx0cyBvZiB0aGUgcmVzcGVjdGl2ZSBsaW5lXG4gICAqIGdyYW1tYXIgcmVndWxhciBleHByZXNzaW9ucy5cbiAgICogVXBkYXRlcyB0aGlzLmxpbmVUeXBlcywgdGhpcy5saW5lQ2FwdHVyZXMsIGFuZCB0aGlzLmxpbmVSZXBsYWNlbWVudHMuXG4gICAqL1xuICB1cGRhdGVMaW5lVHlwZXMoKSB7XG4gICAgbGV0IGNvZGVCbG9ja1R5cGUgPSBmYWxzZTtcbiAgICBsZXQgY29kZUJsb2NrU2VxTGVuZ3RoID0gMDtcbiAgICBsZXQgaHRtbEJsb2NrID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBsaW5lTnVtID0gMDsgbGluZU51bSA8IHRoaXMubGluZXMubGVuZ3RoOyBsaW5lTnVtKyspIHtcbiAgICAgIGxldCBsaW5lVHlwZSA9ICdUTVBhcmEnO1xuICAgICAgbGV0IGxpbmVDYXB0dXJlID0gW3RoaXMubGluZXNbbGluZU51bV1dO1xuICAgICAgbGV0IGxpbmVSZXBsYWNlbWVudCA9ICckJDAnOyAvLyBEZWZhdWx0IHJlcGxhY2VtZW50IGZvciBwYXJhZ3JhcGg6IElubGluZSBmb3JtYXQgdGhlIGVudGlyZSBsaW5lXG5cbiAgICAgIC8vIENoZWNrIG9uZ29pbmcgY29kZSBibG9ja3NcbiAgICAgIC8vIGlmIChsaW5lTnVtID4gMCAmJiAodGhpcy5saW5lVHlwZXNbbGluZU51bSAtIDFdID09ICdUTUNvZGVGZW5jZUJhY2t0aWNrT3BlbicgfHwgdGhpcy5saW5lVHlwZXNbbGluZU51bSAtIDFdID09ICdUTUZlbmNlZENvZGVCYWNrdGljaycpKSB7XG4gICAgICBpZiAoY29kZUJsb2NrVHlwZSA9PSAnVE1Db2RlRmVuY2VCYWNrdGlja09wZW4nKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIGEgYmFja3RpY2stZmVuY2VkIGNvZGUgYmxvY2ssIGNoZWNrIGlmIHRoZSBjdXJyZW50IGxpbmUgY2xvc2VzIGl0XG4gICAgICAgIGxldCBjYXB0dXJlID0gbGluZUdyYW1tYXIuVE1Db2RlRmVuY2VCYWNrdGlja0Nsb3NlLnJlZ2V4cC5leGVjKHRoaXMubGluZXNbbGluZU51bV0pO1xuICAgICAgICBpZiAoY2FwdHVyZSAmJiBjYXB0dXJlLmdyb3Vwc1snc2VxJ10ubGVuZ3RoID49IGNvZGVCbG9ja1NlcUxlbmd0aCkge1xuICAgICAgICAgIGxpbmVUeXBlID0gJ1RNQ29kZUZlbmNlQmFja3RpY2tDbG9zZSc7XG4gICAgICAgICAgbGluZVJlcGxhY2VtZW50ID0gbGluZUdyYW1tYXIuVE1Db2RlRmVuY2VCYWNrdGlja0Nsb3NlLnJlcGxhY2VtZW50O1xuICAgICAgICAgIGxpbmVDYXB0dXJlID0gY2FwdHVyZTtcbiAgICAgICAgICBjb2RlQmxvY2tUeXBlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGluZVR5cGUgPSAnVE1GZW5jZWRDb2RlQmFja3RpY2snO1xuICAgICAgICAgIGxpbmVSZXBsYWNlbWVudCA9ICckMCc7XG4gICAgICAgICAgbGluZUNhcHR1cmUgPSBbdGhpcy5saW5lc1tsaW5lTnVtXV07XG4gICAgICAgIH0gXG4gICAgICB9XG4gICAgICAvLyBpZiAobGluZU51bSA+IDAgJiYgKHRoaXMubGluZVR5cGVzW2xpbmVOdW0gLSAxXSA9PSAnVE1Db2RlRmVuY2VUaWxkZU9wZW4nIHx8IHRoaXMubGluZVR5cGVzW2xpbmVOdW0gLSAxXSA9PSAnVE1GZW5jZWRDb2RlVGlsZGUnKSkge1xuICAgICAgZWxzZSBpZiAoY29kZUJsb2NrVHlwZSA9PSAnVE1Db2RlRmVuY2VUaWxkZU9wZW4nKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIGEgdGlsZGUtZmVuY2VkIGNvZGUgYmxvY2tcbiAgICAgICAgbGV0IGNhcHR1cmUgPSBsaW5lR3JhbW1hci5UTUNvZGVGZW5jZVRpbGRlQ2xvc2UucmVnZXhwLmV4ZWModGhpcy5saW5lc1tsaW5lTnVtXSk7XG4gICAgICAgIGlmIChjYXB0dXJlICYmIGNhcHR1cmUuZ3JvdXBzWydzZXEnXS5sZW5ndGggPj0gY29kZUJsb2NrU2VxTGVuZ3RoKSAge1xuICAgICAgICAgIGxpbmVUeXBlID0gJ1RNQ29kZUZlbmNlVGlsZGVDbG9zZSc7XG4gICAgICAgICAgbGluZVJlcGxhY2VtZW50ID0gbGluZUdyYW1tYXIuVE1Db2RlRmVuY2VUaWxkZUNsb3NlLnJlcGxhY2VtZW50O1xuICAgICAgICAgIGxpbmVDYXB0dXJlID0gY2FwdHVyZTtcbiAgICAgICAgICBjb2RlQmxvY2tUeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGluZVR5cGUgPSAnVE1GZW5jZWRDb2RlVGlsZGUnO1xuICAgICAgICAgIGxpbmVSZXBsYWNlbWVudCA9ICckMCc7XG4gICAgICAgICAgbGluZUNhcHR1cmUgPSBbdGhpcy5saW5lc1tsaW5lTnVtXV07XG4gICAgICAgIH0gXG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIEhUTUwgYmxvY2sgdHlwZXNcbiAgICAgIGlmIChsaW5lVHlwZSA9PSAnVE1QYXJhJyAmJiBodG1sQmxvY2sgPT09IGZhbHNlKSB7XG4gICAgICAgIGZvciAobGV0IGh0bWxCbG9ja1R5cGUgb2YgaHRtbEJsb2NrR3JhbW1hcikge1xuICAgICAgICAgIGlmICh0aGlzLmxpbmVzW2xpbmVOdW1dLm1hdGNoKGh0bWxCbG9ja1R5cGUuc3RhcnQpKSB7XG4gICAgICAgICAgICAvLyBNYXRjaGluZyBzdGFydCBjb25kaXRpb24uIENoZWNrIGlmIHRoaXMgdGFnIGNhbiBzdGFydCBoZXJlIChub3QgYWxsIHN0YXJ0IGNvbmRpdGlvbnMgYWxsb3cgYnJlYWtpbmcgYSBwYXJhZ3JhcGgpLlxuICAgICAgICAgICAgaWYgKGh0bWxCbG9ja1R5cGUucGFyYUludGVycnVwdCB8fCBsaW5lTnVtID09IDAgfHwgISh0aGlzLmxpbmVUeXBlc1tsaW5lTnVtLTFdID09ICdUTVBhcmEnIHx8IHRoaXMubGluZVR5cGVzW2xpbmVOdW0tMV0gPT0gJ1RNVUwnIHx8IHRoaXMubGluZVR5cGVzW2xpbmVOdW0tMV0gPT0gJ1RNT0wnIHx8IHRoaXMubGluZVR5cGVzW2xpbmVOdW0tMV0gPT0gJ1RNQmxvY2txdW90ZScpKSB7XG4gICAgICAgICAgICAgIGh0bWxCbG9jayA9IGh0bWxCbG9ja1R5cGU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaHRtbEJsb2NrICE9PSBmYWxzZSkge1xuICAgICAgICBsaW5lVHlwZSA9ICdUTUhUTUxCbG9jayc7XG4gICAgICAgIGxpbmVSZXBsYWNlbWVudCA9ICckMCc7IC8vIE5vIGZvcm1hdHRpbmcgaW4gVE1IVE1MQmxvY2tcbiAgICAgICAgbGluZUNhcHR1cmUgPSBbdGhpcy5saW5lc1tsaW5lTnVtXV07IC8vIFRoaXMgc2hvdWxkIGFscmVhZHkgYmUgc2V0IGJ1dCBiZXR0ZXIgc2FmZSB0aGFuIHNvcnJ5XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgSFRNTCBibG9jayBzaG91bGQgYmUgY2xvc2VkXG4gICAgICAgIGlmIChodG1sQmxvY2suZW5kKSB7XG4gICAgICAgICAgLy8gU3BlY2lmaWMgZW5kIGNvbmRpdGlvblxuICAgICAgICAgIGlmICh0aGlzLmxpbmVzW2xpbmVOdW1dLm1hdGNoKGh0bWxCbG9jay5lbmQpKSB7XG4gICAgICAgICAgICBodG1sQmxvY2sgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTm8gc3BlY2lmaWMgZW5kIGNvbmRpdGlvbiwgZW5kcyB3aXRoIGJsYW5rIGxpbmVcbiAgICAgICAgICBpZiAobGluZU51bSA9PSB0aGlzLmxpbmVzLmxlbmd0aCAtIDEgfHwgdGhpcy5saW5lc1tsaW5lTnVtKzFdLm1hdGNoKGxpbmVHcmFtbWFyLlRNQmxhbmtMaW5lLnJlZ2V4cCkpIHtcbiAgICAgICAgICAgIGh0bWxCbG9jayA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBhbGwgcmVnZXhwcyBpZiB3ZSBoYXZlbid0IGFwcGxpZWQgb25lIG9mIHRoZSBjb2RlIGJsb2NrIHR5cGVzXG4gICAgICBpZiAobGluZVR5cGUgPT0gJ1RNUGFyYScpIHtcbiAgICAgICAgZm9yIChsZXQgdHlwZSBpbiBsaW5lR3JhbW1hcikge1xuICAgICAgICAgIGlmIChsaW5lR3JhbW1hclt0eXBlXS5yZWdleHApIHtcbiAgICAgICAgICAgIGxldCBjYXB0dXJlID0gbGluZUdyYW1tYXJbdHlwZV0ucmVnZXhwLmV4ZWModGhpcy5saW5lc1tsaW5lTnVtXSk7XG4gICAgICAgICAgICBpZiAoY2FwdHVyZSkge1xuICAgICAgICAgICAgICBsaW5lVHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgIGxpbmVSZXBsYWNlbWVudCA9IGxpbmVHcmFtbWFyW3R5cGVdLnJlcGxhY2VtZW50O1xuICAgICAgICAgICAgICBsaW5lQ2FwdHVyZSA9IGNhcHR1cmU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZSd2ZSBvcGVuZWQgYSBjb2RlIGJsb2NrLCByZW1lbWJlciB0aGF0XG4gICAgICBpZiAobGluZVR5cGUgPT0gJ1RNQ29kZUZlbmNlQmFja3RpY2tPcGVuJyB8fCBsaW5lVHlwZSA9PSAnVE1Db2RlRmVuY2VUaWxkZU9wZW4nKSB7XG4gICAgICAgIGNvZGVCbG9ja1R5cGUgPSBsaW5lVHlwZTtcbiAgICAgICAgY29kZUJsb2NrU2VxTGVuZ3RoID0gbGluZUNhcHR1cmUuZ3JvdXBzWydzZXEnXS5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIC8vIExpbmsgcmVmZXJlbmNlIGRlZmluaXRpb24gYW5kIGluZGVudGVkIGNvZGUgY2FuJ3QgaW50ZXJydXB0IGEgcGFyYWdyYXBoXG4gICAgICBpZiAoXG4gICAgICAgIChsaW5lVHlwZSA9PSAnVE1JbmRlbnRlZENvZGUnIHx8IGxpbmVUeXBlID09ICdUTUxpbmtSZWZlcmVuY2VEZWZpbml0aW9uJykgXG4gICAgICAgICYmIGxpbmVOdW0gPiAwIFxuICAgICAgICAmJiAodGhpcy5saW5lVHlwZXNbbGluZU51bS0xXSA9PSAnVE1QYXJhJyB8fCB0aGlzLmxpbmVUeXBlc1tsaW5lTnVtLTFdID09ICdUTVVMJyB8fCB0aGlzLmxpbmVUeXBlc1tsaW5lTnVtLTFdID09ICdUTU9MJyB8fCB0aGlzLmxpbmVUeXBlc1tsaW5lTnVtLTFdID09ICdUTUJsb2NrcXVvdGUnKVxuICAgICAgKSB7XG4gICAgICAgIC8vIEZhbGwgYmFjayB0byBUTVBhcmFcbiAgICAgICAgbGluZVR5cGUgPSAnVE1QYXJhJztcbiAgICAgICAgbGluZUNhcHR1cmUgPSBbdGhpcy5saW5lc1tsaW5lTnVtXV07XG4gICAgICAgIGxpbmVSZXBsYWNlbWVudCA9ICckJDAnO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXRleHQgSDIgbWFya2VycyB0aGF0IGNhbiBhbHNvIGJlIGludGVycHJldGVkIGFzIGFuIGVtcHR5IGxpc3QgaXRlbSBzaG91bGQgYmUgcmVnYXJkZWQgYXMgc3VjaCAoYXMgcGVyIENvbW1vbk1hcmsgc3BlYylcbiAgICAgIGlmIChsaW5lVHlwZSA9PSAnVE1TZXRleHRIMk1hcmtlcicpIHtcbiAgICAgICAgbGV0IGNhcHR1cmUgPSBsaW5lR3JhbW1hci5UTVVMLnJlZ2V4cC5leGVjKHRoaXMubGluZXNbbGluZU51bV0pO1xuICAgICAgICBpZiAoY2FwdHVyZSkge1xuICAgICAgICAgIGxpbmVUeXBlID0gJ1RNVUwnO1xuICAgICAgICAgIGxpbmVSZXBsYWNlbWVudCA9IGxpbmVHcmFtbWFyLlRNVUwucmVwbGFjZW1lbnQ7XG4gICAgICAgICAgbGluZUNhcHR1cmUgPSBjYXB0dXJlO1xuICAgICAgICB9ICAgICAgXG4gICAgICB9XG5cbiAgICAgIC8vIFNldGV4dCBoZWFkaW5ncyBhcmUgb25seSB2YWxpZCBpZiBwcmVjZWRlZCBieSBhIHBhcmFncmFwaCAoYW5kIGlmIHNvLCB0aGV5IGNoYW5nZSB0aGUgdHlwZSBvZiB0aGUgcHJldmlvdXMgcGFyYWdyYXBoKVxuICAgICAgaWYgKGxpbmVUeXBlID09ICdUTVNldGV4dEgxTWFya2VyJyB8fCBsaW5lVHlwZSA9PSAnVE1TZXRleHRIMk1hcmtlcicpIHtcbiAgICAgICAgaWYgKGxpbmVOdW0gPT0gMCB8fCB0aGlzLmxpbmVUeXBlc1tsaW5lTnVtIC0gMV0gIT0gJ1RNUGFyYScpIHtcbiAgICAgICAgICAvLyBTZXRleHQgbWFya2VyIGlzIGludmFsaWQuIEhvd2V2ZXIsIGEgSDIgbWFya2VyIG1pZ2h0IHN0aWxsIGJlIGEgdmFsaWQgSFIsIHNvIGxldCdzIGNoZWNrIHRoYXRcbiAgICAgICAgICBsZXQgY2FwdHVyZSA9IGxpbmVHcmFtbWFyLlRNSFIucmVnZXhwLmV4ZWModGhpcy5saW5lc1tsaW5lTnVtXSk7XG4gICAgICAgICAgaWYgKGNhcHR1cmUpIHtcbiAgICAgICAgICAgIC8vIFZhbGlkIEhSXG4gICAgICAgICAgICBsaW5lVHlwZSA9ICdUTUhSJztcbiAgICAgICAgICAgIGxpbmVDYXB0dXJlID0gY2FwdHVyZTtcbiAgICAgICAgICAgIGxpbmVSZXBsYWNlbWVudCA9IGxpbmVHcmFtbWFyLlRNSFIucmVwbGFjZW1lbnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vdCB2YWxpZCBIUiwgZm9ybWF0IGFzIFRNUGFyYVxuICAgICAgICAgICAgbGluZVR5cGUgPSAnVE1QYXJhJztcbiAgICAgICAgICAgIGxpbmVDYXB0dXJlID0gW3RoaXMubGluZXNbbGluZU51bV1dO1xuICAgICAgICAgICAgbGluZVJlcGxhY2VtZW50ID0gJyQkMCc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFZhbGlkIHNldGV4dCBtYXJrZXIuIENoYW5nZSB0eXBlcyBvZiBwcmVjZWRpbmcgcGFyYSBsaW5lc1xuICAgICAgICAgIGxldCBoZWFkaW5nTGluZSA9IGxpbmVOdW0gLSAxO1xuICAgICAgICAgIGNvbnN0IGhlYWRpbmdMaW5lVHlwZSA9IChsaW5lVHlwZSA9PSAnVE1TZXRleHRIMU1hcmtlcicgPyAnVE1TZXRleHRIMScgOiAnVE1TZXRleHRIMicpO1xuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpbmVUeXBlc1toZWFkaW5nTGluZVR5cGVdICE9IGhlYWRpbmdMaW5lVHlwZSkge1xuICAgICAgICAgICAgICB0aGlzLmxpbmVUeXBlc1toZWFkaW5nTGluZV0gPSBoZWFkaW5nTGluZVR5cGU7IFxuICAgICAgICAgICAgICB0aGlzLmxpbmVEaXJ0eVtoZWFkaW5nTGluZVR5cGVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGluZVJlcGxhY2VtZW50c1toZWFkaW5nTGluZV0gPSAnJCQwJztcbiAgICAgICAgICAgIHRoaXMubGluZUNhcHR1cmVzW2hlYWRpbmdMaW5lXSA9IFt0aGlzLmxpbmVzW2hlYWRpbmdMaW5lXV07XG5cbiAgICAgICAgICAgIGhlYWRpbmdMaW5lLS07XG4gICAgICAgICAgfSB3aGlsZShoZWFkaW5nTGluZSA+PSAwICYmIHRoaXMubGluZVR5cGVzW2hlYWRpbmdMaW5lXSA9PSAnVE1QYXJhJyk7IFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBMYXN0bHksIHNhdmUgdGhlIGxpbmUgc3R5bGUgdG8gYmUgYXBwbGllZCBsYXRlclxuICAgICAgaWYgKHRoaXMubGluZVR5cGVzW2xpbmVOdW1dICE9IGxpbmVUeXBlKSB7XG4gICAgICAgIHRoaXMubGluZVR5cGVzW2xpbmVOdW1dID0gbGluZVR5cGU7XG4gICAgICAgIHRoaXMubGluZURpcnR5W2xpbmVOdW1dID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubGluZVJlcGxhY2VtZW50c1tsaW5lTnVtXSA9IGxpbmVSZXBsYWNlbWVudDtcbiAgICAgIHRoaXMubGluZUNhcHR1cmVzW2xpbmVOdW1dID0gbGluZUNhcHR1cmU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgYWxsIGxpbmUgY29udGVudHMgZnJvbSB0aGUgSFRNTCwgdGhlbiByZS1hcHBsaWVzIGZvcm1hdHRpbmcuXG4gICAqL1xuICB1cGRhdGVMaW5lQ29udGVudHNBbmRGb3JtYXR0aW5nKCkge1xuICAgIHRoaXMuY2xlYXJEaXJ0eUZsYWcoKTtcbiAgICB0aGlzLnVwZGF0ZUxpbmVDb250ZW50cygpO1xuICAgIHRoaXMudXBkYXRlRm9ybWF0dGluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHBhcnNlIGEgbGluayBvciBpbWFnZSBhdCB0aGUgY3VycmVudCBwb3NpdGlvbi4gVGhpcyBhc3N1bWVzIHRoYXQgdGhlIG9wZW5pbmcgWyBvciAhWyBoYXMgYWxyZWFkeSBiZWVuIG1hdGNoZWQuIFxuICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoaXMgaXMgbm90IGEgdmFsaWQgbGluaywgaW1hZ2UuIFNlZSBiZWxvdyBmb3IgbW9yZSBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3JpZ2luYWxTdHJpbmcgVGhlIG9yaWdpbmFsIHN0cmluZywgc3RhcnRpbmcgYXQgdGhlIG9wZW5pbmcgbWFya2VyIChbIG9yICFbKVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzSW1hZ2UgV2hldGhlciBvciBub3QgdGhpcyBpcyBhbiBpbWFnZSAob3BlbmVyID09ICFbKVxuICAgKiBAcmV0dXJucyBmYWxzZSBpZiBub3QgYSB2YWxpZCBsaW5rIC8gaW1hZ2UuIFxuICAgKiBPdGhlcndpc2UgcmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0d28gcHJvcGVydGllczogb3V0cHV0IGlzIHRoZSBzdHJpbmcgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIHByb2Nlc3NlZCBvdXRwdXQsIFxuICAgKiBjaGFyQ291bnQgaXMgdGhlIG51bWJlciBvZiBpbnB1dCBjaGFyYWN0ZXJzIChmcm9tIG9yaWdpbmFsU3RyaW5nKSBjb25zdW1lZC5cbiAgICovXG4gIHBhcnNlTGlua09ySW1hZ2Uob3JpZ2luYWxTdHJpbmcsIGlzSW1hZ2UpIHtcbiAgICAvLyBTa2lwIHRoZSBvcGVuaW5nIGJyYWNrZXRcbiAgICBsZXQgdGV4dE9mZnNldCA9IGlzSW1hZ2UgPyAyIDogMTtcbiAgICBsZXQgb3BlbmVyID0gb3JpZ2luYWxTdHJpbmcuc3Vic3RyKDAsIHRleHRPZmZzZXQpO1xuICAgIGxldCB0eXBlID0gaXNJbWFnZSA/ICdUTUltYWdlJyA6ICdUTUxpbmsnO1xuICAgIGxldCBjdXJyZW50T2Zmc2V0ID0gdGV4dE9mZnNldDtcbiAgICBcbiAgICBsZXQgYnJhY2tldExldmVsID0gMTtcbiAgICBsZXQgbGlua1RleHQgPSBmYWxzZTtcbiAgICBsZXQgbGlua1JlZiA9IGZhbHNlO1xuICAgIGxldCBsaW5rTGFiZWwgPSBbXTtcbiAgICBsZXQgbGlua0RldGFpbHMgPSBbXTsgLy8gSWYgbWF0Y2hlZCwgdGhpcyB3aWxsIGJlIGFuIGFycmF5OiBbd2hpdGVzcGFjZSArIGxpbmsgZGVzdGluYXRpb24gZGVsaW1pdGVyLCBsaW5rIGRlc3RpbmF0aW9uLCBsaW5rIGRlc3RpbmF0aW9uIGRlbGltaXRlciwgd2hpdGVzcGFjZSwgbGluayB0aXRsZSBkZWxpbWl0ZXIsIGxpbmsgdGl0bGUsIGxpbmsgdGl0bGUgZGVsaW1pdGVyICsgd2hpdGVzcGFjZV0uIEFsbCBjYW4gYmUgZW1wdHkgc3RyaW5ncy5cblxuICBcbiAgICB0ZXh0T3V0ZXI6IHdoaWxlIChjdXJyZW50T2Zmc2V0IDwgb3JpZ2luYWxTdHJpbmcubGVuZ3RoICYmIGxpbmtUZXh0ID09PSBmYWxzZSAvKiBlbXB0eSBzdHJpbmcgaXMgb2theSAqLykge1xuICAgICAgbGV0IHN0cmluZyA9IG9yaWdpbmFsU3RyaW5nLnN1YnN0cihjdXJyZW50T2Zmc2V0KTtcbiAgXG4gICAgICAvLyBDYXB0dXJlIGFueSBlc2NhcGVzIGFuZCBjb2RlIGJsb2NrcyBhdCBjdXJyZW50IHBvc2l0aW9uLCB0aGV5IGJpbmQgbW9yZSBzdHJvbmdseSB0aGFuIGxpbmtzXG4gICAgICAvLyBXZSBkb24ndCBoYXZlIHRvIGFjdHVhbGx5IHByb2Nlc3MgdGhlbSBoZXJlLCB0aGF0J2xsIGJlIGRvbmUgbGF0ZXIgaW4gY2FzZSB0aGUgbGluayAvIGltYWdlIGlzIHZhbGlkLCBidXQgd2UgbmVlZCB0byBza2lwIG92ZXIgdGhlbS5cbiAgICAgIGZvciAobGV0IHJ1bGUgb2YgWydlc2NhcGUnLCAnY29kZScsICdhdXRvbGluaycsICdodG1sJ10pIHtcbiAgICAgICAgbGV0IGNhcCA9IGlubGluZUdyYW1tYXJbcnVsZV0ucmVnZXhwLmV4ZWMoc3RyaW5nKTtcbiAgICAgICAgaWYgKGNhcCkge1xuICAgICAgICAgIGN1cnJlbnRPZmZzZXQgKz0gY2FwWzBdLmxlbmd0aDtcbiAgICAgICAgICBjb250aW51ZSB0ZXh0T3V0ZXI7IFxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLy8gQ2hlY2sgZm9yIGltYWdlLiBJdCdzIG9rYXkgZm9yIGFuIGltYWdlIHRvIGJlIGluY2x1ZGVkIGluIGEgbGluayBvciBpbWFnZVxuICAgICAgaWYgKHN0cmluZy5tYXRjaChpbmxpbmVHcmFtbWFyLmltYWdlT3Blbi5yZWdleHApKSB7XG4gICAgICAgIC8vIE9wZW5pbmcgaW1hZ2UuIEl0J3Mgb2theSBpZiB0aGlzIGlzIGEgbWF0Y2hpbmcgcGFpciBvZiBicmFja2V0c1xuICAgICAgICBicmFja2V0TGV2ZWwrKztcbiAgICAgICAgY3VycmVudE9mZnNldCArPSAyO1xuICAgICAgICBjb250aW51ZSB0ZXh0T3V0ZXI7XG4gICAgICB9XG4gIFxuICAgICAgLy8gQ2hlY2sgZm9yIGxpbmsgKG5vdCBhbiBpbWFnZSBiZWNhdXNlIHRoYXQgd291bGQgaGF2ZSBiZWVuIGNhcHR1cmVkIGFuZCBza2lwcGVkIG92ZXIgYWJvdmUpXG4gICAgICBpZiAoc3RyaW5nLm1hdGNoKGlubGluZUdyYW1tYXIubGlua09wZW4ucmVnZXhwKSkge1xuICAgICAgICAvLyBPcGVuaW5nIGJyYWNrZXQuIFR3byB0aGluZ3MgdG8gZG86XG4gICAgICAgIC8vIDEpIGl0J3Mgb2theSBpZiB0aGlzIHBhcnQgb2YgYSBwYWlyIG9mIGJyYWNrZXRzLlxuICAgICAgICAvLyAyKSBJZiB3ZSBhcmUgY3VycmVudGx5IHRyeWluZyB0byBwYXJzZSBhIGxpbmssIHRoaXMgbmVzdGVkIGJyYWNrZXQgbXVzbid0IHN0YXJ0IGEgdmFsaWQgbGluayAobm8gbmVzdGVkIGxpbmtzIGFsbG93ZWQpXG4gICAgICAgIGJyYWNrZXRMZXZlbCsrO1xuICAgICAgICAvLyBpZiAoYnJhY2tldExldmVsID49IDIpIHJldHVybiBmYWxzZTsgLy8gTmVzdGVkIHVuZXNjYXBlZCBicmFja2V0cywgdGhpcyBkb2Vzbid0IHF1YWxpZnkgYXMgYSBsaW5rIC8gaW1hZ2VcbiAgICAgICAgaWYgKCFpc0ltYWdlKSB7XG4gICAgICAgICAgaWYgKHRoaXMucGFyc2VMaW5rT3JJbWFnZShzdHJpbmcsIGZhbHNlKSkge1xuICAgICAgICAgICAgLy8gVmFsaWQgbGluayBpbnNpZGUgdGhpcyBwb3NzaWJsZSBsaW5rLCB3aGljaCBtYWtlcyB0aGlzIGxpbmsgaW52YWxpZCAoaW5uZXIgbGlua3MgYmVhdCBvdXRlciBvbmVzKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50T2Zmc2V0ICs9IDE7XG4gICAgICAgIGNvbnRpbnVlIHRleHRPdXRlcjtcbiAgICAgIH1cbiAgXG4gICAgICAvLyBDaGVjayBmb3IgY2xvc2luZyBicmFja2V0XG4gICAgICBpZiAoc3RyaW5nLm1hdGNoKC9eXFxdLykpIHtcbiAgICAgICAgYnJhY2tldExldmVsLS07XG4gICAgICAgIGlmIChicmFja2V0TGV2ZWwgPT0gMCkge1xuICAgICAgICAgIC8vIEZvdW5kIG1hdGNoaW5nIGJyYWNrZXQgYW5kIGhhdmVuJ3QgZm91bmQgYW55dGhpbmcgZGlzcXVhbGlmeWluZyB0aGlzIGFzIGxpbmsgLyBpbWFnZS5cbiAgICAgICAgICBsaW5rVGV4dCA9IG9yaWdpbmFsU3RyaW5nLnN1YnN0cih0ZXh0T2Zmc2V0LCBjdXJyZW50T2Zmc2V0IC0gdGV4dE9mZnNldCk7XG4gICAgICAgICAgY3VycmVudE9mZnNldCsrO1xuICAgICAgICAgIGNvbnRpbnVlIHRleHRPdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIE5vdGhpbmcgbWF0Y2hlcywgcHJvY2VlZCB0byBuZXh0IGNoYXJcbiAgICAgIGN1cnJlbnRPZmZzZXQrKztcbiAgICB9XG4gIFxuICAgIC8vIERpZCB3ZSBmaW5kIGEgbGluayB0ZXh0IChpLmUuLCBmaW5kIGEgbWF0Y2hpbmcgY2xvc2luZyBicmFja2V0PylcbiAgICBpZiAobGlua1RleHQgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7IC8vIE5vcGVcbiAgXG4gICAgLy8gU28gZmFyLCBzbyBnb29kLiBXZSd2ZSBnb3QgYSB2YWxpZCBsaW5rIHRleHQuIExldCdzIHNlZSB3aGF0IHR5cGUgb2YgbGluayB0aGlzIGlzXG4gICAgbGV0IG5leHRDaGFyID0gY3VycmVudE9mZnNldCA8IG9yaWdpbmFsU3RyaW5nLmxlbmd0aCA/IG9yaWdpbmFsU3RyaW5nLnN1YnN0cihjdXJyZW50T2Zmc2V0LCAxKSA6ICcnOyBcblxuICAgIC8vIFJFRkVSRU5DRSBMSU5LU1xuICAgIGlmIChuZXh0Q2hhciA9PSAnWycpIHtcbiAgICAgIGxldCBzdHJpbmcgPSBvcmlnaW5hbFN0cmluZy5zdWJzdHIoY3VycmVudE9mZnNldCk7XG4gICAgICBsZXQgY2FwID0gaW5saW5lR3JhbW1hci5saW5rTGFiZWwucmVnZXhwLmV4ZWMoc3RyaW5nKTtcbiAgICAgIGlmIChjYXApIHtcbiAgICAgICAgLy8gVmFsaWQgbGluayBsYWJlbFxuICAgICAgICBjdXJyZW50T2Zmc2V0ICs9IGNhcFswXS5sZW5ndGg7XG4gICAgICAgIGxpbmtMYWJlbC5wdXNoKGNhcFsxXSwgY2FwWzJdLCBjYXBbM10pO1xuICAgICAgICBpZiAoY2FwW2lubGluZUdyYW1tYXIubGlua0xhYmVsLmxhYmVsUGxhY2Vob2xkZXJdKSB7XG4gICAgICAgICAgLy8gRnVsbCByZWZlcmVuY2UgbGlua1xuICAgICAgICAgIGxpbmtSZWYgPSBjYXBbaW5saW5lR3JhbW1hci5saW5rTGFiZWwubGFiZWxQbGFjZWhvbGRlcl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ29sbGFwc2VkIHJlZmVyZW5jZSBsaW5rXG4gICAgICAgICAgbGlua1JlZiA9IGxpbmtUZXh0LnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm90IGEgdmFsaWQgbGluayBsYWJlbFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9ICAgXG4gICAgfSBlbHNlIGlmIChuZXh0Q2hhciAhPSAnKCcpIHtcbiAgICAgIFxuICAgICAgLy8gU2hvcnRjdXQgcmVmIGxpbmtcbiAgICAgIGxpbmtSZWYgPSBsaW5rVGV4dC50cmltKCk7XG5cbiAgICAvLyBJTkxJTkUgTElOS1NcbiAgICB9IGVsc2UgeyAvLyBuZXh0Q2hhciA9PSAnKCdcbiAgICAgIFxuICAgICAgLy8gUG90ZW50aWFsIGlubGluZSBsaW5rXG4gICAgICBjdXJyZW50T2Zmc2V0Kys7XG5cbiAgICAgIGxldCBwYXJlbnRoZXNpc0xldmVsID0gMTtcbiAgICAgIGlubGluZU91dGVyOiB3aGlsZSAoY3VycmVudE9mZnNldCA8IG9yaWdpbmFsU3RyaW5nLmxlbmd0aCAmJiBwYXJlbnRoZXNpc0xldmVsID4gMCkge1xuICAgICAgICBsZXQgc3RyaW5nID0gb3JpZ2luYWxTdHJpbmcuc3Vic3RyKGN1cnJlbnRPZmZzZXQpO1xuXG4gICAgICAgIC8vIFByb2Nlc3Mgd2hpdGVzcGFjZVxuICAgICAgICBsZXQgY2FwID0gL15cXHMrLy5leGVjKHN0cmluZyk7XG4gICAgICAgIGlmIChjYXApIHtcbiAgICAgICAgICBzd2l0Y2ggKGxpbmtEZXRhaWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiBsaW5rRGV0YWlscy5wdXNoKGNhcFswXSk7IGJyZWFrOyAvLyBPcGVuaW5nIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIGNhc2UgMTogbGlua0RldGFpbHMucHVzaChjYXBbMF0pOyBicmVhazsvLyBPcGVuIGRlc3RpbmF0aW9uLCBidXQgbm90IGEgZGVzdGluYXRpb24geWV0OyBkZXNpbmF0aW9uIG9wZW5lZCB3aXRoIDxcbiAgICAgICAgICAgIGNhc2UgMjogLy8gT3BlbiBkZXN0aW5hdGlvbiB3aXRoIGNvbnRlbnQgaW4gaXQuIFdoaXRlc3BhY2Ugb25seSBhbGxvd2VkIGlmIG9wZW5lZCBieSBhbmdsZSBicmFja2V0LCBvdGhlcndpc2UgdGhpcyBjbG9zZXMgdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIGlmIChsaW5rRGV0YWlsc1swXS5tYXRjaCgvPC8pKSB7XG4gICAgICAgICAgICAgICAgbGlua0RldGFpbHNbMV0gPSBsaW5rRGV0YWlsc1sxXS5jb25jYXQoY2FwWzBdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50aGVzaXNMZXZlbCAhPSAxKSByZXR1cm4gZmFsc2U7IC8vIFVuYmFsYW5jZWQgcGFyZW50aGVzaXNcbiAgICAgICAgICAgICAgICBsaW5rRGV0YWlscy5wdXNoKCcnKTsgLy8gRW1wdHkgZW5kIGRlbGltaXRlciBmb3IgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgICBsaW5rRGV0YWlscy5wdXNoKGNhcFswXSk7IC8vIFdoaXRlc3BhY2UgaW4gYmV0d2VlbiBkZXN0aW5hdGlvbiBhbmQgdGl0bGVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzogbGlua0RldGFpbHMucHVzaChjYXBbMF0pOyBicmVhazsgLy8gV2hpdGVzcGFjZSBiZXR3ZWVuIGRlc3RpbmF0aW9uIGFuZCB0aXRsZVxuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gZmFsc2U7IC8vIFRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbiAobm8gb3BlbmVyIGZvciB0aXRsZSB5ZXQsIGJ1dCBtb3JlIHdoaXRlc3BhY2UgdG8gY2FwdHVyZSlcbiAgICAgICAgICAgIGNhc2UgNTogbGlua0RldGFpbHMucHVzaCgnJyk7IC8vIFdoaXRlc3BhY2UgYXQgYmVnaW5uaW5nIG9mIHRpdGxlLCBwdXNoIGVtcHR5IHRpdGxlIGFuZCBjb250aW51ZVxuICAgICAgICAgICAgY2FzZSA2OiBsaW5rRGV0YWlsc1s1XSA9IGxpbmtEZXRhaWxzWzVdLmNvbmNhdChjYXBbMF0pOyBicmVhazsgLy8gV2hpdGVzcGFjZSBpbiB0aXRsZVxuICAgICAgICAgICAgY2FzZSA3OiBsaW5rRGV0YWlsc1s2XSA9IGxpbmtEZXRhaWxzWzZdLmNvbmNhdChjYXBbMF0pOyBicmVhazsgLy8gV2hpdGVzcGFjZSBhZnRlciBjbG9zaW5nIGRlbGltaXRlclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlOyAvLyBXZSBzaG91bGQgbmV2ZXIgZ2V0IGhlcmVcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudE9mZnNldCArPSBjYXBbMF0ubGVuZ3RoO1xuICAgICAgICAgIGNvbnRpbnVlIGlubGluZU91dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvY2VzcyBiYWNrc2xhc2ggZXNjYXBlc1xuICAgICAgICBjYXAgPSBpbmxpbmVHcmFtbWFyLmVzY2FwZS5yZWdleHAuZXhlYyhzdHJpbmcpO1xuICAgICAgICBpZiAoY2FwKSB7XG4gICAgICAgICAgc3dpdGNoIChsaW5rRGV0YWlscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogbGlua0RldGFpbHMucHVzaCgnJyk7IC8vIHRoaXMgb3BlbnMgdGhlIGxpbmsgZGVzdGluYXRpb24sIGFkZCBlbXB0eSBvcGVuaW5nIGRlbGltaXRlciBhbmQgcHJvY2VlZCB0byBuZXh0IGNhc2VcbiAgICAgICAgICAgIGNhc2UgMTogbGlua0RldGFpbHMucHVzaChjYXBbMF0pOyBicmVhazsgLy8gVGhpcyBvcGVucyB0aGUgbGluayBkZXN0aW5hdGlvbiwgYXBwZW5kIGl0XG4gICAgICAgICAgICBjYXNlIDI6IGxpbmtEZXRhaWxzWzFdID0gbGlua0RldGFpbHNbMV0uY29uY2F0KGNhcFswXSk7IGJyZWFrOyAvLyBQYXJ0IG9mIHRoZSBsaW5rIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBmYWxzZTsgLy8gTGFja2luZyBvcGVuaW5nIGRlbGltaXRlciBmb3IgbGluayB0aXRsZVxuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gZmFsc2U7IC8vIExjYWtpbmcgb3BlbmluZyBkZWxpbWl0ZXIgZm9yIGxpbmsgdGl0bGVcbiAgICAgICAgICAgIGNhc2UgNTogbGlua0RldGFpbHMucHVzaCgnJyk7IC8vIFRoaXMgb3BlbnMgdGhlIGxpbmsgdGl0bGVcbiAgICAgICAgICAgIGNhc2UgNjogbGlua0RldGFpbHNbNV0gPSBsaW5rRGV0YWlsc1s1XS5jb25jYXQoY2FwWzBdKTsgYnJlYWs7IC8vIFBhcnQgb2YgdGhlIGxpbmsgdGl0bGVcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTsgLy8gQWZ0ZXIgbGluayB0aXRsZSB3YXMgY2xvc2VkLCB3aXRob3V0IGNsb3NpbmcgcGFyZW50aGVzaXNcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudE9mZnNldCArPSBjYXBbMF0ubGVuZ3RoO1xuICAgICAgICAgIGNvbnRpbnVlIGlubGluZU91dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvY2VzcyBvcGVuaW5nIGFuZ2xlIGJyYWNrZXQgYXMgZGVpbGltaXRlciBvZiBkZXN0aW5hdGlvblxuICAgICAgICBpZiAobGlua0RldGFpbHMubGVuZ3RoIDwgMiAmJiBzdHJpbmcubWF0Y2goL148LykpIHtcbiAgICAgICAgICBpZiAobGlua0RldGFpbHMubGVuZ3RoID09IDApIGxpbmtEZXRhaWxzLnB1c2goJycpO1xuICAgICAgICAgIGxpbmtEZXRhaWxzWzBdID0gbGlua0RldGFpbHNbMF0uY29uY2F0KCc8Jyk7XG4gICAgICAgICAgY3VycmVudE9mZnNldCsrO1xuICAgICAgICAgIGNvbnRpbnVlIGlubGluZU91dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvY2VzcyBjbG9zaW5nIGFuZ2xlIGJyYWNrZXQgYXMgZGVsaW1pdGVyIG9mIGRlc3RpbmF0aW9uXG4gICAgICAgIGlmICgobGlua0RldGFpbHMubGVuZ3RoID09IDEgfHwgbGlua0RldGFpbHMubGVuZ3RoID09IDIpICYmIHN0cmluZy5tYXRjaCgvXj4vKSkge1xuICAgICAgICAgIGlmIChsaW5rRGV0YWlscy5sZW5ndGggPT0gMSkgbGlua0RldGFpbHMucHVzaCgnJyk7IC8vIEVtcHR5IGxpbmsgZGVzdGluYXRpb25cbiAgICAgICAgICBsaW5rRGV0YWlscy5wdXNoKCc+Jyk7XG4gICAgICAgICAgY3VycmVudE9mZnNldCsrO1xuICAgICAgICAgIGNvbnRpbnVlIGlubGluZU91dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvY2VzcyAgbm9uLXBhcmVudGhlc2lzIGRlbGltaXRlciBmb3IgdGl0bGUuIFxuICAgICAgICBjYXAgPSAvXltcIiddLy5leGVjKHN0cmluZylcbiAgICAgICAgLy8gRm9yIHRoaXMgdG8gYmUgYSB2YWxpZCBvcGVuZXIsIHdlIGhhdmUgdG8gZWl0aGVyIGhhdmUgbm8gZGVzdGluYXRpb24sIG9ubHkgd2hpdGVzcGFjZSBzbyBmYXIsXG4gICAgICAgIC8vIG9yIGEgZGVzdGluYXRpb24gd2l0aCB0cmFpbGluZyB3aGl0ZXNwYWNlLlxuICAgICAgICBpZiAoY2FwICYmIChsaW5rRGV0YWlscy5sZW5ndGggPT0gMCB8fCBsaW5rRGV0YWlscy5sZW5ndGggPT0gMSB8fCBsaW5rRGV0YWlscy5sZW5ndGggPT0gNCkpIHtcbiAgICAgICAgICB3aGlsZSAobGlua0RldGFpbHMubGVuZ3RoIDwgNCkgbGlua0RldGFpbHMucHVzaCgnJyk7XG4gICAgICAgICAgbGlua0RldGFpbHMucHVzaChjYXBbMF0pO1xuICAgICAgICAgIGN1cnJlbnRPZmZzZXQrKztcbiAgICAgICAgICBjb250aW51ZSBpbmxpbmVPdXRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZvciB0aGlzIHRvIGJlIGEgdmFsaWQgY2xvc2VyLCB3ZSBoYXZlIHRvIGhhdmUgYW4gb3BlbmVyIGFuZCBzb21lIG9yIG5vIHRpdGxlLCBhbmQgdGhpcyBoYXMgdG8gbWF0Y2ggdGhlIG9wZW5lclxuICAgICAgICBpZiAoY2FwICYmIChsaW5rRGV0YWlscy5sZW5ndGggPT0gNSB8fCBsaW5rRGV0YWlscy5sZW5ndGggPT0gNikgJiYgbGlua0RldGFpbHNbNF0gPT0gY2FwWzBdKSB7XG4gICAgICAgICAgaWYgKGxpbmtEZXRhaWxzLmxlbmd0aCA9PSA1KSBsaW5rRGV0YWlscy5wdXNoKCcnKTsgLy8gRW1wdHkgbGluayB0aXRsZVxuICAgICAgICAgIGxpbmtEZXRhaWxzLnB1c2goY2FwWzBdKTtcbiAgICAgICAgICBjdXJyZW50T2Zmc2V0Kys7XG4gICAgICAgICAgY29udGludWUgaW5saW5lT3V0ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXIgY2FzZXMgKGxpbmtEZXRhaWxzLmxlbmd0aCA9PSAyLCAzLCA3KSB3aWxsIGJlIGhhbmRsZWQgd2l0aCB0aGUgXCJkZWZhdWx0XCIgY2FzZSBiZWxvdy5cblxuICAgICAgICAvLyBQcm9jZXNzIG9wZW5pbmcgcGFyZW50aGVzaXNcbiAgICAgICAgaWYgKHN0cmluZy5tYXRjaCgvXlxcKC8pKSB7XG4gICAgICAgICAgc3dpdGNoIChsaW5rRGV0YWlscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogbGlua0RldGFpbHMucHVzaCgnJyk7IC8vIHRoaXMgb3BlbnMgdGhlIGxpbmsgZGVzdGluYXRpb24sIGFkZCBlbXB0eSBvcGVuaW5nIGRlbGltaXRlciBhbmQgcHJvY2VlZCB0byBuZXh0IGNhc2VcbiAgICAgICAgICAgIGNhc2UgMTogbGlua0RldGFpbHMucHVzaCgnJyk7IC8vIFRoaXMgb3BlbnMgdGhlIGxpbmsgZGVzdGluYXRpb25cbiAgICAgICAgICAgIGNhc2UgMjogLy8gUGFydCBvZiB0aGUgbGluayBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICBsaW5rRGV0YWlsc1sxXSA9IGxpbmtEZXRhaWxzWzFdLmNvbmNhdCgnKCcpOyBcbiAgICAgICAgICAgICAgaWYgKCFsaW5rRGV0YWlsc1swXS5tYXRjaCgvPCQvKSkgcGFyZW50aGVzaXNMZXZlbCsrOyAgXG4gICAgICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgICAgIGNhc2UgMzogbGlua0RldGFpbHMucHVzaCgnJyk7ICAvLyAgb3BlbmluZyBkZWxpbWl0ZXIgZm9yIGxpbmsgdGl0bGVcbiAgICAgICAgICAgIGNhc2UgNDogbGlua0RldGFpbHMucHVzaCgnKCcpOyBicmVhazsvLyBvcGVuaW5nIGRlbGltaXRlciBmb3IgbGluayB0aXRsZVxuICAgICAgICAgICAgY2FzZSA1OiBsaW5rRGV0YWlscy5wdXNoKCcnKTsgLy8gb3BlbnMgdGhlIGxpbmsgdGl0bGUsIGFkZCBlbXB0eSB0aXRsZSBjb250ZW50IGFuZCBwcm9jZWVkIHRvIG5leHQgY2FzZSBcbiAgICAgICAgICAgIGNhc2UgNjovLyBQYXJ0IG9mIHRoZSBsaW5rIHRpdGxlLiBVbi1lc2NhcGVkIHBhcmVudGhlc2lzIG9ubHkgYWxsb3dlZCBpbiBcIiBvciAnIGRlbGltaXRlZCB0aXRsZVxuICAgICAgICAgICAgICBpZiAobGlua0RldGFpbHNbNF0gPT0gJygnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIGxpbmtEZXRhaWxzWzVdID0gbGlua0RldGFpbHNbNV0uY29uY2F0KCcoJyk7IFxuICAgICAgICAgICAgICBicmVhazsgXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7IC8vIEFmdGVyIGxpbmsgdGl0bGUgd2FzIGNsb3NlZCwgd2l0aG91dCBjbG9zaW5nIHBhcmVudGhlc2lzXG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnRPZmZzZXQrKztcbiAgICAgICAgICBjb250aW51ZSBpbmxpbmVPdXRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByb2Nlc3MgY2xvc2luZyBwYXJlbnRoZXNpc1xuICAgICAgICBpZiAoc3RyaW5nLm1hdGNoKC9eXFwpLykpIHtcbiAgICAgICAgICBpZiAobGlua0RldGFpbHMubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgIC8vIFdlIGFyZSBpbnNpZGUgdGhlIGxpbmsgZGVzdGluYXRpb24uIFBhcmVudGhlc2VzIGhhdmUgdG8gYmUgbWF0Y2hlZCBpZiBub3QgaW4gYW5nbGUgYnJhY2tldHNcbiAgICAgICAgICAgIHdoaWxlIChsaW5rRGV0YWlscy5sZW5ndGggPCAyKSBsaW5rRGV0YWlscy5wdXNoKCcnKTtcblxuICAgICAgICAgICAgaWYgKCFsaW5rRGV0YWlsc1swXS5tYXRjaCgvPCQvKSkgcGFyZW50aGVzaXNMZXZlbC0tO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50aGVzaXNMZXZlbCA+IDApIHtcbiAgICAgICAgICAgICAgbGlua0RldGFpbHNbMV0gPSBsaW5rRGV0YWlsc1sxXS5jb25jYXQoJyknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIH0gZWxzZSBpZiAobGlua0RldGFpbHMubGVuZ3RoID09IDUgfHwgbGlua0RldGFpbHMubGVuZ3RoID09IDYpIHtcbiAgICAgICAgICAgIC8vIFdlIGFyZSBpbnNpZGUgdGhlIGxpbmsgdGl0bGUuIFxuICAgICAgICAgICAgaWYgKGxpbmtEZXRhaWxzWzRdID09ICcoJykge1xuICAgICAgICAgICAgICAvLyBUaGlzIGNsb3NlcyB0aGUgbGluayB0aXRsZVxuICAgICAgICAgICAgICBpZiAobGlua0RldGFpbHMubGVuZ3RoID09IDUpIGxpbmtEZXRhaWxzLnB1c2goJycpO1xuICAgICAgICAgICAgICBsaW5rRGV0YWlscy5wdXNoKCcpJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBKdXN0IHJlZ3VsYXIgb2wnIGNvbnRlbnRcbiAgICAgICAgICAgICAgaWYgKGxpbmtEZXRhaWxzLmxlbmd0aCA9PSA1KSBsaW5rRGV0YWlscy5wdXNoKCcpJyk7XG4gICAgICAgICAgICAgIGVsc2UgbGlua0RldGFpbHNbNV0gPSBsaW5rRGV0YWlsc1s1XS5jb25jYXQoJyknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgIHBhcmVudGhlc2lzTGV2ZWwtLTsgLy8gVGhpcyBzaG91bGQgZGVjcmVhc2UgaXQgZnJvbSAxIHRvIDAuLi5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocGFyZW50aGVzaXNMZXZlbCA9PSAwKSB7XG4gICAgICAgICAgICAvLyBObyBpbnZhbGlkIGNvbmRpdGlvbiwgbGV0J3MgbWFrZSBzdXJlIHRoZSBsaW5rRGV0YWlscyBhcnJheSBpcyBjb21wbGV0ZVxuICAgICAgICAgICAgd2hpbGUgKGxpbmtEZXRhaWxzLmxlbmd0aCA8IDcpIGxpbmtEZXRhaWxzLnB1c2goJycpO1xuICAgICAgICAgIH0gXG5cbiAgICAgICAgICBjdXJyZW50T2Zmc2V0Kys7XG4gICAgICAgICAgY29udGludWUgaW5saW5lT3V0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbnkgb2xkIGNoYXJhY3RlclxuICAgICAgICBjYXAgPSAvXi4vLmV4ZWMoc3RyaW5nKTtcbiAgICAgICAgaWYgKGNhcCkge1xuICAgICAgICAgIHN3aXRjaCAobGlua0RldGFpbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IGxpbmtEZXRhaWxzLnB1c2goJycpOyAvLyB0aGlzIG9wZW5zIHRoZSBsaW5rIGRlc3RpbmF0aW9uLCBhZGQgZW1wdHkgb3BlbmluZyBkZWxpbWl0ZXIgYW5kIHByb2NlZWQgdG8gbmV4dCBjYXNlXG4gICAgICAgICAgICBjYXNlIDE6IGxpbmtEZXRhaWxzLnB1c2goY2FwWzBdKTsgYnJlYWs7IC8vIFRoaXMgb3BlbnMgdGhlIGxpbmsgZGVzdGluYXRpb24sIGFwcGVuZCBpdFxuICAgICAgICAgICAgY2FzZSAyOiBsaW5rRGV0YWlsc1sxXSA9IGxpbmtEZXRhaWxzWzFdLmNvbmNhdChjYXBbMF0pOyBicmVhazsgLy8gUGFydCBvZiB0aGUgbGluayBkZXN0aW5hdGlvblxuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gZmFsc2U7IC8vIExhY2tpbmcgb3BlbmluZyBkZWxpbWl0ZXIgZm9yIGxpbmsgdGl0bGVcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIGZhbHNlOyAvLyBMY2FraW5nIG9wZW5pbmcgZGVsaW1pdGVyIGZvciBsaW5rIHRpdGxlXG4gICAgICAgICAgICBjYXNlIDU6IGxpbmtEZXRhaWxzLnB1c2goJycpOyAvLyBUaGlzIG9wZW5zIHRoZSBsaW5rIHRpdGxlXG4gICAgICAgICAgICBjYXNlIDY6IGxpbmtEZXRhaWxzWzVdID0gbGlua0RldGFpbHNbNV0uY29uY2F0KGNhcFswXSk7IGJyZWFrOyAvLyBQYXJ0IG9mIHRoZSBsaW5rIHRpdGxlXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7IC8vIEFmdGVyIGxpbmsgdGl0bGUgd2FzIGNsb3NlZCwgd2l0aG91dCBjbG9zaW5nIHBhcmVudGhlc2lzXG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnRPZmZzZXQgKz0gY2FwWzBdLmxlbmd0aDtcbiAgICAgICAgICBjb250aW51ZSBpbmxpbmVPdXRlcjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBcIkluZmluaXRlIGxvb3BcIjsgLy8gd2Ugc2hvdWxkIG5ldmVyIGdldCBoZXJlIHNpbmNlIHRoZSBsYXN0IHRlc3QgbWF0Y2hlcyBhbnkgY2hhcmFjdGVyXG4gICAgICB9XG4gICAgICBpZiAocGFyZW50aGVzaXNMZXZlbCA+IDApIHJldHVybiBmYWxzZTsgLy8gUGFyZW50aGVzKGVzKSBub3QgY2xvc2VkXG5cbiAgICB9XG5cbiAgICBpZiAobGlua1JlZiAhPT0gZmFsc2UpIHtcbiAgICAgIC8vIFJlZiBsaW5rOyBjaGVjayB0aGF0IGxpbmtSZWYgaXMgdmFsaWRcbiAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgbGFiZWwgb2YgdGhpcy5saW5rTGFiZWxzKSB7XG4gICAgICAgIGlmIChsYWJlbCA9PSBsaW5rUmVmKSB7XG4gICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgbGFiZWwgPSB2YWxpZCA/IFwiVE1MaW5rTGFiZWwgVE1MaW5rTGFiZWxfVmFsaWRcIiA6IFwiVE1MaW5rTGFiZWwgVE1MaW5rTGFiZWxfSW52YWxpZFwiXG4gICAgICBsZXQgb3V0cHV0ID0gYDxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya18ke3R5cGV9XCI+JHtvcGVuZXJ9PC9zcGFuPjxzcGFuIGNsYXNzPVwiJHt0eXBlfSAkeyhsaW5rTGFiZWwubGVuZ3RoIDwgMyB8fCAhbGlua0xhYmVsWzFdKSA/IGxhYmVsIDogXCJcIn1cIj4ke3RoaXMucHJvY2Vzc0lubGluZVN0eWxlcyhsaW5rVGV4dCl9PC9zcGFuPjxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya18ke3R5cGV9XCI+XTwvc3Bhbj5gO1xuXG4gICAgICBpZiAobGlua0xhYmVsLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dC5jb25jYXQoXG4gICAgICAgICAgYDxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya18ke3R5cGV9XCI+JHtsaW5rTGFiZWxbMF19PC9zcGFuPmAsXG4gICAgICAgICAgYDxzcGFuIGNsYXNzPVwiJHtsYWJlbH1cIj4ke2xpbmtMYWJlbFsxXX08L3NwYW4+YCxcbiAgICAgICAgICBgPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrXyR7dHlwZX1cIj4ke2xpbmtMYWJlbFsyXX08L3NwYW4+YFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3V0cHV0IDogb3V0cHV0LFxuICAgICAgICBjaGFyQ291bnQgOiAgY3VycmVudE9mZnNldFxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChsaW5rRGV0YWlscykge1xuICAgICAgLy8gSW5saW5lIGxpbmtcblxuICAgICAgLy8gVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLCBidXQgYmV0dGVyIHNhZmUgdGhhbiBzb3JyeS5cbiAgICAgIHdoaWxlIChsaW5rRGV0YWlscy5sZW5ndGggPCA3KSB7XG4gICAgICAgIGxpbmtEZXRhaWxzLnB1c2goJycpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBvdXRwdXQ6IGA8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfJHt0eXBlfVwiPiR7b3BlbmVyfTwvc3Bhbj48c3BhbiBjbGFzcz1cIiR7dHlwZX1cIj4ke3RoaXMucHJvY2Vzc0lubGluZVN0eWxlcyhsaW5rVGV4dCl9PC9zcGFuPjxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya18ke3R5cGV9XCI+XSgke2xpbmtEZXRhaWxzWzBdfTwvc3Bhbj48c3BhbiBjbGFzcz1cIiR7dHlwZX1EZXN0aW5hdGlvblwiPiR7bGlua0RldGFpbHNbMV19PC9zcGFuPjxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya18ke3R5cGV9XCI+JHtsaW5rRGV0YWlsc1syXX0ke2xpbmtEZXRhaWxzWzNdfSR7bGlua0RldGFpbHNbNF19PC9zcGFuPjxzcGFuIGNsYXNzPVwiJHt0eXBlfVRpdGxlXCI+JHtsaW5rRGV0YWlsc1s1XX08L3NwYW4+PHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrXyR7dHlwZX1cIj4ke2xpbmtEZXRhaWxzWzZdfSk8L3NwYW4+YCxcbiAgICAgICAgY2hhckNvdW50OiBjdXJyZW50T2Zmc2V0XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICAvKipcbiAgICogRm9ybWF0cyBhIG1hcmtkb3duIHN0cmluZyBhcyBIVE1MLCB1c2luZyBNYXJrZG93biBpbmxpbmUgZm9ybWF0dGluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9yaWdpbmFsU3RyaW5nIFRoZSBpbnB1dCAobWFya2Rvd24gaW5saW5lIGZvcm1hdHRlZCkgc3RyaW5nXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBIVE1MIGZvcm1hdHRlZCBvdXRwdXRcbiAgICovXG4gIHByb2Nlc3NJbmxpbmVTdHlsZXMob3JpZ2luYWxTdHJpbmcpIHtcbiAgICBsZXQgcHJvY2Vzc2VkID0gJyc7XG4gICAgbGV0IHN0YWNrID0gW107IC8vIFN0YWNrIGlzIGFuIGFycmF5IG9mIG9iamVjdHMgb2YgdGhlIGZvcm1hdDoge2RlbGltaXRlciwgZGVsaW1TdHJpbmcsIGNvdW50LCBvdXRwdXR9XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgbGV0IHN0cmluZyA9IG9yaWdpbmFsU3RyaW5nO1xuICBcbiAgXG4gICAgb3V0ZXI6IHdoaWxlIChzdHJpbmcpIHtcbiAgICAgIC8vIFByb2Nlc3Mgc2ltcGxlIHJ1bGVzIChub24tZGVsaW1pdGVyKVxuICAgICAgZm9yIChsZXQgcnVsZSBvZiBbJ2VzY2FwZScsICdjb2RlJywgJ2F1dG9saW5rJywgJ2h0bWwnXSkge1xuICAgICAgICBsZXQgY2FwID0gaW5saW5lR3JhbW1hcltydWxlXS5yZWdleHAuZXhlYyhzdHJpbmcpO1xuICAgICAgICBpZiAoY2FwKSB7XG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nLnN1YnN0cihjYXBbMF0ubGVuZ3RoKTtcbiAgICAgICAgICBvZmZzZXQgKz0gY2FwWzBdLmxlbmd0aDtcbiAgICAgICAgICBwcm9jZXNzZWQgKz0gaW5saW5lR3JhbW1hcltydWxlXS5yZXBsYWNlbWVudFxuICAgICAgICAgICAgLy8gLnJlcGxhY2UoL1xcJFxcJChbMS05XSkvZywgKHN0ciwgcDEpID0+IHByb2Nlc3NJbmxpbmVTdHlsZXMoY2FwW3AxXSkpIC8vIHRvZG8gcmVjdXJzaXZlIGNhbGxpbmdcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXCQoWzEtOV0pL2csIChzdHIsIHAxKSA9PiBodG1sZXNjYXBlKGNhcFtwMV0pKTtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjsgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAvLyBDaGVjayBmb3IgbGlua3MgLyBpbWFnZXNcbiAgICAgIGxldCBwb3RlbnRpYWxMaW5rID0gc3RyaW5nLm1hdGNoKGlubGluZUdyYW1tYXIubGlua09wZW4ucmVnZXhwKTtcbiAgICAgIGxldCBwb3RlbnRpYWxJbWFnZSA9IHN0cmluZy5tYXRjaChpbmxpbmVHcmFtbWFyLmltYWdlT3Blbi5yZWdleHApO1xuICAgICAgaWYgKHBvdGVudGlhbEltYWdlIHx8IHBvdGVudGlhbExpbmspIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VMaW5rT3JJbWFnZShzdHJpbmcsIHBvdGVudGlhbEltYWdlKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHByb2Nlc3NlZCA9IGAke3Byb2Nlc3NlZH0ke3Jlc3VsdC5vdXRwdXR9YDtcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc3Vic3RyKHJlc3VsdC5jaGFyQ291bnQpO1xuICAgICAgICAgIG9mZnNldCArPSByZXN1bHQuY2hhckNvdW50O1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIENoZWNrIGZvciBlbSAvIHN0cm9uZyBkZWxpbWl0ZXJzXG4gICAgICBsZXQgY2FwID0gLyheXFwqKyl8KF5fKykvLmV4ZWMoc3RyaW5nKTtcbiAgICAgIGlmIChjYXApIHtcbiAgICAgICAgbGV0IGRlbGltQ291bnQgPSBjYXBbMF0ubGVuZ3RoO1xuICAgICAgICBjb25zdCBkZWxpbVN0cmluZyA9IGNhcFswXTtcbiAgICAgICAgY29uc3QgY3VycmVudERlbGltaXRlciA9IGNhcFswXVswXTsgLy8gVGhpcyBzaG91bGQgYmUgKiBvciBfXG4gIFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc3Vic3RyKGNhcFswXS5sZW5ndGgpO1xuICAgICAgXG4gICAgICAgIC8vIFdlIGhhdmUgYSBkZWxpbWl0ZXIgcnVuLiBMZXQncyBjaGVjayBpZiBpdCBjYW4gb3BlbiBvciBjbG9zZSBhbiBlbXBoYXNpcy5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByZWNlZGluZyA9IChvZmZzZXQgPiAwKSA/IG9yaWdpbmFsU3RyaW5nLnN1YnN0cigwLCBvZmZzZXQpIDogJyAnOyAvLyBiZWdpbm5pbmcgYW5kIGVuZCBvZiBsaW5lIGNvdW50IGFzIHdoaXRlc3BhY2VcbiAgICAgICAgY29uc3QgZm9sbG93aW5nID0gKG9mZnNldCArIGNhcFswXS5sZW5ndGggPCBvcmlnaW5hbFN0cmluZy5sZW5ndGgpID8gc3RyaW5nIDogJyAnO1xuICBcbiAgICAgICAgY29uc3QgcHVuY3R1YXRpb25Gb2xsb3dzID0gZm9sbG93aW5nLm1hdGNoKHB1bmN0dWF0aW9uTGVhZGluZyk7XG4gICAgICAgIGNvbnN0IHB1bmN0dWF0aW9uUHJlY2VkZXMgPSBwcmVjZWRpbmcubWF0Y2gocHVuY3R1YXRpb25UcmFpbGluZyk7XG4gICAgICAgIGNvbnN0IHdoaXRlc3BhY2VGb2xsb3dzID0gZm9sbG93aW5nLm1hdGNoKC9eXFxzLyk7XG4gICAgICAgIGNvbnN0IHdoaXRlc3BhY2VQcmVjZWRlcyA9IHByZWNlZGluZy5tYXRjaCgvXFxzJC8pO1xuICBcbiAgICAgICAgLy8gVGhlc2UgYXJlIHRoZSBydWxlcyBmb3IgcmlnaHQtZmxhbmtpbmcgYW5kIGxlZnQtZmxhbmtpbmcgZGVsaW1pdGVyIHJ1bnMgYXMgcGVyIENvbW1vbk1hcmsgc3BlY1xuICAgICAgICBsZXQgY2FuT3BlbiA9ICF3aGl0ZXNwYWNlRm9sbG93cyAmJiAoIXB1bmN0dWF0aW9uRm9sbG93cyB8fCAhIXdoaXRlc3BhY2VQcmVjZWRlcyB8fCAhIXB1bmN0dWF0aW9uUHJlY2VkZXMpO1xuICAgICAgICBsZXQgY2FuQ2xvc2UgPSAhd2hpdGVzcGFjZVByZWNlZGVzICYmICghcHVuY3R1YXRpb25QcmVjZWRlcyB8fCAhIXdoaXRlc3BhY2VGb2xsb3dzIHx8ICEhcHVuY3R1YXRpb25Gb2xsb3dzKTtcbiAgXG4gICAgICAgIC8vIFVuZGVyc2NvcmVzIGhhdmUgbW9yZSBkZXRhaWxlZCBydWxlcyB0aGFuIGp1c3QgYmVpbmcgcGFydCBvZiBsZWZ0LSBvciByaWdodC1mbGFua2luZyBydW46XG4gICAgICAgIGlmIChjdXJyZW50RGVsaW1pdGVyID09ICdfJyAmJiBjYW5PcGVuICYmIGNhbkNsb3NlKSB7XG4gICAgICAgICAgY2FuT3BlbiA9IHB1bmN0dWF0aW9uUHJlY2VkZXM7XG4gICAgICAgICAgY2FuQ2xvc2UgPSBwdW5jdHVhdGlvbkZvbGxvd3M7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIElmIHRoZSBkZWxpbWl0ZXIgY2FuIGNsb3NlLCBjaGVjayB0aGUgc3RhY2sgaWYgdGhlcmUncyBzb21ldGhpbmcgaXQgY2FuIGNsb3NlXG4gICAgICAgIGlmIChjYW5DbG9zZSkge1xuICAgICAgICAgIGxldCBzdGFja1BvaW50ZXIgPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgIC8vIFNlZSBpZiB3ZSBjYW4gZmluZCBhIG1hdGNoaW5nIG9wZW5pbmcgZGVsaW1pdGVyLCBtb3ZlIGRvd24gdGhyb3VnaCB0aGUgc3RhY2tcbiAgICAgICAgICB3aGlsZSAoZGVsaW1Db3VudCAmJiBzdGFja1BvaW50ZXIgPj0gMCkge1xuICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrUG9pbnRlcl0uZGVsaW1pdGVyID09IGN1cnJlbnREZWxpbWl0ZXIpIHtcbiAgICAgICAgICAgICAgLy8gV2UgZm91bmQgYSBtYXRjaGluZyBkZWxpbWl0ZXIsIGxldCdzIGNvbnN0cnVjdCB0aGUgZm9ybWF0dGVkIHN0cmluZ1xuICBcbiAgICAgICAgICAgICAgLy8gRmlyc3RseSwgaWYgd2Ugc2tpcHBlZCBhbnkgc3RhY2sgbGV2ZWxzLCBwb3AgdGhlbSBpbW1lZGlhdGVseSAobm9uLW1hdGNoaW5nIGRlbGltaXRlcnMpXG4gICAgICAgICAgICAgIHdoaWxlIChzdGFja1BvaW50ZXIgPCBzdGFjay5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW50cnkgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWQgPSBgJHtlbnRyeS5vdXRwdXR9JHtlbnRyeS5kZWxpbVN0cmluZy5zdWJzdHIoMCwgZW50cnkuY291bnQpfSR7cHJvY2Vzc2VkfWA7XG4gICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIC8vIFRoZW4sIGZvcm1hdCB0aGUgc3RyaW5nXG4gICAgICAgICAgICAgIGlmIChkZWxpbUNvdW50ID49IDIgJiYgc3RhY2tbc3RhY2tQb2ludGVyXS5jb3VudCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgLy8gU3Ryb25nXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkID0gYDxzcGFuIGNsYXNzPVwiVE1NYXJrXCI+JHtjdXJyZW50RGVsaW1pdGVyfSR7Y3VycmVudERlbGltaXRlcn08L3NwYW4+PHN0cm9uZyBjbGFzcz1cIlRNU3Ryb25nXCI+JHtwcm9jZXNzZWR9PC9zdHJvbmc+PHNwYW4gY2xhc3M9XCJUTU1hcmtcIj4ke2N1cnJlbnREZWxpbWl0ZXJ9JHtjdXJyZW50RGVsaW1pdGVyfTwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgIGRlbGltQ291bnQgLT0gMjtcbiAgICAgICAgICAgICAgICBzdGFja1tzdGFja1BvaW50ZXJdLmNvdW50IC09IDI7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRW1cbiAgICAgICAgICAgICAgICBwcm9jZXNzZWQgPSBgPHNwYW4gY2xhc3M9XCJUTU1hcmtcIj4ke2N1cnJlbnREZWxpbWl0ZXJ9PC9zcGFuPjxlbSBjbGFzcz1cIlRNRW1cIj4ke3Byb2Nlc3NlZH08L2VtPjxzcGFuIGNsYXNzPVwiVE1NYXJrXCI+JHtjdXJyZW50RGVsaW1pdGVyfTwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgIGRlbGltQ291bnQgLT0gMTtcbiAgICAgICAgICAgICAgICBzdGFja1tzdGFja1BvaW50ZXJdLmNvdW50IC09IDE7XG4gICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIC8vIElmIHRoYXQgc3RhY2sgbGV2ZWwgaXMgZW1wdHkgbm93LCBwb3AgaXRcbiAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrUG9pbnRlcl0uY291bnQgPT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBlbnRyeSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZCA9IGAke2VudHJ5Lm91dHB1dH0ke3Byb2Nlc3NlZH1gXG4gICAgICAgICAgICAgICAgc3RhY2tQb2ludGVyLS07XG4gICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBUaGlzIHN0YWNrIGxldmVsJ3MgZGVsaW1pdGVyIHR5cGUgZG9lc24ndCBtYXRjaCB0aGUgY3VycmVudCBkZWxpbWl0ZXIgdHlwZVxuICAgICAgICAgICAgICAvLyBHbyBkb3duIG9uZSBsZXZlbCBpbiB0aGUgc3RhY2tcbiAgICAgICAgICAgICAgc3RhY2tQb2ludGVyLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBzdGlsbCBkZWxpbWl0ZXJzIGxlZnQsIGFuZCB0aGUgZGVsaW1pdGVyIHJ1biBjYW4gb3BlbiwgcHVzaCBpdCBvbiB0aGUgc3RhY2tcbiAgICAgICAgaWYgKGRlbGltQ291bnQgJiYgY2FuT3Blbikge1xuICAgICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgICAgZGVsaW1pdGVyOiBjdXJyZW50RGVsaW1pdGVyLFxuICAgICAgICAgICAgZGVsaW1TdHJpbmc6IGRlbGltU3RyaW5nLFxuICAgICAgICAgICAgY291bnQ6IGRlbGltQ291bnQsXG4gICAgICAgICAgICBvdXRwdXQ6IHByb2Nlc3NlZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHByb2Nlc3NlZCA9ICcnOyAvLyBDdXJyZW50IGZvcm1hdHRlZCBvdXRwdXQgaGFzIGJlZW4gcHVzaGVkIG9uIHRoZSBzdGFjayBhbmQgd2lsbCBiZSBwcmVwZW5kZWQgd2hlbiB0aGUgc3RhY2sgZ2V0cyBwb3BwZWRcbiAgICAgICAgICBkZWxpbUNvdW50ID0gMDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gQW55IGRlbGltaXRlcnMgdGhhdCBhcmUgbGVmdCAoY2xvc2luZyB1bm1hdGNoZWQpIGFyZSBhcHBlbmRlZCB0byB0aGUgb3V0cHV0LlxuICAgICAgICBpZiAoZGVsaW1Db3VudCkge1xuICAgICAgICAgIHByb2Nlc3NlZCA9IGAke3Byb2Nlc3NlZH0ke2RlbGltU3RyaW5nLnN1YnN0cigwLGRlbGltQ291bnQpfWA7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIG9mZnNldCArPSBjYXBbMF0ubGVuZ3RoO1xuICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgZm9yIHN0cmlrZXRocm91Z2ggZGVsaW1pdGVyXG4gICAgICBjYXAgPSAvXn5+Ly5leGVjKHN0cmluZyk7XG4gICAgICBpZiAoY2FwKSB7XG4gICAgICAgIGxldCBjb25zdW1lZCA9IGZhbHNlO1xuICAgICAgICBsZXQgc3RhY2tQb2ludGVyID0gc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgLy8gU2VlIGlmIHdlIGNhbiBmaW5kIGEgbWF0Y2hpbmcgb3BlbmluZyBkZWxpbWl0ZXIsIG1vdmUgZG93biB0aHJvdWdoIHRoZSBzdGFja1xuICAgICAgICB3aGlsZSAoIWNvbnN1bWVkICYmIHN0YWNrUG9pbnRlciA+PSAwKSB7XG4gICAgICAgICAgaWYgKHN0YWNrW3N0YWNrUG9pbnRlcl0uZGVsaW1pdGVyID09ICd+Jykge1xuICAgICAgICAgICAgLy8gV2UgZm91bmQgYSBtYXRjaGluZyBkZWxpbWl0ZXIsIGxldCdzIGNvbnN0cnVjdCB0aGUgZm9ybWF0dGVkIHN0cmluZ1xuXG4gICAgICAgICAgICAvLyBGaXJzdGx5LCBpZiB3ZSBza2lwcGVkIGFueSBzdGFjayBsZXZlbHMsIHBvcCB0aGVtIGltbWVkaWF0ZWx5IChub24tbWF0Y2hpbmcgZGVsaW1pdGVycylcbiAgICAgICAgICAgIHdoaWxlIChzdGFja1BvaW50ZXIgPCBzdGFjay5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgIHByb2Nlc3NlZCA9IGAke2VudHJ5Lm91dHB1dH0ke2VudHJ5LmRlbGltU3RyaW5nLnN1YnN0cigwLCBlbnRyeS5jb3VudCl9JHtwcm9jZXNzZWR9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGhlbiwgZm9ybWF0IHRoZSBzdHJpbmdcbiAgICAgICAgICAgIHByb2Nlc3NlZCA9IGA8c3BhbiBjbGFzcz1cIlRNTWFya1wiPn5+PC9zcGFuPjxkZWwgY2xhc3M9XCJUTVN0cmlrZXRocm91Z2hcIj4ke3Byb2Nlc3NlZH08L2RlbD48c3BhbiBjbGFzcz1cIlRNTWFya1wiPn5+PC9zcGFuPmA7XG4gICAgICAgICAgICBsZXQgZW50cnkgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZCA9IGAke2VudHJ5Lm91dHB1dH0ke3Byb2Nlc3NlZH1gXG4gICAgICAgICAgICBjb25zdW1lZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc3RhY2sgbGV2ZWwncyBkZWxpbWl0ZXIgdHlwZSBkb2Vzbid0IG1hdGNoIHRoZSBjdXJyZW50IGRlbGltaXRlciB0eXBlXG4gICAgICAgICAgICAvLyBHbyBkb3duIG9uZSBsZXZlbCBpbiB0aGUgc3RhY2tcbiAgICAgICAgICAgIHN0YWNrUG9pbnRlci0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIHN0aWxsIGRlbGltaXRlcnMgbGVmdCwgYW5kIHRoZSBkZWxpbWl0ZXIgcnVuIGNhbiBvcGVuLCBwdXNoIGl0IG9uIHRoZSBzdGFja1xuICAgICAgICBpZiAoIWNvbnN1bWVkKSB7XG4gICAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgICBkZWxpbWl0ZXI6ICd+JyxcbiAgICAgICAgICAgIGRlbGltU3RyaW5nOiAnfn4nLFxuICAgICAgICAgICAgY291bnQ6IDIsXG4gICAgICAgICAgICBvdXRwdXQ6IHByb2Nlc3NlZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHByb2Nlc3NlZCA9ICcnOyAvLyBDdXJyZW50IGZvcm1hdHRlZCBvdXRwdXQgaGFzIGJlZW4gcHVzaGVkIG9uIHRoZSBzdGFjayBhbmQgd2lsbCBiZSBwcmVwZW5kZWQgd2hlbiB0aGUgc3RhY2sgZ2V0cyBwb3BwZWRcbiAgICAgICAgfVxuXG4gICAgICAgIG9mZnNldCArPSBjYXBbMF0ubGVuZ3RoO1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc3Vic3RyKGNhcFswXS5sZW5ndGgpOyBcbiAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICB9XG4gICAgICBcbiAgXG4gICAgICAvLyBQcm9jZXNzICdkZWZhdWx0JyBydWxlXG4gICAgICBjYXAgPSBpbmxpbmVHcmFtbWFyLmRlZmF1bHQucmVnZXhwLmV4ZWMoc3RyaW5nKTtcbiAgICAgIGlmIChjYXApIHtcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nLnN1YnN0cihjYXBbMF0ubGVuZ3RoKTtcbiAgICAgICAgb2Zmc2V0ICs9IGNhcFswXS5sZW5ndGg7XG4gICAgICAgIHByb2Nlc3NlZCArPSBpbmxpbmVHcmFtbWFyLmRlZmF1bHQucmVwbGFjZW1lbnRcbiAgICAgICAgICAucmVwbGFjZSgvXFwkKFsxLTldKS9nLCAoc3RyLCBwMSkgPT4gaHRtbGVzY2FwZShjYXBbcDFdKSk7XG4gICAgICAgIGNvbnRpbnVlIG91dGVyOyBcbiAgICAgIH1cbiAgICAgIHRocm93ICdJbmZpbml0ZSBsb29wISc7XG4gICAgfVxuICBcbiAgICAvLyBFbXB0eSB0aGUgc3RhY2ssIGFueSBvcGVuaW5nIGRlbGltaXRlcnMgYXJlIHVudXNlZFxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGVudHJ5ID0gc3RhY2sucG9wKCk7XG4gICAgICBwcm9jZXNzZWQgPSBgJHtlbnRyeS5vdXRwdXR9JHtlbnRyeS5kZWxpbVN0cmluZy5zdWJzdHIoMCwgZW50cnkuY291bnQpfSR7cHJvY2Vzc2VkfWA7XG4gICAgfVxuICBcbiAgICByZXR1cm4gcHJvY2Vzc2VkO1xuICB9XG5cbiAgLyoqIFxuICAgKiBDbGVhcnMgdGhlIGxpbmUgZGlydHkgZmxhZyAocmVzZXRzIGl0IHRvIGFuIGFycmF5IG9mIGZhbHNlKVxuICAgKi9cbiAgY2xlYXJEaXJ0eUZsYWcoKSB7XG4gICAgdGhpcy5saW5lRGlydHkgPSBuZXcgQXJyYXkodGhpcy5saW5lcy5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saW5lRGlydHkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMubGluZURpcnR5W2ldID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGNsYXNzIHByb3BlcnRpZXMgKGxpbmVzLCBsaW5lRWxlbWVudHMpIGZyb20gdGhlIERPTS5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiBjb250ZW50cyBjaGFuZ2VkXG4gICAqL1xuICB1cGRhdGVMaW5lQ29udGVudHMoKSB7XG4gICAgLy8gdGhpcy5saW5lRGlydHkgPSBbXTsgXG4gICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBjaGFuZ2VkIGFueXRoaW5nIGFib3V0IHRoZSBudW1iZXIgb2YgbGluZXMgKGluc2VydGVkIG9yIGRlbGV0ZWQgYSBwYXJhZ3JhcGgpXG4gICAgLy8gPCAwIG1lYW5zIGxpbmUocykgcmVtb3ZlZDsgPiAwIG1lYW5zIGxpbmUocykgYWRkZWRcbiAgICBsZXQgbGluZURlbHRhID0gdGhpcy5lLmNoaWxkRWxlbWVudENvdW50IC0gdGhpcy5saW5lcy5sZW5ndGg7XG4gICAgaWYgKGxpbmVEZWx0YSkge1xuICAgICAgLy8geXVwLiBMZXQncyB0cnkgaG93IG11Y2ggd2UgY2FuIHNhbHZhZ2UgKGZpbmQgb3V0IHdoaWNoIGxpbmVzIGZyb20gYmVnaW5uaW5nIGFuZCBlbmQgd2VyZSB1bmNoYW5nZWQpXG4gICAgICAvLyBGaW5kIGxpbmVzIGZyb20gdGhlIGJlZ2lubmluZyB0aGF0IGhhdmVuJ3QgY2hhbmdlZC4uLlxuICAgICAgbGV0IGZpcnN0Q2hhbmdlZExpbmUgPSAwO1xuICAgICAgd2hpbGUgKFxuICAgICAgICAgIGZpcnN0Q2hhbmdlZExpbmUgPD0gdGhpcy5saW5lcy5sZW5ndGggXG4gICAgICAgICAgJiYgZmlyc3RDaGFuZ2VkTGluZSA8PSB0aGlzLmxpbmVFbGVtZW50cy5sZW5ndGhcbiAgICAgICAgICAmJiB0aGlzLmxpbmVFbGVtZW50c1tmaXJzdENoYW5nZWRMaW5lXSAvLyBDaGVjayB0aGF0IHRoZSBsaW5lIGVsZW1lbnQgaGFzbid0IGJlZW4gZGVsZXRlZFxuICAgICAgICAgICYmIHRoaXMubGluZXNbZmlyc3RDaGFuZ2VkTGluZV0gPT0gdGhpcy5saW5lRWxlbWVudHNbZmlyc3RDaGFuZ2VkTGluZV0udGV4dENvbnRlbnRcbiAgICAgICkge1xuICAgICAgICBmaXJzdENoYW5nZWRMaW5lKys7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuZCBhbHNvIGZyb20gdGhlIGVuZFxuICAgICAgbGV0IGxhc3RDaGFuZ2VkTGluZSA9IC0xO1xuICAgICAgd2hpbGUgKFxuICAgICAgICAgIC1sYXN0Q2hhbmdlZExpbmUgPCB0aGlzLmxpbmVzLmxlbmd0aCBcbiAgICAgICAgICAmJiAtbGFzdENoYW5nZWRMaW5lIDwgdGhpcy5saW5lRWxlbWVudHMubGVuZ3RoXG4gICAgICAgICAgJiYgdGhpcy5saW5lc1t0aGlzLmxpbmVzLmxlbmd0aCArIGxhc3RDaGFuZ2VkTGluZV0gPT0gdGhpcy5saW5lRWxlbWVudHNbdGhpcy5saW5lRWxlbWVudHMubGVuZ3RoICsgbGFzdENoYW5nZWRMaW5lXS50ZXh0Q29udGVudFxuICAgICAgKSB7XG4gICAgICAgIGxhc3RDaGFuZ2VkTGluZS0tO1xuICAgICAgfVxuXG4gICAgICBsZXQgbGluZXNUb0RlbGV0ZSA9IHRoaXMubGluZXMubGVuZ3RoICsgbGFzdENoYW5nZWRMaW5lICsgMSAtIGZpcnN0Q2hhbmdlZExpbmU7XG4gICAgICBpZiAobGluZXNUb0RlbGV0ZSA8IC1saW5lRGVsdGEpIGxpbmVzVG9EZWxldGUgPSAtbGluZURlbHRhO1xuICAgICAgaWYgKGxpbmVzVG9EZWxldGUgPCAwKSBsaW5lc1RvRGVsZXRlID0gMDtcblxuICAgICAgbGV0IGxpbmVzVG9BZGQgPSBbXTtcbiAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgbGluZXNUb0RlbGV0ZSArIGxpbmVEZWx0YTsgbCsrKSB7XG4gICAgICAgIGxpbmVzVG9BZGQucHVzaCh0aGlzLmxpbmVFbGVtZW50c1tmaXJzdENoYW5nZWRMaW5lICsgbF0udGV4dENvbnRlbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5zcGxpY2VMaW5lcyhmaXJzdENoYW5nZWRMaW5lLCBsaW5lc1RvRGVsZXRlLCBsaW5lc1RvQWRkLCBmYWxzZSk7XG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gbGluZXMgYWRkZWQgb3IgcmVtb3ZlZFxuICAgICAgZm9yIChsZXQgbGluZSA9IDA7IGxpbmUgPCB0aGlzLmxpbmVFbGVtZW50cy5sZW5ndGg7IGxpbmUrKykge1xuICAgICAgICBsZXQgZSA9IHRoaXMubGluZUVsZW1lbnRzW2xpbmVdO1xuICAgICAgICBsZXQgY3QgPSBlLnRleHRDb250ZW50O1xuICAgICAgICBpZiAodGhpcy5saW5lc1tsaW5lXSAhPT0gY3QpIHtcbiAgICAgICAgICAvLyBMaW5lIGNoYW5nZWQsIHVwZGF0ZSBpdFxuICAgICAgICAgIHRoaXMubGluZXNbbGluZV0gPSBjdDtcbiAgICAgICAgICB0aGlzLmxpbmVEaXJ0eVtsaW5lXSA9IHRydWU7IFxuICAgICAgICB9IFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzZXMgYSBuZXcgcGFyYWdyYXBoLlxuICAgKiBAcGFyYW0gc2VsIFRoZSBjdXJyZW50IHNlbGVjdGlvblxuICAgKi9cbiAgcHJvY2Vzc05ld1BhcmFncmFwaChzZWwpIHtcbiAgICBpZiAoIXNlbCkgcmV0dXJuO1xuXG4gICAgLy8gVXBkYXRlIGxpbmVzIGZyb20gY29udGVudFxuICAgIHRoaXMudXBkYXRlTGluZUNvbnRlbnRzKCk7XG5cbiAgICBsZXQgY29udGludWFibGVUeXBlID0gZmFsc2U7XG4gICAgLy8gTGV0J3Mgc2VlIGlmIHdlIG5lZWQgdG8gY29udGludWUgYSBsaXN0XG5cbiAgICBsZXQgY2hlY2tMaW5lID0gc2VsLmNvbCA+IDAgPyBzZWwucm93IDogc2VsLnJvdyAtIDE7XG4gICAgc3dpdGNoICh0aGlzLmxpbmVUeXBlc1tjaGVja0xpbmVdKSB7XG4gICAgICBjYXNlICdUTVVMJzogY29udGludWFibGVUeXBlID0gJ1RNVUwnOyBicmVhaztcbiAgICAgIGNhc2UgJ1RNT0wnOiBjb250aW51YWJsZVR5cGUgPSAnVE1PTCc7IGJyZWFrO1xuICAgICAgY2FzZSAnVE1JbmRlbnRlZENvZGUnOiBjb250aW51YWJsZVR5cGUgPSAnVE1JbmRlbnRlZENvZGUnOyBicmVhaztcbiAgICB9XG5cbiAgICBsZXQgbGluZXMgPSB0aGlzLmxpbmVzW3NlbC5yb3ddLnJlcGxhY2UoL1xcblxcbiQvLCAnXFxuJykuc3BsaXQoLyg/OlxcclxcbnxcXG58XFxyKS8pO1xuICAgIGlmIChsaW5lcy5sZW5ndGggPT0gMSkge1xuICAgICAgLy8gTm8gbmV3IGxpbmVcbiAgICAgIHRoaXMudXBkYXRlRm9ybWF0dGluZygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNwbGljZUxpbmVzKHNlbC5yb3csIDEsIGxpbmVzLCB0cnVlKTtcbiAgICBzZWwucm93Kys7XG4gICAgc2VsLmNvbCA9IDA7XG5cbiAgICBpZiAoY29udGludWFibGVUeXBlKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgcHJldmlvdXMgbGluZSB3YXMgbm9uLWVtcHR5XG4gICAgICBsZXQgY2FwdHVyZSA9IGxpbmVHcmFtbWFyW2NvbnRpbnVhYmxlVHlwZV0ucmVnZXhwLmV4ZWModGhpcy5saW5lc1tzZWwucm93IC0gMV0pO1xuICAgICAgaWYgKGNhcHR1cmUpIHtcbiAgICAgICAgLy8gQ29udmVudGlvbjogY2FwdHVyZVsxXSBpcyB0aGUgbGluZSB0eXBlIG1hcmtlciwgY2FwdHVyZVsyXSBpcyB0aGUgY29udGVudFxuICAgICAgICBpZiAoY2FwdHVyZVsyXSkge1xuICAgICAgICAgIC8vIFByZXZpb3VzIGxpbmUgaGFzIGNvbnRlbnQsIGNvbnRpbnVlIHRoZSBjb250aW51YWJsZSB0eXBlXG5cbiAgICAgICAgICAvLyBIYWNrIGZvciBPTDogaW5jcmVtZW50IG51bWJlclxuICAgICAgICAgIGlmIChjb250aW51YWJsZVR5cGUgPT0gJ1RNT0wnKSB7XG4gICAgICAgICAgICBjYXB0dXJlWzFdID0gY2FwdHVyZVsxXS5yZXBsYWNlKC9cXGR7MSw5fS8sIChyZXN1bHQpID0+IHsgcmV0dXJuIHBhcnNlSW50KHJlc3VsdFswXSkgKyAxfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubGluZXNbc2VsLnJvd10gPSBgJHtjYXB0dXJlWzFdfSR7dGhpcy5saW5lc1tzZWwucm93XX1gO1xuICAgICAgICAgIHRoaXMubGluZURpcnR5W3NlbC5yb3ddID0gdHJ1ZTtcbiAgICAgICAgICBzZWwuY29sID0gY2FwdHVyZVsxXS5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUHJldmlvdXMgbGluZSBoYXMgbm8gY29udGVudCwgcmVtb3ZlIHRoZSBjb250aW51YWJsZSB0eXBlIGZyb20gdGhlIHByZXZpb3VzIHJvd1xuICAgICAgICAgIHRoaXMubGluZXNbc2VsLnJvdyAtIDFdID0gJyc7XG4gICAgICAgICAgdGhpcy5saW5lRGlydHlbc2VsLnJvdyAtIDFdID0gdHJ1ZTtcbiAgICAgICAgfSAgICAgXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlRm9ybWF0dGluZygpO1xuICB9XG5cbiAgLy8gLyoqXG4gIC8vICAqIFByb2Nlc3NlcyBhIFwiZGVsZXRlXCIgaW5wdXQgYWN0aW9uLlxuICAvLyAgKiBAcGFyYW0ge29iamVjdH0gZm9jdXMgVGhlIHNlbGVjdGlvblxuICAvLyAgKiBAcGFyYW0ge2Jvb2xlYW59IGZvcndhcmQgSWYgdHJ1ZSwgcGVyZm9ybXMgYSBmb3J3YXJkIGRlbGV0ZSwgb3RoZXJ3aXNlIHBlcmZvcm1zIGEgYmFja3dhcmQgZGVsZXRlXG4gIC8vICAqL1xuICAvLyBwcm9jZXNzRGVsZXRlKGZvY3VzLCBmb3J3YXJkKSB7XG4gIC8vICAgaWYgKCFmb2N1cykgcmV0dXJuO1xuICAvLyAgIGxldCBhbmNob3IgPSB0aGlzLmdldFNlbGVjdGlvbih0cnVlKTtcbiAgLy8gICAvLyBEbyB3ZSBoYXZlIGEgbm9uLWVtcHR5IHNlbGVjdGlvbj8gXG4gIC8vICAgaWYgKGZvY3VzLmNvbCAhPSBhbmNob3IuY29sIHx8IGZvY3VzLnJvdyAhPSBhbmNob3Iucm93KSB7XG4gIC8vICAgICAvLyBub24tZW1wdHkuIGRpcmVjdGlvbiBkb2Vzbid0IG1hdHRlci5cbiAgLy8gICAgIHRoaXMucGFzdGUoJycsIGFuY2hvciwgZm9jdXMpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBpZiAoZm9yd2FyZCkge1xuICAvLyAgICAgICBpZiAoZm9jdXMuY29sIDwgdGhpcy5saW5lc1tmb2N1cy5yb3ddLmxlbmd0aCkgdGhpcy5wYXN0ZSgnJywge3JvdzogZm9jdXMucm93LCBjb2w6IGZvY3VzLmNvbCArIDF9LCBmb2N1cyk7XG4gIC8vICAgICAgIGVsc2UgaWYgKGZvY3VzLmNvbCA8IHRoaXMubGluZXMubGVuZ3RoKSB0aGlzLnBhc3RlKCcnLCB7cm93OiBmb2N1cy5yb3cgKyAxLCBjb2w6IDB9LCBmb2N1cyk7XG4gIC8vICAgICAgIC8vIE90aGVyd2lzZSwgd2UncmUgYXQgdGhlIHZlcnkgZW5kIGFuZCBjYW4ndCBkZWxldGUgZm9yd2FyZFxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgaWYgKGZvY3VzLmNvbCA+IDApIHRoaXMucGFzdGUoJycsIHtyb3c6IGZvY3VzLnJvdywgY29sOiBmb2N1cy5jb2wgLSAxfSwgZm9jdXMpO1xuICAvLyAgICAgICBlbHNlIGlmIChmb2N1cy5yb3cgPiAwKSB0aGlzLnBhc3RlKCcnLCB7cm93OiBmb2N1cy5yb3cgLSAxLCBjb2w6IHRoaXMubGluZXNbZm9jdXMucm93IC0gMV0ubGVuZ3RoIC0gMX0sIGZvY3VzKTtcbiAgLy8gICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSdyZSBhdCB0aGUgdmVyeSBiZWdpbm5pbmcgYW5kIGNhbid0IGRlbGV0ZSBiYWNrd2FyZHNcbiAgLy8gICAgIH1cbiAgLy8gICB9XG5cbiAgLy8gfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBzZWxlY3Rpb24gY291bnRlZCBieSByb3cgYW5kIGNvbHVtbiBvZiB0aGUgZWRpdG9yIE1hcmtkb3duIGNvbnRlbnQgKGFzIG9wcG9zZWQgdG8gdGhlIHBvc2l0aW9uIGluIHRoZSBET00pLlxuICAgKiBcbiAgICogQHBhcmFtIHtib29sZWFufSBnZXRBbmNob3IgaWYgc2V0IHRvIHRydWUsIGdldHMgdGhlIHNlbGVjdGlvbiBhbmNob3IgKHN0YXJ0IHBvaW50IG9mIHRoZSBzZWxlY3Rpb24pLCBvdGhlcndpc2UgZ2V0cyB0aGUgZm9jdXMgKGVuZCBwb2ludCkuXG4gICAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgc2VsZWN0aW9uLCB3aXRoIHByb3BlcnRpZXMgY29sIGFuZCByb3cuXG4gICAqL1xuICBnZXRTZWxlY3Rpb24oZ2V0QW5jaG9yID0gZmFsc2UpIHtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgbGV0IHN0YXJ0Tm9kZSA9IChnZXRBbmNob3IgPyBzZWxlY3Rpb24uYW5jaG9yTm9kZSA6IHNlbGVjdGlvbi5mb2N1c05vZGUpO1xuICAgIGlmICghc3RhcnROb2RlKSByZXR1cm4gbnVsbDtcbiAgICBsZXQgb2Zmc2V0ID0gc3RhcnROb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSA/IChnZXRBbmNob3IgPyBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0IDogc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KSA6IDA7XG4gIFxuICAgIGlmIChzdGFydE5vZGUgPT0gdGhpcy5lKSB7XG4gICAgICByZXR1cm4ge3JvdzogMCwgY29sOiBvZmZzZXR9O1xuICAgIH1cblxuICAgIGxldCBjb2wgPSB0aGlzLmNvbXB1dGVDb2x1bW4oc3RhcnROb2RlLCBvZmZzZXQpOyAgICBcbiAgICBpZiAoY29sID09PSBudWxsKSByZXR1cm4gbnVsbDsgLy8gV2UgYXJlIG91dHNpZGUgb2YgdGhlIGVkaXRvclxuXG4gICAgLy8gRmluZCB0aGUgcm93IG5vZGVcbiAgICBsZXQgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICB3aGlsZSAobm9kZS5wYXJlbnRFbGVtZW50ICE9IHRoaXMuZSkge1xuICAgICAgbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBsZXQgcm93ID0gMDtcbiAgICAvLyBDaGVjayBpZiB3ZSBjYW4gcmVhZCBhIGxpbmUgbnVtYmVyIGZyb20gdGhlIGRhdGEtbGluZS1udW0gYXR0cmlidXRlLlxuICAgIC8vIFRoZSBsYXN0IGNvbmRpdGlvbiBpcyBhIHNlY3VyaXR5IG1lYXN1cmUgc2luY2UgaW5zZXJ0aW5nIGEgbmV3IHBhcmFncmFwaCBjb3BpZXMgdGhlIHByZXZpb3VzIHJvd3MnIGxpbmUgbnVtYmVyXG4gICAgaWYgKG5vZGUuZGF0YXNldCAmJiBub2RlLmRhdGFzZXQubGluZU51bSAmJiAoIW5vZGUucHJldmlvdXNTaWJsaW5nIHx8IG5vZGUucHJldmlvdXNTaWJsaW5nLmRhdGFzZXQubGluZU51bSAhPSBub2RlLmRhdGFzZXQubGluZU51bSApKSB7XG4gICAgICByb3cgPSBwYXJzZUludChub2RlLmRhdGFzZXQubGluZU51bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChub2RlLnByZXZpb3VzU2libGluZykge1xuICAgICAgICByb3crKztcbiAgICAgICAgbm9kZSA9IG5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge3Jvdzogcm93LCBjb2w6IGNvbCwgbm9kZTogc3RhcnROb2RlfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyBhIGNvbHVtbiB3aXRoaW4gYW4gZWRpdG9yIGxpbmUgZnJvbSBhIG5vZGUgYW5kIG9mZnNldCB3aXRoaW4gdGhhdCBub2RlLlxuICAgKiBAcGFyYW0ge05vZGV9IHN0YXJ0Tm9kZSBUaGUgbm9kZVxuICAgKiBAcGFyYW0ge2ludH0gb2Zmc2V0IFRIZSBzZWxlY3Rpb25cbiAgICogQHJldHVybnMge2ludH0gdGhlIGNvbHVtbiwgb3IgbnVsbCBpZiB0aGUgbm9kZSBpcyBub3QgaW5zaWRlIHRoZSBlZGl0b3JcbiAgICovXG4gIGNvbXB1dGVDb2x1bW4oc3RhcnROb2RlLCBvZmZzZXQpIHtcbiAgICBsZXQgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICBsZXQgY29sID0gb2Zmc2V0O1xuICAgIC8vIEZpcnN0LCBtYWtlIHN1cmUgd2UncmUgYWN0dWFsbHkgaW4gdGhlIGVkaXRvci5cbiAgICB3aGlsZSAobm9kZSAmJiBub2RlLnBhcmVudE5vZGUgIT0gdGhpcy5lKSB7XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBcbiAgICBub2RlID0gc3RhcnROb2RlO1xuICAgIHdoaWxlIChub2RlLnBhcmVudE5vZGUgIT0gdGhpcy5lKSB7XG4gICAgICBpZiAobm9kZS5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICBjb2wgKz0gbm9kZS50ZXh0Q29udGVudC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29sO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIERPTSBub2RlIGFuZCBvZmZzZXQgd2l0aGluIHRoYXQgbm9kZSBmcm9tIGEgcG9zaXRpb24gZXhwcmVzc2VkIGFzIHJvdyBhbmQgY29sdW1uLlxuICAgKiBAcGFyYW0ge2ludH0gcm93IFJvdyAobGluZSBudW1iZXIpXG4gICAqIEBwYXJhbSB7aW50fSBjb2wgQ29sdW1uXG4gICAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzOiBub2RlIGFuZCBvZmZzZXQuIG9mZnNldCBtYXkgYmUgbnVsbDtcbiAgICovXG4gIGNvbXB1dGVOb2RlQW5kT2Zmc2V0KHJvdywgY29sLCBiaW5kUmlnaHQgPSBmYWxzZSkge1xuICAgIGlmIChyb3cgPj0gdGhpcy5saW5lRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBTZWxlY3Rpb24gcGFzdCB0aGUgZW5kIG9mIHRleHQsIHNldCBzZWxlY3Rpb24gdG8gZW5kIG9mIHRleHRcbiAgICAgIHJvdyA9IHRoaXMubGluZUVsZW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICBjb2wgPSB0aGlzLmxpbmVzW3Jvd10ubGVuZ3RoO1xuICAgIH0gXG4gICAgaWYgKGNvbCA+IHRoaXMubGluZXNbcm93XS5sZW5ndGgpIHtcbiAgICAgIGNvbCA9IHRoaXMubGluZXNbcm93XS5sZW5ndGg7XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLmxpbmVFbGVtZW50c1tyb3ddO1xuICAgIGxldCBub2RlID0gcGFyZW50Tm9kZS5maXJzdENoaWxkO1xuXG4gICAgbGV0IGNoaWxkcmVuQ29tcGxldGUgPSBmYWxzZTtcbiAgICAvLyBkZWZhdWx0IHJldHVybiB2YWx1ZVxuICAgIGxldCBydiA9IHtub2RlOiBwYXJlbnROb2RlLmZpcnN0Q2hpbGQgPyBwYXJlbnROb2RlLmZpcnN0Q2hpbGQgOiBwYXJlbnROb2RlLCBvZmZzZXQ6IDB9O1xuXG4gICAgd2hpbGUgKG5vZGUgIT0gcGFyZW50Tm9kZSkge1xuICAgICAgaWYgKCFjaGlsZHJlbkNvbXBsZXRlICYmIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVWYWx1ZS5sZW5ndGggPj0gY29sKSB7XG4gICAgICAgICAgaWYgKGJpbmRSaWdodCAmJiBub2RlLm5vZGVWYWx1ZS5sZW5ndGggPT0gY29sKSB7XG4gICAgICAgICAgICAvLyBTZWxlY3Rpb24gaXMgYXQgdGhlIGVuZCBvZiB0aGlzIHRleHQgbm9kZSwgYnV0IHdlIGFyZSBiaW5kaW5nIHJpZ2h0IChwcmVmZXIgYW4gb2Zmc2V0IG9mIDAgaW4gdGhlIG5leHQgdGV4dCBub2RlKVxuICAgICAgICAgICAgLy8gUmVtZW1iZXIgcmV0dXJuIHZhbHVlIGluIGNhc2Ugd2UgZG9uJ3QgZmluZCBhbm90aGVyIHRleHQgbm9kZVxuICAgICAgICAgICAgcnYgPSB7bm9kZTogbm9kZSwgb2Zmc2V0OiBjb2x9O1xuICAgICAgICAgICAgY29sID0gMDtcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4oe25vZGU6IG5vZGUsIG9mZnNldDogY29sfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbCAtPSBub2RlLm5vZGVWYWx1ZS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH0gXG4gICAgICBpZiAoIWNoaWxkcmVuQ29tcGxldGUgJiYgbm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgIG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICB9IGVsc2UgaWYgKG5vZGUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgY2hpbGRyZW5Db21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkcmVuQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVpdGhlciwgdGhlIHBvc2l0aW9uIHdhcyBpbnZhbGlkIGFuZCB3ZSBqdXN0IHJldHVybiB0aGUgZGVmYXVsdCByZXR1cm4gdmFsdWVcbiAgICAvLyBPciB3ZSBhcmUgYmluZGluZyByaWdodCBhbmQgdGhlIHNlbGVjdGlvbiBpcyBhdCB0aGUgZW5kIG9mIHRoZSBsaW5lXG4gICAgcmV0dXJuIHJ2O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNlbGVjdGlvbiBiYXNlZCBvbiByb3dzIGFuZCBjb2x1bW5zIHdpdGhpbiB0aGUgZWRpdG9yIE1hcmtkb3duIGNvbnRlbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBmb2N1cyBPYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzZWxlY3Rpb24sIG5lZWRzIHRvIGhhdmUgcHJvcGVydGllcyByb3cgYW5kIGNvbC5cbiAgICogQHBhcmFtIGFuY2hvciBBbmNob3Igb2YgdGhlIHNlbGVjdGlvbi4gSWYgbm90IGdpdmVuLCBhc3N1bWVzIHRoZSBjdXJyZW50IGFuY2hvci5cbiAgICovXG4gIHNldFNlbGVjdGlvbihmb2N1cywgYW5jaG9yID0gbnVsbCkge1xuICAgIGlmICghZm9jdXMpIHJldHVybjtcblxuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5cbiAgICBsZXQge25vZGU6IGZvY3VzTm9kZSwgb2Zmc2V0OiBmb2N1c09mZnNldH0gPSB0aGlzLmNvbXB1dGVOb2RlQW5kT2Zmc2V0KGZvY3VzLnJvdywgZm9jdXMuY29sLCAoYW5jaG9yICYmIGFuY2hvci5yb3cgPT0gZm9jdXMucm93ICYmIGFuY2hvci5jb2wgPiBmb2N1cy5jb2wpKTsgLy8gQmluZCBzZWxlY3Rpb24gcmlnaHQgaWYgYW5jaG9yIGlzIGluIHRoZSBzYW1lIHJvdyBhbmQgYmVoaW5kIHRoZSBmb2N1c1xuICAgIGxldCBhbmNob3JOb2RlID0gbnVsbCwgYW5jaG9yT2Zmc2V0ID0gbnVsbDtcbiAgICBpZiAoYW5jaG9yICYmIChhbmNob3Iucm93ICE9IGZvY3VzLnJvdyB8fCBhbmNob3IuY29sICE9IGZvY3VzLmNvbCkpIHtcbiAgICAgIGxldCB7bm9kZSwgb2Zmc2V0fSA9IHRoaXMuY29tcHV0ZU5vZGVBbmRPZmZzZXQoYW5jaG9yLnJvdywgYW5jaG9yLmNvbCwgZm9jdXMucm93ID09IGFuY2hvci5yb3cgJiYgZm9jdXMuY29sID4gYW5jaG9yLmNvbCk7XG4gICAgICBhbmNob3JOb2RlID0gbm9kZTtcbiAgICAgIGFuY2hvck9mZnNldCA9IG9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAoYW5jaG9yTm9kZSkgcmFuZ2Uuc2V0U3RhcnQoYW5jaG9yTm9kZSwgYW5jaG9yT2Zmc2V0KTtcbiAgICBlbHNlIHJhbmdlLnNldFN0YXJ0KGZvY3VzTm9kZSwgZm9jdXNPZmZzZXQpO1xuICAgIHJhbmdlLnNldEVuZChmb2N1c05vZGUsIGZvY3VzT2Zmc2V0KTtcbiAgICBcbiAgICBsZXQgd2luZG93U2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgIHdpbmRvd1NlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICB3aW5kb3dTZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICB9XG5cbiAgLyoqIFxuICAgKiBFdmVudCBoYW5kbGVyIGZvciBpbnB1dCBldmVudHMgXG4gICAqL1xuICBoYW5kbGVJbnB1dEV2ZW50KGV2ZW50KSB7XG4gICAgbGV0IGZvY3VzID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcblxuICAgIGlmICgoZXZlbnQuaW5wdXRUeXBlID09ICdpbnNlcnRQYXJhZ3JhcGgnIHx8IGV2ZW50LmlucHV0VHlwZSA9PSAnaW5zZXJ0TGluZUJyZWFrJykgJiYgZm9jdXMpIHtcbiAgICAgIHRoaXMuY2xlYXJEaXJ0eUZsYWcoKTtcbiAgICAgIHRoaXMucHJvY2Vzc05ld1BhcmFncmFwaChmb2N1cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5lLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiVE1CbGFua0xpbmVcIj48YnI+PC9kaXY+JztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBjaGlsZE5vZGUgPSB0aGlzLmUuZmlyc3RDaGlsZDsgY2hpbGROb2RlOyBjaGlsZE5vZGUgPSBjaGlsZE5vZGUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlICE9IDMgfHwgY2hpbGROb2RlLnRhZ05hbWUgIT0gJ0RJVicpIHtcbiAgICAgICAgICAgIC8vIEZvdW5kIGEgY2hpbGQgbm9kZSB0aGF0J3MgZWl0aGVyIG5vdCBhbiBlbGVtZW50IG9yIG5vdCBhIGRpdi4gV3JhcCBpdCBpbiBhIGRpdi5cbiAgICAgICAgICAgIGxldCBkaXZXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aGlzLmUuaW5zZXJ0QmVmb3JlKGRpdldyYXBwZXIsIGNoaWxkTm9kZSk7XG4gICAgICAgICAgICB0aGlzLmUucmVtb3ZlQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgICAgIGRpdldyYXBwZXIuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlTGluZUNvbnRlbnRzQW5kRm9ybWF0dGluZygpOyAgXG4gICAgfVxuICAgIGlmIChmb2N1cykgdGhpcy5zZXRTZWxlY3Rpb24oZm9jdXMpO1xuICAgIHRoaXMuZmlyZUNoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIFwic2VsZWN0aW9uY2hhbmdlXCIgZXZlbnRzLlxuICAgKi9cbiAgaGFuZGxlU2VsZWN0aW9uQ2hhbmdlRXZlbnQoKSB7XG4gICAgdGhpcy5maXJlU2VsZWN0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gXCJzcGxpY2VcIiBuZXcgbGluZXMgaW50byB0aGUgYXJyYXlzIHRoaXMubGluZXMsIHRoaXMubGluZURpcnR5LCB0aGlzLmxpbmVUeXBlcywgYW5kIHRoZSBET00gZWxlbWVudHMgXG4gICAqIHVuZGVybmVhdGggdGhlIGVkaXRvciBlbGVtZW50LlxuICAgKiBUaGlzIG1ldGhvZCBpcyBlc3NlbnRpYWxseSBBcnJheS5zcGxpY2UsIG9ubHkgdGhhdCB0aGUgdGhpcmQgcGFyYW1ldGVyIHRha2VzIGFuIHVuLXNwcmVhZCBhcnJheSAoYW5kIHRoZSBmb3J0aCBwYXJhbWV0ZXIpXG4gICAqIGRldGVybWluZXMgd2hldGhlciB0aGUgRE9NIHNob3VsZCBhbHNvIGJlIGFkanVzdGVkLlxuICAgKiBcbiAgICogQHBhcmFtIHtpbnR9IHN0YXJ0TGluZSBQb3NpdGlvbiBhdCB3aGljaCB0byBzdGFydCBjaGFuZ2luZyB0aGUgYXJyYXkgb2YgbGluZXNcbiAgICogQHBhcmFtIHtpbnR9IGxpbmVzVG9EZWxldGUgTnVtYmVyIG9mIGxpbmVzIHRvIGRlbGV0ZVxuICAgKiBAcGFyYW0ge2FycmF5fSBsaW5lc1RvSW5zZXJ0IEFycmF5IG9mIHN0cmluZ3MgcmVwcmVzZW50aW5nIHRoZSBsaW5lcyB0byBiZSBpbnNlcnRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGFkanVzdExpbmVFbGVtZW50cyBJZiB0cnVlLCB0aGVuIDxkaXY+IGVsZW1lbnRzIGFyZSBhbHNvIGluc2VydGVkIGluIHRoZSBET00gYXQgdGhlIHJlc3BlY3RpdmUgcG9zaXRpb25cbiAgICovXG4gIHNwbGljZUxpbmVzKHN0YXJ0TGluZSwgbGluZXNUb0RlbGV0ZSA9IDAsIGxpbmVzVG9JbnNlcnQgPSBbXSwgYWRqdXN0TGluZUVsZW1lbnRzID0gdHJ1ZSkge1xuICAgIGlmIChhZGp1c3RMaW5lRWxlbWVudHMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNUb0RlbGV0ZTsgaSsrKSB7XG4gICAgICAgIHRoaXMuZS5yZW1vdmVDaGlsZCh0aGlzLmUuY2hpbGROb2Rlc1tzdGFydExpbmVdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbGV0IGluc2VydGVkQmxhbmsgPSBbXTtcbiAgICBsZXQgaW5zZXJ0ZWREaXJ0eSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1RvSW5zZXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnNlcnRlZEJsYW5rLnB1c2goJycpO1xuICAgICAgaW5zZXJ0ZWREaXJ0eS5wdXNoKHRydWUpO1xuICAgICAgaWYgKGFkanVzdExpbmVFbGVtZW50cykge1xuICAgICAgICBpZiAodGhpcy5lLmNoaWxkTm9kZXNbc3RhcnRMaW5lXSkgdGhpcy5lLmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSx0aGlzLmUuY2hpbGROb2Rlc1tzdGFydExpbmVdKTtcbiAgICAgICAgZWxzZSB0aGlzLmUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubGluZXMuc3BsaWNlKHN0YXJ0TGluZSwgbGluZXNUb0RlbGV0ZSwgLi4ubGluZXNUb0luc2VydCk7XG4gICAgdGhpcy5saW5lVHlwZXMuc3BsaWNlKHN0YXJ0TGluZSwgbGluZXNUb0RlbGV0ZSwgLi4uaW5zZXJ0ZWRCbGFuayk7XG4gICAgdGhpcy5saW5lRGlydHkuc3BsaWNlKHN0YXJ0TGluZSwgbGluZXNUb0RlbGV0ZSwgLi4uaW5zZXJ0ZWREaXJ0eSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgdGhlIFwicGFzdGVcIiBldmVudFxuICAgKi9cbiAgaGFuZGxlUGFzdGUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgICAvLyBnZXQgdGV4dCByZXByZXNlbnRhdGlvbiBvZiBjbGlwYm9hcmRcbiAgICBsZXQgdGV4dCA9IChldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50KS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcblxuICAgIC8vIGluc2VydCB0ZXh0IG1hbnVhbGx5XG4gICAgdGhpcy5wYXN0ZSh0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXN0ZXMgdGhlIHRleHQgYXQgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIChvciBhdCB0aGUgZW5kLCBpZiBubyBjdXJyZW50IHNlbGVjdGlvbilcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgXG4gICAqL1xuICBwYXN0ZSh0ZXh0LCBhbmNob3IgPSBudWxsLCBmb2N1cyA9IG51bGwpIHtcbiAgICBpZiAoIWFuY2hvcikgYW5jaG9yID0gdGhpcy5nZXRTZWxlY3Rpb24odHJ1ZSk7XG4gICAgaWYgKCFmb2N1cykgZm9jdXMgPSB0aGlzLmdldFNlbGVjdGlvbihmYWxzZSk7XG4gICAgbGV0IGJlZ2lubmluZywgZW5kO1xuICAgIGlmICghZm9jdXMpIHtcbiAgICAgIGZvY3VzID0geyByb3c6IHRoaXMubGluZXMubGVuZ3RoIC0gMSwgY29sOiB0aGlzLmxpbmVzW3RoaXMubGluZXMubGVuZ3RoIC0gMV0ubGVuZ3RoIH07IC8vIEluc2VydCBhdCBlbmRcbiAgICB9XG4gICAgaWYgKCFhbmNob3IpIHtcbiAgICAgIGFuY2hvciA9IGZvY3VzO1xuICAgIH1cbiAgICBpZiAoYW5jaG9yLnJvdyA8IGZvY3VzLnJvdyB8fCAoYW5jaG9yLnJvdyA9PSBmb2N1cy5yb3cgJiYgYW5jaG9yLmNvbCA8PSBmb2N1cy5jb2wpKSB7XG4gICAgICBiZWdpbm5pbmcgPSBhbmNob3I7XG4gICAgICBlbmQgPSBmb2N1cztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBiZWdpbm5pbmcgPSBmb2N1cztcbiAgICAgIGVuZCA9IGFuY2hvcjtcbiAgICB9XG4gICAgbGV0IGluc2VydGVkTGluZXMgPSB0ZXh0LnNwbGl0KC8oPzpcXHJcXG58XFxyfFxcbikvKTtcbiAgICBsZXQgbGluZUJlZm9yZSA9IHRoaXMubGluZXNbYmVnaW5uaW5nLnJvd10uc3Vic3RyKDAsIGJlZ2lubmluZy5jb2wpO1xuICAgIGxldCBsaW5lRW5kID0gdGhpcy5saW5lc1tlbmQucm93XS5zdWJzdHIoZW5kLmNvbCk7XG4gICAgaW5zZXJ0ZWRMaW5lc1swXSA9IGxpbmVCZWZvcmUuY29uY2F0KGluc2VydGVkTGluZXNbMF0pO1xuICAgIGxldCBlbmRDb2xQb3MgPSBpbnNlcnRlZExpbmVzW2luc2VydGVkTGluZXMubGVuZ3RoIC0gMV0ubGVuZ3RoO1xuICAgIGluc2VydGVkTGluZXNbaW5zZXJ0ZWRMaW5lcy5sZW5ndGggLSAxXSA9IGluc2VydGVkTGluZXNbaW5zZXJ0ZWRMaW5lcy5sZW5ndGggLSAxXS5jb25jYXQobGluZUVuZCk7XG4gICAgdGhpcy5zcGxpY2VMaW5lcyhiZWdpbm5pbmcucm93LCAxICsgZW5kLnJvdyAtIGJlZ2lubmluZy5yb3csIGluc2VydGVkTGluZXMpO1xuICAgIGZvY3VzLnJvdyA9IGJlZ2lubmluZy5yb3cgKyBpbnNlcnRlZExpbmVzLmxlbmd0aCAtIDE7XG4gICAgZm9jdXMuY29sID0gZW5kQ29sUG9zO1xuICAgIHRoaXMudXBkYXRlRm9ybWF0dGluZygpO1xuICAgIHRoaXMuc2V0U2VsZWN0aW9uKGZvY3VzKTtcbiAgICB0aGlzLmZpcmVDaGFuZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgKGxvd2VzdCBpbiB0aGUgRE9NIHRyZWUpIGNvbW1vbiBhbmNlc3RvciBvZiB0d28gRE9NIG5vZGVzLlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUxIHRoZSBmaXJzdCBub2RlXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZTIgdGhlIHNlY29uZCBub2RlXG4gICAqIEByZXR1cm5zIHtOb2RlfSBUaGUgY29tbWVuIGFuY2VzdG9yIG5vZGUsIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gY29tbW9uIGFuY2VzdG9yXG4gICAqL1xuICBjb21wdXRlQ29tbW9uQW5jZXN0b3Iobm9kZTEsIG5vZGUyKSB7XG4gICAgaWYgKCFub2RlMSB8fCAhbm9kZTIpIHJldHVybiBudWxsO1xuICAgIGlmIChub2RlMSA9PSBub2RlMikgcmV0dXJuIG5vZGUxO1xuICAgIGNvbnN0IGFuY2VzdHJ5ID0gKG5vZGUpID0+IHtcbiAgICAgIGxldCBhbmNlc3RyeSA9IFtdO1xuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgYW5jZXN0cnkudW5zaGlmdChub2RlKTtcbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbmNlc3RyeTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmNlc3RyeTEgPSBhbmNlc3RyeShub2RlMSk7XG4gICAgY29uc3QgYW5jZXN0cnkyID0gYW5jZXN0cnkobm9kZTIpO1xuXG4gICAgaWYgKGFuY2VzdHJ5MVswXSAhPSBhbmNlc3RyeTJbMF0pIHJldHVybiBudWxsO1xuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGFuY2VzdHJ5MVtpXSA9PSBhbmNlc3RyeTJbaV07IGkrKyk7XG4gICAgcmV0dXJuIGFuY2VzdHJ5MVtpLTFdO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSAobG93ZXN0IGluIHRoZSBET00gdHJlZSkgZW5jbG9zaW5nIERPTSBub2RlIHdpdGggYSBnaXZlbiBjbGFzcy5cbiAgICogQHBhcmFtIHtvYmplY3R9IGZvY3VzIFRoZSBmb2N1cyBzZWxlY3Rpb24gb2JqZWN0XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBhbmNob3IgVGhlIGFuY2hvciBzZWxlY3Rpb24gb2JqZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzIG5hbWUgdG8gZmluZFxuICAgKiBAcmV0dXJucyB7Tm9kZX0gVGhlIGVuY2xvc2luZyBET00gbm9kZSB3aXRoIHRoZSByZXNwZWN0aXZlIGNsYXNzIChpbnNpZGUgdGhlIGVkaXRvciksIGlmIHRoZXJlIGlzIG9uZTsgbnVsbCBvdGhlcndpc2UuXG4gICAqL1xuICBjb21wdXRlRW5jbG9zaW5nTWFya3VwTm9kZShmb2N1cywgYW5jaG9yLCBjbGFzc05hbWUpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgaWYgKCFmb2N1cykgcmV0dXJuIG51bGw7XG4gICAgaWYgKCFhbmNob3IpIHtcbiAgICAgIG5vZGUgPSBmb2N1cy5ub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZm9jdXMucm93ICE9IGFuY2hvci5yb3cpIHJldHVybiBudWxsO1xuICAgICAgbm9kZSA9IHRoaXMuY29tcHV0ZUNvbW1vbkFuY2VzdG9yKGZvY3VzLm5vZGUsIGFuY2hvci5ub2RlKTtcbiAgICB9XG4gICAgaWYgKCFub2RlKSByZXR1cm4gbnVsbDtcbiAgICB3aGlsZSAobm9kZSAhPSB0aGlzLmUpIHtcbiAgICAgIGlmIChub2RlLmNsYXNzTmFtZSAmJiBub2RlLmNsYXNzTmFtZS5pbmNsdWRlcyhjbGFzc05hbWUpKSByZXR1cm4gbm9kZTtcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIC8vIEFzY2VuZGVkIGFsbCB0aGUgd2F5IHRvIHRoZSBlZGl0b3IgZWxlbWVudFxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN0YXRlICh0cnVlIC8gZmFsc2UpIG9mIGFsbCBjb21tYW5kcy5cbiAgICogQHBhcmFtIGZvY3VzIEZvY3VzIG9mIHRoZSBzZWxlY3Rpb24uIElmIG5vdCBnaXZlbiwgYXNzdW1lcyB0aGUgY3VycmVudCBmb2N1cy5cbiAgICogQHBhcmFtIGFuY2hvciBBbmNob3Igb2YgdGhlIHNlbGVjdGlvbi4gSWYgbm90IGdpdmVuLCBhc3N1bWVzIHRoZSBjdXJyZW50IGFuY2hvci5cbiAgICovXG4gIGdldENvbW1hbmRTdGF0ZShmb2N1cyA9IG51bGwsIGFuY2hvciA9IG51bGwpIHtcbiAgICBsZXQgY29tbWFuZFN0YXRlID0ge307XG4gICAgaWYgKCFmb2N1cykgZm9jdXMgPSB0aGlzLmdldFNlbGVjdGlvbihmYWxzZSk7XG4gICAgaWYgKCFhbmNob3IpIGFuY2hvciA9IHRoaXMuZ2V0U2VsZWN0aW9uKHRydWUpO1xuICAgIGlmICghZm9jdXMpIHtcbiAgICAgIGZvciAobGV0IGNtZCBpbiBjb21tYW5kcykge1xuICAgICAgICBjb21tYW5kU3RhdGVbY21kXSA9IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29tbWFuZFN0YXRlO1xuICAgIH1cbiAgICBpZiAoIWFuY2hvcikgYW5jaG9yID0gZm9jdXM7IFxuICAgIFxuICAgIGxldCBzdGFydCwgZW5kO1xuICAgIGlmIChhbmNob3Iucm93IDwgZm9jdXMucm93IHx8IChhbmNob3Iucm93ID09IGZvY3VzLnJvdyAmJiBhbmNob3IuY29sIDwgZm9jdXMuY29sKSkge1xuICAgICAgc3RhcnQgPSBhbmNob3I7XG4gICAgICBlbmQgPSBmb2N1cztcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnQgPSBmb2N1cztcbiAgICAgIGVuZCA9IGFuY2hvcjtcbiAgICB9XG4gICAgaWYgKGVuZC5yb3cgPiBzdGFydC5yb3cgJiYgZW5kLmNvbCA9PSAwKSB7XG4gICAgICBlbmQucm93LS07XG4gICAgICBlbmQuY29sID0gdGhpcy5saW5lc1tlbmQucm93XS5sZW5ndGg7IC8vIFNlbGVjdGlvbiB0byBiZWdpbm5pbmcgb2YgbmV4dCBsaW5lIGlzIHNhaWQgdG8gZW5kIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxhc3QgbGluZVxuICAgIH1cblxuICAgIGZvciAobGV0IGNtZCBpbiBjb21tYW5kcykge1xuICAgICAgaWYgKGNvbW1hbmRzW2NtZF0udHlwZSA9PSAnaW5saW5lJykge1xuXG4gICAgICAgIGlmICghZm9jdXMgfHwgZm9jdXMucm93ICE9IGFuY2hvci5yb3cgfHwgIXRoaXMuaXNJbmxpbmVGb3JtYXR0aW5nQWxsb3dlZChmb2N1cywgYW5jaG9yKSkge1xuICAgICAgICAgIGNvbW1hbmRTdGF0ZVtjbWRdID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUaGUgY29tbWFuZCBzdGF0ZSBpcyB0cnVlIGlmIHRoZXJlIGlzIGEgcmVzcGVjdGl2ZSBlbmNsb3NpbmcgbWFya3VwIG5vZGUgKGUuZy4sIHRoZSBzZWxlY3Rpb24gaXMgZW5jbG9zZWQgaW4gYSA8Yj4uLjwvYj4pIC4uLiBcbiAgICAgICAgICBjb21tYW5kU3RhdGVbY21kXSA9IFxuICAgICAgICAgICAgISF0aGlzLmNvbXB1dGVFbmNsb3NpbmdNYXJrdXBOb2RlKGZvY3VzLCBhbmNob3IsIGNvbW1hbmRzW2NtZF0uY2xhc3NOYW1lKSB8fFxuICAgICAgICAgIC8vIC4uLiBvciBpZiBpdCdzIGFuIGVtcHR5IHN0cmluZyBwcmVjZWRlZCBieSBhbmQgZm9sbG93ZWQgYnkgZm9ybWF0dGluZyBtYXJrZXJzLCBlLmcuICoqfCoqIHdoZXJlIHwgaXMgdGhlIGN1cnNvclxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICBmb2N1cy5jb2wgPT0gYW5jaG9yLmNvbCBcbiAgICAgICAgICAgICAgJiYgISF0aGlzLmxpbmVzW2ZvY3VzLnJvd10uc3Vic3RyKDAsIGZvY3VzLmNvbCkubWF0Y2goY29tbWFuZHNbY21kXS51bnNldC5wcmVQYXR0ZXJuKVxuICAgICAgICAgICAgICAmJiAhIXRoaXMubGluZXNbZm9jdXMucm93XS5zdWJzdHIoZm9jdXMuY29sKS5tYXRjaChjb21tYW5kc1tjbWRdLnVuc2V0LnBvc3RQYXR0ZXJuKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICAgIGlmIChjb21tYW5kc1tjbWRdLnR5cGUgPT0gJ2xpbmUnKSB7XG4gICAgICAgIGlmICghZm9jdXMpIHtcbiAgICAgICAgICBjb21tYW5kU3RhdGVbY21kXSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5saW5lVHlwZXNbc3RhcnQucm93XSA9PSBjb21tYW5kc1tjbWRdLmNsYXNzTmFtZTtcbiAgICAgICAgICBcbiAgICAgICAgICBmb3IgKGxldCBsaW5lID0gc3RhcnQucm93OyBsaW5lIDw9IGVuZC5yb3c7IGxpbmUgKyspIHtcbiAgICAgICAgICAgIGlmICgodGhpcy5saW5lVHlwZXNbbGluZV0gPT0gY29tbWFuZHNbY21kXS5jbGFzc05hbWUpICE9IHN0YXRlKSB7XG4gICAgICAgICAgICAgIHN0YXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbW1hbmRTdGF0ZVtjbWRdID0gc3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb21tYW5kU3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGNvbW1hbmQgc3RhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbW1hbmQgXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdGUgXG4gICAqL1xuICBzZXRDb21tYW5kU3RhdGUoY29tbWFuZCwgc3RhdGUpIHtcbiAgICBpZiAoY29tbWFuZHNbY29tbWFuZF0udHlwZSA9PSAnaW5saW5lJykge1xuICAgICAgbGV0IGFuY2hvciA9IHRoaXMuZ2V0U2VsZWN0aW9uKHRydWUpO1xuICAgICAgbGV0IGZvY3VzID0gdGhpcy5nZXRTZWxlY3Rpb24oZmFsc2UpO1xuICAgICAgaWYgKCFhbmNob3IpIGFuY2hvciA9IGZvY3VzO1xuICAgICAgaWYgKCFhbmNob3IpIHJldHVybjtcbiAgICAgIGlmIChhbmNob3Iucm93ICE9IGZvY3VzLnJvdykgcmV0dXJuO1xuICAgICAgaWYgKCF0aGlzLmlzSW5saW5lRm9ybWF0dGluZ0FsbG93ZWQoZm9jdXMsIGFuY2hvcikpIHJldHVybjsgXG4gICAgICBsZXQgbWFya3VwTm9kZSA9IHRoaXMuY29tcHV0ZUVuY2xvc2luZ01hcmt1cE5vZGUoZm9jdXMsIGFuY2hvciwgY29tbWFuZHNbY29tbWFuZF0uY2xhc3NOYW1lKTtcbiAgICAgIHRoaXMuY2xlYXJEaXJ0eUZsYWcoKTtcbiAgICAgIFxuICAgICAgLy8gRmlyc3QgY2FzZTogVGhlcmUncyBhbiBlbmNsb3NpbmcgbWFya3VwIG5vZGUsIHJlbW92ZSB0aGUgbWFya2VycyBhcm91bmQgdGhhdCBtYXJrdXAgbm9kZVxuICAgICAgaWYgKG1hcmt1cE5vZGUpIHtcbiAgICAgICAgdGhpcy5saW5lRGlydHlbZm9jdXMucm93XSA9IHRydWU7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gdGhpcy5jb21wdXRlQ29sdW1uKG1hcmt1cE5vZGUsIDApO1xuICAgICAgICBjb25zdCBsZW4gPSBtYXJrdXBOb2RlLnRleHRDb250ZW50Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMubGluZXNbZm9jdXMucm93XS5zdWJzdHIoMCwgc3RhcnRDb2wpLnJlcGxhY2UoY29tbWFuZHNbY29tbWFuZF0udW5zZXQucHJlUGF0dGVybiwgJycpO1xuICAgICAgICBjb25zdCBtaWQgPSB0aGlzLmxpbmVzW2ZvY3VzLnJvd10uc3Vic3RyKHN0YXJ0Q29sLCBsZW4pO1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMubGluZXNbZm9jdXMucm93XS5zdWJzdHIoc3RhcnRDb2wgKyBsZW4pLnJlcGxhY2UoY29tbWFuZHNbY29tbWFuZF0udW5zZXQucG9zdFBhdHRlcm4sICcnKTtcbiAgICAgICAgdGhpcy5saW5lc1tmb2N1cy5yb3ddID0gbGVmdC5jb25jYXQobWlkLCByaWdodCk7XG4gICAgICAgIGFuY2hvci5jb2wgPSBsZWZ0Lmxlbmd0aDtcbiAgICAgICAgZm9jdXMuY29sID0gYW5jaG9yLmNvbCArIGxlbjtcbiAgICAgICAgdGhpcy51cGRhdGVGb3JtYXR0aW5nKCk7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uKGZvY3VzLCBhbmNob3IpOyAgXG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZSgpO1xuXG4gICAgICAvLyBTZWNvbmQgY2FzZTogRW1wdHkgc2VsZWN0aW9uIHdpdGggc3Vycm91bmRpbmcgZm9ybWF0dGluZyBtYXJrZXJzLCByZW1vdmUgdGhvc2VcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGZvY3VzLmNvbCA9PSBhbmNob3IuY29sIFxuICAgICAgICAmJiAhIXRoaXMubGluZXNbZm9jdXMucm93XS5zdWJzdHIoMCwgZm9jdXMuY29sKS5tYXRjaChjb21tYW5kc1tjb21tYW5kXS51bnNldC5wcmVQYXR0ZXJuKVxuICAgICAgICAmJiAhIXRoaXMubGluZXNbZm9jdXMucm93XS5zdWJzdHIoZm9jdXMuY29sKS5tYXRjaChjb21tYW5kc1tjb21tYW5kXS51bnNldC5wb3N0UGF0dGVybilcbiAgICAgICkge1xuICAgICAgICB0aGlzLmxpbmVEaXJ0eVtmb2N1cy5yb3ddID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMubGluZXNbZm9jdXMucm93XS5zdWJzdHIoMCwgZm9jdXMuY29sKS5yZXBsYWNlKGNvbW1hbmRzW2NvbW1hbmRdLnVuc2V0LnByZVBhdHRlcm4sICcnKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmxpbmVzW2ZvY3VzLnJvd10uc3Vic3RyKGZvY3VzLmNvbCkucmVwbGFjZShjb21tYW5kc1tjb21tYW5kXS51bnNldC5wb3N0UGF0dGVybiwgJycpO1xuICAgICAgICB0aGlzLmxpbmVzW2ZvY3VzLnJvd10gPSBsZWZ0LmNvbmNhdChyaWdodCk7XG4gICAgICAgIGZvY3VzLmNvbCA9IGFuY2hvci5jb2wgPSBsZWZ0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy51cGRhdGVGb3JtYXR0aW5nKCk7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uKGZvY3VzLCBhbmNob3IpO1xuICAgICAgICB0aGlzLmZpcmVDaGFuZ2UoKTtcblxuICAgICAgLy8gTm90IGN1cnJlbnRseSBmb3JtYXR0ZWQsIGluc2VydCBmb3JtYXR0aW5nIG1hcmtlcnNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFxuICAgICAgICAvLyBUcmltIGFueSBzcGFjZXMgZnJvbSB0aGUgc2VsZWN0aW9uXG4gICAgICAgIGxldCB7c3RhcnRDb2wsIGVuZENvbH0gPSBmb2N1cy5jb2wgPCBhbmNob3IuY29sID8ge3N0YXJ0Q29sOiBmb2N1cy5jb2wsIGVuZENvbDogYW5jaG9yLmNvbH0gOiB7c3RhcnRDb2w6IGFuY2hvci5jb2wsIGVuZENvbDogZm9jdXMuY29sfTtcblxuICAgICAgICBsZXQgbWF0Y2ggPSB0aGlzLmxpbmVzW2ZvY3VzLnJvd10uc3Vic3RyKHN0YXJ0Q29sLCBlbmRDb2wgLSBzdGFydENvbCkubWF0Y2goL14oPzxsZWFkaW5nPlxccyopLipcXFMoPzx0cmFpbGluZz5cXHMqKSQvKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgc3RhcnRDb2wgKz0gbWF0Y2guZ3JvdXBzLmxlYWRpbmcubGVuZ3RoO1xuICAgICAgICAgIGVuZENvbCAtPSBtYXRjaC5ncm91cHMudHJhaWxpbmcubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9jdXMuY29sID0gc3RhcnRDb2w7XG4gICAgICAgIGFuY2hvci5jb2wgPSBlbmRDb2w7XG5cbiAgICAgICAgLy8gSnVzdCBpbnNlcnQgbWFya3VwIGJlZm9yZSBhbmQgYWZ0ZXIgYW5kIGhvcGUgZm9yIHRoZSBiZXN0LiBcbiAgICAgICAgdGhpcy53cmFwU2VsZWN0aW9uKGNvbW1hbmRzW2NvbW1hbmRdLnNldC5wcmUsIGNvbW1hbmRzW2NvbW1hbmRdLnNldC5wb3N0LCBmb2N1cywgYW5jaG9yKTtcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlKCk7XG4gICAgICAgIC8vIFRPRE8gY2xlYW4gdGhpcyB1cCBzbyB0aGF0IG1hcmt1cCByZW1haW5zIHByb3Blcmx5IG5lc3RlZFxuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChjb21tYW5kc1tjb21tYW5kXS50eXBlID09ICdsaW5lJykge1xuICAgICAgbGV0IGFuY2hvciA9IHRoaXMuZ2V0U2VsZWN0aW9uKHRydWUpO1xuICAgICAgbGV0IGZvY3VzID0gdGhpcy5nZXRTZWxlY3Rpb24oZmFsc2UpO1xuICAgICAgaWYgKCFhbmNob3IpIGFuY2hvciA9IGZvY3VzO1xuICAgICAgaWYgKCFmb2N1cykgcmV0dXJuO1xuICAgICAgdGhpcy5jbGVhckRpcnR5RmxhZygpO1xuICAgICAgbGV0IHN0YXJ0ID0gYW5jaG9yLnJvdyA+IGZvY3VzLnJvdyA/IGZvY3VzIDogYW5jaG9yO1xuICAgICAgbGV0IGVuZCA9ICBhbmNob3Iucm93ID4gZm9jdXMucm93ID8gYW5jaG9yIDogZm9jdXM7XG4gICAgICBpZiAoZW5kLnJvdyA+IHN0YXJ0LnJvdyAmJiBlbmQuY29sID09IDApIHtcbiAgICAgICAgZW5kLnJvdy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBsaW5lID0gc3RhcnQucm93OyBsaW5lIDw9IGVuZC5yb3c7IGxpbmUrKykge1xuICAgICAgICBpZiAoc3RhdGUgJiYgdGhpcy5saW5lVHlwZXNbbGluZV0gIT0gY29tbWFuZHNbY29tbWFuZF0uY2xhc3NOYW1lKSB7XG4gICAgICAgICAgdGhpcy5saW5lc1tsaW5lXSA9IHRoaXMubGluZXNbbGluZV0ucmVwbGFjZShjb21tYW5kc1tjb21tYW5kXS5zZXQucGF0dGVybiwgY29tbWFuZHNbY29tbWFuZF0uc2V0LnJlcGxhY2VtZW50LnJlcGxhY2UoJyQjJywgKGxpbmUgLSBzdGFydC5yb3cgKyAxKSkpO1xuICAgICAgICAgIHRoaXMubGluZURpcnR5W2xpbmVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0YXRlICYmIHRoaXMubGluZVR5cGVzW2xpbmVdID09IGNvbW1hbmRzW2NvbW1hbmRdLmNsYXNzTmFtZSkge1xuICAgICAgICAgIHRoaXMubGluZXNbbGluZV0gPSB0aGlzLmxpbmVzW2xpbmVdLnJlcGxhY2UoY29tbWFuZHNbY29tbWFuZF0udW5zZXQucGF0dGVybiwgY29tbWFuZHNbY29tbWFuZF0udW5zZXQucmVwbGFjZW1lbnQpO1xuICAgICAgICAgIHRoaXMubGluZURpcnR5W2xpbmVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVGb3JtYXR0aW5nKCk7XG4gICAgICB0aGlzLnNldFNlbGVjdGlvbih7cm93OiBlbmQucm93LCBjb2w6IHRoaXMubGluZXNbZW5kLnJvd10ubGVuZ3RofSwge3Jvdzogc3RhcnQucm93LCBjb2w6IDB9KTtcbiAgICAgIHRoaXMuZmlyZUNoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IGlubGluZSBmb3JtYXR0aW5nIGlzIGFsbG93ZWQgYXQgdGhlIGN1cnJlbnQgZm9jdXMgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBmb2N1cyBUaGUgY3VycmVudCBmb2N1c1xuICAgKi9cbiAgaXNJbmxpbmVGb3JtYXR0aW5nQWxsb3dlZCgpIHtcbiAgICAvLyBUT0RPIFJlbW92ZSBwYXJhbWV0ZXJzIGZyb20gYWxsIGNhbGxzXG4gICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgIGlmICghc2VsIHx8ICFzZWwuZm9jdXNOb2RlIHx8ICFzZWwuYW5jaG9yTm9kZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gQ2hlY2sgaWYgd2UgY2FuIGZpbmQgYSBjb21tb24gYW5jZXN0b3Igd2l0aCB0aGUgY2xhc3MgYFRNSW5saW5lRm9ybWF0dGVkYCBcblxuICAgIC8vIFNwZWNpYWwgY2FzZTogRW1wdHkgc2VsZWN0aW9uIHJpZ2h0IGJlZm9yZSBgVE1JbmxpbmVGb3JtYXR0ZWRgXG4gICAgaWYgKHNlbC5pc0NvbGxhcHNlZCAmJiBzZWwuZm9jdXNOb2RlLm5vZGVUeXBlID09IDMgJiYgc2VsLmZvY3VzT2Zmc2V0ID09IHNlbC5mb2N1c05vZGUubm9kZVZhbHVlLmxlbmd0aCkge1xuICAgICAgbGV0IG5vZGU7XG4gICAgICBmb3IgKG5vZGUgPSBzZWwuZm9jdXNOb2RlOyBub2RlICYmIG5vZGUubmV4dFNpYmxpbmcgPT0gbnVsbDsgbm9kZSA9IG5vZGUucGFyZW50Tm9kZSk7XG4gICAgICBpZiAobm9kZSAmJiBub2RlLm5leHRTaWJsaW5nLmNsYXNzTmFtZSAmJiBub2RlLm5leHRTaWJsaW5nLmNsYXNzTmFtZS5pbmNsdWRlcygnVE1JbmxpbmVGb3JtYXR0ZWQnKSkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gTG9vayBmb3IgYSBjb21tb24gYW5jZXN0b3JcbiAgICBsZXQgYW5jZXN0b3IgPSB0aGlzLmNvbXB1dGVDb21tb25BbmNlc3RvcihzZWwuZm9jdXNOb2RlLCBzZWwuYW5jaG9yTm9kZSk7XG4gICAgaWYgKCFhbmNlc3RvcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUncyBhbiBhbmNlc3RvciBvZiBjbGFzcyAnVE1JbmxpbmVGb3JtYXR0ZWQnIG9yICdUTUJsYW5rTGluZSdcbiAgICB3aGlsZSAoYW5jZXN0b3IgJiYgYW5jZXN0b3IgIT0gdGhpcy5lKSB7XG4gICAgICBpZiAoYW5jZXN0b3IuY2xhc3NOYW1lICYmIChhbmNlc3Rvci5jbGFzc05hbWUuaW5jbHVkZXMoJ1RNSW5saW5lRm9ybWF0dGVkJykgfHwgYW5jZXN0b3IuY2xhc3NOYW1lLmluY2x1ZGVzKCdUTUJsYW5rTGluZScpKSkgcmV0dXJuIHRydWU7XG4gICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBzIHRoZSBjdXJyZW50IHNlbGVjdGlvbiBpbiB0aGUgc3RyaW5ncyBwcmUgYW5kIHBvc3QuIElmIHRoZSBzZWxlY3Rpb24gaXMgbm90IG9uIG9uZSBsaW5lLCByZXR1cm5zLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlIFRoZSBzdHJpbmcgdG8gaW5zZXJ0IGJlZm9yZSB0aGUgc2VsZWN0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9zdCBUaGUgc3RyaW5nIHRvIGluc2VydCBhZnRlciB0aGUgc2VsZWN0aW9uLlxuICAgKiBAcGFyYW0ge29iamVjdH0gZm9jdXMgVGhlIGN1cnJlbnQgc2VsZWN0aW9uIGZvY3VzLiBJZiBudWxsLCBzZWxlY3Rpb24gd2lsbCBiZSBjb21wdXRlZC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGFuY2hvciBUaGUgY3VycmVudCBzZWxlY3Rpb24gZm9jdXMuIElmIG51bGwsIHNlbGVjdGlvbiB3aWxsIGJlIGNvbXB1dGVkLlxuICAgKi9cbiAgd3JhcFNlbGVjdGlvbihwcmUsIHBvc3QsIGZvY3VzID0gbnVsbCwgYW5jaG9yID0gbnVsbCkge1xuICAgIGlmICghZm9jdXMpIGZvY3VzID0gdGhpcy5nZXRTZWxlY3Rpb24oZmFsc2UpO1xuICAgIGlmICghYW5jaG9yKSBhbmNob3IgPSB0aGlzLmdldFNlbGVjdGlvbih0cnVlKTtcbiAgICBpZiAoIWZvY3VzIHx8ICFhbmNob3IgfHwgZm9jdXMucm93ICE9IGFuY2hvci5yb3cpIHJldHVybjtcbiAgICB0aGlzLmxpbmVEaXJ0eVtmb2N1cy5yb3ddID0gdHJ1ZTtcblxuICAgIGNvbnN0IHN0YXJ0Q29sID0gZm9jdXMuY29sIDwgYW5jaG9yLmNvbCA/IGZvY3VzLmNvbCA6IGFuY2hvci5jb2w7XG4gICAgY29uc3QgZW5kQ29sID0gZm9jdXMuY29sIDwgYW5jaG9yLmNvbCA/IGFuY2hvci5jb2wgOiBmb2N1cy5jb2w7XG4gICAgY29uc3QgbGVmdCA9IHRoaXMubGluZXNbZm9jdXMucm93XS5zdWJzdHIoMCwgc3RhcnRDb2wpLmNvbmNhdChwcmUpO1xuICAgIGNvbnN0IG1pZCA9IChlbmRDb2wgPT0gc3RhcnRDb2wgPyAnJyA6IHRoaXMubGluZXNbZm9jdXMucm93XS5zdWJzdHIoc3RhcnRDb2wsIGVuZENvbCAtIHN0YXJ0Q29sKSk7IFxuICAgIGNvbnN0IHJpZ2h0ID0gcG9zdC5jb25jYXQodGhpcy5saW5lc1tmb2N1cy5yb3ddLnN1YnN0cihlbmRDb2wpKTtcbiAgICB0aGlzLmxpbmVzW2ZvY3VzLnJvd10gPSBsZWZ0LmNvbmNhdChtaWQsIHJpZ2h0KTtcbiAgICBhbmNob3IuY29sID0gbGVmdC5sZW5ndGg7XG4gICAgZm9jdXMuY29sID0gYW5jaG9yLmNvbCArIG1pZC5sZW5ndGg7XG5cbiAgICB0aGlzLnVwZGF0ZUZvcm1hdHRpbmcoKTtcbiAgICB0aGlzLnNldFNlbGVjdGlvbihmb2N1cywgYW5jaG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBjb21tYW5kIHN0YXRlIGZvciBhIGNvbW1hbmQgKHRydWUgPC0+IGZhbHNlKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29tbWFuZCBUaGUgZWRpdG9yIGNvbW1hbmRcbiAgICovXG4gIHRvZ2dsZUNvbW1hbmRTdGF0ZShjb21tYW5kKSB7XG4gICAgaWYgKCF0aGlzLmxhc3RDb21tYW5kU3RhdGUpIHRoaXMubGFzdENvbW1hbmRTdGF0ZSA9IHRoaXMuZ2V0Q29tbWFuZFN0YXRlKCk7XG4gICAgdGhpcy5zZXRDb21tYW5kU3RhdGUoY29tbWFuZCwgIXRoaXMubGFzdENvbW1hbmRTdGF0ZVtjb21tYW5kXSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjaGFuZ2UgZXZlbnQuIFVwZGF0ZXMgdGhlIGxpbmtlZCB0ZXh0YXJlYSBhbmQgbm90aWZpZXMgYW55IGV2ZW50IGxpc3RlbmVycy5cbiAgICovXG4gIGZpcmVDaGFuZ2UoKSB7XG4gICAgaWYgKCF0aGlzLnRleHRhcmVhICYmICF0aGlzLmxpc3RlbmVycy5jaGFuZ2UubGVuZ3RoKSByZXR1cm47XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuICAgIGlmICh0aGlzLnRleHRhcmVhKSB0aGlzLnRleHRhcmVhLnZhbHVlID0gY29udGVudDtcbiAgICBmb3IgKGxldCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycy5jaGFuZ2UpIHtcbiAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgbGluZXNEaXJ0eTogdGhpcy5saW5lc0RpcnR5LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGEgXCJzZWxlY3Rpb24gY2hhbmdlZFwiIGV2ZW50LlxuICAgKi9cbiAgZmlyZVNlbGVjdGlvbigpIHtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuc2VsZWN0aW9uICYmIHRoaXMubGlzdGVuZXJzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGxldCBmb2N1cyA9IHRoaXMuZ2V0U2VsZWN0aW9uKGZhbHNlKTtcbiAgICAgIGxldCBhbmNob3IgPSB0aGlzLmdldFNlbGVjdGlvbih0cnVlKTtcbiAgICAgIGxldCBjb21tYW5kU3RhdGUgPSB0aGlzLmdldENvbW1hbmRTdGF0ZShmb2N1cywgYW5jaG9yKTtcbiAgICAgIGlmICh0aGlzLmxhc3RDb21tYW5kU3RhdGUpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmxhc3RDb21tYW5kU3RhdGUsIGNvbW1hbmRTdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhc3RDb21tYW5kU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBjb21tYW5kU3RhdGUpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMuc2VsZWN0aW9uKSB7XG4gICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICBmb2N1czogZm9jdXMsXG4gICAgICAgICAgYW5jaG9yOiBhbmNob3IsXG4gICAgICAgICAgY29tbWFuZFN0YXRlOiB0aGlzLmxhc3RDb21tYW5kU3RhdGUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byBsaXN0ZW4gdG8uIENhbiBiZSAnY2hhbmdlJyBvciAnc2VsZWN0aW9uJ1xuICAgKiBAcGFyYW0geyp9IGxpc3RlbmVyIEZ1bmN0aW9uIG9mIHRoZSB0eXBlIChldmVudCkgPT4ge30gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGV2ZW50IG9jY3Vycy5cbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZS5tYXRjaCgvXig/OmNoYW5nZXxpbnB1dCkkL2kpKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5jaGFuZ2UucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuICAgIGlmICh0eXBlLm1hdGNoKC9eKD86c2VsZWN0aW9ufHNlbGVjdGlvbmNoYW5nZSkkL2kpKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zZWxlY3Rpb24ucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcbiJdLCJuYW1lcyI6WyJzdmciLCJibG9ja3F1b3RlIiwiYm9sZCIsImNsZWFyX2Zvcm1hdHRpbmciLCJjb2RlIiwiaDEiLCJoMiIsImhyIiwiaW1hZ2UiLCJpdGFsaWMiLCJsaW5rIiwib2wiLCJzdHJpa2V0aHJvdWdoIiwidWwiLCJpc01hY0xpa2UiLCJ0ZXN0IiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJEZWZhdWx0Q29tbWFuZHMiLCJuYW1lIiwiYWN0aW9uIiwiaW5uZXJIVE1MIiwidGl0bGUiLCJob3RrZXkiLCJlZGl0b3IiLCJpc0lubGluZUZvcm1hdHRpbmdBbGxvd2VkIiwid3JhcFNlbGVjdGlvbiIsImVuYWJsZWQiLCJmb2N1cyIsImFuY2hvciIsInBhc3RlIiwiQ29tbWFuZEJhciIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJlIiwiY29tbWFuZHMiLCJidXR0b25zIiwic3RhdGUiLCJob3RrZXlzIiwiZWxlbWVudCIsInRhZ05hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYm9keSIsImNyZWF0ZUNvbW1hbmRCYXJFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleWRvd24iLCJzZXRFZGl0b3IiLCJwYXJlbnRFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbW1hbmQiLCJlbCIsImFwcGVuZENoaWxkIiwiY29tbWFuZE5hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJrZXlzIiwic3BsaXQiLCJtb2RpZmllcnMiLCJtb2RpZmllcmV4cGxhbmF0aW9uIiwiaSIsImxlbmd0aCIsInB1c2giLCJtYXRjaCIsImtleSIsInRvTG93ZXJDYXNlIiwiY29uY2F0Iiwiam9pbiIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldENvbW1hbmRTdGF0ZSIsImhhbmRsZVNlbGVjdGlvbiIsImNvbW1hbmRTdGF0ZSIsInVuZGVmaW5lZCIsIm91dGVyIiwibW9kaWZpZXIiLCJjaGVjayIsIml0IiwiTWF0aCIsIm1vZHVsZSIsImdsb2JhbFRoaXMiLCJ3aW5kb3ciLCJzZWxmIiwiZ2xvYmFsIiwidGhpcyIsIkZ1bmN0aW9uIiwiZXhlYyIsImVycm9yIiwiZmFpbHMiLCJyZXF1aXJlIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJiaW5kIiwiaGFzT3duUHJvcGVydHkiLCJOQVRJVkVfQklORCIsIkZ1bmN0aW9uUHJvdG90eXBlIiwicHJvdG90eXBlIiwiY2FsbCIsInVuY3VycnlUaGlzV2l0aEJpbmQiLCJmbiIsImFwcGx5IiwiYXJndW1lbnRzIiwiZG9jdW1lbnRBbGwiLCJhbGwiLCJJU19IVE1MRERBIiwiJGRvY3VtZW50QWxsIiwiYXJndW1lbnQiLCJpc051bGxPclVuZGVmaW5lZCIsIiRUeXBlRXJyb3IiLCJUeXBlRXJyb3IiLCJyZXF1aXJlT2JqZWN0Q29lcmNpYmxlIiwiJE9iamVjdCIsInVuY3VycnlUaGlzIiwidG9PYmplY3QiLCJoYXNPd24iLCJERVNDUklQVE9SUyIsImdldERlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJFWElTVFMiLCJQUk9QRVIiLCJzb21ldGhpbmciLCJDT05GSUdVUkFCTEUiLCJjb25maWd1cmFibGUiLCJ2YWx1ZSIsIndyaXRhYmxlIiwiZGVmaW5lR2xvYmFsUHJvcGVydHkiLCJTSEFSRUQiLCJzdG9yZSIsImlzQ2FsbGFibGUiLCJmdW5jdGlvblRvU3RyaW5nIiwidG9TdHJpbmciLCJpbnNwZWN0U291cmNlIiwiV2Vha01hcCIsIlN0cmluZyIsImlzT2JqZWN0IiwiYSIsIiRTdHJpbmciLCJhRnVuY3Rpb24iLCJuYW1lc3BhY2UiLCJtZXRob2QiLCJpc1Byb3RvdHlwZU9mIiwidXNlckFnZW50IiwicHJvY2VzcyIsIkRlbm8iLCJ2ZXJzaW9ucyIsInZlcnNpb24iLCJ2OCIsIlY4X1ZFUlNJT04iLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2wiLCJTeW1ib2wiLCJzaGFtIiwiTkFUSVZFX1NZTUJPTCIsIml0ZXJhdG9yIiwiZ2V0QnVpbHRJbiIsIlVTRV9TWU1CT0xfQVNfVUlEIiwiJFN5bWJvbCIsInRyeVRvU3RyaW5nIiwiYUNhbGxhYmxlIiwiViIsIlAiLCJmdW5jIiwiaW5wdXQiLCJwcmVmIiwidmFsIiwidmFsdWVPZiIsIm1vZGUiLCJjb3B5cmlnaHQiLCJsaWNlbnNlIiwic291cmNlIiwiaWQiLCJwb3N0Zml4IiwicmFuZG9tIiwic2hhcmVkIiwidWlkIiwiV2VsbEtub3duU3ltYm9sc1N0b3JlIiwiY3JlYXRlV2VsbEtub3duU3ltYm9sIiwid2l0aG91dFNldHRlciIsImlzU3ltYm9sIiwiZ2V0TWV0aG9kIiwib3JkaW5hcnlUb1ByaW1pdGl2ZSIsIndlbGxLbm93blN5bWJvbCIsIlRPX1BSSU1JVElWRSIsImV4b3RpY1RvUHJpbSIsInJlc3VsdCIsInRvUHJpbWl0aXZlIiwiSUU4X0RPTV9ERUZJTkUiLCJWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyIsImFuT2JqZWN0IiwidG9Qcm9wZXJ0eUtleSIsIiRkZWZpbmVQcm9wZXJ0eSIsIiRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJFTlVNRVJBQkxFIiwiV1JJVEFCTEUiLCJleHBvcnRzIiwiTyIsIkF0dHJpYnV0ZXMiLCJjdXJyZW50IiwiZW51bWVyYWJsZSIsImJpdG1hcCIsImRlZmluZVByb3BlcnR5TW9kdWxlIiwiY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yIiwib2JqZWN0IiwiZiIsIk5BVElWRV9XRUFLX01BUCIsImNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSIsInNoYXJlZEtleSIsIk9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEIiwic2V0IiwiaGFzIiwiZW5mb3JjZSIsImdldHRlckZvciIsIlRZUEUiLCJ0eXBlIiwibWV0YWRhdGEiLCJmYWNhZGUiLCJTVEFURSIsIkNPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FIiwiSW50ZXJuYWxTdGF0ZU1vZHVsZSIsImVuZm9yY2VJbnRlcm5hbFN0YXRlIiwiZ2V0SW50ZXJuYWxTdGF0ZSIsInN0cmluZ1NsaWNlIiwic2xpY2UiLCJyZXBsYWNlIiwiQ09ORklHVVJBQkxFX0xFTkdUSCIsIlRFTVBMQVRFIiwibWFrZUJ1aWx0SW4iLCJvcHRpb25zIiwiZ2V0dGVyIiwic2V0dGVyIiwiYXJpdHkiLCJ0YXJnZXQiLCJkZXNjcmlwdG9yIiwidGhhdCIsImhhc0luZGljZXMiLCJpZ25vcmVDYXNlIiwibXVsdGlsaW5lIiwiZG90QWxsIiwidW5pY29kZSIsInVuaWNvZGVTZXRzIiwic3RpY2t5IiwiZGVmaW5lQnVpbHRJbkFjY2Vzc29yIiwicmVnRXhwRmxhZ3MiLCJSZWdFeHAiLCJSZWdFeHBQcm90b3R5cGUiLCJGT1JDRUQiLCJJTkRJQ0VTX1NVUFBPUlQiLCJjYWxscyIsImV4cGVjdGVkIiwiYWRkR2V0dGVyIiwiY2hyIiwicGFpcnMiLCJyZXBsYWNlbWVudHMiLCJBU0NJSVB1bmN0dWF0aW9uIiwiTm90VHJpZ2dlckNoYXIiLCJTY2hlbWUiLCJFbWFpbCIsIkhUTUxPcGVuVGFnIiwiSFRNTENsb3NlVGFnIiwiSFRNTFRhZ05hbWUiLCJIVE1MQ29tbWVudCIsIkhUTUxQSSIsIkhUTUxEZWNsYXJhdGlvbiIsIkhUTUxDREFUQSIsIkhUTUxBdHRyaWJ1dGUiLCJIVE1MQXR0VmFsdWUiLCJLbm93blRhZyIsInB1bmN0dWF0aW9uTGVhZGluZyIsInB1bmN0dWF0aW9uVHJhaWxpbmciLCJsaW5lR3JhbW1hciIsIlRNSDEiLCJyZWdleHAiLCJyZXBsYWNlbWVudCIsIlRNSDIiLCJUTUgzIiwiVE1INCIsIlRNSDUiLCJUTUg2IiwiVE1CbG9ja3F1b3RlIiwiVE1Db2RlRmVuY2VCYWNrdGlja09wZW4iLCJUTUNvZGVGZW5jZVRpbGRlT3BlbiIsIlRNQ29kZUZlbmNlQmFja3RpY2tDbG9zZSIsIlRNQ29kZUZlbmNlVGlsZGVDbG9zZSIsIlRNQmxhbmtMaW5lIiwiVE1TZXRleHRIMU1hcmtlciIsIlRNU2V0ZXh0SDJNYXJrZXIiLCJUTUhSIiwiVE1VTCIsIlRNT0wiLCJUTUluZGVudGVkQ29kZSIsIlRNTGlua1JlZmVyZW5jZURlZmluaXRpb24iLCJsYWJlbFBsYWNlaG9sZGVyIiwiaHRtbEJsb2NrR3JhbW1hciIsInN0YXJ0IiwiZW5kIiwicGFyYUludGVycnVwdCIsImlubGluZUdyYW1tYXIiLCJlc2NhcGUiLCJhdXRvbGluayIsImh0bWwiLCJsaW5rT3BlbiIsImltYWdlT3BlbiIsImxpbmtMYWJlbCIsImRlZmF1bHQiLCJyZXBsYWNlbWVudFJlZ2V4cCIsImlubGluZVJ1bGVzIiwicnVsZSIsInJlIiwic3RyaW5nIiwiZmxhZ3MiLCJodG1sZXNjYXBlIiwicHJlIiwicG9zdCIsInVuc2V0IiwicHJlUGF0dGVybiIsInBvc3RQYXR0ZXJuIiwicGF0dGVybiIsImgzIiwiaDQiLCJoNSIsImg2IiwiRWRpdG9yIiwidGV4dGFyZWEiLCJsaW5lcyIsImxpbmVFbGVtZW50cyIsImxpbmVUeXBlcyIsImxpbmVDYXB0dXJlcyIsImxpbmVSZXBsYWNlbWVudHMiLCJsaW5rTGFiZWxzIiwibGluZURpcnR5IiwibGFzdENvbW1hbmRTdGF0ZSIsImxpc3RlbmVycyIsImNoYW5nZSIsInNlbGVjdGlvbiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsInN0eWxlIiwiZGlzcGxheSIsImNyZWF0ZUVkaXRvckVsZW1lbnQiLCJzZXRDb250ZW50IiwiY29udGVudCIsImNvbnRlbnRFZGl0YWJsZSIsIndoaXRlU3BhY2UiLCJ3ZWJraXRVc2VyTW9kaWZ5IiwibmV4dFNpYmxpbmciLCJpbnNlcnRCZWZvcmUiLCJoYW5kbGVJbnB1dEV2ZW50IiwiaGFuZGxlU2VsZWN0aW9uQ2hhbmdlRXZlbnQiLCJoYW5kbGVQYXN0ZSIsImNoaWxkTm9kZXMiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJsaW5lTnVtIiwibGUiLCJBcnJheSIsInVwZGF0ZUZvcm1hdHRpbmciLCJmaXJlQ2hhbmdlIiwiZ2V0Q29udGVudCIsInVwZGF0ZUxpbmVUeXBlcyIsInVwZGF0ZUxpbmtMYWJlbHMiLCJhcHBseUxpbmVUeXBlcyIsImwiLCJjYXB0dXJlIiwic3RyIiwicDEiLCJwMiIsInByb2Nlc3NJbmxpbmVTdHlsZXMiLCJjb250ZW50SFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsImRhdGFzZXQiLCJjb2RlQmxvY2tUeXBlIiwiY29kZUJsb2NrU2VxTGVuZ3RoIiwiaHRtbEJsb2NrIiwibGluZVR5cGUiLCJsaW5lQ2FwdHVyZSIsImxpbmVSZXBsYWNlbWVudCIsImdyb3VwcyIsImh0bWxCbG9ja1R5cGUiLCJoZWFkaW5nTGluZSIsImhlYWRpbmdMaW5lVHlwZSIsInVwZGF0ZUxpbmVDb250ZW50c0FuZEZvcm1hdHRpbmciLCJjbGVhckRpcnR5RmxhZyIsInVwZGF0ZUxpbmVDb250ZW50cyIsInBhcnNlTGlua09ySW1hZ2UiLCJvcmlnaW5hbFN0cmluZyIsImlzSW1hZ2UiLCJ0ZXh0T2Zmc2V0Iiwib3BlbmVyIiwic3Vic3RyIiwiY3VycmVudE9mZnNldCIsImJyYWNrZXRMZXZlbCIsImxpbmtUZXh0IiwibGlua1JlZiIsImxpbmtEZXRhaWxzIiwidGV4dE91dGVyIiwiY2FwIiwibmV4dENoYXIiLCJ0cmltIiwicGFyZW50aGVzaXNMZXZlbCIsImlubGluZU91dGVyIiwidmFsaWQiLCJsYWJlbCIsIm91dHB1dCIsImNoYXJDb3VudCIsInByb2Nlc3NlZCIsInN0YWNrIiwib2Zmc2V0IiwicG90ZW50aWFsTGluayIsInBvdGVudGlhbEltYWdlIiwiZGVsaW1Db3VudCIsImRlbGltU3RyaW5nIiwiY3VycmVudERlbGltaXRlciIsInByZWNlZGluZyIsImZvbGxvd2luZyIsInB1bmN0dWF0aW9uRm9sbG93cyIsInB1bmN0dWF0aW9uUHJlY2VkZXMiLCJ3aGl0ZXNwYWNlRm9sbG93cyIsIndoaXRlc3BhY2VQcmVjZWRlcyIsImNhbk9wZW4iLCJjYW5DbG9zZSIsInN0YWNrUG9pbnRlciIsImRlbGltaXRlciIsImVudHJ5IiwicG9wIiwiY291bnQiLCJjb25zdW1lZCIsImxpbmVEZWx0YSIsImNoaWxkRWxlbWVudENvdW50IiwiZmlyc3RDaGFuZ2VkTGluZSIsInRleHRDb250ZW50IiwibGFzdENoYW5nZWRMaW5lIiwibGluZXNUb0RlbGV0ZSIsImxpbmVzVG9BZGQiLCJzcGxpY2VMaW5lcyIsImxpbmUiLCJjdCIsInByb2Nlc3NOZXdQYXJhZ3JhcGgiLCJzZWwiLCJjb250aW51YWJsZVR5cGUiLCJjaGVja0xpbmUiLCJjb2wiLCJyb3ciLCJwYXJzZUludCIsImdldFNlbGVjdGlvbiIsImdldEFuY2hvciIsInN0YXJ0Tm9kZSIsImFuY2hvck5vZGUiLCJmb2N1c05vZGUiLCJub2RlVHlwZSIsIk5vZGUiLCJURVhUX05PREUiLCJhbmNob3JPZmZzZXQiLCJmb2N1c09mZnNldCIsImNvbXB1dGVDb2x1bW4iLCJub2RlIiwicHJldmlvdXNTaWJsaW5nIiwiY29tcHV0ZU5vZGVBbmRPZmZzZXQiLCJiaW5kUmlnaHQiLCJjaGlsZHJlbkNvbXBsZXRlIiwicnYiLCJub2RlVmFsdWUiLCJzZXRTZWxlY3Rpb24iLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJ3aW5kb3dTZWxlY3Rpb24iLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImlucHV0VHlwZSIsImNoaWxkTm9kZSIsImRpdldyYXBwZXIiLCJmaXJlU2VsZWN0aW9uIiwic3RhcnRMaW5lIiwibGluZXNUb0luc2VydCIsImFkanVzdExpbmVFbGVtZW50cyIsImluc2VydGVkQmxhbmsiLCJpbnNlcnRlZERpcnR5Iiwic3BsaWNlIiwidGV4dCIsIm9yaWdpbmFsRXZlbnQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImJlZ2lubmluZyIsImluc2VydGVkTGluZXMiLCJsaW5lQmVmb3JlIiwibGluZUVuZCIsImVuZENvbFBvcyIsImNvbXB1dGVDb21tb25BbmNlc3RvciIsIm5vZGUxIiwibm9kZTIiLCJhbmNlc3RyeSIsInVuc2hpZnQiLCJhbmNlc3RyeTEiLCJhbmNlc3RyeTIiLCJjb21wdXRlRW5jbG9zaW5nTWFya3VwTm9kZSIsImluY2x1ZGVzIiwiZ2V0Q29tbWFuZFN0YXRlIiwiY21kIiwibWFya3VwTm9kZSIsInN0YXJ0Q29sIiwibGVuIiwibGVmdCIsIm1pZCIsInJpZ2h0IiwiZW5kQ29sIiwibGVhZGluZyIsInRyYWlsaW5nIiwiaXNDb2xsYXBzZWQiLCJhbmNlc3RvciIsInRvZ2dsZUNvbW1hbmRTdGF0ZSIsImxpc3RlbmVyIiwibGluZXNEaXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0VBQUEsTUFBTUEsR0FBRyxHQUFHO0VBQ1ZDLEVBQUFBLFVBQVUsRUFBRyxDQUEwUix5UkFBQSxDQUFBO0VBQ3ZTQyxFQUFBQSxJQUFJLEVBQUcsQ0FBeVksd1lBQUEsQ0FBQTtFQUNoWkMsRUFBQUEsZ0JBQWdCLEVBQUcsQ0FBMFgseVhBQUEsQ0FBQTtFQUM3WUMsRUFBQUEsSUFBSSxFQUFHLENBQThVLDZVQUFBLENBQUE7RUFDclZDLEVBQUFBLEVBQUUsRUFBRyxDQUErSiw4SkFBQSxDQUFBO0VBQ3BLQyxFQUFBQSxFQUFFLEVBQUcsQ0FBaUssZ0tBQUEsQ0FBQTtFQUN0S0MsRUFBQUEsRUFBRSxFQUFHLENBQWdJLCtIQUFBLENBQUE7RUFDcklDLEVBQUFBLEtBQUssRUFBRyxDQUE4SCw2SEFBQSxDQUFBO0VBQ3RJQyxFQUFBQSxNQUFNLEVBQUcsQ0FBZ0gsK0dBQUEsQ0FBQTtFQUN6SEMsRUFBQUEsSUFBSSxFQUFHLENBQTB1Qyx5dUNBQUEsQ0FBQTtFQUNqdkNDLEVBQUFBLEVBQUUsRUFBRyxDQUFvdEIsbXRCQUFBLENBQUE7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

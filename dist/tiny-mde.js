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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbInNyYy9zdmcvc3ZnLmpzIiwic3JjL1RpbnlNREVDb21tYW5kQmFyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWNhbGxhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1mbGFncy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLmZsYWdzLmpzIiwic3JjL2dyYW1tYXIuanMiLCJzcmMvVGlueU1ERS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdmcgPSB7XG4gIGJsb2NrcXVvdGU6IGA8c3ZnIGhlaWdodD1cIjE4XCIgd2lkdGg9XCIxOFwiPjxyZWN0IHdpZHRoPVwiNVwiIGhlaWdodD1cIjVcIiB4PVwiM1wiIHk9XCI0XCIgcnk9XCIxXCIvPjxyZWN0IHJ5PVwiMVwiIHk9XCI0XCIgeD1cIjEwXCIgaGVpZ2h0PVwiNVwiIHdpZHRoPVwiNVwiLz48cGF0aCBkPVwiTTggNi45OTl2M2MwIDEtMSAzLTEgM3MtLjMzMSAxLTEuMzMxIDFoLTFjLTEgMC0uNjY5LTEtLjY2OS0xczEtMiAxLTN2LTN6bTcgMHYzYzAgMS0xIDMtMSAzcy0uMzMxIDEtMS4zMzEgMWgtMWMtMSAwLS42NjktMS0uNjY5LTFzMS0yIDEtM3YtM3pcIi8+PC9zdmc+YCxcbiAgYm9sZDogYDxzdmcgaGVpZ2h0PVwiMThcIiB3aWR0aD1cIjE4XCI+PHBhdGggZD1cIk00IDJhMSAxIDAgMDAtMSAxdjEyYTEgMSAwIDAwMSAxaDZjNCAwIDUtMiA1LTQgMC0xLjMyMi0uNDM0LTIuNjM2LTEuODg1LTMuMzgxQzEzLjc3MiA3Ljg4NSAxNCA2Ljk0NSAxNCA2YzAtMi0xLTQtNS00em0xIDJoNGMxLjY2OCAwIDIuMzIuMzkzIDIuNi42NzIuMjguMjc5LjQuNjYyLjQgMS4zMjhzLS4xMiAxLjA1Ny0uNCAxLjMzOGMtLjI3NS4yNzQtMS4wMTQuNjQ2LTIuNi42NjJINXptNSA2YzEuNjY2LjAwNSAyLjMxOC4zODggMi41OTYuNjY2LjI3Ny4yNzguNDA0LjY2Ny40MDQgMS4zMzRzLS4xMjcgMS4wNi0uNDA0IDEuMzM4Yy0uMjc4LjI3OC0uOTMuNjYtMi41OTYuNjYybC00Ljk5Mi4wMDRMNSAxMHpcIi8+PC9zdmc+YCxcbiAgY2xlYXJfZm9ybWF0dGluZzogYDxzdmcgaGVpZ2h0PVwiMThcIiB3aWR0aD1cIjE4XCI+PHBhdGggZD1cIk0xMS4wMyAxYTEgMSAwIDAwLS43NC4zbC05IDlhMSAxIDAgMDAwIDEuNGw0IDRBMSAxIDAgMDA2IDE2aDJhMSAxIDAgMDAuNy0uM2w4LThhMSAxIDAgMDAwLTEuNGwtNS01YTEgMSAwIDAwLS42Ny0uM3pNOC43IDUuN2wzLjU4IDMuNkw3LjYgMTRINi40bC0zLTMgNS4zLTUuM3pcIi8+PHJlY3Qgcnk9XCIuOFwiIHJ4PVwiLjhcIiB5PVwiMTRcIiB4PVwiMTZcIiBoZWlnaHQ9XCIyXCIgd2lkdGg9XCIyXCIvPjxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiB4PVwiMTNcIiB5PVwiMTRcIiByeD1cIi44XCIgcnk9XCIuOFwiLz48cmVjdCByeT1cIi44XCIgcng9XCIuOFwiIHk9XCIxNFwiIHg9XCIxMFwiIGhlaWdodD1cIjJcIiB3aWR0aD1cIjJcIi8+PC9zdmc+YCxcbiAgY29kZTogYDxzdmcgaGVpZ2h0PVwiMThcIiB3aWR0aD1cIjE4XCI+PHBhdGggZD1cIk0xMy41IDIuOTk0YS41LjUgMCAwMC0uNS41LjUuNSAwIDAwMCAuMDM0VjQuNTNhNS45OTMgNS45OTMgMCAwMC03LjQ1MS0uNDQ1QTYgNiAwIDEwMTIuNDUgMTMuOWE1Ljk5IDUuOTkgMCAwMDEuMzQ2LTEuMzM0LjUuNSAwIDAwLjA5Ni0uMTAxLjUuNSAwIDAwLS4xMi0uNjk4LjUuNSAwIDAwLS42OTcuMTJsLS4wMDQtLjAwNWE1IDUgMCAwMS0xLjE5NyAxLjIgNSA1IDAgMTExLjIxNS02Ljk2NS41LjUgMCAwMC42OTcuMTIuNS41IDAgMDAuMjExLS40NFY0Ljc0NUgxNFYzLjQ5M2EuNS41IDAgMDAtLjUtLjV6XCIvPjwvc3ZnPmAsXG4gIGgxOiBgPHN2ZyBoZWlnaHQ9XCIxOFwiIHdpZHRoPVwiMThcIj48cGF0aCBkPVwiTTMgMnMwLTEgMS0xaDFjMSAwIDEgMSAxIDF2Nmg2VjJzMC0xIDEtMWgxYzEgMCAxIDEgMSAxdjE0czAgMS0xIDFoLTFjLTEgMC0xLTEtMS0xdi02SDZ2NnMwIDEtMSAxSDRjLTEgMC0xLTEtMS0xelwiLz48L3N2Zz5gLFxuICBoMjogYDxzdmcgaGVpZ2h0PVwiMThcIiB3aWR0aD1cIjE4XCI+PHBhdGggZD1cIk00IDJzMC0xIDEtMSAxIDEgMSAxdjZjMS0xIDItMSA0LTEgMyAwIDQgMiA0IDR2NXMwIDEtMSAxLTEtMS0xLTF2LTVjMC0xLjA5NC0xLTItMi0yLTIgMC0zIDAtNCAydjVzMCAxLTEgMS0xLTEtMS0xelwiLz48L3N2Zz5gLFxuICBocjogYDxzdmcgaGVpZ2h0PVwiMThcIiB3aWR0aD1cIjE4XCI+PHJlY3Qgcnk9XCIxXCIgeT1cIjhcIiBoZWlnaHQ9XCIyXCIgd2lkdGg9XCIxOFwiIHN0eWxlPVwiZm9udC12YXJpYXRpb24tc2V0dGluZ3M6bm9ybWFsO21hcmtlcjpub25lXCIvPjwvc3ZnPmAsXG4gIGltYWdlOiBgPHN2ZyBoZWlnaHQ9XCIxOFwiIHdpZHRoPVwiMThcIj48cGF0aCBkPVwiTTEgMnYxNGgxNlYySDF6bTIgMmgxMnY3bC0zLTMtNCA0LTItMi0zIDNWNHpcIi8+PGNpcmNsZSByPVwiMS41XCIgY3k9XCI2LjVcIiBjeD1cIjUuNVwiLz48L3N2Zz5gLFxuICBpdGFsaWM6IGA8c3ZnIGhlaWdodD1cIjE4XCIgd2lkdGg9XCIxOFwiPjxwYXRoIGQ9XCJNOSAyYTEgMSAwIDAwMCAyTDcgMTRhMSAxIDAgMTAwIDJoMmExIDEgMCAwMDAtMmwyLTEwYTEgMSAwIDEwMC0yelwiLz48L3N2Zz5gLFxuICBsaW5rOiBgPHN2ZyBoZWlnaHQ9XCIxOFwiIHdpZHRoPVwiMThcIj48cGF0aCBkPVwiTTkuMDcgNS4xOGEzLjkgMy45IDAgMDAtMS41Mi40M0M2LjMxIDYuMjIgNS4zIDcuMjkgNC4zIDguMjljLTEgMS0yLjA3IDIuMDItMi42OCAzLjI2LS4zMS42Mi0uNSAxLjMzLS40MSAyLjA3LjA5Ljc1LjQ4IDEuNDcgMS4xIDIuMDkuNjEuNjEgMS4zMyAxIDIuMDggMS4xLjc0LjA5IDEuNDUtLjEgMi4wNy0uNDIgMS4yNC0uNjEgMi4yNi0xLjY4IDMuMjYtMi42OC40Ni0uNDcuOTQtLjk0IDEuMzktMS40NGwtLjQzLjI2Yy0uNjguMzQtMS40OS41Ni0yLjM2LjQ2LS4yLS4wMy0uNC0uMDgtLjYtLjE0LS43OS43Ni0xLjU1IDEuNDUtMi4xNiAxLjc2LS4zOC4xOS0uNjcuMjQtLjkyLjIxLS4yNi0uMDMtLjU0LS4xNC0uOTItLjUzLS4zOS0uMzgtLjUtLjY2LS41My0uOTEtLjAzLS4yNi4wMi0uNTUuMjEtLjkzLjM5LS43NiAxLjMyLTEuNzQgMi4zMi0yLjc0IDEtMSAxLjk4LTEuOTMgMi43NC0yLjMyLjM4LS4xOS42Ny0uMjQuOTMtLjIxLjI1LjAzLjUzLjE0LjkxLjUzLjM5LjM4LjUuNjYuNTMuOTJ2LjA2bDEuMTItMS4wNi40NC0uNDdjLS4xOC0uMy0uNC0uNi0uNjctLjg3LS42Mi0uNjEtMS4zNC0xLTIuMDktMS4xYTMuMDggMy4wOCAwIDAwLS41NS0uMDF6XCIvPjxwYXRoIGQ9XCJNMTMuMDcuODZhMy45IDMuOSAwIDAwLTEuNTIuNDNjLTEuMjQuNjItMi4yNiAxLjY5LTMuMjYgMi42OS0uNDYuNDctLjk0Ljk0LTEuMzkgMS40My4xNS0uMDguMjgtLjE4LjQzLS4yNWE0LjQgNC40IDAgMDEyLjM2LS40NmMuMi4wMi40LjA3LjYuMTQuNzktLjc3IDEuNTUtMS40NiAyLjE2LTEuNzYuMzgtLjE5LjY3LS4yNS45My0uMjEuMjUuMDMuNTMuMTQuOTEuNTIuMzkuMzguNS42Ni41My45Mi4wMy4yNi0uMDIuNTUtLjIxLjkzLS4zOS43Ni0xLjMyIDEuNzQtMi4zMiAyLjc0LTEgMS0xLjk4IDEuOTMtMi43NCAyLjMxLS4zOC4yLS42Ny4yNS0uOTMuMjItLjI1LS4wNC0uNTMtLjE1LS45MS0uNTMtLjM5LS4zOC0uNS0uNjYtLjUzLS45MlY5Yy0uMzYuMzMtLjczLjY3LTEuMTIgMS4wNmwtLjQzLjQ2Yy4xNy4zLjQuNi42Ni44Ny42Mi42MiAxLjM0IDEgMi4wOCAxLjEuNzUuMSAxLjQ2LS4xIDIuMDgtLjQxIDEuMjQtLjYyIDIuMjYtMS42OSAzLjI2LTIuNjlzMi4wNy0yLjAyIDIuNjgtMy4yNmMuMzEtLjYyLjUtMS4zMi40MS0yLjA3YTMuNjMgMy42MyAwIDAwLTEuMS0yLjA4Yy0uNjEtLjYyLTEuMzMtMS0yLjA3LTEuMWEzLjA4IDMuMDggMCAwMC0uNTYtLjAyelwiLz48L3N2Zz5gLFxuICBvbDogYDxzdmcgaGVpZ2h0PVwiMThcIiB3aWR0aD1cIjE4XCI+PHBhdGggZD1cIk0xLjUgN2EuNS41IDAgMTAwIDFoMWEuNS41IDAgMDEuNS41YzAgLjE2NC0uMDguMzEtLjE0LjM1NWwtMS42NTUgMS4yNUEuNDkyLjQ5MiAwIDAwMSAxMC41YS41LjUgMCAwMC41LjVoMmEuNS41IDAgMDAwLTFIM2wuMzk4LS4yOTlBMS41IDEuNSAwIDAwMi41IDd6XCIvPjxwYXRoIGQ9XCJNMS41IDEyYy0uNjY3IDAtLjY2NyAxIDAgMWgxLjI1Yy4zMzMgMCAuMzMzLjUgMCAuNUgyLjVjLS42NjcgMC0uNjY3IDEgMCAxaC4yNWMuMzMzIDAgLjMzMy41IDAgLjVIMS41Yy0uNjY3IDAtLjY2NyAxIDAgMWgxYy4zOTggMCAuNzgtLjEzMSAxLjA2LS4zNjUuMjgyLS4yMzUuNDQtLjU1NC40NC0uODg1YTEuMTIxIDEuMTIxIDAgMDAtLjMwMy0uNzVjLjE5MS0uMjA0LjMtLjQ3LjMwMy0uNzUgMC0uMzMyLS4xNTgtLjY1MS0uNDQtLjg4NS0uMy0uMjQxLS42NzUtLjM3LTEuMDYtLjM2NXpcIi8+PHJlY3QgeT1cIjEzXCIgeD1cIjZcIiBoZWlnaHQ9XCIyXCIgd2lkdGg9XCIxMlwiIHJ5PVwiMVwiLz48cmVjdCByeT1cIjFcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMlwiIHg9XCI2XCIgeT1cIjhcIi8+PHJlY3QgeT1cIjNcIiB4PVwiNlwiIGhlaWdodD1cIjJcIiB3aWR0aD1cIjEyXCIgcnk9XCIxXCIvPjxwYXRoIGQ9XCJNMS41IDJhLjUuNSAwIDEwMCAxSDJ2MmgtLjVhLjUuNSAwIDEwMCAxaDJhLjUuNSAwIDEwMC0xSDNWMi41YzAtLjI3Ny0uMjIzLS41LS41LS41elwiLz48L3N2Zz5gLFxuICBzdHJpa2V0aHJvdWdoOiBgPHN2ZyB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIj48cGF0aCBkPVwiTTEwIDJDNiAyIDQgNCA0IDZjMCAuMzM4LjA4LjY3Mi4xOTMgMWgyLjM0QzYuMTEzIDYuNjI5IDYgNi4yOTUgNiA2YzAtLjMzNC4xMTctLjcyNS42OTEtMS4xNTRDNy4yNjUgNC40MTYgOC4zMzEgNCAxMCA0aDNhMSAxIDAgMDAwLTJ6bTEuNDc3IDljLjQxMy4zNjguNTIzLjcwNi41MjMgMSAwIC4zMzQtLjEyNy43MTItLjcwMSAxLjE0My0uNTc1LjQzLTEuNjMyLjg1LTMuMjk5Ljg1N2wtMS4wMDYuMDA3VjE0SDVhMSAxIDAgMDAwIDJoM2M0IDAgNi0yIDYtNCAwLS4zMzgtLjA4MS0uNjcyLS4xOTUtMXpcIi8+PHJlY3Qgcnk9XCIxXCIgeT1cIjhcIiB4PVwiMVwiIGhlaWdodD1cIjJcIiB3aWR0aD1cIjE2XCIvPjwvc3ZnPmAsXG4gIHVsOiBgPHN2ZyBoZWlnaHQ9XCIxOFwiIHdpZHRoPVwiMThcIj48Y2lyY2xlIGN4PVwiMlwiIGN5PVwiOVwiIHI9XCIyXCIvPjxjaXJjbGUgY3k9XCI0XCIgY3g9XCIyXCIgcj1cIjJcIi8+PHJlY3QgeT1cIjNcIiB4PVwiNlwiIGhlaWdodD1cIjJcIiB3aWR0aD1cIjEyXCIgcnk9XCIxXCIvPjxjaXJjbGUgY3g9XCIyXCIgY3k9XCIxNFwiIHI9XCIyXCIvPjxyZWN0IHJ5PVwiMVwiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIyXCIgeD1cIjZcIiB5PVwiOFwiLz48cmVjdCB5PVwiMTNcIiB4PVwiNlwiIGhlaWdodD1cIjJcIiB3aWR0aD1cIjEyXCIgcnk9XCIxXCIvPjwvc3ZnPmBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN2ZzsiLCJpbXBvcnQgc3ZnIGZyb20gJy4vc3ZnL3N2Zyc7XG5cbmNvbnN0IGlzTWFjTGlrZSA9IC8oTWFjfGlQaG9uZXxpUG9kfGlQYWQpL2kudGVzdCh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiID8gbmF2aWdhdG9yLnBsYXRmb3JtIDogXCJcIik7XG5cbmNvbnN0IERlZmF1bHRDb21tYW5kcyA9IHtcbiAgJ2JvbGQnOiB7XG4gICAgbmFtZTogJ2JvbGQnLFxuICAgIGFjdGlvbjogJ2JvbGQnLFxuICAgIGlubmVySFRNTDogc3ZnLmJvbGQsXG4gICAgdGl0bGU6ICdCb2xkJyxcbiAgICBob3RrZXk6ICdNb2QtQicsXG4gIH0sXG4gICdpdGFsaWMnOiB7XG4gICAgbmFtZTogJ2l0YWxpYycsXG4gICAgYWN0aW9uOiAnaXRhbGljJyxcbiAgICBpbm5lckhUTUw6IHN2Zy5pdGFsaWMsXG4gICAgdGl0bGU6ICdJdGFsaWMnLFxuICAgIGhvdGtleTogJ01vZC1JJyxcbiAgfSxcbiAgJ3N0cmlrZXRocm91Z2gnOiB7XG4gICAgbmFtZTogJ3N0cmlrZXRocm91Z2gnLFxuICAgIGFjdGlvbjogJ3N0cmlrZXRocm91Z2gnLFxuICAgIGlubmVySFRNTDogc3ZnLnN0cmlrZXRocm91Z2gsXG4gICAgdGl0bGU6ICdTdHJpa2V0aHJvdWdoJyxcbiAgICBob3RrZXk6ICdNb2QyLVNoaWZ0LTUnLFxuICB9LFxuICAnY29kZSc6IHtcbiAgICBuYW1lOiAnY29kZScsXG4gICAgYWN0aW9uOiAnY29kZScsXG4gICAgaW5uZXJIVE1MOiBzdmcuY29kZSxcbiAgICB0aXRsZTogJ0Zvcm1hdCBhcyBjb2RlJyxcbiAgfSxcbiAgJ2gxJzoge1xuICAgIG5hbWU6ICdoMScsXG4gICAgYWN0aW9uOiAnaDEnLFxuICAgIGlubmVySFRNTDogc3ZnLmgxLFxuICAgIHRpdGxlOiAnTGV2ZWwgMSBoZWFkaW5nJyxcbiAgICBob3RrZXk6ICdNb2QtU2hpZnQtMScsXG4gIH0sXG4gICdoMic6IHtcbiAgICBuYW1lOiAnaDInLFxuICAgIGFjdGlvbjogJ2gyJyxcbiAgICBpbm5lckhUTUw6IHN2Zy5oMixcbiAgICB0aXRsZTogJ0xldmVsIDIgaGVhZGluZycsXG4gICAgaG90a2V5OiAnTW9kLVNoaWZ0LTInLFxuICB9LFxuICAndWwnOiB7XG4gICAgbmFtZTogJ3VsJyxcbiAgICBhY3Rpb246ICd1bCcsXG4gICAgaW5uZXJIVE1MOiBzdmcudWwsXG4gICAgdGl0bGU6ICdCdWxsZXRlZCBsaXN0JyxcbiAgfSxcbiAgJ29sJzoge1xuICAgIG5hbWU6ICdvbCcsXG4gICAgYWN0aW9uOiAnb2wnLFxuICAgIGlubmVySFRNTDogc3ZnLm9sLFxuICAgIHRpdGxlOiAnTnVtYmVyZWQgbGlzdCcsXG4gIH0sXG4gICdibG9ja3F1b3RlJzoge1xuICAgIG5hbWU6ICdibG9ja3F1b3RlJyxcbiAgICBhY3Rpb246ICdibG9ja3F1b3RlJyxcbiAgICBpbm5lckhUTUw6IHN2Zy5ibG9ja3F1b3RlLFxuICAgIHRpdGxlOiAnUXVvdGUnLFxuICAgIGhvdGtleTogJ01vZDItU2hpZnQtUScsXG4gIH0sXG4gICdpbnNlcnRMaW5rJzoge1xuICAgIG5hbWU6ICdpbnNlcnRMaW5rJyxcbiAgICBhY3Rpb246IChlZGl0b3IpID0+IHtpZiAoZWRpdG9yLmlzSW5saW5lRm9ybWF0dGluZ0FsbG93ZWQoKSkgZWRpdG9yLndyYXBTZWxlY3Rpb24oJ1snLCAnXSgpJyl9LFxuICAgIGVuYWJsZWQ6IChlZGl0b3IsIGZvY3VzLCBhbmNob3IpID0+IGVkaXRvci5pc0lubGluZUZvcm1hdHRpbmdBbGxvd2VkKGZvY3VzLCBhbmNob3IpID8gZmFsc2UgOiBudWxsLFxuICAgIGlubmVySFRNTDogc3ZnLmxpbmssXG4gICAgdGl0bGU6ICdJbnNlcnQgbGluaycsXG4gICAgaG90a2V5OiAnTW9kLUsnLFxuICB9LFxuICAnaW5zZXJ0SW1hZ2UnOiB7XG4gICAgbmFtZTogJ2luc2VydEltYWdlJyxcbiAgICBhY3Rpb246IChlZGl0b3IpID0+IHtpZiAoZWRpdG9yLmlzSW5saW5lRm9ybWF0dGluZ0FsbG93ZWQoKSkgZWRpdG9yLndyYXBTZWxlY3Rpb24oJyFbJywgJ10oKScpfSxcbiAgICBlbmFibGVkOiAoZWRpdG9yLCBmb2N1cywgYW5jaG9yKSA9PiBlZGl0b3IuaXNJbmxpbmVGb3JtYXR0aW5nQWxsb3dlZChmb2N1cywgYW5jaG9yKSA/IGZhbHNlIDogbnVsbCxcbiAgICBpbm5lckhUTUw6IHN2Zy5pbWFnZSxcbiAgICB0aXRsZTogJ0luc2VydCBpbWFnZScsXG4gICAgaG90a2V5OiAnTW9kMi1TaGlmdC1JJyxcbiAgfSxcbiAgJ2hyJzoge1xuICAgIG5hbWU6ICdocicsXG4gICAgYWN0aW9uOiAoZWRpdG9yKSA9PiBlZGl0b3IucGFzdGUoJ1xcbioqKlxcbicpLFxuICAgIGVuYWJsZWQ6ICgpID0+IGZhbHNlLFxuICAgIGlubmVySFRNTDogc3ZnLmhyLFxuICAgIHRpdGxlOiAnSW5zZXJ0IGhvcml6b250YWwgbGluZScsXG4gICAgaG90a2V5OiAnTW9kMi1TaGlmdC1MJ1xuICB9XG59XG5cblxuY2xhc3MgQ29tbWFuZEJhciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5lID0gbnVsbDtcbiAgICB0aGlzLmVkaXRvciA9IG51bGw7XG4gICAgdGhpcy5jb21tYW5kcyA9IFtdO1xuICAgIHRoaXMuYnV0dG9ucyA9IHt9O1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLmhvdGtleXMgPSBbXTtcblxuICAgIGxldCBlbGVtZW50ID0gcHJvcHMuZWxlbWVudDtcbiAgICBpZiAoZWxlbWVudCAmJiAhZWxlbWVudC50YWdOYW1lKSB7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvcHMuZWxlbWVudCk7XG4gICAgfVxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmJvZHk7IFxuICAgIH1cbiAgICB0aGlzLmNyZWF0ZUNvbW1hbmRCYXJFbGVtZW50KGVsZW1lbnQsIHByb3BzLmNvbW1hbmRzIHx8IFsnYm9sZCcsICdpdGFsaWMnLCAnc3RyaWtldGhyb3VnaCcsICd8JywgJ2NvZGUnLCAnfCcsICdoMScsICdoMicsICd8JywgJ3VsJywgJ29sJywgJ3wnLCAnYmxvY2txdW90ZScsICdocicsICd8JywgJ2luc2VydExpbmsnLCAnaW5zZXJ0SW1hZ2UnXSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB0aGlzLmhhbmRsZUtleWRvd24oZSkpO1xuICAgIGlmIChwcm9wcy5lZGl0b3IpIHRoaXMuc2V0RWRpdG9yKHByb3BzLmVkaXRvcik7XG4gIH1cblxuICBjcmVhdGVDb21tYW5kQmFyRWxlbWVudChwYXJlbnRFbGVtZW50LCBjb21tYW5kcykge1xuICAgIHRoaXMuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZS5jbGFzc05hbWUgPSAnVE1Db21tYW5kQmFyJztcblxuICAgIGZvciAobGV0IGNvbW1hbmQgb2YgY29tbWFuZHMpIHtcbiAgICAgIGlmIChjb21tYW5kID09ICd8Jykge1xuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gJ1RNQ29tbWFuZERpdmlkZXInO1xuICAgICAgICB0aGlzLmUuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNvbW1hbmROYW1lO1xuICAgICAgICBpZiAodHlwZW9mIGNvbW1hbmQgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIC8vIFJlZmVyZW5jZSB0byBkZWZhdWx0IGNvbW1hbmRcblxuICAgICAgICAgIGlmIChEZWZhdWx0Q29tbWFuZHNbY29tbWFuZF0pIHtcbiAgICAgICAgICAgIGNvbW1hbmROYW1lID0gY29tbWFuZDtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHNbY29tbWFuZE5hbWVdID0gRGVmYXVsdENvbW1hbmRzW2NvbW1hbmROYW1lXTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29tbWFuZCA9PSBcIm9iamVjdFwiICYmIGNvbW1hbmQubmFtZSkge1xuICAgICAgICAgIGNvbW1hbmROYW1lID0gY29tbWFuZC5uYW1lO1xuICAgICAgICAgIHRoaXMuY29tbWFuZHNbY29tbWFuZE5hbWVdID0ge307IFxuICAgICAgICAgIGlmIChEZWZhdWx0Q29tbWFuZHNbY29tbWFuZE5hbWVdKSBPYmplY3QuYXNzaWduKHRoaXMuY29tbWFuZHNbY29tbWFuZE5hbWVdLCBEZWZhdWx0Q29tbWFuZHNbY29tbWFuZE5hbWVdKTtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY29tbWFuZHNbY29tbWFuZE5hbWVdLCBjb21tYW5kKTtcbiAgICAgICAgXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0aXRsZSA9IHRoaXMuY29tbWFuZHNbY29tbWFuZE5hbWVdLnRpdGxlIHx8IGNvbW1hbmROYW1lO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbW1hbmRzW2NvbW1hbmROYW1lXS5ob3RrZXkpIHtcbiAgICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5jb21tYW5kc1tjb21tYW5kTmFtZV0uaG90a2V5LnNwbGl0KCctJyk7XG4gICAgICAgICAgLy8gY29uc3RydWN0IG1vZGlmaWVyc1xuICAgICAgICAgIGxldCBtb2RpZmllcnMgPSBbXTtcbiAgICAgICAgICBsZXQgbW9kaWZpZXJleHBsYW5hdGlvbiA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5c1tpXSkge1xuICAgICAgICAgICAgICBjYXNlICdDdHJsJzogbW9kaWZpZXJzLnB1c2goJ2N0cmxLZXknKTsgbW9kaWZpZXJleHBsYW5hdGlvbi5wdXNoKCdDdHJsJyk7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdDbWQnOiBtb2RpZmllcnMucHVzaCgnbWV0YUtleScpOyBtb2RpZmllcmV4cGxhbmF0aW9uLnB1c2goJ+KMmCcpOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnQWx0JzogbW9kaWZpZXJzLnB1c2goJ2FsdEtleScpOyBtb2RpZmllcmV4cGxhbmF0aW9uLnB1c2goJ0FsdCcpOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnT3B0aW9uJzogbW9kaWZpZXJzLnB1c2goJ2FsdEtleScpOyBtb2RpZmllcmV4cGxhbmF0aW9uLnB1c2goJ+KMpScpOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnV2luJzogbW9kaWZpZXJzLnB1c2goJ21ldGFLZXknKTsgbW9kaWZpZXJleHBsYW5hdGlvbi5wdXNoKCfiip4gV2luJyk7IGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ1NoaWZ0JzogIG1vZGlmaWVycy5wdXNoKCdzaGlmdEtleScpOyBtb2RpZmllcmV4cGxhbmF0aW9uLnB1c2goJ+KHpycpOyBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlICdNb2QnOiAvLyBNb2QgaXMgYSBjb252ZW5pZW5jZSBtZWNoYW5pc206IEN0cmwgb24gV2luZG93cywgQ21kIG9uIE1hY1xuICAgICAgICAgICAgICAgIGlmIChpc01hY0xpa2UpIHttb2RpZmllcnMucHVzaCgnbWV0YUtleScpOyBtb2RpZmllcmV4cGxhbmF0aW9uLnB1c2goJ+KMmCcpO30gXG4gICAgICAgICAgICAgICAgZWxzZSB7bW9kaWZpZXJzLnB1c2goJ2N0cmxLZXknKTsgbW9kaWZpZXJleHBsYW5hdGlvbi5wdXNoKCdDdHJsJyk7fSBcbiAgICAgICAgICAgICAgICBicmVhazsgXG4gICAgICAgICAgICAgIGNhc2UgJ01vZDInOiBcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnYWx0S2V5Jyk7IFxuICAgICAgICAgICAgICAgIGlmIChpc01hY0xpa2UpIG1vZGlmaWVyZXhwbGFuYXRpb24ucHVzaCgn4oylJyk7XG4gICAgICAgICAgICAgICAgZWxzZSBtb2RpZmllcmV4cGxhbmF0aW9uLnB1c2goJ0FsdCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBNb2QyIGlzIGEgY29udmVuaWVuY2UgbWVjaGFuaXNtOiBBbHQgb24gV2luZG93cywgT3B0aW9uIG9uIE1hY1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBtb2RpZmllcmV4cGxhbmF0aW9uLnB1c2goa2V5c1trZXlzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICBsZXQgaG90a2V5ID0ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBtb2RpZmllcnM6IG1vZGlmaWVycyxcbiAgICAgICAgICAgIGNvbW1hbmQ6IGNvbW1hbmROYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgICAgLy8gVE9ETyBSaWdodCBub3cgdGhpcyBpcyB3b3JraW5nIG9ubHkgZm9yIGxldHRlcnMgYW5kIG51bWJlcnNcbiAgICAgICAgICBpZiAoa2V5c1trZXlzLmxlbmd0aCAtIDFdLm1hdGNoKC9eWzAtOV0kLykpIHtcbiAgICAgICAgICAgIGhvdGtleS5jb2RlID0gYERpZ2l0JHtrZXlzW2tleXMubGVuZ3RoIC0gMV19YDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG90a2V5LmtleSA9IGtleXNba2V5cy5sZW5ndGggLSAxXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmhvdGtleXMucHVzaChob3RrZXkpO1xuICAgICAgICAgIHRpdGxlID0gdGl0bGUuY29uY2F0KGAgKCR7bW9kaWZpZXJleHBsYW5hdGlvbi5qb2luKCcrJyl9KWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idXR0b25zW2NvbW1hbmROYW1lXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmJ1dHRvbnNbY29tbWFuZE5hbWVdLmNsYXNzTmFtZSA9ICdUTUNvbW1hbmRCdXR0b24gVE1Db21tYW5kQnV0dG9uX0Rpc2FibGVkJztcbiAgICAgICAgdGhpcy5idXR0b25zW2NvbW1hbmROYW1lXS50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmJ1dHRvbnNbY29tbWFuZE5hbWVdLmlubmVySFRNTCA9IHRoaXMuY29tbWFuZHNbY29tbWFuZE5hbWVdLmlubmVySFRNTDtcblxuICAgICAgICB0aGlzLmJ1dHRvbnNbY29tbWFuZE5hbWVdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGNvbW1hbmROYW1lLCBlKSk7XG4gICAgICAgIHRoaXMuZS5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbnNbY29tbWFuZE5hbWVdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmUpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soY29tbWFuZE5hbWUsIGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmVkaXRvcikgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbW1hbmRzW2NvbW1hbmROYW1lXS5hY3Rpb24gPT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKHRoaXMuc3RhdGVbY29tbWFuZE5hbWVdID09PSBmYWxzZSkgdGhpcy5lZGl0b3Iuc2V0Q29tbWFuZFN0YXRlKGNvbW1hbmROYW1lLCB0cnVlKTtcbiAgICAgIGVsc2UgdGhpcy5lZGl0b3Iuc2V0Q29tbWFuZFN0YXRlKGNvbW1hbmROYW1lLCBmYWxzZSk7ICBcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmNvbW1hbmRzW2NvbW1hbmROYW1lXS5hY3Rpb24gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLmNvbW1hbmRzW2NvbW1hbmROYW1lXS5hY3Rpb24odGhpcy5lZGl0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHNldEVkaXRvcihlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcbiAgICBlZGl0b3IuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uJywgKGUpID0+IHRoaXMuaGFuZGxlU2VsZWN0aW9uKGUpKTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5jb21tYW5kU3RhdGUpIHtcbiAgICAgIGZvciAobGV0IGNvbW1hbmQgaW4gdGhpcy5jb21tYW5kcykge1xuICAgICAgICBpZiAoZXZlbnQuY29tbWFuZFN0YXRlW2NvbW1hbmRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5jb21tYW5kc1tjb21tYW5kXS5lbmFibGVkKSB0aGlzLnN0YXRlW2NvbW1hbmRdID0gdGhpcy5jb21tYW5kc1tjb21tYW5kXS5lbmFibGVkKHRoaXMuZWRpdG9yLCBldmVudC5mb2N1cywgZXZlbnQuYW5jaG9yKTtcbiAgICAgICAgICBlbHNlIHRoaXMuc3RhdGVbY29tbWFuZF0gPSBldmVudC5mb2N1cyA/IGZhbHNlIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW2NvbW1hbmRdID0gZXZlbnQuY29tbWFuZFN0YXRlW2NvbW1hbmRdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGVbY29tbWFuZF0gPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmJ1dHRvbnNbY29tbWFuZF0uY2xhc3NOYW1lID0gJ1RNQ29tbWFuZEJ1dHRvbiBUTUNvbW1hbmRCdXR0b25fQWN0aXZlJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlW2NvbW1hbmRdID09PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuYnV0dG9uc1tjb21tYW5kXS5jbGFzc05hbWUgPSAnVE1Db21tYW5kQnV0dG9uIFRNQ29tbWFuZEJ1dHRvbl9JbmFjdGl2ZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5idXR0b25zW2NvbW1hbmRdLmNsYXNzTmFtZSA9ICAnVE1Db21tYW5kQnV0dG9uIFRNQ29tbWFuZEJ1dHRvbl9EaXNhYmxlZCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlkb3duKGV2ZW50KSB7XG4gICAgb3V0ZXI6IGZvciAobGV0IGhvdGtleSBvZiB0aGlzLmhvdGtleXMpIHtcbiAgICAgIGlmICgoaG90a2V5LmtleSAmJiBldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PSBob3RrZXkua2V5KSB8fCAoaG90a2V5LmNvZGUgJiYgZXZlbnQuY29kZSA9PSBob3RrZXkuY29kZSkpIHtcbiAgICAgICAgLy8gS2V5IG1hdGNoZXMgaG90a2V5LiBMb29rIGZvciBhbnkgcmVxdWlyZWQgbW9kaWZpZXIgdGhhdCB3YXNuJ3QgcHJlc3NlZFxuICAgICAgICBmb3IgKGxldCBtb2RpZmllciBvZiBob3RrZXkubW9kaWZpZXJzKSB7XG4gICAgICAgICAgaWYgKCFldmVudFttb2RpZmllcl0pIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV2ZXJ5dGhpbmcgbWF0Y2hlcy5cbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayhob3RrZXkuY29tbWFuZCwgZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1hbmRCYXI7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IHRoaXMgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3Rcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbnZhciBJU19IVE1MRERBID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhbGw6IGRvY3VtZW50QWxsLFxuICBJU19IVE1MRERBOiBJU19IVE1MRERBXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkb2N1bWVudEFsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1hbGwnKTtcblxudmFyIGRvY3VtZW50QWxsID0gJGRvY3VtZW50QWxsLmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG5tb2R1bGUuZXhwb3J0cyA9ICRkb2N1bWVudEFsbC5JU19IVE1MRERBID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgJGRvY3VtZW50QWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWFsbCcpO1xuXG52YXIgZG9jdW1lbnRBbGwgPSAkZG9jdW1lbnRBbGwuYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICRkb2N1bWVudEFsbC5JU19IVE1MRERBID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpIHx8IGl0ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pIDogZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiAnMy4zMy4wJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE0LTIwMjMgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My4zMy4wL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sWydmb3InXSB8fCBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzT3duKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpXG4gICAgICA/IFN5bWJvbFtuYW1lXVxuICAgICAgOiBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIG1ha2VCdWlsdEluKGRlc2NyaXB0b3IuZ2V0LCBuYW1lLCB7IGdldHRlcjogdHJ1ZSB9KTtcbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLnNldCwgbmFtZSwgeyBzZXR0ZXI6IHRydWUgfSk7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eS5mKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS5mbGFnc2AgZ2V0dGVyIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5oYXNJbmRpY2VzKSByZXN1bHQgKz0gJ2QnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQuZG90QWxsKSByZXN1bHQgKz0gJ3MnO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC51bmljb2RlU2V0cykgcmVzdWx0ICs9ICd2JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG52YXIgcmVnRXhwRmxhZ3MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gYmFiZWwtbWluaWZ5IGFuZCBDbG9zdXJlIENvbXBpbGVyIHRyYW5zcGlsZXMgUmVnRXhwKCcuJywgJ2QnKSAtPiAvLi9kIGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbnZhciBSZWdFeHAgPSBnbG9iYWwuUmVnRXhwO1xudmFyIFJlZ0V4cFByb3RvdHlwZSA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cbnZhciBGT1JDRUQgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBJTkRJQ0VTX1NVUFBPUlQgPSB0cnVlO1xuICB0cnkge1xuICAgIFJlZ0V4cCgnLicsICdkJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgSU5ESUNFU19TVVBQT1JUID0gZmFsc2U7XG4gIH1cblxuICB2YXIgTyA9IHt9O1xuICAvLyBtb2Rlcm4gVjggYnVnXG4gIHZhciBjYWxscyA9ICcnO1xuICB2YXIgZXhwZWN0ZWQgPSBJTkRJQ0VTX1NVUFBPUlQgPyAnZGdpbXN5JyA6ICdnaW1zeSc7XG5cbiAgdmFyIGFkZEdldHRlciA9IGZ1bmN0aW9uIChrZXksIGNocikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBrZXksIHsgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxscyArPSBjaHI7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IH0pO1xuICB9O1xuXG4gIHZhciBwYWlycyA9IHtcbiAgICBkb3RBbGw6ICdzJyxcbiAgICBnbG9iYWw6ICdnJyxcbiAgICBpZ25vcmVDYXNlOiAnaScsXG4gICAgbXVsdGlsaW5lOiAnbScsXG4gICAgc3RpY2t5OiAneSdcbiAgfTtcblxuICBpZiAoSU5ESUNFU19TVVBQT1JUKSBwYWlycy5oYXNJbmRpY2VzID0gJ2QnO1xuXG4gIGZvciAodmFyIGtleSBpbiBwYWlycykgYWRkR2V0dGVyKGtleSwgcGFpcnNba2V5XSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxuICB2YXIgcmVzdWx0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihSZWdFeHBQcm90b3R5cGUsICdmbGFncycpLmdldC5jYWxsKE8pO1xuXG4gIHJldHVybiByZXN1bHQgIT09IGV4cGVjdGVkIHx8IGNhbGxzICE9PSBleHBlY3RlZDtcbn0pO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS5mbGFnc2AgZ2V0dGVyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG5pZiAoRk9SQ0VEKSBkZWZpbmVCdWlsdEluQWNjZXNzb3IoUmVnRXhwUHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiByZWdFeHBGbGFnc1xufSk7XG4iLCIvLyBjb25zdCByZXBsYWNlbWVudHMgPSB7XG4vLyAgIEFTQ0lJUHVuY3R1YXRpb246ICchXCIjJCUmXFwnKCkqKyxcXFxcLS4vOjs8PT4/QFxcXFxbXFxcXF1eX2B7fH1+Jyxcbi8vICAgVHJpZ2dlckNoYXJzOiAnYF9cXCpcXFtcXF1cXChcXCknLFxuLy8gICBTY2hlbWU6IGBbQS1aYS16XVtBLVphLXowLTlcXCtcXC5cXC1dezEsMzF9YCxcbi8vICAgRW1haWw6IGBbYS16QS1aMC05LiEjJCUmJyorLz0/Xl9cXGB7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcXFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSpgLCAvLyBGcm9tIENvbW1vbk1hcmsgc3BlY1xuXG4vLyB9XG5jb25zdCByZXBsYWNlbWVudHMgPSB7XG4gIEFTQ0lJUHVuY3R1YXRpb246IC9bIVwiIyQlJicoKSorLFxcLS4vOjs8PT4/QFtcXF1eX2B7fH1+XFxcXF0vLCAgXG4gIE5vdFRyaWdnZXJDaGFyOiAvW15gXypbXFxdKCk8PiF+XS8sXG4gIFNjaGVtZTogL1tBLVphLXpdW0EtWmEtejAtOSsuLV17MSwzMX0vLFxuICBFbWFpbDogL1thLXpBLVowLTkuISMkJSYnKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqLywgLy8gRnJvbSBDb21tb25NYXJrIHNwZWNcbiAgSFRNTE9wZW5UYWc6IC88SFRNTFRhZ05hbWUoPzpIVE1MQXR0cmlidXRlKSpcXHMqXFwvPz4vLFxuICBIVE1MQ2xvc2VUYWc6IC88XFwvSFRNTFRhZ05hbWVcXHMqPi8sXG4gIEhUTUxUYWdOYW1lOiAvW0EtWmEtel1bQS1aYS16MC05LV0qLywgXG4gIEhUTUxDb21tZW50OiAvPCEtLSg/OltePi1dfCg/OltePi1dKD86W14tXXwtW14tXSkqW14tXSkpLS0+LyxcbiAgSFRNTFBJOiAvPFxcPyg/OnwufCg/OlteP118XFw/W14+XSkqKVxcPz4vLFxuICBIVE1MRGVjbGFyYXRpb246IC88IVtBLVpdK1xcc1tePl0qPi8sXG4gIEhUTUxDREFUQTogLzwhXFxbQ0RBVEFcXFsuKj9cXF1cXF0+LyxcbiAgSFRNTEF0dHJpYnV0ZTogL1xccytbQS1aYS16XzpdW0EtWmEtejAtOV8uOi1dKig/OkhUTUxBdHRWYWx1ZSk/LyxcbiAgSFRNTEF0dFZhbHVlOiAvXFxzKj1cXHMqKD86KD86J1teJ10qJyl8KD86XCJbXlwiXSpcIil8KD86W15cXHNcIic9PD5gXSspKS8sXG4gIEtub3duVGFnOiAvYWRkcmVzc3xhcnRpY2xlfGFzaWRlfGJhc2V8YmFzZWZvbnR8YmxvY2txdW90ZXxib2R5fGNhcHRpb258Y2VudGVyfGNvbHxjb2xncm91cHxkZHxkZXRhaWxzfGRpYWxvZ3xkaXJ8ZGl2fGRsfGR0fGZpZWxkc2V0fGZpZ2NhcHRpb258ZmlndXJlfGZvb3Rlcnxmb3JtfGZyYW1lfGZyYW1lc2V0fGgxfGgyfGgzfGg0fGg1fGg2fGhlYWR8aGVhZGVyfGhyfGh0bWx8aWZyYW1lfGxlZ2VuZHxsaXxsaW5rfG1haW58bWVudXxtZW51aXRlbXxuYXZ8bm9mcmFtZXN8b2x8b3B0Z3JvdXB8b3B0aW9ufHB8cGFyYW18c2VjdGlvbnxzb3VyY2V8c3VtbWFyeXx0YWJsZXx0Ym9keXx0ZHx0Zm9vdHx0aHx0aGVhZHx0aXRsZXx0cnx0cmFja3x1bC9cbn1cblxuLy8gRnJvbSBDb21tb25NYXJrLmpzLiBcbmNvbnN0IHB1bmN0dWF0aW9uTGVhZGluZyA9IG5ldyBSZWdFeHAoL14oPzpbIVwiIyQlJicoKSorLFxcLS4vOjs8PT4/QFtcXF1cXFxcXl9ge3x9flxceEExXFx4QTdcXHhBQlxceEI2XFx4QjdcXHhCQlxceEJGXFx1MDM3RVxcdTAzODdcXHUwNTVBLVxcdTA1NUZcXHUwNTg5XFx1MDU4QVxcdTA1QkVcXHUwNUMwXFx1MDVDM1xcdTA1QzZcXHUwNUYzXFx1MDVGNFxcdTA2MDlcXHUwNjBBXFx1MDYwQ1xcdTA2MERcXHUwNjFCXFx1MDYxRVxcdTA2MUZcXHUwNjZBLVxcdTA2NkRcXHUwNkQ0XFx1MDcwMC1cXHUwNzBEXFx1MDdGNy1cXHUwN0Y5XFx1MDgzMC1cXHUwODNFXFx1MDg1RVxcdTA5NjRcXHUwOTY1XFx1MDk3MFxcdTBBRjBcXHUwREY0XFx1MEU0RlxcdTBFNUFcXHUwRTVCXFx1MEYwNC1cXHUwRjEyXFx1MEYxNFxcdTBGM0EtXFx1MEYzRFxcdTBGODVcXHUwRkQwLVxcdTBGRDRcXHUwRkQ5XFx1MEZEQVxcdTEwNEEtXFx1MTA0RlxcdTEwRkJcXHUxMzYwLVxcdTEzNjhcXHUxNDAwXFx1MTY2RFxcdTE2NkVcXHUxNjlCXFx1MTY5Q1xcdTE2RUItXFx1MTZFRFxcdTE3MzVcXHUxNzM2XFx1MTdENC1cXHUxN0Q2XFx1MTdEOC1cXHUxN0RBXFx1MTgwMC1cXHUxODBBXFx1MTk0NFxcdTE5NDVcXHUxQTFFXFx1MUExRlxcdTFBQTAtXFx1MUFBNlxcdTFBQTgtXFx1MUFBRFxcdTFCNUEtXFx1MUI2MFxcdTFCRkMtXFx1MUJGRlxcdTFDM0ItXFx1MUMzRlxcdTFDN0VcXHUxQzdGXFx1MUNDMC1cXHUxQ0M3XFx1MUNEM1xcdTIwMTAtXFx1MjAyN1xcdTIwMzAtXFx1MjA0M1xcdTIwNDUtXFx1MjA1MVxcdTIwNTMtXFx1MjA1RVxcdTIwN0RcXHUyMDdFXFx1MjA4RFxcdTIwOEVcXHUyMzA4LVxcdTIzMEJcXHUyMzI5XFx1MjMyQVxcdTI3NjgtXFx1Mjc3NVxcdTI3QzVcXHUyN0M2XFx1MjdFNi1cXHUyN0VGXFx1Mjk4My1cXHUyOTk4XFx1MjlEOC1cXHUyOURCXFx1MjlGQ1xcdTI5RkRcXHUyQ0Y5LVxcdTJDRkNcXHUyQ0ZFXFx1MkNGRlxcdTJENzBcXHUyRTAwLVxcdTJFMkVcXHUyRTMwLVxcdTJFNDJcXHUzMDAxLVxcdTMwMDNcXHUzMDA4LVxcdTMwMTFcXHUzMDE0LVxcdTMwMUZcXHUzMDMwXFx1MzAzRFxcdTMwQTBcXHUzMEZCXFx1QTRGRVxcdUE0RkZcXHVBNjBELVxcdUE2MEZcXHVBNjczXFx1QTY3RVxcdUE2RjItXFx1QTZGN1xcdUE4NzQtXFx1QTg3N1xcdUE4Q0VcXHVBOENGXFx1QThGOC1cXHVBOEZBXFx1QThGQ1xcdUE5MkVcXHVBOTJGXFx1QTk1RlxcdUE5QzEtXFx1QTlDRFxcdUE5REVcXHVBOURGXFx1QUE1Qy1cXHVBQTVGXFx1QUFERVxcdUFBREZcXHVBQUYwXFx1QUFGMVxcdUFCRUJcXHVGRDNFXFx1RkQzRlxcdUZFMTAtXFx1RkUxOVxcdUZFMzAtXFx1RkU1MlxcdUZFNTQtXFx1RkU2MVxcdUZFNjNcXHVGRTY4XFx1RkU2QVxcdUZFNkJcXHVGRjAxLVxcdUZGMDNcXHVGRjA1LVxcdUZGMEFcXHVGRjBDLVxcdUZGMEZcXHVGRjFBXFx1RkYxQlxcdUZGMUZcXHVGRjIwXFx1RkYzQi1cXHVGRjNEXFx1RkYzRlxcdUZGNUJcXHVGRjVEXFx1RkY1Ri1cXHVGRjY1XXxcXHVEODAwW1xcdUREMDAtXFx1REQwMlxcdURGOUZcXHVERkQwXXxcXHVEODAxXFx1REQ2RnxcXHVEODAyW1xcdURDNTdcXHVERDFGXFx1REQzRlxcdURFNTAtXFx1REU1OFxcdURFN0ZcXHVERUYwLVxcdURFRjZcXHVERjM5LVxcdURGM0ZcXHVERjk5LVxcdURGOUNdfFxcdUQ4MDRbXFx1REM0Ny1cXHVEQzREXFx1RENCQlxcdURDQkNcXHVEQ0JFLVxcdURDQzFcXHVERDQwLVxcdURENDNcXHVERDc0XFx1REQ3NVxcdUREQzUtXFx1RERDOVxcdUREQ0RcXHVERERCXFx1RERERC1cXHVERERGXFx1REUzOC1cXHVERTNEXFx1REVBOV18XFx1RDgwNVtcXHVEQ0M2XFx1RERDMS1cXHVEREQ3XFx1REU0MS1cXHVERTQzXFx1REYzQy1cXHVERjNFXXxcXHVEODA5W1xcdURDNzAtXFx1REM3NF18XFx1RDgxQVtcXHVERTZFXFx1REU2RlxcdURFRjVcXHVERjM3LVxcdURGM0JcXHVERjQ0XXxcXHVEODJGXFx1REM5RnxcXHVEODM2W1xcdURFODctXFx1REU4Ql0pLyk7XG5cbmNvbnN0IHB1bmN0dWF0aW9uVHJhaWxpbmcgPSBuZXcgUmVnRXhwKC8oPzpbIVwiIyQlJicoKSorLFxcLS4vOjs8PT4/QFtcXF1cXFxcXl9ge3x9flxceEExXFx4QTdcXHhBQlxceEI2XFx4QjdcXHhCQlxceEJGXFx1MDM3RVxcdTAzODdcXHUwNTVBLVxcdTA1NUZcXHUwNTg5XFx1MDU4QVxcdTA1QkVcXHUwNUMwXFx1MDVDM1xcdTA1QzZcXHUwNUYzXFx1MDVGNFxcdTA2MDlcXHUwNjBBXFx1MDYwQ1xcdTA2MERcXHUwNjFCXFx1MDYxRVxcdTA2MUZcXHUwNjZBLVxcdTA2NkRcXHUwNkQ0XFx1MDcwMC1cXHUwNzBEXFx1MDdGNy1cXHUwN0Y5XFx1MDgzMC1cXHUwODNFXFx1MDg1RVxcdTA5NjRcXHUwOTY1XFx1MDk3MFxcdTBBRjBcXHUwREY0XFx1MEU0RlxcdTBFNUFcXHUwRTVCXFx1MEYwNC1cXHUwRjEyXFx1MEYxNFxcdTBGM0EtXFx1MEYzRFxcdTBGODVcXHUwRkQwLVxcdTBGRDRcXHUwRkQ5XFx1MEZEQVxcdTEwNEEtXFx1MTA0RlxcdTEwRkJcXHUxMzYwLVxcdTEzNjhcXHUxNDAwXFx1MTY2RFxcdTE2NkVcXHUxNjlCXFx1MTY5Q1xcdTE2RUItXFx1MTZFRFxcdTE3MzVcXHUxNzM2XFx1MTdENC1cXHUxN0Q2XFx1MTdEOC1cXHUxN0RBXFx1MTgwMC1cXHUxODBBXFx1MTk0NFxcdTE5NDVcXHUxQTFFXFx1MUExRlxcdTFBQTAtXFx1MUFBNlxcdTFBQTgtXFx1MUFBRFxcdTFCNUEtXFx1MUI2MFxcdTFCRkMtXFx1MUJGRlxcdTFDM0ItXFx1MUMzRlxcdTFDN0VcXHUxQzdGXFx1MUNDMC1cXHUxQ0M3XFx1MUNEM1xcdTIwMTAtXFx1MjAyN1xcdTIwMzAtXFx1MjA0M1xcdTIwNDUtXFx1MjA1MVxcdTIwNTMtXFx1MjA1RVxcdTIwN0RcXHUyMDdFXFx1MjA4RFxcdTIwOEVcXHUyMzA4LVxcdTIzMEJcXHUyMzI5XFx1MjMyQVxcdTI3NjgtXFx1Mjc3NVxcdTI3QzVcXHUyN0M2XFx1MjdFNi1cXHUyN0VGXFx1Mjk4My1cXHUyOTk4XFx1MjlEOC1cXHUyOURCXFx1MjlGQ1xcdTI5RkRcXHUyQ0Y5LVxcdTJDRkNcXHUyQ0ZFXFx1MkNGRlxcdTJENzBcXHUyRTAwLVxcdTJFMkVcXHUyRTMwLVxcdTJFNDJcXHUzMDAxLVxcdTMwMDNcXHUzMDA4LVxcdTMwMTFcXHUzMDE0LVxcdTMwMUZcXHUzMDMwXFx1MzAzRFxcdTMwQTBcXHUzMEZCXFx1QTRGRVxcdUE0RkZcXHVBNjBELVxcdUE2MEZcXHVBNjczXFx1QTY3RVxcdUE2RjItXFx1QTZGN1xcdUE4NzQtXFx1QTg3N1xcdUE4Q0VcXHVBOENGXFx1QThGOC1cXHVBOEZBXFx1QThGQ1xcdUE5MkVcXHVBOTJGXFx1QTk1RlxcdUE5QzEtXFx1QTlDRFxcdUE5REVcXHVBOURGXFx1QUE1Qy1cXHVBQTVGXFx1QUFERVxcdUFBREZcXHVBQUYwXFx1QUFGMVxcdUFCRUJcXHVGRDNFXFx1RkQzRlxcdUZFMTAtXFx1RkUxOVxcdUZFMzAtXFx1RkU1MlxcdUZFNTQtXFx1RkU2MVxcdUZFNjNcXHVGRTY4XFx1RkU2QVxcdUZFNkJcXHVGRjAxLVxcdUZGMDNcXHVGRjA1LVxcdUZGMEFcXHVGRjBDLVxcdUZGMEZcXHVGRjFBXFx1RkYxQlxcdUZGMUZcXHVGRjIwXFx1RkYzQi1cXHVGRjNEXFx1RkYzRlxcdUZGNUJcXHVGRjVEXFx1RkY1Ri1cXHVGRjY1XXxcXHVEODAwW1xcdUREMDAtXFx1REQwMlxcdURGOUZcXHVERkQwXXxcXHVEODAxXFx1REQ2RnxcXHVEODAyW1xcdURDNTdcXHVERDFGXFx1REQzRlxcdURFNTAtXFx1REU1OFxcdURFN0ZcXHVERUYwLVxcdURFRjZcXHVERjM5LVxcdURGM0ZcXHVERjk5LVxcdURGOUNdfFxcdUQ4MDRbXFx1REM0Ny1cXHVEQzREXFx1RENCQlxcdURDQkNcXHVEQ0JFLVxcdURDQzFcXHVERDQwLVxcdURENDNcXHVERDc0XFx1REQ3NVxcdUREQzUtXFx1RERDOVxcdUREQ0RcXHVERERCXFx1RERERC1cXHVERERGXFx1REUzOC1cXHVERTNEXFx1REVBOV18XFx1RDgwNVtcXHVEQ0M2XFx1RERDMS1cXHVEREQ3XFx1REU0MS1cXHVERTQzXFx1REYzQy1cXHVERjNFXXxcXHVEODA5W1xcdURDNzAtXFx1REM3NF18XFx1RDgxQVtcXHVERTZFXFx1REU2RlxcdURFRjVcXHVERjM3LVxcdURGM0JcXHVERjQ0XXxcXHVEODJGXFx1REM5RnxcXHVEODM2W1xcdURFODctXFx1REU4Ql0pJC8pO1xuXG4vLyBleHBvcnQgY29uc3QgaW5saW5lVHJpZ2dlckNoYXJzID0gbmV3IFJlZ0V4cChgWyR7cmVwbGFjZW1lbnRzLlRyaWdnZXJDaGFyc31dYCk7XG5cbi8qKlxuICogVGhpcyBpcyBDb21tb25NYXJrJ3MgYmxvY2sgZ3JhbW1hciwgYnV0IHdlJ3JlIGlnbm9yaW5nIG5lc3RlZCBibG9ja3MgaGVyZS4gIFxuICovIFxuY29uc3QgbGluZUdyYW1tYXIgPSB7IFxuICBUTUgxOiB7IFxuICAgIHJlZ2V4cDogL14oIHswLDN9I1xccykoLio/KSgoPzpcXHMrIytcXHMqKT8pJC8sIFxuICAgIHJlcGxhY2VtZW50OiAnPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrX1RNSDFcIj4kMTwvc3Bhbj4kJDI8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1IMVwiPiQzPC9zcGFuPidcbiAgfSxcbiAgVE1IMjogeyBcbiAgICByZWdleHA6IC9eKCB7MCwzfSMjXFxzKSguKj8pKCg/OlxccysjK1xccyopPykkLywgXG4gICAgcmVwbGFjZW1lbnQ6ICc8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1IMlwiPiQxPC9zcGFuPiQkMjxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUgyXCI+JDM8L3NwYW4+J1xuICB9LFxuICBUTUgzOiB7IFxuICAgIHJlZ2V4cDogL14oIHswLDN9IyMjXFxzKSguKj8pKCg/OlxccysjK1xccyopPykkLywgXG4gICAgcmVwbGFjZW1lbnQ6ICc8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1IM1wiPiQxPC9zcGFuPiQkMjxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUgzXCI+JDM8L3NwYW4+J1xuICB9LFxuICBUTUg0OiB7IFxuICAgIHJlZ2V4cDogL14oIHswLDN9IyMjI1xccykoLio/KSgoPzpcXHMrIytcXHMqKT8pJC8sIFxuICAgIHJlcGxhY2VtZW50OiAnPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrX1RNSDRcIj4kMTwvc3Bhbj4kJDI8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1INFwiPiQzPC9zcGFuPidcbiAgfSxcbiAgVE1INTogeyBcbiAgICByZWdleHA6IC9eKCB7MCwzfSMjIyMjXFxzKSguKj8pKCg/OlxccysjK1xccyopPykkLywgXG4gICAgcmVwbGFjZW1lbnQ6ICc8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1INVwiPiQxPC9zcGFuPiQkMjxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUg1XCI+JDM8L3NwYW4+J1xuICB9LFxuICBUTUg2OiB7IFxuICAgIHJlZ2V4cDogL14oIHswLDN9IyMjIyMjXFxzKSguKj8pKCg/OlxccysjK1xccyopPykkLywgXG4gICAgcmVwbGFjZW1lbnQ6ICc8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1INlwiPiQxPC9zcGFuPiQkMjxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUg2XCI+JDM8L3NwYW4+J1xuICB9LFxuICBUTUJsb2NrcXVvdGU6IHsgXG4gICAgcmVnZXhwOiAvXiggezAsM30+WyBdPykoLiopJC8sIFxuICAgIHJlcGxhY2VtZW50OiAnPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrX1RNQmxvY2txdW90ZVwiPiQxPC9zcGFuPiQkMidcbiAgfSxcbiAgVE1Db2RlRmVuY2VCYWNrdGlja09wZW46IHsgXG4gICAgcmVnZXhwOiAvXiggezAsM30oPzxzZXE+YGBgYCopXFxzKikoW15gXSo/KShcXHMqKSQvLCBcbiAgICByZXBsYWNlbWVudDogJzxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUNvZGVGZW5jZUJhY2t0aWNrXCI+JDE8L3NwYW4+PHNwYW4gY2xhc3M9XCJUTUluZm9TdHJpbmdcIj4kMzwvc3Bhbj4kNCdcbiAgfSxcbiAgVE1Db2RlRmVuY2VUaWxkZU9wZW46IHsgXG4gICAgcmVnZXhwOiAvXiggezAsM30oPzxzZXE+fn5+fiopXFxzKikoLio/KShcXHMqKSQvLCBcbiAgICByZXBsYWNlbWVudDogJzxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUNvZGVGZW5jZVRpbGRlXCI+JDE8L3NwYW4+PHNwYW4gY2xhc3M9XCJUTUluZm9TdHJpbmdcIj4kMzwvc3Bhbj4kNCdcbiAgfSxcbiAgVE1Db2RlRmVuY2VCYWNrdGlja0Nsb3NlOiB7IFxuICAgIHJlZ2V4cDogL14oIHswLDN9KD88c2VxPmBgYGAqKSkoXFxzKikkLywgXG4gICAgcmVwbGFjZW1lbnQ6ICc8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1Db2RlRmVuY2VCYWNrdGlja1wiPiQxPC9zcGFuPiQzJ1xuICB9LFxuICBUTUNvZGVGZW5jZVRpbGRlQ2xvc2U6IHsgXG4gICAgcmVnZXhwOiAvXiggezAsM30oPzxzZXE+fn5+fiopKShcXHMqKSQvLCBcbiAgICByZXBsYWNlbWVudDogJzxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUNvZGVGZW5jZVRpbGRlXCI+JDE8L3NwYW4+JDMnXG4gIH0sXG4gIFRNQmxhbmtMaW5lOiB7IFxuICAgIHJlZ2V4cDogL14oWyBcXHRdKikkLywgXG4gICAgcmVwbGFjZW1lbnQ6ICckMCdcbiAgfSxcbiAgVE1TZXRleHRIMU1hcmtlcjogeyBcbiAgICByZWdleHA6IC9eIHswLDN9PStcXHMqJC8sIFxuICAgIHJlcGxhY2VtZW50OiAnPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrX1RNU2V0ZXh0SDFNYXJrZXJcIj4kMDwvc3Bhbj4nXG4gIH0sXG4gIFRNU2V0ZXh0SDJNYXJrZXI6IHsgXG4gICAgcmVnZXhwOiAvXiB7MCwzfS0rXFxzKiQvLCBcbiAgICByZXBsYWNlbWVudDogJzxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTVNldGV4dEgxTWFya2VyXCI+JDA8L3NwYW4+J1xuICB9LFxuICBUTUhSOiB7IFxuICAgIHJlZ2V4cDogL14oIHswLDN9KFxcKlsgXFx0XSpcXCpbIFxcdF0qXFwqWyBcXHQqXSopfCgtWyBcXHRdKi1bIFxcdF0qLVsgXFx0LV0qKXwoX1sgXFx0XSpfWyBcXHRdKl9bIFxcdF9dKikpJC8sIFxuICAgIHJlcGxhY2VtZW50OiAnPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrX1RNSFJcIj4kMDwvc3Bhbj4nXG4gIH0sXG4gIFRNVUw6IHsgXG4gICAgcmVnZXhwOiAvXiggezAsM31bKyotXSB7MSw0fSkoLiopJC8sIFxuICAgIHJlcGxhY2VtZW50OiAnPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrX1RNVUxcIj4kMTwvc3Bhbj4kJDInXG4gIH0sXG4gIFRNT0w6IHsgXG4gICAgcmVnZXhwOiAvXiggezAsM31cXGR7MSw5fVsuKV0gezEsNH0pKC4qKSQvLCBcbiAgICByZXBsYWNlbWVudDogJzxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTU9MXCI+JDE8L3NwYW4+JCQyJ1xuICB9LFxuICAvLyBUT0RPOiBUaGlzIGlzIGN1cnJlbnRseSBwcmV2ZW50aW5nIHN1Ymxpc3RzIChhbmQgYW55IGNvbnRlbnQgd2l0aGluIGxpc3QgaXRlbXMsIHJlYWxseSkgZnJvbSB3b3JraW5nXG4gIFRNSW5kZW50ZWRDb2RlOiB7IFxuICAgIHJlZ2V4cDogL14oIHs0fXxcXHQpKC4qKSQvLCBcbiAgICByZXBsYWNlbWVudDogJzxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUluZGVudGVkQ29kZVwiPiQxPC9zcGFuPiQyJ1xuICB9LFxuICBUTUxpbmtSZWZlcmVuY2VEZWZpbml0aW9uOiB7XG4gICAgLy8gVE9ETzogTGluayBkZXN0aW5hdGlvbiBjYW4ndCBpbmNsdWRlIHVuYmFsYW5jZWQgcGFyYW50aGVzZXMsIGJ1dCB3ZSBqdXN0IGlnbm9yZSB0aGF0IGhlcmUgXG4gICAgcmVnZXhwOiAvXiggezAsM31cXFtcXHMqKShbXlxcc1xcXV0oPzpbXlxcXV18XFxcXFxcXSkqPykoXFxzKlxcXTpcXHMqKSgoPzpbXlxcczw+XSspfCg/OjwoPzpbXjw+XFxcXF18XFxcXC4pKj4pKT8oXFxzKikoKD86XFwoKD86W14oKVxcXFxdfFxcXFwuKSpcXCkpfCg/OlwiKD86W15cIlxcXFxdfFxcXFwuKSpcIil8KD86Jyg/OlteJ1xcXFxdfFxcXFwuKSonKSk/KFxccyopJC8sIFxuICAgIHJlcGxhY2VtZW50OiAnPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrX1RNTGlua1JlZmVyZW5jZURlZmluaXRpb25cIj4kMTwvc3Bhbj48c3BhbiBjbGFzcz1cIlRNTGlua0xhYmVsIFRNTGlua0xhYmVsX0RlZmluaXRpb25cIj4kMjwvc3Bhbj48c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1MaW5rUmVmZXJlbmNlRGVmaW5pdGlvblwiPiQzPC9zcGFuPjxzcGFuIGNsYXNzPVwiVE1MaW5rRGVzdGluYXRpb25cIj4kNDwvc3Bhbj4kNTxzcGFuIGNsYXNzPVwiVE1MaW5rVGl0bGVcIj4kNjwvc3Bhbj4kNycsXG4gICAgbGFiZWxQbGFjZWhvbGRlcjogMiwgLy8gdGhpcyBkZWZpbmVzIHdoaWNoIHBsYWNlaG9sZGVyIGluIHRoZSBhYm92ZSByZWdleCBpcyB0aGUgbGluayBcImxhYmVsXCJcbiAgfSxcbn07XG5cbi8qKlxuICogSFRNTCBibG9ja3MgaGF2ZSBtdWx0aXBsZSBkaWZmZXJlbnQgY2xhc3NlcyBvZiBvcGVuZXIgYW5kIGNsb3Nlci4gVGhpcyBhcnJheSBkZWZpbmVzIGFsbCB0aGUgY2FzZXNcbiAqL1xudmFyIGh0bWxCbG9ja0dyYW1tYXIgPSBbXG4gIHsgc3RhcnQ6IC9eIHswLDN9PCg/OnNjcmlwdHxwcmV8c3R5bGUpKD86XFxzfD58JCkvaSwgZW5kOiAvKD86PFxcL3NjcmlwdD58PFxcL3ByZT58PFxcL3N0eWxlPikvaSwgcGFyYUludGVycnVwdDogdHJ1ZSB9LFxuICB7IHN0YXJ0OiAvXiB7MCwzfTwhLS0vLCBlbmQ6IC8tLT4vLCBwYXJhSW50ZXJydXB0OiB0cnVlIH0sXG4gIHsgc3RhcnQ6IC9eIHswLDN9PFxcPy8sIGVuZDogL1xcPz4vLCBwYXJhSW50ZXJydXB0OiB0cnVlIH0sXG4gIHsgc3RhcnQ6IC9eIHswLDN9PCFbQS1aXS8sIGVuZDogLz4vLCBwYXJhSW50ZXJydXB0IDogdHJ1ZX0sXG4gIHsgc3RhcnQ6IC9eIHswLDN9PCFcXFtDREFUQVxcWy8sIGVuZDogL1xcXVxcXT4vLCBwYXJhSW50ZXJydXB0IDogdHJ1ZX0sXG4gIHsgc3RhcnQ6IC9eIHswLDN9KD86PHw8XFwvKSg/Oktub3duVGFnKSg/Olxcc3w+fFxcLz58JCkvaSwgZW5kOiBmYWxzZSwgcGFyYUludGVycnVwdDogdHJ1ZX0sXG4gIHsgc3RhcnQ6IC9eIHswLDN9KD86SFRNTE9wZW5UYWd8SFRNTENsb3NlVGFnKVxccyokLywgZW5kOiBmYWxzZSwgcGFyYUludGVycnVwdDogZmFsc2V9LFxuXTtcblxuLyoqXG4gKiBTdHJ1Y3R1cmUgb2YgdGhlIG9iamVjdDpcbiAqIFRvcCBsZXZlbCBlbnRyaWVzIGFyZSBydWxlcywgZWFjaCBjb25zaXN0aW5nIG9mIGEgcmVndWxhciBleHByZXNzaW9ucyAoaW4gc3RyaW5nIGZvcm1hdCkgYXMgd2VsbCBhcyBhIHJlcGxhY2VtZW50LlxuICogSW4gdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIHJlcGxhY2VtZW50cyBmcm9tIHRoZSBvYmplY3QgJ3JlcGxhY2VtZW50cycgd2lsbCBiZSBwcm9jZXNzZWQgYmVmb3JlIGNvbXBpbGluZyBpbnRvIHRoZSBwcm9wZXJ0eSByZWdleHAuXG4gKi9cbnZhciBpbmxpbmVHcmFtbWFyID0ge1xuICBlc2NhcGUgOiB7XG4gICAgcmVnZXhwOiAvXlxcXFwoQVNDSUlQdW5jdHVhdGlvbikvLFxuICAgIHJlcGxhY2VtZW50IDogJzxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUVzY2FwZVwiPlxcXFw8L3NwYW4+JDEnXG4gIH0sXG4gIGNvZGUgOiB7XG4gICAgcmVnZXhwOiAvXihgKykoKD86W15gXSl8KD86W15gXS4qP1teYF0pKShcXDEpLyxcbiAgICByZXBsYWNlbWVudCA6ICc8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1Db2RlXCI+JDE8L3NwYW4+PGNvZGUgY2xhc3M9XCJUTUNvZGVcIj4kMjwvY29kZT48c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfVE1Db2RlXCI+JDM8L3NwYW4+JyBcbiAgfSxcbiAgYXV0b2xpbmsgOiB7XG4gICAgcmVnZXhwOiAvXjwoKD86U2NoZW1lOlteXFxzPD5dKil8KD86RW1haWwpKT4vLFxuICAgIHJlcGxhY2VtZW50OiAnPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrX1RNQXV0b2xpbmtcIj4mbHQ7PC9zcGFuPjxzcGFuIGNsYXNzPVwiVE1BdXRvbGlua1wiPiQxPC9zcGFuPjxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya19UTUF1dG9saW5rXCI+Jmd0Ozwvc3Bhbj4nXG4gIH0sXG4gIGh0bWwgOiB7XG4gICAgcmVnZXhwOiAvXigoPzpIVE1MT3BlblRhZyl8KD86SFRNTENsb3NlVGFnKXwoPzpIVE1MQ29tbWVudCl8KD86SFRNTFBJKXwoPzpIVE1MRGVjbGFyYXRpb24pfCg/OkhUTUxDREFUQSkpLyxcbiAgICByZXBsYWNlbWVudDogJzxzcGFuIGNsYXNzPVwiVE1IVE1MXCI+JDE8L3NwYW4+JyxcbiAgfSxcbiAgbGlua09wZW4gOiB7XG4gICAgcmVnZXhwOiAvXlxcWy8sXG4gICAgcmVwbGFjZW1lbnQ6ICcnXG4gIH0sXG4gIGltYWdlT3BlbiA6IHtcbiAgICByZWdleHA6IC9eIVxcWy8sXG4gICAgcmVwbGFjZW1lbnQgOiAnJ1xuICB9LFxuICBsaW5rTGFiZWwgOiB7XG4gICAgcmVnZXhwOiAvXihcXFtcXHMqKShbXlxcXV0qPykoXFxzKlxcXSkvLFxuICAgIHJlcGxhY2VtZW50OiAnJyxcbiAgICBsYWJlbFBsYWNlaG9sZGVyOiAyXG4gIH0sXG4gIGRlZmF1bHQgOiB7XG4gICAgcmVnZXhwOiAvXigufCg/Ok5vdFRyaWdnZXJDaGFyKykpLyxcbiAgICByZXBsYWNlbWVudDogJyQxJ1xuICB9XG59O1xuXG4vLyBQcm9jZXNzIHJlcGxhY2VtZW50cyBpbiByZWdleHBzXG5jb25zdCByZXBsYWNlbWVudFJlZ2V4cCA9IG5ldyBSZWdFeHAoT2JqZWN0LmtleXMocmVwbGFjZW1lbnRzKS5qb2luKCd8JykpO1xuXG4vLyBJbmxpbmVcbmNvbnN0IGlubGluZVJ1bGVzID1bLi4uT2JqZWN0LmtleXMoaW5saW5lR3JhbW1hcildO1xuZm9yIChsZXQgcnVsZSBvZiBpbmxpbmVSdWxlcykge1xuICBsZXQgcmUgPSBpbmxpbmVHcmFtbWFyW3J1bGVdLnJlZ2V4cC5zb3VyY2U7XG4gIC8vIFJlcGxhY2Ugd2hpbGUgdGhlcmUgaXMgc29tZXRoaW5nIHRvIHJlcGxhY2UuIFRoaXMgbWVhbnMgaXQgYWxzbyB3b3JrcyBvdmVyIG11bHRpcGxlIGxldmVscyAocmVwbGFjZW1lbnRzIGNvbnRhaW5pbmcgcmVwbGFjZW1lbnRzKVxuICB3aGlsZSAocmUubWF0Y2gocmVwbGFjZW1lbnRSZWdleHApKSB7XG4gICAgcmUgPSByZS5yZXBsYWNlKHJlcGxhY2VtZW50UmVnZXhwLCAoc3RyaW5nKSA9PiB7IHJldHVybiByZXBsYWNlbWVudHNbc3RyaW5nXS5zb3VyY2U7IH0pO1xuICB9XG4gIGlubGluZUdyYW1tYXJbcnVsZV0ucmVnZXhwID0gbmV3IFJlZ0V4cChyZSwgaW5saW5lR3JhbW1hcltydWxlXS5yZWdleHAuZmxhZ3MpO1xufVxuXG4vLyBIVE1MIEJsb2NrIChvbmx5IG9wZW5pbmcgcnVsZSBpcyBwcm9jZXNzZWQgY3VycmVudGx5KVxuZm9yIChsZXQgcnVsZSBvZiBodG1sQmxvY2tHcmFtbWFyKSB7XG4gIGxldCByZSA9IHJ1bGUuc3RhcnQuc291cmNlO1xuICAvLyBSZXBsYWNlIHdoaWxlIHRoZXJlIGlzIHNvbWV0aGluZyB0byByZXBsYWNlLiBUaGlzIG1lYW5zIGl0IGFsc28gd29ya3Mgb3ZlciBtdWx0aXBsZSBsZXZlbHMgKHJlcGxhY2VtZW50cyBjb250YWluaW5nIHJlcGxhY2VtZW50cylcbiAgd2hpbGUgKHJlLm1hdGNoKHJlcGxhY2VtZW50UmVnZXhwKSkge1xuICAgIHJlID0gcmUucmVwbGFjZShyZXBsYWNlbWVudFJlZ2V4cCwgKHN0cmluZykgPT4geyByZXR1cm4gcmVwbGFjZW1lbnRzW3N0cmluZ10uc291cmNlOyB9KTtcbiAgfVxuICBydWxlLnN0YXJ0ID0gbmV3IFJlZ0V4cChyZSwgcnVsZS5zdGFydC5mbGFncyk7XG59XG5cbi8qKlxuICogRXNjYXBlcyBIVE1MIHNwZWNpYWwgY2hhcmFjdGVycyAoPCwgPiwgYW5kICYpIGluIHRoZSBzdHJpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSByYXcgc3RyaW5nIHRvIGJlIGVzY2FwZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzdHJpbmcsIHJlYWR5IHRvIGJlIHVzZWQgaW4gSFRNTFxuICovXG5mdW5jdGlvbiBodG1sZXNjYXBlKHN0cmluZykge1xuICByZXR1cm4gKHN0cmluZyA/IHN0cmluZyA6ICcnKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG4vKipcbiAqIENvbnRhaW5zIHRoZSBjb21tYW5kcyB0aGF0IGNhbiBiZSBzZW50IHRvIHRoZSBlZGl0b3IuIENvbnRhaW5zIG9iamVjdHMgd2l0aCBhIG5hbWUgcmVwcmVzZW50aW5nIHRoZSBuYW1lIG9mIHRoZSBjb21tYW5kLlxuICogRWFjaCBvZiB0aGUgb2JqZWN0cyBjb250YWlucyB0aGUgZm9sbG93aW5nIGtleXM6XG4gKiBcbiAqICAgLSB0eXBlOiBDYW4gYmUgZWl0aGVyIGlubGluZSAoZm9yIGlubGluZSBmb3JtYXR0aW5nKSBvciBsaW5lIChmb3IgYmxvY2sgLyBsaW5lIGZvcm1hdHRpbmcpLlxuICogICAtIGNsYXNzTmFtZTogVXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgY29tbWFuZCBpcyBhY3RpdmUgYXQgYSBnaXZlbiBwb3NpdGlvbi4gXG4gKiAgICAgRm9yIGxpbmUgZm9ybWF0dGluZywgdGhpcyBsb29rcyBhdCB0aGUgY2xhc3Mgb2YgdGhlIGxpbmUgZWxlbWVudC4gRm9yIGlubGluZSBlbGVtZW50cywgdHJpZXMgdG8gZmluZCBhbiBlbmNsb3NpbmcgZWxlbWVudCB3aXRoIHRoYXQgY2xhc3MuXG4gKiAgIC0gc2V0IC8gdW5zZXQ6IENvbnRhaW4gaW5zdHJ1Y3Rpb25zIGhvdyB0byBzZXQgYW5kIHVuc2V0IHRoZSBjb21tYW5kLiBGb3IgbGluZSB0eXBlIGNvbW1hbmRzLCBib3RoIGNvbnNpc3Qgb2YgYSBwYXR0ZXJuIGFuZCByZXBsYWNlbWVudCB0aGF0IFxuICogICAgIHdpbGwgYmUgYXBwbGllZCB0byBlYWNoIGxpbmUgKHVzaW5nIFN0cmluZy5yZXBsYWNlKS4gRm9yIGlubGluZSB0eXBlIGNvbW1hbmRzLCB0aGUgc2V0IG9iamVjdCBjb250YWlucyBhIHByZSBhbmQgcG9zdCBzdHJpbmcgd2hpY2ggd2lsbFxuICogICAgIGJlIGluc2VydGVkIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIHNlbGVjdGlvbi4gVGhlIHVuc2V0IG9iamVjdCBjb250YWlucyBhIHByZVBhdHRlcm4gYW5kIGEgcG9zdFBhdHRlcm4uIEJvdGggc2hvdWxkIGJlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgYW5kIFxuICogICAgIHRoZXkgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3J0aW9uIG9mIHRoZSBsaW5lIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIHNlbGVjdGlvbiAodXNpbmcgU3RyaW5nLnJlcGxhY2UsIHdpdGggYW4gZW1wdHkgcmVwbGFjZW1lbnQgc3RyaW5nKS5cbiAqL1xuY29uc3QgY29tbWFuZHMgPSB7XG4gIC8vIFJlcGxhY2VtZW50cyBmb3IgdW5zZXQgZm9yIGlubGluZSBjb21tYW5kcyBhcmUgJycgYnkgZGVmYXVsdFxuICBib2xkOiB7XG4gICAgdHlwZTogJ2lubGluZScsIFxuICAgIGNsYXNzTmFtZTogJ1RNU3Ryb25nJywgXG4gICAgc2V0OiB7cHJlOiAnKionLCBwb3N0OiAnKionfSwgXG4gICAgdW5zZXQ6IHtwcmVQYXR0ZXJuOiAvKD86XFwqXFwqfF9fKSQvLCBwb3N0UGF0dGVybjogL14oPzpcXCpcXCp8X18pL31cbiAgfSwgXG4gIGl0YWxpYzoge1xuICAgIHR5cGU6ICdpbmxpbmUnLCBcbiAgICBjbGFzc05hbWU6ICdUTUVtJywgXG4gICAgc2V0OiB7cHJlOiAnX18nLCBwb3N0OiAnX18nfSwgXG4gICAgdW5zZXQ6IHtwcmVQYXR0ZXJuOiAvX18kLywgcG9zdFBhdHRlcm46IC9eX18vfVxuICB9LFxuICBjb2RlOiB7XG4gICAgdHlwZTogJ2lubGluZScsIFxuICAgIGNsYXNzTmFtZTogJ1RNQ29kZScsIFxuICAgIHNldDoge3ByZTogJ2AnLCBwb3N0OiAnYCd9LCBcbiAgICB1bnNldDoge3ByZVBhdHRlcm46IC9gKyQvLCBwb3N0UGF0dGVybjogL15gKy99IC8vIEZJWE1FIHRoaXMgZG9lc24ndCBlbnN1cmUgYmFsYW5jZWQgYmFja3RpY2tzIHJpZ2h0IG5vd1xuICB9LCBcbiAgc3RyaWtldGhyb3VnaDoge1xuICAgIHR5cGU6ICdpbmxpbmUnLCBcbiAgICBjbGFzc05hbWU6ICdUTVN0cmlrZXRocm91Z2gnLCBcbiAgICBzZXQ6IHtwcmU6ICd+ficsIHBvc3Q6ICd+fid9LCBcbiAgICB1bnNldDoge3ByZVBhdHRlcm46L35+JC8sIHBvc3RQYXR0ZXJuOiAvXn5+LyB9XG4gIH0sXG4gIGgxOiB7XG4gICAgdHlwZTogJ2xpbmUnLCBcbiAgICBjbGFzc05hbWU6ICdUTUgxJywgXG4gICAgc2V0OiB7cGF0dGVybjogL14oIHswLDN9KD86KD86Iyt8WzAtOV17MSw5fVspLl18Wz5cXC0qK10pXFxzKyk/KSguKikkLywgcmVwbGFjZW1lbnQ6ICcjICQyJ30sIFxuICAgIHVuc2V0OiB7cGF0dGVybjogL14oIHswLDN9I1xccyspKC4qPykoKD86XFxzKyMrXFxzKik/KSQvLCByZXBsYWNlbWVudDogJyQyJ31cbiAgfSxcbiAgaDI6IHtcbiAgICB0eXBlOiAnbGluZScsIFxuICAgIGNsYXNzTmFtZTogJ1RNSDInLCBcbiAgICBzZXQ6IHtwYXR0ZXJuOiAvXiggezAsM30oPzooPzojK3xbMC05XXsxLDl9WykuXXxbPlxcLSorXSlcXHMrKT8pKC4qKSQvLCByZXBsYWNlbWVudDogJyMjICQyJ30sIFxuICAgIHVuc2V0OiB7cGF0dGVybjogL14oIHswLDN9IyNcXHMrKSguKj8pKCg/OlxccysjK1xccyopPykkLywgcmVwbGFjZW1lbnQ6ICckMid9XG4gIH0sXG4gIGgzOiB7XG4gICAgdHlwZTogJ2xpbmUnLCBcbiAgICBjbGFzc05hbWU6ICdUTUgzJywgXG4gICAgc2V0OiB7cGF0dGVybjogL14oIHswLDN9KD86KD86Iyt8WzAtOV17MSw5fVspLl18Wz5cXC0qK10pXFxzKyk/KSguKikkLywgcmVwbGFjZW1lbnQ6ICcjIyMgJDInfSwgXG4gICAgdW5zZXQ6IHtwYXR0ZXJuOiAvXiggezAsM30jIyNcXHMrKSguKj8pKCg/OlxccysjK1xccyopPykkLywgcmVwbGFjZW1lbnQ6ICckMid9XG4gIH0sXG4gIGg0OiB7XG4gICAgdHlwZTogJ2xpbmUnLCBcbiAgICBjbGFzc05hbWU6ICdUTUg0JywgXG4gICAgc2V0OiB7cGF0dGVybjogL14oIHswLDN9KD86KD86Iyt8WzAtOV17MSw5fVspLl18Wz5cXC0qK10pXFxzKyk/KSguKikkLywgcmVwbGFjZW1lbnQ6ICcjIyMjICQyJ30sIFxuICAgIHVuc2V0OiB7cGF0dGVybjogL14oIHswLDN9IyMjI1xccyspKC4qPykoKD86XFxzKyMrXFxzKik/KSQvLCByZXBsYWNlbWVudDogJyQyJ31cbiAgfSxcbiAgaDU6IHtcbiAgICB0eXBlOiAnbGluZScsIFxuICAgIGNsYXNzTmFtZTogJ1RNSDUnLCBcbiAgICBzZXQ6IHtwYXR0ZXJuOiAvXiggezAsM30oPzooPzojK3xbMC05XXsxLDl9WykuXXxbPlxcLSorXSlcXHMrKT8pKC4qKSQvLCByZXBsYWNlbWVudDogJyMjIyMjICQyJ30sIFxuICAgIHVuc2V0OiB7cGF0dGVybjogL14oIHswLDN9IyMjIyNcXHMrKSguKj8pKCg/OlxccysjK1xccyopPykkLywgcmVwbGFjZW1lbnQ6ICckMid9XG4gIH0sXG4gIGg2OiB7XG4gICAgdHlwZTogJ2xpbmUnLCBcbiAgICBjbGFzc05hbWU6ICdUTUg2JywgXG4gICAgc2V0OiB7cGF0dGVybjogL14oIHswLDN9KD86KD86Iyt8WzAtOV17MSw5fVspLl18Wz5cXC0qK10pXFxzKyk/KSguKikkLywgcmVwbGFjZW1lbnQ6ICcjIyMjIyMgJDInfSwgXG4gICAgdW5zZXQ6IHtwYXR0ZXJuOiAvXiggezAsM30jIyMjIyNcXHMrKSguKj8pKCg/OlxccysjK1xccyopPykkLywgcmVwbGFjZW1lbnQ6ICckMid9XG4gIH0sXG4gIHVsOiB7XG4gICAgdHlwZTogJ2xpbmUnLCBcbiAgICBjbGFzc05hbWU6ICdUTVVMJywgXG4gICAgc2V0OiB7cGF0dGVybjogL14oIHswLDN9KD86KD86Iyt8WzAtOV17MSw5fVspLl18Wz5cXC0qK10pXFxzKyk/KSguKikkLywgcmVwbGFjZW1lbnQ6ICctICQyJ30sIFxuICAgIHVuc2V0OiB7cGF0dGVybjogL14oIHswLDN9WysqLV0gezEsNH0pKC4qKSQvLCByZXBsYWNlbWVudDogJyQyJ31cbiAgfSxcbiAgb2w6IHtcbiAgICB0eXBlOiAnbGluZScsIFxuICAgIGNsYXNzTmFtZTogJ1RNT0wnLCBcbiAgICBzZXQ6IHtwYXR0ZXJuOiAvXiggezAsM30oPzooPzojK3xbMC05XXsxLDl9WykuXXxbPlxcLSorXSlcXHMrKT8pKC4qKSQvLCByZXBsYWNlbWVudDogJyQjLiAkMid9LCBcbiAgICB1bnNldDoge3BhdHRlcm46IC9eKCB7MCwzfVxcZHsxLDl9Wy4pXSB7MSw0fSkoLiopJC8sIHJlcGxhY2VtZW50OiAnJDInfVxuICB9LCBcbiAgYmxvY2txdW90ZToge1xuICAgIHR5cGU6ICdsaW5lJywgXG4gICAgY2xhc3NOYW1lOiAnVE1CbG9ja3F1b3RlJywgXG4gICAgc2V0OiB7cGF0dGVybjogL14oIHswLDN9KD86KD86Iyt8WzAtOV17MSw5fVspLl18Wz5cXC0qK10pXFxzKyk/KSguKikkLywgcmVwbGFjZW1lbnQ6ICc+ICQyJ30sIFxuICAgIHVuc2V0OiB7cGF0dGVybjogL14oIHswLDN9PlsgXT8pKC4qKSQvLCByZXBsYWNlbWVudDogJyQyJ31cbiAgfSxcbn07XG5cbmV4cG9ydCB7IGxpbmVHcmFtbWFyLCBpbmxpbmVHcmFtbWFyLCBwdW5jdHVhdGlvbkxlYWRpbmcsIHB1bmN0dWF0aW9uVHJhaWxpbmcsIGh0bWxlc2NhcGUsIGh0bWxCbG9ja0dyYW1tYXIsIGNvbW1hbmRzIH07XG4iLCJpbXBvcnQgeyBpbmxpbmVHcmFtbWFyLCBsaW5lR3JhbW1hciwgcHVuY3R1YXRpb25MZWFkaW5nLCBwdW5jdHVhdGlvblRyYWlsaW5nLCBodG1sZXNjYXBlLCBodG1sQmxvY2tHcmFtbWFyLCBjb21tYW5kcyB9IGZyb20gXCIuL2dyYW1tYXJcIjtcblxuY2xhc3MgRWRpdG9yIHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7ICAgIFxuICAgIHRoaXMuZSA9IG51bGw7XG4gICAgdGhpcy50ZXh0YXJlYSA9IG51bGw7XG4gICAgdGhpcy5saW5lcyA9IFtdO1xuICAgIHRoaXMubGluZUVsZW1lbnRzID0gW107XG4gICAgdGhpcy5saW5lVHlwZXMgPSBbXTtcbiAgICB0aGlzLmxpbmVDYXB0dXJlcyA9IFtdO1xuICAgIHRoaXMubGluZVJlcGxhY2VtZW50cyA9IFtdO1xuICAgIHRoaXMubGlua0xhYmVscyA9IFtdO1xuICAgIHRoaXMubGluZURpcnR5ID0gW107XG4gICAgdGhpcy5sYXN0Q29tbWFuZFN0YXRlID0gbnVsbDtcblxuICAgIHRoaXMubGlzdGVuZXJzID0ge1xuICAgICAgY2hhbmdlOiBbXSxcbiAgICAgIHNlbGVjdGlvbjogW10sXG4gICAgfTtcblxuICAgIGxldCBlbGVtZW50ID0gcHJvcHMuZWxlbWVudDtcbiAgICB0aGlzLnRleHRhcmVhID0gcHJvcHMudGV4dGFyZWE7XG5cbiAgICBpZiAodGhpcy50ZXh0YXJlYSAmJiAhdGhpcy50ZXh0YXJlYS50YWdOYW1lKSB7XG4gICAgICB0aGlzLnRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50ZXh0YXJlYSk7XG4gICAgICBpZiAoIWVsZW1lbnQpIGVsZW1lbnQgPSB0aGlzLnRleHRhcmVhO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50ICYmICFlbGVtZW50LnRhZ05hbWUpIHtcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9wcy5lbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTsgXG4gICAgfVxuICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT0gJ1RFWFRBUkVBJykge1xuICAgICAgdGhpcy50ZXh0YXJlYSA9IGVsZW1lbnQ7XG4gICAgICBlbGVtZW50ID0gdGhpcy50ZXh0YXJlYS5wYXJlbnROb2RlOyBcbiAgICB9XG5cbiAgICBpZiAodGhpcy50ZXh0YXJlYSkge1xuICAgICAgdGhpcy50ZXh0YXJlYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlRWRpdG9yRWxlbWVudChlbGVtZW50KTtcbiAgICAvLyBUT0RPIFBsYWNlaG9sZGVyIGZvciBlbXB0eSBjb250ZW50XG4gICAgdGhpcy5zZXRDb250ZW50KHByb3BzLmNvbnRlbnQgfHwgKHRoaXMudGV4dGFyZWEgPyB0aGlzLnRleHRhcmVhLnZhbHVlIDogZmFsc2UpIHx8ICcjIEhlbGxvIFRpbnlNREUhXFxuRWRpdCAqKmhlcmUqKicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGVkaXRvciBlbGVtZW50IGluc2lkZSB0aGUgdGFyZ2V0IGVsZW1lbnQgb2YgdGhlIERPTSB0cmVlXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSB0YXJnZXQgZWxlbWVudCBvZiB0aGUgRE9NIHRyZWVcbiAgICovXG4gIGNyZWF0ZUVkaXRvckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHRoaXMuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZS5jbGFzc05hbWUgPSAnVGlueU1ERSc7XG4gICAgdGhpcy5lLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgLy8gVGhlIGZvbGxvd2luZyBpcyBpbXBvcnRhbnQgZm9yIGZvcm1hdHRpbmcgcHVycG9zZXMsIGJ1dCBhbHNvIHNpbmNlIG90aGVyd2lzZSB0aGUgYnJvd3NlciByZXBsYWNlcyBzdWJzZXF1ZW50IHNwYWNlcyB3aXRoICAmbmJzcDsgJm5ic3A7XG4gICAgLy8gVGhhdCBicmVha3MgYSBsb3Qgb2Ygc3R1ZmYsIHNvIHdlIGRvIHRoaXMgaGVyZSBhbmQgbm90IGluIENTU+KAlHRoZXJlZm9yZSwgeW91IGRvbid0IGhhdmUgdG8gcmVtZW1iZXIgdG8gYnV0IHRoaXMgaW4gdGhlIENTUyBmaWxlXG4gICAgdGhpcy5lLnN0eWxlLndoaXRlU3BhY2UgPSAncHJlLXdyYXAnOyBcbiAgICAvLyBBdm9pZCBmb3JtYXR0aW5nIChCIC8gSSAvIFUpIHBvcHBpbmcgdXAgb24gaU9TXG4gICAgdGhpcy5lLnN0eWxlLndlYmtpdFVzZXJNb2RpZnkgPSAncmVhZC13cml0ZS1wbGFpbnRleHQtb25seSc7XG4gICAgaWYgKHRoaXMudGV4dGFyZWEgJiYgdGhpcy50ZXh0YXJlYS5wYXJlbnROb2RlID09IGVsZW1lbnQgJiYgdGhpcy50ZXh0YXJlYS5uZXh0U2libGluZykge1xuICAgICAgZWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5lLCB0aGlzLnRleHRhcmVhLm5leHRTaWJsaW5nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZSk7XG4gICAgfVxuXG4gICAgdGhpcy5lLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4gdGhpcy5oYW5kbGVJbnB1dEV2ZW50KGUpKTtcbiAgICAvLyB0aGlzLmUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHRoaXMuaGFuZGxlS2V5ZG93bkV2ZW50KGUpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0aW9uY2hhbmdlXCIsIChlKSA9PiB0aGlzLmhhbmRsZVNlbGVjdGlvbkNoYW5nZUV2ZW50KGUpKTtcbiAgICB0aGlzLmUuYWRkRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsIChlKSA9PiB0aGlzLmhhbmRsZVBhc3RlKGUpKTtcbiAgICAvLyB0aGlzLmUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB0aGlzLmhhbmRsZUtleURvd24oZSkpO1xuICAgIHRoaXMubGluZUVsZW1lbnRzID0gdGhpcy5lLmNoaWxkTm9kZXM7IC8vIHRoaXMgd2lsbCBhdXRvbWF0aWNhbGx5IHVwZGF0ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVkaXRvciBjb250ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCBUaGUgbmV3IE1hcmtkb3duIGNvbnRlbnRcbiAgICovXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIC8vIERlbGV0ZSBhbnkgZXhpc3RpbmcgY29udGVudFxuICAgIHdoaWxlICh0aGlzLmUuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5lLnJlbW92ZUNoaWxkKHRoaXMuZS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgdGhpcy5saW5lcyA9IGNvbnRlbnQuc3BsaXQoLyg/OlxcclxcbnxcXHJ8XFxuKS8pO1xuICAgIHRoaXMubGluZURpcnR5ID0gW107XG4gICAgZm9yIChsZXQgbGluZU51bSA9IDA7IGxpbmVOdW0gPCB0aGlzLmxpbmVzLmxlbmd0aDsgbGluZU51bSsrKSB7XG4gICAgICBsZXQgbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuZS5hcHBlbmRDaGlsZChsZSk7XG4gICAgICB0aGlzLmxpbmVEaXJ0eS5wdXNoKHRydWUpO1xuICAgIH1cbiAgICB0aGlzLmxpbmVUeXBlcyA9IG5ldyBBcnJheSh0aGlzLmxpbmVzLmxlbmd0aCk7XG4gICAgdGhpcy51cGRhdGVGb3JtYXR0aW5nKCk7XG4gICAgdGhpcy5maXJlQ2hhbmdlKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgZWRpdG9yIGNvbnRlbnQgYXMgYSBNYXJrZG93biBzdHJpbmcuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBlZGl0b3IgY29udGVudCBhcyBhIG1hcmtkb3duIHN0cmluZ1xuICAgKi9cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lcy5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBtYWluIG1ldGhvZCB0byB1cGRhdGUgdGhlIGZvcm1hdHRpbmcgKGZyb20gdGhpcy5saW5lcyB0byBIVE1MIG91dHB1dClcbiAgICovXG4gIHVwZGF0ZUZvcm1hdHRpbmcoKSB7XG4gICAgLy8gRmlyc3QsIHBhcnNlIGxpbmUgdHlwZXMuIFRoaXMgd2lsbCB1cGRhdGUgdGhpcy5saW5lVHlwZXMsIHRoaXMubGluZVJlcGxhY2VtZW50cywgYW5kIHRoaXMubGluZUNhcHR1cmVzXG4gICAgLy8gV2UgZG9uJ3QgYXBwbHkgdGhlIGZvcm1hdHRpbmcgeWV0XG4gICAgdGhpcy51cGRhdGVMaW5lVHlwZXMoKTtcbiAgICAvLyBDb2xsZWN0IGFueSB2YWxpZCBsaW5rIGxhYmVscyBmcm9tIGxpbmsgcmVmZXJlbmNlIGRlZmluaXRpb25z4oCUd2UgbmVlZCB0aGF0IGZvciBmb3JtYXR0aW5nIHRvIGRldGVybWluZSB3aGF0J3MgYSB2YWxpZCBsaW5rXG4gICAgdGhpcy51cGRhdGVMaW5rTGFiZWxzKCk7XG4gICAgLy8gTm93LCBhcHBseSB0aGUgZm9ybWF0dGluZ1xuICAgIHRoaXMuYXBwbHlMaW5lVHlwZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoaXMubGlua0xhYmVsczogRm9yIGV2ZXJ5IGxpbmsgcmVmZXJlbmNlIGRlZmluaXRpb24gKGxpbmUgdHlwZSBUTUxpbmtSZWZlcmVuY2VEZWZpbml0aW9uKSwgd2UgY29sbGVjdCB0aGUgbGFiZWxcbiAgICovXG4gIHVwZGF0ZUxpbmtMYWJlbHMoKSB7XG4gICAgdGhpcy5saW5rTGFiZWxzID0gW107XG4gICAgZm9yIChsZXQgbCA9IDA7IGwgPCB0aGlzLmxpbmVzLmxlbmd0aDsgbCsrKSB7XG4gICAgICBpZiAodGhpcy5saW5lVHlwZXNbbF0gPT0gJ1RNTGlua1JlZmVyZW5jZURlZmluaXRpb24nKSB7XG4gICAgICAgIHRoaXMubGlua0xhYmVscy5wdXNoKHRoaXMubGluZUNhcHR1cmVzW2xdW2xpbmVHcmFtbWFyLlRNTGlua1JlZmVyZW5jZURlZmluaXRpb24ubGFiZWxQbGFjZWhvbGRlcl0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmVwbGFjZSBwbGFjZWhvbGRlcnMgZnJvbSBhIFJlZ0V4cCBjYXB0dXJlLiBUaGUgcmVwbGFjZW1lbnQgc3RyaW5nIGNhbiBjb250YWluIHJlZ3VsYXIgZG9sbGFyIHBsYWNlaG9sZGVycyAoZS5nLiwgJDEpLFxuICAgKiB3aGljaCBhcmUgaW50ZXJwcmV0ZWQgbGlrZSBpbiBTdHJpbmcucmVwbGFjZSgpLCBidXQgYWxzbyBkb3VibGUgZG9sbGFyIHBsYWNlaG9sZGVycyAoJCQxKS4gSW4gdGhlIGNhc2Ugb2YgZG91YmxlIGRvbGxhciBwbGFjZWhvbGRlcnMsIFxuICAgKiBNYXJrZG93biBpbmxpbmUgZ3JhbW1hciBpcyBhcHBsaWVkIG9uIHRoZSBjb250ZW50IG9mIHRoZSBjYXB0dXJlZCBzdWJncm91cCwgaS5lLiwgJCQxIHByb2Nlc3NlcyBpbmxpbmUgTWFya2Rvd24gZ3JhbW1hciBpbiB0aGUgY29udGVudCBvZiB0aGVcbiAgICogZmlyc3QgY2FwdHVyZWQgc3ViZ3JvdXAsIGFuZCByZXBsYWNlcyBgJCQxYCB3aXRoIHRoZSByZXN1bHQuXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZW1lbnQgVGhlIHJlcGxhY2VtZW50IHN0cmluZywgaW5jbHVkaW5nIHBsYWNlaG9sZGVycy5cbiAgICogQHBhcmFtICBjYXB0dXJlIFRoZSByZXN1bHQgb2YgYSBSZWdFeHAuZXhlYygpIGNhbGxcbiAgICogQHJldHVybnMgVGhlIHJlcGxhY2VtZW50IHN0cmluZywgd2l0aCBwbGFjZWhvbGRlcnMgcmVwbGFjZWQgZnJvbSB0aGUgY2FwdHVyZSByZXN1bHQuXG4gICAqL1xuICByZXBsYWNlKHJlcGxhY2VtZW50LCBjYXB0dXJlKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VtZW50XG4gICAgICAucmVwbGFjZSgvKFxcJHsxLDJ9KShbMC05XSkvZywgKHN0ciwgcDEsIHAyKSA9PiB7XG4gICAgICAgIGlmIChwMSA9PSAnJCcpIHJldHVybiBodG1sZXNjYXBlKGNhcHR1cmVbcDJdKTtcbiAgICAgICAgZWxzZSByZXR1cm4gYDxzcGFuIGNsYXNzPVwiVE1JbmxpbmVGb3JtYXR0ZWRcIj4ke3RoaXMucHJvY2Vzc0lubGluZVN0eWxlcyhjYXB0dXJlW3AyXSl9PC9zcGFuPmA7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSBsaW5lIHR5cGVzIChmcm9tIHRoaXMubGluZVR5cGVzIGFzIHdlbGwgYXMgdGhlIGNhcHR1cmUgcmVzdWx0IGluIHRoaXMubGluZVJlcGxhY2VtZW50cyBhbmQgdGhpcy5saW5lQ2FwdHVyZXMpIFxuICAgKiBhbmQgcHJvY2Vzc2VzIGlubGluZSBmb3JtYXR0aW5nIGZvciBhbGwgbGluZXMuXG4gICAqL1xuICBhcHBseUxpbmVUeXBlcygpIHtcbiAgICBmb3IgKGxldCBsaW5lTnVtID0gMDsgbGluZU51bSA8IHRoaXMubGluZXMubGVuZ3RoOyBsaW5lTnVtKyspIHtcbiAgICAgIGlmICh0aGlzLmxpbmVEaXJ0eVtsaW5lTnVtXSkge1xuICAgICAgICBsZXQgY29udGVudEhUTUwgPSB0aGlzLnJlcGxhY2UodGhpcy5saW5lUmVwbGFjZW1lbnRzW2xpbmVOdW1dLCB0aGlzLmxpbmVDYXB0dXJlc1tsaW5lTnVtXSk7XG4gICAgICAgIC8vIHRoaXMubGluZUhUTUxbbGluZU51bV0gPSAoY29udGVudEhUTUwgPT0gJycgPyAnPGJyIC8+JyA6IGNvbnRlbnRIVE1MKTsgLy8gUHJldmVudCBlbXB0eSBlbGVtZW50cyB3aGljaCBjYW4ndCBiZSBzZWxlY3RlZCBldGMuXG4gICAgICAgIHRoaXMubGluZUVsZW1lbnRzW2xpbmVOdW1dLmNsYXNzTmFtZSA9IHRoaXMubGluZVR5cGVzW2xpbmVOdW1dO1xuICAgICAgICB0aGlzLmxpbmVFbGVtZW50c1tsaW5lTnVtXS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgIHRoaXMubGluZUVsZW1lbnRzW2xpbmVOdW1dLmlubmVySFRNTCA9IChjb250ZW50SFRNTCA9PSAnJyA/ICc8YnIgLz4nIDogY29udGVudEhUTUwpOyAvLyBQcmV2ZW50IGVtcHR5IGVsZW1lbnRzIHdoaWNoIGNhbid0IGJlIHNlbGVjdGVkIGV0Yy5cbiAgICAgIH1cbiAgICAgIHRoaXMubGluZUVsZW1lbnRzW2xpbmVOdW1dLmRhdGFzZXQubGluZU51bSA9IGxpbmVOdW07XG4gICAgfSAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGxpbmUgdHlwZXMgZm9yIGFsbCBsaW5lcyBiYXNlZCBvbiB0aGUgbGluZSAvIGJsb2NrIGdyYW1tYXIuIENhcHR1cmVzIHRoZSByZXN1bHRzIG9mIHRoZSByZXNwZWN0aXZlIGxpbmVcbiAgICogZ3JhbW1hciByZWd1bGFyIGV4cHJlc3Npb25zLlxuICAgKiBVcGRhdGVzIHRoaXMubGluZVR5cGVzLCB0aGlzLmxpbmVDYXB0dXJlcywgYW5kIHRoaXMubGluZVJlcGxhY2VtZW50cy5cbiAgICovXG4gIHVwZGF0ZUxpbmVUeXBlcygpIHtcbiAgICBsZXQgY29kZUJsb2NrVHlwZSA9IGZhbHNlO1xuICAgIGxldCBjb2RlQmxvY2tTZXFMZW5ndGggPSAwO1xuICAgIGxldCBodG1sQmxvY2sgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGxpbmVOdW0gPSAwOyBsaW5lTnVtIDwgdGhpcy5saW5lcy5sZW5ndGg7IGxpbmVOdW0rKykge1xuICAgICAgbGV0IGxpbmVUeXBlID0gJ1RNUGFyYSc7XG4gICAgICBsZXQgbGluZUNhcHR1cmUgPSBbdGhpcy5saW5lc1tsaW5lTnVtXV07XG4gICAgICBsZXQgbGluZVJlcGxhY2VtZW50ID0gJyQkMCc7IC8vIERlZmF1bHQgcmVwbGFjZW1lbnQgZm9yIHBhcmFncmFwaDogSW5saW5lIGZvcm1hdCB0aGUgZW50aXJlIGxpbmVcblxuICAgICAgLy8gQ2hlY2sgb25nb2luZyBjb2RlIGJsb2Nrc1xuICAgICAgLy8gaWYgKGxpbmVOdW0gPiAwICYmICh0aGlzLmxpbmVUeXBlc1tsaW5lTnVtIC0gMV0gPT0gJ1RNQ29kZUZlbmNlQmFja3RpY2tPcGVuJyB8fCB0aGlzLmxpbmVUeXBlc1tsaW5lTnVtIC0gMV0gPT0gJ1RNRmVuY2VkQ29kZUJhY2t0aWNrJykpIHtcbiAgICAgIGlmIChjb2RlQmxvY2tUeXBlID09ICdUTUNvZGVGZW5jZUJhY2t0aWNrT3BlbicpIHtcbiAgICAgICAgLy8gV2UncmUgaW4gYSBiYWNrdGljay1mZW5jZWQgY29kZSBibG9jaywgY2hlY2sgaWYgdGhlIGN1cnJlbnQgbGluZSBjbG9zZXMgaXRcbiAgICAgICAgbGV0IGNhcHR1cmUgPSBsaW5lR3JhbW1hci5UTUNvZGVGZW5jZUJhY2t0aWNrQ2xvc2UucmVnZXhwLmV4ZWModGhpcy5saW5lc1tsaW5lTnVtXSk7XG4gICAgICAgIGlmIChjYXB0dXJlICYmIGNhcHR1cmUuZ3JvdXBzWydzZXEnXS5sZW5ndGggPj0gY29kZUJsb2NrU2VxTGVuZ3RoKSB7XG4gICAgICAgICAgbGluZVR5cGUgPSAnVE1Db2RlRmVuY2VCYWNrdGlja0Nsb3NlJztcbiAgICAgICAgICBsaW5lUmVwbGFjZW1lbnQgPSBsaW5lR3JhbW1hci5UTUNvZGVGZW5jZUJhY2t0aWNrQ2xvc2UucmVwbGFjZW1lbnQ7XG4gICAgICAgICAgbGluZUNhcHR1cmUgPSBjYXB0dXJlO1xuICAgICAgICAgIGNvZGVCbG9ja1R5cGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaW5lVHlwZSA9ICdUTUZlbmNlZENvZGVCYWNrdGljayc7XG4gICAgICAgICAgbGluZVJlcGxhY2VtZW50ID0gJyQwJztcbiAgICAgICAgICBsaW5lQ2FwdHVyZSA9IFt0aGlzLmxpbmVzW2xpbmVOdW1dXTtcbiAgICAgICAgfSBcbiAgICAgIH1cbiAgICAgIC8vIGlmIChsaW5lTnVtID4gMCAmJiAodGhpcy5saW5lVHlwZXNbbGluZU51bSAtIDFdID09ICdUTUNvZGVGZW5jZVRpbGRlT3BlbicgfHwgdGhpcy5saW5lVHlwZXNbbGluZU51bSAtIDFdID09ICdUTUZlbmNlZENvZGVUaWxkZScpKSB7XG4gICAgICBlbHNlIGlmIChjb2RlQmxvY2tUeXBlID09ICdUTUNvZGVGZW5jZVRpbGRlT3BlbicpIHtcbiAgICAgICAgLy8gV2UncmUgaW4gYSB0aWxkZS1mZW5jZWQgY29kZSBibG9ja1xuICAgICAgICBsZXQgY2FwdHVyZSA9IGxpbmVHcmFtbWFyLlRNQ29kZUZlbmNlVGlsZGVDbG9zZS5yZWdleHAuZXhlYyh0aGlzLmxpbmVzW2xpbmVOdW1dKTtcbiAgICAgICAgaWYgKGNhcHR1cmUgJiYgY2FwdHVyZS5ncm91cHNbJ3NlcSddLmxlbmd0aCA+PSBjb2RlQmxvY2tTZXFMZW5ndGgpICB7XG4gICAgICAgICAgbGluZVR5cGUgPSAnVE1Db2RlRmVuY2VUaWxkZUNsb3NlJztcbiAgICAgICAgICBsaW5lUmVwbGFjZW1lbnQgPSBsaW5lR3JhbW1hci5UTUNvZGVGZW5jZVRpbGRlQ2xvc2UucmVwbGFjZW1lbnQ7XG4gICAgICAgICAgbGluZUNhcHR1cmUgPSBjYXB0dXJlO1xuICAgICAgICAgIGNvZGVCbG9ja1R5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBsaW5lVHlwZSA9ICdUTUZlbmNlZENvZGVUaWxkZSc7XG4gICAgICAgICAgbGluZVJlcGxhY2VtZW50ID0gJyQwJztcbiAgICAgICAgICBsaW5lQ2FwdHVyZSA9IFt0aGlzLmxpbmVzW2xpbmVOdW1dXTtcbiAgICAgICAgfSBcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgSFRNTCBibG9jayB0eXBlc1xuICAgICAgaWYgKGxpbmVUeXBlID09ICdUTVBhcmEnICYmIGh0bWxCbG9jayA9PT0gZmFsc2UpIHtcbiAgICAgICAgZm9yIChsZXQgaHRtbEJsb2NrVHlwZSBvZiBodG1sQmxvY2tHcmFtbWFyKSB7XG4gICAgICAgICAgaWYgKHRoaXMubGluZXNbbGluZU51bV0ubWF0Y2goaHRtbEJsb2NrVHlwZS5zdGFydCkpIHtcbiAgICAgICAgICAgIC8vIE1hdGNoaW5nIHN0YXJ0IGNvbmRpdGlvbi4gQ2hlY2sgaWYgdGhpcyB0YWcgY2FuIHN0YXJ0IGhlcmUgKG5vdCBhbGwgc3RhcnQgY29uZGl0aW9ucyBhbGxvdyBicmVha2luZyBhIHBhcmFncmFwaCkuXG4gICAgICAgICAgICBpZiAoaHRtbEJsb2NrVHlwZS5wYXJhSW50ZXJydXB0IHx8IGxpbmVOdW0gPT0gMCB8fCAhKHRoaXMubGluZVR5cGVzW2xpbmVOdW0tMV0gPT0gJ1RNUGFyYScgfHwgdGhpcy5saW5lVHlwZXNbbGluZU51bS0xXSA9PSAnVE1VTCcgfHwgdGhpcy5saW5lVHlwZXNbbGluZU51bS0xXSA9PSAnVE1PTCcgfHwgdGhpcy5saW5lVHlwZXNbbGluZU51bS0xXSA9PSAnVE1CbG9ja3F1b3RlJykpIHtcbiAgICAgICAgICAgICAgaHRtbEJsb2NrID0gaHRtbEJsb2NrVHlwZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChodG1sQmxvY2sgIT09IGZhbHNlKSB7XG4gICAgICAgIGxpbmVUeXBlID0gJ1RNSFRNTEJsb2NrJztcbiAgICAgICAgbGluZVJlcGxhY2VtZW50ID0gJyQwJzsgLy8gTm8gZm9ybWF0dGluZyBpbiBUTUhUTUxCbG9ja1xuICAgICAgICBsaW5lQ2FwdHVyZSA9IFt0aGlzLmxpbmVzW2xpbmVOdW1dXTsgLy8gVGhpcyBzaG91bGQgYWxyZWFkeSBiZSBzZXQgYnV0IGJldHRlciBzYWZlIHRoYW4gc29ycnlcblxuICAgICAgICAvLyBDaGVjayBpZiBIVE1MIGJsb2NrIHNob3VsZCBiZSBjbG9zZWRcbiAgICAgICAgaWYgKGh0bWxCbG9jay5lbmQpIHtcbiAgICAgICAgICAvLyBTcGVjaWZpYyBlbmQgY29uZGl0aW9uXG4gICAgICAgICAgaWYgKHRoaXMubGluZXNbbGluZU51bV0ubWF0Y2goaHRtbEJsb2NrLmVuZCkpIHtcbiAgICAgICAgICAgIGh0bWxCbG9jayA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBObyBzcGVjaWZpYyBlbmQgY29uZGl0aW9uLCBlbmRzIHdpdGggYmxhbmsgbGluZVxuICAgICAgICAgIGlmIChsaW5lTnVtID09IHRoaXMubGluZXMubGVuZ3RoIC0gMSB8fCB0aGlzLmxpbmVzW2xpbmVOdW0rMV0ubWF0Y2gobGluZUdyYW1tYXIuVE1CbGFua0xpbmUucmVnZXhwKSkge1xuICAgICAgICAgICAgaHRtbEJsb2NrID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGFsbCByZWdleHBzIGlmIHdlIGhhdmVuJ3QgYXBwbGllZCBvbmUgb2YgdGhlIGNvZGUgYmxvY2sgdHlwZXNcbiAgICAgIGlmIChsaW5lVHlwZSA9PSAnVE1QYXJhJykge1xuICAgICAgICBmb3IgKGxldCB0eXBlIGluIGxpbmVHcmFtbWFyKSB7XG4gICAgICAgICAgaWYgKGxpbmVHcmFtbWFyW3R5cGVdLnJlZ2V4cCkge1xuICAgICAgICAgICAgbGV0IGNhcHR1cmUgPSBsaW5lR3JhbW1hclt0eXBlXS5yZWdleHAuZXhlYyh0aGlzLmxpbmVzW2xpbmVOdW1dKTtcbiAgICAgICAgICAgIGlmIChjYXB0dXJlKSB7XG4gICAgICAgICAgICAgIGxpbmVUeXBlID0gdHlwZTtcbiAgICAgICAgICAgICAgbGluZVJlcGxhY2VtZW50ID0gbGluZUdyYW1tYXJbdHlwZV0ucmVwbGFjZW1lbnQ7XG4gICAgICAgICAgICAgIGxpbmVDYXB0dXJlID0gY2FwdHVyZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdlJ3ZlIG9wZW5lZCBhIGNvZGUgYmxvY2ssIHJlbWVtYmVyIHRoYXRcbiAgICAgIGlmIChsaW5lVHlwZSA9PSAnVE1Db2RlRmVuY2VCYWNrdGlja09wZW4nIHx8IGxpbmVUeXBlID09ICdUTUNvZGVGZW5jZVRpbGRlT3BlbicpIHtcbiAgICAgICAgY29kZUJsb2NrVHlwZSA9IGxpbmVUeXBlO1xuICAgICAgICBjb2RlQmxvY2tTZXFMZW5ndGggPSBsaW5lQ2FwdHVyZS5ncm91cHNbJ3NlcSddLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgLy8gTGluayByZWZlcmVuY2UgZGVmaW5pdGlvbiBhbmQgaW5kZW50ZWQgY29kZSBjYW4ndCBpbnRlcnJ1cHQgYSBwYXJhZ3JhcGhcbiAgICAgIGlmIChcbiAgICAgICAgKGxpbmVUeXBlID09ICdUTUluZGVudGVkQ29kZScgfHwgbGluZVR5cGUgPT0gJ1RNTGlua1JlZmVyZW5jZURlZmluaXRpb24nKSBcbiAgICAgICAgJiYgbGluZU51bSA+IDAgXG4gICAgICAgICYmICh0aGlzLmxpbmVUeXBlc1tsaW5lTnVtLTFdID09ICdUTVBhcmEnIHx8IHRoaXMubGluZVR5cGVzW2xpbmVOdW0tMV0gPT0gJ1RNVUwnIHx8IHRoaXMubGluZVR5cGVzW2xpbmVOdW0tMV0gPT0gJ1RNT0wnIHx8IHRoaXMubGluZVR5cGVzW2xpbmVOdW0tMV0gPT0gJ1RNQmxvY2txdW90ZScpXG4gICAgICApIHtcbiAgICAgICAgLy8gRmFsbCBiYWNrIHRvIFRNUGFyYVxuICAgICAgICBsaW5lVHlwZSA9ICdUTVBhcmEnO1xuICAgICAgICBsaW5lQ2FwdHVyZSA9IFt0aGlzLmxpbmVzW2xpbmVOdW1dXTtcbiAgICAgICAgbGluZVJlcGxhY2VtZW50ID0gJyQkMCc7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldGV4dCBIMiBtYXJrZXJzIHRoYXQgY2FuIGFsc28gYmUgaW50ZXJwcmV0ZWQgYXMgYW4gZW1wdHkgbGlzdCBpdGVtIHNob3VsZCBiZSByZWdhcmRlZCBhcyBzdWNoIChhcyBwZXIgQ29tbW9uTWFyayBzcGVjKVxuICAgICAgaWYgKGxpbmVUeXBlID09ICdUTVNldGV4dEgyTWFya2VyJykge1xuICAgICAgICBsZXQgY2FwdHVyZSA9IGxpbmVHcmFtbWFyLlRNVUwucmVnZXhwLmV4ZWModGhpcy5saW5lc1tsaW5lTnVtXSk7XG4gICAgICAgIGlmIChjYXB0dXJlKSB7XG4gICAgICAgICAgbGluZVR5cGUgPSAnVE1VTCc7XG4gICAgICAgICAgbGluZVJlcGxhY2VtZW50ID0gbGluZUdyYW1tYXIuVE1VTC5yZXBsYWNlbWVudDtcbiAgICAgICAgICBsaW5lQ2FwdHVyZSA9IGNhcHR1cmU7XG4gICAgICAgIH0gICAgICBcbiAgICAgIH1cblxuICAgICAgLy8gU2V0ZXh0IGhlYWRpbmdzIGFyZSBvbmx5IHZhbGlkIGlmIHByZWNlZGVkIGJ5IGEgcGFyYWdyYXBoIChhbmQgaWYgc28sIHRoZXkgY2hhbmdlIHRoZSB0eXBlIG9mIHRoZSBwcmV2aW91cyBwYXJhZ3JhcGgpXG4gICAgICBpZiAobGluZVR5cGUgPT0gJ1RNU2V0ZXh0SDFNYXJrZXInIHx8IGxpbmVUeXBlID09ICdUTVNldGV4dEgyTWFya2VyJykge1xuICAgICAgICBpZiAobGluZU51bSA9PSAwIHx8IHRoaXMubGluZVR5cGVzW2xpbmVOdW0gLSAxXSAhPSAnVE1QYXJhJykge1xuICAgICAgICAgIC8vIFNldGV4dCBtYXJrZXIgaXMgaW52YWxpZC4gSG93ZXZlciwgYSBIMiBtYXJrZXIgbWlnaHQgc3RpbGwgYmUgYSB2YWxpZCBIUiwgc28gbGV0J3MgY2hlY2sgdGhhdFxuICAgICAgICAgIGxldCBjYXB0dXJlID0gbGluZUdyYW1tYXIuVE1IUi5yZWdleHAuZXhlYyh0aGlzLmxpbmVzW2xpbmVOdW1dKTtcbiAgICAgICAgICBpZiAoY2FwdHVyZSkge1xuICAgICAgICAgICAgLy8gVmFsaWQgSFJcbiAgICAgICAgICAgIGxpbmVUeXBlID0gJ1RNSFInO1xuICAgICAgICAgICAgbGluZUNhcHR1cmUgPSBjYXB0dXJlO1xuICAgICAgICAgICAgbGluZVJlcGxhY2VtZW50ID0gbGluZUdyYW1tYXIuVE1IUi5yZXBsYWNlbWVudDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTm90IHZhbGlkIEhSLCBmb3JtYXQgYXMgVE1QYXJhXG4gICAgICAgICAgICBsaW5lVHlwZSA9ICdUTVBhcmEnO1xuICAgICAgICAgICAgbGluZUNhcHR1cmUgPSBbdGhpcy5saW5lc1tsaW5lTnVtXV07XG4gICAgICAgICAgICBsaW5lUmVwbGFjZW1lbnQgPSAnJCQwJztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVmFsaWQgc2V0ZXh0IG1hcmtlci4gQ2hhbmdlIHR5cGVzIG9mIHByZWNlZGluZyBwYXJhIGxpbmVzXG4gICAgICAgICAgbGV0IGhlYWRpbmdMaW5lID0gbGluZU51bSAtIDE7XG4gICAgICAgICAgY29uc3QgaGVhZGluZ0xpbmVUeXBlID0gKGxpbmVUeXBlID09ICdUTVNldGV4dEgxTWFya2VyJyA/ICdUTVNldGV4dEgxJyA6ICdUTVNldGV4dEgyJyk7XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKHRoaXMubGluZVR5cGVzW2hlYWRpbmdMaW5lVHlwZV0gIT0gaGVhZGluZ0xpbmVUeXBlKSB7XG4gICAgICAgICAgICAgIHRoaXMubGluZVR5cGVzW2hlYWRpbmdMaW5lXSA9IGhlYWRpbmdMaW5lVHlwZTsgXG4gICAgICAgICAgICAgIHRoaXMubGluZURpcnR5W2hlYWRpbmdMaW5lVHlwZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5saW5lUmVwbGFjZW1lbnRzW2hlYWRpbmdMaW5lXSA9ICckJDAnO1xuICAgICAgICAgICAgdGhpcy5saW5lQ2FwdHVyZXNbaGVhZGluZ0xpbmVdID0gW3RoaXMubGluZXNbaGVhZGluZ0xpbmVdXTtcblxuICAgICAgICAgICAgaGVhZGluZ0xpbmUtLTtcbiAgICAgICAgICB9IHdoaWxlKGhlYWRpbmdMaW5lID49IDAgJiYgdGhpcy5saW5lVHlwZXNbaGVhZGluZ0xpbmVdID09ICdUTVBhcmEnKTsgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIExhc3RseSwgc2F2ZSB0aGUgbGluZSBzdHlsZSB0byBiZSBhcHBsaWVkIGxhdGVyXG4gICAgICBpZiAodGhpcy5saW5lVHlwZXNbbGluZU51bV0gIT0gbGluZVR5cGUpIHtcbiAgICAgICAgdGhpcy5saW5lVHlwZXNbbGluZU51bV0gPSBsaW5lVHlwZTtcbiAgICAgICAgdGhpcy5saW5lRGlydHlbbGluZU51bV0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5saW5lUmVwbGFjZW1lbnRzW2xpbmVOdW1dID0gbGluZVJlcGxhY2VtZW50O1xuICAgICAgdGhpcy5saW5lQ2FwdHVyZXNbbGluZU51bV0gPSBsaW5lQ2FwdHVyZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBhbGwgbGluZSBjb250ZW50cyBmcm9tIHRoZSBIVE1MLCB0aGVuIHJlLWFwcGxpZXMgZm9ybWF0dGluZy5cbiAgICovXG4gIHVwZGF0ZUxpbmVDb250ZW50c0FuZEZvcm1hdHRpbmcoKSB7XG4gICAgdGhpcy5jbGVhckRpcnR5RmxhZygpO1xuICAgIHRoaXMudXBkYXRlTGluZUNvbnRlbnRzKCk7XG4gICAgdGhpcy51cGRhdGVGb3JtYXR0aW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gcGFyc2UgYSBsaW5rIG9yIGltYWdlIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uLiBUaGlzIGFzc3VtZXMgdGhhdCB0aGUgb3BlbmluZyBbIG9yICFbIGhhcyBhbHJlYWR5IGJlZW4gbWF0Y2hlZC4gXG4gICAqIFJldHVybnMgZmFsc2UgaWYgdGhpcyBpcyBub3QgYSB2YWxpZCBsaW5rLCBpbWFnZS4gU2VlIGJlbG93IGZvciBtb3JlIGluZm9ybWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcmlnaW5hbFN0cmluZyBUaGUgb3JpZ2luYWwgc3RyaW5nLCBzdGFydGluZyBhdCB0aGUgb3BlbmluZyBtYXJrZXIgKFsgb3IgIVspXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNJbWFnZSBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIGFuIGltYWdlIChvcGVuZXIgPT0gIVspXG4gICAqIEByZXR1cm5zIGZhbHNlIGlmIG5vdCBhIHZhbGlkIGxpbmsgLyBpbWFnZS4gXG4gICAqIE90aGVyd2lzZSByZXR1cm5zIGFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzOiBvdXRwdXQgaXMgdGhlIHN0cmluZyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgcHJvY2Vzc2VkIG91dHB1dCwgXG4gICAqIGNoYXJDb3VudCBpcyB0aGUgbnVtYmVyIG9mIGlucHV0IGNoYXJhY3RlcnMgKGZyb20gb3JpZ2luYWxTdHJpbmcpIGNvbnN1bWVkLlxuICAgKi9cbiAgcGFyc2VMaW5rT3JJbWFnZShvcmlnaW5hbFN0cmluZywgaXNJbWFnZSkge1xuICAgIC8vIFNraXAgdGhlIG9wZW5pbmcgYnJhY2tldFxuICAgIGxldCB0ZXh0T2Zmc2V0ID0gaXNJbWFnZSA/IDIgOiAxO1xuICAgIGxldCBvcGVuZXIgPSBvcmlnaW5hbFN0cmluZy5zdWJzdHIoMCwgdGV4dE9mZnNldCk7XG4gICAgbGV0IHR5cGUgPSBpc0ltYWdlID8gJ1RNSW1hZ2UnIDogJ1RNTGluayc7XG4gICAgbGV0IGN1cnJlbnRPZmZzZXQgPSB0ZXh0T2Zmc2V0O1xuICAgIFxuICAgIGxldCBicmFja2V0TGV2ZWwgPSAxO1xuICAgIGxldCBsaW5rVGV4dCA9IGZhbHNlO1xuICAgIGxldCBsaW5rUmVmID0gZmFsc2U7XG4gICAgbGV0IGxpbmtMYWJlbCA9IFtdO1xuICAgIGxldCBsaW5rRGV0YWlscyA9IFtdOyAvLyBJZiBtYXRjaGVkLCB0aGlzIHdpbGwgYmUgYW4gYXJyYXk6IFt3aGl0ZXNwYWNlICsgbGluayBkZXN0aW5hdGlvbiBkZWxpbWl0ZXIsIGxpbmsgZGVzdGluYXRpb24sIGxpbmsgZGVzdGluYXRpb24gZGVsaW1pdGVyLCB3aGl0ZXNwYWNlLCBsaW5rIHRpdGxlIGRlbGltaXRlciwgbGluayB0aXRsZSwgbGluayB0aXRsZSBkZWxpbWl0ZXIgKyB3aGl0ZXNwYWNlXS4gQWxsIGNhbiBiZSBlbXB0eSBzdHJpbmdzLlxuXG4gIFxuICAgIHRleHRPdXRlcjogd2hpbGUgKGN1cnJlbnRPZmZzZXQgPCBvcmlnaW5hbFN0cmluZy5sZW5ndGggJiYgbGlua1RleHQgPT09IGZhbHNlIC8qIGVtcHR5IHN0cmluZyBpcyBva2F5ICovKSB7XG4gICAgICBsZXQgc3RyaW5nID0gb3JpZ2luYWxTdHJpbmcuc3Vic3RyKGN1cnJlbnRPZmZzZXQpO1xuICBcbiAgICAgIC8vIENhcHR1cmUgYW55IGVzY2FwZXMgYW5kIGNvZGUgYmxvY2tzIGF0IGN1cnJlbnQgcG9zaXRpb24sIHRoZXkgYmluZCBtb3JlIHN0cm9uZ2x5IHRoYW4gbGlua3NcbiAgICAgIC8vIFdlIGRvbid0IGhhdmUgdG8gYWN0dWFsbHkgcHJvY2VzcyB0aGVtIGhlcmUsIHRoYXQnbGwgYmUgZG9uZSBsYXRlciBpbiBjYXNlIHRoZSBsaW5rIC8gaW1hZ2UgaXMgdmFsaWQsIGJ1dCB3ZSBuZWVkIHRvIHNraXAgb3ZlciB0aGVtLlxuICAgICAgZm9yIChsZXQgcnVsZSBvZiBbJ2VzY2FwZScsICdjb2RlJywgJ2F1dG9saW5rJywgJ2h0bWwnXSkge1xuICAgICAgICBsZXQgY2FwID0gaW5saW5lR3JhbW1hcltydWxlXS5yZWdleHAuZXhlYyhzdHJpbmcpO1xuICAgICAgICBpZiAoY2FwKSB7XG4gICAgICAgICAgY3VycmVudE9mZnNldCArPSBjYXBbMF0ubGVuZ3RoO1xuICAgICAgICAgIGNvbnRpbnVlIHRleHRPdXRlcjsgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAvLyBDaGVjayBmb3IgaW1hZ2UuIEl0J3Mgb2theSBmb3IgYW4gaW1hZ2UgdG8gYmUgaW5jbHVkZWQgaW4gYSBsaW5rIG9yIGltYWdlXG4gICAgICBpZiAoc3RyaW5nLm1hdGNoKGlubGluZUdyYW1tYXIuaW1hZ2VPcGVuLnJlZ2V4cCkpIHtcbiAgICAgICAgLy8gT3BlbmluZyBpbWFnZS4gSXQncyBva2F5IGlmIHRoaXMgaXMgYSBtYXRjaGluZyBwYWlyIG9mIGJyYWNrZXRzXG4gICAgICAgIGJyYWNrZXRMZXZlbCsrO1xuICAgICAgICBjdXJyZW50T2Zmc2V0ICs9IDI7XG4gICAgICAgIGNvbnRpbnVlIHRleHRPdXRlcjtcbiAgICAgIH1cbiAgXG4gICAgICAvLyBDaGVjayBmb3IgbGluayAobm90IGFuIGltYWdlIGJlY2F1c2UgdGhhdCB3b3VsZCBoYXZlIGJlZW4gY2FwdHVyZWQgYW5kIHNraXBwZWQgb3ZlciBhYm92ZSlcbiAgICAgIGlmIChzdHJpbmcubWF0Y2goaW5saW5lR3JhbW1hci5saW5rT3Blbi5yZWdleHApKSB7XG4gICAgICAgIC8vIE9wZW5pbmcgYnJhY2tldC4gVHdvIHRoaW5ncyB0byBkbzpcbiAgICAgICAgLy8gMSkgaXQncyBva2F5IGlmIHRoaXMgcGFydCBvZiBhIHBhaXIgb2YgYnJhY2tldHMuXG4gICAgICAgIC8vIDIpIElmIHdlIGFyZSBjdXJyZW50bHkgdHJ5aW5nIHRvIHBhcnNlIGEgbGluaywgdGhpcyBuZXN0ZWQgYnJhY2tldCBtdXNuJ3Qgc3RhcnQgYSB2YWxpZCBsaW5rIChubyBuZXN0ZWQgbGlua3MgYWxsb3dlZClcbiAgICAgICAgYnJhY2tldExldmVsKys7XG4gICAgICAgIC8vIGlmIChicmFja2V0TGV2ZWwgPj0gMikgcmV0dXJuIGZhbHNlOyAvLyBOZXN0ZWQgdW5lc2NhcGVkIGJyYWNrZXRzLCB0aGlzIGRvZXNuJ3QgcXVhbGlmeSBhcyBhIGxpbmsgLyBpbWFnZVxuICAgICAgICBpZiAoIWlzSW1hZ2UpIHtcbiAgICAgICAgICBpZiAodGhpcy5wYXJzZUxpbmtPckltYWdlKHN0cmluZywgZmFsc2UpKSB7XG4gICAgICAgICAgICAvLyBWYWxpZCBsaW5rIGluc2lkZSB0aGlzIHBvc3NpYmxlIGxpbmssIHdoaWNoIG1ha2VzIHRoaXMgbGluayBpbnZhbGlkIChpbm5lciBsaW5rcyBiZWF0IG91dGVyIG9uZXMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRPZmZzZXQgKz0gMTtcbiAgICAgICAgY29udGludWUgdGV4dE91dGVyO1xuICAgICAgfVxuICBcbiAgICAgIC8vIENoZWNrIGZvciBjbG9zaW5nIGJyYWNrZXRcbiAgICAgIGlmIChzdHJpbmcubWF0Y2goL15cXF0vKSkge1xuICAgICAgICBicmFja2V0TGV2ZWwtLTtcbiAgICAgICAgaWYgKGJyYWNrZXRMZXZlbCA9PSAwKSB7XG4gICAgICAgICAgLy8gRm91bmQgbWF0Y2hpbmcgYnJhY2tldCBhbmQgaGF2ZW4ndCBmb3VuZCBhbnl0aGluZyBkaXNxdWFsaWZ5aW5nIHRoaXMgYXMgbGluayAvIGltYWdlLlxuICAgICAgICAgIGxpbmtUZXh0ID0gb3JpZ2luYWxTdHJpbmcuc3Vic3RyKHRleHRPZmZzZXQsIGN1cnJlbnRPZmZzZXQgLSB0ZXh0T2Zmc2V0KTtcbiAgICAgICAgICBjdXJyZW50T2Zmc2V0Kys7XG4gICAgICAgICAgY29udGludWUgdGV4dE91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLy8gTm90aGluZyBtYXRjaGVzLCBwcm9jZWVkIHRvIG5leHQgY2hhclxuICAgICAgY3VycmVudE9mZnNldCsrO1xuICAgIH1cbiAgXG4gICAgLy8gRGlkIHdlIGZpbmQgYSBsaW5rIHRleHQgKGkuZS4sIGZpbmQgYSBtYXRjaGluZyBjbG9zaW5nIGJyYWNrZXQ/KVxuICAgIGlmIChsaW5rVGV4dCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTsgLy8gTm9wZVxuICBcbiAgICAvLyBTbyBmYXIsIHNvIGdvb2QuIFdlJ3ZlIGdvdCBhIHZhbGlkIGxpbmsgdGV4dC4gTGV0J3Mgc2VlIHdoYXQgdHlwZSBvZiBsaW5rIHRoaXMgaXNcbiAgICBsZXQgbmV4dENoYXIgPSBjdXJyZW50T2Zmc2V0IDwgb3JpZ2luYWxTdHJpbmcubGVuZ3RoID8gb3JpZ2luYWxTdHJpbmcuc3Vic3RyKGN1cnJlbnRPZmZzZXQsIDEpIDogJyc7IFxuXG4gICAgLy8gUkVGRVJFTkNFIExJTktTXG4gICAgaWYgKG5leHRDaGFyID09ICdbJykge1xuICAgICAgbGV0IHN0cmluZyA9IG9yaWdpbmFsU3RyaW5nLnN1YnN0cihjdXJyZW50T2Zmc2V0KTtcbiAgICAgIGxldCBjYXAgPSBpbmxpbmVHcmFtbWFyLmxpbmtMYWJlbC5yZWdleHAuZXhlYyhzdHJpbmcpO1xuICAgICAgaWYgKGNhcCkge1xuICAgICAgICAvLyBWYWxpZCBsaW5rIGxhYmVsXG4gICAgICAgIGN1cnJlbnRPZmZzZXQgKz0gY2FwWzBdLmxlbmd0aDtcbiAgICAgICAgbGlua0xhYmVsLnB1c2goY2FwWzFdLCBjYXBbMl0sIGNhcFszXSk7XG4gICAgICAgIGlmIChjYXBbaW5saW5lR3JhbW1hci5saW5rTGFiZWwubGFiZWxQbGFjZWhvbGRlcl0pIHtcbiAgICAgICAgICAvLyBGdWxsIHJlZmVyZW5jZSBsaW5rXG4gICAgICAgICAgbGlua1JlZiA9IGNhcFtpbmxpbmVHcmFtbWFyLmxpbmtMYWJlbC5sYWJlbFBsYWNlaG9sZGVyXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDb2xsYXBzZWQgcmVmZXJlbmNlIGxpbmtcbiAgICAgICAgICBsaW5rUmVmID0gbGlua1RleHQudHJpbSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOb3QgYSB2YWxpZCBsaW5rIGxhYmVsXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gICBcbiAgICB9IGVsc2UgaWYgKG5leHRDaGFyICE9ICcoJykge1xuICAgICAgXG4gICAgICAvLyBTaG9ydGN1dCByZWYgbGlua1xuICAgICAgbGlua1JlZiA9IGxpbmtUZXh0LnRyaW0oKTtcblxuICAgIC8vIElOTElORSBMSU5LU1xuICAgIH0gZWxzZSB7IC8vIG5leHRDaGFyID09ICcoJ1xuICAgICAgXG4gICAgICAvLyBQb3RlbnRpYWwgaW5saW5lIGxpbmtcbiAgICAgIGN1cnJlbnRPZmZzZXQrKztcblxuICAgICAgbGV0IHBhcmVudGhlc2lzTGV2ZWwgPSAxO1xuICAgICAgaW5saW5lT3V0ZXI6IHdoaWxlIChjdXJyZW50T2Zmc2V0IDwgb3JpZ2luYWxTdHJpbmcubGVuZ3RoICYmIHBhcmVudGhlc2lzTGV2ZWwgPiAwKSB7XG4gICAgICAgIGxldCBzdHJpbmcgPSBvcmlnaW5hbFN0cmluZy5zdWJzdHIoY3VycmVudE9mZnNldCk7XG5cbiAgICAgICAgLy8gUHJvY2VzcyB3aGl0ZXNwYWNlXG4gICAgICAgIGxldCBjYXAgPSAvXlxccysvLmV4ZWMoc3RyaW5nKTtcbiAgICAgICAgaWYgKGNhcCkge1xuICAgICAgICAgIHN3aXRjaCAobGlua0RldGFpbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IGxpbmtEZXRhaWxzLnB1c2goY2FwWzBdKTsgYnJlYWs7IC8vIE9wZW5pbmcgd2hpdGVzcGFjZVxuICAgICAgICAgICAgY2FzZSAxOiBsaW5rRGV0YWlscy5wdXNoKGNhcFswXSk7IGJyZWFrOy8vIE9wZW4gZGVzdGluYXRpb24sIGJ1dCBub3QgYSBkZXN0aW5hdGlvbiB5ZXQ7IGRlc2luYXRpb24gb3BlbmVkIHdpdGggPFxuICAgICAgICAgICAgY2FzZSAyOiAvLyBPcGVuIGRlc3RpbmF0aW9uIHdpdGggY29udGVudCBpbiBpdC4gV2hpdGVzcGFjZSBvbmx5IGFsbG93ZWQgaWYgb3BlbmVkIGJ5IGFuZ2xlIGJyYWNrZXQsIG90aGVyd2lzZSB0aGlzIGNsb3NlcyB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgaWYgKGxpbmtEZXRhaWxzWzBdLm1hdGNoKC88LykpIHtcbiAgICAgICAgICAgICAgICBsaW5rRGV0YWlsc1sxXSA9IGxpbmtEZXRhaWxzWzFdLmNvbmNhdChjYXBbMF0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRoZXNpc0xldmVsICE9IDEpIHJldHVybiBmYWxzZTsgLy8gVW5iYWxhbmNlZCBwYXJlbnRoZXNpc1xuICAgICAgICAgICAgICAgIGxpbmtEZXRhaWxzLnB1c2goJycpOyAvLyBFbXB0eSBlbmQgZGVsaW1pdGVyIGZvciBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICAgIGxpbmtEZXRhaWxzLnB1c2goY2FwWzBdKTsgLy8gV2hpdGVzcGFjZSBpbiBiZXR3ZWVuIGRlc3RpbmF0aW9uIGFuZCB0aXRsZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOiBsaW5rRGV0YWlscy5wdXNoKGNhcFswXSk7IGJyZWFrOyAvLyBXaGl0ZXNwYWNlIGJldHdlZW4gZGVzdGluYXRpb24gYW5kIHRpdGxlXG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBmYWxzZTsgLy8gVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuIChubyBvcGVuZXIgZm9yIHRpdGxlIHlldCwgYnV0IG1vcmUgd2hpdGVzcGFjZSB0byBjYXB0dXJlKVxuICAgICAgICAgICAgY2FzZSA1OiBsaW5rRGV0YWlscy5wdXNoKCcnKTsgLy8gV2hpdGVzcGFjZSBhdCBiZWdpbm5pbmcgb2YgdGl0bGUsIHB1c2ggZW1wdHkgdGl0bGUgYW5kIGNvbnRpbnVlXG4gICAgICAgICAgICBjYXNlIDY6IGxpbmtEZXRhaWxzWzVdID0gbGlua0RldGFpbHNbNV0uY29uY2F0KGNhcFswXSk7IGJyZWFrOyAvLyBXaGl0ZXNwYWNlIGluIHRpdGxlXG4gICAgICAgICAgICBjYXNlIDc6IGxpbmtEZXRhaWxzWzZdID0gbGlua0RldGFpbHNbNl0uY29uY2F0KGNhcFswXSk7IGJyZWFrOyAvLyBXaGl0ZXNwYWNlIGFmdGVyIGNsb3NpbmcgZGVsaW1pdGVyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7IC8vIFdlIHNob3VsZCBuZXZlciBnZXQgaGVyZVxuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJyZW50T2Zmc2V0ICs9IGNhcFswXS5sZW5ndGg7XG4gICAgICAgICAgY29udGludWUgaW5saW5lT3V0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcm9jZXNzIGJhY2tzbGFzaCBlc2NhcGVzXG4gICAgICAgIGNhcCA9IGlubGluZUdyYW1tYXIuZXNjYXBlLnJlZ2V4cC5leGVjKHN0cmluZyk7XG4gICAgICAgIGlmIChjYXApIHtcbiAgICAgICAgICBzd2l0Y2ggKGxpbmtEZXRhaWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiBsaW5rRGV0YWlscy5wdXNoKCcnKTsgLy8gdGhpcyBvcGVucyB0aGUgbGluayBkZXN0aW5hdGlvbiwgYWRkIGVtcHR5IG9wZW5pbmcgZGVsaW1pdGVyIGFuZCBwcm9jZWVkIHRvIG5leHQgY2FzZVxuICAgICAgICAgICAgY2FzZSAxOiBsaW5rRGV0YWlscy5wdXNoKGNhcFswXSk7IGJyZWFrOyAvLyBUaGlzIG9wZW5zIHRoZSBsaW5rIGRlc3RpbmF0aW9uLCBhcHBlbmQgaXRcbiAgICAgICAgICAgIGNhc2UgMjogbGlua0RldGFpbHNbMV0gPSBsaW5rRGV0YWlsc1sxXS5jb25jYXQoY2FwWzBdKTsgYnJlYWs7IC8vIFBhcnQgb2YgdGhlIGxpbmsgZGVzdGluYXRpb25cbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIGZhbHNlOyAvLyBMYWNraW5nIG9wZW5pbmcgZGVsaW1pdGVyIGZvciBsaW5rIHRpdGxlXG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBmYWxzZTsgLy8gTGNha2luZyBvcGVuaW5nIGRlbGltaXRlciBmb3IgbGluayB0aXRsZVxuICAgICAgICAgICAgY2FzZSA1OiBsaW5rRGV0YWlscy5wdXNoKCcnKTsgLy8gVGhpcyBvcGVucyB0aGUgbGluayB0aXRsZVxuICAgICAgICAgICAgY2FzZSA2OiBsaW5rRGV0YWlsc1s1XSA9IGxpbmtEZXRhaWxzWzVdLmNvbmNhdChjYXBbMF0pOyBicmVhazsgLy8gUGFydCBvZiB0aGUgbGluayB0aXRsZVxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlOyAvLyBBZnRlciBsaW5rIHRpdGxlIHdhcyBjbG9zZWQsIHdpdGhvdXQgY2xvc2luZyBwYXJlbnRoZXNpc1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJyZW50T2Zmc2V0ICs9IGNhcFswXS5sZW5ndGg7XG4gICAgICAgICAgY29udGludWUgaW5saW5lT3V0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcm9jZXNzIG9wZW5pbmcgYW5nbGUgYnJhY2tldCBhcyBkZWlsaW1pdGVyIG9mIGRlc3RpbmF0aW9uXG4gICAgICAgIGlmIChsaW5rRGV0YWlscy5sZW5ndGggPCAyICYmIHN0cmluZy5tYXRjaCgvXjwvKSkge1xuICAgICAgICAgIGlmIChsaW5rRGV0YWlscy5sZW5ndGggPT0gMCkgbGlua0RldGFpbHMucHVzaCgnJyk7XG4gICAgICAgICAgbGlua0RldGFpbHNbMF0gPSBsaW5rRGV0YWlsc1swXS5jb25jYXQoJzwnKTtcbiAgICAgICAgICBjdXJyZW50T2Zmc2V0Kys7XG4gICAgICAgICAgY29udGludWUgaW5saW5lT3V0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcm9jZXNzIGNsb3NpbmcgYW5nbGUgYnJhY2tldCBhcyBkZWxpbWl0ZXIgb2YgZGVzdGluYXRpb25cbiAgICAgICAgaWYgKChsaW5rRGV0YWlscy5sZW5ndGggPT0gMSB8fCBsaW5rRGV0YWlscy5sZW5ndGggPT0gMikgJiYgc3RyaW5nLm1hdGNoKC9ePi8pKSB7XG4gICAgICAgICAgaWYgKGxpbmtEZXRhaWxzLmxlbmd0aCA9PSAxKSBsaW5rRGV0YWlscy5wdXNoKCcnKTsgLy8gRW1wdHkgbGluayBkZXN0aW5hdGlvblxuICAgICAgICAgIGxpbmtEZXRhaWxzLnB1c2goJz4nKTtcbiAgICAgICAgICBjdXJyZW50T2Zmc2V0Kys7XG4gICAgICAgICAgY29udGludWUgaW5saW5lT3V0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcm9jZXNzICBub24tcGFyZW50aGVzaXMgZGVsaW1pdGVyIGZvciB0aXRsZS4gXG4gICAgICAgIGNhcCA9IC9eW1wiJ10vLmV4ZWMoc3RyaW5nKVxuICAgICAgICAvLyBGb3IgdGhpcyB0byBiZSBhIHZhbGlkIG9wZW5lciwgd2UgaGF2ZSB0byBlaXRoZXIgaGF2ZSBubyBkZXN0aW5hdGlvbiwgb25seSB3aGl0ZXNwYWNlIHNvIGZhcixcbiAgICAgICAgLy8gb3IgYSBkZXN0aW5hdGlvbiB3aXRoIHRyYWlsaW5nIHdoaXRlc3BhY2UuXG4gICAgICAgIGlmIChjYXAgJiYgKGxpbmtEZXRhaWxzLmxlbmd0aCA9PSAwIHx8IGxpbmtEZXRhaWxzLmxlbmd0aCA9PSAxIHx8IGxpbmtEZXRhaWxzLmxlbmd0aCA9PSA0KSkge1xuICAgICAgICAgIHdoaWxlIChsaW5rRGV0YWlscy5sZW5ndGggPCA0KSBsaW5rRGV0YWlscy5wdXNoKCcnKTtcbiAgICAgICAgICBsaW5rRGV0YWlscy5wdXNoKGNhcFswXSk7XG4gICAgICAgICAgY3VycmVudE9mZnNldCsrO1xuICAgICAgICAgIGNvbnRpbnVlIGlubGluZU91dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRm9yIHRoaXMgdG8gYmUgYSB2YWxpZCBjbG9zZXIsIHdlIGhhdmUgdG8gaGF2ZSBhbiBvcGVuZXIgYW5kIHNvbWUgb3Igbm8gdGl0bGUsIGFuZCB0aGlzIGhhcyB0byBtYXRjaCB0aGUgb3BlbmVyXG4gICAgICAgIGlmIChjYXAgJiYgKGxpbmtEZXRhaWxzLmxlbmd0aCA9PSA1IHx8IGxpbmtEZXRhaWxzLmxlbmd0aCA9PSA2KSAmJiBsaW5rRGV0YWlsc1s0XSA9PSBjYXBbMF0pIHtcbiAgICAgICAgICBpZiAobGlua0RldGFpbHMubGVuZ3RoID09IDUpIGxpbmtEZXRhaWxzLnB1c2goJycpOyAvLyBFbXB0eSBsaW5rIHRpdGxlXG4gICAgICAgICAgbGlua0RldGFpbHMucHVzaChjYXBbMF0pO1xuICAgICAgICAgIGN1cnJlbnRPZmZzZXQrKztcbiAgICAgICAgICBjb250aW51ZSBpbmxpbmVPdXRlcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlciBjYXNlcyAobGlua0RldGFpbHMubGVuZ3RoID09IDIsIDMsIDcpIHdpbGwgYmUgaGFuZGxlZCB3aXRoIHRoZSBcImRlZmF1bHRcIiBjYXNlIGJlbG93LlxuXG4gICAgICAgIC8vIFByb2Nlc3Mgb3BlbmluZyBwYXJlbnRoZXNpc1xuICAgICAgICBpZiAoc3RyaW5nLm1hdGNoKC9eXFwoLykpIHtcbiAgICAgICAgICBzd2l0Y2ggKGxpbmtEZXRhaWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiBsaW5rRGV0YWlscy5wdXNoKCcnKTsgLy8gdGhpcyBvcGVucyB0aGUgbGluayBkZXN0aW5hdGlvbiwgYWRkIGVtcHR5IG9wZW5pbmcgZGVsaW1pdGVyIGFuZCBwcm9jZWVkIHRvIG5leHQgY2FzZVxuICAgICAgICAgICAgY2FzZSAxOiBsaW5rRGV0YWlscy5wdXNoKCcnKTsgLy8gVGhpcyBvcGVucyB0aGUgbGluayBkZXN0aW5hdGlvblxuICAgICAgICAgICAgY2FzZSAyOiAvLyBQYXJ0IG9mIHRoZSBsaW5rIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIGxpbmtEZXRhaWxzWzFdID0gbGlua0RldGFpbHNbMV0uY29uY2F0KCcoJyk7IFxuICAgICAgICAgICAgICBpZiAoIWxpbmtEZXRhaWxzWzBdLm1hdGNoKC88JC8pKSBwYXJlbnRoZXNpc0xldmVsKys7ICBcbiAgICAgICAgICAgICAgYnJlYWs7IFxuICAgICAgICAgICAgY2FzZSAzOiBsaW5rRGV0YWlscy5wdXNoKCcnKTsgIC8vICBvcGVuaW5nIGRlbGltaXRlciBmb3IgbGluayB0aXRsZVxuICAgICAgICAgICAgY2FzZSA0OiBsaW5rRGV0YWlscy5wdXNoKCcoJyk7IGJyZWFrOy8vIG9wZW5pbmcgZGVsaW1pdGVyIGZvciBsaW5rIHRpdGxlXG4gICAgICAgICAgICBjYXNlIDU6IGxpbmtEZXRhaWxzLnB1c2goJycpOyAvLyBvcGVucyB0aGUgbGluayB0aXRsZSwgYWRkIGVtcHR5IHRpdGxlIGNvbnRlbnQgYW5kIHByb2NlZWQgdG8gbmV4dCBjYXNlIFxuICAgICAgICAgICAgY2FzZSA2Oi8vIFBhcnQgb2YgdGhlIGxpbmsgdGl0bGUuIFVuLWVzY2FwZWQgcGFyZW50aGVzaXMgb25seSBhbGxvd2VkIGluIFwiIG9yICcgZGVsaW1pdGVkIHRpdGxlXG4gICAgICAgICAgICAgIGlmIChsaW5rRGV0YWlsc1s0XSA9PSAnKCcpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgbGlua0RldGFpbHNbNV0gPSBsaW5rRGV0YWlsc1s1XS5jb25jYXQoJygnKTsgXG4gICAgICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTsgLy8gQWZ0ZXIgbGluayB0aXRsZSB3YXMgY2xvc2VkLCB3aXRob3V0IGNsb3NpbmcgcGFyZW50aGVzaXNcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudE9mZnNldCsrO1xuICAgICAgICAgIGNvbnRpbnVlIGlubGluZU91dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvY2VzcyBjbG9zaW5nIHBhcmVudGhlc2lzXG4gICAgICAgIGlmIChzdHJpbmcubWF0Y2goL15cXCkvKSkge1xuICAgICAgICAgIGlmIChsaW5rRGV0YWlscy5sZW5ndGggPD0gMikge1xuICAgICAgICAgICAgLy8gV2UgYXJlIGluc2lkZSB0aGUgbGluayBkZXN0aW5hdGlvbi4gUGFyZW50aGVzZXMgaGF2ZSB0byBiZSBtYXRjaGVkIGlmIG5vdCBpbiBhbmdsZSBicmFja2V0c1xuICAgICAgICAgICAgd2hpbGUgKGxpbmtEZXRhaWxzLmxlbmd0aCA8IDIpIGxpbmtEZXRhaWxzLnB1c2goJycpO1xuXG4gICAgICAgICAgICBpZiAoIWxpbmtEZXRhaWxzWzBdLm1hdGNoKC88JC8pKSBwYXJlbnRoZXNpc0xldmVsLS07XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnRoZXNpc0xldmVsID4gMCkge1xuICAgICAgICAgICAgICBsaW5rRGV0YWlsc1sxXSA9IGxpbmtEZXRhaWxzWzFdLmNvbmNhdCgnKScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgfSBlbHNlIGlmIChsaW5rRGV0YWlscy5sZW5ndGggPT0gNSB8fCBsaW5rRGV0YWlscy5sZW5ndGggPT0gNikge1xuICAgICAgICAgICAgLy8gV2UgYXJlIGluc2lkZSB0aGUgbGluayB0aXRsZS4gXG4gICAgICAgICAgICBpZiAobGlua0RldGFpbHNbNF0gPT0gJygnKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgY2xvc2VzIHRoZSBsaW5rIHRpdGxlXG4gICAgICAgICAgICAgIGlmIChsaW5rRGV0YWlscy5sZW5ndGggPT0gNSkgbGlua0RldGFpbHMucHVzaCgnJyk7XG4gICAgICAgICAgICAgIGxpbmtEZXRhaWxzLnB1c2goJyknKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEp1c3QgcmVndWxhciBvbCcgY29udGVudFxuICAgICAgICAgICAgICBpZiAobGlua0RldGFpbHMubGVuZ3RoID09IDUpIGxpbmtEZXRhaWxzLnB1c2goJyknKTtcbiAgICAgICAgICAgICAgZWxzZSBsaW5rRGV0YWlsc1s1XSA9IGxpbmtEZXRhaWxzWzVdLmNvbmNhdCgnKScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgcGFyZW50aGVzaXNMZXZlbC0tOyAvLyBUaGlzIHNob3VsZCBkZWNyZWFzZSBpdCBmcm9tIDEgdG8gMC4uLlxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwYXJlbnRoZXNpc0xldmVsID09IDApIHtcbiAgICAgICAgICAgIC8vIE5vIGludmFsaWQgY29uZGl0aW9uLCBsZXQncyBtYWtlIHN1cmUgdGhlIGxpbmtEZXRhaWxzIGFycmF5IGlzIGNvbXBsZXRlXG4gICAgICAgICAgICB3aGlsZSAobGlua0RldGFpbHMubGVuZ3RoIDwgNykgbGlua0RldGFpbHMucHVzaCgnJyk7XG4gICAgICAgICAgfSBcblxuICAgICAgICAgIGN1cnJlbnRPZmZzZXQrKztcbiAgICAgICAgICBjb250aW51ZSBpbmxpbmVPdXRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFueSBvbGQgY2hhcmFjdGVyXG4gICAgICAgIGNhcCA9IC9eLi8uZXhlYyhzdHJpbmcpO1xuICAgICAgICBpZiAoY2FwKSB7XG4gICAgICAgICAgc3dpdGNoIChsaW5rRGV0YWlscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogbGlua0RldGFpbHMucHVzaCgnJyk7IC8vIHRoaXMgb3BlbnMgdGhlIGxpbmsgZGVzdGluYXRpb24sIGFkZCBlbXB0eSBvcGVuaW5nIGRlbGltaXRlciBhbmQgcHJvY2VlZCB0byBuZXh0IGNhc2VcbiAgICAgICAgICAgIGNhc2UgMTogbGlua0RldGFpbHMucHVzaChjYXBbMF0pOyBicmVhazsgLy8gVGhpcyBvcGVucyB0aGUgbGluayBkZXN0aW5hdGlvbiwgYXBwZW5kIGl0XG4gICAgICAgICAgICBjYXNlIDI6IGxpbmtEZXRhaWxzWzFdID0gbGlua0RldGFpbHNbMV0uY29uY2F0KGNhcFswXSk7IGJyZWFrOyAvLyBQYXJ0IG9mIHRoZSBsaW5rIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBmYWxzZTsgLy8gTGFja2luZyBvcGVuaW5nIGRlbGltaXRlciBmb3IgbGluayB0aXRsZVxuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gZmFsc2U7IC8vIExjYWtpbmcgb3BlbmluZyBkZWxpbWl0ZXIgZm9yIGxpbmsgdGl0bGVcbiAgICAgICAgICAgIGNhc2UgNTogbGlua0RldGFpbHMucHVzaCgnJyk7IC8vIFRoaXMgb3BlbnMgdGhlIGxpbmsgdGl0bGVcbiAgICAgICAgICAgIGNhc2UgNjogbGlua0RldGFpbHNbNV0gPSBsaW5rRGV0YWlsc1s1XS5jb25jYXQoY2FwWzBdKTsgYnJlYWs7IC8vIFBhcnQgb2YgdGhlIGxpbmsgdGl0bGVcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTsgLy8gQWZ0ZXIgbGluayB0aXRsZSB3YXMgY2xvc2VkLCB3aXRob3V0IGNsb3NpbmcgcGFyZW50aGVzaXNcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudE9mZnNldCArPSBjYXBbMF0ubGVuZ3RoO1xuICAgICAgICAgIGNvbnRpbnVlIGlubGluZU91dGVyO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFwiSW5maW5pdGUgbG9vcFwiOyAvLyB3ZSBzaG91bGQgbmV2ZXIgZ2V0IGhlcmUgc2luY2UgdGhlIGxhc3QgdGVzdCBtYXRjaGVzIGFueSBjaGFyYWN0ZXJcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnRoZXNpc0xldmVsID4gMCkgcmV0dXJuIGZhbHNlOyAvLyBQYXJlbnRoZXMoZXMpIG5vdCBjbG9zZWRcblxuICAgIH1cblxuICAgIGlmIChsaW5rUmVmICE9PSBmYWxzZSkge1xuICAgICAgLy8gUmVmIGxpbms7IGNoZWNrIHRoYXQgbGlua1JlZiBpcyB2YWxpZFxuICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBsYWJlbCBvZiB0aGlzLmxpbmtMYWJlbHMpIHtcbiAgICAgICAgaWYgKGxhYmVsID09IGxpbmtSZWYpIHtcbiAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBsYWJlbCA9IHZhbGlkID8gXCJUTUxpbmtMYWJlbCBUTUxpbmtMYWJlbF9WYWxpZFwiIDogXCJUTUxpbmtMYWJlbCBUTUxpbmtMYWJlbF9JbnZhbGlkXCJcbiAgICAgIGxldCBvdXRwdXQgPSBgPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrXyR7dHlwZX1cIj4ke29wZW5lcn08L3NwYW4+PHNwYW4gY2xhc3M9XCIke3R5cGV9ICR7KGxpbmtMYWJlbC5sZW5ndGggPCAzIHx8ICFsaW5rTGFiZWxbMV0pID8gbGFiZWwgOiBcIlwifVwiPiR7dGhpcy5wcm9jZXNzSW5saW5lU3R5bGVzKGxpbmtUZXh0KX08L3NwYW4+PHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrXyR7dHlwZX1cIj5dPC9zcGFuPmA7XG5cbiAgICAgIGlmIChsaW5rTGFiZWwubGVuZ3RoID49IDMpIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0LmNvbmNhdChcbiAgICAgICAgICBgPHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrXyR7dHlwZX1cIj4ke2xpbmtMYWJlbFswXX08L3NwYW4+YCxcbiAgICAgICAgICBgPHNwYW4gY2xhc3M9XCIke2xhYmVsfVwiPiR7bGlua0xhYmVsWzFdfTwvc3Bhbj5gLFxuICAgICAgICAgIGA8c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfJHt0eXBlfVwiPiR7bGlua0xhYmVsWzJdfTwvc3Bhbj5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvdXRwdXQgOiBvdXRwdXQsXG4gICAgICAgIGNoYXJDb3VudCA6ICBjdXJyZW50T2Zmc2V0XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGxpbmtEZXRhaWxzKSB7XG4gICAgICAvLyBJbmxpbmUgbGlua1xuXG4gICAgICAvLyBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW4sIGJ1dCBiZXR0ZXIgc2FmZSB0aGFuIHNvcnJ5LlxuICAgICAgd2hpbGUgKGxpbmtEZXRhaWxzLmxlbmd0aCA8IDcpIHtcbiAgICAgICAgbGlua0RldGFpbHMucHVzaCgnJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG91dHB1dDogYDxzcGFuIGNsYXNzPVwiVE1NYXJrIFRNTWFya18ke3R5cGV9XCI+JHtvcGVuZXJ9PC9zcGFuPjxzcGFuIGNsYXNzPVwiJHt0eXBlfVwiPiR7dGhpcy5wcm9jZXNzSW5saW5lU3R5bGVzKGxpbmtUZXh0KX08L3NwYW4+PHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrXyR7dHlwZX1cIj5dKCR7bGlua0RldGFpbHNbMF19PC9zcGFuPjxzcGFuIGNsYXNzPVwiJHt0eXBlfURlc3RpbmF0aW9uXCI+JHtsaW5rRGV0YWlsc1sxXX08L3NwYW4+PHNwYW4gY2xhc3M9XCJUTU1hcmsgVE1NYXJrXyR7dHlwZX1cIj4ke2xpbmtEZXRhaWxzWzJdfSR7bGlua0RldGFpbHNbM119JHtsaW5rRGV0YWlsc1s0XX08L3NwYW4+PHNwYW4gY2xhc3M9XCIke3R5cGV9VGl0bGVcIj4ke2xpbmtEZXRhaWxzWzVdfTwvc3Bhbj48c3BhbiBjbGFzcz1cIlRNTWFyayBUTU1hcmtfJHt0eXBlfVwiPiR7bGlua0RldGFpbHNbNl19KTwvc3Bhbj5gLFxuICAgICAgICBjaGFyQ291bnQ6IGN1cnJlbnRPZmZzZXRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBGb3JtYXRzIGEgbWFya2Rvd24gc3RyaW5nIGFzIEhUTUwsIHVzaW5nIE1hcmtkb3duIGlubGluZSBmb3JtYXR0aW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3JpZ2luYWxTdHJpbmcgVGhlIGlucHV0IChtYXJrZG93biBpbmxpbmUgZm9ybWF0dGVkKSBzdHJpbmdcbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIEhUTUwgZm9ybWF0dGVkIG91dHB1dFxuICAgKi9cbiAgcHJvY2Vzc0lubGluZVN0eWxlcyhvcmlnaW5hbFN0cmluZykge1xuICAgIGxldCBwcm9jZXNzZWQgPSAnJztcbiAgICBsZXQgc3RhY2sgPSBbXTsgLy8gU3RhY2sgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBvZiB0aGUgZm9ybWF0OiB7ZGVsaW1pdGVyLCBkZWxpbVN0cmluZywgY291bnQsIG91dHB1dH1cbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBsZXQgc3RyaW5nID0gb3JpZ2luYWxTdHJpbmc7XG4gIFxuICBcbiAgICBvdXRlcjogd2hpbGUgKHN0cmluZykge1xuICAgICAgLy8gUHJvY2VzcyBzaW1wbGUgcnVsZXMgKG5vbi1kZWxpbWl0ZXIpXG4gICAgICBmb3IgKGxldCBydWxlIG9mIFsnZXNjYXBlJywgJ2NvZGUnLCAnYXV0b2xpbmsnLCAnaHRtbCddKSB7XG4gICAgICAgIGxldCBjYXAgPSBpbmxpbmVHcmFtbWFyW3J1bGVdLnJlZ2V4cC5leGVjKHN0cmluZyk7XG4gICAgICAgIGlmIChjYXApIHtcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc3Vic3RyKGNhcFswXS5sZW5ndGgpO1xuICAgICAgICAgIG9mZnNldCArPSBjYXBbMF0ubGVuZ3RoO1xuICAgICAgICAgIHByb2Nlc3NlZCArPSBpbmxpbmVHcmFtbWFyW3J1bGVdLnJlcGxhY2VtZW50XG4gICAgICAgICAgICAvLyAucmVwbGFjZSgvXFwkXFwkKFsxLTldKS9nLCAoc3RyLCBwMSkgPT4gcHJvY2Vzc0lubGluZVN0eWxlcyhjYXBbcDFdKSkgLy8gdG9kbyByZWN1cnNpdmUgY2FsbGluZ1xuICAgICAgICAgICAgLnJlcGxhY2UoL1xcJChbMS05XSkvZywgKHN0ciwgcDEpID0+IGh0bWxlc2NhcGUoY2FwW3AxXSkpO1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyOyBcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIENoZWNrIGZvciBsaW5rcyAvIGltYWdlc1xuICAgICAgbGV0IHBvdGVudGlhbExpbmsgPSBzdHJpbmcubWF0Y2goaW5saW5lR3JhbW1hci5saW5rT3Blbi5yZWdleHApO1xuICAgICAgbGV0IHBvdGVudGlhbEltYWdlID0gc3RyaW5nLm1hdGNoKGlubGluZUdyYW1tYXIuaW1hZ2VPcGVuLnJlZ2V4cCk7XG4gICAgICBpZiAocG90ZW50aWFsSW1hZ2UgfHwgcG90ZW50aWFsTGluaykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZUxpbmtPckltYWdlKHN0cmluZywgcG90ZW50aWFsSW1hZ2UpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcHJvY2Vzc2VkID0gYCR7cHJvY2Vzc2VkfSR7cmVzdWx0Lm91dHB1dH1gO1xuICAgICAgICAgIHN0cmluZyA9IHN0cmluZy5zdWJzdHIocmVzdWx0LmNoYXJDb3VudCk7XG4gICAgICAgICAgb2Zmc2V0ICs9IHJlc3VsdC5jaGFyQ291bnQ7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQ2hlY2sgZm9yIGVtIC8gc3Ryb25nIGRlbGltaXRlcnNcbiAgICAgIGxldCBjYXAgPSAvKF5cXCorKXwoXl8rKS8uZXhlYyhzdHJpbmcpO1xuICAgICAgaWYgKGNhcCkge1xuICAgICAgICBsZXQgZGVsaW1Db3VudCA9IGNhcFswXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGRlbGltU3RyaW5nID0gY2FwWzBdO1xuICAgICAgICBjb25zdCBjdXJyZW50RGVsaW1pdGVyID0gY2FwWzBdWzBdOyAvLyBUaGlzIHNob3VsZCBiZSAqIG9yIF9cbiAgXG4gICAgICAgIHN0cmluZyA9IHN0cmluZy5zdWJzdHIoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBcbiAgICAgICAgLy8gV2UgaGF2ZSBhIGRlbGltaXRlciBydW4uIExldCdzIGNoZWNrIGlmIGl0IGNhbiBvcGVuIG9yIGNsb3NlIGFuIGVtcGhhc2lzLlxuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJlY2VkaW5nID0gKG9mZnNldCA+IDApID8gb3JpZ2luYWxTdHJpbmcuc3Vic3RyKDAsIG9mZnNldCkgOiAnICc7IC8vIGJlZ2lubmluZyBhbmQgZW5kIG9mIGxpbmUgY291bnQgYXMgd2hpdGVzcGFjZVxuICAgICAgICBjb25zdCBmb2xsb3dpbmcgPSAob2Zmc2V0ICsgY2FwWzBdLmxlbmd0aCA8IG9yaWdpbmFsU3RyaW5nLmxlbmd0aCkgPyBzdHJpbmcgOiAnICc7XG4gIFxuICAgICAgICBjb25zdCBwdW5jdHVhdGlvbkZvbGxvd3MgPSBmb2xsb3dpbmcubWF0Y2gocHVuY3R1YXRpb25MZWFkaW5nKTtcbiAgICAgICAgY29uc3QgcHVuY3R1YXRpb25QcmVjZWRlcyA9IHByZWNlZGluZy5tYXRjaChwdW5jdHVhdGlvblRyYWlsaW5nKTtcbiAgICAgICAgY29uc3Qgd2hpdGVzcGFjZUZvbGxvd3MgPSBmb2xsb3dpbmcubWF0Y2goL15cXHMvKTtcbiAgICAgICAgY29uc3Qgd2hpdGVzcGFjZVByZWNlZGVzID0gcHJlY2VkaW5nLm1hdGNoKC9cXHMkLyk7XG4gIFxuICAgICAgICAvLyBUaGVzZSBhcmUgdGhlIHJ1bGVzIGZvciByaWdodC1mbGFua2luZyBhbmQgbGVmdC1mbGFua2luZyBkZWxpbWl0ZXIgcnVucyBhcyBwZXIgQ29tbW9uTWFyayBzcGVjXG4gICAgICAgIGxldCBjYW5PcGVuID0gIXdoaXRlc3BhY2VGb2xsb3dzICYmICghcHVuY3R1YXRpb25Gb2xsb3dzIHx8ICEhd2hpdGVzcGFjZVByZWNlZGVzIHx8ICEhcHVuY3R1YXRpb25QcmVjZWRlcyk7XG4gICAgICAgIGxldCBjYW5DbG9zZSA9ICF3aGl0ZXNwYWNlUHJlY2VkZXMgJiYgKCFwdW5jdHVhdGlvblByZWNlZGVzIHx8ICEhd2hpdGVzcGFjZUZvbGxvd3MgfHwgISFwdW5jdHVhdGlvbkZvbGxvd3MpO1xuICBcbiAgICAgICAgLy8gVW5kZXJzY29yZXMgaGF2ZSBtb3JlIGRldGFpbGVkIHJ1bGVzIHRoYW4ganVzdCBiZWluZyBwYXJ0IG9mIGxlZnQtIG9yIHJpZ2h0LWZsYW5raW5nIHJ1bjpcbiAgICAgICAgaWYgKGN1cnJlbnREZWxpbWl0ZXIgPT0gJ18nICYmIGNhbk9wZW4gJiYgY2FuQ2xvc2UpIHtcbiAgICAgICAgICBjYW5PcGVuID0gcHVuY3R1YXRpb25QcmVjZWRlcztcbiAgICAgICAgICBjYW5DbG9zZSA9IHB1bmN0dWF0aW9uRm9sbG93cztcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gSWYgdGhlIGRlbGltaXRlciBjYW4gY2xvc2UsIGNoZWNrIHRoZSBzdGFjayBpZiB0aGVyZSdzIHNvbWV0aGluZyBpdCBjYW4gY2xvc2VcbiAgICAgICAgaWYgKGNhbkNsb3NlKSB7XG4gICAgICAgICAgbGV0IHN0YWNrUG9pbnRlciA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgLy8gU2VlIGlmIHdlIGNhbiBmaW5kIGEgbWF0Y2hpbmcgb3BlbmluZyBkZWxpbWl0ZXIsIG1vdmUgZG93biB0aHJvdWdoIHRoZSBzdGFja1xuICAgICAgICAgIHdoaWxlIChkZWxpbUNvdW50ICYmIHN0YWNrUG9pbnRlciA+PSAwKSB7XG4gICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2tQb2ludGVyXS5kZWxpbWl0ZXIgPT0gY3VycmVudERlbGltaXRlcikge1xuICAgICAgICAgICAgICAvLyBXZSBmb3VuZCBhIG1hdGNoaW5nIGRlbGltaXRlciwgbGV0J3MgY29uc3RydWN0IHRoZSBmb3JtYXR0ZWQgc3RyaW5nXG4gIFxuICAgICAgICAgICAgICAvLyBGaXJzdGx5LCBpZiB3ZSBza2lwcGVkIGFueSBzdGFjayBsZXZlbHMsIHBvcCB0aGVtIGltbWVkaWF0ZWx5IChub24tbWF0Y2hpbmcgZGVsaW1pdGVycylcbiAgICAgICAgICAgICAgd2hpbGUgKHN0YWNrUG9pbnRlciA8IHN0YWNrLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZCA9IGAke2VudHJ5Lm91dHB1dH0ke2VudHJ5LmRlbGltU3RyaW5nLnN1YnN0cigwLCBlbnRyeS5jb3VudCl9JHtwcm9jZXNzZWR9YDtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgLy8gVGhlbiwgZm9ybWF0IHRoZSBzdHJpbmdcbiAgICAgICAgICAgICAgaWYgKGRlbGltQ291bnQgPj0gMiAmJiBzdGFja1tzdGFja1BvaW50ZXJdLmNvdW50ID49IDIpIHtcbiAgICAgICAgICAgICAgICAvLyBTdHJvbmdcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWQgPSBgPHNwYW4gY2xhc3M9XCJUTU1hcmtcIj4ke2N1cnJlbnREZWxpbWl0ZXJ9JHtjdXJyZW50RGVsaW1pdGVyfTwvc3Bhbj48c3Ryb25nIGNsYXNzPVwiVE1TdHJvbmdcIj4ke3Byb2Nlc3NlZH08L3N0cm9uZz48c3BhbiBjbGFzcz1cIlRNTWFya1wiPiR7Y3VycmVudERlbGltaXRlcn0ke2N1cnJlbnREZWxpbWl0ZXJ9PC9zcGFuPmA7XG4gICAgICAgICAgICAgICAgZGVsaW1Db3VudCAtPSAyO1xuICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrUG9pbnRlcl0uY291bnQgLT0gMjtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBFbVxuICAgICAgICAgICAgICAgIHByb2Nlc3NlZCA9IGA8c3BhbiBjbGFzcz1cIlRNTWFya1wiPiR7Y3VycmVudERlbGltaXRlcn08L3NwYW4+PGVtIGNsYXNzPVwiVE1FbVwiPiR7cHJvY2Vzc2VkfTwvZW0+PHNwYW4gY2xhc3M9XCJUTU1hcmtcIj4ke2N1cnJlbnREZWxpbWl0ZXJ9PC9zcGFuPmA7XG4gICAgICAgICAgICAgICAgZGVsaW1Db3VudCAtPSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrUG9pbnRlcl0uY291bnQgLT0gMTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgLy8gSWYgdGhhdCBzdGFjayBsZXZlbCBpcyBlbXB0eSBub3csIHBvcCBpdFxuICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2tQb2ludGVyXS5jb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVudHJ5ID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkID0gYCR7ZW50cnkub3V0cHV0fSR7cHJvY2Vzc2VkfWBcbiAgICAgICAgICAgICAgICBzdGFja1BvaW50ZXItLTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgc3RhY2sgbGV2ZWwncyBkZWxpbWl0ZXIgdHlwZSBkb2Vzbid0IG1hdGNoIHRoZSBjdXJyZW50IGRlbGltaXRlciB0eXBlXG4gICAgICAgICAgICAgIC8vIEdvIGRvd24gb25lIGxldmVsIGluIHRoZSBzdGFja1xuICAgICAgICAgICAgICBzdGFja1BvaW50ZXItLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIHN0aWxsIGRlbGltaXRlcnMgbGVmdCwgYW5kIHRoZSBkZWxpbWl0ZXIgcnVuIGNhbiBvcGVuLCBwdXNoIGl0IG9uIHRoZSBzdGFja1xuICAgICAgICBpZiAoZGVsaW1Db3VudCAmJiBjYW5PcGVuKSB7XG4gICAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgICBkZWxpbWl0ZXI6IGN1cnJlbnREZWxpbWl0ZXIsXG4gICAgICAgICAgICBkZWxpbVN0cmluZzogZGVsaW1TdHJpbmcsXG4gICAgICAgICAgICBjb3VudDogZGVsaW1Db3VudCxcbiAgICAgICAgICAgIG91dHB1dDogcHJvY2Vzc2VkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcHJvY2Vzc2VkID0gJyc7IC8vIEN1cnJlbnQgZm9ybWF0dGVkIG91dHB1dCBoYXMgYmVlbiBwdXNoZWQgb24gdGhlIHN0YWNrIGFuZCB3aWxsIGJlIHByZXBlbmRlZCB3aGVuIHRoZSBzdGFjayBnZXRzIHBvcHBlZFxuICAgICAgICAgIGRlbGltQ291bnQgPSAwO1xuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBBbnkgZGVsaW1pdGVycyB0aGF0IGFyZSBsZWZ0IChjbG9zaW5nIHVubWF0Y2hlZCkgYXJlIGFwcGVuZGVkIHRvIHRoZSBvdXRwdXQuXG4gICAgICAgIGlmIChkZWxpbUNvdW50KSB7XG4gICAgICAgICAgcHJvY2Vzc2VkID0gYCR7cHJvY2Vzc2VkfSR7ZGVsaW1TdHJpbmcuc3Vic3RyKDAsZGVsaW1Db3VudCl9YDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgb2Zmc2V0ICs9IGNhcFswXS5sZW5ndGg7XG4gICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBmb3Igc3RyaWtldGhyb3VnaCBkZWxpbWl0ZXJcbiAgICAgIGNhcCA9IC9efn4vLmV4ZWMoc3RyaW5nKTtcbiAgICAgIGlmIChjYXApIHtcbiAgICAgICAgbGV0IGNvbnN1bWVkID0gZmFsc2U7XG4gICAgICAgIGxldCBzdGFja1BvaW50ZXIgPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAvLyBTZWUgaWYgd2UgY2FuIGZpbmQgYSBtYXRjaGluZyBvcGVuaW5nIGRlbGltaXRlciwgbW92ZSBkb3duIHRocm91Z2ggdGhlIHN0YWNrXG4gICAgICAgIHdoaWxlICghY29uc3VtZWQgJiYgc3RhY2tQb2ludGVyID49IDApIHtcbiAgICAgICAgICBpZiAoc3RhY2tbc3RhY2tQb2ludGVyXS5kZWxpbWl0ZXIgPT0gJ34nKSB7XG4gICAgICAgICAgICAvLyBXZSBmb3VuZCBhIG1hdGNoaW5nIGRlbGltaXRlciwgbGV0J3MgY29uc3RydWN0IHRoZSBmb3JtYXR0ZWQgc3RyaW5nXG5cbiAgICAgICAgICAgIC8vIEZpcnN0bHksIGlmIHdlIHNraXBwZWQgYW55IHN0YWNrIGxldmVscywgcG9wIHRoZW0gaW1tZWRpYXRlbHkgKG5vbi1tYXRjaGluZyBkZWxpbWl0ZXJzKVxuICAgICAgICAgICAgd2hpbGUgKHN0YWNrUG9pbnRlciA8IHN0YWNrLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgY29uc3QgZW50cnkgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgcHJvY2Vzc2VkID0gYCR7ZW50cnkub3V0cHV0fSR7ZW50cnkuZGVsaW1TdHJpbmcuc3Vic3RyKDAsIGVudHJ5LmNvdW50KX0ke3Byb2Nlc3NlZH1gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUaGVuLCBmb3JtYXQgdGhlIHN0cmluZ1xuICAgICAgICAgICAgcHJvY2Vzc2VkID0gYDxzcGFuIGNsYXNzPVwiVE1NYXJrXCI+fn48L3NwYW4+PGRlbCBjbGFzcz1cIlRNU3RyaWtldGhyb3VnaFwiPiR7cHJvY2Vzc2VkfTwvZGVsPjxzcGFuIGNsYXNzPVwiVE1NYXJrXCI+fn48L3NwYW4+YDtcbiAgICAgICAgICAgIGxldCBlbnRyeSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkID0gYCR7ZW50cnkub3V0cHV0fSR7cHJvY2Vzc2VkfWBcbiAgICAgICAgICAgIGNvbnN1bWVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhpcyBzdGFjayBsZXZlbCdzIGRlbGltaXRlciB0eXBlIGRvZXNuJ3QgbWF0Y2ggdGhlIGN1cnJlbnQgZGVsaW1pdGVyIHR5cGVcbiAgICAgICAgICAgIC8vIEdvIGRvd24gb25lIGxldmVsIGluIHRoZSBzdGFja1xuICAgICAgICAgICAgc3RhY2tQb2ludGVyLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgc3RpbGwgZGVsaW1pdGVycyBsZWZ0LCBhbmQgdGhlIGRlbGltaXRlciBydW4gY2FuIG9wZW4sIHB1c2ggaXQgb24gdGhlIHN0YWNrXG4gICAgICAgIGlmICghY29uc3VtZWQpIHtcbiAgICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICAgIGRlbGltaXRlcjogJ34nLFxuICAgICAgICAgICAgZGVsaW1TdHJpbmc6ICd+ficsXG4gICAgICAgICAgICBjb3VudDogMixcbiAgICAgICAgICAgIG91dHB1dDogcHJvY2Vzc2VkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcHJvY2Vzc2VkID0gJyc7IC8vIEN1cnJlbnQgZm9ybWF0dGVkIG91dHB1dCBoYXMgYmVlbiBwdXNoZWQgb24gdGhlIHN0YWNrIGFuZCB3aWxsIGJlIHByZXBlbmRlZCB3aGVuIHRoZSBzdGFjayBnZXRzIHBvcHBlZFxuICAgICAgICB9XG5cbiAgICAgICAgb2Zmc2V0ICs9IGNhcFswXS5sZW5ndGg7XG4gICAgICAgIHN0cmluZyA9IHN0cmluZy5zdWJzdHIoY2FwWzBdLmxlbmd0aCk7IFxuICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgIH1cbiAgICAgIFxuICBcbiAgICAgIC8vIFByb2Nlc3MgJ2RlZmF1bHQnIHJ1bGVcbiAgICAgIGNhcCA9IGlubGluZUdyYW1tYXIuZGVmYXVsdC5yZWdleHAuZXhlYyhzdHJpbmcpO1xuICAgICAgaWYgKGNhcCkge1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc3Vic3RyKGNhcFswXS5sZW5ndGgpO1xuICAgICAgICBvZmZzZXQgKz0gY2FwWzBdLmxlbmd0aDtcbiAgICAgICAgcHJvY2Vzc2VkICs9IGlubGluZUdyYW1tYXIuZGVmYXVsdC5yZXBsYWNlbWVudFxuICAgICAgICAgIC5yZXBsYWNlKC9cXCQoWzEtOV0pL2csIChzdHIsIHAxKSA9PiBodG1sZXNjYXBlKGNhcFtwMV0pKTtcbiAgICAgICAgY29udGludWUgb3V0ZXI7IFxuICAgICAgfVxuICAgICAgdGhyb3cgJ0luZmluaXRlIGxvb3AhJztcbiAgICB9XG4gIFxuICAgIC8vIEVtcHR5IHRoZSBzdGFjaywgYW55IG9wZW5pbmcgZGVsaW1pdGVycyBhcmUgdW51c2VkXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgY29uc3QgZW50cnkgPSBzdGFjay5wb3AoKTtcbiAgICAgIHByb2Nlc3NlZCA9IGAke2VudHJ5Lm91dHB1dH0ke2VudHJ5LmRlbGltU3RyaW5nLnN1YnN0cigwLCBlbnRyeS5jb3VudCl9JHtwcm9jZXNzZWR9YDtcbiAgICB9XG4gIFxuICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gIH1cblxuICAvKiogXG4gICAqIENsZWFycyB0aGUgbGluZSBkaXJ0eSBmbGFnIChyZXNldHMgaXQgdG8gYW4gYXJyYXkgb2YgZmFsc2UpXG4gICAqL1xuICBjbGVhckRpcnR5RmxhZygpIHtcbiAgICB0aGlzLmxpbmVEaXJ0eSA9IG5ldyBBcnJheSh0aGlzLmxpbmVzLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVEaXJ0eS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5saW5lRGlydHlbaV0gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgY2xhc3MgcHJvcGVydGllcyAobGluZXMsIGxpbmVFbGVtZW50cykgZnJvbSB0aGUgRE9NLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGNvbnRlbnRzIGNoYW5nZWRcbiAgICovXG4gIHVwZGF0ZUxpbmVDb250ZW50cygpIHtcbiAgICAvLyB0aGlzLmxpbmVEaXJ0eSA9IFtdOyBcbiAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGNoYW5nZWQgYW55dGhpbmcgYWJvdXQgdGhlIG51bWJlciBvZiBsaW5lcyAoaW5zZXJ0ZWQgb3IgZGVsZXRlZCBhIHBhcmFncmFwaClcbiAgICAvLyA8IDAgbWVhbnMgbGluZShzKSByZW1vdmVkOyA+IDAgbWVhbnMgbGluZShzKSBhZGRlZFxuICAgIGxldCBsaW5lRGVsdGEgPSB0aGlzLmUuY2hpbGRFbGVtZW50Q291bnQgLSB0aGlzLmxpbmVzLmxlbmd0aDtcbiAgICBpZiAobGluZURlbHRhKSB7XG4gICAgICAvLyB5dXAuIExldCdzIHRyeSBob3cgbXVjaCB3ZSBjYW4gc2FsdmFnZSAoZmluZCBvdXQgd2hpY2ggbGluZXMgZnJvbSBiZWdpbm5pbmcgYW5kIGVuZCB3ZXJlIHVuY2hhbmdlZClcbiAgICAgIC8vIEZpbmQgbGluZXMgZnJvbSB0aGUgYmVnaW5uaW5nIHRoYXQgaGF2ZW4ndCBjaGFuZ2VkLi4uXG4gICAgICBsZXQgZmlyc3RDaGFuZ2VkTGluZSA9IDA7XG4gICAgICB3aGlsZSAoXG4gICAgICAgICAgZmlyc3RDaGFuZ2VkTGluZSA8PSB0aGlzLmxpbmVzLmxlbmd0aCBcbiAgICAgICAgICAmJiBmaXJzdENoYW5nZWRMaW5lIDw9IHRoaXMubGluZUVsZW1lbnRzLmxlbmd0aFxuICAgICAgICAgICYmIHRoaXMubGluZUVsZW1lbnRzW2ZpcnN0Q2hhbmdlZExpbmVdIC8vIENoZWNrIHRoYXQgdGhlIGxpbmUgZWxlbWVudCBoYXNuJ3QgYmVlbiBkZWxldGVkXG4gICAgICAgICAgJiYgdGhpcy5saW5lc1tmaXJzdENoYW5nZWRMaW5lXSA9PSB0aGlzLmxpbmVFbGVtZW50c1tmaXJzdENoYW5nZWRMaW5lXS50ZXh0Q29udGVudFxuICAgICAgKSB7XG4gICAgICAgIGZpcnN0Q2hhbmdlZExpbmUrKztcbiAgICAgIH1cblxuICAgICAgLy8gRW5kIGFsc28gZnJvbSB0aGUgZW5kXG4gICAgICBsZXQgbGFzdENoYW5nZWRMaW5lID0gLTE7XG4gICAgICB3aGlsZSAoXG4gICAgICAgICAgLWxhc3RDaGFuZ2VkTGluZSA8IHRoaXMubGluZXMubGVuZ3RoIFxuICAgICAgICAgICYmIC1sYXN0Q2hhbmdlZExpbmUgPCB0aGlzLmxpbmVFbGVtZW50cy5sZW5ndGhcbiAgICAgICAgICAmJiB0aGlzLmxpbmVzW3RoaXMubGluZXMubGVuZ3RoICsgbGFzdENoYW5nZWRMaW5lXSA9PSB0aGlzLmxpbmVFbGVtZW50c1t0aGlzLmxpbmVFbGVtZW50cy5sZW5ndGggKyBsYXN0Q2hhbmdlZExpbmVdLnRleHRDb250ZW50XG4gICAgICApIHtcbiAgICAgICAgbGFzdENoYW5nZWRMaW5lLS07XG4gICAgICB9XG5cbiAgICAgIGxldCBsaW5lc1RvRGVsZXRlID0gdGhpcy5saW5lcy5sZW5ndGggKyBsYXN0Q2hhbmdlZExpbmUgKyAxIC0gZmlyc3RDaGFuZ2VkTGluZTtcbiAgICAgIGlmIChsaW5lc1RvRGVsZXRlIDwgLWxpbmVEZWx0YSkgbGluZXNUb0RlbGV0ZSA9IC1saW5lRGVsdGE7XG4gICAgICBpZiAobGluZXNUb0RlbGV0ZSA8IDApIGxpbmVzVG9EZWxldGUgPSAwO1xuXG4gICAgICBsZXQgbGluZXNUb0FkZCA9IFtdO1xuICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCBsaW5lc1RvRGVsZXRlICsgbGluZURlbHRhOyBsKyspIHtcbiAgICAgICAgbGluZXNUb0FkZC5wdXNoKHRoaXMubGluZUVsZW1lbnRzW2ZpcnN0Q2hhbmdlZExpbmUgKyBsXS50ZXh0Q29udGVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNwbGljZUxpbmVzKGZpcnN0Q2hhbmdlZExpbmUsIGxpbmVzVG9EZWxldGUsIGxpbmVzVG9BZGQsIGZhbHNlKTtcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyBsaW5lcyBhZGRlZCBvciByZW1vdmVkXG4gICAgICBmb3IgKGxldCBsaW5lID0gMDsgbGluZSA8IHRoaXMubGluZUVsZW1lbnRzLmxlbmd0aDsgbGluZSsrKSB7XG4gICAgICAgIGxldCBlID0gdGhpcy5saW5lRWxlbWVudHNbbGluZV07XG4gICAgICAgIGxldCBjdCA9IGUudGV4dENvbnRlbnQ7XG4gICAgICAgIGlmICh0aGlzLmxpbmVzW2xpbmVdICE9PSBjdCkge1xuICAgICAgICAgIC8vIExpbmUgY2hhbmdlZCwgdXBkYXRlIGl0XG4gICAgICAgICAgdGhpcy5saW5lc1tsaW5lXSA9IGN0O1xuICAgICAgICAgIHRoaXMubGluZURpcnR5W2xpbmVdID0gdHJ1ZTsgXG4gICAgICAgIH0gXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByb2Nlc3NlcyBhIG5ldyBwYXJhZ3JhcGguXG4gICAqIEBwYXJhbSBzZWwgVGhlIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAqL1xuICBwcm9jZXNzTmV3UGFyYWdyYXBoKHNlbCkge1xuICAgIGlmICghc2VsKSByZXR1cm47XG5cbiAgICAvLyBVcGRhdGUgbGluZXMgZnJvbSBjb250ZW50XG4gICAgdGhpcy51cGRhdGVMaW5lQ29udGVudHMoKTtcblxuICAgIGxldCBjb250aW51YWJsZVR5cGUgPSBmYWxzZTtcbiAgICAvLyBMZXQncyBzZWUgaWYgd2UgbmVlZCB0byBjb250aW51ZSBhIGxpc3RcblxuICAgIGxldCBjaGVja0xpbmUgPSBzZWwuY29sID4gMCA/IHNlbC5yb3cgOiBzZWwucm93IC0gMTtcbiAgICBzd2l0Y2ggKHRoaXMubGluZVR5cGVzW2NoZWNrTGluZV0pIHtcbiAgICAgIGNhc2UgJ1RNVUwnOiBjb250aW51YWJsZVR5cGUgPSAnVE1VTCc7IGJyZWFrO1xuICAgICAgY2FzZSAnVE1PTCc6IGNvbnRpbnVhYmxlVHlwZSA9ICdUTU9MJzsgYnJlYWs7XG4gICAgICBjYXNlICdUTUluZGVudGVkQ29kZSc6IGNvbnRpbnVhYmxlVHlwZSA9ICdUTUluZGVudGVkQ29kZSc7IGJyZWFrO1xuICAgIH1cblxuICAgIGxldCBsaW5lcyA9IHRoaXMubGluZXNbc2VsLnJvd10ucmVwbGFjZSgvXFxuXFxuJC8sICdcXG4nKS5zcGxpdCgvKD86XFxyXFxufFxcbnxcXHIpLyk7XG4gICAgaWYgKGxpbmVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAvLyBObyBuZXcgbGluZVxuICAgICAgdGhpcy51cGRhdGVGb3JtYXR0aW5nKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3BsaWNlTGluZXMoc2VsLnJvdywgMSwgbGluZXMsIHRydWUpO1xuICAgIHNlbC5yb3crKztcbiAgICBzZWwuY29sID0gMDtcblxuICAgIGlmIChjb250aW51YWJsZVR5cGUpIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBwcmV2aW91cyBsaW5lIHdhcyBub24tZW1wdHlcbiAgICAgIGxldCBjYXB0dXJlID0gbGluZUdyYW1tYXJbY29udGludWFibGVUeXBlXS5yZWdleHAuZXhlYyh0aGlzLmxpbmVzW3NlbC5yb3cgLSAxXSk7XG4gICAgICBpZiAoY2FwdHVyZSkge1xuICAgICAgICAvLyBDb252ZW50aW9uOiBjYXB0dXJlWzFdIGlzIHRoZSBsaW5lIHR5cGUgbWFya2VyLCBjYXB0dXJlWzJdIGlzIHRoZSBjb250ZW50XG4gICAgICAgIGlmIChjYXB0dXJlWzJdKSB7XG4gICAgICAgICAgLy8gUHJldmlvdXMgbGluZSBoYXMgY29udGVudCwgY29udGludWUgdGhlIGNvbnRpbnVhYmxlIHR5cGVcblxuICAgICAgICAgIC8vIEhhY2sgZm9yIE9MOiBpbmNyZW1lbnQgbnVtYmVyXG4gICAgICAgICAgaWYgKGNvbnRpbnVhYmxlVHlwZSA9PSAnVE1PTCcpIHtcbiAgICAgICAgICAgIGNhcHR1cmVbMV0gPSBjYXB0dXJlWzFdLnJlcGxhY2UoL1xcZHsxLDl9LywgKHJlc3VsdCkgPT4geyByZXR1cm4gcGFyc2VJbnQocmVzdWx0WzBdKSArIDF9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5saW5lc1tzZWwucm93XSA9IGAke2NhcHR1cmVbMV19JHt0aGlzLmxpbmVzW3NlbC5yb3ddfWA7XG4gICAgICAgICAgdGhpcy5saW5lRGlydHlbc2VsLnJvd10gPSB0cnVlO1xuICAgICAgICAgIHNlbC5jb2wgPSBjYXB0dXJlWzFdLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBQcmV2aW91cyBsaW5lIGhhcyBubyBjb250ZW50LCByZW1vdmUgdGhlIGNvbnRpbnVhYmxlIHR5cGUgZnJvbSB0aGUgcHJldmlvdXMgcm93XG4gICAgICAgICAgdGhpcy5saW5lc1tzZWwucm93IC0gMV0gPSAnJztcbiAgICAgICAgICB0aGlzLmxpbmVEaXJ0eVtzZWwucm93IC0gMV0gPSB0cnVlO1xuICAgICAgICB9ICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVGb3JtYXR0aW5nKCk7XG4gIH1cblxuICAvLyAvKipcbiAgLy8gICogUHJvY2Vzc2VzIGEgXCJkZWxldGVcIiBpbnB1dCBhY3Rpb24uXG4gIC8vICAqIEBwYXJhbSB7b2JqZWN0fSBmb2N1cyBUaGUgc2VsZWN0aW9uXG4gIC8vICAqIEBwYXJhbSB7Ym9vbGVhbn0gZm9yd2FyZCBJZiB0cnVlLCBwZXJmb3JtcyBhIGZvcndhcmQgZGVsZXRlLCBvdGhlcndpc2UgcGVyZm9ybXMgYSBiYWNrd2FyZCBkZWxldGVcbiAgLy8gICovXG4gIC8vIHByb2Nlc3NEZWxldGUoZm9jdXMsIGZvcndhcmQpIHtcbiAgLy8gICBpZiAoIWZvY3VzKSByZXR1cm47XG4gIC8vICAgbGV0IGFuY2hvciA9IHRoaXMuZ2V0U2VsZWN0aW9uKHRydWUpO1xuICAvLyAgIC8vIERvIHdlIGhhdmUgYSBub24tZW1wdHkgc2VsZWN0aW9uPyBcbiAgLy8gICBpZiAoZm9jdXMuY29sICE9IGFuY2hvci5jb2wgfHwgZm9jdXMucm93ICE9IGFuY2hvci5yb3cpIHtcbiAgLy8gICAgIC8vIG5vbi1lbXB0eS4gZGlyZWN0aW9uIGRvZXNuJ3QgbWF0dGVyLlxuICAvLyAgICAgdGhpcy5wYXN0ZSgnJywgYW5jaG9yLCBmb2N1cyk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGlmIChmb3J3YXJkKSB7XG4gIC8vICAgICAgIGlmIChmb2N1cy5jb2wgPCB0aGlzLmxpbmVzW2ZvY3VzLnJvd10ubGVuZ3RoKSB0aGlzLnBhc3RlKCcnLCB7cm93OiBmb2N1cy5yb3csIGNvbDogZm9jdXMuY29sICsgMX0sIGZvY3VzKTtcbiAgLy8gICAgICAgZWxzZSBpZiAoZm9jdXMuY29sIDwgdGhpcy5saW5lcy5sZW5ndGgpIHRoaXMucGFzdGUoJycsIHtyb3c6IGZvY3VzLnJvdyArIDEsIGNvbDogMH0sIGZvY3VzKTtcbiAgLy8gICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSdyZSBhdCB0aGUgdmVyeSBlbmQgYW5kIGNhbid0IGRlbGV0ZSBmb3J3YXJkXG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICBpZiAoZm9jdXMuY29sID4gMCkgdGhpcy5wYXN0ZSgnJywge3JvdzogZm9jdXMucm93LCBjb2w6IGZvY3VzLmNvbCAtIDF9LCBmb2N1cyk7XG4gIC8vICAgICAgIGVsc2UgaWYgKGZvY3VzLnJvdyA+IDApIHRoaXMucGFzdGUoJycsIHtyb3c6IGZvY3VzLnJvdyAtIDEsIGNvbDogdGhpcy5saW5lc1tmb2N1cy5yb3cgLSAxXS5sZW5ndGggLSAxfSwgZm9jdXMpO1xuICAvLyAgICAgICAvLyBPdGhlcndpc2UsIHdlJ3JlIGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyBhbmQgY2FuJ3QgZGVsZXRlIGJhY2t3YXJkc1xuICAvLyAgICAgfVxuICAvLyAgIH1cblxuICAvLyB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHNlbGVjdGlvbiBjb3VudGVkIGJ5IHJvdyBhbmQgY29sdW1uIG9mIHRoZSBlZGl0b3IgTWFya2Rvd24gY29udGVudCAoYXMgb3Bwb3NlZCB0byB0aGUgcG9zaXRpb24gaW4gdGhlIERPTSkuXG4gICAqIFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGdldEFuY2hvciBpZiBzZXQgdG8gdHJ1ZSwgZ2V0cyB0aGUgc2VsZWN0aW9uIGFuY2hvciAoc3RhcnQgcG9pbnQgb2YgdGhlIHNlbGVjdGlvbiksIG90aGVyd2lzZSBnZXRzIHRoZSBmb2N1cyAoZW5kIHBvaW50KS5cbiAgICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzZWxlY3Rpb24sIHdpdGggcHJvcGVydGllcyBjb2wgYW5kIHJvdy5cbiAgICovXG4gIGdldFNlbGVjdGlvbihnZXRBbmNob3IgPSBmYWxzZSkge1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICBsZXQgc3RhcnROb2RlID0gKGdldEFuY2hvciA/IHNlbGVjdGlvbi5hbmNob3JOb2RlIDogc2VsZWN0aW9uLmZvY3VzTm9kZSk7XG4gICAgaWYgKCFzdGFydE5vZGUpIHJldHVybiBudWxsO1xuICAgIGxldCBvZmZzZXQgPSBzdGFydE5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFID8gKGdldEFuY2hvciA/IHNlbGVjdGlvbi5hbmNob3JPZmZzZXQgOiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpIDogMDtcbiAgXG4gICAgaWYgKHN0YXJ0Tm9kZSA9PSB0aGlzLmUpIHtcbiAgICAgIHJldHVybiB7cm93OiAwLCBjb2w6IG9mZnNldH07XG4gICAgfVxuXG4gICAgbGV0IGNvbCA9IHRoaXMuY29tcHV0ZUNvbHVtbihzdGFydE5vZGUsIG9mZnNldCk7ICAgIFxuICAgIGlmIChjb2wgPT09IG51bGwpIHJldHVybiBudWxsOyAvLyBXZSBhcmUgb3V0c2lkZSBvZiB0aGUgZWRpdG9yXG5cbiAgICAvLyBGaW5kIHRoZSByb3cgbm9kZVxuICAgIGxldCBub2RlID0gc3RhcnROb2RlO1xuICAgIHdoaWxlIChub2RlLnBhcmVudEVsZW1lbnQgIT0gdGhpcy5lKSB7XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIGxldCByb3cgPSAwO1xuICAgIC8vIENoZWNrIGlmIHdlIGNhbiByZWFkIGEgbGluZSBudW1iZXIgZnJvbSB0aGUgZGF0YS1saW5lLW51bSBhdHRyaWJ1dGUuXG4gICAgLy8gVGhlIGxhc3QgY29uZGl0aW9uIGlzIGEgc2VjdXJpdHkgbWVhc3VyZSBzaW5jZSBpbnNlcnRpbmcgYSBuZXcgcGFyYWdyYXBoIGNvcGllcyB0aGUgcHJldmlvdXMgcm93cycgbGluZSBudW1iZXJcbiAgICBpZiAobm9kZS5kYXRhc2V0ICYmIG5vZGUuZGF0YXNldC5saW5lTnVtICYmICghbm9kZS5wcmV2aW91c1NpYmxpbmcgfHwgbm9kZS5wcmV2aW91c1NpYmxpbmcuZGF0YXNldC5saW5lTnVtICE9IG5vZGUuZGF0YXNldC5saW5lTnVtICkpIHtcbiAgICAgIHJvdyA9IHBhcnNlSW50KG5vZGUuZGF0YXNldC5saW5lTnVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKG5vZGUucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgIHJvdysrO1xuICAgICAgICBub2RlID0gbm9kZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7cm93OiByb3csIGNvbDogY29sLCBub2RlOiBzdGFydE5vZGV9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIGEgY29sdW1uIHdpdGhpbiBhbiBlZGl0b3IgbGluZSBmcm9tIGEgbm9kZSBhbmQgb2Zmc2V0IHdpdGhpbiB0aGF0IG5vZGUuXG4gICAqIEBwYXJhbSB7Tm9kZX0gc3RhcnROb2RlIFRoZSBub2RlXG4gICAqIEBwYXJhbSB7aW50fSBvZmZzZXQgVEhlIHNlbGVjdGlvblxuICAgKiBAcmV0dXJucyB7aW50fSB0aGUgY29sdW1uLCBvciBudWxsIGlmIHRoZSBub2RlIGlzIG5vdCBpbnNpZGUgdGhlIGVkaXRvclxuICAgKi9cbiAgY29tcHV0ZUNvbHVtbihzdGFydE5vZGUsIG9mZnNldCkge1xuICAgIGxldCBub2RlID0gc3RhcnROb2RlO1xuICAgIGxldCBjb2wgPSBvZmZzZXQ7XG4gICAgLy8gRmlyc3QsIG1ha2Ugc3VyZSB3ZSdyZSBhY3R1YWxseSBpbiB0aGUgZWRpdG9yLlxuICAgIHdoaWxlIChub2RlICYmIG5vZGUucGFyZW50Tm9kZSAhPSB0aGlzLmUpIHtcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIGlmIChub2RlID09IG51bGwpIHJldHVybiBudWxsO1xuICAgIFxuICAgIG5vZGUgPSBzdGFydE5vZGU7XG4gICAgd2hpbGUgKG5vZGUucGFyZW50Tm9kZSAhPSB0aGlzLmUpIHtcbiAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZykge1xuICAgICAgICBub2RlID0gbm9kZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIGNvbCArPSBub2RlLnRleHRDb250ZW50Lmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2w7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgRE9NIG5vZGUgYW5kIG9mZnNldCB3aXRoaW4gdGhhdCBub2RlIGZyb20gYSBwb3NpdGlvbiBleHByZXNzZWQgYXMgcm93IGFuZCBjb2x1bW4uXG4gICAqIEBwYXJhbSB7aW50fSByb3cgUm93IChsaW5lIG51bWJlcilcbiAgICogQHBhcmFtIHtpbnR9IGNvbCBDb2x1bW5cbiAgICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXM6IG5vZGUgYW5kIG9mZnNldC4gb2Zmc2V0IG1heSBiZSBudWxsO1xuICAgKi9cbiAgY29tcHV0ZU5vZGVBbmRPZmZzZXQocm93LCBjb2wsIGJpbmRSaWdodCA9IGZhbHNlKSB7XG4gICAgaWYgKHJvdyA+PSB0aGlzLmxpbmVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIFNlbGVjdGlvbiBwYXN0IHRoZSBlbmQgb2YgdGV4dCwgc2V0IHNlbGVjdGlvbiB0byBlbmQgb2YgdGV4dFxuICAgICAgcm93ID0gdGhpcy5saW5lRWxlbWVudHMubGVuZ3RoIC0gMTtcbiAgICAgIGNvbCA9IHRoaXMubGluZXNbcm93XS5sZW5ndGg7XG4gICAgfSBcbiAgICBpZiAoY29sID4gdGhpcy5saW5lc1tyb3ddLmxlbmd0aCkge1xuICAgICAgY29sID0gdGhpcy5saW5lc1tyb3ddLmxlbmd0aDtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMubGluZUVsZW1lbnRzW3Jvd107XG4gICAgbGV0IG5vZGUgPSBwYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XG5cbiAgICBsZXQgY2hpbGRyZW5Db21wbGV0ZSA9IGZhbHNlO1xuICAgIC8vIGRlZmF1bHQgcmV0dXJuIHZhbHVlXG4gICAgbGV0IHJ2ID0ge25vZGU6IHBhcmVudE5vZGUuZmlyc3RDaGlsZCA/IHBhcmVudE5vZGUuZmlyc3RDaGlsZCA6IHBhcmVudE5vZGUsIG9mZnNldDogMH07XG5cbiAgICB3aGlsZSAobm9kZSAhPSBwYXJlbnROb2RlKSB7XG4gICAgICBpZiAoIWNoaWxkcmVuQ29tcGxldGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVZhbHVlLmxlbmd0aCA+PSBjb2wpIHtcbiAgICAgICAgICBpZiAoYmluZFJpZ2h0ICYmIG5vZGUubm9kZVZhbHVlLmxlbmd0aCA9PSBjb2wpIHtcbiAgICAgICAgICAgIC8vIFNlbGVjdGlvbiBpcyBhdCB0aGUgZW5kIG9mIHRoaXMgdGV4dCBub2RlLCBidXQgd2UgYXJlIGJpbmRpbmcgcmlnaHQgKHByZWZlciBhbiBvZmZzZXQgb2YgMCBpbiB0aGUgbmV4dCB0ZXh0IG5vZGUpXG4gICAgICAgICAgICAvLyBSZW1lbWJlciByZXR1cm4gdmFsdWUgaW4gY2FzZSB3ZSBkb24ndCBmaW5kIGFub3RoZXIgdGV4dCBub2RlXG4gICAgICAgICAgICBydiA9IHtub2RlOiBub2RlLCBvZmZzZXQ6IGNvbH07XG4gICAgICAgICAgICBjb2wgPSAwO1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybih7bm9kZTogbm9kZSwgb2Zmc2V0OiBjb2x9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sIC09IG5vZGUubm9kZVZhbHVlLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICAgIGlmICghY2hpbGRyZW5Db21wbGV0ZSAmJiBub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5uZXh0U2libGluZykge1xuICAgICAgICBjaGlsZHJlbkNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGRyZW5Db21wbGV0ZSA9IHRydWU7XG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRWl0aGVyLCB0aGUgcG9zaXRpb24gd2FzIGludmFsaWQgYW5kIHdlIGp1c3QgcmV0dXJuIHRoZSBkZWZhdWx0IHJldHVybiB2YWx1ZVxuICAgIC8vIE9yIHdlIGFyZSBiaW5kaW5nIHJpZ2h0IGFuZCB0aGUgc2VsZWN0aW9uIGlzIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmVcbiAgICByZXR1cm4gcnY7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgc2VsZWN0aW9uIGJhc2VkIG9uIHJvd3MgYW5kIGNvbHVtbnMgd2l0aGluIHRoZSBlZGl0b3IgTWFya2Rvd24gY29udGVudC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGZvY3VzIE9iamVjdCByZXByZXNlbnRpbmcgdGhlIHNlbGVjdGlvbiwgbmVlZHMgdG8gaGF2ZSBwcm9wZXJ0aWVzIHJvdyBhbmQgY29sLlxuICAgKiBAcGFyYW0gYW5jaG9yIEFuY2hvciBvZiB0aGUgc2VsZWN0aW9uLiBJZiBub3QgZ2l2ZW4sIGFzc3VtZXMgdGhlIGN1cnJlbnQgYW5jaG9yLlxuICAgKi9cbiAgc2V0U2VsZWN0aW9uKGZvY3VzLCBhbmNob3IgPSBudWxsKSB7XG4gICAgaWYgKCFmb2N1cykgcmV0dXJuO1xuXG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuICAgIGxldCB7bm9kZTogZm9jdXNOb2RlLCBvZmZzZXQ6IGZvY3VzT2Zmc2V0fSA9IHRoaXMuY29tcHV0ZU5vZGVBbmRPZmZzZXQoZm9jdXMucm93LCBmb2N1cy5jb2wsIChhbmNob3IgJiYgYW5jaG9yLnJvdyA9PSBmb2N1cy5yb3cgJiYgYW5jaG9yLmNvbCA+IGZvY3VzLmNvbCkpOyAvLyBCaW5kIHNlbGVjdGlvbiByaWdodCBpZiBhbmNob3IgaXMgaW4gdGhlIHNhbWUgcm93IGFuZCBiZWhpbmQgdGhlIGZvY3VzXG4gICAgbGV0IGFuY2hvck5vZGUgPSBudWxsLCBhbmNob3JPZmZzZXQgPSBudWxsO1xuICAgIGlmIChhbmNob3IgJiYgKGFuY2hvci5yb3cgIT0gZm9jdXMucm93IHx8IGFuY2hvci5jb2wgIT0gZm9jdXMuY29sKSkge1xuICAgICAgbGV0IHtub2RlLCBvZmZzZXR9ID0gdGhpcy5jb21wdXRlTm9kZUFuZE9mZnNldChhbmNob3Iucm93LCBhbmNob3IuY29sLCBmb2N1cy5yb3cgPT0gYW5jaG9yLnJvdyAmJiBmb2N1cy5jb2wgPiBhbmNob3IuY29sKTtcbiAgICAgIGFuY2hvck5vZGUgPSBub2RlO1xuICAgICAgYW5jaG9yT2Zmc2V0ID0gb2Zmc2V0O1xuICAgIH1cblxuICAgIGlmIChhbmNob3JOb2RlKSByYW5nZS5zZXRTdGFydChhbmNob3JOb2RlLCBhbmNob3JPZmZzZXQpO1xuICAgIGVsc2UgcmFuZ2Uuc2V0U3RhcnQoZm9jdXNOb2RlLCBmb2N1c09mZnNldCk7XG4gICAgcmFuZ2Uuc2V0RW5kKGZvY3VzTm9kZSwgZm9jdXNPZmZzZXQpO1xuICAgIFxuICAgIGxldCB3aW5kb3dTZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgd2luZG93U2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHdpbmRvd1NlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gIH1cblxuICAvKiogXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGlucHV0IGV2ZW50cyBcbiAgICovXG4gIGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcbiAgICBsZXQgZm9jdXMgPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuXG4gICAgaWYgKChldmVudC5pbnB1dFR5cGUgPT0gJ2luc2VydFBhcmFncmFwaCcgfHwgZXZlbnQuaW5wdXRUeXBlID09ICdpbnNlcnRMaW5lQnJlYWsnKSAmJiBmb2N1cykge1xuICAgICAgdGhpcy5jbGVhckRpcnR5RmxhZygpO1xuICAgICAgdGhpcy5wcm9jZXNzTmV3UGFyYWdyYXBoKGZvY3VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLmUuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLmUuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJUTUJsYW5rTGluZVwiPjxicj48L2Rpdj4nO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGNoaWxkTm9kZSA9IHRoaXMuZS5maXJzdENoaWxkOyBjaGlsZE5vZGU7IGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5uZXh0U2libGluZykge1xuICAgICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgIT0gMyB8fCBjaGlsZE5vZGUudGFnTmFtZSAhPSAnRElWJykge1xuICAgICAgICAgICAgLy8gRm91bmQgYSBjaGlsZCBub2RlIHRoYXQncyBlaXRoZXIgbm90IGFuIGVsZW1lbnQgb3Igbm90IGEgZGl2LiBXcmFwIGl0IGluIGEgZGl2LlxuICAgICAgICAgICAgbGV0IGRpdldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRoaXMuZS5pbnNlcnRCZWZvcmUoZGl2V3JhcHBlciwgY2hpbGROb2RlKTtcbiAgICAgICAgICAgIHRoaXMuZS5yZW1vdmVDaGlsZChjaGlsZE5vZGUpO1xuICAgICAgICAgICAgZGl2V3JhcHBlci5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVMaW5lQ29udGVudHNBbmRGb3JtYXR0aW5nKCk7ICBcbiAgICB9XG4gICAgaWYgKGZvY3VzKSB0aGlzLnNldFNlbGVjdGlvbihmb2N1cyk7XG4gICAgdGhpcy5maXJlQ2hhbmdlKCk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgXCJzZWxlY3Rpb25jaGFuZ2VcIiBldmVudHMuXG4gICAqL1xuICBoYW5kbGVTZWxlY3Rpb25DaGFuZ2VFdmVudCgpIHtcbiAgICB0aGlzLmZpcmVTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0byBcInNwbGljZVwiIG5ldyBsaW5lcyBpbnRvIHRoZSBhcnJheXMgdGhpcy5saW5lcywgdGhpcy5saW5lRGlydHksIHRoaXMubGluZVR5cGVzLCBhbmQgdGhlIERPTSBlbGVtZW50cyBcbiAgICogdW5kZXJuZWF0aCB0aGUgZWRpdG9yIGVsZW1lbnQuXG4gICAqIFRoaXMgbWV0aG9kIGlzIGVzc2VudGlhbGx5IEFycmF5LnNwbGljZSwgb25seSB0aGF0IHRoZSB0aGlyZCBwYXJhbWV0ZXIgdGFrZXMgYW4gdW4tc3ByZWFkIGFycmF5IChhbmQgdGhlIGZvcnRoIHBhcmFtZXRlcilcbiAgICogZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBET00gc2hvdWxkIGFsc28gYmUgYWRqdXN0ZWQuXG4gICAqIFxuICAgKiBAcGFyYW0ge2ludH0gc3RhcnRMaW5lIFBvc2l0aW9uIGF0IHdoaWNoIHRvIHN0YXJ0IGNoYW5naW5nIHRoZSBhcnJheSBvZiBsaW5lc1xuICAgKiBAcGFyYW0ge2ludH0gbGluZXNUb0RlbGV0ZSBOdW1iZXIgb2YgbGluZXMgdG8gZGVsZXRlXG4gICAqIEBwYXJhbSB7YXJyYXl9IGxpbmVzVG9JbnNlcnQgQXJyYXkgb2Ygc3RyaW5ncyByZXByZXNlbnRpbmcgdGhlIGxpbmVzIHRvIGJlIGluc2VydGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWRqdXN0TGluZUVsZW1lbnRzIElmIHRydWUsIHRoZW4gPGRpdj4gZWxlbWVudHMgYXJlIGFsc28gaW5zZXJ0ZWQgaW4gdGhlIERPTSBhdCB0aGUgcmVzcGVjdGl2ZSBwb3NpdGlvblxuICAgKi9cbiAgc3BsaWNlTGluZXMoc3RhcnRMaW5lLCBsaW5lc1RvRGVsZXRlID0gMCwgbGluZXNUb0luc2VydCA9IFtdLCBhZGp1c3RMaW5lRWxlbWVudHMgPSB0cnVlKSB7XG4gICAgaWYgKGFkanVzdExpbmVFbGVtZW50cykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1RvRGVsZXRlOyBpKyspIHtcbiAgICAgICAgdGhpcy5lLnJlbW92ZUNoaWxkKHRoaXMuZS5jaGlsZE5vZGVzW3N0YXJ0TGluZV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBsZXQgaW5zZXJ0ZWRCbGFuayA9IFtdO1xuICAgIGxldCBpbnNlcnRlZERpcnR5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzVG9JbnNlcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGluc2VydGVkQmxhbmsucHVzaCgnJyk7XG4gICAgICBpbnNlcnRlZERpcnR5LnB1c2godHJ1ZSk7XG4gICAgICBpZiAoYWRqdXN0TGluZUVsZW1lbnRzKSB7XG4gICAgICAgIGlmICh0aGlzLmUuY2hpbGROb2Rlc1tzdGFydExpbmVdKSB0aGlzLmUuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLHRoaXMuZS5jaGlsZE5vZGVzW3N0YXJ0TGluZV0pO1xuICAgICAgICBlbHNlIHRoaXMuZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5saW5lcy5zcGxpY2Uoc3RhcnRMaW5lLCBsaW5lc1RvRGVsZXRlLCAuLi5saW5lc1RvSW5zZXJ0KTtcbiAgICB0aGlzLmxpbmVUeXBlcy5zcGxpY2Uoc3RhcnRMaW5lLCBsaW5lc1RvRGVsZXRlLCAuLi5pbnNlcnRlZEJsYW5rKTtcbiAgICB0aGlzLmxpbmVEaXJ0eS5zcGxpY2Uoc3RhcnRMaW5lLCBsaW5lc1RvRGVsZXRlLCAuLi5pbnNlcnRlZERpcnR5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciB0aGUgXCJwYXN0ZVwiIGV2ZW50XG4gICAqL1xuICBoYW5kbGVQYXN0ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgIC8vIGdldCB0ZXh0IHJlcHJlc2VudGF0aW9uIG9mIGNsaXBib2FyZFxuICAgIGxldCB0ZXh0ID0gKGV2ZW50Lm9yaWdpbmFsRXZlbnQgfHwgZXZlbnQpLmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuXG4gICAgLy8gaW5zZXJ0IHRleHQgbWFudWFsbHlcbiAgICB0aGlzLnBhc3RlKHRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhc3RlcyB0aGUgdGV4dCBhdCB0aGUgY3VycmVudCBzZWxlY3Rpb24gKG9yIGF0IHRoZSBlbmQsIGlmIG5vIGN1cnJlbnQgc2VsZWN0aW9uKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBcbiAgICovXG4gIHBhc3RlKHRleHQsIGFuY2hvciA9IG51bGwsIGZvY3VzID0gbnVsbCkge1xuICAgIGlmICghYW5jaG9yKSBhbmNob3IgPSB0aGlzLmdldFNlbGVjdGlvbih0cnVlKTtcbiAgICBpZiAoIWZvY3VzKSBmb2N1cyA9IHRoaXMuZ2V0U2VsZWN0aW9uKGZhbHNlKTtcbiAgICBsZXQgYmVnaW5uaW5nLCBlbmQ7XG4gICAgaWYgKCFmb2N1cykge1xuICAgICAgZm9jdXMgPSB7IHJvdzogdGhpcy5saW5lcy5sZW5ndGggLSAxLCBjb2w6IHRoaXMubGluZXNbdGhpcy5saW5lcy5sZW5ndGggLSAxXS5sZW5ndGggfTsgLy8gSW5zZXJ0IGF0IGVuZFxuICAgIH1cbiAgICBpZiAoIWFuY2hvcikge1xuICAgICAgYW5jaG9yID0gZm9jdXM7XG4gICAgfVxuICAgIGlmIChhbmNob3Iucm93IDwgZm9jdXMucm93IHx8IChhbmNob3Iucm93ID09IGZvY3VzLnJvdyAmJiBhbmNob3IuY29sIDw9IGZvY3VzLmNvbCkpIHtcbiAgICAgIGJlZ2lubmluZyA9IGFuY2hvcjtcbiAgICAgIGVuZCA9IGZvY3VzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJlZ2lubmluZyA9IGZvY3VzO1xuICAgICAgZW5kID0gYW5jaG9yO1xuICAgIH1cbiAgICBsZXQgaW5zZXJ0ZWRMaW5lcyA9IHRleHQuc3BsaXQoLyg/OlxcclxcbnxcXHJ8XFxuKS8pO1xuICAgIGxldCBsaW5lQmVmb3JlID0gdGhpcy5saW5lc1tiZWdpbm5pbmcucm93XS5zdWJzdHIoMCwgYmVnaW5uaW5nLmNvbCk7XG4gICAgbGV0IGxpbmVFbmQgPSB0aGlzLmxpbmVzW2VuZC5yb3ddLnN1YnN0cihlbmQuY29sKTtcbiAgICBpbnNlcnRlZExpbmVzWzBdID0gbGluZUJlZm9yZS5jb25jYXQoaW5zZXJ0ZWRMaW5lc1swXSk7XG4gICAgbGV0IGVuZENvbFBvcyA9IGluc2VydGVkTGluZXNbaW5zZXJ0ZWRMaW5lcy5sZW5ndGggLSAxXS5sZW5ndGg7XG4gICAgaW5zZXJ0ZWRMaW5lc1tpbnNlcnRlZExpbmVzLmxlbmd0aCAtIDFdID0gaW5zZXJ0ZWRMaW5lc1tpbnNlcnRlZExpbmVzLmxlbmd0aCAtIDFdLmNvbmNhdChsaW5lRW5kKTtcbiAgICB0aGlzLnNwbGljZUxpbmVzKGJlZ2lubmluZy5yb3csIDEgKyBlbmQucm93IC0gYmVnaW5uaW5nLnJvdywgaW5zZXJ0ZWRMaW5lcyk7XG4gICAgZm9jdXMucm93ID0gYmVnaW5uaW5nLnJvdyArIGluc2VydGVkTGluZXMubGVuZ3RoIC0gMTtcbiAgICBmb2N1cy5jb2wgPSBlbmRDb2xQb3M7XG4gICAgdGhpcy51cGRhdGVGb3JtYXR0aW5nKCk7XG4gICAgdGhpcy5zZXRTZWxlY3Rpb24oZm9jdXMpO1xuICAgIHRoaXMuZmlyZUNoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSAobG93ZXN0IGluIHRoZSBET00gdHJlZSkgY29tbW9uIGFuY2VzdG9yIG9mIHR3byBET00gbm9kZXMuXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZTEgdGhlIGZpcnN0IG5vZGVcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlMiB0aGUgc2Vjb25kIG5vZGVcbiAgICogQHJldHVybnMge05vZGV9IFRoZSBjb21tZW4gYW5jZXN0b3Igbm9kZSwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBjb21tb24gYW5jZXN0b3JcbiAgICovXG4gIGNvbXB1dGVDb21tb25BbmNlc3Rvcihub2RlMSwgbm9kZTIpIHtcbiAgICBpZiAoIW5vZGUxIHx8ICFub2RlMikgcmV0dXJuIG51bGw7XG4gICAgaWYgKG5vZGUxID09IG5vZGUyKSByZXR1cm4gbm9kZTE7XG4gICAgY29uc3QgYW5jZXN0cnkgPSAobm9kZSkgPT4ge1xuICAgICAgbGV0IGFuY2VzdHJ5ID0gW107XG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBhbmNlc3RyeS51bnNoaWZ0KG5vZGUpO1xuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFuY2VzdHJ5O1xuICAgIH1cblxuICAgIGNvbnN0IGFuY2VzdHJ5MSA9IGFuY2VzdHJ5KG5vZGUxKTtcbiAgICBjb25zdCBhbmNlc3RyeTIgPSBhbmNlc3RyeShub2RlMik7XG5cbiAgICBpZiAoYW5jZXN0cnkxWzBdICE9IGFuY2VzdHJ5MlswXSkgcmV0dXJuIG51bGw7XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgYW5jZXN0cnkxW2ldID09IGFuY2VzdHJ5MltpXTsgaSsrKTtcbiAgICByZXR1cm4gYW5jZXN0cnkxW2ktMV07XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIChsb3dlc3QgaW4gdGhlIERPTSB0cmVlKSBlbmNsb3NpbmcgRE9NIG5vZGUgd2l0aCBhIGdpdmVuIGNsYXNzLlxuICAgKiBAcGFyYW0ge29iamVjdH0gZm9jdXMgVGhlIGZvY3VzIHNlbGVjdGlvbiBvYmplY3RcbiAgICogQHBhcmFtIHtvYmplY3R9IGFuY2hvciBUaGUgYW5jaG9yIHNlbGVjdGlvbiBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3MgbmFtZSB0byBmaW5kXG4gICAqIEByZXR1cm5zIHtOb2RlfSBUaGUgZW5jbG9zaW5nIERPTSBub2RlIHdpdGggdGhlIHJlc3BlY3RpdmUgY2xhc3MgKGluc2lkZSB0aGUgZWRpdG9yKSwgaWYgdGhlcmUgaXMgb25lOyBudWxsIG90aGVyd2lzZS5cbiAgICovXG4gIGNvbXB1dGVFbmNsb3NpbmdNYXJrdXBOb2RlKGZvY3VzLCBhbmNob3IsIGNsYXNzTmFtZSkge1xuICAgIGxldCBub2RlID0gbnVsbDtcbiAgICBpZiAoIWZvY3VzKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoIWFuY2hvcikge1xuICAgICAgbm9kZSA9IGZvY3VzLm5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmb2N1cy5yb3cgIT0gYW5jaG9yLnJvdykgcmV0dXJuIG51bGw7XG4gICAgICBub2RlID0gdGhpcy5jb21wdXRlQ29tbW9uQW5jZXN0b3IoZm9jdXMubm9kZSwgYW5jaG9yLm5vZGUpO1xuICAgIH1cbiAgICBpZiAoIW5vZGUpIHJldHVybiBudWxsO1xuICAgIHdoaWxlIChub2RlICE9IHRoaXMuZSkge1xuICAgICAgaWYgKG5vZGUuY2xhc3NOYW1lICYmIG5vZGUuY2xhc3NOYW1lLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHJldHVybiBub2RlO1xuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgLy8gQXNjZW5kZWQgYWxsIHRoZSB3YXkgdG8gdGhlIGVkaXRvciBlbGVtZW50XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3RhdGUgKHRydWUgLyBmYWxzZSkgb2YgYWxsIGNvbW1hbmRzLlxuICAgKiBAcGFyYW0gZm9jdXMgRm9jdXMgb2YgdGhlIHNlbGVjdGlvbi4gSWYgbm90IGdpdmVuLCBhc3N1bWVzIHRoZSBjdXJyZW50IGZvY3VzLlxuICAgKiBAcGFyYW0gYW5jaG9yIEFuY2hvciBvZiB0aGUgc2VsZWN0aW9uLiBJZiBub3QgZ2l2ZW4sIGFzc3VtZXMgdGhlIGN1cnJlbnQgYW5jaG9yLlxuICAgKi9cbiAgZ2V0Q29tbWFuZFN0YXRlKGZvY3VzID0gbnVsbCwgYW5jaG9yID0gbnVsbCkge1xuICAgIGxldCBjb21tYW5kU3RhdGUgPSB7fTtcbiAgICBpZiAoIWZvY3VzKSBmb2N1cyA9IHRoaXMuZ2V0U2VsZWN0aW9uKGZhbHNlKTtcbiAgICBpZiAoIWFuY2hvcikgYW5jaG9yID0gdGhpcy5nZXRTZWxlY3Rpb24odHJ1ZSk7XG4gICAgaWYgKCFmb2N1cykge1xuICAgICAgZm9yIChsZXQgY21kIGluIGNvbW1hbmRzKSB7XG4gICAgICAgIGNvbW1hbmRTdGF0ZVtjbWRdID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb21tYW5kU3RhdGU7XG4gICAgfVxuICAgIGlmICghYW5jaG9yKSBhbmNob3IgPSBmb2N1czsgXG4gICAgXG4gICAgbGV0IHN0YXJ0LCBlbmQ7XG4gICAgaWYgKGFuY2hvci5yb3cgPCBmb2N1cy5yb3cgfHwgKGFuY2hvci5yb3cgPT0gZm9jdXMucm93ICYmIGFuY2hvci5jb2wgPCBmb2N1cy5jb2wpKSB7XG4gICAgICBzdGFydCA9IGFuY2hvcjtcbiAgICAgIGVuZCA9IGZvY3VzO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydCA9IGZvY3VzO1xuICAgICAgZW5kID0gYW5jaG9yO1xuICAgIH1cbiAgICBpZiAoZW5kLnJvdyA+IHN0YXJ0LnJvdyAmJiBlbmQuY29sID09IDApIHtcbiAgICAgIGVuZC5yb3ctLTtcbiAgICAgIGVuZC5jb2wgPSB0aGlzLmxpbmVzW2VuZC5yb3ddLmxlbmd0aDsgLy8gU2VsZWN0aW9uIHRvIGJlZ2lubmluZyBvZiBuZXh0IGxpbmUgaXMgc2FpZCB0byBlbmQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbGFzdCBsaW5lXG4gICAgfVxuXG4gICAgZm9yIChsZXQgY21kIGluIGNvbW1hbmRzKSB7XG4gICAgICBpZiAoY29tbWFuZHNbY21kXS50eXBlID09ICdpbmxpbmUnKSB7XG5cbiAgICAgICAgaWYgKCFmb2N1cyB8fCBmb2N1cy5yb3cgIT0gYW5jaG9yLnJvdyB8fCAhdGhpcy5pc0lubGluZUZvcm1hdHRpbmdBbGxvd2VkKGZvY3VzLCBhbmNob3IpKSB7XG4gICAgICAgICAgY29tbWFuZFN0YXRlW2NtZF0gPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRoZSBjb21tYW5kIHN0YXRlIGlzIHRydWUgaWYgdGhlcmUgaXMgYSByZXNwZWN0aXZlIGVuY2xvc2luZyBtYXJrdXAgbm9kZSAoZS5nLiwgdGhlIHNlbGVjdGlvbiBpcyBlbmNsb3NlZCBpbiBhIDxiPi4uPC9iPikgLi4uIFxuICAgICAgICAgIGNvbW1hbmRTdGF0ZVtjbWRdID0gXG4gICAgICAgICAgICAhIXRoaXMuY29tcHV0ZUVuY2xvc2luZ01hcmt1cE5vZGUoZm9jdXMsIGFuY2hvciwgY29tbWFuZHNbY21kXS5jbGFzc05hbWUpIHx8XG4gICAgICAgICAgLy8gLi4uIG9yIGlmIGl0J3MgYW4gZW1wdHkgc3RyaW5nIHByZWNlZGVkIGJ5IGFuZCBmb2xsb3dlZCBieSBmb3JtYXR0aW5nIG1hcmtlcnMsIGUuZy4gKip8Kiogd2hlcmUgfCBpcyB0aGUgY3Vyc29yXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgIGZvY3VzLmNvbCA9PSBhbmNob3IuY29sIFxuICAgICAgICAgICAgICAmJiAhIXRoaXMubGluZXNbZm9jdXMucm93XS5zdWJzdHIoMCwgZm9jdXMuY29sKS5tYXRjaChjb21tYW5kc1tjbWRdLnVuc2V0LnByZVBhdHRlcm4pXG4gICAgICAgICAgICAgICYmICEhdGhpcy5saW5lc1tmb2N1cy5yb3ddLnN1YnN0cihmb2N1cy5jb2wpLm1hdGNoKGNvbW1hbmRzW2NtZF0udW5zZXQucG9zdFBhdHRlcm4pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IFxuICAgICAgaWYgKGNvbW1hbmRzW2NtZF0udHlwZSA9PSAnbGluZScpIHtcbiAgICAgICAgaWYgKCFmb2N1cykge1xuICAgICAgICAgIGNvbW1hbmRTdGF0ZVtjbWRdID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLmxpbmVUeXBlc1tzdGFydC5yb3ddID09IGNvbW1hbmRzW2NtZF0uY2xhc3NOYW1lO1xuICAgICAgICAgIFxuICAgICAgICAgIGZvciAobGV0IGxpbmUgPSBzdGFydC5yb3c7IGxpbmUgPD0gZW5kLnJvdzsgbGluZSArKykge1xuICAgICAgICAgICAgaWYgKCh0aGlzLmxpbmVUeXBlc1tsaW5lXSA9PSBjb21tYW5kc1tjbWRdLmNsYXNzTmFtZSkgIT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgc3RhdGUgPSBudWxsO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29tbWFuZFN0YXRlW2NtZF0gPSBzdGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbW1hbmRTdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgY29tbWFuZCBzdGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29tbWFuZCBcbiAgICogQHBhcmFtIHtib29sZWFufSBzdGF0ZSBcbiAgICovXG4gIHNldENvbW1hbmRTdGF0ZShjb21tYW5kLCBzdGF0ZSkge1xuICAgIGlmIChjb21tYW5kc1tjb21tYW5kXS50eXBlID09ICdpbmxpbmUnKSB7XG4gICAgICBsZXQgYW5jaG9yID0gdGhpcy5nZXRTZWxlY3Rpb24odHJ1ZSk7XG4gICAgICBsZXQgZm9jdXMgPSB0aGlzLmdldFNlbGVjdGlvbihmYWxzZSk7XG4gICAgICBpZiAoIWFuY2hvcikgYW5jaG9yID0gZm9jdXM7XG4gICAgICBpZiAoIWFuY2hvcikgcmV0dXJuO1xuICAgICAgaWYgKGFuY2hvci5yb3cgIT0gZm9jdXMucm93KSByZXR1cm47XG4gICAgICBpZiAoIXRoaXMuaXNJbmxpbmVGb3JtYXR0aW5nQWxsb3dlZChmb2N1cywgYW5jaG9yKSkgcmV0dXJuOyBcbiAgICAgIGxldCBtYXJrdXBOb2RlID0gdGhpcy5jb21wdXRlRW5jbG9zaW5nTWFya3VwTm9kZShmb2N1cywgYW5jaG9yLCBjb21tYW5kc1tjb21tYW5kXS5jbGFzc05hbWUpO1xuICAgICAgdGhpcy5jbGVhckRpcnR5RmxhZygpO1xuICAgICAgXG4gICAgICAvLyBGaXJzdCBjYXNlOiBUaGVyZSdzIGFuIGVuY2xvc2luZyBtYXJrdXAgbm9kZSwgcmVtb3ZlIHRoZSBtYXJrZXJzIGFyb3VuZCB0aGF0IG1hcmt1cCBub2RlXG4gICAgICBpZiAobWFya3VwTm9kZSkge1xuICAgICAgICB0aGlzLmxpbmVEaXJ0eVtmb2N1cy5yb3ddID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc3RhcnRDb2wgPSB0aGlzLmNvbXB1dGVDb2x1bW4obWFya3VwTm9kZSwgMCk7XG4gICAgICAgIGNvbnN0IGxlbiA9IG1hcmt1cE5vZGUudGV4dENvbnRlbnQubGVuZ3RoO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5saW5lc1tmb2N1cy5yb3ddLnN1YnN0cigwLCBzdGFydENvbCkucmVwbGFjZShjb21tYW5kc1tjb21tYW5kXS51bnNldC5wcmVQYXR0ZXJuLCAnJyk7XG4gICAgICAgIGNvbnN0IG1pZCA9IHRoaXMubGluZXNbZm9jdXMucm93XS5zdWJzdHIoc3RhcnRDb2wsIGxlbik7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5saW5lc1tmb2N1cy5yb3ddLnN1YnN0cihzdGFydENvbCArIGxlbikucmVwbGFjZShjb21tYW5kc1tjb21tYW5kXS51bnNldC5wb3N0UGF0dGVybiwgJycpO1xuICAgICAgICB0aGlzLmxpbmVzW2ZvY3VzLnJvd10gPSBsZWZ0LmNvbmNhdChtaWQsIHJpZ2h0KTtcbiAgICAgICAgYW5jaG9yLmNvbCA9IGxlZnQubGVuZ3RoO1xuICAgICAgICBmb2N1cy5jb2wgPSBhbmNob3IuY29sICsgbGVuO1xuICAgICAgICB0aGlzLnVwZGF0ZUZvcm1hdHRpbmcoKTtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb24oZm9jdXMsIGFuY2hvcik7ICBcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlKCk7XG5cbiAgICAgIC8vIFNlY29uZCBjYXNlOiBFbXB0eSBzZWxlY3Rpb24gd2l0aCBzdXJyb3VuZGluZyBmb3JtYXR0aW5nIG1hcmtlcnMsIHJlbW92ZSB0aG9zZVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZm9jdXMuY29sID09IGFuY2hvci5jb2wgXG4gICAgICAgICYmICEhdGhpcy5saW5lc1tmb2N1cy5yb3ddLnN1YnN0cigwLCBmb2N1cy5jb2wpLm1hdGNoKGNvbW1hbmRzW2NvbW1hbmRdLnVuc2V0LnByZVBhdHRlcm4pXG4gICAgICAgICYmICEhdGhpcy5saW5lc1tmb2N1cy5yb3ddLnN1YnN0cihmb2N1cy5jb2wpLm1hdGNoKGNvbW1hbmRzW2NvbW1hbmRdLnVuc2V0LnBvc3RQYXR0ZXJuKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMubGluZURpcnR5W2ZvY3VzLnJvd10gPSB0cnVlO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5saW5lc1tmb2N1cy5yb3ddLnN1YnN0cigwLCBmb2N1cy5jb2wpLnJlcGxhY2UoY29tbWFuZHNbY29tbWFuZF0udW5zZXQucHJlUGF0dGVybiwgJycpO1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMubGluZXNbZm9jdXMucm93XS5zdWJzdHIoZm9jdXMuY29sKS5yZXBsYWNlKGNvbW1hbmRzW2NvbW1hbmRdLnVuc2V0LnBvc3RQYXR0ZXJuLCAnJyk7XG4gICAgICAgIHRoaXMubGluZXNbZm9jdXMucm93XSA9IGxlZnQuY29uY2F0KHJpZ2h0KTtcbiAgICAgICAgZm9jdXMuY29sID0gYW5jaG9yLmNvbCA9IGxlZnQubGVuZ3RoO1xuICAgICAgICB0aGlzLnVwZGF0ZUZvcm1hdHRpbmcoKTtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb24oZm9jdXMsIGFuY2hvcik7XG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZSgpO1xuXG4gICAgICAvLyBOb3QgY3VycmVudGx5IGZvcm1hdHRlZCwgaW5zZXJ0IGZvcm1hdHRpbmcgbWFya2Vyc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgXG4gICAgICAgIC8vIFRyaW0gYW55IHNwYWNlcyBmcm9tIHRoZSBzZWxlY3Rpb25cbiAgICAgICAgbGV0IHtzdGFydENvbCwgZW5kQ29sfSA9IGZvY3VzLmNvbCA8IGFuY2hvci5jb2wgPyB7c3RhcnRDb2w6IGZvY3VzLmNvbCwgZW5kQ29sOiBhbmNob3IuY29sfSA6IHtzdGFydENvbDogYW5jaG9yLmNvbCwgZW5kQ29sOiBmb2N1cy5jb2x9O1xuXG4gICAgICAgIGxldCBtYXRjaCA9IHRoaXMubGluZXNbZm9jdXMucm93XS5zdWJzdHIoc3RhcnRDb2wsIGVuZENvbCAtIHN0YXJ0Q29sKS5tYXRjaCgvXig/PGxlYWRpbmc+XFxzKikuKlxcUyg/PHRyYWlsaW5nPlxccyopJC8pO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICBzdGFydENvbCArPSBtYXRjaC5ncm91cHMubGVhZGluZy5sZW5ndGg7XG4gICAgICAgICAgZW5kQ29sIC09IG1hdGNoLmdyb3Vwcy50cmFpbGluZy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBmb2N1cy5jb2wgPSBzdGFydENvbDtcbiAgICAgICAgYW5jaG9yLmNvbCA9IGVuZENvbDtcblxuICAgICAgICAvLyBKdXN0IGluc2VydCBtYXJrdXAgYmVmb3JlIGFuZCBhZnRlciBhbmQgaG9wZSBmb3IgdGhlIGJlc3QuIFxuICAgICAgICB0aGlzLndyYXBTZWxlY3Rpb24oY29tbWFuZHNbY29tbWFuZF0uc2V0LnByZSwgY29tbWFuZHNbY29tbWFuZF0uc2V0LnBvc3QsIGZvY3VzLCBhbmNob3IpO1xuICAgICAgICB0aGlzLmZpcmVDaGFuZ2UoKTtcbiAgICAgICAgLy8gVE9ETyBjbGVhbiB0aGlzIHVwIHNvIHRoYXQgbWFya3VwIHJlbWFpbnMgcHJvcGVybHkgbmVzdGVkXG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKGNvbW1hbmRzW2NvbW1hbmRdLnR5cGUgPT0gJ2xpbmUnKSB7XG4gICAgICBsZXQgYW5jaG9yID0gdGhpcy5nZXRTZWxlY3Rpb24odHJ1ZSk7XG4gICAgICBsZXQgZm9jdXMgPSB0aGlzLmdldFNlbGVjdGlvbihmYWxzZSk7XG4gICAgICBpZiAoIWFuY2hvcikgYW5jaG9yID0gZm9jdXM7XG4gICAgICBpZiAoIWZvY3VzKSByZXR1cm47XG4gICAgICB0aGlzLmNsZWFyRGlydHlGbGFnKCk7XG4gICAgICBsZXQgc3RhcnQgPSBhbmNob3Iucm93ID4gZm9jdXMucm93ID8gZm9jdXMgOiBhbmNob3I7XG4gICAgICBsZXQgZW5kID0gIGFuY2hvci5yb3cgPiBmb2N1cy5yb3cgPyBhbmNob3IgOiBmb2N1cztcbiAgICAgIGlmIChlbmQucm93ID4gc3RhcnQucm93ICYmIGVuZC5jb2wgPT0gMCkge1xuICAgICAgICBlbmQucm93LS07XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGxpbmUgPSBzdGFydC5yb3c7IGxpbmUgPD0gZW5kLnJvdzsgbGluZSsrKSB7XG4gICAgICAgIGlmIChzdGF0ZSAmJiB0aGlzLmxpbmVUeXBlc1tsaW5lXSAhPSBjb21tYW5kc1tjb21tYW5kXS5jbGFzc05hbWUpIHtcbiAgICAgICAgICB0aGlzLmxpbmVzW2xpbmVdID0gdGhpcy5saW5lc1tsaW5lXS5yZXBsYWNlKGNvbW1hbmRzW2NvbW1hbmRdLnNldC5wYXR0ZXJuLCBjb21tYW5kc1tjb21tYW5kXS5zZXQucmVwbGFjZW1lbnQucmVwbGFjZSgnJCMnLCAobGluZSAtIHN0YXJ0LnJvdyArIDEpKSk7XG4gICAgICAgICAgdGhpcy5saW5lRGlydHlbbGluZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3RhdGUgJiYgdGhpcy5saW5lVHlwZXNbbGluZV0gPT0gY29tbWFuZHNbY29tbWFuZF0uY2xhc3NOYW1lKSB7XG4gICAgICAgICAgdGhpcy5saW5lc1tsaW5lXSA9IHRoaXMubGluZXNbbGluZV0ucmVwbGFjZShjb21tYW5kc1tjb21tYW5kXS51bnNldC5wYXR0ZXJuLCBjb21tYW5kc1tjb21tYW5kXS51bnNldC5yZXBsYWNlbWVudCk7XG4gICAgICAgICAgdGhpcy5saW5lRGlydHlbbGluZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUZvcm1hdHRpbmcoKTtcbiAgICAgIHRoaXMuc2V0U2VsZWN0aW9uKHtyb3c6IGVuZC5yb3csIGNvbDogdGhpcy5saW5lc1tlbmQucm93XS5sZW5ndGh9LCB7cm93OiBzdGFydC5yb3csIGNvbDogMH0pO1xuICAgICAgdGhpcy5maXJlQ2hhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgaW5saW5lIGZvcm1hdHRpbmcgaXMgYWxsb3dlZCBhdCB0aGUgY3VycmVudCBmb2N1cyBcbiAgICogQHBhcmFtIHtvYmplY3R9IGZvY3VzIFRoZSBjdXJyZW50IGZvY3VzXG4gICAqL1xuICBpc0lubGluZUZvcm1hdHRpbmdBbGxvd2VkKCkge1xuICAgIC8vIFRPRE8gUmVtb3ZlIHBhcmFtZXRlcnMgZnJvbSBhbGwgY2FsbHNcbiAgICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgaWYgKCFzZWwgfHwgIXNlbC5mb2N1c05vZGUgfHwgIXNlbC5hbmNob3JOb2RlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBjYW4gZmluZCBhIGNvbW1vbiBhbmNlc3RvciB3aXRoIHRoZSBjbGFzcyBgVE1JbmxpbmVGb3JtYXR0ZWRgIFxuXG4gICAgLy8gU3BlY2lhbCBjYXNlOiBFbXB0eSBzZWxlY3Rpb24gcmlnaHQgYmVmb3JlIGBUTUlubGluZUZvcm1hdHRlZGBcbiAgICBpZiAoc2VsLmlzQ29sbGFwc2VkICYmIHNlbC5mb2N1c05vZGUubm9kZVR5cGUgPT0gMyAmJiBzZWwuZm9jdXNPZmZzZXQgPT0gc2VsLmZvY3VzTm9kZS5ub2RlVmFsdWUubGVuZ3RoKSB7XG4gICAgICBsZXQgbm9kZTtcbiAgICAgIGZvciAobm9kZSA9IHNlbC5mb2N1c05vZGU7IG5vZGUgJiYgbm9kZS5uZXh0U2libGluZyA9PSBudWxsOyBub2RlID0gbm9kZS5wYXJlbnROb2RlKTtcbiAgICAgIGlmIChub2RlICYmIG5vZGUubmV4dFNpYmxpbmcuY2xhc3NOYW1lICYmIG5vZGUubmV4dFNpYmxpbmcuY2xhc3NOYW1lLmluY2x1ZGVzKCdUTUlubGluZUZvcm1hdHRlZCcpKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBMb29rIGZvciBhIGNvbW1vbiBhbmNlc3RvclxuICAgIGxldCBhbmNlc3RvciA9IHRoaXMuY29tcHV0ZUNvbW1vbkFuY2VzdG9yKHNlbC5mb2N1c05vZGUsIHNlbC5hbmNob3JOb2RlKTtcbiAgICBpZiAoIWFuY2VzdG9yKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSdzIGFuIGFuY2VzdG9yIG9mIGNsYXNzICdUTUlubGluZUZvcm1hdHRlZCcgb3IgJ1RNQmxhbmtMaW5lJ1xuICAgIHdoaWxlIChhbmNlc3RvciAmJiBhbmNlc3RvciAhPSB0aGlzLmUpIHtcbiAgICAgIGlmIChhbmNlc3Rvci5jbGFzc05hbWUgJiYgKGFuY2VzdG9yLmNsYXNzTmFtZS5pbmNsdWRlcygnVE1JbmxpbmVGb3JtYXR0ZWQnKSB8fCBhbmNlc3Rvci5jbGFzc05hbWUuaW5jbHVkZXMoJ1RNQmxhbmtMaW5lJykpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHMgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGluIHRoZSBzdHJpbmdzIHByZSBhbmQgcG9zdC4gSWYgdGhlIHNlbGVjdGlvbiBpcyBub3Qgb24gb25lIGxpbmUsIHJldHVybnMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcmUgVGhlIHN0cmluZyB0byBpbnNlcnQgYmVmb3JlIHRoZSBzZWxlY3Rpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3N0IFRoZSBzdHJpbmcgdG8gaW5zZXJ0IGFmdGVyIHRoZSBzZWxlY3Rpb24uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBmb2N1cyBUaGUgY3VycmVudCBzZWxlY3Rpb24gZm9jdXMuIElmIG51bGwsIHNlbGVjdGlvbiB3aWxsIGJlIGNvbXB1dGVkLlxuICAgKiBAcGFyYW0ge29iamVjdH0gYW5jaG9yIFRoZSBjdXJyZW50IHNlbGVjdGlvbiBmb2N1cy4gSWYgbnVsbCwgc2VsZWN0aW9uIHdpbGwgYmUgY29tcHV0ZWQuXG4gICAqL1xuICB3cmFwU2VsZWN0aW9uKHByZSwgcG9zdCwgZm9jdXMgPSBudWxsLCBhbmNob3IgPSBudWxsKSB7XG4gICAgaWYgKCFmb2N1cykgZm9jdXMgPSB0aGlzLmdldFNlbGVjdGlvbihmYWxzZSk7XG4gICAgaWYgKCFhbmNob3IpIGFuY2hvciA9IHRoaXMuZ2V0U2VsZWN0aW9uKHRydWUpO1xuICAgIGlmICghZm9jdXMgfHwgIWFuY2hvciB8fCBmb2N1cy5yb3cgIT0gYW5jaG9yLnJvdykgcmV0dXJuO1xuICAgIHRoaXMubGluZURpcnR5W2ZvY3VzLnJvd10gPSB0cnVlO1xuXG4gICAgY29uc3Qgc3RhcnRDb2wgPSBmb2N1cy5jb2wgPCBhbmNob3IuY29sID8gZm9jdXMuY29sIDogYW5jaG9yLmNvbDtcbiAgICBjb25zdCBlbmRDb2wgPSBmb2N1cy5jb2wgPCBhbmNob3IuY29sID8gYW5jaG9yLmNvbCA6IGZvY3VzLmNvbDtcbiAgICBjb25zdCBsZWZ0ID0gdGhpcy5saW5lc1tmb2N1cy5yb3ddLnN1YnN0cigwLCBzdGFydENvbCkuY29uY2F0KHByZSk7XG4gICAgY29uc3QgbWlkID0gKGVuZENvbCA9PSBzdGFydENvbCA/ICcnIDogdGhpcy5saW5lc1tmb2N1cy5yb3ddLnN1YnN0cihzdGFydENvbCwgZW5kQ29sIC0gc3RhcnRDb2wpKTsgXG4gICAgY29uc3QgcmlnaHQgPSBwb3N0LmNvbmNhdCh0aGlzLmxpbmVzW2ZvY3VzLnJvd10uc3Vic3RyKGVuZENvbCkpO1xuICAgIHRoaXMubGluZXNbZm9jdXMucm93XSA9IGxlZnQuY29uY2F0KG1pZCwgcmlnaHQpO1xuICAgIGFuY2hvci5jb2wgPSBsZWZ0Lmxlbmd0aDtcbiAgICBmb2N1cy5jb2wgPSBhbmNob3IuY29sICsgbWlkLmxlbmd0aDtcblxuICAgIHRoaXMudXBkYXRlRm9ybWF0dGluZygpO1xuICAgIHRoaXMuc2V0U2VsZWN0aW9uKGZvY3VzLCBhbmNob3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGNvbW1hbmQgc3RhdGUgZm9yIGEgY29tbWFuZCAodHJ1ZSA8LT4gZmFsc2UpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb21tYW5kIFRoZSBlZGl0b3IgY29tbWFuZFxuICAgKi9cbiAgdG9nZ2xlQ29tbWFuZFN0YXRlKGNvbW1hbmQpIHtcbiAgICBpZiAoIXRoaXMubGFzdENvbW1hbmRTdGF0ZSkgdGhpcy5sYXN0Q29tbWFuZFN0YXRlID0gdGhpcy5nZXRDb21tYW5kU3RhdGUoKTtcbiAgICB0aGlzLnNldENvbW1hbmRTdGF0ZShjb21tYW5kLCAhdGhpcy5sYXN0Q29tbWFuZFN0YXRlW2NvbW1hbmRdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBhIGNoYW5nZSBldmVudC4gVXBkYXRlcyB0aGUgbGlua2VkIHRleHRhcmVhIGFuZCBub3RpZmllcyBhbnkgZXZlbnQgbGlzdGVuZXJzLlxuICAgKi9cbiAgZmlyZUNoYW5nZSgpIHtcbiAgICBpZiAoIXRoaXMudGV4dGFyZWEgJiYgIXRoaXMubGlzdGVuZXJzLmNoYW5nZS5sZW5ndGgpIHJldHVybjtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG4gICAgaWYgKHRoaXMudGV4dGFyZWEpIHRoaXMudGV4dGFyZWEudmFsdWUgPSBjb250ZW50O1xuICAgIGZvciAobGV0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzLmNoYW5nZSkge1xuICAgICAgbGlzdGVuZXIoe1xuICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICBsaW5lc0RpcnR5OiB0aGlzLmxpbmVzRGlydHksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBcInNlbGVjdGlvbiBjaGFuZ2VkXCIgZXZlbnQuXG4gICAqL1xuICBmaXJlU2VsZWN0aW9uKCkge1xuICAgIGlmICh0aGlzLmxpc3RlbmVycy5zZWxlY3Rpb24gJiYgdGhpcy5saXN0ZW5lcnMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgbGV0IGZvY3VzID0gdGhpcy5nZXRTZWxlY3Rpb24oZmFsc2UpO1xuICAgICAgbGV0IGFuY2hvciA9IHRoaXMuZ2V0U2VsZWN0aW9uKHRydWUpO1xuICAgICAgbGV0IGNvbW1hbmRTdGF0ZSA9IHRoaXMuZ2V0Q29tbWFuZFN0YXRlKGZvY3VzLCBhbmNob3IpO1xuICAgICAgaWYgKHRoaXMubGFzdENvbW1hbmRTdGF0ZSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMubGFzdENvbW1hbmRTdGF0ZSwgY29tbWFuZFN0YXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGFzdENvbW1hbmRTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbW1hbmRTdGF0ZSk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycy5zZWxlY3Rpb24pIHtcbiAgICAgICAgbGlzdGVuZXIoe1xuICAgICAgICAgIGZvY3VzOiBmb2N1cyxcbiAgICAgICAgICBhbmNob3I6IGFuY2hvcixcbiAgICAgICAgICBjb21tYW5kU3RhdGU6IHRoaXMubGFzdENvbW1hbmRTdGF0ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGV2ZW50IHRvIGxpc3RlbiB0by4gQ2FuIGJlICdjaGFuZ2UnIG9yICdzZWxlY3Rpb24nXG4gICAqIEBwYXJhbSB7Kn0gbGlzdGVuZXIgRnVuY3Rpb24gb2YgdGhlIHR5cGUgKGV2ZW50KSA9PiB7fSB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZXZlbnQgb2NjdXJzLlxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlLm1hdGNoKC9eKD86Y2hhbmdlfGlucHV0KSQvaSkpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLmNoYW5nZS5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG4gICAgaWYgKHR5cGUubWF0Y2goL14oPzpzZWxlY3Rpb258c2VsZWN0aW9uY2hhbmdlKSQvaSkpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNlbGVjdGlvbi5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xuIl0sIm5hbWVzIjpbInN2ZyIsImJsb2NrcXVvdGUiLCJib2xkIiwiY2xlYXJfZm9ybWF0dGluZyIsImNvZGUiLCJoMSIsImgyIiwiaHIiLCJpbWFnZSIsIml0YWxpYyIsImxpbmsiLCJvbCIsInN0cmlrZXRocm91Z2giLCJ1bCIsImlzTWFjTGlrZSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsIkRlZmF1bHRDb21tYW5kcyIsIm5hbWUiLCJhY3Rpb24iLCJpbm5lckhUTUwiLCJ0aXRsZSIsImhvdGtleSIsImVkaXRvciIsImlzSW5saW5lRm9ybWF0dGluZ0FsbG93ZWQiLCJ3cmFwU2VsZWN0aW9uIiwiZW5hYmxlZCIsImZvY3VzIiwiYW5jaG9yIiwicGFzdGUiLCJDb21tYW5kQmFyIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImUiLCJjb21tYW5kcyIsImJ1dHRvbnMiLCJzdGF0ZSIsImhvdGtleXMiLCJlbGVtZW50IiwidGFnTmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJib2R5IiwiY3JlYXRlQ29tbWFuZEJhckVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5ZG93biIsInNldEVkaXRvciIsInBhcmVudEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY29tbWFuZCIsImVsIiwiYXBwZW5kQ2hpbGQiLCJjb21tYW5kTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsImtleXMiLCJzcGxpdCIsIm1vZGlmaWVycyIsIm1vZGlmaWVyZXhwbGFuYXRpb24iLCJpIiwibGVuZ3RoIiwicHVzaCIsIm1hdGNoIiwia2V5IiwidG9Mb3dlckNhc2UiLCJjb25jYXQiLCJqb2luIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0Q29tbWFuZFN0YXRlIiwiaGFuZGxlU2VsZWN0aW9uIiwiY29tbWFuZFN0YXRlIiwidW5kZWZpbmVkIiwib3V0ZXIiLCJtb2RpZmllciIsImNoZWNrIiwiaXQiLCJNYXRoIiwibW9kdWxlIiwiZ2xvYmFsVGhpcyIsIndpbmRvdyIsInNlbGYiLCJnbG9iYWwiLCJ0aGlzIiwiRnVuY3Rpb24iLCJleGVjIiwiZXJyb3IiLCJmYWlscyIsInJlcXVpcmUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImJpbmQiLCJoYXNPd25Qcm9wZXJ0eSIsIk5BVElWRV9CSU5EIiwiRnVuY3Rpb25Qcm90b3R5cGUiLCJwcm90b3R5cGUiLCJjYWxsIiwidW5jdXJyeVRoaXNXaXRoQmluZCIsImZuIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJkb2N1bWVudEFsbCIsImFsbCIsIklTX0hUTUxEREEiLCIkZG9jdW1lbnRBbGwiLCJhcmd1bWVudCIsImlzTnVsbE9yVW5kZWZpbmVkIiwiJFR5cGVFcnJvciIsIlR5cGVFcnJvciIsInJlcXVpcmVPYmplY3RDb2VyY2libGUiLCIkT2JqZWN0IiwidW5jdXJyeVRoaXMiLCJ0b09iamVjdCIsImhhc093biIsIkRFU0NSSVBUT1JTIiwiZ2V0RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIkVYSVNUUyIsIlBST1BFUiIsInNvbWV0aGluZyIsIkNPTkZJR1VSQUJMRSIsImNvbmZpZ3VyYWJsZSIsInZhbHVlIiwid3JpdGFibGUiLCJkZWZpbmVHbG9iYWxQcm9wZXJ0eSIsIlNIQVJFRCIsInN0b3JlIiwiaXNDYWxsYWJsZSIsImZ1bmN0aW9uVG9TdHJpbmciLCJ0b1N0cmluZyIsImluc3BlY3RTb3VyY2UiLCJXZWFrTWFwIiwiU3RyaW5nIiwiaXNPYmplY3QiLCJhIiwiJFN0cmluZyIsImFGdW5jdGlvbiIsIm5hbWVzcGFjZSIsIm1ldGhvZCIsImlzUHJvdG90eXBlT2YiLCJ1c2VyQWdlbnQiLCJwcm9jZXNzIiwiRGVubyIsInZlcnNpb25zIiwidmVyc2lvbiIsInY4IiwiVjhfVkVSU0lPTiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbCIsIlN5bWJvbCIsInNoYW0iLCJOQVRJVkVfU1lNQk9MIiwiaXRlcmF0b3IiLCJnZXRCdWlsdEluIiwiVVNFX1NZTUJPTF9BU19VSUQiLCIkU3ltYm9sIiwidHJ5VG9TdHJpbmciLCJhQ2FsbGFibGUiLCJWIiwiUCIsImZ1bmMiLCJpbnB1dCIsInByZWYiLCJ2YWwiLCJ2YWx1ZU9mIiwibW9kZSIsImNvcHlyaWdodCIsImxpY2Vuc2UiLCJzb3VyY2UiLCJpZCIsInBvc3RmaXgiLCJyYW5kb20iLCJzaGFyZWQiLCJ1aWQiLCJXZWxsS25vd25TeW1ib2xzU3RvcmUiLCJjcmVhdGVXZWxsS25vd25TeW1ib2wiLCJ3aXRob3V0U2V0dGVyIiwiaXNTeW1ib2wiLCJnZXRNZXRob2QiLCJvcmRpbmFyeVRvUHJpbWl0aXZlIiwid2VsbEtub3duU3ltYm9sIiwiVE9fUFJJTUlUSVZFIiwiZXhvdGljVG9QcmltIiwicmVzdWx0IiwidG9QcmltaXRpdmUiLCJJRThfRE9NX0RFRklORSIsIlY4X1BST1RPVFlQRV9ERUZJTkVfQlVHIiwiYW5PYmplY3QiLCJ0b1Byb3BlcnR5S2V5IiwiJGRlZmluZVByb3BlcnR5IiwiJGdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIkVOVU1FUkFCTEUiLCJXUklUQUJMRSIsImV4cG9ydHMiLCJPIiwiQXR0cmlidXRlcyIsImN1cnJlbnQiLCJlbnVtZXJhYmxlIiwiYml0bWFwIiwiZGVmaW5lUHJvcGVydHlNb2R1bGUiLCJjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IiLCJvYmplY3QiLCJmIiwiTkFUSVZFX1dFQUtfTUFQIiwiY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5Iiwic2hhcmVkS2V5IiwiT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQiLCJzZXQiLCJoYXMiLCJlbmZvcmNlIiwiZ2V0dGVyRm9yIiwiVFlQRSIsInR5cGUiLCJtZXRhZGF0YSIsImZhY2FkZSIsIlNUQVRFIiwiQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUiLCJJbnRlcm5hbFN0YXRlTW9kdWxlIiwiZW5mb3JjZUludGVybmFsU3RhdGUiLCJnZXRJbnRlcm5hbFN0YXRlIiwic3RyaW5nU2xpY2UiLCJzbGljZSIsInJlcGxhY2UiLCJDT05GSUdVUkFCTEVfTEVOR1RIIiwiVEVNUExBVEUiLCJtYWtlQnVpbHRJbiIsIm9wdGlvbnMiLCJnZXR0ZXIiLCJzZXR0ZXIiLCJhcml0eSIsInRhcmdldCIsImRlc2NyaXB0b3IiLCJ0aGF0IiwiaGFzSW5kaWNlcyIsImlnbm9yZUNhc2UiLCJtdWx0aWxpbmUiLCJkb3RBbGwiLCJ1bmljb2RlIiwidW5pY29kZVNldHMiLCJzdGlja3kiLCJkZWZpbmVCdWlsdEluQWNjZXNzb3IiLCJyZWdFeHBGbGFncyIsIlJlZ0V4cCIsIlJlZ0V4cFByb3RvdHlwZSIsIkZPUkNFRCIsIklORElDRVNfU1VQUE9SVCIsImNhbGxzIiwiZXhwZWN0ZWQiLCJhZGRHZXR0ZXIiLCJjaHIiLCJwYWlycyIsInJlcGxhY2VtZW50cyIsIkFTQ0lJUHVuY3R1YXRpb24iLCJOb3RUcmlnZ2VyQ2hhciIsIlNjaGVtZSIsIkVtYWlsIiwiSFRNTE9wZW5UYWciLCJIVE1MQ2xvc2VUYWciLCJIVE1MVGFnTmFtZSIsIkhUTUxDb21tZW50IiwiSFRNTFBJIiwiSFRNTERlY2xhcmF0aW9uIiwiSFRNTENEQVRBIiwiSFRNTEF0dHJpYnV0ZSIsIkhUTUxBdHRWYWx1ZSIsIktub3duVGFnIiwicHVuY3R1YXRpb25MZWFkaW5nIiwicHVuY3R1YXRpb25UcmFpbGluZyIsImxpbmVHcmFtbWFyIiwiVE1IMSIsInJlZ2V4cCIsInJlcGxhY2VtZW50IiwiVE1IMiIsIlRNSDMiLCJUTUg0IiwiVE1INSIsIlRNSDYiLCJUTUJsb2NrcXVvdGUiLCJUTUNvZGVGZW5jZUJhY2t0aWNrT3BlbiIsIlRNQ29kZUZlbmNlVGlsZGVPcGVuIiwiVE1Db2RlRmVuY2VCYWNrdGlja0Nsb3NlIiwiVE1Db2RlRmVuY2VUaWxkZUNsb3NlIiwiVE1CbGFua0xpbmUiLCJUTVNldGV4dEgxTWFya2VyIiwiVE1TZXRleHRIMk1hcmtlciIsIlRNSFIiLCJUTVVMIiwiVE1PTCIsIlRNSW5kZW50ZWRDb2RlIiwiVE1MaW5rUmVmZXJlbmNlRGVmaW5pdGlvbiIsImxhYmVsUGxhY2Vob2xkZXIiLCJodG1sQmxvY2tHcmFtbWFyIiwic3RhcnQiLCJlbmQiLCJwYXJhSW50ZXJydXB0IiwiaW5saW5lR3JhbW1hciIsImVzY2FwZSIsImF1dG9saW5rIiwiaHRtbCIsImxpbmtPcGVuIiwiaW1hZ2VPcGVuIiwibGlua0xhYmVsIiwiZGVmYXVsdCIsInJlcGxhY2VtZW50UmVnZXhwIiwiaW5saW5lUnVsZXMiLCJydWxlIiwicmUiLCJzdHJpbmciLCJmbGFncyIsImh0bWxlc2NhcGUiLCJwcmUiLCJwb3N0IiwidW5zZXQiLCJwcmVQYXR0ZXJuIiwicG9zdFBhdHRlcm4iLCJwYXR0ZXJuIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJFZGl0b3IiLCJ0ZXh0YXJlYSIsImxpbmVzIiwibGluZUVsZW1lbnRzIiwibGluZVR5cGVzIiwibGluZUNhcHR1cmVzIiwibGluZVJlcGxhY2VtZW50cyIsImxpbmtMYWJlbHMiLCJsaW5lRGlydHkiLCJsYXN0Q29tbWFuZFN0YXRlIiwibGlzdGVuZXJzIiwiY2hhbmdlIiwic2VsZWN0aW9uIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwic3R5bGUiLCJkaXNwbGF5IiwiY3JlYXRlRWRpdG9yRWxlbWVudCIsInNldENvbnRlbnQiLCJjb250ZW50IiwiY29udGVudEVkaXRhYmxlIiwid2hpdGVTcGFjZSIsIndlYmtpdFVzZXJNb2RpZnkiLCJuZXh0U2libGluZyIsImluc2VydEJlZm9yZSIsImhhbmRsZUlucHV0RXZlbnQiLCJoYW5kbGVTZWxlY3Rpb25DaGFuZ2VFdmVudCIsImhhbmRsZVBhc3RlIiwiY2hpbGROb2RlcyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxpbmVOdW0iLCJsZSIsIkFycmF5IiwidXBkYXRlRm9ybWF0dGluZyIsImZpcmVDaGFuZ2UiLCJnZXRDb250ZW50IiwidXBkYXRlTGluZVR5cGVzIiwidXBkYXRlTGlua0xhYmVscyIsImFwcGx5TGluZVR5cGVzIiwibCIsImNhcHR1cmUiLCJzdHIiLCJwMSIsInAyIiwicHJvY2Vzc0lubGluZVN0eWxlcyIsImNvbnRlbnRIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwiZGF0YXNldCIsImNvZGVCbG9ja1R5cGUiLCJjb2RlQmxvY2tTZXFMZW5ndGgiLCJodG1sQmxvY2siLCJsaW5lVHlwZSIsImxpbmVDYXB0dXJlIiwibGluZVJlcGxhY2VtZW50IiwiZ3JvdXBzIiwiaHRtbEJsb2NrVHlwZSIsImhlYWRpbmdMaW5lIiwiaGVhZGluZ0xpbmVUeXBlIiwidXBkYXRlTGluZUNvbnRlbnRzQW5kRm9ybWF0dGluZyIsImNsZWFyRGlydHlGbGFnIiwidXBkYXRlTGluZUNvbnRlbnRzIiwicGFyc2VMaW5rT3JJbWFnZSIsIm9yaWdpbmFsU3RyaW5nIiwiaXNJbWFnZSIsInRleHRPZmZzZXQiLCJvcGVuZXIiLCJzdWJzdHIiLCJjdXJyZW50T2Zmc2V0IiwiYnJhY2tldExldmVsIiwibGlua1RleHQiLCJsaW5rUmVmIiwibGlua0RldGFpbHMiLCJ0ZXh0T3V0ZXIiLCJjYXAiLCJuZXh0Q2hhciIsInRyaW0iLCJwYXJlbnRoZXNpc0xldmVsIiwiaW5saW5lT3V0ZXIiLCJ2YWxpZCIsImxhYmVsIiwib3V0cHV0IiwiY2hhckNvdW50IiwicHJvY2Vzc2VkIiwic3RhY2siLCJvZmZzZXQiLCJwb3RlbnRpYWxMaW5rIiwicG90ZW50aWFsSW1hZ2UiLCJkZWxpbUNvdW50IiwiZGVsaW1TdHJpbmciLCJjdXJyZW50RGVsaW1pdGVyIiwicHJlY2VkaW5nIiwiZm9sbG93aW5nIiwicHVuY3R1YXRpb25Gb2xsb3dzIiwicHVuY3R1YXRpb25QcmVjZWRlcyIsIndoaXRlc3BhY2VGb2xsb3dzIiwid2hpdGVzcGFjZVByZWNlZGVzIiwiY2FuT3BlbiIsImNhbkNsb3NlIiwic3RhY2tQb2ludGVyIiwiZGVsaW1pdGVyIiwiZW50cnkiLCJwb3AiLCJjb3VudCIsImNvbnN1bWVkIiwibGluZURlbHRhIiwiY2hpbGRFbGVtZW50Q291bnQiLCJmaXJzdENoYW5nZWRMaW5lIiwidGV4dENvbnRlbnQiLCJsYXN0Q2hhbmdlZExpbmUiLCJsaW5lc1RvRGVsZXRlIiwibGluZXNUb0FkZCIsInNwbGljZUxpbmVzIiwibGluZSIsImN0IiwicHJvY2Vzc05ld1BhcmFncmFwaCIsInNlbCIsImNvbnRpbnVhYmxlVHlwZSIsImNoZWNrTGluZSIsImNvbCIsInJvdyIsInBhcnNlSW50IiwiZ2V0U2VsZWN0aW9uIiwiZ2V0QW5jaG9yIiwic3RhcnROb2RlIiwiYW5jaG9yTm9kZSIsImZvY3VzTm9kZSIsIm5vZGVUeXBlIiwiTm9kZSIsIlRFWFRfTk9ERSIsImFuY2hvck9mZnNldCIsImZvY3VzT2Zmc2V0IiwiY29tcHV0ZUNvbHVtbiIsIm5vZGUiLCJwcmV2aW91c1NpYmxpbmciLCJjb21wdXRlTm9kZUFuZE9mZnNldCIsImJpbmRSaWdodCIsImNoaWxkcmVuQ29tcGxldGUiLCJydiIsIm5vZGVWYWx1ZSIsInNldFNlbGVjdGlvbiIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZXRTdGFydCIsInNldEVuZCIsIndpbmRvd1NlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiaW5wdXRUeXBlIiwiY2hpbGROb2RlIiwiZGl2V3JhcHBlciIsImZpcmVTZWxlY3Rpb24iLCJzdGFydExpbmUiLCJsaW5lc1RvSW5zZXJ0IiwiYWRqdXN0TGluZUVsZW1lbnRzIiwiaW5zZXJ0ZWRCbGFuayIsImluc2VydGVkRGlydHkiLCJzcGxpY2UiLCJ0ZXh0Iiwib3JpZ2luYWxFdmVudCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwiYmVnaW5uaW5nIiwiaW5zZXJ0ZWRMaW5lcyIsImxpbmVCZWZvcmUiLCJsaW5lRW5kIiwiZW5kQ29sUG9zIiwiY29tcHV0ZUNvbW1vbkFuY2VzdG9yIiwibm9kZTEiLCJub2RlMiIsImFuY2VzdHJ5IiwidW5zaGlmdCIsImFuY2VzdHJ5MSIsImFuY2VzdHJ5MiIsImNvbXB1dGVFbmNsb3NpbmdNYXJrdXBOb2RlIiwiaW5jbHVkZXMiLCJnZXRDb21tYW5kU3RhdGUiLCJjbWQiLCJtYXJrdXBOb2RlIiwic3RhcnRDb2wiLCJsZW4iLCJsZWZ0IiwibWlkIiwicmlnaHQiLCJlbmRDb2wiLCJsZWFkaW5nIiwidHJhaWxpbmciLCJpc0NvbGxhcHNlZCIsImFuY2VzdG9yIiwidG9nZ2xlQ29tbWFuZFN0YXRlIiwibGlzdGVuZXIiLCJsaW5lc0RpcnR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7RUFBQSxNQUFNQSxHQUFHLEdBQUc7RUFDVkMsRUFBQUEsVUFBVSxFQUFHLENBQTBSLHlSQUFBLENBQUE7RUFDdlNDLEVBQUFBLElBQUksRUFBRyxDQUF5WSx3WUFBQSxDQUFBO0VBQ2haQyxFQUFBQSxnQkFBZ0IsRUFBRyxDQUEwWCx5WEFBQSxDQUFBO0VBQzdZQyxFQUFBQSxJQUFJLEVBQUcsQ0FBOFUsNlVBQUEsQ0FBQTtFQUNyVkMsRUFBQUEsRUFBRSxFQUFHLENBQStKLDhKQUFBLENBQUE7RUFDcEtDLEVBQUFBLEVBQUUsRUFBRyxDQUFpSyxnS0FBQSxDQUFBO0VBQ3RLQyxFQUFBQSxFQUFFLEVBQUcsQ0FBZ0ksK0hBQUEsQ0FBQTtFQUNySUMsRUFBQUEsS0FBSyxFQUFHLENBQThILDZIQUFBLENBQUE7RUFDdElDLEVBQUFBLE1BQU0sRUFBRyxDQUFnSCwrR0FBQSxDQUFBO0VBQ3pIQyxFQUFBQSxJQUFJLEVBQUcsQ0FBMHVDLHl1Q0FBQSxDQUFBO0VBQ2p2Q0MsRUFBQUEsRUFBRSxFQUFHLENBQW90QixtdEJBQUEsQ0FBQTtFQUN6dEJDLEVB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
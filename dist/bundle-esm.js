import Vue from 'vue';
import { Editor, EditorMenuBar, EditorMenuBubble, EditorContent, Node as Node$2 } from 'tiptap';
import { VTooltip, VBtn, VIcon, VToolbar, VCard, VDialog, VCardTitle, VCardText, VCardActions, VSpacer, VTextField, VRow, VCol, VImg, VCheckbox } from 'vuetify/lib';
import { Placeholder, Heading as Heading$1, Bold as Bold$1, Italic as Italic$1, Strike as Strike$1, Underline as Underline$1, Code as Code$1, CodeBlock as CodeBlock$1, BulletList as BulletList$1, OrderedList as OrderedList$1, ListItem as ListItem$1, Blockquote as Blockquote$1, HardBreak as HardBreak$1, HorizontalRule as HorizontalRule$1, History as History$1, Link as Link$1, Image as Image$1, TodoList as TodoList$1 } from 'tiptap-extensions';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global_1 =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var descriptors = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

var objectPropertyIsEnumerable = {
	f: f
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString = {}.toString;

var classofRaw = function (it) {
  return toString.call(it).slice(8, -1);
};

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings



var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var hasOwnProperty = {}.hasOwnProperty;

var has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var document$1 = global_1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document$1) && isObject(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

// Thank's IE8 for his funny defineProperty
var ie8DomDefine = !descriptors && !fails(function () {
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (ie8DomDefine) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
};

var objectGetOwnPropertyDescriptor = {
	f: f$1
};

var anObject = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var objectDefineProperty = {
	f: f$2
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var setGlobal = function (key, value) {
  try {
    createNonEnumerableProperty(global_1, key, value);
  } catch (error) {
    global_1[key] = value;
  } return value;
};

var SHARED = '__core-js_shared__';
var store = global_1[SHARED] || setGlobal(SHARED, {});

var sharedStore = store;

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof sharedStore.inspectSource != 'function') {
  sharedStore.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap$1 = global_1.WeakMap;

var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource(WeakMap$1));

var shared = createCommonjsModule(function (module) {
(module.exports = function (key, value) {
  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode:  'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var postfix = Math.random();

var uid = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var keys = shared('keys');

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys = {};

var WeakMap$2 = global_1.WeakMap;
var set, get, has$1;

var enforce = function (it) {
  return has$1(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (nativeWeakMap) {
  var store$1 = new WeakMap$2();
  var wmget = store$1.get;
  var wmhas = store$1.has;
  var wmset = store$1.set;
  set = function (it, metadata) {
    wmset.call(store$1, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store$1, it) || {};
  };
  has$1 = function (it) {
    return wmhas.call(store$1, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return has(it, STATE) ? it[STATE] : {};
  };
  has$1 = function (it) {
    return has(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has$1,
  enforce: enforce,
  getterFor: getterFor
};

var redefine = createCommonjsModule(function (module) {
var getInternalState = internalState.get;
var enforceInternalState = internalState.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global_1) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});
});

var path = global_1;

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
};

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
var toInteger = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
var toLength = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var indexOf = arrayIncludes.indexOf;


var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys$1);
};

var objectGetOwnPropertyNames = {
	f: f$3
};

var f$4 = Object.getOwnPropertySymbols;

var objectGetOwnPropertySymbols = {
	f: f$4
};

// all object keys, includes non-enumerable and symbols
var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var copyConstructorProperties = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

var isForced_1 = isForced;

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global_1;
  } else if (STATIC) {
    target = global_1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global_1[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};

var aFunction$1 = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

// optional / simple context binding
var functionBindContext = function (fn, that, length) {
  aFunction$1(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
var toObject = function (argument) {
  return Object(requireObjectCoercible(argument));
};

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
var isArray = Array.isArray || function isArray(arg) {
  return classofRaw(arg) == 'Array';
};

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

var useSymbolAsUid = nativeSymbol
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global_1.Symbol;
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = indexedObject(O);
    var boundFunction = functionBindContext(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod$1(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod$1(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod$1(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod$1(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod$1(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$1(6)
};

var arrayMethodIsStrict = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

var arrayMethodUsesToLength = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !descriptors) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};

var $forEach = arrayIteration.forEach;



var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
var arrayForEach = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
_export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
  forEach: arrayForEach
});

var createProperty = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var process = global_1.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

var SPECIES$1 = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return engineV8Version >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$1] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH$1 = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES$2 = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max$1 = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH$1 }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES$2];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});

var aPossiblePrototype = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    objectSetPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) objectSetPrototypeOf($this, NewTargetPrototype);
  return $this;
};

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
var objectKeys = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
  return O;
};

var html = getBuiltIn('document', 'documentElement');

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : objectDefineProperties(result, Properties);
};

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$2 = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod$2(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod$2(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod$2(3)
};

var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
var defineProperty$1 = objectDefineProperty.f;
var trim = stringTrim.trim;

var NUMBER = 'Number';
var NativeNumber = global_1[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classofRaw(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys$1 = descriptors ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys$1.length > j; j++) {
    if (has(NativeNumber, key = keys$1[j]) && !has(NumberWrapper, key)) {
      defineProperty$1(NumberWrapper, key, getOwnPropertyDescriptor$2(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global_1, NUMBER, NumberWrapper);
}

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof = toStringTagSupport ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
var objectToString = toStringTagSupport ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!toStringTagSupport) {
  redefine(Object.prototype, 'toString', objectToString, { unsafe: true });
}

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

for (var COLLECTION_NAME in domIterables) {
  var Collection = global_1[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
  } catch (error) {
    CollectionPrototype.forEach = arrayForEach;
  }
}

/**
  * vue-class-component v7.2.3
  * (c) 2015-present Evan You
  * @license MIT
  */

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return Vue.extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      if (key.charAt(0) !== '_') {
        Object.defineProperty(_this, key, {
          get: function get() {
            return vm[key];
          },
          set: function set(value) {
            vm[key] = value;
          },
          configurable: true
        });
      }
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof Vue ? superProto.constructor : Vue;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties

    Object.defineProperty(Extended, key, descriptor);
  });
}

function Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/** vue-property-decorator verson 8.4.0 MIT LICENSE copyright 2019 kaorun343 */
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
    }
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}

var toolbarConfig = {
  color: 'grey lighten-4',
  flat: true,
  dense: true
};

var TextIcon =
/** @class */
function () {
  function TextIcon(text) {
    this.text = text;
  }

  TextIcon.prototype.toString = function () {
    return this.text;
  };

  return TextIcon;
}();

var defineProperty$2 = objectDefineProperty.f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (descriptors && !(NAME in FunctionPrototype)) {
  defineProperty$2(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}

var VuetifyIcon =
/** @class */
function () {
  function VuetifyIcon(name) {
    this.name = name;
  }

  VuetifyIcon.prototype.toString = function () {
    return this.name;
  };

  return VuetifyIcon;
}();

var PACKAGE_NAME = 'tiptap-vuetify';
var EVENTS = {
  INPUT: 'input',
  INIT: 'init'
};
var PROPS = {
  VALUE: 'value',
  EXTENSIONS: 'extensions',
  TOOLBAR_ATTRIBUTES: 'toolbarAttributes',
  EDITOR_PROPERTIES: 'editorProperties',
  NATIVE_EXTENSIONS: 'nativeExtensions',
  PLACEHOLDER: 'placeholder',
  CARD_PROPS: 'cardProps',
  OUTPUT_FORMAT: 'outputFormat',
  TYPE: 'type',
  MIN_HEIGHT: 'minHeight',
  MAX_HEIGHT: 'maxHeight'
};
var EDITOR_TYPES_ENUM;

(function (EDITOR_TYPES_ENUM) {
  EDITOR_TYPES_ENUM["card"] = "card";
  EDITOR_TYPES_ENUM["inline"] = "inline";
})(EDITOR_TYPES_ENUM || (EDITOR_TYPES_ENUM = {}));

var ConsoleLogger =
/** @class */
function () {
  function ConsoleLogger() {}

  ConsoleLogger.prototype.warn = function (msg) {
    console.warn(PACKAGE_NAME + ": " + msg);
  };

  ConsoleLogger.prototype.error = function (msg) {
    console.error(PACKAGE_NAME + ": " + msg);
  };

  return ConsoleLogger;
}();

var ConsoleLogger$1 = new ConsoleLogger();

var PROPS$1 = {
  EDITOR: 'editor',
  OPTIONS: 'options',
  CONTEXT: 'context',
  DARK: 'dark'
};

var ExtensionActionRenderBtn =
/** @class */
function (_super) {
  __extends(ExtensionActionRenderBtn, _super);

  function ExtensionActionRenderBtn() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.PROPS = PROPS$1;
    return _this;
  }

  Object.defineProperty(ExtensionActionRenderBtn.prototype, "buttonIcon", {
    get: function get() {
      var icon = this[PROPS$1.OPTIONS].icons[this.$tiptapVuetify.iconsGroup];

      if (!icon) {
        ConsoleLogger$1.warn('No icon was provided in extension options.');
        return 'No icon';
      }

      return icon;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ExtensionActionRenderBtn.prototype, "isTextIcon", {
    get: function get() {
      return this.buttonIcon instanceof TextIcon;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ExtensionActionRenderBtn.prototype, "isVuetifyIcon", {
    get: function get() {
      return this.buttonIcon instanceof VuetifyIcon;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ExtensionActionRenderBtn.prototype, "tooltipText", {
    get: function get() {
      var source = this.$props[PROPS$1.OPTIONS].tooltip;

      if (typeof source === 'function') {
        return source(this.$props[PROPS$1.CONTEXT], this.$props[PROPS$1.OPTIONS]);
      }

      return source;
    },
    enumerable: true,
    configurable: true
  });

  var _a, _b, _c, _d;

  _a = PROPS$1.EDITOR, _b = PROPS$1.OPTIONS, _c = PROPS$1.CONTEXT, _d = PROPS$1.DARK;

  __decorate([Prop({
    type: Object,
    required: true
  }), __metadata("design:type", Editor)], ExtensionActionRenderBtn.prototype, _a, void 0);

  __decorate([Prop({
    type: Object,
    required: true
  }), __metadata("design:type", Object)], ExtensionActionRenderBtn.prototype, _b, void 0);

  __decorate([Prop({
    type: Object,
    required: true
  }), __metadata("design:type", Object)], ExtensionActionRenderBtn.prototype, _c, void 0);

  __decorate([Prop({
    type: Boolean,
    default: false
  }), __metadata("design:type", Boolean)], ExtensionActionRenderBtn.prototype, _d, void 0);

  ExtensionActionRenderBtn = __decorate([Component({
    components: {
      VTooltip: VTooltip,
      VBtn: VBtn,
      VIcon: VIcon
    }
  })], ExtensionActionRenderBtn);
  return ExtensionActionRenderBtn;
}(Vue);

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = ExtensionActionRenderBtn;
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-tooltip',{attrs:{"top":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('v-btn',_vm._g({class:{
        'tiptap-vuetify-editor__action-render-btn': true,
        'v-btn--active': _vm.$props[_vm.PROPS.OPTIONS].isActive(_vm.$props[_vm.PROPS.CONTEXT])
      },attrs:{"dark":_vm.$props[_vm.PROPS.DARK],"small":"","icon":""},on:{"click":function($event){return _vm.options.onClick({ context: _vm.$props[_vm.PROPS.CONTEXT], editor: _vm.$props[_vm.PROPS.EDITOR] })}}},on),[_c(_vm.isTextIcon ? 'b' : _vm.isVuetifyIcon ? 'v-icon' : null,{tag:"component",staticClass:"tiptap-vuetify-editor__btn-icon"},[_vm._v("\n        "+_vm._s(_vm.buttonIcon)+"\n      ")])],1)]}}])},[_vm._v(" "),[_vm._v(_vm._s(_vm.tooltipText))]],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ExtensionActionRenderBtnComponent = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var ExtensionActionRenderBtn$1 =
/** @class */
function () {
  function ExtensionActionRenderBtn(options) {
    var nativeExtensionName = options.nativeExtensionName;
    this.options = __assign({
      onClick: function onClick(_a) {
        var context = _a.context;
        context.commands[nativeExtensionName](options.onClickOptions);
      },
      isActive: function isActive(_a) {
        var isActive = _a.isActive;
        return !!isActive[nativeExtensionName] && isActive[nativeExtensionName](options.isActiveOptions);
      }
    }, options);
  }

  return ExtensionActionRenderBtn;
}();

var PROPS$2 = {
  EDITOR: 'editor',
  ACTIONS: 'actions',
  CONTEXT: 'context',
  DARK: 'dark'
};

var ActionsRender =
/** @class */
function (_super) {
  __extends(ActionsRender, _super);

  function ActionsRender() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.PROPS = PROPS$2;
    return _this;
  }

  ActionsRender.prototype.isBtn = function (action) {
    return action.render instanceof ExtensionActionRenderBtn$1;
  };

  var _a, _b, _c, _d;

  _a = PROPS$2.EDITOR, _b = PROPS$2.ACTIONS, _c = PROPS$2.CONTEXT, _d = PROPS$2.DARK;

  __decorate([Prop({
    type: Object,
    required: true
  }), __metadata("design:type", Editor)], ActionsRender.prototype, _a, void 0);

  __decorate([Prop({
    type: Array,
    default: function _default() {
      return [];
    }
  }), __metadata("design:type", Array)], ActionsRender.prototype, _b, void 0);

  __decorate([Prop({
    type: Object
  }), __metadata("design:type", Object)], ActionsRender.prototype, _c, void 0);

  __decorate([Prop({
    type: Boolean,
    default: false
  }), __metadata("design:type", Boolean)], ActionsRender.prototype, _d, void 0);

  ActionsRender = __decorate([Component({
    components: {
      'action-btn': ExtensionActionRenderBtnComponent
    }
  })], ActionsRender);
  return ActionsRender;
}(Vue);

/* script */
const __vue_script__$1 = ActionsRender;
/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.$props[_vm.PROPS.ACTIONS]),function(action,i){return [(_vm.isBtn(action))?_c('action-btn',{key:'action-button-' + i,attrs:{"options":action.render.options,"context":_vm.$props[_vm.PROPS.CONTEXT],"editor":_vm.$props[_vm.PROPS.EDITOR],"dark":_vm.$props[_vm.PROPS.DARK]}}):_vm._e()]})],2)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ActionsRender$1 = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

var Toolbar =
/** @class */
function (_super) {
  __extends(Toolbar, _super);

  function Toolbar() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.toolbarConfig = toolbarConfig;
    return _this;
  }

  __decorate([Prop({
    type: Object,
    required: true
  }), __metadata("design:type", Editor)], Toolbar.prototype, "editor", void 0);

  __decorate([Prop({
    type: Array,
    default: function _default() {
      return [];
    }
  }), __metadata("design:type", Array)], Toolbar.prototype, "actions", void 0);

  __decorate([Prop({
    type: [Array, Object],
    default: function _default() {
      return {};
    }
  }), __metadata("design:type", Object)], Toolbar.prototype, "toolbarAttributes", void 0);

  Toolbar = __decorate([Component({
    components: {
      ActionsRender: ActionsRender$1,
      EditorMenuBar: EditorMenuBar,
      VToolbar: VToolbar
    }
  })], Toolbar);
  return Toolbar;
}(Vue);

/* script */
const __vue_script__$2 = Toolbar;
/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tiptap-vuetify-editor__toolbar"},[_c('editor-menu-bar',{attrs:{"editor":_vm.editor},scopedSlots:_vm._u([{key:"default",fn:function(menuBarContext){return [_vm._t("default",[_c('v-toolbar',_vm._b({},'v-toolbar',Object.assign({}, _vm.toolbarConfig,
          _vm.toolbarAttributes),false),[_c('actions-render',{attrs:{"actions":_vm.actions,"context":menuBarContext,"editor":_vm.editor}})],1)],{"isActive":menuBarContext.isActive,"commands":menuBarContext.commands})]}}],null,true)})],1)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Toolbar$1 = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod$3 = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction$1(callbackfn);
    var O = toObject(that);
    var self = indexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod$3(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod$3(true)
};

var $reduce = arrayReduce.left;



var STRICT_METHOD$1 = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH$2 = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
_export({ target: 'Array', proto: true, forced: !STRICT_METHOD$1 || !USES_TO_LENGTH$2 }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

var UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

var BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
	UNSUPPORTED_Y: UNSUPPORTED_Y,
	BROKEN_CARET: BROKEN_CARET
};

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

var regexpExec = patchedExec;

_export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
  exec: regexpExec
});

// TODO: Remove from `core-js@4` since it's moved to entry points







var SPECIES$3 = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES$3] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
};

var SPECIES$4 = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
var speciesConstructor = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES$4]) == undefined ? defaultConstructor : aFunction$1(S);
};

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod$4 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$4(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$4(true)
};

var charAt = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
var advanceStringIndex = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classofRaw(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};

var arrayPush = [].push;
var min$2 = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegexp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min$2(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);

var en = {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Block quote'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Bold'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Bulleted list'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Code'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Code block'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Undo'
        },
        redo: {
          tooltip: 'Redo'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Horizontal line'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Italic'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Ordered list'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Paragraph'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Strike'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Underline'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: function tooltip(_a) {
            var level = _a.level;
            return level + ' level header';
          }
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Change Link'
        },
        notActive: {
          tooltip: 'Add Link'
        }
      },
      window: {
        title: 'Link control',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: 'Close',
          remove: 'Remove',
          apply: 'Apply'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Image'
      },
      window: {
        title: 'Add Image',
        or: 'OR',
        form: {
          sourceLink: 'Image URL'
        },
        buttons: {
          close: 'Close',
          apply: 'Apply'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'To Do List'
        }
      }
    }
  }
};

var ru = {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Блок цитаты'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Жирный'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Маркированный список'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Код'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Блок кода'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Назад'
        },
        redo: {
          tooltip: 'Вперед'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Горизонтальная линия'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Курсивный'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Упорядоченный список'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Параграф'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Перечерктнутый'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Подчерктнутый'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: function tooltip(_a) {
            var level = _a.level;
            return "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A " + level + " \u0443\u0440\u043E\u0432\u043D\u044F";
          }
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Изменить ссылку'
        },
        notActive: {
          tooltip: 'Добавить ссылку'
        }
      },
      window: {
        title: 'Управление ссылкой',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: 'Закрыть',
          remove: 'Удалить',
          apply: 'Применить'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Картинка'
      },
      window: {
        title: 'Добавить картинку',
        or: 'ИЛИ',
        form: {
          sourceLink: 'Ссылка на картинку'
        },
        buttons: {
          close: 'Закрыть',
          apply: 'Применить'
        }
      }
    }
  }
};

var es = {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Cita en bloque'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Texto en negrita'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Lista no ordenada'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Código'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Bloque de código'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Deshacer'
        },
        redo: {
          tooltip: 'Rehacer'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Línea horizontal'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Texto en cursiva'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Lista ordenada'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Párrafo'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Tachar texto'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Subrayar texto'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: function tooltip(_a) {
            var level = _a.level;
            return "Nivel de encabezado " + level;
          }
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Actualizar enlace'
        },
        notActive: {
          tooltip: 'Añadir enlace'
        }
      },
      window: {
        title: 'Control de enlace',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: 'Cerrar',
          remove: 'Eliminar',
          apply: 'Aplicar'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Imagen'
      },
      window: {
        title: 'Agregar Imagen',
        or: 'O',
        form: {
          sourceLink: 'URL de la Imagen'
        },
        buttons: {
          close: 'Cerrar',
          apply: 'Aplicar'
        }
      }
    }
  }
};

var pl = {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Blok cytatu'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Pogrubienie'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Lista punktów'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Kod'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Blok kodu'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Cofnij'
        },
        redo: {
          tooltip: 'Ponów'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Linia pozioma'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Kursywa'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Lista numerowana'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Paragraf'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Przekreślenie'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Podkreślenie'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: function tooltip(args) {
            return 'Nagłówek ' + args.level;
          }
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Zaktualizuj odnośnik'
        },
        notActive: {
          tooltip: 'Dodaj odnośnik'
        }
      },
      window: {
        title: 'Odnośnik',
        form: {
          hrefLabel: 'Adres URL'
        },
        buttons: {
          close: 'Zamknij',
          remove: 'Usuń',
          apply: 'Zastosuj'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Obrazek'
      },
      window: {
        title: 'Dodaj obrazek',
        or: 'LUB',
        form: {
          sourceLink: 'Adres URL obrazka'
        },
        buttons: {
          close: 'Zamknij',
          apply: 'Zastosuj'
        }
      }
    }
  }
};

var fr = {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Bloc de citation'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Gras'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Liste à puce'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Code'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Bloc de code'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Annuler'
        },
        redo: {
          tooltip: 'Rétablir'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Ligne horizontale'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Italique'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Liste ordonnée'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Paragraphe'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Barré'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Souligné'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: function tooltip(args) {
            return args.level + ' niveau de titre';
          }
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Mise à jour du lien'
        },
        notActive: {
          tooltip: 'Ajouter un lien'
        }
      },
      window: {
        title: 'Contrôle de lien',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: 'Fermer',
          remove: 'Retirer',
          apply: 'Appliquer'
        }
      }
    }
  }
};

var uk = {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Блок цитати'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Жирний'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Маркований список'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Код'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Блок кода'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Назад'
        },
        redo: {
          tooltip: 'Вперед'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Горизонтальна лінія'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Курсивний'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Упорядкований список'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Параграф'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Перекреслений'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Підкреслений'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: function tooltip(_a) {
            var level = _a.level;
            return "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A " + level + " \u0440\u0456\u0432\u043D\u044F";
          }
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Змінити посилання'
        },
        notActive: {
          tooltip: 'Додати посилання'
        }
      },
      window: {
        title: 'Управління посиланням',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: 'Закрити',
          remove: 'Вилучити',
          apply: 'Застосувати'
        }
      }
    }
  }
};

var ptbr = {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Bloco de citação'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Negrito'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Lista de pontos'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Código'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Bloco de código'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Desfazer'
        },
        redo: {
          tooltip: 'Refazer'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Linha horizontal'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Itálico'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Lista ordenada'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Parágrafo'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Riscado'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Sublinhado'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: function tooltip(_a) {
            var level = _a.level;
            return 'cabeçalho nível ' + level;
          }
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Mudar Link'
        },
        notActive: {
          tooltip: 'Adicionar Link'
        }
      },
      window: {
        title: 'Configurar link',
        form: {
          hrefLabel: 'link'
        },
        buttons: {
          close: 'Fechar',
          remove: 'Remover',
          apply: 'Aplicar'
        }
      }
    }
  }
};

var tr = {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Alıntı'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Kalın'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Liste'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Kod'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Kod Bloğu'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Geri'
        },
        redo: {
          tooltip: 'İleri'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Yatay çizgi'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'İtalik'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Numaralı Liste'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Paragraf'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Üstü Çizili'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Altı Çizili'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: function tooltip(_a) {
            var level = _a.level;
            return level + ' Başlık';
          }
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Link\'i Düzenle'
        },
        notActive: {
          tooltip: 'Link Ekle'
        }
      },
      window: {
        title: 'Link Kontrol',
        form: {
          hrefLabel: 'Adres'
        },
        buttons: {
          close: 'Kapat',
          remove: 'Sil',
          apply: 'Uygula'
        }
      }
    }
  }
};

var he = {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'ציטוט'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'מודגש'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'רשימה לא ממוספרת'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'קוד'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'בלוק קוד'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'ביטול'
        },
        redo: {
          tooltip: 'בצע שוב'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'קו אופקי'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'מוטה'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'רשימה ממוספרת'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'פיסקה'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'קו אמצע'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'קו תחתון'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: function tooltip(_a) {
            var level = _a.level;
            return level + ' כותרת בגודל';
          }
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'שנה קישור'
        },
        notActive: {
          tooltip: 'הוסף קישור'
        }
      },
      window: {
        title: 'ניהול קישור',
        form: {
          hrefLabel: 'כתובת'
        },
        buttons: {
          close: 'סגור',
          remove: 'הסר',
          apply: 'החל'
        }
      }
    }
  }
};

var nl = {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Citaatblok'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Vet'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Opsomming tekens'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Code'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Code blok'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Ongedaan maken'
        },
        redo: {
          tooltip: 'Opnieuw uitvoeren'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Horizontale lijn'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Cursief'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Genummerde lijst'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Paragraaf'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Doorhalen'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Onderstrepen'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: function tooltip(_a) {
            var level = _a.level;
            return 'Kop ' + level;
          }
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Link wijzigigen'
        },
        notActive: {
          tooltip: 'Link invoegen'
        }
      },
      window: {
        title: 'Link controle',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: 'Sluiten',
          remove: 'Verwijderen',
          apply: 'Toepassen'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Afbeelding'
      },
      window: {
        title: 'Afbeelding toevoegen',
        or: 'OF',
        form: {
          sourceLink: 'Afbeelding URL'
        },
        buttons: {
          close: 'Sluiten',
          apply: 'Toepassen'
        }
      }
    }
  }
};

var ja = {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: '引用'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: '太字'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: '箇条書き'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'コード'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'コードブロック'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: '元に戻す'
        },
        redo: {
          tooltip: 'やり直し'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: '平行線'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: '斜体'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: '番号付きリスト'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: '段落'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: '取り消し線'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: '下線'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: function tooltip(_a) {
            var level = _a.level;
            return '見出し ' + level;
          }
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'リンク変更'
        },
        notActive: {
          tooltip: 'リンク追加'
        }
      },
      window: {
        title: 'リンクの編集',
        form: {
          hrefLabel: 'リンク'
        },
        buttons: {
          close: '閉じる',
          remove: '削除',
          apply: '適用'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: '画像'
      },
      window: {
        title: '画像を追加する',
        or: 'または',
        form: {
          sourceLink: '画像URL'
        },
        buttons: {
          close: '閉じる',
          apply: '適用'
        }
      }
    }
  }
};

var de = {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Block Zitat'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Fett'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Aufzählungsliste'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Code'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Code Abschnitt'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Rückgängig'
        },
        redo: {
          tooltip: 'Wiederherstellen'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Horizontale Linie'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Kursiv'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Geordnete Liste'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Paragraph'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Durchgestrichen'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Unterstreichen'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: function tooltip(_a) {
            var level = _a.level;
            return level + ' level Überschrift';
          }
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Link ändern'
        },
        notActive: {
          tooltip: 'Link hinzufügen'
        }
      },
      window: {
        title: 'Link Kontrolle',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: 'Schließen',
          remove: 'Entfernen',
          apply: 'Übernehmen'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Bild'
      },
      window: {
        title: 'Bild hinzufügen',
        or: 'ODER',
        form: {
          sourceLink: 'Bild URL'
        },
        buttons: {
          close: 'Schließen',
          apply: 'Übernehmen'
        }
      }
    }
  }
};

var ko = {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: '인용'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: '굵게'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: '글머리 기호'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: '코드'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: '코드 블록'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: '입력 취소'
        },
        redo: {
          tooltip: '입력 다시 실행'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: '수평선'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: '기울임꼴'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: '번호 매기기'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: '단락'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: '취소선'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: '밑줄'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: function tooltip(_a) {
            var level = _a.level;
            return '헤딩 ' + level;
          }
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: '링크 변경'
        },
        notActive: {
          tooltip: '링크 추가'
        }
      },
      window: {
        title: '링크 편집',
        form: {
          hrefLabel: '링크'
        },
        buttons: {
          close: '닫기',
          remove: '삭제',
          apply: '적용'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: '이미지'
      },
      window: {
        title: '이미지 추가',
        or: '또는',
        form: {
          sourceLink: '이미지 URL'
        },
        buttons: {
          close: '닫기',
          apply: '적용'
        }
      }
    }
  }
};

var defaultLanguage = 'en';
var dictionary = {
  en: en,
  ru: ru,
  es: es,
  pl: pl,
  fr: fr,
  uk: uk,
  ptbr: ptbr,
  tr: tr,
  he: he,
  nl: nl,
  ja: ja,
  de: de,
  ko: ko
};
function getCurrentLang() {
  return TiptapVuetifyPlugin.vuetifyLang || defaultLanguage;
}
function getMsg(path, args, lang) {
  if (lang === void 0) {
    lang = null;
  }

  var currentLang = lang || getCurrentLang();

  if (!dictionary[currentLang]) {
    currentLang = defaultLanguage;
    ConsoleLogger$1.warn("The current language \"" + currentLang + "\" is not yet available. Using language \"" + defaultLanguage + "\" by default. Contribution to github is welcome.");
  }

  var dictionaryByLang = dictionary[currentLang];
  var target;

  try {
    target = path.split('.').reduce(function (prev, curr) {
      return prev[curr];
    }, dictionaryByLang);
  } catch (e) {
    ConsoleLogger$1.warn("Cannot get translation \"" + path + "\" for language \"" + currentLang + "\". Fallback \"" + defaultLanguage + "\" is used instead. Contribution to github is welcome."); // Использовать defaultLanguage если фраза не переведена на текущий язык

    return getMsg(path, args, defaultLanguage);
  }

  if (target instanceof Function) {
    return target(args);
  }

  return target;
}

var namespace = '$i18n';

var I18nMixin =
/** @class */
function (_super) {
  __extends(I18nMixin, _super);

  function I18nMixin() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(I18nMixin.prototype, namespace, {
    get: function get() {
      return {
        getMsg: getMsg
      };
    },
    enumerable: true,
    configurable: true
  });
  I18nMixin = __decorate([Component], I18nMixin);
  return I18nMixin;
}(Vue);

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty$3 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$3(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$3(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty$3({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty$3({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty$3({}, side, reference[side]),
      end: defineProperty$3({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* eslint-disable */
// TODO REFACTOR! Потратил 3 часа чтобы решить один странный issue и переделать под poper.

var Menu =
/** @class */
function (_super) {
  __extends(Menu, _super);

  function Menu() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Menu.prototype.mounted = function () {
    var RangeRef =
    /** @class */
    function () {
      function RangeRef() {
        var _this = this;

        this.range = null;
        this.rect = null;
        this.timeoutMousemove = null;
        this.updateRect();

        var update = function update(evt, hide) {
          var selection = document.getSelection();
          _this.range = selection && selection.rangeCount && selection.getRangeAt(0);

          _this.updateRect(hide);
        };

        var editorContent = document.querySelector('.tiptap-vuetify-editor .ProseMirror');
        editorContent.addEventListener('mouseup', update);
        editorContent.addEventListener('input', update);
        editorContent.addEventListener('keydown', function (evt) {
          return update(evt, true);
        });

        var debounce = function debounce(f, ms) {
          var isCooldown = false;
          return function () {
            if (isCooldown) return;
            f.apply(this, arguments);
            isCooldown = true;
            setTimeout(function () {
              return isCooldown = false;
            }, ms);
          };
        };

        editorContent.addEventListener('mousemove', debounce(function () {
          update();
        }, 100));
        window.addEventListener('scroll', update);
        document.scrollingElement.addEventListener('scroll', update);
      }

      RangeRef.prototype.updateRect = function (hide) {
        if (hide === void 0) {
          hide = false;
        }

        if (!hide && this.range) {
          this.rect = this.range.getBoundingClientRect();
        } else {
          this.rect = {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 0,
            height: 0
          };
        }

        this.rectChangedCallback(this.rect);
      };

      RangeRef.prototype.rectChangedCallback = function (arg) {// Abstract to be implemented
      };

      RangeRef.prototype.getBoundingClientRect = function () {
        return this.rect;
      };

      Object.defineProperty(RangeRef.prototype, "clientWidth", {
        get: function get() {
          return this.rect.width;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(RangeRef.prototype, "clientHeight", {
        get: function get() {
          return this.rect.height;
        },
        enumerable: true,
        configurable: true
      });
      return RangeRef;
    }();

    setTimeout(function () {
      var pop = document.querySelector('.tiptap-vuetify-editor-pop');
      var rangeRef = new RangeRef();
      var popper = new Popper(rangeRef, pop, {
        placement: 'top',
        modifiers: {
          offset: {
            offset: '0,5'
          }
        },
        positionFixed: true
      });

      rangeRef.rectChangedCallback = function (_a) {
        var width = _a.width;

        if (width > 0) {
          popper.scheduleUpdate();
          pop.firstElementChild.classList.add('tiptap-vuetify-editor-pop__popper--visible');
        } else {
          pop.firstElementChild.classList.remove('tiptap-vuetify-editor-pop__popper--visible');
        }
      };
    }, 1000);
  };

  __decorate([Prop({
    type: Object,
    required: true
  }), __metadata("design:type", Editor)], Menu.prototype, "editor", void 0);

  __decorate([Prop({
    type: Array,
    default: function _default() {
      return [];
    }
  }), __metadata("design:type", Array)], Menu.prototype, "actions", void 0);

  Menu = __decorate([Component({
    components: {
      ActionsRender: ActionsRender$1,
      EditorMenuBubble: EditorMenuBubble,
      VCard: VCard
    }
  })], Menu);
  return Menu;
}(mixins(I18nMixin));

/* script */
const __vue_script__$3 = Menu;
/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('editor-menu-bubble',{attrs:{"editor":_vm.editor},scopedSlots:_vm._u([{key:"default",fn:function(context){return [_c('div',{staticClass:"tiptap-vuetify-editor-pop",attrs:{"role":"tooltip"}},[_c('div',{staticClass:"tiptap-vuetify-editor-pop__popper"},[_c('actions-render',{attrs:{"actions":_vm.actions,"context":context,"editor":_vm.editor,"dark":true}}),_vm._v(" "),_c('div',{attrs:{"x-arrow":""}})],1)])]}}])})};
var __vue_staticRenderFns__$3 = [];

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Bubble = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

var ExtensionActionRenderInEnum;

(function (ExtensionActionRenderInEnum) {
  ExtensionActionRenderInEnum["toolbar"] = "toolbar";
  ExtensionActionRenderInEnum["bubbleMenu"] = "bubbleMenu";
})(ExtensionActionRenderInEnum || (ExtensionActionRenderInEnum = {}));

var TiptapVuetify =
/** @class */
function (_super) {
  __extends(TiptapVuetify, _super);

  function TiptapVuetify() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.PROPS = PROPS;
    _this.EDITOR_TYPES_ENUM = EDITOR_TYPES_ENUM; // TODO было бы удобно передавать через vue provide (DI)

    _this.editor = null;
    _this.availableActions = {
      toolbar: [],
      bubbleMenu: []
    };
    _this.emitAfterOnUpdate = false;
    return _this;
  }

  Object.defineProperty(TiptapVuetify.prototype, "contentDynamicStyles", {
    get: function get() {
      // если не указана еденица измерения (e.g. 60, 25), то будет как px. То есть 60em, 25% такими и останетутся.
      var getUnitWithPxAsDefault = function getUnitWithPxAsDefault(str) {
        if (!str) return str;
        var num = parseInt(str, 10);
        var unit = str.slice(num.toString().length);
        return num + (unit || 'px');
      };

      return {
        minHeight: getUnitWithPxAsDefault(this[PROPS.MIN_HEIGHT]),
        maxHeight: getUnitWithPxAsDefault(this[PROPS.MAX_HEIGHT])
      };
    },
    enumerable: true,
    configurable: true
  });

  TiptapVuetify.prototype.onValueChange = function (val) {
    if (this.emitAfterOnUpdate) {
      this.emitAfterOnUpdate = false;
      return;
    }

    if (this.editor) this.editor.setContent(val);
  };

  TiptapVuetify.prototype.mounted = function () {
    var _this = this;

    var nativeExtensionsInstances = [];
    var extensionsInstances = []; // опции расширений по умолчанию

    var paramsDefault = {
      renderIn: ExtensionActionRenderInEnum.toolbar,
      options: {}
    };
    this[PROPS.EXTENSIONS].forEach(function (extensionDefinition) {
      var _m, _o;

      var ExtensionClass;
      var params; // Получение расширения и его опций

      if (Array.isArray(extensionDefinition)) {
        _m = __read(extensionDefinition, 2), ExtensionClass = _m[0], params = _m[1]; // TODO улучшить проверку, но почему-то это не работает: http://bit.ly/2ALqFJB
      } else if (extensionDefinition.prototype.availableActions) {
        // Если extends от AbstractExtension
        ExtensionClass = extensionDefinition;
      } else {
        throw new Error('Incorrect extension declaration passed to "extensions" prop (array). ' + 'It looks like the array\'s element is in the wrong format.');
      } // параметры с дефолтными значениями TODO deep merge


      var paramsFinal = __assign(__assign({}, paramsDefault), params);

      var extension = new ExtensionClass(paramsFinal.options); // const renderInVariants = Object.values(ExtensionActionRenderInEnum)
      //
      // if (!renderInVariants.includes(options.renderIn)) {
      //   throw new Error('Please, set the "renderIn" option to one of following values: ' + renderInVariants)
      // }
      // пополнение доступных действий для конкретного renderIn

      (_o = _this.availableActions[paramsFinal.renderIn]).push.apply(_o, __spread(extension.availableActions)); // Сбор нативных расширений


      if (extension.nativeExtensionInstance) {
        nativeExtensionsInstances.push(extension.nativeExtensionInstance);
      } // Сбор расширений


      extensionsInstances.push(extension);
    });

    var extensions = __spread(this[PROPS.NATIVE_EXTENSIONS], nativeExtensionsInstances);

    if (this[PROPS.PLACEHOLDER]) {
      // !!!!!!!!!!!!!!!!! TODO ONLY FOR TEST (update: не помню что это, возможно и не нужно убирать код ниже)
      extensions.push(new Placeholder({
        emptyNodeClass: 'tiptap-vuetify-editor__paragraph--is-empty',
        emptyNodeText: this[PROPS.PLACEHOLDER],
        showOnlyWhenEditable: true
      }));
    }

    this.editor = new Editor(__assign(__assign({
      extensions: extensions
    }, this[PROPS.EDITOR_PROPERTIES]), {
      editorProps: __assign(__assign({}, this[PROPS.EDITOR_PROPERTIES].editorProps), {
        handleKeyDown: function handleKeyDown(view, event) {
          if (_this[PROPS.EDITOR_PROPERTIES].editorProps && _this[PROPS.EDITOR_PROPERTIES].editorProps.handleKeyDown) {
            _this[PROPS.EDITOR_PROPERTIES].editorProps.handleKeyDown(view, event);
          }

          _this.$emit('keydown', event, view);
        }
      }),
      content: this[PROPS.VALUE],
      onUpdate: this.onUpdate.bind(this),
      onFocus: function onFocus(event) {
        _this.$emit('focus', event);
      }
    }));
    this.$emit(EVENTS.INIT, {
      editor: this.editor
    });
    extensionsInstances.forEach(function (ext) {
      return ext.onEditorInit && ext.onEditorInit(_this.editor);
    });
  };

  TiptapVuetify.prototype.onUpdate = function (info) {
    this.emitAfterOnUpdate = true;
    var output;

    if (this[PROPS.OUTPUT_FORMAT] === 'html') {
      output = info.getHTML();
    } else {
      output = JSON.stringify(info.getJSON());
    }

    this.$emit(EVENTS.INPUT, output, info);
  };

  TiptapVuetify.prototype.onFocusOut = function (event) {
    this.$emit('focusout', event);
  };

  TiptapVuetify.prototype.beforeDestroy = function () {
    if (this.editor) this.editor.destroy();
  };

  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

  _a = PROPS.VALUE, _b = PROPS.EXTENSIONS, _c = PROPS.PLACEHOLDER, _d = PROPS.CARD_PROPS, _e = PROPS.OUTPUT_FORMAT, _f = PROPS.TOOLBAR_ATTRIBUTES, _g = PROPS.EDITOR_PROPERTIES, _h = PROPS.NATIVE_EXTENSIONS, _j = PROPS.TYPE, _k = PROPS.MIN_HEIGHT, _l = PROPS.MAX_HEIGHT;

  __decorate([Prop({
    type: String,
    default: ''
  }), __metadata("design:type", String)], TiptapVuetify.prototype, _a, void 0);

  __decorate([Prop({
    type: Array,
    default: function _default() {
      return [];
    }
  }), __metadata("design:type", Array)], TiptapVuetify.prototype, _b, void 0);

  __decorate([Prop({
    type: String
  }), __metadata("design:type", String)], TiptapVuetify.prototype, _c, void 0);

  __decorate([Prop({
    type: Object,
    default: function _default() {
      return {};
    }
  }), __metadata("design:type", Object)], TiptapVuetify.prototype, _d, void 0);

  __decorate([Prop({
    type: String,
    default: 'html'
  }), __metadata("design:type", String)], TiptapVuetify.prototype, _e, void 0);

  __decorate([Prop({
    type: [Array, Object],
    default: function _default() {
      return {};
    }
  }), __metadata("design:type", Object)], TiptapVuetify.prototype, _f, void 0);

  __decorate([Prop({
    type: Object,
    default: function _default() {
      return {};
    }
  }), __metadata("design:type", Object)], TiptapVuetify.prototype, _g, void 0);

  __decorate([Prop({
    type: Array,
    default: function _default() {
      return [];
    }
  }), __metadata("design:type", Array)], TiptapVuetify.prototype, _h, void 0);

  __decorate([Prop({
    type: String,
    default: EDITOR_TYPES_ENUM.card
  }), __metadata("design:type", String)], TiptapVuetify.prototype, _j, void 0);

  __decorate([Prop({
    type: [String, Number]
  }), __metadata("design:type", Object)], TiptapVuetify.prototype, _k, void 0);

  __decorate([Prop({
    type: [String, Number]
  }), __metadata("design:type", Object)], TiptapVuetify.prototype, _l, void 0);

  __decorate([Watch('value'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], TiptapVuetify.prototype, "onValueChange", null);

  TiptapVuetify = __decorate([Component({
    components: {
      Bubble: Bubble,
      EditorContent: EditorContent,
      Toolbar: Toolbar$1,
      VCard: VCard
    }
  })], TiptapVuetify);
  return TiptapVuetify;
}(Vue);

/* script */
const __vue_script__$4 = TiptapVuetify;
/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.editor)?_c('div',{staticClass:"tiptap-vuetify-editor"},[(_vm.availableActions.bubbleMenu.length && _vm.editor.options.editable)?_c('bubble',{attrs:{"editor":_vm.editor,"actions":_vm.availableActions.bubbleMenu}}):_vm._e(),_vm._v(" "),(_vm.$props[_vm.PROPS.TYPE] === _vm.EDITOR_TYPES_ENUM.card)?_c('VCard',_vm._b({on:{"focusout":function($event){return _vm.onFocusOut($event)}}},'VCard',_vm.$props[_vm.PROPS.CARD_PROPS],false),[_vm._t("toolbar-before"),_vm._v(" "),(_vm.availableActions.toolbar.length)?_c('toolbar',{attrs:{"editor":_vm.editor,"actions":_vm.availableActions.toolbar,"toolbar-attributes":_vm.$props[_vm.PROPS.TOOLBAR_ATTRIBUTES]},scopedSlots:_vm._u([(_vm.$scopedSlots.toolbar)?{key:"default",fn:function(scopedSlot){return [_vm._t("toolbar",null,null,scopedSlot)]}}:null],null,true)}):_vm._e(),_vm._v(" "),_vm._t("toolbar-after"),_vm._v(" "),_c('editor-content',{staticClass:"tiptap-vuetify-editor__content",style:(_vm.contentDynamicStyles),attrs:{"editor":_vm.editor}}),_vm._v(" "),_vm._t("footer")],2):_vm._e()],1):_vm._e()};
var __vue_staticRenderFns__$4 = [];

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TiptapVuetify$1 = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

var _a;
var theme = {
  defaultIconsGroup: "md"
  /* md */

};
var COMMON_ICONS = {
  close: (_a = {}, _a["md"
  /* md */
  ] = new VuetifyIcon('close'), _a["fa"
  /* fa */
  ] = new VuetifyIcon('fas fa-times'), _a["mdi"
  /* mdi */
  ] = new VuetifyIcon('mdi-close'), _a["mdiSvg"
  /* mdiSvg */
  ] = new VuetifyIcon('M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'), _a)
};

var $map = arrayIteration.map;



var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH$3 = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 || !USES_TO_LENGTH$3 }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var I18nText =
/** @class */
function () {
  function I18nText(path, args) {
    this.text = getMsg(path, args);
  }

  I18nText.prototype.toString = function () {
    return this.text;
  };

  return I18nText;
}();

var AbstractExtension =
/** @class */
function () {
  function AbstractExtension(options, extensionClass) {
    this.options = options;
    this.extensionClass = extensionClass;
    this.nativeExtensionInstance = null;

    if (extensionClass) {
      // eslint-disable-next-line
      this.nativeExtensionInstance = new extensionClass(options);
    }
  }

  return AbstractExtension;
}();

var Heading =
/** @class */
function (_super) {
  __extends(Heading, _super);

  function Heading(options) {
    return _super.call(this, options, Heading$1) || this;
  }

  Object.defineProperty(Heading.prototype, "availableActions", {
    get: function get() {
      return this.options.levels.map(function (level) {
        var _a;

        return {
          render: new ExtensionActionRenderBtn$1({
            tooltip: new I18nText('extensions.Heading.buttons.heading.tooltip', {
              level: level
            }),
            icons: (_a = {}, _a["md"
            /* md */
            ] = new TextIcon('H' + level), _a["fa"
            /* fa */
            ] = new TextIcon('H' + level), _a["mdi"
            /* mdi */
            ] = new TextIcon('H' + level), _a["mdiSvg"
            /* mdiSvg */
            ] = new TextIcon('H' + level), _a),
            nativeExtensionName: 'heading',
            onClickOptions: {
              level: level
            },
            isActiveOptions: {
              level: level
            }
          })
        };
      });
    },
    enumerable: true,
    configurable: true
  });
  return Heading;
}(AbstractExtension);

var Bold =
/** @class */
function (_super) {
  __extends(Bold, _super);

  function Bold(options) {
    return _super.call(this, options, Bold$1) || this;
  }

  Object.defineProperty(Bold.prototype, "availableActions", {
    get: function get() {
      var _a;

      return [{
        render: new ExtensionActionRenderBtn$1({
          tooltip: new I18nText('extensions.Bold.buttons.bold.tooltip'),
          icons: (_a = {}, _a["md"
          /* md */
          ] = new VuetifyIcon('format_bold'), _a["fa"
          /* fa */
          ] = new VuetifyIcon('fas fa-bold'), _a["mdi"
          /* mdi */
          ] = new VuetifyIcon('mdi-format-bold'), _a["mdiSvg"
          /* mdiSvg */
          ] = new VuetifyIcon('M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z'), _a),
          nativeExtensionName: 'bold'
        })
      }];
    },
    enumerable: true,
    configurable: true
  });
  return Bold;
}(AbstractExtension);

var Italic =
/** @class */
function (_super) {
  __extends(Italic, _super);

  function Italic(options) {
    return _super.call(this, options, Italic$1) || this;
  }

  Object.defineProperty(Italic.prototype, "availableActions", {
    get: function get() {
      var _a;

      return [{
        render: new ExtensionActionRenderBtn$1({
          tooltip: new I18nText('extensions.Italic.buttons.italic.tooltip'),
          icons: (_a = {}, _a["md"
          /* md */
          ] = new VuetifyIcon('format_italic'), _a["fa"
          /* fa */
          ] = new VuetifyIcon('fas fa-italic'), _a["mdi"
          /* mdi */
          ] = new VuetifyIcon('mdi-format-italic'), _a["mdiSvg"
          /* mdiSvg */
          ] = new VuetifyIcon('M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z'), _a),
          nativeExtensionName: 'italic'
        })
      }];
    },
    enumerable: true,
    configurable: true
  });
  return Italic;
}(AbstractExtension);

var Strike =
/** @class */
function (_super) {
  __extends(Strike, _super);

  function Strike(options) {
    return _super.call(this, options, Strike$1) || this;
  }

  Object.defineProperty(Strike.prototype, "availableActions", {
    get: function get() {
      var _a;

      return [{
        render: new ExtensionActionRenderBtn$1({
          tooltip: new I18nText('extensions.Strike.buttons.strike.tooltip'),
          icons: (_a = {}, _a["md"
          /* md */
          ] = new VuetifyIcon('format_strikethrough'), _a["fa"
          /* fa */
          ] = new VuetifyIcon('fas fa-strikethrough'), _a["mdi"
          /* mdi */
          ] = new VuetifyIcon('mdi-format-strikethrough'), _a["mdiSvg"
          /* mdiSvg */
          ] = new VuetifyIcon('M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z'), _a),
          nativeExtensionName: 'strike'
        })
      }];
    },
    enumerable: true,
    configurable: true
  });
  return Strike;
}(AbstractExtension);

var Underline =
/** @class */
function (_super) {
  __extends(Underline, _super);

  function Underline(options) {
    return _super.call(this, options, Underline$1) || this;
  }

  Object.defineProperty(Underline.prototype, "availableActions", {
    get: function get() {
      var _a;

      return [{
        render: new ExtensionActionRenderBtn$1({
          tooltip: new I18nText('extensions.Underline.buttons.underline.tooltip'),
          icons: (_a = {}, _a["md"
          /* md */
          ] = new VuetifyIcon('format_underline'), _a["fa"
          /* fa */
          ] = new VuetifyIcon('fas fa-underline'), _a["mdi"
          /* mdi */
          ] = new VuetifyIcon('mdi-format-underline'), _a["mdiSvg"
          /* mdiSvg */
          ] = new VuetifyIcon('M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z'), _a),
          nativeExtensionName: 'underline'
        })
      }];
    },
    enumerable: true,
    configurable: true
  });
  return Underline;
}(AbstractExtension);

var Code =
/** @class */
function (_super) {
  __extends(Code, _super);

  function Code(options) {
    return _super.call(this, options, Code$1) || this;
  }

  Object.defineProperty(Code.prototype, "availableActions", {
    get: function get() {
      var _a;

      return [{
        render: new ExtensionActionRenderBtn$1({
          tooltip: new I18nText('extensions.Code.buttons.code.tooltip'),
          icons: (_a = {}, _a["md"
          /* md */
          ] = new VuetifyIcon('code'), _a["fa"
          /* fa */
          ] = new VuetifyIcon('fas fa-code'), _a["mdi"
          /* mdi */
          ] = new VuetifyIcon('mdi-code-tags'), _a["mdiSvg"
          /* mdiSvg */
          ] = new VuetifyIcon('M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z'), _a),
          nativeExtensionName: 'code'
        })
      }];
    },
    enumerable: true,
    configurable: true
  });
  return Code;
}(AbstractExtension);

var CodeBlock =
/** @class */
function (_super) {
  __extends(CodeBlock, _super);

  function CodeBlock(options) {
    return _super.call(this, options, CodeBlock$1) || this;
  }

  Object.defineProperty(CodeBlock.prototype, "availableActions", {
    get: function get() {
      var _a;

      return [{
        render: new ExtensionActionRenderBtn$1({
          tooltip: new I18nText('extensions.CodeBlock.buttons.codeBlock.tooltip'),
          icons: (_a = {}, _a["md"
          /* md */
          ] = new VuetifyIcon('code'), _a["fa"
          /* fa */
          ] = new VuetifyIcon('fas fa-code'), _a["mdi"
          /* mdi */
          ] = new VuetifyIcon('mdi-code-tags'), _a["mdiSvg"
          /* mdiSvg */
          ] = new VuetifyIcon('M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z'), _a),
          nativeExtensionName: 'code_block'
        })
      }];
    },
    enumerable: true,
    configurable: true
  });
  return CodeBlock;
}(AbstractExtension);

var Paragraph =
/** @class */
function (_super) {
  __extends(Paragraph, _super);

  function Paragraph(options) {
    return _super.call(this, options, null) || this;
  }

  Object.defineProperty(Paragraph.prototype, "availableActions", {
    get: function get() {
      var _a;

      return [{
        render: new ExtensionActionRenderBtn$1({
          tooltip: new I18nText('extensions.Paragraph.buttons.paragraph.tooltip'),
          icons: (_a = {}, _a["md"
          /* md */
          ] = new VuetifyIcon('format_textdirection_l_to_r'), _a["fa"
          /* fa */
          ] = new VuetifyIcon('fas fa-paragraph'), _a["mdi"
          /* mdi */
          ] = new VuetifyIcon('mdi-format-paragraph'), _a["mdiSvg"
          /* mdiSvg */
          ] = new VuetifyIcon('M13,4A4,4 0 0,1 17,8A4,4 0 0,1 13,12H11V18H9V4H13M13,10A2,2 0 0,0 15,8A2,2 0 0,0 13,6H11V10H13Z'), _a),
          nativeExtensionName: 'paragraph'
        })
      }];
    },
    enumerable: true,
    configurable: true
  });
  return Paragraph;
}(AbstractExtension);

var BulletList =
/** @class */
function (_super) {
  __extends(BulletList, _super);

  function BulletList(options) {
    return _super.call(this, options, BulletList$1) || this;
  }

  Object.defineProperty(BulletList.prototype, "availableActions", {
    get: function get() {
      var _a;

      return [{
        render: new ExtensionActionRenderBtn$1({
          tooltip: new I18nText('extensions.BulletList.buttons.bulletList.tooltip'),
          icons: (_a = {}, _a["md"
          /* md */
          ] = new VuetifyIcon('format_list_bulleted'), _a["fa"
          /* fa */
          ] = new VuetifyIcon('fas fa-list-ul'), _a["mdi"
          /* mdi */
          ] = new VuetifyIcon('mdi-format-list-bulleted'), _a["mdiSvg"
          /* mdiSvg */
          ] = new VuetifyIcon('M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z'), _a),
          nativeExtensionName: 'bullet_list'
        })
      }];
    },
    enumerable: true,
    configurable: true
  });
  return BulletList;
}(AbstractExtension);

var OrderedList =
/** @class */
function (_super) {
  __extends(OrderedList, _super);

  function OrderedList(options) {
    return _super.call(this, options, OrderedList$1) || this;
  }

  Object.defineProperty(OrderedList.prototype, "availableActions", {
    get: function get() {
      var _a;

      return [{
        render: new ExtensionActionRenderBtn$1({
          tooltip: new I18nText('extensions.OrderedList.buttons.orderedList.tooltip'),
          icons: (_a = {}, _a["md"
          /* md */
          ] = new VuetifyIcon('format_list_numbered'), _a["fa"
          /* fa */
          ] = new VuetifyIcon('fas fa-list-ol'), _a["mdi"
          /* mdi */
          ] = new VuetifyIcon('mdi-format-list-numbered'), _a["mdiSvg"
          /* mdiSvg */
          ] = new VuetifyIcon('M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z'), _a),
          nativeExtensionName: 'ordered_list'
        })
      }];
    },
    enumerable: true,
    configurable: true
  });
  return OrderedList;
}(AbstractExtension);

var ListItem =
/** @class */
function (_super) {
  __extends(ListItem, _super);

  function ListItem(options) {
    return _super.call(this, options, ListItem$1) || this;
  }

  Object.defineProperty(ListItem.prototype, "availableActions", {
    get: function get() {
      return [];
    },
    enumerable: true,
    configurable: true
  });
  return ListItem;
}(AbstractExtension);

var Blockquote =
/** @class */
function (_super) {
  __extends(Blockquote, _super);

  function Blockquote(options) {
    return _super.call(this, options, Blockquote$1) || this;
  }

  Object.defineProperty(Blockquote.prototype, "availableActions", {
    get: function get() {
      var _a;

      return [{
        render: new ExtensionActionRenderBtn$1({
          tooltip: new I18nText('extensions.Blockquote.buttons.blockquote.tooltip'),
          icons: (_a = {}, _a["md"
          /* md */
          ] = new VuetifyIcon('format_quote'), _a["fa"
          /* fa */
          ] = new VuetifyIcon('fas fa-quote-right'), _a["mdi"
          /* mdi */
          ] = new VuetifyIcon('mdi-format-quote-close'), _a["mdiSvg"
          /* mdiSvg */
          ] = new VuetifyIcon('M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z'), _a),
          nativeExtensionName: 'blockquote'
        })
      }];
    },
    enumerable: true,
    configurable: true
  });
  return Blockquote;
}(AbstractExtension);

var HardBreak =
/** @class */
function (_super) {
  __extends(HardBreak, _super);

  function HardBreak(options) {
    return _super.call(this, options, HardBreak$1) || this;
  }

  Object.defineProperty(HardBreak.prototype, "availableActions", {
    get: function get() {
      return [];
    },
    enumerable: true,
    configurable: true
  });
  return HardBreak;
}(AbstractExtension);

var HorizontalRule =
/** @class */
function (_super) {
  __extends(HorizontalRule, _super);

  function HorizontalRule(options) {
    return _super.call(this, options, HorizontalRule$1) || this;
  }

  Object.defineProperty(HorizontalRule.prototype, "availableActions", {
    get: function get() {
      var _a;

      return [{
        render: new ExtensionActionRenderBtn$1({
          tooltip: new I18nText('extensions.HorizontalRule.buttons.horizontalRule.tooltip'),
          icons: (_a = {}, _a["md"
          /* md */
          ] = new TextIcon('—'), _a["fa"
          /* fa */
          ] = new VuetifyIcon('fas fa-minus'), _a["mdi"
          /* mdi */
          ] = new VuetifyIcon('mdi-minus'), _a["mdiSvg"
          /* mdiSvg */
          ] = new VuetifyIcon('M19,13H5V11H19V13Z'), _a),
          nativeExtensionName: 'horizontal_rule'
        })
      }];
    },
    enumerable: true,
    configurable: true
  });
  return HorizontalRule;
}(AbstractExtension);

var History =
/** @class */
function (_super) {
  __extends(History, _super);

  function History(options) {
    return _super.call(this, options, History$1) || this;
  }

  Object.defineProperty(History.prototype, "availableActions", {
    get: function get() {
      var _a, _b; // если не нужны кнокпи


      if (this.options && this.options.noActions) return [];
      return [{
        render: new ExtensionActionRenderBtn$1({
          tooltip: new I18nText('extensions.History.buttons.undo.tooltip'),
          icons: (_a = {}, _a["md"
          /* md */
          ] = new VuetifyIcon('undo'), _a["fa"
          /* fa */
          ] = new VuetifyIcon('fas fa-undo'), _a["mdi"
          /* mdi */
          ] = new VuetifyIcon('mdi-undo'), _a["mdiSvg"
          /* mdiSvg */
          ] = new VuetifyIcon('M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z'), _a),
          nativeExtensionName: 'undo'
        })
      }, {
        render: new ExtensionActionRenderBtn$1({
          tooltip: new I18nText('extensions.History.buttons.redo.tooltip'),
          icons: (_b = {}, _b["md"
          /* md */
          ] = new VuetifyIcon('redo'), _b["fa"
          /* fa */
          ] = new VuetifyIcon('fas fa-redo'), _b["mdi"
          /* mdi */
          ] = new VuetifyIcon('mdi-redo'), _b["mdiSvg"
          /* mdiSvg */
          ] = new VuetifyIcon('M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z'), _b),
          nativeExtensionName: 'redo'
        })
      }];
    },
    enumerable: true,
    configurable: true
  });
  return History;
}(AbstractExtension);

var PROPS$3 = {
  VALUE: 'value',
  CONTEXT: 'context',
  EDITOR: 'editor',
  NATIVE_EXTENSION_NAME: 'nativeExtensionName',
  HREF: 'href'
};

var LinkWindow =
/** @class */
function (_super) {
  __extends(LinkWindow, _super);

  function LinkWindow() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.COMMON_ICONS = COMMON_ICONS;
    _this.form = {
      href: _this[PROPS$3.HREF],
      blank: false
    };
    return _this;
  }

  Object.defineProperty(LinkWindow.prototype, "isRemove", {
    get: function get() {
      return this[PROPS$3.HREF] && !this.form.href;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LinkWindow.prototype, "isDisabled", {
    get: function get() {
      return this[PROPS$3.HREF] === this.form.href || !this[PROPS$3.HREF] && !this.form.href;
    },
    enumerable: true,
    configurable: true
  });

  LinkWindow.prototype.apply = function () {
    this[PROPS$3.CONTEXT].commands[this[PROPS$3.NATIVE_EXTENSION_NAME]]({
      href: this.form.href
    });
    this.close();
    this[PROPS$3.EDITOR].focus();
  };

  LinkWindow.prototype.close = function () {
    this.$destroy();
    this.$el.parentNode.removeChild(this.$el);
  };

  var _a, _b, _c, _d, _e;

  _a = PROPS$3.VALUE, _b = PROPS$3.NATIVE_EXTENSION_NAME, _c = PROPS$3.CONTEXT, _d = PROPS$3.EDITOR, _e = PROPS$3.HREF;

  __decorate([Prop({
    type: Boolean,
    default: false
  }), __metadata("design:type", Boolean)], LinkWindow.prototype, _a, void 0);

  __decorate([Prop({
    type: String,
    required: true
  }), __metadata("design:type", String)], LinkWindow.prototype, _b, void 0);

  __decorate([Prop({
    type: Object,
    required: true
  }), __metadata("design:type", Object)], LinkWindow.prototype, _c, void 0);

  __decorate([Prop({
    type: Object,
    required: true
  }), __metadata("design:type", Object)], LinkWindow.prototype, _d, void 0);

  __decorate([Prop({
    type: String
  }), __metadata("design:type", Object)], LinkWindow.prototype, _e, void 0);

  LinkWindow = __decorate([Component({
    components: {
      VDialog: VDialog,
      VCard: VCard,
      VCardTitle: VCardTitle,
      VCardText: VCardText,
      VCardActions: VCardActions,
      VBtn: VBtn,
      VSpacer: VSpacer,
      VIcon: VIcon,
      VTextField: VTextField
    }
  })], LinkWindow);
  return LinkWindow;
}(mixins(I18nMixin));

/* script */
const __vue_script__$5 = LinkWindow;

/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"value":_vm.value,"max-width":"500px"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n        "+_vm._s(_vm.$i18n.getMsg('extensions.Link.window.title'))+"\n      ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"icon":""},on:{"click":_vm.close}},[_c('v-icon',[_vm._v(_vm._s(_vm.COMMON_ICONS.close[_vm.$tiptapVuetify.iconsGroup]))])],1)],1),_vm._v(" "),_c('v-card-text',[_c('v-text-field',{attrs:{"label":_vm.$i18n.getMsg('extensions.Link.window.form.hrefLabel')},model:{value:(_vm.form.href),callback:function ($$v) {_vm.$set(_vm.form, "href", $$v);},expression:"form.href"}})],1),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{attrs:{"text":""},on:{"click":_vm.close}},[_vm._v("\n        "+_vm._s(_vm.$i18n.getMsg('extensions.Link.window.buttons.close'))+"\n      ")]),_vm._v(" "),_c('v-btn',{attrs:{"disabled":_vm.isDisabled,"color":_vm.isRemove ? 'error' : 'primary',"text":""},on:{"click":_vm.apply}},[_vm._v("\n        "+_vm._s(_vm.$i18n.getMsg('extensions.Link.window.buttons.' + (_vm.isRemove ? 'remove' : 'apply')))+"\n      ")])],1)],1)],1)};
var __vue_staticRenderFns__$5 = [];

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var LinkWindow$1 = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    undefined
  );

var Link =
/** @class */
function (_super) {
  __extends(Link, _super);

  function Link(options) {
    return _super.call(this, options, Link$1) || this;
  }

  Object.defineProperty(Link.prototype, "availableActions", {
    get: function get() {
      var _a;

      var nativeExtensionName = 'link';
      return [{
        render: new ExtensionActionRenderBtn$1({
          tooltip: function tooltip(context, options) {
            return new I18nText(options.isActive(context) ? 'extensions.Link.buttons.isActive.tooltip' : 'extensions.Link.buttons.notActive.tooltip');
          },
          icons: (_a = {}, _a["md"
          /* md */
          ] = new VuetifyIcon('link'), _a["fa"
          /* fa */
          ] = new VuetifyIcon('fas fa-link'), _a["mdi"
          /* mdi */
          ] = new VuetifyIcon('mdi-link'), _a["mdiSvg"
          /* mdiSvg */
          ] = new VuetifyIcon('M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z'), _a),
          nativeExtensionName: nativeExtensionName,
          onClick: function onClick(_a) {
            var context = _a.context,
                editor = _a.editor;
            var href = context.getMarkAttrs(nativeExtensionName).href;
            var LinkWindowComponent = Vue.extend(LinkWindow$1);
            var instance = new LinkWindowComponent({
              vuetify: Vue.prototype.tiptapVuetifyPlugin.vuetify,
              propsData: {
                value: true,
                nativeExtensionName: nativeExtensionName,
                context: context,
                editor: editor,
                href: href
              }
            });
            instance.$mount();
            document.querySelector('body').appendChild(instance.$el);
          }
        })
      }];
    },
    enumerable: true,
    configurable: true
  });
  return Link;
}(AbstractExtension);
//   save: {
//     [VuetifyIconsGroups.md]: new VuetifyIcon('check'),
//     [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-check'),
//     [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-check')
//   },
//   cancel: {
//     [VuetifyIconsGroups.md]: new VuetifyIcon('link_off'),
//     [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-unlink'),
//     [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-link-off')
//   },
//   linkUpdate: {
//     [VuetifyIconsGroups.md]: new VuetifyIcon('link'),
//     [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fas fa-link'),
//     [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-link')
//   },
//   linkAdd: {
//     [VuetifyIconsGroups.md]: new VuetifyIcon('link'),
//     [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-link'),
//     [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-link-plus')
//   }
// }

var $filter = arrayIteration.filter;



var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH$4 = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 || !USES_TO_LENGTH$4 }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: objectCreate(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var $includes = arrayIncludes.includes;



var USES_TO_LENGTH$5 = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
_export({ target: 'Array', proto: true, forced: !USES_TO_LENGTH$5 }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var notARegexp = function (it) {
  if (isRegexp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};

var MATCH$1 = wellKnownSymbol('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH$1] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
_export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});

var EVENTS$1 = {
  SELECT_FILES: 'select-files'
};
var HOLDER_CLASS = 'tiptap-vuetify-image-upload-area-holder';

var ImageUploadArea =
/** @class */
function (_super) {
  __extends(ImageUploadArea, _super);

  function ImageUploadArea() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ImageUploadArea.prototype.mounted = function () {
    var _this = this;

    var holder = this.$el.querySelector('.' + HOLDER_CLASS);
    var input = this.$el.querySelector('#tiptap-vuetify-image-upload-area__input-file');
    input.addEventListener('change', function (e) {
      if (e.target instanceof HTMLInputElement) {
        _this.$emit(EVENTS$1.SELECT_FILES, e.target.files);

        holder.classList.remove(HOLDER_CLASS + '--dragover');
        e.target.value = '';
      }
    });
    holder.addEventListener('dragover', function () {
      holder.classList.add(HOLDER_CLASS + '--dragover');
      return false;
    });

    var dragleaveOrEndHandler = function dragleaveOrEndHandler() {
      holder.classList.remove(HOLDER_CLASS + '--dragover');
      return false;
    };

    holder.addEventListener('dragleave', dragleaveOrEndHandler);
    holder.addEventListener('dragend', dragleaveOrEndHandler);
    holder.addEventListener('drop', function (e) {
      e.preventDefault();

      _this.$emit(EVENTS$1.SELECT_FILES, e.dataTransfer.files);
    });
  };

  ImageUploadArea = __decorate([Component], ImageUploadArea);
  return ImageUploadArea;
}(mixins(I18nMixin));

/* script */
const __vue_script__$6 = ImageUploadArea;
/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tiptap-vuetify-image-upload-area"},[_c('input',{attrs:{"id":"tiptap-vuetify-image-upload-area__input-file","type":"file","accept":"image/*","multiple":""}}),_vm._v(" "),_c('label',{staticClass:"tiptap-vuetify-image-upload-area-holder",attrs:{"for":"tiptap-vuetify-image-upload-area__input-file"}},[_c('div',[_c('svg',{staticClass:"tiptap-vuetify-image-upload-area-holder__icon",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"50","height":"43","viewBox":"0 0 50 43"}},[_c('path',{attrs:{"d":"M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z"}})]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('h3',[_vm._v("Choose a file(s) or drag it here.")])])])])};
var __vue_staticRenderFns__$6 = [];

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ImageUploadArea$1 = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    undefined,
    undefined
  );

let passiveSupported = false;

try {
  if (typeof window !== 'undefined') {
    const testListenerOpts = Object.defineProperty({}, 'passive', {
      get: () => {
        passiveSupported = true;
      }
    });
    window.addEventListener('testListener', testListenerOpts, testListenerOpts);
    window.removeEventListener('testListener', testListenerOpts, testListenerOpts);
  }
} catch (e) {
  console.warn(e);
}

const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34
}); // This remaps internal names like '$cancel' or '$vuetify.icons.cancel'
/**
 * Camelize a hyphen-delimited string.
 */

const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
};
/**
 * Makes the first character of a string uppercase
 */

function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const pattern = {
  styleList: /;(?![^(]*\))/g,
  styleProp: /:(.*)/
};

function parseStyle(style) {
  const styleMap = {};

  for (const s of style.split(pattern.styleList)) {
    let [key, val] = s.split(pattern.styleProp);
    key = key.trim();

    if (!key) {
      continue;
    } // May be undefined if the `key: value` pair is incomplete.


    if (typeof val === 'string') {
      val = val.trim();
    }

    styleMap[camelize(key)] = val;
  }

  return styleMap;
}

function mergeData() {
  const mergeTarget = {};
  let i = arguments.length;
  let prop;
  let event; // Allow for variadic argument length.

  while (i--) {
    // Iterate through the data properties and execute merge strategies
    // Object.keys eliminates need for hasOwnProperty call
    for (prop of Object.keys(arguments[i])) {
      switch (prop) {
        // Array merge strategy (array concatenation)
        case 'class':
        case 'style':
        case 'directives':
          if (!arguments[i][prop]) {
            break;
          }

          if (!Array.isArray(mergeTarget[prop])) {
            mergeTarget[prop] = [];
          }

          if (prop === 'style') {
            let style;

            if (Array.isArray(arguments[i].style)) {
              style = arguments[i].style;
            } else {
              style = [arguments[i].style];
            }

            for (let j = 0; j < style.length; j++) {
              const s = style[j];

              if (typeof s === 'string') {
                style[j] = parseStyle(s);
              }
            }

            arguments[i].style = style;
          } // Repackaging in an array allows Vue runtime
          // to merge class/style bindings regardless of type.


          mergeTarget[prop] = mergeTarget[prop].concat(arguments[i][prop]);
          break;
        // Space delimited string concatenation strategy

        case 'staticClass':
          if (!arguments[i][prop]) {
            break;
          }

          if (mergeTarget[prop] === undefined) {
            mergeTarget[prop] = '';
          }

          if (mergeTarget[prop]) {
            // Not an empty string, so concatenate
            mergeTarget[prop] += ' ';
          }

          mergeTarget[prop] += arguments[i][prop].trim();
          break;
        // Object, the properties of which to merge via array merge strategy (array concatenation).
        // Callback merge strategy merges callbacks to the beginning of the array,
        // so that the last defined callback will be invoked first.
        // This is done since to mimic how Object.assign merging
        // uses the last given value to assign.

        case 'on':
        case 'nativeOn':
          if (!arguments[i][prop]) {
            break;
          }

          if (!mergeTarget[prop]) {
            mergeTarget[prop] = {};
          }

          const listeners = mergeTarget[prop];

          for (event of Object.keys(arguments[i][prop] || {})) {
            // Concat function to array of functions if callback present.
            if (listeners[event]) {
              // Insert current iteration data in beginning of merged array.
              listeners[event] = Array().concat( // eslint-disable-line
              listeners[event], arguments[i][prop][event]);
            } else {
              // Straight assign.
              listeners[event] = arguments[i][prop][event];
            }
          }

          break;
        // Object merge strategy

        case 'attrs':
        case 'props':
        case 'domProps':
        case 'scopedSlots':
        case 'staticStyle':
        case 'hook':
        case 'transition':
          if (!arguments[i][prop]) {
            break;
          }

          if (!mergeTarget[prop]) {
            mergeTarget[prop] = {};
          }

          mergeTarget[prop] = { ...arguments[i][prop],
            ...mergeTarget[prop]
          };
          break;
        // Reassignment strategy (no merge)

        case 'slot':
        case 'key':
        case 'ref':
        case 'tag':
        case 'show':
        case 'keepAlive':
        default:
          if (!mergeTarget[prop]) {
            mergeTarget[prop] = arguments[i][prop];
          }

      }
    }
  }

  return mergeTarget;
}

function createJavascriptTransition(name, functions, mode = 'in-out') {
  return {
    name,
    functional: true,
    props: {
      mode: {
        type: String,
        default: mode
      }
    },

    render(h, context) {
      return h('transition', mergeData(context.data, {
        props: {
          name
        },
        on: functions
      }), context.children);
    }

  };
}

function ExpandTransitionGenerator (expandedParentClass = '', x = false) {
  const sizeProperty = x ? 'width' : 'height';
  const offsetProperty = `offset${upperFirst(sizeProperty)}`;
  return {
    beforeEnter(el) {
      el._parent = el.parentNode;
      el._initialStyle = {
        transition: el.style.transition,
        visibility: el.style.visibility,
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty]
      };
    },

    enter(el) {
      const initialStyle = el._initialStyle;
      const offset = `${el[offsetProperty]}px`;
      el.style.setProperty('transition', 'none', 'important');
      el.style.visibility = 'hidden';
      el.style.visibility = initialStyle.visibility;
      el.style.overflow = 'hidden';
      el.style[sizeProperty] = '0';
      void el.offsetHeight; // force reflow

      el.style.transition = initialStyle.transition;

      if (expandedParentClass && el._parent) {
        el._parent.classList.add(expandedParentClass);
      }

      requestAnimationFrame(() => {
        el.style[sizeProperty] = offset;
      });
    },

    afterEnter: resetStyles,
    enterCancelled: resetStyles,

    leave(el) {
      el._initialStyle = {
        transition: '',
        visibility: '',
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty]
      };
      el.style.overflow = 'hidden';
      el.style[sizeProperty] = `${el[offsetProperty]}px`;
      void el.offsetHeight; // force reflow

      requestAnimationFrame(() => el.style[sizeProperty] = '0');
    },

    afterLeave,
    leaveCancelled: afterLeave
  };

  function afterLeave(el) {
    if (expandedParentClass && el._parent) {
      el._parent.classList.remove(expandedParentClass);
    }

    resetStyles(el);
  }

  function resetStyles(el) {
    const size = el._initialStyle[sizeProperty];
    el.style.overflow = el._initialStyle.overflow;
    if (size != null) el.style[sizeProperty] = size;
    delete el._initialStyle;
  }
}

const VExpandTransition = createJavascriptTransition('expand-transition', ExpandTransitionGenerator());
const VExpandXTransition = createJavascriptTransition('expand-x-transition', ExpandTransitionGenerator('', true));

var PROPS$4 = {
  VALUE: 'value',
  CONTEXT: 'context',
  EDITOR: 'editor',
  NATIVE_EXTENSION_NAME: 'nativeExtensionName'
};

var ImageWindow =
/** @class */
function (_super) {
  __extends(ImageWindow, _super);

  function ImageWindow() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.COMMON_ICONS = COMMON_ICONS;
    _this.form = {
      src: null // 'https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg'

    };
    _this.inputPreviewSources = [];
    return _this;
  }

  Object.defineProperty(ImageWindow.prototype, "previewSources", {
    get: function get() {
      return __spread([this.form.src], this.inputPreviewSources).filter(Boolean);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ImageWindow.prototype, "isDisabled", {
    get: function get() {
      return !this.previewSources.length;
    },
    enumerable: true,
    configurable: true
  });

  ImageWindow.prototype.removeSource = function (source) {
    if (this.inputPreviewSources.includes(source)) {
      this.inputPreviewSources = this.inputPreviewSources.filter(function (i) {
        return i !== source;
      });
    } else if (this.form.src === source) {
      this.form.src = null;
    }
  };

  ImageWindow.prototype.onFilesSelect = function (files) {
    var _this = this;

    __spread(files).forEach(function (file) {
      var reader = new FileReader();
      reader.addEventListener('load', function (readerEvent) {
        // TODO URL.createObjectURL(file) and upload
        _this.inputPreviewSources.push(readerEvent.target.result.toString());
      });
      reader.readAsDataURL(file);
    });
  };

  ImageWindow.prototype.apply = function () {
    var _this = this;

    this.previewSources.forEach(function (src) {
      _this[PROPS$4.CONTEXT].commands[_this[PROPS$4.NATIVE_EXTENSION_NAME]]({
        // TODO alt, title
        src: src,
        alt: 'Image'
      });
    });
    this.close();
    this[PROPS$4.EDITOR].focus();
  };

  ImageWindow.prototype.close = function () {
    this.$destroy();
    this.$el.parentNode.removeChild(this.$el);
  };

  var _a, _b, _c, _d;

  _a = PROPS$4.VALUE, _b = PROPS$4.NATIVE_EXTENSION_NAME, _c = PROPS$4.CONTEXT, _d = PROPS$4.EDITOR;

  __decorate([Prop({
    type: Boolean,
    default: false
  }), __metadata("design:type", Boolean)], ImageWindow.prototype, _a, void 0);

  __decorate([Prop({
    type: String,
    required: true
  }), __metadata("design:type", String)], ImageWindow.prototype, _b, void 0);

  __decorate([Prop({
    type: Object,
    required: true
  }), __metadata("design:type", Object)], ImageWindow.prototype, _c, void 0);

  __decorate([Prop({
    type: Object,
    required: true
  }), __metadata("design:type", Object)], ImageWindow.prototype, _d, void 0);

  ImageWindow = __decorate([Component({
    components: {
      VRow: VRow,
      VCol: VCol,
      VExpandTransition: VExpandTransition,
      ImageUploadArea: ImageUploadArea$1,
      VImg: VImg,
      VDialog: VDialog,
      VCard: VCard,
      VCardTitle: VCardTitle,
      VCardText: VCardText,
      VCardActions: VCardActions,
      VBtn: VBtn,
      VSpacer: VSpacer,
      VIcon: VIcon,
      VTextField: VTextField
    }
  })], ImageWindow);
  return ImageWindow;
}(mixins(I18nMixin));

/* script */
const __vue_script__$7 = ImageWindow;

/* template */
var __vue_render__$7 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"value":_vm.value,"max-width":"500px"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n        "+_vm._s(_vm.$i18n.getMsg('extensions.Image.window.title'))+"\n      ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"icon":""},on:{"click":_vm.close}},[_c('v-icon',[_vm._v(_vm._s(_vm.COMMON_ICONS.close[_vm.$tiptapVuetify.iconsGroup]))])],1)],1),_vm._v(" "),_c('v-card-text',[_c('v-expand-transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.previewSources.length),expression:"previewSources.length"}]},[_c('v-row',{attrs:{"no-gutters":"","justify":"center","align":"center"}},_vm._l((_vm.previewSources),function(source,i){return _c('v-col',{key:'preview' + i,attrs:{"cols":"4"}},[_c('v-img',{staticClass:"text-right",attrs:{"src":source}},[_c('v-btn',{attrs:{"icon":"","small":"","dark":""},on:{"click":function($event){return _vm.removeSource(source)}}},[_c('v-icon',{attrs:{"small":""}},[_vm._v("\n                    close\n                  ")])],1)],1)],1)}),1)],1)]),_vm._v(" "),_c('v-text-field',{attrs:{"label":_vm.$i18n.getMsg('extensions.Image.window.form.sourceLink')},model:{value:(_vm.form.src),callback:function ($$v) {_vm.$set(_vm.form, "src", $$v);},expression:"form.src"}}),_vm._v(" "),_c('v-expand-transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.form.src),expression:"!form.src"}]},[_c('div',{staticClass:"text-center grey--text mt-2 mb-4"},[_vm._v("\n            "+_vm._s(_vm.$i18n.getMsg('extensions.Image.window.or'))+"\n          ")]),_vm._v(" "),_c('ImageUploadArea',{on:{"select-files":_vm.onFilesSelect}})],1)])],1),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{attrs:{"text":""},on:{"click":_vm.close}},[_vm._v("\n        "+_vm._s(_vm.$i18n.getMsg('extensions.Image.window.buttons.close'))+"\n      ")]),_vm._v(" "),_c('v-btn',{attrs:{"disabled":_vm.isDisabled,"text":""},on:{"click":_vm.apply}},[_vm._v("\n        "+_vm._s(_vm.$i18n.getMsg('extensions.Image.window.buttons.apply'))+"\n      ")])],1)],1)],1)};
var __vue_staticRenderFns__$7 = [];

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ImageWindow$1 = normalizeComponent_1(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    undefined,
    undefined
  );

var Image =
/** @class */
function (_super) {
  __extends(Image, _super);

  function Image(options) {
    return _super.call(this, options, Image$1) || this;
  }

  Object.defineProperty(Image.prototype, "availableActions", {
    get: function get() {
      var _a;

      var nativeExtensionName = 'image';
      return [{
        render: new ExtensionActionRenderBtn$1({
          tooltip: new I18nText('extensions.Image.buttons.tooltip'),
          icons: (_a = {}, _a["md"
          /* md */
          ] = new VuetifyIcon('image'), _a["fa"
          /* fa */
          ] = new VuetifyIcon('fas fa-image'), _a["mdi"
          /* mdi */
          ] = new VuetifyIcon('mdi-image'), _a["mdiSvg"
          /* mdiSvg */
          ] = new VuetifyIcon('M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z'), _a),
          nativeExtensionName: nativeExtensionName,
          onClick: function onClick(_a) {
            var context = _a.context,
                editor = _a.editor;
            return __awaiter(this, void 0, void 0, function () {
              var LinkWindowComponent, instance;
              return __generator(this, function (_b) {
                LinkWindowComponent = Vue.extend(ImageWindow$1);
                instance = new LinkWindowComponent({
                  vuetify: Vue.prototype.tiptapVuetifyPlugin.vuetify,
                  propsData: {
                    value: true,
                    nativeExtensionName: nativeExtensionName,
                    context: context,
                    editor: editor
                  }
                });
                instance.$mount();
                document.querySelector('body').appendChild(instance.$el);
                return [2
                /*return*/
                ];
              });
            });
          }
        })
      }];
    },
    enumerable: true,
    configurable: true
  });
  return Image;
}(AbstractExtension);

var TodoList =
/** @class */
function (_super) {
  __extends(TodoList, _super);

  function TodoList(options) {
    return _super.call(this, options, TodoList$1) || this;
  }

  Object.defineProperty(TodoList.prototype, "availableActions", {
    get: function get() {
      var _a;

      return [{
        render: new ExtensionActionRenderBtn$1({
          tooltip: new I18nText('extensions.TodoList.buttons.todoList.tooltip'),
          icons: (_a = {}, _a["md"
          /* md */
          ] = new VuetifyIcon('check_box'), _a["fa"
          /* fa */
          ] = new VuetifyIcon('fas fa-tasks'), _a["mdi"
          /* mdi */
          ] = new VuetifyIcon('mdi-format-list-checks'), // mdiFormatListChecks
          _a["mdiSvg"
          /* mdiSvg */
          ] = new VuetifyIcon('M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z'), _a),
          nativeExtensionName: 'todo_list'
        })
      }];
    },
    enumerable: true,
    configurable: true
  });
  return TodoList;
}(AbstractExtension);

var correctPrototypeGetter = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var IE_PROTO$1 = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ( !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

var defineProperty$4 = objectDefineProperty.f;



var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

var setToStringTag = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG$2)) {
    defineProperty$4(it, TO_STRING_TAG$2, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
  return IteratorConstructor;
};

var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis$1 = function () { return this; };

var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$1]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
      if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
        if (objectSetPrototypeOf) {
          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
        } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$1, returnThis$1);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ( IterablePrototype[ITERATOR$1] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = internalState.set;
var getInternalState = internalState.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var ITERATOR$2 = wellKnownSymbol('iterator');
var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
var ArrayValues = es_array_iterator.values;

for (var COLLECTION_NAME$1 in domIterables) {
  var Collection$1 = global_1[COLLECTION_NAME$1];
  var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;
  if (CollectionPrototype$1) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype$1[ITERATOR$2] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype$1, ITERATOR$2, ArrayValues);
    } catch (error) {
      CollectionPrototype$1[ITERATOR$2] = ArrayValues;
    }
    if (!CollectionPrototype$1[TO_STRING_TAG$3]) {
      createNonEnumerableProperty(CollectionPrototype$1, TO_STRING_TAG$3, COLLECTION_NAME$1);
    }
    if (domIterables[COLLECTION_NAME$1]) for (var METHOD_NAME in es_array_iterator) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype$1[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype$1, METHOD_NAME, es_array_iterator[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype$1[METHOD_NAME] = es_array_iterator[METHOD_NAME];
      }
    }
  }
}

// ::- Persistent data structure representing an ordered mapping from
// strings to values, with some convenient update methods.
function OrderedMap(content) {
  this.content = content;
}

OrderedMap.prototype = {
  constructor: OrderedMap,

  find: function(key) {
    for (var i = 0; i < this.content.length; i += 2)
      if (this.content[i] === key) return i
    return -1
  },

  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(key) {
    var found = this.find(key);
    return found == -1 ? undefined : this.content[found + 1]
  },

  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(key, value, newKey) {
    var self = newKey && newKey != key ? this.remove(newKey) : this;
    var found = self.find(key), content = self.content.slice();
    if (found == -1) {
      content.push(newKey || key, value);
    } else {
      content[found + 1] = value;
      if (newKey) content[found] = newKey;
    }
    return new OrderedMap(content)
  },

  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(key) {
    var found = this.find(key);
    if (found == -1) return this
    var content = this.content.slice();
    content.splice(found, 2);
    return new OrderedMap(content)
  },

  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(key, value) {
    return new OrderedMap([key, value].concat(this.remove(key).content))
  },

  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(key, value) {
    var content = this.remove(key).content.slice();
    content.push(key, value);
    return new OrderedMap(content)
  },

  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(place, key, value) {
    var without = this.remove(key), content = without.content.slice();
    var found = without.find(place);
    content.splice(found == -1 ? content.length : found, 0, key, value);
    return new OrderedMap(content)
  },

  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(f) {
    for (var i = 0; i < this.content.length; i += 2)
      f(this.content[i], this.content[i + 1]);
  },

  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(map) {
    map = OrderedMap.from(map);
    if (!map.size) return this
    return new OrderedMap(map.content.concat(this.subtract(map).content))
  },

  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(map) {
    map = OrderedMap.from(map);
    if (!map.size) return this
    return new OrderedMap(this.subtract(map).content.concat(map.content))
  },

  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(map) {
    var result = this;
    map = OrderedMap.from(map);
    for (var i = 0; i < map.content.length; i += 2)
      result = result.remove(map.content[i]);
    return result
  },

  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1
  }
};

// :: (?union<Object, OrderedMap>) → OrderedMap
// Return a map with the given content. If null, create an empty
// map. If given an ordered map, return that map itself. If given an
// object, create a map from the object's properties.
OrderedMap.from = function(value) {
  if (value instanceof OrderedMap) return value
  var content = [];
  if (value) for (var prop in value) content.push(prop, value[prop]);
  return new OrderedMap(content)
};

var orderedmap = OrderedMap;

function findDiffStart(a, b, pos) {
  for (var i = 0;; i++) {
    if (i == a.childCount || i == b.childCount)
      { return a.childCount == b.childCount ? null : pos }

    var childA = a.child(i), childB = b.child(i);
    if (childA == childB) { pos += childA.nodeSize; continue }

    if (!childA.sameMarkup(childB)) { return pos }

    if (childA.isText && childA.text != childB.text) {
      for (var j = 0; childA.text[j] == childB.text[j]; j++)
        { pos++; }
      return pos
    }
    if (childA.content.size || childB.content.size) {
      var inner = findDiffStart(childA.content, childB.content, pos + 1);
      if (inner != null) { return inner }
    }
    pos += childA.nodeSize;
  }
}

function findDiffEnd(a, b, posA, posB) {
  for (var iA = a.childCount, iB = b.childCount;;) {
    if (iA == 0 || iB == 0)
      { return iA == iB ? null : {a: posA, b: posB} }

    var childA = a.child(--iA), childB = b.child(--iB), size = childA.nodeSize;
    if (childA == childB) {
      posA -= size; posB -= size;
      continue
    }

    if (!childA.sameMarkup(childB)) { return {a: posA, b: posB} }

    if (childA.isText && childA.text != childB.text) {
      var same = 0, minSize = Math.min(childA.text.length, childB.text.length);
      while (same < minSize && childA.text[childA.text.length - same - 1] == childB.text[childB.text.length - same - 1]) {
        same++; posA--; posB--;
      }
      return {a: posA, b: posB}
    }
    if (childA.content.size || childB.content.size) {
      var inner = findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);
      if (inner) { return inner }
    }
    posA -= size; posB -= size;
  }
}

// ::- A fragment represents a node's collection of child nodes.
//
// Like nodes, fragments are persistent data structures, and you
// should not mutate them or their content. Rather, you create new
// instances whenever needed. The API tries to make this easy.
var Fragment = function Fragment(content, size) {
  this.content = content;
  // :: number
  // The size of the fragment, which is the total of the size of its
  // content nodes.
  this.size = size || 0;
  if (size == null) { for (var i = 0; i < content.length; i++)
    { this.size += content[i].nodeSize; } }
};

var prototypeAccessors = { firstChild: { configurable: true },lastChild: { configurable: true },childCount: { configurable: true } };

// :: (number, number, (node: Node, start: number, parent: Node, index: number) → ?bool, ?number)
// Invoke a callback for all descendant nodes between the given two
// positions (relative to start of this fragment). Doesn't descend
// into a node when the callback returns `false`.
Fragment.prototype.nodesBetween = function nodesBetween (from, to, f, nodeStart, parent) {
    if ( nodeStart === void 0 ) nodeStart = 0;

  for (var i = 0, pos = 0; pos < to; i++) {
    var child = this.content[i], end = pos + child.nodeSize;
    if (end > from && f(child, nodeStart + pos, parent, i) !== false && child.content.size) {
      var start = pos + 1;
      child.nodesBetween(Math.max(0, from - start),
                         Math.min(child.content.size, to - start),
                         f, nodeStart + start);
    }
    pos = end;
  }
};

// :: ((node: Node, pos: number, parent: Node) → ?bool)
// Call the given callback for every descendant node. The callback
// may return `false` to prevent traversal of a given node's children.
Fragment.prototype.descendants = function descendants (f) {
  this.nodesBetween(0, this.size, f);
};

// : (number, number, ?string, ?string) → string
Fragment.prototype.textBetween = function textBetween (from, to, blockSeparator, leafText) {
  var text = "", separated = true;
  this.nodesBetween(from, to, function (node, pos) {
    if (node.isText) {
      text += node.text.slice(Math.max(from, pos) - pos, to - pos);
      separated = !blockSeparator;
    } else if (node.isLeaf && leafText) {
      text += leafText;
      separated = !blockSeparator;
    } else if (!separated && node.isBlock) {
      text += blockSeparator;
      separated = true;
    }
  }, 0);
  return text
};

// :: (Fragment) → Fragment
// Create a new fragment containing the combined content of this
// fragment and the other.
Fragment.prototype.append = function append (other) {
  if (!other.size) { return this }
  if (!this.size) { return other }
  var last = this.lastChild, first = other.firstChild, content = this.content.slice(), i = 0;
  if (last.isText && last.sameMarkup(first)) {
    content[content.length - 1] = last.withText(last.text + first.text);
    i = 1;
  }
  for (; i < other.content.length; i++) { content.push(other.content[i]); }
  return new Fragment(content, this.size + other.size)
};

// :: (number, ?number) → Fragment
// Cut out the sub-fragment between the two given positions.
Fragment.prototype.cut = function cut (from, to) {
  if (to == null) { to = this.size; }
  if (from == 0 && to == this.size) { return this }
  var result = [], size = 0;
  if (to > from) { for (var i = 0, pos = 0; pos < to; i++) {
    var child = this.content[i], end = pos + child.nodeSize;
    if (end > from) {
      if (pos < from || end > to) {
        if (child.isText)
          { child = child.cut(Math.max(0, from - pos), Math.min(child.text.length, to - pos)); }
        else
          { child = child.cut(Math.max(0, from - pos - 1), Math.min(child.content.size, to - pos - 1)); }
      }
      result.push(child);
      size += child.nodeSize;
    }
    pos = end;
  } }
  return new Fragment(result, size)
};

Fragment.prototype.cutByIndex = function cutByIndex (from, to) {
  if (from == to) { return Fragment.empty }
  if (from == 0 && to == this.content.length) { return this }
  return new Fragment(this.content.slice(from, to))
};

// :: (number, Node) → Fragment
// Create a new fragment in which the node at the given index is
// replaced by the given node.
Fragment.prototype.replaceChild = function replaceChild (index, node) {
  var current = this.content[index];
  if (current == node) { return this }
  var copy = this.content.slice();
  var size = this.size + node.nodeSize - current.nodeSize;
  copy[index] = node;
  return new Fragment(copy, size)
};

// : (Node) → Fragment
// Create a new fragment by prepending the given node to this
// fragment.
Fragment.prototype.addToStart = function addToStart (node) {
  return new Fragment([node].concat(this.content), this.size + node.nodeSize)
};

// : (Node) → Fragment
// Create a new fragment by appending the given node to this
// fragment.
Fragment.prototype.addToEnd = function addToEnd (node) {
  return new Fragment(this.content.concat(node), this.size + node.nodeSize)
};

// :: (Fragment) → bool
// Compare this fragment to another one.
Fragment.prototype.eq = function eq (other) {
  if (this.content.length != other.content.length) { return false }
  for (var i = 0; i < this.content.length; i++)
    { if (!this.content[i].eq(other.content[i])) { return false } }
  return true
};

// :: ?Node
// The first child of the fragment, or `null` if it is empty.
prototypeAccessors.firstChild.get = function () { return this.content.length ? this.content[0] : null };

// :: ?Node
// The last child of the fragment, or `null` if it is empty.
prototypeAccessors.lastChild.get = function () { return this.content.length ? this.content[this.content.length - 1] : null };

// :: number
// The number of child nodes in this fragment.
prototypeAccessors.childCount.get = function () { return this.content.length };

// :: (number) → Node
// Get the child node at the given index. Raise an error when the
// index is out of range.
Fragment.prototype.child = function child (index) {
  var found = this.content[index];
  if (!found) { throw new RangeError("Index " + index + " out of range for " + this) }
  return found
};

// :: (number) → ?Node
// Get the child node at the given index, if it exists.
Fragment.prototype.maybeChild = function maybeChild (index) {
  return this.content[index]
};

// :: ((node: Node, offset: number, index: number))
// Call `f` for every child node, passing the node, its offset
// into this parent node, and its index.
Fragment.prototype.forEach = function forEach (f) {
  for (var i = 0, p = 0; i < this.content.length; i++) {
    var child = this.content[i];
    f(child, p, i);
    p += child.nodeSize;
  }
};

// :: (Fragment) → ?number
// Find the first position at which this fragment and another
// fragment differ, or `null` if they are the same.
Fragment.prototype.findDiffStart = function findDiffStart$1 (other, pos) {
    if ( pos === void 0 ) pos = 0;

  return findDiffStart(this, other, pos)
};

// :: (Fragment) → ?{a: number, b: number}
// Find the first position, searching from the end, at which this
// fragment and the given fragment differ, or `null` if they are the
// same. Since this position will not be the same in both nodes, an
// object with two separate positions is returned.
Fragment.prototype.findDiffEnd = function findDiffEnd$1 (other, pos, otherPos) {
    if ( pos === void 0 ) pos = this.size;
    if ( otherPos === void 0 ) otherPos = other.size;

  return findDiffEnd(this, other, pos, otherPos)
};

// : (number, ?number) → {index: number, offset: number}
// Find the index and inner offset corresponding to a given relative
// position in this fragment. The result object will be reused
// (overwritten) the next time the function is called. (Not public.)
Fragment.prototype.findIndex = function findIndex (pos, round) {
    if ( round === void 0 ) round = -1;

  if (pos == 0) { return retIndex(0, pos) }
  if (pos == this.size) { return retIndex(this.content.length, pos) }
  if (pos > this.size || pos < 0) { throw new RangeError(("Position " + pos + " outside of fragment (" + (this) + ")")) }
  for (var i = 0, curPos = 0;; i++) {
    var cur = this.child(i), end = curPos + cur.nodeSize;
    if (end >= pos) {
      if (end == pos || round > 0) { return retIndex(i + 1, end) }
      return retIndex(i, curPos)
    }
    curPos = end;
  }
};

// :: () → string
// Return a debugging string that describes this fragment.
Fragment.prototype.toString = function toString () { return "<" + this.toStringInner() + ">" };

Fragment.prototype.toStringInner = function toStringInner () { return this.content.join(", ") };

// :: () → ?Object
// Create a JSON-serializeable representation of this fragment.
Fragment.prototype.toJSON = function toJSON () {
  return this.content.length ? this.content.map(function (n) { return n.toJSON(); }) : null
};

// :: (Schema, ?Object) → Fragment
// Deserialize a fragment from its JSON representation.
Fragment.fromJSON = function fromJSON (schema, value) {
  if (!value) { return Fragment.empty }
  if (!Array.isArray(value)) { throw new RangeError("Invalid input for Fragment.fromJSON") }
  return new Fragment(value.map(schema.nodeFromJSON))
};

// :: ([Node]) → Fragment
// Build a fragment from an array of nodes. Ensures that adjacent
// text nodes with the same marks are joined together.
Fragment.fromArray = function fromArray (array) {
  if (!array.length) { return Fragment.empty }
  var joined, size = 0;
  for (var i = 0; i < array.length; i++) {
    var node = array[i];
    size += node.nodeSize;
    if (i && node.isText && array[i - 1].sameMarkup(node)) {
      if (!joined) { joined = array.slice(0, i); }
      joined[joined.length - 1] = node.withText(joined[joined.length - 1].text + node.text);
    } else if (joined) {
      joined.push(node);
    }
  }
  return new Fragment(joined || array, size)
};

// :: (?union<Fragment, Node, [Node]>) → Fragment
// Create a fragment from something that can be interpreted as a set
// of nodes. For `null`, it returns the empty fragment. For a
// fragment, the fragment itself. For a node or array of nodes, a
// fragment containing those nodes.
Fragment.from = function from (nodes) {
  if (!nodes) { return Fragment.empty }
  if (nodes instanceof Fragment) { return nodes }
  if (Array.isArray(nodes)) { return this.fromArray(nodes) }
  if (nodes.attrs) { return new Fragment([nodes], nodes.nodeSize) }
  throw new RangeError("Can not convert " + nodes + " to a Fragment" +
                       (nodes.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""))
};

Object.defineProperties( Fragment.prototype, prototypeAccessors );

var found = {index: 0, offset: 0};
function retIndex(index, offset) {
  found.index = index;
  found.offset = offset;
  return found
}

// :: Fragment
// An empty fragment. Intended to be reused whenever a node doesn't
// contain anything (rather than allocating a new empty fragment for
// each leaf node).
Fragment.empty = new Fragment([], 0);

function compareDeep(a, b) {
  if (a === b) { return true }
  if (!(a && typeof a == "object") ||
      !(b && typeof b == "object")) { return false }
  var array = Array.isArray(a);
  if (Array.isArray(b) != array) { return false }
  if (array) {
    if (a.length != b.length) { return false }
    for (var i = 0; i < a.length; i++) { if (!compareDeep(a[i], b[i])) { return false } }
  } else {
    for (var p in a) { if (!(p in b) || !compareDeep(a[p], b[p])) { return false } }
    for (var p$1 in b) { if (!(p$1 in a)) { return false } }
  }
  return true
}

// ::- A mark is a piece of information that can be attached to a node,
// such as it being emphasized, in code font, or a link. It has a type
// and optionally a set of attributes that provide further information
// (such as the target of the link). Marks are created through a
// `Schema`, which controls which types exist and which
// attributes they have.
var Mark = function Mark(type, attrs) {
  // :: MarkType
  // The type of this mark.
  this.type = type;
  // :: Object
  // The attributes associated with this mark.
  this.attrs = attrs;
};

// :: ([Mark]) → [Mark]
// Given a set of marks, create a new set which contains this one as
// well, in the right position. If this mark is already in the set,
// the set itself is returned. If any marks that are set to be
// [exclusive](#model.MarkSpec.excludes) with this mark are present,
// those are replaced by this one.
Mark.prototype.addToSet = function addToSet (set) {
  var copy, placed = false;
  for (var i = 0; i < set.length; i++) {
    var other = set[i];
    if (this.eq(other)) { return set }
    if (this.type.excludes(other.type)) {
      if (!copy) { copy = set.slice(0, i); }
    } else if (other.type.excludes(this.type)) {
      return set
    } else {
      if (!placed && other.type.rank > this.type.rank) {
        if (!copy) { copy = set.slice(0, i); }
        copy.push(this);
        placed = true;
      }
      if (copy) { copy.push(other); }
    }
  }
  if (!copy) { copy = set.slice(); }
  if (!placed) { copy.push(this); }
  return copy
};

// :: ([Mark]) → [Mark]
// Remove this mark from the given set, returning a new set. If this
// mark is not in the set, the set itself is returned.
Mark.prototype.removeFromSet = function removeFromSet (set) {
  for (var i = 0; i < set.length; i++)
    { if (this.eq(set[i]))
      { return set.slice(0, i).concat(set.slice(i + 1)) } }
  return set
};

// :: ([Mark]) → bool
// Test whether this mark is in the given set of marks.
Mark.prototype.isInSet = function isInSet (set) {
  for (var i = 0; i < set.length; i++)
    { if (this.eq(set[i])) { return true } }
  return false
};

// :: (Mark) → bool
// Test whether this mark has the same type and attributes as
// another mark.
Mark.prototype.eq = function eq (other) {
  return this == other ||
    (this.type == other.type && compareDeep(this.attrs, other.attrs))
};

// :: () → Object
// Convert this mark to a JSON-serializeable representation.
Mark.prototype.toJSON = function toJSON () {
  var obj = {type: this.type.name};
  for (var _ in this.attrs) {
    obj.attrs = this.attrs;
    break
  }
  return obj
};

// :: (Schema, Object) → Mark
Mark.fromJSON = function fromJSON (schema, json) {
  if (!json) { throw new RangeError("Invalid input for Mark.fromJSON") }
  var type = schema.marks[json.type];
  if (!type) { throw new RangeError(("There is no mark type " + (json.type) + " in this schema")) }
  return type.create(json.attrs)
};

// :: ([Mark], [Mark]) → bool
// Test whether two sets of marks are identical.
Mark.sameSet = function sameSet (a, b) {
  if (a == b) { return true }
  if (a.length != b.length) { return false }
  for (var i = 0; i < a.length; i++)
    { if (!a[i].eq(b[i])) { return false } }
  return true
};

// :: (?union<Mark, [Mark]>) → [Mark]
// Create a properly sorted mark set from null, a single mark, or an
// unsorted array of marks.
Mark.setFrom = function setFrom (marks) {
  if (!marks || marks.length == 0) { return Mark.none }
  if (marks instanceof Mark) { return [marks] }
  var copy = marks.slice();
  copy.sort(function (a, b) { return a.type.rank - b.type.rank; });
  return copy
};

// :: [Mark] The empty set of marks.
Mark.none = [];

// ReplaceError:: class extends Error
// Error type raised by [`Node.replace`](#model.Node.replace) when
// given an invalid replacement.

function ReplaceError(message) {
  var err = Error.call(this, message);
  err.__proto__ = ReplaceError.prototype;
  return err
}

ReplaceError.prototype = Object.create(Error.prototype);
ReplaceError.prototype.constructor = ReplaceError;
ReplaceError.prototype.name = "ReplaceError";

// ::- A slice represents a piece cut out of a larger document. It
// stores not only a fragment, but also the depth up to which nodes on
// both side are ‘open’ (cut through).
var Slice = function Slice(content, openStart, openEnd) {
  // :: Fragment The slice's content.
  this.content = content;
  // :: number The open depth at the start.
  this.openStart = openStart;
  // :: number The open depth at the end.
  this.openEnd = openEnd;
};

var prototypeAccessors$1 = { size: { configurable: true } };

// :: number
// The size this slice would add when inserted into a document.
prototypeAccessors$1.size.get = function () {
  return this.content.size - this.openStart - this.openEnd
};

Slice.prototype.insertAt = function insertAt (pos, fragment) {
  var content = insertInto(this.content, pos + this.openStart, fragment, null);
  return content && new Slice(content, this.openStart, this.openEnd)
};

Slice.prototype.removeBetween = function removeBetween (from, to) {
  return new Slice(removeRange(this.content, from + this.openStart, to + this.openStart), this.openStart, this.openEnd)
};

// :: (Slice) → bool
// Tests whether this slice is equal to another slice.
Slice.prototype.eq = function eq (other) {
  return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd
};

Slice.prototype.toString = function toString () {
  return this.content + "(" + this.openStart + "," + this.openEnd + ")"
};

// :: () → ?Object
// Convert a slice to a JSON-serializable representation.
Slice.prototype.toJSON = function toJSON () {
  if (!this.content.size) { return null }
  var json = {content: this.content.toJSON()};
  if (this.openStart > 0) { json.openStart = this.openStart; }
  if (this.openEnd > 0) { json.openEnd = this.openEnd; }
  return json
};

// :: (Schema, ?Object) → Slice
// Deserialize a slice from its JSON representation.
Slice.fromJSON = function fromJSON (schema, json) {
  if (!json) { return Slice.empty }
  var openStart = json.openStart || 0, openEnd = json.openEnd || 0;
  if (typeof openStart != "number" || typeof openEnd != "number")
    { throw new RangeError("Invalid input for Slice.fromJSON") }
  return new Slice(Fragment.fromJSON(schema, json.content), json.openStart || 0, json.openEnd || 0)
};

// :: (Fragment, ?bool) → Slice
// Create a slice from a fragment by taking the maximum possible
// open value on both side of the fragment.
Slice.maxOpen = function maxOpen (fragment, openIsolating) {
    if ( openIsolating === void 0 ) openIsolating=true;

  var openStart = 0, openEnd = 0;
  for (var n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild) { openStart++; }
  for (var n$1 = fragment.lastChild; n$1 && !n$1.isLeaf && (openIsolating || !n$1.type.spec.isolating); n$1 = n$1.lastChild) { openEnd++; }
  return new Slice(fragment, openStart, openEnd)
};

Object.defineProperties( Slice.prototype, prototypeAccessors$1 );

function removeRange(content, from, to) {
  var ref = content.findIndex(from);
  var index = ref.index;
  var offset = ref.offset;
  var child = content.maybeChild(index);
  var ref$1 = content.findIndex(to);
  var indexTo = ref$1.index;
  var offsetTo = ref$1.offset;
  if (offset == from || child.isText) {
    if (offsetTo != to && !content.child(indexTo).isText) { throw new RangeError("Removing non-flat range") }
    return content.cut(0, from).append(content.cut(to))
  }
  if (index != indexTo) { throw new RangeError("Removing non-flat range") }
  return content.replaceChild(index, child.copy(removeRange(child.content, from - offset - 1, to - offset - 1)))
}

function insertInto(content, dist, insert, parent) {
  var ref = content.findIndex(dist);
  var index = ref.index;
  var offset = ref.offset;
  var child = content.maybeChild(index);
  if (offset == dist || child.isText) {
    if (parent && !parent.canReplace(index, index, insert)) { return null }
    return content.cut(0, dist).append(insert).append(content.cut(dist))
  }
  var inner = insertInto(child.content, dist - offset - 1, insert);
  return inner && content.replaceChild(index, child.copy(inner))
}

// :: Slice
// The empty slice.
Slice.empty = new Slice(Fragment.empty, 0, 0);

function replace($from, $to, slice) {
  if (slice.openStart > $from.depth)
    { throw new ReplaceError("Inserted content deeper than insertion position") }
  if ($from.depth - slice.openStart != $to.depth - slice.openEnd)
    { throw new ReplaceError("Inconsistent open depths") }
  return replaceOuter($from, $to, slice, 0)
}

function replaceOuter($from, $to, slice, depth) {
  var index = $from.index(depth), node = $from.node(depth);
  if (index == $to.index(depth) && depth < $from.depth - slice.openStart) {
    var inner = replaceOuter($from, $to, slice, depth + 1);
    return node.copy(node.content.replaceChild(index, inner))
  } else if (!slice.content.size) {
    return close(node, replaceTwoWay($from, $to, depth))
  } else if (!slice.openStart && !slice.openEnd && $from.depth == depth && $to.depth == depth) { // Simple, flat case
    var parent = $from.parent, content = parent.content;
    return close(parent, content.cut(0, $from.parentOffset).append(slice.content).append(content.cut($to.parentOffset)))
  } else {
    var ref = prepareSliceForReplace(slice, $from);
    var start = ref.start;
    var end = ref.end;
    return close(node, replaceThreeWay($from, start, end, $to, depth))
  }
}

function checkJoin(main, sub) {
  if (!sub.type.compatibleContent(main.type))
    { throw new ReplaceError("Cannot join " + sub.type.name + " onto " + main.type.name) }
}

function joinable($before, $after, depth) {
  var node = $before.node(depth);
  checkJoin(node, $after.node(depth));
  return node
}

function addNode(child, target) {
  var last = target.length - 1;
  if (last >= 0 && child.isText && child.sameMarkup(target[last]))
    { target[last] = child.withText(target[last].text + child.text); }
  else
    { target.push(child); }
}

function addRange($start, $end, depth, target) {
  var node = ($end || $start).node(depth);
  var startIndex = 0, endIndex = $end ? $end.index(depth) : node.childCount;
  if ($start) {
    startIndex = $start.index(depth);
    if ($start.depth > depth) {
      startIndex++;
    } else if ($start.textOffset) {
      addNode($start.nodeAfter, target);
      startIndex++;
    }
  }
  for (var i = startIndex; i < endIndex; i++) { addNode(node.child(i), target); }
  if ($end && $end.depth == depth && $end.textOffset)
    { addNode($end.nodeBefore, target); }
}

function close(node, content) {
  if (!node.type.validContent(content))
    { throw new ReplaceError("Invalid content for node " + node.type.name) }
  return node.copy(content)
}

function replaceThreeWay($from, $start, $end, $to, depth) {
  var openStart = $from.depth > depth && joinable($from, $start, depth + 1);
  var openEnd = $to.depth > depth && joinable($end, $to, depth + 1);

  var content = [];
  addRange(null, $from, depth, content);
  if (openStart && openEnd && $start.index(depth) == $end.index(depth)) {
    checkJoin(openStart, openEnd);
    addNode(close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content);
  } else {
    if (openStart)
      { addNode(close(openStart, replaceTwoWay($from, $start, depth + 1)), content); }
    addRange($start, $end, depth, content);
    if (openEnd)
      { addNode(close(openEnd, replaceTwoWay($end, $to, depth + 1)), content); }
  }
  addRange($to, null, depth, content);
  return new Fragment(content)
}

function replaceTwoWay($from, $to, depth) {
  var content = [];
  addRange(null, $from, depth, content);
  if ($from.depth > depth) {
    var type = joinable($from, $to, depth + 1);
    addNode(close(type, replaceTwoWay($from, $to, depth + 1)), content);
  }
  addRange($to, null, depth, content);
  return new Fragment(content)
}

function prepareSliceForReplace(slice, $along) {
  var extra = $along.depth - slice.openStart, parent = $along.node(extra);
  var node = parent.copy(slice.content);
  for (var i = extra - 1; i >= 0; i--)
    { node = $along.node(i).copy(Fragment.from(node)); }
  return {start: node.resolveNoCache(slice.openStart + extra),
          end: node.resolveNoCache(node.content.size - slice.openEnd - extra)}
}

// ::- You can [_resolve_](#model.Node.resolve) a position to get more
// information about it. Objects of this class represent such a
// resolved position, providing various pieces of context information,
// and some helper methods.
//
// Throughout this interface, methods that take an optional `depth`
// parameter will interpret undefined as `this.depth` and negative
// numbers as `this.depth + value`.
var ResolvedPos = function ResolvedPos(pos, path, parentOffset) {
  // :: number The position that was resolved.
  this.pos = pos;
  this.path = path;
  // :: number
  // The number of levels the parent node is from the root. If this
  // position points directly into the root node, it is 0. If it
  // points into a top-level paragraph, 1, and so on.
  this.depth = path.length / 3 - 1;
  // :: number The offset this position has into its parent node.
  this.parentOffset = parentOffset;
};

var prototypeAccessors$2 = { parent: { configurable: true },doc: { configurable: true },textOffset: { configurable: true },nodeAfter: { configurable: true },nodeBefore: { configurable: true } };

ResolvedPos.prototype.resolveDepth = function resolveDepth (val) {
  if (val == null) { return this.depth }
  if (val < 0) { return this.depth + val }
  return val
};

// :: Node
// The parent node that the position points into. Note that even if
// a position points into a text node, that node is not considered
// the parent—text nodes are ‘flat’ in this model, and have no content.
prototypeAccessors$2.parent.get = function () { return this.node(this.depth) };

// :: Node
// The root node in which the position was resolved.
prototypeAccessors$2.doc.get = function () { return this.node(0) };

// :: (?number) → Node
// The ancestor node at the given level. `p.node(p.depth)` is the
// same as `p.parent`.
ResolvedPos.prototype.node = function node (depth) { return this.path[this.resolveDepth(depth) * 3] };

// :: (?number) → number
// The index into the ancestor at the given level. If this points at
// the 3rd node in the 2nd paragraph on the top level, for example,
// `p.index(0)` is 1 and `p.index(1)` is 2.
ResolvedPos.prototype.index = function index (depth) { return this.path[this.resolveDepth(depth) * 3 + 1] };

// :: (?number) → number
// The index pointing after this position into the ancestor at the
// given level.
ResolvedPos.prototype.indexAfter = function indexAfter (depth) {
  depth = this.resolveDepth(depth);
  return this.index(depth) + (depth == this.depth && !this.textOffset ? 0 : 1)
};

// :: (?number) → number
// The (absolute) position at the start of the node at the given
// level.
ResolvedPos.prototype.start = function start (depth) {
  depth = this.resolveDepth(depth);
  return depth == 0 ? 0 : this.path[depth * 3 - 1] + 1
};

// :: (?number) → number
// The (absolute) position at the end of the node at the given
// level.
ResolvedPos.prototype.end = function end (depth) {
  depth = this.resolveDepth(depth);
  return this.start(depth) + this.node(depth).content.size
};

// :: (?number) → number
// The (absolute) position directly before the wrapping node at the
// given level, or, when `depth` is `this.depth + 1`, the original
// position.
ResolvedPos.prototype.before = function before (depth) {
  depth = this.resolveDepth(depth);
  if (!depth) { throw new RangeError("There is no position before the top-level node") }
  return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1]
};

// :: (?number) → number
// The (absolute) position directly after the wrapping node at the
// given level, or the original position when `depth` is `this.depth + 1`.
ResolvedPos.prototype.after = function after (depth) {
  depth = this.resolveDepth(depth);
  if (!depth) { throw new RangeError("There is no position after the top-level node") }
  return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1] + this.path[depth * 3].nodeSize
};

// :: number
// When this position points into a text node, this returns the
// distance between the position and the start of the text node.
// Will be zero for positions that point between nodes.
prototypeAccessors$2.textOffset.get = function () { return this.pos - this.path[this.path.length - 1] };

// :: ?Node
// Get the node directly after the position, if any. If the position
// points into a text node, only the part of that node after the
// position is returned.
prototypeAccessors$2.nodeAfter.get = function () {
  var parent = this.parent, index = this.index(this.depth);
  if (index == parent.childCount) { return null }
  var dOff = this.pos - this.path[this.path.length - 1], child = parent.child(index);
  return dOff ? parent.child(index).cut(dOff) : child
};

// :: ?Node
// Get the node directly before the position, if any. If the
// position points into a text node, only the part of that node
// before the position is returned.
prototypeAccessors$2.nodeBefore.get = function () {
  var index = this.index(this.depth);
  var dOff = this.pos - this.path[this.path.length - 1];
  if (dOff) { return this.parent.child(index).cut(0, dOff) }
  return index == 0 ? null : this.parent.child(index - 1)
};

// :: () → [Mark]
// Get the marks at this position, factoring in the surrounding
// marks' [`inclusive`](#model.MarkSpec.inclusive) property. If the
// position is at the start of a non-empty node, the marks of the
// node after it (if any) are returned.
ResolvedPos.prototype.marks = function marks () {
  var parent = this.parent, index = this.index();

  // In an empty parent, return the empty array
  if (parent.content.size == 0) { return Mark.none }

  // When inside a text node, just return the text node's marks
  if (this.textOffset) { return parent.child(index).marks }

  var main = parent.maybeChild(index - 1), other = parent.maybeChild(index);
  // If the `after` flag is true of there is no node before, make
  // the node after this position the main reference.
  if (!main) { var tmp = main; main = other; other = tmp; }

  // Use all marks in the main node, except those that have
  // `inclusive` set to false and are not present in the other node.
  var marks = main.marks;
  for (var i = 0; i < marks.length; i++)
    { if (marks[i].type.spec.inclusive === false && (!other || !marks[i].isInSet(other.marks)))
      { marks = marks[i--].removeFromSet(marks); } }

  return marks
};

// :: (ResolvedPos) → ?[Mark]
// Get the marks after the current position, if any, except those
// that are non-inclusive and not present at position `$end`. This
// is mostly useful for getting the set of marks to preserve after a
// deletion. Will return `null` if this position is at the end of
// its parent node or its parent node isn't a textblock (in which
// case no marks should be preserved).
ResolvedPos.prototype.marksAcross = function marksAcross ($end) {
  var after = this.parent.maybeChild(this.index());
  if (!after || !after.isInline) { return null }

  var marks = after.marks, next = $end.parent.maybeChild($end.index());
  for (var i = 0; i < marks.length; i++)
    { if (marks[i].type.spec.inclusive === false && (!next || !marks[i].isInSet(next.marks)))
      { marks = marks[i--].removeFromSet(marks); } }
  return marks
};

// :: (number) → number
// The depth up to which this position and the given (non-resolved)
// position share the same parent nodes.
ResolvedPos.prototype.sharedDepth = function sharedDepth (pos) {
  for (var depth = this.depth; depth > 0; depth--)
    { if (this.start(depth) <= pos && this.end(depth) >= pos) { return depth } }
  return 0
};

// :: (?ResolvedPos, ?(Node) → bool) → ?NodeRange
// Returns a range based on the place where this position and the
// given position diverge around block content. If both point into
// the same textblock, for example, a range around that textblock
// will be returned. If they point into different blocks, the range
// around those blocks in their shared ancestor is returned. You can
// pass in an optional predicate that will be called with a parent
// node to see if a range into that parent is acceptable.
ResolvedPos.prototype.blockRange = function blockRange (other, pred) {
    if ( other === void 0 ) other = this;

  if (other.pos < this.pos) { return other.blockRange(this) }
  for (var d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--)
    { if (other.pos <= this.end(d) && (!pred || pred(this.node(d))))
      { return new NodeRange(this, other, d) } }
};

// :: (ResolvedPos) → bool
// Query whether the given position shares the same parent node.
ResolvedPos.prototype.sameParent = function sameParent (other) {
  return this.pos - this.parentOffset == other.pos - other.parentOffset
};

// :: (ResolvedPos) → ResolvedPos
// Return the greater of this and the given position.
ResolvedPos.prototype.max = function max (other) {
  return other.pos > this.pos ? other : this
};

// :: (ResolvedPos) → ResolvedPos
// Return the smaller of this and the given position.
ResolvedPos.prototype.min = function min (other) {
  return other.pos < this.pos ? other : this
};

ResolvedPos.prototype.toString = function toString () {
  var str = "";
  for (var i = 1; i <= this.depth; i++)
    { str += (str ? "/" : "") + this.node(i).type.name + "_" + this.index(i - 1); }
  return str + ":" + this.parentOffset
};

ResolvedPos.resolve = function resolve (doc, pos) {
  if (!(pos >= 0 && pos <= doc.content.size)) { throw new RangeError("Position " + pos + " out of range") }
  var path = [];
  var start = 0, parentOffset = pos;
  for (var node = doc;;) {
    var ref = node.content.findIndex(parentOffset);
      var index = ref.index;
      var offset = ref.offset;
    var rem = parentOffset - offset;
    path.push(node, index, start + offset);
    if (!rem) { break }
    node = node.child(index);
    if (node.isText) { break }
    parentOffset = rem - 1;
    start += offset + 1;
  }
  return new ResolvedPos(pos, path, parentOffset)
};

ResolvedPos.resolveCached = function resolveCached (doc, pos) {
  for (var i = 0; i < resolveCache.length; i++) {
    var cached = resolveCache[i];
    if (cached.pos == pos && cached.doc == doc) { return cached }
  }
  var result = resolveCache[resolveCachePos] = ResolvedPos.resolve(doc, pos);
  resolveCachePos = (resolveCachePos + 1) % resolveCacheSize;
  return result
};

Object.defineProperties( ResolvedPos.prototype, prototypeAccessors$2 );

var resolveCache = [], resolveCachePos = 0, resolveCacheSize = 12;

// ::- Represents a flat range of content, i.e. one that starts and
// ends in the same node.
var NodeRange = function NodeRange($from, $to, depth) {
  // :: ResolvedPos A resolved position along the start of the
  // content. May have a `depth` greater than this object's `depth`
  // property, since these are the positions that were used to
  // compute the range, not re-resolved positions directly at its
  // boundaries.
  this.$from = $from;
  // :: ResolvedPos A position along the end of the content. See
  // caveat for [`$from`](#model.NodeRange.$from).
  this.$to = $to;
  // :: number The depth of the node that this range points into.
  this.depth = depth;
};

var prototypeAccessors$1$1 = { start: { configurable: true },end: { configurable: true },parent: { configurable: true },startIndex: { configurable: true },endIndex: { configurable: true } };

// :: number The position at the start of the range.
prototypeAccessors$1$1.start.get = function () { return this.$from.before(this.depth + 1) };
// :: number The position at the end of the range.
prototypeAccessors$1$1.end.get = function () { return this.$to.after(this.depth + 1) };

// :: Node The parent node that the range points into.
prototypeAccessors$1$1.parent.get = function () { return this.$from.node(this.depth) };
// :: number The start index of the range in the parent node.
prototypeAccessors$1$1.startIndex.get = function () { return this.$from.index(this.depth) };
// :: number The end index of the range in the parent node.
prototypeAccessors$1$1.endIndex.get = function () { return this.$to.indexAfter(this.depth) };

Object.defineProperties( NodeRange.prototype, prototypeAccessors$1$1 );

var emptyAttrs = Object.create(null);

// ::- This class represents a node in the tree that makes up a
// ProseMirror document. So a document is an instance of `Node`, with
// children that are also instances of `Node`.
//
// Nodes are persistent data structures. Instead of changing them, you
// create new ones with the content you want. Old ones keep pointing
// at the old document shape. This is made cheaper by sharing
// structure between the old and new data as much as possible, which a
// tree shape like this (without back pointers) makes easy.
//
// **Do not** directly mutate the properties of a `Node` object. See
// [the guide](/docs/guide/#doc) for more information.
var Node$1 = function Node(type, attrs, content, marks) {
  // :: NodeType
  // The type of node that this is.
  this.type = type;

  // :: Object
  // An object mapping attribute names to values. The kind of
  // attributes allowed and required are
  // [determined](#model.NodeSpec.attrs) by the node type.
  this.attrs = attrs;

  // :: Fragment
  // A container holding the node's children.
  this.content = content || Fragment.empty;

  // :: [Mark]
  // The marks (things like whether it is emphasized or part of a
  // link) applied to this node.
  this.marks = marks || Mark.none;
};

var prototypeAccessors$3 = { nodeSize: { configurable: true },childCount: { configurable: true },textContent: { configurable: true },firstChild: { configurable: true },lastChild: { configurable: true },isBlock: { configurable: true },isTextblock: { configurable: true },inlineContent: { configurable: true },isInline: { configurable: true },isText: { configurable: true },isLeaf: { configurable: true },isAtom: { configurable: true } };

// text:: ?string
// For text nodes, this contains the node's text content.

// :: number
// The size of this node, as defined by the integer-based [indexing
// scheme](/docs/guide/#doc.indexing). For text nodes, this is the
// amount of characters. For other leaf nodes, it is one. For
// non-leaf nodes, it is the size of the content plus two (the start
// and end token).
prototypeAccessors$3.nodeSize.get = function () { return this.isLeaf ? 1 : 2 + this.content.size };

// :: number
// The number of children that the node has.
prototypeAccessors$3.childCount.get = function () { return this.content.childCount };

// :: (number) → Node
// Get the child node at the given index. Raises an error when the
// index is out of range.
Node$1.prototype.child = function child (index) { return this.content.child(index) };

// :: (number) → ?Node
// Get the child node at the given index, if it exists.
Node$1.prototype.maybeChild = function maybeChild (index) { return this.content.maybeChild(index) };

// :: ((node: Node, offset: number, index: number))
// Call `f` for every child node, passing the node, its offset
// into this parent node, and its index.
Node$1.prototype.forEach = function forEach (f) { this.content.forEach(f); };

// :: (number, number, (node: Node, pos: number, parent: Node, index: number) → ?bool, ?number)
// Invoke a callback for all descendant nodes recursively between
// the given two positions that are relative to start of this node's
// content. The callback is invoked with the node, its
// parent-relative position, its parent node, and its child index.
// When the callback returns false for a given node, that node's
// children will not be recursed over. The last parameter can be
// used to specify a starting position to count from.
Node$1.prototype.nodesBetween = function nodesBetween (from, to, f, startPos) {
    if ( startPos === void 0 ) startPos = 0;

  this.content.nodesBetween(from, to, f, startPos, this);
};

// :: ((node: Node, pos: number, parent: Node) → ?bool)
// Call the given callback for every descendant node. Doesn't
// descend into a node when the callback returns `false`.
Node$1.prototype.descendants = function descendants (f) {
  this.nodesBetween(0, this.content.size, f);
};

// :: string
// Concatenates all the text nodes found in this fragment and its
// children.
prototypeAccessors$3.textContent.get = function () { return this.textBetween(0, this.content.size, "") };

// :: (number, number, ?string, ?string) → string
// Get all text between positions `from` and `to`. When
// `blockSeparator` is given, it will be inserted whenever a new
// block node is started. When `leafText` is given, it'll be
// inserted for every non-text leaf node encountered.
Node$1.prototype.textBetween = function textBetween (from, to, blockSeparator, leafText) {
  return this.content.textBetween(from, to, blockSeparator, leafText)
};

// :: ?Node
// Returns this node's first child, or `null` if there are no
// children.
prototypeAccessors$3.firstChild.get = function () { return this.content.firstChild };

// :: ?Node
// Returns this node's last child, or `null` if there are no
// children.
prototypeAccessors$3.lastChild.get = function () { return this.content.lastChild };

// :: (Node) → bool
// Test whether two nodes represent the same piece of document.
Node$1.prototype.eq = function eq (other) {
  return this == other || (this.sameMarkup(other) && this.content.eq(other.content))
};

// :: (Node) → bool
// Compare the markup (type, attributes, and marks) of this node to
// those of another. Returns `true` if both have the same markup.
Node$1.prototype.sameMarkup = function sameMarkup (other) {
  return this.hasMarkup(other.type, other.attrs, other.marks)
};

// :: (NodeType, ?Object, ?[Mark]) → bool
// Check whether this node's markup correspond to the given type,
// attributes, and marks.
Node$1.prototype.hasMarkup = function hasMarkup (type, attrs, marks) {
  return this.type == type &&
    compareDeep(this.attrs, attrs || type.defaultAttrs || emptyAttrs) &&
    Mark.sameSet(this.marks, marks || Mark.none)
};

// :: (?Fragment) → Node
// Create a new node with the same markup as this node, containing
// the given content (or empty, if no content is given).
Node$1.prototype.copy = function copy (content) {
    if ( content === void 0 ) content = null;

  if (content == this.content) { return this }
  return new this.constructor(this.type, this.attrs, content, this.marks)
};

// :: ([Mark]) → Node
// Create a copy of this node, with the given set of marks instead
// of the node's own marks.
Node$1.prototype.mark = function mark (marks) {
  return marks == this.marks ? this : new this.constructor(this.type, this.attrs, this.content, marks)
};

// :: (number, ?number) → Node
// Create a copy of this node with only the content between the
// given positions. If `to` is not given, it defaults to the end of
// the node.
Node$1.prototype.cut = function cut (from, to) {
  if (from == 0 && to == this.content.size) { return this }
  return this.copy(this.content.cut(from, to))
};

// :: (number, ?number) → Slice
// Cut out the part of the document between the given positions, and
// return it as a `Slice` object.
Node$1.prototype.slice = function slice (from, to, includeParents) {
    if ( to === void 0 ) to = this.content.size;
    if ( includeParents === void 0 ) includeParents = false;

  if (from == to) { return Slice.empty }

  var $from = this.resolve(from), $to = this.resolve(to);
  var depth = includeParents ? 0 : $from.sharedDepth(to);
  var start = $from.start(depth), node = $from.node(depth);
  var content = node.content.cut($from.pos - start, $to.pos - start);
  return new Slice(content, $from.depth - depth, $to.depth - depth)
};

// :: (number, number, Slice) → Node
// Replace the part of the document between the given positions with
// the given slice. The slice must 'fit', meaning its open sides
// must be able to connect to the surrounding content, and its
// content nodes must be valid children for the node they are placed
// into. If any of this is violated, an error of type
// [`ReplaceError`](#model.ReplaceError) is thrown.
Node$1.prototype.replace = function replace$1 (from, to, slice) {
  return replace(this.resolve(from), this.resolve(to), slice)
};

// :: (number) → ?Node
// Find the node directly after the given position.
Node$1.prototype.nodeAt = function nodeAt (pos) {
  for (var node = this;;) {
    var ref = node.content.findIndex(pos);
      var index = ref.index;
      var offset = ref.offset;
    node = node.maybeChild(index);
    if (!node) { return null }
    if (offset == pos || node.isText) { return node }
    pos -= offset + 1;
  }
};

// :: (number) → {node: ?Node, index: number, offset: number}
// Find the (direct) child node after the given offset, if any,
// and return it along with its index and offset relative to this
// node.
Node$1.prototype.childAfter = function childAfter (pos) {
  var ref = this.content.findIndex(pos);
    var index = ref.index;
    var offset = ref.offset;
  return {node: this.content.maybeChild(index), index: index, offset: offset}
};

// :: (number) → {node: ?Node, index: number, offset: number}
// Find the (direct) child node before the given offset, if any,
// and return it along with its index and offset relative to this
// node.
Node$1.prototype.childBefore = function childBefore (pos) {
  if (pos == 0) { return {node: null, index: 0, offset: 0} }
  var ref = this.content.findIndex(pos);
    var index = ref.index;
    var offset = ref.offset;
  if (offset < pos) { return {node: this.content.child(index), index: index, offset: offset} }
  var node = this.content.child(index - 1);
  return {node: node, index: index - 1, offset: offset - node.nodeSize}
};

// :: (number) → ResolvedPos
// Resolve the given position in the document, returning an
// [object](#model.ResolvedPos) with information about its context.
Node$1.prototype.resolve = function resolve (pos) { return ResolvedPos.resolveCached(this, pos) };

Node$1.prototype.resolveNoCache = function resolveNoCache (pos) { return ResolvedPos.resolve(this, pos) };

// :: (number, number, MarkType) → bool
// Test whether a mark of the given type occurs in this document
// between the two given positions.
Node$1.prototype.rangeHasMark = function rangeHasMark (from, to, type) {
  var found = false;
  if (to > from) { this.nodesBetween(from, to, function (node) {
    if (type.isInSet(node.marks)) { found = true; }
    return !found
  }); }
  return found
};

// :: bool
// True when this is a block (non-inline node)
prototypeAccessors$3.isBlock.get = function () { return this.type.isBlock };

// :: bool
// True when this is a textblock node, a block node with inline
// content.
prototypeAccessors$3.isTextblock.get = function () { return this.type.isTextblock };

// :: bool
// True when this node allows inline content.
prototypeAccessors$3.inlineContent.get = function () { return this.type.inlineContent };

// :: bool
// True when this is an inline node (a text node or a node that can
// appear among text).
prototypeAccessors$3.isInline.get = function () { return this.type.isInline };

// :: bool
// True when this is a text node.
prototypeAccessors$3.isText.get = function () { return this.type.isText };

// :: bool
// True when this is a leaf node.
prototypeAccessors$3.isLeaf.get = function () { return this.type.isLeaf };

// :: bool
// True when this is an atom, i.e. when it does not have directly
// editable content. This is usually the same as `isLeaf`, but can
// be configured with the [`atom` property](#model.NodeSpec.atom) on
// a node's spec (typically used when the node is displayed as an
// uneditable [node view](#view.NodeView)).
prototypeAccessors$3.isAtom.get = function () { return this.type.isAtom };

// :: () → string
// Return a string representation of this node for debugging
// purposes.
Node$1.prototype.toString = function toString () {
  if (this.type.spec.toDebugString) { return this.type.spec.toDebugString(this) }
  var name = this.type.name;
  if (this.content.size)
    { name += "(" + this.content.toStringInner() + ")"; }
  return wrapMarks(this.marks, name)
};

// :: (number) → ContentMatch
// Get the content match in this node at the given index.
Node$1.prototype.contentMatchAt = function contentMatchAt (index) {
  var match = this.type.contentMatch.matchFragment(this.content, 0, index);
  if (!match) { throw new Error("Called contentMatchAt on a node with invalid content") }
  return match
};

// :: (number, number, ?Fragment, ?number, ?number) → bool
// Test whether replacing the range between `from` and `to` (by
// child index) with the given replacement fragment (which defaults
// to the empty fragment) would leave the node's content valid. You
// can optionally pass `start` and `end` indices into the
// replacement fragment.
Node$1.prototype.canReplace = function canReplace (from, to, replacement, start, end) {
    if ( replacement === void 0 ) replacement = Fragment.empty;
    if ( start === void 0 ) start = 0;
    if ( end === void 0 ) end = replacement.childCount;

  var one = this.contentMatchAt(from).matchFragment(replacement, start, end);
  var two = one && one.matchFragment(this.content, to);
  if (!two || !two.validEnd) { return false }
  for (var i = start; i < end; i++) { if (!this.type.allowsMarks(replacement.child(i).marks)) { return false } }
  return true
};

// :: (number, number, NodeType, ?[Mark]) → bool
// Test whether replacing the range `from` to `to` (by index) with a
// node of the given type would leave the node's content valid.
Node$1.prototype.canReplaceWith = function canReplaceWith (from, to, type, marks) {
  if (marks && !this.type.allowsMarks(marks)) { return false }
  var start = this.contentMatchAt(from).matchType(type);
  var end = start && start.matchFragment(this.content, to);
  return end ? end.validEnd : false
};

// :: (Node) → bool
// Test whether the given node's content could be appended to this
// node. If that node is empty, this will only return true if there
// is at least one node type that can appear in both nodes (to avoid
// merging completely incompatible nodes).
Node$1.prototype.canAppend = function canAppend (other) {
  if (other.content.size) { return this.canReplace(this.childCount, this.childCount, other.content) }
  else { return this.type.compatibleContent(other.type) }
};

// Unused. Left for backwards compatibility.
Node$1.prototype.defaultContentType = function defaultContentType (at) {
  return this.contentMatchAt(at).defaultType
};

// :: ()
// Check whether this node and its descendants conform to the
// schema, and raise error when they do not.
Node$1.prototype.check = function check () {
  if (!this.type.validContent(this.content))
    { throw new RangeError(("Invalid content for node " + (this.type.name) + ": " + (this.content.toString().slice(0, 50)))) }
  this.content.forEach(function (node) { return node.check(); });
};

// :: () → Object
// Return a JSON-serializeable representation of this node.
Node$1.prototype.toJSON = function toJSON () {
  var obj = {type: this.type.name};
  for (var _ in this.attrs) {
    obj.attrs = this.attrs;
    break
  }
  if (this.content.size)
    { obj.content = this.content.toJSON(); }
  if (this.marks.length)
    { obj.marks = this.marks.map(function (n) { return n.toJSON(); }); }
  return obj
};

// :: (Schema, Object) → Node
// Deserialize a node from its JSON representation.
Node$1.fromJSON = function fromJSON (schema, json) {
  if (!json) { throw new RangeError("Invalid input for Node.fromJSON") }
  var marks = null;
  if (json.marks) {
    if (!Array.isArray(json.marks)) { throw new RangeError("Invalid mark data for Node.fromJSON") }
    marks = json.marks.map(schema.markFromJSON);
  }
  if (json.type == "text") {
    if (typeof json.text != "string") { throw new RangeError("Invalid text node in JSON") }
    return schema.text(json.text, marks)
  }
  var content = Fragment.fromJSON(schema, json.content);
  return schema.nodeType(json.type).create(json.attrs, content, marks)
};

Object.defineProperties( Node$1.prototype, prototypeAccessors$3 );

var TextNode = /*@__PURE__*/(function (Node) {
  function TextNode(type, attrs, content, marks) {
    Node.call(this, type, attrs, null, marks);

    if (!content) { throw new RangeError("Empty text nodes are not allowed") }

    this.text = content;
  }

  if ( Node ) TextNode.__proto__ = Node;
  TextNode.prototype = Object.create( Node && Node.prototype );
  TextNode.prototype.constructor = TextNode;

  var prototypeAccessors$1 = { textContent: { configurable: true },nodeSize: { configurable: true } };

  TextNode.prototype.toString = function toString () {
    if (this.type.spec.toDebugString) { return this.type.spec.toDebugString(this) }
    return wrapMarks(this.marks, JSON.stringify(this.text))
  };

  prototypeAccessors$1.textContent.get = function () { return this.text };

  TextNode.prototype.textBetween = function textBetween (from, to) { return this.text.slice(from, to) };

  prototypeAccessors$1.nodeSize.get = function () { return this.text.length };

  TextNode.prototype.mark = function mark (marks) {
    return marks == this.marks ? this : new TextNode(this.type, this.attrs, this.text, marks)
  };

  TextNode.prototype.withText = function withText (text) {
    if (text == this.text) { return this }
    return new TextNode(this.type, this.attrs, text, this.marks)
  };

  TextNode.prototype.cut = function cut (from, to) {
    if ( from === void 0 ) from = 0;
    if ( to === void 0 ) to = this.text.length;

    if (from == 0 && to == this.text.length) { return this }
    return this.withText(this.text.slice(from, to))
  };

  TextNode.prototype.eq = function eq (other) {
    return this.sameMarkup(other) && this.text == other.text
  };

  TextNode.prototype.toJSON = function toJSON () {
    var base = Node.prototype.toJSON.call(this);
    base.text = this.text;
    return base
  };

  Object.defineProperties( TextNode.prototype, prototypeAccessors$1 );

  return TextNode;
}(Node$1));

function wrapMarks(marks, str) {
  for (var i = marks.length - 1; i >= 0; i--)
    { str = marks[i].type.name + "(" + str + ")"; }
  return str
}

// ::- Instances of this class represent a match state of a node
// type's [content expression](#model.NodeSpec.content), and can be
// used to find out whether further content matches here, and whether
// a given position is a valid end of the node.
var ContentMatch = function ContentMatch(validEnd) {
  // :: bool
  // True when this match state represents a valid end of the node.
  this.validEnd = validEnd;
  this.next = [];
  this.wrapCache = [];
};

var prototypeAccessors$4 = { inlineContent: { configurable: true },defaultType: { configurable: true },edgeCount: { configurable: true } };

ContentMatch.parse = function parse (string, nodeTypes) {
  var stream = new TokenStream(string, nodeTypes);
  if (stream.next == null) { return ContentMatch.empty }
  var expr = parseExpr(stream);
  if (stream.next) { stream.err("Unexpected trailing text"); }
  var match = dfa(nfa(expr));
  checkForDeadEnds(match, stream);
  return match
};

// :: (NodeType) → ?ContentMatch
// Match a node type, returning a match after that node if
// successful.
ContentMatch.prototype.matchType = function matchType (type) {
  for (var i = 0; i < this.next.length; i += 2)
    { if (this.next[i] == type) { return this.next[i + 1] } }
  return null
};

// :: (Fragment, ?number, ?number) → ?ContentMatch
// Try to match a fragment. Returns the resulting match when
// successful.
ContentMatch.prototype.matchFragment = function matchFragment (frag, start, end) {
    if ( start === void 0 ) start = 0;
    if ( end === void 0 ) end = frag.childCount;

  var cur = this;
  for (var i = start; cur && i < end; i++)
    { cur = cur.matchType(frag.child(i).type); }
  return cur
};

prototypeAccessors$4.inlineContent.get = function () {
  var first = this.next[0];
  return first ? first.isInline : false
};

// :: ?NodeType
// Get the first matching node type at this match position that can
// be generated.
prototypeAccessors$4.defaultType.get = function () {
  for (var i = 0; i < this.next.length; i += 2) {
    var type = this.next[i];
    if (!(type.isText || type.hasRequiredAttrs())) { return type }
  }
};

ContentMatch.prototype.compatible = function compatible (other) {
  for (var i = 0; i < this.next.length; i += 2)
    { for (var j = 0; j < other.next.length; j += 2)
      { if (this.next[i] == other.next[j]) { return true } } }
  return false
};

// :: (Fragment, bool, ?number) → ?Fragment
// Try to match the given fragment, and if that fails, see if it can
// be made to match by inserting nodes in front of it. When
// successful, return a fragment of inserted nodes (which may be
// empty if nothing had to be inserted). When `toEnd` is true, only
// return a fragment if the resulting match goes to the end of the
// content expression.
ContentMatch.prototype.fillBefore = function fillBefore (after, toEnd, startIndex) {
    if ( toEnd === void 0 ) toEnd = false;
    if ( startIndex === void 0 ) startIndex = 0;

  var seen = [this];
  function search(match, types) {
    var finished = match.matchFragment(after, startIndex);
    if (finished && (!toEnd || finished.validEnd))
      { return Fragment.from(types.map(function (tp) { return tp.createAndFill(); })) }

    for (var i = 0; i < match.next.length; i += 2) {
      var type = match.next[i], next = match.next[i + 1];
      if (!(type.isText || type.hasRequiredAttrs()) && seen.indexOf(next) == -1) {
        seen.push(next);
        var found = search(next, types.concat(type));
        if (found) { return found }
      }
    }
  }

  return search(this, [])
};

// :: (NodeType) → ?[NodeType]
// Find a set of wrapping node types that would allow a node of the
// given type to appear at this position. The result may be empty
// (when it fits directly) and will be null when no such wrapping
// exists.
ContentMatch.prototype.findWrapping = function findWrapping (target) {
  for (var i = 0; i < this.wrapCache.length; i += 2)
    { if (this.wrapCache[i] == target) { return this.wrapCache[i + 1] } }
  var computed = this.computeWrapping(target);
  this.wrapCache.push(target, computed);
  return computed
};

ContentMatch.prototype.computeWrapping = function computeWrapping (target) {
  var seen = Object.create(null), active = [{match: this, type: null, via: null}];
  while (active.length) {
    var current = active.shift(), match = current.match;
    if (match.matchType(target)) {
      var result = [];
      for (var obj = current; obj.type; obj = obj.via)
        { result.push(obj.type); }
      return result.reverse()
    }
    for (var i = 0; i < match.next.length; i += 2) {
      var type = match.next[i];
      if (!type.isLeaf && !type.hasRequiredAttrs() && !(type.name in seen) && (!current.type || match.next[i + 1].validEnd)) {
        active.push({match: type.contentMatch, type: type, via: current});
        seen[type.name] = true;
      }
    }
  }
};

// :: number
// The number of outgoing edges this node has in the finite
// automaton that describes the content expression.
prototypeAccessors$4.edgeCount.get = function () {
  return this.next.length >> 1
};

// :: (number) → {type: NodeType, next: ContentMatch}
// Get the _n_​th outgoing edge from this node in the finite
// automaton that describes the content expression.
ContentMatch.prototype.edge = function edge (n) {
  var i = n << 1;
  if (i >= this.next.length) { throw new RangeError(("There's no " + n + "th edge in this content match")) }
  return {type: this.next[i], next: this.next[i + 1]}
};

ContentMatch.prototype.toString = function toString () {
  var seen = [];
  function scan(m) {
    seen.push(m);
    for (var i = 1; i < m.next.length; i += 2)
      { if (seen.indexOf(m.next[i]) == -1) { scan(m.next[i]); } }
  }
  scan(this);
  return seen.map(function (m, i) {
    var out = i + (m.validEnd ? "*" : " ") + " ";
    for (var i$1 = 0; i$1 < m.next.length; i$1 += 2)
      { out += (i$1 ? ", " : "") + m.next[i$1].name + "->" + seen.indexOf(m.next[i$1 + 1]); }
    return out
  }).join("\n")
};

Object.defineProperties( ContentMatch.prototype, prototypeAccessors$4 );

ContentMatch.empty = new ContentMatch(true);

var TokenStream = function TokenStream(string, nodeTypes) {
  this.string = string;
  this.nodeTypes = nodeTypes;
  this.inline = null;
  this.pos = 0;
  this.tokens = string.split(/\s*(?=\b|\W|$)/);
  if (this.tokens[this.tokens.length - 1] == "") { this.tokens.pop(); }
  if (this.tokens[0] == "") { this.tokens.unshift(); }
};

var prototypeAccessors$1$2 = { next: { configurable: true } };

prototypeAccessors$1$2.next.get = function () { return this.tokens[this.pos] };

TokenStream.prototype.eat = function eat (tok) { return this.next == tok && (this.pos++ || true) };

TokenStream.prototype.err = function err (str) { throw new SyntaxError(str + " (in content expression '" + this.string + "')") };

Object.defineProperties( TokenStream.prototype, prototypeAccessors$1$2 );

function parseExpr(stream) {
  var exprs = [];
  do { exprs.push(parseExprSeq(stream)); }
  while (stream.eat("|"))
  return exprs.length == 1 ? exprs[0] : {type: "choice", exprs: exprs}
}

function parseExprSeq(stream) {
  var exprs = [];
  do { exprs.push(parseExprSubscript(stream)); }
  while (stream.next && stream.next != ")" && stream.next != "|")
  return exprs.length == 1 ? exprs[0] : {type: "seq", exprs: exprs}
}

function parseExprSubscript(stream) {
  var expr = parseExprAtom(stream);
  for (;;) {
    if (stream.eat("+"))
      { expr = {type: "plus", expr: expr}; }
    else if (stream.eat("*"))
      { expr = {type: "star", expr: expr}; }
    else if (stream.eat("?"))
      { expr = {type: "opt", expr: expr}; }
    else if (stream.eat("{"))
      { expr = parseExprRange(stream, expr); }
    else { break }
  }
  return expr
}

function parseNum(stream) {
  if (/\D/.test(stream.next)) { stream.err("Expected number, got '" + stream.next + "'"); }
  var result = Number(stream.next);
  stream.pos++;
  return result
}

function parseExprRange(stream, expr) {
  var min = parseNum(stream), max = min;
  if (stream.eat(",")) {
    if (stream.next != "}") { max = parseNum(stream); }
    else { max = -1; }
  }
  if (!stream.eat("}")) { stream.err("Unclosed braced range"); }
  return {type: "range", min: min, max: max, expr: expr}
}

function resolveName(stream, name) {
  var types = stream.nodeTypes, type = types[name];
  if (type) { return [type] }
  var result = [];
  for (var typeName in types) {
    var type$1 = types[typeName];
    if (type$1.groups.indexOf(name) > -1) { result.push(type$1); }
  }
  if (result.length == 0) { stream.err("No node type or group '" + name + "' found"); }
  return result
}

function parseExprAtom(stream) {
  if (stream.eat("(")) {
    var expr = parseExpr(stream);
    if (!stream.eat(")")) { stream.err("Missing closing paren"); }
    return expr
  } else if (!/\W/.test(stream.next)) {
    var exprs = resolveName(stream, stream.next).map(function (type) {
      if (stream.inline == null) { stream.inline = type.isInline; }
      else if (stream.inline != type.isInline) { stream.err("Mixing inline and block content"); }
      return {type: "name", value: type}
    });
    stream.pos++;
    return exprs.length == 1 ? exprs[0] : {type: "choice", exprs: exprs}
  } else {
    stream.err("Unexpected token '" + stream.next + "'");
  }
}

// The code below helps compile a regular-expression-like language
// into a deterministic finite automaton. For a good introduction to
// these concepts, see https://swtch.com/~rsc/regexp/regexp1.html

// : (Object) → [[{term: ?any, to: number}]]
// Construct an NFA from an expression as returned by the parser. The
// NFA is represented as an array of states, which are themselves
// arrays of edges, which are `{term, to}` objects. The first state is
// the entry state and the last node is the success state.
//
// Note that unlike typical NFAs, the edge ordering in this one is
// significant, in that it is used to contruct filler content when
// necessary.
function nfa(expr) {
  var nfa = [[]];
  connect(compile(expr, 0), node());
  return nfa

  function node() { return nfa.push([]) - 1 }
  function edge(from, to, term) {
    var edge = {term: term, to: to};
    nfa[from].push(edge);
    return edge
  }
  function connect(edges, to) { edges.forEach(function (edge) { return edge.to = to; }); }

  function compile(expr, from) {
    if (expr.type == "choice") {
      return expr.exprs.reduce(function (out, expr) { return out.concat(compile(expr, from)); }, [])
    } else if (expr.type == "seq") {
      for (var i = 0;; i++) {
        var next = compile(expr.exprs[i], from);
        if (i == expr.exprs.length - 1) { return next }
        connect(next, from = node());
      }
    } else if (expr.type == "star") {
      var loop = node();
      edge(from, loop);
      connect(compile(expr.expr, loop), loop);
      return [edge(loop)]
    } else if (expr.type == "plus") {
      var loop$1 = node();
      connect(compile(expr.expr, from), loop$1);
      connect(compile(expr.expr, loop$1), loop$1);
      return [edge(loop$1)]
    } else if (expr.type == "opt") {
      return [edge(from)].concat(compile(expr.expr, from))
    } else if (expr.type == "range") {
      var cur = from;
      for (var i$1 = 0; i$1 < expr.min; i$1++) {
        var next$1 = node();
        connect(compile(expr.expr, cur), next$1);
        cur = next$1;
      }
      if (expr.max == -1) {
        connect(compile(expr.expr, cur), cur);
      } else {
        for (var i$2 = expr.min; i$2 < expr.max; i$2++) {
          var next$2 = node();
          edge(cur, next$2);
          connect(compile(expr.expr, cur), next$2);
          cur = next$2;
        }
      }
      return [edge(cur)]
    } else if (expr.type == "name") {
      return [edge(from, null, expr.value)]
    }
  }
}

function cmp(a, b) { return b - a }

// Get the set of nodes reachable by null edges from `node`. Omit
// nodes with only a single null-out-edge, since they may lead to
// needless duplicated nodes.
function nullFrom(nfa, node) {
  var result = [];
  scan(node);
  return result.sort(cmp)

  function scan(node) {
    var edges = nfa[node];
    if (edges.length == 1 && !edges[0].term) { return scan(edges[0].to) }
    result.push(node);
    for (var i = 0; i < edges.length; i++) {
      var ref = edges[i];
      var term = ref.term;
      var to = ref.to;
      if (!term && result.indexOf(to) == -1) { scan(to); }
    }
  }
}

// : ([[{term: ?any, to: number}]]) → ContentMatch
// Compiles an NFA as produced by `nfa` into a DFA, modeled as a set
// of state objects (`ContentMatch` instances) with transitions
// between them.
function dfa(nfa) {
  var labeled = Object.create(null);
  return explore(nullFrom(nfa, 0))

  function explore(states) {
    var out = [];
    states.forEach(function (node) {
      nfa[node].forEach(function (ref) {
        var term = ref.term;
        var to = ref.to;

        if (!term) { return }
        var known = out.indexOf(term), set = known > -1 && out[known + 1];
        nullFrom(nfa, to).forEach(function (node) {
          if (!set) { out.push(term, set = []); }
          if (set.indexOf(node) == -1) { set.push(node); }
        });
      });
    });
    var state = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa.length - 1) > -1);
    for (var i = 0; i < out.length; i += 2) {
      var states$1 = out[i + 1].sort(cmp);
      state.next.push(out[i], labeled[states$1.join(",")] || explore(states$1));
    }
    return state
  }
}

function checkForDeadEnds(match, stream) {
  for (var i = 0, work = [match]; i < work.length; i++) {
    var state = work[i], dead = !state.validEnd, nodes = [];
    for (var j = 0; j < state.next.length; j += 2) {
      var node = state.next[j], next = state.next[j + 1];
      nodes.push(node.name);
      if (dead && !(node.isText || node.hasRequiredAttrs())) { dead = false; }
      if (work.indexOf(next) == -1) { work.push(next); }
    }
    if (dead) { stream.err("Only non-generatable nodes (" + nodes.join(", ") + ") in a required position"); }
  }
}

// For node types where all attrs have a default value (or which don't
// have any attributes), build up a single reusable default attribute
// object, and use it for all nodes that don't specify specific
// attributes.
function defaultAttrs(attrs) {
  var defaults = Object.create(null);
  for (var attrName in attrs) {
    var attr = attrs[attrName];
    if (!attr.hasDefault) { return null }
    defaults[attrName] = attr.default;
  }
  return defaults
}

function computeAttrs(attrs, value) {
  var built = Object.create(null);
  for (var name in attrs) {
    var given = value && value[name];
    if (given === undefined) {
      var attr = attrs[name];
      if (attr.hasDefault) { given = attr.default; }
      else { throw new RangeError("No value supplied for attribute " + name) }
    }
    built[name] = given;
  }
  return built
}

function initAttrs(attrs) {
  var result = Object.create(null);
  if (attrs) { for (var name in attrs) { result[name] = new Attribute(attrs[name]); } }
  return result
}

// ::- Node types are objects allocated once per `Schema` and used to
// [tag](#model.Node.type) `Node` instances. They contain information
// about the node type, such as its name and what kind of node it
// represents.
var NodeType = function NodeType(name, schema, spec) {
  // :: string
  // The name the node type has in this schema.
  this.name = name;

  // :: Schema
  // A link back to the `Schema` the node type belongs to.
  this.schema = schema;

  // :: NodeSpec
  // The spec that this type is based on
  this.spec = spec;

  this.groups = spec.group ? spec.group.split(" ") : [];
  this.attrs = initAttrs(spec.attrs);

  this.defaultAttrs = defaultAttrs(this.attrs);

  // :: ContentMatch
  // The starting match of the node type's content expression.
  this.contentMatch = null;

  // : ?[MarkType]
  // The set of marks allowed in this node. `null` means all marks
  // are allowed.
  this.markSet = null;

  // :: bool
  // True if this node type has inline content.
  this.inlineContent = null;

  // :: bool
  // True if this is a block type
  this.isBlock = !(spec.inline || name == "text");

  // :: bool
  // True if this is the text node type.
  this.isText = name == "text";
};

var prototypeAccessors$5 = { isInline: { configurable: true },isTextblock: { configurable: true },isLeaf: { configurable: true },isAtom: { configurable: true } };

// :: bool
// True if this is an inline type.
prototypeAccessors$5.isInline.get = function () { return !this.isBlock };

// :: bool
// True if this is a textblock type, a block that contains inline
// content.
prototypeAccessors$5.isTextblock.get = function () { return this.isBlock && this.inlineContent };

// :: bool
// True for node types that allow no content.
prototypeAccessors$5.isLeaf.get = function () { return this.contentMatch == ContentMatch.empty };

// :: bool
// True when this node is an atom, i.e. when it does not have
// directly editable content.
prototypeAccessors$5.isAtom.get = function () { return this.isLeaf || this.spec.atom };

NodeType.prototype.hasRequiredAttrs = function hasRequiredAttrs (ignore) {
  for (var n in this.attrs)
    { if (this.attrs[n].isRequired && (!ignore || !(n in ignore))) { return true } }
  return false
};

NodeType.prototype.compatibleContent = function compatibleContent (other) {
  return this == other || this.contentMatch.compatible(other.contentMatch)
};

NodeType.prototype.computeAttrs = function computeAttrs$1 (attrs) {
  if (!attrs && this.defaultAttrs) { return this.defaultAttrs }
  else { return computeAttrs(this.attrs, attrs) }
};

// :: (?Object, ?union<Fragment, Node, [Node]>, ?[Mark]) → Node
// Create a `Node` of this type. The given attributes are
// checked and defaulted (you can pass `null` to use the type's
// defaults entirely, if no required attributes exist). `content`
// may be a `Fragment`, a node, an array of nodes, or
// `null`. Similarly `marks` may be `null` to default to the empty
// set of marks.
NodeType.prototype.create = function create (attrs, content, marks) {
  if (this.isText) { throw new Error("NodeType.create can't construct text nodes") }
  return new Node$1(this, this.computeAttrs(attrs), Fragment.from(content), Mark.setFrom(marks))
};

// :: (?Object, ?union<Fragment, Node, [Node]>, ?[Mark]) → Node
// Like [`create`](#model.NodeType.create), but check the given content
// against the node type's content restrictions, and throw an error
// if it doesn't match.
NodeType.prototype.createChecked = function createChecked (attrs, content, marks) {
  content = Fragment.from(content);
  if (!this.validContent(content))
    { throw new RangeError("Invalid content for node " + this.name) }
  return new Node$1(this, this.computeAttrs(attrs), content, Mark.setFrom(marks))
};

// :: (?Object, ?union<Fragment, Node, [Node]>, ?[Mark]) → ?Node
// Like [`create`](#model.NodeType.create), but see if it is necessary to
// add nodes to the start or end of the given fragment to make it
// fit the node. If no fitting wrapping can be found, return null.
// Note that, due to the fact that required nodes can always be
// created, this will always succeed if you pass null or
// `Fragment.empty` as content.
NodeType.prototype.createAndFill = function createAndFill (attrs, content, marks) {
  attrs = this.computeAttrs(attrs);
  content = Fragment.from(content);
  if (content.size) {
    var before = this.contentMatch.fillBefore(content);
    if (!before) { return null }
    content = before.append(content);
  }
  var after = this.contentMatch.matchFragment(content).fillBefore(Fragment.empty, true);
  if (!after) { return null }
  return new Node$1(this, attrs, content.append(after), Mark.setFrom(marks))
};

// :: (Fragment) → bool
// Returns true if the given fragment is valid content for this node
// type with the given attributes.
NodeType.prototype.validContent = function validContent (content) {
  var result = this.contentMatch.matchFragment(content);
  if (!result || !result.validEnd) { return false }
  for (var i = 0; i < content.childCount; i++)
    { if (!this.allowsMarks(content.child(i).marks)) { return false } }
  return true
};

// :: (MarkType) → bool
// Check whether the given mark type is allowed in this node.
NodeType.prototype.allowsMarkType = function allowsMarkType (markType) {
  return this.markSet == null || this.markSet.indexOf(markType) > -1
};

// :: ([Mark]) → bool
// Test whether the given set of marks are allowed in this node.
NodeType.prototype.allowsMarks = function allowsMarks (marks) {
  if (this.markSet == null) { return true }
  for (var i = 0; i < marks.length; i++) { if (!this.allowsMarkType(marks[i].type)) { return false } }
  return true
};

// :: ([Mark]) → [Mark]
// Removes the marks that are not allowed in this node from the given set.
NodeType.prototype.allowedMarks = function allowedMarks (marks) {
  if (this.markSet == null) { return marks }
  var copy;
  for (var i = 0; i < marks.length; i++) {
    if (!this.allowsMarkType(marks[i].type)) {
      if (!copy) { copy = marks.slice(0, i); }
    } else if (copy) {
      copy.push(marks[i]);
    }
  }
  return !copy ? marks : copy.length ? copy : Mark.empty
};

NodeType.compile = function compile (nodes, schema) {
  var result = Object.create(null);
  nodes.forEach(function (name, spec) { return result[name] = new NodeType(name, schema, spec); });

  var topType = schema.spec.topNode || "doc";
  if (!result[topType]) { throw new RangeError("Schema is missing its top node type ('" + topType + "')") }
  if (!result.text) { throw new RangeError("Every schema needs a 'text' type") }
  for (var _ in result.text.attrs) { throw new RangeError("The text node type should not have attributes") }

  return result
};

Object.defineProperties( NodeType.prototype, prototypeAccessors$5 );

// Attribute descriptors

var Attribute = function Attribute(options) {
  this.hasDefault = Object.prototype.hasOwnProperty.call(options, "default");
  this.default = options.default;
};

var prototypeAccessors$1$3 = { isRequired: { configurable: true } };

prototypeAccessors$1$3.isRequired.get = function () {
  return !this.hasDefault
};

Object.defineProperties( Attribute.prototype, prototypeAccessors$1$3 );

// Marks

// ::- Like nodes, marks (which are associated with nodes to signify
// things like emphasis or being part of a link) are
// [tagged](#model.Mark.type) with type objects, which are
// instantiated once per `Schema`.
var MarkType = function MarkType(name, rank, schema, spec) {
  // :: string
  // The name of the mark type.
  this.name = name;

  // :: Schema
  // The schema that this mark type instance is part of.
  this.schema = schema;

  // :: MarkSpec
  // The spec on which the type is based.
  this.spec = spec;

  this.attrs = initAttrs(spec.attrs);

  this.rank = rank;
  this.excluded = null;
  var defaults = defaultAttrs(this.attrs);
  this.instance = defaults && new Mark(this, defaults);
};

// :: (?Object) → Mark
// Create a mark of this type. `attrs` may be `null` or an object
// containing only some of the mark's attributes. The others, if
// they have defaults, will be added.
MarkType.prototype.create = function create (attrs) {
  if (!attrs && this.instance) { return this.instance }
  return new Mark(this, computeAttrs(this.attrs, attrs))
};

MarkType.compile = function compile (marks, schema) {
  var result = Object.create(null), rank = 0;
  marks.forEach(function (name, spec) { return result[name] = new MarkType(name, rank++, schema, spec); });
  return result
};

// :: ([Mark]) → [Mark]
// When there is a mark of this type in the given set, a new set
// without it is returned. Otherwise, the input set is returned.
MarkType.prototype.removeFromSet = function removeFromSet (set) {
  for (var i = 0; i < set.length; i++)
    { if (set[i].type == this)
      { return set.slice(0, i).concat(set.slice(i + 1)) } }
  return set
};

// :: ([Mark]) → ?Mark
// Tests whether there is a mark of this type in the given set.
MarkType.prototype.isInSet = function isInSet (set) {
  for (var i = 0; i < set.length; i++)
    { if (set[i].type == this) { return set[i] } }
};

// :: (MarkType) → bool
// Queries whether a given mark type is
// [excluded](#model.MarkSpec.excludes) by this one.
MarkType.prototype.excludes = function excludes (other) {
  return this.excluded.indexOf(other) > -1
};

// SchemaSpec:: interface
// An object describing a schema, as passed to the [`Schema`](#model.Schema)
// constructor.
//
//   nodes:: union<Object<NodeSpec>, OrderedMap<NodeSpec>>
//   The node types in this schema. Maps names to
//   [`NodeSpec`](#model.NodeSpec) objects that describe the node type
//   associated with that name. Their order is significant—it
//   determines which [parse rules](#model.NodeSpec.parseDOM) take
//   precedence by default, and which nodes come first in a given
//   [group](#model.NodeSpec.group).
//
//   marks:: ?union<Object<MarkSpec>, OrderedMap<MarkSpec>>
//   The mark types that exist in this schema. The order in which they
//   are provided determines the order in which [mark
//   sets](#model.Mark.addToSet) are sorted and in which [parse
//   rules](#model.MarkSpec.parseDOM) are tried.
//
//   topNode:: ?string
//   The name of the default top-level node for the schema. Defaults
//   to `"doc"`.

// NodeSpec:: interface
//
//   content:: ?string
//   The content expression for this node, as described in the [schema
//   guide](/docs/guide/#schema.content_expressions). When not given,
//   the node does not allow any content.
//
//   marks:: ?string
//   The marks that are allowed inside of this node. May be a
//   space-separated string referring to mark names or groups, `"_"`
//   to explicitly allow all marks, or `""` to disallow marks. When
//   not given, nodes with inline content default to allowing all
//   marks, other nodes default to not allowing marks.
//
//   group:: ?string
//   The group or space-separated groups to which this node belongs,
//   which can be referred to in the content expressions for the
//   schema.
//
//   inline:: ?bool
//   Should be set to true for inline nodes. (Implied for text nodes.)
//
//   atom:: ?bool
//   Can be set to true to indicate that, though this isn't a [leaf
//   node](#model.NodeType.isLeaf), it doesn't have directly editable
//   content and should be treated as a single unit in the view.
//
//   attrs:: ?Object<AttributeSpec>
//   The attributes that nodes of this type get.
//
//   selectable:: ?bool
//   Controls whether nodes of this type can be selected as a [node
//   selection](#state.NodeSelection). Defaults to true for non-text
//   nodes.
//
//   draggable:: ?bool
//   Determines whether nodes of this type can be dragged without
//   being selected. Defaults to false.
//
//   code:: ?bool
//   Can be used to indicate that this node contains code, which
//   causes some commands to behave differently.
//
//   defining:: ?bool
//   Determines whether this node is considered an important parent
//   node during replace operations (such as paste). Non-defining (the
//   default) nodes get dropped when their entire content is replaced,
//   whereas defining nodes persist and wrap the inserted content.
//   Likewise, in _inserted_ content the defining parents of the
//   content are preserved when possible. Typically,
//   non-default-paragraph textblock types, and possibly list items,
//   are marked as defining.
//
//   isolating:: ?bool
//   When enabled (default is false), the sides of nodes of this type
//   count as boundaries that regular editing operations, like
//   backspacing or lifting, won't cross. An example of a node that
//   should probably have this enabled is a table cell.
//
//   toDOM:: ?(node: Node) → DOMOutputSpec
//   Defines the default way a node of this type should be serialized
//   to DOM/HTML (as used by
//   [`DOMSerializer.fromSchema`](#model.DOMSerializer^fromSchema)).
//   Should return a DOM node or an [array
//   structure](#model.DOMOutputSpec) that describes one, with an
//   optional number zero (“hole”) in it to indicate where the node's
//   content should be inserted.
//
//   For text nodes, the default is to create a text DOM node. Though
//   it is possible to create a serializer where text is rendered
//   differently, this is not supported inside the editor, so you
//   shouldn't override that in your text node spec.
//
//   parseDOM:: ?[ParseRule]
//   Associates DOM parser information with this node, which can be
//   used by [`DOMParser.fromSchema`](#model.DOMParser^fromSchema) to
//   automatically derive a parser. The `node` field in the rules is
//   implied (the name of this node will be filled in automatically).
//   If you supply your own parser, you do not need to also specify
//   parsing rules in your schema.
//
//   toDebugString:: ?(node: Node) -> string
//   Defines the default way a node of this type should be serialized
//   to a string representation for debugging (e.g. in error messages).

// MarkSpec:: interface
//
//   attrs:: ?Object<AttributeSpec>
//   The attributes that marks of this type get.
//
//   inclusive:: ?bool
//   Whether this mark should be active when the cursor is positioned
//   at its end (or at its start when that is also the start of the
//   parent node). Defaults to true.
//
//   excludes:: ?string
//   Determines which other marks this mark can coexist with. Should
//   be a space-separated strings naming other marks or groups of marks.
//   When a mark is [added](#model.Mark.addToSet) to a set, all marks
//   that it excludes are removed in the process. If the set contains
//   any mark that excludes the new mark but is not, itself, excluded
//   by the new mark, the mark can not be added an the set. You can
//   use the value `"_"` to indicate that the mark excludes all
//   marks in the schema.
//
//   Defaults to only being exclusive with marks of the same type. You
//   can set it to an empty string (or any string not containing the
//   mark's own name) to allow multiple marks of a given type to
//   coexist (as long as they have different attributes).
//
//   group:: ?string
//   The group or space-separated groups to which this mark belongs.
//
//   spanning:: ?bool
//   Determines whether marks of this type can span multiple adjacent
//   nodes when serialized to DOM/HTML. Defaults to true.
//
//   toDOM:: ?(mark: Mark, inline: bool) → DOMOutputSpec
//   Defines the default way marks of this type should be serialized
//   to DOM/HTML. When the resulting spec contains a hole, that is
//   where the marked content is placed. Otherwise, it is appended to
//   the top node.
//
//   parseDOM:: ?[ParseRule]
//   Associates DOM parser information with this mark (see the
//   corresponding [node spec field](#model.NodeSpec.parseDOM)). The
//   `mark` field in the rules is implied.

// AttributeSpec:: interface
//
// Used to [define](#model.NodeSpec.attrs) attributes on nodes or
// marks.
//
//   default:: ?any
//   The default value for this attribute, to use when no explicit
//   value is provided. Attributes that have no default must be
//   provided whenever a node or mark of a type that has them is
//   created.

// ::- A document schema. Holds [node](#model.NodeType) and [mark
// type](#model.MarkType) objects for the nodes and marks that may
// occur in conforming documents, and provides functionality for
// creating and deserializing such documents.
var Schema = function Schema(spec) {
  // :: SchemaSpec
  // The [spec](#model.SchemaSpec) on which the schema is based,
  // with the added guarantee that its `nodes` and `marks`
  // properties are
  // [`OrderedMap`](https://github.com/marijnh/orderedmap) instances
  // (not raw objects).
  this.spec = {};
  for (var prop in spec) { this.spec[prop] = spec[prop]; }
  this.spec.nodes = orderedmap.from(spec.nodes);
  this.spec.marks = orderedmap.from(spec.marks);

  // :: Object<NodeType>
  // An object mapping the schema's node names to node type objects.
  this.nodes = NodeType.compile(this.spec.nodes, this);

  // :: Object<MarkType>
  // A map from mark names to mark type objects.
  this.marks = MarkType.compile(this.spec.marks, this);

  var contentExprCache = Object.create(null);
  for (var prop$1 in this.nodes) {
    if (prop$1 in this.marks)
      { throw new RangeError(prop$1 + " can not be both a node and a mark") }
    var type = this.nodes[prop$1], contentExpr = type.spec.content || "", markExpr = type.spec.marks;
    type.contentMatch = contentExprCache[contentExpr] ||
      (contentExprCache[contentExpr] = ContentMatch.parse(contentExpr, this.nodes));
    type.inlineContent = type.contentMatch.inlineContent;
    type.markSet = markExpr == "_" ? null :
      markExpr ? gatherMarks(this, markExpr.split(" ")) :
      markExpr == "" || !type.inlineContent ? [] : null;
  }
  for (var prop$2 in this.marks) {
    var type$1 = this.marks[prop$2], excl = type$1.spec.excludes;
    type$1.excluded = excl == null ? [type$1] : excl == "" ? [] : gatherMarks(this, excl.split(" "));
  }

  this.nodeFromJSON = this.nodeFromJSON.bind(this);
  this.markFromJSON = this.markFromJSON.bind(this);

  // :: NodeType
  // The type of the [default top node](#model.SchemaSpec.topNode)
  // for this schema.
  this.topNodeType = this.nodes[this.spec.topNode || "doc"];

  // :: Object
  // An object for storing whatever values modules may want to
  // compute and cache per schema. (If you want to store something
  // in it, try to use property names unlikely to clash.)
  this.cached = Object.create(null);
  this.cached.wrappings = Object.create(null);
};

// :: (union<string, NodeType>, ?Object, ?union<Fragment, Node, [Node]>, ?[Mark]) → Node
// Create a node in this schema. The `type` may be a string or a
// `NodeType` instance. Attributes will be extended
// with defaults, `content` may be a `Fragment`,
// `null`, a `Node`, or an array of nodes.
Schema.prototype.node = function node (type, attrs, content, marks) {
  if (typeof type == "string")
    { type = this.nodeType(type); }
  else if (!(type instanceof NodeType))
    { throw new RangeError("Invalid node type: " + type) }
  else if (type.schema != this)
    { throw new RangeError("Node type from different schema used (" + type.name + ")") }

  return type.createChecked(attrs, content, marks)
};

// :: (string, ?[Mark]) → Node
// Create a text node in the schema. Empty text nodes are not
// allowed.
Schema.prototype.text = function text (text$1, marks) {
  var type = this.nodes.text;
  return new TextNode(type, type.defaultAttrs, text$1, Mark.setFrom(marks))
};

// :: (union<string, MarkType>, ?Object) → Mark
// Create a mark with the given type and attributes.
Schema.prototype.mark = function mark (type, attrs) {
  if (typeof type == "string") { type = this.marks[type]; }
  return type.create(attrs)
};

// :: (Object) → Node
// Deserialize a node from its JSON representation. This method is
// bound.
Schema.prototype.nodeFromJSON = function nodeFromJSON (json) {
  return Node$1.fromJSON(this, json)
};

// :: (Object) → Mark
// Deserialize a mark from its JSON representation. This method is
// bound.
Schema.prototype.markFromJSON = function markFromJSON (json) {
  return Mark.fromJSON(this, json)
};

Schema.prototype.nodeType = function nodeType (name) {
  var found = this.nodes[name];
  if (!found) { throw new RangeError("Unknown node type: " + name) }
  return found
};

function gatherMarks(schema, marks) {
  var found = [];
  for (var i = 0; i < marks.length; i++) {
    var name = marks[i], mark = schema.marks[name], ok = mark;
    if (mark) {
      found.push(mark);
    } else {
      for (var prop in schema.marks) {
        var mark$1 = schema.marks[prop];
        if (name == "_" || (mark$1.spec.group && mark$1.spec.group.split(" ").indexOf(name) > -1))
          { found.push(ok = mark$1); }
      }
    }
    if (!ok) { throw new SyntaxError("Unknown mark type: '" + marks[i] + "'") }
  }
  return found
}

// ParseOptions:: interface
// These are the options recognized by the
// [`parse`](#model.DOMParser.parse) and
// [`parseSlice`](#model.DOMParser.parseSlice) methods.
//
//   preserveWhitespace:: ?union<bool, "full">
//   By default, whitespace is collapsed as per HTML's rules. Pass
//   `true` to preserve whitespace, but normalize newlines to
//   spaces, and `"full"` to preserve whitespace entirely.
//
//   findPositions:: ?[{node: dom.Node, offset: number}]
//   When given, the parser will, beside parsing the content,
//   record the document positions of the given DOM positions. It
//   will do so by writing to the objects, adding a `pos` property
//   that holds the document position. DOM positions that are not
//   in the parsed content will not be written to.
//
//   from:: ?number
//   The child node index to start parsing from.
//
//   to:: ?number
//   The child node index to stop parsing at.
//
//   topNode:: ?Node
//   By default, the content is parsed into the schema's default
//   [top node type](#model.Schema.topNodeType). You can pass this
//   option to use the type and attributes from a different node
//   as the top container.
//
//   topMatch:: ?ContentMatch
//   Provide the starting content match that content parsed into the
//   top node is matched against.
//
//   context:: ?ResolvedPos
//   A set of additional nodes to count as
//   [context](#model.ParseRule.context) when parsing, above the
//   given [top node](#model.ParseOptions.topNode).

// ParseRule:: interface
// A value that describes how to parse a given DOM node or inline
// style as a ProseMirror node or mark.
//
//   tag:: ?string
//   A CSS selector describing the kind of DOM elements to match. A
//   single rule should have _either_ a `tag` or a `style` property.
//
//   namespace:: ?string
//   The namespace to match. This should be used with `tag`.
//   Nodes are only matched when the namespace matches or this property
//   is null.
//
//   style:: ?string
//   A CSS property name to match. When given, this rule matches
//   inline styles that list that property. May also have the form
//   `"property=value"`, in which case the rule only matches if the
//   propery's value exactly matches the given value. (For more
//   complicated filters, use [`getAttrs`](#model.ParseRule.getAttrs)
//   and return false to indicate that the match failed.)
//
//   priority:: ?number
//   Can be used to change the order in which the parse rules in a
//   schema are tried. Those with higher priority come first. Rules
//   without a priority are counted as having priority 50. This
//   property is only meaningful in a schema—when directly
//   constructing a parser, the order of the rule array is used.
//
//   context:: ?string
//   When given, restricts this rule to only match when the current
//   context—the parent nodes into which the content is being
//   parsed—matches this expression. Should contain one or more node
//   names or node group names followed by single or double slashes.
//   For example `"paragraph/"` means the rule only matches when the
//   parent node is a paragraph, `"blockquote/paragraph/"` restricts
//   it to be in a paragraph that is inside a blockquote, and
//   `"section//"` matches any position inside a section—a double
//   slash matches any sequence of ancestor nodes. To allow multiple
//   different contexts, they can be separated by a pipe (`|`)
//   character, as in `"blockquote/|list_item/"`.
//
//   node:: ?string
//   The name of the node type to create when this rule matches. Only
//   valid for rules with a `tag` property, not for style rules. Each
//   rule should have one of a `node`, `mark`, or `ignore` property
//   (except when it appears in a [node](#model.NodeSpec.parseDOM) or
//   [mark spec](#model.MarkSpec.parseDOM), in which case the `node`
//   or `mark` property will be derived from its position).
//
//   mark:: ?string
//   The name of the mark type to wrap the matched content in.
//
//   ignore:: ?bool
//   When true, ignore content that matches this rule.
//
//   skip:: ?bool
//   When true, ignore the node that matches this rule, but do parse
//   its content.
//
//   attrs:: ?Object
//   Attributes for the node or mark created by this rule. When
//   `getAttrs` is provided, it takes precedence.
//
//   getAttrs:: ?(union<dom.Node, string>) → ?union<Object, false>
//   A function used to compute the attributes for the node or mark
//   created by this rule. Can also be used to describe further
//   conditions the DOM element or style must match. When it returns
//   `false`, the rule won't match. When it returns null or undefined,
//   that is interpreted as an empty/default set of attributes.
//
//   Called with a DOM Element for `tag` rules, and with a string (the
//   style's value) for `style` rules.
//
//   contentElement:: ?union<string, (dom.Node) → dom.Node>
//   For `tag` rules that produce non-leaf nodes or marks, by default
//   the content of the DOM element is parsed as content of the mark
//   or node. If the child nodes are in a descendent node, this may be
//   a CSS selector string that the parser must use to find the actual
//   content element, or a function that returns the actual content
//   element to the parser.
//
//   getContent:: ?(dom.Node, schema: Schema) → Fragment
//   Can be used to override the content of a matched node. When
//   present, instead of parsing the node's child nodes, the result of
//   this function is used.
//
//   preserveWhitespace:: ?union<bool, "full">
//   Controls whether whitespace should be preserved when parsing the
//   content inside the matched element. `false` means whitespace may
//   be collapsed, `true` means that whitespace should be preserved
//   but newlines normalized to spaces, and `"full"` means that
//   newlines should also be preserved.

// ::- A DOM parser represents a strategy for parsing DOM content into
// a ProseMirror document conforming to a given schema. Its behavior
// is defined by an array of [rules](#model.ParseRule).
var DOMParser = function DOMParser(schema, rules) {
  var this$1 = this;

  // :: Schema
  // The schema into which the parser parses.
  this.schema = schema;
  // :: [ParseRule]
  // The set of [parse rules](#model.ParseRule) that the parser
  // uses, in order of precedence.
  this.rules = rules;
  this.tags = [];
  this.styles = [];

  rules.forEach(function (rule) {
    if (rule.tag) { this$1.tags.push(rule); }
    else if (rule.style) { this$1.styles.push(rule); }
  });
};

// :: (dom.Node, ?ParseOptions) → Node
// Parse a document from the content of a DOM node.
DOMParser.prototype.parse = function parse (dom, options) {
    if ( options === void 0 ) options = {};

  var context = new ParseContext(this, options, false);
  context.addAll(dom, null, options.from, options.to);
  return context.finish()
};

// :: (dom.Node, ?ParseOptions) → Slice
// Parses the content of the given DOM node, like
// [`parse`](#model.DOMParser.parse), and takes the same set of
// options. But unlike that method, which produces a whole node,
// this one returns a slice that is open at the sides, meaning that
// the schema constraints aren't applied to the start of nodes to
// the left of the input and the end of nodes at the end.
DOMParser.prototype.parseSlice = function parseSlice (dom, options) {
    if ( options === void 0 ) options = {};

  var context = new ParseContext(this, options, true);
  context.addAll(dom, null, options.from, options.to);
  return Slice.maxOpen(context.finish())
};

DOMParser.prototype.matchTag = function matchTag (dom, context) {
  for (var i = 0; i < this.tags.length; i++) {
    var rule = this.tags[i];
    if (matches(dom, rule.tag) &&
        (rule.namespace === undefined || dom.namespaceURI == rule.namespace) &&
        (!rule.context || context.matchesContext(rule.context))) {
      if (rule.getAttrs) {
        var result = rule.getAttrs(dom);
        if (result === false) { continue }
        rule.attrs = result;
      }
      return rule
    }
  }
};

DOMParser.prototype.matchStyle = function matchStyle (prop, value, context) {
  for (var i = 0; i < this.styles.length; i++) {
    var rule = this.styles[i];
    if (rule.style.indexOf(prop) != 0 ||
        rule.context && !context.matchesContext(rule.context) ||
        // Test that the style string either precisely matches the prop,
        // or has an '=' sign after the prop, followed by the given
        // value.
        rule.style.length > prop.length &&
        (rule.style.charCodeAt(prop.length) != 61 || rule.style.slice(prop.length + 1) != value))
      { continue }
    if (rule.getAttrs) {
      var result = rule.getAttrs(value);
      if (result === false) { continue }
      rule.attrs = result;
    }
    return rule
  }
};

// : (Schema) → [ParseRule]
DOMParser.schemaRules = function schemaRules (schema) {
  var result = [];
  function insert(rule) {
    var priority = rule.priority == null ? 50 : rule.priority, i = 0;
    for (; i < result.length; i++) {
      var next = result[i], nextPriority = next.priority == null ? 50 : next.priority;
      if (nextPriority < priority) { break }
    }
    result.splice(i, 0, rule);
  }

  var loop = function ( name ) {
    var rules = schema.marks[name].spec.parseDOM;
    if (rules) { rules.forEach(function (rule) {
      insert(rule = copy(rule));
      rule.mark = name;
    }); }
  };

    for (var name in schema.marks) loop( name );
  var loop$1 = function ( name ) {
    var rules$1 = schema.nodes[name$1].spec.parseDOM;
    if (rules$1) { rules$1.forEach(function (rule) {
      insert(rule = copy(rule));
      rule.node = name$1;
    }); }
  };

    for (var name$1 in schema.nodes) loop$1();
  return result
};

// :: (Schema) → DOMParser
// Construct a DOM parser using the parsing rules listed in a
// schema's [node specs](#model.NodeSpec.parseDOM), reordered by
// [priority](#model.ParseRule.priority).
DOMParser.fromSchema = function fromSchema (schema) {
  return schema.cached.domParser ||
    (schema.cached.domParser = new DOMParser(schema, DOMParser.schemaRules(schema)))
};

// : Object<bool> The block-level tags in HTML5
var blockTags = {
  address: true, article: true, aside: true, blockquote: true, canvas: true,
  dd: true, div: true, dl: true, fieldset: true, figcaption: true, figure: true,
  footer: true, form: true, h1: true, h2: true, h3: true, h4: true, h5: true,
  h6: true, header: true, hgroup: true, hr: true, li: true, noscript: true, ol: true,
  output: true, p: true, pre: true, section: true, table: true, tfoot: true, ul: true
};

// : Object<bool> The tags that we normally ignore.
var ignoreTags = {
  head: true, noscript: true, object: true, script: true, style: true, title: true
};

// : Object<bool> List tags.
var listTags = {ol: true, ul: true};

// Using a bitfield for node context options
var OPT_PRESERVE_WS = 1, OPT_PRESERVE_WS_FULL = 2, OPT_OPEN_LEFT = 4;

function wsOptionsFor(preserveWhitespace) {
  return (preserveWhitespace ? OPT_PRESERVE_WS : 0) | (preserveWhitespace === "full" ? OPT_PRESERVE_WS_FULL : 0)
}

var NodeContext = function NodeContext(type, attrs, marks, solid, match, options) {
  this.type = type;
  this.attrs = attrs;
  this.solid = solid;
  this.match = match || (options & OPT_OPEN_LEFT ? null : type.contentMatch);
  this.options = options;
  this.content = [];
  this.marks = marks;
  this.activeMarks = Mark.none;
};

NodeContext.prototype.findWrapping = function findWrapping (node) {
  if (!this.match) {
    if (!this.type) { return [] }
    var fill = this.type.contentMatch.fillBefore(Fragment.from(node));
    if (fill) {
      this.match = this.type.contentMatch.matchFragment(fill);
    } else {
      var start = this.type.contentMatch, wrap;
      if (wrap = start.findWrapping(node.type)) {
        this.match = start;
        return wrap
      } else {
        return null
      }
    }
  }
  return this.match.findWrapping(node.type)
};

NodeContext.prototype.finish = function finish (openEnd) {
  if (!(this.options & OPT_PRESERVE_WS)) { // Strip trailing whitespace
    var last = this.content[this.content.length - 1], m;
    if (last && last.isText && (m = /[ \t\r\n\u000c]+$/.exec(last.text))) {
      if (last.text.length == m[0].length) { this.content.pop(); }
      else { this.content[this.content.length - 1] = last.withText(last.text.slice(0, last.text.length - m[0].length)); }
    }
  }
  var content = Fragment.from(this.content);
  if (!openEnd && this.match)
    { content = content.append(this.match.fillBefore(Fragment.empty, true)); }
  return this.type ? this.type.create(this.attrs, content, this.marks) : content
};

var ParseContext = function ParseContext(parser, options, open) {
  // : DOMParser The parser we are using.
  this.parser = parser;
  // : Object The options passed to this parse.
  this.options = options;
  this.isOpen = open;
  this.pendingMarks = [];
  var topNode = options.topNode, topContext;
  var topOptions = wsOptionsFor(options.preserveWhitespace) | (open ? OPT_OPEN_LEFT : 0);
  if (topNode)
    { topContext = new NodeContext(topNode.type, topNode.attrs, Mark.none, true,
                                 options.topMatch || topNode.type.contentMatch, topOptions); }
  else if (open)
    { topContext = new NodeContext(null, null, Mark.none, true, null, topOptions); }
  else
    { topContext = new NodeContext(parser.schema.topNodeType, null, Mark.none, true, null, topOptions); }
  this.nodes = [topContext];
  // : [Mark] The current set of marks
  this.open = 0;
  this.find = options.findPositions;
  this.needsBlock = false;
};

var prototypeAccessors$6 = { top: { configurable: true },currentPos: { configurable: true } };

prototypeAccessors$6.top.get = function () {
  return this.nodes[this.open]
};

// : (dom.Node)
// Add a DOM node to the content. Text is inserted as text node,
// otherwise, the node is passed to `addElement` or, if it has a
// `style` attribute, `addElementWithStyles`.
ParseContext.prototype.addDOM = function addDOM (dom) {
  if (dom.nodeType == 3) {
    this.addTextNode(dom);
  } else if (dom.nodeType == 1) {
    var style = dom.getAttribute("style");
    var marks = style ? this.readStyles(parseStyles(style)) : null;
    if (marks != null) { for (var i = 0; i < marks.length; i++) { this.addPendingMark(marks[i]); } }
    this.addElement(dom);
    if (marks != null) { for (var i$1 = 0; i$1 < marks.length; i$1++) { this.removePendingMark(marks[i$1]); } }
  }
};

ParseContext.prototype.addTextNode = function addTextNode (dom) {
  var value = dom.nodeValue;
  var top = this.top;
  if ((top.type ? top.type.inlineContent : top.content.length && top.content[0].isInline) || /[^ \t\r\n\u000c]/.test(value)) {
    if (!(top.options & OPT_PRESERVE_WS)) {
      value = value.replace(/[ \t\r\n\u000c]+/g, " ");
      // If this starts with whitespace, and there is no node before it, or
      // a hard break, or a text node that ends with whitespace, strip the
      // leading space.
      if (/^[ \t\r\n\u000c]/.test(value) && this.open == this.nodes.length - 1) {
        var nodeBefore = top.content[top.content.length - 1];
        var domNodeBefore = dom.previousSibling;
        if (!nodeBefore ||
            (domNodeBefore && domNodeBefore.nodeName == 'BR') ||
            (nodeBefore.isText && /[ \t\r\n\u000c]$/.test(nodeBefore.text)))
          { value = value.slice(1); }
      }
    } else if (!(top.options & OPT_PRESERVE_WS_FULL)) {
      value = value.replace(/\r?\n|\r/g, " ");
    }
    if (value) { this.insertNode(this.parser.schema.text(value)); }
    this.findInText(dom);
  } else {
    this.findInside(dom);
  }
};

// : (dom.Element)
// Try to find a handler for the given tag and use that to parse. If
// none is found, the element's content nodes are added directly.
ParseContext.prototype.addElement = function addElement (dom) {
  var name = dom.nodeName.toLowerCase();
  if (listTags.hasOwnProperty(name)) { normalizeList(dom); }
  var rule = (this.options.ruleFromNode && this.options.ruleFromNode(dom)) || this.parser.matchTag(dom, this);
  if (rule ? rule.ignore : ignoreTags.hasOwnProperty(name)) {
    this.findInside(dom);
  } else if (!rule || rule.skip) {
    if (rule && rule.skip.nodeType) { dom = rule.skip; }
    var sync, top = this.top, oldNeedsBlock = this.needsBlock;
    if (blockTags.hasOwnProperty(name)) {
      sync = true;
      if (!top.type) { this.needsBlock = true; }
    } else if (!dom.firstChild) {
      this.leafFallback(dom);
      return
    }
    this.addAll(dom);
    if (sync) { this.sync(top); }
    this.needsBlock = oldNeedsBlock;
  } else {
    this.addElementByRule(dom, rule);
  }
};

// Called for leaf DOM nodes that would otherwise be ignored
ParseContext.prototype.leafFallback = function leafFallback (dom) {
  if (dom.nodeName == "BR" && this.top.type && this.top.type.inlineContent)
    { this.addTextNode(dom.ownerDocument.createTextNode("\n")); }
};

// Run any style parser associated with the node's styles. Either
// return an array of marks, or null to indicate some of the styles
// had a rule with `ignore` set.
ParseContext.prototype.readStyles = function readStyles (styles) {
  var marks = Mark.none;
  for (var i = 0; i < styles.length; i += 2) {
    var rule = this.parser.matchStyle(styles[i], styles[i + 1], this);
    if (!rule) { continue }
    if (rule.ignore) { return null }
    marks = this.parser.schema.marks[rule.mark].create(rule.attrs).addToSet(marks);
  }
  return marks
};

// : (dom.Element, ParseRule) → bool
// Look up a handler for the given node. If none are found, return
// false. Otherwise, apply it, use its return value to drive the way
// the node's content is wrapped, and return true.
ParseContext.prototype.addElementByRule = function addElementByRule (dom, rule) {
    var this$1 = this;

  var sync, nodeType, markType, mark;
  if (rule.node) {
    nodeType = this.parser.schema.nodes[rule.node];
    if (!nodeType.isLeaf) {
      sync = this.enter(nodeType, rule.attrs, rule.preserveWhitespace);
    } else if (!this.insertNode(nodeType.create(rule.attrs))) {
      this.leafFallback(dom);
    }
  } else {
    markType = this.parser.schema.marks[rule.mark];
    mark = markType.create(rule.attrs);
    this.addPendingMark(mark);
  }
  var startIn = this.top;

  if (nodeType && nodeType.isLeaf) {
    this.findInside(dom);
  } else if (rule.getContent) {
    this.findInside(dom);
    rule.getContent(dom, this.parser.schema).forEach(function (node) { return this$1.insertNode(node); });
  } else {
    var contentDOM = rule.contentElement;
    if (typeof contentDOM == "string") { contentDOM = dom.querySelector(contentDOM); }
    else if (typeof contentDOM == "function") { contentDOM = contentDOM(dom); }
    if (!contentDOM) { contentDOM = dom; }
    this.findAround(dom, contentDOM, true);
    this.addAll(contentDOM, sync);
  }
  if (sync) { this.sync(startIn); this.open--; }
  if (mark) { this.removePendingMark(mark); }
};

// : (dom.Node, ?NodeBuilder, ?number, ?number)
// Add all child nodes between `startIndex` and `endIndex` (or the
// whole node, if not given). If `sync` is passed, use it to
// synchronize after every block element.
ParseContext.prototype.addAll = function addAll (parent, sync, startIndex, endIndex) {
  var index = startIndex || 0;
  for (var dom = startIndex ? parent.childNodes[startIndex] : parent.firstChild,
           end = endIndex == null ? null : parent.childNodes[endIndex];
       dom != end; dom = dom.nextSibling, ++index) {
    this.findAtPoint(parent, index);
    this.addDOM(dom);
    if (sync && blockTags.hasOwnProperty(dom.nodeName.toLowerCase()))
      { this.sync(sync); }
  }
  this.findAtPoint(parent, index);
};

// Try to find a way to fit the given node type into the current
// context. May add intermediate wrappers and/or leave non-solid
// nodes that we're in.
ParseContext.prototype.findPlace = function findPlace (node) {
  var route, sync;
  for (var depth = this.open; depth >= 0; depth--) {
    var cx = this.nodes[depth];
    var found = cx.findWrapping(node);
    if (found && (!route || route.length > found.length)) {
      route = found;
      sync = cx;
      if (!found.length) { break }
    }
    if (cx.solid) { break }
  }
  if (!route) { return false }
  this.sync(sync);
  for (var i = 0; i < route.length; i++)
    { this.enterInner(route[i], null, false); }
  return true
};

// : (Node) → ?Node
// Try to insert the given node, adjusting the context when needed.
ParseContext.prototype.insertNode = function insertNode (node) {
  if (node.isInline && this.needsBlock && !this.top.type) {
    var block = this.textblockFromContext();
    if (block) { this.enterInner(block); }
  }
  if (this.findPlace(node)) {
    this.closeExtra();
    var top = this.top;
    this.applyPendingMarks(top);
    if (top.match) { top.match = top.match.matchType(node.type); }
    var marks = top.activeMarks;
    for (var i = 0; i < node.marks.length; i++)
      { if (!top.type || top.type.allowsMarkType(node.marks[i].type))
        { marks = node.marks[i].addToSet(marks); } }
    top.content.push(node.mark(marks));
    return true
  }
  return false
};

ParseContext.prototype.applyPendingMarks = function applyPendingMarks (top) {
  for (var i = 0; i < this.pendingMarks.length; i++) {
    var mark = this.pendingMarks[i];
    if ((!top.type || top.type.allowsMarkType(mark.type)) && !mark.isInSet(top.activeMarks)) {
      top.activeMarks = mark.addToSet(top.activeMarks);
      this.pendingMarks.splice(i--, 1);
    }
  }
};

// : (NodeType, ?Object) → bool
// Try to start a node of the given type, adjusting the context when
// necessary.
ParseContext.prototype.enter = function enter (type, attrs, preserveWS) {
  var ok = this.findPlace(type.create(attrs));
  if (ok) {
    this.applyPendingMarks(this.top);
    this.enterInner(type, attrs, true, preserveWS);
  }
  return ok
};

// Open a node of the given type
ParseContext.prototype.enterInner = function enterInner (type, attrs, solid, preserveWS) {
  this.closeExtra();
  var top = this.top;
  top.match = top.match && top.match.matchType(type, attrs);
  var options = preserveWS == null ? top.options & ~OPT_OPEN_LEFT : wsOptionsFor(preserveWS);
  if ((top.options & OPT_OPEN_LEFT) && top.content.length == 0) { options |= OPT_OPEN_LEFT; }
  this.nodes.push(new NodeContext(type, attrs, top.activeMarks, solid, null, options));
  this.open++;
};

// Make sure all nodes above this.open are finished and added to
// their parents
ParseContext.prototype.closeExtra = function closeExtra (openEnd) {
  var i = this.nodes.length - 1;
  if (i > this.open) {
    for (; i > this.open; i--) { this.nodes[i - 1].content.push(this.nodes[i].finish(openEnd)); }
    this.nodes.length = this.open + 1;
  }
};

ParseContext.prototype.finish = function finish () {
  this.open = 0;
  this.closeExtra(this.isOpen);
  return this.nodes[0].finish(this.isOpen || this.options.topOpen)
};

ParseContext.prototype.sync = function sync (to) {
  for (var i = this.open; i >= 0; i--) { if (this.nodes[i] == to) {
    this.open = i;
    return
  } }
};

ParseContext.prototype.addPendingMark = function addPendingMark (mark) {
  this.pendingMarks.push(mark);
};

ParseContext.prototype.removePendingMark = function removePendingMark (mark) {
  var found = this.pendingMarks.lastIndexOf(mark);
  if (found > -1) {
    this.pendingMarks.splice(found, 1);
  } else {
    var top = this.top;
    top.activeMarks = mark.removeFromSet(top.activeMarks);
  }
};

prototypeAccessors$6.currentPos.get = function () {
  this.closeExtra();
  var pos = 0;
  for (var i = this.open; i >= 0; i--) {
    var content = this.nodes[i].content;
    for (var j = content.length - 1; j >= 0; j--)
      { pos += content[j].nodeSize; }
    if (i) { pos++; }
  }
  return pos
};

ParseContext.prototype.findAtPoint = function findAtPoint (parent, offset) {
  if (this.find) { for (var i = 0; i < this.find.length; i++) {
    if (this.find[i].node == parent && this.find[i].offset == offset)
      { this.find[i].pos = this.currentPos; }
  } }
};

ParseContext.prototype.findInside = function findInside (parent) {
  if (this.find) { for (var i = 0; i < this.find.length; i++) {
    if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node))
      { this.find[i].pos = this.currentPos; }
  } }
};

ParseContext.prototype.findAround = function findAround (parent, content, before) {
  if (parent != content && this.find) { for (var i = 0; i < this.find.length; i++) {
    if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) {
      var pos = content.compareDocumentPosition(this.find[i].node);
      if (pos & (before ? 2 : 4))
        { this.find[i].pos = this.currentPos; }
    }
  } }
};

ParseContext.prototype.findInText = function findInText (textNode) {
  if (this.find) { for (var i = 0; i < this.find.length; i++) {
    if (this.find[i].node == textNode)
      { this.find[i].pos = this.currentPos - (textNode.nodeValue.length - this.find[i].offset); }
  } }
};

// : (string) → bool
// Determines whether the given [context
// string](#ParseRule.context) matches this context.
ParseContext.prototype.matchesContext = function matchesContext (context) {
    var this$1 = this;

  if (context.indexOf("|") > -1)
    { return context.split(/\s*\|\s*/).some(this.matchesContext, this) }

  var parts = context.split("/");
  var option = this.options.context;
  var useRoot = !this.isOpen && (!option || option.parent.type == this.nodes[0].type);
  var minDepth = -(option ? option.depth + 1 : 0) + (useRoot ? 0 : 1);
  var match = function (i, depth) {
    for (; i >= 0; i--) {
      var part = parts[i];
      if (part == "") {
        if (i == parts.length - 1 || i == 0) { continue }
        for (; depth >= minDepth; depth--)
          { if (match(i - 1, depth)) { return true } }
        return false
      } else {
        var next = depth > 0 || (depth == 0 && useRoot) ? this$1.nodes[depth].type
            : option && depth >= minDepth ? option.node(depth - minDepth).type
            : null;
        if (!next || (next.name != part && next.groups.indexOf(part) == -1))
          { return false }
        depth--;
      }
    }
    return true
  };
  return match(parts.length - 1, this.open)
};

ParseContext.prototype.textblockFromContext = function textblockFromContext () {
  var $context = this.options.context;
  if ($context) { for (var d = $context.depth; d >= 0; d--) {
    var deflt = $context.node(d).contentMatchAt($context.indexAfter(d)).defaultType;
    if (deflt && deflt.isTextblock && deflt.defaultAttrs) { return deflt }
  } }
  for (var name in this.parser.schema.nodes) {
    var type = this.parser.schema.nodes[name];
    if (type.isTextblock && type.defaultAttrs) { return type }
  }
};

Object.defineProperties( ParseContext.prototype, prototypeAccessors$6 );

// Kludge to work around directly nested list nodes produced by some
// tools and allowed by browsers to mean that the nested list is
// actually part of the list item above it.
function normalizeList(dom) {
  for (var child = dom.firstChild, prevItem = null; child; child = child.nextSibling) {
    var name = child.nodeType == 1 ? child.nodeName.toLowerCase() : null;
    if (name && listTags.hasOwnProperty(name) && prevItem) {
      prevItem.appendChild(child);
      child = prevItem;
    } else if (name == "li") {
      prevItem = child;
    } else if (name) {
      prevItem = null;
    }
  }
}

// Apply a CSS selector.
function matches(dom, selector) {
  return (dom.matches || dom.msMatchesSelector || dom.webkitMatchesSelector || dom.mozMatchesSelector).call(dom, selector)
}

// : (string) → [string]
// Tokenize a style attribute into property/value pairs.
function parseStyles(style) {
  var re = /\s*([\w-]+)\s*:\s*([^;]+)/g, m, result = [];
  while (m = re.exec(style)) { result.push(m[1], m[2].trim()); }
  return result
}

function copy(obj) {
  var copy = {};
  for (var prop in obj) { copy[prop] = obj[prop]; }
  return copy
}

// DOMOutputSpec:: interface
// A description of a DOM structure. Can be either a string, which is
// interpreted as a text node, a DOM node, which is interpreted as
// itself, or an array.
//
// An array describes a DOM element. The first value in the array
// should be a string—the name of the DOM element. If the second
// element is plain object, it is interpreted as a set of attributes
// for the element. Any elements after that (including the 2nd if it's
// not an attribute object) are interpreted as children of the DOM
// elements, and must either be valid `DOMOutputSpec` values, or the
// number zero.
//
// The number zero (pronounced “hole”) is used to indicate the place
// where a node's child nodes should be inserted. If it occurs in an
// output spec, it should be the only child element in its parent
// node.

// ::- A DOM serializer knows how to convert ProseMirror nodes and
// marks of various types to DOM nodes.
var DOMSerializer = function DOMSerializer(nodes, marks) {
  // :: Object<(node: Node) → DOMOutputSpec>
  // The node serialization functions.
  this.nodes = nodes || {};
  // :: Object<?(mark: Mark, inline: bool) → DOMOutputSpec>
  // The mark serialization functions.
  this.marks = marks || {};
};

// :: (Fragment, ?Object) → dom.DocumentFragment
// Serialize the content of this fragment to a DOM fragment. When
// not in the browser, the `document` option, containing a DOM
// document, should be passed so that the serializer can create
// nodes.
DOMSerializer.prototype.serializeFragment = function serializeFragment (fragment, options, target) {
    var this$1 = this;
    if ( options === void 0 ) options = {};

  if (!target) { target = doc(options).createDocumentFragment(); }

  var top = target, active = null;
  fragment.forEach(function (node) {
    if (active || node.marks.length) {
      if (!active) { active = []; }
      var keep = 0, rendered = 0;
      while (keep < active.length && rendered < node.marks.length) {
        var next = node.marks[rendered];
        if (!this$1.marks[next.type.name]) { rendered++; continue }
        if (!next.eq(active[keep]) || next.type.spec.spanning === false) { break }
        keep += 2; rendered++;
      }
      while (keep < active.length) {
        top = active.pop();
        active.pop();
      }
      while (rendered < node.marks.length) {
        var add = node.marks[rendered++];
        var markDOM = this$1.serializeMark(add, node.isInline, options);
        if (markDOM) {
          active.push(add, top);
          top.appendChild(markDOM.dom);
          top = markDOM.contentDOM || markDOM.dom;
        }
      }
    }
    top.appendChild(this$1.serializeNode(node, options));
  });

  return target
};

// :: (Node, ?Object) → dom.Node
// Serialize this node to a DOM node. This can be useful when you
// need to serialize a part of a document, as opposed to the whole
// document. To serialize a whole document, use
// [`serializeFragment`](#model.DOMSerializer.serializeFragment) on
// its [content](#model.Node.content).
DOMSerializer.prototype.serializeNode = function serializeNode (node, options) {
    if ( options === void 0 ) options = {};

  var ref =
      DOMSerializer.renderSpec(doc(options), this.nodes[node.type.name](node));
    var dom = ref.dom;
    var contentDOM = ref.contentDOM;
  if (contentDOM) {
    if (node.isLeaf)
      { throw new RangeError("Content hole not allowed in a leaf node spec") }
    if (options.onContent)
      { options.onContent(node, contentDOM, options); }
    else
      { this.serializeFragment(node.content, options, contentDOM); }
  }
  return dom
};

DOMSerializer.prototype.serializeNodeAndMarks = function serializeNodeAndMarks (node, options) {
    if ( options === void 0 ) options = {};

  var dom = this.serializeNode(node, options);
  for (var i = node.marks.length - 1; i >= 0; i--) {
    var wrap = this.serializeMark(node.marks[i], node.isInline, options);
    if (wrap) {
(wrap.contentDOM || wrap.dom).appendChild(dom);
      dom = wrap.dom;
    }
  }
  return dom
};

DOMSerializer.prototype.serializeMark = function serializeMark (mark, inline, options) {
    if ( options === void 0 ) options = {};

  var toDOM = this.marks[mark.type.name];
  return toDOM && DOMSerializer.renderSpec(doc(options), toDOM(mark, inline))
};

// :: (dom.Document, DOMOutputSpec) → {dom: dom.Node, contentDOM: ?dom.Node}
// Render an [output spec](#model.DOMOutputSpec) to a DOM node. If
// the spec has a hole (zero) in it, `contentDOM` will point at the
// node with the hole.
DOMSerializer.renderSpec = function renderSpec (doc, structure) {
  if (typeof structure == "string")
    { return {dom: doc.createTextNode(structure)} }
  if (structure.nodeType != null)
    { return {dom: structure} }
  var dom = doc.createElement(structure[0]), contentDOM = null;
  var attrs = structure[1], start = 1;
  if (attrs && typeof attrs == "object" && attrs.nodeType == null && !Array.isArray(attrs)) {
    start = 2;
    for (var name in attrs) {
      if (attrs[name] != null) { dom.setAttribute(name, attrs[name]); }
    }
  }
  for (var i = start; i < structure.length; i++) {
    var child = structure[i];
    if (child === 0) {
      if (i < structure.length - 1 || i > start)
        { throw new RangeError("Content hole must be the only child of its parent node") }
      return {dom: dom, contentDOM: dom}
    } else {
      var ref = DOMSerializer.renderSpec(doc, child);
        var inner = ref.dom;
        var innerContent = ref.contentDOM;
      dom.appendChild(inner);
      if (innerContent) {
        if (contentDOM) { throw new RangeError("Multiple content holes") }
        contentDOM = innerContent;
      }
    }
  }
  return {dom: dom, contentDOM: contentDOM}
};

// :: (Schema) → DOMSerializer
// Build a serializer using the [`toDOM`](#model.NodeSpec.toDOM)
// properties in a schema's node and mark specs.
DOMSerializer.fromSchema = function fromSchema (schema) {
  return schema.cached.domSerializer ||
    (schema.cached.domSerializer = new DOMSerializer(this.nodesFromSchema(schema), this.marksFromSchema(schema)))
};

// : (Schema) → Object<(node: Node) → DOMOutputSpec>
// Gather the serializers in a schema's node specs into an object.
// This can be useful as a base to build a custom serializer from.
DOMSerializer.nodesFromSchema = function nodesFromSchema (schema) {
  var result = gatherToDOM(schema.nodes);
  if (!result.text) { result.text = function (node) { return node.text; }; }
  return result
};

// : (Schema) → Object<(mark: Mark) → DOMOutputSpec>
// Gather the serializers in a schema's mark specs into an object.
DOMSerializer.marksFromSchema = function marksFromSchema (schema) {
  return gatherToDOM(schema.marks)
};

function gatherToDOM(obj) {
  var result = {};
  for (var name in obj) {
    var toDOM = obj[name].spec.toDOM;
    if (toDOM) { result[name] = toDOM; }
  }
  return result
}

function doc(options) {
  // declare global: window
  return options.document || window.document
}

var index_es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ContentMatch: ContentMatch,
    DOMParser: DOMParser,
    DOMSerializer: DOMSerializer,
    Fragment: Fragment,
    Mark: Mark,
    MarkType: MarkType,
    Node: Node$1,
    NodeRange: NodeRange,
    NodeType: NodeType,
    ReplaceError: ReplaceError,
    ResolvedPos: ResolvedPos,
    Schema: Schema,
    Slice: Slice
});

// Mappable:: interface
// There are several things that positions can be mapped through.
// Such objects conform to this interface.
//
//   map:: (pos: number, assoc: ?number) → number
//   Map a position through this object. When given, `assoc` (should
//   be -1 or 1, defaults to 1) determines with which side the
//   position is associated, which determines in which direction to
//   move when a chunk of content is inserted at the mapped position.
//
//   mapResult:: (pos: number, assoc: ?number) → MapResult
//   Map a position, and return an object containing additional
//   information about the mapping. The result's `deleted` field tells
//   you whether the position was deleted (completely enclosed in a
//   replaced range) during the mapping. When content on only one side
//   is deleted, the position itself is only considered deleted when
//   `assoc` points in the direction of the deleted content.

// Recovery values encode a range index and an offset. They are
// represented as numbers, because tons of them will be created when
// mapping, for example, a large number of decorations. The number's
// lower 16 bits provide the index, the remaining bits the offset.
//
// Note: We intentionally don't use bit shift operators to en- and
// decode these, since those clip to 32 bits, which we might in rare
// cases want to overflow. A 64-bit float can represent 48-bit
// integers precisely.

var lower16 = 0xffff;
var factor16 = Math.pow(2, 16);

function makeRecover(index, offset) { return index + offset * factor16 }
function recoverIndex(value) { return value & lower16 }
function recoverOffset(value) { return (value - (value & lower16)) / factor16 }

// ::- An object representing a mapped position with extra
// information.
var MapResult = function MapResult(pos, deleted, recover) {
  if ( deleted === void 0 ) deleted = false;
  if ( recover === void 0 ) recover = null;

  // :: number The mapped version of the position.
  this.pos = pos;
  // :: bool Tells you whether the position was deleted, that is,
  // whether the step removed its surroundings from the document.
  this.deleted = deleted;
  this.recover = recover;
};

// :: class extends Mappable
// A map describing the deletions and insertions made by a step, which
// can be used to find the correspondence between positions in the
// pre-step version of a document and the same position in the
// post-step version.
var StepMap = function StepMap(ranges, inverted) {
  if ( inverted === void 0 ) inverted = false;

  this.ranges = ranges;
  this.inverted = inverted;
};

StepMap.prototype.recover = function recover (value) {
  var diff = 0, index = recoverIndex(value);
  if (!this.inverted) { for (var i = 0; i < index; i++)
    { diff += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1]; } }
  return this.ranges[index * 3] + diff + recoverOffset(value)
};

// : (number, ?number) → MapResult
StepMap.prototype.mapResult = function mapResult (pos, assoc) {
  if ( assoc === void 0 ) assoc = 1;
 return this._map(pos, assoc, false) };

// : (number, ?number) → number
StepMap.prototype.map = function map (pos, assoc) {
  if ( assoc === void 0 ) assoc = 1;
 return this._map(pos, assoc, true) };

StepMap.prototype._map = function _map (pos, assoc, simple) {
  var diff = 0, oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
  for (var i = 0; i < this.ranges.length; i += 3) {
    var start = this.ranges[i] - (this.inverted ? diff : 0);
    if (start > pos) { break }
    var oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex], end = start + oldSize;
    if (pos <= end) {
      var side = !oldSize ? assoc : pos == start ? -1 : pos == end ? 1 : assoc;
      var result = start + diff + (side < 0 ? 0 : newSize);
      if (simple) { return result }
      var recover = makeRecover(i / 3, pos - start);
      return new MapResult(result, assoc < 0 ? pos != start : pos != end, recover)
    }
    diff += newSize - oldSize;
  }
  return simple ? pos + diff : new MapResult(pos + diff)
};

StepMap.prototype.touches = function touches (pos, recover) {
  var diff = 0, index = recoverIndex(recover);
  var oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
  for (var i = 0; i < this.ranges.length; i += 3) {
    var start = this.ranges[i] - (this.inverted ? diff : 0);
    if (start > pos) { break }
    var oldSize = this.ranges[i + oldIndex], end = start + oldSize;
    if (pos <= end && i == index * 3) { return true }
    diff += this.ranges[i + newIndex] - oldSize;
  }
  return false
};

// :: ((oldStart: number, oldEnd: number, newStart: number, newEnd: number))
// Calls the given function on each of the changed ranges included in
// this map.
StepMap.prototype.forEach = function forEach (f) {
  var oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
  for (var i = 0, diff = 0; i < this.ranges.length; i += 3) {
    var start = this.ranges[i], oldStart = start - (this.inverted ? diff : 0), newStart = start + (this.inverted ? 0 : diff);
    var oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex];
    f(oldStart, oldStart + oldSize, newStart, newStart + newSize);
    diff += newSize - oldSize;
  }
};

// :: () → StepMap
// Create an inverted version of this map. The result can be used to
// map positions in the post-step document to the pre-step document.
StepMap.prototype.invert = function invert () {
  return new StepMap(this.ranges, !this.inverted)
};

StepMap.prototype.toString = function toString () {
  return (this.inverted ? "-" : "") + JSON.stringify(this.ranges)
};

// :: (n: number) → StepMap
// Create a map that moves all positions by offset `n` (which may be
// negative). This can be useful when applying steps meant for a
// sub-document to a larger document, or vice-versa.
StepMap.offset = function offset (n) {
  return n == 0 ? StepMap.empty : new StepMap(n < 0 ? [0, -n, 0] : [0, 0, n])
};

StepMap.empty = new StepMap([]);

// :: class extends Mappable
// A mapping represents a pipeline of zero or more [step
// maps](#transform.StepMap). It has special provisions for losslessly
// handling mapping positions through a series of steps in which some
// steps are inverted versions of earlier steps. (This comes up when
// ‘[rebasing](/docs/guide/#transform.rebasing)’ steps for
// collaboration or history management.)
var Mapping = function Mapping(maps, mirror, from, to) {
  // :: [StepMap]
  // The step maps in this mapping.
  this.maps = maps || [];
  // :: number
  // The starting position in the `maps` array, used when `map` or
  // `mapResult` is called.
  this.from = from || 0;
  // :: number
  // The end position in the `maps` array.
  this.to = to == null ? this.maps.length : to;
  this.mirror = mirror;
};

// :: (?number, ?number) → Mapping
// Create a mapping that maps only through a part of this one.
Mapping.prototype.slice = function slice (from, to) {
    if ( from === void 0 ) from = 0;
    if ( to === void 0 ) to = this.maps.length;

  return new Mapping(this.maps, this.mirror, from, to)
};

Mapping.prototype.copy = function copy () {
  return new Mapping(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to)
};

// :: (StepMap, ?number)
// Add a step map to the end of this mapping. If `mirrors` is
// given, it should be the index of the step map that is the mirror
// image of this one.
Mapping.prototype.appendMap = function appendMap (map, mirrors) {
  this.to = this.maps.push(map);
  if (mirrors != null) { this.setMirror(this.maps.length - 1, mirrors); }
};

// :: (Mapping)
// Add all the step maps in a given mapping to this one (preserving
// mirroring information).
Mapping.prototype.appendMapping = function appendMapping (mapping) {
  for (var i = 0, startSize = this.maps.length; i < mapping.maps.length; i++) {
    var mirr = mapping.getMirror(i);
    this.appendMap(mapping.maps[i], mirr != null && mirr < i ? startSize + mirr : null);
  }
};

// :: (number) → ?number
// Finds the offset of the step map that mirrors the map at the
// given offset, in this mapping (as per the second argument to
// `appendMap`).
Mapping.prototype.getMirror = function getMirror (n) {
  if (this.mirror) { for (var i = 0; i < this.mirror.length; i++)
    { if (this.mirror[i] == n) { return this.mirror[i + (i % 2 ? -1 : 1)] } } }
};

Mapping.prototype.setMirror = function setMirror (n, m) {
  if (!this.mirror) { this.mirror = []; }
  this.mirror.push(n, m);
};

// :: (Mapping)
// Append the inverse of the given mapping to this one.
Mapping.prototype.appendMappingInverted = function appendMappingInverted (mapping) {
  for (var i = mapping.maps.length - 1, totalSize = this.maps.length + mapping.maps.length; i >= 0; i--) {
    var mirr = mapping.getMirror(i);
    this.appendMap(mapping.maps[i].invert(), mirr != null && mirr > i ? totalSize - mirr - 1 : null);
  }
};

// :: () → Mapping
// Create an inverted version of this mapping.
Mapping.prototype.invert = function invert () {
  var inverse = new Mapping;
  inverse.appendMappingInverted(this);
  return inverse
};

// : (number, ?number) → number
// Map a position through this mapping.
Mapping.prototype.map = function map (pos, assoc) {
    if ( assoc === void 0 ) assoc = 1;

  if (this.mirror) { return this._map(pos, assoc, true) }
  for (var i = this.from; i < this.to; i++)
    { pos = this.maps[i].map(pos, assoc); }
  return pos
};

// : (number, ?number) → MapResult
// Map a position through this mapping, returning a mapping
// result.
Mapping.prototype.mapResult = function mapResult (pos, assoc) {
  if ( assoc === void 0 ) assoc = 1;
 return this._map(pos, assoc, false) };

Mapping.prototype._map = function _map (pos, assoc, simple) {
  var deleted = false, recoverables = null;

  for (var i = this.from; i < this.to; i++) {
    var map = this.maps[i], rec = recoverables && recoverables[i];
    if (rec != null && map.touches(pos, rec)) {
      pos = map.recover(rec);
      continue
    }

    var result = map.mapResult(pos, assoc);
    if (result.recover != null) {
      var corr = this.getMirror(i);
      if (corr != null && corr > i && corr < this.to) {
        if (result.deleted) {
          i = corr;
          pos = this.maps[corr].recover(result.recover);
          continue
        } else {
(recoverables || (recoverables = Object.create(null)))[corr] = result.recover;
        }
      }
    }

    if (result.deleted) { deleted = true; }
    pos = result.pos;
  }

  return simple ? pos : new MapResult(pos, deleted)
};

function TransformError(message) {
  var err = Error.call(this, message);
  err.__proto__ = TransformError.prototype;
  return err
}

TransformError.prototype = Object.create(Error.prototype);
TransformError.prototype.constructor = TransformError;
TransformError.prototype.name = "TransformError";

// ::- Abstraction to build up and track an array of
// [steps](#transform.Step) representing a document transformation.
//
// Most transforming methods return the `Transform` object itself, so
// that they can be chained.
var Transform = function Transform(doc) {
  // :: Node
  // The current document (the result of applying the steps in the
  // transform).
  this.doc = doc;
  // :: [Step]
  // The steps in this transform.
  this.steps = [];
  // :: [Node]
  // The documents before each of the steps.
  this.docs = [];
  // :: Mapping
  // A mapping with the maps for each of the steps in this transform.
  this.mapping = new Mapping;
};

var prototypeAccessors$7 = { before: { configurable: true },docChanged: { configurable: true } };

// :: Node The starting document.
prototypeAccessors$7.before.get = function () { return this.docs.length ? this.docs[0] : this.doc };

// :: (step: Step) → this
// Apply a new step in this transform, saving the result. Throws an
// error when the step fails.
Transform.prototype.step = function step (object) {
  var result = this.maybeStep(object);
  if (result.failed) { throw new TransformError(result.failed) }
  return this
};

// :: (Step) → StepResult
// Try to apply a step in this transformation, ignoring it if it
// fails. Returns the step result.
Transform.prototype.maybeStep = function maybeStep (step) {
  var result = step.apply(this.doc);
  if (!result.failed) { this.addStep(step, result.doc); }
  return result
};

// :: bool
// True when the document has been changed (when there are any
// steps).
prototypeAccessors$7.docChanged.get = function () {
  return this.steps.length > 0
};

Transform.prototype.addStep = function addStep (step, doc) {
  this.docs.push(this.doc);
  this.steps.push(step);
  this.mapping.appendMap(step.getMap());
  this.doc = doc;
};

Object.defineProperties( Transform.prototype, prototypeAccessors$7 );

function mustOverride() { throw new Error("Override me") }

var stepsByID = Object.create(null);

// ::- A step object represents an atomic change. It generally applies
// only to the document it was created for, since the positions
// stored in it will only make sense for that document.
//
// New steps are defined by creating classes that extend `Step`,
// overriding the `apply`, `invert`, `map`, `getMap` and `fromJSON`
// methods, and registering your class with a unique
// JSON-serialization identifier using
// [`Step.jsonID`](#transform.Step^jsonID).
var Step = function Step () {};

Step.prototype.apply = function apply (_doc) { return mustOverride() };

// :: () → StepMap
// Get the step map that represents the changes made by this step,
// and which can be used to transform between positions in the old
// and the new document.
Step.prototype.getMap = function getMap () { return StepMap.empty };

// :: (doc: Node) → Step
// Create an inverted version of this step. Needs the document as it
// was before the step as argument.
Step.prototype.invert = function invert (_doc) { return mustOverride() };

// :: (mapping: Mappable) → ?Step
// Map this step through a mappable thing, returning either a
// version of that step with its positions adjusted, or `null` if
// the step was entirely deleted by the mapping.
Step.prototype.map = function map (_mapping) { return mustOverride() };

// :: (other: Step) → ?Step
// Try to merge this step with another one, to be applied directly
// after it. Returns the merged step when possible, null if the
// steps can't be merged.
Step.prototype.merge = function merge (_other) { return null };

// :: () → Object
// Create a JSON-serializeable representation of this step. When
// defining this for a custom subclass, make sure the result object
// includes the step type's [JSON id](#transform.Step^jsonID) under
// the `stepType` property.
Step.prototype.toJSON = function toJSON () { return mustOverride() };

// :: (Schema, Object) → Step
// Deserialize a step from its JSON representation. Will call
// through to the step class' own implementation of this method.
Step.fromJSON = function fromJSON (schema, json) {
  if (!json || !json.stepType) { throw new RangeError("Invalid input for Step.fromJSON") }
  var type = stepsByID[json.stepType];
  if (!type) { throw new RangeError(("No step type " + (json.stepType) + " defined")) }
  return type.fromJSON(schema, json)
};

// :: (string, constructor<Step>)
// To be able to serialize steps to JSON, each step needs a string
// ID to attach to its JSON representation. Use this method to
// register an ID for your step classes. Try to pick something
// that's unlikely to clash with steps from other modules.
Step.jsonID = function jsonID (id, stepClass) {
  if (id in stepsByID) { throw new RangeError("Duplicate use of step JSON ID " + id) }
  stepsByID[id] = stepClass;
  stepClass.prototype.jsonID = id;
  return stepClass
};

// ::- The result of [applying](#transform.Step.apply) a step. Contains either a
// new document or a failure value.
var StepResult = function StepResult(doc, failed) {
  // :: ?Node The transformed document.
  this.doc = doc;
  // :: ?string Text providing information about a failed step.
  this.failed = failed;
};

// :: (Node) → StepResult
// Create a successful step result.
StepResult.ok = function ok (doc) { return new StepResult(doc, null) };

// :: (string) → StepResult
// Create a failed step result.
StepResult.fail = function fail (message) { return new StepResult(null, message) };

// :: (Node, number, number, Slice) → StepResult
// Call [`Node.replace`](#model.Node.replace) with the given
// arguments. Create a successful result if it succeeds, and a
// failed one if it throws a `ReplaceError`.
StepResult.fromReplace = function fromReplace (doc, from, to, slice) {
  try {
    return StepResult.ok(doc.replace(from, to, slice))
  } catch (e) {
    if (e instanceof ReplaceError) { return StepResult.fail(e.message) }
    throw e
  }
};

// ::- Replace a part of the document with a slice of new content.
var ReplaceStep = /*@__PURE__*/(function (Step) {
  function ReplaceStep(from, to, slice, structure) {
    Step.call(this);
    this.from = from;
    this.to = to;
    this.slice = slice;
    this.structure = !!structure;
  }

  if ( Step ) ReplaceStep.__proto__ = Step;
  ReplaceStep.prototype = Object.create( Step && Step.prototype );
  ReplaceStep.prototype.constructor = ReplaceStep;

  ReplaceStep.prototype.apply = function apply (doc) {
    if (this.structure && contentBetween(doc, this.from, this.to))
      { return StepResult.fail("Structure replace would overwrite content") }
    return StepResult.fromReplace(doc, this.from, this.to, this.slice)
  };

  ReplaceStep.prototype.getMap = function getMap () {
    return new StepMap([this.from, this.to - this.from, this.slice.size])
  };

  ReplaceStep.prototype.invert = function invert (doc) {
    return new ReplaceStep(this.from, this.from + this.slice.size, doc.slice(this.from, this.to))
  };

  ReplaceStep.prototype.map = function map (mapping) {
    var from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from.deleted && to.deleted) { return null }
    return new ReplaceStep(from.pos, Math.max(from.pos, to.pos), this.slice)
  };

  ReplaceStep.prototype.merge = function merge (other) {
    if (!(other instanceof ReplaceStep) || other.structure != this.structure) { return null }

    if (this.from + this.slice.size == other.from && !this.slice.openEnd && !other.slice.openStart) {
      var slice = this.slice.size + other.slice.size == 0 ? Slice.empty
          : new Slice(this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
      return new ReplaceStep(this.from, this.to + (other.to - other.from), slice, this.structure)
    } else if (other.to == this.from && !this.slice.openStart && !other.slice.openEnd) {
      var slice$1 = this.slice.size + other.slice.size == 0 ? Slice.empty
          : new Slice(other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
      return new ReplaceStep(other.from, this.to, slice$1, this.structure)
    } else {
      return null
    }
  };

  ReplaceStep.prototype.toJSON = function toJSON () {
    var json = {stepType: "replace", from: this.from, to: this.to};
    if (this.slice.size) { json.slice = this.slice.toJSON(); }
    if (this.structure) { json.structure = true; }
    return json
  };

  ReplaceStep.fromJSON = function fromJSON (schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number")
      { throw new RangeError("Invalid input for ReplaceStep.fromJSON") }
    return new ReplaceStep(json.from, json.to, Slice.fromJSON(schema, json.slice), !!json.structure)
  };

  return ReplaceStep;
}(Step));

Step.jsonID("replace", ReplaceStep);

// ::- Replace a part of the document with a slice of content, but
// preserve a range of the replaced content by moving it into the
// slice.
var ReplaceAroundStep = /*@__PURE__*/(function (Step) {
  function ReplaceAroundStep(from, to, gapFrom, gapTo, slice, insert, structure) {
    Step.call(this);
    this.from = from;
    this.to = to;
    this.gapFrom = gapFrom;
    this.gapTo = gapTo;
    this.slice = slice;
    this.insert = insert;
    this.structure = !!structure;
  }

  if ( Step ) ReplaceAroundStep.__proto__ = Step;
  ReplaceAroundStep.prototype = Object.create( Step && Step.prototype );
  ReplaceAroundStep.prototype.constructor = ReplaceAroundStep;

  ReplaceAroundStep.prototype.apply = function apply (doc) {
    if (this.structure && (contentBetween(doc, this.from, this.gapFrom) ||
                           contentBetween(doc, this.gapTo, this.to)))
      { return StepResult.fail("Structure gap-replace would overwrite content") }

    var gap = doc.slice(this.gapFrom, this.gapTo);
    if (gap.openStart || gap.openEnd)
      { return StepResult.fail("Gap is not a flat range") }
    var inserted = this.slice.insertAt(this.insert, gap.content);
    if (!inserted) { return StepResult.fail("Content does not fit in gap") }
    return StepResult.fromReplace(doc, this.from, this.to, inserted)
  };

  ReplaceAroundStep.prototype.getMap = function getMap () {
    return new StepMap([this.from, this.gapFrom - this.from, this.insert,
                        this.gapTo, this.to - this.gapTo, this.slice.size - this.insert])
  };

  ReplaceAroundStep.prototype.invert = function invert (doc) {
    var gap = this.gapTo - this.gapFrom;
    return new ReplaceAroundStep(this.from, this.from + this.slice.size + gap,
                                 this.from + this.insert, this.from + this.insert + gap,
                                 doc.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
                                 this.gapFrom - this.from, this.structure)
  };

  ReplaceAroundStep.prototype.map = function map (mapping) {
    var from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    var gapFrom = mapping.map(this.gapFrom, -1), gapTo = mapping.map(this.gapTo, 1);
    if ((from.deleted && to.deleted) || gapFrom < from.pos || gapTo > to.pos) { return null }
    return new ReplaceAroundStep(from.pos, to.pos, gapFrom, gapTo, this.slice, this.insert, this.structure)
  };

  ReplaceAroundStep.prototype.toJSON = function toJSON () {
    var json = {stepType: "replaceAround", from: this.from, to: this.to,
                gapFrom: this.gapFrom, gapTo: this.gapTo, insert: this.insert};
    if (this.slice.size) { json.slice = this.slice.toJSON(); }
    if (this.structure) { json.structure = true; }
    return json
  };

  ReplaceAroundStep.fromJSON = function fromJSON (schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number" ||
        typeof json.gapFrom != "number" || typeof json.gapTo != "number" || typeof json.insert != "number")
      { throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON") }
    return new ReplaceAroundStep(json.from, json.to, json.gapFrom, json.gapTo,
                                 Slice.fromJSON(schema, json.slice), json.insert, !!json.structure)
  };

  return ReplaceAroundStep;
}(Step));

Step.jsonID("replaceAround", ReplaceAroundStep);

function contentBetween(doc, from, to) {
  var $from = doc.resolve(from), dist = to - from, depth = $from.depth;
  while (dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount) {
    depth--;
    dist--;
  }
  if (dist > 0) {
    var next = $from.node(depth).maybeChild($from.indexAfter(depth));
    while (dist > 0) {
      if (!next || next.isLeaf) { return true }
      next = next.firstChild;
      dist--;
    }
  }
  return false
}

function canCut(node, start, end) {
  return (start == 0 || node.canReplace(start, node.childCount)) &&
    (end == node.childCount || node.canReplace(0, end))
}

// :: (NodeRange) → ?number
// Try to find a target depth to which the content in the given range
// can be lifted. Will not go across
// [isolating](#model.NodeSpec.isolating) parent nodes.
function liftTarget(range) {
  var parent = range.parent;
  var content = parent.content.cutByIndex(range.startIndex, range.endIndex);
  for (var depth = range.depth;; --depth) {
    var node = range.$from.node(depth);
    var index = range.$from.index(depth), endIndex = range.$to.indexAfter(depth);
    if (depth < range.depth && node.canReplace(index, endIndex, content))
      { return depth }
    if (depth == 0 || node.type.spec.isolating || !canCut(node, index, endIndex)) { break }
  }
}

// :: (NodeRange, number) → this
// Split the content in the given range off from its parent, if there
// is sibling content before or after it, and move it up the tree to
// the depth specified by `target`. You'll probably want to use
// [`liftTarget`](#transform.liftTarget) to compute `target`, to make
// sure the lift is valid.
Transform.prototype.lift = function(range, target) {
  var $from = range.$from;
  var $to = range.$to;
  var depth = range.depth;

  var gapStart = $from.before(depth + 1), gapEnd = $to.after(depth + 1);
  var start = gapStart, end = gapEnd;

  var before = Fragment.empty, openStart = 0;
  for (var d = depth, splitting = false; d > target; d--)
    { if (splitting || $from.index(d) > 0) {
      splitting = true;
      before = Fragment.from($from.node(d).copy(before));
      openStart++;
    } else {
      start--;
    } }
  var after = Fragment.empty, openEnd = 0;
  for (var d$1 = depth, splitting$1 = false; d$1 > target; d$1--)
    { if (splitting$1 || $to.after(d$1 + 1) < $to.end(d$1)) {
      splitting$1 = true;
      after = Fragment.from($to.node(d$1).copy(after));
      openEnd++;
    } else {
      end++;
    } }

  return this.step(new ReplaceAroundStep(start, end, gapStart, gapEnd,
                                         new Slice(before.append(after), openStart, openEnd),
                                         before.size - openStart, true))
};

// :: (NodeRange, [{type: NodeType, attrs: ?Object}]) → this
// Wrap the given [range](#model.NodeRange) in the given set of wrappers.
// The wrappers are assumed to be valid in this position, and should
// probably be computed with [`findWrapping`](#transform.findWrapping).
Transform.prototype.wrap = function(range, wrappers) {
  var content = Fragment.empty;
  for (var i = wrappers.length - 1; i >= 0; i--)
    { content = Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content)); }

  var start = range.start, end = range.end;
  return this.step(new ReplaceAroundStep(start, end, start, end, new Slice(content, 0, 0), wrappers.length, true))
};

// :: (number, ?number, NodeType, ?Object) → this
// Set the type of all textblocks (partly) between `from` and `to` to
// the given node type with the given attributes.
Transform.prototype.setBlockType = function(from, to, type, attrs) {
  var this$1 = this;
  if ( to === void 0 ) to = from;

  if (!type.isTextblock) { throw new RangeError("Type given to setBlockType should be a textblock") }
  var mapFrom = this.steps.length;
  this.doc.nodesBetween(from, to, function (node, pos) {
    if (node.isTextblock && !node.hasMarkup(type, attrs) && canChangeType(this$1.doc, this$1.mapping.slice(mapFrom).map(pos), type)) {
      // Ensure all markup that isn't allowed in the new node type is cleared
      this$1.clearIncompatible(this$1.mapping.slice(mapFrom).map(pos, 1), type);
      var mapping = this$1.mapping.slice(mapFrom);
      var startM = mapping.map(pos, 1), endM = mapping.map(pos + node.nodeSize, 1);
      this$1.step(new ReplaceAroundStep(startM, endM, startM + 1, endM - 1,
                                      new Slice(Fragment.from(type.create(attrs, null, node.marks)), 0, 0), 1, true));
      return false
    }
  });
  return this
};

function canChangeType(doc, pos, type) {
  var $pos = doc.resolve(pos), index = $pos.index();
  return $pos.parent.canReplaceWith(index, index + 1, type)
}

// :: (number, ?NodeType, ?Object, ?[Mark]) → this
// Change the type, attributes, and/or marks of the node at `pos`.
// When `type` isn't given, the existing node type is preserved,
Transform.prototype.setNodeMarkup = function(pos, type, attrs, marks) {
  var node = this.doc.nodeAt(pos);
  if (!node) { throw new RangeError("No node at given position") }
  if (!type) { type = node.type; }
  var newNode = type.create(attrs, null, marks || node.marks);
  if (node.isLeaf)
    { return this.replaceWith(pos, pos + node.nodeSize, newNode) }

  if (!type.validContent(node.content))
    { throw new RangeError("Invalid content for node type " + type.name) }

  return this.step(new ReplaceAroundStep(pos, pos + node.nodeSize, pos + 1, pos + node.nodeSize - 1,
                                         new Slice(Fragment.from(newNode), 0, 0), 1, true))
};

// :: (Node, number, number, ?[?{type: NodeType, attrs: ?Object}]) → bool
// Check whether splitting at the given position is allowed.
function canSplit(doc, pos, depth, typesAfter) {
  if ( depth === void 0 ) depth = 1;

  var $pos = doc.resolve(pos), base = $pos.depth - depth;
  var innerType = (typesAfter && typesAfter[typesAfter.length - 1]) || $pos.parent;
  if (base < 0 || $pos.parent.type.spec.isolating ||
      !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) ||
      !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount)))
    { return false }
  for (var d = $pos.depth - 1, i = depth - 2; d > base; d--, i--) {
    var node = $pos.node(d), index$1 = $pos.index(d);
    if (node.type.spec.isolating) { return false }
    var rest = node.content.cutByIndex(index$1, node.childCount);
    var after = (typesAfter && typesAfter[i]) || node;
    if (after != node) { rest = rest.replaceChild(0, after.type.create(after.attrs)); }
    if (!node.canReplace(index$1 + 1, node.childCount) || !after.type.validContent(rest))
      { return false }
  }
  var index = $pos.indexAfter(base);
  var baseType = typesAfter && typesAfter[0];
  return $pos.node(base).canReplaceWith(index, index, baseType ? baseType.type : $pos.node(base + 1).type)
}

// :: (number, ?number, ?[?{type: NodeType, attrs: ?Object}]) → this
// Split the node at the given position, and optionally, if `depth` is
// greater than one, any number of nodes above that. By default, the
// parts split off will inherit the node type of the original node.
// This can be changed by passing an array of types and attributes to
// use after the split.
Transform.prototype.split = function(pos, depth, typesAfter) {
  if ( depth === void 0 ) depth = 1;

  var $pos = this.doc.resolve(pos), before = Fragment.empty, after = Fragment.empty;
  for (var d = $pos.depth, e = $pos.depth - depth, i = depth - 1; d > e; d--, i--) {
    before = Fragment.from($pos.node(d).copy(before));
    var typeAfter = typesAfter && typesAfter[i];
    after = Fragment.from(typeAfter ? typeAfter.type.create(typeAfter.attrs, after) : $pos.node(d).copy(after));
  }
  return this.step(new ReplaceStep(pos, pos, new Slice(before.append(after), depth, depth), true))
};

// :: (Node, number) → bool
// Test whether the blocks before and after a given position can be
// joined.
function canJoin(doc, pos) {
  var $pos = doc.resolve(pos), index = $pos.index();
  return joinable$1($pos.nodeBefore, $pos.nodeAfter) &&
    $pos.parent.canReplace(index, index + 1)
}

function joinable$1(a, b) {
  return a && b && !a.isLeaf && a.canAppend(b)
}

// :: (number, ?number) → this
// Join the blocks around the given position. If depth is 2, their
// last and first siblings are also joined, and so on.
Transform.prototype.join = function(pos, depth) {
  if ( depth === void 0 ) depth = 1;

  var step = new ReplaceStep(pos - depth, pos + depth, Slice.empty, true);
  return this.step(step)
};

// :: (Node, number, NodeType) → ?number
// Try to find a point where a node of the given type can be inserted
// near `pos`, by searching up the node hierarchy when `pos` itself
// isn't a valid place but is at the start or end of a node. Return
// null if no position was found.
function insertPoint(doc, pos, nodeType) {
  var $pos = doc.resolve(pos);
  if ($pos.parent.canReplaceWith($pos.index(), $pos.index(), nodeType)) { return pos }

  if ($pos.parentOffset == 0)
    { for (var d = $pos.depth - 1; d >= 0; d--) {
      var index = $pos.index(d);
      if ($pos.node(d).canReplaceWith(index, index, nodeType)) { return $pos.before(d + 1) }
      if (index > 0) { return null }
    } }
  if ($pos.parentOffset == $pos.parent.content.size)
    { for (var d$1 = $pos.depth - 1; d$1 >= 0; d$1--) {
      var index$1 = $pos.indexAfter(d$1);
      if ($pos.node(d$1).canReplaceWith(index$1, index$1, nodeType)) { return $pos.after(d$1 + 1) }
      if (index$1 < $pos.node(d$1).childCount) { return null }
    } }
}

// :: (Node, number, Slice) → ?number
// Finds a position at or around the given position where the given
// slice can be inserted. Will look at parent nodes' nearest boundary
// and try there, even if the original position wasn't directly at the
// start or end of that node. Returns null when no position was found.
function dropPoint(doc, pos, slice) {
  var $pos = doc.resolve(pos);
  if (!slice.content.size) { return pos }
  var content = slice.content;
  for (var i = 0; i < slice.openStart; i++) { content = content.firstChild.content; }
  for (var pass = 1; pass <= (slice.openStart == 0 && slice.size ? 2 : 1); pass++) {
    for (var d = $pos.depth; d >= 0; d--) {
      var bias = d == $pos.depth ? 0 : $pos.pos <= ($pos.start(d + 1) + $pos.end(d + 1)) / 2 ? -1 : 1;
      var insertPos = $pos.index(d) + (bias > 0 ? 1 : 0);
      if (pass == 1
          ? $pos.node(d).canReplace(insertPos, insertPos, content)
          : $pos.node(d).contentMatchAt(insertPos).findWrapping(content.firstChild.type))
        { return bias == 0 ? $pos.pos : bias < 0 ? $pos.before(d + 1) : $pos.after(d + 1) }
    }
  }
  return null
}

function mapFragment(fragment, f, parent) {
  var mapped = [];
  for (var i = 0; i < fragment.childCount; i++) {
    var child = fragment.child(i);
    if (child.content.size) { child = child.copy(mapFragment(child.content, f, child)); }
    if (child.isInline) { child = f(child, parent, i); }
    mapped.push(child);
  }
  return Fragment.fromArray(mapped)
}

// ::- Add a mark to all inline content between two positions.
var AddMarkStep = /*@__PURE__*/(function (Step) {
  function AddMarkStep(from, to, mark) {
    Step.call(this);
    this.from = from;
    this.to = to;
    this.mark = mark;
  }

  if ( Step ) AddMarkStep.__proto__ = Step;
  AddMarkStep.prototype = Object.create( Step && Step.prototype );
  AddMarkStep.prototype.constructor = AddMarkStep;

  AddMarkStep.prototype.apply = function apply (doc) {
    var this$1 = this;

    var oldSlice = doc.slice(this.from, this.to), $from = doc.resolve(this.from);
    var parent = $from.node($from.sharedDepth(this.to));
    var slice = new Slice(mapFragment(oldSlice.content, function (node, parent) {
      if (!parent.type.allowsMarkType(this$1.mark.type)) { return node }
      return node.mark(this$1.mark.addToSet(node.marks))
    }, parent), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc, this.from, this.to, slice)
  };

  AddMarkStep.prototype.invert = function invert () {
    return new RemoveMarkStep(this.from, this.to, this.mark)
  };

  AddMarkStep.prototype.map = function map (mapping) {
    var from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from.deleted && to.deleted || from.pos >= to.pos) { return null }
    return new AddMarkStep(from.pos, to.pos, this.mark)
  };

  AddMarkStep.prototype.merge = function merge (other) {
    if (other instanceof AddMarkStep &&
        other.mark.eq(this.mark) &&
        this.from <= other.to && this.to >= other.from)
      { return new AddMarkStep(Math.min(this.from, other.from),
                             Math.max(this.to, other.to), this.mark) }
  };

  AddMarkStep.prototype.toJSON = function toJSON () {
    return {stepType: "addMark", mark: this.mark.toJSON(),
            from: this.from, to: this.to}
  };

  AddMarkStep.fromJSON = function fromJSON (schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number")
      { throw new RangeError("Invalid input for AddMarkStep.fromJSON") }
    return new AddMarkStep(json.from, json.to, schema.markFromJSON(json.mark))
  };

  return AddMarkStep;
}(Step));

Step.jsonID("addMark", AddMarkStep);

// ::- Remove a mark from all inline content between two positions.
var RemoveMarkStep = /*@__PURE__*/(function (Step) {
  function RemoveMarkStep(from, to, mark) {
    Step.call(this);
    this.from = from;
    this.to = to;
    this.mark = mark;
  }

  if ( Step ) RemoveMarkStep.__proto__ = Step;
  RemoveMarkStep.prototype = Object.create( Step && Step.prototype );
  RemoveMarkStep.prototype.constructor = RemoveMarkStep;

  RemoveMarkStep.prototype.apply = function apply (doc) {
    var this$1 = this;

    var oldSlice = doc.slice(this.from, this.to);
    var slice = new Slice(mapFragment(oldSlice.content, function (node) {
      return node.mark(this$1.mark.removeFromSet(node.marks))
    }), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc, this.from, this.to, slice)
  };

  RemoveMarkStep.prototype.invert = function invert () {
    return new AddMarkStep(this.from, this.to, this.mark)
  };

  RemoveMarkStep.prototype.map = function map (mapping) {
    var from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from.deleted && to.deleted || from.pos >= to.pos) { return null }
    return new RemoveMarkStep(from.pos, to.pos, this.mark)
  };

  RemoveMarkStep.prototype.merge = function merge (other) {
    if (other instanceof RemoveMarkStep &&
        other.mark.eq(this.mark) &&
        this.from <= other.to && this.to >= other.from)
      { return new RemoveMarkStep(Math.min(this.from, other.from),
                                Math.max(this.to, other.to), this.mark) }
  };

  RemoveMarkStep.prototype.toJSON = function toJSON () {
    return {stepType: "removeMark", mark: this.mark.toJSON(),
            from: this.from, to: this.to}
  };

  RemoveMarkStep.fromJSON = function fromJSON (schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number")
      { throw new RangeError("Invalid input for RemoveMarkStep.fromJSON") }
    return new RemoveMarkStep(json.from, json.to, schema.markFromJSON(json.mark))
  };

  return RemoveMarkStep;
}(Step));

Step.jsonID("removeMark", RemoveMarkStep);

// :: (number, number, Mark) → this
// Add the given mark to the inline content between `from` and `to`.
Transform.prototype.addMark = function(from, to, mark) {
  var this$1 = this;

  var removed = [], added = [], removing = null, adding = null;
  this.doc.nodesBetween(from, to, function (node, pos, parent) {
    if (!node.isInline) { return }
    var marks = node.marks;
    if (!mark.isInSet(marks) && parent.type.allowsMarkType(mark.type)) {
      var start = Math.max(pos, from), end = Math.min(pos + node.nodeSize, to);
      var newSet = mark.addToSet(marks);

      for (var i = 0; i < marks.length; i++) {
        if (!marks[i].isInSet(newSet)) {
          if (removing && removing.to == start && removing.mark.eq(marks[i]))
            { removing.to = end; }
          else
            { removed.push(removing = new RemoveMarkStep(start, end, marks[i])); }
        }
      }

      if (adding && adding.to == start)
        { adding.to = end; }
      else
        { added.push(adding = new AddMarkStep(start, end, mark)); }
    }
  });

  removed.forEach(function (s) { return this$1.step(s); });
  added.forEach(function (s) { return this$1.step(s); });
  return this
};

// :: (number, number, ?union<Mark, MarkType>) → this
// Remove marks from inline nodes between `from` and `to`. When `mark`
// is a single mark, remove precisely that mark. When it is a mark type,
// remove all marks of that type. When it is null, remove all marks of
// any type.
Transform.prototype.removeMark = function(from, to, mark) {
  var this$1 = this;
  if ( mark === void 0 ) mark = null;

  var matched = [], step = 0;
  this.doc.nodesBetween(from, to, function (node, pos) {
    if (!node.isInline) { return }
    step++;
    var toRemove = null;
    if (mark instanceof MarkType) {
      var found = mark.isInSet(node.marks);
      if (found) { toRemove = [found]; }
    } else if (mark) {
      if (mark.isInSet(node.marks)) { toRemove = [mark]; }
    } else {
      toRemove = node.marks;
    }
    if (toRemove && toRemove.length) {
      var end = Math.min(pos + node.nodeSize, to);
      for (var i = 0; i < toRemove.length; i++) {
        var style = toRemove[i], found$1 = (void 0);
        for (var j = 0; j < matched.length; j++) {
          var m = matched[j];
          if (m.step == step - 1 && style.eq(matched[j].style)) { found$1 = m; }
        }
        if (found$1) {
          found$1.to = end;
          found$1.step = step;
        } else {
          matched.push({style: style, from: Math.max(pos, from), to: end, step: step});
        }
      }
    }
  });
  matched.forEach(function (m) { return this$1.step(new RemoveMarkStep(m.from, m.to, m.style)); });
  return this
};

// :: (number, NodeType, ?ContentMatch) → this
// Removes all marks and nodes from the content of the node at `pos`
// that don't match the given new parent node type. Accepts an
// optional starting [content match](#model.ContentMatch) as third
// argument.
Transform.prototype.clearIncompatible = function(pos, parentType, match) {
  if ( match === void 0 ) match = parentType.contentMatch;

  var node = this.doc.nodeAt(pos);
  var delSteps = [], cur = pos + 1;
  for (var i = 0; i < node.childCount; i++) {
    var child = node.child(i), end = cur + child.nodeSize;
    var allowed = match.matchType(child.type, child.attrs);
    if (!allowed) {
      delSteps.push(new ReplaceStep(cur, end, Slice.empty));
    } else {
      match = allowed;
      for (var j = 0; j < child.marks.length; j++) { if (!parentType.allowsMarkType(child.marks[j].type))
        { this.step(new RemoveMarkStep(cur, end, child.marks[j])); } }
    }
    cur = end;
  }
  if (!match.validEnd) {
    var fill = match.fillBefore(Fragment.empty, true);
    this.replace(cur, cur, new Slice(fill, 0, 0));
  }
  for (var i$1 = delSteps.length - 1; i$1 >= 0; i$1--) { this.step(delSteps[i$1]); }
  return this
};

// :: (Node, number, ?number, ?Slice) → ?Step
// ‘Fit’ a slice into a given position in the document, producing a
// [step](#transform.Step) that inserts it. Will return null if
// there's no meaningful way to insert the slice here, or inserting it
// would be a no-op (an empty slice over an empty range).
function replaceStep(doc, from, to, slice) {
  if ( to === void 0 ) to = from;
  if ( slice === void 0 ) slice = Slice.empty;

  if (from == to && !slice.size) { return null }

  var $from = doc.resolve(from), $to = doc.resolve(to);
  // Optimization -- avoid work if it's obvious that it's not needed.
  if (fitsTrivially($from, $to, slice)) { return new ReplaceStep(from, to, slice) }
  var placed = placeSlice($from, slice);

  var fittedLeft = fitLeft($from, placed);
  var fitted = fitRight($from, $to, fittedLeft);
  if (!fitted) { return null }
  if (fittedLeft.size != fitted.size && canMoveText($from, $to, fittedLeft)) {
    var d = $to.depth, after = $to.after(d);
    while (d > 1 && after == $to.end(--d)) { ++after; }
    var fittedAfter = fitRight($from, doc.resolve(after), fittedLeft);
    if (fittedAfter)
      { return new ReplaceAroundStep(from, after, to, $to.end(), fittedAfter, fittedLeft.size) }
  }
  return fitted.size || from != to ? new ReplaceStep(from, to, fitted) : null
}

// :: (number, ?number, ?Slice) → this
// Replace the part of the document between `from` and `to` with the
// given `slice`.
Transform.prototype.replace = function(from, to, slice) {
  if ( to === void 0 ) to = from;
  if ( slice === void 0 ) slice = Slice.empty;

  var step = replaceStep(this.doc, from, to, slice);
  if (step) { this.step(step); }
  return this
};

// :: (number, number, union<Fragment, Node, [Node]>) → this
// Replace the given range with the given content, which may be a
// fragment, node, or array of nodes.
Transform.prototype.replaceWith = function(from, to, content) {
  return this.replace(from, to, new Slice(Fragment.from(content), 0, 0))
};

// :: (number, number) → this
// Delete the content between the given positions.
Transform.prototype.delete = function(from, to) {
  return this.replace(from, to, Slice.empty)
};

// :: (number, union<Fragment, Node, [Node]>) → this
// Insert the given content at the given position.
Transform.prototype.insert = function(pos, content) {
  return this.replaceWith(pos, pos, content)
};



function fitLeftInner($from, depth, placed, placedBelow) {
  var content = Fragment.empty, openEnd = 0, placedHere = placed[depth];
  if ($from.depth > depth) {
    var inner = fitLeftInner($from, depth + 1, placed, placedBelow || placedHere);
    openEnd = inner.openEnd + 1;
    content = Fragment.from($from.node(depth + 1).copy(inner.content));
  }

  if (placedHere) {
    content = content.append(placedHere.content);
    openEnd = placedHere.openEnd;
  }
  if (placedBelow) {
    content = content.append($from.node(depth).contentMatchAt($from.indexAfter(depth)).fillBefore(Fragment.empty, true));
    openEnd = 0;
  }

  return {content: content, openEnd: openEnd}
}

function fitLeft($from, placed) {
  var ref = fitLeftInner($from, 0, placed, false);
  var content = ref.content;
  var openEnd = ref.openEnd;
  return new Slice(content, $from.depth, openEnd || 0)
}

function fitRightJoin(content, parent, $from, $to, depth, openStart, openEnd) {
  var match, count = content.childCount, matchCount = count - (openEnd > 0 ? 1 : 0);
  var parentNode = openStart < 0 ? parent : $from.node(depth);
  if (openStart < 0)
    { match = parentNode.contentMatchAt(matchCount); }
  else if (count == 1 && openEnd > 0)
    { match = parentNode.contentMatchAt(openStart ? $from.index(depth) : $from.indexAfter(depth)); }
  else
    { match = parentNode.contentMatchAt($from.indexAfter(depth))
      .matchFragment(content, count > 0 && openStart ? 1 : 0, matchCount); }

  var toNode = $to.node(depth);
  if (openEnd > 0 && depth < $to.depth) {
    var after = toNode.content.cutByIndex($to.indexAfter(depth)).addToStart(content.lastChild);
    var joinable$1 = match.fillBefore(after, true);
    // Can't insert content if there's a single node stretched across this gap
    if (joinable$1 && joinable$1.size && openStart > 0 && count == 1) { joinable$1 = null; }

    if (joinable$1) {
      var inner = fitRightJoin(content.lastChild.content, content.lastChild, $from, $to,
                               depth + 1, count == 1 ? openStart - 1 : -1, openEnd - 1);
      if (inner) {
        var last = content.lastChild.copy(inner);
        if (joinable$1.size)
          { return content.cutByIndex(0, count - 1).append(joinable$1).addToEnd(last) }
        else
          { return content.replaceChild(count - 1, last) }
      }
    }
  }
  if (openEnd > 0)
    { match = match.matchType((count == 1 && openStart > 0 ? $from.node(depth + 1) : content.lastChild).type); }

  // If we're here, the next level can't be joined, so we see what
  // happens if we leave it open.
  var toIndex = $to.index(depth);
  if (toIndex == toNode.childCount && !toNode.type.compatibleContent(parent.type)) { return null }
  var joinable = match.fillBefore(toNode.content, true, toIndex);
  for (var i = toIndex; joinable && i < toNode.content.childCount; i++)
    { if (!parentNode.type.allowsMarks(toNode.content.child(i).marks)) { joinable = null; } }
  if (!joinable) { return null }

  if (openEnd > 0) {
    var closed = fitRightClosed(content.lastChild, openEnd - 1, $from, depth + 1,
                                count == 1 ? openStart - 1 : -1);
    content = content.replaceChild(count - 1, closed);
  }
  content = content.append(joinable);
  if ($to.depth > depth)
    { content = content.addToEnd(fitRightSeparate($to, depth + 1)); }
  return content
}

function fitRightClosed(node, openEnd, $from, depth, openStart) {
  var match, content = node.content, count = content.childCount;
  if (openStart >= 0)
    { match = $from.node(depth).contentMatchAt($from.indexAfter(depth))
      .matchFragment(content, openStart > 0 ? 1 : 0, count); }
  else
    { match = node.contentMatchAt(count); }

  if (openEnd > 0) {
    var closed = fitRightClosed(content.lastChild, openEnd - 1, $from, depth + 1,
                                count == 1 ? openStart - 1 : -1);
    content = content.replaceChild(count - 1, closed);
  }

  return node.copy(content.append(match.fillBefore(Fragment.empty, true)))
}

function fitRightSeparate($to, depth) {
  var node = $to.node(depth);
  var fill = node.contentMatchAt(0).fillBefore(node.content, true, $to.index(depth));
  if ($to.depth > depth) { fill = fill.addToEnd(fitRightSeparate($to, depth + 1)); }
  return node.copy(fill)
}

function normalizeSlice(content, openStart, openEnd) {
  while (openStart > 0 && openEnd > 0 && content.childCount == 1) {
    content = content.firstChild.content;
    openStart--;
    openEnd--;
  }
  return new Slice(content, openStart, openEnd)
}

// : (ResolvedPos, ResolvedPos, number, Slice) → Slice
function fitRight($from, $to, slice) {
  var fitted = fitRightJoin(slice.content, $from.node(0), $from, $to, 0, slice.openStart, slice.openEnd);
  if (!fitted) { return null }
  return normalizeSlice(fitted, slice.openStart, $to.depth)
}

function fitsTrivially($from, $to, slice) {
  return !slice.openStart && !slice.openEnd && $from.start() == $to.start() &&
    $from.parent.canReplace($from.index(), $to.index(), slice.content)
}

function canMoveText($from, $to, slice) {
  if (!$to.parent.isTextblock) { return false }

  var parent = slice.openEnd ? nodeRight(slice.content, slice.openEnd)
      : $from.node($from.depth - (slice.openStart - slice.openEnd));
  if (!parent.isTextblock) { return false }
  for (var i = $to.index(); i < $to.parent.childCount; i++)
    { if (!parent.type.allowsMarks($to.parent.child(i).marks)) { return false } }
  var match;
  if (slice.openEnd) {
    match = parent.contentMatchAt(parent.childCount);
  } else {
    match = parent.contentMatchAt(parent.childCount);
    if (slice.size) { match = match.matchFragment(slice.content, slice.openStart ? 1 : 0); }
  }
  match = match.matchFragment($to.parent.content, $to.index());
  return match && match.validEnd
}

function nodeRight(content, depth) {
  for (var i = 1; i < depth; i++) { content = content.lastChild.content; }
  return content.lastChild
}

// Algorithm for 'placing' the elements of a slice into a gap:
//
// We consider the content of each node that is open to the left to be
// independently placeable. I.e. in <p("foo"), p("bar")>, when the
// paragraph on the left is open, "foo" can be placed (somewhere on
// the left side of the replacement gap) independently from p("bar").
//
// So placeSlice splits up a slice into a number of sub-slices,
// along with information on where they can be placed on the given
// left-side edge. It works by walking the open side of the slice,
// from the inside out, and trying to find a landing spot for each
// element, by simultaneously scanning over the gap side. When no
// place is found for an open node's content, it is left in that node.

// : (ResolvedPos, Slice) → [{content: Fragment, openEnd: number, depth: number}]
function placeSlice($from, slice) {
  var frontier = new Frontier($from);
  for (var pass = 1; slice.size && pass <= 3; pass++) {
    var value = frontier.placeSlice(slice.content, slice.openStart, slice.openEnd, pass);
    if (pass == 3 && value != slice && value.size) { pass = 0; } // Restart if the 3rd pass made progress but left content
    slice = value;
  }
  while (frontier.open.length) { frontier.closeNode(); }
  return frontier.placed
}

// Helper class that models the open side of the insert position,
// keeping track of the content match and already inserted content
// at each depth.
var Frontier = function Frontier($pos) {
  // : [{parent: Node, match: ContentMatch, content: Fragment, wrapper: bool, openEnd: number, depth: number}]
  this.open = [];
  for (var d = 0; d <= $pos.depth; d++) {
    var parent = $pos.node(d), match = parent.contentMatchAt($pos.indexAfter(d));
    this.open.push({parent: parent, match: match, content: Fragment.empty, wrapper: false, openEnd: 0, depth: d});
  }
  this.placed = [];
};

// : (Fragment, number, number, number, ?Node) → Slice
// Tries to place the content of the given slice, and returns a
// slice containing unplaced content.
//
// pass 1: try to fit directly
// pass 2: allow wrapper nodes to be introduced
// pass 3: allow unwrapping of nodes that aren't open
Frontier.prototype.placeSlice = function placeSlice (fragment, openStart, openEnd, pass, parent) {
  if (openStart > 0) {
    var first = fragment.firstChild;
    var inner = this.placeSlice(first.content, Math.max(0, openStart - 1),
                                openEnd && fragment.childCount == 1 ? openEnd - 1 : 0,
                                pass, first);
    if (inner.content != first.content) {
      if (inner.content.size) {
        fragment = fragment.replaceChild(0, first.copy(inner.content));
        openStart = inner.openStart + 1;
      } else {
        if (fragment.childCount == 1) { openEnd = 0; }
        fragment = fragment.cutByIndex(1);
        openStart = 0;
      }
    }
  }
  var result = this.placeContent(fragment, openStart, openEnd, pass, parent);
  if (pass > 2 && result.size && openStart == 0) {
    var child = result.content.firstChild, single = result.content.childCount == 1;
    this.placeContent(child.content, 0, openEnd && single ? openEnd - 1 : 0, pass, child);
    result = single ? Fragment.empty : new Slice(result.content.cutByIndex(1), 0, openEnd);
  }
  return result
};

Frontier.prototype.placeContent = function placeContent (fragment, openStart, openEnd, pass, parent) {
  var i = 0;
  // Go over the fragment's children
  for (; i < fragment.childCount; i++) {
    var child = fragment.child(i), placed = false, last = i == fragment.childCount - 1;
    // Try each open node in turn, starting from the innermost
    for (var d = this.open.length - 1; d >= 0; d--) {
      var open = this.open[d], wrap = (void 0);

      // If pass > 1, it is allowed to wrap the node to help find a
      // fit, so if findWrapping returns something, we add open
      // nodes to the frontier for that wrapping.
      if (pass > 1 && (wrap = open.match.findWrapping(child.type)) &&
          !(parent && wrap.length && wrap[wrap.length - 1] == parent.type)) {
        while (this.open.length - 1 > d) { this.closeNode(); }
        for (var w = 0; w < wrap.length; w++) {
          open.match = open.match.matchType(wrap[w]);
          d++;
          open = {parent: wrap[w].create(),
                  match: wrap[w].contentMatch,
                  content: Fragment.empty, wrapper: true, openEnd: 0, depth: d + w};
          this.open.push(open);
        }
      }

      // See if the child fits here
      var match = open.match.matchType(child.type);
      if (!match) {
        var fill = open.match.fillBefore(Fragment.from(child));
        if (fill) {
          for (var j = 0; j < fill.childCount; j++) {
            var ch = fill.child(j);
            this.addNode(open, ch, 0);
            match = open.match.matchFragment(ch);
          }
        } else if (parent && open.match.matchType(parent.type)) {
          // Don't continue looking further up if the parent node
          // would fit here.
          break
        } else {
          continue
        }
      }

      // Close open nodes above this one, since we're starting to
      // add to this.
      while (this.open.length - 1 > d) { this.closeNode(); }
      // Strip marks from the child or close its start when necessary
      child = child.mark(open.parent.type.allowedMarks(child.marks));
      if (openStart) {
        child = closeNodeStart(child, openStart, last ? openEnd : 0);
        openStart = 0;
      }
      // Add the child to this open node and adjust its metadata
      this.addNode(open, child, last ? openEnd : 0);
      open.match = match;
      if (last) { openEnd = 0; }
      placed = true;
      break
    }
    // As soon as we've failed to place a node we stop looking at
    // later nodes
    if (!placed) { break }
  }
  // Close the current open node if it's not the the root and we
  // either placed up to the end of the node or the the current
  // slice depth's node type matches the open node's type
  if (this.open.length > 1 &&
      (i > 0 && i == fragment.childCount ||
       parent && this.open[this.open.length - 1].parent.type == parent.type))
    { this.closeNode(); }

  return new Slice(fragment.cutByIndex(i), openStart, openEnd)
};

Frontier.prototype.addNode = function addNode (open, node, openEnd) {
  open.content = closeFragmentEnd(open.content, open.openEnd).addToEnd(node);
  open.openEnd = openEnd;
};

Frontier.prototype.closeNode = function closeNode () {
  var open = this.open.pop();
  if (open.content.size == 0) ; else if (open.wrapper) {
    this.addNode(this.open[this.open.length - 1], open.parent.copy(open.content), open.openEnd + 1);
  } else {
    this.placed[open.depth] = {depth: open.depth, content: open.content, openEnd: open.openEnd};
  }
};

function closeNodeStart(node, openStart, openEnd) {
  var content = node.content;
  if (openStart > 1) {
    var first = closeNodeStart(node.firstChild, openStart - 1, node.childCount == 1 ? openEnd - 1 : 0);
    content = node.content.replaceChild(0, first);
  }
  var fill = node.type.contentMatch.fillBefore(content, openEnd == 0);
  return node.copy(fill.append(content))
}

function closeNodeEnd(node, depth) {
  var content = node.content;
  if (depth > 1) {
    var last = closeNodeEnd(node.lastChild, depth - 1);
    content = node.content.replaceChild(node.childCount - 1, last);
  }
  var fill = node.contentMatchAt(node.childCount).fillBefore(Fragment.empty, true);
  return node.copy(content.append(fill))
}

function closeFragmentEnd(fragment, depth) {
  return depth ? fragment.replaceChild(fragment.childCount - 1, closeNodeEnd(fragment.lastChild, depth)) : fragment
}

// :: (number, number, Slice) → this
// Replace a range of the document with a given slice, using `from`,
// `to`, and the slice's [`openStart`](#model.Slice.openStart) property
// as hints, rather than fixed start and end points. This method may
// grow the replaced area or close open nodes in the slice in order to
// get a fit that is more in line with WYSIWYG expectations, by
// dropping fully covered parent nodes of the replaced region when
// they are marked [non-defining](#model.NodeSpec.defining), or
// including an open parent node from the slice that _is_ marked as
// [defining](#model.NodeSpec.defining).
//
// This is the method, for example, to handle paste. The similar
// [`replace`](#transform.Transform.replace) method is a more
// primitive tool which will _not_ move the start and end of its given
// range, and is useful in situations where you need more precise
// control over what happens.
Transform.prototype.replaceRange = function(from, to, slice) {
  if (!slice.size) { return this.deleteRange(from, to) }

  var $from = this.doc.resolve(from), $to = this.doc.resolve(to);
  if (fitsTrivially($from, $to, slice))
    { return this.step(new ReplaceStep(from, to, slice)) }

  var targetDepths = coveredDepths($from, this.doc.resolve(to));
  // Can't replace the whole document, so remove 0 if it's present
  if (targetDepths[targetDepths.length - 1] == 0) { targetDepths.pop(); }
  // Negative numbers represent not expansion over the whole node at
  // that depth, but replacing from $from.before(-D) to $to.pos.
  var preferredTarget = -($from.depth + 1);
  targetDepths.unshift(preferredTarget);
  // This loop picks a preferred target depth, if one of the covering
  // depths is not outside of a defining node, and adds negative
  // depths for any depth that has $from at its start and does not
  // cross a defining node.
  for (var d = $from.depth, pos = $from.pos - 1; d > 0; d--, pos--) {
    var spec = $from.node(d).type.spec;
    if (spec.defining || spec.isolating) { break }
    if (targetDepths.indexOf(d) > -1) { preferredTarget = d; }
    else if ($from.before(d) == pos) { targetDepths.splice(1, 0, -d); }
  }
  // Try to fit each possible depth of the slice into each possible
  // target depth, starting with the preferred depths.
  var preferredTargetIndex = targetDepths.indexOf(preferredTarget);

  var leftNodes = [], preferredDepth = slice.openStart;
  for (var content = slice.content, i = 0;; i++) {
    var node = content.firstChild;
    leftNodes.push(node);
    if (i == slice.openStart) { break }
    content = node.content;
  }
  // Back up if the node directly above openStart, or the node above
  // that separated only by a non-defining textblock node, is defining.
  if (preferredDepth > 0 && leftNodes[preferredDepth - 1].type.spec.defining &&
      $from.node(preferredTargetIndex).type != leftNodes[preferredDepth - 1].type)
    { preferredDepth -= 1; }
  else if (preferredDepth >= 2 && leftNodes[preferredDepth - 1].isTextblock && leftNodes[preferredDepth - 2].type.spec.defining &&
           $from.node(preferredTargetIndex).type != leftNodes[preferredDepth - 2].type)
    { preferredDepth -= 2; }

  for (var j = slice.openStart; j >= 0; j--) {
    var openDepth = (j + preferredDepth + 1) % (slice.openStart + 1);
    var insert = leftNodes[openDepth];
    if (!insert) { continue }
    for (var i$1 = 0; i$1 < targetDepths.length; i$1++) {
      // Loop over possible expansion levels, starting with the
      // preferred one
      var targetDepth = targetDepths[(i$1 + preferredTargetIndex) % targetDepths.length], expand = true;
      if (targetDepth < 0) { expand = false; targetDepth = -targetDepth; }
      var parent = $from.node(targetDepth - 1), index = $from.index(targetDepth - 1);
      if (parent.canReplaceWith(index, index, insert.type, insert.marks))
        { return this.replace($from.before(targetDepth), expand ? $to.after(targetDepth) : to,
                            new Slice(closeFragment(slice.content, 0, slice.openStart, openDepth),
                                      openDepth, slice.openEnd)) }
    }
  }

  var startSteps = this.steps.length;
  for (var i$2 = targetDepths.length - 1; i$2 >= 0; i$2--) {
    this.replace(from, to, slice);
    if (this.steps.length > startSteps) { break }
    var depth = targetDepths[i$2];
    if (i$2 < 0) { continue }
    from = $from.before(depth); to = $to.after(depth);
  }
  return this
};

function closeFragment(fragment, depth, oldOpen, newOpen, parent) {
  if (depth < oldOpen) {
    var first = fragment.firstChild;
    fragment = fragment.replaceChild(0, first.copy(closeFragment(first.content, depth + 1, oldOpen, newOpen, first)));
  }
  if (depth > newOpen) {
    var match = parent.contentMatchAt(0);
    var start = match.fillBefore(fragment).append(fragment);
    fragment = start.append(match.matchFragment(start).fillBefore(Fragment.empty, true));
  }
  return fragment
}

// :: (number, number, Node) → this
// Replace the given range with a node, but use `from` and `to` as
// hints, rather than precise positions. When from and to are the same
// and are at the start or end of a parent node in which the given
// node doesn't fit, this method may _move_ them out towards a parent
// that does allow the given node to be placed. When the given range
// completely covers a parent node, this method may completely replace
// that parent node.
Transform.prototype.replaceRangeWith = function(from, to, node) {
  if (!node.isInline && from == to && this.doc.resolve(from).parent.content.size) {
    var point = insertPoint(this.doc, from, node.type);
    if (point != null) { from = to = point; }
  }
  return this.replaceRange(from, to, new Slice(Fragment.from(node), 0, 0))
};

// :: (number, number) → this
// Delete the given range, expanding it to cover fully covered
// parent nodes until a valid replace is found.
Transform.prototype.deleteRange = function(from, to) {
  var $from = this.doc.resolve(from), $to = this.doc.resolve(to);
  var covered = coveredDepths($from, $to);
  for (var i = 0; i < covered.length; i++) {
    var depth = covered[i], last = i == covered.length - 1;
    if ((last && depth == 0) || $from.node(depth).type.contentMatch.validEnd)
      { return this.delete($from.start(depth), $to.end(depth)) }
    if (depth > 0 && (last || $from.node(depth - 1).canReplace($from.index(depth - 1), $to.indexAfter(depth - 1))))
      { return this.delete($from.before(depth), $to.after(depth)) }
  }
  for (var d = 1; d <= $from.depth && d <= $to.depth; d++) {
    if (from - $from.start(d) == $from.depth - d && to > $from.end(d) && $to.end(d) - to != $to.depth - d)
      { return this.delete($from.before(d), to) }
  }
  return this.delete(from, to)
};

// : (ResolvedPos, ResolvedPos) → [number]
// Returns an array of all depths for which $from - $to spans the
// whole content of the nodes at that depth.
function coveredDepths($from, $to) {
  var result = [], minDepth = Math.min($from.depth, $to.depth);
  for (var d = minDepth; d >= 0; d--) {
    var start = $from.start(d);
    if (start < $from.pos - ($from.depth - d) ||
        $to.end(d) > $to.pos + ($to.depth - d) ||
        $from.node(d).type.spec.isolating ||
        $to.node(d).type.spec.isolating) { break }
    if (start == $to.start(d)) { result.push(d); }
  }
  return result
}

var classesById = Object.create(null);

// ::- Superclass for editor selections. Every selection type should
// extend this. Should not be instantiated directly.
var Selection = function Selection($anchor, $head, ranges) {
  // :: [SelectionRange]
  // The ranges covered by the selection.
  this.ranges = ranges || [new SelectionRange($anchor.min($head), $anchor.max($head))];
  // :: ResolvedPos
  // The resolved anchor of the selection (the side that stays in
  // place when the selection is modified).
  this.$anchor = $anchor;
  // :: ResolvedPos
  // The resolved head of the selection (the side that moves when
  // the selection is modified).
  this.$head = $head;
};

var prototypeAccessors$8 = { anchor: { configurable: true },head: { configurable: true },from: { configurable: true },to: { configurable: true },$from: { configurable: true },$to: { configurable: true },empty: { configurable: true } };

// :: number
// The selection's anchor, as an unresolved position.
prototypeAccessors$8.anchor.get = function () { return this.$anchor.pos };

// :: number
// The selection's head.
prototypeAccessors$8.head.get = function () { return this.$head.pos };

// :: number
// The lower bound of the selection's main range.
prototypeAccessors$8.from.get = function () { return this.$from.pos };

// :: number
// The upper bound of the selection's main range.
prototypeAccessors$8.to.get = function () { return this.$to.pos };

// :: ResolvedPos
// The resolved lowerbound of the selection's main range.
prototypeAccessors$8.$from.get = function () {
  return this.ranges[0].$from
};

// :: ResolvedPos
// The resolved upper bound of the selection's main range.
prototypeAccessors$8.$to.get = function () {
  return this.ranges[0].$to
};

// :: bool
// Indicates whether the selection contains any content.
prototypeAccessors$8.empty.get = function () {
  var ranges = this.ranges;
  for (var i = 0; i < ranges.length; i++)
    { if (ranges[i].$from.pos != ranges[i].$to.pos) { return false } }
  return true
};

// eq:: (Selection) → bool
// Test whether the selection is the same as another selection.

// map:: (doc: Node, mapping: Mappable) → Selection
// Map this selection through a [mappable](#transform.Mappable) thing. `doc`
// should be the new document to which we are mapping.

// :: () → Slice
// Get the content of this selection as a slice.
Selection.prototype.content = function content () {
  return this.$from.node(0).slice(this.from, this.to, true)
};

// :: (Transaction, ?Slice)
// Replace the selection with a slice or, if no slice is given,
// delete the selection. Will append to the given transaction.
Selection.prototype.replace = function replace (tr, content) {
    if ( content === void 0 ) content = Slice.empty;

  // Put the new selection at the position after the inserted
  // content. When that ended in an inline node, search backwards,
  // to get the position after that node. If not, search forward.
  var lastNode = content.content.lastChild, lastParent = null;
  for (var i = 0; i < content.openEnd; i++) {
    lastParent = lastNode;
    lastNode = lastNode.lastChild;
  }

  var mapFrom = tr.steps.length, ranges = this.ranges;
  for (var i$1 = 0; i$1 < ranges.length; i$1++) {
    var ref = ranges[i$1];
      var $from = ref.$from;
      var $to = ref.$to;
      var mapping = tr.mapping.slice(mapFrom);
    tr.replaceRange(mapping.map($from.pos), mapping.map($to.pos), i$1 ? Slice.empty : content);
    if (i$1 == 0)
      { selectionToInsertionEnd(tr, mapFrom, (lastNode ? lastNode.isInline : lastParent && lastParent.isTextblock) ? -1 : 1); }
  }
};

// :: (Transaction, Node)
// Replace the selection with the given node, appending the changes
// to the given transaction.
Selection.prototype.replaceWith = function replaceWith (tr, node) {
  var mapFrom = tr.steps.length, ranges = this.ranges;
  for (var i = 0; i < ranges.length; i++) {
    var ref = ranges[i];
      var $from = ref.$from;
      var $to = ref.$to;
      var mapping = tr.mapping.slice(mapFrom);
    var from = mapping.map($from.pos), to = mapping.map($to.pos);
    if (i) {
      tr.deleteRange(from, to);
    } else {
      tr.replaceRangeWith(from, to, node);
      selectionToInsertionEnd(tr, mapFrom, node.isInline ? -1 : 1);
    }
  }
};

// toJSON:: () → Object
// Convert the selection to a JSON representation. When implementing
// this for a custom selection class, make sure to give the object a
// `type` property whose value matches the ID under which you
// [registered](#state.Selection^jsonID) your class.

// :: (ResolvedPos, number, ?bool) → ?Selection
// Find a valid cursor or leaf node selection starting at the given
// position and searching back if `dir` is negative, and forward if
// positive. When `textOnly` is true, only consider cursor
// selections. Will return null when no valid selection position is
// found.
Selection.findFrom = function findFrom ($pos, dir, textOnly) {
  var inner = $pos.parent.inlineContent ? new TextSelection($pos)
      : findSelectionIn($pos.node(0), $pos.parent, $pos.pos, $pos.index(), dir, textOnly);
  if (inner) { return inner }

  for (var depth = $pos.depth - 1; depth >= 0; depth--) {
    var found = dir < 0
        ? findSelectionIn($pos.node(0), $pos.node(depth), $pos.before(depth + 1), $pos.index(depth), dir, textOnly)
        : findSelectionIn($pos.node(0), $pos.node(depth), $pos.after(depth + 1), $pos.index(depth) + 1, dir, textOnly);
    if (found) { return found }
  }
};

// :: (ResolvedPos, ?number) → Selection
// Find a valid cursor or leaf node selection near the given
// position. Searches forward first by default, but if `bias` is
// negative, it will search backwards first.
Selection.near = function near ($pos, bias) {
    if ( bias === void 0 ) bias = 1;

  return this.findFrom($pos, bias) || this.findFrom($pos, -bias) || new AllSelection($pos.node(0))
};

// :: (Node) → Selection
// Find the cursor or leaf node selection closest to the start of
// the given document. Will return an
// [`AllSelection`](#state.AllSelection) if no valid position
// exists.
Selection.atStart = function atStart (doc) {
  return findSelectionIn(doc, doc, 0, 0, 1) || new AllSelection(doc)
};

// :: (Node) → Selection
// Find the cursor or leaf node selection closest to the end of the
// given document.
Selection.atEnd = function atEnd (doc) {
  return findSelectionIn(doc, doc, doc.content.size, doc.childCount, -1) || new AllSelection(doc)
};

// :: (Node, Object) → Selection
// Deserialize the JSON representation of a selection. Must be
// implemented for custom classes (as a static class method).
Selection.fromJSON = function fromJSON (doc, json) {
  if (!json || !json.type) { throw new RangeError("Invalid input for Selection.fromJSON") }
  var cls = classesById[json.type];
  if (!cls) { throw new RangeError(("No selection type " + (json.type) + " defined")) }
  return cls.fromJSON(doc, json)
};

// :: (string, constructor<Selection>)
// To be able to deserialize selections from JSON, custom selection
// classes must register themselves with an ID string, so that they
// can be disambiguated. Try to pick something that's unlikely to
// clash with classes from other modules.
Selection.jsonID = function jsonID (id, selectionClass) {
  if (id in classesById) { throw new RangeError("Duplicate use of selection JSON ID " + id) }
  classesById[id] = selectionClass;
  selectionClass.prototype.jsonID = id;
  return selectionClass
};

// :: () → SelectionBookmark
// Get a [bookmark](#state.SelectionBookmark) for this selection,
// which is a value that can be mapped without having access to a
// current document, and later resolved to a real selection for a
// given document again. (This is used mostly by the history to
// track and restore old selections.) The default implementation of
// this method just converts the selection to a text selection and
// returns the bookmark for that.
Selection.prototype.getBookmark = function getBookmark () {
  return TextSelection.between(this.$anchor, this.$head).getBookmark()
};

Object.defineProperties( Selection.prototype, prototypeAccessors$8 );

// :: bool
// Controls whether, when a selection of this type is active in the
// browser, the selected range should be visible to the user. Defaults
// to `true`.
Selection.prototype.visible = true;

// SelectionBookmark:: interface
// A lightweight, document-independent representation of a selection.
// You can define a custom bookmark type for a custom selection class
// to make the history handle it well.
//
//   map:: (mapping: Mapping) → SelectionBookmark
//   Map the bookmark through a set of changes.
//
//   resolve:: (doc: Node) → Selection
//   Resolve the bookmark to a real selection again. This may need to
//   do some error checking and may fall back to a default (usually
//   [`TextSelection.between`](#state.TextSelection^between)) if
//   mapping made the bookmark invalid.

// ::- Represents a selected range in a document.
var SelectionRange = function SelectionRange($from, $to) {
  // :: ResolvedPos
  // The lower bound of the range.
  this.$from = $from;
  // :: ResolvedPos
  // The upper bound of the range.
  this.$to = $to;
};

// ::- A text selection represents a classical editor selection, with
// a head (the moving side) and anchor (immobile side), both of which
// point into textblock nodes. It can be empty (a regular cursor
// position).
var TextSelection = /*@__PURE__*/(function (Selection) {
  function TextSelection($anchor, $head) {
    if ( $head === void 0 ) $head = $anchor;

    Selection.call(this, $anchor, $head);
  }

  if ( Selection ) TextSelection.__proto__ = Selection;
  TextSelection.prototype = Object.create( Selection && Selection.prototype );
  TextSelection.prototype.constructor = TextSelection;

  var prototypeAccessors$1 = { $cursor: { configurable: true } };

  // :: ?ResolvedPos
  // Returns a resolved position if this is a cursor selection (an
  // empty text selection), and null otherwise.
  prototypeAccessors$1.$cursor.get = function () { return this.$anchor.pos == this.$head.pos ? this.$head : null };

  TextSelection.prototype.map = function map (doc, mapping) {
    var $head = doc.resolve(mapping.map(this.head));
    if (!$head.parent.inlineContent) { return Selection.near($head) }
    var $anchor = doc.resolve(mapping.map(this.anchor));
    return new TextSelection($anchor.parent.inlineContent ? $anchor : $head, $head)
  };

  TextSelection.prototype.replace = function replace (tr, content) {
    if ( content === void 0 ) content = Slice.empty;

    Selection.prototype.replace.call(this, tr, content);
    if (content == Slice.empty) {
      var marks = this.$from.marksAcross(this.$to);
      if (marks) { tr.ensureMarks(marks); }
    }
  };

  TextSelection.prototype.eq = function eq (other) {
    return other instanceof TextSelection && other.anchor == this.anchor && other.head == this.head
  };

  TextSelection.prototype.getBookmark = function getBookmark () {
    return new TextBookmark(this.anchor, this.head)
  };

  TextSelection.prototype.toJSON = function toJSON () {
    return {type: "text", anchor: this.anchor, head: this.head}
  };

  TextSelection.fromJSON = function fromJSON (doc, json) {
    if (typeof json.anchor != "number" || typeof json.head != "number")
      { throw new RangeError("Invalid input for TextSelection.fromJSON") }
    return new TextSelection(doc.resolve(json.anchor), doc.resolve(json.head))
  };

  // :: (Node, number, ?number) → TextSelection
  // Create a text selection from non-resolved positions.
  TextSelection.create = function create (doc, anchor, head) {
    if ( head === void 0 ) head = anchor;

    var $anchor = doc.resolve(anchor);
    return new this($anchor, head == anchor ? $anchor : doc.resolve(head))
  };

  // :: (ResolvedPos, ResolvedPos, ?number) → Selection
  // Return a text selection that spans the given positions or, if
  // they aren't text positions, find a text selection near them.
  // `bias` determines whether the method searches forward (default)
  // or backwards (negative number) first. Will fall back to calling
  // [`Selection.near`](#state.Selection^near) when the document
  // doesn't contain a valid text position.
  TextSelection.between = function between ($anchor, $head, bias) {
    var dPos = $anchor.pos - $head.pos;
    if (!bias || dPos) { bias = dPos >= 0 ? 1 : -1; }
    if (!$head.parent.inlineContent) {
      var found = Selection.findFrom($head, bias, true) || Selection.findFrom($head, -bias, true);
      if (found) { $head = found.$head; }
      else { return Selection.near($head, bias) }
    }
    if (!$anchor.parent.inlineContent) {
      if (dPos == 0) {
        $anchor = $head;
      } else {
        $anchor = (Selection.findFrom($anchor, -bias, true) || Selection.findFrom($anchor, bias, true)).$anchor;
        if (($anchor.pos < $head.pos) != (dPos < 0)) { $anchor = $head; }
      }
    }
    return new TextSelection($anchor, $head)
  };

  Object.defineProperties( TextSelection.prototype, prototypeAccessors$1 );

  return TextSelection;
}(Selection));

Selection.jsonID("text", TextSelection);

var TextBookmark = function TextBookmark(anchor, head) {
  this.anchor = anchor;
  this.head = head;
};
TextBookmark.prototype.map = function map (mapping) {
  return new TextBookmark(mapping.map(this.anchor), mapping.map(this.head))
};
TextBookmark.prototype.resolve = function resolve (doc) {
  return TextSelection.between(doc.resolve(this.anchor), doc.resolve(this.head))
};

// ::- A node selection is a selection that points at a single node.
// All nodes marked [selectable](#model.NodeSpec.selectable) can be
// the target of a node selection. In such a selection, `from` and
// `to` point directly before and after the selected node, `anchor`
// equals `from`, and `head` equals `to`..
var NodeSelection = /*@__PURE__*/(function (Selection) {
  function NodeSelection($pos) {
    var node = $pos.nodeAfter;
    var $end = $pos.node(0).resolve($pos.pos + node.nodeSize);
    Selection.call(this, $pos, $end);
    // :: Node The selected node.
    this.node = node;
  }

  if ( Selection ) NodeSelection.__proto__ = Selection;
  NodeSelection.prototype = Object.create( Selection && Selection.prototype );
  NodeSelection.prototype.constructor = NodeSelection;

  NodeSelection.prototype.map = function map (doc, mapping) {
    var ref = mapping.mapResult(this.anchor);
    var deleted = ref.deleted;
    var pos = ref.pos;
    var $pos = doc.resolve(pos);
    if (deleted) { return Selection.near($pos) }
    return new NodeSelection($pos)
  };

  NodeSelection.prototype.content = function content () {
    return new Slice(Fragment.from(this.node), 0, 0)
  };

  NodeSelection.prototype.eq = function eq (other) {
    return other instanceof NodeSelection && other.anchor == this.anchor
  };

  NodeSelection.prototype.toJSON = function toJSON () {
    return {type: "node", anchor: this.anchor}
  };

  NodeSelection.prototype.getBookmark = function getBookmark () { return new NodeBookmark(this.anchor) };

  NodeSelection.fromJSON = function fromJSON (doc, json) {
    if (typeof json.anchor != "number")
      { throw new RangeError("Invalid input for NodeSelection.fromJSON") }
    return new NodeSelection(doc.resolve(json.anchor))
  };

  // :: (Node, number) → NodeSelection
  // Create a node selection from non-resolved positions.
  NodeSelection.create = function create (doc, from) {
    return new this(doc.resolve(from))
  };

  // :: (Node) → bool
  // Determines whether the given node may be selected as a node
  // selection.
  NodeSelection.isSelectable = function isSelectable (node) {
    return !node.isText && node.type.spec.selectable !== false
  };

  return NodeSelection;
}(Selection));

NodeSelection.prototype.visible = false;

Selection.jsonID("node", NodeSelection);

var NodeBookmark = function NodeBookmark(anchor) {
  this.anchor = anchor;
};
NodeBookmark.prototype.map = function map (mapping) {
  var ref = mapping.mapResult(this.anchor);
    var deleted = ref.deleted;
    var pos = ref.pos;
  return deleted ? new TextBookmark(pos, pos) : new NodeBookmark(pos)
};
NodeBookmark.prototype.resolve = function resolve (doc) {
  var $pos = doc.resolve(this.anchor), node = $pos.nodeAfter;
  if (node && NodeSelection.isSelectable(node)) { return new NodeSelection($pos) }
  return Selection.near($pos)
};

// ::- A selection type that represents selecting the whole document
// (which can not necessarily be expressed with a text selection, when
// there are for example leaf block nodes at the start or end of the
// document).
var AllSelection = /*@__PURE__*/(function (Selection) {
  function AllSelection(doc) {
    Selection.call(this, doc.resolve(0), doc.resolve(doc.content.size));
  }

  if ( Selection ) AllSelection.__proto__ = Selection;
  AllSelection.prototype = Object.create( Selection && Selection.prototype );
  AllSelection.prototype.constructor = AllSelection;

  AllSelection.prototype.toJSON = function toJSON () { return {type: "all"} };

  AllSelection.fromJSON = function fromJSON (doc) { return new AllSelection(doc) };

  AllSelection.prototype.map = function map (doc) { return new AllSelection(doc) };

  AllSelection.prototype.eq = function eq (other) { return other instanceof AllSelection };

  AllSelection.prototype.getBookmark = function getBookmark () { return AllBookmark };

  return AllSelection;
}(Selection));

Selection.jsonID("all", AllSelection);

var AllBookmark = {
  map: function map() { return this },
  resolve: function resolve(doc) { return new AllSelection(doc) }
};

// FIXME we'll need some awareness of text direction when scanning for selections

// Try to find a selection inside the given node. `pos` points at the
// position where the search starts. When `text` is true, only return
// text selections.
function findSelectionIn(doc, node, pos, index, dir, text) {
  if (node.inlineContent) { return TextSelection.create(doc, pos) }
  for (var i = index - (dir > 0 ? 0 : 1); dir > 0 ? i < node.childCount : i >= 0; i += dir) {
    var child = node.child(i);
    if (!child.isAtom) {
      var inner = findSelectionIn(doc, child, pos + dir, dir < 0 ? child.childCount : 0, dir, text);
      if (inner) { return inner }
    } else if (!text && NodeSelection.isSelectable(child)) {
      return NodeSelection.create(doc, pos - (dir < 0 ? child.nodeSize : 0))
    }
    pos += child.nodeSize * dir;
  }
}

function selectionToInsertionEnd(tr, startLen, bias) {
  var last = tr.steps.length - 1;
  if (last < startLen) { return }
  var step = tr.steps[last];
  if (!(step instanceof ReplaceStep || step instanceof ReplaceAroundStep)) { return }
  var map = tr.mapping.maps[last], end;
  map.forEach(function (_from, _to, _newFrom, newTo) { if (end == null) { end = newTo; } });
  tr.setSelection(Selection.near(tr.doc.resolve(end), bias));
}

var UPDATED_SEL = 1, UPDATED_MARKS = 2, UPDATED_SCROLL = 4;

// ::- An editor state transaction, which can be applied to a state to
// create an updated state. Use
// [`EditorState.tr`](#state.EditorState.tr) to create an instance.
//
// Transactions track changes to the document (they are a subclass of
// [`Transform`](#transform.Transform)), but also other state changes,
// like selection updates and adjustments of the set of [stored
// marks](#state.EditorState.storedMarks). In addition, you can store
// metadata properties in a transaction, which are extra pieces of
// information that client code or plugins can use to describe what a
// transacion represents, so that they can update their [own
// state](#state.StateField) accordingly.
//
// The [editor view](#view.EditorView) uses a few metadata properties:
// it will attach a property `"pointer"` with the value `true` to
// selection transactions directly caused by mouse or touch input, and
// a `"uiEvent"` property of that may be `"paste"`, `"cut"`, or `"drop"`.
var Transaction = /*@__PURE__*/(function (Transform) {
  function Transaction(state) {
    Transform.call(this, state.doc);
    // :: number
    // The timestamp associated with this transaction, in the same
    // format as `Date.now()`.
    this.time = Date.now();
    this.curSelection = state.selection;
    // The step count for which the current selection is valid.
    this.curSelectionFor = 0;
    // :: ?[Mark]
    // The stored marks set by this transaction, if any.
    this.storedMarks = state.storedMarks;
    // Bitfield to track which aspects of the state were updated by
    // this transaction.
    this.updated = 0;
    // Object used to store metadata properties for the transaction.
    this.meta = Object.create(null);
  }

  if ( Transform ) Transaction.__proto__ = Transform;
  Transaction.prototype = Object.create( Transform && Transform.prototype );
  Transaction.prototype.constructor = Transaction;

  var prototypeAccessors = { selection: { configurable: true },selectionSet: { configurable: true },storedMarksSet: { configurable: true },isGeneric: { configurable: true },scrolledIntoView: { configurable: true } };

  // :: Selection
  // The transaction's current selection. This defaults to the editor
  // selection [mapped](#state.Selection.map) through the steps in the
  // transaction, but can be overwritten with
  // [`setSelection`](#state.Transaction.setSelection).
  prototypeAccessors.selection.get = function () {
    if (this.curSelectionFor < this.steps.length) {
      this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor));
      this.curSelectionFor = this.steps.length;
    }
    return this.curSelection
  };

  // :: (Selection) → Transaction
  // Update the transaction's current selection. Will determine the
  // selection that the editor gets when the transaction is applied.
  Transaction.prototype.setSelection = function setSelection (selection) {
    if (selection.$from.doc != this.doc)
      { throw new RangeError("Selection passed to setSelection must point at the current document") }
    this.curSelection = selection;
    this.curSelectionFor = this.steps.length;
    this.updated = (this.updated | UPDATED_SEL) & ~UPDATED_MARKS;
    this.storedMarks = null;
    return this
  };

  // :: bool
  // Whether the selection was explicitly updated by this transaction.
  prototypeAccessors.selectionSet.get = function () {
    return (this.updated & UPDATED_SEL) > 0
  };

  // :: (?[Mark]) → Transaction
  // Set the current stored marks.
  Transaction.prototype.setStoredMarks = function setStoredMarks (marks) {
    this.storedMarks = marks;
    this.updated |= UPDATED_MARKS;
    return this
  };

  // :: ([Mark]) → Transaction
  // Make sure the current stored marks or, if that is null, the marks
  // at the selection, match the given set of marks. Does nothing if
  // this is already the case.
  Transaction.prototype.ensureMarks = function ensureMarks (marks) {
    if (!Mark.sameSet(this.storedMarks || this.selection.$from.marks(), marks))
      { this.setStoredMarks(marks); }
    return this
  };

  // :: (Mark) → Transaction
  // Add a mark to the set of stored marks.
  Transaction.prototype.addStoredMark = function addStoredMark (mark) {
    return this.ensureMarks(mark.addToSet(this.storedMarks || this.selection.$head.marks()))
  };

  // :: (union<Mark, MarkType>) → Transaction
  // Remove a mark or mark type from the set of stored marks.
  Transaction.prototype.removeStoredMark = function removeStoredMark (mark) {
    return this.ensureMarks(mark.removeFromSet(this.storedMarks || this.selection.$head.marks()))
  };

  // :: bool
  // Whether the stored marks were explicitly set for this transaction.
  prototypeAccessors.storedMarksSet.get = function () {
    return (this.updated & UPDATED_MARKS) > 0
  };

  Transaction.prototype.addStep = function addStep (step, doc) {
    Transform.prototype.addStep.call(this, step, doc);
    this.updated = this.updated & ~UPDATED_MARKS;
    this.storedMarks = null;
  };

  // :: (number) → Transaction
  // Update the timestamp for the transaction.
  Transaction.prototype.setTime = function setTime (time) {
    this.time = time;
    return this
  };

  // :: (Slice) → Transaction
  // Replace the current selection with the given slice.
  Transaction.prototype.replaceSelection = function replaceSelection (slice) {
    this.selection.replace(this, slice);
    return this
  };

  // :: (Node, ?bool) → Transaction
  // Replace the selection with the given node. When `inheritMarks` is
  // true and the content is inline, it inherits the marks from the
  // place where it is inserted.
  Transaction.prototype.replaceSelectionWith = function replaceSelectionWith (node, inheritMarks) {
    var selection = this.selection;
    if (inheritMarks !== false)
      { node = node.mark(this.storedMarks || (selection.empty ? selection.$from.marks() : (selection.$from.marksAcross(selection.$to) || Mark.none))); }
    selection.replaceWith(this, node);
    return this
  };

  // :: () → Transaction
  // Delete the selection.
  Transaction.prototype.deleteSelection = function deleteSelection () {
    this.selection.replace(this);
    return this
  };

  // :: (string, from: ?number, to: ?number) → Transaction
  // Replace the given range, or the selection if no range is given,
  // with a text node containing the given string.
  Transaction.prototype.insertText = function insertText (text, from, to) {
    if ( to === void 0 ) to = from;

    var schema = this.doc.type.schema;
    if (from == null) {
      if (!text) { return this.deleteSelection() }
      return this.replaceSelectionWith(schema.text(text), true)
    } else {
      if (!text) { return this.deleteRange(from, to) }
      var marks = this.storedMarks;
      if (!marks) {
        var $from = this.doc.resolve(from);
        marks = to == from ? $from.marks() : $from.marksAcross(this.doc.resolve(to));
      }
      this.replaceRangeWith(from, to, schema.text(text, marks));
      if (!this.selection.empty) { this.setSelection(Selection.near(this.selection.$to)); }
      return this
    }
  };

  // :: (union<string, Plugin, PluginKey>, any) → Transaction
  // Store a metadata property in this transaction, keyed either by
  // name or by plugin.
  Transaction.prototype.setMeta = function setMeta (key, value) {
    this.meta[typeof key == "string" ? key : key.key] = value;
    return this
  };

  // :: (union<string, Plugin, PluginKey>) → any
  // Retrieve a metadata property for a given name or plugin.
  Transaction.prototype.getMeta = function getMeta (key) {
    return this.meta[typeof key == "string" ? key : key.key]
  };

  // :: bool
  // Returns true if this transaction doesn't contain any metadata,
  // and can thus safely be extended.
  prototypeAccessors.isGeneric.get = function () {
    for (var _ in this.meta) { return false }
    return true
  };

  // :: () → Transaction
  // Indicate that the editor should scroll the selection into view
  // when updated to the state produced by this transaction.
  Transaction.prototype.scrollIntoView = function scrollIntoView () {
    this.updated |= UPDATED_SCROLL;
    return this
  };

  prototypeAccessors.scrolledIntoView.get = function () {
    return (this.updated & UPDATED_SCROLL) > 0
  };

  Object.defineProperties( Transaction.prototype, prototypeAccessors );

  return Transaction;
}(Transform));

function bind(f, self) {
  return !self || !f ? f : f.bind(self)
}

var FieldDesc = function FieldDesc(name, desc, self) {
  this.name = name;
  this.init = bind(desc.init, self);
  this.apply = bind(desc.apply, self);
};

var baseFields = [
  new FieldDesc("doc", {
    init: function init(config) { return config.doc || config.schema.topNodeType.createAndFill() },
    apply: function apply(tr) { return tr.doc }
  }),

  new FieldDesc("selection", {
    init: function init(config, instance) { return config.selection || Selection.atStart(instance.doc) },
    apply: function apply(tr) { return tr.selection }
  }),

  new FieldDesc("storedMarks", {
    init: function init(config) { return config.storedMarks || null },
    apply: function apply(tr, _marks, _old, state) { return state.selection.$cursor ? tr.storedMarks : null }
  }),

  new FieldDesc("scrollToSelection", {
    init: function init() { return 0 },
    apply: function apply(tr, prev) { return tr.scrolledIntoView ? prev + 1 : prev }
  })
];

// Object wrapping the part of a state object that stays the same
// across transactions. Stored in the state's `config` property.
var Configuration = function Configuration(schema, plugins) {
  var this$1 = this;

  this.schema = schema;
  this.fields = baseFields.concat();
  this.plugins = [];
  this.pluginsByKey = Object.create(null);
  if (plugins) { plugins.forEach(function (plugin) {
    if (this$1.pluginsByKey[plugin.key])
      { throw new RangeError("Adding different instances of a keyed plugin (" + plugin.key + ")") }
    this$1.plugins.push(plugin);
    this$1.pluginsByKey[plugin.key] = plugin;
    if (plugin.spec.state)
      { this$1.fields.push(new FieldDesc(plugin.key, plugin.spec.state, plugin)); }
  }); }
};

// ::- The state of a ProseMirror editor is represented by an object
// of this type. A state is a persistent data structure—it isn't
// updated, but rather a new state value is computed from an old one
// using the [`apply`](#state.EditorState.apply) method.
//
// A state holds a number of built-in fields, and plugins can
// [define](#state.PluginSpec.state) additional fields.
var EditorState = function EditorState(config) {
  this.config = config;
};

var prototypeAccessors$1$4 = { schema: { configurable: true },plugins: { configurable: true },tr: { configurable: true } };

// doc:: Node
// The current document.

// selection:: Selection
// The selection.

// storedMarks:: ?[Mark]
// A set of marks to apply to the next input. Will be null when
// no explicit marks have been set.

// :: Schema
// The schema of the state's document.
prototypeAccessors$1$4.schema.get = function () {
  return this.config.schema
};

// :: [Plugin]
// The plugins that are active in this state.
prototypeAccessors$1$4.plugins.get = function () {
  return this.config.plugins
};

// :: (Transaction) → EditorState
// Apply the given transaction to produce a new state.
EditorState.prototype.apply = function apply (tr) {
  return this.applyTransaction(tr).state
};

// : (Transaction) → bool
EditorState.prototype.filterTransaction = function filterTransaction (tr, ignore) {
    if ( ignore === void 0 ) ignore = -1;

  for (var i = 0; i < this.config.plugins.length; i++) { if (i != ignore) {
    var plugin = this.config.plugins[i];
    if (plugin.spec.filterTransaction && !plugin.spec.filterTransaction.call(plugin, tr, this))
      { return false }
  } }
  return true
};

// :: (Transaction) → {state: EditorState, transactions: [Transaction]}
// Verbose variant of [`apply`](#state.EditorState.apply) that
// returns the precise transactions that were applied (which might
// be influenced by the [transaction
// hooks](#state.PluginSpec.filterTransaction) of
// plugins) along with the new state.
EditorState.prototype.applyTransaction = function applyTransaction (rootTr) {
  if (!this.filterTransaction(rootTr)) { return {state: this, transactions: []} }

  var trs = [rootTr], newState = this.applyInner(rootTr), seen = null;
  // This loop repeatedly gives plugins a chance to respond to
  // transactions as new transactions are added, making sure to only
  // pass the transactions the plugin did not see before.
   for (;;) {
    var haveNew = false;
    for (var i = 0; i < this.config.plugins.length; i++) {
      var plugin = this.config.plugins[i];
      if (plugin.spec.appendTransaction) {
        var n = seen ? seen[i].n : 0, oldState = seen ? seen[i].state : this;
        var tr = n < trs.length &&
            plugin.spec.appendTransaction.call(plugin, n ? trs.slice(n) : trs, oldState, newState);
        if (tr && newState.filterTransaction(tr, i)) {
          tr.setMeta("appendedTransaction", rootTr);
          if (!seen) {
            seen = [];
            for (var j = 0; j < this.config.plugins.length; j++)
              { seen.push(j < i ? {state: newState, n: trs.length} : {state: this, n: 0}); }
          }
          trs.push(tr);
          newState = newState.applyInner(tr);
          haveNew = true;
        }
        if (seen) { seen[i] = {state: newState, n: trs.length}; }
      }
    }
    if (!haveNew) { return {state: newState, transactions: trs} }
  }
};

// : (Transaction) → EditorState
EditorState.prototype.applyInner = function applyInner (tr) {
  if (!tr.before.eq(this.doc)) { throw new RangeError("Applying a mismatched transaction") }
  var newInstance = new EditorState(this.config), fields = this.config.fields;
  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    newInstance[field.name] = field.apply(tr, this[field.name], this, newInstance);
  }
  for (var i$1 = 0; i$1 < applyListeners.length; i$1++) { applyListeners[i$1](this, tr, newInstance); }
  return newInstance
};

// :: Transaction
// Start a [transaction](#state.Transaction) from this state.
prototypeAccessors$1$4.tr.get = function () { return new Transaction(this) };

// :: (Object) → EditorState
// Create a new state.
//
// config::- Configuration options. Must contain `schema` or `doc` (or both).
//
//    schema:: ?Schema
//    The schema to use.
//
//    doc:: ?Node
//    The starting document.
//
//    selection:: ?Selection
//    A valid selection in the document.
//
//    storedMarks:: ?[Mark]
//    The initial set of [stored marks](#state.EditorState.storedMarks).
//
//    plugins:: ?[Plugin]
//    The plugins that should be active in this state.
EditorState.create = function create (config) {
  var $config = new Configuration(config.schema || config.doc.type.schema, config.plugins);
  var instance = new EditorState($config);
  for (var i = 0; i < $config.fields.length; i++)
    { instance[$config.fields[i].name] = $config.fields[i].init(config, instance); }
  return instance
};

// :: (Object) → EditorState
// Create a new state based on this one, but with an adjusted set of
// active plugins. State fields that exist in both sets of plugins
// are kept unchanged. Those that no longer exist are dropped, and
// those that are new are initialized using their
// [`init`](#state.StateField.init) method, passing in the new
// configuration object..
//
// config::- configuration options
//
//   schema:: ?Schema
//   New schema to use.
//
//   plugins:: ?[Plugin]
//   New set of active plugins.
EditorState.prototype.reconfigure = function reconfigure (config) {
  var $config = new Configuration(config.schema || this.schema, config.plugins);
  var fields = $config.fields, instance = new EditorState($config);
  for (var i = 0; i < fields.length; i++) {
    var name = fields[i].name;
    instance[name] = this.hasOwnProperty(name) ? this[name] : fields[i].init(config, instance);
  }
  return instance
};

// :: (?union<Object<Plugin>, string, number>) → Object
// Serialize this state to JSON. If you want to serialize the state
// of plugins, pass an object mapping property names to use in the
// resulting JSON object to plugin objects. The argument may also be
// a string or number, in which case it is ignored, to support the
// way `JSON.stringify` calls `toString` methods.
EditorState.prototype.toJSON = function toJSON (pluginFields) {
  var result = {doc: this.doc.toJSON(), selection: this.selection.toJSON()};
  if (this.storedMarks) { result.storedMarks = this.storedMarks.map(function (m) { return m.toJSON(); }); }
  if (pluginFields && typeof pluginFields == 'object') { for (var prop in pluginFields) {
    if (prop == "doc" || prop == "selection")
      { throw new RangeError("The JSON fields `doc` and `selection` are reserved") }
    var plugin = pluginFields[prop], state = plugin.spec.state;
    if (state && state.toJSON) { result[prop] = state.toJSON.call(plugin, this[plugin.key]); }
  } }
  return result
};

// :: (Object, Object, ?Object<Plugin>) → EditorState
// Deserialize a JSON representation of a state. `config` should
// have at least a `schema` field, and should contain array of
// plugins to initialize the state with. `pluginFields` can be used
// to deserialize the state of plugins, by associating plugin
// instances with the property names they use in the JSON object.
//
// config::- configuration options
//
//   schema:: Schema
//   The schema to use.
//
//   plugins:: ?[Plugin]
//   The set of active plugins.
EditorState.fromJSON = function fromJSON (config, json, pluginFields) {
  if (!json) { throw new RangeError("Invalid input for EditorState.fromJSON") }
  if (!config.schema) { throw new RangeError("Required config field 'schema' missing") }
  var $config = new Configuration(config.schema, config.plugins);
  var instance = new EditorState($config);
  $config.fields.forEach(function (field) {
    if (field.name == "doc") {
      instance.doc = Node$1.fromJSON(config.schema, json.doc);
    } else if (field.name == "selection") {
      instance.selection = Selection.fromJSON(instance.doc, json.selection);
    } else if (field.name == "storedMarks") {
      if (json.storedMarks) { instance.storedMarks = json.storedMarks.map(config.schema.markFromJSON); }
    } else {
      if (pluginFields) { for (var prop in pluginFields) {
        var plugin = pluginFields[prop], state = plugin.spec.state;
        if (plugin.key == field.name && state && state.fromJSON &&
            Object.prototype.hasOwnProperty.call(json, prop)) {
          // This field belongs to a plugin mapped to a JSON field, read it from there.
          instance[field.name] = state.fromJSON.call(plugin, config, json[prop], instance);
          return
        }
      } }
      instance[field.name] = field.init(config, instance);
    }
  });
  return instance
};

// Kludge to allow the view to track mappings between different
// instances of a state.
//
// FIXME this is no longer needed as of prosemirror-view 1.9.0,
// though due to backwards-compat we should probably keep it around
// for a while (if only as a no-op)
EditorState.addApplyListener = function addApplyListener (f) {
  applyListeners.push(f);
};
EditorState.removeApplyListener = function removeApplyListener (f) {
  var found = applyListeners.indexOf(f);
  if (found > -1) { applyListeners.splice(found, 1); }
};

Object.defineProperties( EditorState.prototype, prototypeAccessors$1$4 );

var applyListeners = [];

// PluginSpec:: interface
//
// This is the type passed to the [`Plugin`](#state.Plugin)
// constructor. It provides a definition for a plugin.
//
//   props:: ?EditorProps
//   The [view props](#view.EditorProps) added by this plugin. Props
//   that are functions will be bound to have the plugin instance as
//   their `this` binding.
//
//   state:: ?StateField<any>
//   Allows a plugin to define a [state field](#state.StateField), an
//   extra slot in the state object in which it can keep its own data.
//
//   key:: ?PluginKey
//   Can be used to make this a keyed plugin. You can have only one
//   plugin with a given key in a given state, but it is possible to
//   access the plugin's configuration and state through the key,
//   without having access to the plugin instance object.
//
//   view:: ?(EditorView) → Object
//   When the plugin needs to interact with the editor view, or
//   set something up in the DOM, use this field. The function
//   will be called when the plugin's state is associated with an
//   editor view.
//
//     return::-
//     Should return an object with the following optional
//     properties:
//
//       update:: ?(view: EditorView, prevState: EditorState)
//       Called whenever the view's state is updated.
//
//       destroy:: ?()
//       Called when the view is destroyed or receives a state
//       with different plugins.
//
//   filterTransaction:: ?(Transaction, EditorState) → bool
//   When present, this will be called before a transaction is
//   applied by the state, allowing the plugin to cancel it (by
//   returning false).
//
//   appendTransaction:: ?(transactions: [Transaction], oldState: EditorState, newState: EditorState) → ?Transaction
//   Allows the plugin to append another transaction to be applied
//   after the given array of transactions. When another plugin
//   appends a transaction after this was called, it is called again
//   with the new state and new transactions—but only the new
//   transactions, i.e. it won't be passed transactions that it
//   already saw.

function bindProps(obj, self, target) {
  for (var prop in obj) {
    var val = obj[prop];
    if (val instanceof Function) { val = val.bind(self); }
    else if (prop == "handleDOMEvents") { val = bindProps(val, self, {}); }
    target[prop] = val;
  }
  return target
}

// ::- Plugins bundle functionality that can be added to an editor.
// They are part of the [editor state](#state.EditorState) and
// may influence that state and the view that contains it.
var Plugin = function Plugin(spec) {
  // :: EditorProps
  // The [props](#view.EditorProps) exported by this plugin.
  this.props = {};
  if (spec.props) { bindProps(spec.props, this, this.props); }
  // :: Object
  // The plugin's [spec object](#state.PluginSpec).
  this.spec = spec;
  this.key = spec.key ? spec.key.key : createKey("plugin");
};

// :: (EditorState) → any
// Extract the plugin's state field from an editor state.
Plugin.prototype.getState = function getState (state) { return state[this.key] };

// StateField:: interface<T>
// A plugin spec may provide a state field (under its
// [`state`](#state.PluginSpec.state) property) of this type, which
// describes the state it wants to keep. Functions provided here are
// always called with the plugin instance as their `this` binding.
//
//   init:: (config: Object, instance: EditorState) → T
//   Initialize the value of the field. `config` will be the object
//   passed to [`EditorState.create`](#state.EditorState^create). Note
//   that `instance` is a half-initialized state instance, and will
//   not have values for plugin fields initialized after this one.
//
//   apply:: (tr: Transaction, value: T, oldState: EditorState, newState: EditorState) → T
//   Apply the given transaction to this state field, producing a new
//   field value. Note that the `newState` argument is again a partially
//   constructed state does not yet contain the state from plugins
//   coming after this one.
//
//   toJSON:: ?(value: T) → *
//   Convert this field to JSON. Optional, can be left off to disable
//   JSON serialization for the field.
//
//   fromJSON:: ?(config: Object, value: *, state: EditorState) → T
//   Deserialize the JSON representation of this field. Note that the
//   `state` argument is again a half-initialized state.

var keys$2 = Object.create(null);

function createKey(name) {
  if (name in keys$2) { return name + "$" + ++keys$2[name] }
  keys$2[name] = 0;
  return name + "$"
}

// ::- A key is used to [tag](#state.PluginSpec.key)
// plugins in a way that makes it possible to find them, given an
// editor state. Assigning a key does mean only one plugin of that
// type can be active in a state.
var PluginKey = function PluginKey(name) {
if ( name === void 0 ) name = "key";
 this.key = createKey(name); };

// :: (EditorState) → ?Plugin
// Get the active plugin with this key, if any, from an editor
// state.
PluginKey.prototype.get = function get (state) { return state.config.pluginsByKey[this.key] };

// :: (EditorState) → ?any
// Get the plugin's state from an editor state.
PluginKey.prototype.getState = function getState (state) { return state[this.key] };

var index_es$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AllSelection: AllSelection,
    EditorState: EditorState,
    NodeSelection: NodeSelection,
    Plugin: Plugin,
    PluginKey: PluginKey,
    Selection: Selection,
    SelectionRange: SelectionRange,
    TextSelection: TextSelection,
    Transaction: Transaction
});

// :: (EditorState, ?(tr: Transaction)) → bool
// Delete the selection, if there is one.
function deleteSelection(state, dispatch) {
  if (state.selection.empty) { return false }
  if (dispatch) { dispatch(state.tr.deleteSelection().scrollIntoView()); }
  return true
}

// :: (EditorState, ?(tr: Transaction), ?EditorView) → bool
// If the selection is empty and at the start of a textblock, try to
// reduce the distance between that block and the one before it—if
// there's a block directly before it that can be joined, join them.
// If not, try to move the selected block closer to the next one in
// the document structure by lifting it out of its parent or moving it
// into a parent of the previous block. Will use the view for accurate
// (bidi-aware) start-of-textblock detection if given.
function joinBackward(state, dispatch, view) {
  var ref = state.selection;
  var $cursor = ref.$cursor;
  if (!$cursor || (view ? !view.endOfTextblock("backward", state)
                        : $cursor.parentOffset > 0))
    { return false }

  var $cut = findCutBefore($cursor);

  // If there is no node before this, try to lift
  if (!$cut) {
    var range = $cursor.blockRange(), target = range && liftTarget(range);
    if (target == null) { return false }
    if (dispatch) { dispatch(state.tr.lift(range, target).scrollIntoView()); }
    return true
  }

  var before = $cut.nodeBefore;
  // Apply the joining algorithm
  if (!before.type.spec.isolating && deleteBarrier(state, $cut, dispatch))
    { return true }

  // If the node below has no content and the node above is
  // selectable, delete the node below and select the one above.
  if ($cursor.parent.content.size == 0 &&
      (textblockAt(before, "end") || NodeSelection.isSelectable(before))) {
    if (dispatch) {
      var tr = state.tr.deleteRange($cursor.before(), $cursor.after());
      tr.setSelection(textblockAt(before, "end") ? Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos, -1)), -1)
                      : NodeSelection.create(tr.doc, $cut.pos - before.nodeSize));
      dispatch(tr.scrollIntoView());
    }
    return true
  }

  // If the node before is an atom, delete it
  if (before.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch) { dispatch(state.tr.delete($cut.pos - before.nodeSize, $cut.pos).scrollIntoView()); }
    return true
  }

  return false
}

function textblockAt(node, side) {
  for (; node; node = (side == "start" ? node.firstChild : node.lastChild))
    { if (node.isTextblock) { return true } }
  return false
}

// :: (EditorState, ?(tr: Transaction), ?EditorView) → bool
// When the selection is empty and at the start of a textblock, select
// the node before that textblock, if possible. This is intended to be
// bound to keys like backspace, after
// [`joinBackward`](#commands.joinBackward) or other deleting
// commands, as a fall-back behavior when the schema doesn't allow
// deletion at the selected point.
function selectNodeBackward(state, dispatch, view) {
  var ref = state.selection;
  var $cursor = ref.$cursor;
  if (!$cursor || (view ? !view.endOfTextblock("backward", state)
                        : $cursor.parentOffset > 0))
    { return false }

  var $cut = findCutBefore($cursor), node = $cut && $cut.nodeBefore;
  if (!node || !NodeSelection.isSelectable(node)) { return false }
  if (dispatch)
    { dispatch(state.tr.setSelection(NodeSelection.create(state.doc, $cut.pos - node.nodeSize)).scrollIntoView()); }
  return true
}

function findCutBefore($pos) {
  if (!$pos.parent.type.spec.isolating) { for (var i = $pos.depth - 1; i >= 0; i--) {
    if ($pos.index(i) > 0) { return $pos.doc.resolve($pos.before(i + 1)) }
    if ($pos.node(i).type.spec.isolating) { break }
  } }
  return null
}

// :: (EditorState, ?(tr: Transaction), ?EditorView) → bool
// If the selection is empty and the cursor is at the end of a
// textblock, try to reduce or remove the boundary between that block
// and the one after it, either by joining them or by moving the other
// block closer to this one in the tree structure. Will use the view
// for accurate start-of-textblock detection if given.
function joinForward(state, dispatch, view) {
  var ref = state.selection;
  var $cursor = ref.$cursor;
  if (!$cursor || (view ? !view.endOfTextblock("forward", state)
                        : $cursor.parentOffset < $cursor.parent.content.size))
    { return false }

  var $cut = findCutAfter($cursor);

  // If there is no node after this, there's nothing to do
  if (!$cut) { return false }

  var after = $cut.nodeAfter;
  // Try the joining algorithm
  if (deleteBarrier(state, $cut, dispatch)) { return true }

  // If the node above has no content and the node below is
  // selectable, delete the node above and select the one below.
  if ($cursor.parent.content.size == 0 &&
      (textblockAt(after, "start") || NodeSelection.isSelectable(after))) {
    if (dispatch) {
      var tr = state.tr.deleteRange($cursor.before(), $cursor.after());
      tr.setSelection(textblockAt(after, "start") ? Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos)), 1)
                      : NodeSelection.create(tr.doc, tr.mapping.map($cut.pos)));
      dispatch(tr.scrollIntoView());
    }
    return true
  }

  // If the next node is an atom, delete it
  if (after.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch) { dispatch(state.tr.delete($cut.pos, $cut.pos + after.nodeSize).scrollIntoView()); }
    return true
  }

  return false
}

// :: (EditorState, ?(tr: Transaction), ?EditorView) → bool
// When the selection is empty and at the end of a textblock, select
// the node coming after that textblock, if possible. This is intended
// to be bound to keys like delete, after
// [`joinForward`](#commands.joinForward) and similar deleting
// commands, to provide a fall-back behavior when the schema doesn't
// allow deletion at the selected point.
function selectNodeForward(state, dispatch, view) {
  var ref = state.selection;
  var $cursor = ref.$cursor;
  if (!$cursor || (view ? !view.endOfTextblock("forward", state)
                        : $cursor.parentOffset < $cursor.parent.content.size))
    { return false }

  var $cut = findCutAfter($cursor), node = $cut && $cut.nodeAfter;
  if (!node || !NodeSelection.isSelectable(node)) { return false }
  if (dispatch)
    { dispatch(state.tr.setSelection(NodeSelection.create(state.doc, $cut.pos)).scrollIntoView()); }
  return true
}

function findCutAfter($pos) {
  if (!$pos.parent.type.spec.isolating) { for (var i = $pos.depth - 1; i >= 0; i--) {
    var parent = $pos.node(i);
    if ($pos.index(i) + 1 < parent.childCount) { return $pos.doc.resolve($pos.after(i + 1)) }
    if (parent.type.spec.isolating) { break }
  } }
  return null
}

// :: (EditorState, ?(tr: Transaction)) → bool
// If the selection is in a node whose type has a truthy
// [`code`](#model.NodeSpec.code) property in its spec, replace the
// selection with a newline character.
function newlineInCode(state, dispatch) {
  var ref = state.selection;
  var $head = ref.$head;
  var $anchor = ref.$anchor;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) { return false }
  if (dispatch) { dispatch(state.tr.insertText("\n").scrollIntoView()); }
  return true
}

// :: (EditorState, ?(tr: Transaction)) → bool
// When the selection is in a node with a truthy
// [`code`](#model.NodeSpec.code) property in its spec, create a
// default block after the code block, and move the cursor there.
function exitCode(state, dispatch) {
  var ref = state.selection;
  var $head = ref.$head;
  var $anchor = ref.$anchor;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) { return false }
  var above = $head.node(-1), after = $head.indexAfter(-1), type = above.contentMatchAt(after).defaultType;
  if (!above.canReplaceWith(after, after, type)) { return false }
  if (dispatch) {
    var pos = $head.after(), tr = state.tr.replaceWith(pos, pos, type.createAndFill());
    tr.setSelection(Selection.near(tr.doc.resolve(pos), 1));
    dispatch(tr.scrollIntoView());
  }
  return true
}

// :: (EditorState, ?(tr: Transaction)) → bool
// If a block node is selected, create an empty paragraph before (if
// it is its parent's first child) or after it.
function createParagraphNear(state, dispatch) {
  var ref = state.selection;
  var $from = ref.$from;
  var $to = ref.$to;
  if ($from.parent.inlineContent || $to.parent.inlineContent) { return false }
  var type = $from.parent.contentMatchAt($to.indexAfter()).defaultType;
  if (!type || !type.isTextblock) { return false }
  if (dispatch) {
    var side = (!$from.parentOffset && $to.index() < $to.parent.childCount ? $from : $to).pos;
    var tr = state.tr.insert(side, type.createAndFill());
    tr.setSelection(TextSelection.create(tr.doc, side + 1));
    dispatch(tr.scrollIntoView());
  }
  return true
}

// :: (EditorState, ?(tr: Transaction)) → bool
// If the cursor is in an empty textblock that can be lifted, lift the
// block.
function liftEmptyBlock(state, dispatch) {
  var ref = state.selection;
  var $cursor = ref.$cursor;
  if (!$cursor || $cursor.parent.content.size) { return false }
  if ($cursor.depth > 1 && $cursor.after() != $cursor.end(-1)) {
    var before = $cursor.before();
    if (canSplit(state.doc, before)) {
      if (dispatch) { dispatch(state.tr.split(before).scrollIntoView()); }
      return true
    }
  }
  var range = $cursor.blockRange(), target = range && liftTarget(range);
  if (target == null) { return false }
  if (dispatch) { dispatch(state.tr.lift(range, target).scrollIntoView()); }
  return true
}

// :: (EditorState, ?(tr: Transaction)) → bool
// Split the parent block of the selection. If the selection is a text
// selection, also delete its content.
function splitBlock(state, dispatch) {
  var ref = state.selection;
  var $from = ref.$from;
  var $to = ref.$to;
  if (state.selection instanceof NodeSelection && state.selection.node.isBlock) {
    if (!$from.parentOffset || !canSplit(state.doc, $from.pos)) { return false }
    if (dispatch) { dispatch(state.tr.split($from.pos).scrollIntoView()); }
    return true
  }

  if (!$from.parent.isBlock) { return false }

  if (dispatch) {
    var atEnd = $to.parentOffset == $to.parent.content.size;
    var tr = state.tr;
    if (state.selection instanceof TextSelection) { tr.deleteSelection(); }
    var deflt = $from.depth == 0 ? null : $from.node(-1).contentMatchAt($from.indexAfter(-1)).defaultType;
    var types = atEnd && deflt ? [{type: deflt}] : null;
    var can = canSplit(tr.doc, tr.mapping.map($from.pos), 1, types);
    if (!types && !can && canSplit(tr.doc, tr.mapping.map($from.pos), 1, deflt && [{type: deflt}])) {
      types = [{type: deflt}];
      can = true;
    }
    if (can) {
      tr.split(tr.mapping.map($from.pos), 1, types);
      if (!atEnd && !$from.parentOffset && $from.parent.type != deflt &&
          $from.node(-1).canReplace($from.index(-1), $from.indexAfter(-1), Fragment.from(deflt.create(), $from.parent)))
        { tr.setNodeMarkup(tr.mapping.map($from.before()), deflt); }
    }
    dispatch(tr.scrollIntoView());
  }
  return true
}

// :: (EditorState, ?(tr: Transaction)) → bool
// Select the whole document.
function selectAll(state, dispatch) {
  if (dispatch) { dispatch(state.tr.setSelection(new AllSelection(state.doc))); }
  return true
}

function joinMaybeClear(state, $pos, dispatch) {
  var before = $pos.nodeBefore, after = $pos.nodeAfter, index = $pos.index();
  if (!before || !after || !before.type.compatibleContent(after.type)) { return false }
  if (!before.content.size && $pos.parent.canReplace(index - 1, index)) {
    if (dispatch) { dispatch(state.tr.delete($pos.pos - before.nodeSize, $pos.pos).scrollIntoView()); }
    return true
  }
  if (!$pos.parent.canReplace(index, index + 1) || !(after.isTextblock || canJoin(state.doc, $pos.pos)))
    { return false }
  if (dispatch)
    { dispatch(state.tr
             .clearIncompatible($pos.pos, before.type, before.contentMatchAt(before.childCount))
             .join($pos.pos)
             .scrollIntoView()); }
  return true
}

function deleteBarrier(state, $cut, dispatch) {
  var before = $cut.nodeBefore, after = $cut.nodeAfter, conn, match;
  if (before.type.spec.isolating || after.type.spec.isolating) { return false }
  if (joinMaybeClear(state, $cut, dispatch)) { return true }

  if ($cut.parent.canReplace($cut.index(), $cut.index() + 1) &&
      (conn = (match = before.contentMatchAt(before.childCount)).findWrapping(after.type)) &&
      match.matchType(conn[0] || after.type).validEnd) {
    if (dispatch) {
      var end = $cut.pos + after.nodeSize, wrap = Fragment.empty;
      for (var i = conn.length - 1; i >= 0; i--)
        { wrap = Fragment.from(conn[i].create(null, wrap)); }
      wrap = Fragment.from(before.copy(wrap));
      var tr = state.tr.step(new ReplaceAroundStep($cut.pos - 1, end, $cut.pos, end, new Slice(wrap, 1, 0), conn.length, true));
      var joinAt = end + 2 * conn.length;
      if (canJoin(tr.doc, joinAt)) { tr.join(joinAt); }
      dispatch(tr.scrollIntoView());
    }
    return true
  }

  var selAfter = Selection.findFrom($cut, 1);
  var range = selAfter && selAfter.$from.blockRange(selAfter.$to), target = range && liftTarget(range);
  if (target != null && target >= $cut.depth) {
    if (dispatch) { dispatch(state.tr.lift(range, target).scrollIntoView()); }
    return true
  }

  return false
}

// :: (...[(EditorState, ?(tr: Transaction), ?EditorView) → bool]) → (EditorState, ?(tr: Transaction), ?EditorView) → bool
// Combine a number of command functions into a single function (which
// calls them one by one until one returns true).
function chainCommands() {
  var commands = [], len = arguments.length;
  while ( len-- ) commands[ len ] = arguments[ len ];

  return function(state, dispatch, view) {
    for (var i = 0; i < commands.length; i++)
      { if (commands[i](state, dispatch, view)) { return true } }
    return false
  }
}

var backspace = chainCommands(deleteSelection, joinBackward, selectNodeBackward);
var del = chainCommands(deleteSelection, joinForward, selectNodeForward);

// :: Object
// A basic keymap containing bindings not specific to any schema.
// Binds the following keys (when multiple commands are listed, they
// are chained with [`chainCommands`](#commands.chainCommands)):
//
// * **Enter** to `newlineInCode`, `createParagraphNear`, `liftEmptyBlock`, `splitBlock`
// * **Mod-Enter** to `exitCode`
// * **Backspace** and **Mod-Backspace** to `deleteSelection`, `joinBackward`, `selectNodeBackward`
// * **Delete** and **Mod-Delete** to `deleteSelection`, `joinForward`, `selectNodeForward`
// * **Mod-Delete** to `deleteSelection`, `joinForward`, `selectNodeForward`
// * **Mod-a** to `selectAll`
var pcBaseKeymap = {
  "Enter": chainCommands(newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock),
  "Mod-Enter": exitCode,
  "Backspace": backspace,
  "Mod-Backspace": backspace,
  "Delete": del,
  "Mod-Delete": del,
  "Mod-a": selectAll
};

// :: Object
// A copy of `pcBaseKeymap` that also binds **Ctrl-h** like Backspace,
// **Ctrl-d** like Delete, **Alt-Backspace** like Ctrl-Backspace, and
// **Ctrl-Alt-Backspace**, **Alt-Delete**, and **Alt-d** like
// Ctrl-Delete.
var macBaseKeymap = {
  "Ctrl-h": pcBaseKeymap["Backspace"],
  "Alt-Backspace": pcBaseKeymap["Mod-Backspace"],
  "Ctrl-d": pcBaseKeymap["Delete"],
  "Ctrl-Alt-Backspace": pcBaseKeymap["Mod-Delete"],
  "Alt-Delete": pcBaseKeymap["Mod-Delete"],
  "Alt-d": pcBaseKeymap["Mod-Delete"]
};
for (var key$1 in pcBaseKeymap) { macBaseKeymap[key$1] = pcBaseKeymap[key$1]; }

// declare global: os, navigator
var mac = typeof navigator != "undefined" ? /Mac/.test(navigator.platform)
          : typeof os != "undefined" ? os.platform() == "darwin" : false;

// :: (NodeType) → (state: EditorState, dispatch: ?(tr: Transaction)) → bool
// Create a command to lift the list item around the selection up into
// a wrapping list.
function liftListItem(itemType) {
  return function(state, dispatch) {
    var ref = state.selection;
    var $from = ref.$from;
    var $to = ref.$to;
    var range = $from.blockRange($to, function (node) { return node.childCount && node.firstChild.type == itemType; });
    if (!range) { return false }
    if (!dispatch) { return true }
    if ($from.node(range.depth - 1).type == itemType) // Inside a parent list
      { return liftToOuterList(state, dispatch, itemType, range) }
    else // Outer list node
      { return liftOutOfList(state, dispatch, range) }
  }
}

function liftToOuterList(state, dispatch, itemType, range) {
  var tr = state.tr, end = range.end, endOfList = range.$to.end(range.depth);
  if (end < endOfList) {
    // There are siblings after the lifted items, which must become
    // children of the last item
    tr.step(new ReplaceAroundStep(end - 1, endOfList, end, endOfList,
                                  new Slice(Fragment.from(itemType.create(null, range.parent.copy())), 1, 0), 1, true));
    range = new NodeRange(tr.doc.resolve(range.$from.pos), tr.doc.resolve(endOfList), range.depth);
  }
  dispatch(tr.lift(range, liftTarget(range)).scrollIntoView());
  return true
}

function liftOutOfList(state, dispatch, range) {
  var tr = state.tr, list = range.parent;
  // Merge the list items into a single big item
  for (var pos = range.end, i = range.endIndex - 1, e = range.startIndex; i > e; i--) {
    pos -= list.child(i).nodeSize;
    tr.delete(pos - 1, pos + 1);
  }
  var $start = tr.doc.resolve(range.start), item = $start.nodeAfter;
  var atStart = range.startIndex == 0, atEnd = range.endIndex == list.childCount;
  var parent = $start.node(-1), indexBefore = $start.index(-1);
  if (!parent.canReplace(indexBefore + (atStart ? 0 : 1), indexBefore + 1,
                         item.content.append(atEnd ? Fragment.empty : Fragment.from(list))))
    { return false }
  var start = $start.pos, end = start + item.nodeSize;
  // Strip off the surrounding list. At the sides where we're not at
  // the end of the list, the existing list is closed. At sides where
  // this is the end, it is overwritten to its end.
  tr.step(new ReplaceAroundStep(start - (atStart ? 1 : 0), end + (atEnd ? 1 : 0), start + 1, end - 1,
                                new Slice((atStart ? Fragment.empty : Fragment.from(list.copy(Fragment.empty)))
                                          .append(atEnd ? Fragment.empty : Fragment.from(list.copy(Fragment.empty))),
                                          atStart ? 0 : 1, atEnd ? 0 : 1), atStart ? 0 : 1));
  dispatch(tr.scrollIntoView());
  return true
}

// :: (NodeType) → (state: EditorState, dispatch: ?(tr: Transaction)) → bool
// Create a command to sink the list item around the selection down
// into an inner list.
function sinkListItem(itemType) {
  return function(state, dispatch) {
    var ref = state.selection;
    var $from = ref.$from;
    var $to = ref.$to;
    var range = $from.blockRange($to, function (node) { return node.childCount && node.firstChild.type == itemType; });
    if (!range) { return false }
    var startIndex = range.startIndex;
    if (startIndex == 0) { return false }
    var parent = range.parent, nodeBefore = parent.child(startIndex - 1);
    if (nodeBefore.type != itemType) { return false }

    if (dispatch) {
      var nestedBefore = nodeBefore.lastChild && nodeBefore.lastChild.type == parent.type;
      var inner = Fragment.from(nestedBefore ? itemType.create() : null);
      var slice = new Slice(Fragment.from(itemType.create(null, Fragment.from(parent.type.create(null, inner)))),
                            nestedBefore ? 3 : 1, 0);
      var before = range.start, after = range.end;
      dispatch(state.tr.step(new ReplaceAroundStep(before - (nestedBefore ? 3 : 1), after,
                                                   before, after, slice, 1, true))
               .scrollIntoView());
    }
    return true
  }
}

var base = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'",
  229: "q"
};
var base_1 = base;

var shift$1 = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ";",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: "\"",
  229: "Q"
};

var chrome = typeof navigator != "undefined" && /Chrome\/(\d+)/.exec(navigator.userAgent);
var safari = typeof navigator != "undefined" && /Apple Computer/.test(navigator.vendor);
var gecko = typeof navigator != "undefined" && /Gecko\/\d+/.test(navigator.userAgent);
var mac$1 = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
var ie = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
var brokenModifierNames = chrome && (mac$1 || +chrome[1] < 57) || gecko && mac$1;

// Fill in the digit keys
for (var i = 0; i < 10; i++) base[48 + i] = base[96 + i] = String(i);

// The function keys
for (var i = 1; i <= 24; i++) base[i + 111] = "F" + i;

// And the alphabetic keys
for (var i = 65; i <= 90; i++) {
  base[i] = String.fromCharCode(i + 32);
  shift$1[i] = String.fromCharCode(i);
}

// For each code that doesn't have a shift-equivalent, copy the base name
for (var code in base) if (!shift$1.hasOwnProperty(code)) shift$1[code] = base[code];

var keyName = function(event) {
  // Don't trust event.key in Chrome when there are modifiers until
  // they fix https://bugs.chromium.org/p/chromium/issues/detail?id=633838
  var ignoreKey = brokenModifierNames && (event.ctrlKey || event.altKey || event.metaKey) ||
    (safari || ie) && event.shiftKey && event.key && event.key.length == 1;
  var name = (!ignoreKey && event.key) ||
    (event.shiftKey ? shift$1 : base)[event.keyCode] ||
    event.key || "Unidentified";
  // Edge sometimes produces wrong names (Issue #3)
  if (name == "Esc") name = "Escape";
  if (name == "Del") name = "Delete";
  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8860571/
  if (name == "Left") name = "ArrowLeft";
  if (name == "Up") name = "ArrowUp";
  if (name == "Right") name = "ArrowRight";
  if (name == "Down") name = "ArrowDown";
  return name
};

// declare global: navigator

var mac$2 = typeof navigator != "undefined" ? /Mac/.test(navigator.platform) : false;

function normalizeKeyName(name) {
  var parts = name.split(/-(?!$)/), result = parts[parts.length - 1];
  if (result == "Space") { result = " "; }
  var alt, ctrl, shift, meta;
  for (var i = 0; i < parts.length - 1; i++) {
    var mod = parts[i];
    if (/^(cmd|meta|m)$/i.test(mod)) { meta = true; }
    else if (/^a(lt)?$/i.test(mod)) { alt = true; }
    else if (/^(c|ctrl|control)$/i.test(mod)) { ctrl = true; }
    else if (/^s(hift)?$/i.test(mod)) { shift = true; }
    else if (/^mod$/i.test(mod)) { if (mac$2) { meta = true; } else { ctrl = true; } }
    else { throw new Error("Unrecognized modifier name: " + mod) }
  }
  if (alt) { result = "Alt-" + result; }
  if (ctrl) { result = "Ctrl-" + result; }
  if (meta) { result = "Meta-" + result; }
  if (shift) { result = "Shift-" + result; }
  return result
}

function normalize$1(map) {
  var copy = Object.create(null);
  for (var prop in map) { copy[normalizeKeyName(prop)] = map[prop]; }
  return copy
}

function modifiers$1(name, event, shift) {
  if (event.altKey) { name = "Alt-" + name; }
  if (event.ctrlKey) { name = "Ctrl-" + name; }
  if (event.metaKey) { name = "Meta-" + name; }
  if (shift !== false && event.shiftKey) { name = "Shift-" + name; }
  return name
}

// :: (Object) → (view: EditorView, event: dom.Event) → bool
// Given a set of bindings (using the same format as
// [`keymap`](#keymap.keymap), return a [keydown
// handler](#view.EditorProps.handleKeyDown) that handles them.
function keydownHandler(bindings) {
  var map = normalize$1(bindings);
  return function(view, event) {
    var name = keyName(event), isChar = name.length == 1 && name != " ", baseName;
    var direct = map[modifiers$1(name, event, !isChar)];
    if (direct && direct(view.state, view.dispatch, view)) { return true }
    if (isChar && (event.shiftKey || event.altKey || event.metaKey) &&
        (baseName = base_1[event.keyCode]) && baseName != name) {
      var fromCode = map[modifiers$1(baseName, event, true)];
      if (fromCode && fromCode(view.state, view.dispatch, view)) { return true }
    } else if (isChar && event.shiftKey) {
      var withShift = map[modifiers$1(name, event, true)];
      if (withShift && withShift(view.state, view.dispatch, view)) { return true }
    }
    return false
  }
}

var result = {};

if (typeof navigator != "undefined" && typeof document != "undefined") {
  var ie_edge = /Edge\/(\d+)/.exec(navigator.userAgent);
  var ie_upto10 = /MSIE \d/.test(navigator.userAgent);
  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);

  result.mac = /Mac/.test(navigator.platform);
  var ie$1 = result.ie = !!(ie_upto10 || ie_11up || ie_edge);
  result.ie_version = ie_upto10 ? document.documentMode || 6 : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : null;
  result.gecko = !ie$1 && /gecko\/(\d+)/i.test(navigator.userAgent);
  result.gecko_version = result.gecko && +(/Firefox\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1];
  var chrome$1 = !ie$1 && /Chrome\/(\d+)/.exec(navigator.userAgent);
  result.chrome = !!chrome$1;
  result.chrome_version = chrome$1 && +chrome$1[1];
  result.ios = !ie$1 && /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent);
  result.android = /Android \d/.test(navigator.userAgent);
  result.webkit = !ie$1 && 'WebkitAppearance' in document.documentElement.style;
  result.safari = /Apple Computer/.test(navigator.vendor);
  result.webkit_version = result.webkit && +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1];
}

var domIndex = function(node) {
  for (var index = 0;; index++) {
    node = node.previousSibling;
    if (!node) { return index }
  }
};

var parentNode = function(node) {
  var parent = node.parentNode;
  return parent && parent.nodeType == 11 ? parent.host : parent
};

var textRange = function(node, from, to) {
  var range = document.createRange();
  range.setEnd(node, to == null ? node.nodeValue.length : to);
  range.setStart(node, from || 0);
  return range
};

// Scans forward and backward through DOM positions equivalent to the
// given one to see if the two are in the same place (i.e. after a
// text node vs at the end of that text node)
var isEquivalentPosition = function(node, off, targetNode, targetOff) {
  return targetNode && (scanFor(node, off, targetNode, targetOff, -1) ||
                        scanFor(node, off, targetNode, targetOff, 1))
};

var atomElements = /^(img|br|input|textarea|hr)$/i;

function scanFor(node, off, targetNode, targetOff, dir) {
  for (;;) {
    if (node == targetNode && off == targetOff) { return true }
    if (off == (dir < 0 ? 0 : nodeSize(node))) {
      var parent = node.parentNode;
      if (parent.nodeType != 1 || hasBlockDesc(node) || atomElements.test(node.nodeName) || node.contentEditable == "false")
        { return false }
      off = domIndex(node) + (dir < 0 ? 0 : 1);
      node = parent;
    } else if (node.nodeType == 1) {
      node = node.childNodes[off + (dir < 0 ? -1 : 0)];
      off = dir < 0 ? nodeSize(node) : 0;
    } else {
      return false
    }
  }
}

function nodeSize(node) {
  return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length
}

function hasBlockDesc(dom) {
  var desc;
  for (var cur = dom; cur; cur = cur.parentNode) { if (desc = cur.pmViewDesc) { break } }
  return desc && desc.node && desc.node.isBlock && (desc.dom == dom || desc.contentDOM == dom)
}

// Work around Chrome issue https://bugs.chromium.org/p/chromium/issues/detail?id=447523
// (isCollapsed inappropriately returns true in shadow dom)
var selectionCollapsed = function(domSel) {
  var collapsed = domSel.isCollapsed;
  if (collapsed && result.chrome && domSel.rangeCount && !domSel.getRangeAt(0).collapsed)
    { collapsed = false; }
  return collapsed
};

function keyEvent(keyCode, key) {
  var event = document.createEvent("Event");
  event.initEvent("keydown", true, true);
  event.keyCode = keyCode;
  event.key = event.code = key;
  return event
}

function windowRect(win) {
  return {left: 0, right: win.innerWidth,
          top: 0, bottom: win.innerHeight}
}

function getSide(value, side) {
  return typeof value == "number" ? value : value[side]
}

function scrollRectIntoView(view, rect, startDOM) {
  var scrollThreshold = view.someProp("scrollThreshold") || 0, scrollMargin = view.someProp("scrollMargin") || 5;
  var doc = view.dom.ownerDocument, win = doc.defaultView;
  for (var parent = startDOM || view.dom;; parent = parentNode(parent)) {
    if (!parent) { break }
    if (parent.nodeType != 1) { continue }
    var atTop = parent == doc.body || parent.nodeType != 1;
    var bounding = atTop ? windowRect(win) : parent.getBoundingClientRect();
    var moveX = 0, moveY = 0;
    if (rect.top < bounding.top + getSide(scrollThreshold, "top"))
      { moveY = -(bounding.top - rect.top + getSide(scrollMargin, "top")); }
    else if (rect.bottom > bounding.bottom - getSide(scrollThreshold, "bottom"))
      { moveY = rect.bottom - bounding.bottom + getSide(scrollMargin, "bottom"); }
    if (rect.left < bounding.left + getSide(scrollThreshold, "left"))
      { moveX = -(bounding.left - rect.left + getSide(scrollMargin, "left")); }
    else if (rect.right > bounding.right - getSide(scrollThreshold, "right"))
      { moveX = rect.right - bounding.right + getSide(scrollMargin, "right"); }
    if (moveX || moveY) {
      if (atTop) {
        win.scrollBy(moveX, moveY);
      } else {
        if (moveY) { parent.scrollTop += moveY; }
        if (moveX) { parent.scrollLeft += moveX; }
      }
    }
    if (atTop) { break }
  }
}

// Store the scroll position of the editor's parent nodes, along with
// the top position of an element near the top of the editor, which
// will be used to make sure the visible viewport remains stable even
// when the size of the content above changes.
function storeScrollPos(view) {
  var rect = view.dom.getBoundingClientRect(), startY = Math.max(0, rect.top);
  var refDOM, refTop;
  for (var x = (rect.left + rect.right) / 2, y = startY + 1;
       y < Math.min(innerHeight, rect.bottom); y += 5) {
    var dom = view.root.elementFromPoint(x, y);
    if (dom == view.dom || !view.dom.contains(dom)) { continue }
    var localRect = dom.getBoundingClientRect();
    if (localRect.top >= startY - 20) {
      refDOM = dom;
      refTop = localRect.top;
      break
    }
  }
  return {refDOM: refDOM, refTop: refTop, stack: scrollStack(view.dom)}
}

function scrollStack(dom) {
  var stack = [], doc = dom.ownerDocument;
  for (; dom; dom = parentNode(dom)) {
    stack.push({dom: dom, top: dom.scrollTop, left: dom.scrollLeft});
    if (dom == doc) { break }
  }
  return stack
}

// Reset the scroll position of the editor's parent nodes to that what
// it was before, when storeScrollPos was called.
function resetScrollPos(ref) {
  var refDOM = ref.refDOM;
  var refTop = ref.refTop;
  var stack = ref.stack;

  var newRefTop = refDOM ? refDOM.getBoundingClientRect().top : 0;
  restoreScrollStack(stack, newRefTop == 0 ? 0 : newRefTop - refTop);
}

function restoreScrollStack(stack, dTop) {
  for (var i = 0; i < stack.length; i++) {
    var ref = stack[i];
    var dom = ref.dom;
    var top = ref.top;
    var left = ref.left;
    if (dom.scrollTop != top + dTop) { dom.scrollTop = top + dTop; }
    if (dom.scrollLeft != left) { dom.scrollLeft = left; }
  }
}

var preventScrollSupported = null;
// Feature-detects support for .focus({preventScroll: true}), and uses
// a fallback kludge when not supported.
function focusPreventScroll(dom) {
  if (dom.setActive) { return dom.setActive() } // in IE
  if (preventScrollSupported) { return dom.focus(preventScrollSupported) }

  var stored = scrollStack(dom);
  dom.focus(preventScrollSupported == null ? {
    get preventScroll() {
      preventScrollSupported = {preventScroll: true};
      return true
    }
  } : undefined);
  if (!preventScrollSupported) {
    preventScrollSupported = false;
    restoreScrollStack(stored, 0);
  }
}

function findOffsetInNode(node, coords) {
  var closest, dxClosest = 2e8, coordsClosest, offset = 0;
  var rowBot = coords.top, rowTop = coords.top;
  for (var child = node.firstChild, childIndex = 0; child; child = child.nextSibling, childIndex++) {
    var rects = (void 0);
    if (child.nodeType == 1) { rects = child.getClientRects(); }
    else if (child.nodeType == 3) { rects = textRange(child).getClientRects(); }
    else { continue }

    for (var i = 0; i < rects.length; i++) {
      var rect = rects[i];
      if (rect.top <= rowBot && rect.bottom >= rowTop) {
        rowBot = Math.max(rect.bottom, rowBot);
        rowTop = Math.min(rect.top, rowTop);
        var dx = rect.left > coords.left ? rect.left - coords.left
            : rect.right < coords.left ? coords.left - rect.right : 0;
        if (dx < dxClosest) {
          closest = child;
          dxClosest = dx;
          coordsClosest = dx && closest.nodeType == 3 ? {left: rect.right < coords.left ? rect.right : rect.left, top: coords.top} : coords;
          if (child.nodeType == 1 && dx)
            { offset = childIndex + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0); }
          continue
        }
      }
      if (!closest && (coords.left >= rect.right && coords.top >= rect.top ||
                       coords.left >= rect.left && coords.top >= rect.bottom))
        { offset = childIndex + 1; }
    }
  }
  if (closest && closest.nodeType == 3) { return findOffsetInText(closest, coordsClosest) }
  if (!closest || (dxClosest && closest.nodeType == 1)) { return {node: node, offset: offset} }
  return findOffsetInNode(closest, coordsClosest)
}

function findOffsetInText(node, coords) {
  var len = node.nodeValue.length;
  var range = document.createRange();
  for (var i = 0; i < len; i++) {
    range.setEnd(node, i + 1);
    range.setStart(node, i);
    var rect = singleRect(range, 1);
    if (rect.top == rect.bottom) { continue }
    if (inRect(coords, rect))
      { return {node: node, offset: i + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0)} }
  }
  return {node: node, offset: 0}
}

function inRect(coords, rect) {
  return coords.left >= rect.left - 1 && coords.left <= rect.right + 1&&
    coords.top >= rect.top - 1 && coords.top <= rect.bottom + 1
}

function targetKludge(dom, coords) {
  var parent = dom.parentNode;
  if (parent && /^li$/i.test(parent.nodeName) && coords.left < dom.getBoundingClientRect().left)
    { return parent }
  return dom
}

function posFromElement(view, elt, coords) {
  var ref = findOffsetInNode(elt, coords);
  var node = ref.node;
  var offset = ref.offset;
  var bias = -1;
  if (node.nodeType == 1 && !node.firstChild) {
    var rect = node.getBoundingClientRect();
    bias = rect.left != rect.right && coords.left > (rect.left + rect.right) / 2 ? 1 : -1;
  }
  return view.docView.posFromDOM(node, offset, bias)
}

function posFromCaret(view, node, offset, coords) {
  // Browser (in caretPosition/RangeFromPoint) will agressively
  // normalize towards nearby inline nodes. Since we are interested in
  // positions between block nodes too, we first walk up the hierarchy
  // of nodes to see if there are block nodes that the coordinates
  // fall outside of. If so, we take the position before/after that
  // block. If not, we call `posFromDOM` on the raw node/offset.
  var outside = -1;
  for (var cur = node;;) {
    if (cur == view.dom) { break }
    var desc = view.docView.nearestDesc(cur, true);
    if (!desc) { return null }
    if (desc.node.isBlock && desc.parent) {
      var rect = desc.dom.getBoundingClientRect();
      if (rect.left > coords.left || rect.top > coords.top) { outside = desc.posBefore; }
      else if (rect.right < coords.left || rect.bottom < coords.top) { outside = desc.posAfter; }
      else { break }
    }
    cur = desc.dom.parentNode;
  }
  return outside > -1 ? outside : view.docView.posFromDOM(node, offset)
}

function elementFromPoint(element, coords, box) {
  var len = element.childNodes.length;
  if (len && box.top < box.bottom) {
    for (var startI = Math.max(0, Math.min(len - 1, Math.floor(len * (coords.top - box.top) / (box.bottom - box.top)) - 2)), i = startI;;) {
      var child = element.childNodes[i];
      if (child.nodeType == 1) {
        var rects = child.getClientRects();
        for (var j = 0; j < rects.length; j++) {
          var rect = rects[j];
          if (inRect(coords, rect)) { return elementFromPoint(child, coords, rect) }
        }
      }
      if ((i = (i + 1) % len) == startI) { break }
    }
  }
  return element
}

// Given an x,y position on the editor, get the position in the document.
function posAtCoords(view, coords) {
  var assign, assign$1;

  var root = view.root, node, offset;
  if (root.caretPositionFromPoint) {
    try { // Firefox throws for this call in hard-to-predict circumstances (#994)
      var pos$1 = root.caretPositionFromPoint(coords.left, coords.top);
      if (pos$1) { ((assign = pos$1, node = assign.offsetNode, offset = assign.offset)); }
    } catch (_) {}
  }
  if (!node && root.caretRangeFromPoint) {
    var range = root.caretRangeFromPoint(coords.left, coords.top);
    if (range) { ((assign$1 = range, node = assign$1.startContainer, offset = assign$1.startOffset)); }
  }

  var elt = root.elementFromPoint(coords.left, coords.top + 1), pos;
  if (!elt || !view.dom.contains(elt.nodeType != 1 ? elt.parentNode : elt)) {
    var box = view.dom.getBoundingClientRect();
    if (!inRect(coords, box)) { return null }
    elt = elementFromPoint(view.dom, coords, box);
    if (!elt) { return null }
  }
  elt = targetKludge(elt, coords);
  if (node) {
    if (result.gecko && node.nodeType == 1) {
      // Firefox will sometimes return offsets into <input> nodes, which
      // have no actual children, from caretPositionFromPoint (#953)
      offset = Math.min(offset, node.childNodes.length);
      // It'll also move the returned position before image nodes,
      // even if those are behind it.
      if (offset < node.childNodes.length) {
        var next = node.childNodes[offset], box$1;
        if (next.nodeName == "IMG" && (box$1 = next.getBoundingClientRect()).right <= coords.left &&
            box$1.bottom > coords.top)
          { offset++; }
      }
    }
    // Suspiciously specific kludge to work around caret*FromPoint
    // never returning a position at the end of the document
    if (node == view.dom && offset == node.childNodes.length - 1 && node.lastChild.nodeType == 1 &&
        coords.top > node.lastChild.getBoundingClientRect().bottom)
      { pos = view.state.doc.content.size; }
    // Ignore positions directly after a BR, since caret*FromPoint
    // 'round up' positions that would be more accurately placed
    // before the BR node.
    else if (offset == 0 || node.nodeType != 1 || node.childNodes[offset - 1].nodeName != "BR")
      { pos = posFromCaret(view, node, offset, coords); }
  }
  if (pos == null) { pos = posFromElement(view, elt, coords); }

  var desc = view.docView.nearestDesc(elt, true);
  return {pos: pos, inside: desc ? desc.posAtStart - desc.border : -1}
}

function singleRect(object, bias) {
  var rects = object.getClientRects();
  return !rects.length ? object.getBoundingClientRect() : rects[bias < 0 ? 0 : rects.length - 1]
}

// : (EditorView, number) → {left: number, top: number, right: number, bottom: number}
// Given a position in the document model, get a bounding box of the
// character at that position, relative to the window.
function coordsAtPos(view, pos) {
  var ref = view.docView.domFromPos(pos);
  var node = ref.node;
  var offset = ref.offset;

  // These browsers support querying empty text ranges
  if (node.nodeType == 3 && (result.chrome || result.gecko)) {
    var rect = singleRect(textRange(node, offset, offset), 0);
    // Firefox returns bad results (the position before the space)
    // when querying a position directly after line-broken
    // whitespace. Detect this situation and and kludge around it
    if (result.gecko && offset && /\s/.test(node.nodeValue[offset - 1]) && offset < node.nodeValue.length) {
      var rectBefore = singleRect(textRange(node, offset - 1, offset - 1), -1);
      if (Math.abs(rectBefore.left - rect.left) < 1 && rectBefore.top == rect.top) {
        var rectAfter = singleRect(textRange(node, offset, offset + 1), -1);
        return flattenV(rectAfter, rectAfter.left < rectBefore.left)
      }
    }
    return rect
  }

  if (node.nodeType == 1 && !view.state.doc.resolve(pos).parent.inlineContent) {
    // Return a horizontal line in block context
    var top = true, rect$1;
    if (offset < node.childNodes.length) {
      var after = node.childNodes[offset];
      if (after.nodeType == 1) { rect$1 = after.getBoundingClientRect(); }
    }
    if (!rect$1 && offset) {
      var before = node.childNodes[offset - 1];
      if (before.nodeType == 1) { rect$1 = before.getBoundingClientRect(); top = false; }
    }
    return flattenH(rect$1 || node.getBoundingClientRect(), top)
  }

  // Not Firefox/Chrome, or not in a text node, so we have to use
  // actual element/character rectangles to get a solution (this part
  // is not very bidi-safe)
  //
  // Try the left side first, fall back to the right one if that
  // doesn't work.
  for (var dir = -1; dir < 2; dir += 2) {
    if (dir < 0 && offset) {
      var prev = (void 0), target = node.nodeType == 3 ? textRange(node, offset - 1, offset)
          : (prev = node.childNodes[offset - 1]).nodeType == 3 ? textRange(prev)
          : prev.nodeType == 1 && prev.nodeName != "BR" ? prev : null; // BR nodes tend to only return the rectangle before them
      if (target) {
        var rect$2 = singleRect(target, 1);
        if (rect$2.top < rect$2.bottom) { return flattenV(rect$2, false) }
      }
    } else if (dir > 0 && offset < nodeSize(node)) {
      var next = (void 0), target$1 = node.nodeType == 3 ? textRange(node, offset, offset + 1)
          : (next = node.childNodes[offset]).nodeType == 3 ? textRange(next)
          : next.nodeType == 1 ? next : null;
      if (target$1) {
        var rect$3 = singleRect(target$1, -1);
        if (rect$3.top < rect$3.bottom) { return flattenV(rect$3, true) }
      }
    }
  }
  // All else failed, just try to get a rectangle for the target node
  return flattenV(singleRect(node.nodeType == 3 ? textRange(node) : node, 0), false)
}

function flattenV(rect, left) {
  if (rect.width == 0) { return rect }
  var x = left ? rect.left : rect.right;
  return {top: rect.top, bottom: rect.bottom, left: x, right: x}
}

function flattenH(rect, top) {
  if (rect.height == 0) { return rect }
  var y = top ? rect.top : rect.bottom;
  return {top: y, bottom: y, left: rect.left, right: rect.right}
}

function withFlushedState(view, state, f) {
  var viewState = view.state, active = view.root.activeElement;
  if (viewState != state) { view.updateState(state); }
  if (active != view.dom) { view.focus(); }
  try {
    return f()
  } finally {
    if (viewState != state) { view.updateState(viewState); }
    if (active != view.dom) { active.focus(); }
  }
}

// : (EditorView, number, number)
// Whether vertical position motion in a given direction
// from a position would leave a text block.
function endOfTextblockVertical(view, state, dir) {
  var sel = state.selection;
  var $pos = dir == "up" ? sel.$anchor.min(sel.$head) : sel.$anchor.max(sel.$head);
  return withFlushedState(view, state, function () {
    var ref = view.docView.domFromPos($pos.pos);
    var dom = ref.node;
    for (;;) {
      var nearest = view.docView.nearestDesc(dom, true);
      if (!nearest) { break }
      if (nearest.node.isBlock) { dom = nearest.dom; break }
      dom = nearest.dom.parentNode;
    }
    var coords = coordsAtPos(view, $pos.pos);
    for (var child = dom.firstChild; child; child = child.nextSibling) {
      var boxes = (void 0);
      if (child.nodeType == 1) { boxes = child.getClientRects(); }
      else if (child.nodeType == 3) { boxes = textRange(child, 0, child.nodeValue.length).getClientRects(); }
      else { continue }
      for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        if (box.bottom > box.top && (dir == "up" ? box.bottom < coords.top + 1 : box.top > coords.bottom - 1))
          { return false }
      }
    }
    return true
  })
}

var maybeRTL = /[\u0590-\u08ac]/;

function endOfTextblockHorizontal(view, state, dir) {
  var ref = state.selection;
  var $head = ref.$head;
  if (!$head.parent.isTextblock) { return false }
  var offset = $head.parentOffset, atStart = !offset, atEnd = offset == $head.parent.content.size;
  var sel = getSelection();
  // If the textblock is all LTR, or the browser doesn't support
  // Selection.modify (Edge), fall back to a primitive approach
  if (!maybeRTL.test($head.parent.textContent) || !sel.modify)
    { return dir == "left" || dir == "backward" ? atStart : atEnd }

  return withFlushedState(view, state, function () {
    // This is a huge hack, but appears to be the best we can
    // currently do: use `Selection.modify` to move the selection by
    // one character, and see if that moves the cursor out of the
    // textblock (or doesn't move it at all, when at the start/end of
    // the document).
    var oldRange = sel.getRangeAt(0), oldNode = sel.focusNode, oldOff = sel.focusOffset;
    var oldBidiLevel = sel.caretBidiLevel; // Only for Firefox
    sel.modify("move", dir, "character");
    var parentDOM = $head.depth ? view.docView.domAfterPos($head.before()) : view.dom;
    var result = !parentDOM.contains(sel.focusNode.nodeType == 1 ? sel.focusNode : sel.focusNode.parentNode) ||
        (oldNode == sel.focusNode && oldOff == sel.focusOffset);
    // Restore the previous selection
    sel.removeAllRanges();
    sel.addRange(oldRange);
    if (oldBidiLevel != null) { sel.caretBidiLevel = oldBidiLevel; }
    return result
  })
}

var cachedState = null, cachedDir = null, cachedResult = false;
function endOfTextblock(view, state, dir) {
  if (cachedState == state && cachedDir == dir) { return cachedResult }
  cachedState = state; cachedDir = dir;
  return cachedResult = dir == "up" || dir == "down"
    ? endOfTextblockVertical(view, state, dir)
    : endOfTextblockHorizontal(view, state, dir)
}

// NodeView:: interface
//
// By default, document nodes are rendered using the result of the
// [`toDOM`](#model.NodeSpec.toDOM) method of their spec, and managed
// entirely by the editor. For some use cases, such as embedded
// node-specific editing interfaces, you want more control over
// the behavior of a node's in-editor representation, and need to
// [define](#view.EditorProps.nodeViews) a custom node view.
//
// Objects returned as node views must conform to this interface.
//
//   dom:: ?dom.Node
//   The outer DOM node that represents the document node. When not
//   given, the default strategy is used to create a DOM node.
//
//   contentDOM:: ?dom.Node
//   The DOM node that should hold the node's content. Only meaningful
//   if the node view also defines a `dom` property and if its node
//   type is not a leaf node type. When this is present, ProseMirror
//   will take care of rendering the node's children into it. When it
//   is not present, the node view itself is responsible for rendering
//   (or deciding not to render) its child nodes.
//
//   update:: ?(node: Node, decorations: [Decoration]) → bool
//   When given, this will be called when the view is updating itself.
//   It will be given a node (possibly of a different type), and an
//   array of active decorations (which are automatically drawn, and
//   the node view may ignore if it isn't interested in them), and
//   should return true if it was able to update to that node, and
//   false otherwise. If the node view has a `contentDOM` property (or
//   no `dom` property), updating its child nodes will be handled by
//   ProseMirror.
//
//   selectNode:: ?()
//   Can be used to override the way the node's selected status (as a
//   node selection) is displayed.
//
//   deselectNode:: ?()
//   When defining a `selectNode` method, you should also provide a
//   `deselectNode` method to remove the effect again.
//
//   setSelection:: ?(anchor: number, head: number, root: dom.Document)
//   This will be called to handle setting the selection inside the
//   node. The `anchor` and `head` positions are relative to the start
//   of the node. By default, a DOM selection will be created between
//   the DOM positions corresponding to those positions, but if you
//   override it you can do something else.
//
//   stopEvent:: ?(event: dom.Event) → bool
//   Can be used to prevent the editor view from trying to handle some
//   or all DOM events that bubble up from the node view. Events for
//   which this returns true are not handled by the editor.
//
//   ignoreMutation:: ?(dom.MutationRecord) → bool
//   Called when a DOM
//   [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
//   or a selection change happens within the view. When the change is
//   a selection change, the record will have a `type` property of
//   `"selection"` (which doesn't occur for native mutation records).
//   Return false if the editor should re-read the selection or
//   re-parse the range around the mutation, true if it can safely be
//   ignored.
//
//   destroy:: ?()
//   Called when the node view is removed from the editor or the whole
//   editor is destroyed.

// View descriptions are data structures that describe the DOM that is
// used to represent the editor's content. They are used for:
//
// - Incremental redrawing when the document changes
//
// - Figuring out what part of the document a given DOM position
//   corresponds to
//
// - Wiring in custom implementations of the editing interface for a
//   given node
//
// They form a doubly-linked mutable tree, starting at `view.docView`.

var NOT_DIRTY = 0, CHILD_DIRTY = 1, CONTENT_DIRTY = 2, NODE_DIRTY = 3;

// Superclass for the various kinds of descriptions. Defines their
// basic structure and shared methods.
var ViewDesc = function ViewDesc(parent, children, dom, contentDOM) {
  this.parent = parent;
  this.children = children;
  this.dom = dom;
  // An expando property on the DOM node provides a link back to its
  // description.
  dom.pmViewDesc = this;
  // This is the node that holds the child views. It may be null for
  // descs that don't have children.
  this.contentDOM = contentDOM;
  this.dirty = NOT_DIRTY;
};

var prototypeAccessors$9 = { beforePosition: { configurable: true },size: { configurable: true },border: { configurable: true },posBefore: { configurable: true },posAtStart: { configurable: true },posAfter: { configurable: true },posAtEnd: { configurable: true },contentLost: { configurable: true } };

// Used to check whether a given description corresponds to a
// widget/mark/node.
ViewDesc.prototype.matchesWidget = function matchesWidget () { return false };
ViewDesc.prototype.matchesMark = function matchesMark () { return false };
ViewDesc.prototype.matchesNode = function matchesNode () { return false };
ViewDesc.prototype.matchesHack = function matchesHack () { return false };

prototypeAccessors$9.beforePosition.get = function () { return false };

// : () → ?ParseRule
// When parsing in-editor content (in domchange.js), we allow
// descriptions to determine the parse rules that should be used to
// parse them.
ViewDesc.prototype.parseRule = function parseRule () { return null };

// : (dom.Event) → bool
// Used by the editor's event handler to ignore events that come
// from certain descs.
ViewDesc.prototype.stopEvent = function stopEvent () { return false };

// The size of the content represented by this desc.
prototypeAccessors$9.size.get = function () {
  var size = 0;
  for (var i = 0; i < this.children.length; i++) { size += this.children[i].size; }
  return size
};

// For block nodes, this represents the space taken up by their
// start/end tokens.
prototypeAccessors$9.border.get = function () { return 0 };

ViewDesc.prototype.destroy = function destroy () {
  this.parent = null;
  if (this.dom.pmViewDesc == this) { this.dom.pmViewDesc = null; }
  for (var i = 0; i < this.children.length; i++)
    { this.children[i].destroy(); }
};

ViewDesc.prototype.posBeforeChild = function posBeforeChild (child) {
  for (var i = 0, pos = this.posAtStart; i < this.children.length; i++) {
    var cur = this.children[i];
    if (cur == child) { return pos }
    pos += cur.size;
  }
};

prototypeAccessors$9.posBefore.get = function () {
  return this.parent.posBeforeChild(this)
};

prototypeAccessors$9.posAtStart.get = function () {
  return this.parent ? this.parent.posBeforeChild(this) + this.border : 0
};

prototypeAccessors$9.posAfter.get = function () {
  return this.posBefore + this.size
};

prototypeAccessors$9.posAtEnd.get = function () {
  return this.posAtStart + this.size - 2 * this.border
};

// : (dom.Node, number, ?number) → number
ViewDesc.prototype.localPosFromDOM = function localPosFromDOM (dom, offset, bias) {
  // If the DOM position is in the content, use the child desc after
  // it to figure out a position.
  if (this.contentDOM && this.contentDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode)) {
    if (bias < 0) {
      var domBefore, desc;
      if (dom == this.contentDOM) {
        domBefore = dom.childNodes[offset - 1];
      } else {
        while (dom.parentNode != this.contentDOM) { dom = dom.parentNode; }
        domBefore = dom.previousSibling;
      }
      while (domBefore && !((desc = domBefore.pmViewDesc) && desc.parent == this)) { domBefore = domBefore.previousSibling; }
      return domBefore ? this.posBeforeChild(desc) + desc.size : this.posAtStart
    } else {
      var domAfter, desc$1;
      if (dom == this.contentDOM) {
        domAfter = dom.childNodes[offset];
      } else {
        while (dom.parentNode != this.contentDOM) { dom = dom.parentNode; }
        domAfter = dom.nextSibling;
      }
      while (domAfter && !((desc$1 = domAfter.pmViewDesc) && desc$1.parent == this)) { domAfter = domAfter.nextSibling; }
      return domAfter ? this.posBeforeChild(desc$1) : this.posAtEnd
    }
  }
  // Otherwise, use various heuristics, falling back on the bias
  // parameter, to determine whether to return the position at the
  // start or at the end of this view desc.
  var atEnd;
  if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) {
    atEnd = dom.compareDocumentPosition(this.contentDOM) & 2;
  } else if (this.dom.firstChild) {
    if (offset == 0) { for (var search = dom;; search = search.parentNode) {
      if (search == this.dom) { atEnd = false; break }
      if (search.parentNode.firstChild != search) { break }
    } }
    if (atEnd == null && offset == dom.childNodes.length) { for (var search$1 = dom;; search$1 = search$1.parentNode) {
      if (search$1 == this.dom) { atEnd = true; break }
      if (search$1.parentNode.lastChild != search$1) { break }
    } }
  }
  return (atEnd == null ? bias > 0 : atEnd) ? this.posAtEnd : this.posAtStart
};

// Scan up the dom finding the first desc that is a descendant of
// this one.
ViewDesc.prototype.nearestDesc = function nearestDesc (dom, onlyNodes) {
  for (var first = true, cur = dom; cur; cur = cur.parentNode) {
    var desc = this.getDesc(cur);
    if (desc && (!onlyNodes || desc.node)) {
      // If dom is outside of this desc's nodeDOM, don't count it.
      if (first && desc.nodeDOM && !(desc.nodeDOM.nodeType == 1 ? desc.nodeDOM.contains(dom) : desc.nodeDOM == dom)) { first = false; }
      else { return desc }
    }
  }
};

ViewDesc.prototype.getDesc = function getDesc (dom) {
  var desc = dom.pmViewDesc;
  for (var cur = desc; cur; cur = cur.parent) { if (cur == this) { return desc } }
};

ViewDesc.prototype.posFromDOM = function posFromDOM (dom, offset, bias) {
  for (var scan = dom;; scan = scan.parentNode) {
    var desc = this.getDesc(scan);
    if (desc) { return desc.localPosFromDOM(dom, offset, bias) }
  }
};

// : (number) → ?NodeViewDesc
// Find the desc for the node after the given pos, if any. (When a
// parent node overrode rendering, there might not be one.)
ViewDesc.prototype.descAt = function descAt (pos) {
  for (var i = 0, offset = 0; i < this.children.length; i++) {
    var child = this.children[i], end = offset + child.size;
    if (offset == pos && end != offset) {
      while (!child.border && child.children.length) { child = child.children[0]; }
      return child
    }
    if (pos < end) { return child.descAt(pos - offset - child.border) }
    offset = end;
  }
};

// : (number) → {node: dom.Node, offset: number}
ViewDesc.prototype.domFromPos = function domFromPos (pos) {
  if (!this.contentDOM) { return {node: this.dom, offset: 0} }
  for (var offset = 0, i = 0;; i++) {
    if (offset == pos) {
      while (i < this.children.length && (this.children[i].beforePosition || this.children[i].dom.parentNode != this.contentDOM)) { i++; }
      return {node: this.contentDOM,
              offset: i == this.children.length ? this.contentDOM.childNodes.length : domIndex(this.children[i].dom)}
    }
    if (i == this.children.length) { throw new Error("Invalid position " + pos) }
    var child = this.children[i], end = offset + child.size;
    if (pos < end) { return child.domFromPos(pos - offset - child.border) }
    offset = end;
  }
};

// Used to find a DOM range in a single parent for a given changed
// range.
ViewDesc.prototype.parseRange = function parseRange (from, to, base) {
    if ( base === void 0 ) base = 0;

  if (this.children.length == 0)
    { return {node: this.contentDOM, from: from, to: to, fromOffset: 0, toOffset: this.contentDOM.childNodes.length} }

  var fromOffset = -1, toOffset = -1;
  for (var offset = base, i = 0;; i++) {
    var child = this.children[i], end = offset + child.size;
    if (fromOffset == -1 && from <= end) {
      var childBase = offset + child.border;
      // FIXME maybe descend mark views to parse a narrower range?
      if (from >= childBase && to <= end - child.border && child.node &&
          child.contentDOM && this.contentDOM.contains(child.contentDOM))
        { return child.parseRange(from, to, childBase) }

      from = offset;
      for (var j = i; j > 0; j--) {
        var prev = this.children[j - 1];
        if (prev.size && prev.dom.parentNode == this.contentDOM && !prev.emptyChildAt(1)) {
          fromOffset = domIndex(prev.dom) + 1;
          break
        }
        from -= prev.size;
      }
      if (fromOffset == -1) { fromOffset = 0; }
    }
    if (fromOffset > -1 && to <= end) {
      to = end;
      for (var j$1 = i + 1; j$1 < this.children.length; j$1++) {
        var next = this.children[j$1];
        if (next.size && next.dom.parentNode == this.contentDOM && !next.emptyChildAt(-1)) {
          toOffset = domIndex(next.dom);
          break
        }
        to += next.size;
      }
      if (toOffset == -1) { toOffset = this.contentDOM.childNodes.length; }
      break
    }
    offset = end;
  }
  return {node: this.contentDOM, from: from, to: to, fromOffset: fromOffset, toOffset: toOffset}
};

ViewDesc.prototype.emptyChildAt = function emptyChildAt (side) {
  if (this.border || !this.contentDOM || !this.children.length) { return false }
  var child = this.children[side < 0 ? 0 : this.children.length - 1];
  return child.size == 0 || child.emptyChildAt(side)
};

// : (number) → dom.Node
ViewDesc.prototype.domAfterPos = function domAfterPos (pos) {
  var ref = this.domFromPos(pos);
    var node = ref.node;
    var offset = ref.offset;
  if (node.nodeType != 1 || offset == node.childNodes.length)
    { throw new RangeError("No node after pos " + pos) }
  return node.childNodes[offset]
};

// : (number, number, dom.Document)
// View descs are responsible for setting any selection that falls
// entirely inside of them, so that custom implementations can do
// custom things with the selection. Note that this falls apart when
// a selection starts in such a node and ends in another, in which
// case we just use whatever domFromPos produces as a best effort.
ViewDesc.prototype.setSelection = function setSelection (anchor, head, root, force) {
  // If the selection falls entirely in a child, give it to that child
  var from = Math.min(anchor, head), to = Math.max(anchor, head);
  for (var i = 0, offset = 0; i < this.children.length; i++) {
    var child = this.children[i], end = offset + child.size;
    if (from > offset && to < end)
      { return child.setSelection(anchor - offset - child.border, head - offset - child.border, root, force) }
    offset = end;
  }

  var anchorDOM = this.domFromPos(anchor), headDOM = this.domFromPos(head);
  var domSel = root.getSelection(), range = document.createRange();
  if (!force &&
      isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset) &&
      isEquivalentPosition(headDOM.node, headDOM.offset, domSel.focusNode, domSel.focusOffset))
    { return }

  // Selection.extend can be used to create an 'inverted' selection
  // (one where the focus is before the anchor), but not all
  // browsers support it yet.
  if (domSel.extend) {
    range.setEnd(anchorDOM.node, anchorDOM.offset);
    range.collapse(false);
  } else {
    if (anchor > head) { var tmp = anchorDOM; anchorDOM = headDOM; headDOM = tmp; }
    range.setEnd(headDOM.node, headDOM.offset);
    range.setStart(anchorDOM.node, anchorDOM.offset);
  }
  domSel.removeAllRanges();
  domSel.addRange(range);
  if (domSel.extend)
    { domSel.extend(headDOM.node, headDOM.offset); }
};

// : (dom.MutationRecord) → bool
ViewDesc.prototype.ignoreMutation = function ignoreMutation (_mutation) {
  return !this.contentDOM
};

prototypeAccessors$9.contentLost.get = function () {
  return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM)
};

// Remove a subtree of the element tree that has been touched
// by a DOM change, so that the next update will redraw it.
ViewDesc.prototype.markDirty = function markDirty (from, to) {
  for (var offset = 0, i = 0; i < this.children.length; i++) {
    var child = this.children[i], end = offset + child.size;
    if (offset == end ? from <= end && to >= offset : from < end && to > offset) {
      var startInside = offset + child.border, endInside = end - child.border;
      if (from >= startInside && to <= endInside) {
        this.dirty = from == offset || to == end ? CONTENT_DIRTY : CHILD_DIRTY;
        if (from == startInside && to == endInside &&
            (child.contentLost || child.dom.parentNode != this.contentDOM)) { child.dirty = NODE_DIRTY; }
        else { child.markDirty(from - startInside, to - startInside); }
        return
      } else {
        child.dirty = NODE_DIRTY;
      }
    }
    offset = end;
  }
  this.dirty = CONTENT_DIRTY;
};

ViewDesc.prototype.markParentsDirty = function markParentsDirty () {
  for (var node = this.parent; node; node = node.parent) {
    var dirty =  CONTENT_DIRTY ;
    if (node.dirty < dirty) { node.dirty = dirty; }
  }
};

Object.defineProperties( ViewDesc.prototype, prototypeAccessors$9 );

// Reused array to avoid allocating fresh arrays for things that will
// stay empty anyway.
var nothing = [];

// A widget desc represents a widget decoration, which is a DOM node
// drawn between the document nodes.
var WidgetViewDesc = /*@__PURE__*/(function (ViewDesc) {
  function WidgetViewDesc(parent, widget, view, pos) {
    var self, dom = widget.type.toDOM;
    if (typeof dom == "function") { dom = dom(view, function () {
      if (!self) { return pos }
      if (self.parent) { return self.parent.posBeforeChild(self) }
    }); }
    if (!widget.type.spec.raw) {
      if (dom.nodeType != 1) {
        var wrap = document.createElement("span");
        wrap.appendChild(dom);
        dom = wrap;
      }
      dom.contentEditable = false;
      dom.classList.add("ProseMirror-widget");
    }
    ViewDesc.call(this, parent, nothing, dom, null);
    this.widget = widget;
    self = this;
  }

  if ( ViewDesc ) WidgetViewDesc.__proto__ = ViewDesc;
  WidgetViewDesc.prototype = Object.create( ViewDesc && ViewDesc.prototype );
  WidgetViewDesc.prototype.constructor = WidgetViewDesc;

  var prototypeAccessors$1 = { beforePosition: { configurable: true } };

  prototypeAccessors$1.beforePosition.get = function () {
    return this.widget.type.side < 0
  };

  WidgetViewDesc.prototype.matchesWidget = function matchesWidget (widget) {
    return this.dirty == NOT_DIRTY && widget.type.eq(this.widget.type)
  };

  WidgetViewDesc.prototype.parseRule = function parseRule () { return {ignore: true} };

  WidgetViewDesc.prototype.stopEvent = function stopEvent (event) {
    var stop = this.widget.spec.stopEvent;
    return stop ? stop(event) : false
  };

  Object.defineProperties( WidgetViewDesc.prototype, prototypeAccessors$1 );

  return WidgetViewDesc;
}(ViewDesc));

var CompositionViewDesc = /*@__PURE__*/(function (ViewDesc) {
  function CompositionViewDesc(parent, dom, textDOM, text) {
    ViewDesc.call(this, parent, nothing, dom, null);
    this.textDOM = textDOM;
    this.text = text;
  }

  if ( ViewDesc ) CompositionViewDesc.__proto__ = ViewDesc;
  CompositionViewDesc.prototype = Object.create( ViewDesc && ViewDesc.prototype );
  CompositionViewDesc.prototype.constructor = CompositionViewDesc;

  var prototypeAccessors$2 = { size: { configurable: true } };

  prototypeAccessors$2.size.get = function () { return this.text.length };

  CompositionViewDesc.prototype.localPosFromDOM = function localPosFromDOM (dom, offset) {
    if (dom != this.textDOM) { return this.posAtStart + (offset ? this.size : 0) }
    return this.posAtStart + offset
  };

  CompositionViewDesc.prototype.domFromPos = function domFromPos (pos) {
    return {node: this.textDOM, offset: pos}
  };

  CompositionViewDesc.prototype.ignoreMutation = function ignoreMutation (mut) {
    return mut.type === 'characterData' && mut.target.nodeValue == mut.oldValue
   };

  Object.defineProperties( CompositionViewDesc.prototype, prototypeAccessors$2 );

  return CompositionViewDesc;
}(ViewDesc));

// A mark desc represents a mark. May have multiple children,
// depending on how the mark is split. Note that marks are drawn using
// a fixed nesting order, for simplicity and predictability, so in
// some cases they will be split more often than would appear
// necessary.
var MarkViewDesc = /*@__PURE__*/(function (ViewDesc) {
  function MarkViewDesc(parent, mark, dom, contentDOM) {
    ViewDesc.call(this, parent, [], dom, contentDOM);
    this.mark = mark;
  }

  if ( ViewDesc ) MarkViewDesc.__proto__ = ViewDesc;
  MarkViewDesc.prototype = Object.create( ViewDesc && ViewDesc.prototype );
  MarkViewDesc.prototype.constructor = MarkViewDesc;

  MarkViewDesc.create = function create (parent, mark, inline, view) {
    var custom = view.nodeViews[mark.type.name];
    var spec = custom && custom(mark, view, inline);
    if (!spec || !spec.dom)
      { spec = DOMSerializer.renderSpec(document, mark.type.spec.toDOM(mark, inline)); }
    return new MarkViewDesc(parent, mark, spec.dom, spec.contentDOM || spec.dom)
  };

  MarkViewDesc.prototype.parseRule = function parseRule () { return {mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM} };

  MarkViewDesc.prototype.matchesMark = function matchesMark (mark) { return this.dirty != NODE_DIRTY && this.mark.eq(mark) };

  MarkViewDesc.prototype.markDirty = function markDirty (from, to) {
    ViewDesc.prototype.markDirty.call(this, from, to);
    // Move dirty info to nearest node view
    if (this.dirty != NOT_DIRTY) {
      var parent = this.parent;
      while (!parent.node) { parent = parent.parent; }
      if (parent.dirty < this.dirty) { parent.dirty = this.dirty; }
      this.dirty = NOT_DIRTY;
    }
  };

  MarkViewDesc.prototype.slice = function slice (from, to, view) {
    var copy = MarkViewDesc.create(this.parent, this.mark, true, view);
    var nodes = this.children, size = this.size;
    if (to < size) { nodes = replaceNodes(nodes, to, size, view); }
    if (from > 0) { nodes = replaceNodes(nodes, 0, from, view); }
    for (var i = 0; i < nodes.length; i++) { nodes[i].parent = copy; }
    copy.children = nodes;
    return copy
  };

  return MarkViewDesc;
}(ViewDesc));

// Node view descs are the main, most common type of view desc, and
// correspond to an actual node in the document. Unlike mark descs,
// they populate their child array themselves.
var NodeViewDesc = /*@__PURE__*/(function (ViewDesc) {
  function NodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos) {
    ViewDesc.call(this, parent, node.isLeaf ? nothing : [], dom, contentDOM);
    this.nodeDOM = nodeDOM;
    this.node = node;
    this.outerDeco = outerDeco;
    this.innerDeco = innerDeco;
    if (contentDOM) { this.updateChildren(view, pos); }
  }

  if ( ViewDesc ) NodeViewDesc.__proto__ = ViewDesc;
  NodeViewDesc.prototype = Object.create( ViewDesc && ViewDesc.prototype );
  NodeViewDesc.prototype.constructor = NodeViewDesc;

  var prototypeAccessors$3 = { size: { configurable: true },border: { configurable: true } };

  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finnicky
  // implementation details to the user code that they probably will
  // never need.)
  NodeViewDesc.create = function create (parent, node, outerDeco, innerDeco, view, pos) {
    var assign;

    var custom = view.nodeViews[node.type.name], descObj;
    var spec = custom && custom(node, view, function () {
      // (This is a function that allows the custom view to find its
      // own position)
      if (!descObj) { return pos }
      if (descObj.parent) { return descObj.parent.posBeforeChild(descObj) }
    }, outerDeco);

    var dom = spec && spec.dom, contentDOM = spec && spec.contentDOM;
    if (node.isText) {
      if (!dom) { dom = document.createTextNode(node.text); }
      else if (dom.nodeType != 3) { throw new RangeError("Text must be rendered as a DOM text node") }
    } else if (!dom) {
((assign = DOMSerializer.renderSpec(document, node.type.spec.toDOM(node)), dom = assign.dom, contentDOM = assign.contentDOM));
    }
    if (!contentDOM && !node.isText && dom.nodeName != "BR") { // Chrome gets confused by <br contenteditable=false>
      if (!dom.hasAttribute("contenteditable")) { dom.contentEditable = false; }
      if (node.type.spec.draggable) { dom.draggable = true; }
    }

    var nodeDOM = dom;
    dom = applyOuterDeco(dom, outerDeco, node);

    if (spec)
      { return descObj = new CustomNodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM,
                                              spec, view, pos + 1) }
    else if (node.isText)
      { return new TextViewDesc(parent, node, outerDeco, innerDeco, dom, nodeDOM, view) }
    else
      { return new NodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos + 1) }
  };

  NodeViewDesc.prototype.parseRule = function parseRule () {
    var this$1 = this;

    // Experimental kludge to allow opt-in re-parsing of nodes
    if (this.node.type.spec.reparseInView) { return null }
    // FIXME the assumption that this can always return the current
    // attrs means that if the user somehow manages to change the
    // attrs in the dom, that won't be picked up. Not entirely sure
    // whether this is a problem
    var rule = {node: this.node.type.name, attrs: this.node.attrs};
    if (this.node.type.spec.code) { rule.preserveWhitespace = "full"; }
    if (this.contentDOM && !this.contentLost) { rule.contentElement = this.contentDOM; }
    else { rule.getContent = function () { return this$1.contentDOM ? Fragment.empty : this$1.node.content; }; }
    return rule
  };

  NodeViewDesc.prototype.matchesNode = function matchesNode (node, outerDeco, innerDeco) {
    return this.dirty == NOT_DIRTY && node.eq(this.node) &&
      sameOuterDeco(outerDeco, this.outerDeco) && innerDeco.eq(this.innerDeco)
  };

  prototypeAccessors$3.size.get = function () { return this.node.nodeSize };

  prototypeAccessors$3.border.get = function () { return this.node.isLeaf ? 0 : 1 };

  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  NodeViewDesc.prototype.updateChildren = function updateChildren (view, pos) {
    var this$1 = this;

    var inline = this.node.inlineContent, off = pos;
    var composition = inline && view.composing && this.localCompositionNode(view, pos);
    var updater = new ViewTreeUpdater(this, composition && composition.node);
    iterDeco(this.node, this.innerDeco, function (widget, i) {
      if (widget.spec.marks)
        { updater.syncToMarks(widget.spec.marks, inline, view); }
      else if (widget.type.side >= 0)
        { updater.syncToMarks(i == this$1.node.childCount ? Mark.none : this$1.node.child(i).marks, inline, view); }
      // If the next node is a desc matching this widget, reuse it,
      // otherwise insert the widget as a new view desc.
      updater.placeWidget(widget, view, off);
    }, function (child, outerDeco, innerDeco, i) {
      // Make sure the wrapping mark descs match the node's marks.
      updater.syncToMarks(child.marks, inline, view);
      // Either find an existing desc that exactly matches this node,
      // and drop the descs before it.
      updater.findNodeMatch(child, outerDeco, innerDeco, i) ||
        // Or try updating the next desc to reflect this node.
        updater.updateNextNode(child, outerDeco, innerDeco, view, i) ||
        // Or just add it as a new desc.
        updater.addNode(child, outerDeco, innerDeco, view, off);
      off += child.nodeSize;
    });
    // Drop all remaining descs after the current position.
    updater.syncToMarks(nothing, inline, view);
    if (this.node.isTextblock) { updater.addTextblockHacks(); }
    updater.destroyRest();

    // Sync the DOM if anything changed
    if (updater.changed || this.dirty == CONTENT_DIRTY) {
      // May have to protect focused DOM from being changed if a composition is active
      if (composition) { this.protectLocalComposition(view, composition); }
      this.renderChildren();
    }
  };

  NodeViewDesc.prototype.renderChildren = function renderChildren () {
    renderDescs(this.contentDOM, this.children);
    if (result.ios) { iosHacks(this.dom); }
  };

  NodeViewDesc.prototype.localCompositionNode = function localCompositionNode (view, pos) {
    // Only do something if both the selection and a focused text node
    // are inside of this node, and the node isn't already part of a
    // view that's a child of this view
    var ref = view.state.selection;
    var from = ref.from;
    var to = ref.to;
    if (!(view.state.selection instanceof TextSelection) || from < pos || to > pos + this.node.content.size) { return }
    var sel = view.root.getSelection();
    var textNode = nearbyTextNode(sel.focusNode, sel.focusOffset);
    if (!textNode || !this.dom.contains(textNode.parentNode)) { return }

    // Find the text in the focused node in the node, stop if it's not
    // there (may have been modified through other means, in which
    // case it should overwritten)
    var text = textNode.nodeValue;
    var textPos = findTextInFragment(this.node.content, text, from - pos, to - pos);

    return textPos < 0 ? null : {node: textNode, pos: textPos, text: text}
  };

  NodeViewDesc.prototype.protectLocalComposition = function protectLocalComposition (view, ref) {
    var node = ref.node;
    var pos = ref.pos;
    var text = ref.text;

    // The node is already part of a local view desc, leave it there
    if (this.getDesc(node)) { return }

    // Create a composition view for the orphaned nodes
    var topNode = node;
    for (;; topNode = topNode.parentNode) {
      if (topNode.parentNode == this.contentDOM) { break }
      while (topNode.previousSibling) { topNode.parentNode.removeChild(topNode.previousSibling); }
      while (topNode.nextSibling) { topNode.parentNode.removeChild(topNode.nextSibling); }
      if (topNode.pmViewDesc) { topNode.pmViewDesc = null; }
    }
    var desc = new CompositionViewDesc(this, topNode, node, text);
    view.compositionNodes.push(desc);

    // Patch up this.children to contain the composition view
    this.children = replaceNodes(this.children, pos, pos + text.length, view, desc);
  };

  // : (Node, [Decoration], DecorationSet, EditorView) → bool
  // If this desc be updated to match the given node decoration,
  // do so and return true.
  NodeViewDesc.prototype.update = function update (node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY ||
        !node.sameMarkup(this.node)) { return false }
    this.updateInner(node, outerDeco, innerDeco, view);
    return true
  };

  NodeViewDesc.prototype.updateInner = function updateInner (node, outerDeco, innerDeco, view) {
    this.updateOuterDeco(outerDeco);
    this.node = node;
    this.innerDeco = innerDeco;
    if (this.contentDOM) { this.updateChildren(view, this.posAtStart); }
    this.dirty = NOT_DIRTY;
  };

  NodeViewDesc.prototype.updateOuterDeco = function updateOuterDeco (outerDeco) {
    if (sameOuterDeco(outerDeco, this.outerDeco)) { return }
    var needsWrap = this.nodeDOM.nodeType != 1;
    var oldDOM = this.dom;
    this.dom = patchOuterDeco(this.dom, this.nodeDOM,
                              computeOuterDeco(this.outerDeco, this.node, needsWrap),
                              computeOuterDeco(outerDeco, this.node, needsWrap));
    if (this.dom != oldDOM) {
      oldDOM.pmViewDesc = null;
      this.dom.pmViewDesc = this;
    }
    this.outerDeco = outerDeco;
  };

  // Mark this node as being the selected node.
  NodeViewDesc.prototype.selectNode = function selectNode () {
    this.nodeDOM.classList.add("ProseMirror-selectednode");
    if (this.contentDOM || !this.node.type.spec.draggable) { this.dom.draggable = true; }
  };

  // Remove selected node marking from this node.
  NodeViewDesc.prototype.deselectNode = function deselectNode () {
    this.nodeDOM.classList.remove("ProseMirror-selectednode");
    if (this.contentDOM || !this.node.type.spec.draggable) { this.dom.draggable = false; }
  };

  Object.defineProperties( NodeViewDesc.prototype, prototypeAccessors$3 );

  return NodeViewDesc;
}(ViewDesc));

// Create a view desc for the top-level document node, to be exported
// and used by the view class.
function docViewDesc(doc, outerDeco, innerDeco, dom, view) {
  applyOuterDeco(dom, outerDeco, doc);
  return new NodeViewDesc(null, doc, outerDeco, innerDeco, dom, dom, dom, view, 0)
}

var TextViewDesc = /*@__PURE__*/(function (NodeViewDesc) {
  function TextViewDesc(parent, node, outerDeco, innerDeco, dom, nodeDOM, view) {
    NodeViewDesc.call(this, parent, node, outerDeco, innerDeco, dom, null, nodeDOM, view);
  }

  if ( NodeViewDesc ) TextViewDesc.__proto__ = NodeViewDesc;
  TextViewDesc.prototype = Object.create( NodeViewDesc && NodeViewDesc.prototype );
  TextViewDesc.prototype.constructor = TextViewDesc;

  TextViewDesc.prototype.parseRule = function parseRule () {
    return {skip: this.nodeDOM.parentNode || true}
  };

  TextViewDesc.prototype.update = function update (node, outerDeco) {
    if (this.dirty == NODE_DIRTY || (this.dirty != NOT_DIRTY && !this.inParent()) ||
        !node.sameMarkup(this.node)) { return false }
    this.updateOuterDeco(outerDeco);
    if ((this.dirty != NOT_DIRTY || node.text != this.node.text) && node.text != this.nodeDOM.nodeValue)
      { this.nodeDOM.nodeValue = node.text; }
    this.node = node;
    this.dirty = NOT_DIRTY;
    return true
  };

  TextViewDesc.prototype.inParent = function inParent () {
    var parentDOM = this.parent.contentDOM;
    for (var n = this.nodeDOM; n; n = n.parentNode) { if (n == parentDOM) { return true } }
    return false
  };

  TextViewDesc.prototype.domFromPos = function domFromPos (pos) {
    return {node: this.nodeDOM, offset: pos}
  };

  TextViewDesc.prototype.localPosFromDOM = function localPosFromDOM (dom, offset, bias) {
    if (dom == this.nodeDOM) { return this.posAtStart + Math.min(offset, this.node.text.length) }
    return NodeViewDesc.prototype.localPosFromDOM.call(this, dom, offset, bias)
  };

  TextViewDesc.prototype.ignoreMutation = function ignoreMutation (mutation) {
    return mutation.type != "characterData" && mutation.type != "selection"
  };

  TextViewDesc.prototype.slice = function slice (from, to, view) {
    var node = this.node.cut(from, to), dom = document.createTextNode(node.text);
    return new TextViewDesc(this.parent, node, this.outerDeco, this.innerDeco, dom, dom, view)
  };

  return TextViewDesc;
}(NodeViewDesc));

// A dummy desc used to tag trailing BR or span nodes created to work
// around contentEditable terribleness.
var BRHackViewDesc = /*@__PURE__*/(function (ViewDesc) {
  function BRHackViewDesc () {
    ViewDesc.apply(this, arguments);
  }

  if ( ViewDesc ) BRHackViewDesc.__proto__ = ViewDesc;
  BRHackViewDesc.prototype = Object.create( ViewDesc && ViewDesc.prototype );
  BRHackViewDesc.prototype.constructor = BRHackViewDesc;

  BRHackViewDesc.prototype.parseRule = function parseRule () { return {ignore: true} };
  BRHackViewDesc.prototype.matchesHack = function matchesHack () { return this.dirty == NOT_DIRTY };

  return BRHackViewDesc;
}(ViewDesc));

// A separate subclass is used for customized node views, so that the
// extra checks only have to be made for nodes that are actually
// customized.
var CustomNodeViewDesc = /*@__PURE__*/(function (NodeViewDesc) {
  function CustomNodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, spec, view, pos) {
    NodeViewDesc.call(this, parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos);
    this.spec = spec;
  }

  if ( NodeViewDesc ) CustomNodeViewDesc.__proto__ = NodeViewDesc;
  CustomNodeViewDesc.prototype = Object.create( NodeViewDesc && NodeViewDesc.prototype );
  CustomNodeViewDesc.prototype.constructor = CustomNodeViewDesc;

  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  CustomNodeViewDesc.prototype.update = function update (node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY) { return false }
    if (this.spec.update) {
      var result = this.spec.update(node, outerDeco);
      if (result) { this.updateInner(node, outerDeco, innerDeco, view); }
      return result
    } else if (!this.contentDOM && !node.isLeaf) {
      return false
    } else {
      return NodeViewDesc.prototype.update.call(this, node, outerDeco, innerDeco, view)
    }
  };

  CustomNodeViewDesc.prototype.selectNode = function selectNode () {
    this.spec.selectNode ? this.spec.selectNode() : NodeViewDesc.prototype.selectNode.call(this);
  };

  CustomNodeViewDesc.prototype.deselectNode = function deselectNode () {
    this.spec.deselectNode ? this.spec.deselectNode() : NodeViewDesc.prototype.deselectNode.call(this);
  };

  CustomNodeViewDesc.prototype.setSelection = function setSelection (anchor, head, root, force) {
    this.spec.setSelection ? this.spec.setSelection(anchor, head, root)
      : NodeViewDesc.prototype.setSelection.call(this, anchor, head, root, force);
  };

  CustomNodeViewDesc.prototype.destroy = function destroy () {
    if (this.spec.destroy) { this.spec.destroy(); }
    NodeViewDesc.prototype.destroy.call(this);
  };

  CustomNodeViewDesc.prototype.stopEvent = function stopEvent (event) {
    return this.spec.stopEvent ? this.spec.stopEvent(event) : false
  };

  CustomNodeViewDesc.prototype.ignoreMutation = function ignoreMutation (mutation) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(mutation) : NodeViewDesc.prototype.ignoreMutation.call(this, mutation)
  };

  return CustomNodeViewDesc;
}(NodeViewDesc));

// : (dom.Node, [ViewDesc])
// Sync the content of the given DOM node with the nodes associated
// with the given array of view descs, recursing into mark descs
// because this should sync the subtree for a whole node at a time.
function renderDescs(parentDOM, descs) {
  var dom = parentDOM.firstChild;
  for (var i = 0; i < descs.length; i++) {
    var desc = descs[i], childDOM = desc.dom;
    if (childDOM.parentNode == parentDOM) {
      while (childDOM != dom) { dom = rm(dom); }
      dom = dom.nextSibling;
    } else {
      parentDOM.insertBefore(childDOM, dom);
    }
    if (desc instanceof MarkViewDesc) {
      var pos = dom ? dom.previousSibling : parentDOM.lastChild;
      renderDescs(desc.contentDOM, desc.children);
      dom = pos ? pos.nextSibling : parentDOM.firstChild;
    }
  }
  while (dom) { dom = rm(dom); }
}

function OuterDecoLevel(nodeName) {
  if (nodeName) { this.nodeName = nodeName; }
}
OuterDecoLevel.prototype = Object.create(null);

var noDeco = [new OuterDecoLevel];

function computeOuterDeco(outerDeco, node, needsWrap) {
  if (outerDeco.length == 0) { return noDeco }

  var top = needsWrap ? noDeco[0] : new OuterDecoLevel, result = [top];

  for (var i = 0; i < outerDeco.length; i++) {
    var attrs = outerDeco[i].type.attrs, cur = top;
    if (!attrs) { continue }
    if (attrs.nodeName)
      { result.push(cur = new OuterDecoLevel(attrs.nodeName)); }

    for (var name in attrs) {
      var val = attrs[name];
      if (val == null) { continue }
      if (needsWrap && result.length == 1)
        { result.push(cur = top = new OuterDecoLevel(node.isInline ? "span" : "div")); }
      if (name == "class") { cur.class = (cur.class ? cur.class + " " : "") + val; }
      else if (name == "style") { cur.style = (cur.style ? cur.style + ";" : "") + val; }
      else if (name != "nodeName") { cur[name] = val; }
    }
  }

  return result
}

function patchOuterDeco(outerDOM, nodeDOM, prevComputed, curComputed) {
  // Shortcut for trivial case
  if (prevComputed == noDeco && curComputed == noDeco) { return nodeDOM }

  var curDOM = nodeDOM;
  for (var i = 0; i < curComputed.length; i++) {
    var deco = curComputed[i], prev = prevComputed[i];
    if (i) {
      var parent = (void 0);
      if (prev && prev.nodeName == deco.nodeName && curDOM != outerDOM &&
          (parent = nodeDOM.parentNode) && parent.tagName.toLowerCase() == deco.nodeName) {
        curDOM = parent;
      } else {
        parent = document.createElement(deco.nodeName);
        parent.appendChild(curDOM);
        curDOM = parent;
      }
    }
    patchAttributes(curDOM, prev || noDeco[0], deco);
  }
  return curDOM
}

function patchAttributes(dom, prev, cur) {
  for (var name in prev)
    { if (name != "class" && name != "style" && name != "nodeName" && !(name in cur))
      { dom.removeAttribute(name); } }
  for (var name$1 in cur)
    { if (name$1 != "class" && name$1 != "style" && name$1 != "nodeName" && cur[name$1] != prev[name$1])
      { dom.setAttribute(name$1, cur[name$1]); } }
  if (prev.class != cur.class) {
    var prevList = prev.class ? prev.class.split(" ") : nothing;
    var curList = cur.class ? cur.class.split(" ") : nothing;
    for (var i = 0; i < prevList.length; i++) { if (curList.indexOf(prevList[i]) == -1)
      { dom.classList.remove(prevList[i]); } }
    for (var i$1 = 0; i$1 < curList.length; i$1++) { if (prevList.indexOf(curList[i$1]) == -1)
      { dom.classList.add(curList[i$1]); } }
  }
  if (prev.style != cur.style) {
    if (prev.style) {
      var prop = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, m;
      while (m = prop.exec(prev.style))
        { dom.style[m[1].toLowerCase()] = ""; }
    }
    if (cur.style)
      { dom.style.cssText += cur.style; }
  }
}

function applyOuterDeco(dom, deco, node) {
  return patchOuterDeco(dom, dom, noDeco, computeOuterDeco(deco, node, dom.nodeType != 1))
}

// : ([Decoration], [Decoration]) → bool
function sameOuterDeco(a, b) {
  if (a.length != b.length) { return false }
  for (var i = 0; i < a.length; i++) { if (!a[i].type.eq(b[i].type)) { return false } }
  return true
}

// Remove a DOM node and return its next sibling.
function rm(dom) {
  var next = dom.nextSibling;
  dom.parentNode.removeChild(dom);
  return next
}

// Helper class for incrementally updating a tree of mark descs and
// the widget and node descs inside of them.
var ViewTreeUpdater = function ViewTreeUpdater(top, lockedNode) {
  this.top = top;
  this.lock = lockedNode;
  // Index into `this.top`'s child array, represents the current
  // update position.
  this.index = 0;
  // When entering a mark, the current top and index are pushed
  // onto this.
  this.stack = [];
  // Tracks whether anything was changed
  this.changed = false;

  var pre = preMatch(top.node.content, top.children);
  this.preMatched = pre.nodes;
  this.preMatchOffset = pre.offset;
};

ViewTreeUpdater.prototype.getPreMatch = function getPreMatch (index) {
  return index >= this.preMatchOffset ? this.preMatched[index - this.preMatchOffset] : null
};

// Destroy and remove the children between the given indices in
// `this.top`.
ViewTreeUpdater.prototype.destroyBetween = function destroyBetween (start, end) {
  if (start == end) { return }
  for (var i = start; i < end; i++) { this.top.children[i].destroy(); }
  this.top.children.splice(start, end - start);
  this.changed = true;
};

// Destroy all remaining children in `this.top`.
ViewTreeUpdater.prototype.destroyRest = function destroyRest () {
  this.destroyBetween(this.index, this.top.children.length);
};

// : ([Mark], EditorView)
// Sync the current stack of mark descs with the given array of
// marks, reusing existing mark descs when possible.
ViewTreeUpdater.prototype.syncToMarks = function syncToMarks (marks, inline, view) {
  var keep = 0, depth = this.stack.length >> 1;
  var maxKeep = Math.min(depth, marks.length);
  while (keep < maxKeep &&
         (keep == depth - 1 ? this.top : this.stack[(keep + 1) << 1]).matchesMark(marks[keep]) && marks[keep].type.spec.spanning !== false)
    { keep++; }

  while (keep < depth) {
    this.destroyRest();
    this.top.dirty = NOT_DIRTY;
    this.index = this.stack.pop();
    this.top = this.stack.pop();
    depth--;
  }
  while (depth < marks.length) {
    this.stack.push(this.top, this.index + 1);
    var found = -1;
    for (var i = this.index; i < Math.min(this.index + 3, this.top.children.length); i++) {
      if (this.top.children[i].matchesMark(marks[depth])) { found = i; break }
    }
    if (found > -1) {
      if (found > this.index) {
        this.changed = true;
        this.destroyBetween(this.index, found);
      }
      this.top = this.top.children[this.index];
    } else {
      var markDesc = MarkViewDesc.create(this.top, marks[depth], inline, view);
      this.top.children.splice(this.index, 0, markDesc);
      this.top = markDesc;
      this.changed = true;
    }
    this.index = 0;
    depth++;
  }
};

// : (Node, [Decoration], DecorationSet) → bool
// Try to find a node desc matching the given data. Skip over it and
// return true when successful.
ViewTreeUpdater.prototype.findNodeMatch = function findNodeMatch (node, outerDeco, innerDeco, index) {
  var found = -1, preMatch = index < 0 ? undefined : this.getPreMatch(index), children = this.top.children;
  if (preMatch && preMatch.matchesNode(node, outerDeco, innerDeco)) {
    found = children.indexOf(preMatch);
  } else {
    for (var i = this.index, e = Math.min(children.length, i + 5); i < e; i++) {
      var child = children[i];
      if (child.matchesNode(node, outerDeco, innerDeco) && this.preMatched.indexOf(child) < 0) {
        found = i;
        break
      }
    }
  }
  if (found < 0) { return false }
  this.destroyBetween(this.index, found);
  this.index++;
  return true
};

// : (Node, [Decoration], DecorationSet, EditorView, Fragment, number) → bool
// Try to update the next node, if any, to the given data. Checks
// pre-matches to avoid overwriting nodes that could still be used.
ViewTreeUpdater.prototype.updateNextNode = function updateNextNode (node, outerDeco, innerDeco, view, index) {
  if (this.index == this.top.children.length) { return false }
  var next = this.top.children[this.index];
  if (next instanceof NodeViewDesc) {
    var preMatch = this.preMatched.indexOf(next);
    if (preMatch > -1 && preMatch + this.preMatchOffset != index) { return false }
    var nextDOM = next.dom;

    // Can't update if nextDOM is or contains this.lock, except if
    // it's a text node whose content already matches the new text
    // and whose decorations match the new ones.
    var locked = this.lock && (nextDOM == this.lock || nextDOM.nodeType == 1 && nextDOM.contains(this.lock.parentNode)) &&
        !(node.isText && next.node && next.node.isText && next.nodeDOM.nodeValue == node.text &&
          next.dirty != NODE_DIRTY && sameOuterDeco(outerDeco, next.outerDeco));
    if (!locked && next.update(node, outerDeco, innerDeco, view)) {
      if (next.dom != nextDOM) { this.changed = true; }
      this.index++;
      return true
    }
  }
  return false
};

// : (Node, [Decoration], DecorationSet, EditorView)
// Insert the node as a newly created node desc.
ViewTreeUpdater.prototype.addNode = function addNode (node, outerDeco, innerDeco, view, pos) {
  this.top.children.splice(this.index++, 0, NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view, pos));
  this.changed = true;
};

ViewTreeUpdater.prototype.placeWidget = function placeWidget (widget, view, pos) {
  if (this.index < this.top.children.length && this.top.children[this.index].matchesWidget(widget)) {
    this.index++;
  } else {
    var desc = new WidgetViewDesc(this.top, widget, view, pos);
    this.top.children.splice(this.index++, 0, desc);
    this.changed = true;
  }
};

// Make sure a textblock looks and behaves correctly in
// contentEditable.
ViewTreeUpdater.prototype.addTextblockHacks = function addTextblockHacks () {
  var lastChild = this.top.children[this.index - 1];
  while (lastChild instanceof MarkViewDesc) { lastChild = lastChild.children[lastChild.children.length - 1]; }

  if (!lastChild || // Empty textblock
      !(lastChild instanceof TextViewDesc) ||
      /\n$/.test(lastChild.node.text)) {
    if (this.index < this.top.children.length && this.top.children[this.index].matchesHack()) {
      this.index++;
    } else {
      var dom = document.createElement("br");
      this.top.children.splice(this.index++, 0, new BRHackViewDesc(this.top, nothing, dom, null));
      this.changed = true;
    }
  }
};

// : (Fragment, [ViewDesc]) → [ViewDesc]
// Iterate from the end of the fragment and array of descs to find
// directly matching ones, in order to avoid overeagerly reusing
// those for other nodes. Returns an array whose positions correspond
// to node positions in the fragment, and whose elements are either
// descs matched to the child at that index, or empty.
function preMatch(frag, descs) {
  var result = [], end = frag.childCount;
  for (var i = descs.length - 1; end > 0 && i >= 0; i--) {
    var desc = descs[i], node = desc.node;
    if (!node) { continue }
    if (node != frag.child(end - 1)) { break }
    result.push(desc);
    --end;
  }
  return {nodes: result.reverse(), offset: end}
}

function compareSide(a, b) { return a.type.side - b.type.side }

// : (ViewDesc, DecorationSet, (Decoration, number), (Node, [Decoration], DecorationSet, number))
// This function abstracts iterating over the nodes and decorations in
// a fragment. Calls `onNode` for each node, with its local and child
// decorations. Splits text nodes when there is a decoration starting
// or ending inside of them. Calls `onWidget` for each widget.
function iterDeco(parent, deco, onWidget, onNode) {
  var locals = deco.locals(parent), offset = 0;
  // Simple, cheap variant for when there are no local decorations
  if (locals.length == 0) {
    for (var i = 0; i < parent.childCount; i++) {
      var child = parent.child(i);
      onNode(child, locals, deco.forChild(offset, child), i);
      offset += child.nodeSize;
    }
    return
  }

  var decoIndex = 0, active = [], restNode = null;
  for (var parentIndex = 0;;) {
    if (decoIndex < locals.length && locals[decoIndex].to == offset) {
      var widget = locals[decoIndex++], widgets = (void 0);
      while (decoIndex < locals.length && locals[decoIndex].to == offset)
        { (widgets || (widgets = [widget])).push(locals[decoIndex++]); }
      if (widgets) {
        widgets.sort(compareSide);
        for (var i$1 = 0; i$1 < widgets.length; i$1++) { onWidget(widgets[i$1], parentIndex); }
      } else {
        onWidget(widget, parentIndex);
      }
    }

    var child$1 = (void 0), index = (void 0);
    if (restNode) {
      index = -1;
      child$1 = restNode;
      restNode = null;
    } else if (parentIndex < parent.childCount) {
      index = parentIndex;
      child$1 = parent.child(parentIndex++);
    } else {
      break
    }

    for (var i$2 = 0; i$2 < active.length; i$2++) { if (active[i$2].to <= offset) { active.splice(i$2--, 1); } }
    while (decoIndex < locals.length && locals[decoIndex].from == offset) { active.push(locals[decoIndex++]); }

    var end = offset + child$1.nodeSize;
    if (child$1.isText) {
      var cutAt = end;
      if (decoIndex < locals.length && locals[decoIndex].from < cutAt) { cutAt = locals[decoIndex].from; }
      for (var i$3 = 0; i$3 < active.length; i$3++) { if (active[i$3].to < cutAt) { cutAt = active[i$3].to; } }
      if (cutAt < end) {
        restNode = child$1.cut(cutAt - offset);
        child$1 = child$1.cut(0, cutAt - offset);
        end = cutAt;
        index = -1;
      }
    }

    onNode(child$1, active.length ? active.slice() : nothing, deco.forChild(offset, child$1), index);
    offset = end;
  }
}

// List markers in Mobile Safari will mysteriously disappear
// sometimes. This works around that.
function iosHacks(dom) {
  if (dom.nodeName == "UL" || dom.nodeName == "OL") {
    var oldCSS = dom.style.cssText;
    dom.style.cssText = oldCSS + "; list-style: square !important";
    window.getComputedStyle(dom).listStyle;
    dom.style.cssText = oldCSS;
  }
}

function nearbyTextNode(node, offset) {
  for (;;) {
    if (node.nodeType == 3) { return node }
    if (node.nodeType == 1 && offset > 0) {
      if (node.childNodes.length > offset && node.childNodes[offset].nodeType == 3)
        { return node.childNodes[offset] }
      node = node.childNodes[offset - 1];
      offset = nodeSize(node);
    } else if (node.nodeType == 1 && offset < node.childNodes.length) {
      node = node.childNodes[offset];
      offset = 0;
    } else {
      return null
    }
  }
}

// Find a piece of text in an inline fragment, overlapping from-to
function findTextInFragment(frag, text, from, to) {
  for (var str = "", i = 0, childPos = 0; i < frag.childCount; i++) {
    var child = frag.child(i), end = childPos + child.nodeSize;
    if (child.isText) {
      str += child.text;
      if (end >= to) {
        var strStart = end - str.length, found = str.lastIndexOf(text);
        while (found > -1 && strStart + found > from) { found = str.lastIndexOf(text, found - 1); }
        if (found > -1 && strStart + found + text.length >= to) {
          return strStart + found
        } else if (end > to) {
          break
        }
      }
    } else {
      str = "";
    }
    childPos = end;
  }
  return -1
}

// Replace range from-to in an array of view descs with replacement
// (may be null to just delete). This goes very much against the grain
// of the rest of this code, which tends to create nodes with the
// right shape in one go, rather than messing with them after
// creation, but is necessary in the composition hack.
function replaceNodes(nodes, from, to, view, replacement) {
  var result = [];
  for (var i = 0, off = 0; i < nodes.length; i++) {
    var child = nodes[i], start = off, end = off += child.size;
    if (start >= to || end <= from) {
      result.push(child);
    } else {
      if (start < from) { result.push(child.slice(0, from - start, view)); }
      if (replacement) {
        result.push(replacement);
        replacement = null;
      }
      if (end > to) { result.push(child.slice(to - start, child.size, view)); }
    }
  }
  return result
}

function moveSelectionBlock(state, dir) {
  var ref = state.selection;
  var $anchor = ref.$anchor;
  var $head = ref.$head;
  var $side = dir > 0 ? $anchor.max($head) : $anchor.min($head);
  var $start = !$side.parent.inlineContent ? $side : $side.depth ? state.doc.resolve(dir > 0 ? $side.after() : $side.before()) : null;
  return $start && Selection.findFrom($start, dir)
}

function apply(view, sel) {
  view.dispatch(view.state.tr.setSelection(sel).scrollIntoView());
  return true
}

function selectHorizontally(view, dir, mods) {
  var sel = view.state.selection;
  if (sel instanceof TextSelection) {
    if (!sel.empty || mods.indexOf("s") > -1) {
      return false
    } else if (view.endOfTextblock(dir > 0 ? "right" : "left")) {
      var next = moveSelectionBlock(view.state, dir);
      if (next && (next instanceof NodeSelection)) { return apply(view, next) }
      return false
    } else {
      var $head = sel.$head, node = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter, desc;
      if (!node || node.isText) { return false }
      var nodePos = dir < 0 ? $head.pos - node.nodeSize : $head.pos;
      if (!(node.isAtom || (desc = view.docView.descAt(nodePos)) && !desc.contentDOM)) { return false }
      if (NodeSelection.isSelectable(node)) {
        return apply(view, new NodeSelection(dir < 0 ? view.state.doc.resolve($head.pos - node.nodeSize) : $head))
      } else if (result.webkit) {
        // Chrome and Safari will introduce extra pointless cursor
        // positions around inline uneditable nodes, so we have to
        // take over and move the cursor past them (#937)
        return apply(view, new TextSelection(view.state.doc.resolve(dir < 0 ? nodePos : nodePos + node.nodeSize)))
      } else {
        return false
      }
    }
  } else if (sel instanceof NodeSelection && sel.node.isInline) {
    return apply(view, new TextSelection(dir > 0 ? sel.$to : sel.$from))
  } else {
    var next$1 = moveSelectionBlock(view.state, dir);
    if (next$1) { return apply(view, next$1) }
    return false
  }
}

function nodeLen(node) {
  return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length
}

function isIgnorable(dom) {
  var desc = dom.pmViewDesc;
  return desc && desc.size == 0 && (dom.nextSibling || dom.nodeName != "BR")
}

// Make sure the cursor isn't directly after one or more ignored
// nodes, which will confuse the browser's cursor motion logic.
function skipIgnoredNodesLeft(view) {
  var sel = view.root.getSelection();
  var node = sel.focusNode, offset = sel.focusOffset;
  if (!node) { return }
  var moveNode, moveOffset, force = false;
  // Gecko will do odd things when the selection is directly in front
  // of a non-editable node, so in that case, move it into the next
  // node if possible. Issue prosemirror/prosemirror#832.
  if (result.gecko && node.nodeType == 1 && offset < nodeLen(node) && isIgnorable(node.childNodes[offset])) { force = true; }
  for (;;) {
    if (offset > 0) {
      if (node.nodeType != 1) {
        break
      } else {
        var before = node.childNodes[offset - 1];
        if (isIgnorable(before)) {
          moveNode = node;
          moveOffset = --offset;
        } else if (before.nodeType == 3) {
          node = before;
          offset = node.nodeValue.length;
        } else { break }
      }
    } else if (isBlockNode(node)) {
      break
    } else {
      var prev = node.previousSibling;
      while (prev && isIgnorable(prev)) {
        moveNode = node.parentNode;
        moveOffset = domIndex(prev);
        prev = prev.previousSibling;
      }
      if (!prev) {
        node = node.parentNode;
        if (node == view.dom) { break }
        offset = 0;
      } else {
        node = prev;
        offset = nodeLen(node);
      }
    }
  }
  if (force) { setSelFocus(view, sel, node, offset); }
  else if (moveNode) { setSelFocus(view, sel, moveNode, moveOffset); }
}

// Make sure the cursor isn't directly before one or more ignored
// nodes.
function skipIgnoredNodesRight(view) {
  var sel = view.root.getSelection();
  var node = sel.focusNode, offset = sel.focusOffset;
  if (!node) { return }
  var len = nodeLen(node);
  var moveNode, moveOffset;
  for (;;) {
    if (offset < len) {
      if (node.nodeType != 1) { break }
      var after = node.childNodes[offset];
      if (isIgnorable(after)) {
        moveNode = node;
        moveOffset = ++offset;
      }
      else { break }
    } else if (isBlockNode(node)) {
      break
    } else {
      var next = node.nextSibling;
      while (next && isIgnorable(next)) {
        moveNode = next.parentNode;
        moveOffset = domIndex(next) + 1;
        next = next.nextSibling;
      }
      if (!next) {
        node = node.parentNode;
        if (node == view.dom) { break }
        offset = len = 0;
      } else {
        node = next;
        offset = 0;
        len = nodeLen(node);
      }
    }
  }
  if (moveNode) { setSelFocus(view, sel, moveNode, moveOffset); }
}

function isBlockNode(dom) {
  var desc = dom.pmViewDesc;
  return desc && desc.node && desc.node.isBlock
}

function setSelFocus(view, sel, node, offset) {
  if (selectionCollapsed(sel)) {
    var range = document.createRange();
    range.setEnd(node, offset);
    range.setStart(node, offset);
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (sel.extend) {
    sel.extend(node, offset);
  }
  view.domObserver.setCurSelection();
}

// : (EditorState, number)
// Check whether vertical selection motion would involve node
// selections. If so, apply it (if not, the result is left to the
// browser)
function selectVertically(view, dir, mods) {
  var sel = view.state.selection;
  if (sel instanceof TextSelection && !sel.empty || mods.indexOf("s") > -1) { return false }
  var $from = sel.$from;
  var $to = sel.$to;

  if (!$from.parent.inlineContent || view.endOfTextblock(dir < 0 ? "up" : "down")) {
    var next = moveSelectionBlock(view.state, dir);
    if (next && (next instanceof NodeSelection))
      { return apply(view, next) }
  }
  if (!$from.parent.inlineContent) {
    var beyond = Selection.findFrom(dir < 0 ? $from : $to, dir);
    return beyond ? apply(view, beyond) : true
  }
  return false
}

function stopNativeHorizontalDelete(view, dir) {
  if (!(view.state.selection instanceof TextSelection)) { return true }
  var ref = view.state.selection;
  var $head = ref.$head;
  var $anchor = ref.$anchor;
  var empty = ref.empty;
  if (!$head.sameParent($anchor)) { return true }
  if (!empty) { return false }
  if (view.endOfTextblock(dir > 0 ? "forward" : "backward")) { return true }
  var nextNode = !$head.textOffset && (dir < 0 ? $head.nodeBefore : $head.nodeAfter);
  if (nextNode && !nextNode.isText) {
    var tr = view.state.tr;
    if (dir < 0) { tr.delete($head.pos - nextNode.nodeSize, $head.pos); }
    else { tr.delete($head.pos, $head.pos + nextNode.nodeSize); }
    view.dispatch(tr);
    return true
  }
  return false
}

function switchEditable(view, node, state) {
  view.domObserver.stop();
  node.contentEditable = state;
  view.domObserver.start();
}

// Issue #867 / https://bugs.chromium.org/p/chromium/issues/detail?id=903821
// In which Chrome does really wrong things when the down arrow is
// pressed when the cursor is directly at the start of a textblock and
// has an uneditable node after it
function chromeDownArrowBug(view) {
  if (!result.chrome || view.state.selection.$head.parentOffset > 0) { return }
  var ref = view.root.getSelection();
  var focusNode = ref.focusNode;
  var focusOffset = ref.focusOffset;
  if (focusNode && focusNode.nodeType == 1 && focusOffset == 0 &&
      focusNode.firstChild && focusNode.firstChild.contentEditable == "false") {
    var child = focusNode.firstChild;
    switchEditable(view, child, true);
    setTimeout(function () { return switchEditable(view, child, false); }, 20);
  }
}

// A backdrop key mapping used to make sure we always suppress keys
// that have a dangerous default effect, even if the commands they are
// bound to return false, and to make sure that cursor-motion keys
// find a cursor (as opposed to a node selection) when pressed. For
// cursor-motion keys, the code in the handlers also takes care of
// block selections.

function getMods(event) {
  var result = "";
  if (event.ctrlKey) { result += "c"; }
  if (event.metaKey) { result += "m"; }
  if (event.altKey) { result += "a"; }
  if (event.shiftKey) { result += "s"; }
  return result
}

function captureKeyDown(view, event) {
  var code = event.keyCode, mods = getMods(event);
  if (code == 8 || (result.mac && code == 72 && mods == "c")) { // Backspace, Ctrl-h on Mac
    return stopNativeHorizontalDelete(view, -1) || skipIgnoredNodesLeft(view)
  } else if (code == 46 || (result.mac && code == 68 && mods == "c")) { // Delete, Ctrl-d on Mac
    return stopNativeHorizontalDelete(view, 1) || skipIgnoredNodesRight(view)
  } else if (code == 13 || code == 27) { // Enter, Esc
    return true
  } else if (code == 37) { // Left arrow
    return selectHorizontally(view, -1, mods) || skipIgnoredNodesLeft(view)
  } else if (code == 39) { // Right arrow
    return selectHorizontally(view, 1, mods) || skipIgnoredNodesRight(view)
  } else if (code == 38) { // Up arrow
    return selectVertically(view, -1, mods) || skipIgnoredNodesLeft(view)
  } else if (code == 40) { // Down arrow
    return chromeDownArrowBug(view) || selectVertically(view, 1, mods) || skipIgnoredNodesRight(view)
  } else if (mods == (result.mac ? "m" : "c") &&
             (code == 66 || code == 73 || code == 89 || code == 90)) { // Mod-[biyz]
    return true
  }
  return false
}

function selectionFromDOM(view, origin) {
  var domSel = view.root.getSelection(), doc = view.state.doc;
  var nearestDesc = view.docView.nearestDesc(domSel.focusNode), inWidget = nearestDesc && nearestDesc.size == 0;
  var head = view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset);
  var $head = doc.resolve(head), $anchor, selection;
  if (selectionCollapsed(domSel)) {
    $anchor = $head;
    while (nearestDesc && !nearestDesc.node) { nearestDesc = nearestDesc.parent; }
    if (nearestDesc && nearestDesc.node.isAtom && NodeSelection.isSelectable(nearestDesc.node) && nearestDesc.parent) {
      var pos = nearestDesc.posBefore;
      selection = new NodeSelection(head == pos ? $head : doc.resolve(pos));
    }
  } else {
    $anchor = doc.resolve(view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset));
  }

  if (!selection) {
    var bias = origin == "pointer" || (view.state.selection.head < $head.pos && !inWidget) ? 1 : -1;
    selection = selectionBetween(view, $anchor, $head, bias);
  }
  return selection
}

function selectionToDOM(view, force) {
  var sel = view.state.selection;
  syncNodeSelection(view, sel);

  if (view.editable ? !view.hasFocus() : !(hasSelection(view) && document.activeElement.contains(view.dom))) { return }

  view.domObserver.disconnectSelection();

  if (view.cursorWrapper) {
    selectCursorWrapper(view);
  } else {
    var anchor = sel.anchor;
    var head = sel.head;
    var resetEditableFrom, resetEditableTo;
    if (brokenSelectBetweenUneditable && !(sel instanceof TextSelection)) {
      if (!sel.$from.parent.inlineContent)
        { resetEditableFrom = temporarilyEditableNear(view, sel.from); }
      if (!sel.empty && !sel.$from.parent.inlineContent)
        { resetEditableTo = temporarilyEditableNear(view, sel.to); }
    }
    view.docView.setSelection(anchor, head, view.root, force);
    if (brokenSelectBetweenUneditable) {
      if (resetEditableFrom) { resetEditableFrom.contentEditable = "false"; }
      if (resetEditableTo) { resetEditableTo.contentEditable = "false"; }
    }
    if (sel.visible) {
      view.dom.classList.remove("ProseMirror-hideselection");
    } else if (anchor != head) {
      view.dom.classList.add("ProseMirror-hideselection");
      if ("onselectionchange" in document) { removeClassOnSelectionChange(view); }
    }
  }

  view.domObserver.setCurSelection();
  view.domObserver.connectSelection();
}

// Kludge to work around Webkit not allowing a selection to start/end
// between non-editable block nodes. We briefly make something
// editable, set the selection, then set it uneditable again.

var brokenSelectBetweenUneditable = result.safari || result.chrome && result.chrome_version < 63;

function temporarilyEditableNear(view, pos) {
  var ref = view.docView.domFromPos(pos);
  var node = ref.node;
  var offset = ref.offset;
  var after = offset < node.childNodes.length ? node.childNodes[offset] : null;
  var before = offset ? node.childNodes[offset - 1] : null;
  if ((!after || after.contentEditable == "false") && (!before || before.contentEditable == "false")) {
    if (after) {
      after.contentEditable = "true";
      return after
    } else if (before) {
      before.contentEditable = "true";
      return before
    }
  }
}

function removeClassOnSelectionChange(view) {
  var doc = view.dom.ownerDocument;
  doc.removeEventListener("selectionchange", view.hideSelectionGuard);
  var domSel = view.root.getSelection();
  var node = domSel.anchorNode, offset = domSel.anchorOffset;
  doc.addEventListener("selectionchange", view.hideSelectionGuard = function () {
    if (domSel.anchorNode != node || domSel.anchorOffset != offset) {
      doc.removeEventListener("selectionchange", view.hideSelectionGuard);
      view.dom.classList.remove("ProseMirror-hideselection");
    }
  });
}

function selectCursorWrapper(view) {
  var domSel = view.root.getSelection(), range = document.createRange();
  var node = view.cursorWrapper.dom, img = node.nodeName == "IMG";
  if (img) { range.setEnd(node.parentNode, domIndex(node) + 1); }
  else { range.setEnd(node, 0); }
  range.collapse(false);
  domSel.removeAllRanges();
  domSel.addRange(range);
  // Kludge to kill 'control selection' in IE11 when selecting an
  // invisible cursor wrapper, since that would result in those weird
  // resize handles and a selection that considers the absolutely
  // positioned wrapper, rather than the root editable node, the
  // focused element.
  if (!img && !view.state.selection.visible && result.ie && result.ie_version <= 11) {
    node.disabled = true;
    node.disabled = false;
  }
}

function syncNodeSelection(view, sel) {
  if (sel instanceof NodeSelection) {
    var desc = view.docView.descAt(sel.from);
    if (desc != view.lastSelectedViewDesc) {
      clearNodeSelection(view);
      if (desc) { desc.selectNode(); }
      view.lastSelectedViewDesc = desc;
    }
  } else {
    clearNodeSelection(view);
  }
}

// Clear all DOM statefulness of the last node selection.
function clearNodeSelection(view) {
  if (view.lastSelectedViewDesc) {
    if (view.lastSelectedViewDesc.parent)
      { view.lastSelectedViewDesc.deselectNode(); }
    view.lastSelectedViewDesc = null;
  }
}

function selectionBetween(view, $anchor, $head, bias) {
  return view.someProp("createSelectionBetween", function (f) { return f(view, $anchor, $head); })
    || TextSelection.between($anchor, $head, bias)
}

function hasFocusAndSelection(view) {
  if (view.editable && view.root.activeElement != view.dom) { return false }
  return hasSelection(view)
}

function hasSelection(view) {
  var sel = view.root.getSelection();
  if (!sel.anchorNode) { return false }
  try {
    // Firefox will raise 'permission denied' errors when accessing
    // properties of `sel.anchorNode` when it's in a generated CSS
    // element.
    return view.dom.contains(sel.anchorNode.nodeType == 3 ? sel.anchorNode.parentNode : sel.anchorNode) &&
      (view.editable || view.dom.contains(sel.focusNode.nodeType == 3 ? sel.focusNode.parentNode : sel.focusNode))
  } catch(_) {
    return false
  }
}

function anchorInRightPlace(view) {
  var anchorDOM = view.docView.domFromPos(view.state.selection.anchor);
  var domSel = view.root.getSelection();
  return isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset)
}

// Note that all referencing and parsing is done with the
// start-of-operation selection and document, since that's the one
// that the DOM represents. If any changes came in in the meantime,
// the modification is mapped over those before it is applied, in
// readDOMChange.

function parseBetween(view, from_, to_) {
  var ref = view.docView.parseRange(from_, to_);
  var parent = ref.node;
  var fromOffset = ref.fromOffset;
  var toOffset = ref.toOffset;
  var from = ref.from;
  var to = ref.to;

  var domSel = view.root.getSelection(), find = null, anchor = domSel.anchorNode;
  if (anchor && view.dom.contains(anchor.nodeType == 1 ? anchor : anchor.parentNode)) {
    find = [{node: anchor, offset: domSel.anchorOffset}];
    if (!selectionCollapsed(domSel))
      { find.push({node: domSel.focusNode, offset: domSel.focusOffset}); }
  }
  // Work around issue in Chrome where backspacing sometimes replaces
  // the deleted content with a random BR node (issues #799, #831)
  if (result.chrome && view.lastKeyCode === 8) {
    for (var off = toOffset; off > fromOffset; off--) {
      var node = parent.childNodes[off - 1], desc = node.pmViewDesc;
      if (node.nodeType == "BR" && !desc) { toOffset = off; break }
      if (!desc || desc.size) { break }
    }
  }
  var startDoc = view.state.doc;
  var parser = view.someProp("domParser") || DOMParser.fromSchema(view.state.schema);
  var $from = startDoc.resolve(from);

  var sel = null, doc = parser.parse(parent, {
    topNode: $from.parent,
    topMatch: $from.parent.contentMatchAt($from.index()),
    topOpen: true,
    from: fromOffset,
    to: toOffset,
    preserveWhitespace: $from.parent.type.spec.code ? "full" : true,
    editableContent: true,
    findPositions: find,
    ruleFromNode: ruleFromNode(parser, $from),
    context: $from
  });
  if (find && find[0].pos != null) {
    var anchor$1 = find[0].pos, head = find[1] && find[1].pos;
    if (head == null) { head = anchor$1; }
    sel = {anchor: anchor$1 + from, head: head + from};
  }
  return {doc: doc, sel: sel, from: from, to: to}
}

function ruleFromNode(parser, context) {
  return function (dom) {
    var desc = dom.pmViewDesc;
    if (desc) {
      return desc.parseRule()
    } else if (dom.nodeName == "BR" && dom.parentNode) {
      // Safari replaces the list item or table cell with a BR
      // directly in the list node (?!) if you delete the last
      // character in a list item or table cell (#708, #862)
      if (result.safari && /^(ul|ol)$/i.test(dom.parentNode.nodeName))
        { return parser.matchTag(document.createElement("li"), context) }
      else if (dom.parentNode.lastChild == dom || result.safari && /^(tr|table)$/i.test(dom.parentNode.nodeName))
        { return {ignore: true} }
    } else if (dom.nodeName == "IMG" && dom.getAttribute("mark-placeholder")) {
      return {ignore: true}
    }
  }
}

function readDOMChange(view, from, to, typeOver) {
  if (from < 0) {
    var origin = view.lastSelectionTime > Date.now() - 50 ? view.lastSelectionOrigin : null;
    var newSel = selectionFromDOM(view, origin);
    if (!view.state.selection.eq(newSel)) {
      var tr$1 = view.state.tr.setSelection(newSel);
      if (origin == "pointer") { tr$1.setMeta("pointer", true); }
      else if (origin == "key") { tr$1.scrollIntoView(); }
      view.dispatch(tr$1);
    }
    return
  }

  var $before = view.state.doc.resolve(from);
  var shared = $before.sharedDepth(to);
  from = $before.before(shared + 1);
  to = view.state.doc.resolve(to).after(shared + 1);

  var sel = view.state.selection;
  var parse = parseBetween(view, from, to);

  var doc = view.state.doc, compare = doc.slice(parse.from, parse.to);
  var preferredPos, preferredSide;
  // Prefer anchoring to end when Backspace is pressed
  if (view.lastKeyCode === 8 && Date.now() - 100 < view.lastKeyCodeTime) {
    preferredPos = view.state.selection.to;
    preferredSide = "end";
  } else {
    preferredPos = view.state.selection.from;
    preferredSide = "start";
  }
  view.lastKeyCode = null;

  var change = findDiff(compare.content, parse.doc.content, parse.from, preferredPos, preferredSide);
  if (!change) {
    if (typeOver && sel instanceof TextSelection && !sel.empty && sel.$head.sameParent(sel.$anchor) &&
        !view.composing && !(parse.sel && parse.sel.anchor != parse.sel.head)) {
      change = {start: sel.from, endA: sel.to, endB: sel.to};
    } else {
      if (parse.sel) {
        var sel$1 = resolveSelection(view, view.state.doc, parse.sel);
        if (sel$1 && !sel$1.eq(view.state.selection)) { view.dispatch(view.state.tr.setSelection(sel$1)); }
      }
      return
    }
  }
  view.domChangeCount++;
  // Handle the case where overwriting a selection by typing matches
  // the start or end of the selected content, creating a change
  // that's smaller than what was actually overwritten.
  if (view.state.selection.from < view.state.selection.to &&
      change.start == change.endB &&
      view.state.selection instanceof TextSelection) {
    if (change.start > view.state.selection.from && change.start <= view.state.selection.from + 2) {
      change.start = view.state.selection.from;
    } else if (change.endA < view.state.selection.to && change.endA >= view.state.selection.to - 2) {
      change.endB += (view.state.selection.to - change.endA);
      change.endA = view.state.selection.to;
    }
  }

  // IE11 will insert a non-breaking space _ahead_ of the space after
  // the cursor space when adding a space before another space. When
  // that happened, adjust the change to cover the space instead.
  if (result.ie && result.ie_version <= 11 && change.endB == change.start + 1 &&
      change.endA == change.start && change.start > parse.from &&
      parse.doc.textBetween(change.start - parse.from - 1, change.start - parse.from + 1) == " \u00a0") {
    change.start--;
    change.endA--;
    change.endB--;
  }

  var $from = parse.doc.resolveNoCache(change.start - parse.from);
  var $to = parse.doc.resolveNoCache(change.endB - parse.from);
  var nextSel;
  // If this looks like the effect of pressing Enter, just dispatch an
  // Enter key instead.
  if (!$from.sameParent($to) && $from.pos < parse.doc.content.size &&
      (nextSel = Selection.findFrom(parse.doc.resolve($from.pos + 1), 1, true)) &&
      nextSel.head == $to.pos &&
      view.someProp("handleKeyDown", function (f) { return f(view, keyEvent(13, "Enter")); }))
    { return }
  // Same for backspace
  if (view.state.selection.anchor > change.start &&
      looksLikeJoin(doc, change.start, change.endA, $from, $to) &&
      view.someProp("handleKeyDown", function (f) { return f(view, keyEvent(8, "Backspace")); })) {
    if (result.android && result.chrome) { view.domObserver.suppressSelectionUpdates(); } // #820
    return
  }

  var chFrom = change.start, chTo = change.endA;

  var tr, storedMarks, markChange, $from1;
  if ($from.sameParent($to) && $from.parent.inlineContent) {
    if ($from.pos == $to.pos) { // Deletion
      // IE11 sometimes weirdly moves the DOM selection around after
      // backspacing out the first element in a textblock
      if (result.ie && result.ie_version <= 11 && $from.parentOffset == 0) {
        view.domObserver.suppressSelectionUpdates();
        setTimeout(function () { return selectionToDOM(view); }, 20);
      }
      tr = view.state.tr.delete(chFrom, chTo);
      storedMarks = doc.resolve(change.start).marksAcross(doc.resolve(change.endA));
    } else if ( // Adding or removing a mark
      change.endA == change.endB && ($from1 = doc.resolve(change.start)) &&
      (markChange = isMarkChange($from.parent.content.cut($from.parentOffset, $to.parentOffset),
                                 $from1.parent.content.cut($from1.parentOffset, change.endA - $from1.start())))
    ) {
      tr = view.state.tr;
      if (markChange.type == "add") { tr.addMark(chFrom, chTo, markChange.mark); }
      else { tr.removeMark(chFrom, chTo, markChange.mark); }
    } else if ($from.parent.child($from.index()).isText && $from.index() == $to.index() - ($to.textOffset ? 0 : 1)) {
      // Both positions in the same text node -- simply insert text
      var text = $from.parent.textBetween($from.parentOffset, $to.parentOffset);
      if (view.someProp("handleTextInput", function (f) { return f(view, chFrom, chTo, text); })) { return }
      tr = view.state.tr.insertText(text, chFrom, chTo);
    }
  }

  if (!tr)
    { tr = view.state.tr.replace(chFrom, chTo, parse.doc.slice(change.start - parse.from, change.endB - parse.from)); }
  if (parse.sel) {
    var sel$2 = resolveSelection(view, tr.doc, parse.sel);
    // Chrome Android will sometimes, during composition, report the
    // selection in the wrong place. If it looks like that is
    // happening, don't update the selection.
    // Edge just doesn't move the cursor forward when you start typing
    // in an empty block or between br nodes.
    if (sel$2 && !(result.chrome && result.android && view.composing && sel$2.empty && sel$2.head == chFrom ||
                 result.ie && sel$2.empty && sel$2.head == chFrom))
      { tr.setSelection(sel$2); }
  }
  if (storedMarks) { tr.ensureMarks(storedMarks); }
  view.dispatch(tr.scrollIntoView());
}

function resolveSelection(view, doc, parsedSel) {
  if (Math.max(parsedSel.anchor, parsedSel.head) > doc.content.size) { return null }
  return selectionBetween(view, doc.resolve(parsedSel.anchor), doc.resolve(parsedSel.head))
}

// : (Fragment, Fragment) → ?{mark: Mark, type: string}
// Given two same-length, non-empty fragments of inline content,
// determine whether the first could be created from the second by
// removing or adding a single mark type.
function isMarkChange(cur, prev) {
  var curMarks = cur.firstChild.marks, prevMarks = prev.firstChild.marks;
  var added = curMarks, removed = prevMarks, type, mark, update;
  for (var i = 0; i < prevMarks.length; i++) { added = prevMarks[i].removeFromSet(added); }
  for (var i$1 = 0; i$1 < curMarks.length; i$1++) { removed = curMarks[i$1].removeFromSet(removed); }
  if (added.length == 1 && removed.length == 0) {
    mark = added[0];
    type = "add";
    update = function (node) { return node.mark(mark.addToSet(node.marks)); };
  } else if (added.length == 0 && removed.length == 1) {
    mark = removed[0];
    type = "remove";
    update = function (node) { return node.mark(mark.removeFromSet(node.marks)); };
  } else {
    return null
  }
  var updated = [];
  for (var i$2 = 0; i$2 < prev.childCount; i$2++) { updated.push(update(prev.child(i$2))); }
  if (Fragment.from(updated).eq(cur)) { return {mark: mark, type: type} }
}

function looksLikeJoin(old, start, end, $newStart, $newEnd) {
  if (!$newStart.parent.isTextblock ||
      // The content must have shrunk
      end - start <= $newEnd.pos - $newStart.pos ||
      // newEnd must point directly at or after the end of the block that newStart points into
      skipClosingAndOpening($newStart, true, false) < $newEnd.pos)
    { return false }

  var $start = old.resolve(start);
  // Start must be at the end of a block
  if ($start.parentOffset < $start.parent.content.size || !$start.parent.isTextblock)
    { return false }
  var $next = old.resolve(skipClosingAndOpening($start, true, true));
  // The next textblock must start before end and end near it
  if (!$next.parent.isTextblock || $next.pos > end ||
      skipClosingAndOpening($next, true, false) < end)
    { return false }

  // The fragments after the join point must match
  return $newStart.parent.content.cut($newStart.parentOffset).eq($next.parent.content)
}

function skipClosingAndOpening($pos, fromEnd, mayOpen) {
  var depth = $pos.depth, end = fromEnd ? $pos.end() : $pos.pos;
  while (depth > 0 && (fromEnd || $pos.indexAfter(depth) == $pos.node(depth).childCount)) {
    depth--;
    end++;
    fromEnd = false;
  }
  if (mayOpen) {
    var next = $pos.node(depth).maybeChild($pos.indexAfter(depth));
    while (next && !next.isLeaf) {
      next = next.firstChild;
      end++;
    }
  }
  return end
}

function findDiff(a, b, pos, preferredPos, preferredSide) {
  var start = a.findDiffStart(b, pos);
  if (start == null) { return null }
  var ref = a.findDiffEnd(b, pos + a.size, pos + b.size);
  var endA = ref.a;
  var endB = ref.b;
  if (preferredSide == "end") {
    var adjust = Math.max(0, start - Math.min(endA, endB));
    preferredPos -= endA + adjust - start;
  }
  if (endA < start && a.size < b.size) {
    var move = preferredPos <= start && preferredPos >= endA ? start - preferredPos : 0;
    start -= move;
    endB = start + (endB - endA);
    endA = start;
  } else if (endB < start) {
    var move$1 = preferredPos <= start && preferredPos >= endB ? start - preferredPos : 0;
    start -= move$1;
    endA = start + (endA - endB);
    endB = start;
  }
  return {start: start, endA: endA, endB: endB}
}

function serializeForClipboard(view, slice) {
  var context = [];
  var content = slice.content;
  var openStart = slice.openStart;
  var openEnd = slice.openEnd;
  while (openStart > 1 && openEnd > 1 && content.childCount == 1 && content.firstChild.childCount == 1) {
    openStart--;
    openEnd--;
    var node = content.firstChild;
    context.push(node.type.name, node.type.hasRequiredAttrs() ? node.attrs : null);
    content = node.content;
  }

  var serializer = view.someProp("clipboardSerializer") || DOMSerializer.fromSchema(view.state.schema);
  var doc = detachedDoc(), wrap = doc.createElement("div");
  wrap.appendChild(serializer.serializeFragment(content, {document: doc}));

  var firstChild = wrap.firstChild, needsWrap;
  while (firstChild && firstChild.nodeType == 1 && (needsWrap = wrapMap[firstChild.nodeName.toLowerCase()])) {
    for (var i = needsWrap.length - 1; i >= 0; i--) {
      var wrapper = doc.createElement(needsWrap[i]);
      while (wrap.firstChild) { wrapper.appendChild(wrap.firstChild); }
      wrap.appendChild(wrapper);
    }
    firstChild = wrap.firstChild;
  }

  if (firstChild && firstChild.nodeType == 1)
    { firstChild.setAttribute("data-pm-slice", (openStart + " " + openEnd + " " + (JSON.stringify(context)))); }

  var text = view.someProp("clipboardTextSerializer", function (f) { return f(slice); }) ||
      slice.content.textBetween(0, slice.content.size, "\n\n");

  return {dom: wrap, text: text}
}

// : (EditorView, string, string, ?bool, ResolvedPos) → ?Slice
// Read a slice of content from the clipboard (or drop data).
function parseFromClipboard(view, text, html, plainText, $context) {
  var dom, inCode = $context.parent.type.spec.code, slice;
  if (!html && !text) { return null }
  var asText = text && (plainText || inCode || !html);
  if (asText) {
    view.someProp("transformPastedText", function (f) { text = f(text); });
    if (inCode) { return new Slice(Fragment.from(view.state.schema.text(text)), 0, 0) }
    var parsed = view.someProp("clipboardTextParser", function (f) { return f(text, $context); });
    if (parsed) {
      slice = parsed;
    } else {
      dom = document.createElement("div");
      text.trim().split(/(?:\r\n?|\n)+/).forEach(function (block) {
        dom.appendChild(document.createElement("p")).textContent = block;
      });
    }
  } else {
    view.someProp("transformPastedHTML", function (f) { html = f(html); });
    dom = readHTML(html);
  }

  var contextNode = dom && dom.querySelector("[data-pm-slice]");
  var sliceData = contextNode && /^(\d+) (\d+) (.*)/.exec(contextNode.getAttribute("data-pm-slice"));
  if (!slice) {
    var parser = view.someProp("clipboardParser") || view.someProp("domParser") || DOMParser.fromSchema(view.state.schema);
    slice = parser.parseSlice(dom, {preserveWhitespace: !!(asText || sliceData), context: $context});
  }
  if (sliceData)
    { slice = addContext(closeSlice(slice, +sliceData[1], +sliceData[2]), sliceData[3]); }
  else // HTML wasn't created by ProseMirror. Make sure top-level siblings are coherent
    { slice = Slice.maxOpen(normalizeSiblings(slice.content, $context), false); }

  view.someProp("transformPasted", function (f) { slice = f(slice); });
  return slice
}

// Takes a slice parsed with parseSlice, which means there hasn't been
// any content-expression checking done on the top nodes, tries to
// find a parent node in the current context that might fit the nodes,
// and if successful, rebuilds the slice so that it fits into that parent.
//
// This addresses the problem that Transform.replace expects a
// coherent slice, and will fail to place a set of siblings that don't
// fit anywhere in the schema.
function normalizeSiblings(fragment, $context) {
  if (fragment.childCount < 2) { return fragment }
  var loop = function ( d ) {
    var parent = $context.node(d);
    var match = parent.contentMatchAt($context.index(d));
    var lastWrap = (void 0), result = [];
    fragment.forEach(function (node) {
      if (!result) { return }
      var wrap = match.findWrapping(node.type), inLast;
      if (!wrap) { return result = null }
      if (inLast = result.length && lastWrap.length && addToSibling(wrap, lastWrap, node, result[result.length - 1], 0)) {
        result[result.length - 1] = inLast;
      } else {
        if (result.length) { result[result.length - 1] = closeRight(result[result.length - 1], lastWrap.length); }
        var wrapped = withWrappers(node, wrap);
        result.push(wrapped);
        match = match.matchType(wrapped.type, wrapped.attrs);
        lastWrap = wrap;
      }
    });
    if (result) { return { v: Fragment.from(result) } }
  };

  for (var d = $context.depth; d >= 0; d--) {
    var returned = loop( d );

    if ( returned ) return returned.v;
  }
  return fragment
}

function withWrappers(node, wrap, from) {
  if ( from === void 0 ) from = 0;

  for (var i = wrap.length - 1; i >= from; i--)
    { node = wrap[i].create(null, Fragment.from(node)); }
  return node
}

// Used to group adjacent nodes wrapped in similar parents by
// normalizeSiblings into the same parent node
function addToSibling(wrap, lastWrap, node, sibling, depth) {
  if (depth < wrap.length && depth < lastWrap.length && wrap[depth] == lastWrap[depth]) {
    var inner = addToSibling(wrap, lastWrap, node, sibling.lastChild, depth + 1);
    if (inner) { return sibling.copy(sibling.content.replaceChild(sibling.childCount - 1, inner)) }
    var match = sibling.contentMatchAt(sibling.childCount);
    if (match.matchType(depth == wrap.length - 1 ? node.type : wrap[depth + 1]))
      { return sibling.copy(sibling.content.append(Fragment.from(withWrappers(node, wrap, depth + 1)))) }
  }
}

function closeRight(node, depth) {
  if (depth == 0) { return node }
  var fragment = node.content.replaceChild(node.childCount - 1, closeRight(node.lastChild, depth - 1));
  var fill = node.contentMatchAt(node.childCount).fillBefore(Fragment.empty, true);
  return node.copy(fragment.append(fill))
}

function closeRange(fragment, side, from, to, depth, openEnd) {
  var node = side < 0 ? fragment.firstChild : fragment.lastChild, inner = node.content;
  if (depth < to - 1) { inner = closeRange(inner, side, from, to, depth + 1, openEnd); }
  if (depth >= from)
    { inner = side < 0 ? node.contentMatchAt(0).fillBefore(inner, fragment.childCount > 1 || openEnd <= depth).append(inner)
      : inner.append(node.contentMatchAt(node.childCount).fillBefore(Fragment.empty, true)); }
  return fragment.replaceChild(side < 0 ? 0 : fragment.childCount - 1, node.copy(inner))
}

function closeSlice(slice, openStart, openEnd) {
  if (openStart < slice.openStart)
    { slice = new Slice(closeRange(slice.content, -1, openStart, slice.openStart, 0, slice.openEnd), openStart, slice.openEnd); }
  if (openEnd < slice.openEnd)
    { slice = new Slice(closeRange(slice.content, 1, openEnd, slice.openEnd, 0, 0), slice.openStart, openEnd); }
  return slice
}

// Trick from jQuery -- some elements must be wrapped in other
// elements for innerHTML to work. I.e. if you do `div.innerHTML =
// "<td>..</td>"` the table cells are ignored.
var wrapMap = {thead: ["table"], colgroup: ["table"], col: ["table", "colgroup"],
                 tr: ["table", "tbody"], td: ["table", "tbody", "tr"], th: ["table", "tbody", "tr"]};

var _detachedDoc = null;
function detachedDoc() {
  return _detachedDoc || (_detachedDoc = document.implementation.createHTMLDocument("title"))
}

function readHTML(html) {
  var metas = /(\s*<meta [^>]*>)*/.exec(html);
  if (metas) { html = html.slice(metas[0].length); }
  var elt = detachedDoc().createElement("div");
  var firstTag = /(?:<meta [^>]*>)*<([a-z][^>\s]+)/i.exec(html), wrap, depth = 0;
  if (wrap = firstTag && wrapMap[firstTag[1].toLowerCase()]) {
    html = wrap.map(function (n) { return "<" + n + ">"; }).join("") + html + wrap.map(function (n) { return "</" + n + ">"; }).reverse().join("");
    depth = wrap.length;
  }
  elt.innerHTML = html;
  for (var i = 0; i < depth; i++) { elt = elt.firstChild; }
  return elt
}

function addContext(slice, context) {
  if (!slice.size) { return slice }
  var schema = slice.content.firstChild.type.schema, array;
  try { array = JSON.parse(context); }
  catch(e) { return slice }
  var content = slice.content;
  var openStart = slice.openStart;
  var openEnd = slice.openEnd;
  for (var i = array.length - 2; i >= 0; i -= 2) {
    var type = schema.nodes[array[i]];
    if (!type || type.hasRequiredAttrs()) { break }
    content = Fragment.from(type.create(array[i + 1], content));
    openStart++; openEnd++;
  }
  return new Slice(content, openStart, openEnd)
}

var observeOptions = {
  childList: true,
  characterData: true,
  characterDataOldValue: true,
  attributes: true,
  attributeOldValue: true,
  subtree: true
};
// IE11 has very broken mutation observers, so we also listen to DOMCharacterDataModified
var useCharData = result.ie && result.ie_version <= 11;

var SelectionState = function SelectionState() {
  this.anchorNode = this.anchorOffset = this.focusNode = this.focusOffset = null;
};

SelectionState.prototype.set = function set (sel) {
  this.anchorNode = sel.anchorNode; this.anchorOffset = sel.anchorOffset;
  this.focusNode = sel.focusNode; this.focusOffset = sel.focusOffset;
};

SelectionState.prototype.eq = function eq (sel) {
  return sel.anchorNode == this.anchorNode && sel.anchorOffset == this.anchorOffset &&
    sel.focusNode == this.focusNode && sel.focusOffset == this.focusOffset
};

var DOMObserver = function DOMObserver(view, handleDOMChange) {
  var this$1 = this;

  this.view = view;
  this.handleDOMChange = handleDOMChange;
  this.queue = [];
  this.flushingSoon = false;
  this.observer = window.MutationObserver &&
    new window.MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) { this$1.queue.push(mutations[i]); }
      // IE11 will sometimes (on backspacing out a single character
      // text node after a BR node) call the observer callback
      // before actually updating the DOM, which will cause
      // ProseMirror to miss the change (see #930)
      if (result.ie && result.ie_version <= 11 && mutations.some(
        function (m) { return m.type == "childList" && m.removedNodes.length ||
             m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length; }))
        { this$1.flushSoon(); }
      else
        { this$1.flush(); }
    });
  this.currentSelection = new SelectionState;
  if (useCharData) {
    this.onCharData = function (e) {
      this$1.queue.push({target: e.target, type: "characterData", oldValue: e.prevValue});
      this$1.flushSoon();
    };
  }
  this.onSelectionChange = this.onSelectionChange.bind(this);
  this.suppressingSelectionUpdates = false;
};

DOMObserver.prototype.flushSoon = function flushSoon () {
    var this$1 = this;

  if (!this.flushingSoon) {
    this.flushingSoon = true;
    window.setTimeout(function () { this$1.flushingSoon = false; this$1.flush(); }, 20);
  }
};

DOMObserver.prototype.start = function start () {
  if (this.observer)
    { this.observer.observe(this.view.dom, observeOptions); }
  if (useCharData)
    { this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData); }
  this.connectSelection();
};

DOMObserver.prototype.stop = function stop () {
    var this$1 = this;

  if (this.observer) {
    var take = this.observer.takeRecords();
    if (take.length) {
      for (var i = 0; i < take.length; i++) { this.queue.push(take[i]); }
      window.setTimeout(function () { return this$1.flush(); }, 20);
    }
    this.observer.disconnect();
  }
  if (useCharData) { this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData); }
  this.disconnectSelection();
};

DOMObserver.prototype.connectSelection = function connectSelection () {
  this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
};

DOMObserver.prototype.disconnectSelection = function disconnectSelection () {
  this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
};

DOMObserver.prototype.suppressSelectionUpdates = function suppressSelectionUpdates () {
    var this$1 = this;

  this.suppressingSelectionUpdates = true;
  setTimeout(function () { return this$1.suppressingSelectionUpdates = false; }, 50);
};

DOMObserver.prototype.onSelectionChange = function onSelectionChange () {
  if (!hasFocusAndSelection(this.view)) { return }
  if (this.suppressingSelectionUpdates) { return selectionToDOM(this.view) }
  // Deletions on IE11 fire their events in the wrong order, giving
  // us a selection change event before the DOM changes are
  // reported.
  if (result.ie && result.ie_version <= 11 && !this.view.state.selection.empty) {
    var sel = this.view.root.getSelection();
    // Selection.isCollapsed isn't reliable on IE
    if (sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset))
      { return this.flushSoon() }
  }
  this.flush();
};

DOMObserver.prototype.setCurSelection = function setCurSelection () {
  this.currentSelection.set(this.view.root.getSelection());
};

DOMObserver.prototype.ignoreSelectionChange = function ignoreSelectionChange (sel) {
  if (sel.rangeCount == 0) { return true }
  var container = sel.getRangeAt(0).commonAncestorContainer;
  var desc = this.view.docView.nearestDesc(container);
  return desc && desc.ignoreMutation({type: "selection", target: container.nodeType == 3 ? container.parentNode : container})
};

DOMObserver.prototype.flush = function flush () {
  if (!this.view.docView || this.flushingSoon) { return }
  var mutations = this.observer ? this.observer.takeRecords() : [];
  if (this.queue.length) {
    mutations = this.queue.concat(mutations);
    this.queue.length = 0;
  }

  var sel = this.view.root.getSelection();
  var newSel = !this.suppressingSelectionUpdates && !this.currentSelection.eq(sel) && hasSelection(this.view) && !this.ignoreSelectionChange(sel);

  var from = -1, to = -1, typeOver = false, added = [];
  if (this.view.editable) {
    for (var i = 0; i < mutations.length; i++) {
      var result = this.registerMutation(mutations[i], added);
      if (result) {
        from = from < 0 ? result.from : Math.min(result.from, from);
        to = to < 0 ? result.to : Math.max(result.to, to);
        if (result.typeOver && !this.view.composing) { typeOver = true; }
      }
    }
  }

  if (from > -1 || newSel) {
    if (from > -1) {
      this.view.docView.markDirty(from, to);
      checkCSS(this.view);
    }
    this.handleDOMChange(from, to, typeOver);
    if (this.view.docView.dirty) { this.view.updateState(this.view.state); }
    else if (!this.currentSelection.eq(sel)) { selectionToDOM(this.view); }
  }
};

DOMObserver.prototype.registerMutation = function registerMutation (mut, added) {
  // Ignore mutations inside nodes that were already noted as inserted
  if (added.indexOf(mut.target) > -1) { return null }
  var desc = this.view.docView.nearestDesc(mut.target);
  if (mut.type == "attributes" &&
      (desc == this.view.docView || mut.attributeName == "contenteditable" ||
       // Firefox sometimes fires spurious events for null/empty styles
       (mut.attributeName == "style" && !mut.oldValue && !mut.target.getAttribute("style"))))
    { return null }
  if (!desc || desc.ignoreMutation(mut)) { return null }

  if (mut.type == "childList") {
    var prev = mut.previousSibling, next = mut.nextSibling;
    if (result.ie && result.ie_version <= 11 && mut.addedNodes.length) {
      // IE11 gives us incorrect next/prev siblings for some
      // insertions, so if there are added nodes, recompute those
      for (var i = 0; i < mut.addedNodes.length; i++) {
        var ref = mut.addedNodes[i];
          var previousSibling = ref.previousSibling;
          var nextSibling = ref.nextSibling;
        if (!previousSibling || Array.prototype.indexOf.call(mut.addedNodes, previousSibling) < 0) { prev = previousSibling; }
        if (!nextSibling || Array.prototype.indexOf.call(mut.addedNodes, nextSibling) < 0) { next = nextSibling; }
      }
    }
    var fromOffset = prev && prev.parentNode == mut.target
        ? domIndex(prev) + 1 : 0;
    var from = desc.localPosFromDOM(mut.target, fromOffset, -1);
    var toOffset = next && next.parentNode == mut.target
        ? domIndex(next) : mut.target.childNodes.length;
    for (var i$1 = 0; i$1 < mut.addedNodes.length; i$1++) { added.push(mut.addedNodes[i$1]); }
    var to = desc.localPosFromDOM(mut.target, toOffset, 1);
    return {from: from, to: to}
  } else if (mut.type == "attributes") {
    return {from: desc.posAtStart - desc.border, to: desc.posAtEnd + desc.border}
  } else { // "characterData"
    return {
      from: desc.posAtStart,
      to: desc.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: mut.target.nodeValue == mut.oldValue
    }
  }
};

var cssChecked = false;

function checkCSS(view) {
  if (cssChecked) { return }
  cssChecked = true;
  if (getComputedStyle(view.dom).whiteSpace == "normal")
    { console["warn"]("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."); }
}

// A collection of DOM events that occur within the editor, and callback functions
// to invoke when the event fires.
var handlers = {}, editHandlers = {};

function initInput(view) {
  view.shiftKey = false;
  view.mouseDown = null;
  view.lastKeyCode = null;
  view.lastKeyCodeTime = 0;
  view.lastClick = {time: 0, x: 0, y: 0, type: ""};
  view.lastSelectionOrigin = null;
  view.lastSelectionTime = 0;

  view.composing = false;
  view.composingTimeout = null;
  view.compositionNodes = [];
  view.compositionEndedAt = -2e8;

  view.domObserver = new DOMObserver(view, function (from, to, typeOver) { return readDOMChange(view, from, to, typeOver); });
  view.domObserver.start();
  // Used by hacks like the beforeinput handler to check whether anything happened in the DOM
  view.domChangeCount = 0;

  view.eventHandlers = Object.create(null);
  var loop = function ( event ) {
    var handler = handlers[event];
    view.dom.addEventListener(event, view.eventHandlers[event] = function (event) {
      if (eventBelongsToView(view, event) && !runCustomHandler(view, event) &&
          (view.editable || !(event.type in editHandlers)))
        { handler(view, event); }
    });
  };

  for (var event in handlers) loop( event );
  // On Safari, for reasons beyond my understanding, adding an input
  // event handler makes an issue where the composition vanishes when
  // you press enter go away.
  if (result.safari) { view.dom.addEventListener("input", function () { return null; }); }

  ensureListeners(view);
}

function setSelectionOrigin(view, origin) {
  view.lastSelectionOrigin = origin;
  view.lastSelectionTime = Date.now();
}

function destroyInput(view) {
  view.domObserver.stop();
  for (var type in view.eventHandlers)
    { view.dom.removeEventListener(type, view.eventHandlers[type]); }
  clearTimeout(view.composingTimeout);
}

function ensureListeners(view) {
  view.someProp("handleDOMEvents", function (currentHandlers) {
    for (var type in currentHandlers) { if (!view.eventHandlers[type])
      { view.dom.addEventListener(type, view.eventHandlers[type] = function (event) { return runCustomHandler(view, event); }); } }
  });
}

function runCustomHandler(view, event) {
  return view.someProp("handleDOMEvents", function (handlers) {
    var handler = handlers[event.type];
    return handler ? handler(view, event) || event.defaultPrevented : false
  })
}

function eventBelongsToView(view, event) {
  if (!event.bubbles) { return true }
  if (event.defaultPrevented) { return false }
  for (var node = event.target; node != view.dom; node = node.parentNode)
    { if (!node || node.nodeType == 11 ||
        (node.pmViewDesc && node.pmViewDesc.stopEvent(event)))
      { return false } }
  return true
}

function dispatchEvent(view, event) {
  if (!runCustomHandler(view, event) && handlers[event.type] &&
      (view.editable || !(event.type in editHandlers)))
    { handlers[event.type](view, event); }
}

editHandlers.keydown = function (view, event) {
  view.shiftKey = event.keyCode == 16 || event.shiftKey;
  if (inOrNearComposition(view, event)) { return }
  view.lastKeyCode = event.keyCode;
  view.lastKeyCodeTime = Date.now();
  if (view.someProp("handleKeyDown", function (f) { return f(view, event); }) || captureKeyDown(view, event))
    { event.preventDefault(); }
  else
    { setSelectionOrigin(view, "key"); }
};

editHandlers.keyup = function (view, e) {
  if (e.keyCode == 16) { view.shiftKey = false; }
};

editHandlers.keypress = function (view, event) {
  if (inOrNearComposition(view, event) || !event.charCode ||
      event.ctrlKey && !event.altKey || result.mac && event.metaKey) { return }

  if (view.someProp("handleKeyPress", function (f) { return f(view, event); })) {
    event.preventDefault();
    return
  }

  var sel = view.state.selection;
  if (!(sel instanceof TextSelection) || !sel.$from.sameParent(sel.$to)) {
    var text = String.fromCharCode(event.charCode);
    if (!view.someProp("handleTextInput", function (f) { return f(view, sel.$from.pos, sel.$to.pos, text); }))
      { view.dispatch(view.state.tr.insertText(text).scrollIntoView()); }
    event.preventDefault();
  }
};

function eventCoords(event) { return {left: event.clientX, top: event.clientY} }

function isNear(event, click) {
  var dx = click.x - event.clientX, dy = click.y - event.clientY;
  return dx * dx + dy * dy < 100
}

function runHandlerOnContext(view, propName, pos, inside, event) {
  if (inside == -1) { return false }
  var $pos = view.state.doc.resolve(inside);
  var loop = function ( i ) {
    if (view.someProp(propName, function (f) { return i > $pos.depth ? f(view, pos, $pos.nodeAfter, $pos.before(i), event, true)
                                                    : f(view, pos, $pos.node(i), $pos.before(i), event, false); }))
      { return { v: true } }
  };

  for (var i = $pos.depth + 1; i > 0; i--) {
    var returned = loop( i );

    if ( returned ) return returned.v;
  }
  return false
}

function updateSelection(view, selection, origin) {
  if (!view.focused) { view.focus(); }
  var tr = view.state.tr.setSelection(selection);
  if (origin == "pointer") { tr.setMeta("pointer", true); }
  view.dispatch(tr);
}

function selectClickedLeaf(view, inside) {
  if (inside == -1) { return false }
  var $pos = view.state.doc.resolve(inside), node = $pos.nodeAfter;
  if (node && node.isAtom && NodeSelection.isSelectable(node)) {
    updateSelection(view, new NodeSelection($pos), "pointer");
    return true
  }
  return false
}

function selectClickedNode(view, inside) {
  if (inside == -1) { return false }
  var sel = view.state.selection, selectedNode, selectAt;
  if (sel instanceof NodeSelection) { selectedNode = sel.node; }

  var $pos = view.state.doc.resolve(inside);
  for (var i = $pos.depth + 1; i > 0; i--) {
    var node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
    if (NodeSelection.isSelectable(node)) {
      if (selectedNode && sel.$from.depth > 0 &&
          i >= sel.$from.depth && $pos.before(sel.$from.depth + 1) == sel.$from.pos)
        { selectAt = $pos.before(sel.$from.depth); }
      else
        { selectAt = $pos.before(i); }
      break
    }
  }

  if (selectAt != null) {
    updateSelection(view, NodeSelection.create(view.state.doc, selectAt), "pointer");
    return true
  } else {
    return false
  }
}

function handleSingleClick(view, pos, inside, event, selectNode) {
  return runHandlerOnContext(view, "handleClickOn", pos, inside, event) ||
    view.someProp("handleClick", function (f) { return f(view, pos, event); }) ||
    (selectNode ? selectClickedNode(view, inside) : selectClickedLeaf(view, inside))
}

function handleDoubleClick(view, pos, inside, event) {
  return runHandlerOnContext(view, "handleDoubleClickOn", pos, inside, event) ||
    view.someProp("handleDoubleClick", function (f) { return f(view, pos, event); })
}

function handleTripleClick(view, pos, inside, event) {
  return runHandlerOnContext(view, "handleTripleClickOn", pos, inside, event) ||
    view.someProp("handleTripleClick", function (f) { return f(view, pos, event); }) ||
    defaultTripleClick(view, inside)
}

function defaultTripleClick(view, inside) {
  var doc = view.state.doc;
  if (inside == -1) {
    if (doc.inlineContent) {
      updateSelection(view, TextSelection.create(doc, 0, doc.content.size), "pointer");
      return true
    }
    return false
  }

  var $pos = doc.resolve(inside);
  for (var i = $pos.depth + 1; i > 0; i--) {
    var node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
    var nodePos = $pos.before(i);
    if (node.inlineContent)
      { updateSelection(view, TextSelection.create(doc, nodePos + 1, nodePos + 1 + node.content.size), "pointer"); }
    else if (NodeSelection.isSelectable(node))
      { updateSelection(view, NodeSelection.create(doc, nodePos), "pointer"); }
    else
      { continue }
    return true
  }
}

function forceDOMFlush(view) {
  return endComposition(view)
}

var selectNodeModifier = result.mac ? "metaKey" : "ctrlKey";

handlers.mousedown = function (view, event) {
  view.shiftKey = event.shiftKey;
  var flushed = forceDOMFlush(view);
  var now = Date.now(), type = "singleClick";
  if (now - view.lastClick.time < 500 && isNear(event, view.lastClick) && !event[selectNodeModifier]) {
    if (view.lastClick.type == "singleClick") { type = "doubleClick"; }
    else if (view.lastClick.type == "doubleClick") { type = "tripleClick"; }
  }
  view.lastClick = {time: now, x: event.clientX, y: event.clientY, type: type};

  var pos = view.posAtCoords(eventCoords(event));
  if (!pos) { return }

  if (type == "singleClick")
    { view.mouseDown = new MouseDown(view, pos, event, flushed); }
  else if ((type == "doubleClick" ? handleDoubleClick : handleTripleClick)(view, pos.pos, pos.inside, event))
    { event.preventDefault(); }
  else
    { setSelectionOrigin(view, "pointer"); }
};

var MouseDown = function MouseDown(view, pos, event, flushed) {
  var this$1 = this;

  this.view = view;
  this.startDoc = view.state.doc;
  this.pos = pos;
  this.event = event;
  this.flushed = flushed;
  this.selectNode = event[selectNodeModifier];
  this.allowDefault = event.shiftKey;

  var targetNode, targetPos;
  if (pos.inside > -1) {
    targetNode = view.state.doc.nodeAt(pos.inside);
    targetPos = pos.inside;
  } else {
    var $pos = view.state.doc.resolve(pos.pos);
    targetNode = $pos.parent;
    targetPos = $pos.depth ? $pos.before() : 0;
  }

  this.mightDrag = null;

  var target = flushed ? null : event.target;
  var targetDesc = target ? view.docView.nearestDesc(target, true) : null;
  this.target = targetDesc ? targetDesc.dom : null;

  if (targetNode.type.spec.draggable && targetNode.type.spec.selectable !== false ||
      view.state.selection instanceof NodeSelection && targetPos == view.state.selection.from)
    { this.mightDrag = {node: targetNode,
                      pos: targetPos,
                      addAttr: this.target && !this.target.draggable,
                      setUneditable: this.target && result.gecko && !this.target.hasAttribute("contentEditable")}; }

  if (this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable)) {
    this.view.domObserver.stop();
    if (this.mightDrag.addAttr) { this.target.draggable = true; }
    if (this.mightDrag.setUneditable)
      { setTimeout(function () { return this$1.target.setAttribute("contentEditable", "false"); }, 20); }
    this.view.domObserver.start();
  }

  view.root.addEventListener("mouseup", this.up = this.up.bind(this));
  view.root.addEventListener("mousemove", this.move = this.move.bind(this));
  setSelectionOrigin(view, "pointer");
};

MouseDown.prototype.done = function done () {
  this.view.root.removeEventListener("mouseup", this.up);
  this.view.root.removeEventListener("mousemove", this.move);
  if (this.mightDrag && this.target) {
    this.view.domObserver.stop();
    if (this.mightDrag.addAttr) { this.target.draggable = false; }
    if (this.mightDrag.setUneditable) { this.target.removeAttribute("contentEditable"); }
    this.view.domObserver.start();
  }
  this.view.mouseDown = null;
};

MouseDown.prototype.up = function up (event) {
  this.done();

  if (!this.view.dom.contains(event.target.nodeType == 3 ? event.target.parentNode : event.target))
    { return }

  var pos = this.pos;
  if (this.view.state.doc != this.startDoc) { pos = this.view.posAtCoords(eventCoords(event)); }

  if (this.allowDefault || !pos) {
    setSelectionOrigin(this.view, "pointer");
  } else if (handleSingleClick(this.view, pos.pos, pos.inside, event, this.selectNode)) {
    event.preventDefault();
  } else if (this.flushed ||
             // Chrome will sometimes treat a node selection as a
             // cursor, but still report that the node is selected
             // when asked through getSelection. You'll then get a
             // situation where clicking at the point where that
             // (hidden) cursor is doesn't change the selection, and
             // thus doesn't get a reaction from ProseMirror. This
             // works around that.
             (result.chrome && !(this.view.state.selection instanceof TextSelection) &&
              (pos.pos == this.view.state.selection.from || pos.pos == this.view.state.selection.to))) {
    updateSelection(this.view, Selection.near(this.view.state.doc.resolve(pos.pos)), "pointer");
    event.preventDefault();
  } else {
    setSelectionOrigin(this.view, "pointer");
  }
};

MouseDown.prototype.move = function move (event) {
  if (!this.allowDefault && (Math.abs(this.event.x - event.clientX) > 4 ||
                             Math.abs(this.event.y - event.clientY) > 4))
    { this.allowDefault = true; }
  setSelectionOrigin(this.view, "pointer");
};

handlers.touchdown = function (view) {
  forceDOMFlush(view);
  setSelectionOrigin(view, "pointer");
};

handlers.contextmenu = function (view) { return forceDOMFlush(view); };

function inOrNearComposition(view, event) {
  if (view.composing) { return true }
  // See https://www.stum.de/2016/06/24/handling-ime-events-in-javascript/.
  // On Japanese input method editors (IMEs), the Enter key is used to confirm character
  // selection. On Safari, when Enter is pressed, compositionend and keydown events are
  // emitted. The keydown event triggers newline insertion, which we don't want.
  // This method returns true if the keydown event should be ignored.
  // We only ignore it once, as pressing Enter a second time *should* insert a newline.
  // Furthermore, the keydown event timestamp must be close to the compositionEndedAt timestamp.
  // This guards against the case where compositionend is triggered without the keyboard
  // (e.g. character confirmation may be done with the mouse), and keydown is triggered
  // afterwards- we wouldn't want to ignore the keydown event in this case.
  if (result.safari && Math.abs(event.timeStamp - view.compositionEndedAt) < 500) {
    view.compositionEndedAt = -2e8;
    return true
  }
  return false
}

// Drop active composition after 5 seconds of inactivity on Android
var timeoutComposition = result.android ? 5000 : -1;

editHandlers.compositionstart = editHandlers.compositionupdate = function (view) {
  if (!view.composing) {
    view.domObserver.flush();
    var state = view.state;
    var $pos = state.selection.$from;
    if (state.selection.empty &&
        (state.storedMarks || (!$pos.textOffset && $pos.parentOffset && $pos.nodeBefore.marks.some(function (m) { return m.type.spec.inclusive === false; })))) {
      // Need to wrap the cursor in mark nodes different from the ones in the DOM context
      view.markCursor = view.state.storedMarks || $pos.marks();
      endComposition(view, true);
      view.markCursor = null;
    } else {
      endComposition(view);
      // In firefox, if the cursor is after but outside a marked node,
      // the inserted text won't inherit the marks. So this moves it
      // inside if necessary.
      if (result.gecko && state.selection.empty && $pos.parentOffset && !$pos.textOffset && $pos.nodeBefore.marks.length) {
        var sel = view.root.getSelection();
        for (var node = sel.focusNode, offset = sel.focusOffset; node && node.nodeType == 1 && offset != 0;) {
          var before = offset < 0 ? node.lastChild : node.childNodes[offset - 1];
          if (before.nodeType == 3) {
            sel.collapse(before, before.nodeValue.length);
            break
          } else {
            node = before;
            offset = -1;
          }
        }
      }
    }
    view.composing = true;
  }
  scheduleComposeEnd(view, timeoutComposition);
};

editHandlers.compositionend = function (view, event) {
  if (view.composing) {
    view.composing = false;
    view.compositionEndedAt = event.timeStamp;
    scheduleComposeEnd(view, 20);
  }
};

function scheduleComposeEnd(view, delay) {
  clearTimeout(view.composingTimeout);
  if (delay > -1) { view.composingTimeout = setTimeout(function () { return endComposition(view); }, delay); }
}

function endComposition(view, forceUpdate) {
  view.composing = false;
  while (view.compositionNodes.length > 0) { view.compositionNodes.pop().markParentsDirty(); }
  if (forceUpdate || view.docView.dirty) {
    view.updateState(view.state);
    return true
  }
  return false
}

function captureCopy(view, dom) {
  // The extra wrapper is somehow necessary on IE/Edge to prevent the
  // content from being mangled when it is put onto the clipboard
  var doc = view.dom.ownerDocument;
  var wrap = doc.body.appendChild(doc.createElement("div"));
  wrap.appendChild(dom);
  wrap.style.cssText = "position: fixed; left: -10000px; top: 10px";
  var sel = getSelection(), range = doc.createRange();
  range.selectNodeContents(dom);
  // Done because IE will fire a selectionchange moving the selection
  // to its start when removeAllRanges is called and the editor still
  // has focus (which will mess up the editor's selection state).
  view.dom.blur();
  sel.removeAllRanges();
  sel.addRange(range);
  setTimeout(function () {
    doc.body.removeChild(wrap);
    view.focus();
  }, 50);
}

// This is very crude, but unfortunately both these browsers _pretend_
// that they have a clipboard API—all the objects and methods are
// there, they just don't work, and they are hard to test.
var brokenClipboardAPI = (result.ie && result.ie_version < 15) ||
      (result.ios && result.webkit_version < 604);

handlers.copy = editHandlers.cut = function (view, e) {
  var sel = view.state.selection, cut = e.type == "cut";
  if (sel.empty) { return }

  // IE and Edge's clipboard interface is completely broken
  var data = brokenClipboardAPI ? null : e.clipboardData;
  var slice = sel.content();
  var ref = serializeForClipboard(view, slice);
  var dom = ref.dom;
  var text = ref.text;
  if (data) {
    e.preventDefault();
    data.clearData();
    data.setData("text/html", dom.innerHTML);
    data.setData("text/plain", text);
  } else {
    captureCopy(view, dom);
  }
  if (cut) { view.dispatch(view.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut")); }
};

function sliceSingleNode(slice) {
  return slice.openStart == 0 && slice.openEnd == 0 && slice.content.childCount == 1 ? slice.content.firstChild : null
}

function capturePaste(view, e) {
  var doc = view.dom.ownerDocument;
  var plainText = view.shiftKey || view.state.selection.$from.parent.type.spec.code;
  var target = doc.body.appendChild(doc.createElement(plainText ? "textarea" : "div"));
  if (!plainText) { target.contentEditable = "true"; }
  target.style.cssText = "position: fixed; left: -10000px; top: 10px";
  target.focus();
  setTimeout(function () {
    view.focus();
    doc.body.removeChild(target);
    if (plainText) { doPaste(view, target.value, null, e); }
    else { doPaste(view, target.textContent, target.innerHTML, e); }
  }, 50);
}

function doPaste(view, text, html, e) {
  var slice = parseFromClipboard(view, text, html, view.shiftKey, view.state.selection.$from);
  if (view.someProp("handlePaste", function (f) { return f(view, e, slice || Slice.empty); }) || !slice) { return }

  var singleNode = sliceSingleNode(slice);
  var tr = singleNode ? view.state.tr.replaceSelectionWith(singleNode, view.shiftKey) : view.state.tr.replaceSelection(slice);
  view.dispatch(tr.scrollIntoView().setMeta("paste", true).setMeta("uiEvent", "paste"));
}

editHandlers.paste = function (view, e) {
  var data = brokenClipboardAPI ? null : e.clipboardData;
  var html = data && data.getData("text/html"), text = data && data.getData("text/plain");
  if (data && (html || text || data.files.length)) {
    doPaste(view, text, html, e);
    e.preventDefault();
  } else {
    capturePaste(view, e);
  }
};

var Dragging = function Dragging(slice, move) {
  this.slice = slice;
  this.move = move;
};

var dragCopyModifier = result.mac ? "altKey" : "ctrlKey";

handlers.dragstart = function (view, e) {
  var mouseDown = view.mouseDown;
  if (mouseDown) { mouseDown.done(); }
  if (!e.dataTransfer) { return }

  var sel = view.state.selection;
  var pos = sel.empty ? null : view.posAtCoords(eventCoords(e));
  if (pos && pos.pos >= sel.from && pos.pos <= (sel instanceof NodeSelection ? sel.to - 1: sel.to)) ; else if (mouseDown && mouseDown.mightDrag) {
    view.dispatch(view.state.tr.setSelection(NodeSelection.create(view.state.doc, mouseDown.mightDrag.pos)));
  } else if (e.target && e.target.nodeType == 1) {
    var desc = view.docView.nearestDesc(e.target, true);
    if (!desc || !desc.node.type.spec.draggable || desc == view.docView) { return }
    view.dispatch(view.state.tr.setSelection(NodeSelection.create(view.state.doc, desc.posBefore)));
  }
  var slice = view.state.selection.content();
  var ref = serializeForClipboard(view, slice);
  var dom = ref.dom;
  var text = ref.text;
  e.dataTransfer.clearData();
  e.dataTransfer.setData(brokenClipboardAPI ? "Text" : "text/html", dom.innerHTML);
  if (!brokenClipboardAPI) { e.dataTransfer.setData("text/plain", text); }
  view.dragging = new Dragging(slice, !e[dragCopyModifier]);
};

handlers.dragend = function (view) {
  window.setTimeout(function () { return view.dragging = null; }, 50);
};

editHandlers.dragover = editHandlers.dragenter = function (_, e) { return e.preventDefault(); };

editHandlers.drop = function (view, e) {
  var dragging = view.dragging;
  view.dragging = null;

  if (!e.dataTransfer) { return }

  var eventPos = view.posAtCoords(eventCoords(e));
  if (!eventPos) { return }
  var $mouse = view.state.doc.resolve(eventPos.pos);
  if (!$mouse) { return }
  var slice = dragging && dragging.slice ||
      parseFromClipboard(view, e.dataTransfer.getData(brokenClipboardAPI ? "Text" : "text/plain"),
                         brokenClipboardAPI ? null : e.dataTransfer.getData("text/html"), false, $mouse);
  if (!slice) { return }

  e.preventDefault();
  if (view.someProp("handleDrop", function (f) { return f(view, e, slice, dragging && dragging.move); })) { return }
  var insertPos = slice ? dropPoint(view.state.doc, $mouse.pos, slice) : $mouse.pos;
  if (insertPos == null) { insertPos = $mouse.pos; }

  var tr = view.state.tr;
  if (dragging && dragging.move) { tr.deleteSelection(); }

  var pos = tr.mapping.map(insertPos);
  var isNode = slice.openStart == 0 && slice.openEnd == 0 && slice.content.childCount == 1;
  var beforeInsert = tr.doc;
  if (isNode)
    { tr.replaceRangeWith(pos, pos, slice.content.firstChild); }
  else
    { tr.replaceRange(pos, pos, slice); }
  if (tr.doc.eq(beforeInsert)) { return }

  var $pos = tr.doc.resolve(pos);
  if (isNode && NodeSelection.isSelectable(slice.content.firstChild) &&
      $pos.nodeAfter && $pos.nodeAfter.sameMarkup(slice.content.firstChild))
    { tr.setSelection(new NodeSelection($pos)); }
  else
    { tr.setSelection(selectionBetween(view, $pos, tr.doc.resolve(tr.mapping.map(insertPos)))); }
  view.focus();
  view.dispatch(tr.setMeta("uiEvent", "drop"));
};

handlers.focus = function (view) {
  if (!view.focused) {
    view.domObserver.stop();
    view.dom.classList.add("ProseMirror-focused");
    view.domObserver.start();
    view.focused = true;
  }
};

handlers.blur = function (view) {
  if (view.focused) {
    view.domObserver.stop();
    view.dom.classList.remove("ProseMirror-focused");
    view.domObserver.start();
    view.domObserver.currentSelection.set({});
    view.focused = false;
  }
};

handlers.beforeinput = function (view, event) {
  // We should probably do more with beforeinput events, but support
  // is so spotty that I'm still waiting to see where they are going.

  // Very specific hack to deal with backspace sometimes failing on
  // Chrome Android when after an uneditable node.
  if (result.chrome && result.android && event.inputType == "deleteContentBackward") {
    var domChangeCount = view.domChangeCount;
    setTimeout(function () {
      if (view.domChangeCount != domChangeCount) { return } // Event already had some effect
      // This bug tends to close the virtual keyboard, so we refocus
      view.dom.blur();
      view.focus();
      if (view.someProp("handleKeyDown", function (f) { return f(view, keyEvent(8, "Backspace")); })) { return }
      var ref = view.state.selection;
      var $cursor = ref.$cursor;
      // Crude approximation of backspace behavior when no command handled it
      if ($cursor && $cursor.pos > 0) { view.dispatch(view.state.tr.delete($cursor.pos - 1, $cursor.pos).scrollIntoView()); }
    }, 50);
  }
};

// Make sure all handlers get registered
for (var prop in editHandlers) { handlers[prop] = editHandlers[prop]; }

function compareObjs(a, b) {
  if (a == b) { return true }
  for (var p in a) { if (a[p] !== b[p]) { return false } }
  for (var p$1 in b) { if (!(p$1 in a)) { return false } }
  return true
}

var WidgetType = function WidgetType(toDOM, spec) {
  this.spec = spec || noSpec;
  this.side = this.spec.side || 0;
  this.toDOM = toDOM;
};

WidgetType.prototype.map = function map (mapping, span, offset, oldOffset) {
  var ref = mapping.mapResult(span.from + oldOffset, this.side < 0 ? -1 : 1);
    var pos = ref.pos;
    var deleted = ref.deleted;
  return deleted ? null : new Decoration(pos - offset, pos - offset, this)
};

WidgetType.prototype.valid = function valid () { return true };

WidgetType.prototype.eq = function eq (other) {
  return this == other ||
    (other instanceof WidgetType &&
     (this.spec.key && this.spec.key == other.spec.key ||
      this.toDOM == other.toDOM && compareObjs(this.spec, other.spec)))
};

var InlineType = function InlineType(attrs, spec) {
  this.spec = spec || noSpec;
  this.attrs = attrs;
};

InlineType.prototype.map = function map (mapping, span, offset, oldOffset) {
  var from = mapping.map(span.from + oldOffset, this.spec.inclusiveStart ? -1 : 1) - offset;
  var to = mapping.map(span.to + oldOffset, this.spec.inclusiveEnd ? 1 : -1) - offset;
  return from >= to ? null : new Decoration(from, to, this)
};

InlineType.prototype.valid = function valid (_, span) { return span.from < span.to };

InlineType.prototype.eq = function eq (other) {
  return this == other ||
    (other instanceof InlineType && compareObjs(this.attrs, other.attrs) &&
     compareObjs(this.spec, other.spec))
};

InlineType.is = function is (span) { return span.type instanceof InlineType };

var NodeType$1 = function NodeType(attrs, spec) {
  this.spec = spec || noSpec;
  this.attrs = attrs;
};

NodeType$1.prototype.map = function map (mapping, span, offset, oldOffset) {
  var from = mapping.mapResult(span.from + oldOffset, 1);
  if (from.deleted) { return null }
  var to = mapping.mapResult(span.to + oldOffset, -1);
  if (to.deleted || to.pos <= from.pos) { return null }
  return new Decoration(from.pos - offset, to.pos - offset, this)
};

NodeType$1.prototype.valid = function valid (node, span) {
  var ref = node.content.findIndex(span.from);
    var index = ref.index;
    var offset = ref.offset;
  return offset == span.from && offset + node.child(index).nodeSize == span.to
};

NodeType$1.prototype.eq = function eq (other) {
  return this == other ||
    (other instanceof NodeType$1 && compareObjs(this.attrs, other.attrs) &&
     compareObjs(this.spec, other.spec))
};

// ::- Decoration objects can be provided to the view through the
// [`decorations` prop](#view.EditorProps.decorations). They come in
// several variants—see the static members of this class for details.
var Decoration = function Decoration(from, to, type) {
  // :: number
  // The start position of the decoration.
  this.from = from;
  // :: number
  // The end position. Will be the same as `from` for [widget
  // decorations](#view.Decoration^widget).
  this.to = to;
  this.type = type;
};

var prototypeAccessors$1$5 = { spec: { configurable: true } };

Decoration.prototype.copy = function copy (from, to) {
  return new Decoration(from, to, this.type)
};

Decoration.prototype.eq = function eq (other) {
  return this.type.eq(other.type) && this.from == other.from && this.to == other.to
};

Decoration.prototype.map = function map (mapping, offset, oldOffset) {
  return this.type.map(mapping, this, offset, oldOffset)
};

// :: (number, union<(view: EditorView, getPos: () → number) → dom.Node, dom.Node>, ?Object) → Decoration
// Creates a widget decoration, which is a DOM node that's shown in
// the document at the given position. It is recommended that you
// delay rendering the widget by passing a function that will be
// called when the widget is actually drawn in a view, but you can
// also directly pass a DOM node. `getPos` can be used to find the
// widget's current document position.
//
// spec::- These options are supported:
//
//   side:: ?number
//   Controls which side of the document position this widget is
//   associated with. When negative, it is drawn before a cursor
//   at its position, and content inserted at that position ends
//   up after the widget. When zero (the default) or positive, the
//   widget is drawn after the cursor and content inserted there
//   ends up before the widget.
//
//   When there are multiple widgets at a given position, their
//   `side` values determine the order in which they appear. Those
//   with lower values appear first. The ordering of widgets with
//   the same `side` value is unspecified.
//
//   When `marks` is null, `side` also determines the marks that
//   the widget is wrapped in—those of the node before when
//   negative, those of the node after when positive.
//
//   marks:: ?[Mark]
//   The precise set of marks to draw around the widget.
//
//   stopEvent:: ?(event: dom.Event) → bool
//   Can be used to control which DOM events, when they bubble out
//   of this widget, the editor view should ignore.
//
//   key:: ?string
//   When comparing decorations of this type (in order to decide
//   whether it needs to be redrawn), ProseMirror will by default
//   compare the widget DOM node by identity. If you pass a key,
//   that key will be compared instead, which can be useful when
//   you generate decorations on the fly and don't want to store
//   and reuse DOM nodes. Make sure that any widgets with the same
//   key are interchangeable—if widgets differ in, for example,
//   the behavior of some event handler, they should get
//   different keys.
Decoration.widget = function widget (pos, toDOM, spec) {
  return new Decoration(pos, pos, new WidgetType(toDOM, spec))
};

// :: (number, number, DecorationAttrs, ?Object) → Decoration
// Creates an inline decoration, which adds the given attributes to
// each inline node between `from` and `to`.
//
// spec::- These options are recognized:
//
//   inclusiveStart:: ?bool
//   Determines how the left side of the decoration is
//   [mapped](#transform.Position_Mapping) when content is
//   inserted directly at that position. By default, the decoration
//   won't include the new content, but you can set this to `true`
//   to make it inclusive.
//
//   inclusiveEnd:: ?bool
//   Determines how the right side of the decoration is mapped.
//   See
//   [`inclusiveStart`](#view.Decoration^inline^spec.inclusiveStart).
Decoration.inline = function inline (from, to, attrs, spec) {
  return new Decoration(from, to, new InlineType(attrs, spec))
};

// :: (number, number, DecorationAttrs, ?Object) → Decoration
// Creates a node decoration. `from` and `to` should point precisely
// before and after a node in the document. That node, and only that
// node, will receive the given attributes.
//
// spec::-
//
// Optional information to store with the decoration. It
// is also used when comparing decorators for equality.
Decoration.node = function node (from, to, attrs, spec) {
  return new Decoration(from, to, new NodeType$1(attrs, spec))
};

// :: Object
// The spec provided when creating this decoration. Can be useful
// if you've stored extra information in that object.
prototypeAccessors$1$5.spec.get = function () { return this.type.spec };

Object.defineProperties( Decoration.prototype, prototypeAccessors$1$5 );

// DecorationAttrs:: interface
// A set of attributes to add to a decorated node. Most properties
// simply directly correspond to DOM attributes of the same name,
// which will be set to the property's value. These are exceptions:
//
//   class:: ?string
//   A CSS class name or a space-separated set of class names to be
//   _added_ to the classes that the node already had.
//
//   style:: ?string
//   A string of CSS to be _added_ to the node's existing `style` property.
//
//   nodeName:: ?string
//   When non-null, the target node is wrapped in a DOM element of
//   this type (and the other attributes are applied to this element).

var none = [], noSpec = {};

// ::- A collection of [decorations](#view.Decoration), organized in
// such a way that the drawing algorithm can efficiently use and
// compare them. This is a persistent data structure—it is not
// modified, updates create a new value.
var DecorationSet = function DecorationSet(local, children) {
  this.local = local && local.length ? local : none;
  this.children = children && children.length ? children : none;
};

// :: (Node, [Decoration]) → DecorationSet
// Create a set of decorations, using the structure of the given
// document.
DecorationSet.create = function create (doc, decorations) {
  return decorations.length ? buildTree(decorations, doc, 0, noSpec) : empty
};

// :: (?number, ?number, ?(spec: Object) → bool) → [Decoration]
// Find all decorations in this set which touch the given range
// (including decorations that start or end directly at the
// boundaries) and match the given predicate on their spec. When
// `start` and `end` are omitted, all decorations in the set are
// considered. When `predicate` isn't given, all decorations are
// assumed to match.
DecorationSet.prototype.find = function find (start, end, predicate) {
  var result = [];
  this.findInner(start == null ? 0 : start, end == null ? 1e9 : end, result, 0, predicate);
  return result
};

DecorationSet.prototype.findInner = function findInner (start, end, result, offset, predicate) {
  for (var i = 0; i < this.local.length; i++) {
    var span = this.local[i];
    if (span.from <= end && span.to >= start && (!predicate || predicate(span.spec)))
      { result.push(span.copy(span.from + offset, span.to + offset)); }
  }
  for (var i$1 = 0; i$1 < this.children.length; i$1 += 3) {
    if (this.children[i$1] < end && this.children[i$1 + 1] > start) {
      var childOff = this.children[i$1] + 1;
      this.children[i$1 + 2].findInner(start - childOff, end - childOff, result, offset + childOff, predicate);
    }
  }
};

// :: (Mapping, Node, ?Object) → DecorationSet
// Map the set of decorations in response to a change in the
// document.
//
// options::- An optional set of options.
//
//   onRemove:: ?(decorationSpec: Object)
//   When given, this function will be called for each decoration
//   that gets dropped as a result of the mapping, passing the
//   spec of that decoration.
DecorationSet.prototype.map = function map (mapping, doc, options) {
  if (this == empty || mapping.maps.length == 0) { return this }
  return this.mapInner(mapping, doc, 0, 0, options || noSpec)
};

DecorationSet.prototype.mapInner = function mapInner (mapping, node, offset, oldOffset, options) {
  var newLocal;
  for (var i = 0; i < this.local.length; i++) {
    var mapped = this.local[i].map(mapping, offset, oldOffset);
    if (mapped && mapped.type.valid(node, mapped)) { (newLocal || (newLocal = [])).push(mapped); }
    else if (options.onRemove) { options.onRemove(this.local[i].spec); }
  }

  if (this.children.length)
    { return mapChildren(this.children, newLocal, mapping, node, offset, oldOffset, options) }
  else
    { return newLocal ? new DecorationSet(newLocal.sort(byPos)) : empty }
};

// :: (Node, [Decoration]) → DecorationSet
// Add the given array of decorations to the ones in the set,
// producing a new set. Needs access to the current document to
// create the appropriate tree structure.
DecorationSet.prototype.add = function add (doc, decorations) {
  if (!decorations.length) { return this }
  if (this == empty) { return DecorationSet.create(doc, decorations) }
  return this.addInner(doc, decorations, 0)
};

DecorationSet.prototype.addInner = function addInner (doc, decorations, offset) {
    var this$1 = this;

  var children, childIndex = 0;
  doc.forEach(function (childNode, childOffset) {
    var baseOffset = childOffset + offset, found;
    if (!(found = takeSpansForNode(decorations, childNode, baseOffset))) { return }

    if (!children) { children = this$1.children.slice(); }
    while (childIndex < children.length && children[childIndex] < childOffset) { childIndex += 3; }
    if (children[childIndex] == childOffset)
      { children[childIndex + 2] = children[childIndex + 2].addInner(childNode, found, baseOffset + 1); }
    else
      { children.splice(childIndex, 0, childOffset, childOffset + childNode.nodeSize, buildTree(found, childNode, baseOffset + 1, noSpec)); }
    childIndex += 3;
  });

  var local = moveSpans(childIndex ? withoutNulls(decorations) : decorations, -offset);
  return new DecorationSet(local.length ? this.local.concat(local).sort(byPos) : this.local,
                           children || this.children)
};

// :: ([Decoration]) → DecorationSet
// Create a new set that contains the decorations in this set, minus
// the ones in the given array.
DecorationSet.prototype.remove = function remove (decorations) {
  if (decorations.length == 0 || this == empty) { return this }
  return this.removeInner(decorations, 0)
};

DecorationSet.prototype.removeInner = function removeInner (decorations, offset) {
  var children = this.children, local = this.local;
  for (var i = 0; i < children.length; i += 3) {
    var found = (void 0), from = children[i] + offset, to = children[i + 1] + offset;
    for (var j = 0, span = (void 0); j < decorations.length; j++) { if (span = decorations[j]) {
      if (span.from > from && span.to < to) {
        decorations[j] = null
        ;(found || (found = [])).push(span);
      }
    } }
    if (!found) { continue }
    if (children == this.children) { children = this.children.slice(); }
    var removed = children[i + 2].removeInner(found, from + 1);
    if (removed != empty) {
      children[i + 2] = removed;
    } else {
      children.splice(i, 3);
      i -= 3;
    }
  }
  if (local.length) { for (var i$1 = 0, span$1 = (void 0); i$1 < decorations.length; i$1++) { if (span$1 = decorations[i$1]) {
    for (var j$1 = 0; j$1 < local.length; j$1++) { if (local[j$1].type.eq(span$1.type)) {
      if (local == this.local) { local = this.local.slice(); }
      local.splice(j$1--, 1);
    } }
  } } }
  if (children == this.children && local == this.local) { return this }
  return local.length || children.length ? new DecorationSet(local, children) : empty
};

DecorationSet.prototype.forChild = function forChild (offset, node) {
  if (this == empty) { return this }
  if (node.isLeaf) { return DecorationSet.empty }

  var child, local;
  for (var i = 0; i < this.children.length; i += 3) { if (this.children[i] >= offset) {
    if (this.children[i] == offset) { child = this.children[i + 2]; }
    break
  } }
  var start = offset + 1, end = start + node.content.size;
  for (var i$1 = 0; i$1 < this.local.length; i$1++) {
    var dec = this.local[i$1];
    if (dec.from < end && dec.to > start && (dec.type instanceof InlineType)) {
      var from = Math.max(start, dec.from) - start, to = Math.min(end, dec.to) - start;
      if (from < to) { (local || (local = [])).push(dec.copy(from, to)); }
    }
  }
  if (local) {
    var localSet = new DecorationSet(local.sort(byPos));
    return child ? new DecorationGroup([localSet, child]) : localSet
  }
  return child || empty
};

DecorationSet.prototype.eq = function eq (other) {
  if (this == other) { return true }
  if (!(other instanceof DecorationSet) ||
      this.local.length != other.local.length ||
      this.children.length != other.children.length) { return false }
  for (var i = 0; i < this.local.length; i++)
    { if (!this.local[i].eq(other.local[i])) { return false } }
  for (var i$1 = 0; i$1 < this.children.length; i$1 += 3)
    { if (this.children[i$1] != other.children[i$1] ||
        this.children[i$1 + 1] != other.children[i$1 + 1] ||
        !this.children[i$1 + 2].eq(other.children[i$1 + 2])) { return false } }
  return true
};

DecorationSet.prototype.locals = function locals (node) {
  return removeOverlap(this.localsInner(node))
};

DecorationSet.prototype.localsInner = function localsInner (node) {
  if (this == empty) { return none }
  if (node.inlineContent || !this.local.some(InlineType.is)) { return this.local }
  var result = [];
  for (var i = 0; i < this.local.length; i++) {
    if (!(this.local[i].type instanceof InlineType))
      { result.push(this.local[i]); }
  }
  return result
};

var empty = new DecorationSet();

// :: DecorationSet
// The empty set of decorations.
DecorationSet.empty = empty;

DecorationSet.removeOverlap = removeOverlap;

// :- An abstraction that allows the code dealing with decorations to
// treat multiple DecorationSet objects as if it were a single object
// with (a subset of) the same interface.
var DecorationGroup = function DecorationGroup(members) {
  this.members = members;
};

DecorationGroup.prototype.forChild = function forChild (offset, child) {
  if (child.isLeaf) { return DecorationSet.empty }
  var found = [];
  for (var i = 0; i < this.members.length; i++) {
    var result = this.members[i].forChild(offset, child);
    if (result == empty) { continue }
    if (result instanceof DecorationGroup) { found = found.concat(result.members); }
    else { found.push(result); }
  }
  return DecorationGroup.from(found)
};

DecorationGroup.prototype.eq = function eq (other) {
  if (!(other instanceof DecorationGroup) ||
      other.members.length != this.members.length) { return false }
  for (var i = 0; i < this.members.length; i++)
    { if (!this.members[i].eq(other.members[i])) { return false } }
  return true
};

DecorationGroup.prototype.locals = function locals (node) {
  var result, sorted = true;
  for (var i = 0; i < this.members.length; i++) {
    var locals = this.members[i].localsInner(node);
    if (!locals.length) { continue }
    if (!result) {
      result = locals;
    } else {
      if (sorted) {
        result = result.slice();
        sorted = false;
      }
      for (var j = 0; j < locals.length; j++) { result.push(locals[j]); }
    }
  }
  return result ? removeOverlap(sorted ? result : result.sort(byPos)) : none
};

// : ([DecorationSet]) → union<DecorationSet, DecorationGroup>
// Create a group for the given array of decoration sets, or return
// a single set when possible.
DecorationGroup.from = function from (members) {
  switch (members.length) {
    case 0: return empty
    case 1: return members[0]
    default: return new DecorationGroup(members)
  }
};

function mapChildren(oldChildren, newLocal, mapping, node, offset, oldOffset, options) {
  var children = oldChildren.slice();

  // Mark the children that are directly touched by changes, and
  // move those that are after the changes.
  var shift = function (oldStart, oldEnd, newStart, newEnd) {
    for (var i = 0; i < children.length; i += 3) {
      var end = children[i + 1], dSize = (void 0);
      if (end == -1 || oldStart > end + oldOffset) { continue }
      if (oldEnd >= children[i] + oldOffset) {
        children[i + 1] = -1;
      } else if (dSize = (newEnd - newStart) - (oldEnd - oldStart) + (oldOffset - offset)) {
        children[i] += dSize;
        children[i + 1] += dSize;
      }
    }
  };
  for (var i = 0; i < mapping.maps.length; i++) { mapping.maps[i].forEach(shift); }

  // Find the child nodes that still correspond to a single node,
  // recursively call mapInner on them and update their positions.
  var mustRebuild = false;
  for (var i$1 = 0; i$1 < children.length; i$1 += 3) { if (children[i$1 + 1] == -1) { // Touched nodes
    var from = mapping.map(children[i$1] + oldOffset), fromLocal = from - offset;
    if (fromLocal < 0 || fromLocal >= node.content.size) {
      mustRebuild = true;
      continue
    }
    // Must read oldChildren because children was tagged with -1
    var to = mapping.map(oldChildren[i$1 + 1] + oldOffset, -1), toLocal = to - offset;
    var ref = node.content.findIndex(fromLocal);
    var index = ref.index;
    var childOffset = ref.offset;
    var childNode = node.maybeChild(index);
    if (childNode && childOffset == fromLocal && childOffset + childNode.nodeSize == toLocal) {
      var mapped = children[i$1 + 2].mapInner(mapping, childNode, from + 1, children[i$1] + oldOffset + 1, options);
      if (mapped != empty) {
        children[i$1] = fromLocal;
        children[i$1 + 1] = toLocal;
        children[i$1 + 2] = mapped;
      } else {
        children[i$1 + 1] = -2;
        mustRebuild = true;
      }
    } else {
      mustRebuild = true;
    }
  } }

  // Remaining children must be collected and rebuilt into the appropriate structure
  if (mustRebuild) {
    var decorations = mapAndGatherRemainingDecorations(children, oldChildren, newLocal || [], mapping,
                                                       offset, oldOffset, options);
    var built = buildTree(decorations, node, 0, options);
    newLocal = built.local;
    for (var i$2 = 0; i$2 < children.length; i$2 += 3) { if (children[i$2 + 1] < 0) {
      children.splice(i$2, 3);
      i$2 -= 3;
    } }
    for (var i$3 = 0, j = 0; i$3 < built.children.length; i$3 += 3) {
      var from$1 = built.children[i$3];
      while (j < children.length && children[j] < from$1) { j += 3; }
      children.splice(j, 0, built.children[i$3], built.children[i$3 + 1], built.children[i$3 + 2]);
    }
  }

  return new DecorationSet(newLocal && newLocal.sort(byPos), children)
}

function moveSpans(spans, offset) {
  if (!offset || !spans.length) { return spans }
  var result = [];
  for (var i = 0; i < spans.length; i++) {
    var span = spans[i];
    result.push(new Decoration(span.from + offset, span.to + offset, span.type));
  }
  return result
}

function mapAndGatherRemainingDecorations(children, oldChildren, decorations, mapping, offset, oldOffset, options) {
  // Gather all decorations from the remaining marked children
  function gather(set, oldOffset) {
    for (var i = 0; i < set.local.length; i++) {
      var mapped = set.local[i].map(mapping, offset, oldOffset);
      if (mapped) { decorations.push(mapped); }
      else if (options.onRemove) { options.onRemove(set.local[i].spec); }
    }
    for (var i$1 = 0; i$1 < set.children.length; i$1 += 3)
      { gather(set.children[i$1 + 2], set.children[i$1] + oldOffset + 1); }
  }
  for (var i = 0; i < children.length; i += 3) { if (children[i + 1] == -1)
    { gather(children[i + 2], oldChildren[i] + oldOffset + 1); } }

  return decorations
}

function takeSpansForNode(spans, node, offset) {
  if (node.isLeaf) { return null }
  var end = offset + node.nodeSize, found = null;
  for (var i = 0, span = (void 0); i < spans.length; i++) {
    if ((span = spans[i]) && span.from > offset && span.to < end) {
(found || (found = [])).push(span);
      spans[i] = null;
    }
  }
  return found
}

function withoutNulls(array) {
  var result = [];
  for (var i = 0; i < array.length; i++)
    { if (array[i] != null) { result.push(array[i]); } }
  return result
}

// : ([Decoration], Node, number) → DecorationSet
// Build up a tree that corresponds to a set of decorations. `offset`
// is a base offset that should be subtractet from the `from` and `to`
// positions in the spans (so that we don't have to allocate new spans
// for recursive calls).
function buildTree(spans, node, offset, options) {
  var children = [], hasNulls = false;
  node.forEach(function (childNode, localStart) {
    var found = takeSpansForNode(spans, childNode, localStart + offset);
    if (found) {
      hasNulls = true;
      var subtree = buildTree(found, childNode, offset + localStart + 1, options);
      if (subtree != empty)
        { children.push(localStart, localStart + childNode.nodeSize, subtree); }
    }
  });
  var locals = moveSpans(hasNulls ? withoutNulls(spans) : spans, -offset).sort(byPos);
  for (var i = 0; i < locals.length; i++) { if (!locals[i].type.valid(node, locals[i])) {
    if (options.onRemove) { options.onRemove(locals[i].spec); }
    locals.splice(i--, 1);
  } }
  return locals.length || children.length ? new DecorationSet(locals, children) : empty
}

// : (Decoration, Decoration) → number
// Used to sort decorations so that ones with a low start position
// come first, and within a set with the same start position, those
// with an smaller end position come first.
function byPos(a, b) {
  return a.from - b.from || a.to - b.to
}

// : ([Decoration]) → [Decoration]
// Scan a sorted array of decorations for partially overlapping spans,
// and split those so that only fully overlapping spans are left (to
// make subsequent rendering easier). Will return the input array if
// no partially overlapping spans are found (the common case).
function removeOverlap(spans) {
  var working = spans;
  for (var i = 0; i < working.length - 1; i++) {
    var span = working[i];
    if (span.from != span.to) { for (var j = i + 1; j < working.length; j++) {
      var next = working[j];
      if (next.from == span.from) {
        if (next.to != span.to) {
          if (working == spans) { working = spans.slice(); }
          // Followed by a partially overlapping larger span. Split that
          // span.
          working[j] = next.copy(next.from, span.to);
          insertAhead(working, j + 1, next.copy(span.to, next.to));
        }
        continue
      } else {
        if (next.from < span.to) {
          if (working == spans) { working = spans.slice(); }
          // The end of this one overlaps with a subsequent span. Split
          // this one.
          working[i] = span.copy(span.from, next.from);
          insertAhead(working, j, span.copy(next.from, span.to));
        }
        break
      }
    } }
  }
  return working
}

function insertAhead(array, i, deco) {
  while (i < array.length && byPos(deco, array[i]) > 0) { i++; }
  array.splice(i, 0, deco);
}

// : (EditorView) → union<DecorationSet, DecorationGroup>
// Get the decorations associated with the current props of a view.
function viewDecorations(view) {
  var found = [];
  view.someProp("decorations", function (f) {
    var result = f(view.state);
    if (result && result != empty) { found.push(result); }
  });
  if (view.cursorWrapper)
    { found.push(DecorationSet.create(view.state.doc, [view.cursorWrapper.deco])); }
  return DecorationGroup.from(found)
}

// ::- An editor view manages the DOM structure that represents an
// editable document. Its state and behavior are determined by its
// [props](#view.DirectEditorProps).
var EditorView = function EditorView(place, props) {
  this._props = props;
  // :: EditorState
  // The view's current [state](#state.EditorState).
  this.state = props.state;

  this.dispatch = this.dispatch.bind(this);

  this._root = null;
  this.focused = false;

  // :: dom.Element
  // An editable DOM node containing the document. (You probably
  // should not directly interfere with its content.)
  this.dom = (place && place.mount) || document.createElement("div");
  if (place) {
    if (place.appendChild) { place.appendChild(this.dom); }
    else if (place.apply) { place(this.dom); }
    else if (place.mount) { this.mounted = true; }
  }

  // :: bool
  // Indicates whether the editor is currently [editable](#view.EditorProps.editable).
  this.editable = getEditable(this);
  this.markCursor = null;
  this.cursorWrapper = null;
  updateCursorWrapper(this);
  this.nodeViews = buildNodeViews(this);
  this.docView = docViewDesc(this.state.doc, computeDocDeco(this), viewDecorations(this), this.dom, this);

  this.lastSelectedViewDesc = null;
  // :: ?{slice: Slice, move: bool}
  // When editor content is being dragged, this object contains
  // information about the dragged slice and whether it is being
  // copied or moved. At any other time, it is null.
  this.dragging = null;

  initInput(this);

  this.pluginViews = [];
  this.updatePluginViews();
};

var prototypeAccessors$2$1 = { props: { configurable: true },root: { configurable: true } };

// composing:: boolean
// Holds `true` when a
// [composition](https://developer.mozilla.org/en-US/docs/Mozilla/IME_handling_guide)
// is active.

// :: DirectEditorProps
// The view's current [props](#view.EditorProps).
prototypeAccessors$2$1.props.get = function () {
  if (this._props.state != this.state) {
    var prev = this._props;
    this._props = {};
    for (var name in prev) { this._props[name] = prev[name]; }
    this._props.state = this.state;
  }
  return this._props
};

// :: (DirectEditorProps)
// Update the view's props. Will immediately cause an update to
// the DOM.
EditorView.prototype.update = function update (props) {
  if (props.handleDOMEvents != this._props.handleDOMEvents) { ensureListeners(this); }
  this._props = props;
  this.updateStateInner(props.state, true);
};

// :: (DirectEditorProps)
// Update the view by updating existing props object with the object
// given as argument. Equivalent to `view.update(Object.assign({},
// view.props, props))`.
EditorView.prototype.setProps = function setProps (props) {
  var updated = {};
  for (var name in this._props) { updated[name] = this._props[name]; }
  updated.state = this.state;
  for (var name$1 in props) { updated[name$1] = props[name$1]; }
  this.update(updated);
};

// :: (EditorState)
// Update the editor's `state` prop, without touching any of the
// other props.
EditorView.prototype.updateState = function updateState (state) {
  this.updateStateInner(state, this.state.plugins != state.plugins);
};

EditorView.prototype.updateStateInner = function updateStateInner (state, reconfigured) {
    var this$1 = this;

  var prev = this.state, redraw = false;
  this.state = state;
  if (reconfigured) {
    var nodeViews = buildNodeViews(this);
    if (changedNodeViews(nodeViews, this.nodeViews)) {
      this.nodeViews = nodeViews;
      redraw = true;
    }
    ensureListeners(this);
  }

  this.editable = getEditable(this);
  updateCursorWrapper(this);
  var innerDeco = viewDecorations(this), outerDeco = computeDocDeco(this);

  var scroll = reconfigured ? "reset"
      : state.scrollToSelection > prev.scrollToSelection ? "to selection" : "preserve";
  var updateDoc = redraw || !this.docView.matchesNode(state.doc, outerDeco, innerDeco);
  var updateSel = updateDoc || !state.selection.eq(prev.selection);
  var oldScrollPos = scroll == "preserve" && updateSel && this.dom.style.overflowAnchor == null && storeScrollPos(this);

  if (updateSel) {
    this.domObserver.stop();
    var forceSelUpdate = false;
    if (updateDoc) {
      // Work around an issue in Chrome where changing the DOM
      // around the active selection puts it into a broken state
      // where the thing the user sees differs from the selection
      // reported by the Selection object (#710)
      var startSelContext = result.chrome && selectionContext(this.root);
      if (redraw || !this.docView.update(state.doc, outerDeco, innerDeco, this)) {
        this.docView.destroy();
        this.docView = docViewDesc(state.doc, outerDeco, innerDeco, this.dom, this);
      }
      if (startSelContext)
        { forceSelUpdate = !this.composing && needChromeSelectionForce(startSelContext, this.root); }
      // IE11 will sometimes _report_ the selection as being in the
      // right place but actually draw/use a different selection
      // after a deletion (#973).
      if (result.ie && result.ie_version <= 11 && !prev.selection.empty && state.selection.empty &&
          state.doc.content.size < prev.doc.content.size)
        { forceSelUpdate = true; }
    }
    // Work around for an issue where an update arriving right between
    // a DOM selection change and the "selectionchange" event for it
    // can cause a spurious DOM selection update, disrupting mouse
    // drag selection.
    if (forceSelUpdate ||
        !(this.mouseDown && this.domObserver.currentSelection.eq(this.root.getSelection()) && anchorInRightPlace(this))) {
      selectionToDOM(this, forceSelUpdate);
    } else {
      syncNodeSelection(this, state.selection);
      this.domObserver.setCurSelection();
    }
    this.domObserver.start();
  }

  this.updatePluginViews(prev);

  if (scroll == "reset") {
    this.dom.scrollTop = 0;
  } else if (scroll == "to selection") {
    var startDOM = this.root.getSelection().focusNode;
    if (this.someProp("handleScrollToSelection", function (f) { return f(this$1); }))
      ; // Handled
    else if (state.selection instanceof NodeSelection)
      { scrollRectIntoView(this, this.docView.domAfterPos(state.selection.from).getBoundingClientRect(), startDOM); }
    else
      { scrollRectIntoView(this, this.coordsAtPos(state.selection.head), startDOM); }
  } else if (oldScrollPos) {
    resetScrollPos(oldScrollPos);
  }
};

EditorView.prototype.destroyPluginViews = function destroyPluginViews () {
  var view;
  while (view = this.pluginViews.pop()) { if (view.destroy) { view.destroy(); } }
};

EditorView.prototype.updatePluginViews = function updatePluginViews (prevState) {
  if (!prevState || prevState.plugins != this.state.plugins) {
    this.destroyPluginViews();
    for (var i = 0; i < this.state.plugins.length; i++) {
      var plugin = this.state.plugins[i];
      if (plugin.spec.view) { this.pluginViews.push(plugin.spec.view(this)); }
    }
  } else {
    for (var i$1 = 0; i$1 < this.pluginViews.length; i$1++) {
      var pluginView = this.pluginViews[i$1];
      if (pluginView.update) { pluginView.update(this, prevState); }
    }
  }
};

// :: (string, ?(prop: *) → *) → *
// Goes over the values of a prop, first those provided directly,
// then those from plugins (in order), and calls `f` every time a
// non-undefined value is found. When `f` returns a truthy value,
// that is immediately returned. When `f` isn't provided, it is
// treated as the identity function (the prop value is returned
// directly).
EditorView.prototype.someProp = function someProp (propName, f) {
  var prop = this._props && this._props[propName], value;
  if (prop != null && (value = f ? f(prop) : prop)) { return value }
  var plugins = this.state.plugins;
  if (plugins) { for (var i = 0; i < plugins.length; i++) {
    var prop$1 = plugins[i].props[propName];
    if (prop$1 != null && (value = f ? f(prop$1) : prop$1)) { return value }
  } }
};

// :: () → bool
// Query whether the view has focus.
EditorView.prototype.hasFocus = function hasFocus () {
  return this.root.activeElement == this.dom
};

// :: ()
// Focus the editor.
EditorView.prototype.focus = function focus () {
  this.domObserver.stop();
  if (this.editable) { focusPreventScroll(this.dom); }
  selectionToDOM(this);
  this.domObserver.start();
};

// :: union<dom.Document, dom.DocumentFragment>
// Get the document root in which the editor exists. This will
// usually be the top-level `document`, but might be a [shadow
// DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
// root if the editor is inside one.
prototypeAccessors$2$1.root.get = function () {
  var cached = this._root;
  if (cached == null) { for (var search = this.dom.parentNode; search; search = search.parentNode) {
    if (search.nodeType == 9 || (search.nodeType == 11 && search.host))
      { return this._root = search }
  } }
  return cached || document
};

// :: ({left: number, top: number}) → ?{pos: number, inside: number}
// Given a pair of viewport coordinates, return the document
// position that corresponds to them. May return null if the given
// coordinates aren't inside of the editor. When an object is
// returned, its `pos` property is the position nearest to the
// coordinates, and its `inside` property holds the position of the
// inner node that the position falls inside of, or -1 if it is at
// the top level, not in any node.
EditorView.prototype.posAtCoords = function posAtCoords$1 (coords) {
  return posAtCoords(this, coords)
};

// :: (number) → {left: number, right: number, top: number, bottom: number}
// Returns the viewport rectangle at a given document position. `left`
// and `right` will be the same number, as this returns a flat
// cursor-ish rectangle.
EditorView.prototype.coordsAtPos = function coordsAtPos$1 (pos) {
  return coordsAtPos(this, pos)
};

// :: (number) → {node: dom.Node, offset: number}
// Find the DOM position that corresponds to the given document
// position. Note that you should **not** mutate the editor's
// internal DOM, only inspect it (and even that is usually not
// necessary).
EditorView.prototype.domAtPos = function domAtPos (pos) {
  return this.docView.domFromPos(pos)
};

// :: (number) → ?dom.Node
// Find the DOM node that represents the document node after the
// given position. May return `null` when the position doesn't point
// in front of a node or if the node is inside an opaque node view.
//
// This is intended to be able to call things like
// `getBoundingClientRect` on that DOM node. Do **not** mutate the
// editor DOM directly, or add styling this way, since that will be
// immediately overriden by the editor as it redraws the node.
EditorView.prototype.nodeDOM = function nodeDOM (pos) {
  var desc = this.docView.descAt(pos);
  return desc ? desc.nodeDOM : null
};

// :: (dom.Node, number, ?number) → number
// Find the document position that corresponds to a given DOM
// position. (Whenever possible, it is preferable to inspect the
// document structure directly, rather than poking around in the
// DOM, but sometimes—for example when interpreting an event
// target—you don't have a choice.)
//
// The `bias` parameter can be used to influence which side of a DOM
// node to use when the position is inside a leaf node.
EditorView.prototype.posAtDOM = function posAtDOM (node, offset, bias) {
    if ( bias === void 0 ) bias = -1;

  var pos = this.docView.posFromDOM(node, offset, bias);
  if (pos == null) { throw new RangeError("DOM position not inside the editor") }
  return pos
};

// :: (union<"up", "down", "left", "right", "forward", "backward">, ?EditorState) → bool
// Find out whether the selection is at the end of a textblock when
// moving in a given direction. When, for example, given `"left"`,
// it will return true if moving left from the current cursor
// position would leave that position's parent textblock. Will apply
// to the view's current state by default, but it is possible to
// pass a different state.
EditorView.prototype.endOfTextblock = function endOfTextblock$1 (dir, state) {
  return endOfTextblock(this, state || this.state, dir)
};

// :: ()
// Removes the editor from the DOM and destroys all [node
// views](#view.NodeView).
EditorView.prototype.destroy = function destroy () {
  if (!this.docView) { return }
  destroyInput(this);
  this.destroyPluginViews();
  if (this.mounted) {
    this.docView.update(this.state.doc, [], viewDecorations(this), this);
    this.dom.textContent = "";
  } else if (this.dom.parentNode) {
    this.dom.parentNode.removeChild(this.dom);
  }
  this.docView.destroy();
  this.docView = null;
};

// Used for testing.
EditorView.prototype.dispatchEvent = function dispatchEvent$1 (event) {
  return dispatchEvent(this, event)
};

// :: (Transaction)
// Dispatch a transaction. Will call
// [`dispatchTransaction`](#view.DirectEditorProps.dispatchTransaction)
// when given, and otherwise defaults to applying the transaction to
// the current state and calling
// [`updateState`](#view.EditorView.updateState) with the result.
// This method is bound to the view instance, so that it can be
// easily passed around.
EditorView.prototype.dispatch = function dispatch (tr) {
  var dispatchTransaction = this._props.dispatchTransaction;
  if (dispatchTransaction) { dispatchTransaction.call(this, tr); }
  else { this.updateState(this.state.apply(tr)); }
};

Object.defineProperties( EditorView.prototype, prototypeAccessors$2$1 );

function computeDocDeco(view) {
  var attrs = Object.create(null);
  attrs.class = "ProseMirror";
  attrs.contenteditable = String(view.editable);

  view.someProp("attributes", function (value) {
    if (typeof value == "function") { value = value(view.state); }
    if (value) { for (var attr in value) {
      if (attr == "class")
        { attrs.class += " " + value[attr]; }
      else if (!attrs[attr] && attr != "contenteditable" && attr != "nodeName")
        { attrs[attr] = String(value[attr]); }
    } }
  });

  return [Decoration.node(0, view.state.doc.content.size, attrs)]
}

function updateCursorWrapper(view) {
  var ref = view.state.selection;
  var $head = ref.$head;
  var $anchor = ref.$anchor;
  var visible = ref.visible;
  if (view.markCursor) {
    var dom = document.createElement("img");
    dom.setAttribute("mark-placeholder", "true");
    view.cursorWrapper = {dom: dom, deco: Decoration.widget($head.pos, dom, {raw: true, marks: view.markCursor})};
  } else if (visible || $head.pos != $anchor.pos) {
    view.cursorWrapper = null;
  } else {
    var dom$1;
    if (!view.cursorWrapper || view.cursorWrapper.dom.childNodes.length) {
      dom$1 = document.createElement("div");
      dom$1.style.position = "absolute";
      dom$1.style.left = "-100000px";
    } else if (view.cursorWrapper.deco.pos != $head.pos) {
      dom$1 = view.cursorWrapper.dom;
    }
    if (dom$1)
      { view.cursorWrapper = {dom: dom$1, deco: Decoration.widget($head.pos, dom$1, {raw: true})}; }
  }
}

function getEditable(view) {
  return !view.someProp("editable", function (value) { return value(view.state) === false; })
}

function selectionContext(root) {
  var ref = root.getSelection();
  var offset = ref.focusOffset;
  var node = ref.focusNode;
  if (!node || node.nodeType == 3) { return null }
  return [node, offset,
          node.nodeType == 1 ? node.childNodes[offset - 1] : null,
          node.nodeType == 1 ? node.childNodes[offset] : null]
}

function needChromeSelectionForce(context, root) {
  var newContext = selectionContext(root);
  if (!newContext || newContext[0].nodeType == 3) { return false }
  for (var i = 0; i < context.length; i++) { if (newContext[i] != context[i]) { return true } }
  return false
}

function buildNodeViews(view) {
  var result = {};
  view.someProp("nodeViews", function (obj) {
    for (var prop in obj) { if (!Object.prototype.hasOwnProperty.call(result, prop))
      { result[prop] = obj[prop]; } }
  });
  return result
}

function changedNodeViews(a, b) {
  var nA = 0, nB = 0;
  for (var prop in a) {
    if (a[prop] != b[prop]) { return true }
    nA++;
  }
  for (var _ in b) { nB++; }
  return nA != nB
}

// Because working with row and column-spanning cells is not quite
// trivial, this code builds up a descriptive structure for a given
// table node. The structures are cached with the (persistent) table
// nodes as key, so that they only have to be recomputed when the
// content of the table changes.
//
// This does mean that they have to store table-relative, not
// document-relative positions. So code that uses them will typically
// compute the start position of the table and offset positions passed
// to or gotten from this structure by that amount.

var readFromCache, addToCache;
// Prefer using a weak map to cache table maps. Fall back on a
// fixed-size cache if that's not supported.
if (typeof WeakMap != "undefined") {
  var cache$1 = new WeakMap;
  readFromCache = function (key) { return cache$1.get(key); };
  addToCache = function (key, value) {
    cache$1.set(key, value);
    return value
  };
} else {
  var cache$1$1 = [], cacheSize = 10, cachePos = 0;
  readFromCache = function (key) {
    for (var i = 0; i < cache$1$1.length; i += 2)
      { if (cache$1$1[i] == key) { return cache$1$1[i + 1] } }
  };
  addToCache = function (key, value) {
    if (cachePos == cacheSize) { cachePos = 0; }
    cache$1$1[cachePos++] = key;
    return cache$1$1[cachePos++] = value
  };
}

var Rect = function Rect(left, top, right, bottom) {
  this.left = left; this.top = top; this.right = right; this.bottom = bottom;
};

// ::- A table map describes the structore of a given table. To avoid
// recomputing them all the time, they are cached per table node. To
// be able to do that, positions saved in the map are relative to the
// start of the table, rather than the start of the document.
var TableMap = function TableMap(width, height, map, problems) {
  // :: number The width of the table
  this.width = width;
  // :: number The table's height
  this.height = height;
  // :: [number] A width * height array with the start position of
  // the cell covering that part of the table in each slot
  this.map = map;
  // An optional array of problems (cell overlap or non-rectangular
  // shape) for the table, used by the table normalizer.
  this.problems = problems;
};

// :: (number) → Rect
// Find the dimensions of the cell at the given position.
TableMap.prototype.findCell = function findCell (pos) {
  for (var i = 0; i < this.map.length; i++) {
    var curPos = this.map[i];
    if (curPos != pos) { continue }
    var left = i % this.width, top = (i / this.width) | 0;
    var right = left + 1, bottom = top + 1;
    for (var j = 1; right < this.width && this.map[i + j] == curPos; j++) { right++; }
    for (var j$1 = 1; bottom < this.height && this.map[i + (this.width * j$1)] == curPos; j$1++) { bottom++; }
    return new Rect(left, top, right, bottom)
  }
  throw new RangeError("No cell with offset " + pos + " found")
};

// :: (number) → number
// Find the left side of the cell at the given position.
TableMap.prototype.colCount = function colCount (pos) {
  for (var i = 0; i < this.map.length; i++)
    { if (this.map[i] == pos) { return i % this.width } }
  throw new RangeError("No cell with offset " + pos + " found")
};

// :: (number, string, number) → ?number
// Find the next cell in the given direction, starting from the cell
// at `pos`, if any.
TableMap.prototype.nextCell = function nextCell (pos, axis, dir) {
  var ref = this.findCell(pos);
    var left = ref.left;
    var right = ref.right;
    var top = ref.top;
    var bottom = ref.bottom;
  if (axis == "horiz") {
    if (dir < 0 ? left == 0 : right == this.width) { return null }
    return this.map[top * this.width + (dir < 0 ? left - 1 : right)]
  } else {
    if (dir < 0 ? top == 0 : bottom == this.height) { return null }
    return this.map[left + this.width * (dir < 0 ? top - 1 : bottom)]
  }
};

// :: (number, number) → Rect
// Get the rectangle spanning the two given cells.
TableMap.prototype.rectBetween = function rectBetween (a, b) {
  var ref = this.findCell(a);
    var leftA = ref.left;
    var rightA = ref.right;
    var topA = ref.top;
    var bottomA = ref.bottom;
  var ref$1 = this.findCell(b);
    var leftB = ref$1.left;
    var rightB = ref$1.right;
    var topB = ref$1.top;
    var bottomB = ref$1.bottom;
  return new Rect(Math.min(leftA, leftB), Math.min(topA, topB),
                  Math.max(rightA, rightB), Math.max(bottomA, bottomB))
};

// :: (Rect) → [number]
// Return the position of all cells that have the top left corner in
// the given rectangle.
TableMap.prototype.cellsInRect = function cellsInRect (rect) {
  var result = [], seen = {};
  for (var row = rect.top; row < rect.bottom; row++) {
    for (var col = rect.left; col < rect.right; col++) {
      var index = row * this.width + col, pos = this.map[index];
      if (seen[pos]) { continue }
      seen[pos] = true;
      if ((col != rect.left || !col || this.map[index - 1] != pos) &&
          (row != rect.top || !row || this.map[index - this.width] != pos))
        { result.push(pos); }
    }
  }
  return result
};

// :: (number, number, Node) → number
// Return the position at which the cell at the given row and column
// starts, or would start, if a cell started there.
TableMap.prototype.positionAt = function positionAt (row, col, table) {
  for (var i = 0, rowStart = 0;; i++) {
    var rowEnd = rowStart + table.child(i).nodeSize;
    if (i == row) {
      var index = col + row * this.width, rowEndIndex = (row + 1) * this.width;
      // Skip past cells from previous rows (via rowspan)
      while (index < rowEndIndex && this.map[index] < rowStart) { index++; }
      return index == rowEndIndex ? rowEnd - 1 : this.map[index]
    }
    rowStart = rowEnd;
  }
};

// :: (Node) → TableMap
// Find the table map for the given table node.
TableMap.get = function get (table) {
  return readFromCache(table) || addToCache(table, computeMap(table))
};

// Compute a table map.
function computeMap(table) {
  if (table.type.spec.tableRole != "table") { throw new RangeError("Not a table node: " + table.type.name) }
  var width = findWidth(table), height = table.childCount;
  var map = [], mapPos = 0, problems = null, colWidths = [];
  for (var i = 0, e = width * height; i < e; i++) { map[i] = 0; }

  for (var row = 0, pos = 0; row < height; row++) {
    var rowNode = table.child(row);
    pos++;
    for (var i$1 = 0;; i$1++) {
      while (mapPos < map.length && map[mapPos] != 0) { mapPos++; }
      if (i$1 == rowNode.childCount) { break }
      var cellNode = rowNode.child(i$1);
      var ref = cellNode.attrs;
      var colspan = ref.colspan;
      var rowspan = ref.rowspan;
      var colwidth = ref.colwidth;
      for (var h = 0; h < rowspan; h++) {
        if (h + row >= height) {
          (problems || (problems = [])).push({type: "overlong_rowspan", pos: pos, n: rowspan - h});
          break
        }
        var start = mapPos + (h * width);
        for (var w = 0; w < colspan; w++) {
          if (map[start + w] == 0)
            { map[start + w] = pos; }
          else
            { (problems || (problems = [])).push({type: "collision", row: row, pos: pos, n: colspan - w}); }
          var colW = colwidth && colwidth[w];
          if (colW) {
            var widthIndex = ((start + w) % width) * 2, prev = colWidths[widthIndex];
            if (prev == null || (prev != colW && colWidths[widthIndex + 1] == 1)) {
              colWidths[widthIndex] = colW;
              colWidths[widthIndex + 1] = 1;
            } else if (prev == colW) {
              colWidths[widthIndex + 1]++;
            }
          }
        }
      }
      mapPos += colspan;
      pos += cellNode.nodeSize;
    }
    var expectedPos = (row + 1) * width, missing = 0;
    while (mapPos < expectedPos) { if (map[mapPos++] == 0) { missing++; } }
    if (missing) { (problems || (problems = [])).push({type: "missing", row: row, n: missing}); }
    pos++;
  }

  var tableMap = new TableMap(width, height, map, problems), badWidths = false;

  // For columns that have defined widths, but whose widths disagree
  // between rows, fix up the cells whose width doesn't match the
  // computed one.
  for (var i$2 = 0; !badWidths && i$2 < colWidths.length; i$2 += 2)
    { if (colWidths[i$2] != null && colWidths[i$2 + 1] < height) { badWidths = true; } }
  if (badWidths) { findBadColWidths(tableMap, colWidths, table); }

  return tableMap
}

function findWidth(table) {
  var width = -1, hasRowSpan = false;
  for (var row = 0; row < table.childCount; row++) {
    var rowNode = table.child(row), rowWidth = 0;
    if (hasRowSpan) { for (var j = 0; j < row; j++) {
      var prevRow = table.child(j);
      for (var i = 0; i < prevRow.childCount; i++) {
        var cell = prevRow.child(i);
        if (j + cell.attrs.rowspan > row) { rowWidth += cell.attrs.colspan; }
      }
    } }
    for (var i$1 = 0; i$1 < rowNode.childCount; i$1++) {
      var cell$1 = rowNode.child(i$1);
      rowWidth += cell$1.attrs.colspan;
      if (cell$1.attrs.rowspan > 1) { hasRowSpan = true; }
    }
    if (width == -1)
      { width = rowWidth; }
    else if (width != rowWidth)
      { width = Math.max(width, rowWidth); }
  }
  return width
}

function findBadColWidths(map, colWidths, table) {
  if (!map.problems) { map.problems = []; }
  for (var i = 0, seen = {}; i < map.map.length; i++) {
    var pos = map.map[i];
    if (seen[pos]) { continue }
    seen[pos] = true;
    var node = table.nodeAt(pos), updated = null;
    for (var j = 0; j < node.attrs.colspan; j++) {
      var col = (i + j) % map.width, colWidth = colWidths[col * 2];
      if (colWidth != null && (!node.attrs.colwidth || node.attrs.colwidth[j] != colWidth))
        { (updated || (updated = freshColWidth(node.attrs)))[j] = colWidth; }
    }
    if (updated) { map.problems.unshift({type: "colwidth mismatch", pos: pos, colwidth: updated}); }
  }
}

function freshColWidth(attrs) {
  if (attrs.colwidth) { return attrs.colwidth.slice() }
  var result = [];
  for (var i = 0; i < attrs.colspan; i++) { result.push(0); }
  return result
}

// Various helper function for working with tables

var key$2 = new PluginKey("selectingCells");

function cellAround($pos) {
  for (var d = $pos.depth - 1; d > 0; d--)
    { if ($pos.node(d).type.spec.tableRole == "row") { return $pos.node(0).resolve($pos.before(d + 1)) } }
  return null
}

function cellWrapping($pos) {
  for (var d = $pos.depth; d > 0; d--) { // Sometimes the cell can be in the same depth.
    var role = $pos.node(d).type.spec.tableRole;
    if (role === "cell" || role === 'header_cell') { return $pos.node(d) }
  }
  return null
}

function isInTable(state) {
  var $head = state.selection.$head;
  for (var d = $head.depth; d > 0; d--) { if ($head.node(d).type.spec.tableRole == "row") { return true } }
  return false
}

function selectionCell(state) {
  var sel = state.selection;
  if (sel.$anchorCell) {
    return sel.$anchorCell.pos > sel.$headCell.pos ? sel.$anchorCell : sel.$headCell;
  } else if (sel.node && sel.node.type.spec.tableRole == "cell") {
    return sel.$anchor
  }
  return cellAround(sel.$head) || cellNear(sel.$head)
}

function cellNear($pos) {
  for (var after = $pos.nodeAfter, pos = $pos.pos; after; after = after.firstChild, pos++) {
    var role = after.type.spec.tableRole;
    if (role == "cell" || role == "header_cell") { return $pos.doc.resolve(pos) }
  }
  for (var before = $pos.nodeBefore, pos$1 = $pos.pos; before; before = before.lastChild, pos$1--) {
    var role$1 = before.type.spec.tableRole;
    if (role$1 == "cell" || role$1 == "header_cell") { return $pos.doc.resolve(pos$1 - before.nodeSize) }
  }
}

function pointsAtCell($pos) {
  return $pos.parent.type.spec.tableRole == "row" && $pos.nodeAfter
}

function moveCellForward($pos) {
  return $pos.node(0).resolve($pos.pos + $pos.nodeAfter.nodeSize)
}

function inSameTable($a, $b) {
  return $a.depth == $b.depth && $a.pos >= $b.start(-1) && $a.pos <= $b.end(-1)
}

function findCell($pos) {
  return TableMap.get($pos.node(-1)).findCell($pos.pos - $pos.start(-1))
}

function colCount($pos) {
  return TableMap.get($pos.node(-1)).colCount($pos.pos - $pos.start(-1))
}

function nextCell($pos, axis, dir) {
  var start = $pos.start(-1), map = TableMap.get($pos.node(-1));
  var moved = map.nextCell($pos.pos - start, axis, dir);
  return moved == null ? null : $pos.node(0).resolve(start + moved)
}

function setAttr(attrs, name, value) {
  var result = {};
  for (var prop in attrs) { result[prop] = attrs[prop]; }
  result[name] = value;
  return result
}

function rmColSpan(attrs, pos, n) {
  if ( n === void 0 ) n=1;

  var result = setAttr(attrs, "colspan", attrs.colspan - n);
  if (result.colwidth) {
    result.colwidth = result.colwidth.slice();
    result.colwidth.splice(pos, n);
    if (!result.colwidth.some(function (w) { return w > 0; })) { result.colwidth = null; }
  }
  return result
}

function addColSpan(attrs, pos, n) {
  if ( n === void 0 ) n=1;

  var result = setAttr(attrs, "colspan", attrs.colspan + n);
  if (result.colwidth) {
    result.colwidth = result.colwidth.slice();
    for (var i = 0; i < n; i++) { result.colwidth.splice(pos, 0, 0); }
  }
  return result
}

// This file defines a ProseMirror selection subclass that models

// ::- A [`Selection`](http://prosemirror.net/docs/ref/#state.Selection)
// subclass that represents a cell selection spanning part of a table.
// With the plugin enabled, these will be created when the user
// selects across cells, and will be drawn by giving selected cells a
// `selectedCell` CSS class.
var CellSelection = /*@__PURE__*/(function (Selection) {
  function CellSelection($anchorCell, $headCell) {
    if ( $headCell === void 0 ) $headCell = $anchorCell;

    var table = $anchorCell.node(-1), map = TableMap.get(table), start = $anchorCell.start(-1);
    var rect = map.rectBetween($anchorCell.pos - start, $headCell.pos - start);
    var doc = $anchorCell.node(0);
    var cells = map.cellsInRect(rect).filter(function (p) { return p != $headCell.pos - start; });
    // Make the head cell the first range, so that it counts as the
    // primary part of the selection
    cells.unshift($headCell.pos - start);
    var ranges = cells.map(function (pos) {
      var cell = table.nodeAt(pos), from = pos + start + 1;
      return new SelectionRange(doc.resolve(from), doc.resolve(from + cell.content.size))
    });
    Selection.call(this, ranges[0].$from, ranges[0].$to, ranges);
    // :: ResolvedPos
    // A resolved position pointing _in front of_ the anchor cell (the one
    // that doesn't move when extending the selection).
    this.$anchorCell = $anchorCell;
    // :: ResolvedPos
    // A resolved position pointing in front of the head cell (the one
    // moves when extending the selection).
    this.$headCell = $headCell;
  }

  if ( Selection ) CellSelection.__proto__ = Selection;
  CellSelection.prototype = Object.create( Selection && Selection.prototype );
  CellSelection.prototype.constructor = CellSelection;

  CellSelection.prototype.map = function map (doc, mapping) {
    var $anchorCell = doc.resolve(mapping.map(this.$anchorCell.pos));
    var $headCell = doc.resolve(mapping.map(this.$headCell.pos));
    if (pointsAtCell($anchorCell) && pointsAtCell($headCell) && inSameTable($anchorCell, $headCell)) {
      var tableChanged = this.$anchorCell.node(-1) != $anchorCell.node(-1);
      if (tableChanged && this.isRowSelection())
        { return CellSelection.rowSelection($anchorCell, $headCell) }
      else if (tableChanged && this.isColSelection())
        { return CellSelection.colSelection($anchorCell, $headCell) }
      else
        { return new CellSelection($anchorCell, $headCell) }
    }
    return TextSelection.between($anchorCell, $headCell)
  };

  // :: () → Slice
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  CellSelection.prototype.content = function content () {
    var table = this.$anchorCell.node(-1), map = TableMap.get(table), start = this.$anchorCell.start(-1);
    var rect = map.rectBetween(this.$anchorCell.pos - start, this.$headCell.pos - start);
    var seen = {}, rows = [];
    for (var row = rect.top; row < rect.bottom; row++) {
      var rowContent = [];
      for (var index = row * map.width + rect.left, col = rect.left; col < rect.right; col++, index++) {
        var pos = map.map[index];
        if (!seen[pos]) {
          seen[pos] = true;
          var cellRect = map.findCell(pos), cell = table.nodeAt(pos);
          var extraLeft = rect.left - cellRect.left, extraRight = cellRect.right - rect.right;
          if (extraLeft > 0 || extraRight > 0) {
            var attrs = cell.attrs;
            if (extraLeft > 0) { attrs = rmColSpan(attrs, 0, extraLeft); }
            if (extraRight > 0) { attrs = rmColSpan(attrs, attrs.colspan - extraRight, extraRight); }
            if (cellRect.left < rect.left) { cell = cell.type.createAndFill(attrs); }
            else { cell = cell.type.create(attrs, cell.content); }
          }
          if (cellRect.top < rect.top || cellRect.bottom > rect.bottom) {
            var attrs$1 = setAttr(cell.attrs, "rowspan", Math.min(cellRect.bottom, rect.bottom) - Math.max(cellRect.top, rect.top));
            if (cellRect.top < rect.top) { cell = cell.type.createAndFill(attrs$1); }
            else { cell = cell.type.create(attrs$1, cell.content); }
          }
          rowContent.push(cell);
        }
      }
      rows.push(table.child(row).copy(Fragment.from(rowContent)));
    }

    var fragment = this.isColSelection() && this.isRowSelection() ? table : rows;
    return new Slice(Fragment.from(fragment), 1, 1)
  };

  CellSelection.prototype.replace = function replace (tr, content) {
    if ( content === void 0 ) content = Slice.empty;

    var mapFrom = tr.steps.length, ranges = this.ranges;
    for (var i = 0; i < ranges.length; i++) {
      var ref = ranges[i];
      var $from = ref.$from;
      var $to = ref.$to;
      var mapping = tr.mapping.slice(mapFrom);
      tr.replace(mapping.map($from.pos), mapping.map($to.pos), i ? Slice.empty : content);
    }
    var sel = Selection.findFrom(tr.doc.resolve(tr.mapping.slice(mapFrom).map(this.to)), -1);
    if (sel) { tr.setSelection(sel); }
  };

  CellSelection.prototype.replaceWith = function replaceWith (tr, node) {
    this.replace(tr, new Slice(Fragment.from(node), 0, 0));
  };

  CellSelection.prototype.forEachCell = function forEachCell (f) {
    var table = this.$anchorCell.node(-1), map = TableMap.get(table), start = this.$anchorCell.start(-1);
    var cells = map.cellsInRect(map.rectBetween(this.$anchorCell.pos - start, this.$headCell.pos - start));
    for (var i = 0; i < cells.length; i++)
      { f(table.nodeAt(cells[i]), start + cells[i]); }
  };

  // :: () → bool
  // True if this selection goes all the way from the top to the
  // bottom of the table.
  CellSelection.prototype.isColSelection = function isColSelection () {
    var anchorTop = this.$anchorCell.index(-1), headTop = this.$headCell.index(-1);
    if (Math.min(anchorTop, headTop) > 0) { return false }
    var anchorBot = anchorTop + this.$anchorCell.nodeAfter.attrs.rowspan,
        headBot = headTop + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(anchorBot, headBot) == this.$headCell.node(-1).childCount
  };

  // :: (ResolvedPos, ?ResolvedPos) → CellSelection
  // Returns the smallest column selection that covers the given anchor
  // and head cell.
  CellSelection.colSelection = function colSelection ($anchorCell, $headCell) {
    if ( $headCell === void 0 ) $headCell = $anchorCell;

    var map = TableMap.get($anchorCell.node(-1)), start = $anchorCell.start(-1);
    var anchorRect = map.findCell($anchorCell.pos - start), headRect = map.findCell($headCell.pos - start);
    var doc = $anchorCell.node(0);
    if (anchorRect.top <= headRect.top) {
      if (anchorRect.top > 0)
        { $anchorCell = doc.resolve(start + map.map[anchorRect.left]); }
      if (headRect.bottom < map.height)
        { $headCell = doc.resolve(start + map.map[map.width * (map.height - 1) + headRect.right - 1]); }
    } else {
      if (headRect.top > 0)
        { $headCell = doc.resolve(start + map.map[headRect.left]); }
      if (anchorRect.bottom < map.height)
        { $anchorCell = doc.resolve(start + map.map[map.width * (map.height - 1) + anchorRect.right - 1]); }
    }
    return new CellSelection($anchorCell, $headCell)
  };

  // :: () → bool
  // True if this selection goes all the way from the left to the
  // right of the table.
  CellSelection.prototype.isRowSelection = function isRowSelection () {
    var map = TableMap.get(this.$anchorCell.node(-1)), start = this.$anchorCell.start(-1);
    var anchorLeft = map.colCount(this.$anchorCell.pos - start),
        headLeft = map.colCount(this.$headCell.pos - start);
    if (Math.min(anchorLeft, headLeft) > 0) { return false }
    var anchorRight = anchorLeft + this.$anchorCell.nodeAfter.attrs.colspan,
        headRight = headLeft + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(anchorRight, headRight) == map.width
  };

  CellSelection.prototype.eq = function eq (other) {
    return other instanceof CellSelection && other.$anchorCell.pos == this.$anchorCell.pos &&
      other.$headCell.pos == this.$headCell.pos
  };

  // :: (ResolvedPos, ?ResolvedPos) → CellSelection
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  CellSelection.rowSelection = function rowSelection ($anchorCell, $headCell) {
    if ( $headCell === void 0 ) $headCell = $anchorCell;

    var map = TableMap.get($anchorCell.node(-1)), start = $anchorCell.start(-1);
    var anchorRect = map.findCell($anchorCell.pos - start), headRect = map.findCell($headCell.pos - start);
    var doc = $anchorCell.node(0);
    if (anchorRect.left <= headRect.left) {
      if (anchorRect.left > 0)
        { $anchorCell = doc.resolve(start + map.map[anchorRect.top * map.width]); }
      if (headRect.right < map.width)
        { $headCell = doc.resolve(start + map.map[map.width * (headRect.top + 1) - 1]); }
    } else {
      if (headRect.left > 0)
        { $headCell = doc.resolve(start + map.map[headRect.top * map.width]); }
      if (anchorRect.right < map.width)
        { $anchorCell = doc.resolve(start + map.map[map.width * (anchorRect.top + 1) - 1]); }
    }
    return new CellSelection($anchorCell, $headCell)
  };

  CellSelection.prototype.toJSON = function toJSON () {
    return {type: "cell", anchor: this.$anchorCell.pos, head: this.$headCell.pos}
  };

  CellSelection.fromJSON = function fromJSON (doc, json) {
    return new CellSelection(doc.resolve(json.anchor), doc.resolve(json.head))
  };

  // :: (Node, number, ?number) → CellSelection
  CellSelection.create = function create (doc, anchorCell, headCell) {
    if ( headCell === void 0 ) headCell = anchorCell;

    return new CellSelection(doc.resolve(anchorCell), doc.resolve(headCell))
  };

  CellSelection.prototype.getBookmark = function getBookmark () { return new CellBookmark(this.$anchorCell.pos, this.$headCell.pos) };

  return CellSelection;
}(Selection));

CellSelection.prototype.visible = false;

Selection.jsonID("cell", CellSelection);

var CellBookmark = function CellBookmark(anchor, head) {
  this.anchor = anchor;
  this.head = head;
};
CellBookmark.prototype.map = function map (mapping) {
  return new CellBookmark(mapping.map(this.anchor), mapping.map(this.head))
};
CellBookmark.prototype.resolve = function resolve (doc) {
  var $anchorCell = doc.resolve(this.anchor), $headCell = doc.resolve(this.head);
  if ($anchorCell.parent.type.spec.tableRole == "row" &&
      $headCell.parent.type.spec.tableRole == "row" &&
      $anchorCell.index() < $anchorCell.parent.childCount &&
      $headCell.index() < $headCell.parent.childCount &&
      inSameTable($anchorCell, $headCell))
    { return new CellSelection($anchorCell, $headCell) }
  else
    { return Selection.near($headCell, 1) }
};

function drawCellSelection(state) {
  if (!(state.selection instanceof CellSelection)) { return null }
  var cells = [];
  state.selection.forEachCell(function (node, pos) {
    cells.push(Decoration.node(pos, pos + node.nodeSize, {class: "selectedCell"}));
  });
  return DecorationSet.create(state.doc, cells)
}

function isCellBoundarySelection(ref) {
  var $from = ref.$from;
  var $to = ref.$to;

  if ($from.pos == $to.pos || $from.pos < $from.pos - 6) { return false } // Cheap elimination
  var afterFrom = $from.pos, beforeTo = $to.pos, depth = $from.depth;
  for (; depth >= 0; depth--, afterFrom++)
    { if ($from.after(depth + 1) < $from.end(depth)) { break } }
  for (var d = $to.depth; d >= 0; d--, beforeTo--)
    { if ($to.before(d + 1) > $to.start(d)) { break } }
  return afterFrom == beforeTo && /row|table/.test($from.node(depth).type.spec.tableRole)
}

function isTextSelectionAcrossCells(ref) {
  var $from = ref.$from;
  var $to = ref.$to;

  var fromCellBoundaryNode;
  var toCellBoundaryNode;

  for (var i = $from.depth; i > 0; i--) {
    var node = $from.node(i);
    if (node.type.spec.tableRole === 'cell' || node.type.spec.tableRole === 'header_cell') {
      fromCellBoundaryNode = node;
      break;
    }
  }

  for (var i$1 = $to.depth; i$1 > 0; i$1--) {
    var node$1 = $to.node(i$1);
    if (node$1.type.spec.tableRole === 'cell' || node$1.type.spec.tableRole === 'header_cell') {
      toCellBoundaryNode = node$1;
      break;
    }
  }

  return fromCellBoundaryNode !== toCellBoundaryNode && $to.parentOffset === 0
}

function normalizeSelection(state, tr, allowTableNodeSelection) {
  var sel = (tr || state).selection, doc = (tr || state).doc, normalize, role;
  if (sel instanceof NodeSelection && (role = sel.node.type.spec.tableRole)) {
    if (role == "cell" || role == "header_cell") {
      normalize = CellSelection.create(doc, sel.from);
    } else if (role == "row") {
      var $cell = doc.resolve(sel.from + 1);
      normalize = CellSelection.rowSelection($cell, $cell);
    } else if (!allowTableNodeSelection) {
      var map = TableMap.get(sel.node), start = sel.from + 1;
      var lastCell = start + map.map[map.width * map.height - 1];
      normalize = CellSelection.create(doc, start + 1, lastCell);
    }
  } else if (sel instanceof TextSelection && isCellBoundarySelection(sel)) {
    normalize = TextSelection.create(doc, sel.from);
  } else if (sel instanceof TextSelection && isTextSelectionAcrossCells(sel)) {
    normalize = TextSelection.create(doc, sel.$from.start(), sel.$from.end());
  }
  if (normalize)
    { (tr || (tr = state.tr)).setSelection(normalize); }
  return tr
}

// Helper for creating a schema that supports tables.

function getCellAttrs(dom, extraAttrs) {
  var widthAttr = dom.getAttribute("data-colwidth");
  var widths = widthAttr && /^\d+(,\d+)*$/.test(widthAttr) ? widthAttr.split(",").map(function (s) { return Number(s); }) : null;
  var colspan = Number(dom.getAttribute("colspan") || 1);
  var result = {
    colspan: colspan,
    rowspan: Number(dom.getAttribute("rowspan") || 1),
    colwidth: widths && widths.length == colspan ? widths : null
  };
  for (var prop in extraAttrs) {
    var getter = extraAttrs[prop].getFromDOM;
    var value = getter && getter(dom);
    if (value != null) { result[prop] = value; }
  }
  return result
}

function setCellAttrs(node, extraAttrs) {
  var attrs = {};
  if (node.attrs.colspan != 1) { attrs.colspan = node.attrs.colspan; }
  if (node.attrs.rowspan != 1) { attrs.rowspan = node.attrs.rowspan; }
  if (node.attrs.colwidth)
    { attrs["data-colwidth"] = node.attrs.colwidth.join(","); }
  for (var prop in extraAttrs) {
    var setter = extraAttrs[prop].setDOMAttr;
    if (setter) { setter(node.attrs[prop], attrs); }
  }
  return attrs
}

// :: (Object) → Object
//
// This function creates a set of [node
// specs](http://prosemirror.net/docs/ref/#model.SchemaSpec.nodes) for
// `table`, `table_row`, and `table_cell` nodes types as used by this
// module. The result can then be added to the set of nodes when
// creating a a schema.
//
//   options::- The following options are understood:
//
//     tableGroup:: ?string
//     A group name (something like `"block"`) to add to the table
//     node type.
//
//     cellContent:: string
//     The content expression for table cells.
//
//     cellAttributes:: ?Object
//     Additional attributes to add to cells. Maps attribute names to
//     objects with the following properties:
//
//       default:: any
//       The attribute's default value.
//
//       getFromDOM:: ?(dom.Node) → any
//       A function to read the attribute's value from a DOM node.
//
//       setDOMAttr:: ?(value: any, attrs: Object)
//       A function to add the attribute's value to an attribute
//       object that's used to render the cell's DOM.
function tableNodes(options) {
  var extraAttrs = options.cellAttributes || {};
  var cellAttrs = {
    colspan: {default: 1},
    rowspan: {default: 1},
    colwidth: {default: null}
  };
  for (var prop in extraAttrs)
    { cellAttrs[prop] = {default: extraAttrs[prop].default}; }

  return {
    table: {
      content: "table_row+",
      tableRole: "table",
      isolating: true,
      group: options.tableGroup,
      parseDOM: [{tag: "table"}],
      toDOM: function toDOM() { return ["table", ["tbody", 0]] }
    },
    table_row: {
      content: "(table_cell | table_header)*",
      tableRole: "row",
      parseDOM: [{tag: "tr"}],
      toDOM: function toDOM() { return ["tr", 0] }
    },
    table_cell: {
      content: options.cellContent,
      attrs: cellAttrs,
      tableRole: "cell",
      isolating: true,
      parseDOM: [{tag: "td", getAttrs: function (dom) { return getCellAttrs(dom, extraAttrs); }}],
      toDOM: function toDOM(node) { return ["td", setCellAttrs(node, extraAttrs), 0] }
    },
    table_header: {
      content: options.cellContent,
      attrs: cellAttrs,
      tableRole: "header_cell",
      isolating: true,
      parseDOM: [{tag: "th", getAttrs: function (dom) { return getCellAttrs(dom, extraAttrs); }}],
      toDOM: function toDOM(node) { return ["th", setCellAttrs(node, extraAttrs), 0] }
    }
  }
}

function tableNodeTypes(schema) {
  var result = schema.cached.tableNodeTypes;
  if (!result) {
    result = schema.cached.tableNodeTypes = {};
    for (var name in schema.nodes) {
      var type = schema.nodes[name], role = type.spec.tableRole;
      if (role) { result[role] = type; }
    }
  }
  return result
}

// Utilities used for copy/paste handling.

// Utilities to help with copying and pasting table cells

// : (Slice) → ?{width: number, height: number, rows: [Fragment]}
// Get a rectangular area of cells from a slice, or null if the outer
// nodes of the slice aren't table cells or rows.
function pastedCells(slice) {
  if (!slice.size) { return null }
  var content = slice.content;
  var openStart = slice.openStart;
  var openEnd = slice.openEnd;
  while (content.childCount == 1 && (openStart > 0 && openEnd > 0 || content.firstChild.type.spec.tableRole == "table")) {
    openStart--;
    openEnd--;
    content = content.firstChild.content;
  }
  var first = content.firstChild, role = first.type.spec.tableRole;
  var schema = first.type.schema, rows = [];
  if (role == "row") {
    for (var i = 0; i < content.childCount; i++) {
      var cells = content.child(i).content;
      var left = i ? 0 : Math.max(0, openStart - 1);
      var right = i < content.childCount - 1 ? 0 : Math.max(0, openEnd - 1);
      if (left || right) { cells = fitSlice(tableNodeTypes(schema).row, new Slice(cells, left, right)).content; }
      rows.push(cells);
    }
  } else if (role == "cell" || role == "header_cell") {
    rows.push(openStart || openEnd ? fitSlice(tableNodeTypes(schema).row, new Slice(content, openStart, openEnd)).content : content);
  } else {
    return null
  }
  return ensureRectangular(schema, rows)
}

// : (Schema, [Fragment]) → {width: number, height: number, rows: [Fragment]}
// Compute the width and height of a set of cells, and make sure each
// row has the same number of cells.
function ensureRectangular(schema, rows) {
  var widths = [];
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    for (var j = row.childCount - 1; j >= 0; j--) {
      var ref = row.child(j).attrs;
      var rowspan = ref.rowspan;
      var colspan = ref.colspan;
      for (var r = i; r < i + rowspan; r++)
        { widths[r] = (widths[r] || 0) + colspan; }
    }
  }
  var width = 0;
  for (var r$1 = 0; r$1 < widths.length; r$1++) { width = Math.max(width, widths[r$1]); }
  for (var r$2 = 0; r$2 < widths.length; r$2++) {
    if (r$2 >= rows.length) { rows.push(Fragment.empty); }
    if (widths[r$2] < width) {
      var empty = tableNodeTypes(schema).cell.createAndFill(), cells = [];
      for (var i$1 = widths[r$2]; i$1 < width; i$1++) { cells.push(empty); }
      rows[r$2] = rows[r$2].append(Fragment.from(cells));
    }
  }
  return {height: rows.length, width: width, rows: rows}
}

function fitSlice(nodeType, slice) {
  var node = nodeType.createAndFill();
  var tr = new Transform(node).replace(0, node.content.size, slice);
  return tr.doc
}

// : ({width: number, height: number, rows: [Fragment]}, number, number) → {width: number, height: number, rows: [Fragment]}
// Clip or extend (repeat) the given set of cells to cover the given
// width and height. Will clip rowspan/colspan cells at the edges when
// they stick out.
function clipCells(ref, newWidth, newHeight) {
  var width = ref.width;
  var height = ref.height;
  var rows = ref.rows;

  if (width != newWidth) {
    var added = [], newRows = [];
    for (var row = 0; row < rows.length; row++) {
      var frag = rows[row], cells = [];
      for (var col = added[row] || 0, i = 0; col < newWidth; i++) {
        var cell = frag.child(i % frag.childCount);
        if (col + cell.attrs.colspan > newWidth)
          { cell = cell.type.create(rmColSpan(cell.attrs, cell.attrs.colspan, col + cell.attrs.colspan - newWidth), cell.content); }
        cells.push(cell);
        col += cell.attrs.colspan;
        for (var j = 1; j < cell.attrs.rowspan; j++)
          { added[row + j] = (added[row + j] || 0) + cell.attrs.colspan; }
      }
      newRows.push(Fragment.from(cells));
    }
    rows = newRows;
    width = newWidth;
  }

  if (height != newHeight) {
    var newRows$1 = [];
    for (var row$1 = 0, i$1 = 0; row$1 < newHeight; row$1++, i$1++) {
      var cells$1 = [], source = rows[i$1 % height];
      for (var j$1 = 0; j$1 < source.childCount; j$1++) {
        var cell$1 = source.child(j$1);
        if (row$1 + cell$1.attrs.rowspan > newHeight)
          { cell$1 = cell$1.type.create(setAttr(cell$1.attrs, "rowspan", newHeight - cell$1.attrs.rowspan), cell$1.content); }
        cells$1.push(cell$1);
      }
      newRows$1.push(Fragment.from(cells$1));
    }
    rows = newRows$1;
    height = newHeight;
  }

  return {width: width, height: height, rows: rows}
}

// Make sure a table has at least the given width and height. Return
// true if something was changed.
function growTable(tr, map, table, start, width, height, mapFrom) {
  var schema = tr.doc.type.schema, types = tableNodeTypes(schema), empty, emptyHead;
  if (width > map.width) {
    for (var row = 0, rowEnd = 0; row < map.height; row++) {
      var rowNode = table.child(row);
      rowEnd += rowNode.nodeSize;
      var cells = [], add = (void 0);
      if (rowNode.lastChild == null || rowNode.lastChild.type == types.cell)
        { add = empty || (empty = types.cell.createAndFill()); }
      else
        { add = emptyHead || (emptyHead = types.header_cell.createAndFill()); }
      for (var i = map.width; i < width; i++) { cells.push(add); }
      tr.insert(tr.mapping.slice(mapFrom).map(rowEnd - 1 + start), cells);
    }
  }
  if (height > map.height) {
    var cells$1 = [];
    for (var i$1 = 0, start$1 = (map.height - 1) * map.width; i$1 < Math.max(map.width, width); i$1++) {
      var header = i$1 >= map.width ? false :
          table.nodeAt(map.map[start$1 + i$1]).type == types.header_cell;
      cells$1.push(header
                 ? (emptyHead || (emptyHead = types.header_cell.createAndFill()))
                 : (empty || (empty = types.cell.createAndFill())));
    }

    var emptyRow = types.row.create(null, Fragment.from(cells$1)), rows = [];
    for (var i$2 = map.height; i$2 < height; i$2++) { rows.push(emptyRow); }
    tr.insert(tr.mapping.slice(mapFrom).map(start + table.nodeSize - 2), rows);
  }
  return !!(empty || emptyHead)
}

// Make sure the given line (left, top) to (right, top) doesn't cross
// any rowspan cells by splitting cells that cross it. Return true if
// something changed.
function isolateHorizontal(tr, map, table, start, left, right, top, mapFrom) {
  if (top == 0 || top == map.height) { return false }
  var found = false;
  for (var col = left; col < right; col++) {
    var index = top * map.width + col, pos = map.map[index];
    if (map.map[index - map.width] == pos) {
      found = true;
      var cell = table.nodeAt(pos);
      var ref = map.findCell(pos);
      var cellTop = ref.top;
      var cellLeft = ref.left;
      tr.setNodeMarkup(tr.mapping.slice(mapFrom).map(pos + start), null, setAttr(cell.attrs, "rowspan", top - cellTop));
      tr.insert(tr.mapping.slice(mapFrom).map(map.positionAt(top, cellLeft, table)),
                cell.type.createAndFill(setAttr(cell.attrs, "rowspan", (cellTop + cell.attrs.rowspan) - top)));
      col += cell.attrs.colspan - 1;
    }
  }
  return found
}

// Make sure the given line (left, top) to (left, bottom) doesn't
// cross any colspan cells by splitting cells that cross it. Return
// true if something changed.
function isolateVertical(tr, map, table, start, top, bottom, left, mapFrom) {
  if (left == 0 || left == map.width) { return false }
  var found = false;
  for (var row = top; row < bottom; row++) {
    var index = row * map.width + left, pos = map.map[index];
    if (map.map[index - 1] == pos) {
      found = true;
      var cell = table.nodeAt(pos), cellLeft = map.colCount(pos);
      var updatePos = tr.mapping.slice(mapFrom).map(pos + start);
      tr.setNodeMarkup(updatePos, null, rmColSpan(cell.attrs, left - cellLeft, cell.attrs.colspan - (left - cellLeft)));
      tr.insert(updatePos + cell.nodeSize, cell.type.createAndFill(rmColSpan(cell.attrs, 0, left - cellLeft)));
      row += cell.attrs.rowspan - 1;
    }
  }
  return found
}

// Insert the given set of cells (as returned by `pastedCells`) into a
// table, at the position pointed at by rect.
function insertCells(state, dispatch, tableStart, rect, cells) {
  var table = tableStart ? state.doc.nodeAt(tableStart - 1) : state.doc, map = TableMap.get(table);
  var top = rect.top;
  var left = rect.left;
  var right = left + cells.width, bottom = top + cells.height;
  var tr = state.tr, mapFrom = 0;
  function recomp() {
    table = tableStart ? tr.doc.nodeAt(tableStart - 1) : tr.doc;
    map = TableMap.get(table);
    mapFrom = tr.mapping.maps.length;
  }
  // Prepare the table to be large enough and not have any cells
  // crossing the boundaries of the rectangle that we want to
  // insert into. If anything about it changes, recompute the table
  // map so that subsequent operations can see the current shape.
  if (growTable(tr, map, table, tableStart, right, bottom, mapFrom)) { recomp(); }
  if (isolateHorizontal(tr, map, table, tableStart, left, right, top, mapFrom)) { recomp(); }
  if (isolateHorizontal(tr, map, table, tableStart, left, right, bottom, mapFrom)) { recomp(); }
  if (isolateVertical(tr, map, table, tableStart, top, bottom, left, mapFrom)) { recomp(); }
  if (isolateVertical(tr, map, table, tableStart, top, bottom, right, mapFrom)) { recomp(); }

  for (var row = top; row < bottom; row++) {
    var from = map.positionAt(row, left, table), to = map.positionAt(row, right, table);
    tr.replace(tr.mapping.slice(mapFrom).map(from + tableStart), tr.mapping.slice(mapFrom).map(to + tableStart),
               new Slice(cells.rows[row - top], 0, 0));
  }
  recomp();
  tr.setSelection(new CellSelection(tr.doc.resolve(tableStart + map.positionAt(top, left, table)),
                                    tr.doc.resolve(tableStart + map.positionAt(bottom - 1, right - 1, table))));
  dispatch(tr);
}

// This file defines a number of helpers for wiring up user input to

var handleKeyDown = keydownHandler({
  "ArrowLeft": arrow$1("horiz", -1),
  "ArrowRight": arrow$1("horiz", 1),
  "ArrowUp": arrow$1("vert", -1),
  "ArrowDown": arrow$1("vert", 1),

  "Shift-ArrowLeft": shiftArrow("horiz", -1),
  "Shift-ArrowRight": shiftArrow("horiz", 1),
  "Shift-ArrowUp": shiftArrow("vert", -1),
  "Shift-ArrowDown": shiftArrow("vert", 1),

  "Backspace": deleteCellSelection,
  "Mod-Backspace": deleteCellSelection,
  "Delete": deleteCellSelection,
  "Mod-Delete": deleteCellSelection
});

function maybeSetSelection(state, dispatch, selection) {
  if (selection.eq(state.selection)) { return false }
  if (dispatch) { dispatch(state.tr.setSelection(selection).scrollIntoView()); }
  return true
}

function arrow$1(axis, dir) {
  return function (state, dispatch, view) {
    var sel = state.selection;
    if (sel instanceof CellSelection) {
      return maybeSetSelection(state, dispatch, Selection.near(sel.$headCell, dir))
    }
    if (axis != "horiz" && !sel.empty) { return false }
    var end = atEndOfCell(view, axis, dir);
    if (end == null) { return false }
    if (axis == "horiz") {
      return maybeSetSelection(state, dispatch, Selection.near(state.doc.resolve(sel.head + dir), dir))
    } else {
      var $cell = state.doc.resolve(end), $next = nextCell($cell, axis, dir), newSel;
      if ($next) { newSel = Selection.near($next, 1); }
      else if (dir < 0) { newSel = Selection.near(state.doc.resolve($cell.before(-1)), -1); }
      else { newSel = Selection.near(state.doc.resolve($cell.after(-1)), 1); }
      return maybeSetSelection(state, dispatch, newSel)
    }
  }
}

function shiftArrow(axis, dir) {
  return function (state, dispatch, view) {
    var sel = state.selection;
    if (!(sel instanceof CellSelection)) {
      var end = atEndOfCell(view, axis, dir);
      if (end == null) { return false }
      sel = new CellSelection(state.doc.resolve(end));
    }
    var $head = nextCell(sel.$headCell, axis, dir);
    if (!$head) { return false }
    return maybeSetSelection(state, dispatch, new CellSelection(sel.$anchorCell, $head))
  }
}

function deleteCellSelection(state, dispatch) {
  var sel = state.selection;
  if (!(sel instanceof CellSelection)) { return false }
  if (dispatch) {
    var tr = state.tr, baseContent = tableNodeTypes(state.schema).cell.createAndFill().content;
    sel.forEachCell(function (cell, pos) {
      if (!cell.content.eq(baseContent))
        { tr.replace(tr.mapping.map(pos + 1), tr.mapping.map(pos + cell.nodeSize - 1),
                   new Slice(baseContent, 0, 0)); }
    });
    if (tr.docChanged) { dispatch(tr); }
  }
  return true
}

function handleTripleClick$1(view, pos) {
  var doc = view.state.doc, $cell = cellAround(doc.resolve(pos));
  if (!$cell) { return false }
  view.dispatch(view.state.tr.setSelection(new CellSelection($cell)));
  return true
}

function handlePaste(view, _, slice) {
  if (!isInTable(view.state)) { return false }
  var cells = pastedCells(slice), sel = view.state.selection;
  if (sel instanceof CellSelection) {
    if (!cells) { cells = {width: 1, height: 1, rows: [Fragment.from(fitSlice(tableNodeTypes(view.state.schema).cell, slice))]}; }
    var table = sel.$anchorCell.node(-1), start = sel.$anchorCell.start(-1);
    var rect = TableMap.get(table).rectBetween(sel.$anchorCell.pos - start, sel.$headCell.pos - start);
    cells = clipCells(cells, rect.right - rect.left, rect.bottom - rect.top);
    insertCells(view.state, view.dispatch, start, rect, cells);
    return true
  } else if (cells) {
    var $cell = selectionCell(view.state), start$1 = $cell.start(-1);
    insertCells(view.state, view.dispatch, start$1, TableMap.get($cell.node(-1)).findCell($cell.pos - start$1), cells);
    return true
  } else {
    return false
  }
}

function handleMouseDown(view, startEvent) {
  if (startEvent.ctrlKey || startEvent.metaKey) { return }

  var startDOMCell = domInCell(view, startEvent.target), $anchor;
  if (startEvent.shiftKey && (view.state.selection instanceof CellSelection)) {
    // Adding to an existing cell selection
    setCellSelection(view.state.selection.$anchorCell, startEvent);
    startEvent.preventDefault();
  } else if (startEvent.shiftKey && startDOMCell &&
             ($anchor = cellAround(view.state.selection.$anchor)) != null &&
             cellUnderMouse(view, startEvent).pos != $anchor.pos) {
    // Adding to a selection that starts in another cell (causing a
    // cell selection to be created).
    setCellSelection($anchor, startEvent);
    startEvent.preventDefault();
  } else if (!startDOMCell) {
    // Not in a cell, let the default behavior happen.
    return
  }

  // Create and dispatch a cell selection between the given anchor and
  // the position under the mouse.
  function setCellSelection($anchor, event) {
    var $head = cellUnderMouse(view, event);
    var starting = key$2.getState(view.state) == null;
    if (!$head || !inSameTable($anchor, $head)) {
      if (starting) { $head = $anchor; }
      else { return }
    }
    var selection = new CellSelection($anchor, $head);
    if (starting || !view.state.selection.eq(selection)) {
      var tr = view.state.tr.setSelection(selection);
      if (starting) { tr.setMeta(key$2, $anchor.pos); }
      view.dispatch(tr);
    }
  }

  // Stop listening to mouse motion events.
  function stop() {
    view.root.removeEventListener("mouseup", stop);
    view.root.removeEventListener("dragstart", stop);
    view.root.removeEventListener("mousemove", move);
    if (key$2.getState(view.state) != null) { view.dispatch(view.state.tr.setMeta(key$2, -1)); }
  }

  function move(event) {
    var anchor = key$2.getState(view.state), $anchor;
    if (anchor != null) {
      // Continuing an existing cross-cell selection
      $anchor = view.state.doc.resolve(anchor);
    } else if (domInCell(view, event.target) != startDOMCell) {
      // Moving out of the initial cell -- start a new cell selection
      $anchor = cellUnderMouse(view, startEvent);
      if (!$anchor) { return stop() }
    }
    if ($anchor) { setCellSelection($anchor, event); }
  }
  view.root.addEventListener("mouseup", stop);
  view.root.addEventListener("dragstart", stop);
  view.root.addEventListener("mousemove", move);
}

// Check whether the cursor is at the end of a cell (so that further
// motion would move out of the cell)
function atEndOfCell(view, axis, dir) {
  if (!(view.state.selection instanceof TextSelection)) { return null }
  var ref = view.state.selection;
  var $head = ref.$head;
  for (var d = $head.depth - 1; d >= 0; d--) {
    var parent = $head.node(d), index = dir < 0 ? $head.index(d) : $head.indexAfter(d);
    if (index != (dir < 0 ? 0 : parent.childCount)) { return null }
    if (parent.type.spec.tableRole == "cell" || parent.type.spec.tableRole == "header_cell") {
      var cellPos = $head.before(d);
      var dirStr = axis == "vert" ? (dir > 0 ? "down" : "up") : (dir > 0 ? "right" : "left");
      return view.endOfTextblock(dirStr) ? cellPos : null
    }
  }
  return null
}

function domInCell(view, dom) {
  for (; dom && dom != view.dom; dom = dom.parentNode)
    { if (dom.nodeName == "TD" || dom.nodeName == "TH") { return dom } }
}

function cellUnderMouse(view, event) {
  var mousePos = view.posAtCoords({left: event.clientX, top: event.clientY});
  if (!mousePos) { return null }
  return mousePos ? cellAround(view.state.doc.resolve(mousePos.pos)) : null
}

// This file defines helpers for normalizing tables, making sure no

var fixTablesKey = new PluginKey("fix-tables");

// Helper for iterating through the nodes in a document that changed
// compared to the given previous document. Useful for avoiding
// duplicate work on each transaction.
function changedDescendants(old, cur, offset, f) {
  var oldSize = old.childCount, curSize = cur.childCount;
  outer: for (var i = 0, j = 0; i < curSize; i++) {
    var child = cur.child(i);
    for (var scan = j, e = Math.min(oldSize, i + 3); scan < e; scan++) {
      if (old.child(scan) == child) {
        j = scan + 1;
        offset += child.nodeSize;
        continue outer
      }
    }
    f(child, offset);
    if (j < oldSize && old.child(j).sameMarkup(child))
      { changedDescendants(old.child(j), child, offset + 1, f); }
    else
      { child.nodesBetween(0, child.content.size, f, offset + 1); }
    offset += child.nodeSize;
  }
}

// :: (EditorState, ?EditorState) → ?Transaction
// Inspect all tables in the given state's document and return a
// transaction that fixes them, if necessary. If `oldState` was
// provided, that is assumed to hold a previous, known-good state,
// which will be used to avoid re-scanning unchanged parts of the
// document.
function fixTables(state, oldState) {
  var tr, check = function (node, pos) {
    if (node.type.spec.tableRole == "table") { tr = fixTable(state, node, pos, tr); }
  };
  if (!oldState) { state.doc.descendants(check); }
  else if (oldState.doc != state.doc) { changedDescendants(oldState.doc, state.doc, 0, check); }
  return tr
}

// : (EditorState, Node, number, ?Transaction) → ?Transaction
// Fix the given table, if necessary. Will append to the transaction
// it was given, if non-null, or create a new one if necessary.
function fixTable(state, table, tablePos, tr) {
  var map = TableMap.get(table);
  if (!map.problems) { return tr }
  if (!tr) { tr = state.tr; }

  // Track which rows we must add cells to, so that we can adjust that
  // when fixing collisions.
  var mustAdd = [];
  for (var i = 0; i < map.height; i++) { mustAdd.push(0); }
  for (var i$1 = 0; i$1 < map.problems.length; i$1++) {
    var prob = map.problems[i$1];
    if (prob.type == "collision") {
      var cell = table.nodeAt(prob.pos);
      for (var j = 0; j < cell.attrs.rowspan; j++) { mustAdd[prob.row + j] += prob.n; }
      tr.setNodeMarkup(tr.mapping.map(tablePos + 1 + prob.pos), null, rmColSpan(cell.attrs, cell.attrs.colspan - prob.n, prob.n));
    } else if (prob.type == "missing") {
      mustAdd[prob.row] += prob.n;
    } else if (prob.type == "overlong_rowspan") {
      var cell$1 = table.nodeAt(prob.pos);
      tr.setNodeMarkup(tr.mapping.map(tablePos + 1 + prob.pos), null, setAttr(cell$1.attrs, "rowspan", cell$1.attrs.rowspan - prob.n));
    } else if (prob.type == "colwidth mismatch") {
      var cell$2 = table.nodeAt(prob.pos);
      tr.setNodeMarkup(tr.mapping.map(tablePos + 1 + prob.pos), null, setAttr(cell$2.attrs, "colwidth", prob.colwidth));
    }
  }
  var first, last;
  for (var i$2 = 0; i$2 < mustAdd.length; i$2++) { if (mustAdd[i$2]) {
    if (first == null) { first = i$2; }
    last = i$2;
  } }
  // Add the necessary cells, using a heuristic for whether to add the
  // cells at the start or end of the rows (if it looks like a 'bite'
  // was taken out of the table, add cells at the start of the row
  // after the bite. Otherwise add them at the end).
  for (var i$3 = 0, pos = tablePos + 1; i$3 < map.height; i$3++) {
    var row = table.child(i$3);
    var end = pos + row.nodeSize;
    var add = mustAdd[i$3];
    if (add > 0) {
      var tableNodeType = 'cell';
      if (row.firstChild) {
        tableNodeType = row.firstChild.type.spec.tableRole;
      }
      var nodes = [];
      for (var j$1 = 0; j$1 < add; j$1++)
        { nodes.push(tableNodeTypes(state.schema)[tableNodeType].createAndFill()); }
      var side = (i$3 == 0 || first == i$3 - 1) && last == i$3 ? pos + 1 : end - 1;
      tr.insert(tr.mapping.map(side), nodes);
    }
    pos = end;
  }
  return tr.setMeta(fixTablesKey, { fixTables: true })
}

// This file defines a number of table-related commands.

// Helper to get the selected rectangle in a table, if any. Adds table
// map, table node, and table start offset to the object for
// convenience.
function selectedRect(state) {
  var sel = state.selection, $pos = selectionCell(state);
  var table = $pos.node(-1), tableStart = $pos.start(-1), map = TableMap.get(table);
  var rect;
  if (sel instanceof CellSelection)
    { rect = map.rectBetween(sel.$anchorCell.pos - tableStart, sel.$headCell.pos - tableStart); }
  else
    { rect = map.findCell($pos.pos - tableStart); }
  rect.tableStart = tableStart;
  rect.map = map;
  rect.table = table;
  return rect
}

function columnIsHeader(map, table, col) {
  var headerCell = tableNodeTypes(table.type.schema).header_cell;
  for (var row = 0; row < map.height; row++)
    { if (table.nodeAt(map.map[col + row * map.width]).type != headerCell)
      { return false } }
  return true
}

// Add a column at the given position in a table.
function addColumn(tr, ref, col) {
  var map = ref.map;
  var tableStart = ref.tableStart;
  var table = ref.table;

  var refColumn = col > 0 ? -1 : 0;
  if (columnIsHeader(map, table, col + refColumn))
    { refColumn = col == 0 || col == map.width ? null : 0; }

  for (var row = 0; row < map.height; row++) {
    var index = row * map.width + col;
    // If this position falls inside a col-spanning cell
    if (col > 0 && col < map.width && map.map[index - 1] == map.map[index]) {
      var pos = map.map[index], cell = table.nodeAt(pos);
      tr.setNodeMarkup(tr.mapping.map(tableStart + pos), null,
                       addColSpan(cell.attrs, col - map.colCount(pos)));
      // Skip ahead if rowspan > 1
      row += cell.attrs.rowspan - 1;
    } else {
      var type = refColumn == null ? tableNodeTypes(table.type.schema).cell
          : table.nodeAt(map.map[index + refColumn]).type;
      var pos$1 = map.positionAt(row, col, table);
      tr.insert(tr.mapping.map(tableStart + pos$1), type.createAndFill());
    }
  }
  return tr
}

// :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Command to add a column before the column with the selection.
function addColumnBefore(state, dispatch) {
  if (!isInTable(state)) { return false }
  if (dispatch) {
    var rect = selectedRect(state);
    dispatch(addColumn(state.tr, rect, rect.left));
  }
  return true
}

// :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Command to add a column after the column with the selection.
function addColumnAfter(state, dispatch) {
  if (!isInTable(state)) { return false }
  if (dispatch) {
    var rect = selectedRect(state);
    dispatch(addColumn(state.tr, rect, rect.right));
  }
  return true
}

function removeColumn(tr, ref, col) {
  var map = ref.map;
  var table = ref.table;
  var tableStart = ref.tableStart;

  var mapStart = tr.mapping.maps.length;
  for (var row = 0; row < map.height;) {
    var index = row * map.width + col, pos = map.map[index], cell = table.nodeAt(pos);
    // If this is part of a col-spanning cell
    if ((col > 0 && map.map[index - 1] == pos) || (col < map.width - 1 && map.map[index + 1] == pos)) {
      tr.setNodeMarkup(tr.mapping.slice(mapStart).map(tableStart + pos), null,
                       rmColSpan(cell.attrs, col - map.colCount(pos)));
    } else {
      var start = tr.mapping.slice(mapStart).map(tableStart + pos);
      tr.delete(start, start + cell.nodeSize);
    }
    row += cell.attrs.rowspan;
  }
}

// :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Command function that removes the selected columns from a table.
function deleteColumn(state, dispatch) {
  if (!isInTable(state)) { return false }
  if (dispatch) {
    var rect = selectedRect(state), tr = state.tr;
    if (rect.left == 0 && rect.right == rect.map.width) { return false }
    for (var i = rect.right - 1;; i--) {
      removeColumn(tr, rect, i);
      if (i == rect.left) { break }
      rect.table = rect.tableStart ? tr.doc.nodeAt(rect.tableStart - 1) : tr.doc;
      rect.map = TableMap.get(rect.table);
    }
    dispatch(tr);
  }
  return true
}

function rowIsHeader(map, table, row) {
  var headerCell = tableNodeTypes(table.type.schema).header_cell;
  for (var col = 0; col < map.width; col++)
    { if (table.nodeAt(map.map[col + row * map.width]).type != headerCell)
      { return false } }
  return true
}

function addRow(tr, ref, row) {
  var map = ref.map;
  var tableStart = ref.tableStart;
  var table = ref.table;

  var rowPos = tableStart;
  for (var i = 0; i < row; i++) { rowPos += table.child(i).nodeSize; }
  var cells = [], refRow = row > 0 ? -1 : 0;
  if (rowIsHeader(map, table, row + refRow))
    { refRow = row == 0 || row == map.height ? null : 0; }
  for (var col = 0, index = map.width * row; col < map.width; col++, index++) {
    // Covered by a rowspan cell
    if (row > 0 && row < map.height && map.map[index] == map.map[index - map.width]) {
      var pos = map.map[index], attrs = table.nodeAt(pos).attrs;
      tr.setNodeMarkup(tableStart + pos, null, setAttr(attrs, "rowspan", attrs.rowspan + 1));
      col += attrs.colspan - 1;
    } else {
      var type = refRow == null ? tableNodeTypes(table.type.schema).cell
          : table.nodeAt(map.map[index + refRow * map.width]).type;
      cells.push(type.createAndFill());
    }
  }
  tr.insert(rowPos, tableNodeTypes(table.type.schema).row.create(null, cells));
  return tr
}

// :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Add a table row before the selection.
function addRowBefore(state, dispatch) {
  if (!isInTable(state)) { return false }
  if (dispatch) {
    var rect = selectedRect(state);
    dispatch(addRow(state.tr, rect, rect.top));
  }
  return true
}

// :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Add a table row after the selection.
function addRowAfter(state, dispatch) {
  if (!isInTable(state)) { return false }
  if (dispatch) {
    var rect = selectedRect(state);
    dispatch(addRow(state.tr, rect, rect.bottom));
  }
  return true
}

function removeRow(tr, ref, row) {
  var map = ref.map;
  var table = ref.table;
  var tableStart = ref.tableStart;

  var rowPos = 0;
  for (var i = 0; i < row; i++) { rowPos += table.child(i).nodeSize; }
  var nextRow = rowPos + table.child(row).nodeSize;

  var mapFrom = tr.mapping.maps.length;
  tr.delete(rowPos + tableStart, nextRow + tableStart);

  for (var col = 0, index = row * map.width; col < map.width; col++, index++) {
    var pos = map.map[index];
    if (row > 0 && pos == map.map[index - map.width]) {
      // If this cell starts in the row above, simply reduce its rowspan
      var attrs = table.nodeAt(pos).attrs;
      tr.setNodeMarkup(tr.mapping.slice(mapFrom).map(pos + tableStart), null, setAttr(attrs, "rowspan", attrs.rowspan - 1));
      col += attrs.colspan - 1;
    } else if (row < map.width && pos == map.map[index + map.width]) {
      // Else, if it continues in the row below, it has to be moved down
      var cell = table.nodeAt(pos);
      var copy = cell.type.create(setAttr(cell.attrs, "rowspan", cell.attrs.rowspan - 1), cell.content);
      var newPos = map.positionAt(row + 1, col, table);
      tr.insert(tr.mapping.slice(mapFrom).map(tableStart + newPos), copy);
      col += cell.attrs.colspan - 1;
    }
  }
}

// :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Remove the selected rows from a table.
function deleteRow(state, dispatch) {
  if (!isInTable(state)) { return false }
  if (dispatch) {
    var rect = selectedRect(state), tr = state.tr;
    if (rect.top == 0 && rect.bottom == rect.map.height) { return false }
    for (var i = rect.bottom - 1;; i--) {
      removeRow(tr, rect, i);
      if (i == rect.top) { break }
      rect.table = rect.tableStart ? tr.doc.nodeAt(rect.tableStart - 1) : tr.doc;
      rect.map = TableMap.get(rect.table);
    }
    dispatch(tr);
  }
  return true
}

function isEmpty(cell) {
  var c = cell.content;
  return c.childCount == 1 && c.firstChild.isTextblock && c.firstChild.childCount == 0
}

function cellsOverlapRectangle(ref, rect) {
  var width = ref.width;
  var height = ref.height;
  var map = ref.map;

  var indexTop = rect.top * width + rect.left, indexLeft = indexTop;
  var indexBottom = (rect.bottom - 1) * width + rect.left, indexRight = indexTop + (rect.right - rect.left - 1);
  for (var i = rect.top; i < rect.bottom; i++) {
    if (rect.left > 0 && map[indexLeft] == map[indexLeft - 1] ||
        rect.right < width && map[indexRight] == map[indexRight + 1]) { return true }
    indexLeft += width; indexRight += width;
  }
  for (var i$1 = rect.left; i$1 < rect.right; i$1++) {
    if (rect.top > 0 && map[indexTop] == map[indexTop - width] ||
        rect.bottom < height && map[indexBottom] == map[indexBottom + width]) { return true }
    indexTop++; indexBottom++;
  }
  return false
}

// :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Merge the selected cells into a single cell. Only available when
// the selected cells' outline forms a rectangle.
function mergeCells(state, dispatch) {
  var sel = state.selection;
  if (!(sel instanceof CellSelection) || sel.$anchorCell.pos == sel.$headCell.pos) { return false }
  var rect = selectedRect(state);
  var map = rect.map;
  if (cellsOverlapRectangle(map, rect)) { return false }
  if (dispatch) {
    var tr = state.tr, seen = {}, content = Fragment.empty, mergedPos, mergedCell;
    for (var row = rect.top; row < rect.bottom; row++) {
      for (var col = rect.left; col < rect.right; col++) {
        var cellPos = map.map[row * map.width + col], cell = rect.table.nodeAt(cellPos);
        if (seen[cellPos]) { continue }
        seen[cellPos] = true;
        if (mergedPos == null) {
          mergedPos = cellPos;
          mergedCell = cell;
        } else {
          if (!isEmpty(cell)) { content = content.append(cell.content); }
          var mapped = tr.mapping.map(cellPos + rect.tableStart);
          tr.delete(mapped, mapped + cell.nodeSize);
        }
      }
    }
    tr.setNodeMarkup(mergedPos + rect.tableStart, null,
                     setAttr(addColSpan(mergedCell.attrs, mergedCell.attrs.colspan, (rect.right - rect.left) - mergedCell.attrs.colspan),
                             "rowspan", rect.bottom - rect.top));
    if (content.size) {
      var end = mergedPos + 1 + mergedCell.content.size;
      var start = isEmpty(mergedCell) ? mergedPos + 1 : end;
      tr.replaceWith(start + rect.tableStart, end + rect.tableStart, content);
    }
    tr.setSelection(new CellSelection(tr.doc.resolve(mergedPos + rect.tableStart)));
    dispatch(tr);
  }
  return true
}
// :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Split a selected cell, whose rowpan or colspan is greater than one,
// into smaller cells. Use the first cell type for the new cells.
function splitCell(state, dispatch) {
  var nodeTypes = tableNodeTypes(state.schema);
  return splitCellWithType(function (ref) {
    var node = ref.node;

    return nodeTypes[node.type.spec.tableRole]
  })(state, dispatch)
}

// :: (getCellType: ({ row: number, col: number, node: Node}) → NodeType) → (EditorState, dispatch: ?(tr: Transaction)) → bool
// Split a selected cell, whose rowpan or colspan is greater than one,
// into smaller cells with the cell type (th, td) returned by getType function.
function splitCellWithType(getCellType) {
  return function (state, dispatch) {
    var sel = state.selection;
    var cellNode, cellPos;
    if (!(sel instanceof CellSelection)) {
      cellNode = cellWrapping(sel.$from);
      if (!cellNode) { return false }
      cellPos = cellAround(sel.$from).pos;
    } else {
      if (sel.$anchorCell.pos != sel.$headCell.pos) { return false }
      cellNode = sel.$anchorCell.nodeAfter;
      cellPos = sel.$anchorCell.pos;
    }
    if (cellNode.attrs.colspan == 1 && cellNode.attrs.rowspan == 1) {return false}
    if (dispatch) {
      var baseAttrs = cellNode.attrs, attrs = [], colwidth = baseAttrs.colwidth;
      if (baseAttrs.rowspan > 1) { baseAttrs = setAttr(baseAttrs, "rowspan", 1); }
      if (baseAttrs.colspan > 1) { baseAttrs = setAttr(baseAttrs, "colspan", 1); }
      var rect = selectedRect(state), tr = state.tr;
      for (var i = 0; i < rect.right - rect.left; i++)
        { attrs.push(colwidth ? setAttr(baseAttrs, "colwidth", colwidth && colwidth[i] ? [colwidth[i]] : null) : baseAttrs); }
      var lastCell;
      for (var row = rect.top; row < rect.bottom; row++) {
        var pos = rect.map.positionAt(row, rect.left, rect.table);
        if (row == rect.top) { pos += cellNode.nodeSize; }
        for (var col = rect.left, i$1 = 0; col < rect.right; col++, i$1++) {
          if (col == rect.left && row == rect.top) { continue }
          tr.insert(lastCell = tr.mapping.map(pos + rect.tableStart, 1), getCellType({ node: cellNode, row: row, col: col}).createAndFill(attrs[i$1]));
        }
      }
      tr.setNodeMarkup(cellPos, getCellType({ node: cellNode, row: rect.top, col: rect.left}), attrs[0]);
      if (sel instanceof CellSelection)
        { tr.setSelection(new CellSelection(tr.doc.resolve(sel.$anchorCell.pos),
                                          lastCell && tr.doc.resolve(lastCell))); }
      dispatch(tr);
    }
    return true
  }
}

// :: (string, any) → (EditorState, dispatch: ?(tr: Transaction)) → bool
// Returns a command that sets the given attribute to the given value,
// and is only available when the currently selected cell doesn't
// already have that attribute set to that value.
function setCellAttr(name, value) {
  return function(state, dispatch) {
    if (!isInTable(state)) { return false }
    var $cell = selectionCell(state);
    if ($cell.nodeAfter.attrs[name] === value) { return false }
    if (dispatch) {
      var tr = state.tr;
      if (state.selection instanceof CellSelection)
        { state.selection.forEachCell(function (node, pos) {
          if (node.attrs[name] !== value)
            { tr.setNodeMarkup(pos, null, setAttr(node.attrs, name, value)); }
        }); }
      else
        { tr.setNodeMarkup($cell.pos, null, setAttr($cell.nodeAfter.attrs, name, value)); }
      dispatch(tr);
    }
    return true
  }
}

function deprecated_toggleHeader(type) {
  return function(state, dispatch) {
    if (!isInTable(state)) { return false }
    if (dispatch) {
      var types = tableNodeTypes(state.schema);
      var rect = selectedRect(state), tr = state.tr;
      var cells = rect.map.cellsInRect(type == "column" ? new Rect(rect.left, 0, rect.right, rect.map.height) :
                                       type == "row" ? new Rect(0, rect.top, rect.map.width, rect.bottom) : rect);
      var nodes = cells.map(function (pos) { return rect.table.nodeAt(pos); });
      for (var i = 0; i < cells.length; i++) // Remove headers, if any
        { if (nodes[i].type == types.header_cell)
          { tr.setNodeMarkup(rect.tableStart + cells[i], types.cell, nodes[i].attrs); } }
      if (tr.steps.length == 0) { for (var i$1 = 0; i$1 < cells.length; i$1++) // No headers removed, add instead
        { tr.setNodeMarkup(rect.tableStart + cells[i$1], types.header_cell, nodes[i$1].attrs); } }
      dispatch(tr);
    }
    return true
  }
}

function isHeaderEnabledByType(type, rect, types) {
  // Get cell positions for first row or first column
  var cellPositions = rect.map.cellsInRect({
    left: 0,
    top: 0,
    right: type == "row" ? rect.map.width : 1,
    bottom: type == "column" ? rect.map.height : 1,
  });

  for (var i = 0; i < cellPositions.length; i++) {
    var cell = rect.table.nodeAt(cellPositions[i]);
    if (cell && cell.type !== types.header_cell) {
      return false
    }
  }

  return true
}

// :: (string, ?{ useDeprecatedLogic: bool }) → (EditorState, dispatch: ?(tr: Transaction)) → bool
// Toggles between row/column header and normal cells (Only applies to first row/column).
// For deprecated behavior pass `useDeprecatedLogic` in options with true.
function toggleHeader(type, options) {
  options = options || { useDeprecatedLogic: false };

  if (options.useDeprecatedLogic)
    { return deprecated_toggleHeader(type) }

  return function(state, dispatch) {
    if (!isInTable(state)) { return false }
    if (dispatch) {
      var types = tableNodeTypes(state.schema);
      var rect = selectedRect(state), tr = state.tr;

      var isHeaderRowEnabled = isHeaderEnabledByType("row", rect, types);
      var isHeaderColumnEnabled = isHeaderEnabledByType("column", rect, types);

      var isHeaderEnabled = type === "column" ? isHeaderRowEnabled :
                            type === "row"    ? isHeaderColumnEnabled : false;

      var selectionStartsAt = isHeaderEnabled ? 1 : 0;

      var cellsRect = type == "column" ? new Rect(0, selectionStartsAt, 1, rect.map.height) :
                      type == "row" ? new Rect(selectionStartsAt, 0, rect.map.width, 1) : rect;

      var newType = type == "column" ? isHeaderColumnEnabled ? types.cell : types.header_cell :
                    type == "row" ? isHeaderRowEnabled ? types.cell : types.header_cell : types.cell;

      rect.map.cellsInRect(cellsRect).forEach(function (relativeCellPos) {
        var cellPos = relativeCellPos + rect.tableStart;
        var cell = tr.doc.nodeAt(cellPos);

        if (cell) {
          tr.setNodeMarkup(cellPos, newType, cell.attrs);
        }
      });

      dispatch(tr);
    }
    return true
  }
}

// :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Toggles whether the selected row contains header cells.
var toggleHeaderRow = toggleHeader("row", { useDeprecatedLogic: true });

// :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Toggles whether the selected column contains header cells.
var toggleHeaderColumn = toggleHeader("column", { useDeprecatedLogic: true });

// :: (EditorState, dispatch: ?(tr: Transaction)) → bool
// Toggles whether the selected cells are header cells.
var toggleHeaderCell = toggleHeader("cell", { useDeprecatedLogic: true });

function findNextCell($cell, dir) {
  if (dir < 0) {
    var before = $cell.nodeBefore;
    if (before) { return $cell.pos - before.nodeSize }
    for (var row = $cell.index(-1) - 1, rowEnd = $cell.before(); row >= 0; row--) {
      var rowNode = $cell.node(-1).child(row);
      if (rowNode.childCount) { return rowEnd - 1 - rowNode.lastChild.nodeSize }
      rowEnd -= rowNode.nodeSize;
    }
  } else {
    if ($cell.index() < $cell.parent.childCount - 1) { return $cell.pos + $cell.nodeAfter.nodeSize }
    var table = $cell.node(-1);
    for (var row$1 = $cell.indexAfter(-1), rowStart = $cell.after(); row$1 < table.childCount; row$1++) {
      var rowNode$1 = table.child(row$1);
      if (rowNode$1.childCount) { return rowStart + 1 }
      rowStart += rowNode$1.nodeSize;
    }
  }
}

// :: (number) → (EditorState, dispatch: ?(tr: Transaction)) → bool
// Returns a command for selecting the next (direction=1) or previous
// (direction=-1) cell in a table.
function goToNextCell(direction) {
  return function(state, dispatch) {
    if (!isInTable(state)) { return false }
    var cell = findNextCell(selectionCell(state), direction);
    if (cell == null) { return }
    if (dispatch) {
      var $cell = state.doc.resolve(cell);
      dispatch(state.tr.setSelection(TextSelection.between($cell, moveCellForward($cell))).scrollIntoView());
    }
    return true
  }
}

// :: (EditorState, ?(tr: Transaction)) → bool
// Deletes the table around the selection, if any.
function deleteTable(state, dispatch) {
  var $pos = state.selection.$anchor;
  for (var d = $pos.depth; d > 0; d--) {
    var node = $pos.node(d);
    if (node.type.spec.tableRole == "table") {
      if (dispatch) { dispatch(state.tr.delete($pos.before(d), $pos.after(d)).scrollIntoView()); }
      return true
    }
  }
  return false
}

var TableView = function TableView(node, cellMinWidth) {
  this.node = node;
  this.cellMinWidth = cellMinWidth;
  this.dom = document.createElement("div");
  this.dom.className = "tableWrapper";
  this.table = this.dom.appendChild(document.createElement("table"));
  this.colgroup = this.table.appendChild(document.createElement("colgroup"));
  updateColumns(node, this.colgroup, this.table, cellMinWidth);
  this.contentDOM = this.table.appendChild(document.createElement("tbody"));
};

TableView.prototype.update = function update (node) {
  if (node.type != this.node.type) { return false }
  this.node = node;
  updateColumns(node, this.colgroup, this.table, this.cellMinWidth);
  return true
};

TableView.prototype.ignoreMutation = function ignoreMutation (record) {
  return record.type == "attributes" && (record.target == this.table || this.colgroup.contains(record.target))
};

function updateColumns(node, colgroup, table, cellMinWidth, overrideCol, overrideValue) {
  var totalWidth = 0, fixedWidth = true;
  var nextDOM = colgroup.firstChild, row = node.firstChild;
  for (var i = 0, col = 0; i < row.childCount; i++) {
    var ref = row.child(i).attrs;
    var colspan = ref.colspan;
    var colwidth = ref.colwidth;
    for (var j = 0; j < colspan; j++, col++) {
      var hasWidth = overrideCol == col ? overrideValue : colwidth && colwidth[j];
      var cssWidth = hasWidth ? hasWidth + "px" : "";
      totalWidth += hasWidth || cellMinWidth;
      if (!hasWidth) { fixedWidth = false; }
      if (!nextDOM) {
        colgroup.appendChild(document.createElement("col")).style.width = cssWidth;
      } else {
        if (nextDOM.style.width != cssWidth) { nextDOM.style.width = cssWidth; }
        nextDOM = nextDOM.nextSibling;
      }
    }
  }

  while (nextDOM) {
    var after = nextDOM.nextSibling;
    nextDOM.parentNode.removeChild(nextDOM);
    nextDOM = after;
  }

  if (fixedWidth) {
    table.style.width = totalWidth + "px";
    table.style.minWidth = "";
  } else {
    table.style.width = "";
    table.style.minWidth = totalWidth + "px";
  }
}

var key$1$1 = new PluginKey("tableColumnResizing");

function columnResizing(ref) {
  if ( ref === void 0 ) ref = {};
  var handleWidth = ref.handleWidth; if ( handleWidth === void 0 ) handleWidth = 5;
  var cellMinWidth = ref.cellMinWidth; if ( cellMinWidth === void 0 ) cellMinWidth = 25;
  var View = ref.View; if ( View === void 0 ) View = TableView;
  var lastColumnResizable = ref.lastColumnResizable; if ( lastColumnResizable === void 0 ) lastColumnResizable = true;

  var plugin = new Plugin({
    key: key$1$1,
    state: {
      init: function init(_, state) {
        this.spec.props.nodeViews[tableNodeTypes(state.schema).table.name] =
          function (node, view) { return new View(node, cellMinWidth, view); };
        return new ResizeState(-1, false)
      },
      apply: function apply(tr, prev) {
        return prev.apply(tr)
      }
    },
    props: {
      attributes: function attributes(state) {
        var pluginState = key$1$1.getState(state);
        return pluginState.activeHandle > -1 ? {class: "resize-cursor"} : null
      },

      handleDOMEvents: {
        mousemove: function mousemove(view, event) { handleMouseMove(view, event, handleWidth, cellMinWidth, lastColumnResizable); },
        mouseleave: function mouseleave(view) { handleMouseLeave(view); },
        mousedown: function mousedown(view, event) { handleMouseDown$1(view, event, cellMinWidth); }
      },

      decorations: function decorations(state) {
        var pluginState = key$1$1.getState(state);
        if (pluginState.activeHandle > -1) { return handleDecorations(state, pluginState.activeHandle) }
      },

      nodeViews: {}
    }
  });
  return plugin
}

var ResizeState = function ResizeState(activeHandle, dragging) {
  this.activeHandle = activeHandle;
  this.dragging = dragging;
};

ResizeState.prototype.apply = function apply (tr) {
  var state = this, action = tr.getMeta(key$1$1);
  if (action && action.setHandle != null)
    { return new ResizeState(action.setHandle, null) }
  if (action && action.setDragging !== undefined)
    { return new ResizeState(state.activeHandle, action.setDragging) }
  if (state.activeHandle > -1 && tr.docChanged) {
    var handle = tr.mapping.map(state.activeHandle, -1);
    if (!pointsAtCell(tr.doc.resolve(handle))) { handle = null; }
    state = new ResizeState(handle, state.dragging);
  }
  return state
};

function handleMouseMove(view, event, handleWidth, cellMinWidth, lastColumnResizable) {
  var pluginState = key$1$1.getState(view.state);

  if (!pluginState.dragging) {
    var target = domCellAround(event.target), cell = -1;
    if (target) {
      var ref = target.getBoundingClientRect();
      var left = ref.left;
      var right = ref.right;
      if (event.clientX - left <= handleWidth)
        { cell = edgeCell(view, event, "left"); }
      else if (right - event.clientX <= handleWidth)
        { cell = edgeCell(view, event, "right"); }
    }

    if (cell != pluginState.activeHandle) {
      if (!lastColumnResizable && cell !== -1) {
        var $cell = view.state.doc.resolve(cell);
        var table = $cell.node(-1), map = TableMap.get(table), start = $cell.start(-1);
        var col = map.colCount($cell.pos - start) + $cell.nodeAfter.attrs.colspan - 1;

        if (col == map.width - 1) {
          return
        }
      }

      updateHandle(view, cell);
    }
  }
}

function handleMouseLeave(view) {
  var pluginState = key$1$1.getState(view.state);
  if (pluginState.activeHandle > -1 && !pluginState.dragging) { updateHandle(view, -1); }
}

function handleMouseDown$1(view, event, cellMinWidth) {
  var pluginState = key$1$1.getState(view.state);
  if (pluginState.activeHandle == -1 || pluginState.dragging) { return false }

  var cell = view.state.doc.nodeAt(pluginState.activeHandle);
  var width = currentColWidth(view, pluginState.activeHandle, cell.attrs);
  view.dispatch(view.state.tr.setMeta(key$1$1, {setDragging: {startX: event.clientX, startWidth: width}}));

  function finish(event) {
    window.removeEventListener("mouseup", finish);
    window.removeEventListener("mousemove", move);
    var pluginState = key$1$1.getState(view.state);
    if (pluginState.dragging) {
      updateColumnWidth(view, pluginState.activeHandle, draggedWidth(pluginState.dragging, event, cellMinWidth));
      view.dispatch(view.state.tr.setMeta(key$1$1, {setDragging: null}));
    }
  }
  function move(event) {
    if (!event.which) { return finish(event) }
    var pluginState = key$1$1.getState(view.state);
    var dragged = draggedWidth(pluginState.dragging, event, cellMinWidth);
    displayColumnWidth(view, pluginState.activeHandle, dragged, cellMinWidth);
  }

  window.addEventListener("mouseup", finish);
  window.addEventListener("mousemove", move);
  event.preventDefault();
  return true
}

function currentColWidth(view, cellPos, ref) {
  var colspan = ref.colspan;
  var colwidth = ref.colwidth;

  var width = colwidth && colwidth[colwidth.length - 1];
  if (width) { return width }
  var dom = view.domAtPos(cellPos);
  var node = dom.node.childNodes[dom.offset];
  var domWidth = node.offsetWidth, parts = colspan;
  if (colwidth) { for (var i = 0; i < colspan; i++) { if (colwidth[i]) {
    domWidth -= colwidth[i];
    parts--;
  } } }
  return domWidth / parts
}

function domCellAround(target) {
  while (target && target.nodeName != "TD" && target.nodeName != "TH")
    { target = target.classList.contains("ProseMirror") ? null : target.parentNode; }
  return target
}

function edgeCell(view, event, side) {
  var ref = view.posAtCoords({left: event.clientX, top: event.clientY});
  var pos = ref.pos;
  var $cell = cellAround(view.state.doc.resolve(pos));
  if (!$cell) { return -1 }
  if (side == "right") { return $cell.pos }
  var map = TableMap.get($cell.node(-1)), start = $cell.start(-1);
  var index = map.map.indexOf($cell.pos - start);
  return index % map.width == 0 ? -1 : start + map.map[index - 1]
}

function draggedWidth(dragging, event, cellMinWidth) {
  var offset = event.clientX - dragging.startX;
  return Math.max(cellMinWidth, dragging.startWidth + offset)
}

function updateHandle(view, value) {
  view.dispatch(view.state.tr.setMeta(key$1$1, {setHandle: value}));
}

function updateColumnWidth(view, cell, width) {
  var $cell = view.state.doc.resolve(cell);
  var table = $cell.node(-1), map = TableMap.get(table), start = $cell.start(-1);
  var col = map.colCount($cell.pos - start) + $cell.nodeAfter.attrs.colspan - 1;
  var tr = view.state.tr;
  for (var row = 0; row < map.height; row++) {
    var mapIndex = row * map.width + col;
    // Rowspanning cell that has already been handled
    if (row && map.map[mapIndex] == map.map[mapIndex - map.width]) { continue }
    var pos = map.map[mapIndex];
    var ref = table.nodeAt(pos);
    var attrs = ref.attrs;
    var index = attrs.colspan == 1 ? 0 : col - map.colCount(pos);
    if (attrs.colwidth && attrs.colwidth[index] == width) { continue }
    var colwidth = attrs.colwidth ? attrs.colwidth.slice() : zeroes(attrs.colspan);
    colwidth[index] = width;
    tr.setNodeMarkup(start + pos, null, setAttr(attrs, "colwidth", colwidth));
  }
  if (tr.docChanged) { view.dispatch(tr); }
}

function displayColumnWidth(view, cell, width, cellMinWidth) {
  var $cell = view.state.doc.resolve(cell);
  var table = $cell.node(-1), start = $cell.start(-1);
  var col = TableMap.get(table).colCount($cell.pos - start) + $cell.nodeAfter.attrs.colspan - 1;
  var dom = view.domAtPos($cell.start(-1)).node;
  while (dom.nodeName != "TABLE") { dom = dom.parentNode; }
  updateColumns(table, dom.firstChild, dom, cellMinWidth, col, width);
}

function zeroes(n) {
  var result = [];
  for (var i = 0; i < n; i++) { result.push(0); }
  return result
}

function handleDecorations(state, cell) {
  var decorations = [];
  var $cell = state.doc.resolve(cell);
  var table = $cell.node(-1), map = TableMap.get(table), start = $cell.start(-1);
  var col = map.colCount($cell.pos - start) + $cell.nodeAfter.attrs.colspan;
  for (var row = 0; row < map.height; row++) {
    var index = col + row * map.width - 1;
    // For positions that are have either a different cell or the end
    // of the table to their right, and either the top of the table or
    // a different cell above them, add a decoration
    if ((col == map.width || map.map[index] != map.map[index + 1]) &&
        (row == 0 || map.map[index - 1] != map.map[index - 1 - map.width])) {
      var cellPos = map.map[index];
      var pos = start + cellPos + table.nodeAt(cellPos).nodeSize - 1;
      var dom = document.createElement("div");
      dom.className = "column-resize-handle";
      decorations.push(Decoration.widget(pos, dom));
    }
  }
  return DecorationSet.create(state.doc, decorations)
}

// This file defines a plugin that handles the drawing of cell

// :: () → Plugin
//
// Creates a [plugin](http://prosemirror.net/docs/ref/#state.Plugin)
// that, when added to an editor, enables cell-selection, handles
// cell-based copy/paste, and makes sure tables stay well-formed (each
// row has the same width, and cells don't overlap).
//
// You should probably put this plugin near the end of your array of
// plugins, since it handles mouse and arrow key events in tables
// rather broadly, and other plugins, like the gap cursor or the
// column-width dragging plugin, might want to get a turn first to
// perform more specific behavior.
function tableEditing(ref) {
  if ( ref === void 0 ) ref = {};
  var allowTableNodeSelection = ref.allowTableNodeSelection; if ( allowTableNodeSelection === void 0 ) allowTableNodeSelection = false;

  return new Plugin({
    key: key$2,

    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init: function init() { return null },
      apply: function apply(tr, cur) {
        var set = tr.getMeta(key$2);
        if (set != null) { return set == -1 ? null : set }
        if (cur == null || !tr.docChanged) { return cur }
        var ref = tr.mapping.mapResult(cur);
        var deleted = ref.deleted;
        var pos = ref.pos;
        return deleted ? null : pos
      }
    },

    props: {
      decorations: drawCellSelection,

      handleDOMEvents: {
        mousedown: handleMouseDown
      },

      createSelectionBetween: function createSelectionBetween(view) {
        if (key$2.getState(view.state) != null) { return view.state.selection }
      },

      handleTripleClick: handleTripleClick$1,

      handleKeyDown: handleKeyDown,

      handlePaste: handlePaste
    },

    appendTransaction: function appendTransaction(_, oldState, state) {
      return normalizeSelection(state, fixTables(state, oldState), allowTableNodeSelection)
    }
  })
}

var index_es$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CellSelection: CellSelection,
    TableMap: TableMap,
    __clipCells: clipCells,
    __insertCells: insertCells,
    __pastedCells: pastedCells,
    addColumn: addColumn,
    addColumnAfter: addColumnAfter,
    addColumnBefore: addColumnBefore,
    addRow: addRow,
    addRowAfter: addRowAfter,
    addRowBefore: addRowBefore,
    cellAround: cellAround,
    colCount: colCount,
    columnResizing: columnResizing,
    columnResizingPluginKey: key$1$1,
    deleteColumn: deleteColumn,
    deleteRow: deleteRow,
    deleteTable: deleteTable,
    findCell: findCell,
    fixTables: fixTables,
    fixTablesKey: fixTablesKey,
    goToNextCell: goToNextCell,
    handlePaste: handlePaste,
    inSameTable: inSameTable,
    isInTable: isInTable,
    mergeCells: mergeCells,
    moveCellForward: moveCellForward,
    nextCell: nextCell,
    removeColumn: removeColumn,
    removeRow: removeRow,
    rowIsHeader: rowIsHeader,
    selectedRect: selectedRect,
    selectionCell: selectionCell,
    setCellAttr: setCellAttr,
    splitCell: splitCell,
    splitCellWithType: splitCellWithType,
    tableEditing: tableEditing,
    tableEditingKey: key$2,
    tableNodes: tableNodes,
    toggleHeader: toggleHeader,
    toggleHeaderCell: toggleHeaderCell,
    toggleHeaderColumn: toggleHeaderColumn,
    toggleHeaderRow: toggleHeaderRow,
    updateColumnsOnResize: updateColumns
});

var prosemirrorModel = getCjsExportFromNamespace(index_es);

var prosemirrorTables = getCjsExportFromNamespace(index_es$2);

var dist = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });





// :: (nodeType: union<NodeType, [NodeType]>) → (tr: Transaction) → Transaction
// Returns a new transaction that removes a node of a given `nodeType`. It will return an original transaction if parent node hasn't been found.
//
// ```javascript
// dispatch(
//   removeParentNodeOfType(schema.nodes.table)(tr)
// );
// ```
var removeParentNodeOfType = function removeParentNodeOfType(nodeType) {
  return function (tr) {
    var parent = findParentNodeOfType(nodeType)(tr.selection);
    if (parent) {
      return removeNodeAtPos(parent.pos)(tr);
    }
    return tr;
  };
};

// :: (nodeType: union<NodeType, [NodeType]>, content: union<ProseMirrorNode, Fragment>) → (tr: Transaction) → Transaction
// Returns a new transaction that replaces parent node of a given `nodeType` with the given `content`. It will return an original transaction if either parent node hasn't been found or replacing is not possible.
//
// ```javascript
// const node = schema.nodes.paragraph.createChecked({}, schema.text('new'));
//
// dispatch(
//  replaceParentNodeOfType(schema.nodes.table, node)(tr)
// );
// ```
var replaceParentNodeOfType = function replaceParentNodeOfType(nodeType, content) {
  return function (tr) {
    if (!Array.isArray(nodeType)) {
      nodeType = [nodeType];
    }
    for (var i = 0, count = nodeType.length; i < count; i++) {
      var parent = findParentNodeOfType(nodeType[i])(tr.selection);
      if (parent) {
        var newTr = replaceNodeAtPos(parent.pos, content)(tr);
        if (newTr !== tr) {
          return newTr;
        }
      }
    }
    return tr;
  };
};

// :: (tr: Transaction) → Transaction
// Returns a new transaction that removes selected node. It will return an original transaction if current selection is not a `NodeSelection`.
//
// ```javascript
// dispatch(
//   removeSelectedNode(tr)
// );
// ```
var removeSelectedNode = function removeSelectedNode(tr) {
  if (isNodeSelection(tr.selection)) {
    var from = tr.selection.$from.pos;
    var to = tr.selection.$to.pos;
    return cloneTr(tr.delete(from, to));
  }
  return tr;
};

// :: (content: union<ProseMirrorNode, ProseMirrorFragment>) → (tr: Transaction) → Transaction
// Returns a new transaction that replaces selected node with a given `node`, keeping NodeSelection on the new `node`.
// It will return the original transaction if either current selection is not a NodeSelection or replacing is not possible.
//
// ```javascript
// const node = schema.nodes.paragraph.createChecked({}, schema.text('new'));
// dispatch(
//   replaceSelectedNode(node)(tr)
// );
// ```
var replaceSelectedNode = function replaceSelectedNode(content) {
  return function (tr) {
    if (isNodeSelection(tr.selection)) {
      var _tr$selection = tr.selection,
          $from = _tr$selection.$from,
          $to = _tr$selection.$to;

      if (content instanceof prosemirrorModel.Fragment && $from.parent.canReplace($from.index(), $from.indexAfter(), content) || $from.parent.canReplaceWith($from.index(), $from.indexAfter(), content.type)) {
        return cloneTr(tr.replaceWith($from.pos, $to.pos, content)
        // restore node selection
        .setSelection(new index_es$1.NodeSelection(tr.doc.resolve($from.pos))));
      }
    }
    return tr;
  };
};

// :: (position: number, dir: ?number) → (tr: Transaction) → Transaction
// Returns a new transaction that tries to find a valid cursor selection starting at the given `position`
// and searching back if `dir` is negative, and forward if positive.
// If a valid cursor position hasn't been found, it will return the original transaction.
//
// ```javascript
// dispatch(
//   setTextSelection(5)(tr)
// );
// ```
var setTextSelection = function setTextSelection(position) {
  var dir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return function (tr) {
    var nextSelection = index_es$1.Selection.findFrom(tr.doc.resolve(position), dir, true);
    if (nextSelection) {
      return tr.setSelection(nextSelection);
    }
    return tr;
  };
};

var isSelectableNode = function isSelectableNode(node) {
  return node.type && node.type.spec.selectable;
};
var shouldSelectNode = function shouldSelectNode(node) {
  return isSelectableNode(node) && node.type.isLeaf;
};

var setSelection = function setSelection(node, pos, tr) {
  if (shouldSelectNode(node)) {
    return tr.setSelection(new index_es$1.NodeSelection(tr.doc.resolve(pos)));
  }
  return setTextSelection(pos)(tr);
};

// :: (content: union<ProseMirrorNode, Fragment>, position: ?number, tryToReplace?: boolean) → (tr: Transaction) → Transaction
// Returns a new transaction that inserts a given `content` at the current cursor position, or at a given `position`, if it is allowed by schema. If schema restricts such nesting, it will try to find an appropriate place for a given node in the document, looping through parent nodes up until the root document node.
// If `tryToReplace` is true and current selection is a NodeSelection, it will replace selected node with inserted content if its allowed by schema.
// If cursor is inside of an empty paragraph, it will try to replace that paragraph with the given content. If insertion is successful and inserted node has content, it will set cursor inside of that content.
// It will return an original transaction if the place for insertion hasn't been found.
//
// ```javascript
// const node = schema.nodes.extension.createChecked({});
// dispatch(
//   safeInsert(node)(tr)
// );
// ```
var safeInsert = function safeInsert(content, position, tryToReplace) {
  return function (tr) {
    var hasPosition = typeof position === 'number';
    var $from = tr.selection.$from;

    var $insertPos = hasPosition ? tr.doc.resolve(position) : isNodeSelection(tr.selection) ? tr.doc.resolve($from.pos + 1) : $from;
    var parent = $insertPos.parent;

    // try to replace selected node

    if (isNodeSelection(tr.selection) && tryToReplace) {
      var oldTr = tr;
      tr = replaceSelectedNode(content)(tr);
      if (oldTr !== tr) {
        return tr;
      }
    }

    // try to replace an empty paragraph
    if (isEmptyParagraph(parent)) {
      var _oldTr = tr;
      tr = replaceParentNodeOfType(parent.type, content)(tr);
      if (_oldTr !== tr) {
        var pos = isSelectableNode(content) ? // for selectable node, selection position would be the position of the replaced parent
        $insertPos.before($insertPos.depth) : $insertPos.pos;
        return setSelection(content, pos, tr);
      }
    }

    // given node is allowed at the current cursor position
    if (canInsert($insertPos, content)) {
      tr.insert($insertPos.pos, content);
      var _pos = hasPosition ? $insertPos.pos : isSelectableNode(content) ? // for atom nodes selection position after insertion is the previous pos
      tr.selection.$anchor.pos - 1 : tr.selection.$anchor.pos;
      return cloneTr(setSelection(content, _pos, tr));
    }

    // looking for a place in the doc where the node is allowed
    for (var i = $insertPos.depth; i > 0; i--) {
      var _pos2 = $insertPos.after(i);
      var $pos = tr.doc.resolve(_pos2);
      if (canInsert($pos, content)) {
        tr.insert(_pos2, content);
        return cloneTr(setSelection(content, _pos2, tr));
      }
    }
    return tr;
  };
};

// :: (nodeType: union<NodeType, [NodeType]>, type: ?union<NodeType, null>, attrs: ?union<Object, null>, marks?: [Mark]) → (tr: Transaction) → Transaction
// Returns a transaction that changes the type, attributes, and/or marks of the parent node of a given `nodeType`.
//
// ```javascript
// const node = schema.nodes.extension.createChecked({});
// dispatch(
//   setParentNodeMarkup(schema.nodes.panel, null, { panelType })(tr);
// );
// ```
var setParentNodeMarkup = function setParentNodeMarkup(nodeType, type, attrs, marks) {
  return function (tr) {
    var parent = findParentNodeOfType(nodeType)(tr.selection);
    if (parent) {
      return cloneTr(tr.setNodeMarkup(parent.pos, type, Object.assign({}, parent.node.attrs, attrs), marks));
    }
    return tr;
  };
};

// :: (nodeType: union<NodeType, [NodeType]>) → (tr: Transaction) → Transaction
// Returns a new transaction that sets a `NodeSelection` on a parent node of a `given nodeType`.
//
// ```javascript
// dispatch(
//   selectParentNodeOfType([tableCell, tableHeader])(state.tr)
// );
// ```
var selectParentNodeOfType = function selectParentNodeOfType(nodeType) {
  return function (tr) {
    if (!isNodeSelection(tr.selection)) {
      var parent = findParentNodeOfType(nodeType)(tr.selection);
      if (parent) {
        return cloneTr(tr.setSelection(index_es$1.NodeSelection.create(tr.doc, parent.pos)));
      }
    }
    return tr;
  };
};

// :: (tr: Transaction) → Transaction
// Returns a new transaction that deletes previous node.
//
// ```javascript
// dispatch(
//   removeNodeBefore(state.tr)
// );
// ```
var removeNodeBefore = function removeNodeBefore(tr) {
  var position = findPositionOfNodeBefore(tr.selection);
  if (typeof position === 'number') {
    return removeNodeAtPos(position)(tr);
  }
  return tr;
};

// :: (selection: Selection) → boolean
// Checks if current selection is a `NodeSelection`.
//
// ```javascript
// if (isNodeSelection(tr.selection)) {
//   // ...
// }
// ```
var isNodeSelection = function isNodeSelection(selection) {
  return selection instanceof index_es$1.NodeSelection;
};

// (nodeType: union<NodeType, [NodeType]>) → boolean
// Checks if the type a given `node` equals to a given `nodeType`.
var equalNodeType = function equalNodeType(nodeType, node) {
  return Array.isArray(nodeType) && nodeType.indexOf(node.type) > -1 || node.type === nodeType;
};

// (tr: Transaction) → Transaction
// Creates a new transaction object from a given transaction
var cloneTr = function cloneTr(tr) {
  return Object.assign(Object.create(tr), tr).setTime(Date.now());
};

// (position: number, content: union<ProseMirrorNode, Fragment>) → (tr: Transaction) → Transaction
// Returns a `replace` transaction that replaces a node at a given position with the given `content`.
// It will return the original transaction if replacing is not possible.
// `position` should point at the position immediately before the node.
var replaceNodeAtPos = function replaceNodeAtPos(position, content) {
  return function (tr) {
    var node = tr.doc.nodeAt(position);
    var $pos = tr.doc.resolve(position);
    if (canReplace($pos, content)) {
      tr = tr.replaceWith(position, position + node.nodeSize, content);
      var start = tr.selection.$from.pos - 1;
      // put cursor inside of the inserted node
      tr = setTextSelection(Math.max(start, 0), -1)(tr);
      // move cursor to the start of the node
      tr = setTextSelection(tr.selection.$from.start())(tr);
      return cloneTr(tr);
    }
    return tr;
  };
};

// ($pos: ResolvedPos, doc: ProseMirrorNode, content: union<ProseMirrorNode, Fragment>, ) → boolean
// Checks if replacing a node at a given `$pos` inside of the `doc` node with the given `content` is possible.
var canReplace = function canReplace($pos, content) {
  var node = $pos.node($pos.depth);
  return node && node.type.validContent(content instanceof prosemirrorModel.Fragment ? content : prosemirrorModel.Fragment.from(content));
};

// (position: number) → (tr: Transaction) → Transaction
// Returns a `delete` transaction that removes a node at a given position with the given `node`.
// `position` should point at the position immediately before the node.
var removeNodeAtPos = function removeNodeAtPos(position) {
  return function (tr) {
    var node = tr.doc.nodeAt(position);
    return cloneTr(tr.delete(position, position + node.nodeSize));
  };
};

// (schema: Schema) → {[key: string]: NodeType}
// Returns a map where keys are tableRoles and values are NodeTypes.
var tableNodeTypes = function tableNodeTypes(schema) {
  if (schema.cached.tableNodeTypes) {
    return schema.cached.tableNodeTypes;
  }
  var roles = {};
  Object.keys(schema.nodes).forEach(function (type) {
    var nodeType = schema.nodes[type];
    if (nodeType.spec.tableRole) {
      roles[nodeType.spec.tableRole] = nodeType;
    }
  });
  schema.cached.tableNodeTypes = roles;
  return roles;
};

// :: ($pos: ResolvedPos, content: union<ProseMirrorNode, Fragment>) → boolean
// Checks if a given `content` can be inserted at the given `$pos`
//
// ```javascript
// const { selection: { $from } } = state;
// const node = state.schema.nodes.atom.createChecked();
// if (canInsert($from, node)) {
//   // ...
// }
// ```
var canInsert = function canInsert($pos, content) {
  var index = $pos.index();

  if (content instanceof prosemirrorModel.Fragment) {
    return $pos.parent.canReplace(index, index, content);
  } else if (content instanceof prosemirrorModel.Node) {
    return $pos.parent.canReplaceWith(index, index, content.type);
  }
  return false;
};

// (node: ProseMirrorNode) → boolean
// Checks if a given `node` is an empty paragraph
var isEmptyParagraph = function isEmptyParagraph(node) {
  return !node || node.type.name === 'paragraph' && node.nodeSize === 2;
};

// ($pos: ResolvedPos) → ?{pos: number, start: number, node: ProseMirrorNode}
// Iterates over parent nodes, returning a table node closest to a given `$pos`.
//
// ```javascript
// const table = findTableClosestToPos(state.doc.resolve(10));
// ```
var findTableClosestToPos = function findTableClosestToPos($pos) {
  var predicate = function predicate(node) {
    return node.type.spec.tableRole && /table/i.test(node.type.spec.tableRole);
  };
  return findParentNodeClosestToPos($pos, predicate);
};

var createCell = function createCell(cellType) {
  var cellContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (cellContent) {
    return cellType.createChecked(null, cellContent);
  }

  return cellType.createAndFill();
};

// (rect: {left: number, right: number, top: number, bottom: number}) → (selection: Selection) → boolean
// Checks if a given CellSelection rect is selected
var isRectSelected = function isRectSelected(rect) {
  return function (selection) {
    var map = prosemirrorTables.TableMap.get(selection.$anchorCell.node(-1));
    var start = selection.$anchorCell.start(-1);
    var cells = map.cellsInRect(rect);
    var selectedCells = map.cellsInRect(map.rectBetween(selection.$anchorCell.pos - start, selection.$headCell.pos - start));

    for (var i = 0, count = cells.length; i < count; i++) {
      if (selectedCells.indexOf(cells[i]) === -1) {
        return false;
      }
    }

    return true;
  };
};

// This function transposes an array of array flipping the columns for rows,
// transposition is a familiar algebra concept;
// you can get more details here:
// https://en.wikipedia.org/wiki/Transpose
//
// ```javascript
//
//  const arr = [
//    ['a1', 'a2', 'a3'],
//    ['b1', 'b2', 'b3'],
//    ['c1', 'c2', 'c3'],
//    ['d1', 'd2', 'd3'],
//  ];
//
//  const result = transpose(arr);
//
//  result === [
//    ['a1', 'b1', 'c1', 'd1'],
//    ['a2', 'b2', 'c2', 'd2'],
//    ['a3', 'b3', 'c3', 'd3'],
//  ]
// ```
var transpose = function transpose(array) {
  return array[0].map(function (_, i) {
    return array.map(function (column) {
      return column[i];
    });
  });
};

// :: (tableNode: Node) -> Array<Node>
// This function will transform the table node
// into a matrix of rows and columns respecting merged cells,
// for example this table will be convert to the below:
//
// ```
//  ____________________________
// |      |      |             |
// |  A1  |  B1  |     C1      |
// |______|______|______ ______|
// |      |             |      |
// |  A2  |     B2      |      |
// |______|______ ______|      |
// |      |      |      |  D1  |
// |  A3  |  B3  |  C2  |      |
// |______|______|______|______|
// ```
//
//
// ```javascript
// array = [
//   [A1, B1, C1, null],
//   [A2, B2, null, D1],
//   [A3. B3, C2, null],
// ]
// ```
var convertTableNodeToArrayOfRows = function convertTableNodeToArrayOfRows(tableNode) {
  var map = prosemirrorTables.TableMap.get(tableNode);
  var rows = [];
  for (var rowIndex = 0; rowIndex < map.height; rowIndex++) {
    var rowCells = [];
    var seen = {};

    for (var colIndex = 0; colIndex < map.width; colIndex++) {
      var cellPos = map.map[rowIndex * map.width + colIndex];
      var cell = tableNode.nodeAt(cellPos);
      var rect = map.findCell(cellPos);
      if (seen[cellPos] || rect.top !== rowIndex) {
        rowCells.push(null);
        continue;
      }
      seen[cellPos] = true;

      rowCells.push(cell);
    }

    rows.push(rowCells);
  }

  return rows;
};

// :: (tableNode: Node, tableArray: Array<Node>) -> Node
// This function will transform a matrix of nodes
// into table node respecting merged cells and rows configurations,
// for example this array will be convert to the table below:
//
// ```javascript
// array = [
//   [A1, B1, C1, null],
//   [A2, B2, null, D1],
//   [A3. B3, C2, null],
// ]
// ```
//
// ```
//  ____________________________
// |      |      |             |
// |  A1  |  B1  |     C1      |
// |______|______|______ ______|
// |      |             |      |
// |  A2  |     B2      |      |
// |______|______ ______|      |
// |      |      |      |  D1  |
// |  A3  |  B3  |  C2  |      |
// |______|______|______|______|
// ```
//
var convertArrayOfRowsToTableNode = function convertArrayOfRowsToTableNode(tableNode, arrayOfNodes) {
  var rowsPM = [];
  var map = prosemirrorTables.TableMap.get(tableNode);
  for (var rowIndex = 0; rowIndex < map.height; rowIndex++) {
    var row = tableNode.child(rowIndex);
    var rowCells = [];

    for (var colIndex = 0; colIndex < map.width; colIndex++) {
      if (!arrayOfNodes[rowIndex][colIndex]) {
        continue;
      }
      var cellPos = map.map[rowIndex * map.width + colIndex];

      var cell = arrayOfNodes[rowIndex][colIndex];
      var oldCell = tableNode.nodeAt(cellPos);
      var newCell = oldCell.type.createChecked(Object.assign({}, cell.attrs), cell.content, cell.marks);
      rowCells.push(newCell);
    }

    rowsPM.push(row.type.createChecked(row.attrs, rowCells, row.marks));
  }

  var newTable = tableNode.type.createChecked(tableNode.attrs, rowsPM, tableNode.marks);

  return newTable;
};

var moveTableColumn = function moveTableColumn(table, indexesOrigin, indexesTarget, direction) {
  var rows = transpose(convertTableNodeToArrayOfRows(table.node));

  rows = moveRowInArrayOfRows(rows, indexesOrigin, indexesTarget, direction);
  rows = transpose(rows);

  return convertArrayOfRowsToTableNode(table.node, rows);
};

var moveTableRow = function moveTableRow(table, indexesOrigin, indexesTarget, direction) {
  var rows = convertTableNodeToArrayOfRows(table.node);

  rows = moveRowInArrayOfRows(rows, indexesOrigin, indexesTarget, direction);

  return convertArrayOfRowsToTableNode(table.node, rows);
};

var moveRowInArrayOfRows = function moveRowInArrayOfRows(rows, indexesOrigin, indexesTarget, directionOverride) {
  var direction = indexesOrigin[0] > indexesTarget[0] ? -1 : 1;

  var rowsExtracted = rows.splice(indexesOrigin[0], indexesOrigin.length);
  var positionOffset = rowsExtracted.length % 2 === 0 ? 1 : 0;
  var target = void 0;

  if (directionOverride === -1 && direction === 1) {
    target = indexesTarget[0] - 1;
  } else if (directionOverride === 1 && direction === -1) {
    target = indexesTarget[indexesTarget.length - 1] - positionOffset + 1;
  } else {
    target = direction === -1 ? indexesTarget[0] : indexesTarget[indexesTarget.length - 1] - positionOffset;
  }

  rows.splice.apply(rows, [target, 0].concat(rowsExtracted));
  return rows;
};

var checkInvalidMovements = function checkInvalidMovements(originIndex, targetIndex, targets, type) {
  var direction = originIndex > targetIndex ? -1 : 1;
  var errorMessage = 'Target position is invalid, you can\'t move the ' + type + ' ' + originIndex + ' to ' + targetIndex + ', the target can\'t be split. You could use tryToFit option.';

  if (direction === 1) {
    if (targets.slice(0, targets.length - 1).indexOf(targetIndex) !== -1) {
      throw new Error(errorMessage);
    }
  } else {
    if (targets.slice(1).indexOf(targetIndex) !== -1) {
      throw new Error(errorMessage);
    }
  }

  return true;
};

// :: (predicate: (node: ProseMirrorNode) → boolean) → (selection: Selection) → ?{pos: number, start: number, depth: number, node: ProseMirrorNode}
// Iterates over parent nodes, returning the closest node and its start position `predicate` returns truthy for. `start` points to the start position of the node, `pos` points directly before the node.
//
// ```javascript
// const predicate = node => node.type === schema.nodes.blockquote;
// const parent = findParentNode(predicate)(selection);
// ```
var findParentNode = function findParentNode(predicate) {
  return function (_ref) {
    var $from = _ref.$from;
    return findParentNodeClosestToPos($from, predicate);
  };
};

// :: ($pos: ResolvedPos, predicate: (node: ProseMirrorNode) → boolean) → ?{pos: number, start: number, depth: number, node: ProseMirrorNode}
// Iterates over parent nodes starting from the given `$pos`, returning the closest node and its start position `predicate` returns truthy for. `start` points to the start position of the node, `pos` points directly before the node.
//
// ```javascript
// const predicate = node => node.type === schema.nodes.blockquote;
// const parent = findParentNodeClosestToPos(state.doc.resolve(5), predicate);
// ```
var findParentNodeClosestToPos = function findParentNodeClosestToPos($pos, predicate) {
  for (var i = $pos.depth; i > 0; i--) {
    var node = $pos.node(i);
    if (predicate(node)) {
      return {
        pos: i > 0 ? $pos.before(i) : 0,
        start: $pos.start(i),
        depth: i,
        node: node
      };
    }
  }
};

// :: (predicate: (node: ProseMirrorNode) → boolean, domAtPos: (pos: number) → {node: dom.Node, offset: number}) → (selection: Selection) → ?dom.Node
// Iterates over parent nodes, returning DOM reference of the closest node `predicate` returns truthy for.
//
// ```javascript
// const domAtPos = view.domAtPos.bind(view);
// const predicate = node => node.type === schema.nodes.table;
// const parent = findParentDomRef(predicate, domAtPos)(selection); // <table>
// ```
var findParentDomRef = function findParentDomRef(predicate, domAtPos) {
  return function (selection) {
    var parent = findParentNode(predicate)(selection);
    if (parent) {
      return findDomRefAtPos(parent.pos, domAtPos);
    }
  };
};

// :: (predicate: (node: ProseMirrorNode) → boolean) → (selection: Selection) → boolean
// Checks if there's a parent node `predicate` returns truthy for.
//
// ```javascript
// if (hasParentNode(node => node.type === schema.nodes.table)(selection)) {
//   // ....
// }
// ```
var hasParentNode = function hasParentNode(predicate) {
  return function (selection) {
    return !!findParentNode(predicate)(selection);
  };
};

// :: (nodeType: union<NodeType, [NodeType]>) → (selection: Selection) → ?{pos: number, start: number, depth: number, node: ProseMirrorNode}
// Iterates over parent nodes, returning closest node of a given `nodeType`. `start` points to the start position of the node, `pos` points directly before the node.
//
// ```javascript
// const parent = findParentNodeOfType(schema.nodes.paragraph)(selection);
// ```
var findParentNodeOfType = function findParentNodeOfType(nodeType) {
  return function (selection) {
    return findParentNode(function (node) {
      return equalNodeType(nodeType, node);
    })(selection);
  };
};

// :: ($pos: ResolvedPos, nodeType: union<NodeType, [NodeType]>) → ?{pos: number, start: number, depth: number, node: ProseMirrorNode}
// Iterates over parent nodes starting from the given `$pos`, returning closest node of a given `nodeType`. `start` points to the start position of the node, `pos` points directly before the node.
//
// ```javascript
// const parent = findParentNodeOfTypeClosestToPos(state.doc.resolve(10), schema.nodes.paragraph);
// ```
var findParentNodeOfTypeClosestToPos = function findParentNodeOfTypeClosestToPos($pos, nodeType) {
  return findParentNodeClosestToPos($pos, function (node) {
    return equalNodeType(nodeType, node);
  });
};

// :: (nodeType: union<NodeType, [NodeType]>) → (selection: Selection) → boolean
// Checks if there's a parent node of a given `nodeType`.
//
// ```javascript
// if (hasParentNodeOfType(schema.nodes.table)(selection)) {
//   // ....
// }
// ```
var hasParentNodeOfType = function hasParentNodeOfType(nodeType) {
  return function (selection) {
    return hasParentNode(function (node) {
      return equalNodeType(nodeType, node);
    })(selection);
  };
};

// :: (nodeType: union<NodeType, [NodeType]>, domAtPos: (pos: number) → {node: dom.Node, offset: number}) → (selection: Selection) → ?dom.Node
// Iterates over parent nodes, returning DOM reference of the closest node of a given `nodeType`.
//
// ```javascript
// const domAtPos = view.domAtPos.bind(view);
// const parent = findParentDomRefOfType(schema.nodes.codeBlock, domAtPos)(selection); // <pre>
// ```
var findParentDomRefOfType = function findParentDomRefOfType(nodeType, domAtPos) {
  return function (selection) {
    return findParentDomRef(function (node) {
      return equalNodeType(nodeType, node);
    }, domAtPos)(selection);
  };
};

// :: (nodeType: union<NodeType, [NodeType]>) → (selection: Selection) → ?{pos: number, start: number, depth: number, node: ProseMirrorNode}
// Returns a node of a given `nodeType` if it is selected. `start` points to the start position of the node, `pos` points directly before the node.
//
// ```javascript
// const { extension, inlineExtension, bodiedExtension } = schema.nodes;
// const selectedNode = findSelectedNodeOfType([
//   extension,
//   inlineExtension,
//   bodiedExtension,
// ])(selection);
// ```
var findSelectedNodeOfType = function findSelectedNodeOfType(nodeType) {
  return function (selection) {
    if (isNodeSelection(selection)) {
      var node = selection.node,
          $from = selection.$from;

      if (equalNodeType(nodeType, node)) {
        return { node: node, pos: $from.pos, depth: $from.depth };
      }
    }
  };
};

// :: (selection: Selection) → ?number
// Returns position of the previous node.
//
// ```javascript
// const pos = findPositionOfNodeBefore(tr.selection);
// ```
var findPositionOfNodeBefore = function findPositionOfNodeBefore(selection) {
  var nodeBefore = selection.$from.nodeBefore;

  var maybeSelection = index_es$1.Selection.findFrom(selection.$from, -1);
  if (maybeSelection && nodeBefore) {
    // leaf node
    var parent = findParentNodeOfType(nodeBefore.type)(maybeSelection);
    if (parent) {
      return parent.pos;
    }
    return maybeSelection.$from.pos;
  }
};

// :: (position: number, domAtPos: (pos: number) → {node: dom.Node, offset: number}) → dom.Node
// Returns DOM reference of a node at a given `position`. If the node type is of type `TEXT_NODE` it will return the reference of the parent node.
//
// ```javascript
// const domAtPos = view.domAtPos.bind(view);
// const ref = findDomRefAtPos($from.pos, domAtPos);
// ```
var findDomRefAtPos = function findDomRefAtPos(position, domAtPos) {
  var dom = domAtPos(position);
  var node = dom.node.childNodes[dom.offset];

  if (dom.node.nodeType === Node.TEXT_NODE) {
    return dom.node.parentNode;
  }

  if (!node || node.nodeType === Node.TEXT_NODE) {
    return dom.node;
  }

  return node;
};

// :: (node: ProseMirrorNode, descend: ?boolean) → [{ node: ProseMirrorNode, pos: number }]
// Flattens descendants of a given `node`. It doesn't descend into a node when descend argument is `false` (defaults to `true`).
//
// ```javascript
// const children = flatten(node);
// ```
var flatten = function flatten(node) {
  var descend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (!node) {
    throw new Error('Invalid "node" parameter');
  }
  var result = [];
  node.descendants(function (child, pos) {
    result.push({ node: child, pos: pos });
    if (!descend) {
      return false;
    }
  });
  return result;
};

// :: (node: ProseMirrorNode, predicate: (node: ProseMirrorNode) → boolean, descend: ?boolean) → [{ node: ProseMirrorNode, pos: number }]
// Iterates over descendants of a given `node`, returning child nodes predicate returns truthy for. It doesn't descend into a node when descend argument is `false` (defaults to `true`).
//
// ```javascript
// const textNodes = findChildren(node, child => child.isText, false);
// ```
var findChildren = function findChildren(node, predicate, descend) {
  if (!node) {
    throw new Error('Invalid "node" parameter');
  } else if (!predicate) {
    throw new Error('Invalid "predicate" parameter');
  }
  return flatten(node, descend).filter(function (child) {
    return predicate(child.node);
  });
};

// :: (node: ProseMirrorNode, descend: ?boolean) → [{ node: ProseMirrorNode, pos: number }]
// Returns text nodes of a given `node`. It doesn't descend into a node when descend argument is `false` (defaults to `true`).
//
// ```javascript
// const textNodes = findTextNodes(node);
// ```
var findTextNodes = function findTextNodes(node, descend) {
  return findChildren(node, function (child) {
    return child.isText;
  }, descend);
};

// :: (node: ProseMirrorNode, descend: ?boolean) → [{ node: ProseMirrorNode, pos: number }]
// Returns inline nodes of a given `node`. It doesn't descend into a node when descend argument is `false` (defaults to `true`).
//
// ```javascript
// const inlineNodes = findInlineNodes(node);
// ```
var findInlineNodes = function findInlineNodes(node, descend) {
  return findChildren(node, function (child) {
    return child.isInline;
  }, descend);
};

// :: (node: ProseMirrorNode, descend: ?boolean) → [{ node: ProseMirrorNode, pos: number }]
// Returns block descendants of a given `node`. It doesn't descend into a node when descend argument is `false` (defaults to `true`).
//
// ```javascript
// const blockNodes = findBlockNodes(node);
// ```
var findBlockNodes = function findBlockNodes(node, descend) {
  return findChildren(node, function (child) {
    return child.isBlock;
  }, descend);
};

// :: (node: ProseMirrorNode, predicate: (attrs: ?Object) → boolean, descend: ?boolean) → [{ node: ProseMirrorNode, pos: number }]
// Iterates over descendants of a given `node`, returning child nodes predicate returns truthy for. It doesn't descend into a node when descend argument is `false` (defaults to `true`).
//
// ```javascript
// const mergedCells = findChildrenByAttr(table, attrs => attrs.colspan === 2);
// ```
var findChildrenByAttr = function findChildrenByAttr(node, predicate, descend) {
  return findChildren(node, function (child) {
    return !!predicate(child.attrs);
  }, descend);
};

// :: (node: ProseMirrorNode, nodeType: NodeType, descend: ?boolean) → [{ node: ProseMirrorNode, pos: number }]
// Iterates over descendants of a given `node`, returning child nodes of a given nodeType. It doesn't descend into a node when descend argument is `false` (defaults to `true`).
//
// ```javascript
// const cells = findChildrenByType(table, schema.nodes.tableCell);
// ```
var findChildrenByType = function findChildrenByType(node, nodeType, descend) {
  return findChildren(node, function (child) {
    return child.type === nodeType;
  }, descend);
};

// :: (node: ProseMirrorNode, markType: markType, descend: ?boolean) → [{ node: ProseMirrorNode, pos: number }]
// Iterates over descendants of a given `node`, returning child nodes that have a mark of a given markType. It doesn't descend into a `node` when descend argument is `false` (defaults to `true`).
//
// ```javascript
// const nodes = findChildrenByMark(state.doc, schema.marks.strong);
// ```
var findChildrenByMark = function findChildrenByMark(node, markType, descend) {
  return findChildren(node, function (child) {
    return markType.isInSet(child.marks);
  }, descend);
};

// :: (node: ProseMirrorNode, nodeType: NodeType) → boolean
// Returns `true` if a given node contains nodes of a given `nodeType`
//
// ```javascript
// if (contains(panel, schema.nodes.listItem)) {
//   // ...
// }
// ```
var contains = function contains(node, nodeType) {
  return !!findChildrenByType(node, nodeType).length;
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// :: (selection: Selection) → ?{pos: number, start: number, node: ProseMirrorNode}
// Iterates over parent nodes, returning the closest table node.
//
// ```javascript
// const table = findTable(selection);
// ```
var findTable = function findTable(selection) {
  return findParentNode(function (node) {
    return node.type.spec.tableRole && node.type.spec.tableRole === 'table';
  })(selection);
};

// :: (selection: Selection) → boolean
// Checks if current selection is a `CellSelection`.
//
// ```javascript
// if (isCellSelection(selection)) {
//   // ...
// }
// ```
var isCellSelection = function isCellSelection(selection) {
  return selection instanceof prosemirrorTables.CellSelection;
};

// :: (selection: Selection) → ?{left: number, right: number, top: number, bottom: number}
// Get the selection rectangle. Returns `undefined` if selection is not a CellSelection.
//
// ```javascript
// const rect = getSelectionRect(selection);
// ```
var getSelectionRect = function getSelectionRect(selection) {
  if (!isCellSelection(selection)) {
    return;
  }
  var start = selection.$anchorCell.start(-1);
  var map = prosemirrorTables.TableMap.get(selection.$anchorCell.node(-1));
  return map.rectBetween(selection.$anchorCell.pos - start, selection.$headCell.pos - start);
};

// :: (columnIndex: number) → (selection: Selection) → boolean
// Checks if entire column at index `columnIndex` is selected.
//
// ```javascript
// const className = isColumnSelected(i)(selection) ? 'selected' : '';
// ```
var isColumnSelected = function isColumnSelected(columnIndex) {
  return function (selection) {
    if (isCellSelection(selection)) {
      var map = prosemirrorTables.TableMap.get(selection.$anchorCell.node(-1));
      return isRectSelected({
        left: columnIndex,
        right: columnIndex + 1,
        top: 0,
        bottom: map.height
      })(selection);
    }

    return false;
  };
};

// :: (rowIndex: number) → (selection: Selection) → boolean
// Checks if entire row at index `rowIndex` is selected.
//
// ```javascript
// const className = isRowSelected(i)(selection) ? 'selected' : '';
// ```
var isRowSelected = function isRowSelected(rowIndex) {
  return function (selection) {
    if (isCellSelection(selection)) {
      var map = prosemirrorTables.TableMap.get(selection.$anchorCell.node(-1));
      return isRectSelected({
        left: 0,
        right: map.width,
        top: rowIndex,
        bottom: rowIndex + 1
      })(selection);
    }

    return false;
  };
};

// :: (selection: Selection) → boolean
// Checks if entire table is selected
//
// ```javascript
// const className = isTableSelected(selection) ? 'selected' : '';
// ```
var isTableSelected = function isTableSelected(selection) {
  if (isCellSelection(selection)) {
    var map = prosemirrorTables.TableMap.get(selection.$anchorCell.node(-1));
    return isRectSelected({
      left: 0,
      right: map.width,
      top: 0,
      bottom: map.height
    })(selection);
  }

  return false;
};

// :: (columnIndex: union<number, [number]>) → (selection: Selection) → ?[{pos: number, start: number, node: ProseMirrorNode}]
// Returns an array of cells in a column(s), where `columnIndex` could be a column index or an array of column indexes.
//
// ```javascript
// const cells = getCellsInColumn(i)(selection); // [{node, pos}, {node, pos}]
// ```
var getCellsInColumn = function getCellsInColumn(columnIndex) {
  return function (selection) {
    var table = findTable(selection);
    if (table) {
      var map = prosemirrorTables.TableMap.get(table.node);
      var indexes = Array.isArray(columnIndex) ? columnIndex : Array.from([columnIndex]);
      return indexes.reduce(function (acc, index) {
        if (index >= 0 && index <= map.width - 1) {
          var cells = map.cellsInRect({
            left: index,
            right: index + 1,
            top: 0,
            bottom: map.height
          });
          return acc.concat(cells.map(function (nodePos) {
            var node = table.node.nodeAt(nodePos);
            var pos = nodePos + table.start;
            return { pos: pos, start: pos + 1, node: node };
          }));
        }
      }, []);
    }
  };
};

// :: (rowIndex: union<number, [number]>) → (selection: Selection) → ?[{pos: number, start: number, node: ProseMirrorNode}]
// Returns an array of cells in a row(s), where `rowIndex` could be a row index or an array of row indexes.
//
// ```javascript
// const cells = getCellsInRow(i)(selection); // [{node, pos}, {node, pos}]
// ```
var getCellsInRow = function getCellsInRow(rowIndex) {
  return function (selection) {
    var table = findTable(selection);
    if (table) {
      var map = prosemirrorTables.TableMap.get(table.node);
      var indexes = Array.isArray(rowIndex) ? rowIndex : Array.from([rowIndex]);
      return indexes.reduce(function (acc, index) {
        if (index >= 0 && index <= map.height - 1) {
          var cells = map.cellsInRect({
            left: 0,
            right: map.width,
            top: index,
            bottom: index + 1
          });
          return acc.concat(cells.map(function (nodePos) {
            var node = table.node.nodeAt(nodePos);
            var pos = nodePos + table.start;
            return { pos: pos, start: pos + 1, node: node };
          }));
        }
      }, []);
    }
  };
};

// :: (selection: Selection) → ?[{pos: number, start: number, node: ProseMirrorNode}]
// Returns an array of all cells in a table.
//
// ```javascript
// const cells = getCellsInTable(selection); // [{node, pos}, {node, pos}]
// ```
var getCellsInTable = function getCellsInTable(selection) {
  var table = findTable(selection);
  if (table) {
    var map = prosemirrorTables.TableMap.get(table.node);
    var cells = map.cellsInRect({
      left: 0,
      right: map.width,
      top: 0,
      bottom: map.height
    });
    return cells.map(function (nodePos) {
      var node = table.node.nodeAt(nodePos);
      var pos = nodePos + table.start;
      return { pos: pos, start: pos + 1, node: node };
    });
  }
};

var select = function select(type) {
  return function (index, expand) {
    return function (tr) {
      var table = findTable(tr.selection);
      var isRowSelection = type === 'row';
      if (table) {
        var map = prosemirrorTables.TableMap.get(table.node);

        // Check if the index is valid
        if (index >= 0 && index < (isRowSelection ? map.height : map.width)) {
          var left = isRowSelection ? 0 : index;
          var top = isRowSelection ? index : 0;
          var right = isRowSelection ? map.width : index + 1;
          var bottom = isRowSelection ? index + 1 : map.height;

          if (expand) {
            var cell = findCellClosestToPos(tr.selection.$from);
            if (!cell) {
              return tr;
            }

            var selRect = map.findCell(cell.pos - table.start);
            if (isRowSelection) {
              top = Math.min(top, selRect.top);
              bottom = Math.max(bottom, selRect.bottom);
            } else {
              left = Math.min(left, selRect.left);
              right = Math.max(right, selRect.right);
            }
          }

          var cellsInFirstRow = map.cellsInRect({
            left: left,
            top: top,
            right: isRowSelection ? right : left + 1,
            bottom: isRowSelection ? top + 1 : bottom
          });

          var cellsInLastRow = bottom - top === 1 ? cellsInFirstRow : map.cellsInRect({
            left: isRowSelection ? left : right - 1,
            top: isRowSelection ? bottom - 1 : top,
            right: right,
            bottom: bottom
          });

          var head = table.start + cellsInFirstRow[0];
          var anchor = table.start + cellsInLastRow[cellsInLastRow.length - 1];
          var $head = tr.doc.resolve(head);
          var $anchor = tr.doc.resolve(anchor);

          return cloneTr(tr.setSelection(new prosemirrorTables.CellSelection($anchor, $head)));
        }
      }
      return tr;
    };
  };
};

// :: (columnIndex: number, expand: ?boolean) → (tr: Transaction) → Transaction
// Returns a new transaction that creates a `CellSelection` on a column at index `columnIndex`.
// Use the optional `expand` param to extend from current selection.
//
// ```javascript
// dispatch(
//   selectColumn(i)(state.tr)
// );
// ```
var selectColumn = select('column');

// :: (rowIndex: number, expand: ?boolean) → (tr: Transaction) → Transaction
// Returns a new transaction that creates a `CellSelection` on a column at index `rowIndex`.
// Use the optional `expand` param to extend from current selection.
//
// ```javascript
// dispatch(
//   selectRow(i)(state.tr)
// );
// ```
var selectRow = select('row');

// :: (selection: Selection) → (tr: Transaction) → Transaction
// Returns a new transaction that creates a `CellSelection` on the entire table.
//
// ```javascript
// dispatch(
//   selectTable(i)(state.tr)
// );
// ```
var selectTable = function selectTable(tr) {
  var table = findTable(tr.selection);
  if (table) {
    var _TableMap$get = prosemirrorTables.TableMap.get(table.node),
        map = _TableMap$get.map;

    if (map && map.length) {
      var head = table.start + map[0];
      var anchor = table.start + map[map.length - 1];
      var $head = tr.doc.resolve(head);
      var $anchor = tr.doc.resolve(anchor);

      return cloneTr(tr.setSelection(new prosemirrorTables.CellSelection($anchor, $head)));
    }
  }
  return tr;
};

// :: (cell: {pos: number, node: ProseMirrorNode}, schema: Schema) → (tr: Transaction) → Transaction
// Returns a new transaction that clears the content of a given `cell`.
//
// ```javascript
// const $pos = state.doc.resolve(13);
// dispatch(
//   emptyCell(findCellClosestToPos($pos), state.schema)(state.tr)
// );
// ```
var emptyCell = function emptyCell(cell, schema) {
  return function (tr) {
    if (cell) {
      var _tableNodeTypes$cell$ = tableNodeTypes(schema).cell.createAndFill(),
          content = _tableNodeTypes$cell$.content;

      if (!cell.node.content.eq(content)) {
        tr.replaceWith(cell.pos + 1, cell.pos + cell.node.nodeSize, content);
        return cloneTr(tr);
      }
    }
    return tr;
  };
};

// :: (columnIndex: number) → (tr: Transaction) → Transaction
// Returns a new transaction that adds a new column at index `columnIndex`.
//
// ```javascript
// dispatch(
//   addColumnAt(i)(state.tr)
// );
// ```
var addColumnAt = function addColumnAt(columnIndex) {
  return function (tr) {
    var table = findTable(tr.selection);
    if (table) {
      var map = prosemirrorTables.TableMap.get(table.node);
      if (columnIndex >= 0 && columnIndex <= map.width) {
        return cloneTr(prosemirrorTables.addColumn(tr, {
          map: map,
          tableStart: table.start,
          table: table.node
        }, columnIndex));
      }
    }
    return tr;
  };
};

// :: (originRowIndex: number, targetRowIndex: targetColumnIndex, options?: MovementOptions) → (tr: Transaction) → Transaction
// Returns a new transaction that moves the origin row to the target index;
//
// by default "tryToFit" is false, that means if you try to move a row to a place
// where we will need to split a row with merged cells it'll throw an exception, for example:
//
// ```
//      ____________________________
//     |      |      |             |
//  0  |  A1  |  B1  |     C1      |
//     |______|______|______ ______|
//     |      |             |      |
//  1  |  A2  |     B2      |      |
//     |______|______ ______|      |
//     |      |      |      |  D1  |
//  2  |  A3  |  B3  |  C2  |      |
//     |______|______|______|______|
// ```
//
// if you try to move the row 0 to the row index 1 with tryToFit false,
// it'll throw an exception since you can't split the row 1;
// but if "tryToFit" is true, it'll move the row using the current direction.
//
// We defined current direction using the target and origin values
// if the origin is greater than the target, that means the course is `bottom-to-top`,
// so the `tryToFit` logic will use this direction to determine
// if we should move the column to the right or the left.
//
// for example, if you call the function using `moveRow(0, 1, { tryToFit: true })`
// the result will be:
// ```
//      ____________________________
//     |      |             |      |
//  0  |  A2  |     B2      |      |
//     |______|______ ______|      |
//     |      |      |      |  D1  |
//  1  |  A3  |  B3  |  C2  |      |
//     |______|______|______|______|
//     |      |      |             |
//  2  |  A1  |  B1  |     C1      |
//     |______|______|______ ______|
// ```
//
// since we could put the row zero on index one,
// we pushed to the best place to fit the row index 0,
// in this case, row index 2.
//
//
// -------- HOW TO OVERRIDE DIRECTION --------
//
// If you set "tryToFit" to "true", it will try to figure out the best direction
// place to fit using the origin and target index, for example:
//
//
// ```
//      ____________________________
//     |      |      |             |
//  0  |  A1  |  B1  |     C1      |
//     |______|______|______ ______|
//     |      |             |      |
//  1  |  A2  |     B2      |      |
//     |______|______ ______|      |
//     |      |      |      |  D1  |
//  2  |  A3  |  B3  |  C2  |      |
//     |______|______|______|______|
//     |      |             |      |
//  3  |  A4  |     B4      |      |
//     |______|______ ______|      |
//     |      |      |      |  D2  |
//  4  |  A5  |  B5  |  C3  |      |
//     |______|______|______|______|
// ```
//
//
// If you try to move the row 0 to row index 4 with "tryToFit" enabled, by default,
// the code will put it on after the merged rows,
// but you can override it using the "direction" option.
//
// -1: Always put the origin before the target
// ```
//      ____________________________
//     |      |             |      |
//  0  |  A2  |     B2      |      |
//     |______|______ ______|      |
//     |      |      |      |  D1  |
//  1  |  A3  |  B3  |  C2  |      |
//     |______|______|______|______|
//     |      |      |             |
//  2  |  A1  |  B1  |     C1      |
//     |______|______|______ ______|
//     |      |             |      |
//  3  |  A4  |     B4      |      |
//     |______|______ ______|      |
//     |      |      |      |  D2  |
//  4  |  A5  |  B5  |  C3  |      |
//     |______|______|______|______|
// ```
//
//  0: Automatically decide the best place to fit
// ```
//      ____________________________
//     |      |             |      |
//  0  |  A2  |     B2      |      |
//     |______|______ ______|      |
//     |      |      |      |  D1  |
//  1  |  A3  |  B3  |  C2  |      |
//     |______|______|______|______|
//     |      |             |      |
//  2  |  A4  |     B4      |      |
//     |______|______ ______|      |
//     |      |      |      |  D2  |
//  3  |  A5  |  B5  |  C3  |      |
//     |______|______|______|______|
//     |      |      |             |
//  4  |  A1  |  B1  |     C1      |
//     |______|______|______ ______|
// ```
//
//  1: Always put the origin after the target
// ```
//      ____________________________
//     |      |             |      |
//  0  |  A2  |     B2      |      |
//     |______|______ ______|      |
//     |      |      |      |  D1  |
//  1  |  A3  |  B3  |  C2  |      |
//     |______|______|______|______|
//     |      |             |      |
//  2  |  A4  |     B4      |      |
//     |______|______ ______|      |
//     |      |      |      |  D2  |
//  3  |  A5  |  B5  |  C3  |      |
//     |______|______|______|______|
//     |      |      |             |
//  4  |  A1  |  B1  |     C1      |
//     |______|______|______ ______|
// ```
//
// ```javascript
// dispatch(
//   moveRow(x, y, options)(state.tr)
// );
// ```
var moveRow = function moveRow(originRowIndex, targetRowIndex, opts) {
  return function (tr) {
    var defaultOptions = { tryToFit: false, direction: 0 };
    var options = Object.assign(defaultOptions, opts);
    var table = findTable(tr.selection);
    if (!table) {
      return tr;
    }

    var _getSelectionRangeInR = getSelectionRangeInRow(originRowIndex)(tr),
        indexesOriginRow = _getSelectionRangeInR.indexes;

    var _getSelectionRangeInR2 = getSelectionRangeInRow(targetRowIndex)(tr),
        indexesTargetRow = _getSelectionRangeInR2.indexes;

    if (indexesOriginRow.indexOf(targetRowIndex) > -1) {
      return tr;
    }

    if (!options.tryToFit && indexesTargetRow.length > 1) {
      checkInvalidMovements(originRowIndex, targetRowIndex, indexesTargetRow, 'row');
    }

    var newTable = moveTableRow(table, indexesOriginRow, indexesTargetRow, options.direction);

    return cloneTr(tr).replaceWith(table.pos, table.pos + table.node.nodeSize, newTable);
  };
};

// :: (originColumnIndex: number, targetColumnIndex: targetColumnIndex, options?: MovementOptions) → (tr: Transaction) → Transaction
// Returns a new transaction that moves the origin column to the target index;
//
// by default "tryToFit" is false, that means if you try to move a column to a place
// where we will need to split a column with merged cells it'll throw an exception, for example:
//
// ```
//    0      1         2
//  ____________________________
// |      |      |             |
// |  A1  |  B1  |     C1      |
// |______|______|______ ______|
// |      |             |      |
// |  A2  |     B2      |      |
// |______|______ ______|      |
// |      |      |      |  D1  |
// |  A3  |  B3  |  C2  |      |
// |______|______|______|______|
// ```
//
//
// if you try to move the column 0 to the column index 1 with tryToFit false,
// it'll throw an exception since you can't split the column 1;
// but if "tryToFit" is true, it'll move the column using the current direction.
//
// We defined current direction using the target and origin values
// if the origin is greater than the target, that means the course is `right-to-left`,
// so the `tryToFit` logic will use this direction to determine
// if we should move the column to the right or the left.
//
// for example, if you call the function using `moveColumn(0, 1, { tryToFit: true })`
// the result will be:
//
// ```
//    0       1             2
// _____________________ _______
// |      |             |      |
// |  B1  |     C1      |  A1  |
// |______|______ ______|______|
// |             |      |      |
// |     B2      |      |  A2  |
// |______ ______|      |______|
// |      |      |  D1  |      |
// |  B3  |  C2  |      |  A3  |
// |______|______|______|______|
// ```
//
// since we could put the column zero on index one,
// we pushed to the best place to fit the column 0, in this case, column index 2.
//
// -------- HOW TO OVERRIDE DIRECTION --------
//
// If you set "tryToFit" to "true", it will try to figure out the best direction
// place to fit using the origin and target index, for example:
//
//
// ```
//     0      1       2     3      4      5       6
//   _________________________________________________
//  |      |      |             |      |             |
//  |  A1  |  B1  |     C1      |  E1  |     F1      |
//  |______|______|______ ______|______|______ ______|
//  |      |             |      |             |      |
//  |  A2  |     B2      |      |     E2      |      |
//  |______|______ ______|      |______ ______|      |
//  |      |      |      |  D1  |      |      |  G2  |
//  |  A3  |  B3  |  C3  |      |  E3  |  F3  |      |
//  |______|______|______|______|______|______|______|
// ```
//
//
// If you try to move the column 0 to column index 5 with "tryToFit" enabled, by default,
// the code will put it on after the merged columns,
// but you can override it using the "direction" option.
//
// -1: Always put the origin before the target
//
// ```
//     0      1       2     3      4      5       6
//   _________________________________________________
//  |      |             |      |      |             |
//  |  B1  |     C1      |  A1  |  E1  |     F1      |
//  |______|______ ______|______|______|______ ______|
//  |             |      |      |             |      |
//  |     B2      |      |  A2  |     E2      |      |
//  |______ ______|      |______|______ ______|      |
//  |      |      |  D1  |      |      |      |  G2  |
//  |  B3  |  C3  |      |  A3  |  E3  |  F3  |      |
//  |______|______|______|______|______|______|______|
// ```
//
//  0: Automatically decide the best place to fit
//
// ```
//     0      1       2     3      4      5       6
//   _________________________________________________
//  |      |             |      |             |      |
//  |  B1  |     C1      |  E1  |     F1      |  A1  |
//  |______|______ ______|______|______ ______|______|
//  |             |      |             |      |      |
//  |     B2      |      |     E2      |      |  A2  |
//  |______ ______|      |______ ______|      |______|
//  |      |      |  D1  |      |      |  G2  |      |
//  |  B3  |  C3  |      |  E3  |  F3  |      |  A3  |
//  |______|______|______|______|______|______|______|
// ```
//
//  1: Always put the origin after the target
//
// ```
//     0      1       2     3      4      5       6
//   _________________________________________________
//  |      |             |      |             |      |
//  |  B1  |     C1      |  E1  |     F1      |  A1  |
//  |______|______ ______|______|______ ______|______|
//  |             |      |             |      |      |
//  |     B2      |      |     E2      |      |  A2  |
//  |______ ______|      |______ ______|      |______|
//  |      |      |  D1  |      |      |  G2  |      |
//  |  B3  |  C3  |      |  E3  |  F3  |      |  A3  |
//  |______|______|______|______|______|______|______|
// ```
//
// ```javascript
// dispatch(
//   moveColumn(x, y, options)(state.tr)
// );
// ```
var moveColumn = function moveColumn(originColumnIndex, targetColumnIndex, opts) {
  return function (tr) {
    var defaultOptions = { tryToFit: false, direction: 0 };
    var options = Object.assign(defaultOptions, opts);
    var table = findTable(tr.selection);
    if (!table) {
      return tr;
    }

    var _getSelectionRangeInC = getSelectionRangeInColumn(originColumnIndex)(tr),
        indexesOriginColumn = _getSelectionRangeInC.indexes;

    var _getSelectionRangeInC2 = getSelectionRangeInColumn(targetColumnIndex)(tr),
        indexesTargetColumn = _getSelectionRangeInC2.indexes;

    if (indexesOriginColumn.indexOf(targetColumnIndex) > -1) {
      return tr;
    }

    if (!options.tryToFit && indexesTargetColumn.length > 1) {
      checkInvalidMovements(originColumnIndex, targetColumnIndex, indexesTargetColumn, 'column');
    }

    var newTable = moveTableColumn(table, indexesOriginColumn, indexesTargetColumn, options.direction);

    return cloneTr(tr).replaceWith(table.pos, table.pos + table.node.nodeSize, newTable);
  };
};

// :: (rowIndex: number, clonePreviousRow?: boolean) → (tr: Transaction) → Transaction
// Returns a new transaction that adds a new row at index `rowIndex`. Optionally clone the previous row.
//
// ```javascript
// dispatch(
//   addRowAt(i)(state.tr)
// );
// ```
//
// ```javascript
// dispatch(
//   addRowAt(i, true)(state.tr)
// );
// ```
var addRowAt = function addRowAt(rowIndex, clonePreviousRow) {
  return function (tr) {
    var table = findTable(tr.selection);
    if (table) {
      var map = prosemirrorTables.TableMap.get(table.node);
      var cloneRowIndex = rowIndex - 1;

      if (clonePreviousRow && cloneRowIndex >= 0) {
        return cloneTr(cloneRowAt(cloneRowIndex)(tr));
      }

      if (rowIndex >= 0 && rowIndex <= map.height) {
        return cloneTr(prosemirrorTables.addRow(tr, {
          map: map,
          tableStart: table.start,
          table: table.node
        }, rowIndex));
      }
    }
    return tr;
  };
};

// :: (cloneRowIndex: number) → (tr: Transaction) → Transaction
// Returns a new transaction that adds a new row after `cloneRowIndex`, cloning the row attributes at `cloneRowIndex`.
//
// ```javascript
// dispatch(
//   cloneRowAt(i)(state.tr)
// );
// ```
var cloneRowAt = function cloneRowAt(rowIndex) {
  return function (tr) {
    var table = findTable(tr.selection);
    if (table) {
      var map = prosemirrorTables.TableMap.get(table.node);

      if (rowIndex >= 0 && rowIndex <= map.height) {
        var tableNode = table.node;
        var tableNodes = tableNodeTypes(tableNode.type.schema);

        var rowPos = table.start;
        for (var i = 0; i < rowIndex + 1; i++) {
          rowPos += tableNode.child(i).nodeSize;
        }

        var cloneRow = tableNode.child(rowIndex);
        // Re-create the same nodes with same attrs, dropping the node content.
        var cells = [];
        var rowWidth = 0;
        cloneRow.forEach(function (cell) {
          // If we're copying a row with rowspan somewhere, we dont want to copy that cell
          // We'll increment its span below.
          if (cell.attrs.rowspan === 1) {
            rowWidth += cell.attrs.colspan;
            cells.push(tableNodes[cell.type.spec.tableRole].createAndFill(cell.attrs, cell.marks));
          }
        });

        // If a higher row spans past our clone row, bump the higher row to cover this new row too.
        if (rowWidth < map.width) {
          var rowSpanCells = [];

          var _loop = function _loop(_i) {
            var foundCells = filterCellsInRow(_i, function (cell, tr) {
              var rowspan = cell.node.attrs.rowspan;
              var spanRange = _i + rowspan;
              return rowspan > 1 && spanRange > rowIndex;
            })(tr);
            rowSpanCells.push.apply(rowSpanCells, _toConsumableArray(foundCells));
          };

          for (var _i = rowIndex; _i >= 0; _i--) {
            _loop(_i);
          }

          if (rowSpanCells.length) {
            rowSpanCells.forEach(function (cell) {
              tr = setCellAttrs(cell, {
                rowspan: cell.node.attrs.rowspan + 1
              })(tr);
            });
          }
        }

        return safeInsert(tableNodes.row.create(cloneRow.attrs, cells), rowPos)(tr);
      }
    }
    return tr;
  };
};

// :: (columnIndex: number) → (tr: Transaction) → Transaction
// Returns a new transaction that removes a column at index `columnIndex`. If there is only one column left, it will remove the entire table.
//
// ```javascript
// dispatch(
//   removeColumnAt(i)(state.tr)
// );
// ```
var removeColumnAt = function removeColumnAt(columnIndex) {
  return function (tr) {
    var table = findTable(tr.selection);
    if (table) {
      var map = prosemirrorTables.TableMap.get(table.node);
      if (columnIndex === 0 && map.width === 1) {
        return removeTable(tr);
      } else if (columnIndex >= 0 && columnIndex <= map.width) {
        prosemirrorTables.removeColumn(tr, {
          map: map,
          tableStart: table.start,
          table: table.node
        }, columnIndex);
        return cloneTr(tr);
      }
    }
    return tr;
  };
};

// :: (rowIndex: number) → (tr: Transaction) → Transaction
// Returns a new transaction that removes a row at index `rowIndex`. If there is only one row left, it will remove the entire table.
//
// ```javascript
// dispatch(
//   removeRowAt(i)(state.tr)
// );
// ```
var removeRowAt = function removeRowAt(rowIndex) {
  return function (tr) {
    var table = findTable(tr.selection);
    if (table) {
      var map = prosemirrorTables.TableMap.get(table.node);
      if (rowIndex === 0 && map.height === 1) {
        return removeTable(tr);
      } else if (rowIndex >= 0 && rowIndex <= map.height) {
        prosemirrorTables.removeRow(tr, {
          map: map,
          tableStart: table.start,
          table: table.node
        }, rowIndex);
        return cloneTr(tr);
      }
    }
    return tr;
  };
};

// :: (tr: Transaction) → Transaction
// Returns a new transaction that removes a table node if the cursor is inside of it.
//
// ```javascript
// dispatch(
//   removeTable(state.tr)
// );
// ```
var removeTable = function removeTable(tr) {
  var $from = tr.selection.$from;

  for (var depth = $from.depth; depth > 0; depth--) {
    var node = $from.node(depth);
    if (node.type.spec.tableRole === 'table') {
      return cloneTr(tr.delete($from.before(depth), $from.after(depth)));
    }
  }
  return tr;
};

// :: (tr: Transaction) → Transaction
// Returns a new transaction that removes selected columns.
//
// ```javascript
// dispatch(
//   removeSelectedColumns(state.tr)
// );
// ```
var removeSelectedColumns = function removeSelectedColumns(tr) {
  var selection = tr.selection;

  if (isTableSelected(selection)) {
    return removeTable(tr);
  }
  if (isCellSelection(selection)) {
    var table = findTable(selection);
    if (table) {
      var map = prosemirrorTables.TableMap.get(table.node);
      var rect = map.rectBetween(selection.$anchorCell.pos - table.start, selection.$headCell.pos - table.start);

      if (rect.left == 0 && rect.right == map.width) {
        return false;
      }

      var pmTableRect = Object.assign({}, rect, {
        map: map,
        table: table.node,
        tableStart: table.start
      });

      for (var i = pmTableRect.right - 1;; i--) {
        prosemirrorTables.removeColumn(tr, pmTableRect, i);
        if (i === pmTableRect.left) {
          break;
        }
        pmTableRect.table = pmTableRect.tableStart ? tr.doc.nodeAt(pmTableRect.tableStart - 1) : tr.doc;
        pmTableRect.map = prosemirrorTables.TableMap.get(pmTableRect.table);
      }
      return cloneTr(tr);
    }
  }
  return tr;
};

// :: (tr: Transaction) → Transaction
// Returns a new transaction that removes selected rows.
//
// ```javascript
// dispatch(
//   removeSelectedRows(state.tr)
// );
// ```
var removeSelectedRows = function removeSelectedRows(tr) {
  var selection = tr.selection;

  if (isTableSelected(selection)) {
    return removeTable(tr);
  }
  if (isCellSelection(selection)) {
    var table = findTable(selection);
    if (table) {
      var map = prosemirrorTables.TableMap.get(table.node);
      var rect = map.rectBetween(selection.$anchorCell.pos - table.start, selection.$headCell.pos - table.start);

      if (rect.top == 0 && rect.bottom == map.height) {
        return false;
      }

      var pmTableRect = Object.assign({}, rect, {
        map: map,
        table: table.node,
        tableStart: table.start
      });

      for (var i = pmTableRect.bottom - 1;; i--) {
        prosemirrorTables.removeRow(tr, pmTableRect, i);
        if (i === pmTableRect.top) {
          break;
        }
        pmTableRect.table = pmTableRect.tableStart ? tr.doc.nodeAt(pmTableRect.tableStart - 1) : tr.doc;
        pmTableRect.map = prosemirrorTables.TableMap.get(pmTableRect.table);
      }

      return cloneTr(tr);
    }
  }
  return tr;
};

// :: ($pos: ResolvedPos) → (tr: Transaction) → Transaction
// Returns a new transaction that removes a column closest to a given `$pos`.
//
// ```javascript
// dispatch(
//   removeColumnClosestToPos(state.doc.resolve(3))(state.tr)
// );
// ```
var removeColumnClosestToPos = function removeColumnClosestToPos($pos) {
  return function (tr) {
    var rect = findCellRectClosestToPos($pos);
    if (rect) {
      return removeColumnAt(rect.left)(setTextSelection($pos.pos)(tr));
    }
    return tr;
  };
};

// :: ($pos: ResolvedPos) → (tr: Transaction) → Transaction
// Returns a new transaction that removes a row closest to a given `$pos`.
//
// ```javascript
// dispatch(
//   removeRowClosestToPos(state.doc.resolve(3))(state.tr)
// );
// ```
var removeRowClosestToPos = function removeRowClosestToPos($pos) {
  return function (tr) {
    var rect = findCellRectClosestToPos($pos);
    if (rect) {
      return removeRowAt(rect.top)(setTextSelection($pos.pos)(tr));
    }
    return tr;
  };
};

// :: (columnIndex: number, cellTransform: (cell: {pos: number, start: number, node: ProseMirrorNode}, tr: Transaction) → Transaction, setCursorToLastCell: ?boolean) → (tr: Transaction) → Transaction
// Returns a new transaction that maps a given `cellTransform` function to each cell in a column at a given `columnIndex`.
// It will set the selection into the last cell of the column if `setCursorToLastCell` param is set to `true`.
//
// ```javascript
// dispatch(
//   forEachCellInColumn(0, (cell, tr) => emptyCell(cell, state.schema)(tr))(state.tr)
// );
// ```
var forEachCellInColumn = function forEachCellInColumn(columnIndex, cellTransform, setCursorToLastCell) {
  return function (tr) {
    var cells = getCellsInColumn(columnIndex)(tr.selection);
    if (cells) {
      for (var i = cells.length - 1; i >= 0; i--) {
        tr = cellTransform(cells[i], tr);
      }
      if (setCursorToLastCell) {
        var $pos = tr.doc.resolve(tr.mapping.map(cells[cells.length - 1].pos));
        tr.setSelection(index_es$1.Selection.near($pos));
      }
      return cloneTr(tr);
    }
    return tr;
  };
};

// :: (rowIndex: number, cellTransform: (cell: {pos: number, start: number, node: ProseMirrorNode}, tr: Transaction) → Transaction, setCursorToLastCell: ?boolean) → (tr: Transaction) → Transaction
// Returns a new transaction that maps a given `cellTransform` function to each cell in a row at a given `rowIndex`.
// It will set the selection into the last cell of the row if `setCursorToLastCell` param is set to `true`.
//
// ```javascript
// dispatch(
//   forEachCellInRow(0, (cell, tr) => setCellAttrs(cell, { background: 'red' })(tr))(state.tr)
// );
// ```
var forEachCellInRow = function forEachCellInRow(rowIndex, cellTransform, setCursorToLastCell) {
  return function (tr) {
    var cells = getCellsInRow(rowIndex)(tr.selection);
    if (cells) {
      for (var i = cells.length - 1; i >= 0; i--) {
        tr = cellTransform(cells[i], tr);
      }
      if (setCursorToLastCell) {
        var $pos = tr.doc.resolve(tr.mapping.map(cells[cells.length - 1].pos));
        tr.setSelection(index_es$1.Selection.near($pos));
      }
    }
    return tr;
  };
};

// :: (cell: {pos: number, start: number, node: ProseMirrorNode}, attrs: Object) → (tr: Transaction) → Transaction
// Returns a new transaction that sets given `attrs` to a given `cell`.
//
// ```javascript
// dispatch(
//   setCellAttrs(findCellClosestToPos($pos), { background: 'blue' })(tr);
// );
// ```
var setCellAttrs = function setCellAttrs(cell, attrs) {
  return function (tr) {
    if (cell) {
      tr.setNodeMarkup(cell.pos, null, Object.assign({}, cell.node.attrs, attrs));
      return cloneTr(tr);
    }
    return tr;
  };
};

// :: (schema: Schema, rowsCount: ?number, colsCount: ?number, withHeaderRow: ?boolean, cellContent: ?Node) → Node
// Returns a table node of a given size.
// `withHeaderRow` defines whether the first row of the table will be a header row.
// `cellContent` defines the content of each cell.
//
// ```javascript
// const table = createTable(state.schema); // 3x3 table node
// dispatch(
//   tr.replaceSelectionWith(table).scrollIntoView()
// );
// ```
var createTable = function createTable(schema) {
  var rowsCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var colsCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  var withHeaderRow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var cellContent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

  var _tableNodeTypes = tableNodeTypes(schema),
      tableCell = _tableNodeTypes.cell,
      tableHeader = _tableNodeTypes.header_cell,
      tableRow = _tableNodeTypes.row,
      table = _tableNodeTypes.table;

  var cells = [];
  var headerCells = [];
  for (var i = 0; i < colsCount; i++) {
    cells.push(createCell(tableCell, cellContent));

    if (withHeaderRow) {
      headerCells.push(createCell(tableHeader, cellContent));
    }
  }

  var rows = [];
  for (var _i2 = 0; _i2 < rowsCount; _i2++) {
    rows.push(tableRow.createChecked(null, withHeaderRow && _i2 === 0 ? headerCells : cells));
  }

  return table.createChecked(null, rows);
};

// :: ($pos: ResolvedPos) → ?{pos: number, start: number, node: ProseMirrorNode}
// Iterates over parent nodes, returning a table cell or a table header node closest to a given `$pos`.
//
// ```javascript
// const cell = findCellClosestToPos(state.selection.$from);
// ```
var findCellClosestToPos = function findCellClosestToPos($pos) {
  var predicate = function predicate(node) {
    return node.type.spec.tableRole && /cell/i.test(node.type.spec.tableRole);
  };
  return findParentNodeClosestToPos($pos, predicate);
};

// :: ($pos: ResolvedPos) → ?{left: number, top: number, right: number, bottom: number}
// Returns the rectangle spanning a cell closest to a given `$pos`.
//
// ```javascript
// dispatch(
//   findCellRectClosestToPos(state.selection.$from)
// );
// ```
var findCellRectClosestToPos = function findCellRectClosestToPos($pos) {
  var cell = findCellClosestToPos($pos);
  if (cell) {
    var table = findTableClosestToPos($pos);
    var map = prosemirrorTables.TableMap.get(table.node);
    var cellPos = cell.pos - table.start;
    return map.rectBetween(cellPos, cellPos);
  }
};

var filterCellsInRow = function filterCellsInRow(rowIndex, predicate) {
  return function (tr) {
    var foundCells = [];
    var cells = getCellsInRow(rowIndex)(tr.selection);
    if (cells) {
      for (var j = cells.length - 1; j >= 0; j--) {
        if (predicate(cells[j], tr)) {
          foundCells.push(cells[j]);
        }
      }
    }

    return foundCells;
  };
};

// :: (columnIndex: number) → (tr: Transaction) → {$anchor: ResolvedPos, $head: ResolvedPos, indexes: [number]}
// Returns a range of rectangular selection spanning all merged cells around a column at index `columnIndex`.
//
// ```javascript
// const range = getSelectionRangeInColumn(3)(state.tr);
// ```
var getSelectionRangeInColumn = function getSelectionRangeInColumn(columnIndex) {
  return function (tr) {
    var startIndex = columnIndex;
    var endIndex = columnIndex;

    // looking for selection start column (startIndex)

    var _loop2 = function _loop2(i) {
      var cells = getCellsInColumn(i)(tr.selection);
      if (cells) {
        cells.forEach(function (cell) {
          var maybeEndIndex = cell.node.attrs.colspan + i - 1;
          if (maybeEndIndex >= startIndex) {
            startIndex = i;
          }
          if (maybeEndIndex > endIndex) {
            endIndex = maybeEndIndex;
          }
        });
      }
    };

    for (var i = columnIndex; i >= 0; i--) {
      _loop2(i);
    }
    // looking for selection end column (endIndex)

    var _loop3 = function _loop3(i) {
      var cells = getCellsInColumn(i)(tr.selection);
      if (cells) {
        cells.forEach(function (cell) {
          var maybeEndIndex = cell.node.attrs.colspan + i - 1;
          if (cell.node.attrs.colspan > 1 && maybeEndIndex > endIndex) {
            endIndex = maybeEndIndex;
          }
        });
      }
    };

    for (var i = columnIndex; i <= endIndex; i++) {
      _loop3(i);
    }

    // filter out columns without cells (where all rows have colspan > 1 in the same column)
    var indexes = [];
    for (var i = startIndex; i <= endIndex; i++) {
      var maybeCells = getCellsInColumn(i)(tr.selection);
      if (maybeCells && maybeCells.length) {
        indexes.push(i);
      }
    }
    startIndex = indexes[0];
    endIndex = indexes[indexes.length - 1];

    var firstSelectedColumnCells = getCellsInColumn(startIndex)(tr.selection);
    var firstRowCells = getCellsInRow(0)(tr.selection);
    var $anchor = tr.doc.resolve(firstSelectedColumnCells[firstSelectedColumnCells.length - 1].pos);

    var headCell = void 0;
    for (var _i3 = endIndex; _i3 >= startIndex; _i3--) {
      var columnCells = getCellsInColumn(_i3)(tr.selection);
      if (columnCells && columnCells.length) {
        for (var j = firstRowCells.length - 1; j >= 0; j--) {
          if (firstRowCells[j].pos === columnCells[0].pos) {
            headCell = columnCells[0];
            break;
          }
        }
        if (headCell) {
          break;
        }
      }
    }

    var $head = tr.doc.resolve(headCell.pos);
    return { $anchor: $anchor, $head: $head, indexes: indexes };
  };
};

// :: (rowIndex: number) → (tr: Transaction) → {$anchor: ResolvedPos, $head: ResolvedPos, indexes: [number]}
// Returns a range of rectangular selection spanning all merged cells around a row at index `rowIndex`.
//
// ```javascript
// const range = getSelectionRangeInRow(3)(state.tr);
// ```
var getSelectionRangeInRow = function getSelectionRangeInRow(rowIndex) {
  return function (tr) {
    var startIndex = rowIndex;
    var endIndex = rowIndex;
    // looking for selection start row (startIndex)

    var _loop4 = function _loop4(i) {
      var cells = getCellsInRow(i)(tr.selection);
      cells.forEach(function (cell) {
        var maybeEndIndex = cell.node.attrs.rowspan + i - 1;
        if (maybeEndIndex >= startIndex) {
          startIndex = i;
        }
        if (maybeEndIndex > endIndex) {
          endIndex = maybeEndIndex;
        }
      });
    };

    for (var i = rowIndex; i >= 0; i--) {
      _loop4(i);
    }
    // looking for selection end row (endIndex)

    var _loop5 = function _loop5(i) {
      var cells = getCellsInRow(i)(tr.selection);
      cells.forEach(function (cell) {
        var maybeEndIndex = cell.node.attrs.rowspan + i - 1;
        if (cell.node.attrs.rowspan > 1 && maybeEndIndex > endIndex) {
          endIndex = maybeEndIndex;
        }
      });
    };

    for (var i = rowIndex; i <= endIndex; i++) {
      _loop5(i);
    }

    // filter out rows without cells (where all columns have rowspan > 1 in the same row)
    var indexes = [];
    for (var i = startIndex; i <= endIndex; i++) {
      var maybeCells = getCellsInRow(i)(tr.selection);
      if (maybeCells && maybeCells.length) {
        indexes.push(i);
      }
    }
    startIndex = indexes[0];
    endIndex = indexes[indexes.length - 1];

    var firstSelectedRowCells = getCellsInRow(startIndex)(tr.selection);
    var firstColumnCells = getCellsInColumn(0)(tr.selection);
    var $anchor = tr.doc.resolve(firstSelectedRowCells[firstSelectedRowCells.length - 1].pos);

    var headCell = void 0;
    for (var _i4 = endIndex; _i4 >= startIndex; _i4--) {
      var rowCells = getCellsInRow(_i4)(tr.selection);
      if (rowCells && rowCells.length) {
        for (var j = firstColumnCells.length - 1; j >= 0; j--) {
          if (firstColumnCells[j].pos === rowCells[0].pos) {
            headCell = rowCells[0];
            break;
          }
        }
        if (headCell) {
          break;
        }
      }
    }

    var $head = tr.doc.resolve(headCell.pos);
    return { $anchor: $anchor, $head: $head, indexes: indexes };
  };
};

exports.isNodeSelection = isNodeSelection;
exports.canInsert = canInsert;
exports.convertTableNodeToArrayOfRows = convertTableNodeToArrayOfRows;
exports.convertArrayOfRowsToTableNode = convertArrayOfRowsToTableNode;
exports.findParentNode = findParentNode;
exports.findParentNodeClosestToPos = findParentNodeClosestToPos;
exports.findParentDomRef = findParentDomRef;
exports.hasParentNode = hasParentNode;
exports.findParentNodeOfType = findParentNodeOfType;
exports.findParentNodeOfTypeClosestToPos = findParentNodeOfTypeClosestToPos;
exports.hasParentNodeOfType = hasParentNodeOfType;
exports.findParentDomRefOfType = findParentDomRefOfType;
exports.findSelectedNodeOfType = findSelectedNodeOfType;
exports.findPositionOfNodeBefore = findPositionOfNodeBefore;
exports.findDomRefAtPos = findDomRefAtPos;
exports.flatten = flatten;
exports.findChildren = findChildren;
exports.findTextNodes = findTextNodes;
exports.findInlineNodes = findInlineNodes;
exports.findBlockNodes = findBlockNodes;
exports.findChildrenByAttr = findChildrenByAttr;
exports.findChildrenByType = findChildrenByType;
exports.findChildrenByMark = findChildrenByMark;
exports.contains = contains;
exports.findTable = findTable;
exports.isCellSelection = isCellSelection;
exports.getSelectionRect = getSelectionRect;
exports.isColumnSelected = isColumnSelected;
exports.isRowSelected = isRowSelected;
exports.isTableSelected = isTableSelected;
exports.getCellsInColumn = getCellsInColumn;
exports.getCellsInRow = getCellsInRow;
exports.getCellsInTable = getCellsInTable;
exports.selectColumn = selectColumn;
exports.selectRow = selectRow;
exports.selectTable = selectTable;
exports.emptyCell = emptyCell;
exports.addColumnAt = addColumnAt;
exports.moveRow = moveRow;
exports.moveColumn = moveColumn;
exports.addRowAt = addRowAt;
exports.cloneRowAt = cloneRowAt;
exports.removeColumnAt = removeColumnAt;
exports.removeRowAt = removeRowAt;
exports.removeTable = removeTable;
exports.removeSelectedColumns = removeSelectedColumns;
exports.removeSelectedRows = removeSelectedRows;
exports.removeColumnClosestToPos = removeColumnClosestToPos;
exports.removeRowClosestToPos = removeRowClosestToPos;
exports.forEachCellInColumn = forEachCellInColumn;
exports.forEachCellInRow = forEachCellInRow;
exports.setCellAttrs = setCellAttrs;
exports.createTable = createTable;
exports.findCellClosestToPos = findCellClosestToPos;
exports.findCellRectClosestToPos = findCellRectClosestToPos;
exports.getSelectionRangeInColumn = getSelectionRangeInColumn;
exports.getSelectionRangeInRow = getSelectionRangeInRow;
exports.removeParentNodeOfType = removeParentNodeOfType;
exports.replaceParentNodeOfType = replaceParentNodeOfType;
exports.removeSelectedNode = removeSelectedNode;
exports.replaceSelectedNode = replaceSelectedNode;
exports.setTextSelection = setTextSelection;
exports.safeInsert = safeInsert;
exports.setParentNodeMarkup = setParentNodeMarkup;
exports.selectParentNodeOfType = selectParentNodeOfType;
exports.removeNodeBefore = removeNodeBefore;

});

unwrapExports(dist);
var dist_1 = dist.isNodeSelection;
var dist_2 = dist.canInsert;
var dist_3 = dist.convertTableNodeToArrayOfRows;
var dist_4 = dist.convertArrayOfRowsToTableNode;
var dist_5 = dist.findParentNode;
var dist_6 = dist.findParentNodeClosestToPos;
var dist_7 = dist.findParentDomRef;
var dist_8 = dist.hasParentNode;
var dist_9 = dist.findParentNodeOfType;
var dist_10 = dist.findParentNodeOfTypeClosestToPos;
var dist_11 = dist.hasParentNodeOfType;
var dist_12 = dist.findParentDomRefOfType;
var dist_13 = dist.findSelectedNodeOfType;
var dist_14 = dist.findPositionOfNodeBefore;
var dist_15 = dist.findDomRefAtPos;
var dist_16 = dist.flatten;
var dist_17 = dist.findChildren;
var dist_18 = dist.findTextNodes;
var dist_19 = dist.findInlineNodes;
var dist_20 = dist.findBlockNodes;
var dist_21 = dist.findChildrenByAttr;
var dist_22 = dist.findChildrenByType;
var dist_23 = dist.findChildrenByMark;
var dist_24 = dist.contains;
var dist_25 = dist.findTable;
var dist_26 = dist.isCellSelection;
var dist_27 = dist.getSelectionRect;
var dist_28 = dist.isColumnSelected;
var dist_29 = dist.isRowSelected;
var dist_30 = dist.isTableSelected;
var dist_31 = dist.getCellsInColumn;
var dist_32 = dist.getCellsInRow;
var dist_33 = dist.getCellsInTable;
var dist_34 = dist.selectColumn;
var dist_35 = dist.selectRow;
var dist_36 = dist.selectTable;
var dist_37 = dist.emptyCell;
var dist_38 = dist.addColumnAt;
var dist_39 = dist.moveRow;
var dist_40 = dist.moveColumn;
var dist_41 = dist.addRowAt;
var dist_42 = dist.cloneRowAt;
var dist_43 = dist.removeColumnAt;
var dist_44 = dist.removeRowAt;
var dist_45 = dist.removeTable;
var dist_46 = dist.removeSelectedColumns;
var dist_47 = dist.removeSelectedRows;
var dist_48 = dist.removeColumnClosestToPos;
var dist_49 = dist.removeRowClosestToPos;
var dist_50 = dist.forEachCellInColumn;
var dist_51 = dist.forEachCellInRow;
var dist_52 = dist.setCellAttrs;
var dist_53 = dist.createTable;
var dist_54 = dist.findCellClosestToPos;
var dist_55 = dist.findCellRectClosestToPos;
var dist_56 = dist.getSelectionRangeInColumn;
var dist_57 = dist.getSelectionRangeInRow;
var dist_58 = dist.removeParentNodeOfType;
var dist_59 = dist.replaceParentNodeOfType;
var dist_60 = dist.removeSelectedNode;
var dist_61 = dist.replaceSelectedNode;
var dist_62 = dist.setTextSelection;
var dist_63 = dist.safeInsert;
var dist_64 = dist.setParentNodeMarkup;
var dist_65 = dist.selectParentNodeOfType;
var dist_66 = dist.removeNodeBefore;

// see https://github.com/ProseMirror/prosemirror-transform/blob/master/src/structure.js
// Since this piece of code was "borrowed" from prosemirror, ESLint rules are ignored.

/* eslint-disable max-len, no-plusplus, no-undef, eqeqeq */

function canSplit$1(doc, pos) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var typesAfter = arguments.length > 3 ? arguments[3] : undefined;
  var $pos = doc.resolve(pos);
  var base = $pos.depth - depth;
  var innerType = typesAfter && typesAfter[typesAfter.length - 1] || $pos.parent;
  if (base < 0 || $pos.parent.type.spec.isolating || !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) || !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount))) return false;

  for (var d = $pos.depth - 1, i = depth - 2; d > base; d--, i--) {
    var node = $pos.node(d);

    var _index = $pos.index(d);

    if (node.type.spec.isolating) return false;
    var rest = node.content.cutByIndex(_index, node.childCount);
    var after = typesAfter && typesAfter[i] || node;
    if (after != node) rest = rest.replaceChild(0, after.type.create(after.attrs));
    /* Change starts from here */
    // if (!node.canReplace(index + 1, node.childCount) || !after.type.validContent(rest))
    //   return false

    if (!node.canReplace(_index + 1, node.childCount)) return false;
    /* Change ends here */
  }

  var index = $pos.indexAfter(base);
  var baseType = typesAfter && typesAfter[0];
  return $pos.node(base).canReplaceWith(index, index, baseType ? baseType.type : $pos.node(base + 1).type);
} // this is a copy of splitListItem
// see https://github.com/ProseMirror/prosemirror-schema-list/blob/master/src/schema-list.js


function splitToDefaultListItem(itemType) {
  return function (state, dispatch) {
    var _state$selection = state.selection,
        $from = _state$selection.$from,
        $to = _state$selection.$to,
        node = _state$selection.node;
    if (node && node.isBlock || $from.depth < 2 || !$from.sameParent($to)) return false;
    var grandParent = $from.node(-1);
    if (grandParent.type != itemType) return false;

    if ($from.parent.content.size == 0) {
      // In an empty block. If this is a nested list, the wrapping
      // list item should be split. Otherwise, bail out and let next
      // command handle lifting.
      if ($from.depth == 2 || $from.node(-3).type != itemType || $from.index(-2) != $from.node(-2).childCount - 1) return false;

      if (dispatch) {
        var wrap = Fragment.empty;
        var keepItem = $from.index(-1) > 0; // Build a fragment containing empty versions of the structure
        // from the outer list item to the parent node of the cursor

        for (var d = $from.depth - (keepItem ? 1 : 2); d >= $from.depth - 3; d--) {
          wrap = Fragment.from($from.node(d).copy(wrap));
        } // Add a second list item with an empty default start node


        wrap = wrap.append(Fragment.from(itemType.createAndFill()));

        var _tr = state.tr.replace($from.before(keepItem ? null : -1), $from.after(-3), new Slice(wrap, keepItem ? 3 : 2, 2));

        _tr.setSelection(state.selection.constructor.near(_tr.doc.resolve($from.pos + (keepItem ? 3 : 2))));

        dispatch(_tr.scrollIntoView());
      }

      return true;
    }

    var nextType = $to.pos == $from.end() ? grandParent.contentMatchAt($from.indexAfter(-1)).defaultType : null;
    var tr = state.tr.delete($from.pos, $to.pos);
    /* Change starts from here */
    // let types = nextType && [null, {type: nextType}]

    var types = nextType && [{
      type: itemType
    }, {
      type: nextType
    }];
    if (!types) types = [{
      type: itemType
    }, null];
    /* Change ends here */

    if (!canSplit$1(tr.doc, $from.pos, 2, types)) return false;
    if (dispatch) dispatch(tr.split($from.pos, 2, types).scrollIntoView());
    return true;
  };
}

var TodoItemView =
/** @class */
function (_super) {
  __extends(TodoItemView, _super);

  function TodoItemView() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TodoItemView.prototype.onChange = function () {
    this.updateAttrs({
      done: !this.node.attrs.done
    });
  };

  __decorate([Prop({
    type: Object,
    required: true
  }), __metadata("design:type", Object)], TodoItemView.prototype, "node", void 0);

  __decorate([Prop({
    type: Object,
    required: true
  }), __metadata("design:type", Object)], TodoItemView.prototype, "view", void 0);

  __decorate([Prop({
    type: Function,
    required: true
  }), __metadata("design:type", Function)], TodoItemView.prototype, "updateAttrs", void 0);

  TodoItemView = __decorate([Component({
    components: {
      VCheckbox: VCheckbox
    }
  })], TodoItemView);
  return TodoItemView;
}(Vue);

/* script */
const __vue_script__$8 = TodoItemView;
/* template */
var __vue_render__$8 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"tiptap-vuetify-todo-item-view",attrs:{"data-type":_vm.node.type.name,"data-done":_vm.node.attrs.done.toString(),"data-drag-handle":""}},[_c('VCheckbox',{staticClass:"mr-2 mt-3 pt-1",attrs:{"input-value":_vm.node.attrs.done,"hide-details":""},on:{"change":_vm.onChange}}),_vm._v(" "),_c('div',{ref:"content",staticClass:"todo-content",attrs:{"contenteditable":_vm.view.editable.toString()}})],1)};
var __vue_staticRenderFns__$8 = [];

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TodoItemView$1 = normalizeComponent_1(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    undefined,
    undefined
  );

var TodoItem =
/** @class */
function (_super) {
  __extends(TodoItem, _super);

  function TodoItem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(TodoItem.prototype, "name", {
    get: function get() {
      return 'todo_item';
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TodoItem.prototype, "defaultOptions", {
    get: function get() {
      return {
        nested: false
      };
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TodoItem.prototype, "view", {
    get: function get() {
      return TodoItemView$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TodoItem.prototype, "schema", {
    get: function get() {
      var _this = this;

      return {
        attrs: {
          done: {
            default: false
          }
        },
        draggable: true,
        content: this.options.nested ? '(paragraph|todo_list)+' : 'paragraph+',
        toDOM: function toDOM(node) {
          var done = node.attrs.done;
          return ['li', {
            'data-type': _this.name,
            'data-done': done.toString()
          }, ['span', {
            class: 'todo-checkbox',
            contenteditable: 'false'
          }], ['div', {
            class: 'todo-content'
          }, 0]];
        },
        parseDOM: [{
          priority: 51,
          tag: "[data-type=\"" + this.name + "\"]",
          getAttrs: function getAttrs(dom) {
            return {
              done: dom.getAttribute('data-done') === 'true'
            };
          }
        }]
      };
    },
    enumerable: true,
    configurable: true
  });

  TodoItem.prototype.keys = function (_a) {
    var type = _a.type;
    return {
      Enter: splitToDefaultListItem(type),
      Tab: this.options.nested ? sinkListItem(type) : function () {},
      'Shift-Tab': liftListItem(type)
    };
  };

  return TodoItem;
}(Node$2);

var TodoItem$1 =
/** @class */
function (_super) {
  __extends(TodoItem$1, _super);

  function TodoItem$1(options) {
    return _super.call(this, options, TodoItem) || this;
  }

  Object.defineProperty(TodoItem$1.prototype, "availableActions", {
    get: function get() {
      return [];
    },
    enumerable: true,
    configurable: true
  });
  return TodoItem$1;
}(AbstractExtension);

// It is bad practice to mix default and named exports in the same module, though it is allowed by the specification.

var TiptapVuetifyPlugin = new (
/** @class */
function () {
  function Plugin() {
    this.installed = false;
  }

  Object.defineProperty(Plugin.prototype, "vuetifyLang", {
    get: function get() {
      return this.vuetify.framework.lang.current;
    },
    enumerable: true,
    configurable: true
  });

  Plugin.prototype.install = function (VueFuncConstructor, options) {
    if (!options || !options.vuetify) {
      ConsoleLogger$1.error('Please, specify in options the Vuetify Object ("vuetify" property)');
      return;
    }

    var vuetifyFramework = options.vuetify,
        _a = options.iconsGroup,
        iconsGroup = _a === void 0 ? theme.defaultIconsGroup : _a;
    VueFuncConstructor.prototype.tiptapVuetifyPlugin = TiptapVuetifyPlugin;
    VueFuncConstructor.prototype.$tiptapVuetify = {
      iconsGroup: iconsGroup
    };
    this.vuetify = vuetifyFramework;
    this.installed = true;
  };

  return Plugin;
}())();

(function autoInstall() {
  var globalScope = null;

  if (typeof window !== 'undefined') {
    globalScope = window;
  } else if (typeof global !== 'undefined') {
    // @ts-ignore
    globalScope = global;
  }

  if (globalScope && globalScope.Vue) {
    // Automatic installation if Vue has been added to the global scope.
    globalScope.Vue.use(TiptapVuetifyPlugin, __assign({
      vuetify: globalScope.vuetify
    }, globalScope.tiptapVuetifyPluginOptions));
    globalScope.Vue.component('tiptap-vuetify', TiptapVuetify$1);
  }
})();

export { Blockquote, Bold, BulletList, Code, CodeBlock, HardBreak, Heading, History, HorizontalRule, Image, Italic, Link, ListItem, OrderedList, Paragraph, Strike, TiptapVuetify$1 as TiptapVuetify, TiptapVuetifyPlugin, TodoItem$1 as TodoItem, TodoList, Underline };

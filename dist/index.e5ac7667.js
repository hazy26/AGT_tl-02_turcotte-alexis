// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"c60O6":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "11eefaaee5ac7667";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aitAD":[function(require,module,exports) {
var _roughNotation = require("rough-notation");
const multilinesBlack = document.querySelectorAll(".highlight__multi-line_black");
multilinesBlack.forEach((highlight)=>{
    const annotation = (0, _roughNotation.annotate)(highlight, {
        type: "highlight",
        color: "#393E41",
        multiline: true,
        iterations: 1,
        animationDuration: 2000
    });
    annotation.show();
});
const multilines = document.querySelectorAll(".highlight__multi-line");
multilines.forEach((highlight)=>{
    const annotation = (0, _roughNotation.annotate)(highlight, {
        type: "highlight",
        color: "#C73E1D",
        multiline: true,
        iterations: 1,
        animationDuration: 2000
    });
    annotation.show();
});
const navs = document.querySelectorAll("nav");
const menuBtn = document.querySelector(".menu-icon");
navs.forEach((nav)=>{
    nav.addEventListener("click", ()=>{
        toggleNav();
    });
});
menuBtn.addEventListener("click", ()=>{
    toggleNav();
});
function toggleNav() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("hidden");
}

},{"rough-notation":"cWSh6"}],"cWSh6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "annotate", ()=>_);
parcelHelpers.export(exports, "annotationGroup", ()=>m);
const t = "http://www.w3.org/2000/svg";
class e {
    constructor(t){
        this.seed = t;
    }
    next() {
        return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
    }
}
function s(t, e, s, i, n) {
    return {
        type: "path",
        ops: c(t, e, s, i, n)
    };
}
function i(t, e, i) {
    const n = (t || []).length;
    if (n > 2) {
        const s = [];
        for(let e = 0; e < n - 1; e++)s.push(...c(t[e][0], t[e][1], t[e + 1][0], t[e + 1][1], i));
        return e && s.push(...c(t[n - 1][0], t[n - 1][1], t[0][0], t[0][1], i)), {
            type: "path",
            ops: s
        };
    }
    return 2 === n ? s(t[0][0], t[0][1], t[1][0], t[1][1], i) : {
        type: "path",
        ops: []
    };
}
function n(t, e, s, n, o) {
    return function(t, e) {
        return i(t, !0, e);
    }([
        [
            t,
            e
        ],
        [
            t + s,
            e
        ],
        [
            t + s,
            e + n
        ],
        [
            t,
            e + n
        ]
    ], o);
}
function o(t, e, s, i, n) {
    return function(t, e, s, i) {
        const [n, o] = l(i.increment, t, e, i.rx, i.ry, 1, i.increment * h(.1, h(.4, 1, s), s), s);
        let r = f(n, null, s);
        if (!s.disableMultiStroke) {
            const [n] = l(i.increment, t, e, i.rx, i.ry, 1.5, 0, s), o = f(n, null, s);
            r = r.concat(o);
        }
        return {
            estimatedPoints: o,
            opset: {
                type: "path",
                ops: r
            }
        };
    }(t, e, n, function(t, e, s) {
        const i = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(t / 2, 2) + Math.pow(e / 2, 2)) / 2)), n = Math.max(s.curveStepCount, s.curveStepCount / Math.sqrt(200) * i), o = 2 * Math.PI / n;
        let r = Math.abs(t / 2), h = Math.abs(e / 2);
        const c = 1 - s.curveFitting;
        return r += a(r * c, s), h += a(h * c, s), {
            increment: o,
            rx: r,
            ry: h
        };
    }(s, i, n)).opset;
}
function r(t) {
    return t.randomizer || (t.randomizer = new e(t.seed || 0)), t.randomizer.next();
}
function h(t, e, s, i = 1) {
    return s.roughness * i * (r(s) * (e - t) + t);
}
function a(t, e, s = 1) {
    return h(-t, t, e, s);
}
function c(t, e, s, i, n, o = !1) {
    const r = o ? n.disableMultiStrokeFill : n.disableMultiStroke, h = u(t, e, s, i, n, !0, !1);
    if (r) return h;
    const a = u(t, e, s, i, n, !0, !0);
    return h.concat(a);
}
function u(t, e, s, i, n, o, h) {
    const c = Math.pow(t - s, 2) + Math.pow(e - i, 2), u = Math.sqrt(c);
    let f = 1;
    f = u < 200 ? 1 : u > 500 ? .4 : -0.0016668 * u + 1.233334;
    let l = n.maxRandomnessOffset || 0;
    l * l * 100 > c && (l = u / 10);
    const g = l / 2, d = .2 + .2 * r(n);
    let p = n.bowing * n.maxRandomnessOffset * (i - e) / 200, _ = n.bowing * n.maxRandomnessOffset * (t - s) / 200;
    p = a(p, n, f), _ = a(_, n, f);
    const m = [], w = ()=>a(g, n, f), v = ()=>a(l, n, f);
    return o && (h ? m.push({
        op: "move",
        data: [
            t + w(),
            e + w()
        ]
    }) : m.push({
        op: "move",
        data: [
            t + a(l, n, f),
            e + a(l, n, f)
        ]
    })), h ? m.push({
        op: "bcurveTo",
        data: [
            p + t + (s - t) * d + w(),
            _ + e + (i - e) * d + w(),
            p + t + 2 * (s - t) * d + w(),
            _ + e + 2 * (i - e) * d + w(),
            s + w(),
            i + w()
        ]
    }) : m.push({
        op: "bcurveTo",
        data: [
            p + t + (s - t) * d + v(),
            _ + e + (i - e) * d + v(),
            p + t + 2 * (s - t) * d + v(),
            _ + e + 2 * (i - e) * d + v(),
            s + v(),
            i + v()
        ]
    }), m;
}
function f(t, e, s) {
    const i = t.length, n = [];
    if (i > 3) {
        const o = [], r = 1 - s.curveTightness;
        n.push({
            op: "move",
            data: [
                t[1][0],
                t[1][1]
            ]
        });
        for(let e = 1; e + 2 < i; e++){
            const s = t[e];
            o[0] = [
                s[0],
                s[1]
            ], o[1] = [
                s[0] + (r * t[e + 1][0] - r * t[e - 1][0]) / 6,
                s[1] + (r * t[e + 1][1] - r * t[e - 1][1]) / 6
            ], o[2] = [
                t[e + 1][0] + (r * t[e][0] - r * t[e + 2][0]) / 6,
                t[e + 1][1] + (r * t[e][1] - r * t[e + 2][1]) / 6
            ], o[3] = [
                t[e + 1][0],
                t[e + 1][1]
            ], n.push({
                op: "bcurveTo",
                data: [
                    o[1][0],
                    o[1][1],
                    o[2][0],
                    o[2][1],
                    o[3][0],
                    o[3][1]
                ]
            });
        }
        if (e && 2 === e.length) {
            const t = s.maxRandomnessOffset;
            n.push({
                op: "lineTo",
                data: [
                    e[0] + a(t, s),
                    e[1] + a(t, s)
                ]
            });
        }
    } else 3 === i ? (n.push({
        op: "move",
        data: [
            t[1][0],
            t[1][1]
        ]
    }), n.push({
        op: "bcurveTo",
        data: [
            t[1][0],
            t[1][1],
            t[2][0],
            t[2][1],
            t[2][0],
            t[2][1]
        ]
    })) : 2 === i && n.push(...c(t[0][0], t[0][1], t[1][0], t[1][1], s));
    return n;
}
function l(t, e, s, i, n, o, r, h) {
    const c = [], u = [], f = a(.5, h) - Math.PI / 2;
    u.push([
        a(o, h) + e + .9 * i * Math.cos(f - t),
        a(o, h) + s + .9 * n * Math.sin(f - t)
    ]);
    for(let r = f; r < 2 * Math.PI + f - .01; r += t){
        const t = [
            a(o, h) + e + i * Math.cos(r),
            a(o, h) + s + n * Math.sin(r)
        ];
        c.push(t), u.push(t);
    }
    return u.push([
        a(o, h) + e + i * Math.cos(f + 2 * Math.PI + .5 * r),
        a(o, h) + s + n * Math.sin(f + 2 * Math.PI + .5 * r)
    ]), u.push([
        a(o, h) + e + .98 * i * Math.cos(f + r),
        a(o, h) + s + .98 * n * Math.sin(f + r)
    ]), u.push([
        a(o, h) + e + .9 * i * Math.cos(f + .5 * r),
        a(o, h) + s + .9 * n * Math.sin(f + .5 * r)
    ]), [
        u,
        c
    ];
}
function g(t, e) {
    return {
        maxRandomnessOffset: 2,
        roughness: "highlight" === t ? 3 : 1.5,
        bowing: 1,
        stroke: "#000",
        strokeWidth: 1.5,
        curveTightness: 0,
        curveFitting: .95,
        curveStepCount: 9,
        fillStyle: "hachure",
        fillWeight: -1,
        hachureAngle: -41,
        hachureGap: -1,
        dashOffset: -1,
        dashGap: -1,
        zigzagOffset: -1,
        combineNestedSvgPaths: !1,
        disableMultiStroke: "double" !== t,
        disableMultiStrokeFill: !1,
        seed: e
    };
}
function d(e, r, h, a, c, u) {
    const f = [];
    let l = h.strokeWidth || 2;
    const d = function(t) {
        const e = t.padding;
        if (e || 0 === e) {
            if ("number" == typeof e) return [
                e,
                e,
                e,
                e
            ];
            if (Array.isArray(e)) {
                const t = e;
                if (t.length) switch(t.length){
                    case 4:
                        return [
                            ...t
                        ];
                    case 1:
                        return [
                            t[0],
                            t[0],
                            t[0],
                            t[0]
                        ];
                    case 2:
                        return [
                            ...t,
                            ...t
                        ];
                    case 3:
                        return [
                            ...t,
                            t[1]
                        ];
                    default:
                        return [
                            t[0],
                            t[1],
                            t[2],
                            t[3]
                        ];
                }
            }
        }
        return [
            5,
            5,
            5,
            5
        ];
    }(h), p = void 0 === h.animate || !!h.animate, _ = h.iterations || 2, m = h.rtl ? 1 : 0, w = g("single", u);
    switch(h.type){
        case "underline":
            {
                const t = r.y + r.h + d[2];
                for(let e = m; e < _ + m; e++)e % 2 ? f.push(s(r.x + r.w, t, r.x, t, w)) : f.push(s(r.x, t, r.x + r.w, t, w));
                break;
            }
        case "strike-through":
            {
                const t = r.y + r.h / 2;
                for(let e = m; e < _ + m; e++)e % 2 ? f.push(s(r.x + r.w, t, r.x, t, w)) : f.push(s(r.x, t, r.x + r.w, t, w));
                break;
            }
        case "box":
            {
                const t = r.x - d[3], e = r.y - d[0], s = r.w + (d[1] + d[3]), i = r.h + (d[0] + d[2]);
                for(let o = 0; o < _; o++)f.push(n(t, e, s, i, w));
                break;
            }
        case "bracket":
            {
                const t = Array.isArray(h.brackets) ? h.brackets : h.brackets ? [
                    h.brackets
                ] : [
                    "right"
                ], e = r.x - 2 * d[3], s = r.x + r.w + 2 * d[1], n = r.y - 2 * d[0], o = r.y + r.h + 2 * d[2];
                for (const h of t){
                    let t;
                    switch(h){
                        case "bottom":
                            t = [
                                [
                                    e,
                                    r.y + r.h
                                ],
                                [
                                    e,
                                    o
                                ],
                                [
                                    s,
                                    o
                                ],
                                [
                                    s,
                                    r.y + r.h
                                ]
                            ];
                            break;
                        case "top":
                            t = [
                                [
                                    e,
                                    r.y
                                ],
                                [
                                    e,
                                    n
                                ],
                                [
                                    s,
                                    n
                                ],
                                [
                                    s,
                                    r.y
                                ]
                            ];
                            break;
                        case "left":
                            t = [
                                [
                                    r.x,
                                    n
                                ],
                                [
                                    e,
                                    n
                                ],
                                [
                                    e,
                                    o
                                ],
                                [
                                    r.x,
                                    o
                                ]
                            ];
                            break;
                        case "right":
                            t = [
                                [
                                    r.x + r.w,
                                    n
                                ],
                                [
                                    s,
                                    n
                                ],
                                [
                                    s,
                                    o
                                ],
                                [
                                    r.x + r.w,
                                    o
                                ]
                            ];
                    }
                    t && f.push(i(t, !1, w));
                }
                break;
            }
        case "crossed-off":
            {
                const t = r.x, e = r.y, i = t + r.w, n = e + r.h;
                for(let o = m; o < _ + m; o++)o % 2 ? f.push(s(i, n, t, e, w)) : f.push(s(t, e, i, n, w));
                for(let o = m; o < _ + m; o++)o % 2 ? f.push(s(t, n, i, e, w)) : f.push(s(i, e, t, n, w));
                break;
            }
        case "circle":
            {
                const t = g("double", u), e = r.w + (d[1] + d[3]), s = r.h + (d[0] + d[2]), i = r.x - d[3] + e / 2, n = r.y - d[0] + s / 2, h = Math.floor(_ / 2), a = _ - 2 * h;
                for(let r = 0; r < h; r++)f.push(o(i, n, e, s, t));
                for(let t = 0; t < a; t++)f.push(o(i, n, e, s, w));
                break;
            }
        case "highlight":
            {
                const t = g("highlight", u);
                l = .95 * r.h;
                const e = r.y + r.h / 2;
                for(let i = m; i < _ + m; i++)i % 2 ? f.push(s(r.x + r.w, e, r.x, e, t)) : f.push(s(r.x, e, r.x + r.w, e, t));
                break;
            }
    }
    if (f.length) {
        const s = function(t) {
            const e = [];
            for (const s of t){
                let t = "";
                for (const i of s.ops){
                    const s = i.data;
                    switch(i.op){
                        case "move":
                            t.trim() && e.push(t.trim()), t = `M${s[0]} ${s[1]} `;
                            break;
                        case "bcurveTo":
                            t += `C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;
                            break;
                        case "lineTo":
                            t += `L${s[0]} ${s[1]} `;
                    }
                }
                t.trim() && e.push(t.trim());
            }
            return e;
        }(f), i = [], n = [];
        let o = 0;
        const r = (t, e, s)=>t.setAttribute(e, s);
        for (const a of s){
            const s = document.createElementNS(t, "path");
            if (r(s, "d", a), r(s, "fill", "none"), r(s, "stroke", h.color || "currentColor"), r(s, "stroke-width", "" + l), p) {
                const t = s.getTotalLength();
                i.push(t), o += t;
            }
            e.appendChild(s), n.push(s);
        }
        if (p) {
            let t = 0;
            for(let e = 0; e < n.length; e++){
                const s = n[e], r = i[e], h = o ? c * (r / o) : 0, u = a + t, f = s.style;
                f.strokeDashoffset = "" + r, f.strokeDasharray = "" + r, f.animation = `rough-notation-dash ${h}ms ease-out ${u}ms forwards`, t += h;
            }
        }
    }
}
class p {
    constructor(t, e){
        this._state = "unattached", this._resizing = !1, this._seed = Math.floor(Math.random() * 2 ** 31), this._lastSizes = [], this._animationDelay = 0, this._resizeListener = ()=>{
            this._resizing || (this._resizing = !0, setTimeout(()=>{
                this._resizing = !1, "showing" === this._state && this.haveRectsChanged() && this.show();
            }, 400));
        }, this._e = t, this._config = JSON.parse(JSON.stringify(e)), this.attach();
    }
    get animate() {
        return this._config.animate;
    }
    set animate(t) {
        this._config.animate = t;
    }
    get animationDuration() {
        return this._config.animationDuration;
    }
    set animationDuration(t) {
        this._config.animationDuration = t;
    }
    get iterations() {
        return this._config.iterations;
    }
    set iterations(t) {
        this._config.iterations = t;
    }
    get color() {
        return this._config.color;
    }
    set color(t) {
        this._config.color !== t && (this._config.color = t, this.refresh());
    }
    get strokeWidth() {
        return this._config.strokeWidth;
    }
    set strokeWidth(t) {
        this._config.strokeWidth !== t && (this._config.strokeWidth = t, this.refresh());
    }
    get padding() {
        return this._config.padding;
    }
    set padding(t) {
        this._config.padding !== t && (this._config.padding = t, this.refresh());
    }
    attach() {
        if ("unattached" === this._state && this._e.parentElement) {
            !function() {
                if (!window.__rno_kf_s) {
                    const t = window.__rno_kf_s = document.createElement("style");
                    t.textContent = "@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }", document.head.appendChild(t);
                }
            }();
            const e = this._svg = document.createElementNS(t, "svg");
            e.setAttribute("class", "rough-annotation");
            const s = e.style;
            s.position = "absolute", s.top = "0", s.left = "0", s.overflow = "visible", s.pointerEvents = "none", s.width = "100px", s.height = "100px";
            const i = "highlight" === this._config.type;
            if (this._e.insertAdjacentElement(i ? "beforebegin" : "afterend", e), this._state = "not-showing", i) {
                const t = window.getComputedStyle(this._e).position;
                (!t || "static" === t) && (this._e.style.position = "relative");
            }
            this.attachListeners();
        }
    }
    detachListeners() {
        window.removeEventListener("resize", this._resizeListener), this._ro && this._ro.unobserve(this._e);
    }
    attachListeners() {
        this.detachListeners(), window.addEventListener("resize", this._resizeListener, {
            passive: !0
        }), !this._ro && "ResizeObserver" in window && (this._ro = new window.ResizeObserver((t)=>{
            for (const e of t)e.contentRect && this._resizeListener();
        })), this._ro && this._ro.observe(this._e);
    }
    haveRectsChanged() {
        if (this._lastSizes.length) {
            const t = this.rects();
            if (t.length !== this._lastSizes.length) return !0;
            for(let e = 0; e < t.length; e++)if (!this.isSameRect(t[e], this._lastSizes[e])) return !0;
        }
        return !1;
    }
    isSameRect(t, e) {
        const s = (t, e)=>Math.round(t) === Math.round(e);
        return s(t.x, e.x) && s(t.y, e.y) && s(t.w, e.w) && s(t.h, e.h);
    }
    isShowing() {
        return "not-showing" !== this._state;
    }
    refresh() {
        this.isShowing() && !this.pendingRefresh && (this.pendingRefresh = Promise.resolve().then(()=>{
            this.isShowing() && this.show(), delete this.pendingRefresh;
        }));
    }
    show() {
        switch(this._state){
            case "unattached":
                break;
            case "showing":
                this.hide(), this._svg && this.render(this._svg, !0);
                break;
            case "not-showing":
                this.attach(), this._svg && this.render(this._svg, !1);
        }
    }
    hide() {
        if (this._svg) for(; this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);
        this._state = "not-showing";
    }
    remove() {
        this._svg && this._svg.parentElement && this._svg.parentElement.removeChild(this._svg), this._svg = void 0, this._state = "unattached", this.detachListeners();
    }
    render(t, e) {
        let s = this._config;
        e && (s = JSON.parse(JSON.stringify(this._config)), s.animate = !1);
        const i = this.rects();
        let n = 0;
        i.forEach((t)=>n += t.w);
        const o = s.animationDuration || 800;
        let r = 0;
        for(let e = 0; e < i.length; e++){
            const h = o * (i[e].w / n);
            d(t, i[e], s, r + this._animationDelay, h, this._seed), r += h;
        }
        this._lastSizes = i, this._state = "showing";
    }
    rects() {
        const t = [];
        if (this._svg) {
            if (this._config.multiline) {
                const e = this._e.getClientRects();
                for(let s = 0; s < e.length; s++)t.push(this.svgRect(this._svg, e[s]));
            } else t.push(this.svgRect(this._svg, this._e.getBoundingClientRect()));
        }
        return t;
    }
    svgRect(t, e) {
        const s = t.getBoundingClientRect(), i = e;
        return {
            x: (i.x || i.left) - (s.x || s.left),
            y: (i.y || i.top) - (s.y || s.top),
            w: i.width,
            h: i.height
        };
    }
}
function _(t, e) {
    return new p(t, e);
}
function m(t) {
    let e = 0;
    for (const s of t){
        const t = s;
        t._animationDelay = e;
        e += 0 === t.animationDuration ? 0 : t.animationDuration || 800;
    }
    const s = [
        ...t
    ];
    return {
        show () {
            for (const t of s)t.show();
        },
        hide () {
            for (const t of s)t.hide();
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["c60O6","aitAD"], "aitAD", "parcelRequire07e5")

//# sourceMappingURL=index.e5ac7667.js.map

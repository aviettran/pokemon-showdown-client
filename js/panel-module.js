(function(global,factory){if(typeof define==="function"&&define.amd){define(["exports","preact"],factory);}else if(typeof exports!=="undefined"){factory(exports,require("preact"));}else{var mod={exports:{}};factory(mod.exports,global.preact);global.panelModule=mod.exports;}})(typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:this,function(_exports,_preact){"use strict";Object.defineProperty(_exports,"__esModule",{value:true});_exports.Testing=void 0;function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}


/**
 * Topbar Panel
 *
 * Topbar view - handles the topbar and some generic popups.
 *
 * Also sets up global event listeners.
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license AGPLv3
 */var

Testing=function(_Component){_inheritsLoose(Testing,_Component);function Testing(){return _Component.apply(this,arguments)||this;}var _proto=Testing.prototype;_proto.
render=function render(){
return(0,_preact.h)("p",null,"hello");
};return Testing;}(_preact.Component);_exports.Testing=Testing;});
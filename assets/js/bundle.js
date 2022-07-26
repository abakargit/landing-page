/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/var define=false;var burger=document.querySelector('.burger');var menu=document.querySelector('nav');var disScroll=function disScroll(){var pagePosition=window.scrollY;document.body.classList.add('dis--scroll');document.body.dataset.position=pagePosition;document.body.style.top=-pagePosition+"px";};var enScroll=function enScroll(){var pagePosition=parseInt(document.body.dataset.position,10);document.body.style.top='auto';document.body.classList.remove('dis--scroll');window.scrollTo({top:pagePosition,left:0});document.body.removeAttribute('data-position');};burger.addEventListener('click',function(e){burger.classList.toggle('is-active');menu.classList.toggle('is-active');if(burger.classList.contains('is-active')){disScroll();}else{enScroll();}});

/***/ }),

/***/ "./src/js/components/file.js":
/*!***********************************!*\
  !*** ./src/js/components/file.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/var define=false;var fileInput=document.querySelector(".input-file"),button=document.querySelector(".input-file-trigger"),buttontxt=document.querySelector(".input-file-trigger-txt");button.addEventListener("keydown",function(event){if(event.keyCode==13||event.keyCode==32){fileInput.focus();}});button.addEventListener("click",function(event){fileInput.focus();return false;});fileInput.addEventListener("change",function(event){buttontxt.innerHTML=this.value;});

/***/ }),

/***/ "./src/js/components/range.js":
/*!************************************!*\
  !*** ./src/js/components/range.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/var define=false;var slider=document.getElementById("myRange");var output=document.getElementById("range-demo");output.innerHTML=slider.value;slider.oninput=function(){output.innerHTML=this.value;};

/***/ }),

/***/ "./src/js/components/select.js":
/*!*************************************!*\
  !*** ./src/js/components/select.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/var define=false;var x,i,j,l,ll,selElmnt,a,b,c;x=document.getElementsByClassName("my-select");l=x.length;for(i=0;i<l;i++){selElmnt=x[i].getElementsByTagName("select")[0];ll=selElmnt.length;a=document.createElement("DIV");a.setAttribute("class","select-selected");a.innerHTML=selElmnt.options[selElmnt.selectedIndex].innerHTML;x[i].appendChild(a);b=document.createElement("DIV");b.setAttribute("class","select-items select-hide");for(j=1;j<ll;j++){c=document.createElement("DIV");c.innerHTML=selElmnt.options[j].innerHTML;c.addEventListener("click",function(e){var y,i,k,s,h,sl,yl;s=this.parentNode.parentNode.getElementsByTagName("select")[0];sl=s.length;h=this.parentNode.previousSibling;for(i=0;i<sl;i++){if(s.options[i].innerHTML==this.innerHTML){s.selectedIndex=i;h.innerHTML=this.innerHTML;y=this.parentNode.getElementsByClassName("same-as-selected");yl=y.length;for(k=0;k<yl;k++){y[k].removeAttribute("class");}this.setAttribute("class","same-as-selected");break;}}h.click();});b.appendChild(c);}x[i].appendChild(b);a.addEventListener("click",function(e){e.stopPropagation();closeAllSelect(this);this.nextSibling.classList.toggle("select-hide");this.classList.toggle("select-arrow-active");});}function closeAllSelect(elmnt){var x,y,i,xl,yl,arrNo=[];x=document.getElementsByClassName("select-items");y=document.getElementsByClassName("select-selected");xl=x.length;yl=y.length;for(i=0;i<yl;i++){if(elmnt==y[i]){arrNo.push(i);}else{y[i].classList.remove("select-arrow-active");}}for(i=0;i<xl;i++){if(arrNo.indexOf(i)){x[i].classList.add("select-hide");}}}document.addEventListener("click",closeAllSelect);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/select */ "./src/js/components/select.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/range */ "./src/js/components/range.js");
/* harmony import */ var _components_range__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_range__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/file */ "./src/js/components/file.js");
/* harmony import */ var _components_file__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_file__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/burger */ "./src/js/components/burger.js");
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_burger__WEBPACK_IMPORTED_MODULE_3__);
/*** IMPORTS FROM imports-loader ***/var define=false;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
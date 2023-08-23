/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/allTasks.js":
/*!************************************!*\
  !*** ./src/Components/allTasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/Components/task.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\r\n\r\n\r\n\r\nconst taskForm = document.getElementById('task-form');\r\nconst titleInput = document.getElementById('title');\r\nconst descriptionInput = document.getElementById('description');\r\nconst dueDateInput = document.getElementById('dueDate');\r\nconst priorityInput = document.getElementById('priority');\r\nconst submitButton = document.getElementById('addTask');\r\nconst allTaskDiv = document.createElement('div');\r\n\r\n\r\nlet myTasks = []; \r\n\r\nconst addButtonClickListener = () => {\r\n    const addButton = document.getElementById('addButton');\r\n    addButton.addEventListener('click', () => {\r\n        \r\n        taskForm.style.display = 'flex';\r\n\r\n    })\r\n}\r\n\r\nconst createNewTask = () => {\r\n    const newTitle = titleInput.value;\r\n    const newDescription = descriptionInput.value;\r\n    const newDueDate = dueDateInput.value;\r\n    const newPriority = priorityInput.value;\r\n\r\n    if (titleInput.value === '' || descriptionInput.value === '' || dueDateInput.value === '' || priorityInput.value === '') {\r\n        alert('All fields are required');\r\n    } else {\r\n        const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newTitle, newDescription, newDueDate, newPriority);\r\n        myTasks.push(newTask);\r\n        displayTasks();\r\n\r\n        titleInput.value = '';\r\n        descriptionInput.value = '';\r\n    }\r\n}\r\n\r\n\r\nconst displayTasks = () => {\r\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.taskbox.innerHTML = '';\r\n    myTasks.forEach((task, index) => {\r\n        const div = document.createElement('div');\r\n        const titleLabel = document.createElement('h2');\r\n        const descriptionLabel = document.createElement('p');\r\n        const dueDateLabel = document.createElement('p');\r\n        const priorityLabel = document.createElement('p');\r\n        const deleteButton = document.createElement('button');\r\n        const editButton = document.createElement('button');\r\n\r\n        titleLabel.textContent = task.title;\r\n        descriptionLabel.textContent = task.description;\r\n        dueDateLabel.textContent = task.date;\r\n        priorityLabel.textContent = task.priority;\r\n        deleteButton.textContent = 'Delete';\r\n        editButton.textContent = 'Edit';\r\n\r\n        div.setAttribute('data-index', index);\r\n\r\n        deleteButton.addEventListener('click', () => {\r\n            myTasks.splice(index, 1);\r\n            console.log(myTasks);\r\n            displayTasks();\r\n        })\r\n\r\n        editButton.addEventListener('click', () => {    \r\n\r\n            taskForm.style.display = 'flex';\r\n\r\n            titleInput.value = task.title;\r\n            descriptionInput.value = task.description;\r\n            dueDateInput.value = task.date;\r\n            priorityInput.value = task.priority;\r\n\r\n            console.log('EDITAR');\r\n            const editIndex = parseInt(div.getAttribute('data-index'));\r\n\r\n            if (myTasks[editIndex]) {\r\n                // Verificar si el elemento en el índice es válido\r\n                submitButton.removeEventListener('click', createNewTask); // Eliminar el manejador de evento anterior\r\n                submitButton.textContent = 'Save Edit'; // Cambiar el texto del botón\r\n        \r\n                submitButton.addEventListener('click', () => {\r\n                    // Verificar si los campos están completos\r\n                    if (titleInput.value === '' || descriptionInput.value === '' || dueDateInput.value === '' || priorityInput.value === '') {\r\n                        alert('All fields are required');\r\n                    } else {\r\n                        // Actualizar el elemento en myTasks usando el índice\r\n                        myTasks[editIndex].title = titleInput.value;\r\n                        myTasks[editIndex].description = descriptionInput.value;\r\n                        myTasks[editIndex].date = dueDateInput.value;\r\n                        myTasks[editIndex].priority = priorityInput.value;\r\n        \r\n                        submitButton.textContent = 'Add Task'; \r\n                        submitButton.removeEventListener('click', editButton); \r\n                        submitButton.addEventListener('click', createNewTask); \r\n        \r\n                        // Restablecer los campos del formulario\r\n                        titleInput.value = '';\r\n                        descriptionInput.value = '';\r\n                        dueDateInput.value = '';\r\n                        taskForm.style.display = 'none'; // Ocultar el formulario de edición\r\n                    }\r\n                });\r\n            } else {\r\n                console.log(\"Invalid index or task not found\");\r\n            }\r\n\r\n            displayTasks();\r\n\r\n        })\r\n\r\n        div.appendChild(titleLabel);\r\n        div.appendChild(descriptionLabel);\r\n        div.appendChild(dueDateLabel);\r\n        div.appendChild(priorityLabel);\r\n        div.appendChild(deleteButton);\r\n        div.appendChild(editButton);\r\n\r\n        _index_js__WEBPACK_IMPORTED_MODULE_1__.taskbox.appendChild(div);\r\n    })\r\n\r\n    taskForm.style.display = 'none';\r\n};\r\n\r\n\r\nfunction allTasks() {\r\n    addButtonClickListener();\r\n    submitButton.addEventListener('click', createNewTask);\r\n    displayTasks();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allTasks);\n\n//# sourceURL=webpack://todo-list/./src/Components/allTasks.js?");

/***/ }),

/***/ "./src/Components/impTasks.js":
/*!************************************!*\
  !*** ./src/Components/impTasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction impTasks() {\r\n    const impTask = document.createElement('div');\r\n    impTask.textContent = 'Important tasks';\r\n    \r\n    return impTask;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (impTasks);\n\n//# sourceURL=webpack://todo-list/./src/Components/impTasks.js?");

/***/ }),

/***/ "./src/Components/task.js":
/*!********************************!*\
  !*** ./src/Components/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass Task {\r\n    constructor(title, date, description , priority) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.date = date;\r\n        this.priority = priority;}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todo-list/./src/Components/task.js?");

/***/ }),

/***/ "./src/Components/todayTasks.js":
/*!**************************************!*\
  !*** ./src/Components/todayTasks.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction todayTasks() {\r\n    const todaytask = document.createElement('div');\r\n    todaytask.textContent = 'Today tasks';\r\n    \r\n    return todaytask;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todayTasks);\n\n//# sourceURL=webpack://todo-list/./src/Components/todayTasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskbox: () => (/* binding */ taskbox)\n/* harmony export */ });\n/* harmony import */ var _Components_allTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/allTasks */ \"./src/Components/allTasks.js\");\n/* harmony import */ var _Components_impTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/impTasks */ \"./src/Components/impTasks.js\");\n/* harmony import */ var _Components_todayTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/todayTasks */ \"./src/Components/todayTasks.js\");\n\r\n\r\n\r\n\r\n\r\nconst taskbox = document.getElementById('task');\r\n\r\n\r\nconst allTask = document.getElementById('allTasks');\r\nallTask.addEventListener('click', () => {\r\n    renderTasks(_Components_allTasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n})\r\n\r\n\r\nconst todayTask = document.getElementById('todayTasks');\r\ntodayTask.addEventListener('click', () => {\r\n    renderTasks(_Components_todayTasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n})\r\n\r\nconst impTask = document.getElementById('impTasks');\r\nimpTask.addEventListener('click', () => {\r\n    renderTasks(_Components_impTasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n})\r\n\r\n\r\n\r\n\r\n// render the tasks\r\nfunction renderTasks(component)  {\r\n    taskbox.innerHTML = '';\r\n    const taskNode = component();\r\n    taskbox.appendChild(taskNode);\r\n}\r\n\r\nrenderTasks(_Components_allTasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
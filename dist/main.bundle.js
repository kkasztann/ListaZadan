webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-task/add-task.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-task/add-task.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <input [(ngModel)]=\"newTask\">\n  <button (click)=\"add()\">Dodaj</button>\n</div>\n"

/***/ }),

/***/ "./src/app/add-task/add-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tasks_service__ = __webpack_require__("./src/app/services/tasks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(tasksService) {
        this.tasksService = tasksService;
    }
    AddTaskComponent.prototype.add = function () {
        var task = ({ name: this.newTask, created: new Date().toLocaleString(), isDone: false });
        this.tasksService.add(task);
        this.newTask = '';
    };
    AddTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-add-task',
            template: __webpack_require__("./src/app/add-task/add-task.component.html"),
            styles: [__webpack_require__("./src/app/add-task/add-task.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tasks_service__["a" /* TasksService */]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: distribute; justify-content: space-around;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <div class=\"container\">\n  <app-add-task></app-add-task>\n  </div>\n\n  <div class=\"container\">\n    <div>\n      <app-todo-task></app-todo-task>\n    </div>\n\n    <div>\n    <app-done-task></app-done-task>\n    </div>\n  </div >\n  <button (click)=\"save()\">Zapisz</button>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tasks_service__ = __webpack_require__("./src/app/services/tasks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(tasksService) {
        this.tasksService = tasksService;
    }
    AppComponent.prototype.save = function () {
        this.tasksService.saveTasksInDb();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tasks_service__["a" /* TasksService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_task_add_task_component__ = __webpack_require__("./src/app/add-task/add-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_task_todo_task_component__ = __webpack_require__("./src/app/todo-task/todo-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__done_task_done_task_component__ = __webpack_require__("./src/app/done-task/done-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_tasks_service__ = __webpack_require__("./src/app/services/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_checked_directive__ = __webpack_require__("./src/app/shared/checked.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_date_directive__ = __webpack_require__("./src/app/shared/date.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_transform_task_pipe__ = __webpack_require__("./src/app/shared/transform-task.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_sort_name_pipe__ = __webpack_require__("./src/app/shared/sort-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__add_task_add_task_component__["a" /* AddTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_5__todo_task_todo_task_component__["a" /* TodoTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_6__done_task_done_task_component__["a" /* DoneTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_checked_directive__["a" /* CheckedDirective */],
                __WEBPACK_IMPORTED_MODULE_9__shared_date_directive__["a" /* DateDirective */],
                __WEBPACK_IMPORTED_MODULE_10__shared_transform_task_pipe__["a" /* TransformTaskPipe */],
                __WEBPACK_IMPORTED_MODULE_11__shared_sort_name_pipe__["a" /* SortNamePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_tasks_service__["a" /* TasksService */], __WEBPACK_IMPORTED_MODULE_12__services_http_service__["a" /* HttpService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/done-task/done-task.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/done-task/done-task.component.html":
/***/ (function(module, exports) {

module.exports = "<p> Wykonane zadania: {{tasksDone.length}} </p>\n      <ul>\n        <li appChecked appDate [date]=\"task.end\" *ngFor=\"let task of tasksDone\">\n          {{task.name | transformTask: ' - super!'}}\n        </li>\n      </ul>\n"

/***/ }),

/***/ "./src/app/done-task/done-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoneTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tasks_service__ = __webpack_require__("./src/app/services/tasks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoneTaskComponent = /** @class */ (function () {
    function DoneTaskComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.tasksDone = [];
        this.taskService.getTasksListObs().subscribe(function (tasks) {
            _this.tasksDone = tasks.filter(function (t) { return t.isDone === true; });
        });
    }
    DoneTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-done-task',
            template: __webpack_require__("./src/app/done-task/done-task.component.html"),
            styles: [__webpack_require__("./src/app/done-task/done-task.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tasks_service__["a" /* TasksService */]])
    ], DoneTaskComponent);
    return DoneTaskComponent;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.URL_DB = 'https://api.mlab.com/api/1/databases/angular_db/collections/tasks';
        this.param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('apiKey', 'PsLHfT3wvSJXSHugIiHZWkp280me2gD-');
        this.getTasks();
    }
    HttpService.prototype.getTasks = function () {
        return this.http.get(this.URL_DB, { params: this.param });
    };
    HttpService.prototype.saveTasks = function (list) {
        this.http.put(this.URL_DB, list, { params: this.param }).
            subscribe(function (data) {
            console.log(data);
        });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/tasks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasksService = /** @class */ (function () {
    function TasksService(httpService) {
        var _this = this;
        this.httpService = httpService;
        this.tasksListObs = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.httpService.getTasks().subscribe(function (list) {
            _this.tasksListObs.next(list);
        });
    }
    TasksService.prototype.add = function (task) {
        var list = this.tasksListObs.getValue();
        list.push(task);
        this.tasksListObs.next(list);
    };
    TasksService.prototype.remove = function (task) {
        var list = this.tasksListObs.getValue().filter(function (e) { return e !== task; });
        this.tasksListObs.next(list);
    };
    TasksService.prototype.done = function (task) {
        task.end = new Date().toLocaleString();
        task.isDone = true;
        var list = this.tasksListObs.getValue();
        this.tasksListObs.next(list);
    };
    TasksService.prototype.getTasksListObs = function () {
        return this.tasksListObs.asObservable();
    };
    TasksService.prototype.saveTasksInDb = function () {
        this.httpService.saveTasks(this.tasksListObs.getValue());
    };
    TasksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]])
    ], TasksService);
    return TasksService;
}());



/***/ }),

/***/ "./src/app/shared/checked.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckedDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckedDirective = /** @class */ (function () {
    function CheckedDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    CheckedDirective.prototype.ngOnInit = function () {
        var li = this.el.nativeElement;
        this.renderer.setStyle(li, 'list-style-image', 'url(/assets/checked.png)');
        this.renderer.setStyle(li, 'background', 'aquamarine');
    };
    CheckedDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[appChecked]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer2 */]])
    ], CheckedDirective);
    return CheckedDirective;
}());



/***/ }),

/***/ "./src/app/shared/date.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateDirective = /** @class */ (function () {
    function DateDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.paragraph = this.renderer.createElement('p');
    }
    DateDirective.prototype.mouseEnter = function (eventDate) {
        this.paragraph.innerHTML = this.date;
        this.renderer.appendChild(this.el.nativeElement, this.paragraph);
    };
    DateDirective.prototype.mouseLeave = function (eventDate) {
        this.renderer.removeChild(this.el.nativeElement, this.paragraph);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], DateDirective.prototype, "date", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], DateDirective.prototype, "mouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], DateDirective.prototype, "mouseLeave", null);
    DateDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[appDate]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer2 */]])
    ], DateDirective);
    return DateDirective;
}());



/***/ }),

/***/ "./src/app/shared/sort-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortNamePipe = /** @class */ (function () {
    function SortNamePipe() {
    }
    SortNamePipe.prototype.transform = function (value, args) {
        return value.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            else {
                return -1;
            }
        });
    };
    SortNamePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Pipe */])({
            name: 'sortName'
        })
    ], SortNamePipe);
    return SortNamePipe;
}());



/***/ }),

/***/ "./src/app/shared/transform-task.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransformTaskPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TransformTaskPipe = /** @class */ (function () {
    function TransformTaskPipe() {
    }
    TransformTaskPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = ''; }
        return value.charAt(0).toUpperCase() + value.slice(1) + args;
    };
    TransformTaskPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Pipe */])({
            name: 'transformTask'
        })
    ], TransformTaskPipe);
    return TransformTaskPipe;
}());



/***/ }),

/***/ "./src/app/todo-task/todo-task.component.css":
/***/ (function(module, exports) {

module.exports = ".odd-li {\r\n  background: lavender;\r\n  margin: 5px;\r\n}\r\n\r\n.last-li {\r\n  background: pink;\r\n  margin: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/todo-task/todo-task.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"tasksList.length > 0; else noTask\">\n  <p [ngStyle]=\"{color: getColor()}\">Zadania do wykonania: {{tasksList.length}}</p>\n  <ul>\n    <li appDate [date]=\"task.created\" *ngFor=\"let task of tasksList | sortName; let odd = odd\" [ngClass]=\"{'odd-li': odd, 'last-li': tasksList.length===1}\">\n      {{task.name | transformTask: '!'}}\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"remove(task)\">Usuń</button>\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"done(task)\">Zrobione</button>\n    </li>\n  </ul>\n</ng-container>\n<ng-template #noTask>\n  <p>Brak zadań, masz czas wolny!</p>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/todo-task/todo-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tasks_service__ = __webpack_require__("./src/app/services/tasks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoTaskComponent = /** @class */ (function () {
    function TodoTaskComponent(tasksService) {
        var _this = this;
        this.tasksService = tasksService;
        this.tasksList = [];
        this.tasksService.getTasksListObs().subscribe(function (tasks) {
            _this.tasksList = tasks.filter(function (t) { return t.isDone === false; });
        });
    }
    TodoTaskComponent.prototype.ngOnInit = function () {
    };
    TodoTaskComponent.prototype.remove = function (task) {
        this.tasksService.remove(task);
    };
    TodoTaskComponent.prototype.done = function (task) {
        this.tasksService.done(task);
    };
    TodoTaskComponent.prototype.getColor = function () {
        return this.tasksList.length >= 5 ? 'red' : 'green';
    };
    TodoTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-todo-task',
            template: __webpack_require__("./src/app/todo-task/todo-task.component.html"),
            styles: [__webpack_require__("./src/app/todo-task/todo-task.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tasks_service__["a" /* TasksService */]])
    ], TodoTaskComponent);
    return TodoTaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
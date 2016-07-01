"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var teacher_component_1 = require('./teacher.component');
var takeLesson_service_1 = require('./takeLesson.service');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "About Toefl";
        this.toefl = {
            "totalPartNumber": 4,
            "date": "21/02/2017",
            "type": "tryout"
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>My First Angular 2 App</h1>\n  \t\t<h2>{{title}}</h2>\n  \t\t<h3>{{toefl.date}}</h3>\n  \t\t<my-teachers></my-teachers>",
            directives: [teacher_component_1.TeacherComponent],
            providers: [takeLesson_service_1.TakeLessonService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
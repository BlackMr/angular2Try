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
var takeLesson_service_1 = require('./takeLesson.service');
var TeacherComponent = (function () {
    function TeacherComponent(takeLessonService) {
        this.takeLessonService = takeLessonService;
        this.cash = 10000;
    }
    TeacherComponent.prototype.ngOnInit = function () {
        this.teachers = this.takeLessonService.getLessonTaken();
    };
    TeacherComponent.prototype.totalLessons = function () {
        var sum = 0;
        for (var _i = 0, _a = this.teachers; _i < _a.length; _i++) {
            var teacher = _a[_i];
            sum += teacher.lessons;
        }
        return sum;
    };
    TeacherComponent.prototype.upQuantity = function (teacher) {
        if (teacher.available == true) {
            if (teacher.lessonPackages < teacher.maxLessons) {
                teacher.lessonPackages++;
            }
        }
        else {
            alert("This teacher is not available");
        }
    };
    TeacherComponent.prototype.downQuantity = function (teacher) {
        if (teacher.lessonPackages != 0) {
            teacher.lessonPackages--;
        }
    };
    TeacherComponent.prototype.showKey = function (event) {
        alert(event.keyCode);
    };
    TeacherComponent.prototype.cashLeft = function () {
        return this.cash - this.price();
        console.log('MUST BE CASHED OUT');
    };
    TeacherComponent = __decorate([
        core_1.Component({
            selector: 'my-teachers',
            templateUrl: 'app/teacher.component.html',
            styleUrls: ['app/teacher.component.css']
        }), 
        __metadata('design:paramtypes', [takeLesson_service_1.TakeLessonService])
    ], TeacherComponent);
    return TeacherComponent;
}());
exports.TeacherComponent = TeacherComponent;
//# sourceMappingURL=teacher.component.js.map
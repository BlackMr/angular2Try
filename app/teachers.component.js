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
var TeacherComponent = (function () {
    function TeacherComponent() {
        this.teachers = [{
                "id": 1,
                "name": "selin Kosta",
                "age": 34,
                "rating": 88,
                "price": 399,
                "lessons": 3
            },
            {
                "id": 2,
                "name": "Nurten Bala",
                "age": 28,
                "rating": 64,
                "price": 132,
                "lessons": 3
            },
            {
                "id": 3,
                "name": "Ayşe Yalın",
                "age": 58,
                "rating": 0,
                "price": 209,
                "lessons": 3
            }];
    }
    TeacherComponent.prototype.totalLessons = function () {
        var sum = 0;
        for (var _i = 0, _a = this.teachers; _i < _a.length; _i++) {
            var teacher = _a[_i];
            sum += teacher.lessons;
        }
        return sum;
    };
    TeacherComponent = __decorate([
        core_1.Component({
            selector: 'my-teachers',
            template: "<h1>Our Teachers</h1>\n  \t\t\t<h1>We have {{totalLessons()}} lessons in our platform</h1>\n  \t\t\t<ul>\n\t\t  \t\t<li *ngFor=\"let teacher of teachers\">\n\t\t  \t\t\t<p>{{teacher.name | uppercase}}</p>\n\t\t  \t\t\t<p>{{teacher.age}}</p>\n\t\t  \t\t\t<p>{{teacher.price | currency: 'EUR':true}}</p>\n\t\t  \t\t\t<p>Ratings</p>\n\t\t  \t\t\t<p *ngIf=\"tWeacher.rating > 0\">{{teacher.rating}} / 100</p>\n\t\t  \t\t\t<p *ngIf=\"teacher.rating === 0\"> hasn't voted yet!!!</p>\n\t\t  \t\t</li>\n  \t\t\t</ul>"
        }), 
        __metadata('design:paramtypes', [])
    ], TeacherComponent);
    return TeacherComponent;
}());
exports.TeacherComponent = TeacherComponent;
//# sourceMappingURL=teachers.component.js.map
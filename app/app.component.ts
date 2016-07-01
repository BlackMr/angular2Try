import { Component } from '@angular/core';
import { TeacherComponent } from './teacher.component';
import { TakeLessonService } from './takeLesson.service';

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
  		<h2>{{title}}</h2>
  		<h3>{{toefl.date}}</h3>
  		<my-teachers></my-teachers>`,
  directives:[TeacherComponent],
  providers: [TakeLessonService]
})

export class AppComponent{
title="About Toefl";
	toefl = {
		"totalPartNumber" : 4,
		"date": "21/02/2017",
		"type": "tryout"
	};
}

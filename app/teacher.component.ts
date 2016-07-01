import { Component } from '@angular/core';
import { Teacher } from './teacher';
import { TakeLessonService } from './takeLesson.service';

@Component({
  selector: 'my-teachers',
  templateUrl: 'app/teacher.component.html',
  styleUrls:['app/teacher.component.css']
})

export class TeacherComponent { 
	cash = 10000;
	teachers: Teacher[];

	constructor(private takeLessonService: TakeLessonService){}
	ngOnInit() {
	this.teachers= this.takeLessonService.getLessonTaken();
	}

	totalLessons() {
		let sum = 0; 
		for (let teacher of this.teachers){
			sum += teacher.lessons;
		}

		return sum;
	}

	upQuantity(teacher){
		if(teacher.available == true){
		if(teacher.lessonPackages < teacher.maxLessons){
		teacher.lessonPackages++;
		}
		} else { alert("This teacher is not available")}
	}

	downQuantity(teacher){
		if(teacher.lessonPackages != 0) {
			teacher.lessonPackages--;
		}
	}

	showKey(event){
		alert(event.keyCode);
	}

	cashLeft() {
    return this.cash - this.price();
    console.log('MUST BE CASHED OUT');
  }
}
import { TEACHERS } from './allteachers';
import { Injectable} from '@angular/core';

@Injectable()
export class TakeLessonService{
	getLessonTaken(){
	return TEACHERS;
	}
}
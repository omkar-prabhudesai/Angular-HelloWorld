import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService{

    getCourses(){
        return ['Course1','Course2','Course3'];
    }

}
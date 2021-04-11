import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiaryModel } from 'src/app/models/diary.model';
import { DiaryService } from 'src/app/services/diary.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-viewdiary',
  templateUrl: './viewdiary.component.html',
  styleUrls: ['./viewdiary.component.css']
})
export class ViewdiaryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private diaryService: DiaryService, public userService: UserService) { }

  diary: DiaryModel;
  dateArray = [];

  delete(id) {
    this.diaryService.deletediary(id).subscribe(status => {
      if (status.message == "success") {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.diaryService.getdiary(params.id).subscribe(data => {
        this.diary = data;
        this.diary.content = this.diary.content.split('\\n').join('\n');
        this.dateArray = this.diary.date.split('\\n');
      });
    });
  }

}


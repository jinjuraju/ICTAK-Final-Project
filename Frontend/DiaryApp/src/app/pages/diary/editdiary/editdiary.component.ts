import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiaryModel } from 'src/app/models/diary.model';
import { DiaryService } from 'src/app/services/diary.service';
@Component({
  selector: 'app-editdiary',
  templateUrl: './editdiary.component.html',
  styleUrls: ['./editdiary.component.css']
})
export class EditdiaryComponent implements OnInit {

  constructor(private router: Router, private diaryService: DiaryService, private activatedRoute: ActivatedRoute) { }

  diary: DiaryModel = new DiaryModel(null, null, null, null, null, null, null);

  submit() {
    this.diary.content = this.diary.content.split('\n').join('\\n');
    this.diary.date = this.diary.date.split('\n').join('\\n');
    this.diaryService.editdiary(this.diary).subscribe(status => {
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
        this.diary.date = this.diary.date.split('\\n').join('\n');
      });
    });
  }

}

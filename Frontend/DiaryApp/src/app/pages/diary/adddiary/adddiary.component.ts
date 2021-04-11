import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiaryModel } from 'src/app/models/diary.model';
import { DiaryService } from 'src/app/services/diary.service';
@Component({
  selector: 'app-adddiary',
  templateUrl: './adddiary.component.html',
  styleUrls: ['./adddiary.component.css']
})
export class AdddiaryComponent implements OnInit {

  constructor(private router: Router, private diaryService: DiaryService) { }

  diary: DiaryModel = new DiaryModel(null, null, null, null, null, null, null);

  submit() {
    this.diary.content = this.diary.content.split('\n').join('\\n');
    this.diary.date = this.diary.date.split('\n').join('\\n');
    this.diaryService.adddiary(this.diary).subscribe(status => {
      if (status.message == "success") {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit(): void {
  }

}


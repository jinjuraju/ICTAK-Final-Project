import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiaryModel } from 'src/app/models/diary.model';
import { DiaryService } from 'src/app/services/diary.service';
@Component({
  selector: 'app-viewalldiarys',
  templateUrl: './viewalldiarys.component.html',
  styleUrls: ['./viewalldiarys.component.css']
})
export class ViewalldiarysComponent implements OnInit {

  constructor(private router: Router, private diaryService: DiaryService) { }

  diarys: DiaryModel[];

  redirect(id:any){
    this.router.navigate(['/view/'+id]);
  }

  ngOnInit(): void {
    this.diaryService.getalldiarys().subscribe(data => {
      this.diarys = data.reverse();
      console.log(this.diarys)
    });
  }

}


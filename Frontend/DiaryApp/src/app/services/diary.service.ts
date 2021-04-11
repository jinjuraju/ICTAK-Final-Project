import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor(private http: HttpClient) { }

  adddiary(diary: any) {
    return this.http.post<any>('http://localhost:7000/adddiary', { "diary": diary });
  };
  editdiary(diary: any) {
    return this.http.post<any>('http://localhost:7000/editdiary', { "diary": diary });
  };
  getalldiarys() {
    return this.http.post<any>('http://localhost:7000/getalldiarys', { "get": "get" });
  };
  getdiary(id: any) {
    return this.http.post<any>('http://localhost:7000/getdiary', { "id": id });
  };
  deletediary(id: any) {
    return this.http.post<any>('http://localhost:7000/deletediary', { "id": id });
  };
}

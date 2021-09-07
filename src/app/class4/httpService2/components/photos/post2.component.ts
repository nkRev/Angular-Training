import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/class4/httpService2/services/data.service';
import { IPhoto } from '../../photo.model';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.css'],
})
export class Post2Component implements OnInit {
  public photo: IPhoto[] = [];

  constructor(private dataservice: DataService) {
    this.dataservice.getPhotos().subscribe((data) => (this.photo = data));
  }

  ngOnInit(): void {}
}

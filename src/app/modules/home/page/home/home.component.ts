import {Component, OnInit} from '@angular/core';
import {HomeServiceService} from 'src/app/data/service/home/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  textInput: string = '';
  constructor(private homeService: HomeServiceService) {}

  async ngOnInit() {
    const response = await this.inquireRegion();
    console.log(response);
  }

  async inquireRegion() {
    const response = await this.homeService.inquireRegion().toPromise();
    return response;
  }
}

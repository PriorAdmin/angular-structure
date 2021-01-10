import {Component, OnInit} from '@angular/core';
import {HomeServiceService} from '@data/service/home/home-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navItems = [{link: '', title: 'Home'}];

  constructor(private homeService: HomeServiceService) {}

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.homeService.menuInquire().subscribe((res) => {
      console.log(res);
    });
  }
}

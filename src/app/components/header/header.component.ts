import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
  }

}

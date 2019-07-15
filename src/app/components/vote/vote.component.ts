import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input()
  moyVote = 5;

  @Input()
  nbVote = 150;

  constructor() { }

  ngOnInit() {
  }

}

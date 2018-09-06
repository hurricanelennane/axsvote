import { Component, OnInit } from '@angular/core';
import { Vote } from '../vote'
import { VoteService } from '../vote.service';
import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-vote-form',
  templateUrl: './vote-form.component.html',
  styleUrls: ['./vote-form.component.css']
})
export class VoteFormComponent implements OnInit {
  model = new Vote("", "", "", "")
  submitted = false;
  constructor() { }
  onSubmit() {
    this.submitted = true;
    console.log("onSubmit got called")
    //this.model.reset();
  }
  ngOnInit() {
  }
  public postData = function (name, subject, type) {
    console.log("PostData")
    console.log("Name: " + name)
    console.log("Subject: " + subject)
    console.log("Type : " + type)
    
    // return componentRefresh;
    //TODO Make a POST Request.
    //TODO Render some kind of a confirmation

    // let myVote = new Vote("Zach Lennane", "The booty is mine - it belongs to me", "Positive");
    // let doleVote = new Vote("Dylan Tastet", "Wah, I don't like Jonathan Boucher", "Negative");
    // console.log("the submit button was pressed");
    // console.log(myVote);
    // console.log(doleVote);
  }
}

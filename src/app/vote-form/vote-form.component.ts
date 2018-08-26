import { Component, OnInit } from '@angular/core';
import {Vote} from '../vote'
@Component({
  selector: 'app-vote-form',
  templateUrl: './vote-form.component.html',
  styleUrls: ['./vote-form.component.css']
})
export class VoteFormComponent implements OnInit {
  model = new Vote("", "", "")
  submitted = false;
  constructor() { }

  ngOnInit() {
    //this.postData
    //console.log(new Vote(1,"Zach Lennane", "The booty is mine - it belongs to me", "Postiive"));
  }
  public postData = function(name,subject,type){
    console.log("PostData")
    console.log("Name: " + name)
    console.log("Subject: " + subject)
    console.log("Type : " + type)
    //TODO Make a POST Request.
    //TODO Render some kind of a confirmation

    // let myVote = new Vote("Zach Lennane", "The booty is mine - it belongs to me", "Postiive");
    // let doleVote = new Vote("Dylan Tastet", "Wah, I don't like Jonathan Boucher", "Negative");
    // console.log("the submit button was pressed");
    // console.log(myVote);
    // console.log(doleVote);
  }
}

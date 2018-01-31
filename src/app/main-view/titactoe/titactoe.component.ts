import { Component, OnInit } from '@angular/core';
import {GmailService} from '../../gmail.service';

@Component({
  selector: 'app-titactoe',
  templateUrl: './titactoe.component.html',
  styleUrls: ['./titactoe.component.css']
})
export class TitactoeComponent implements OnInit {
players = false;
myMail: String = '';
constructor(private gmailservice: GmailService) {}
  ngOnInit() {
  }

  numberOfPlayers() {

      this.players = !this.players;

    }

sendmail() {
  this.gmailservice.sendGmail(this.myMail).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  );
  console.log(this.myMail);
}
}

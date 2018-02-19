import { Component, OnInit } from '@angular/core';
import {GmailService} from '../../gmail.service';
import { Router } from '@angular/router';
import { Model } from '../../model';
import {log} from 'util';

@Component({
  selector: 'app-titactoe',
  templateUrl: './titactoe.component.html',
  styleUrls: ['./titactoe.component.css']
})
export class TitactoeComponent implements OnInit {

myMail: string = '';

constructor(private gmailservice: GmailService, private  router: Router, private model: Model) {

}
  ngOnInit() {
    this.model.identity = Math.floor((Math.random() * 10000) );
    console.log('in init: ' + this.model.player + 'identity: ' + this.model.identity);
  }

  numberOfPlayer(n: number) {
      if (n === 1) {
      this.model.player = 'X';
     // console.log(this.model.player);
      }else {
        this.model.player = 'O';
       // console.log(this.model.player);
      }
    }

sendmail() {
  this.gmailservice.sendGmail(this.myMail, this.model.identity, this.model.player).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  );
  console.log(this.myMail);

  this.router.navigateByUrl('tictactoe/tttgame');
}
}

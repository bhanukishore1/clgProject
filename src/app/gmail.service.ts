import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpHeaders} from '@angular/common/http';
import {Model} from './model';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class GmailService {

  constructor(private http: Http, public model: Model ) {}
  sendGmail(g: any, i: number, c: string ) {
    console.log('sending:' + g);

    /*return this.http.post('https://emailsending-fd6e3.firebaseio.com/data.json', JSON.stringify({gmail}));*/
    return this.http.get('http://localhost:8080/NewMavenProj/webapi/myresource?g=' + g + '&i=' + i + '&c=' + c);
    /*return this.http.get('http://localhost:8080/NewMavenProj/webapi/myresource/' + this.str  );*/
        }

  sendPlayer(abc: any) {
    console.log('sending player');
    return this.http.post('http://localhost:8080/NewMavenProj/webapi/myresource/secondplayer', JSON.stringify({abc}));

  }

  sendPlayposition(identity: number, abc: String, chosen: String) {
    console.log('sending playposition');
    const body = {
      identity, abc, chosen
    }
    const headers = new Headers(
      {
        'Content-Type': 'application/json',
        });
    (this.http.post('http://localhost:8080/NewMavenProj/webapi/myresource/playposition', body, headers)).subscribe(
      (response: Response) => {

        console.log(response.json());
        console.log('In response section');
        console.log(response);
       const data = response.json();

        console.log('entered for loop');
        console.log(data.oneone);
       this.model.oneone = data.oneone;
       this.model.onetwo = data.onetwo;
       this.model.onethree = data.onethree;
       this.model.twoone = data.twoone;
       this.model.twotwo = data.twotwo;
       this.model.twothree = data.twothree;
       this.model.threeone = data.threeone;
       this.model.threetwo = data.threetwo;
       this.model.threethree = data.threethree;
       },
      (error) => {console.log(error);
      console.log('In error')}
    );
  }

  sendPlaypositiontimer(identity: number) {
    console.log('sending playposition');
    const body = {
      identity
    }
    const headers = new Headers(
      {
        'Content-Type': 'application/json',
      });
    (this.http.post('http://localhost:8080/NewMavenProj/webapi/myresource/getpositions', body, headers)).subscribe(
      (response: Response) => {

        console.log(response.json());
        const data = response.json();

        console.log('entered for loop');
        console.log(data.oneone);
        this.model.oneone = data.oneone;
        this.model.onetwo = data.onetwo;
        this.model.onethree = data.onethree;
        this.model.twoone = data.twoone;
        this.model.twotwo = data.twotwo;
        this.model.twothree = data.twothree;
        this.model.threeone = data.threeone;
        this.model.threetwo = data.threetwo;
        this.model.threethree = data.threethree;
        if (data.audience !== 'null' && this.model.player !== data.audience) {
          this.model.click = 1;
        }
        if (data.second_user !== 'null') {
          this.model.won = data.second_user;
          console.log(this.model.won);
          //this.wonPlayer(data.second_user);
        }
      },
      (error) => console.log(error)
    );
  }
    getChosen() {
      const myObservable =  Observable.interval(10*1000);
        myObservable.subscribe(
          (number: number) => this.sendPlaypositiontimer(this.model.identity)
    );
  }


   // wonPlayer(s: string) {
   //  console.log("came to wonplayer");
   //   //const myObservable =  Observable.interval(1000);
   //   return s;
   //  }
}

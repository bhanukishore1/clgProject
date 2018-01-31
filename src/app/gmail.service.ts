import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class GmailService {
  constructor(private http: Http ) {}
  sendGmail(gmail: any ) {
    console.log('sending:' + gmail);
    return this.http.post('https://emailsending-fd6e3.firebaseio.com/data.json', JSON.stringify({gmail}));
        }
}

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {HttpHeaders} from '@angular/common/http';


@Injectable()
export class GmailService {
  
  constructor(private http: Http ) {}
  sendGmail(gmail: any ) {
    console.log('sending:' + gmail);

    /*return this.http.post('https://emailsending-fd6e3.firebaseio.com/data.json', JSON.stringify({gmail}));*/
    return this.http.post('http://localhost:8080/NewMavenProj/webapi/myresource', JSON.stringify({gmail}));
    /*return this.http.get('http://localhost:8080/NewMavenProj/webapi/myresource/' + this.str  );*/
        }
}

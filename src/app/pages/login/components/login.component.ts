import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(/* private authentication: AuthenticationService, private router: Router */) { }

    ngOnInit() {
    }

    /* login(username, password) {
        this.authentication.login(username, password);
    } */

}

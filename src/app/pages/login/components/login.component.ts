import { Component, OnInit } from '@angular/core';

/* tmp */
import { SelectItem } from 'primeng/api';

interface City {
  name: string,
  code: string
}
/* end tmp */

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /* tmp */
  cities1: SelectItem[];

  selectedCities1: City[];
  /* end tmp */

  constructor(/* private authentication: AuthenticationService, private router: Router */) {
    /* tmp */
    this.cities1 = [
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];
    /* end tmp */
  }

  ngOnInit() {
  }

  /* login(username, password) {
      this.authentication.login(username, password);
  } */

}

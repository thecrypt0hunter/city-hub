import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

export interface Account {
    name: string;
    id: string;
}
@Component({
    selector: 'app-load',
    templateUrl: './load.component.html',
    styleUrls: ['./load.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class LoadComponent {
    @HostBinding('class.load') hostClass = true;

    constructor(private authService: AuthenticationService, private router: Router) {

    }

    login() {
        //this.authService.authenticated = true;
        //this.router.navigateByUrl('/dashboard');
    }
}

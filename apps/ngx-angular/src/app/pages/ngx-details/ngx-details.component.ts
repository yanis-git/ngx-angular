import { Component } from '@angular/core';

@Component({
  selector: 'nx-angular-ngx-details',
  templateUrl: './ngx-details.component.html',
  styleUrls: ['./ngx-details.component.scss'],
})
export class NgxDetailsComponent {
  isFirstExempleIsOpen = false;

  firstExampleStateChange(isOpen: boolean) {
    this.isFirstExempleIsOpen = isOpen;
  }
}

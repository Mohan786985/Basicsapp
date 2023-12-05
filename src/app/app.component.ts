import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Project = ' Function Hall';
  title = 'Raju Function hall';

  getOwnername() {
    return 'Battala Nagaraju ';
  }

  /*property data binding*/

  ownerRole = 'Admin';
  inputType = 'checkbox';

  /*EventData binding*/
  capturedata($eventDetails: KeyboardEvent) {
    //console.log('keypress is fired ');
    // console.log($eventDetails);
    console.log($eventDetails.target);
    var htmlInputEl = $eventDetails.target as HTMLInputElement;
    console.log(htmlInputEl.value);
  }

  btnclick() {
    console.log('Button is firing');
    window.alert('Message is '.concat(this.Project));
  }

  cusJohnLocation = 'New yark';

  evtCusLocationModelChange($event: string) {
    //parseInt($event)

    /*Trying to update the Customer Location By ngModel*/
    this.cusJohnLocation = $event;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showDetails = false;
  clickLog = [];
  clickCount = 0;


  onButtonClick() {
    this.showDetails = !this.showDetails;

    // increment the number of clicks
    this.clickCount++;

    // Get the current time for the datestamp
    const now = new Date(Date.now());

    // Convert timestamp to human-readable string
    const timeStamp = now.toUTCString();

    // Add click count and timestamp to the log array
    this.clickLog.push({
      count: this.clickCount,
      time: timeStamp
    });

  }
}

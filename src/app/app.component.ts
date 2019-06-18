import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'ng-playground';
  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = messageService.getMessage().subscribe(message => {
      this.message = message;
      console.log(this.message);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

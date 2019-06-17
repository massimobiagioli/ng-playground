import { Injectable } from '@angular/core';

@Injectable()
export class FakeService {

  tester(): string {
    return "asdf1234";
  }

}
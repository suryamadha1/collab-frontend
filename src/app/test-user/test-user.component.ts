import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CollabService } from '../services/collab.service';

@Component({
  selector: 'app-test-user',
  templateUrl: './test-user.component.html',
  styleUrls: ['./test-user.component.css']
})
export class TestUserComponent implements OnInit {
  constructor(private collabService: CollabService) {

  }

  testUserData$: Observable<string>;

  
  ngOnInit(): void {
    this.testUserData$ = this.collabService.testUser();
  }

}

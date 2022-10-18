import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  public saveInProgress : boolean = true;

  ngOnInit(): void {
  }

  /**
   * buttonClick
   */
  public buttonClick(buttonName: String) {
    this.saveInProgress = false;
    this.apiService.incrementButtonCount(buttonName).subscribe(async (resp: any) => {
      console.log("increamented button = " + buttonName);
      await new Promise(r => setTimeout(r, 2000));
      this.saveInProgress = true;
    });
  }
}

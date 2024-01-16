import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Topicwordview } from '../topicwordview';
import { LearnService } from '../_services/learn.service';

@Component({
  selector: 'app-learnmode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learnmode.component.html',
  styleUrls: ['./learnmode.component.css']
})
export class LearnmodeComponent {
  wlist: Array<Topicwordview> = []

  constructor(private router: Router) {
    this.wlist = router.getCurrentNavigation()!.extras.state!['data']
  }
}

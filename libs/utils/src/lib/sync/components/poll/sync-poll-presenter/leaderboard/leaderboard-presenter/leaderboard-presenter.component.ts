import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SyncPollService } from '@codelab/utils/src/lib/sync/components/poll/common/sync-poll.service';

@Component({
  selector: 'slides-leaderboard-presenter',
  templateUrl: './leaderboard-presenter.component.html',
  styleUrls: ['./leaderboard-presenter.component.css']
})
export class LeaderboardPresenterComponent implements OnInit {
  @Input() config;
  private leaderboard$: Observable<any>;

  constructor(private readonly syncPollService: SyncPollService) {
  }

  ngOnInit() {
    this.leaderboard$ = this.syncPollService.calculateScores(this.config.filter(a => a.answer));
  }


}

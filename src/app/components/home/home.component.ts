import { Component } from '@angular/core';
import { WeComponent } from './standaloneComponents/we/we.component';
import { InfoComponent } from './standaloneComponents/info/info.component';
import { StatisticComponent } from './standaloneComponents/statistic/statistic.component';
import { TeamComponent } from './standaloneComponents/team/team.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    WeComponent,
    InfoComponent,
    StatisticComponent,
    TeamComponent
  ]
})
export class HomeComponent {


}

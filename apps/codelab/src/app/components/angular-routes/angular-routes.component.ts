import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MENU_ROUTES } from '../../common';

@Component({
  selector: 'codelab-angular-routes',
  templateUrl: 'angular-routes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularRoutesComponent {
  constructor(@Inject(MENU_ROUTES) readonly menuRoutes) {}
}

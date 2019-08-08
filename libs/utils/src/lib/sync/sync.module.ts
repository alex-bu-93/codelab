import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncComponent } from './sync.component';
import { SyncButtonComponent } from './sync-button/sync-button.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatMenuModule, MatSelectModule } from '@angular/material';
import { SyncService } from '@codelab/utils/src/lib/sync/sync.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginService } from '@codelab/firebase-login';
import { SyncPresenterValueDirective } from '@codelab/utils/src/lib/sync/directives/sync-presenter-value.directive';
import { SyncViewerValueDirective } from '@codelab/utils/src/lib/sync/directives/sync-viewer-value.directive';
import { AllViewerValuesDirective } from '@codelab/utils/src/lib/sync/directives/all-viewer-values.directive';
import { SyncPlaygroundComponent } from './sync-playground/sync-playground.component';
import { SyncPlaygroundPresenterComponent } from './sync-playground/sync-playground-presenter/sync-playground-presenter.component';
import { SyncPlaygroundTestComponent } from './sync-playground/sync-playground-test/sync-playground-test.component';
import { SyncPollComponent } from '@codelab/utils/src/lib/sync/components/poll/sync-poll.component';
import { SyncPollPresenterComponent } from './components/poll/sync-poll-presenter/sync-poll-presenter.component';
import { SlidesModule } from '@codelab/slides';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from './components/questions/questions.component';
import {
  SyncIsAdminDirective,
  SyncIsPresentingDirective,
  SyncIsViewingDirective
} from '@codelab/utils/src/lib/sync/directives/is-status.directive';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatMenuModule,
    MatInputModule,
    SlidesModule,
    FormsModule,
    MatCardModule,
  ],
  providers: [SyncService, LoginService],
  declarations: [
    SyncComponent,
    SyncButtonComponent,
    SyncIsPresentingDirective,
    SyncIsAdminDirective,
    SyncIsViewingDirective,
    SyncPresenterValueDirective,
    SyncViewerValueDirective,
    AllViewerValuesDirective,
    SyncPlaygroundComponent,
    SyncPlaygroundPresenterComponent,
    SyncPlaygroundTestComponent,
    SyncPollComponent,
    SyncPollPresenterComponent,
    RegistrationComponent,
    QuestionsComponent,
  ],
  exports: [
    SyncComponent,
    SyncButtonComponent,
    SyncIsPresentingDirective,
    SyncIsViewingDirective,
    SyncPresenterValueDirective,
    SyncViewerValueDirective,
    AllViewerValuesDirective,
    SyncPlaygroundComponent,
  ],
})
export class SyncModule {
}

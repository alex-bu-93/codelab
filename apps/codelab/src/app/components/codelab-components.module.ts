import { NgModule } from '@angular/core';
import { CodelabExerciseComponent } from './exercise/exercise.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../directives/directives.module';
import { TitleSlideComponent } from './slides/title-slide/title-slide.component';
import { CodelabClosingSlideComponent } from './slides/closing-slide/codelab-closing-slide.component';
import { CodelabExercisePreviewComponent } from './exercise-preview/exercise-preview.component';
import { CodelabExercisePlaygroundComponent } from './exercise-playground/codelab-exercise-playground.component';
import { CodelabProgressBarComponent } from './codelab-progress-bar/codelab-progress-bar.component';
import { BabelTestRunnerComponent } from './babel-test-runner/babel-test-runner.component';
import { CodelabRippleAnimationComponent } from './slides/title-slide/ripple-animation/codelab-ripple-animation.component';
import { SimpleAngularTestRunnerComponent } from './angular-test-runner/angular-test-runner.component';
import { CodeDemoModule } from '@codelab/code-demos';
import { CodelabPreviewComponent } from './slides-preview/codelab-preview.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TestResultsModule } from '@codelab/utils/src/lib/test-results/test-results.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CodeDemoModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    TestResultsModule,
    DirectivesModule,
  ],
  declarations: [
    SimpleAngularTestRunnerComponent,
    TitleSlideComponent,
    BabelTestRunnerComponent,
    BreadcrumbComponent,
    CodelabExerciseComponent,
    CodelabPreviewComponent,
    CodelabClosingSlideComponent,
    CodelabExercisePreviewComponent,
    CodelabExercisePlaygroundComponent,
    CodelabProgressBarComponent,
    CodelabRippleAnimationComponent,
  ],
  exports: [
    SimpleAngularTestRunnerComponent,
    TitleSlideComponent,
    BabelTestRunnerComponent,
    BreadcrumbComponent,
    CodelabExerciseComponent,
    CodelabPreviewComponent,
    CodelabClosingSlideComponent,
    CodelabExercisePreviewComponent,
    CodelabExercisePlaygroundComponent,
    CodelabProgressBarComponent,
    CodelabRippleAnimationComponent,
  ],
})
export class CodelabComponentsModule {}

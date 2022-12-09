import { Component } from '@angular/core';
import { ContentService } from './services/content.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { ContentPresentation } from './types';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'slides-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  readonly presentation$ = combineLatest([
    this.navigationService.selectedPresentationId$,
    this.contentService.state$,
  ]).pipe(
    map(([presentationId, presentations]) => {
      return presentations.find(
        (p: ContentPresentation) => p.id === presentationId
      );
    })
  );

  currentSlideIndex$ = this.navigationService.currentSlideIndex$;

  currentSlide$ = combineLatest([
    this.navigationService.currentSlideIndex$,
    this.presentation$
  ]).pipe(
    map(([slideIndex, presentation]) => {
      return presentation.slides[slideIndex || 0];
    })
  );

  constructor(
    private readonly contentService: ContentService,
    private readonly navigationService: NavigationService,
    private readonly activeRoute: ActivatedRoute
  ) {

  }

  addSlide(presentationId: string) {
    this.contentService.addSlide(presentationId);
  }

  updatePresentationMeta(presentationId: string, name: string, value: string) {
    this.contentService.updatePresentationMeta(presentationId, name, value);
  }
}

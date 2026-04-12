import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { EducationItem, Language } from '../../data/portfolio.models';

@Component({
  selector: 'app-education-section',
  imports: [],
  templateUrl: './education-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationSection {
  readonly education = input.required<EducationItem[]>();
  readonly languages = input.required<Language[]>();
}

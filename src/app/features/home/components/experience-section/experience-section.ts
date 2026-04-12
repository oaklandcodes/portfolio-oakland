import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ExperienceItem } from '../../data/portfolio.models';

@Component({
  selector: 'app-experience-section',
  imports: [],
  templateUrl: './experience-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSection {
  readonly experiences = input.required<ExperienceItem[]>();
}

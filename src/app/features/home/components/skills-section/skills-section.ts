import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SkillGroup } from '../../data/portfolio.models';

@Component({
  selector: 'app-skills-section',
  imports: [],
  templateUrl: './skills-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsSection {
  readonly skills = input.required<SkillGroup[]>();
}

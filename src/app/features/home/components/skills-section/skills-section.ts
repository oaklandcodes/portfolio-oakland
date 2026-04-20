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

  getGroupIcon(title: string): string {
  const t = title.toLowerCase();
  if (t.includes('frontend')) return 'layout';
  if (t.includes('backend') || t.includes('herramientas')) return 'settings';
  if (t.includes('soft') || t.includes('metodologías') || t.includes('comunicación')) return 'users';
  return 'apps';
}
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProjectItem } from '../../data/portfolio.models';

@Component({
  selector: 'app-projects-section',
  imports: [],
  templateUrl: './projects-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  readonly projects = input.required<ProjectItem[]>();
}

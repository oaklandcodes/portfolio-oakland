import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeroSection } from '../../components/hero-section/hero-section';
import { MetricsSection } from '../../components/metrics-section/metrics-section';
import { SkillsSection } from '../../components/skills-section/skills-section';
import { METRICS_DATA, PROFILE_DATA, SKILLS_DATA } from '../../data/portfolio.data';

@Component({
  selector: 'app-home',
  imports: [HeroSection, MetricsSection, SkillsSection],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly profile = signal(PROFILE_DATA);
  protected readonly metrics = signal(METRICS_DATA);
  protected readonly skills = signal(SKILLS_DATA);
}

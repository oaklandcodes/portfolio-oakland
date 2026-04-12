import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ContactSection } from '../../components/contact-section/contact-section';
import { EducationSection } from '../../components/education-section/education-section';
import { ExperienceSection } from '../../components/experience-section/experience-section';
import { HeroSection } from '../../components/hero-section/hero-section';
import { MetricsSection } from '../../components/metrics-section/metrics-section';
import { ProjectsSection } from '../../components/projects-section/projects-section';
import { SkillsSection } from '../../components/skills-section/skills-section';
import {
  CONTACT_LINKS,
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  LANGUAGES_DATA,
  METRICS_DATA,
  PROJECTS_DATA,
  PROFILE_DATA,
  SKILLS_DATA,
} from '../../data/portfolio.data';

@Component({
  selector: 'app-home',
  imports: [
    HeroSection,
    MetricsSection,
    SkillsSection,
    ExperienceSection,
    ProjectsSection,
    EducationSection,
    ContactSection,
  ],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly profile = signal(PROFILE_DATA);
  protected readonly metrics = signal(METRICS_DATA);
  protected readonly skills = signal(SKILLS_DATA);
  protected readonly experience = signal(EXPERIENCE_DATA);
  protected readonly projects = signal(PROJECTS_DATA);
  protected readonly education = signal(EDUCATION_DATA);
  protected readonly languages = signal(LANGUAGES_DATA);
  protected readonly contacts = signal(CONTACT_LINKS);
}

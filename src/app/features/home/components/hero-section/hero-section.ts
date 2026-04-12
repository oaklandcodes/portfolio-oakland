import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Profile } from '../../data/portfolio.models';

@Component({
  selector: 'app-hero-section',
  imports: [NgOptimizedImage],
  templateUrl: './hero-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSection {
  readonly profile = input.required<Profile>();

  protected readonly headline = computed(
    () => `${this.profile().greeting} ${this.profile().name}`
  );
}

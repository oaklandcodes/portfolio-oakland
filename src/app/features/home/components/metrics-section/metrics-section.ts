import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MetricItem } from '../../data/portfolio.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metrics-section',
  standalone: true,
  imports: [CommonModule], // Solo necesitamos CommonModule para el @for
  templateUrl: './metrics-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricsSection {
  readonly metrics = input.required<MetricItem[]>();

  getIconType(label: string): string {
  const l = label.toLowerCase();
  if (l.includes('año') || l.includes('experiencia')) return 'history';
  if (l.includes('proyecto')) return 'rocket';
  if (l.includes('certifica') || l.includes('grado')) return 'certificate';
  if (l.includes('ingl') || l.includes('idioma')) return 'language';
  return 'star';
}
}
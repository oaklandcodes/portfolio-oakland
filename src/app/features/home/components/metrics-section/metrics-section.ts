import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MetricItem } from '../../data/portfolio.models';

@Component({
  selector: 'app-metrics-section',
  imports: [],
  templateUrl: './metrics-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricsSection {
  readonly metrics = input.required<MetricItem[]>();
}

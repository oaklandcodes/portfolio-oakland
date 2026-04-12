import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContactLinks } from '../../data/portfolio.models';

@Component({
  selector: 'app-contact-section',
  imports: [],
  templateUrl: './contact-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  readonly contacts = input.required<ContactLinks>();
}

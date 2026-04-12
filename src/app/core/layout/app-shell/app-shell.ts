import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooter } from '../site-footer/site-footer';
import { TopNav } from '../top-nav/top-nav';

@Component({
  selector: 'app-app-shell',
  imports: [TopNav, RouterOutlet, SiteFooter],
  templateUrl: './app-shell.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShell {}

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type NavItem = {
  label: string;
  href: string;
};

@Component({
  selector: 'app-top-nav',
  imports: [],
  templateUrl: './top-nav.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNav {
  protected readonly navItems = signal<NavItem[]>([
    { label: 'Perfil', href: '#perfil' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Educacion', href: '#educacion' },
  ]);
}

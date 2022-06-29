import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('items') items!: ElementRef<MatSelectionListChange>;
  showFiller = false;
  menuItems: string[] = ['Inicio', 'Productos'];
  route: string = '';
  constructor(private ngZone: NgZone, private router: Router) {}

  ngOnInit(): void {}

  getItem(ev: MatSelectionListChange): void {
    this.route = `${ev.source.selectedOptions.selected[0].value}`.toLowerCase();
    this.route === 'inicio' ? (this.route = '') : null;
    this.route === 'cerrar sesion'
      ? alert('cerrar sesion')
      : this.ngZone.run(() => {
          this.router.navigate([`dashboard/${this.route}`]);
        });
  }
}

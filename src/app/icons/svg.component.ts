import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg.component.html',
})
export class SvgComponent {
  @Input() type: string;
}

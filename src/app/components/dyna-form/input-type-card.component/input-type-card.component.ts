import {Component, Input} from '@angular/core';
import {DynaFormComponentType} from '../../../services/dynaform.service';

@Component({
  selector: 'app-input-type-card',
  imports: [],
  templateUrl: './input-type-card.component.html',
  styleUrl: './input-type-card.component.scss'
})
export class InputTypeCardComponent {
  @Input() label!: string;
  @Input() icon: string | undefined;
  @Input() dynaType: DynaFormComponentType|undefined;
}

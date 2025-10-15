import {Component, Input} from '@angular/core';
import {DynaFormComponentType} from '../../../services/dynaform/dynaform.service';
import {CdkDrag, CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-input-type-card',
  imports: [CdkDrag],
  templateUrl: './input-type-card.component.html',
  styleUrl: './input-type-card.component.scss'
})
export class InputTypeCardComponent {
  @Input() label!: string;
  @Input() icon: string | undefined;
  @Input() dynaType: DynaFormComponentType|undefined;

  dragStart (event: any) {
    event.dataTransfer.setData('text/plain', "Testing");
    console.log(event);
  }
}

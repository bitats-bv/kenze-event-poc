
import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import {BaseInputType, DynaFormService} from '../../../services/dynaform/dynaform.service';

@Component({
  selector: 'app-form-editor',
  standalone: true,
  imports: [
    CommonModule,
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss'
})
export class FormEditorComponent {
  private formService = inject(DynaFormService);

  formFields: BaseInputType[] = this.formService.getFormConfiguration()['base'];

  drop(event: CdkDragDrop<BaseInputType[]>): void {
    if (event.previousContainer === event.container) {
      // Reordering within the same list
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // Copying from components list to form editor
      const copiedItem = { ...event.previousContainer.data[event.previousIndex] };

      // Generate unique ID for the copied item
      const newField: BaseInputType = {
        id: `field-${Date.now()}-${Math.random()}`,
        parentId: undefined,
        type: copiedItem.type,
        order: event.currentIndex
      };

      // Insert at the dropped position
      this.formFields.splice(event.currentIndex, 0, newField);

      console.log('Added field:', newField);
      this.formService.addElement(newField);
      console.log('Current fields:', this.formFields);
    }
  }

  removeField(index: number): void {
    this.formFields.splice(index, 1);
  }

  getFormConfiguration(): any {
    return {
      fields: this.formService.getFormConfiguration()
    };
  }
}

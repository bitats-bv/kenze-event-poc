import {Component, inject} from '@angular/core';
import {CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import {DynaFormElement, DynaformElementsService} from '../../../services/dynaform/dynaform.elements.service';


@Component({
  selector: 'app-form-editor-components-list',
  standalone: true,
  imports: [
    CdkDropList,
    CdkDrag
  ],
  templateUrl: './form-editor-components-list.component.html',
  styleUrl: './form-editor-components-list.component.scss'
})
export class FormEditorComponentsListComponent {
  private elementService = inject(DynaformElementsService);

  formTypes: DynaFormElement[] = this.elementService.getAllElements();
}

import { Component } from '@angular/core';
import {
  FormEditorComponentsListComponent
} from '../form-editor-components-list.component/form-editor-components-list.component';

@Component({
  selector: 'app-form-editor',
  imports: [
    FormEditorComponentsListComponent
  ],
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss'
})
export class FormEditorComponent {

}

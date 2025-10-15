import { Component } from '@angular/core';
import {FormEditorComponent} from '../../components/dyna-form/form-editor.component/form-editor.component';
import {
  FormEditorComponentsListComponent
} from '../../components/dyna-form/form-editor-components-list.component/form-editor-components-list.component';

@Component({
  selector: 'app-dyna-form-page',
  imports: [FormEditorComponent, FormEditorComponentsListComponent],
  templateUrl: './dyna-form-page.html',
  styleUrl: './dyna-form-page.scss'
})
export class DynaFormPage {

}

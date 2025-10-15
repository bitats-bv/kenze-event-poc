import { Injectable } from '@angular/core';
import {DynaFormComponentType} from './dynaform.service';

@Injectable({
  providedIn: 'root'
})
export class DynaformElementsService {
  getAllElements(): DynaFormElement[]{
    return [
      {id: '1', type: DynaFormComponentType.label, label: 'Label', icon: 'label'},
      {id: '2', type: DynaFormComponentType.textInput, label: 'Text Input', icon: 'text_fields'},
      {id: '3', type: DynaFormComponentType.singleSelect, label: 'Dropdown', icon: 'arrow_drop_down'},
      {id: '4', type: DynaFormComponentType.multiSelect, label: 'Checkbox', icon: 'check_box'},
    ];
  }
}


export interface DynaFormElement {
  id: string;
  type: DynaFormComponentType;
  label: string;
  icon?: string;
}

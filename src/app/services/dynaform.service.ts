import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DynaFormService {
  loadConfig() : ElementType {
    return {['base']: [{id: '1', parentId: undefined, type: DynaFormComponentType.label, order: 1}]};
  }
}


type ElementType = {
  [parent: string | 'base']: BaseInputType[];
};

interface BaseInputType {
  id: string;
  parentId?: string;
  type: DynaFormComponentType;
  order: number;
}

export enum DynaFormComponentType {
  label = 1,
  textInput = 2,
  singleSelect = 3,
  multiSelect = 4,
  repeater = 5,
  group = 6,
  fileUpload = 7,
  signature = 8,
  conditional = 9,
}

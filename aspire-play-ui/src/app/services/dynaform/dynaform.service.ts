import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DynaFormService {
  config: ElementType = {'base':[]};
  loadConfig() : ElementType {
    this.config = {['base']: [{id: '1', parentId: undefined, type: DynaFormComponentType.label, order: 1},
        {id: '2', parentId: undefined, type: DynaFormComponentType.group, order: 2},]};

    return this.config;
  }
  getFormConfiguration() : ElementType {
    if(this.config['base'].length === 0) {this.loadConfig();}
    return this.config;
  }

  addElement(element: BaseInputType) {
    console.log('Adding element:', element);
    this.config[element.parentId || 'base'].push(element);
  }

}


export type ElementType = {
  [parent: string | 'base']: BaseInputType[];
};

export interface BaseInputType {
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

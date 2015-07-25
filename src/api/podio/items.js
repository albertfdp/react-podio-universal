import _ from 'lodash';
import objectAssign from 'object-assign';
import * as fields from './fields';

export function items(item) {
  return _.forEach(item.fields, (field) => {
    return field;
  });
}

export function itemToObj(item, fetchRelated=false) {
  return new Promise((resolve, reject ) => {
    Promise.all(items(item).map((itemObj) => {
      let action = fields[itemObj.type];
      if (action) {
        return fields[itemObj.type](itemObj, fetchRelated);
      }
      console.error('No action for', itemObj.type);
      reject();
    })).then((data) => {
      resolve(objectAssign(...data));
    });
  });
}

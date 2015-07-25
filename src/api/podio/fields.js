import _ from 'lodash';
import objectAssign from 'object-assign';
import { getItemByAppItemId } from './actions';

export function text(item) {
  return new Promise((resolve) => {
    let model = item.values ? _.first(item.values).value : null;
    resolve({[item.external_id]: model});
  });
}

export function date(item) {
  return new Promise((resolve) => {
    let model = _.first(item.values);
    resolve({[item.external_id]: model});
  });
}

export function category(item) {
  return new Promise((resolve) => {
    let active = _.filter(item.values, (itemCategory) => {
      return itemCategory.value.status === 'active';
    });

    let model = _.map(active, (itemCategory) => {
      return itemCategory.value.text;
    });

    if (model.length === 1) {
      resolve({[item.external_id]: _.first(model)});
    }

    resolve({[item.external_id]: model});
  });
}

export function location(item) {
  return new Promise((resolve) => {
    let model = _.first(item.values);
    resolve({[item.external_id]: model});
  });
}

export function embed(item) {
  return new Promise((resolve) => {
    let model = _.first(item.values).embed;
    resolve({[item.external_id]: model});
  });
}

export function image(item) {
  return new Promise((resolve) => {
    let model = _.first(item.values).value;
    resolve({[item.external_id]: model});
  });
}

export function app(item, fetchRelated=false) {
  let field = {
    label: item.label,
    type: item.type,
    field_id: item.field_id,
    external_id: item.external_id
  };
  let model = objectAssign(field, _.first(item.values).value);

  if (!fetchRelated) {
    return new Promise((resolve) => {
      resolve({[item.external_id]: model});
    });
  }

  return new Promise((resolve) => {
    getItemByAppItemId(model.app.app_id, model.app_item_id).then((relatedModel) => {
      resolve({[item.external_id]: relatedModel});
    });
  });
}

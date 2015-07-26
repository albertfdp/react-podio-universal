import _ from 'lodash';
import config from '../../config';
import * as actions from '../podio/actions';

export function todo() {
  let filters = {};
  return actions.filterItems(config.podio.apps.todo.app_id, config.podio.apps.space_id,
    undefined, filters, true);
}

export function addTodo(req) {
  return actions.createItem(config.podio.apps.todo.app_id, { fields: req.body });
}

export function editTodo(req) {
  let itemId = req.body.id;
  let data = req.body;
  return actions.updateItem(itemId, data).then(() => {
    return {id: itemId, ...req.body }; // let's return the item, so reducer can update it
  });
}

export function deleteTodo(req) {
  return actions.deleteItem(req.body.id).then(() => {
    return req.body.id; // we need to tell the reducer what to remove from the list
  });
}

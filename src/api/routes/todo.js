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

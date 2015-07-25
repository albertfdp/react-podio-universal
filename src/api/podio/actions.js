import _ from 'lodash';
import objectAssign from 'object-assign';
import platform from '../Platform';
import * as items from './items';

export function getItemByAppItemId(appId, appItemId) {
  return new Promise((resolve, reject) => {
    platform.request('get', `/app/${appId}/item/${appItemId}`)
      .then((item) => {
        resolve(items.itemToObj(item, false)); // avoid too much recursion
      }).catch((err) => {
        reject(err);
      });
  });
}

export function getFile(fileId) {
  return platform.request('get', `/file/${fileId}/raw`);
}

export function createItem(appId, attributes) {
  return new Promise((resolve) => {
    platform.request('post', `/item/app/${appId}`, attributes).then((data) => {
      resolve(items.itemToObj(data));
    });
  });
}

export function deleteItem(itemId) {
  return platform.request('delete', `/item/${itemId}`);
}

export function getItem(itemId) {
  return new Promise((resolve, reject) => {
    platform.request('get', `/item/${itemId}`).then((data) => {
      resolve(items.itemToObj(data));
    }).catch((error) => {
      reject(error);
    });
  });
}

export function filterItems(appId, spaceId, sorting = undefined, filters = undefined, fetchRelatedItems = false, limit = 50) {
  return new Promise((resolve, reject) => {
    let options = objectAssign({ limit: limit, space_id: spaceId }, sorting, { filters: filters });

    platform.request('post', `/item/app/${appId}/filter`, options)
    .then((data) => {
      Promise.all(data.items.map((item) => {
        return items.itemToObj(item, fetchRelatedItems);
      })).then((models) => {
        resolve(_.merge(models));
      }).catch((err) => {
        reject(err);
      });

    }).catch((err) => {
      reject(err);
    });
  });
}

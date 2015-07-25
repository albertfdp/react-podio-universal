import platform from '../Platform';

export function getPersonalSpace() {
  return platform.request('get', '/space/personal');
}

export function createSpace(name) {
  return platform.request('post', '/space', { name: name });
}

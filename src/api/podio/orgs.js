import platform from '../Platform';

export function getOrgs() {
  return platform.request('get', '/org/');
}

export function bootstrapOrg(name) {
  return platform.request('post', '/org/bootstrap', { name: name });
}

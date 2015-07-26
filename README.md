# react-podio-universal

Yet another starter boilerplate app, that I have put together heavily inspired by @erikras with [react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example), but that I wanted to integrate with [Podio Platform](https://platform.podio.com) to show how fast and easy we can prototype on top of it.

This app demoes the already classic `todomvc` app from [gaearon/redux](https://github.com/gaearon/redux), adding the integration with Podio Platform as a backend.

The stack is the following:
  * [Universal Javascript](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) rendering
  * [React](https://github.com/facebook/react)
  * [React Router](https://github.com/rackt/react-router)
  * [Express](http://expressjs.com/)
  * [Babel](http://babeljs.io/)
  * [Webpack and Webpack-dev-server](http://webpack.github.io/)
  * [React Hot Loader](https://github.com/gaearon/react-hot-loader)
  * [Redux](https://github.com/gaearon/redux)
  * [Redux Dev Tools](https://github.com/gaearon/redux-devtools)
  * [Podio Platform](https://platform.podio.com)

If you want to prototype web apps using the bleeding edge web technologies, supported by an out-of-the-box backend, you probably should take a look at this repo. PR and issues, are more than welcome :)

## Demo

[![Screenshot](https://raw.githubusercontent.com/albertfdp/react-podio-universal/master/docs/demo.png)](https://www.youtube.com/watch?v=NWdK5q9Ow2c&feature=youtu.be)

## Installation

```sh
$ npm install
```

## Development

```sh
# start express server
$ npm run start-dev

# start webpack development server
$ npm run webpack-dev
```

## Production

WIP

## Disclaimer

This is still WIP, so there are a few corners that were cut like:
  * podio server|client authentication
  * bootstraping podio apps on first login

## License

[MIT](https://github.com/albertfdp/react-podio-universal/blob/master/LICENSE)

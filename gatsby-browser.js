import ReactGA from 'react-ga';
ReactGA.initialize('UA-51806130-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};

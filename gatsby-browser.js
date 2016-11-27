import ReactGA from 'react-ga';
ReactGA.initialize('UA-51806130-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.set({page: state.pathname});
  ReactGA.pageview(state.pathname);
};

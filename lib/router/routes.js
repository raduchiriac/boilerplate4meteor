var subs = new SubsManager();

Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',
  progressSpinner: false
});

Router.route('/', {
  name: 'homepage',
});
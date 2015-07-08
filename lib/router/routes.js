var subs = new SubsManager();

Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',
  progressSpinner: false
});

// https://github.com/iron-meteor/iron-router/blob/57a295ef387aec2715a7b43efc694c3e6012b764/Guide.md

Router.route('/', function () {
  this.render('homepage');
});

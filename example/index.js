var mixin = require('ember-drawer');

Em.TEMPLATES.index = Em.Handlebars.template(eval(require('./template')));

App = Em.Application.create();

App.IndexController = Em.Controller.extend(mixin);

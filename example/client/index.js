var mixin = require('ember-drawer');

Em.TEMPLATES.index = Em.HTMLBars.template(require('./template'));

App = Em.Application.create();

App.IndexController = Em.Controller.extend(mixin);

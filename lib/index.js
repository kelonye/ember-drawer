require('ember');

module.exports = Em.Mixin.create({
  showLeftDrawer: function(e){
    Em.$('.component.drawer.left').animate({
      left: 0
    });
  },
  showRightDrawer: function(e){
    Em.$('.component.drawer.right').animate({
      right: 0
    });
  },
  hideLeftDrawer: function(e){
    var self = this;
    var el = Em.$('.component.drawer.left');
    Em.$('.component.drawer.left').animate({
      left: -el.outerWidth()
    });
  },
  hideRightDrawer: function(e){
    var self = this;
    var el = Em.$('.component.drawer.right');
    Em.$('.component.drawer.right').animate({
      right: -el.outerWidth()
    });
  }
});
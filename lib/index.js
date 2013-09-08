require('ember');

module.exports = Em.Mixin.create({
  showTopDrawer: function(e){
    Em.$('.component.drawer.top').animate({
      top: 0
    });
  },
  showBottomDrawer: function(e){
    Em.$('.component.drawer.bottom').animate({
      bottom: 0
    });
  },
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
  hideTopDrawer: function(e){
    var self = this;
    var el = Em.$('.component.drawer.top');
    Em.$('.component.drawer.top').animate({
      top: -el.outerHeight() - 5
    });
  },
  hideBottomDrawer: function(e){
    var self = this;
    var el = Em.$('.component.drawer.bottom');
    Em.$('.component.drawer.bottom').animate({
      bottom: -el.outerHeight() - 5
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
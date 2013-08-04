require('ember');

module.exports = Em.Mixin.create({
  left: -540,
  right: -540,
  showLeftDrawer: function(e){
    Em.$('.component.drawer.left').animate({
      left: 0
    });
  },
  hideLeftDrawer: function(e){
    var self = this;
    Em.$('.component.drawer.left').animate({
      left: self.get('left')
    });
  },
  showRightDrawer: function(e){
    Em.$('.component.drawer.right').animate({
      right: 0
    });
  },
  hideRightDrawer: function(e){
    var self = this;
    Em.$('.component.drawer.right').animate({
      right: self.get('right')
    });
  }
});
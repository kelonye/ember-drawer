require('ember');

module.exports = Em.Mixin.create({
  padding: 40,
  showLeftDrawer: function(e){
    var width = ~this.get('left') - this.get('padding');
    Em.$('.component.drawer.left').animate({
      left: 0,
      width: width
    });
  },
  hideLeftDrawer: function(e){
    var self = this;
    Em.$('.component.drawer.left').animate({
      left: self.get('left')
    });
  },
  showRightDrawer: function(e){
    var width = ~this.get('right') - this.get('padding');
    Em.$('.component.drawer.right').animate({
      right: 0,
      width: width
    });
  },
  hideRightDrawer: function(e){
    var self = this;
    Em.$('.component.drawer.right').animate({
      right: self.get('right')
    });
  }
});
require('ember');

module.exports = Em.Mixin.create({
  getOuterHeight: function(pos){
    var el = Em.$('.component-drawer-'+pos);
    var drawerHeight = el.outerHeight();
    var bodyHeight = window.outerHeight;
    var outerHeight = bodyHeight/2 < drawerHeight ? bodyHeight: drawerHeight;
    el.outerHeight(outerHeight);
    return outerHeight;
  },
  getOuterWidth: function(pos){
    var el = Em.$('.component-drawer-'+pos);
    var drawerWidth = el.outerWidth();
    var bodyWidth = window.outerWidth;
    var outerWidth = bodyWidth/2 < drawerWidth ? bodyWidth: drawerWidth;
    el.outerWidth(outerWidth);
    return outerWidth;
  },
  actions: {
    showTopDrawer: function(e){
      var that = this;
      Em.$('.component-drawer-top').css({
        top: 0
      });
      Em.$('.component-drawer-center').css({
        'padding-top': that.getOuterHeight('top') + 'px'
      });
    },
    showBottomDrawer: function(e){
      var that = this;
      Em.$('.component-drawer-bottom').css({
        bottom: 0
      });
      Em.$('.component-drawer-center').css({
        'padding-bottom': that.getOuterHeight('bottom') + 'px'
      });
    },
    showLeftDrawer: function(e){
      var that = this;
      Em.$('.component-drawer-left').css({
        left: 0
      });
      Em.$('.component-drawer-center').css({
        'padding-left': that.getOuterWidth('left') + 'px'
      });
    },
    showRightDrawer: function(e){
      var that = this;
      Em.$('.component-drawer-right').css({
        right: 0
      });
      Em.$('.component-drawer-center').css({
        'padding-right': that.getOuterWidth('right') + 'px'
      });
    },
    hideTopDrawer: function(e){
      var that = this;
      Em.$('.component-drawer-top').css({
        top: -that.getOuterHeight('top') - 5 + 'px'
      });
      Em.$('.component-drawer-center').css({
        'padding-top': '0'
      });
    },
    hideBottomDrawer: function(e){
      var that = this;
      Em.$('.component-drawer-bottom').css({
        bottom: -that.getOuterHeight('bottom') - 5 + 'px'
      });
      Em.$('.component-drawer-center').css({
        'padding-bottom': '0'
      });
    },
    hideLeftDrawer: function(e){
      var that = this;
      Em.$('.component-drawer-left').css({
        left: -that.getOuterWidth('left') + 'px'
      });
      Em.$('.component-drawer-center').css({
        'padding-left': '0'
      });
    },
    hideRightDrawer: function(e){
      var that = this;
      Em.$('.component-drawer-right').css({
        right: -that.getOuterWidth('right')
      });
      Em.$('.component-drawer-center').css({
        'padding-right': '0'
      });
    }
  }
});
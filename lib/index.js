require('ember');

module.exports = Em.Mixin.create({
  
  _is_mobile: false,
  _showingLeftDrawer: false,
  _showingRightDrawer: false,
  _showingTopDrawer: false,
  _showingBottomDrawer: false,

  _getOuterHeight: function(pos){
    var el = Em.$('.component-drawer-'+pos);
    var drawerHeight = el.outerHeight();
    var bodyHeight = $(window).outerHeight();
    var _is_mobile = 3*(bodyHeight/5) < drawerHeight;
    var outerHeight = _is_mobile
      ? bodyHeight
      : drawerHeight;
    this.set('_is_mobile', _is_mobile);
    el.outerHeight(outerHeight);
    return outerHeight;
  },
  _getOuterWidth: function(pos){
    var el = Em.$('.component-drawer-'+pos);
    var drawerWidth = el.outerWidth();
    var bodyWidth = $(window).outerWidth();
    var _is_mobile = 3*(bodyWidth/5) < drawerWidth;
    var outerWidth = _is_mobile
      ? bodyWidth
      : drawerWidth;
    this.set('_is_mobile', _is_mobile);
    el.outerWidth(outerWidth);
    return outerWidth;
  },
  _showTopDrawer: function(e){
    var that = this;
    Em.$('.component-drawer-top').css({
      top: 0
    });
    Em.$('.component-drawer-center').css({
      'padding-top': that._getOuterHeight('top') + 'px'
    });
  },
  _showBottomDrawer: function(e){
    var that = this;
    Em.$('.component-drawer-bottom').css({
      bottom: 0
    });
    Em.$('.component-drawer-center').css({
      'padding-bottom': that._getOuterHeight('bottom') + 'px'
    });
  },
  _showLeftDrawer: function(e){
    var that = this;
    Em.$('.component-drawer-left').css({
      left: 0
    });
    Em.$('.component-drawer-center').css({
      'padding-left': that._getOuterWidth('left') + 'px'
    });
  },
  _showRightDrawer: function(e){
    var that = this;
    Em.$('.component-drawer-right').css({
      right: 0
    });
    Em.$('.component-drawer-center').css({
      'padding-right': that._getOuterWidth('right') + 'px'
    });
  },
  _hideTopDrawer: function(e){
    var that = this;
    Em.$('.component-drawer-top').css({
      top: -that._getOuterHeight('top') - 5 + 'px'
    });
    Em.$('.component-drawer-center').css({
      'padding-top': '0'
    });
  },
  _hideBottomDrawer: function(e){
    var that = this;
    Em.$('.component-drawer-bottom').css({
      bottom: -that._getOuterHeight('bottom') - 5 + 'px'
    });
    Em.$('.component-drawer-center').css({
      'padding-bottom': '0'
    });
  },
  _hideLeftDrawer: function(e){
    var that = this;
    Em.$('.component-drawer-left').css({
      left: -that._getOuterWidth('left') + 'px'
    });
    Em.$('.component-drawer-center').css({
      'padding-left': '0'
    });
  },
  _hideRightDrawer: function(e){
    var that = this;
    Em.$('.component-drawer-right').css({
      right: -that._getOuterWidth('right')
    });
    Em.$('.component-drawer-center').css({
      'padding-right': '0'
    });
  },
  _toggleDrawer: function(pos, e, state){

    if (state){

      this.set('_showing'+pos+'Drawer', state === 'show');

    } else {

      this.toggleProperty('_showing'+pos+'Drawer');

      this.get('_showing'+pos+'Drawer')
        ? state = 'show'
        : state = 'hide';
    
    }

    this['_'+state+pos+'Drawer'].call(this, e);

    Em.$('.component-drawer').removeClass('is-mobile');

    if (this.get('_is_mobile')){
      Em.$('.component-drawer-'+pos.toLowerCase()).addClass('is-mobile');
    }

  },
  actions: {

    toggleLeftDrawer: function(e){
      this._toggleDrawer('Left', e);
    },
    toggleRightDrawer: function(e){
      this._toggleDrawer('Right', e);
    },
    toggleTopDrawer: function(e){
      this._toggleDrawer('Top', e);
    },
    toggleBottomDrawer: function(e){
      this._toggleDrawer('Bottom', e);
    },

    showLeftDrawer: function(e){
      this._toggleDrawer('Left', e, 'show');
    },
    showRightDrawer: function(e){
      this._toggleDrawer('Right', e, 'show');
    },
    showTopDrawer: function(e){
      this._toggleDrawer('Top', e, 'show');
    },
    showBottomDrawer: function(e){
      this._toggleDrawer('Bottom', e, 'show');
    },

    hideLeftDrawer: function(e){
      this._toggleDrawer('Left', e, 'hide');
    },
    hideRightDrawer: function(e){
      this._toggleDrawer('Right', e, 'hide');
    },
    hideTopDrawer: function(e){
      this._toggleDrawer('Top', e, 'hide');
    },
    hideBottomDrawer: function(e){
      this._toggleDrawer('Bottom', e, 'hide');
    },

  },

});
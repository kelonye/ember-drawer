![](https://dl.dropbox.com/u/30162278/ember-drawer.png)

Create drawers that slide in any of the four directions.

Install
---

    $ component install kelonye/ember-drawer

Example
---

    $ make example

Usage
---

An example of creating a left drawer.

```js
  var drawer = require('ember-drawer');
  App = Em.Application.create();
  App.IndexController = Em.Controller.extend(drawer);
```

```hbs

{{!index template}}

<div class="component-drawer component-drawer-left">
  left drawer
</div>

<div>main content</div>

```

This drawer overlays the main content, just as in [producthunt.com](http://producthunt.com). If you need to however squeeze the main content, add a `.component-drawer-center` class to the main content section.


```hbs

{{!index template}}

<div class="component-drawer component-drawer-top">
  top drawer
</div>

<div class='component-drawer-center'>
  main content
</div>

```

The drawers have initial dimensions of (see `lib/style.css`):

- `40px` paddding
- width 500px for left and right drawers
- height of `200px` for top and bottom drawers

A custom width/height and padding can be set as follows:

```css

.component-drawer-left{
  padding: 30px;
  width: 700px;
  left: -730px; // width + padding
}

.component-drawer-right{
  padding: 30px;
  width: 700px;
  right: -730px; // width + padding
}

.component-drawer-top{
  padding: 30px;
  height: 100px;
  top: -730px; // height + padding
}

.component-drawer-bottom{
  padding: 30px;
  height: 100px;
  bottom: -730px; // height + padding
}

```

License
---

MIT
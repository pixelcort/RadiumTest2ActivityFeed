RadiumTest2ActivityFeed Implementation
======================================

This is an implementation of [Radium Test #2 - Activity Feed](https://gist.github.com/7599832dee51d15633af).

Demo
----

[http://pixelcort.github.com/RadiumTest2ActivityFeed/](http://pixelcort.github.com/RadiumTest2ActivityFeed/)

Solution
--------

For this implemenation I wanted to take a shot at using [Crossfilter](http://square.github.com/crossfilter/). Although it is not used interactively, I was able to use it at app launch to organize the activities into various facets for modeling. Conversely I did not use the [Ember Data ORM](https://github.com/emberjs/data) like I would normally do.

In addition to a recent git compile of [Ember](https://github.com/emberjs/ember.js) and a standard release of [Bootstrap](http://twitter.github.com/bootstrap/), I am also using an integration library called [Ember Bootstrap](https://github.com/jzajpt/ember-bootstrap). The library was a bit outdated relative to some recent Ember changes, so it is currently causing some warnings to be logged to the console.

* Template code is currently embedded within index.html.
* feed.json was converted into a JS file for demonstration purposes.
* All written code lives in js folder.
* All libs used are in lib folder.

License
-------

MIT. See LICENSE.txt .

Author
------

Cortland Klein <me@pixelcort.com>
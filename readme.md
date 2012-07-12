RadiumTest2ActivityFeed Implementation by Cortland Klein
========================================================

This is an implementation of the [Radium Test #2 - Activity Feed](https://gist.github.com/7599832dee51d15633af) made by [Cortland Klein](http://pixelcort.com/).

Solution
--------

For this implemenation I wanted to take a shot at using [Crossfilter](https://gist.github.com/7599832dee51d15633af). Although it is not used interactively, I was able to use it at app launch to organize the activities into various facets for modeling. Conversely I did not use the [Ember Data ORM](https://github.com/emberjs/data) like I would normally do.

In addition to a recent git compile of [Ember](https://github.com/emberjs/ember.js) and a standard release of [Bootstrap](http://twitter.github.com/bootstrap/), I am also using an integration library called [Ember Bootstrap](https://github.com/jzajpt/ember-bootstrap). The library is a bit outdated relative to some recent Ember changes, so it is currently causing some warnings to be logged to the console. If this were a production project, I would probably either abandom Ember Bootstrap or patch it and submit a pull request with the nessecary changes.


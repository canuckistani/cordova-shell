var React = require('react/addons');
var Router = require('react-router');
var { State, Route, DefaultRoute, RouteHandler } = Router;
var TransitionGroup = React.addons.CSSTransitionGroup;

var Link = require('./components/Link');
var Animation = require('./mixins/Animation');

// var links = [
//     ['forms', 'ion-ios-list', require('./views/Forms')],
//     ['japanese', 'ion-document-text', require('./views/Japanese')],
//     ['headers', 'ion-ios-settings-strong', require('./views/Headers')]
// ];

var App = React.createClass({
    mixins: [ State, Animation ],
    render: function () {
        var name = this.getRoutes().reverse()[0].name;
        return (
            <TransitionGroup component="div" className="page-container" transitionName={this.getAnimation()}>
                <RouteHandler key={name} {...this.props} />
            </TransitionGroup>
        );
    }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="main" handler={require('./views/Main')} />
    <Route name="menu" handler={require('./views/Menu')} />
    <Route name="thanks" handler={require('./views/ClickTest')} />
    <Route name="deck" path="deck/:deckId" handler={require('./views/Deck')} />
    <DefaultRoute handler={require('./views/Main')}/>
  </Route>
);

module.exports = function () {
    var parentElement = document.getElementById('app');
    React.initializeTouchEvents(true);

    // Router.HistoryLocation,
    Router.run(routes, function (Handler, state) {
        if (state.action === 'pop') Animation.setAnimation('back');
        React.render(<Handler params={state.params}/>, document.body);
    });
};

var React = require('react/addons');
var Router = require('react-router');
var { State, Route, DefaultRoute, RouteHandler } = Router;
var TransitionGroup = React.addons.CSSTransitionGroup;
var Link = require('./components/Link');

var App = React.createClass({
    mixins: [ State ],
    getInitialState: function () {
        return {
            transitionName: 'fadein'
        };
    },
    statics: {
        willTransitionTo: function (transition, params, query) {
            console.log(transition, params, query);
        }
    },
    render: function () {
        var name = this.getRoutes().reverse()[0].name;
        return (
            <div className="wrapper">
                <Nav />
                <TransitionGroup component="div" className="page-container" transitionName={this.state.transitionName}>
                    <RouteHandler key={name} willTransitionTo={this.willTransitionTo} />
                </TransitionGroup>
            </div>
        );
    }
});

var Nav = React.createClass({
    render: function () {
        var links = [
            ['forms', 'ion-ios-list'],
            ['japanese', 'ion-document-text'],
            ['headers', 'ion-ios-settings-strong']
        ];
        return (
            <ul className="nav">
                {links.map(link => <li key={link[0]}><Link transition="fadeout" to={link[0]}><span className={link[1]} /></Link></li>)}
            </ul>
        );
    }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="forms" handler={require('./views/Forms')}/>
    <Route name="japanese" handler={require('./views/Japanese')}/>
    <Route name="headers" handler={require('./views/Headers')}/>
    <DefaultRoute handler={require('./views/Forms')}/>
  </Route>
);

module.exports = function () {
    var parentElement = document.getElementById('app');
    React.initializeTouchEvents(true);

    // Router.HistoryLocation,
    Router.run(routes, function (Handler) {
        React.render(<Handler/>, document.body);
    });
};

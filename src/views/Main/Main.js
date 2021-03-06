var React = require('react');

var Animation = require('../../mixins/Animation');
var Link = require('../../components/Link/Link');
var Click = require('../../components/Click/Click');

var Counter = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        };
    },
    onDecrease: function () {
        var newCount = Math.max(this.state.count - 1, 0);
        this.setState({count: newCount});
    },
    onIncrease: function () {
        this.setState({count: this.state.count + 1});
    },
    render: function () {
        return (<div className="counter">
            <Click className="count-decrease" handler={this.onDecrease}><div className="ion-android-remove" /></Click>
            <div className="count-display">{this.state.count}</div>
            <Click className="count-increase" handler={this.onIncrease}><div className="ion-android-add" /></Click>
        </div>);
    }
});

var ProductBlock = React.createClass({
    render: function () {
        return (<div className="product-block">
            <img src={this.props.image} />
            <div className="pad" style={{backgroundColor: this.props.background, color: this.props.color}}>
                <p className="description">{this.props.description}</p>
                <Counter />
            </div>
        </div>);
    }
});

var Main = React.createClass({
    mixins: [Animation],
    getInitialState: function () {
        return {data: [
            {
                image: 'img/green-tea.svg',
                description: 'How many cups of green tea?',
                background: '#89C226',
                color: '#FFF'
            },
            {
                image: 'img/pie.svg',
                description: 'How many strawberry pies?',
                background: '#E6B319',
                color: '#FFF'
            },
            {
                image: 'img/beer.svg',
                description: 'Yep, I serve beer.',
                background: '#DF2C2C',
                color: '#FFF'
            },
            {
                image: 'img/donut.svg',
                description: 'My doughnuts are literally the best',
                background: '#439FE1',
                color: '#FFF'
            }
        ]};
    },
    render: function () {
        return (<main id="main-menu">
            <nav className="nav">
                <Link to="menu">
                    <span className="icon ion-android-menu"></span>
                </Link>
                <h1>Mari&rsquo;s Cafe</h1>
                <Link to="add">
                    <span className="icon ion-android-add"></span>
                </Link>
            </nav>
            <div className="inner-page-container">
                <div className="blocks">
                    <div className="block-lead">
                        <img src="img/shop-transparent.svg" />
                        <div className="pad">
                            <h3>Feeling hungry?</h3>
                            <p>My cafe serves delicious treats. Please order something for you our a friend!</p>
                        </div>
                    </div>
                    {this.state.data.map( product => <ProductBlock {...product} /> )}
                </div>
                <div className="order-form">
                    <Link nodeName="button" to="thanks">Order Now</Link>
                </div>
            </div>
        </main>);
    }
});

module.exports = Main;

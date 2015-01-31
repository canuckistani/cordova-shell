var React = require('react');
var Animation = require('../mixins/Animation');

var Japanese = React.createClass({
    mixins: [Animation],
    render: function () {
        return (
            <main>
                <h1>アメリカ大統領「テロをなくすために戦う」</h1>
                <p>01月22日 16時00分</p>
                <p>アメリカのオバマ大統領は、２０日、ことしの政治の方針について演説を行いました。</p>
                <p>オバマ大統領は「アメリカは世界の人たちと一緒に、テロをなくすために戦います。テロに協力する人たちのつながりを壊します」と話しました。そして、アメリカが世界のリーダーになって、「イスラム国」（＝イスラム教のためだと言ってテロなどを起こしているグループ）をなくしたいと言いました。</p>
                <p>そのあと、ＴＰＰ（＝太平洋の周りにある国が自由に貿易できるようにする協定）について話しました。オバマ大統領は「中国が貿易のルールを作りたがっていますが、ルールを作るのはアメリカです」と話して、ＴＰＰの話し合いを早くまとめたいと言いました。</p>
            </main>
        );
    }
});

module.exports = Japanese;
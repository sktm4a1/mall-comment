(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),o=(a(14),a(1)),s=a(2),m=a(4),l=a(3),d=a(5),u=a(8),h=(a(16),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).handleCancleClick=function(){a.setState({comment:a.props.data.comment||"",editing:!1,stars:a.props.data.stars||0})},a.handleStarClick=function(e){a.setState({stars:e})},a.handleSubmitComment=function(){var e=a.props.data.id,t=a.state.stars,n=a.state.comment;a.setState({editing:!1}),a.props.onSubmit(e,t,n)},a.state={stars:e.data.stars||0,editing:!1,comment:e.data.comment||""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.shop,a=e.price,n=e.product,c=e.picture,i=e.ifCommented;return r.a.createElement("div",{className:"orderItem"},r.a.createElement("div",{className:"orderItem_picContainer"},r.a.createElement("img",{className:"orderItem_pic",src:c,alt:"\u5546\u54c1\u56fe\u7247"})),r.a.createElement("div",{className:"orderItem_content"},r.a.createElement("div",{className:"orderItem_product"},n),r.a.createElement("div",{className:"orderItem_shop"},t),r.a.createElement("div",{className:"orderItem_detail"},r.a.createElement("div",{className:"orderItem_price"},a),i?r.a.createElement("div",null,r.a.createElement("button",{className:"orderItem_btn orderItem_btn--gray"},"\u5df2\u8bc4\u4ef7")):r.a.createElement("div",null,r.a.createElement("button",{className:"orderItem_btn orderItem_btn--red",onClick:this.handleClickComment.bind(this)},"\u8bc4\u4ef7")))),this.state.editing?this.renderEditArea():null)}},{key:"renderEditArea",value:function(){return r.a.createElement("div",{className:"orderItem_commentContainer"},r.a.createElement("textarea",{className:"orderItem_comment",onChange:this.handleCommentChange.bind(this),value:this.state.comment}),this.renderStars(),r.a.createElement("button",{className:"orderItem_btn orderItem_btn--red",onClick:this.handleSubmitComment},"\u63d0\u4ea4"),r.a.createElement("button",{className:"orderItem_btn orderItem_btn--gray",onClick:this.handleCancleClick},"\u53d6\u6d88"))}},{key:"renderStars",value:function(){var e=this,t=this.state.stars;return r.a.createElement("div",null,[1,2,3,4,5].map(function(a,n){var c=t>=a?"orderItem_star--light":"orderItem_star";return r.a.createElement("span",{key:n,className:c,onClick:e.handleStarClick.bind(e,a)},"\u2605")}))}},{key:"handleClickComment",value:function(){this.setState({editing:!0})}},{key:"handleCommentChange",value:function(e){this.setState({comment:e.target.value})}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).handleOnSubmit=function(e,t,n){var r=a.state.data.map(function(a,r){return a.id===e?Object(u.a)({},a,{stars:t,comment:n,ifCommented:!0}):a});a.setState({data:r})},a.state={data:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/mock/orders.json").then(function(t){t.ok&&t.json().then(function(t){e.setState({data:t})})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"orderList"},this.state.data.map(function(t){return r.a.createElement(h,{data:t,key:t.id,onSubmit:e.handleOnSubmit})}))}}]),t}(n.Component),p=(a(18),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"myOrder"},"\u6211\u7684\u8ba2\u5355")}}]),t}(n.Component)),v=(a(20),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(b,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(22)}},[[9,2,1]]]);
//# sourceMappingURL=main.7e1c78d0.chunk.js.map
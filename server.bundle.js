!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=47)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("styled-components")},function(e,n){e.exports=require("@babel/runtime/helpers/taggedTemplateLiteral")},function(e,n){e.exports=require("@babel/runtime/regenerator")},function(e,n){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,n){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,n){e.exports=require("@babel/runtime/helpers/createClass")},function(e,n){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,n){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,n){e.exports=require("@babel/runtime/helpers/inherits")},function(e,n){e.exports=require("react-redux")},function(e,n){e.exports=require("@babel/runtime/helpers/assertThisInitialized")},function(e,n){e.exports=require("redux")},function(e,n){e.exports=require("react-router-dom")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("webpack")},function(e,n){e.exports=require("react-router/Route")},function(e,n){e.exports=require("intl")},function(e,n){e.exports=require("body-parser")},function(e,n){e.exports=require("redux-thunk")},function(e,n){e.exports=require("axios")},function(e,n){e.exports=require("react-dom/server")},function(e,n){e.exports=require("react-router/matchPath")},function(e,n){e.exports=require("react-router/Router")},function(e,n){e.exports=require("@babel/runtime/helpers/typeof")},function(e,n){e.exports=require("react-router/Switch")},function(e,n){e.exports=require("serialize-javascript")},function(e,n){e.exports=require("polished")},function(e,n){e.exports=require("react-helmet")},function(e,n){e.exports=require("express-http-proxy")},function(e,n){e.exports=require("helmet")},function(e,n){e.exports=require("connect-timeout")},function(e,n){e.exports=require("express-http-to-https")},function(e,n){e.exports=require("cookie-parser")},function(e,n){e.exports=require("cors")},function(e,n){e.exports=require("http")},function(e,n){e.exports=require("regenerator-runtime")},function(e,n){e.exports=require("regenerator-runtime/runtime")},function(e,n,t){const r=t(15),o=t(16),a=t(40),i=(t(41).BundleAnalyzerPlugin,t(42));e.exports={entry:["webpack-hot-middleware/client",r.resolve(__dirname,"./src/client")],output:{path:r.resolve(__dirname,"src/client"),filename:"bundle.js",publicPath:"/"},devtool:"cheap-inline-module-source-map",devServer:{hot:!0,inline:!0,port:3001},plugins:[new a,new o.HotModuleReplacementPlugin,new o.NamedModulesPlugin,new o.DefinePlugin({"process.env":{NODE_ENV:JSON.stringify("development"),WEBPACK:!0}})],mode:"development",module:{rules:[{enforce:"pre",test:/\.js$/,use:{loader:43,options:{formatter:i,eslintPath:44}},include:r.resolve(__dirname,"src")},{test:/\.js$/,use:{loader:"babel-loader",query:{presets:["@babel/preset-env","@babel/preset-react"],plugins:["@babel/proposal-class-properties"]}},include:r.resolve(__dirname,"src")}]},node:{__dirname:!1}}},function(e,n){e.exports=require("string-replace-webpack-plugin")},function(e,n){e.exports=require("webpack-bundle-analyzer")},function(e,n){e.exports=require("react-dev-utils/eslintFormatter")},function(e,n){e.exports=require("eslint-loader")},function(e,n){e.exports=require("eslint")},function(e,n){e.exports=require("webpack-dev-middleware")},function(e,n){e.exports=require("webpack-hot-middleware")},function(e,n,t){"use strict";t.r(n);var r=t(14),o=t.n(r),a=(t(15),t(12)),i=t(20),c=t.n(i),u="user/LOGIN",s=t(4),l=t.n(s),p="communication/GET_USERS";function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(t,!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=Object(a.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u:return n.payload;default:return e}},communication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[],usersInitialized:!1},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return f({},e,{users:n.payload,usersInitialized:!0});default:return e}}}),d=t(21),h=t.n(d),b=function(e){return Object(a.createStore)(m,{},Object(a.applyMiddleware)(c.a.withExtraArgument(function(e){return h.a.create({baseURL:"".concat(process.env.HOST||"http://localhost:4000","/api"),headers:{cookie:e&&e.get("cookie")||""}})}(e))))},v=t(3),x=t.n(v),y=t(0),w=t.n(y),E=t(22),O=t(13),k=t(10),j=t(23),S=t.n(j),P=t(24),q=t.n(P).a.prototype.computeMatch,D=function e(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return n.some((function(n){var o=n.path?S()(t,n):r.length?r[r.length-1].match:q(t);return o&&(r.push({route:n,match:o}),n.routes&&e(n.routes,t,r)),o})),r},C=t(25),z=t.n(C),T=t(26),_=t.n(T),R=t(17),I=t.n(R),N=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},A=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e?w.a.createElement(_.a,null,e.map((function(e,t){return"object"===z()(e.path)?e.path.map((function(r){return w.a.createElement(I.a,{key:e.key||t,path:r,exact:e.exact,strict:e.strict,render:function(t){return w.a.createElement(e.component,N({},t,n,{route:e}))}})})):[w.a.createElement(I.a,{key:e.key||t,path:e.path,exact:e.exact,strict:e.strict,render:function(t){return w.a.createElement(e.component,N({},t,n,{route:e}))}})]})).reduce((function(e,n){return e.concat(n)}),[])):null},F=t(27),M=t.n(F),B=t(5),L=t.n(B),U=t(6),H=t.n(U),G=t(7),J=t.n(G),W=t(8),K=t.n(W),V=t(9),X=t.n(V),$=t(1),Y=t.n($),Q=function(e){return function(n,t,r){var o,a,i,c;return x.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("login"),t.next=3,x.a.awrap(r.post("/login",e));case 3:o=t.sent,a=o.data,i=a.success,c=a.user,i&&n({type:u,payload:c});case 8:case"end":return t.stop()}}))}},Z=function(){return function(e,n,t){var r,o;return x.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("get users"),n.next=3,x.a.awrap(t.get("/users"));case 3:r=n.sent,o=r.data,e({type:p,payload:o});case 6:case"end":return n.stop()}}))}},ee=t(2),ne=t.n(ee);function te(){var e=ne()(["\n    body, html {\n        margin: 0; padding: 0;\n        height: 100%;\n        overflow: hidden;\n        font-size: 34px;\n        color: white;\n        overflow: hidden;\n        font-family: cursive;\n    }\n    body {\n        overflow-y: hidden;\n        overflow-x: hidden;\n    }\n    #root, #root > div {\n        height: 100%;\n        width: 100%;\n        background-color: black;\n        display: table;\n    }\n\n    @keyframes fadeIn {\n        0% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n    }\n\n\n"]);return te=function(){return e},e}var re=Object($.createGlobalStyle)(te()),oe=t(28);function ae(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var ie,ce={c:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ae(t,!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ae(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},{grey9:"#999",grey7:"#777",grey3:"#333",grey5:"#555",greyE:"#EEE",greyD:"#DDD",greyA:"#aaa",score:"#777",active:"#5e61ba",boost:"#524b9a",dark:"#2d215e",light:"#ededf7",wrong:"#dd161d",pale:"#cacae7",disabled:"#CCCCCC",info:"#f7c30c",snow:"#FBF9F9",white:"#FFFFFF",black:"black",facebook:"#4267b2",google:"#DB4437",correct:"#4bac09",incorrect:"#dd161d",play:"#7d44a5",playLight:Object(oe.lighten)(.35,"#7d44a5"),check:"#63c6bd",blackShadow1:"rgba(0, 0, 0, 0.1)",blackShadow2:"rgba(0, 0, 0, 0.2)",blackShadow3:"rgba(0, 0, 0, 0.3)",blackShadow35:"rgba(0, 0, 0, 0.35)",blackShadow4:"rgba(0, 0, 0, 0.4)",blackShadow5:"rgba(0, 0, 0, 0.5)",blackShadow7:"rgba(0, 0, 0, 0.7)",youtube:"#af1117"}),width:1420,height:720},ue=function(e){function n(){return L()(this,n),J()(this,K()(n).apply(this,arguments))}return X()(n,e),H()(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.user,t=e.communication;n.username||this.props.login(),t.usersInitialized||this.props.getUsers(),this.props.startCommunication()}},{key:"render",value:function(){var e=this.props,n=e.route;return null===e.user?null:w.a.createElement($.ThemeProvider,{theme:ce},w.a.createElement(y.Fragment,null,w.a.createElement(re,null),A(n.routes)))}}]),n}(y.Component),se={component:Object(O.withRouter)(Object(k.connect)((function(e){return{user:e.user,communication:e.communication}}),{login:Q,getUsers:Z,startCommunication:function(){return function(e,n,t){return x.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:new EventSource("/api/communication").onmessage=function(n){var t=JSON.parse(n.data),r=t.users;"users"===t.type&&e({type:p,payload:r})};case 2:case"end":return n.stop()}}))}}})(ue)),loadData:function(e){var n;return x.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.dispatch,console.log("load data app",n),t.next=4,x.a.awrap(n(Q()));case 4:return console.log("load data get users",n),t.next=7,x.a.awrap(n(Z()));case 7:case"end":return t.stop()}}))},renderSeo:function(){}},le=t(11),pe=t.n(le);function ge(){var e=ne()(["\n    position: absolute;\n    top: -170px;\n    left: 80px;\n"]);return ge=function(){return e},e}function fe(){var e=ne()(["\n    ","\n"]);return fe=function(){return e},e}function me(){var e=ne()(["\n    position: absolute;\n    top: 305px;\n    left: 1150px;\n    z-index: 1;\n    img {\n        height: 270px;\n    }\n"]);return me=function(){return e},e}function de(){var e=ne()(["\n    position: absolute;\n    top: 1120px;\n    left: 1340px;\n"]);return de=function(){return e},e}function he(){var e=ne()(["\n    position: absolute;\n    top: ","px;\n    left: ","px;\n    img {\n        height: 130px;\n    }\n"]);return he=function(){return e},e}function be(){var e=ne()(["\n    position: absolute;\n    top: ","px;\n    left: ","px;\n    img {\n        height: 120px;\n    }\n"]);return be=function(){return e},e}function ve(){var e=ne()(["\n\n  background : -moz-linear-gradient(50% 100% 90deg,rgba(172, 1, 1, 1) 16.67%,rgba(157, 1, 31, 1) 18.13%,rgba(140, 0, 66, 1) 20.12%,rgba(126, 0, 93, 1) 22.14%,rgba(117, 0, 112, 1) 24.19%,rgba(111, 0, 123, 1) 26.28%,rgba(109, 0, 127, 1) 28.49%,rgba(105, 3, 125, 1) 29.46%,rgba(49, 42, 102, 1) 44.83%,rgba(13, 66, 88, 1) 56.25%,rgba(0, 75, 82, 1) 62.37%,rgba(0, 22, 24, 1) 82.62%,rgba(0, 0, 0, 1) 93.01%);\n  background : -webkit-linear-gradient(90deg, rgba(172, 1, 1, 1) 16.67%, rgba(157, 1, 31, 1) 18.13%, rgba(140, 0, 66, 1) 20.12%, rgba(126, 0, 93, 1) 22.14%, rgba(117, 0, 112, 1) 24.19%, rgba(111, 0, 123, 1) 26.28%, rgba(109, 0, 127, 1) 28.49%, rgba(105, 3, 125, 1) 29.46%, rgba(49, 42, 102, 1) 44.83%, rgba(13, 66, 88, 1) 56.25%, rgba(0, 75, 82, 1) 62.37%, rgba(0, 22, 24, 1) 82.62%, rgba(0, 0, 0, 1) 93.01%);\n  background : -webkit-gradient(linear,50% 100% ,50% 0% ,color-stop(0.1667,rgba(172, 1, 1, 1) ),color-stop(0.1813,rgba(157, 1, 31, 1) ),color-stop(0.2012,rgba(140, 0, 66, 1) ),color-stop(0.2214,rgba(126, 0, 93, 1) ),color-stop(0.2419,rgba(117, 0, 112, 1) ),color-stop(0.2628,rgba(111, 0, 123, 1) ),color-stop(0.2849,rgba(109, 0, 127, 1) ),color-stop(0.2946,rgba(105, 3, 125, 1) ),color-stop(0.4483,rgba(49, 42, 102, 1) ),color-stop(0.5625,rgba(13, 66, 88, 1) ),color-stop(0.6237,rgba(0, 75, 82, 1) ),color-stop(0.8262,rgba(0, 22, 24, 1) ),color-stop(0.9301,rgba(0, 0, 0, 1) ));\n  background : -o-linear-gradient(90deg, rgba(172, 1, 1, 1) 16.67%, rgba(157, 1, 31, 1) 18.13%, rgba(140, 0, 66, 1) 20.12%, rgba(126, 0, 93, 1) 22.14%, rgba(117, 0, 112, 1) 24.19%, rgba(111, 0, 123, 1) 26.28%, rgba(109, 0, 127, 1) 28.49%, rgba(105, 3, 125, 1) 29.46%, rgba(49, 42, 102, 1) 44.83%, rgba(13, 66, 88, 1) 56.25%, rgba(0, 75, 82, 1) 62.37%, rgba(0, 22, 24, 1) 82.62%, rgba(0, 0, 0, 1) 93.01%);\n  background : -ms-linear-gradient(90deg, rgba(172, 1, 1, 1) 16.67%, rgba(157, 1, 31, 1) 18.13%, rgba(140, 0, 66, 1) 20.12%, rgba(126, 0, 93, 1) 22.14%, rgba(117, 0, 112, 1) 24.19%, rgba(111, 0, 123, 1) 26.28%, rgba(109, 0, 127, 1) 28.49%, rgba(105, 3, 125, 1) 29.46%, rgba(49, 42, 102, 1) 44.83%, rgba(13, 66, 88, 1) 56.25%, rgba(0, 75, 82, 1) 62.37%, rgba(0, 22, 24, 1) 82.62%, rgba(0, 0, 0, 1) 93.01%);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr='#AC0101', endColorstr='#000000' ,GradientType=0)\";\n    background : linear-gradient(\n        0deg,\n        rgba(255, 255, 255, 1) 16.67%,\n        rgba(50, 1, 15, 1) 18.13%,\n        rgba(80, 0, 65, 1) 20.12%,\n        rgba(126, 0, 93, 1) 22.14%,\n        rgba(117, 0, 112, 1) 24.19%,\n        rgba(111, 0, 123, 1) 26.28%,\n        rgba(109, 0, 127, 1) 28.49%,\n        rgba(105, 3, 125, 1) 29.46%,\n        rgba(49, 42, 102, 1) 44.83%,\n        rgba(13, 66, 88, 1) 56.25%,\n        rgba(0, 75, 82, 1) 62.37%,\n        rgba(0, 22, 24, 1) 82.62%,\n        rgba(0, 0, 0, 1) 93.01%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000',endColorstr='#AC0101' , GradientType=0);\n\n    z-index: -2;\n    ","\n"]);return ve=function(){return e},e}function xe(){var e=ne()(["\n    width: ","px;\n    height: ","px;\n    position: absolute;\n    left: -","px;\n    top: -","px;\n    img {\n        margin-left: ","px;\n    }\n"]);return xe=function(){return e},e}function ye(){var e=ne()(["\n    width: ","px;\n    height: ","px;\n    position: relative;\n    transition: 1.2s;\n"]);return ye=function(){return e},e}function we(){var e=ne()(["\n    margin: auto;\n    box-sizing: border-box;\n"]);return we=function(){return e},e}function Ee(){var e=ne()(["\n    display: table-cell;\n    vertical-align: middle;\n"]);return Ee=function(){return e},e}process.env.WEBPACK?(ie=window,window.on=window.addEventListener,window.off=window.removeEventListener,document):ie={on:function(){},off:function(){}};var Oe=Y.a.div(Ee()),ke=Y.a.div(we()),je=Y.a.div(ye(),(function(e){return e.theme.width}),(function(e){return e.theme.height})),Se=Object($.css)(xe(),(function(e){return 5*e.theme.width}),(function(e){return 3*e.theme.height}),(function(e){return 2*e.theme.width}),(function(e){return e.theme.height}),(function(e){return e.theme.width})),Pe=Y.a.div(ve(),Se),qe=function(e){function n(){return L()(this,n),J()(this,K()(n).apply(this,arguments))}return X()(n,e),H()(n,[{key:"render",value:function(){return w.a.createElement(Pe,null,w.a.createElement("img",{src:"/images/stars.svg",alt:"stars"}))}}]),n}(y.Component),De=Y.a.div(be(),780,2640),Ce=Y.a.div(he(),740,1430),ze=Y.a.div(de()),Te=Y.a.div(me()),_e=function(){return w.a.createElement(Te,null,w.a.createElement("img",{src:"/images/house.svg",alt:"house"}))},Re=Y.a.div(fe(),Se),Ie=function(e){function n(){return L()(this,n),J()(this,K()(n).apply(this,arguments))}return X()(n,e),H()(n,[{key:"render",value:function(){return w.a.createElement(Re,null,w.a.createElement("img",{src:"/images/landscape.svg",alt:""}),w.a.createElement(De,null,w.a.createElement("img",{src:"/images/decoration_moon.svg",alt:"moon"})),w.a.createElement(Ce,null,w.a.createElement("img",{src:"/images/decoration_snowflake.svg",alt:"snowflakes"})),w.a.createElement(ze,null,w.a.createElement("img",{src:"/images/decoration_trees.svg",alt:"trees"})))}}]),n}(y.Component),Ne=Y.a.div(ge()),Ae=function(e){function n(){return L()(this,n),J()(this,K()(n).apply(this,arguments))}return X()(n,e),H()(n,[{key:"render",value:function(){return w.a.createElement(Ne,null,w.a.createElement("img",{src:"/images/meteor.svg",alt:"meteor"}))}}]),n}(y.Component),Fe=function(e){function n(){var e,t;L()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=J()(this,(e=K()(n)).call.apply(e,[this].concat(o))),l()(pe()(t),"state",{scale:1,width:1420,height:720}),l()(pe()(t),"resize",(function(){var e,n,r,o=window.innerWidth,a=window.innerHeight,i=720/1420;i>a/o?(n=a,e=a/i):(e=o,n=o*i),r=n/720,t.setState({width:e,height:n,scale:r})})),t}return X()(n,e),H()(n,[{key:"componentDidMount",value:function(){ie.addEventListener("resize",this.resize),this.resize()}},{key:"render",value:function(){var e=this.state,n=e.width,t=e.height,r=e.scale,o=this.props.children;return w.a.createElement(Oe,null,w.a.createElement(ke,{style:{width:n,height:t,transform:"scale("+r+", "+r+")",transformOrigin:"top left"}},w.a.createElement(je,null,w.a.createElement(qe,null),w.a.createElement(_e,null),w.a.createElement(Ie,null),w.a.createElement(Ae,null),o)))}}]),n}(y.Component);function Me(){var e=ne()(["\n    div {\n        background-color: #4d9cb4;\n        ","\n        border-radius: 10px;\n        display: inline-block;\n        padding: 3px 6px;\n        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);\n    }\n    text-align: center;\n    font-size: 14px;\n\n"]);return Me=function(){return e},e}function Be(){var e=ne()(["\n    ","\n    top: 28px;\n    left: 638px;\n    img {\n        height: 112px;\n    }\n"]);return Be=function(){return e},e}function Le(){var e=ne()(["\n    ","\n    top: 302px;\n    left: 578px;\n    img {\n        height: 120px;\n    }\n"]);return Le=function(){return e},e}function Ue(){var e=ne()(["\n    ","\n    top: 448px;\n    left: 609px;\n    img {\n        height: 120px;\n    }\n"]);return Ue=function(){return e},e}function He(){var e=ne()(["\n    ","\n    top: 402px;\n    left: 434px;\n    img {\n        height: 120px;\n    }\n"]);return He=function(){return e},e}function Ge(){var e=ne()(["\n    ","\n    left: 719px;\n    top: 350px;\n    img {\n        height: 120px;\n    }\n"]);return Ge=function(){return e},e}function Je(){var e=ne()(["\n    ","\n    left: 787px;\n    top: 487px;\n    img {\n        height: 105px;\n    }\n"]);return Je=function(){return e},e}function We(){var e=ne()(["\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n"]);return We=function(){return e},e}var Ke=Object($.css)(We()),Ve=Y.a.div(Je(),Ke),Xe=Y.a.div(Ge(),Ke),$e=Y.a.div(He(),Ke),Ye=Y.a.div(Ue(),Ke),Qe=Y.a.div(Le(),Ke),Ze=Y.a.div(Be(),Ke),en=Y.a.div(Me(),""),nn=function(e){var n=e.children;return w.a.createElement(en,null,w.a.createElement("div",null,n))},tn=[function(e){var n=e.children;return w.a.createElement(Ze,null,w.a.createElement("img",{src:"/images/icons/star.svg",alt:"Bell"}),n)},function(e){var n=e.children;return w.a.createElement(Qe,null,w.a.createElement("img",{src:"/images/icons/bell.svg",alt:"Bell"}),n)},function(e){var n=e.children;return w.a.createElement(Ye,null,w.a.createElement("img",{src:"/images/icons/nut.svg",alt:"Nut"}),n)},function(e){var n=e.children;return w.a.createElement($e,null,w.a.createElement("img",{src:"/images/icons/angel.svg",alt:"Angel"}),n)},function(e){var n=e.children;return w.a.createElement(Xe,null,w.a.createElement("img",{src:"/images/icons/jingle.svg",alt:"Jingle"}),n)},function(e){var n=e.children;return w.a.createElement(Ve,null,w.a.createElement("img",{src:"/images/icons/ding.svg",alt:"Ding"}),n)}],rn=function(e){var n=e.users;return w.a.createElement("div",null,n.map((function(e){var n=e.username,t=e.position,r=tn[t];return w.a.createElement(r,{key:t},w.a.createElement(nn,null,n))})))};function on(){var e=ne()(["\n    background-color: #2B2D65;\n    border-radius: 5px;\n    border: 4px solid white;\n    color: white;\n    padding: 20px 40px;\n    display: flex;\n    flex-direction: column;\n\n    input {\n        height: 50px;\n        font-size: 26px;\n        margin-top: 16px;\n        margin-bottom: 4px;\n        text-align: center;\n        font-family: inherit;\n        color: #2B2D65;\n        outline: none;\n        padding: 6px;\n        box-sizing: border-box;\n    }\n\n    button {\n        background-color: transparent;\n        border: none;\n        cursor: pointer;\n        outline: none;\n    }\n\n    img {\n        width: 120px;\n    }\n"]);return on=function(){return e},e}function an(){var e=ne()(["\n    position: absolute;\n    bottom: 20px;\n    left: 0;\n    right: 0;\n    text-align: center;\n    transition: 0.5s;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    bottom: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return an=function(){return e},e}var cn=Y.a.div(an()),un=Y.a.form(on()),sn=function(e){function n(){var e,t;L()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=J()(this,(e=K()(n)).call.apply(e,[this].concat(o))),l()(pe()(t),"state",{username:""}),l()(pe()(t),"changeUsername",(function(e){var n=e.target.value;n.length>12||t.setState({username:n})})),l()(pe()(t),"submit",(function(e){var n=t.state.username;e.preventDefault(),n&&t.props.login({username:n})})),t}return X()(n,e),H()(n,[{key:"render",value:function(){var e=this.state.username;return w.a.createElement(cn,null,w.a.createElement(un,{onSubmit:this.submit},w.a.createElement("label",null,"Enter your Username"),w.a.createElement("input",{name:"username",value:e,onChange:this.changeUsername}),w.a.createElement("button",{type:"submit"},w.a.createElement("img",{src:"/images/UI_startBtn.svg",alt:""}))))}}]),n}(w.a.Component),ln=Object(k.connect)(null,{login:Q})(sn),pn=function(e){function n(){return L()(this,n),J()(this,K()(n).apply(this,arguments))}return X()(n,e),H()(n,[{key:"render",value:function(){var e=this.props,n=e.user,t=e.users;return w.a.createElement(Fe,null,w.a.createElement(rn,{users:t}),n.username?null:w.a.createElement(ln,null))}}]),n}(y.Component);function gn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function fn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?gn(t,!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):gn(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var mn=[fn({},se,{routes:[fn({},{component:Object(k.connect)((function(e){return{user:e.user,users:e.communication.users}}))(pn),renderSeo:function(){}},{path:"/",exact:!0})]})],dn=t(29),hn=function(e,n,t,r){var o,a,i,c,u,s,l,p,g,f;return x.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(o=e.renderLang,"/images",a="",i=new $.ServerStyleSheet,a="https://".concat(e.headers.host).concat(e.path),(u=[{url:a,lang:"x-default"}]).unshift({url:a+(-1===a.indexOf("?")?"?":"&")+"lang=hu",lang:"hu"}),s=dn.Helmet.renderStatic(),l='\n        <!DOCTYPE html>\n        <html lang="'.concat(o,'">\n            <head>\n                <meta charset="utf-8">\n                ').concat(s.title.toString(),"\n                ").concat(s.meta.toString(),'\n                <link href="').concat(a,'" rel="canonical">\n                ').concat(u.map((function(e){return'<link rel="alternate" hreflang="'.concat(e.lang,'" href="').concat(e.url,'"\n                ')})).join(""),'\n                <meta property="og:url" content="').concat(a,'">\n\n                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no, user-scalable=yes">\n                <meta name="lang" content="').concat(o,'">\n\n\n                <link rel="shortcut icon" href="').concat("/images",'/favicon.ico">\n                <link rel="apple-touch-icon" sizes="57x57" href="').concat("/images",'/apple-icon-57x57.png">\n                <link rel="apple-touch-icon" sizes="60x60" href="').concat("/images",'/apple-icon-60x60.png">\n                <link rel="apple-touch-icon" sizes="72x72" href="').concat("/images",'/apple-icon-72x72.png">\n                <link rel="apple-touch-icon" sizes="76x76" href="').concat("/images",'/apple-icon-76x76.png">\n                <link rel="apple-touch-icon" sizes="114x114" href="').concat("/images",'/apple-icon-114x114.png">\n                <link rel="apple-touch-icon" sizes="120x120" href="').concat("/images",'/apple-icon-120x120.png">\n                <link rel="apple-touch-icon" sizes="144x144" href="').concat("/images",'/apple-icon-144x144.png">\n                <link rel="apple-touch-icon" sizes="152x152" href="').concat("/images",'/apple-icon-152x152.png">\n                <link rel="apple-touch-icon" sizes="180x180" href="').concat("/images",'/apple-icon-180x180.png">\n                <link rel="icon" type="image/png" sizes="192x192" href="').concat("/images",'/android-icon-192x192.png">\n                <link rel="icon" type="image/png" sizes="32x32" href="').concat("/images",'/favicon-32x32.png">\n                <link rel="icon" type="image/png" sizes="96x96" href="').concat("/images",'/favicon-96x96.png">\n                <link rel="icon" type="image/png" sizes="16x16" href="').concat("/images",'/favicon-16x16.png">\n                <meta name="msapplication-TileColor" content="#00968b">\n                <meta name="msapplication-TileImage" content="').concat("/images",'/ms-icon-144x144.png">\n                <meta name="theme-color" content="#00968b">\n                <link href=\'').concat("/font-prod.css",'\' rel="stylesheet" />\n                ').concat('\n                    <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""><\/script>\n                    <script>\n                        // var OneSignal = window.OneSignal || [];\n                        // OneSignal.push(function() {\n                        //     OneSignal.init({\n                        //         appId: "",\n                        //         autoResubscribe: true,\n                        //         welcomeNotification: {\n                        //             disable: true\n                        //         }\n                        //     });\n                        // });\n                    <\/script>','\n            </head>\n            <body>\n                <div id="root">'),p='</div>\n            <div id="modal-root"></div>\n            <div id="notification-root"></div>\n            '.concat("<script> window.INITIAL_STATE = ".concat(M()(n.getState()),"<\/script>"),'\n            <script src="/bundle.js"><\/script>\n        </body>\n    </html>'),!t.url){m.next=12;break}return m.abrupt("return",r.redirect(301,t.url));case 12:m.next=14;break;case 14:g=!1,f=!1,r.write(l,(function(){g=!0,f&&bn(c,i,r,p)})),c=i.collectStyles(w.a.createElement(k.Provider,{store:n},w.a.createElement(O.StaticRouter,{location:e.path,context:t},w.a.createElement($.StyleSheetManager,{sheet:i.instance},A(mn))))),f=!0,g&&bn(c,i,r,p);case 20:case"end":return m.stop()}}))},bn=function(e,n,t,r){var o=n.interleaveWithNodeStream(Object(E.renderToNodeStream)(e));o.pipe(t,{end:!1}),o.on("end",(function(){t.write(r),t.end()}))},vn=t(30),xn=t.n(vn),yn=t(18),wn=t.n(yn),En=t(31),On=t.n(En),kn=t(32),jn=t.n(kn),Sn=t(33),Pn=(t(37),t(38),t(19)),qn=t.n(Pn),Dn=t(34),Cn=t.n(Dn),zn=[],Tn=[],_n=0,Rn=function(e){return"data: ".concat(e,"\n\n")},In=t(35),Nn=t.n(In),An=t(36),Fn=t.n(An);t(16);Intl.NumberFormat=wn.a.NumberFormat,Intl.DateTimeFormat=wn.a.DateTimeFormat;const Mn=o()(),Bn=Fn.a.Server(Mn);Mn.use(jn()("8s")),global.appRoot=__dirname;var Ln;Mn.use(Object(Sn.redirectToHTTPS)([/localhost:(\d{4})/],[/\/insecure/],301)),process.env.RENDERER&&Mn.use("/api",xn()(process.env.API_SERVER||"localhost:8000",{limit:"10mb",proxyReqPathResolver:e=>"/api"+e.path+"?"+Object.keys(e.query).map(n=>n+"="+e.query[n]).join("&")})),Mn.use(o.a.static("src/public")),Mn.use(On()({noSniff:!1})),Mn.get("*",(e,n,t)=>{if("/api/"===e.url.slice(0,5))return t();{const t=b(e),r={},o=[],a=D(mn,e.path).map(({route:n})=>(o.push(n),n.loadData?n.loadData(t,e.path):null)).map(e=>{if(e)return new Promise((n,t)=>{e.then(n).catch(n)})});Promise.all(a).then(()=>{console.log(t.getState()),o.forEach(e=>{e.renderSeo(t)}),hn(e,t,r,n)})}}),process.env.RENDERER||((Ln=Mn).use(Nn()()),Ln.post("*",(function(e,n,t){return"/api/"===e.url.slice(0,5)?(e.url=e.url.slice(4),t()):(e.url="/",t())})),Ln.get("*",(function(e,n,t){return"/api/"===e.url.slice(0,5)?(e.url=e.url.slice(4),t()):(e.url="/",t())})),Ln.use(qn.a.urlencoded({extended:!0,limit:"10mb"})),Ln.use(qn.a.json({limit:"10mb"})),Ln.use(Cn()()),function(e){e.post("/login",(function(e,t){var r=e.body.username||e.cookies.username;r?(t.cookie("username",r,{maxAge:2592e3,httpOnly:!0}),-1===zn.findIndex((function(e){return e.username===r}))&&zn.push({username:r,position:zn.length}),n(),t.json({success:!0,user:zn.find((function(e){return e.username===r}))})):t.json({success:!1})})),e.get("/users",(function(e,n){n.json(zn)})),e.get("/communication",(function(e,n){var t;return x.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:n.writeHead(200,{"Content-Type":"text/event-stream","Cache-Control":"no-cache","Access-Control-Allow-Origin":"*"}),t=_n,Tn.push({res:n,id:t}),_n++,n.write(Rn(JSON.stringify({type:"connected"}))),e.on("close",(function(){Tn.splice(Tn.findIndex((function(e){return e.id===t})),1)}));case 6:case"end":return r.stop()}}))}));var n=function(){Tn.forEach((function(e){e.res.write(Rn(JSON.stringify({type:"users",users:zn})))}))}}(Ln)),Bn.listen(process.env.PORT||4e3,e=>{e?console.error(e):console.info("Listening at http://localhost:"+(process.env.PORT||4e3))})}]);
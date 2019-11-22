!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=47)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("styled-components")},function(e,n){e.exports=require("@babel/runtime/helpers/taggedTemplateLiteral")},function(e,n){e.exports=require("@babel/runtime/regenerator")},function(e,n){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,n){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,n){e.exports=require("@babel/runtime/helpers/createClass")},function(e,n){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,n){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,n){e.exports=require("@babel/runtime/helpers/inherits")},function(e,n){e.exports=require("react-redux")},function(e,n){e.exports=require("@babel/runtime/helpers/assertThisInitialized")},function(e,n){e.exports=require("redux")},function(e,n){e.exports=require("axios")},function(e,n){e.exports=require("react-router-dom")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("webpack")},function(e,n){e.exports=require("react-router/Route")},function(e,n){e.exports=require("intl")},function(e,n){e.exports=require("body-parser")},function(e,n){e.exports=require("redux-thunk")},function(e,n){e.exports=require("@babel/runtime/helpers/toConsumableArray")},function(e,n){e.exports=require("react-dom/server")},function(e,n){e.exports=require("react-router/matchPath")},function(e,n){e.exports=require("react-router/Router")},function(e,n){e.exports=require("@babel/runtime/helpers/typeof")},function(e,n){e.exports=require("react-router/Switch")},function(e,n){e.exports=require("serialize-javascript")},function(e,n){e.exports=require("react-helmet")},function(e,n){e.exports=require("express-http-proxy")},function(e,n){e.exports=require("helmet")},function(e,n){e.exports=require("connect-timeout")},function(e,n){e.exports=require("express-http-to-https")},function(e,n){e.exports=require("cookie-parser")},function(e,n){e.exports=require("cors")},function(e,n){e.exports=require("http")},function(e,n){e.exports=require("regenerator-runtime")},function(e,n){e.exports=require("regenerator-runtime/runtime")},function(e,n,t){const r=t(16),a=t(17),o=t(40),i=(t(41).BundleAnalyzerPlugin,t(42));e.exports={entry:["webpack-hot-middleware/client",r.resolve(__dirname,"./src/client")],output:{path:r.resolve(__dirname,"src/client"),filename:"bundle.js",publicPath:"/"},devtool:"cheap-inline-module-source-map",devServer:{hot:!0,inline:!0,port:3001},plugins:[new o,new a.HotModuleReplacementPlugin,new a.NamedModulesPlugin,new a.DefinePlugin({"process.env":{NODE_ENV:JSON.stringify("development"),WEBPACK:!0}})],mode:"development",module:{rules:[{enforce:"pre",test:/\.js$/,use:{loader:43,options:{formatter:i,eslintPath:44}},include:r.resolve(__dirname,"src")},{test:/\.js$/,use:{loader:"babel-loader",query:{presets:["@babel/preset-env","@babel/preset-react"],plugins:["@babel/proposal-class-properties"]}},include:r.resolve(__dirname,"src")}]},node:{__dirname:!1}}},function(e,n){e.exports=require("string-replace-webpack-plugin")},function(e,n){e.exports=require("webpack-bundle-analyzer")},function(e,n){e.exports=require("react-dev-utils/eslintFormatter")},function(e,n){e.exports=require("eslint-loader")},function(e,n){e.exports=require("eslint")},function(e,n){e.exports=require("webpack-dev-middleware")},function(e,n){e.exports=require("webpack-hot-middleware")},function(e,n,t){"use strict";t.r(n);var r=t(15),a=t.n(r),o=(t(16),t(12)),i=t(21),c=t.n(i),u="user/LOGIN",s=t(22),l=t.n(s),p=t(4),f=t.n(p),m="communication/GET_USERS",g="communication/REMOVE_MESSAGE";function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(t,!0).forEach((function(n){f()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=Object(o.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u:return n.payload;case"user/LOGOUT":return{};default:return e}},communication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[],usersInitialized:!1,messages:[]},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m:return h({},e,{users:n.payload,usersInitialized:!0});case"communication/RECEIVE_MESSAGE":var t=n.payload,r=e.messages.filter((function(e){return e.user.username!==t.user.username}));return h({},e,{messages:[].concat(l()(r),[t])});case g:return h({},e,{messages:e.messages.filter((function(e){return e.id!==n.payload}))});default:return e}}}),v=t(13),x=t.n(v),y=function(e){return Object(o.createStore)(b,{},Object(o.applyMiddleware)(c.a.withExtraArgument(function(e){return x.a.create({baseURL:"".concat(process.env.HOST||"http://localhost:4000","/api"),headers:{cookie:e&&e.get("cookie")||""}})}(e))))},w=t(3),E=t.n(w),O=t(0),k=t.n(O),S=t(23),j=t(14),q=t(10),P=t(24),z=t.n(P),C=t(25),_=t.n(C).a.prototype.computeMatch,T=function e(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return n.some((function(n){var a=n.path?z()(t,n):r.length?r[r.length-1].match:_(t);return a&&(r.push({route:n,match:a}),n.routes&&e(n.routes,t,r)),a})),r},D=t(26),I=t.n(D),R=t(27),A=t.n(R),M=t(18),N=t.n(M),L=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},G=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e?k.a.createElement(A.a,null,e.map((function(e,t){return"object"===I()(e.path)?e.path.map((function(r){return k.a.createElement(N.a,{key:e.key||t,path:r,exact:e.exact,strict:e.strict,render:function(t){return k.a.createElement(e.component,L({},t,n,{route:e}))}})})):[k.a.createElement(N.a,{key:e.key||t,path:e.path,exact:e.exact,strict:e.strict,render:function(t){return k.a.createElement(e.component,L({},t,n,{route:e}))}})]})).reduce((function(e,n){return e.concat(n)}),[])):null},U=t(28),B=t.n(U),F=t(5),H=t.n(F),J=t(6),V=t.n(J),K=t(7),W=t.n(K),X=t(8),Y=t.n(X),$=t(9),Q=t.n($),Z=t(1),ee=t.n(Z),ne=function(e){return function(n,t,r){var a,o,i,c;return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.awrap(r.post("/login",e));case 2:a=t.sent,o=a.data,i=o.success,c=o.user,i&&n({type:u,payload:c});case 7:case"end":return t.stop()}}))}},te=function(){return function(e,n,t){var r,a;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.awrap(t.get("/users"));case 2:r=n.sent,a=r.data,e({type:m,payload:a});case 5:case"end":return n.stop()}}))}},re=t(2),ae=t.n(re);function oe(){var e=ae()(["\n    body, html {\n        margin: 0; padding: 0;\n        height: 100%;\n        overflow: hidden;\n        font-size: 34px;\n        color: white;\n        overflow: hidden;\n        font-family: cursive;\n    }\n    body {\n        overflow-y: hidden;\n        overflow-x: hidden;\n    }\n    #root, #root > div {\n        height: 100%;\n        width: 100%;\n        background-color: black;\n        display: table;\n    }\n\n    @keyframes fadeIn {\n        0% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n    }\n"]);return oe=function(){return e},e}var ie,ce=Object(Z.createGlobalStyle)(oe()),ue={width:1420,height:720},se=function(e){function n(){return H()(this,n),W()(this,Y()(n).apply(this,arguments))}return Q()(n,e),V()(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.user,t=e.communication;n.username||this.props.login(),t.usersInitialized||this.props.getUsers(),this.props.startCommunication()}},{key:"render",value:function(){var e=this.props,n=e.route;return null===e.user?null:k.a.createElement(Z.ThemeProvider,{theme:ue},k.a.createElement(O.Fragment,null,k.a.createElement(ce,null),G(n.routes)))}}]),n}(O.Component),le={component:Object(j.withRouter)(Object(q.connect)((function(e){return{user:e.user,communication:e.communication}}),{login:ne,getUsers:te,startCommunication:function(){return function(e,n,t){return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:new EventSource("/api/communication").onmessage=function(n){var t=JSON.parse(n.data),r=t.type,a=t.data;switch(r){case"users":return e({type:m,payload:a});case"message":return setTimeout((function(){e({type:g,payload:a.id})}),a.expiresIn),e({type:"communication/RECEIVE_MESSAGE",payload:a})}};case 2:case"end":return n.stop()}}))}}})(se)),loadData:function(e){var n;return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.dispatch,t.abrupt("return",new Promise((function(e){return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.awrap(n(ne()));case 2:return t.next=4,E.a.awrap(n(te()));case 4:e();case 5:case"end":return t.stop()}}))})));case 2:case"end":return t.stop()}}))},renderSeo:function(){}},pe=t(11),fe=t.n(pe);function me(){var e=ae()(["\n    position: absolute;\n    top: -170px;\n    left: 80px;\n"]);return me=function(){return e},e}function ge(){var e=ae()(["\n    ","\n"]);return ge=function(){return e},e}function de(){var e=ae()(["\n    position: absolute;\n    top: 305px;\n    left: 1150px;\n    z-index: 1;\n    img {\n        height: 270px;\n    }\n"]);return de=function(){return e},e}function he(){var e=ae()(["\n    position: absolute;\n    top: 1120px;\n    left: 1340px;\n"]);return he=function(){return e},e}function be(){var e=ae()(["\n    position: absolute;\n    top: ","px;\n    left: ","px;\n    img {\n        height: 130px;\n    }\n"]);return be=function(){return e},e}function ve(){var e=ae()(["\n    position: absolute;\n    top: ","px;\n    left: ","px;\n    img {\n        height: 120px;\n    }\n"]);return ve=function(){return e},e}function xe(){var e=ae()(["\n\n  background : -moz-linear-gradient(50% 100% 90deg,rgba(172, 1, 1, 1) 16.67%,rgba(157, 1, 31, 1) 18.13%,rgba(140, 0, 66, 1) 20.12%,rgba(126, 0, 93, 1) 22.14%,rgba(117, 0, 112, 1) 24.19%,rgba(111, 0, 123, 1) 26.28%,rgba(109, 0, 127, 1) 28.49%,rgba(105, 3, 125, 1) 29.46%,rgba(49, 42, 102, 1) 44.83%,rgba(13, 66, 88, 1) 56.25%,rgba(0, 75, 82, 1) 62.37%,rgba(0, 22, 24, 1) 82.62%,rgba(0, 0, 0, 1) 93.01%);\n  background : -webkit-linear-gradient(90deg, rgba(172, 1, 1, 1) 16.67%, rgba(157, 1, 31, 1) 18.13%, rgba(140, 0, 66, 1) 20.12%, rgba(126, 0, 93, 1) 22.14%, rgba(117, 0, 112, 1) 24.19%, rgba(111, 0, 123, 1) 26.28%, rgba(109, 0, 127, 1) 28.49%, rgba(105, 3, 125, 1) 29.46%, rgba(49, 42, 102, 1) 44.83%, rgba(13, 66, 88, 1) 56.25%, rgba(0, 75, 82, 1) 62.37%, rgba(0, 22, 24, 1) 82.62%, rgba(0, 0, 0, 1) 93.01%);\n  background : -webkit-gradient(linear,50% 100% ,50% 0% ,color-stop(0.1667,rgba(172, 1, 1, 1) ),color-stop(0.1813,rgba(157, 1, 31, 1) ),color-stop(0.2012,rgba(140, 0, 66, 1) ),color-stop(0.2214,rgba(126, 0, 93, 1) ),color-stop(0.2419,rgba(117, 0, 112, 1) ),color-stop(0.2628,rgba(111, 0, 123, 1) ),color-stop(0.2849,rgba(109, 0, 127, 1) ),color-stop(0.2946,rgba(105, 3, 125, 1) ),color-stop(0.4483,rgba(49, 42, 102, 1) ),color-stop(0.5625,rgba(13, 66, 88, 1) ),color-stop(0.6237,rgba(0, 75, 82, 1) ),color-stop(0.8262,rgba(0, 22, 24, 1) ),color-stop(0.9301,rgba(0, 0, 0, 1) ));\n  background : -o-linear-gradient(90deg, rgba(172, 1, 1, 1) 16.67%, rgba(157, 1, 31, 1) 18.13%, rgba(140, 0, 66, 1) 20.12%, rgba(126, 0, 93, 1) 22.14%, rgba(117, 0, 112, 1) 24.19%, rgba(111, 0, 123, 1) 26.28%, rgba(109, 0, 127, 1) 28.49%, rgba(105, 3, 125, 1) 29.46%, rgba(49, 42, 102, 1) 44.83%, rgba(13, 66, 88, 1) 56.25%, rgba(0, 75, 82, 1) 62.37%, rgba(0, 22, 24, 1) 82.62%, rgba(0, 0, 0, 1) 93.01%);\n  background : -ms-linear-gradient(90deg, rgba(172, 1, 1, 1) 16.67%, rgba(157, 1, 31, 1) 18.13%, rgba(140, 0, 66, 1) 20.12%, rgba(126, 0, 93, 1) 22.14%, rgba(117, 0, 112, 1) 24.19%, rgba(111, 0, 123, 1) 26.28%, rgba(109, 0, 127, 1) 28.49%, rgba(105, 3, 125, 1) 29.46%, rgba(49, 42, 102, 1) 44.83%, rgba(13, 66, 88, 1) 56.25%, rgba(0, 75, 82, 1) 62.37%, rgba(0, 22, 24, 1) 82.62%, rgba(0, 0, 0, 1) 93.01%);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr='#AC0101', endColorstr='#000000' ,GradientType=0)\";\n    background : linear-gradient(\n        0deg,\n        rgba(255, 255, 255, 1) 16.67%,\n        rgba(50, 1, 15, 1) 18.13%,\n        rgba(80, 0, 65, 1) 20.12%,\n        rgba(126, 0, 93, 1) 22.14%,\n        rgba(117, 0, 112, 1) 24.19%,\n        rgba(111, 0, 123, 1) 26.28%,\n        rgba(109, 0, 127, 1) 28.49%,\n        rgba(105, 3, 125, 1) 29.46%,\n        rgba(49, 42, 102, 1) 44.83%,\n        rgba(13, 66, 88, 1) 56.25%,\n        rgba(0, 75, 82, 1) 62.37%,\n        rgba(0, 22, 24, 1) 82.62%,\n        rgba(0, 0, 0, 1) 93.01%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000',endColorstr='#AC0101' , GradientType=0);\n\n    z-index: -2;\n    ","\n"]);return xe=function(){return e},e}function ye(){var e=ae()(["\n    width: ","px;\n    height: ","px;\n    position: absolute;\n    left: -","px;\n    top: -","px;\n    img {\n        margin-left: ","px;\n    }\n"]);return ye=function(){return e},e}function we(){var e=ae()(["\n    width: ","px;\n    height: ","px;\n    position: relative;\n    transition: 1.2s;\n"]);return we=function(){return e},e}function Ee(){var e=ae()(["\n    margin: auto;\n    box-sizing: border-box;\n"]);return Ee=function(){return e},e}function Oe(){var e=ae()(["\n    display: table-cell;\n    vertical-align: middle;\n"]);return Oe=function(){return e},e}process.env.WEBPACK?(ie=window,window.on=window.addEventListener,window.off=window.removeEventListener,document):ie={on:function(){},off:function(){}};var ke=ee.a.div(Oe()),Se=ee.a.div(Ee()),je=ee.a.div(we(),(function(e){return e.theme.width}),(function(e){return e.theme.height})),qe=Object(Z.css)(ye(),(function(e){return 5*e.theme.width}),(function(e){return 3*e.theme.height}),(function(e){return 2*e.theme.width}),(function(e){return e.theme.height}),(function(e){return e.theme.width})),Pe=ee.a.div(xe(),qe),ze=function(e){function n(){return H()(this,n),W()(this,Y()(n).apply(this,arguments))}return Q()(n,e),V()(n,[{key:"render",value:function(){return k.a.createElement(Pe,null,k.a.createElement("img",{src:"/images/stars.svg",alt:"stars"}))}}]),n}(O.Component),Ce=ee.a.div(ve(),780,2640),_e=ee.a.div(be(),740,1430),Te=ee.a.div(he()),De=ee.a.div(de()),Ie=function(){return k.a.createElement(De,null,k.a.createElement("img",{src:"/images/house.svg",alt:"house"}))},Re=ee.a.div(ge(),qe),Ae=function(e){function n(){return H()(this,n),W()(this,Y()(n).apply(this,arguments))}return Q()(n,e),V()(n,[{key:"render",value:function(){return k.a.createElement(Re,null,k.a.createElement("img",{src:"/images/landscape.svg",alt:""}),k.a.createElement(Ce,null,k.a.createElement("img",{src:"/images/decoration_moon.svg",alt:"moon"})),k.a.createElement(_e,null,k.a.createElement("img",{src:"/images/decoration_snowflake.svg",alt:"snowflakes"})),k.a.createElement(Te,null,k.a.createElement("img",{src:"/images/decoration_trees.svg",alt:"trees"})))}}]),n}(O.Component),Me=ee.a.div(me()),Ne=function(e){function n(){return H()(this,n),W()(this,Y()(n).apply(this,arguments))}return Q()(n,e),V()(n,[{key:"render",value:function(){return k.a.createElement(Me,null,k.a.createElement("img",{src:"/images/meteor.svg",alt:"meteor"}))}}]),n}(O.Component),Le=function(e){function n(){var e,t;H()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=W()(this,(e=Y()(n)).call.apply(e,[this].concat(a))),f()(fe()(t),"state",{scale:1,width:1420,height:720}),f()(fe()(t),"resize",(function(){var e,n,r,a=window.innerWidth,o=window.innerHeight,i=720/1420;i>o/a?(n=o,e=o/i):(e=a,n=a*i),r=n/720,t.setState({width:e,height:n,scale:r})})),t}return Q()(n,e),V()(n,[{key:"componentDidMount",value:function(){ie.addEventListener("resize",this.resize),this.resize()}},{key:"render",value:function(){var e=this.state,n=e.width,t=e.height,r=e.scale,a=this.props.children;return k.a.createElement(ke,null,k.a.createElement(Se,{style:{width:n,height:t,transform:"scale("+r+", "+r+")",transformOrigin:"top left"}},k.a.createElement(je,null,k.a.createElement(ze,null),k.a.createElement(Ie,null),k.a.createElement(Ae,null),k.a.createElement(Ne,null),a)))}}]),n}(O.Component);function Ge(){var e=ae()(["\n    div {\n        background-color: #4d9cb4;\n        ","\n        border-radius: 10px;\n        display: inline-block;\n        padding: 3px 6px;\n        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);\n    }\n    text-align: center;\n    font-size: 16px;\n\n"]);return Ge=function(){return e},e}function Ue(){var e=ae()(["\n    ","\n    top: 28px;\n    left: 638px;\n    img {\n        height: 112px;\n    }\n"]);return Ue=function(){return e},e}function Be(){var e=ae()(["\n    ","\n    top: 302px;\n    left: 578px;\n    img {\n        height: 120px;\n    }\n"]);return Be=function(){return e},e}function Fe(){var e=ae()(["\n    ","\n    top: 448px;\n    left: 609px;\n    img {\n        height: 120px;\n    }\n"]);return Fe=function(){return e},e}function He(){var e=ae()(["\n    ","\n    top: 402px;\n    left: 434px;\n    img {\n        height: 120px;\n    }\n"]);return He=function(){return e},e}function Je(){var e=ae()(["\n    ","\n    left: 719px;\n    top: 350px;\n    img {\n        height: 120px;\n    }\n"]);return Je=function(){return e},e}function Ve(){var e=ae()(["\n    ","\n    left: 787px;\n    top: 487px;\n    img {\n        height: 105px;\n    }\n"]);return Ve=function(){return e},e}function Ke(){var e=ae()(["\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n"]);return Ke=function(){return e},e}var We=Object(Z.css)(Ke()),Xe=ee.a.div(Ve(),We),Ye=ee.a.div(Je(),We),$e=ee.a.div(He(),We),Qe=ee.a.div(Fe(),We),Ze=ee.a.div(Be(),We),en=ee.a.div(Ue(),We),nn=ee.a.div(Ge(),""),tn=function(e){var n=e.children;return k.a.createElement(nn,null,k.a.createElement("div",null,n))},rn=[function(e){var n=e.children;return k.a.createElement(en,null,k.a.createElement("img",{src:"/images/icons/star.svg",alt:"Bell"}),n)},function(e){var n=e.children;return k.a.createElement(Ze,null,k.a.createElement("img",{src:"/images/icons/bell.svg",alt:"Bell"}),n)},function(e){var n=e.children;return k.a.createElement(Qe,null,k.a.createElement("img",{src:"/images/icons/nut.svg",alt:"Nut"}),n)},function(e){var n=e.children;return k.a.createElement($e,null,k.a.createElement("img",{src:"/images/icons/angel.svg",alt:"Angel"}),n)},function(e){var n=e.children;return k.a.createElement(Ye,null,k.a.createElement("img",{src:"/images/icons/jingle.svg",alt:"Jingle"}),n)},function(e){var n=e.children;return k.a.createElement(Xe,null,k.a.createElement("img",{src:"/images/icons/ding.svg",alt:"Ding"}),n)}];function an(){var e=ae()(["\n    background-color: #4d9cb4;\n    border-radius: 10px;\n    padding: 6px;\n    display: inline-block;\n    text-align: left;\n"]);return an=function(){return e},e}function on(){var e=ae()(["\n    font-size: 15px;\n    margin-top: 6px;\n    max-width: 200px;\n    position: absolute;\n    z-index: 2;\n    top: calc(100% + 8px);\n    width: 200px;\n    left: 50%;\n    transform: translateX(-50%);\n    text-align: center;\n"]);return on=function(){return e},e}var cn=ee.a.div(on()),un=ee.a.div(an()),sn=function(e){var n=e.users,t=e.messages;return k.a.createElement("div",null,n.filter((function(e){return null!==e})).map((function(e,n){var r=e.username,a=rn[n],o=t.find((function(e){return e.user.username===r}));return k.a.createElement(a,{key:n},k.a.createElement(tn,null,r),o&&k.a.createElement(cn,null,k.a.createElement(un,null,o.message)))})))};function ln(){var e=ae()(["\n    background-color: #2B2D65;\n    border-radius: 5px;\n    border: 4px solid white;\n    color: white;\n    padding: 20px 40px;\n    display: flex;\n    flex-direction: column;\n\n    input {\n        height: 50px;\n        font-size: 26px;\n        margin-top: 16px;\n        margin-bottom: 4px;\n        text-align: center;\n        font-family: inherit;\n        color: #2B2D65;\n        outline: none;\n        padding: 6px;\n        box-sizing: border-box;\n    }\n\n    button {\n        background-color: transparent;\n        border: none;\n        cursor: pointer;\n        outline: none;\n    }\n\n    img {\n        width: 120px;\n    }\n"]);return ln=function(){return e},e}function pn(){var e=ae()(["\n    position: absolute;\n    bottom: 20px;\n    left: 0;\n    right: 0;\n    text-align: center;\n    transition: 0.5s;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    bottom: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return pn=function(){return e},e}var fn=ee.a.div(pn()),mn=ee.a.form(ln()),gn=function(e){function n(){var e,t;H()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=W()(this,(e=Y()(n)).call.apply(e,[this].concat(a))),f()(fe()(t),"state",{username:""}),f()(fe()(t),"changeUsername",(function(e){var n=e.target.value;n.length>12||t.setState({username:n})})),f()(fe()(t),"submit",(function(e){var n=t.state.username;e.preventDefault(),n&&t.props.login({username:n})})),t}return Q()(n,e),V()(n,[{key:"render",value:function(){var e=this.state.username;return k.a.createElement(fn,null,k.a.createElement(mn,{onSubmit:this.submit},k.a.createElement("label",null,"Enter your Username"),k.a.createElement("input",{name:"username",value:e,onChange:this.changeUsername}),k.a.createElement("button",{type:"submit"},k.a.createElement("img",{src:"/images/UI_startBtn.svg",alt:""}))))}}]),n}(k.a.Component),dn=Object(q.connect)(null,{login:ne})(gn);function hn(){var e=ae()(["\n  background-color: rgba(49, 42, 102, 1);\n  color: white;\n  border-radius: 10px;\n  padding: 0 20px;\n  font-size: 25px;\n  border: none;\n  font-family: inherit;\n  margin-left: 12px;\n  cursor: pointer;\n"]);return hn=function(){return e},e}function bn(){var e=ae()(["\n  font-size: 22px;\n  font-family: inherit;\n  border-radius: 10px;\n  height: 50px;\n  padding: 0 12px;\n  flex: 1;\n"]);return bn=function(){return e},e}function vn(){var e=ae()(["\n  position: absolute;\n  bottom: 10px;\n  left: 400px;\n  right: 400px;\n  display: flex;\n"]);return vn=function(){return e},e}var xn=ee.a.form(vn()),yn=ee.a.input(bn()),wn=ee.a.button(hn()),En=function(e){function n(){var e,t;H()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=W()(this,(e=Y()(n)).call.apply(e,[this].concat(a))),f()(fe()(t),"state",{message:""}),f()(fe()(t),"onChange",(function(e){var n=e.target.value;return t.setState({message:n})})),f()(fe()(t),"sendMessage",(function(e){e.preventDefault();var n=t.state.message;n&&(t.props.sendMessage({message:n}),t.setState({message:""}))})),t}return Q()(n,e),V()(n,[{key:"render",value:function(){var e=this.state.message;return k.a.createElement(xn,{onSubmit:this.sendMessage},k.a.createElement(yn,{placeholder:"Enter your message here...",maxLength:60,value:e,onChange:this.onChange}),k.a.createElement(wn,{type:"submit"},"Send"))}}]),n}(k.a.Component),On=Object(q.connect)(null,{sendMessage:function(e){return function(n,t,r){return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.awrap(r.post("/send-message",e));case 2:case"end":return n.stop()}}))}}})(En);function kn(){var e=ae()(["\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    font-size: 18px;\n    font-family: inherit;\n    background-color: #4d9cb4;\n    color: white;\n    border-radius: 10px;\n    border: none;\n    cursor: pointer;\n"]);return kn=function(){return e},e}var Sn=ee.a.button(kn()),jn=Object(q.connect)(null,{logout:function(){return function(e,n,t){return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.awrap(t.post("/logout",{}));case 2:e({type:"user/LOGOUT"});case 3:case"end":return n.stop()}}))}}})((function(e){var n=e.logout;return k.a.createElement(Sn,{onClick:n},"Log out")})),qn=function(e){function n(){return H()(this,n),W()(this,Y()(n).apply(this,arguments))}return Q()(n,e),V()(n,[{key:"render",value:function(){var e=this.props,n=e.user,t=e.users,r=e.messages;return k.a.createElement(Le,null,k.a.createElement(sn,{users:t,messages:r}),n.username?k.a.createElement(O.Fragment,null,k.a.createElement(On,null),k.a.createElement(jn,null)):k.a.createElement(dn,null))}}]),n}(O.Component);function Pn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function zn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Pn(t,!0).forEach((function(n){f()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Pn(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Cn=[zn({},le,{routes:[zn({},{component:Object(q.connect)((function(e){var n=e.user,t=e.communication;return{user:n,users:t.users,messages:t.messages}}))(qn),renderSeo:function(){}},{path:"/",exact:!0})]})],_n=t(29),Tn=function(e,n,t,r){var a,o,i,c,u,s,l,p;return E.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:if(a=e.renderLang,"/images",o=new Z.ServerStyleSheet,c=_n.Helmet.renderStatic(),u='\n        <!DOCTYPE html>\n        <html lang="en">\n            <head>\n                <meta charset="utf-8">\n                '.concat(c.title.toString(),"\n                ").concat(c.meta.toString(),'\n\n                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no, user-scalable=yes">\n                <meta name="lang" content="').concat(a,'">\n\n\n                <link rel="shortcut icon" href="').concat("/images",'/favicon.ico">\n                <link rel="apple-touch-icon" sizes="57x57" href="').concat("/images",'/apple-icon-57x57.png">\n                <link rel="apple-touch-icon" sizes="60x60" href="').concat("/images",'/apple-icon-60x60.png">\n                <link rel="apple-touch-icon" sizes="72x72" href="').concat("/images",'/apple-icon-72x72.png">\n                <link rel="apple-touch-icon" sizes="76x76" href="').concat("/images",'/apple-icon-76x76.png">\n                <link rel="apple-touch-icon" sizes="114x114" href="').concat("/images",'/apple-icon-114x114.png">\n                <link rel="apple-touch-icon" sizes="120x120" href="').concat("/images",'/apple-icon-120x120.png">\n                <link rel="apple-touch-icon" sizes="144x144" href="').concat("/images",'/apple-icon-144x144.png">\n                <link rel="apple-touch-icon" sizes="152x152" href="').concat("/images",'/apple-icon-152x152.png">\n                <link rel="apple-touch-icon" sizes="180x180" href="').concat("/images",'/apple-icon-180x180.png">\n                <link rel="icon" type="image/png" sizes="192x192" href="').concat("/images",'/android-icon-192x192.png">\n                <link rel="icon" type="image/png" sizes="32x32" href="').concat("/images",'/favicon-32x32.png">\n                <link rel="icon" type="image/png" sizes="96x96" href="').concat("/images",'/favicon-96x96.png">\n                <link rel="icon" type="image/png" sizes="16x16" href="').concat("/images",'/favicon-16x16.png">\n                <meta name="msapplication-TileColor" content="#00968b">\n                <meta name="msapplication-TileImage" content="').concat("/images",'/ms-icon-144x144.png">\n                <meta name="theme-color" content="#00968b">\n                <link href=\'').concat("/font-prod.css",'\' rel="stylesheet" />\n                ').concat('\n                    <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""><\/script>\n                    <script>\n                      var OneSignal = window.OneSignal || [];\n                      OneSignal.push(function() {\n                        OneSignal.init({\n                          appId: "'.concat("599ef911-2dc2-4e24-810c-fadd6cd573b6",'",\n                        });\n                      });\n                    <\/script>'),'\n            </head>\n            <body>\n                <div id="root">'),s='</div>\n            <div id="modal-root"></div>\n            <div id="notification-root"></div>\n            '.concat("<script> window.INITIAL_STATE = ".concat(B()(n.getState()),"<\/script>"),'\n            <script src="/bundle.js"><\/script>\n        </body>\n    </html>'),!t.url){f.next=8;break}return f.abrupt("return",r.redirect(301,t.url));case 8:f.next=10;break;case 10:l=!1,p=!1,r.write(u,(function(){l=!0,p&&Dn(i,o,r,s)})),i=o.collectStyles(k.a.createElement(q.Provider,{store:n},k.a.createElement(j.StaticRouter,{location:e.path,context:t},k.a.createElement(Z.StyleSheetManager,{sheet:o.instance},G(Cn))))),p=!0,l&&Dn(i,o,r,s);case 16:case"end":return f.stop()}}))},Dn=function(e,n,t,r){var a=n.interleaveWithNodeStream(Object(S.renderToNodeStream)(e));a.pipe(t,{end:!1}),a.on("end",(function(){t.write(r),t.end()}))},In=t(30),Rn=t.n(In),An=t(19),Mn=t.n(An),Nn=t(31),Ln=t.n(Nn),Gn=t(32),Un=t.n(Gn),Bn=t(33),Fn=(t(37),t(38),t(20)),Hn=t.n(Fn),Jn=t(34),Vn=t.n(Jn),Kn=[],Wn=[],Xn=0,Yn=0,$n=function(e){e.post("/login",(function(e,t){var r=e.body.username||e.cookies.username;if(r){if(t.cookie("username",r,{maxAge:2592e3,httpOnly:!0}),-1===Kn.findIndex((function(e){return e&&e.username===r}))){var a=Kn.findIndex((function(e){return null===e}));-1===a&&(a=Kn.length),Kn[a]={username:r}}n(),t.json({success:!0,user:Kn.find((function(e){return e&&e.username===r}))})}else t.json({success:!1})})),e.post("/logout",(function(e,t){var r=e.cookies.username,a=Kn.findIndex((function(e){return e&&e.username===r}));a>-1&&(Kn[a]=null,n()),t.clearCookie("username"),t.end()})),e.get("/users",(function(e,n){n.json(Kn)}));e.post("/send-message",(function(e,n){var t=e.cookies.username;if(!t)return n.end();var r=Kn.find((function(e){return e&&e.username===t}));if(!r)return n.end();var a,o=e.body.message;a={user:r,message:o,id:++Yn,expiresIn:1e3+100*o.length},Wn.forEach((function(e){e.res.write(Qn(JSON.stringify({type:"message",data:a})))})),x.a.post("https://onesignal.com/api/v1/notifications",{app_id:"599ef911-2dc2-4e24-810c-fadd6cd573b6",included_segments:["All"],contents:{en:"".concat(r.username,": ").concat(o)}},{headers:{"Content-Type":"application/json; charset=utf-8",Authorization:"Basic ".concat(process.env.ONESIGNAL_API_KEY)}}),n.end()})),e.get("/communication",(function(e,n){var t;return E.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:n.writeHead(200,{"Content-Type":"text/event-stream","Cache-Control":"no-cache","Access-Control-Allow-Origin":"*"}),t=Xn,Wn.push({res:n,id:t}),Xn++,n.write(Qn(JSON.stringify({type:"connected"}))),e.on("close",(function(){Wn.splice(Wn.findIndex((function(e){return e.id===t})),1)}));case 6:case"end":return r.stop()}}))}));var n=function(){Wn.forEach((function(e){e.res.write(Qn(JSON.stringify({type:"users",data:Kn})))}))}},Qn=function(e){return"data: ".concat(e,"\n\n")},Zn=t(35),et=t.n(Zn),nt=t(36),tt=t.n(nt);t(17);Intl.NumberFormat=Mn.a.NumberFormat,Intl.DateTimeFormat=Mn.a.DateTimeFormat;const rt=a()(),at=tt.a.Server(rt);rt.use(Un()("8s")),global.appRoot=__dirname;var ot;rt.use(Object(Bn.redirectToHTTPS)([/localhost:(\d{4})/],[/\/insecure/],301)),process.env.RENDERER&&rt.use("/api",Rn()(process.env.API_SERVER||"localhost:8000",{limit:"10mb",proxyReqPathResolver:e=>"/api"+e.path+"?"+Object.keys(e.query).map(n=>n+"="+e.query[n]).join("&")})),rt.use(a.a.static("src/public")),rt.use(Ln()({noSniff:!1})),rt.get("*",(e,n,t)=>{if("/api/"===e.url.slice(0,5))return t();{const t=y(e),r={},a=[],o=T(Cn,e.path).map(({route:n})=>(a.push(n),n.loadData?n.loadData(t,e.path):null)).map(e=>{if(e)return new Promise((n,t)=>{e.then(n).catch(n)})});Promise.all(o).then(()=>{a.forEach(e=>{e.renderSeo(t)}),Tn(e,t,r,n)})}}),process.env.RENDERER||((ot=rt).use(et()({credentials:!0,origin:!0})),ot.use((function(e,n,t){return"/api/"===e.url.slice(0,5)?(e.url=e.url.slice(4),t()):(e.url="/",t())})),ot.use(Hn.a.urlencoded({extended:!0,limit:"10mb"})),ot.use(Hn.a.json({limit:"10mb"})),ot.use(Vn()()),$n(ot)),at.listen(process.env.PORT||4e3,e=>{e?console.error(e):console.info("Listening at http://localhost:"+(process.env.PORT||4e3))})}]);
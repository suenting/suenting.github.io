(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(4),l=n.n(c),o=(n(15),n(16),n(1)),r=n(2),s=n(7),u=n(5),k=n(8),m=n(6),b=n.n(m),h=h||webkitSpeechRecognition,f=f||webkitSpeechGrammarList,v=v||webkitSpeechRecognitionEvent,A=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,null,[{key:"_init",value:function(){var t=this;this.callbacklist=[],this.recognition=new h,this.recognition.onresult=function(e){for(var n=0;n<t.callbacklist.length;++n){t.callbacklist[n].cb(e.results[0][0].transcript)}}}},{key:"start",value:function(){this.recognition.start()}},{key:"setcallback",value:function(t){this.callbacklist.push(t)}},{key:"removecallback",value:function(t){for(var e=0;e<this.callbacklist.length;++e){if(this.callbacklist[e].id===t.id)return void this.callbacklist.splice(0,1)}}}]),t}();A._init();var E=A,d=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).onVoiceCommand={id:"ReactVoice",cb:function(t){n.setState({line:t})}},n.state={debug:!0,line:""},n}return Object(k.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){E.setcallback(this.onVoiceCommand)}},{key:"componentWillUnmount",value:function(){E.removecallback(this.onVoiceCommand)}},{key:"start",value:function(){E.start()}},{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("img",{src:b.a,alt:"mic",onClick:function(e){t.start()}}),this.state.debug?i.a.createElement("div",null,"debug: ",this.state.line):"")}}]),e}(a.Component);var g=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},6:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABEUlEQVR4Ae3UMSjEcRjH4ScMKDfZWBlENkVgJVJikU2xl5QLfrNM9tFeSlmM9kGZWchA3UJyrtci4Tj8b3Dlnu/0Lp/x9X8NOVFQcGJIFeaUxMtK5mSUcyve7EZOJlPiw6Zlki8L5WWSykLbNRfaqrnQZs2FNv4gNCxJWsB6WWgNtEqSERUtC6ELTJeFJkCPEJZVNCaEGZBz8y5zrQ0sCWFERU0ehP1P38gs4FgoaPSNfeFJ35ePbUAIu77V4V640OkznS6EO+1+YEUIV3p91OtKKJn0Q3tCeLCjTxNotuBAUSia9wt5RSGER6fOXq9zo36p36F4t0urWmTSbdGxEI4MalCVJITka/XQuCQZV7W6Z3Ir45o5VVEKAAAAAElFTkSuQmCC"},9:function(t,e,n){t.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.1193e1e9.chunk.js.map
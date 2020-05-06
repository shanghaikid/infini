(function (React, ReactDOM) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  const Page = () => {
      return (React__default.createElement("div", null,
          React__default.createElement("h1", null, "this is a app")));
  };

  console.log('app');
  const App = () => {
      return (React__default.createElement("div", null,
          React__default.createElement("h1", null, "this is a app"),
          React__default.createElement(Page, null)));
  };

  ReactDOM.render(React.createElement(App, null), document.getElementById("root"));

}(React, ReactDOM));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

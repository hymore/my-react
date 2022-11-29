# 什么是 JSX

JSX 是 JavaScript 的扩展语法，这种 <></> 标签的写法就是 JSX。JSX 编写的组件通过预处理器 babel 解析后，再交给 React 库渲染到指定父容器下，形成最终 html 页面，供浏览器解析和显示。例如：

```jsx
const element = (
  <h1>
    Hello,<span style={{ color: "red" }}>world!</span>
  </h1>
);
```

在 React17 及之前的版本中,以上代码经过 babel 编译内容如下：

```js
const element = /*#__PURE__*/ React.createElement(
  "h1",
  null,
  "Hello,",
  /*#__PURE__*/ React.createElement(
    "span",
    {
      style: {
        color: "red",
      },
    },
    "world!"
  )
);
```

所以在编写 jsx 文件时，即使不需要用到，也需要手动在文件最顶层进入 React。为了解决这种令人困惑的问题，在 React17 之后，babel 修改了编译方式：

```js
var _jsxRuntime = require("react/jsx-runtime");
const element = /*#__PURE__*/ (0, _jsxRuntime.jsxs)("h1", {
  children: [
    "Hello,",
    /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
      style: {
        color: "red",
      },
      children: "world!",
    }),
  ],
});
```

React 单独导出了一个‘jsxs’方法来处理 JSX 语法。该方法的执行结果如下:

```js
{
    $$typeof:Symbol('react.element'),
    type:'h1',
    key:null,
    ref:null,
    props:{
        children:[
            'hello',
            {
                $$typeof:Symbol('react.element'),
                type:'span',
                key:null,
                ref:null,
                props:{
                    style:{
                        color:'red'
                    },
                    children:'world!'
                }
            }
        ]
    }
}

```

该结果就是我们常说的 vdom！

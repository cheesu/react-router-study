import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
/*
* Router: 이 컴포넌트는 react-router 의 주요 컴포넌트로서, 라우터의 속성을 정의하고 이 내부에서 라우트 설정을 합니다.
*
* Route: 이 컴포넌트는 우리가 설정한 경로에서 어떤 컴포넌트를 렌더링 할 지 정하는 컴포넌트 입니다.
*      이 라우트 컴포넌트의 자식에 또 다른 Route 컴포넌트를 넣으면 해당 자식 컴포넌트는 부모 라우트의 서브 라우트가 됩니다.
*
* IndexRoute: 라우트에서 서브라우트가 주어지지 않았을 때, 즉 특정 라우트의 / 경로로 들어 왔을 때, 이 라우트에서 지정한 컴포넌트를 보여줍니다.
*
* browserHistory: HTML5 의 History API 를 사용하여 브라우저의 URL 변화를 주시하고, 조작합니다.
*
* */
import App from './App';
import Home from './containers/Home';
import About from './containers/About';
import Posts from './containers/Posts';
import Post from './containers/Post';

import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="post" component={Posts}>
                <Route path=":id" component={Post}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
);
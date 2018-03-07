// main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './containers/Greeter';
import Header from './containers/Header';//网页头部组件
import Fix_left_nav from './containers/Fix_left_nav';//网页左边导航栏组件
import Maincontainer from './containers/maincontainer';//网页中间
import Footer from './containers/footer';





import './styles/main.css';//使用require导入css文件

render(<div >

	<Greeter/>
	<Header/>
	<Fix_left_nav/>
	<Maincontainer/>
	<Footer/>
	</div>
	,document.getElementById('root'));


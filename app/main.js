// main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './containers/Greeter';
import Header from './containers/Header';


import './styles/main.css';//使用require导入css文件

render(<div>
	<Greeter/>
	<Header/>
	</div>
	, document.getElementById('root'));


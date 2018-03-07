import React, {Component} from 'react'
import styles from '../styles/header.css';//导入

class Header extends Component{
  render() {
    return(
    	<div className={styles.sitenav}>

		<div className={styles.header_center}>
			<div className={styles.header_logo}></div>

			<div className={styles.bg_header_nav}></div>

			<div className={styles.header_top_nav}>
				<ul>
					<li><a>集团官网</a></li>
					<li><a>手机版</a></li>
					<li><a>网站指南</a></li>
					<li><a>收藏本站</a></li>


				</ul>
			</div>


			<div className={styles.header_middle_nav}>
				<ul>
					<li><a>加关注 </a></li>
					<li><a>繁體中文</a></li>
					<li><a>English</a></li>


				</ul>
			</div>


			<div className={styles.header_down_nav}>
				<ul>
					<li><a>首页</a></li>
					<li><a>关于我们</a></li>
					<li><a>产品与服务</a></li>
					<li><a>客服中心</a></li>
					<li><a>网上营业厅</a></li>
					<li><a>招聘人才</a></li>
					<li><a>联系我们</a></li>
					<li><a>微博</a></li>


				</ul>
			</div>
		</div>
	</div>
    );
  }
}

export default Header;
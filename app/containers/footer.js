import React,{Component} from 'react'
import styles from '../styles/footer.css';//导入
import { Button } from 'antd';
import hz1 from '../source/hz1.png';
import hz2 from '../source/hz2.png';
import hz3 from '../source/hz3.png';
import hz4 from '../source/hz4.png';
import hz5 from '../source/hz5.png';
import hz6 from '../source/hz6.png';
import hz7 from '../source/hz7.png';
import hz8 from '../source/hz8.png';





class Footer  extends Component{
	render(){
		return(
			<div className={styles.bg_gradient}>
			<footer> 

			<div className={styles.footer_top_container}>
			<Button type="primary">合作伙伴</Button>
			<img src={hz1} title="ebay"/>
			<img src={hz2} title="paypal"/>
			<img src={hz3} title="google"/>
			<img src={hz4} title="AliExpress"/>
			<img src={hz5} title="singpore"/>
			<img src={hz6} title="ESG	"/>
			<img src={hz7} title="亚马逊"/>
			<img src={hz8} title="payoneer"/>
			</div>

			<div className={styles.footer_down_container}>
			<div>
			<li> <a>关于我们 </a></li>
			<li> 公司简介</li>
			<li> 资质荣誉</li>
			<li>信息平台介绍 </li>
			<li>速递培训 </li>
			<li>友情链接 </li>
			<li>更多... </li>
			</div>

			<div>
			<li> <a>产品与服务 </a></li>
			<li> 4PX全球专线</li>
			<li> 订单宝</li>
			<li>联邮通 </li>
			<li>新加坡邮政小包 </li>
			<li>香港邮政小包 </li>
			<li>更多... </li>
			</div>

			<div>
			<li> <a>客服中心 </a></li>
			<li> 代理客户</li>
			<li> 电子商务客户</li>
			<li>联邮通 </li>
			<li>新加坡邮政小包 </li>
			<li>香港邮政小包 </li>
			<li>更多... </li>
			</div>

			<div>
			<li> <a>产品与服务 </a></li>
			<li> 4PX全球专线</li>
			<li> 订单宝</li>
			<li>在线咨询 </li>
			</div>

			<div>
			<li> <a>网上营业厅 </a></li>
			<li> 在线订单</li>
			<li> 网上支付</li>
			<li>仓储系统 </li>
			</div>

			<div>
			<li> <a>招聘人才 </a></li>
			<li> 销售代表</li>
			<li> 进口空运部</li>
			<li>客服部</li>
			<li>更多... </li>
			</div>

			<div>
			<li> <a>联系我们 </a></li>
			<li> 华南区域</li>
			<li> 华北区域</li>
			<li>华东区域</li>
			<li>海外机构 </li>
			</div>


			</div>


			</footer>
			</div>
			);
	}

}

export default Footer











import React,{Component} from 'react'
import styles from '../styles/maincontainer.css';//导入
import { Carousel } from 'antd';
import { Collapse } from 'antd';






import lunbo1 from '../source/lunbo1.jpg';
import lunbo2 from '../source/lunbo2.jpg';
import lunbo3 from '../source/lunbo3.jpg';
import lunbo4 from '../source/lunbo4.jpg';
import lunbo5 from '../source/lunbo5.jpg';

import fuwu1 from '../source/fuwu1.jpg';
import fuwu2 from '../source/fuwu2.jpg';
import fuwu3 from '../source/fuwu3.jpg';
import fuwu4 from '../source/fuwu4.jpg';

import lunbo2_1 from '../source/lunbo2_1.jpg';
import lunbo2_2 from '../source/lunbo2_2.jpg';
import lunbo2_3 from '../source/lunbo2_3.jpg';

import zysf from '../source/zysf.jpg';
import px_sys from '../source/4px_sys.jpg';



const Panel = Collapse.Panel;

function callback(key) {
	console.log(key);
}



class Maincontainer  extends Component{
	render(){
		return(
			<div className={styles.bg_img}>
			<div  className={styles.container}>
			<div className={styles.slidshow}>

			<Carousel  autoplay  >
			<div><img src={lunbo1} /></div>
			<div><img src={lunbo2} /></div>
			<div><img src={lunbo3} /></div>
			<div><img src={lunbo4} /></div>
			<div><img src={lunbo5} /></div>
			</Carousel>
			</div>



			<div className={styles.main_area} >
			<div className={styles.left_area} >
			<div  className={styles.server_center}> 
			<h1>服务中心</h1>
			<div  className={styles.flex_container} >
			<div><a><img src={fuwu1}  />用户注册</a></div>
			<div><a><img src={fuwu2}  />用户登录</a></div>
			<div><a><img src={fuwu3}  />在线充值</a></div>
			<div><a><img src={fuwu4}  />客户咨询</a></div>
			</div>
			<img src={zysf} className={styles.zysf} />
			</div>

			<div  className={styles.lunbotu2} >
			<Carousel autoplay >
			<div><img src={lunbo2_1}  /></div>
			<div><img src={lunbo2_2}  /></div>
			<div><img src={lunbo2_3}  /></div>
			</Carousel>



			</div>
			<div  className={styles.xiala_antd} > 

			<Collapse defaultActiveKey={['1']} onChange={callback} accordion>
			<Panel header="01. 4px咨询" key="1" showArrow={false}>
			<ul>
			<li><a>▶ 燃油附加费  </a></li>
			<li><a>▶ 运单背书说明</a></li>
			<li><a>▶ 操作交接说明</a></li>
			<li><a>▶ 结算汇率查询</a></li>
			<li><a>▶ 收款方式说明</a></li>
			<li><a>▶ 扣件原因分析</a></li>










			</ul>
			</Panel>
			<Panel header="02. 下载专区" key="2" showArrow={false}>
			<li><a>▶ 4PX公司联邮通宣传折页（点击下载） </a></li>
			<li><a>▶ 4PX公司投保指南（点击下载）</a></li>
			<li><a>▶ 4PX新加坡小包操作指南（点击下载）</a></li>
			<li><a>▶ 小包业务网上操作指南（点击下载）</a></li>
			<li><a>▶ 打印机驱动下载（点击下载）</a></li>
			<li><a>▶ 点击进入下载专区（更多下载）</a></li>
			</Panel>
			<Panel header="03. 4px系统介绍" key="3" showArrow={false}>
			<img src={px_sys}/>
			</Panel>

			<Panel header="04. 查询工具" key="4" showArrow={false}>
			<li><a>▶ 航空公司查询 </a></li>
			<li><a>▶ 全球机场查询</a></li>
			<li><a>▶ 品牌目录表</a></li>
			</Panel>




			</Collapse>


			</div>
			</div>	

			<div  className={styles.middle_area} >
			<h6> ""中间三栏都为分页，之前原生js实现过，下面演示，也可直接用antd控件""</h6>
			<div  className={styles.show_page}></div>
			</div>

			<div  className={styles.right_area} >
			<div  className={styles.right_page_area} > 分页控件4</div>
			<div  className={styles.normal_img_link} >普通图片链接</div>\
			<div className={styles.right_lunbo} >轮播控件3</div>

			</div>

			</div>


			</div>
			</div>
			);
	}

}

export default Maincontainer
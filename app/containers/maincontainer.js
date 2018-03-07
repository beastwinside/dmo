import React,{Component} from 'react'
import styles from '../styles/maincontainer.css';//导入
import { Carousel } from 'antd';

import lunbo1 from '../source/lunbo1.jpg';
import lunbo2 from '../source/lunbo2.jpg';
import lunbo3 from '../source/lunbo3.jpg';
import lunbo4 from '../source/lunbo4.jpg';
import lunbo5 from '../source/lunbo5.jpg';



class Maincontainer  extends Component{
	render(){
		return(
			<div className={styles.bg_img}>
			<div  className={styles.container} >

			<div className={styles.slidshow} >
		
	  <Carousel autoplay >
 		
 			
 					<div><img src={lunbo1}  /></div>
					<div><img src={lunbo2}  /></div>
                    <div><img src={lunbo3}  /></div>
                   <div> <img src={lunbo4}  /></div>
                  <div> <img src={lunbo5}  /></div>
  </Carousel>
			</div>



			<div className={styles.main_area} >
				<div className={styles.left_area} >
					<div  className={styles.server_center}> 
						<h1>服务中心</h1>
						<div  className={styles.flex_container} >
							<div><a>img+用户注册</a></div>
							<div><a>img+用户登录</a></div>
							<div><a>img+在线充值</a></div>
							<div><a>img+客户咨询</a></div>
						</div>
					</div>

					<div  className={styles.lunbotu2} >轮播图控件2</div>

					<div  className={styles.xiala_antd} > antd 下拉控件</div>
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
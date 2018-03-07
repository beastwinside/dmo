import React,{Component} from 'react'
import styles from '../styles/maincontainer.css';//导入
import { Button } from 'antd';



class Maincontainer  extends Component{
	render(){
		return(
			<div className={styles.bg_img}>
			<div  className={styles.container} >

			<div className={styles.slidshow} >	 轮播图控件1(框架里之前写过可复用组件，布局设计稿中不再单独写)
				左边固定二维码栏先做简单实现，到时候可以添加平缓过渡动画
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
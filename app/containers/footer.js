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
	 

	</div>






	</footer>
			</div>
			);
	}

}

export default Footer











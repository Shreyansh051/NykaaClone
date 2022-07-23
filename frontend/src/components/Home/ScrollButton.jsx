import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import styles from "./Home.module.css"
const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};
const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};
window.addEventListener('scroll', toggleVisible);
return (
	<button className={styles.scrollbtn}>
	<FaArrowCircleUp onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} />
	</button>
);
}
export default ScrollButton;

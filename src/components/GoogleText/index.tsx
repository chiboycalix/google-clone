import './styles.scss'
import { Animated } from "react-animated-css";

const GoogleText = () => {
  return (
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
      <h1>
        <span>G</span>
        <span>o</span>
        <span>o</span>
        <span>g</span>
        <span>l</span>
        <span>e</span>
      </h1>
      </Animated>
  )
}
export default GoogleText;

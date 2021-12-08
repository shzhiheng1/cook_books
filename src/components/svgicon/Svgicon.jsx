/**
 * 两种写法是相同的：第一种文件引入和组件写的一起了。
 * 第二种分开处理文件全部进入写到svg/index.jsx,在根目录中引入。
 * 在config-overrides配置是：svg-sprite-loader
 * 
 */
// import React from 'react'

// const importAll = (requireContext) => requireContext.keys().forEach(requireContext)
// try {
//   importAll(require.context('@/assets/images/svg', true, /\.svg$/))
// } catch (error) {
//   console.log(error)
// }
// function SvgIcon(props) {
//   return (
//     <svg aria-hidden="true">
//       <use xlinkHref={'#icon-' + props.iconClass } fill={props.fill} />
//     </svg>
//   )
// }

// export default SvgIcon;



import React, {Component} from 'react';
import "./SvgIcon.less";

class SvgIcon extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {}


    render() {
        const { fill,iconID} = this.props;
        return (
            <>
              <svg className={`svg-icon`} aria-hidden="true">
                  <use xlinkHref={"#icon-"+iconID} fill={fill}/>
              </svg>
            </>
        );
    }
}

export default SvgIcon;
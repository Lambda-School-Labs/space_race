import React, {Component} from 'react';
/*thanks to http://blog.matthewcheok.com/a-better-img-tag/ for this snippet*/

/* this allows us to use an image element with predefined size and mode*/
/* <Image width={} height={} mode="fit" /> */
export default class Image extends Component {  
  render() {
    let {mode, src, height, width, style, padding, ...props} = this.props;
    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    };
    let size = modes[mode] || 'contain';

    let defaults = {
      height: height || 100,
      width: width || 100,
      // backgroundColor: 'white',
      // border: 'solid 3px'
    };

    let important = {
      backgroundImage: `url("${src}")`,
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    };

    return <div {...props} style={{...defaults, ...style, ...important}} />
  }
}
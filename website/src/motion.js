import React from 'react';
import BannerAnim,{Element} from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'
import dayjs from 'dayjs'

function BannerDemo(){
    console.log(dayjs(1528361259484).format())
    return(
        <BannerAnim>
            <Element key='demo1'>
                <TweenOne animation={{x:-30,type:'from'}}>
                    ant motion demo1
                </TweenOne>
            </Element>
            <Element key='demo2'>
                <TweenOne animation={{x:-30,type:'from'}}>
                    ant motion demo2
                </TweenOne>
            </Element>
        </BannerAnim>
    )
}

export default BannerDemo
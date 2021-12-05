
import React, { Component } from 'react'

export class WelcomePage extends Component {

    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'business_cover.mp4#t=13,19'
        }
    }
    render() {
        return (
            <a  class="html5lightbox" onclick="javascript:document.getElementById('background-video').pause();"  href="/business_cover.mp4" ><video id="background-video"  muted autoplay="" > 
                <source src="/business_cover.mp4#t=10,19" type="video/mp4" />
                 Your browser does not support the video tag.
             </video><p>play video</p></a>
        )
    }
}

export default WelcomePage

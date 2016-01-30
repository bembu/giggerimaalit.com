import React from 'react';

export default React.createClass({
  render: function () {

    var video = "./api/videos/test.mp4";
    if (this.props.video) {
      video = "./api/videos/" + this.props.video;
    }

    console.log("video selected: " + this.props.video);

    return (
      <div>
        <video controls autoplay src={video} />
      </div>
    );
  }
});

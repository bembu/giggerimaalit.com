import React from 'react';
import VideoContainer from 'components/videocontainer';
import VideoList from 'components/videolist';

export default React.createClass({

  getInitialState: function() {
    return {selectedVideo: ""};
  },

  selectVideo: function (vid) {
    this.setState({selectedVideo: vid});
  },

  render: function () {

    var videos = ["test.mp4", "my-awesome-vid.mp4", "my-best-video.mp4", "this-is-awesome.mp4"]

    return (
      <div>
        <div className="container justify-center">
          <div className="col-8 header">
            <h1 className="title"><img src="/static/img/gofore-g.svg" width="60px"></img>iggerimaalit.com</h1>
          </div>
        </div>
        <div className="container justify-center">
          <div className="col-3 sidebar">
            <VideoList videos={videos} selectVideo={this.selectVideo} />
          </div>
          <div className="col-6 videocontainer">
            <VideoContainer video={this.state.selectedVideo}/>
          </div>
        </div>
      </div>
    );
  }
});

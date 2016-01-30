import React from 'react';
import VideoContainer from 'components/videocontainer';
import VideoList from 'components/videolist';

export default React.createClass({

  getInitialState: function() {
    return {
      selectedVideo: "",
      videoInfo: null
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get("/api/videos", function (result) {
      var videoinfo = result;
      this.setState({videoInfo: videoinfo});
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  selectVideo: function (vid) {
    this.setState({selectedVideo: vid});
  },

  render: function () {

    var videoContainer = this.state.selectedVideo ? 
      (<VideoContainer video={this.state.selectedVideo}/>) :
      (<div><img className="hand" src="/static/img/pointinghand.svg"></img></div>) ;

    return (
      <div>
        <div className="container justify-center">
          <div className="col-6 header">
            <div className="title">
              <img src="/static/img/gofore-g.svg" width="80px"></img>iggerimaalit<span className="small">.com</span>
            </div>
          </div>
        </div>
        <div className="container justify-center">
          <div className="col-2 sidebar">
            <VideoList videoInfo={this.state.videoInfo} selectVideo={this.selectVideo} />
          </div>
          <div className="col-6 videocontainer">
            {videoContainer}
          </div>
        </div>
      </div>
    );
  }
});

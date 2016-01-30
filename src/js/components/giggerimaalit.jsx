import React from 'react';
import VideoContainer from 'components/videocontainer';
import VideoList from 'components/videolist';

export default React.createClass({

  getInitialState: function() {
    return {
      selectedVideo: "",
      videoList: []
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get("/api/videos", function (result) {
      var videolist = result;
      this.setState({videoList: videolist});
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  selectVideo: function (vid) {
    this.setState({selectedVideo: vid});
  },

  render: function () {

    console.log(this.state.videoList);

    return (
      <div>
        <div className="container justify-center">
          <div className="col-8 header">
            <h1 className="title"><img src="/static/img/gofore-g.svg" width="60px"></img>iggerimaalit.com</h1>
          </div>
        </div>
        <div className="container justify-center">
          <div className="col-3 sidebar">
            <VideoList videos={this.state.videoList} selectVideo={this.selectVideo} />
          </div>
          <div className="col-6 videocontainer">
            <VideoContainer video={this.state.selectedVideo}/>
          </div>
        </div>
      </div>
    );
  }
});

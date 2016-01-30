from flask import Flask, render_template, send_file
from flask_restful import reqparse, Resource, Api
import json
import os

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()

@app.route('/')
def index():
    return render_template('index.html')

class VideoListApi(Resource):

    def get_video_names(self):

        videos = []
        # only get filetypes we want
        for vid in os.listdir('videos'):
            if vid.split(".")[-1] in ["mp4"]:
                videos.append(vid)

        with open('videos/info.json') as data_file:
            info = json.load(data_file)

        info["files"] = videos

        return info

    def get(self):
        return self.get_video_names()


class VideoApi(Resource):
    def get(self, video_name):
        if video_name in os.listdir('videos'):
            return send_file("videos/" + video_name)
        else:
            return {'error': 'Video with the following filename was not found on the server.'}, 404

api.add_resource(VideoListApi, '/api/videos')
api.add_resource(VideoApi, '/api/videos/<string:video_name>')


if __name__ == '__main__':
    app.run(debug=True)

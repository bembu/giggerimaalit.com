from flask import Flask, render_template, send_file
from flask_restful import reqparse, Resource, Api
import json
import os

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()


def get_video_names():
    return [file_name for file_name in os.listdir('videos')]

@app.route('/')
def index():
    return render_template('index.html')


class VideoListApi(Resource):
    def get(self):
        return get_video_names()


class VideoApi(Resource):
    def get(self, video_name):
        return send_file("videos/"+video_name)

api.add_resource(VideoListApi, '/api/videos')
api.add_resource(VideoApi, '/api/videos/<string:video_name>')


if __name__ == '__main__':
    app.run(debug=True)

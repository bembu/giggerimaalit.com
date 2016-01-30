from flask import Flask, render_template, send_file
from flask_restful import reqparse, Resource, Api
import json

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()

@app.route('/')
def index():
    return render_template('index.html')

class VideoApi(Resource):
    def get(self):
        return send_file("test.mp4")

api.add_resource(VideoApi, '/videos')


if __name__ == '__main__':
    app.run(debug=True)

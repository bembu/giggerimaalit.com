from moviepy.editor import *

# open two video files / subclips
video1 = VideoFileClip("test.mp4").subclip(2,5)
video2 = VideoFileClip("test.mp4").subclip(8,12)

# combine them
final_clip = concatenate_videoclips([video1,video2])

# write to mp4 / gif
#video.write_videofile("new.mp4", fps=25)
final_clip.write_gif("new.gif", fps=25)
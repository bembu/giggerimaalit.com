from moviepy.editor import *

# open two video files / subclips
video1 = VideoFileClip("test.mp4").subclip(2,5)
video2 = VideoFileClip("test.mp4").subclip(8,12)

# combine them
final_clip = concatenate_videoclips([video1,video2])

# write to mp4 / gif
#video.write_videofile("new.mp4", fps=25)
final_clip.write_gif("new.gif", fps=25)

'''
Combines several video clips into one. Creates a new file and returns the path.
@Param: file_list Several file paths as a list where the files are located

@Returns: File path of the created file
'''
def combine_clips(file_list, output_file_name):
    video_list = []
    for file_name in file_list:
        video = VideoFileClip(file_name)
        video_list.append(video)
    final_clip = concatenate_videoclips(video_list)
    final_clip.write_videofile(output_file_name)
    return True

combine_clips(["test.mp4", "test.mp4", "test.mp4", "test.mp4", "test.mp4", "test.mp4", "test.mp4", "test.mp4", "test.mp4", "test.mp4", "test.mp4"], "iso_video.mp4")



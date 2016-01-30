from moviepy.editor import *

'''
Combines several video clips into one. Creates a new file and returns the path.
@Param: file_list Several file paths as a list where the files are located

@Returns: File path of the created file
'''
def combine_clips(file_list, output_file_name):
    video_list = []
    for file_name in file_list:
        video = VideoFileClip('videos/' + file_name)
        video_list.append(video)
    final_clip = concatenate_videoclips(video_list).subfx(lambda c: c.speedx(0.5)) #0.5X slowdown
    final_clip.write_videofile('videos/' + output_file_name)
    return True

combine_clips(["test.mp4", "test.mp4", "test.mp4", "test.mp4", "test.mp4", "test.mp4", "test.mp4", "test.mp4", "test.mp4", "test.mp4", "test.mp4"], "iso_video.mp4")



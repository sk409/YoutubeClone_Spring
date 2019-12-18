package sk409.youtube;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import sk409.youtube.services.VideoService;
import sk409.youtube.utils.PathUtil;

@RestController
public class VideosController {

    private VideoService videoService;

    public VideosController(VideoService videoService) {
        this.videoService = videoService;
    }

    @RequestMapping(value = "videos", method = RequestMethod.POST)
    public String store(@RequestParam("video") MultipartFile video) {
        if (video.isEmpty()) {
            return "EMPTY";
        }
        if (!video.getContentType().startsWith("video")) {
            return "NOT VIDEO";
        }
        final String path = PathUtil.join(PathUtil.resources, "static", "videos", video.getOriginalFilename());
        try {
            videoService.save(path, video.getBytes());
        } catch (IOException exception) {
            return "IOException";
        }
        return "OK";
        // return new ModelAndView("redirect:/videos/create");
    }

    @RequestMapping("/videos/create")
    public ModelAndView create(ModelAndView mav) {
        mav.setViewName("videos.create");
        return mav;
    }

}
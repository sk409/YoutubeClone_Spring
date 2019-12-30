package sk409.youtube;

import java.io.IOException;
import java.security.Principal;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import sk409.youtube.models.User;
import sk409.youtube.repositories.UserRepository;
import sk409.youtube.services.VideoService;
import sk409.youtube.utils.PathUtil;

@RestController
public class VideosController {

    @Autowired
    private UserRepository userRepository;

    private VideoService videoService;

    public VideosController(VideoService videoService) {
        this.videoService = videoService;
    }

    @RequestMapping(value = "videos", method = RequestMethod.POST)
    public String store(@RequestParam("title") String title, @RequestParam("video") MultipartFile video,
            Principal principal) {
        if (principal == null) {
            return "NOT AUTHORIZED";
        }
        if (video.isEmpty()) {
            return "EMPTY";
        }
        if (!video.getContentType().startsWith("video")) {
            return "NOT VIDEO";
        }
        final Optional<User> _user = userRepository.findByName(principal.getName());
        if (!_user.isPresent()) {
            return "USER DOES NOT EXIST";
        }
        final User user = _user.get();
        final String path = PathUtil.join(PathUtil.resources, "static", "videos", String.valueOf(user.getId()), title);
        try {
            videoService.save(path, video.getBytes());
        } catch (IOException exception) {
            System.out.println(exception.getMessage());
            return "IOException";
        }
        return "OK";
    }

    @RequestMapping("/videos/create")
    public ModelAndView create(ModelAndView mav) {
        mav.setViewName("videos.create");
        return mav;
    }

    @GetMapping("/f")
    public String f() {
        return "HELLO";
    }

}
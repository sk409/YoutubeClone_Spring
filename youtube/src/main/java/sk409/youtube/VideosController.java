package sk409.youtube;

import java.io.IOException;
import java.security.Principal;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import sk409.youtube.models.User;
import sk409.youtube.repositories.UserRepository;
import sk409.youtube.services.VideoServiceDefault;
import sk409.youtube.utils.PathUtil;

@RestController
public class VideosController extends Controller {

    private UserRepository userRepository;

    private VideoServiceDefault videoService;

    public VideosController(UserRepository userRepository, VideoServiceDefault videoService) {
        this.userRepository = userRepository;
        this.videoService = videoService;
    }

    @RequestMapping(value = "videos", method = RequestMethod.POST)
    @Transactional(readOnly = false)
    public void store(@RequestParam("title") String title, @RequestParam("description") String description,
            @RequestParam("video") MultipartFile video, Principal principal, HttpServletResponse response) {
        if (principal == null) {
            respond(response, HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }
        if (video.isEmpty()) {
            respond(response, HttpServletResponse.SC_BAD_REQUEST);
            return;
        }
        if (!video.getContentType().startsWith("video")) {
            respond(response, HttpServletResponse.SC_BAD_REQUEST);
            return;
        }
        final Optional<User> _user = userRepository.findByName(principal.getName());
        if (!_user.isPresent()) {
            respond(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            return;
        }
        final User user = _user.get();
        final String path = PathUtil.join(PathUtil.resources, "static", "videos", String.valueOf(user.getId()), title);
        try {
            videoService.save(title, description, user.getId(), path, video.getBytes());
        } catch (IOException exception) {
            respond(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            return;
        }
    }

    @RequestMapping("/videos/create")
    public ModelAndView create(ModelAndView mav) {
        mav.setViewName("videos.create");
        return mav;
    }

}
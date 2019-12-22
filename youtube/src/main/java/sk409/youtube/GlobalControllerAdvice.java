package sk409.youtube;

import java.security.Principal;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.servlet.ModelAndView;

import sk409.youtube.models.User;
import sk409.youtube.repositories.UserRepository;

@ControllerAdvice
public class GlobalControllerAdvice {

    @Autowired
    private UserRepository userRepository;

    @ModelAttribute
    public void addCommonObjects(ModelAndView mav, Principal principal) {
        if (principal != null) {
            final Optional<User> user = userRepository.findByName(principal.getName());
            mav.addObject("user", user.get());
        }
    }

}
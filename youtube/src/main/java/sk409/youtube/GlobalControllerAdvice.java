package sk409.youtube;

import java.util.Optional;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.servlet.ModelAndView;

@ControllerAdvice
public class GlobalControllerAdvice {

    @ModelAttribute
    public void addCommonObjects(@CookieValue(name = "sessionId", required = false) Optional<String> sessionId,
            ModelAndView mav) {
        // System.out.println(sessionId.get());
        mav.addObject("msg", "MMMMMMMM");
    }

}
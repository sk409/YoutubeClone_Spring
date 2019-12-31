package sk409.youtube;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import sk409.youtube.models.User;
import sk409.youtube.services.UserServiceDefault;

@Controller
public class AuthController {

    @Autowired
    private UserServiceDefault userService;

    @GetMapping("register")
    public String showRegistrationForm() {
        return "register";
    }

    @PostMapping("register")
    @Transactional(readOnly = false)
    public String register(@ModelAttribute("user") User user) {
        userService.register(user.getName(), user.getPassword());
        return "redirect:/";
    }

}
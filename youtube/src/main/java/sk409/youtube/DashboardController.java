package sk409.youtube;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DashboardController {

    @GetMapping(value = "dashboard/videos")
    public String getMethodName() {
        return "dashboard.videos";
    }

}
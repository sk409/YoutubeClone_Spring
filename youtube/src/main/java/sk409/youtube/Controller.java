package sk409.youtube;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

public class Controller {

    protected void respond(HttpServletResponse response, int statusCode) {
        try {
            response.sendError(statusCode);
        } catch (IOException ioException) {
            return;
        }
    }

}
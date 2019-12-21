package sk409.youtube;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

public class AuthenticationFailureHandlerDefault implements AuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
            AuthenticationException authenticationException) throws IOException, ServletException {
        // String errorId = "";
        // if (authenticationException instanceof BadCredentialsException) {
        // // errorId =
        // }
        System.out.println("***************************");
        System.out.println("onAuthenticationFailure");
        System.out.println(authenticationException.getMessage());
        System.out.println("***************************");
        httpServletResponse.sendRedirect(
                httpServletRequest.getContextPath() + "/" + httpServletRequest.getParameter("identifier") + "/index");
    }

}
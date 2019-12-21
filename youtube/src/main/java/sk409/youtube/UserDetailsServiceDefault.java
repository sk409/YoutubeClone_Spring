package sk409.youtube;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserDetailsServiceDefault implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("*************************");
        System.out.println("loadUserByUsername");
        System.out.println("username = " + username);
        System.out.println("*************************");
        final UserDefault user = new UserDefault(username, (new BCryptPasswordEncoder()).encode("abc123"));
        return new UserDetailsDefault(user);
    }
}
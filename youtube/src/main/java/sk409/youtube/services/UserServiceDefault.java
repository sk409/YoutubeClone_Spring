package sk409.youtube.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import sk409.youtube.models.User;
import sk409.youtube.repositories.UserRepository;

@Service
public class UserServiceDefault {

    static final List<SimpleGrantedAuthority> AUTHORITIES = new ArrayList<SimpleGrantedAuthority>();

    static {
        AUTHORITIES.add(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository repository;

    public void register(String name, String password) {
        final User user = new User(name, passwordEncoder.encode(password));
        repository.save(user);
        final UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(user.getName(),
                user.getPassword(), AUTHORITIES);
        SecurityContextHolder.getContext().setAuthentication(token);
    }

}
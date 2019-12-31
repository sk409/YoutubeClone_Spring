package sk409.youtube;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import sk409.youtube.models.User;
import sk409.youtube.repositories.UserRepository;

@Component
public class UserDetailsServiceDefault implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        final Optional<User> _user = userRepository.findByName(username);
        if (!_user.isPresent()) {
            throw new UsernameNotFoundException("Username not found");
        }
        final User user = _user.get();
        final UserDefault userDefault = new UserDefault(user.getName(), user.getPassword());
        return new UserDetailsDefault(userDefault);
    }
}
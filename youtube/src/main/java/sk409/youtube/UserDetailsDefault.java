package sk409.youtube;

import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;

public class UserDetailsDefault extends User {

    private static final long serialVersionUID = 1L;

    private final UserDefault user;

    public UserDetailsDefault(UserDefault user) {
        super(user.getUsername(), user.getPassword(), AuthorityUtils.createAuthorityList("ROLE_USER"));
        System.out.println("*************************");
        System.out.println("UserDetailsDefault");
        System.out.println("*************************");
        this.user = user;
    }

    public UserDefault getUser() {
        return user;
    }

}
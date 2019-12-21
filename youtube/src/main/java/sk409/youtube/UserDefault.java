package sk409.youtube;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserDefault implements Serializable {

    private static final long serialVersionUID = 1L;

    private String username;
    private String password;

    public UserDefault() {

    }

}
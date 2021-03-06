package sk409.youtube.models;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private long id;

    @Column(length = 32, nullable = false)
    private String name;

    @Column(length = 64, nullable = false)
    private String password;

    @Column(name = "created_at", insertable = false)
    private Date createdAt;

    @Column(name = "updated_at", insertable = false)
    private Date updatedAt;

    public User() {
    }

    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }
}
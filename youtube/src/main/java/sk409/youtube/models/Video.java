package sk409.youtube.models;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@Entity
@Table(name = "videos")
public class Video {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private long id;

    @Column(length = 128, nullable = false)
    private String title;

    @Column(length = 4096, nullable = false)
    private String description;

    @Column(nullable = false)
    private long views;

    @Column(name = "user_id", nullable = false)
    private long userId;

    @Column(name = "created_at", insertable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    @Column(name = "updated_at", insertable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedAt;

    public Video(String title, String description, long views, long userId) {
        this.title = title;
        this.description = description;
        this.views = views;
        this.userId = userId;
    }
}
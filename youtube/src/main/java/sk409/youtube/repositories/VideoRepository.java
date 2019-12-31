package sk409.youtube.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import sk409.youtube.models.Video;

public interface VideoRepository extends JpaRepository<Video, Long> {

}
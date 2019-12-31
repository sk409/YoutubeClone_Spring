package sk409.youtube.services;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.stereotype.Service;

import sk409.youtube.models.Video;
import sk409.youtube.repositories.VideoRepository;

@Service
public class VideoServiceDefault {

    private VideoRepository videoRepository;

    public VideoServiceDefault(VideoRepository videoRepository) {
        this.videoRepository = videoRepository;
    }

    public void save(String title, String description, long userId, String pathString, byte[] bytes)
            throws IOException {
        final Path path = Paths.get(pathString);
        final File directory = new File(path.getParent().toString());
        directory.mkdir();
        final File file = new File(pathString);
        file.createNewFile();
        final BufferedOutputStream fileStream = new BufferedOutputStream(new FileOutputStream(file));
        fileStream.write(bytes);
        fileStream.close();
        final Video video = new Video(title, description, 0, userId);
        videoRepository.save(video);
    }

}
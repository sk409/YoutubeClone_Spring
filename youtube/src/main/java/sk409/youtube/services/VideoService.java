package sk409.youtube.services;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.stereotype.Service;

@Service
public class VideoService {

    public void save(String pathString, byte[] bytes) throws IOException {
        final Path path = Paths.get(pathString);
        final File directory = new File(path.getParent().toString());
        directory.mkdir();
        final File file = new File(pathString);
        file.createNewFile();
        final BufferedOutputStream fileStream = new BufferedOutputStream(new FileOutputStream(file));
        fileStream.write(bytes);
        fileStream.close();
    }

}
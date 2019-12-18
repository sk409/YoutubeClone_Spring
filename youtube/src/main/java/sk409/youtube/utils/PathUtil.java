package sk409.youtube.utils;

import java.io.File;

public class PathUtil {

    public static String resources = "src/main/resources";

    public static String join(String... components) {
        StringBuffer sb = new StringBuffer();
        int index = 0;
        for (final String component : components) {
            sb = sb.append(component);
            if (index != components.length - 1) {
                sb = sb.append(File.separator);
            }
        }
        return sb.toString();
    }

}
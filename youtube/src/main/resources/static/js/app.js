ELEMENT.locale(ELEMENT.lang.ja);

class Path {
    join(...components) {
        const delimiter = "/";
        return components.join(delimiter);
    }
}
const path = new Path();

const serverOrigin = "http://localhost:8080"
const routes = {
    videos: {
        base: "videos",
        create() {
            return path.join(serverOrigin, this.base, "create");
        },
        store() {
            return path.join(serverOrigin, this.base);
        }
    }
}
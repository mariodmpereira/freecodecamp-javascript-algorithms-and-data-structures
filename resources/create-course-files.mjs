import fs from 'fs';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const BASE_DIR = path.join(__dirname, "../");

export function createExerciseFiles(course) {
    createCourseFolder(course);
    createCourseFiles(course);
}

function createCourseFolder(course) {
    fs.mkdir(createFolderName(course), {recursive: true}, (err) => {
        if (err) throw err;
    });
}

function createCourseFiles(course) {
    for (let i = 0; i < course.lessons.length; i++) {
        const currentLessonIndex = prefixCurrentLessonIndex(i);
        const fileName = createFileName(course, currentLessonIndex, i);

        if (!fs.existsSync(fileName)) {
            fs.writeFile(fileName, "", (err) => {
                if (err) throw err;
            })
        }
    }

    function prefixCurrentLessonIndex(i) {
        let currentIndex = (i + 1).toString();

        if (currentIndex.length === 1) {
            return "00" + currentIndex;
        }

        if (currentIndex.length === 2) {
            return "0" + currentIndex;
        }

        return currentIndex;
    }
}

function createFolderName(course) {
    return BASE_DIR + course.number + "-" + course.name.replace(/\s+/g, '-').toLowerCase() + "/";
}

function createFileName(course, currentLessonIndex, i) {
    return createFolderName(course) + currentLessonIndex + "-" + course.lessons[i].replace(/\s+/g, '-').toLowerCase() + ".js";
}

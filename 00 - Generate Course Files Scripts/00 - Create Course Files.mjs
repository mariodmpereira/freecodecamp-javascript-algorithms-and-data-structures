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

function createFolderName(course) {
    return BASE_DIR + course.number + " - " + course.name + "/";
}

function createCourseFiles(course) {
    for (let i = 0; i < course.lessons.length; i++) {
        let currentLessonIndex = prefixCurrentLessonIndex(i);

        fs.writeFile(createFolderName(course) + currentLessonIndex + " - " + course.lessons[i] + ".js", "", (err) => {
            if (err) throw err;
        })
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
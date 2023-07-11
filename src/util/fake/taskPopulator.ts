import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";

export const TASK_LIST_DEMO = [
    new Task(
            1,
            'Example task 1', 
            'Aliqua sit velit magna ut. Reprehenderit in adipisicing elit fugiat ut reprehenderit fugiat mollit sit. Est commodo veniam sint sint adipisicing sint enim labore sint pariatur.',
            false,
            LEVELS.PRIORITY
        ),
        new Task(
            2,
            'Example task 2',
            'Proident labore pariatur ipsum officia exercitation elit duis nostrud.',
            true,
            LEVELS.BLOCKING
        ),
        new Task(
            3,
            'Example task 3',
            'Amet laborum ad quis reprehenderit commodo. Adipisicing deserunt labore est minim amet aliquip ipsum adipisicing cillum nulla irure aliqua nostrud. Eu aute veniam nostrud voluptate amet cillum ex incididunt mollit do culpa.',
            false,
            LEVELS.NORMAL

        )
];
import React from 'react';
import Tasks from '../../tasks/fibonacci?raw';
import Accordion from '../components/accordion';
import CodingQuiz from '../components/coding-quiz';

const tasksArray = [];
let currentTask = '';
Tasks.split('\n').map((el) => {
    if (el.slice(0, 5) === '//// ') {
        currentTask = el.slice(5);
    }
    else {
        tasksArray.push({
            task: currentTask,
            code: el,
        })
    }
});
const tasksObject = tasksArray.reduce(
    (r, a) => {
        r[a.task] = r[a.task] || [];
        r[a.task].push(a.code);
        return r;
    },
    Object.create(null)
);

export default () => (
    <Accordion items={
        Object.keys(tasksObject).map((taskKey) => {
            return {
                img: 'https://cdn.discordapp.com/attachments/989739733993263114/1086761490348003459/mpl_artistic_high_quality_visualization_of_fibonacci_sequence_a_fb14e18b-313f-454a-96b8-122d2d13bf2f.png',
                title: taskKey,
                content: () => (<CodingQuiz task={tasksObject[taskKey]} />),
                connection: false,
            }
        })
    } />
);

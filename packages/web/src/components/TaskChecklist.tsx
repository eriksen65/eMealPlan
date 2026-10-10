import type { CookingTask } from '@emealplan/domain';

interface TaskChecklistProps {
    tasks: CookingTask[];
    onToggle: (taskId: string, done: boolean) => void;
}

export function TaskChecklist({ tasks, onToggle }: TaskChecklistProps) {
    return (
        <ul className='task-list'>
            {tasks.map((task) => (
                <li key={task.id} className={`task-list__item${task.done ? ' task-list__item--done' : ''}`}>
                    <label>
                        <input type='checkbox' checked={task.done} onChange={(event) => onToggle(task.id, event.target.checked)} />
                        <span className='task-list__time'>{task.time}</span>
                        <span className='task-list__description'>{task.description}</span>
                    </label>
                </li>
            ))}
        </ul>
    );
}

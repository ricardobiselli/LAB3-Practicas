import PropTypes from 'prop-types';

const TaskList = (props) => {
    return (
        <ul>
            {props.tasks.map((task) => (
                <li key={task.text} className={task.completed ? 'completada' : ''}>
                    <span>{task.text}</span>
                    {!task.completed && (
                        <button onClick={() => props.markAsCompleted(task.text)}>
                            Completar
                        </button>
                    )}
                    <button onClick={() => props.removeTask(task.text)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.array
};

export default TaskList;
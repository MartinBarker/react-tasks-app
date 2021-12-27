import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <>
            {/* Loop through tasks, add component for each and pass in task as prop*/}
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks
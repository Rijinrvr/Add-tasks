import { TaskList } from "@/components/TaskList";
import { Link } from "react-router-dom";

export const TaskListPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <Link to="/add-task">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
        </Link>
      </div>
      <TaskList />
    </div>
  );
};

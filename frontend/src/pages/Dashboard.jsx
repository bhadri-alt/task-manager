import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const res = await api.get("/tasks");

      setTasks(res.data);
    } catch (error) {
      console.error(error);
      alert("Unable to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) {
      alert("Please enter a task");
      return;
    }

    try {
      await api.post("/tasks", {
        title,
      });

      setTitle("");
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, updatedData) => {
    try {
      await api.put(`/tasks/${id}`, updatedData);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const completed = tasks.filter(task => task.completed).length;
  const pending = tasks.length - completed;

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <div className="row mb-4">

          <div className="col-md-4">
            <div className="card bg-primary text-white shadow">
              <div className="card-body">
                <h4>Total Tasks</h4>
                <h2>{tasks.length}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-success text-white shadow">
              <div className="card-body">
                <h4>Completed</h4>
                <h2>{completed}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-warning shadow">
              <div className="card-body">
                <h4>Pending</h4>
                <h2>{pending}</h2>
              </div>
            </div>
          </div>

        </div>

        <div className="card shadow mb-4">

          <div className="card-body">

            <h3>Add New Task</h3>

            <div className="input-group">

              <input
                className="form-control"
                placeholder="Enter task..."
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
              />

              <button
                className="btn btn-primary"
                onClick={addTask}
              >
                Add Task
              </button>

            </div>

          </div>

        </div>

        <h3 className="mb-3">
          My Tasks
        </h3>

        {loading ? (
          <div className="text-center mt-5">
            <div className="spinner-border text-primary"></div>
          </div>
        ) : tasks.length === 0 ? (
          <div className="alert alert-info">
            No Tasks Found
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={deleteTask}
              onUpdate={updateTask}
            />
          ))
        )}

      </div>
    </>
  );
}

export default Dashboard;
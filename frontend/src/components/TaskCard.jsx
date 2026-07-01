import { useState } from "react";

function TaskCard({
  task,
  onDelete,
  onUpdate,
}) {

  const [editing, setEditing] =
    useState(false);

  const [title, setTitle] =
    useState(task.title);

  return (

    <div
      className={`card shadow-sm mb-3 ${
        task.completed
          ? "border-success"
          : ""
      }`}
    >
      <div className="card-body">

        {editing ? (
          <input
            className="form-control mb-3"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />
        ) : (
          <h5
            className={
              task.completed
                ? "text-decoration-line-through"
                : ""
            }
          >
            {task.title}
          </h5>
        )}

        <p>

          Status :

          <span
            className={
              task.completed
                ? "text-success fw-bold"
                : "text-warning fw-bold"
            }
          >
            {" "}
            {task.completed
              ? "Completed"
              : "Pending"}
          </span>

        </p>

        <div className="d-flex gap-2">

          <button
            className="btn btn-success btn-sm"
            onClick={() =>
              onUpdate(task._id, {
                completed:
                  !task.completed,
              })
            }
          >
            {task.completed
              ? "Undo"
              : "Complete"}
          </button>

          {editing ? (
            <button
              className="btn btn-primary btn-sm"
              onClick={() => {

                onUpdate(task._id, {
                  title,
                });

                setEditing(false);

              }}
            >
              Save
            </button>
          ) : (
            <button
              className="btn btn-warning btn-sm"
              onClick={() =>
                setEditing(true)
              }
            >
              Edit
            </button>
          )}

          <button
            className="btn btn-danger btn-sm"
            onClick={() =>
              onDelete(task._id)
            }
          >
            Delete
          </button>

        </div>

      </div>
    </div>

  );
}

export default TaskCard;
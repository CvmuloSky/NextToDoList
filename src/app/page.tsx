"use client";
import React, { useState } from 'react';

interface Task {
  value: string;
  class: string;
  dueDate: Date;
  priority: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState('');
  const [taskClass, setTaskClass] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [completed, setCompleted] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { value: task, class: taskClass, dueDate: new Date(dueDate), priority, completed }]);
      setTask('');
      setTaskClass('');
      setDueDate('');
      setPriority('');
      setCompleted(false);
      setShowPanel(false);
    }
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start sm:items-start">
        <div>
          <h1 className="text-4xl font-bold">Next.js to do List</h1>
          <p>The To-Do List to Keep Sigma Organized</p>
        </div>
        <button onClick={() => setShowPanel(true)} className="mt-2 p-2 bg-blue-500 text-white rounded">Add Task</button>
        {showPanel && (
          <div className="p-4 border rounded bg-gray-100">
            <input
              type="text"
              placeholder="Task"
              className="border p-2 rounded mb-2 w-full"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <input
              type="text"
              placeholder="Class"
              className="border p-2 rounded mb-2 w-full"
              value={taskClass}
              onChange={(e) => setTaskClass(e.target.value)}
            />
            <input
              type="date"
              className="border p-2 rounded mb-2 w-full text-gray-400"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <select
              name="priority"
              id="priority"
              className="border p-2 rounded mb-2 w-full text-gray-400"
              value={priority}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPriority(e.target.value)}
            >
              <option value="">Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
              <option value="extra Credit">Extra Credit</option>
            </select>
            <button onClick={addTask} className="p-2 bg-blue-500 text-white rounded">Save Task</button>
          </div>
        )}
        <table className="mt-4 border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 bg-blue-300">Task</th>
              <th className="border border-gray-300 p-2 bg-blue-300">Class</th>
              <th className="border border-gray-300 p-2 bg-blue-300">Due Date</th>
              <th className="border border-gray-300 p-2 bg-blue-300">Priority</th>
              <th className="border border-gray-300 p-2 bg-blue-300">Completion</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2 bg-blue-100 text-white">{task.value}</td>
                <td className="border border-gray-300 p-2 bg-blue-100 text-white">{task.class}</td>
                <td className="border border-gray-300 p-2 bg-blue-100 text-white">{task.dueDate.toDateString()}</td>
                <td className="border border-gray-300 p-2 bg-blue-100 text-white">{task.priority}</td>
                <td className="border border-gray-300 p-2 bg-blue-100 text-white">
                  <button
                    onClick={() => removeTask(index)}
                    className="p-2 bg-green-500 text-white rounded"
                  >
                    Finished
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
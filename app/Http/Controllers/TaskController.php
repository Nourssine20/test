<?php
namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    // Get all tasks
    public function index()
    {
        return Task::orderBy('priority', 'desc')->get();
    }

    // Add a new task
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'priority' => 'required|integer|min:1|max:5',
            'due_date' => 'nullable|date',
        ]);

        return Task::create($validated);
    }

    // Show a single task
    public function show($id)
    {
        return Task::findOrFail($id);
    }

    // Update a task
    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'priority' => 'required|integer|min:1|max:5',
            'due_date' => 'nullable|date',
            'is_completed' => 'required|boolean',
        ]);

        $task->update($validated);
        return $task;
    }

    // Delete a task
    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();
        return response(null, 204);
    }
}

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CheckSquare,
  Plus,
  Clock,
  Star,
  Flame,
  CheckCircle2,
  Calendar,
  Filter,
  MoreHorizontal,
} from "lucide-react";

// Mock tasks data
const tasks = [
  {
    id: 1,
    title: "Review pull request #123",
    description: "Review the authentication feature implementation",
    category: "Development",
    priority: "high",
    xpReward: 50,
    status: "completed",
    completedAt: "2024-09-20T09:30:00Z",
    dueDate: "2024-09-20T17:00:00Z",
    estimatedTime: 30,
    timeSpent: 25,
  },
  {
    id: 2,
    title: "Update project documentation",
    description: "Add new API endpoints to the developer documentation",
    category: "Documentation",
    priority: "medium",
    xpReward: 30,
    status: "pending",
    dueDate: "2024-09-20T16:00:00Z",
    estimatedTime: 60,
    timeSpent: 0,
  },
  {
    id: 3,
    title: "Team standup meeting",
    description: "Daily standup with the development team",
    category: "Meetings",
    priority: "high",
    xpReward: 25,
    status: "completed",
    completedAt: "2024-09-20T09:00:00Z",
    dueDate: "2024-09-20T09:15:00Z",
    estimatedTime: 15,
    timeSpent: 15,
  },
  {
    id: 4,
    title: "Fix bug in user profile page",
    description: "Address the issue with profile picture uploads",
    category: "Development",
    priority: "high",
    xpReward: 75,
    status: "pending",
    dueDate: "2024-09-20T18:00:00Z",
    estimatedTime: 45,
    timeSpent: 0,
  },
  {
    id: 5,
    title: "Plan next sprint objectives",
    description: "Define goals and tasks for the upcoming sprint",
    category: "Planning",
    priority: "medium",
    xpReward: 40,
    status: "pending",
    dueDate: "2024-09-21T12:00:00Z",
    estimatedTime: 90,
    timeSpent: 0,
  },
  {
    id: 6,
    title: "Code review for junior developer",
    description: "Review and provide feedback on junior dev's first PR",
    category: "Mentoring",
    priority: "medium",
    xpReward: 35,
    status: "pending",
    dueDate: "2024-09-20T15:00:00Z",
    estimatedTime: 30,
    timeSpent: 0,
  },
];

const priorityColors = {
  high: "text-red-600 bg-red-50 border-red-200",
  medium: "text-yellow-600 bg-yellow-50 border-yellow-200",
  low: "text-green-600 bg-green-50 border-green-200",
};

const statusColors = {
  pending: "text-gray-600 bg-gray-50 border-gray-200",
  completed: "text-green-600 bg-green-50 border-green-200",
};

export default function TasksPage() {
  const [filter, setFilter] = useState("all");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return task.status === "pending";
    if (filter === "completed") return task.status === "completed";
    if (filter === "high") return task.priority === "high";
    return true;
  });

  const completedTasks = tasks.filter((t) => t.status === "completed");
  const pendingTasks = tasks.filter((t) => t.status === "pending");
  const totalXPEarned = completedTasks.reduce(
    (sum, task) => sum + task.xpReward,
    0
  );
  const totalTimeSpent = tasks.reduce((sum, task) => sum + task.timeSpent, 0);

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const completeTask = (taskId: number) => {
    console.log(`Completing task ${taskId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex-1 space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Daily Tasks</h1>
            <p className="text-muted-foreground mt-1">
              Manage your daily tasks and track your productivity
            </p>
          </div>
          <Dialog
            open={isCreateDialogOpen}
            onOpenChange={setIsCreateDialogOpen}
          >
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Task
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create New Task</DialogTitle>
                <DialogDescription>
                  Add a new task to your daily workflow and earn XP when
                  completed.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="title" className="text-sm font-medium">
                    Task Title
                  </label>
                  <Input
                    id="title"
                    placeholder="Enter task title..."
                    className="col-span-3"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Describe what needs to be done..."
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Category
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="meetings">Meetings</SelectItem>
                        <SelectItem value="documentation">
                          Documentation
                        </SelectItem>
                        <SelectItem value="planning">Planning</SelectItem>
                        <SelectItem value="mentoring">Mentoring</SelectItem>
                        <SelectItem value="research">Research</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="priority" className="text-sm font-medium">
                      Priority
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="estimatedTime"
                      className="text-sm font-medium"
                    >
                      Estimated Time (minutes)
                    </label>
                    <Input
                      id="estimatedTime"
                      type="number"
                      placeholder="30"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="dueDate" className="text-sm font-medium">
                      Due Date
                    </label>
                    <Input
                      id="dueDate"
                      type="datetime-local"
                      className="col-span-3"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsCreateDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={() => setIsCreateDialogOpen(false)}>
                  Create Task
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Completed Today
              </CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedTasks.length}</div>
              <p className="text-xs text-muted-foreground">Tasks finished</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingTasks.length}</div>
              <p className="text-xs text-muted-foreground">
                Awaiting completion
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">XP Earned</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalXPEarned}</div>
              <p className="text-xs text-muted-foreground">Experience points</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Time Focused
              </CardTitle>
              <Flame className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatTime(totalTimeSpent)}
              </div>
              <p className="text-xs text-muted-foreground">Productive time</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              All ({tasks.length})
            </Button>
            <Button
              variant={filter === "pending" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("pending")}
            >
              Pending ({pendingTasks.length})
            </Button>
            <Button
              variant={filter === "completed" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("completed")}
            >
              Completed ({completedTasks.length})
            </Button>
            <Button
              variant={filter === "high" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("high")}
            >
              High Priority
            </Button>
          </div>
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <Card key={task.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mt-1 ${
                        task.status === "completed"
                          ? "bg-green-500 border-green-500"
                          : "border-muted-foreground"
                      }`}
                    >
                      {task.status === "completed" && (
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      )}
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3
                            className={`font-semibold text-lg ${
                              task.status === "completed"
                                ? "line-through text-muted-foreground"
                                : ""
                            }`}
                          >
                            {task.title}
                          </h3>
                          <Badge
                            className={
                              priorityColors[
                                task.priority as keyof typeof priorityColors
                              ]
                            }
                          >
                            {task.priority}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={
                              statusColors[
                                task.status as keyof typeof statusColors
                              ]
                            }
                          >
                            {task.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">
                          {task.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CheckSquare className="h-4 w-4" />
                          {task.category}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          {task.xpReward} XP
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {formatTime(task.timeSpent)} /{" "}
                          {formatTime(task.estimatedTime)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Due: {new Date(task.dueDate).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {task.status === "pending" ? (
                      <Button
                        size="sm"
                        onClick={() => completeTask(task.id)}
                        className="gap-1"
                      >
                        <CheckCircle2 className="h-3 w-3" />
                        Mark Complete
                      </Button>
                    ) : (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle2 className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          +{task.xpReward} XP
                        </span>
                      </div>
                    )}
                    <Button size="sm" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <CheckSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No tasks found</h3>
              <p className="text-muted-foreground mb-4">
                {filter === "all"
                  ? "You don't have any tasks yet. Create your first task to get started!"
                  : `No ${filter} tasks found. Try adjusting your filter or create a new task.`}
              </p>
              <Button
                onClick={() => setIsCreateDialogOpen(true)}
                className="gap-2"
              >
                <Plus className="h-4 w-4" />
                Create Your First Task
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

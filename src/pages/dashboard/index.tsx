"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useUser } from "@clerk/clerk-react";
import {
  CheckCircle2,
  CheckSquare,
  Crown,
  Flame,
  Gift,
  Star,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react";

// Achievement badges
const badges = [
  {
    id: 1,
    name: "Innovation Leader",
    description: "Led 3 successful product launches",
    icon: Target,
    earned: true,
    rarity: "legendary",
    earnedDate: "2024-08-15",
    category: "Leadership",
  },
  {
    id: 2,
    name: "Consistency Champion",
    description: "Maintained 90%+ performance for 30 days",
    icon: Flame,
    earned: true,
    rarity: "epic",
    earnedDate: "2024-09-01",
    category: "Performance",
  },
  {
    id: 3,
    name: "Milestone Achiever",
    description: "Completed 50 strategic objectives",
    icon: Star,
    earned: true,
    rarity: "rare",
    earnedDate: "2024-07-20",
    category: "Achievement",
  },
  {
    id: 4,
    name: "Team Catalyst",
    description: "Improved team efficiency by 25%",
    icon: TrendingUp,
    earned: true,
    rarity: "epic",
    earnedDate: "2024-08-30",
    category: "Collaboration",
  },
  {
    id: 5,
    name: "Strategic Visionary",
    description: "Achieved top 5% performance rating",
    icon: Crown,
    earned: true,
    rarity: "legendary",
    earnedDate: "2024-09-10",
    category: "Excellence",
  },
];

// Leaderboard data
const leaderboard = [
  {
    rank: 1,
    name: "Sarah Chen",
    points: 4521,
    avatar: "/asian-woman-avatar.png",
    level: 15,
    department: "Engineering",
    change: "up",
    weeklyGrowth: 12,
  },
  {
    rank: 2,
    name: "Michael Rodriguez",
    points: 3892,
    avatar: "/hispanic-man-avatar.png",
    level: 14,
    department: "Sales",
    change: "down",
    weeklyGrowth: -3,
  },
  {
    rank: 3,
    name: "Alexandra Johnson",
    points: 2847,
    avatar: "/diverse-user-avatars.png",
    level: 12,
    isCurrentUser: true,
    department: "Product Development",
    change: "up",
    weeklyGrowth: 8,
  },
  {
    rank: 4,
    name: "Emma Wilson",
    points: 2634,
    avatar: "/blonde-woman-avatar.png",
    level: 11,
    department: "Marketing",
    change: "same",
    weeklyGrowth: 0,
  },
  {
    rank: 5,
    name: "David Kim",
    points: 2401,
    avatar: "/korean-man-avatar.jpg",
    level: 11,
    department: "Design",
    change: "up",
    weeklyGrowth: 15,
  },
];

export default function DashboardIndex() {
  const { user } = useUser();
  // Mock user data
  const userData = {
    name: user?.fullName || "Unknown User",
    title: "Senior Product Manager",
    department: "Product Development",
    avatar: "/diverse-user-avatars.png",
    points: 2847,
    level: 12,
    nextLevelPoints: 3000,
    streak: 23,
    rank: 3,
    monthlyProgress: 340,
    efficiency: 94,
    completionRate: 87,
  };

  const progressPercentage = (userData.points / userData.nextLevelPoints) * 100;

  // Quick actions for the dashboard
  const quickActions = [
    {
      title: "Start New Quest",
      description: "Create and begin a new task quest",
      icon: Target,
      action: "create-quest",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "View Tasks",
      description: "Check your daily task progress",
      icon: CheckSquare,
      action: "view-tasks",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      title: "Check Leaderboard",
      description: "See your ranking and compete",
      icon: Crown,
      action: "view-leaderboard",
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      title: "Claim Rewards",
      description: "Browse available rewards store",
      icon: Gift,
      action: "view-rewards",
      color: "bg-orange-500 hover:bg-orange-600",
    },
  ];

  // Today's task overview
  const todaysTasks = [
    {
      id: 1,
      title: "Complete project proposal review",
      completed: true,
      xp: 150,
      priority: "high",
    },
    {
      id: 2,
      title: "Attend team standup meeting",
      completed: true,
      xp: 50,
      priority: "medium",
    },
    {
      id: 3,
      title: "Update client documentation",
      completed: false,
      xp: 100,
      priority: "high",
    },
    {
      id: 4,
      title: "Review code submissions",
      completed: false,
      xp: 75,
      priority: "medium",
    },
    {
      id: 5,
      title: "Plan next sprint objectives",
      completed: false,
      xp: 125,
      priority: "high",
    },
  ];

  const completedTasks = todaysTasks.filter((task) => task.completed).length;
  const totalXpEarned = todaysTasks
    .filter((task) => task.completed)
    .reduce((sum, task) => sum + task.xp, 0);

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900/50">
      <div className="flex-1 space-y-6 p-6 max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Welcome Back, {userData.name || "User"}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-xs font-medium">
                Level {userData.level}
              </Badge>
              <Badge variant="secondary" className="text-xs font-medium">
                #{userData.rank}
              </Badge>
            </div>
          </div>
        </div>

        {/* Stats Overview Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Total XP
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {userData.points.toLocaleString()}
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    +{totalXpEarned} today
                  </p>
                </div>
                <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <Star className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Level Progress
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    Level {userData.level}
                  </p>
                  <div className="mt-3">
                    <Progress value={progressPercentage} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">
                      {userData.nextLevelPoints - userData.points} XP to next
                      level
                    </p>
                  </div>
                </div>
                <div className="h-12 w-12 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center ml-4">
                  <Trophy className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Current Streak
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {userData.streak} days
                  </p>
                  <p className="text-xs text-orange-600 mt-1">Keep going!</p>
                </div>
                <div className="h-12 w-12 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                  <Flame className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Today's Tasks
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {completedTasks}/{todaysTasks.length}
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    {((completedTasks / todaysTasks.length) * 100).toFixed(0)}%
                    complete
                  </p>
                </div>
                <div className="h-12 w-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Quick Actions
          </h3>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-4 justify-start hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <action.icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-sm text-gray-900 dark:text-white">
                      {action.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="tasks" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3 h-10 bg-gray-100 dark:bg-gray-800">
            <TabsTrigger
              value="tasks"
              className="text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-white"
            >
              Tasks
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-white"
            >
              Achievements
            </TabsTrigger>
            <TabsTrigger
              value="leaderboard"
              className="text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-white"
            >
              Leaderboard
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tasks" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Today's Tasks
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {completedTasks} of {todaysTasks.length} completed •{" "}
                    {totalXpEarned} XP earned
                  </p>
                </div>
                <div className="text-right">
                  <Progress
                    value={(completedTasks / todaysTasks.length) * 100}
                    className="w-24 h-2"
                  />
                </div>
              </div>

              <div className="space-y-3">
                {todaysTasks.map((task) => (
                  <Card
                    key={task.id}
                    className={`border-0 shadow-sm hover:shadow-md transition-shadow duration-200 ${
                      task.completed ? "bg-green-50 dark:bg-green-900/20" : ""
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              task.completed
                                ? "bg-green-500 border-green-500"
                                : "border-gray-300 dark:border-gray-600"
                            }`}
                          >
                            {task.completed && (
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p
                              className={`font-medium ${
                                task.completed
                                  ? "line-through text-gray-500 dark:text-gray-400"
                                  : "text-gray-900 dark:text-white"
                              }`}
                            >
                              {task.title}
                            </p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge
                                variant="outline"
                                className={`text-xs ${
                                  task.priority === "high"
                                    ? "border-red-200 text-red-700 bg-red-50 dark:border-red-800 dark:text-red-400 dark:bg-red-900/20"
                                    : task.priority === "medium"
                                    ? "border-yellow-200 text-yellow-700 bg-yellow-50 dark:border-yellow-800 dark:text-yellow-400 dark:bg-yellow-900/20"
                                    : "border-green-200 text-green-700 bg-green-50 dark:border-green-800 dark:text-green-400 dark:bg-green-900/20"
                                }`}
                              >
                                {task.priority}
                              </Badge>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                +{task.xp} XP
                              </span>
                            </div>
                          </div>
                        </div>
                        {!task.completed && (
                          <Button size="sm" variant="outline">
                            Complete
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Recent Achievements
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your latest badges and accomplishments
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {badges
                  .filter((badge) => badge.earned)
                  .slice(0, 6)
                  .map((badge) => (
                    <Card
                      key={badge.id}
                      className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div
                            className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                              badge.rarity === "legendary"
                                ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
                                : badge.rarity === "epic"
                                ? "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
                                : "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                            }`}
                          >
                            <badge.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 dark:text-white truncate">
                              {badge.name}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {badge.description}
                            </p>
                            <div className="flex items-center justify-between mt-3">
                              <Badge
                                variant="outline"
                                className={`text-xs ${
                                  badge.rarity === "legendary"
                                    ? "border-yellow-200 text-yellow-700 bg-yellow-50 dark:border-yellow-800 dark:text-yellow-400 dark:bg-yellow-900/20"
                                    : badge.rarity === "epic"
                                    ? "border-purple-200 text-purple-700 bg-purple-50 dark:border-purple-800 dark:text-purple-400 dark:bg-purple-900/20"
                                    : "border-blue-200 text-blue-700 bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:bg-blue-900/20"
                                }`}
                              >
                                {badge.rarity}
                              </Badge>
                              <span className="text-xs text-gray-400 dark:text-gray-500">
                                {new Date(
                                  badge.earnedDate
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <Crown className="h-5 w-5 text-gray-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Leaderboard
                  </h3>
                  <p className="text-sm text-gray-500">
                    Top performers this month
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {leaderboard?.map((user, index) => (
                  <Card
                    key={index}
                    className="shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="relative flex-shrink-0">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                              index === 0
                                ? "bg-yellow-500"
                                : index === 1
                                ? "bg-gray-400"
                                : index === 2
                                ? "bg-orange-500"
                                : "bg-gray-600"
                            }`}
                          >
                            {index + 1}
                          </div>
                          {index < 3 && (
                            <Crown className="absolute -top-1 -right-1 h-4 w-4 text-yellow-500" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-gray-900 truncate">
                              {user.name}
                            </span>
                            {index < 3 && (
                              <Badge
                                variant="secondary"
                                className={`text-xs ${
                                  index === 0
                                    ? "bg-yellow-100 text-yellow-800"
                                    : index === 1
                                    ? "bg-gray-100 text-gray-800"
                                    : "bg-orange-100 text-orange-800"
                                }`}
                              >
                                {index === 0
                                  ? "Gold"
                                  : index === 1
                                  ? "Silver"
                                  : "Bronze"}
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-600">
                              {user.points} points
                            </span>
                            <div className="flex-1 bg-gray-100 rounded-full h-2">
                              <div
                                className={`h-full rounded-full ${
                                  index === 0
                                    ? "bg-yellow-500"
                                    : index === 1
                                    ? "bg-gray-400"
                                    : index === 2
                                    ? "bg-orange-500"
                                    : "bg-gray-600"
                                }`}
                                style={{
                                  width: `${
                                    (user.points /
                                      Math.max(
                                        ...(leaderboard?.map(
                                          (u) => u.points
                                        ) || [1])
                                      )) *
                                    100
                                  }%`,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

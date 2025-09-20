"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Trophy,
  Medal,
  Crown,
  Star,
  TrendingUp,
  TrendingDown,
  Minus,
  Users,
  Calendar,
  Filter,
  Award,
} from "lucide-react";

// Mock leaderboard data
const leaderboardData = [
  {
    id: 1,
    rank: 1,
    prevRank: 2,
    name: "Alex Chen",
    avatar: "/avatars/alex.jpg",
    level: 24,
    xp: 15420,
    tasksCompleted: 156,
    achievements: 12,
    streak: 15,
    department: "Engineering",
    joinedAt: "2024-01-15",
  },
  {
    id: 2,
    rank: 2,
    prevRank: 1,
    name: "Sarah Mitchell",
    avatar: "/avatars/sarah.jpg",
    level: 22,
    xp: 14850,
    tasksCompleted: 143,
    achievements: 14,
    streak: 8,
    department: "Product",
    joinedAt: "2024-02-01",
  },
  {
    id: 3,
    rank: 3,
    prevRank: 4,
    name: "Marcus Johnson",
    avatar: "/avatars/marcus.jpg",
    level: 21,
    xp: 13920,
    tasksCompleted: 134,
    achievements: 10,
    streak: 22,
    department: "Design",
    joinedAt: "2024-01-20",
  },
  {
    id: 4,
    rank: 4,
    prevRank: 3,
    name: "Emma Rodriguez",
    avatar: "/avatars/emma.jpg",
    level: 20,
    xp: 13150,
    tasksCompleted: 128,
    achievements: 11,
    streak: 5,
    department: "Engineering",
    joinedAt: "2024-03-10",
  },
  {
    id: 5,
    rank: 5,
    prevRank: 5,
    name: "David Park",
    avatar: "/avatars/david.jpg",
    level: 19,
    xp: 12480,
    tasksCompleted: 121,
    achievements: 9,
    streak: 12,
    department: "Marketing",
    joinedAt: "2024-02-15",
  },
  {
    id: 6,
    rank: 6,
    prevRank: 7,
    name: "Lisa Zhang",
    avatar: "/avatars/lisa.jpg",
    level: 18,
    xp: 11760,
    tasksCompleted: 115,
    achievements: 8,
    streak: 3,
    department: "Product",
    joinedAt: "2024-04-01",
  },
  {
    id: 7,
    rank: 7,
    prevRank: 6,
    name: "James Wilson",
    avatar: "/avatars/james.jpg",
    level: 17,
    xp: 11200,
    tasksCompleted: 108,
    achievements: 7,
    streak: 18,
    department: "Engineering",
    joinedAt: "2024-03-25",
  },
  {
    id: 8,
    rank: 8,
    prevRank: 8,
    name: "You",
    avatar: "/avatars/you.jpg",
    level: 16,
    xp: 10650,
    tasksCompleted: 102,
    achievements: 6,
    streak: 7,
    department: "Engineering",
    joinedAt: "2024-04-15",
    isCurrentUser: true,
  },
];

const timeframes = [
  { id: "weekly", label: "This Week", period: "7 days" },
  { id: "monthly", label: "This Month", period: "30 days" },
  { id: "quarterly", label: "This Quarter", period: "90 days" },
  { id: "alltime", label: "All Time", period: "Since joining" },
];

export default function LeaderboardPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("monthly");

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return (
          <span className="font-bold text-lg text-muted-foreground">
            #{rank}
          </span>
        );
    }
  };

  const getRankChange = (rank: number, prevRank: number) => {
    if (rank < prevRank) {
      return <TrendingUp className="h-4 w-4 text-green-500" />;
    } else if (rank > prevRank) {
      return <TrendingDown className="h-4 w-4 text-red-500" />;
    } else {
      return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const filteredData = leaderboardData;

  const currentUser = leaderboardData.find((user) => user.isCurrentUser);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex-1 space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Trophy className="h-8 w-8 text-yellow-500" />
              Leaderboard
            </h1>
            <p className="text-muted-foreground mt-1">
              See how you stack up against your teammates
            </p>
          </div>
        </div>

        {/* Current User Stats */}
        {currentUser && (
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Your Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    #{currentUser.rank}
                  </div>
                  <p className="text-xs text-muted-foreground">Current Rank</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {currentUser.xp.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">Total XP</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {currentUser.tasksCompleted}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Tasks Completed
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {currentUser.streak} days
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Current Streak
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Filters */}
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Timeframe:</span>
          <div className="flex gap-1">
            {timeframes.map((timeframe) => (
              <Button
                key={timeframe.id}
                variant={
                  selectedTimeframe === timeframe.id ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedTimeframe(timeframe.id)}
              >
                {timeframe.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Top 3 Podium */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Top Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {filteredData.slice(0, 3).map((user, index) => {
                const position = index + 1;
                return (
                  <Card
                    key={user.id}
                    className={`text-center ${
                      position === 1
                        ? "border-yellow-200 bg-gradient-to-b from-yellow-50 to-amber-50"
                        : position === 2
                        ? "border-gray-200 bg-gradient-to-b from-gray-50 to-slate-50"
                        : "border-amber-200 bg-gradient-to-b from-amber-50 to-orange-50"
                    }`}
                  >
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        {getRankIcon(position)}
                      </div>
                      <Avatar className="w-16 h-16 mx-auto mb-4">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>
                          {getInitials(user.name)}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-lg">{user.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {user.department}
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Level:</span>
                          <Badge variant="secondary">{user.level}</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>XP:</span>
                          <span className="font-medium">
                            {user.xp.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tasks:</span>
                          <span className="font-medium">
                            {user.tasksCompleted}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Full Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Medal className="h-5 w-5" />
              Complete Rankings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {filteredData.map((user) => (
                <div
                  key={user.id}
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-colors ${
                    user.isCurrentUser
                      ? "border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50"
                      : "border-muted hover:bg-muted/50"
                  }`}
                >
                  {/* Rank */}
                  <div className="flex items-center gap-2 min-w-[80px]">
                    {getRankIcon(user.rank)}
                    {getRankChange(user.rank, user.prevRank)}
                  </div>

                  {/* Avatar and Name */}
                  <div className="flex items-center gap-3 min-w-[200px]">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium flex items-center gap-2">
                        {user.name}
                        {user.isCurrentUser && (
                          <Badge variant="secondary" className="text-xs">
                            You
                          </Badge>
                        )}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {user.department}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold">{user.level}</div>
                      <p className="text-xs text-muted-foreground">Level</p>
                    </div>
                    <div>
                      <div className="text-lg font-bold">
                        {user.xp.toLocaleString()}
                      </div>
                      <p className="text-xs text-muted-foreground">XP</p>
                    </div>
                    <div>
                      <div className="text-lg font-bold">
                        {user.tasksCompleted}
                      </div>
                      <p className="text-xs text-muted-foreground">Tasks</p>
                    </div>
                    <div>
                      <div className="text-lg font-bold">
                        {user.achievements}
                      </div>
                      <p className="text-xs text-muted-foreground">Badges</p>
                    </div>
                    <div>
                      <div className="text-lg font-bold flex items-center justify-center gap-1">
                        {user.streak}
                        <Star className="h-3 w-3 text-yellow-500" />
                      </div>
                      <p className="text-xs text-muted-foreground">Streak</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Competition Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Competition Period
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-medium mb-2">Current Challenge</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Monthly productivity challenge - Complete the most tasks to
                  win exclusive rewards!
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Time remaining:</span>
                    <span className="font-medium">12 days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Participants:</span>
                    <span className="font-medium">
                      {filteredData.length} team members
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Rewards</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Crown className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">
                      1st Place: 1000 XP + Premium Badge
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Medal className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">
                      2nd Place: 500 XP + Silver Badge
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-amber-600" />
                    <span className="text-sm">
                      3rd Place: 250 XP + Bronze Badge
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

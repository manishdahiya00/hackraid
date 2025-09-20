"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Trophy,
  Star,
  Crown,
  Target,
  Zap,
  Users,
  BookOpen,
  Code2,
  Coffee,
  CheckCircle2,
  Filter,
} from "lucide-react";

// Mock achievements data - continuous earning system
const achievements = [
  {
    id: 1,
    title: "Task Completer",
    description: "Complete tasks (levels up every 10 tasks)",
    category: "Productivity",
    xpReward: 100,
    badgeIcon: Trophy,
    color: "gold",
    currentProgress: 23,
    currentLevel: 3,
    nextLevelTarget: 30,
    totalEarned: 0,
    lastEarned: "2024-09-18T14:30:00Z",
    rarity: "common",
  },
  {
    id: 2,
    title: "Early Bird",
    description: "Complete tasks before 8 AM (levels up every 5 early tasks)",
    category: "Time Management",
    xpReward: 250,
    badgeIcon: Crown,
    color: "purple",
    currentProgress: 3,
    currentLevel: 1,
    nextLevelTarget: 5,
    totalEarned: 0,
    rarity: "uncommon",
  },
  {
    id: 3,
    title: "Code Warrior",
    description: "Complete development tasks (levels up every 25 dev tasks)",
    category: "Development",
    xpReward: 500,
    badgeIcon: Code2,
    color: "green",
    currentProgress: 32,
    currentLevel: 2,
    nextLevelTarget: 50,
    totalEarned: 0,
    lastEarned: "2024-09-15T16:45:00Z",
    rarity: "epic",
  },
  {
    id: 4,
    title: "Team Player",
    description: "Attend meetings (levels up every 10 meetings)",
    category: "Collaboration",
    xpReward: 300,
    badgeIcon: Users,
    color: "orange",
    currentProgress: 15,
    currentLevel: 2,
    nextLevelTarget: 20,
    totalEarned: 0,
    lastEarned: "2024-09-10T09:00:00Z",
    rarity: "uncommon",
  },
  {
    id: 5,
    title: "Documentation Master",
    description: "Write documentation (levels up every 5 docs)",
    category: "Documentation",
    xpReward: 400,
    badgeIcon: BookOpen,
    color: "indigo",
    currentProgress: 7,
    currentLevel: 2,
    nextLevelTarget: 10,
    totalEarned: 0,
    lastEarned: "2024-09-12T11:20:00Z",
    rarity: "rare",
  },
  {
    id: 6,
    title: "Consistency Champion",
    description: "Daily task streaks (levels up every 7-day streak)",
    category: "Consistency",
    xpReward: 750,
    badgeIcon: Coffee,
    color: "brown",
    currentProgress: 4,
    currentLevel: 1,
    nextLevelTarget: 7,
    totalEarned: 0,
    rarity: "epic",
  },
  {
    id: 7,
    title: "Speed Demon",
    description: "Complete tasks quickly (levels up every 10 fast completions)",
    category: "Efficiency",
    xpReward: 200,
    badgeIcon: Zap,
    color: "yellow",
    currentProgress: 8,
    currentLevel: 1,
    nextLevelTarget: 10,
    totalEarned: 0,
    rarity: "common",
  },
  {
    id: 8,
    title: "Quality Master",
    description:
      "Complete tasks without revisions (levels up every 15 perfect tasks)",
    category: "Quality",
    xpReward: 600,
    badgeIcon: Target,
    color: "red",
    currentProgress: 12,
    currentLevel: 1,
    nextLevelTarget: 15,
    totalEarned: 0,
    rarity: "rare",
  },
];

const rarityColors = {
  common: "text-gray-600 bg-gray-50 border-gray-200",
  uncommon: "text-green-600 bg-green-50 border-green-200",
  rare: "text-blue-600 bg-blue-50 border-blue-200",
  epic: "text-purple-600 bg-purple-50 border-purple-200",
  legendary: "text-orange-600 bg-orange-50 border-orange-200",
};

type IconComponent = typeof Trophy;

const categoryIcons: { [key: string]: IconComponent } = {
  Productivity: Trophy,
  "Time Management": Crown,
  Development: Code2,
  Collaboration: Users,
  Documentation: BookOpen,
  Consistency: Coffee,
  Efficiency: Zap,
  Quality: Target,
};

export default function AchievementsPage() {
  const [filter, setFilter] = useState("all");

  const filteredAchievements = achievements.filter((achievement) => {
    if (filter === "earned") return achievement.totalEarned > 0;
    if (filter === "unearned") return achievement.totalEarned === 0;
    if (filter === "rare")
      return ["rare", "epic", "legendary"].includes(achievement.rarity);
    return true;
  });

  const earnedAchievements = achievements.filter((a) => a.totalEarned > 0);
  const totalXPFromAchievements = earnedAchievements.reduce(
    (sum, achievement) => sum + achievement.xpReward * achievement.totalEarned,
    0
  );
  const totalBadgesEarned = achievements.reduce(
    (sum, achievement) => sum + achievement.totalEarned,
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="flex-1 space-y-6 p-6">
        {/* Header */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-50/80 via-amber-50/60 to-orange-50/40 p-8 border border-yellow-200/60">
          <div className="absolute inset-0 bg-grid-white/10 opacity-20" />
          <div className="relative flex items-center justify-between">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl shadow-lg">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                  Achievements
                </span>
              </h1>
              <p className="text-lg text-foreground/80">
                Earn badges continuously by completing various challenges
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full border border-yellow-200">
                  <Star className="h-4 w-4 text-yellow-600" />
                  <span className="font-bold text-yellow-700">
                    {totalXPFromAchievements} XP earned
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full border border-green-200">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="font-bold text-green-700">
                    {totalBadgesEarned} total badges
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground/80">
                Badge Types
              </CardTitle>
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {earnedAchievements.length}
              </div>
              <p className="text-sm font-medium text-foreground/70">
                out of {achievements.length} categories
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground/80">
                Total Badges
              </CardTitle>
              <div className="p-2 bg-blue-100 rounded-lg">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {totalBadgesEarned}
              </div>
              <p className="text-sm font-medium text-foreground/70">
                badges earned
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-yellow-50 to-amber-50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground/80">
                Achievement XP
              </CardTitle>
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Star className="h-5 w-5 text-yellow-600" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {totalXPFromAchievements}
              </div>
              <p className="text-sm font-medium text-foreground/70">
                Experience points earned
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground/80">
                Active Progress
              </CardTitle>
              <div className="p-2 bg-purple-100 rounded-lg">
                <Trophy className="h-5 w-5 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {achievements.length}
              </div>
              <p className="text-sm font-medium text-foreground/70">
                ongoing challenges
              </p>
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
              All ({achievements.length})
            </Button>
            <Button
              variant={filter === "earned" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("earned")}
            >
              Earned ({earnedAchievements.length})
            </Button>
            <Button
              variant={filter === "unearned" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("unearned")}
            >
              Not Yet Earned ({achievements.length - earnedAchievements.length})
            </Button>
            <Button
              variant={filter === "rare" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("rare")}
            >
              Rare & Above
            </Button>
          </div>
        </div>

        {/* Achievement Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAchievements.map((achievement) => {
            const IconComponent = achievement.badgeIcon;
            const CategoryIcon = categoryIcons[achievement.category] || Trophy;
            const progressPercentage =
              (achievement.currentProgress / achievement.nextLevelTarget) * 100;
            const hasEarned = achievement.totalEarned > 0;

            return (
              <Card
                key={achievement.id}
                className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer ${
                  hasEarned
                    ? "border-yellow-300/60 bg-gradient-to-br from-yellow-50/80 via-amber-50/60 to-orange-50/40 shadow-lg shadow-yellow-200/20"
                    : "border-border/50 hover:border-primary/30 bg-gradient-to-br from-background to-muted/20 hover:shadow-primary/5"
                }`}
              >
                <CardHeader className="pb-4 relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`relative w-14 h-14 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${
                          hasEarned
                            ? "bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-yellow-300/50"
                            : "bg-gradient-to-br from-muted to-muted/70 text-muted-foreground group-hover:from-primary/10 group-hover:to-primary/5"
                        }`}
                      >
                        <IconComponent className="h-7 w-7 drop-shadow-sm" />
                        {hasEarned && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
                            <CheckCircle2 className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold flex items-center gap-3 mb-1">
                          {achievement.title}
                          {achievement.currentLevel > 1 && (
                            <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-sm text-xs px-2 py-1">
                              Lv. {achievement.currentLevel}
                            </Badge>
                          )}
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <CategoryIcon className="h-4 w-4 text-primary/70" />
                          <span className="text-sm font-medium text-primary/80">
                            {achievement.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <Badge
                        className={`${
                          rarityColors[
                            achievement.rarity as keyof typeof rarityColors
                          ]
                        } font-semibold shadow-sm`}
                      >
                        {achievement.rarity}
                      </Badge>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardHeader>

                <CardContent className="space-y-5">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Progress to next level */}
                  <div className="space-y-3 p-4 bg-muted/30 rounded-lg border">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-foreground/80 flex items-center gap-2">
                        <Target className="h-4 w-4 text-primary" />
                        Next Level {achievement.currentLevel + 1}
                      </span>
                      <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded-full text-xs">
                        {achievement.currentProgress} /{" "}
                        {achievement.nextLevelTarget}
                      </span>
                    </div>
                    <Progress
                      value={progressPercentage}
                      className="h-3 bg-muted-foreground/10"
                    />
                    <div className="text-xs text-muted-foreground text-center">
                      {achievement.nextLevelTarget -
                        achievement.currentProgress}{" "}
                      more to level up!
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-yellow-100 rounded-full">
                        <Star className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-foreground">
                          {achievement.xpReward} XP
                        </div>
                        <div className="text-xs text-muted-foreground">
                          per level
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      {achievement.totalEarned > 0 ? (
                        <div className="text-sm">
                          <div className="font-bold text-green-600 flex items-center gap-1">
                            <Trophy className="h-4 w-4" />
                            {achievement.totalEarned} badges
                          </div>
                          {achievement.lastEarned && (
                            <div className="text-xs text-muted-foreground">
                              Last:{" "}
                              {new Date(
                                achievement.lastEarned
                              ).toLocaleDateString()}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-xs text-muted-foreground font-medium">
                          Keep going! 🚀
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>

                {/* {hasEarned && (
                  <div className="absolute top-4 right-4">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-200 animate-pulse">
                        <span className="text-white text-sm font-bold drop-shadow">
                          {achievement.totalEarned}
                        </span>
                      </div>
                      <div className="absolute -inset-2 bg-yellow-400/20 rounded-full animate-ping" />
                    </div>
                  </div>
                )} */}
              </Card>
            );
          })}
        </div>

        {filteredAchievements.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                No achievements found
              </h3>
              <p className="text-muted-foreground">
                {filter === "all"
                  ? "Start completing tasks to unlock your first achievement!"
                  : `No ${filter} achievements found. Try adjusting your filter.`}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

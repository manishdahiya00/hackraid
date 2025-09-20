"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Gift,
  Star,
  Coffee,
  Monitor,
  Headphones,
  BookOpen,
  Car,
  Plane,
  ShoppingBag,
  Gamepad2,
  Trophy,
  Lock,
  Check,
  Filter,
  Coins,
} from "lucide-react";

// Mock rewards data
const rewards = [
  {
    id: 1,
    title: "Premium Coffee Beans",
    description: "High-quality artisanal coffee beans delivered to your desk",
    category: "Food & Drinks",
    xpCost: 500,
    icon: Coffee,
    color: "brown",
    availability: "limited",
    stock: 15,
    totalStock: 20,
    claimed: false,
    featured: false,
  },
  {
    id: 2,
    title: "Wireless Noise-Canceling Headphones",
    description: "Top-tier headphones for focused work sessions",
    category: "Tech & Gadgets",
    xpCost: 2500,
    icon: Headphones,
    color: "blue",
    availability: "available",
    stock: null,
    totalStock: null,
    claimed: false,
    featured: true,
  },
  {
    id: 3,
    title: "Ergonomic Standing Desk",
    description: "Height-adjustable desk to improve your workspace",
    category: "Office Equipment",
    xpCost: 5000,
    icon: Monitor,
    color: "gray",
    availability: "available",
    stock: null,
    totalStock: null,
    claimed: false,
    featured: true,
  },
  {
    id: 4,
    title: "Learning & Development Course",
    description: "Access to premium online courses of your choice",
    category: "Education",
    xpCost: 1500,
    icon: BookOpen,
    color: "green",
    availability: "unlimited",
    stock: null,
    totalStock: null,
    claimed: true,
    claimedAt: "2024-09-15T10:00:00Z",
    featured: false,
  },
  {
    id: 5,
    title: "Company Branded Merchandise",
    description: "Exclusive company swag including t-shirt, mug, and stickers",
    category: "Merchandise",
    xpCost: 300,
    icon: ShoppingBag,
    color: "purple",
    availability: "available",
    stock: null,
    totalStock: null,
    claimed: false,
    featured: false,
  },
  {
    id: 6,
    title: "Gaming Console",
    description: "Latest gaming console for the office break room",
    category: "Entertainment",
    xpCost: 7500,
    icon: Gamepad2,
    color: "red",
    availability: "available",
    stock: null,
    totalStock: null,
    claimed: false,
    featured: true,
  },
  {
    id: 7,
    title: "Parking Spot for a Month",
    description: "Reserved parking spot in prime location for 30 days",
    category: "Perks",
    xpCost: 1000,
    icon: Car,
    color: "indigo",
    availability: "available",
    stock: null,
    totalStock: null,
    claimed: false,
    featured: false,
  },
  {
    id: 8,
    title: "Weekend Getaway Voucher",
    description: "Hotel voucher for a relaxing weekend trip",
    category: "Travel",
    xpCost: 3000,
    icon: Plane,
    color: "cyan",
    availability: "available",
    stock: null,
    totalStock: null,
    claimed: false,
    featured: false,
  },
  {
    id: 9,
    title: "Golden Achievement Badge",
    description: "Rare digital badge that appears on your profile",
    category: "Digital",
    xpCost: 2000,
    icon: Trophy,
    color: "yellow",
    availability: "available",
    stock: null,
    totalStock: null,
    claimed: false,
    featured: false,
  },
];

const categories = [
  "All Categories",
  "Food & Drinks",
  "Tech & Gadgets",
  "Office Equipment",
  "Education",
  "Merchandise",
  "Entertainment",
  "Perks",
  "Travel",
  "Digital",
];

const availabilityColors = {
  available: "text-green-600 bg-green-50 border-green-200",
  limited: "text-orange-600 bg-orange-50 border-orange-200",
  "coming-soon": "text-blue-600 bg-blue-50 border-blue-200",
  "out-of-stock": "text-red-600 bg-red-50 border-red-200",
  unlimited: "text-purple-600 bg-purple-50 border-purple-200",
};

type IconType = typeof Gift;

type Reward = {
  id: number;
  title: string;
  description: string;
  category: string;
  xpCost: number;
  icon: IconType;
  color: string;
  availability: string;
  stock: number | null;
  totalStock: number | null;
  claimed: boolean;
  claimedAt?: string;
  featured: boolean;
};

export default function RewardsPage() {
  const [filter, setFilter] = useState("All Categories");
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  const [isClaimDialogOpen, setIsClaimDialogOpen] = useState(false);

  // Mock user XP
  const userXP = 4250;

  const filteredRewards = rewards.filter((reward) => {
    if (filter === "All Categories") return true;
    return reward.category === filter;
  });

  const claimedRewards = rewards.filter((r) => r.claimed);
  const availableRewards = rewards.filter(
    (r) => r.availability === "available" && !r.claimed
  );
  const totalXPSpent = claimedRewards.reduce(
    (sum, reward) => sum + reward.xpCost,
    0
  );

  const handleClaimReward = (reward: Reward) => {
    setSelectedReward(reward);
    setIsClaimDialogOpen(true);
  };

  const confirmClaim = () => {
    if (selectedReward) {
      console.log(`Claiming reward: ${selectedReward.title}`);
      setIsClaimDialogOpen(false);
      setSelectedReward(null);
    }
  };

  const getAvailabilityStatus = (reward: Reward) => {
    if (reward.claimed) return "claimed";
    if (reward.stock === 0) return "out-of-stock";
    return reward.availability;
  };

  const canAfford = (xpCost: number) => userXP >= xpCost;

  return (
    <div className="min-h-screen bg-background">
      <div className="flex-1 space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Gift className="h-8 w-8 text-purple-500" />
              Rewards Store
            </h1>
            <p className="text-muted-foreground mt-1">
              Spend your XP on amazing rewards and perks
            </p>
          </div>
          <Card className="min-w-[200px]">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Coins className="h-5 w-5 text-yellow-500" />
                <div>
                  <div className="text-2xl font-bold">
                    {userXP.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">Available XP</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Rewards Claimed
              </CardTitle>
              <Check className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{claimedRewards.length}</div>
              <p className="text-xs text-muted-foreground">Total redeemed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {availableRewards.length}
              </div>
              <p className="text-xs text-muted-foreground">Ready to claim</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">XP Spent</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {totalXPSpent.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">Lifetime spending</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Goal</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">750 XP</div>
              <p className="text-xs text-muted-foreground">
                Until gaming console
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Rewards */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Featured Rewards
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rewards
              .filter((r) => r.featured)
              .map((reward) => {
                const IconComponent = reward.icon;
                const status = getAvailabilityStatus(reward);
                const affordable = canAfford(reward.xpCost);

                return (
                  <Card
                    key={reward.id}
                    className="relative overflow-hidden border-yellow-200 bg-gradient-to-br from-yellow-50 to-amber-50"
                  >
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-yellow-500 text-white">
                        Featured
                      </Badge>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center bg-${reward.color}-100 text-${reward.color}-600`}
                        >
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">
                            {reward.title}
                          </CardTitle>
                          <Badge
                            className={
                              availabilityColors[
                                status as keyof typeof availabilityColors
                              ]
                            }
                          >
                            {status.replace("-", " ")}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {reward.description}
                      </p>

                      {reward.stock !== null && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Stock</span>
                            <span className="font-medium">
                              {reward.stock} / {reward.totalStock}
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{
                                width: `${
                                  (reward.stock / reward.totalStock) * 100
                                }%`,
                              }}
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="font-semibold">
                            {reward.xpCost.toLocaleString()} XP
                          </span>
                        </div>

                        {reward.claimed ? (
                          <Button disabled className="gap-1">
                            <Check className="h-3 w-3" />
                            Claimed
                          </Button>
                        ) : status === "out-of-stock" ||
                          status === "coming-soon" ? (
                          <Button disabled className="gap-1">
                            <Lock className="h-3 w-3" />
                            Unavailable
                          </Button>
                        ) : !affordable ? (
                          <Button disabled className="gap-1">
                            <Lock className="h-3 w-3" />
                            Need {(reward.xpCost - userXP).toLocaleString()} XP
                          </Button>
                        ) : (
                          <Button
                            onClick={() => handleClaimReward(reward)}
                            className="gap-1"
                          >
                            <Gift className="h-3 w-3" />
                            Claim
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>

        {/* All Rewards */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">All Rewards</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredRewards
              .filter((r) => !r.featured)
              .map((reward) => {
                const IconComponent = reward.icon;
                const status = getAvailabilityStatus(reward);
                const affordable = canAfford(reward.xpCost);

                return (
                  <Card
                    key={reward.id}
                    className={`relative overflow-hidden ${
                      reward.claimed
                        ? "bg-muted/30"
                        : "hover:shadow-lg transition-shadow"
                    }`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center bg-${reward.color}-100 text-${reward.color}-600`}
                        >
                          {reward.claimed ? (
                            <Check className="h-6 w-6 text-green-600" />
                          ) : (
                            <IconComponent className="h-6 w-6" />
                          )}
                        </div>
                        <div className="flex-1">
                          <CardTitle
                            className={`text-lg ${
                              reward.claimed ? "text-muted-foreground" : ""
                            }`}
                          >
                            {reward.title}
                          </CardTitle>
                          <div className="flex gap-2 mt-1">
                            <Badge variant="outline">{reward.category}</Badge>
                            <Badge
                              className={
                                availabilityColors[
                                  status as keyof typeof availabilityColors
                                ]
                              }
                            >
                              {status.replace("-", " ")}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p
                        className={`text-sm ${
                          reward.claimed
                            ? "text-muted-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {reward.description}
                      </p>

                      {reward.stock !== null && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Stock</span>
                            <span className="font-medium">
                              {reward.stock} / {reward.totalStock}
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{
                                width: `${
                                  (reward.stock / reward.totalStock) * 100
                                }%`,
                              }}
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="font-semibold">
                            {reward.xpCost.toLocaleString()} XP
                          </span>
                        </div>

                        {reward.claimed ? (
                          <div className="flex items-center gap-2 text-green-600">
                            <Check className="h-4 w-4" />
                            <span className="text-sm font-medium">Claimed</span>
                          </div>
                        ) : status === "out-of-stock" ||
                          status === "coming-soon" ? (
                          <Button disabled size="sm" className="gap-1">
                            <Lock className="h-3 w-3" />
                            Unavailable
                          </Button>
                        ) : !affordable ? (
                          <Button disabled size="sm" className="gap-1">
                            <Lock className="h-3 w-3" />
                            Need {(reward.xpCost - userXP).toLocaleString()} XP
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            onClick={() => handleClaimReward(reward)}
                            className="gap-1"
                          >
                            <Gift className="h-3 w-3" />
                            Claim
                          </Button>
                        )}
                      </div>

                      {reward.claimed && reward.claimedAt && (
                        <p className="text-xs text-muted-foreground">
                          Claimed on{" "}
                          {new Date(reward.claimedAt).toLocaleDateString()}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>

        {filteredRewards.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Gift className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No rewards found</h3>
              <p className="text-muted-foreground">
                No rewards available in this category. Try selecting a different
                category.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Claim Confirmation Dialog */}
        <Dialog open={isClaimDialogOpen} onOpenChange={setIsClaimDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Claim Reward</DialogTitle>
              <DialogDescription>
                Are you sure you want to claim "{selectedReward?.title}"?
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                {selectedReward && (
                  <>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-100 text-purple-600">
                      <selectedReward.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{selectedReward.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {selectedReward.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">
                        {selectedReward.xpCost.toLocaleString()} XP
                      </div>
                      <p className="text-xs text-muted-foreground">Cost</p>
                    </div>
                  </>
                )}
              </div>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span>Current XP:</span>
                  <span className="font-medium">{userXP.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span>After claiming:</span>
                  <span className="font-medium">
                    {(userXP - (selectedReward?.xpCost || 0)).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsClaimDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={confirmClaim}>Claim Reward</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

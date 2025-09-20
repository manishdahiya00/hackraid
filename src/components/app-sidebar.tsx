import * as React from "react";
import { BarChart3, CheckSquare, Trophy, Crown, Gift } from "lucide-react";

import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router";
import { useUser } from "@clerk/clerk-react";

const navigationItems = [
  {
    title: "Overview",
    url: "/dashboard/overview",
    icon: BarChart3,
  },
  {
    title: "Daily Tasks",
    url: "/dashboard/tasks",
    icon: CheckSquare,
  },
  {
    title: "Achievements",
    url: "/dashboard/achievements",
    icon: Trophy,
  },
  {
    title: "Leaderboard",
    url: "/dashboard/leaderboard",
    icon: Crown,
  },
  {
    title: "Rewards Store",
    url: "/dashboard/rewards",
    icon: Gift,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  const { user } = useUser();

  const isActive = (url: string) => {
    return location.pathname === url;
  };

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/dashboard/overview">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Trophy className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">TaskQuest</span>
                  <span className="truncate text-xs">Gamified Tasks</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <NavUser
          user={{
            name: user?.fullName || "User",
            email:
              user?.primaryEmailAddress?.emailAddress || "user@example.com",
            avatar: user?.imageUrl || "",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}

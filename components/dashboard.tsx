"use client"

import { useState } from "react"
import {
  Bell,
  MessageSquare,
  User,
  Home,
  Users,
  FileText,
  MessageCircle,
  AlertTriangle,
  Settings,
  LogOut,
  TrendingUp,
  ThumbsUp,
  ThumbsDown,
  MoreHorizontal,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-40 w-full border-b bg-background">
          <div className="flex h-16 items-center px-4 md:px-6">
            <SidebarTrigger className="mr-2 md:hidden" />
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-political-republican via-political-bipartisan to-political-democratic">
                <AlertTriangle className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">PoliTracker</span>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <MessageSquare className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  5
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Alex Johnson</p>
                      <p className="text-xs leading-none text-muted-foreground">alex.johnson@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Sidebar */}
          <Sidebar className="border-r">
            <SidebarHeader className="border-b px-2 py-3">
              <div className="flex items-center px-2">
                <Input type="search" placeholder="Search..." className="h-9 md:w-[200px] lg:w-[250px]" />
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Home Feed">
                    <Home className="h-5 w-5" />
                    <span>Home Feed</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Tracked Politicians">
                    <Users className="h-5 w-5" />
                    <span>Tracked Politicians</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Tracked Bills">
                    <FileText className="h-5 w-5" />
                    <span>Tracked Bills</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Discussions">
                    <MessageCircle className="h-5 w-5" />
                    <span>Discussions</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Alerts">
                    <AlertTriangle className="h-5 w-5" />
                    <span>Alerts</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="border-t">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Settings">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Log Out">
                    <LogOut className="h-5 w-5" />
                    <span>Log Out</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-4 md:p-6">
            <div className="mx-auto max-w-6xl space-y-6">
              {/* Welcome Section */}
              <section>
                <h1 className="text-2xl font-bold tracking-tight">Welcome back, Alex!</h1>
                <p className="text-muted-foreground">Here's what's happening in your political network today.</p>
              </section>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Trending Politicians/Bills */}
                <Card className="col-span-full">
                  <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-1">
                      <CardTitle>Trending This Week</CardTitle>
                      <CardDescription>Politicians and bills gaining attention</CardDescription>
                    </div>
                    <TrendingUp className="ml-auto h-5 w-5 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="politicians">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="politicians">Politicians</TabsTrigger>
                        <TabsTrigger value="bills">Bills</TabsTrigger>
                      </TabsList>
                      <TabsContent value="politicians" className="space-y-4 pt-4">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-10 w-10 ring-2 ring-political-democratic">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Senator Smith" />
                            <AvatarFallback>SS</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold">Senator Jane Smith</h4>
                              <Badge className="bg-political-democratic text-white">D</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Trending due to climate bill proposal</p>
                          </div>
                          <Badge>+43%</Badge>
                        </div>
                        <Separator />
                        <div className="flex items-center gap-4">
                          <Avatar className="h-10 w-10 ring-2 ring-political-republican">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Rep Johnson" />
                            <AvatarFallback>RJ</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold">Rep. Michael Johnson</h4>
                              <Badge className="bg-political-republican text-white">R</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Viral speech on education reform</p>
                          </div>
                          <Badge>+27%</Badge>
                        </div>
                        <Separator />
                        <div className="flex items-center gap-4">
                          <Avatar className="h-10 w-10 ring-2 ring-political-independent">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sen Williams" />
                            <AvatarFallback>BW</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold">Sen. Bernie Williams</h4>
                              <Badge className="bg-political-independent text-white">I</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Gaining attention for healthcare stance</p>
                          </div>
                          <Badge>+19%</Badge>
                        </div>
                      </TabsContent>
                      <TabsContent value="bills" className="space-y-4 pt-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-political-democratic/10 border-2 border-political-democratic">
                            <FileText className="h-5 w-5 text-political-democratic" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold">H.R. 1234 - Climate Action Now</h4>
                              <Badge className="bg-political-democratic text-white">Democratic</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Final vote scheduled this week</p>
                          </div>
                          <Badge variant="outline" className="bg-amber-100 text-amber-800">
                            Upcoming Vote
                          </Badge>
                        </div>
                        <Separator />
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-political-republican/10 border-2 border-political-republican">
                            <FileText className="h-5 w-5 text-political-republican" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold">S. 567 - Education Reform Act</h4>
                              <Badge className="bg-political-republican text-white">Republican</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Passed committee with amendments</p>
                          </div>
                          <Badge variant="outline" className="bg-green-100 text-green-800">
                            Advancing
                          </Badge>
                        </div>
                        <Separator />
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-political-bipartisan/10 border-2 border-political-bipartisan">
                            <FileText className="h-5 w-5 text-political-bipartisan" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold">H.R. 789 - Infrastructure Investment</h4>
                              <Badge className="bg-political-bipartisan text-white">Bipartisan</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Strong support from both parties</p>
                          </div>
                          <Badge variant="outline" className="bg-blue-100 text-blue-800">
                            In Committee
                          </Badge>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                {/* Activity Feed */}
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Updates from your political network</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@sarah" />
                          <AvatarFallback>SL</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <p>
                            <span className="font-semibold">Sarah Lee</span> commented on{" "}
                            <span className="font-semibold">H.R. 1234</span>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            "This bill doesn't go far enough to address the climate crisis."
                          </p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <ThumbsUp className="mr-1 h-4 w-4" />
                              <span>24</span>
                            </Button>
                            <Button variant="outline" size="sm">
                              <ThumbsDown className="mr-1 h-4 w-4" />
                              <span>3</span>
                            </Button>
                            <Button variant="outline" size="sm">
                              <MessageCircle className="mr-1 h-4 w-4" />
                              <span>Reply</span>
                            </Button>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">2h ago</span>
                      </div>
                      <Separator />
                      <div className="flex gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@john" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <p>
                            <span className="font-semibold">John Doe</span> started tracking{" "}
                            <span className="font-semibold">Senator Jane Smith</span>
                          </p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Users className="mr-1 h-4 w-4" />
                              <span>Follow John</span>
                            </Button>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">5h ago</span>
                      </div>
                      <Separator />
                      <div className="flex gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@maria" />
                          <AvatarFallback>MG</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <p>
                            <span className="font-semibold">Maria Garcia</span> created a discussion on{" "}
                            <span className="font-semibold">Education Reform</span>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            "Let's discuss the implications of S. 567 on public schools."
                          </p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <MessageCircle className="mr-1 h-4 w-4" />
                              <span>Join Discussion</span>
                            </Button>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">1d ago</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Activity
                    </Button>
                  </CardFooter>
                </Card>

                {/* Alerts Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Political Alerts</CardTitle>
                    <CardDescription>Real-time updates on your tracked items</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg bg-political-republican/10 p-3 border border-political-republican/30">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="h-5 w-5 text-political-republican" />
                        <div className="flex-1">
                          <h4 className="font-medium">Vote Alert</h4>
                          <p className="text-sm">H.R. 1234 is scheduled for floor vote tomorrow</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-lg bg-political-democratic/10 p-3 border border-political-democratic/30">
                      <div className="flex items-center gap-3">
                        <MessageCircle className="h-5 w-5 text-political-democratic" />
                        <div className="flex-1">
                          <h4 className="font-medium">Press Conference</h4>
                          <p className="text-sm">Sen. Smith (D) will address climate bill at 2PM EST</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-lg bg-political-bipartisan/10 p-3 border border-political-bipartisan/30">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-political-bipartisan" />
                        <div className="flex-1">
                          <h4 className="font-medium">Bipartisan Effort</h4>
                          <p className="text-sm">Infrastructure bill gains support from both parties</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Alerts
                    </Button>
                  </CardFooter>
                </Card>

                {/* Engage Section */}
                <Card className="col-span-full md:col-span-2 lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Engage</CardTitle>
                    <CardDescription>Join the conversation on trending political topics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-lg border p-4 border-political-democratic/30">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">Climate Action</h3>
                          <Badge className="bg-political-democratic text-white">Democratic</Badge>
                        </div>
                        <p className="mb-4 text-sm text-muted-foreground">
                          Discussion on the latest climate legislation and its potential impact.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex -space-x-2">
                            <Avatar className="border-2 border-background">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user1" />
                              <AvatarFallback>U1</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-background">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user2" />
                              <AvatarFallback>U2</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-background">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user3" />
                              <AvatarFallback>U3</AvatarFallback>
                            </Avatar>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
                              +12
                            </div>
                          </div>
                          <Button size="sm" className="bg-political-democratic hover:bg-political-democratic/90">
                            Join
                          </Button>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4 border-political-republican/30">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">Education Reform</h3>
                          <Badge className="bg-political-republican text-white">Republican</Badge>
                        </div>
                        <p className="mb-4 text-sm text-muted-foreground">
                          Discussing the proposed changes to the education system.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex -space-x-2">
                            <Avatar className="border-2 border-background">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user1" />
                              <AvatarFallback>U1</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-background">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user2" />
                              <AvatarFallback>U2</AvatarFallback>
                            </Avatar>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
                              +8
                            </div>
                          </div>
                          <Button size="sm" className="bg-political-republican hover:bg-political-republican/90">
                            Join
                          </Button>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4 border-political-bipartisan/30">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">Healthcare Debate</h3>
                          <Badge className="bg-political-bipartisan text-white">Bipartisan</Badge>
                        </div>
                        <p className="mb-4 text-sm text-muted-foreground">
                          Analyzing the pros and cons of the new healthcare proposal.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex -space-x-2">
                            <Avatar className="border-2 border-background">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user1" />
                              <AvatarFallback>U1</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-background">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user2" />
                              <AvatarFallback>U2</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-background">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user3" />
                              <AvatarFallback>U3</AvatarFallback>
                            </Avatar>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
                              +5
                            </div>
                          </div>
                          <Button size="sm" className="bg-political-bipartisan hover:bg-political-bipartisan/90">
                            Join
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}


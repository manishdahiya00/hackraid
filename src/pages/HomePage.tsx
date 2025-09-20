import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Trophy,
  Target,
  Zap,
  Star,
  CheckCircle,
  Users,
  TrendingUp,
  BarChart3,
  Shield,
  Clock,
} from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router";
import { Loader } from "lucide-react";

export default function HomePage() {
  const { isSignedIn, isLoaded } = useAuth();

  // Show loading state while auth is being resolved
  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader className="animate-spin w-8 h-8 text-blue-600" />
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-sm">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              TaskQuest
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#solutions"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium"
            >
              Solutions
            </a>
            <a
              href="#pricing"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium"
            >
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-3">
            {!isSignedIn ? (
              <>
                <Button
                  variant="ghost"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  asChild
                >
                  <SignInButton mode="modal" />
                </Button>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                  asChild
                >
                  <SignUpButton mode="modal" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
                >
                  <Link to={"/dashboard/overview"}>Go to Dashboard</Link>
                </Button>
                <UserButton />
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto text-center max-w-5xl">
          <div className="flex justify-center mb-8">
            <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 px-4 py-2 font-medium">
              Enterprise-Grade Task Management
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-8 text-gray-900 dark:text-gray-100 leading-tight">
            Transform Productivity with{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Intelligent Gamification
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 text-balance mb-12 leading-relaxed max-w-4xl mx-auto">
            Supercharge your team's productivity by 85% with our gamified task
            management platform that transforms everyday work into exciting
            challenges and unlocks real rewards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center bg-white/60 dark:bg-gray-900/60 rounded-2xl p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                50K+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Active Organizations
              </div>
            </div>
            <div className="text-center bg-white/60 dark:bg-gray-900/60 rounded-2xl p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                2.5M+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Tasks Completed Daily
              </div>
            </div>
            <div className="text-center bg-white/60 dark:bg-gray-900/60 rounded-2xl p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                85%
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Productivity Increase
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-gray-900 dark:text-gray-100">
              Enterprise-Ready Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 text-balance max-w-3xl mx-auto">
              Comprehensive tools designed for modern teams that demand results,
              engagement, and measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-gray-100">
                  Smart Goal Setting
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  AI-powered objective creation with automatic milestone
                  tracking and intelligent deadline suggestions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-gray-100">
                  Advanced Analytics
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Real-time performance insights with predictive analytics and
                  customizable reporting dashboards.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Trophy className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-gray-100">
                  Achievement System
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Sophisticated reward mechanisms that drive engagement and
                  recognize meaningful contributions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-gray-100">
                  Team Collaboration
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Seamless team coordination with role-based permissions and
                  collaborative challenge creation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-gray-100">
                  Enterprise Security
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Bank-grade security with SSO integration, audit trails, and
                  compliance-ready data protection.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800 hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-teal-600 dark:text-teal-400" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-gray-100">
                  Time Intelligence
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Smart time tracking with automated productivity insights and
                  workload optimization suggestions.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-gray-900 dark:text-gray-100">
              Tailored for Your Industry
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 text-balance max-w-3xl mx-auto">
              Specialized configurations and workflows designed for different
              business needs and team structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Software Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Sprint planning, code review gamification, and developer
                productivity metrics with GitHub integration.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Agile workflow integration
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Code quality achievements
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Technical debt tracking
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Sales & Marketing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Pipeline gamification, lead conversion challenges, and
                performance-based reward systems.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    CRM integration
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Revenue-based rewards
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Campaign performance tracking
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Project Management
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Complex project tracking with milestone celebrations and
                cross-functional team coordination.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Gantt chart integration
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Resource allocation optimization
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Risk management alerts
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Operations & Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Service level optimization, incident response gamification, and
                customer satisfaction tracking.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    SLA monitoring
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Ticket resolution rewards
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Customer feedback integration
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-24 px-6 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-gray-900 dark:text-gray-100">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 text-balance max-w-3xl mx-auto">
              Data-driven results from organizations that have transformed their
              productivity with TaskFlow Pro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-900/30">
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                85%
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Productivity Increase
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Average improvement in task completion rates
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-2xl p-8 border border-emerald-100 dark:border-emerald-900/30">
              <div className="text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                3.2x
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Employee Engagement
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Higher engagement scores vs traditional tools
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8 border border-purple-100 dark:border-purple-900/30">
              <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                67%
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Faster Delivery
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Reduction in project completion time
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-2xl p-8 border border-orange-100 dark:border-orange-900/30">
              <div className="text-5xl font-bold text-orange-600 dark:text-orange-400 mb-3">
                94%
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                User Satisfaction
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Teams report improved work satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Showcase */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-gray-900 dark:text-gray-100">
              Recognition That Motivates
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 text-balance max-w-3xl mx-auto">
              Sophisticated achievement systems that celebrate meaningful
              progress and drive continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl text-gray-900 dark:text-gray-100">
                      Excellence Award
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Maintain 95% quality score for 30 days
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Progress
                    </span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      28/30 days
                    </span>
                  </div>
                  <Progress value={93} className="h-3" />
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    2 days remaining
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl text-gray-900 dark:text-gray-100">
                      Velocity Master
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Complete 50 tasks ahead of schedule
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Progress
                    </span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      42/50 tasks
                    </span>
                  </div>
                  <Progress value={84} className="h-3" />
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    8 tasks remaining
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 px-6 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-gray-900 dark:text-gray-100">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 text-balance max-w-3xl mx-auto">
              See how forward-thinking organizations are transforming their
              productivity culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "TaskFlow Pro transformed our development team's velocity. We've
                seen a 40% increase in sprint completion rates and significantly
                higher team morale."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">SJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    Sarah Johnson
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    VP Engineering, TechCorp
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "The gamification elements have made project management engaging
                again. Our teams are more collaborative and deadline adherence
                has improved dramatically."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">MR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    Michael Rodriguez
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Director of Operations, GlobalTech
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "The analytics and insights have given us unprecedented
                visibility into team performance. We can now identify and
                address productivity bottlenecks proactively."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">LC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    Lisa Chen
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Chief Product Officer, InnovateLabs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-gray-900 dark:text-gray-100">
              Flexible Plans for Every Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 text-balance max-w-3xl mx-auto">
              Choose the perfect plan to unlock your team's potential with
              transparent pricing and no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Starter
                </h3>
                <div className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  $12
                  <span className="text-xl text-gray-600 dark:text-gray-400">
                    /user/mo
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Perfect for small teams getting started
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Up to 10 team members
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Core gamification features
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Basic analytics dashboard
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Email support
                  </span>
                </li>
              </ul>
              <Button className="w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200">
                Start Free Trial
              </Button>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-blue-500 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-1 font-medium">
                  Most Popular
                </Badge>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Professional
                </h3>
                <div className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  $24
                  <span className="text-xl text-gray-600 dark:text-gray-400">
                    /user/mo
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Ideal for growing teams and departments
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Up to 100 team members
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Advanced gamification & rewards
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Comprehensive analytics suite
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    API integrations
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Priority support
                  </span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Start Free Trial
              </Button>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Enterprise
                </h3>
                <div className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Custom
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Tailored solutions for large organizations
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Unlimited team members
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Custom integrations & workflows
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Advanced security & compliance
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Dedicated success manager
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    24/7 premium support
                  </span>
                </li>
              </ul>
              <Button className="w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Ready to Transform Your Team's Productivity?
          </h2>
          <p className="text-xl text-blue-100 text-balance mb-12 leading-relaxed">
            Join thousands of organizations that have already revolutionized
            their workflow with intelligent gamification and measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Start 14-Day Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            No credit card required • Full access to all features
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold">TaskFlow Pro</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming productivity through intelligent gamification and
                data-driven insights.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Product</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Solutions</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sales & Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Project Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © 2025 TaskFlow Pro. All rights reserved. Built for the future of
            work.
          </div>
        </div>
      </footer>
    </div>
  );
}

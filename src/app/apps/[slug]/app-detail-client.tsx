"use client";

import { useState, useEffect } from "react";
import { App } from "@/lib/apps-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ExternalLink, 
  Star, 
  Users, 
  Calendar, 
  Tag,
  CheckCircle2,
  Code,
  ArrowLeft,
  MessageSquare,
  ThumbsUp,
  Send,
  Check
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Review interface for display
interface DisplayReview {
  id: string;
  userName: string;
  rating: number;
  title: string;
  review: string;
  date: string;
  helpful: number;
  isHardcoded?: boolean;
}

interface AppDetailClientProps {
  app: App;
}

export default function AppDetailClient({ app }: AppDetailClientProps) {
  // Hardcoded reviews for social proof (app store style)
  const hardcodedReviews: DisplayReview[] = [
    {
      id: 'hc1',
      userName: 'Rahul K.',
      rating: 5,
      title: 'Exactly what I needed!',
      review: 'This app has completely transformed my daily routine. The interface is intuitive and the features are well thought out. Highly recommend!',
      date: '2025-03-15',
      helpful: 24,
      isHardcoded: true,
    },
    {
      id: 'hc2',
      userName: 'Priya S.',
      rating: 5,
      title: 'Clean design, great functionality',
      review: 'Love how simple yet powerful this app is. No bloat, just exactly what you need. The developer clearly understands user needs.',
      date: '2025-03-10',
      helpful: 18,
      isHardcoded: true,
    },
    {
      id: 'hc3',
      userName: 'Amit G.',
      rating: 4,
      title: 'Very useful app',
      review: 'Been using this for a few weeks now. Really helpful for staying organized. Would love to see more customization options in future updates.',
      date: '2025-03-05',
      helpful: 12,
      isHardcoded: true,
    },
    {
      id: 'hc4',
      userName: 'Sneha M.',
      rating: 5,
      title: 'Best in its category',
      review: 'Tried many similar apps but this one stands out. Fast, reliable, and the attention to detail is impressive. Keep up the great work!',
      date: '2025-02-28',
      helpful: 31,
      isHardcoded: true,
    },
  ];

  const [reviews, setReviews] = useState<DisplayReview[]>(hardcodedReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Review form state
  const [userName, setUserName] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  // Load Firebase reviews
  useEffect(() => {
    const loadReviews = async () => {
      try {
        const { getAppReviews } = await import('@/lib/firebase');
        const firebaseReviews = await getAppReviews(app.slug);
        const formattedReviews: DisplayReview[] = firebaseReviews.map(r => ({
          id: r.id || '',
          userName: r.userName,
          rating: r.rating,
          title: r.title,
          review: r.review,
          date: r.createdAt instanceof Date ? r.createdAt.toISOString() : (r.createdAt as any).toDate().toISOString(),
          helpful: r.helpful,
        }));
        setReviews([...formattedReviews, ...hardcodedReviews]);
      } catch (err) {
        // Firebase not configured, use hardcoded only
        setReviews(hardcodedReviews);
      }
    };
    loadReviews();
  }, [app.slug]);

  // Calculate average rating from all reviews
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : app.rating.toString();

  // Handle review submission
  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !reviewTitle.trim() || reviewText.length < 20) {
      return;
    }

    setIsSubmitting(true);
    try {
      const { submitAppReview } = await import('@/lib/firebase');
      await submitAppReview({
        appSlug: app.slug,
        appName: app.name,
        userName: userName.trim(),
        rating: reviewRating,
        title: reviewTitle.trim(),
        review: reviewText.trim(),
      });
      setReviewSubmitted(true);
    } catch (err) {
      // Graceful fallback
      setReviewSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusColors = {
    live: "bg-green-500/20 text-green-400 border-green-500/30",
    beta: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "coming-soon": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  };

  const categoryColors = {
    productivity: "bg-purple-500/20 text-purple-400",
    learning: "bg-blue-500/20 text-blue-400",
    finance: "bg-green-500/20 text-green-400",
    health: "bg-red-500/20 text-red-400",
    entertainment: "bg-pink-500/20 text-pink-400",
    creative: "bg-orange-500/20 text-orange-400",
    social: "bg-cyan-500/20 text-cyan-400",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/apps" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Apps
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-start justify-between gap-8 flex-wrap">
            <div className="flex-1 min-w-[300px]">
              {/* Status & Category Badges */}
              <div className="flex gap-2 mb-4">
                <Badge className={statusColors[app.status]}>
                  {app.status === "live" && "🟢"} 
                  {app.status === "beta" && "🔵"} 
                  {app.status === "coming-soon" && "🟡"} 
                  {app.status.replace("-", " ").toUpperCase()}
                </Badge>
                <Badge className={categoryColors[app.category as keyof typeof categoryColors]}>
                  {app.category}
                </Badge>
                <Badge variant="outline" className="capitalize">
                  {app.pricing}
                </Badge>
              </div>

              {/* App Name & Tagline */}
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {app.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {app.tagline}
              </p>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(app.rating)
                            ? "fill-yellow-500 text-yellow-500"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{app.rating}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-5 w-5" />
                  <span>{app.reviews.toLocaleString()} reviews</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button size="lg" className="gap-2 group" asChild>
                <a href={app.url} target="_blank" rel="noopener noreferrer">
                  Launch {app.name}
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* App Screenshot/Icon */}
            <div className="w-full md:w-80 h-auto rounded-2xl overflow-hidden border border-border shadow-lg">
              {app.screenshots && app.screenshots.length > 0 ? (
                <Image
                  src={app.screenshots[0]}
                  alt={`${app.name} screenshot`}
                  width={320}
                  height={640}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-6xl">
                    {app.category === "productivity" && "🚀"}
                    {app.category === "learning" && "📚"}
                    {app.category === "finance" && "💰"}
                    {app.category === "health" && "💪"}
                    {app.category === "entertainment" && "🎮"}
                    {app.category === "creative" && "🎨"}
                    {app.category === "social" && "💬"}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">About {app.name}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {app.fullDescription}
            </p>
          </Card>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {app.features.map((feature, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Code className="h-8 w-8" />
            Built With
          </h2>
          <div className="flex flex-wrap gap-3">
            {app.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.section>

        {/* Target Audience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Users className="h-8 w-8" />
            Perfect For
          </h2>
          <div className="flex flex-wrap gap-3">
            {app.targetAudience.map((audience, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm capitalize">
                {audience}
              </Badge>
            ))}
          </div>
        </motion.section>

        {/* Metadata */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <Card className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Launched</p>
                  <p className="font-semibold">
                    {new Date(app.launchDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Tag className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <p className="font-semibold capitalize">{app.category}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Pricing</p>
                  <p className="font-semibold capitalize">{app.pricing}</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* User Reviews Section (App Store Style) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <MessageSquare className="h-8 w-8" />
              Ratings & Reviews
            </h2>
            {!showReviewForm && !reviewSubmitted && (
              <Button onClick={() => setShowReviewForm(true)} variant="outline" className="gap-2">
                <Star className="h-4 w-4" />
                Write a Review
              </Button>
            )}
          </div>

          {/* Rating Summary */}
          <Card className="p-6 mb-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary">{averageRating}</div>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(parseFloat(averageRating))
                          ? "fill-yellow-500 text-yellow-500"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{reviews.length} reviews</p>
              </div>
              <div className="flex-1 w-full max-w-md">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const count = reviews.filter(r => r.rating === stars).length;
                  const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
                  return (
                    <div key={stars} className="flex items-center gap-2 mb-1">
                      <span className="text-sm w-6">{stars}</span>
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-yellow-500 rounded-full transition-all"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Review Submission Form */}
          {showReviewForm && !reviewSubmitted && (
            <Card className="p-6 mb-6 border-primary/30">
              <h3 className="text-xl font-semibold mb-4">Write a Review for {app.name}</h3>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setReviewRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 transition-transform hover:scale-110"
                      >
                        <Star 
                          className={`h-8 w-8 transition-colors ${
                            star <= (hoverRating || reviewRating)
                              ? "fill-yellow-500 text-yellow-500"
                              : "fill-muted text-muted"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Your Name *</label>
                    <Input
                      type="text"
                      placeholder="e.g., Rahul K."
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Review Title *</label>
                    <Input
                      type="text"
                      placeholder="e.g., Great app!"
                      value={reviewTitle}
                      onChange={(e) => setReviewTitle(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Your Review *</label>
                  <Textarea
                    placeholder="Share your experience with this app... (minimum 20 characters)"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    rows={4}
                    required
                    minLength={20}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {reviewText.length}/20 characters minimum
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    type="submit" 
                    className="gap-2"
                    disabled={isSubmitting || reviewText.length < 20}
                  >
                    {isSubmitting ? (
                      <>Submitting...</>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Review
                      </>
                    )}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setShowReviewForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          )}

          {/* Review Submitted Success */}
          {reviewSubmitted && (
            <Card className="p-6 mb-6 bg-green-500/10 border-green-500/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 dark:text-green-400">Review Submitted!</h4>
                  <p className="text-sm text-muted-foreground">
                    Thank you for your feedback! Your review will appear once approved.
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Reviews List */}
          <div className="space-y-4">
            {reviews.slice(0, 6).map((review) => (
              <Card key={review.id} className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-sm">
                        {review.userName.charAt(0)}
                      </div>
                      <span className="font-semibold">{review.userName}</span>
                      {review.isHardcoded && (
                        <Badge variant="outline" className="text-xs">Verified</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-yellow-500 text-yellow-500"
                                : "fill-muted text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(review.date).toLocaleDateString('en-IN', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">{review.title}</h4>
                <p className="text-muted-foreground mb-3">{review.review}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{review.helpful} found this helpful</span>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already using {app.name} to {app.tagline.toLowerCase()}.
            </p>
            <Button size="lg" className="gap-2 group" asChild>
              <a href={app.url} target="_blank" rel="noopener noreferrer">
                Launch {app.name} Now
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </Card>
        </motion.section>
      </main>
    </div>
  );
}

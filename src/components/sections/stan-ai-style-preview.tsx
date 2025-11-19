/**
 * Stan AI Style Preview Component
 * Displays all 4 styles for easy comparison and selection
 */

'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Check, Zap, Sparkles, MessageCircle, Command } from 'lucide-react';
import { ALL_STYLES, getStyleIcon } from './stan-ai-styles';

interface StylePreviewProps {
  onSelectStyle: (styleName: string) => void;
  currentStyle?: string;
}

export function StanAIStylePreview({ onSelectStyle, currentStyle = "Glass Morphism" }: StylePreviewProps) {
  const [selectedStyle, setSelectedStyle] = useState(currentStyle);

  const handleSelect = (styleName: string) => {
    setSelectedStyle(styleName);
    onSelectStyle(styleName);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
          Choose Your Stan AI Style
        </h2>
        <p className="text-muted-foreground text-lg">
          Select the design that best matches your portfolio aesthetic
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ALL_STYLES.map((style) => {
          const StyleIcon = getStyleIcon(style.name);
          const isSelected = selectedStyle === style.name;

          return (
            <Card
              key={style.name}
              className={`relative overflow-hidden transition-all duration-300 ${
                isSelected
                  ? 'ring-4 ring-primary shadow-2xl scale-105'
                  : 'hover:shadow-xl hover:scale-102'
              }`}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground rounded-full p-2">
                  <Check className="h-5 w-5" />
                </div>
              )}

              <CardContent className="p-6">
                {/* Style Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <StyleIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold">{style.name}</h3>
                    <p className="text-sm text-muted-foreground">{style.description}</p>
                  </div>
                </div>

                {/* Style Preview */}
                <div className="relative rounded-lg overflow-hidden border-2 mb-4">
                  <div className={style.cardWrapper + " min-h-[300px]"}>
                    <div className={style.animatedBg} />
                    <div className={style.contentPadding}>
                      <div className={style.headerWrapper}>
                        <div className={style.headerGlow} />
                        <div className={style.headerFlex}>
                          <div className={style.iconWrapper}>
                            <Bot className={style.iconSize} />
                          </div>
                          <div className="text-center md:text-left">
                            <h4 className={style.title}>
                              {style.titleText}
                            </h4>
                            <p className={style.subtitle}>
                              {style.subtitleText}
                            </p>
                          </div>
                        </div>
                        <div className={style.badgesWrapper}>
                          <span className={style.badge1}>{style.badge1Text}</span>
                          <span className={style.badge2}>{style.badge2Text}</span>
                        </div>
                      </div>

                      <p className={style.hint}>{style.hintText}</p>

                      {/* Sample Chat */}
                      <div className={style.chatContainer + " !max-h-[150px]"}>
                        <div className={style.userMessage}>
                          <p className="text-sm">Who is Kunal?</p>
                        </div>
                        <div className={style.assistantMessage}>
                          <p className="text-sm">
                            Kunal is a passionate developer building the 7K Ecosystem...
                          </p>
                        </div>
                      </div>

                      {/* Sample Input */}
                      <div className={style.inputWrapper}>
                        <input
                          type="text"
                          disabled
                          placeholder={style.inputPlaceholder}
                          className={style.input + " cursor-not-allowed"}
                        />
                        <button disabled className={style.button + " cursor-not-allowed"}>
                          <Bot className="h-4 w-4" />
                        </button>
                      </div>

                      <p className={style.footer}>{style.footerText}</p>
                    </div>
                  </div>
                </div>

                {/* Style Features */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Best For:</h4>
                  <p className="text-sm text-muted-foreground">
                    {getStyleRecommendation(style.name)}
                  </p>
                </div>

                {/* Select Button */}
                <Button
                  onClick={() => handleSelect(style.name)}
                  className="w-full"
                  variant={isSelected ? "default" : "outline"}
                >
                  {isSelected ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Selected
                    </>
                  ) : (
                    'Choose This Style'
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Info Section */}
      <Card className="mt-12 bg-primary/5">
        <CardContent className="p-6">
          <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Style Customization Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <strong className="text-foreground">🎨 Mix & Match:</strong> You can customize any style further with your brand colors
            </div>
            <div>
              <strong className="text-foreground">📱 Mobile Optimized:</strong> All styles are fully responsive and mobile-friendly
            </div>
            <div>
              <strong className="text-foreground">⚡ Performance:</strong> Each style is optimized for 60fps smooth animations
            </div>
            <div>
              <strong className="text-foreground">🎯 Accessibility:</strong> WCAG 2.1 AA compliant with proper contrast ratios
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Helper function for style recommendations
function getStyleRecommendation(styleName: string): string {
  switch (styleName) {
    case "Neon Cyberpunk":
      return "Tech startups, gaming portfolios, futuristic brands, developers who want to stand out with bold neon aesthetics";
    case "Glass Morphism":
      return "Modern brands, creative agencies, elegant portfolios, those who prefer soft and sophisticated designs";
    case "Minimalist Zen":
      return "Professional services, clean portfolios, businesses valuing simplicity, those who want maximum readability";
    case "Retro Terminal":
      return "Developer portfolios, tech enthusiasts, nostalgic brands, those who love command-line aesthetics";
    default:
      return "General use";
  }
}

// Export individual style cards for quick selection
export function StyleQuickSelect({ onSelect }: { onSelect: (style: string) => void }) {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {ALL_STYLES.map((style) => {
        const StyleIcon = getStyleIcon(style.name);
        return (
          <Button
            key={style.name}
            onClick={() => onSelect(style.name)}
            variant="outline"
            className="flex items-center gap-2"
          >
            <StyleIcon className="h-4 w-4" />
            {style.name}
          </Button>
        );
      })}
    </div>
  );
}

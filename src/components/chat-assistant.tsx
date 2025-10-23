"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Bot, Send, Loader2, User } from "lucide-react";
import { askChatAssistant, getGreeting } from "@/ai/stan-assistant";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Message = {
  role: "user" | "assistant";
  content: string;
  followUpQuestions?: string[];
};

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleFollowUp = (question: string) => {
    setInput(question);
    // Auto-submit the follow-up question
    const userMessage: Message = { role: "user", content: question };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    askChatAssistant(question).then((response) => {
      const assistantMessage: Message = { 
        role: "assistant", 
        content: response.answer,
        followUpQuestions: response.followUpQuestions
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }).catch((error) => {
      console.error("Failed to get response from AI", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I'm having a little trouble right now. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }).finally(() => {
      setIsLoading(false);
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await askChatAssistant(input);
      const assistantMessage: Message = { 
        role: "assistant", 
        content: response.answer,
        followUpQuestions: response.followUpQuestions
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Failed to get response from AI", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I'm having a little trouble right now. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      getGreeting().then((greeting) => {
        setMessages([
          { role: "assistant", content: greeting }
        ]);
      });
    }
  }, [isOpen, messages.length]);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
            title="Chat with Stan"
          >
            <Bot className="h-7 w-7" />
            <span className="sr-only">Chat with Stan AI</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="flex h-full w-full flex-col p-0 sm:max-w-md md:max-w-lg">
          <SheetHeader className="p-4 border-b shrink-0">
            <SheetTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Stan AI Assistant
            </SheetTitle>
            <p className="text-sm text-muted-foreground">Ask me anything about Kunal!</p>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto overscroll-contain">
              <div className="p-4 space-y-4 pb-6">
              {messages.map((message, index) => (
                  <div
                  key={index}
                  className={cn(
                      "flex items-start gap-3",
                      message.role === "user" ? "justify-end" : "justify-start"
                  )}
                  >
                  {message.role === 'assistant' && (
                      <Avatar className="h-8 w-8 border shrink-0">
                          <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                      </Avatar>
                  )}
                  <div className="flex flex-col gap-2 max-w-[85%] sm:max-w-xs">
                    <div
                        className={cn(
                        "rounded-lg px-4 py-2 text-sm whitespace-pre-wrap break-words",
                        message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary"
                        )}
                    >
                        {message.content}
                    </div>
                    
                    {/* Follow-up questions */}
                    {message.role === "assistant" && message.followUpQuestions && message.followUpQuestions.length > 0 && (
                      <div className="flex flex-col gap-1.5 mt-1">
                        <p className="text-xs text-muted-foreground px-1">💡 You might also want to know:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {message.followUpQuestions.map((question, i) => (
                            <button
                              key={i}
                              onClick={() => handleFollowUp(question)}
                              disabled={isLoading}
                              className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {question}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                   {message.role === 'user' && (
                      <Avatar className="h-8 w-8 border shrink-0">
                          <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
                      </Avatar>
                  )}
                  </div>
              ))}
              {isLoading && (
                  <div className="flex items-start gap-3 justify-start">
                      <Avatar className="h-8 w-8 border shrink-0">
                          <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                      </Avatar>
                      <div className="max-w-xs rounded-lg px-4 py-2 text-sm bg-secondary flex items-center gap-2">
                         <Loader2 className="h-4 w-4 animate-spin"/>
                         <span>Thinking...</span>
                      </div>
                  </div>
              )}
              <div ref={messagesEndRef} />
              </div>
          </div>
          <div className="p-4 border-t bg-background shrink-0">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Kunal, his projects..."
                autoComplete="off"
                disabled={isLoading}
                className="text-base"
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

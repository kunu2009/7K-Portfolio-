"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Bot, Send, Loader2, User } from "lucide-react";
import { askChatAssistant } from "@/ai/flows/chat-assistant-flow";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Message = {
  role: "user" | "assistant";
  content: string;
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await askChatAssistant(input);
      const assistantMessage: Message = { role: "assistant", content: response };
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
      setMessages([
        { role: "assistant", content: "Hi! I'm the 7K AI Assistant. How can I help you explore the ecosystem today?" }
      ]);
    }
  }, [isOpen, messages.length]);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
          >
            <Bot className="h-7 w-7" />
            <span className="sr-only">Open Chat</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="flex h-full w-full flex-col p-0 sm:max-w-md">
          <SheetHeader className="p-4 border-b">
            <SheetTitle>7K AI Assistant</SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-4">
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
                  <div
                      className={cn(
                      "max-w-xs rounded-lg px-4 py-2 text-sm whitespace-pre-wrap",
                      message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary"
                      )}
                  >
                      {message.content}
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
          <div className="p-4 border-t bg-background">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                autoComplete="off"
                disabled={isLoading}
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

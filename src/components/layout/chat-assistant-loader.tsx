"use client";

import dynamic from 'next/dynamic';

const ChatAssistant = dynamic(() => import('@/components/chat-assistant').then(mod => mod.ChatAssistant), {
  ssr: false,
});

export function ChatAssistantLoader() {
  return <ChatAssistant />;
}

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import MixedMatter from "./MixedMatter";

export interface GuestBookEntry {
  id: number;
  name: string;
  message: string;
  date: string;
  color: string;
}

//파스텔 컬러로 바꾸기
const modernColors = [
  "bg-slate-500",
  "bg-gray-600",
  "bg-zinc-500",
  "bg-neutral-600",
  "bg-stone-500",
  "bg-slate-600",
  "bg-gray-500",
  "bg-zinc-600",
];

export default function GuestBook() {
  const [entries, setEntries] = useState<GuestBookEntry[]>([]);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<GuestBookEntry | null>(null);
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    const newEntry: GuestBookEntry = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      date: new Date().toLocaleDateString("ko-KR"),
      color: modernColors[Math.floor(Math.random() * modernColors.length)],
    };

    setEntries((prev) => [...prev, newEntry]);
    setFormData({ name: "", message: "" });
    setIsWriteModalOpen(false);
  };

  const handleBallClick = (entry: GuestBookEntry) => {
    setSelectedEntry(entry);
    setIsViewModalOpen(true);
  };

  const getBallPosition = (index: number) => {
    const row = Math.floor(index / 8);
    const col = index % 8;
    const offsetX = row % 2 === 1 ? 35 : 0; // 벽돌 쌓기 패턴

    return {
      bottom: `${row * 60 + 20}px`,
      left: `${col * 70 + offsetX + 20}px`,
    };
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            {/* <MessageSquare className="text-slate-600 w-7 h-7" /> */}
            <h1
              className="text-2xl font-light text-slate-800 tracking-wide"
              // style={{ font: "serif" }}
            >
              GUEST BOOK
            </h1>
          </div>
          <p className="text-lg text-slate-600 font-light mb-8 max-w-md mx-auto leading-relaxed">
            신랑신부에게 덕담 한마디! 공을 채워주세요
          </p>

          {/* Write Button */}
          <Dialog open={isWriteModalOpen} onOpenChange={setIsWriteModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gray-400 text-white px-8 py-3 rounded-lg text-base font-medium transition-all duration-200 shadow-lg hover:shadow-xl border-0">
                메세지 남기기
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg border-0 shadow-2xl">
              <DialogHeader className="pb-6">
                <DialogTitle className="text-center text-2xl font-light text-slate-800">
                  축하 메세지 작성하기
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 font-medium">
                    이름
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name"
                    className="border-slate-200 focus:border-slate-400 focus:ring-slate-400 rounded-lg h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 font-medium">
                    메세지
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder="Share your thoughts..."
                    rows={4}
                    className="border-slate-200 focus:border-slate-400 focus:ring-slate-400 rounded-lg resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-slate-800 hover:bg-slate-700 h-12 rounded-lg font-medium transition-all duration-200"
                >
                  Submit Message
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex items-center justify-center">
          <MixedMatter entries={entries} />
        </div>

        {/* Balls Container */}
        <div className="relative min-h-[500px] bg-slate-50/50 rounded-2xl border border-slate-200/60 overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 p-4">
            {entries.map((entry, index) => (
              <div
                key={entry.id}
                className={`absolute w-14 h-14 ${entry.color} rounded-full cursor-pointer 
                          shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300
                          flex items-center justify-center animate-bounce-in border border-white/20`}
                style={{
                  ...getBallPosition(index),
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: "0.8s",
                  animationFillMode: "both",
                }}
                onClick={() => handleBallClick(entry)}
              >
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
            ))}
          </div>

          {entries.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-3">
                <MessageSquare className="w-12 h-12 text-slate-300 mx-auto" />
                <p className="text-slate-400 text-lg font-light">No messages yet</p>
                <p className="text-slate-300 text-sm">Be the first to leave a message</p>
              </div>
            </div>
          )}
        </div>

        {/* View Message Modal */}
        <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
          <DialogContent className="sm:max-w-md border-0 shadow-2xl">
            <DialogHeader className="pb-4">
              <DialogTitle className="text-center text-xl font-light text-slate-800">
                Message
              </DialogTitle>
            </DialogHeader>
            {selectedEntry && (
              <Card className="border-0 shadow-none">
                <CardContent className="p-6 space-y-6">
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 ${selectedEntry.color} rounded-full mx-auto flex items-center justify-center border border-white/20 shadow-lg`}
                    >
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-medium text-slate-800">{selectedEntry.name}</h3>
                    <p className="text-slate-600 whitespace-pre-wrap leading-relaxed font-light">
                      {selectedEntry.message}
                    </p>
                    <p className="text-sm text-slate-400 font-light">{selectedEntry.date}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </DialogContent>
        </Dialog>

        {/* Stats */}
        {entries.length > 0 && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-6 py-3 border border-slate-200">
              <MessageSquare className="w-4 h-4 text-slate-500" />
              <p className="text-slate-600 font-light">
                <span className="font-medium text-slate-800">{entries.length}</span> message
                {entries.length !== 1 ? "s" : ""} received
              </p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes bounce-in {
          0% {
            transform: translateY(100px) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-8px) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </div>
  );
}

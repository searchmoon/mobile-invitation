import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "./ui/card";
import type { GuestBookEntry } from "./MixedMatter";

interface DialogMessageProps {
  selectedEntry: GuestBookEntry | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DialogMessage({ selectedEntry, open, onOpenChange }: DialogMessageProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form>
        {/* <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger> */}
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
                    {selectedEntry.name}
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
      </form>
    </Dialog>
  );
}

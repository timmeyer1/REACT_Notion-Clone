"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useSettings} from "@/hooks/use-settings";
import { ModeToggle } from "@/components/mode-toggle";
import { Label } from "@/components/ui/label";

export const SettingsModal = () => {
    const settings = useSettings();
    

    return (
        <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                    <h2 className="text-lg font-medium">
                        Mes paramètres
                    </h2>
                </DialogHeader>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1">
                        <Label>
                            Apparence
                        </Label>
                        <span className="text-[0.8rem] text-muted-foreground" >
                            Change l'apparence de Notion
                        </span>
                    </div>
                    <ModeToggle />
                </div>
            </DialogContent>
        </Dialog>
    )
}
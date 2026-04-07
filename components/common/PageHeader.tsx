import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: () => void;
  actionLabel?: string;
  actionIcon?: React.ComponentType<{ className?: string }>;
}

export default function PageHeader ({ title, subtitle, action, actionLabel, actionIcon: ActionIcon = Plus }: PageHeaderProps){
    return (
        <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-betwen gap-4 mb-8"
        >
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">{title}</h1>
                {subtitle && <p className="text-slate-500 mt-1">{subtitle}</p>}
            </div>
            { action && (
                <Button onClick={action} className="bg-blue-600 hover:bg-blue-700 shadow-sm">
                    <ActionIcon className="h-4 w-4 mr-2"/>
                    {actionLabel}
                </Button>
            )}
        </motion.div>
    )
}
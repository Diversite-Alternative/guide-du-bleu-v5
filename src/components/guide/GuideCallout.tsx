import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface GuideCalloutProps {
    type?: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    children: React.ReactNode;
}

export const GuideCallout = ({ type = 'info', title, children }: GuideCalloutProps) => {
    const config = {
        info: {
            icon: Info,
            className: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900 text-blue-900 dark:text-blue-100',
            iconClassName: 'text-blue-600 dark:text-blue-400',
        },
        success: {
            icon: CheckCircle,
            className: 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900 text-green-900 dark:text-green-100',
            iconClassName: 'text-green-600 dark:text-green-400',
        },
        warning: {
            icon: AlertTriangle,
            className: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-900 text-yellow-900 dark:text-yellow-100',
            iconClassName: 'text-yellow-600 dark:text-yellow-400',
        },
        error: {
            icon: AlertCircle,
            className: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900 text-red-900 dark:text-red-100',
            iconClassName: 'text-red-600 dark:text-red-400',
        },
    };

    const { icon: Icon, className, iconClassName } = config[type];

    return (
        <Card className={`p-4 my-6 border-2 ${className}`}>
            <div className="flex gap-3">
                <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${iconClassName}`} />
                <div className="flex-1">
                    {title && <h4 className="font-semibold mb-2">{title}</h4>}
                    <div className="text-sm leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0">
                        {children}
                    </div>
                </div>
            </div>
        </Card>
    );
};

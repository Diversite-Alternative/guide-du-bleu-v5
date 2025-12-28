import { CheckCircle } from 'lucide-react';

interface Step {
    title: string;
    description: string;
}

interface GuideStepsProps {
    steps: Step[];
}

export const GuideSteps = ({ steps }: GuideStepsProps) => {
    return (
        <div className="space-y-6 my-8">
            {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary shrink-0">
                            {index + 1}
                        </div>
                        {index < steps.length - 1 && (
                            <div className="w-0.5 flex-1 bg-border mt-2 min-h-[40px]" />
                        )}
                    </div>
                    <div className="flex-1 pb-8">
                        <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

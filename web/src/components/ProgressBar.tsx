import * as Progress from "@radix-ui/react-progress";

interface ProgressBarProps {
  progress: number;
}

function ProgressBar(props: ProgressBarProps) {
  return (
    <Progress.Root className="h-3 w-full mt-4 bg-zinc-700 rounded-xl">
      <Progress.Indicator
        className="bg-violet-600 h-3 rounded-xl transition-all"
        style={{
          width: `${props.progress}%`,
        }}
      />
    </Progress.Root>
  );
}

export default ProgressBar;

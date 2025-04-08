import { twMerge } from "tailwind-merge";

export const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
  <div className="flex gap-1">
    <span className={twMerge("font-semibold")}>{label}</span>
    {required && <span className="text-error">*</span>}
  </div>
);

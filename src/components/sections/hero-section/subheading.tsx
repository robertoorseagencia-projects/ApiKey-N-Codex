import { Stars } from "@/assets/stars";

type PropsType = {
  text: string;
};

export function Subheading({ text }: PropsType) {
  return (
    <div className="rounded-full mb-6 max-w-fit mx-auto bg-linear-to-r from-[#D97757] to-[#F59E0B] p-[1.5px] shadow-sm">
      <div className="bg-white dark:bg-dark-primary py-2 text-xs sm:text-sm font-medium items-center gap-2 px-5 inline-flex text-gray-800 dark:text-white/90 rounded-full">
        <Stars />
        <p>{text}</p>
      </div>
    </div>
  );
}

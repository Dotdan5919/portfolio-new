import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function MyText() {
  return (
    <div className="ml-20 text-white  py-20 scale-150 text-4xl font-bold tracking-tight md:text-4xl">
      I don&apos;t create apps
      <PointerHighlight
        rectangleClassName="bg-neutral-700 border-neutral-300 dark:border-neutral-600"
        pointerClassName="text-yellow-500"
      >
        <span className="relative z-10">I bring visions to life</span>
      </PointerHighlight>
    </div>
  );
}

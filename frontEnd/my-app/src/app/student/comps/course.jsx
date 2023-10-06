import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
//   album: Album
//   aspectRatio?: "portrait" | "square"
//   width?: number
//   height?: number
// }

// destructure the props directly!!
export function Course({
  course,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        {/* use photo as right-click trigger */}
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            {/* unsplash photo */}
            <Image
              src={course.image}
              alt={course.name}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
        </ContextMenuTrigger>

        {/* panel after right click */}
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Add to Library</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      {/* name under the photo */}
      <Progress value={33} />
      <div className="flex flex-col space-y-1 text-sm">
        <div>
          <span> 33% done</span>
          <h3 className="text-xl font-bold leading-none">{course.name}</h3>
        </div>
        <Button asChild>
          <Link href="student/question">Continue</Link>
        </Button>
      </div>
    </div>
  );
}

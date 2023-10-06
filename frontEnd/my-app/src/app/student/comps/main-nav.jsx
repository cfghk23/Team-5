import Link from "next/link";
import { cn } from "@/lib/utils";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export function MainNav({ className, ...props }) {
	return (
		<nav
			className={cn("flex items-center space-x-4 lg:space-x-6", className)}
			{...props}
		>
			<Link
				href="/student/leaderboard"
				className="text-sm font-medium transition-colors hover:text-primary"
			>
				Leaderboard
			</Link>
			<Link
				href="/student/profile"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Profile
			</Link>
			<Link
				href="/student/notification"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Notification
			</Link>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<h3 className="font-bold">1000 Stars</h3>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56" align="end" forceMount>
					<DropdownMenuLabel className="font-normal">
						Use Your Stars
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<Link href="/student/redeem">
								Redeem
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href="/student/deposit">
								Deposit
							</Link>
						</DropdownMenuItem>

					</DropdownMenuGroup>


				</DropdownMenuContent>
			</DropdownMenu>
		</nav>
	);
}

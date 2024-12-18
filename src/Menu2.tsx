/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function Menu2({ children, subs, onClick }: any) {
	const [openDropdown, setOpenDropdown] = useState(false);

	return (
		<DropdownMenu
			open={openDropdown}
			onOpenChange={() => setOpenDropdown(false)}
		>
			<DropdownMenuTrigger
				onMouseEnter={() => setOpenDropdown(true)}
				onClick={onClick}
				asChild
			>
				{children}
			</DropdownMenuTrigger>
			{subs?.length > 0 && (
				<DropdownMenuContent
					className="h-[300px]"
					onMouseLeave={() => setOpenDropdown(false)}
					align="end"
				>
					{subs.map((s: { value: number; label: string }) => {
						<DropdownMenuItem key={s.value} onClick={() => console.log("aa")}>
							{s.label}
						</DropdownMenuItem>;
					})}
				</DropdownMenuContent>
			)}
		</DropdownMenu>
	);
}

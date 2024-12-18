"use client";

import * as React from "react";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function NavigationMenuDemo() {
	const [active, setActive] = useState(1);
	const menuItems = [
		{ label: "Work", value: 1 },
		{
			label: "Timesheets",
			value: 2,
			subs: [
				{ label: "Timelog", value: 21 },
				{ label: "Timesheet", value: 22 },
				{ label: "Timesheet Approval", value: 23 },
			],
			thumbnail:
				"https://img.freepik.com/free-vector/isometric-time-management-concept-illustrated_52683-55534.jpg",
		},
		{
			label: "Vacation Requests",
			value: 3,
			subs: [
				{ label: "My Vacation", value: 31 },
				{ label: "Vacation Approval", value: 32 },
			],
			thumbnail:
				"https://www.shutterstock.com/image-vector/annual-leave-relaxation-holiday-concept-600nw-2478455075.jpg",
		},
		{ label: "Reports", value: 4 },
		{ label: "Teams", value: 5 },
		{ label: "ORKs", value: 6 },
	];

	return (
		<NavigationMenu className=" h-[56px] items-end box-border">
			<NavigationMenuList className="flex items-end">
				{menuItems.map((e) => {
					return (
						<div
							className={`cursor-pointer text-[16px] border-b-[2px] text-[#203461] ${active === e.value ? "border-b-[#203461] font-bold" : " border-b-[#FFFFFF00]"} `}
							key={e.value}
						>
							<NavigationMenuItem
								key={e.value}
								className="relative bg-transparent h-[56px] box-border pt-2"
								onClick={() => setActive(e.value)}
							>
								<NavigationMenuTrigger className=" !bg-transparent h-full hover:text-[#203461] ">
									{e.label}
									{e.subs && (
										<ChevronDown
											className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
											aria-hidden="true"
										/>
									)}
								</NavigationMenuTrigger>
								{e.subs && (
									<NavigationMenuContent>
										<ul className="flex flex-col gap-1">
											{/* <li className="row-span-3">
												<NavigationMenuLink asChild>
													<img
														className=" w-full h-full object-cover "
														src={e.thumbnail}
														alt="thumb"
													/>
												</NavigationMenuLink>
											</li> */}
											{e.subs.map((s) => (
												<div key={s.value}>{s.label}</div>
											))}
										</ul>
									</NavigationMenuContent>
								)}
							</NavigationMenuItem>
						</div>
					);
				})}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

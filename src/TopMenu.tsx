"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

const components: { title: string; href: string; description: string }[] = [
	{
		title: "Alert Dialog",
		href: "/docs/primitives/alert-dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		href: "/docs/primitives/hover-card",
		description:
			"For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		href: "/docs/primitives/progress",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		href: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "/docs/primitives/tabs",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
];

export function NavigationMenuDemo() {
	const [active, setActive] = useState(1);
	const menuItems = [
		{ label: "Work", value: 1 },
		{
			label: "Timesheets",
			value: 2,
			content: (
				<NavigationMenuContent>
					<ul className="flex flex-col gap-2 w-[300px]">
						<ListItem href="/docs" title="Introduction">
							Re-usable components built using Radix UI and Tailwind CSS.
						</ListItem>
						<ListItem href="/docs/installation" title="Installation">
							How to install dependencies and structure your app.
						</ListItem>
						<ListItem href="/docs/primitives/typography" title="Typography">
							Styles for headings, paragraphs, lists...etc
						</ListItem>
					</ul>
				</NavigationMenuContent>
			),
		},
		{
			label: "Vacation Requests",
			value: 3,
			content: (
				<NavigationMenuContent>
					<ul className="flex flex-col gap-2 w-[300px]">
						<ListItem href="/docs" title="Introduction">
							Re-usable components built using Radix UI and Tailwind CSS.
						</ListItem>
						<ListItem href="/docs/installation" title="Installation">
							How to install dependencies and structure your app.
						</ListItem>
						<ListItem href="/docs/primitives/typography" title="Typography">
							Styles for headings, paragraphs, lists...etc
						</ListItem>
					</ul>
				</NavigationMenuContent>
			),
		},
		{ label: "Reports", value: 4 },
		{ label: "Teams", value: 5 },
		{ label: "ORKs", value: 6 },
	];

	return (
		<NavigationMenu>
			<NavigationMenuList>
				{menuItems.map((e) => {
					return (
						<NavigationMenuItem key={e.value}>
							<NavigationMenuTrigger>{e.label}</NavigationMenuTrigger>
							{e.content || ""}

							{/* <a href="/docs">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Documentation
                                </NavigationMenuLink>
                            </a> */}
						</NavigationMenuItem>
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

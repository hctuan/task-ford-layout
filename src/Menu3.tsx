import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Menu3() {
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
		},
		{
			label: "Vacation",
			value: 3,
			subs: [
				{ label: "My Vacation", value: 31 },
				{ label: "Vacation Approval", value: 32 },
			],
		},
		{ label: "Reports", value: 4 },
		{ label: "Teams", value: 5 },
		{ label: "ORKs", value: 6 },
	];

	return (
		<div className="flex gap-2 h-[56px] items-end ml-4">
			<Menubar
				defaultValue={active.toString()}
				className="bg-transparent border-none h-full p-0 m-0"
			>
				{menuItems.map((e) => {
					return (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<div
							className={`h-full cursor-pointer text-[16px] border-b-[2px] text-[#203461] ${active === e.value ? "border-b-[#203461] font-bold" : " border-b-[#FFFFFF00]"} `}
							key={e.value}
						>
							<MenubarMenu value={e.value.toString()}>
								<MenubarTrigger
									onClick={() => setActive(e.value)}
									className="h-full flex gap-1 !bg-transparent cursor-pointer pt-2"
								>
									{e.label}
									{e.subs && <ChevronDown size={16} />}
								</MenubarTrigger>
								{e.subs && (
									<MenubarContent className="p-2">
										{e.subs.map((s) => (
											<MenubarItem key={s.value}>{s.label}</MenubarItem>
										))}
									</MenubarContent>
								)}
							</MenubarMenu>
						</div>
					);
				})}
			</Menubar>
		</div>
	);
}

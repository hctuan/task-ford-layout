import {
	BellRing,
	ChevronDown,
	Filter,
	Folder,
	Home,
	Inbox,
	KanbanSquareIcon,
	Plus,
	SearchIcon,
	Settings,
	Settings2,
	Share2Icon,
	SunIcon,
} from "lucide-react";
import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import "./App.css";
import Logo from "./assets/logo.png";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./components/ui/accordion";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "./components/ui/breadcrumb";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Search } from "./components/ui/search";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger,
	useSidebar,
} from "./components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";

import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { Menu3 } from "./Menu3";
// import { NavigationMenuDemo } from "./Menu";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

export const description = "An interactive bar chart";

function App() {
	return (
		<div className="h-screen w-screen bg-[#ECF0F9] ">
			<div className="h-[56px] w-full fixed z-50 bg-[#ECF0F9] flex items-center border-b-[#E0E7F5] border-b">
				<div className="flex gap-1 flex-1 items-center">
					<div className="h-[56px] p-2 flex items-center">
						<img className="h-[32px]" src={Logo} alt="logo" />
					</div>

					{/* <MenuList /> */}
					{/* <NavigationMenuDemo /> */}
					{/* <Menu2 /> */}
					<Menu3 />

					<Button className="bg-[#0084FF] ml-3">
						<Plus /> Create
					</Button>
				</div>

				<div className="flex gap-1 px-[16px]">
					<Button variant="ghost" className="p-3 m-0">
						<SearchIcon />
					</Button>
					<Button variant="ghost" className="p-3 m-0">
						<Settings />
					</Button>
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
			</div>

			<div className="w-full fixed top-[68px] left-0 right-0">
				<SidebarProvider>
					<AppSidebar />
					<main className="flex-1 bg-white rounded-tl-[12px] relative">
						<SidebarTrigger className=" absolute left-[-8px] top-[48px] z-10 h-[54px] w-[20px] bg-white rounded-full hover:bg-[#ECF0F9]" />
						<MainScreen />
					</main>
				</SidebarProvider>
			</div>
		</div>
	);
}

// const MenuList = () => {
// 	const [active, setActive] = useState(1);
// 	const menuItems = [
// 		{ label: "Work", value: 1 },
// 		{
// 			label: "Timesheets",
// 			value: 2,
// 			subs: [
// 				{ label: "Timelog", value: 21 },
// 				{ label: "Timesheet", value: 22 },
// 				{ label: "Timesheet Approval", value: 23 },
// 			],
// 		},
// 		{
// 			label: "Vacation",
// 			value: 3,
// 			subs: [
// 				{ label: "My Vacation", value: 31 },
// 				{ label: "Vacation Approval", value: 32 },
// 			],
// 		},
// 		{ label: "Reports", value: 4 },
// 		{ label: "Teams", value: 5 },
// 		{ label: "ORKs", value: 6 },
// 	];

// 	return (
// 		<div className="flex gap-2 h-[56px] items-end ml-4">
// 			{menuItems.map((e) => {
// 				return (
// 					// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
// 					<div
// 						className={`cursor-pointer text-[16px] border-b-[2px] text-[#203461] ${active === e.value ? "border-b-[#203461] font-bold" : " border-b-[#FFFFFF00]"} `}
// 						key={e.value}
// 					>
// 						<Menu2 subs={e.subs} onClick={() => setActive(e.value)}>
// 							<div>{e.label}</div>
// 						</Menu2>
// 						{/* <DropdownMenu key={e.value}>
// 							<DropdownMenuTrigger
// 								className="flex items-center gap-1 w-full h-full p-[12px] "
// 								onClick={() => setActive(e.value)}
// 							>
// 								{e.label}
// 								{e.subs && <ChevronDown size={12} />}
// 							</DropdownMenuTrigger>
// 							{e.subs && (
// 								<DropdownMenuContent className="p-2">
// 									{e.subs.map((e) => (
// 										<DropdownMenuItem key={e.value}>{e.label}</DropdownMenuItem>
// 									))}
// 								</DropdownMenuContent>
// 							)}
// 						</DropdownMenu> */}
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// };

export function AppSidebar() {
	const items = [
		{
			title: "Home",
			url: "#",
			icon: Home,
		},
		{
			title: "Notification",
			url: "#",
			icon: BellRing,
		},
		{
			title: "Inbox",
			url: "#",
			icon: Inbox,
		},
	];

	const { state } = useSidebar();
	const isExpaned = state === "expanded";

	return (
		<Sidebar className="bg-[#ECF0F9] " collapsible="icon">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon color="#0084FF" />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				{isExpaned && (
					<div className="px-[16px]">
						<Card className="border-none shadow-none bg-[#F7F9FC]">
							<Accordion
								type="single"
								collapsible
								className="remove-childen-border"
								defaultValue="workspace"
							>
								<AccordionItem value="workspace">
									<AccordionTrigger className="p-0 m-0 px-[16px]">
										<div className="flex py-[8px] px-0 items-center gap-[8px] ">
											<SunIcon size={18} color="#0084FF" />
											<span className="text-[#203461]">Main Workspace</span>
										</div>
									</AccordionTrigger>
									<AccordionContent>
										<Search />
										<Accordion
											type="single"
											collapsible
											className="remove-childen-border"
										>
											<AccordionItem value="item-1" className=" relative">
												<AccordionTrigger className=" flex-row-reverse px-[12px] py-[8px] justify-end gap-2">
													<span className="text-[#1A294D]">
														Monday Universe
													</span>
													<Folder
														className=" !transform-none"
														size={18}
														color="#0084FF"
													/>
												</AccordionTrigger>
												<AccordionContent className="">
													{[
														"Teamboard for monday.com",
														"PPM",
														"Whiteboard",
													].map((e) => {
														return (
															<div
																key={e}
																className="flex justify-between ml-[48px] mr-[12px] px-[12px] py-[8px] gap-2 cursor-pointer hover:bg-[#D9E1F2] rounded-md"
															>
																<div className="flex flex-1 gap-2 items-center overflow-hidden">
																	<KanbanSquareIcon
																		className="w-[18px] !transform-none"
																		size={18}
																		color="#0084FF"
																	/>
																	<span className="flex-1 whitespace-nowrap truncate">
																		{e}
																	</span>
																</div>

																<div className="w-[32px] text-right">12</div>
															</div>
														);
													})}
												</AccordionContent>
											</AccordionItem>
										</Accordion>
										<Accordion
											type="single"
											collapsible
											className="remove-childen-border"
										>
											<AccordionItem value="item-1" className=" relative">
												<AccordionTrigger className=" flex-row-reverse px-[12px] py-[8px] justify-end gap-2">
													<span className="text-[#1A294D]">JIRA Universe</span>
													<Folder
														className=" !transform-none"
														size={18}
														color="#0084FF"
													/>
												</AccordionTrigger>
												<AccordionContent className="">
													{["TBPS", "GanttTable", "TimePlaner"].map((e) => {
														return (
															<div
																key={e}
																className="flex justify-between ml-[48px] mr-[12px] px-[12px] py-[8px] gap-2 cursor-pointer hover:bg-[#D9E1F2] rounded-md"
															>
																<div className="flex flex-1 gap-2 items-center overflow-hidden">
																	<KanbanSquareIcon
																		className="w-[18px] !transform-none"
																		size={18}
																		color="#0084FF"
																	/>
																	<span className="flex-1 whitespace-nowrap truncate">
																		{e}
																	</span>
																</div>

																<div className="w-[32px] text-right">12</div>
															</div>
														);
													})}
												</AccordionContent>
											</AccordionItem>
										</Accordion>
										<Accordion
											type="single"
											collapsible
											className="remove-childen-border"
										>
											<AccordionItem value="item-1" className=" relative">
												<AccordionTrigger className=" flex-row-reverse px-[12px] py-[8px] justify-end gap-2">
													<span className="text-[#1A294D]">
														Standalone Apps
													</span>
													<Folder
														className=" !transform-none"
														size={18}
														color="#0084FF"
													/>
												</AccordionTrigger>
												<AccordionContent className="">
													{["Taskford", "AssetLark"].map((e) => {
														return (
															<div
																key={e}
																className="flex justify-between ml-[48px] mr-[12px] px-[12px] py-[8px] gap-2 cursor-pointer hover:bg-[#D9E1F2] rounded-md"
															>
																<div className="flex flex-1 gap-2 items-center overflow-hidden">
																	<KanbanSquareIcon
																		className="w-[18px] !transform-none"
																		size={18}
																		color="#0084FF"
																	/>
																	<span className="flex-1 whitespace-nowrap truncate">
																		{e}
																	</span>
																</div>

																<div className="w-[32px] text-right">12</div>
															</div>
														);
													})}
												</AccordionContent>
											</AccordionItem>
										</Accordion>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</Card>
					</div>
				)}
			</SidebarContent>
		</Sidebar>
	);
}

const MainScreen = () => {
	return (
		<div>
			<div className="flex gap-2 px-[16px] pt-[16px]">
				<div className="flex-1">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink className="text-[#0084FF] text-[12px]" href="/">
									Main Work Space
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator>/</BreadcrumbSeparator>
							<BreadcrumbItem>
								<BreadcrumbPage className="text-[#0084FF] text-[12px]">
									Design TaskFord Q1.4
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div className="flex gap-1">
					<Button variant="secondary" className="p-3 m-0">
						<Share2Icon /> Share
					</Button>
					<Button variant="secondary" className="p-3 m-0">
						<Settings2 />
					</Button>
				</div>
			</div>

			<div className="flex gap-2 items-center px-[24px] pt-[16px]">
				<div className="text-[24px] text-black font-[500]">
					Design TaskFord Q1.3
				</div>

				<ChevronDown size={20} />
			</div>

			<div className="flex flex-col p-[16px] gap-[24px]">
				<div className="flex gap-2">
					<Tabs defaultValue="Chart" className="">
						<TabsList className="bg-[#ECF0F9] gap-2">
							<TabsTrigger className="px-4" value="Chart">
								Chart
							</TabsTrigger>
							<TabsTrigger className="px-4" value="Table">
								Table
							</TabsTrigger>
							<TabsTrigger className="px-4" value="Gantt">
								Gantt
							</TabsTrigger>
							<TabsTrigger className="px-4" value="Board">
								Board
							</TabsTrigger>
							<TabsTrigger className="px-4" value="">
								More <ChevronDown size={16} />
							</TabsTrigger>
						</TabsList>
					</Tabs>

					<Button className="bg-[#ECF0F9] text-[#203461] hover:text-white shadow-none">
						<SearchIcon /> Search
					</Button>
					<Button className="bg-[#ECF0F9] text-[#203461] hover:text-white shadow-none">
						<Filter /> Filter
					</Button>
					<Button className="bg-[#ECF0F9] text-[#203461] hover:text-white shadow-none">
						Group by <ChevronDown />
					</Button>
				</div>
			</div>

			<div className="flex flex-col p-[16px] gap-[24px]">
				<ChartScreen />
			</div>
		</div>
	);
};

const chartData = [
	{ date: "2024-04-01", desktop: 222, mobile: 150 },
	{ date: "2024-04-02", desktop: 97, mobile: 180 },
	{ date: "2024-04-03", desktop: 167, mobile: 120 },
	{ date: "2024-04-04", desktop: 242, mobile: 260 },
	{ date: "2024-04-05", desktop: 373, mobile: 290 },
	{ date: "2024-04-06", desktop: 301, mobile: 340 },
	{ date: "2024-04-07", desktop: 245, mobile: 180 },
	{ date: "2024-04-08", desktop: 409, mobile: 320 },
	{ date: "2024-04-09", desktop: 59, mobile: 110 },
	{ date: "2024-04-10", desktop: 261, mobile: 190 },
	{ date: "2024-04-11", desktop: 327, mobile: 350 },
	{ date: "2024-04-12", desktop: 292, mobile: 210 },
	{ date: "2024-04-13", desktop: 342, mobile: 380 },
	{ date: "2024-04-14", desktop: 137, mobile: 220 },
	{ date: "2024-04-15", desktop: 120, mobile: 170 },
	{ date: "2024-04-16", desktop: 138, mobile: 190 },
	{ date: "2024-04-17", desktop: 446, mobile: 360 },
	{ date: "2024-04-18", desktop: 364, mobile: 410 },
	{ date: "2024-04-19", desktop: 243, mobile: 180 },
	{ date: "2024-04-20", desktop: 89, mobile: 150 },
	{ date: "2024-04-21", desktop: 137, mobile: 200 },
	{ date: "2024-04-22", desktop: 224, mobile: 170 },
	{ date: "2024-04-23", desktop: 138, mobile: 230 },
	{ date: "2024-04-24", desktop: 387, mobile: 290 },
	{ date: "2024-04-25", desktop: 215, mobile: 250 },
	{ date: "2024-04-26", desktop: 75, mobile: 130 },
	{ date: "2024-04-27", desktop: 383, mobile: 420 },
	{ date: "2024-04-28", desktop: 122, mobile: 180 },
	{ date: "2024-04-29", desktop: 315, mobile: 240 },
	{ date: "2024-04-30", desktop: 454, mobile: 380 },
	{ date: "2024-05-01", desktop: 165, mobile: 220 },
	{ date: "2024-05-02", desktop: 293, mobile: 310 },
	{ date: "2024-05-03", desktop: 247, mobile: 190 },
	{ date: "2024-05-04", desktop: 385, mobile: 420 },
	{ date: "2024-05-05", desktop: 481, mobile: 390 },
	{ date: "2024-05-06", desktop: 498, mobile: 520 },
	{ date: "2024-05-07", desktop: 388, mobile: 300 },
	{ date: "2024-05-08", desktop: 149, mobile: 210 },
	{ date: "2024-05-09", desktop: 227, mobile: 180 },
	{ date: "2024-05-10", desktop: 293, mobile: 330 },
	{ date: "2024-05-11", desktop: 335, mobile: 270 },
	{ date: "2024-05-12", desktop: 197, mobile: 240 },
	{ date: "2024-05-13", desktop: 197, mobile: 160 },
	{ date: "2024-05-14", desktop: 448, mobile: 490 },
	{ date: "2024-05-15", desktop: 473, mobile: 380 },
	{ date: "2024-05-16", desktop: 338, mobile: 400 },
	{ date: "2024-05-17", desktop: 499, mobile: 420 },
	{ date: "2024-05-18", desktop: 315, mobile: 350 },
	{ date: "2024-05-19", desktop: 235, mobile: 180 },
	{ date: "2024-05-20", desktop: 177, mobile: 230 },
	{ date: "2024-05-21", desktop: 82, mobile: 140 },
	{ date: "2024-05-22", desktop: 81, mobile: 120 },
	{ date: "2024-05-23", desktop: 252, mobile: 290 },
	{ date: "2024-05-24", desktop: 294, mobile: 220 },
	{ date: "2024-05-25", desktop: 201, mobile: 250 },
	{ date: "2024-05-26", desktop: 213, mobile: 170 },
	{ date: "2024-05-27", desktop: 420, mobile: 460 },
	{ date: "2024-05-28", desktop: 233, mobile: 190 },
	{ date: "2024-05-29", desktop: 78, mobile: 130 },
	{ date: "2024-05-30", desktop: 340, mobile: 280 },
	{ date: "2024-05-31", desktop: 178, mobile: 230 },
	{ date: "2024-06-01", desktop: 178, mobile: 200 },
	{ date: "2024-06-02", desktop: 470, mobile: 410 },
	{ date: "2024-06-03", desktop: 103, mobile: 160 },
	{ date: "2024-06-04", desktop: 439, mobile: 380 },
	{ date: "2024-06-05", desktop: 88, mobile: 140 },
	{ date: "2024-06-06", desktop: 294, mobile: 250 },
	{ date: "2024-06-07", desktop: 323, mobile: 370 },
	{ date: "2024-06-08", desktop: 385, mobile: 320 },
	{ date: "2024-06-09", desktop: 438, mobile: 480 },
	{ date: "2024-06-10", desktop: 155, mobile: 200 },
	{ date: "2024-06-11", desktop: 92, mobile: 150 },
	{ date: "2024-06-12", desktop: 492, mobile: 420 },
	{ date: "2024-06-13", desktop: 81, mobile: 130 },
	{ date: "2024-06-14", desktop: 426, mobile: 380 },
	{ date: "2024-06-15", desktop: 307, mobile: 350 },
	{ date: "2024-06-16", desktop: 371, mobile: 310 },
	{ date: "2024-06-17", desktop: 475, mobile: 520 },
	{ date: "2024-06-18", desktop: 107, mobile: 170 },
	{ date: "2024-06-19", desktop: 341, mobile: 290 },
	{ date: "2024-06-20", desktop: 408, mobile: 450 },
	{ date: "2024-06-21", desktop: 169, mobile: 210 },
	{ date: "2024-06-22", desktop: 317, mobile: 270 },
	{ date: "2024-06-23", desktop: 480, mobile: 530 },
	{ date: "2024-06-24", desktop: 132, mobile: 180 },
	{ date: "2024-06-25", desktop: 141, mobile: 190 },
	{ date: "2024-06-26", desktop: 434, mobile: 380 },
	{ date: "2024-06-27", desktop: 448, mobile: 490 },
	{ date: "2024-06-28", desktop: 149, mobile: 200 },
	{ date: "2024-06-29", desktop: 103, mobile: 160 },
	{ date: "2024-06-30", desktop: 446, mobile: 400 },
];

const chartConfig = {
	views: {
		label: "Page Views",
	},
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
	mobile: {
		label: "Mobile",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;

export function ChartScreen() {
	const [activeChart, setActiveChart] =
		React.useState<keyof typeof chartConfig>("desktop");

	const total = React.useMemo(
		() => ({
			desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
			mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
		}),
		[],
	);

	return (
		<Card className=" shadow-none">
			<CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
				<div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
					<CardTitle>Bar Chart - Interactive</CardTitle>
					<CardDescription>
						Showing total visitors for the last 3 months
					</CardDescription>
				</div>
				<div className="flex">
					{["desktop", "mobile"].map((key) => {
						const chart = key as keyof typeof chartConfig;
						return (
							// biome-ignore lint/a11y/useButtonType: <explanation>
							<button
								key={chart}
								data-active={activeChart === chart}
								className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
								onClick={() => setActiveChart(chart)}
							>
								<span className="text-xs text-muted-foreground">
									{chartConfig[chart].label}
								</span>
								<span className="text-lg font-bold leading-none sm:text-3xl">
									{total[key as keyof typeof total].toLocaleString()}
								</span>
							</button>
						);
					})}
				</div>
			</CardHeader>
			<CardContent className="px-2 sm:p-6">
				<ChartContainer
					config={chartConfig}
					className="aspect-auto h-[250px] w-full"
				>
					<BarChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="date"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={(value) => {
								const date = new Date(value);
								return date.toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
								});
							}}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									className="w-[150px]"
									nameKey="views"
									labelFormatter={(value) => {
										return new Date(value).toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
											year: "numeric",
										});
									}}
								/>
							}
						/>
						<Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}

export default App;

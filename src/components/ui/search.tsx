import { Plus, SearchIcon } from "lucide-react";

export const Search = () => {
	return (
		<label className="h-[48px] px-[12px] flex items-center p-0">
			<span className="sr-only">Search</span>

			<SearchIcon size={18} />
			<input
				type="search"
				placeholder="Search"
				className="size-full ml-2 border-none bg-transparent focus:outline-none"
			/>

			<Plus size={18} />
		</label>
	);
};

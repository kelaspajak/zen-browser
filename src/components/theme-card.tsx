import { getThemeAuthorLink, ZenTheme } from "@/lib/themes";
import styled from "styled-components";
import { TagIcon } from "lucide-react";

import { ny } from "@/lib/utils";
import { Badge } from "./ui/badge";

const ThemeCardWrapper = styled.div``;

export default function ThemeCard({
	theme,
	className,
}: {
	theme: ZenTheme;
	className?: string;
}) {
	const maxNameLen = 50;
	const maxDescLen = 100;

	return (
		<ThemeCardWrapper
			onClick={(event) => {
				if (event.target instanceof HTMLAnchorElement) return;
				window.open(`/themes/${theme.id}`, "_self");
			}}
			className={ny(
				"flex w-full cursor-pointer select-none flex-col justify-start rounded-xl border-2 border-[transparent] bg-surface transition-all transition-shadow duration-200 hover:border-[rgba(0,0,0,.5)] hover:shadow-lg dark:bg-[#121212] dark:hover:border-[#333]",
				className,
			)}
		>
			<div className="w-full p-5">
				<h2 className="mb-1 overflow-ellipsis text-start text-xl font-bold">
					{theme.name.substring(0, maxNameLen).trim() +
						(theme.name.length > maxNameLen ? "..." : "")}
				</h2>
				<div className="flex flex-wrap gap-2">
					{theme.tags?.length ? (
						theme.tags.map((tag) => (
							<Badge key={tag} variant="secondary">
								<TagIcon className="mr-1 h-3 w-3" />
								{tag}
							</Badge>
						))
					) : (
						<span className="text-xs italic text-gray-500">
							No tags available
						</span>
					)}
				</div>
				<div className="mt-2 flex">
					{theme.homepage && (
						<>
							<a
								href={theme.homepage}
								className="text-md text-blue-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								Homepage
							</a>
							<span className="text-md mx-2 text-muted-foreground">{"·"}</span>
						</>
					)}
					<a
						href={getThemeAuthorLink(theme)}
						className="text-md text-blue-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						Author
					</a>
				</div>
				<p className="text-md mt-2 overflow-ellipsis text-start text-muted-foreground">
					{theme.description.substring(0, maxDescLen).trim() +
						(theme.description.length > maxDescLen ? "..." : "")}
				</p>
			</div>
		</ThemeCardWrapper>
	);
}

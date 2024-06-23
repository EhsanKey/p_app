import { routes } from "@/lib/constants/baseRoutes";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
	return (
		<div style={{ margin: "auto", textAlign: "center" }}>
			<Typography variant="h1" fontWeight={700}>
				4O4
			</Typography>
			<Button variant="contained" component={Link} href={routes.root} replace>
				Return Home
			</Button>
		</div>
	);
}

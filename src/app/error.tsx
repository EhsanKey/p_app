"use client";

import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";

function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
	useEffect(() => {
		// eslint-disable-next-line no-console
		console.error("error.tsx: ", error );
	}, [error]);
	return (
		<Box
			minHeight="100%"
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			gap={{ xs: 3, md: 6 }}
			textAlign="center"
			p={6}
			m="auto"
		>
			<Typography
				fontSize={{ xs: 20, md: 24 }}
				lineHeight={{ xs: "24.4px", md: "36px" }}
				letterSpacing={{ md: "4.08px" }}
				fontWeight={700}
			>
				SOMETHING WENT WRONG!
			</Typography>
			<Typography variant="h3" color="text.secondary">
				Sorry, This application has no explicit mapping for /error.
			</Typography>
			<Button onClick={() => reset()} variant="contained">
				Retry
			</Button>
		</Box>
	);
}

export default GlobalError;

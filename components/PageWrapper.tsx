import { styled } from "@mui/system";

const PageWrapper = ({ children }: React.PropsWithChildren) => {

	return (
		<WrapperStyles>
			{children}
		</WrapperStyles>
	);
};

const WrapperStyles = styled("div")({
	width: "100%",
	height: "100vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#000",
	color: "#fff",
	fontFamily: 'sans-serif',
});

export default PageWrapper;

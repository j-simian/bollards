import React from "react";
import { styled } from "@mui/material";

const ImageWrapper = ({ children }: React.PropsWithChildren) => {
	return (
		<ImageWrapperStyles>
			{children}		
		</ImageWrapperStyles>
	);
};
	

const ImageWrapperStyles = styled("div")`
	border-radius: 25px;
	width: 100%;
	@media (min-width: 768px) {
		width: 33%;
	}
`;

export default ImageWrapper; 

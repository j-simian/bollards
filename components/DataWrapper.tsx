import { styled } from "@mui/material";

const DataWrapper = ({ children }: React.PropsWithChildren) => {

	return (
		<DataWrapperStyles>
			{children}		
		</DataWrapperStyles>
	);
};

const DataWrapperStyles = styled("div")`
	width: 60%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& > h1 {
		padding-bottom: 32px;
	}
`

export default DataWrapper;

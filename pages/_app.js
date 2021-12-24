import "tailwindcss/tailwind.css"
import { ChakraProvider } from "@chakra-ui/react"
import { AuthContextProvider } from "../contexts/AuthContext"

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<AuthContextProvider>
				<Component {...pageProps} />
			</AuthContextProvider>
		</ChakraProvider>
	)
}

export default MyApp

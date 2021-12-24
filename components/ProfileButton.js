import React from "react"
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuGroup,
	MenuDivider,
	Button,
} from "@chakra-ui/react"

export default function ProfileButton({ user }) {
	console.log(user)
	return (
		<Menu>
			<MenuButton as={Button} colorScheme="gray">
				{user.email}
			</MenuButton>
			<MenuList>
				<MenuGroup
					title={`Joined at ${new Date(user.created_at).toDateString()}`}
				>
					<MenuItem>My Profile</MenuItem>
					<MenuItem>Reload</MenuItem>
					<MenuItem>Logout</MenuItem>
				</MenuGroup>
				<MenuDivider />
				<MenuGroup title="Help">
					<MenuItem>Support</MenuItem>
				</MenuGroup>
			</MenuList>
		</Menu>
	)
}

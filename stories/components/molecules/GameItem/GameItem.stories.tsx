import { Meta } from "@storybook/react";
import GameItem, { gameItemProps } from "../../../../components/molecules/GameItem";

export default {
	title: "Components/Molecules/GameItem",
	component: GameItem,
} as Meta;

const Template = (args: gameItemProps) => <GameItem {...args} />

export const Default = Template.bind({});
Default.args = {
	title: "Clash of Clan",
	category: "Mobile",
	thumbnail: '/img/Thumbnail-1.png'
};
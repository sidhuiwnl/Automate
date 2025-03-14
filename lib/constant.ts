import Home from "@/components/icons/home"
import Workflows from "@/components/icons/Workflows";
import Settings from "@/components/icons/settings";
import Category from "@/components/icons/category";
import Payment from "@/components/icons/payment";
import Templates from "@/components/icons/template";
import Logs from "@/components/icons/logs";
import {Connection} from "@/lib/types";


export const menuOptions = [
    { name: 'Dashboard', Component: Home, href: '/dashboard' },
    { name: 'Workflows', Component: Workflows, href: '/workflows' },
    { name: 'Settings', Component: Settings, href: '/settings' },
    { name: 'Connections', Component: Category, href: '/connections' },
    { name: 'Billing', Component: Payment, href: '/billing' },
    { name: 'Templates', Component: Templates, href: '/templates' },
    { name: 'Logs', Component: Logs, href: '/logs' },
]


export const CONNECTIONS: Connection[] = [
    {
        title: 'Google Drive',
        description: 'Connect your google drive to listen to folder changes',
        image: '/googleDrive.png',
        connectionKey: 'googleNode',
        alwaysTrue: true,
    },
    {
        title: 'Discord',
        description: 'Connect your discord to send notification and messages',
        image: '/discord.png',
        connectionKey: 'discordNode',
        accessTokenKey: 'webhookURL',
    },
    {
        title: 'Notion',
        description: 'Create entries in your notion dashboard and automate tasks.',
        image: '/notion.png',
        connectionKey: 'notionNode',
        accessTokenKey: 'accessToken',
    },
    {
        title: 'Slack',
        description:
            'Use slack to send notifications to team members through your own custom bot.',
        image: '/slack.png',
        connectionKey: 'slackNode',
        accessTokenKey: 'slackAccessToken',
        slackSpecial: true,
    },
]
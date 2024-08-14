import { Task } from "../interfaces/task.type";
import icons from "./icons";

export const nationalities = [
  { id: "1", title: "European", color: "blue" },
  { id: "2", title: "Asian", color: "pink" },
  { id: "3", title: "Latino", color: "blue" },
  { id: "4", title: "Arab", color: "yellow" },
  { id: "5", title: "African American", color: "green" },
  { id: "6", title: "Caucasian", color: "white" },
];
export const navItems = [
  { id: "1", title: "Fight", icon: icons.fightIcon, path: '/fight' },
  { id: "2", title: "Training", icon: icons.trainingIcon, path: '/training' },
  { id: "3", title: "", icon: icons.mainIcon, path: '/' },
  { id: "4", title: "Club", icon: icons.clubIcon, path: '/club' },
  { id: "5", title: "Earn", icon: icons.earnIcon, path: '/earn' }
];
export const taskItems: Task[] = [
  { id: "1",
    title: "Join our Telegram channel",
    description: "Subscribe",
    currency: 'silver',
    reward: '300',
    context: 'telegram',
    leftColor: '#2D3339',
    rightColor: '#55C5FF80'
  },
  { id: "2",
    title: "Join our Youtube channel",
    description: "Subscribe",
    currency: 'silver',
    reward: '300',
    context: 'youtube',
    leftColor: '#2D3339',
    rightColor: '#FE614B80'
  }
];
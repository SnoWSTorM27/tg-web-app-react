export interface Task  {
  id?: string,
  title: string,
  description: string,
  currency: 'silver' | 'gold' | 'exp',
  reward: string | number,
  context: 'youtube' | 'calendar' | 'telegram',
  leftColor?: string,
  rightColor?: string
};
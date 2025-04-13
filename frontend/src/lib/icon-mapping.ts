import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

// Default icon to use if the specified one doesn't exist
export const defaultIcon = LucideIcons.Stethoscope;

// Helper function to get icon component by name
export function getIconByName(name: string): LucideIcon {
  // Convert kebab-case to PascalCase if needed (e.g., "alarm-clock" to "AlarmClock")
  const pascalCaseName = name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  // Check if the icon exists in Lucide
  const IconComponent = LucideIcons[pascalCaseName as keyof typeof LucideIcons] as LucideIcon;
  
  return IconComponent || defaultIcon;
} 
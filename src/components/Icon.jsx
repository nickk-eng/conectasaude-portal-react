import {
  HeartPulse,
  Brain,
  Grid2X2,
  ChartNoAxesCombined,
  Users,
  ShieldCheck,
  LockKeyhole,
} from "lucide-react";
const icons = {
  heart: HeartPulse,
  quiz: Brain,
  game: Grid2X2,
  chart: ChartNoAxesCombined,
  users: Users,
  shield: ShieldCheck,
  lock: LockKeyhole,
};
export default function Icon({ name, ...props }) {
  const Component = icons[name] || HeartPulse;
  return (
    <Component aria-hidden="true" size={24} strokeWidth={1.7} {...props} />
  );
}

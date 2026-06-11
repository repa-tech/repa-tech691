import type { IconType } from "react-icons";
import {
  MdAnalytics,
  MdArrowForward,
  MdBatteryChargingFull,
  MdBolt,
  MdCalendarMonth,
  MdCalendarToday,
  MdCheckCircle,
  MdCall,
  MdChevronLeft,
  MdChevronRight,
  MdClose,
  MdDirectionsBus,
  MdEco,
  MdElectricScooter,
  MdEmail,
  MdEngineering,
  MdExpandMore,
  MdFactCheck,
  MdLocationOn,
  MdLock,
  MdMenu,
  MdOpenInNew,
  MdPedalBike,
  MdPayments,
  MdPhone,
  MdPrecisionManufacturing,
  MdRocketLaunch,
  MdSchedule,
  MdSearch,
  MdSecurity,
  MdShare,
  MdShield,
  MdSmartphone,
  MdSpeed,
  MdStar,
  MdTagFaces,
  MdTimer,
  MdVerified,
  MdVerifiedUser,
} from "react-icons/md";
import { SiSnapchat } from "react-icons/si";

const ICONS: Record<string, IconType> = {
  bolt: MdBolt,
  electric_scooter: MdElectricScooter,
  smartphone: MdSmartphone,
  battery_charging_full: MdBatteryChargingFull,
  pedal_bike: MdPedalBike,
  arrow_forward: MdArrowForward,
  menu: MdMenu,
  close: MdClose,
  expand_more: MdExpandMore,
  location_on: MdLocationOn,
  directions_bus: MdDirectionsBus,
  schedule: MdSchedule,
  shield_lock: MdLock,
  star: MdStar,
  open_in_new: MdOpenInNew,
  mail: MdEmail,
  call: MdCall,
  phone: MdPhone,
  share: MdShare,
  snapchat: SiSnapchat,
  face_nod: MdTagFaces,
  analytics: MdAnalytics,
  engineering: MdEngineering,
  precision_manufacturing: MdPrecisionManufacturing,
  search_check: MdFactCheck,
  speed: MdSpeed,
  verified_user: MdVerifiedUser,
  check_circle: MdCheckCircle,
  verified: MdVerified,
  timer: MdTimer,
  security: MdSecurity,
  shield: MdShield,
  eco: MdEco,
  rocket_launch: MdRocketLaunch,
  payments: MdPayments,
  calendar_month: MdCalendarMonth,
  calendar_today: MdCalendarToday,
  chevron_left: MdChevronLeft,
  chevron_right: MdChevronRight,
  search: MdSearch,
};

type MaterialIconProps = {
  name: string;
  className?: string;
  filled?: boolean;
  size?: number;
};

export function MaterialIcon({
  name,
  className = "",
  filled = false,
  size = 24,
}: MaterialIconProps) {
  const Icon = ICONS[name];
  if (!Icon) return null;

  return (
    <Icon
      size={size}
      aria-hidden
      className={`shrink-0 ${filled ? "fill-current" : ""} ${className}`.trim()}
    />
  );
}

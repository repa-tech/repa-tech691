export const SHOP_HOURS = {
  openHour: 10,
  closeHour: 19,
  slotDurationMinutes: 30,
  closedDays: [0] as number[],
  bookingHorizonDays: 21,
  minLeadTimeHours: 2,
} as const;

export const APPOINTMENT_SERVICES = [
  "Réparation trottinette électrique",
  "Réparation smartphone",
  "Devis batterie trottinette",
  "Diagnostic",
  "Autre prestation",
] as const;

export type AppointmentService = (typeof APPOINTMENT_SERVICES)[number];

export type TimeSlot = {
  value: string;
  label: string;
  available: boolean;
};

function startOfDay(date: Date): Date {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
}

export function isShopClosed(date: Date): boolean {
  return SHOP_HOURS.closedDays.includes(date.getDay());
}

export function getBookableDates(now = new Date()): Date[] {
  const dates: Date[] = [];
  const today = startOfDay(now);
  let offset = 0;

  while (dates.length < SHOP_HOURS.bookingHorizonDays && offset < 60) {
    const date = new Date(today);
    date.setDate(today.getDate() + offset);
    if (!isShopClosed(date)) {
      dates.push(date);
    }
    offset += 1;
  }

  return dates;
}

export function getTimeSlotsForDate(date: Date, now = new Date()): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const dayStart = startOfDay(date);
  const minBookTime = new Date(
    now.getTime() + SHOP_HOURS.minLeadTimeHours * 60 * 60 * 1000,
  );

  let minutes = SHOP_HOURS.openHour * 60;
  const endMinutes = SHOP_HOURS.closeHour * 60;

  while (minutes + SHOP_HOURS.slotDurationMinutes <= endMinutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const value = `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
    const slotStart = new Date(dayStart);
    slotStart.setHours(hours, mins, 0, 0);

    slots.push({
      value,
      label: `${hours}h${mins === 0 ? "00" : mins}`,
      available: slotStart >= minBookTime,
    });

    minutes += SHOP_HOURS.slotDurationMinutes;
  }

  return slots;
}

export function formatAppointmentDate(date: Date): string {
  const formatted = new Intl.DateTimeFormat("fr-FR", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(date);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export function formatAppointmentDateLong(date: Date): string {
  const formatted = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export function toDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function fromDateKey(key: string): Date {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

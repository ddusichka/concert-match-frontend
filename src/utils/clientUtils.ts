import { Match } from "@/types";
import { format, parseISO } from "date-fns";

export function formatDateTime(match: Match) {
  return format(
    parseISO(`${match.concert.local_date}T${match.concert.local_time}`),
    "EEEE, MMMM d, yyyy 'at' h:mm a"
  );
}

export function formatDate(stringDate: string) {
  return format(parseISO(`${stringDate}`), "MMMM d, yyyy");
}

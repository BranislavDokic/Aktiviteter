import { DateArg, format, formatDistanceToNow } from "date-fns";
import { z } from "zod";

export function formatDate(date: DateArg<Date>) {
    return format(date, 'dd MMM yyyy h:mm a')
}

export function timeAgo(date: DateArg<Date>) {
    const d = new Date(date);
    if (isNaN(d.getTime())) return 'Invalid date';
    return formatDistanceToNow(d) + ' ago';
}

export const requiredString = (fieldName: string) => z
    .string({required_error: `${fieldName} is required`})
    .min(1, {message: `${fieldName} is required`})

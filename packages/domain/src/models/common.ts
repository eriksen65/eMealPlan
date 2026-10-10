/**
 * Shared primitive types used across the domain layer.
 */

/** Opaque identifier type. Kept as a plain string so any id generation/storage strategy can be swapped later. */
export type Id = string;

/** ISO date string, e.g. "2026-03-16" (no time component). */
export type IsoDate = string;

/** 24-hour clock time string, e.g. "18:30". */
export type ClockTime = string;

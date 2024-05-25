// src/stores.js
import { writable } from "svelte/store";

// Define a writable store to keep track of the 'show' state
export const show = writable(false);

export const hide = writable(true);

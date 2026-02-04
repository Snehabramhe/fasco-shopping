// src/data/checkoutSchema.js
import { z } from "zod";

export const checkoutSchema = z.object({
  // Contact
  email: z.string().min(1, "Email is required").email("Enter a valid email"),

  // Delivery
  country: z.string().min(1, "Country/Region is required"),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  postalCode: z.string().min(3, "Postal code is required").max(12, "Postal code is too long"),
  saveDeliveryInfo: z.boolean().optional(),

  // Payment
  paymentMethod: z.enum(["card"], { required_error: "Payment method is required" }),
  cardNumber: z
    .string()
    .min(12, "Card number is too short")
    .max(19, "Card number is too long")
    .regex(/^\d+$/, "Card number must be digits only"),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry must be MM/YY"),
  cvc: z
    .string()
    .min(3, "CVC must be 3–4 digits")
    .max(4, "CVC must be 3–4 digits")
    .regex(/^\d+$/, "CVC must be digits only"),
  cardHolderName: z.string().min(2, "Card holder name is required"),
  savePaymentInfo: z.boolean().optional(),

  // Discount (optional)
  discountCode: z.string().optional(),
});

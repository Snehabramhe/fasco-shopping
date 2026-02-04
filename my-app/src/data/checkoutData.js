import product6 from "@/assets/images/product6.png";

export const CHECKOUT_DATA = {
    pageTitle: "FASCO Demo Checkout",
  
    contact: {
      title: "Contact",
      accountText: "Have an account?",
      accountLinkText: "Create Account",
      accountLinkTo: "/auth/signup",
      emailPlaceholder: "Email Address",
    },
  
    delivery: {
      title: "Delivery",
      countryPlaceholder: "Country / Region",
      countries: [
        { label: "India", value: "IN" },
        { label: "United States", value: "US" },
        { label: "United Kingdom", value: "GB" },
        { label: "Canada", value: "CA" },
      ],
      placeholders: {
        firstName: "First Name",
        lastName: "Last Name",
        address: "Address",
        city: "City",
        postalCode: "Postal Code",
      },
      saveInfoText: "Save This Info For Future",
    },
  
    payment: {
      title: "Payment",
      methods: [{ label: "Credit Card", value: "card" }],
      placeholders: {
        cardNumber: "Card Number",
        expiry: "Expiration Date (MM/YY)",
        cvc: "Security Code",
        cardHolderName: "Card Holder Name",
      },
      saveInfoText: "Save This Info For Future",
      payBtnText: "Pay Now",
      footerText: "Copyright © 2022 FASCO. All Rights Reserved.",
    },
  
    summary: {
      discountPlaceholder: "Discount code",
      applyBtnText: "Apply",
      labels: {
        subtotal: "Subtotal",
        shipping: "Shipping",
        total: "Total",
      },
    },
  
    // ✅ you can replace this with cart context later
    demoSummaryItem: {
      title: "Mini Dress With Ruffled Straps",
      variant: "Red",
      price: 100,
      image: product6,
    },
  
    demoShipping: 40,
  
    defaultValues: {
      email: "",
      country: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      postalCode: "",
      saveDeliveryInfo: false,
  
      paymentMethod: "card",
      cardNumber: "",
      expiry: "",
      cvc: "",
      cardHolderName: "",
      savePaymentInfo: false,
  
      discountCode: "",
    },
  };
  
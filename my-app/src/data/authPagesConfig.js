import forgetPassword  from "@/assets/images/forget-password.png" ;
import signUp  from "@/assets/images/sign-up.png" ;


export const AUTH_PAGES = {
    signin: {
      key: "signin",
      heroImage: forgetPassword, // <-- replace with import if you prefer
      heading: "Sign In To FASCO",
      showSocial: true,
      fields: [
        { name: "email", label: "Email", type: "email" },
        { name: "password", label: "Password", type: "password" },
      ],
      primaryButton: { text: "Sign In" },
      secondaryButton: { text: "Register Now", variant: "outline-blue" },
      bottomRightLink: { text: "Forget Password?", to: "/forgot-password" },
      bottomCenterLink: null,
    },
  
    signup: {
      key: "signup",
      heroImage: signUp,
      heading: "Create Account",
      showSocial: true,
      fields: [
        { name: "firstName", label: "First Name", type: "text", col: 2 },
        { name: "lastName", label: "Last Name", type: "text", col: 2 },
        { name: "email", label: "Email Address", type: "email", col: 2 },
        { name: "phone", label: "Phone Number", type: "text", col: 2 },
        { name: "password", label: "Password", type: "password", col: 2 },
        { name: "confirmPassword", label: "Confirm Password", type: "password", col: 2 },
      ],
      primaryButton: { text: "Create Account" },
      secondaryButton: null,
      bottomRightLink: null,
      bottomCenterLink: { text: "Already have an account? ", linkText: "Login", to: "/sign-in" },
    },
  
    forgot: {
      key: "forgot",
      heroImage: forgetPassword,
      heading: "Forget Password",
      showSocial: false,
      fields: [
        { name: "firstName", label: "First Name", type: "text", col: 2 },
        { name: "lastName", label: "Last Name", type: "text", col: 2 },
        { name: "email", label: "Email Address", type: "email", col: 2 },
        { name: "phone", label: "Phone Number", type: "text", col: 2 },
      ],
      primaryButton: { text: "Send Confirmation Code" },
      secondaryButton: null,
      bottomRightLink: null,
      bottomCenterLink: { text: "Already have an account? ", linkText: "Login", to: "/sign-in" },
    },
  
    confirm: {
      key: "confirm",
      heroImage: forgetPassword,
      heading: "Enter The Confirmation Code",
      showSocial: false,
      fields: [{ name: "code", label: "Confirmation Code", type: "text" }],
      primaryButton: { text: "Recover Account" },
      secondaryButton: null,
      bottomRightLink: null,
      bottomCenterLink: { text: "Didn't receive Confirmation Code? ", linkText: "Resend Now", to: "/confirm-code" },
    },
  
    reset: {
      key: "reset",
      heroImage: forgetPassword,
      heading: "Enter Your New Password",
      showSocial: false,
      fields: [
        { name: "newPassword", label: "New Password", type: "password" },
        { name: "confirmNewPassword", label: "Confirmation Password", type: "password" },
      ],
      primaryButton: { text: "Submit", variant: "blue" },
      secondaryButton: null,
      bottomRightLink: null,
      bottomCenterLink: null,
    },
  };
  
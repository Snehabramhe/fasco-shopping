import Container from "./Container";

export default function Footer() {
  return (
    // <footer className="bg-surface border-t border-border mt-section">
    //   <Container>
    //     {/* Top Footer */}
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-16">

    //       {/* Brand */}
    //       <div>
    //         <h2 className="heading-3 mb-4">FASCO</h2>
            
    //       </div>

    //       {/* Links */}
    //       <div>
    //         {/* <h3 className="body-md font-medium mb-4">Company</h3> */}
    //         <ul className="space-y-2 body-sm text-secondary">
    //           <li><a href="#">Support Center</a></li>
    //           <li><a href="#">Careers</a></li>
    //           <li><a href="#">Blog</a></li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h3 className="body-md font-medium mb-4">Support</h3>
    //         <ul className="space-y-2 body-sm text-secondary">
    //           <li><a href="#">Contact</a></li>
    //           <li><a href="#">FAQs</a></li>
    //           <li><a href="#">Shipping</a></li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h3 className="body-md font-medium mb-4">Legal</h3>
    //         <ul className="space-y-2 body-sm text-secondary">
    //           <li><a href="#">Privacy Policy</a></li>
    //           <li><a href="#">Terms & Conditions</a></li>
    //         </ul>
    //       </div>
    //     </div>

    //     {/* Bottom Footer */}
    //     <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between items-center gap-4">
    //       <p className="caption text-muted">
    //         © {new Date().getFullYear()} FASCO. All rights reserved.
    //       </p>

    //       <div className="flex gap-6 caption">
    //         <a href="#">Instagram</a>
    //         <a href="#">Facebook</a>
    //         <a href="#">Twitter</a>
    //       </div>
    //     </div>
    //   </Container>
    // </footer>



<>

    <footer class="bg-white border-t">
      <Container>
  <div class="max-w-7xl mx-auto px-6 py-10">

    <div class="flex flex-col md:flex-row justify-between items-center gap-6">
      

      <h2 class="text-2xl font-serif tracking-wide">
        FASCO
      </h2>


      <ul class="flex flex-wrap gap-6 text-sm text-gray-600">
        <li><a href="#" class="hover:text-black">Support Center</a></li>
        <li><a href="#" class="hover:text-black">Invoicing</a></li>
        <li><a href="#" class="hover:text-black">Contract</a></li>
        <li><a href="#" class="hover:text-black">Careers</a></li>
        <li><a href="#" class="hover:text-black">Blog</a></li>
        <li><a href="#" class="hover:text-black">FAQs</a></li>
      </ul>
    </div>


    {/* <div class="my-6 border-t"></div> */}


    <p class="text-center text-xs text-gray-500 mt-2">
      Copyright © 2022 Xpro. All Rights Reserved.
    </p>
  </div>
  </Container>
</footer>


{/* <div class="h-24 bg-linear-to-b from-neutral-900 to-black"></div> */}

</>
  );
}

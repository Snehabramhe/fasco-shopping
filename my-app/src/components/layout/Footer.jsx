import Container from "./Container";

export default function Footer() {
  return (


    <footer class="bg-white border-t">
      <Container>
        <div class="max-w-7xl mx-auto px-6 pt-8.5 pb-6">

          <div class="flex flex-col md:flex-row justify-between items-center gap-6">


            <h2 class="heading-3 leading-none">
              FASCO
            </h2>


            <ul class="flex flex-wrap gap-6 body-sm-auto">
              <li><a href="#" class="hover:text-black">Support Center</a></li>
              <li><a href="#" class="hover:text-black">Invoicing</a></li>
              <li><a href="#" class="hover:text-black">Contract</a></li>
              <li><a href="#" class="hover:text-black">Careers</a></li>
              <li><a href="#" class="hover:text-black">Blog</a></li>
              <li><a href="#" class="hover:text-black">FAQs</a></li>
            </ul>
          </div>


          {/* <div class="my-6 border-t"></div> */}


          <p class="text-center text-xs text-gray-500 mt-13.5">
            Copyright © 2022 Xpro. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>


  );
}

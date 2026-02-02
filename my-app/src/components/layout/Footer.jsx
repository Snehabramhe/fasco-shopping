import Container from "./Container";

export default function Footer() {
  return (


    <footer className="bg-white border-t">
      <Container>
        <div className="max-w-7xl mx-auto px-6 pt-8.5 pb-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">


            <h2 className="heading-3 leading-none">
              FASCO
            </h2>


            <ul className="flex flex-wrap gap-6 body-sm-auto">
              <li><a href="#" className="hover:text-black">Support Center</a></li>
              <li><a href="#" className="hover:text-black">Invoicing</a></li>
              <li><a href="#" className="hover:text-black">Contract</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Blog</a></li>
              <li><a href="#" className="hover:text-black">FAQs</a></li>
            </ul>
          </div>


          {/* <div className="my-6 border-t"></div> */}


          <p className="text-center text-xs text-gray-500 mt-13.5">
            Copyright © 2022 Xpro. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>


  );
}

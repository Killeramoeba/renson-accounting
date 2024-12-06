import ServiceSection from "./components/ServiceSection";

export default function Home() {
  return (
    <div className="font-roboto">
      <main className="">
        <div className=" flex flex-col items-center justify-center gap-4 py-36 px-4 text-center bg-hero bg-cover bg-center text-white bg-black/50 bg-blend-multiply lg:bg-fixed">
          <h1 className="text-4xl font-bold font-roboto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            RENSON ACCOUNTING SOLUTIONS, LLC
          </h1>

          <p className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-lg font-bold">
            Life in the Tax Lane
          </p>
          <div className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] h-1 w-32 bg-red-600 my-6"></div>

          <a
            className="text-lg font-bold bg-black text-white py-2 px-8 tracking-widest hover:bg-red-600 transition-colors duration-300 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-lg"
            href="https://form.jotform.com/243405604271045"
          >
            Email Us
          </a>
          <p className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-lg font-bold">
            Contact us for a Free Consultation
          </p>
        </div>
        {/* #here */}
        <ServiceSection
          title="Tax Preparation"
          description="Are you looking for someone that can tackle your tax return needs? I have over 10 years experience dealing with Individual returns, LLC returns, Corporate returns, Partnership returns, Amended returns, Payroll returns and more."
          imageSrc="/Tax-prep.jpg"
          imageAlt="Tax Preparation"
        />
        <ServiceSection
          reversed
          dark
          title="Full Service Business Solutions"
          description={
            <>
              Are you spending too much time dealing with the financial aspects
              of your business? With 10 years of experience in{" "}
              <span className="font-bold">
                bookkeeping, payroll, sales tax, and income tax
              </span>
              , let me take care of all the numbers so that you can spend more
              time running your business.
            </>
          }
          imageSrc="/full-service.jpg"
          imageAlt="3d letters: accounting, taxes, personal, financial statements, small business, bookkeeping, payroll"
        />
        <ServiceSection
          title="Tax Planning & Consulting"
          description="We analyze your business to find all of the legal tax loopholes that can save you tens of thousands of dollars per year in taxes!"
          imageSrc="/tax-planning.jpg"
          imageAlt="Tax Preparation"
        />

        <div className="flex flex-col items-center justify-center gap-4 py-12 px-4 text-center bg-hero bg-cover bg-center text-white bg-black/50 bg-blend-multiply lg:bg-fixed">
          <h1 className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-4xl font-bold font-roboto uppercase">
            Contact Us now
          </h1>

          <p className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-lg font-bold">
            We will get it done.
          </p>
          <div className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] h-1 w-32 bg-red-600 my-6"></div>

          <a
            className="text-lg font-bold bg-black text-white py-2 px-8 tracking-widest hover:bg-red-600 transition-colors duration-300 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-lg"
            href="https://form.jotform.com/243405604271045"
          >
            Email Us
          </a>
          <p className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-lg font-bold">
            Call us at (954) 439-1758
          </p>
        </div>
        <div className="container mx-auto flex gap-8 flex-col">
          <p className="text-sm text-center p-4">
            Image Source:{" "}
            <a className="text-red-600" href="http://www.wocintechchat.com/">
              WOCinTechChat
            </a>
            ,{" "}
            <a
              className="text-red-600"
              href="https://www.iconfinder.com/iconsets/elpis"
            >
              Icon Finder
            </a>
          </p>
          <div className="flex flex-col md:flex-row text-center justify-between p-4">
            <p>Trevor Renson, Enrolled Agent</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}

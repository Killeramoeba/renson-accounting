import ServiceSection from "./components/ServiceSection";
import BackgroundSection from "./components/BackgroundSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-roboto">
      <main className="">
        <BackgroundSection
          padding="py-36"
          heading="RENSON ACCOUNTING SOLUTIONS, LLC"
          subheading="Life in the Tax Lane"
          cta="Contact us for a Free Consultation"
        />
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
        <BackgroundSection
          padding="py-12"
          heading="Contact Us now"
          subheading="We will get it done."
          cta="Call us at (954) 439-1758"
        />
      </main>
      <Footer />
    </div>
  );
}

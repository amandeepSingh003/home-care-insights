"use client";

import React from "react";
import Breadcrumbs from "../components/BreadCrumbs";
import Button from "../components/Button";
import JobCard from "../components/JobCard";
import { Card, CustomCard } from "../components/Card";
import JobMarketAnalysis from "../components/JobMarketAnalysis";
import image from "../assets/images/image.png";
import CompanyJobStats from "../components/CompanyJobStats";
import FaqAccordion from "../components/Faq";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Registered nurse Jobs", href: "/registered-nurse-jobs" },
  ];
  const pieData = [
    { name: "Full-Time", value: 900, color: "#5BEDF0" },
    { name: "Part-Time", value: 100, color: "#4CC5C7" },
    { name: "Other", value: 100, color: "#3C9C9E" },
    { name: "Contract", value: 100, color: "#1D4C4D" },
  ];

  const barData = [
    { name: "$25", value: 25, color: "#5BEDF0" },
    { name: "$30", value: 30, color: "#4CC5C7" },
    { name: "$35", value: 35, color: "#4CC5C7" },
    { name: "$50", value: 50, color: "#3C9C9E" },
  ];
  const faqItems = [
    {
      question: "How long does it take to fly from New York to Paris?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      question: "When are the cheapest days to fly from New York to Paris?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      question:
        "Which airlines provide the cheapest flights from New York to Paris?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      question: "When are direct flights from New York to Paris?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      question: "Which airlines have direct flights from New York to Paris?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  return (
    <>
      <section className="p-6 md:p-2 md:px-8">
        <div className="max-w-7xl md:mx-auto">
          <div className="mb-5">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <div className="flex justify-between">
            <div className="text-2xl font-normal">
              <h2>Registered Nurse Jobs</h2>
              <p className="text-base	font-medium mt-4">
                2450 Registered Nurse Jobs within 25 miles of Winter Park, FL
                <span
                  className="ml-2 text-teal underline underline-offset-1 cursor-pointer"
                  onClick={() => router.back()}
                >
                  Change location
                </span>
              </p>
            </div>
            {/* <div className="hidden md:block">
              <Button label="Open job and company filters" />
            </div> */}
          </div>
        </div>
      </section>
      <section className="p-6 md:p-2 mt-2 mb-6 md:px-8">
        <div className="max-w-7xl md:mx-auto">
          <div>
            <JobCard
              jobTitle="Registered Nurse - Home Health ($10,000 Sign On Bonus)"
              img={image}
              jobType="Full-time"
              salaryRange="$89,000 to $98,000"
              location="WINTER PARK, FL"
              jobSummary="Job Summary: Seeking a Licensed Pratical Nurse or Registered Nurse licensed in Florida, CPR certified, with long-term care experience prefered. Responsaibilities include managing admissions, documentation, emergency support and staff coordination. Benefits: shift differential."
              buttonLabel="Apply Now →"
              companyName="Visiting Angels"
              postingDate="Posted Yesterday"
              rating={2}
            />
            <JobCard
              jobTitle="Registered Nurse - Home Health ($10,000 Sign On Bonus)"
              img={image}
              jobType="Full-time"
              salaryRange="$89,000 to $98,000"
              location="WINTER PARK, FL"
              jobSummary="Job Summary: Seeking a Licensed Pratical Nurse or Registered Nurse licensed in Florida, CPR certified, with long-term care experience prefered. Responsaibilities include managing admissions, documentation, emergency support and staff coordination. Benefits: shift differential."
              buttonLabel="Apply Now →"
              companyName="Visiting Angels"
              postingDate="Posted Yesterday"
              rating={2}
            />
            <JobCard
              jobTitle="Registered Nurse - Home Health ($10,000 Sign On Bonus)"
              img={image}
              jobType="Full-time"
              salaryRange="$89,000 to $98,000"
              location="WINTER PARK, FL"
              jobSummary="Job Summary: Seeking a Licensed Pratical Nurse or Registered Nurse licensed in Florida, CPR certified, with long-term care experience prefered. Responsaibilities include managing admissions, documentation, emergency support and staff coordination. Benefits: shift differential."
              buttonLabel="Apply Now →"
              companyName="Visiting Angels"
              postingDate="Posted Yesterday"
              rating={2}
            />
            <JobCard
              jobTitle="Registered Nurse - Home Health ($10,000 Sign On Bonus)"
              img={image}
              jobType="Full-time"
              salaryRange="$89,000 to $98,000"
              location="WINTER PARK, FL"
              jobSummary="Job Summary: Seeking a Licensed Pratical Nurse or Registered Nurse licensed in Florida, CPR certified, with long-term care experience prefered. Responsaibilities include managing admissions, documentation, emergency support and staff coordination. Benefits: shift differential."
              buttonLabel="Apply Now →"
              companyName="Visiting Angels"
              postingDate="Posted Yesterday"
              rating={2}
            />
            <JobCard
              jobTitle="Registered Nurse - Home Health ($10,000 Sign On Bonus)"
              img={image}
              jobType="Full-time"
              salaryRange="$89,000 to $98,000"
              location="WINTER PARK, FL"
              jobSummary="Job Summary: Seeking a Licensed Pratical Nurse or Registered Nurse licensed in Florida, CPR certified, with long-term care experience prefered. Responsaibilities include managing admissions, documentation, emergency support and staff coordination. Benefits: shift differential."
              buttonLabel="Apply Now →"
              companyName="Visiting Angels"
              postingDate="Posted Yesterday"
              rating={2}
            />
          </div>
          <div className="flex justify-center">
            <Button label="Load more jobs registered nurse jobs in Winter Park, FL" />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 p-4 md:p-8 space-y-5">
        <div className="m-4 md:m-12 md:mt-12  max-w-7xl md:mx-auto">
          <h2 className="text-2xl font-normal mb-8">
            Interesting Stats on Registered Nurse Jobs in Winter Park, FL
            <span className="text-teal ml-1">Winter Park, FL</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
            <Card totalJobs={601377} percentageChange={6.47} date="5/1/2024" />
            <Card totalJobs={601377} percentageChange={6.47} date="5/1/2024" />
          </div>
          <div className="grid grid-rows-1 grid-flow-col gap-4 mt-10 hidden md:grid">
            <div className="col">
              <h1 className="text-2xl font-normal mb-8">
                Top 10 Cities with Most New Jobs
              </h1>
              <CompanyJobStats
                companyName="Visiting Angels"
                newJobs={8000}
                percentageChange={6.47}
              />
              <CompanyJobStats
                companyName="Visiting Angels"
                src=""
                newJobs={8000}
                percentageChange={6.47}
              />
              <CompanyJobStats
                companyName="Visiting Angels"
                src=""
                newJobs={8000}
                percentageChange={6.47}
              />
            </div>
            <div className="col">
              <h1 className="text-2xl font-normal mb-8">
                Top 10 Core Title Most New Jobs
              </h1>
              <CompanyJobStats
                companyName="Visiting Angels"
                src=""
                newJobs={8000}
                percentageChange={6.47}
              />
              <CompanyJobStats
                companyName="Visiting Angels"
                src=""
                newJobs={8000}
                percentageChange={6.47}
              />
              <CompanyJobStats
                companyName="Visiting Angels"
                src=""
                newJobs={8000}
                percentageChange={6.47}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 md:p-8 space-y-5 ">
        <div className="m-4 md:m-12 md:mt-12  max-w-7xl md:mx-auto  p-4 md:p-10 MapWrapper ">
          <h2 className="text-2xl font-normal mb-8">
            Registered Nurse Remote Jobs Market Analysis
          </h2>
          <JobMarketAnalysis pieData={pieData} barData={barData} />
        </div>
      </section>
      <section className="p-4 md:p-8 space-y-5">
        <div className="m-4 md:m-12 md:mt-12  max-w-7xl md:mx-auto">
          <h2 className="text-2xl font-normal mb-8">Locations near by</h2>
          <div className="grid grid-rows-1 grid-col-1 md:grid-col-3 grid-flow-col gap-4 mt-10 PopularJobwrapper">
            <div className="hidden md:block">
              <h4>Core Job Title Jobs in City, State</h4>
              <h4>Core Job Title Jobs in City, State</h4>
              <h4>Core Job Title Jobs in City, State</h4>
              <h4>Core Job Title Jobs in City, State</h4>
              <h4>Core Job Title Jobs in City, State</h4>
              <h4>Core Job Title Jobs in City, State</h4>
            </div>
            <div className="hidden md:block">
              <h4>Core Job Title Jobs in City, State</h4>
              <h4>Core Job Title Jobs in City, State</h4>
              <h4>Core Job Title Jobs in City, State</h4>
              <h4>Core Job Title Jobs in City, State</h4>
              <h4>Core Job Title Jobs in City, State</h4>
              <h4>Core Job Title Jobs in City, State</h4>
            </div>
            <div>
              <h4>Core Job Title Jobs in City, State</h4>
              <h4>Core Job Title Jobs in City, State</h4>
              <h4>Core Job Title Jobs in City, State</h4>
              <h4>Core Job Title Jobs in City, State</h4>
              <h4>Core Job Title Jobs in City, State</h4>
              <h4>Core Job Title Jobs in City, State</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 p-4 md:p-8 space-y-5">
        <div className="m-4 md:m-12 md:mt-12  max-w-7xl md:mx-auto">
          <h2 className="text-2xl font-normal mb-8">
            Frequently asked questions about flying from New York to Paris
          </h2>
          <div>
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}

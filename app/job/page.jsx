"use client";

import React, { useEffect, useState } from "react";
import Breadcrumbs from "../components/BreadCrumbs";
import Button from "../components/Button";
import JobCard from "../components/JobCard";
import { Card, CustomCard } from "../components/Card";
import JobMarketAnalysis from "../components/JobMarketAnalysis";
import image from "../assets/images/image.png";
import CompanyJobStats from "../components/CompanyJobStats";
import FaqAccordion from "../components/Faq";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react'
import { getFAQs } from "../../redux/actions/otherActions";
import { jobDetails, jobLocationsNearby } from "../../redux/actions/jobActions";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

function JobPageContent() {
  const dispatch = useDispatch();

  const router = useRouter();
  const searchParams = useSearchParams();

  const jobTitle = searchParams.get("jobTitle");
  const jobLocation = searchParams.get("jobLocation");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  let faqData = useSelector((state) => state.otherReducer.faqData);
  let jobDetailsData = useSelector((state) => state.job.jobDetails);
  let jobLocationsNearbyData = useSelector((state) => state.job.jobLocationsNearby);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: `${jobTitle || "N/a"} Jobs`,
      href: `/jobs?jobTitle=${jobTitle || "N/a"}&jobLocation=${jobLocation || "N/a"}`,
    },
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

  useEffect(() => {
    dispatch(getFAQs());
    dispatch(jobDetails({ jobTitle, page }));
    // dispatch(jobLocationsNearby({ jobTitle }));
  }, [dispatch, jobTitle, page]);

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

  useEffect(() => {
    if (jobDetailsData?.pagination) {
      const { totalItems, totalPageItems } = jobDetailsData.pagination;
      setTotalPages(Math.ceil(totalItems / totalPageItems));
    }
  }, [jobDetailsData]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <section className="p-6 md:p-2 md:px-8">
        <div className="max-w-7xl md:mx-auto">
          <div className="mb-5">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <div className="flex justify-between">
            <div className="text-2xl font-normal">
              <h2>{jobTitle || "N/a"} Jobs</h2>
              <p className="text-base	font-medium mt-4">
                {jobDetailsData?.pagination?.totalItems || 0} {jobTitle} Jobs within 25 miles of {jobLocation || "N/a"}
                {/* 2450 Registered Nurse Jobs within 25 miles of Winter Park, FL */}
                <span
                  className="ml-2 text-teal underline underline-offset-1 cursor-pointer"
                >
                  <Link href="/">
                    Change location
                  </Link>
                </span>
              </p>
            </div>
            {/* <div className="hidden md:block">
              <Button label="Open job and company filters" />
            </div> */}
          </div>
        </div>
      </section>
      {jobDetailsData?.items && jobDetailsData?.items.length > 0 && (
        <section className="p-6 md:p-2 mt-2 mb-6 md:px-8">
          <div className="max-w-7xl md:mx-auto">
            <div>
              {jobDetailsData?.items.map((item, index) => {
                return (
                  <JobCard
                    key={index}
                    jobTitle={item.title || "N/a"}
                    img={image}
                    jobType={item.jobType || "N/a"}
                    salaryRange={item.estimatedSalary}
                    // salaryRange="$89,000 to $98,000"
                    location={item.location || "N/a"}
                    jobSummary={item.jobSummary || "N/a"}
                    buttonLabel="Apply Now →"
                    buttonLink={item.jobUrl}
                    companyName={item.companyName || "N/a"}
                    postingDate={item.publishedAt}
                    rating={item.rating}
                  />
                )
              })}
            </div>
            {page < totalPages && (
              <div className="flex justify-center">
                <Button label={`Load more ${jobTitle || "N/a"} jobs in ${jobLocation || "N/a"}`} onClick={handleLoadMore} />
              </div>
            )}
          </div>
        </section>
      )}
      <section className="bg-gray-50 p-4 md:p-8 space-y-5">
        <div className="m-4 md:m-12 md:mt-12  max-w-7xl md:mx-auto">
          <h2 className="text-2xl font-normal mb-8">
            Interesting Stats on {jobTitle} Jobs in
            <span className="text-teal ml-1">{jobLocation}</span>
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
      {faqData.faq && faqData.faq.length > 0 && (
        <section className="bg-gray-50 p-4 md:p-8 space-y-5">
          <div className="m-4 md:m-12 md:mt-12  max-w-7xl md:mx-auto">
            <h2 className="text-2xl font-normal mb-8">
              Frequently asked questions about flying from New York to Paris
            </h2>
            <div>
              <FaqAccordion items={faqData.faq} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobPageContent />
    </Suspense>
  );
}

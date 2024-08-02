"use client";

import React, { useEffect, useState, useMemo } from "react";
import Breadcrumbs from "../components/BreadCrumbs";
import Button from "../components/Button";
import JobCard from "../components/JobCard";
import { Card } from "../components/Card";
import { Suspense } from 'react'
import CompanyJobStats from "../components/CompanyJobStats";
import FaqAccordion from "../components/Faq";
import { useRouter } from "next/navigation";
import image from "../assets/images/image.png";
import { useSearchParams } from "next/navigation";
import { getFAQs } from "../../redux/actions/otherActions";
import { jobDetails, jobLocationsNearby } from "../../redux/actions/jobActions";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import JobMarketAnalysis from "../components/JobMarketAnalysis";

function JobPageContent() {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const jobTitle = searchParams.get("jobTitle") || "N/a";
  const city = searchParams.get("city") || "";
  const region = searchParams.get("region") || "";
  const country = searchParams.get("country") || "";

  const buildLocationString = (city, region, country) => {
    let location = [];
    if (city) location.push(city);
    if (region) location.push(region);
    if (country) location.push(country);
    return location.join(', ');
  };

  const jobLocation = buildLocationString(city, region, country);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const faqData = useSelector((state) => state.otherReducer.faqData);
  const jobDetailsData = useSelector((state) => state.job.jobDetails);
  const jobLocationsNearbyData = useSelector((state) => state.job.jobLocationsNearby.data);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await dispatch(getFAQs());
        await dispatch(jobDetails({ jobTitle, page }));
        await dispatch(jobLocationsNearby({ jobTitle }));
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, jobTitle, page]);

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

  const faqItems = faqData.faq || [];

  const jobCards = useMemo(() => {
    return jobDetailsData?.items?.map((item, index) => (
      <JobCard
        key={index}
        jobTitle={item.title || "N/a"}
        img={image}
        jobType={item.jobType || "N/a"}
        salaryRange={item.estimatedSalary}
        location={item.location || "N/a"}
        jobSummary={item.jobSummary || "N/a"}
        buttonLabel="Apply Now →"
        buttonLink={item.jobUrl}
        companyName={item.companyName || "N/a"}
        postingDate={item.publishedAt}
        rating={item.rating}
      />
    ));
  }, [jobDetailsData]);

  if (loading) {
    return <div>Loading...</div>;
  }

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

  return (
    <>
      <section className="p-6 md:p-2 md:px-8">
        <div className="max-w-7xl md:mx-auto">
          <div className="mb-5">
            <Breadcrumbs items={[
              { label: "Home", href: "/" },
              {
                label: `${jobTitle} Jobs`,
                href: `/jobs?jobTitle=${jobTitle}&city=${city}&region=${region}&country=${country}`,
              },
            ]} />
          </div>
          <div className="flex justify-between">
            <div className="text-2xl font-normal">
              <h2>{jobTitle} Jobs</h2>
              <p className="text-base font-medium mt-4">
                {jobDetailsData?.pagination?.totalItems || 0} {jobTitle} Jobs within 25 miles of {jobLocation}
                <span className="ml-2 text-teal underline underline-offset-1 cursor-pointer">
                  <Link href="/">Change location</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {jobCards?.length > 0 && (
        <section className="p-6 md:p-2 mt-2 mb-6 md:px-8">
          <div className="max-w-7xl md:mx-auto">
            <div>{jobCards}</div>
            {page < totalPages && (
              <div className="flex justify-center">
                <Button label={`Load more ${jobTitle} jobs in ${jobLocation}`} onClick={handleLoadMore} />
              </div>
            )}
          </div>
        </section>
      )}
      {!loading && (!jobCards || jobCards.length === 0) && (
        <section className="p-6 md:p-2 mt-2 mb-6 md:px-8">
          <div className="max-w-7xl md:mx-auto">
            <p>No jobs found for {jobTitle} within 25 miles of {jobLocation}</p>
          </div>
        </section>
      )}
      <section className="bg-gray-50 p-4 md:p-8 space-y-5">
        <div className="m-4 md:m-12 md:mt-12 max-w-7xl md:mx-auto">
          <h2 className="text-2xl font-normal mb-8">
            Interesting Stats on {jobTitle} Jobs in <span className="text-teal ml-1">{jobLocation}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
            <Card totalJobs={601377} percentageChange={6.47} date="5/1/2024" />
            <Card totalJobs={601377} percentageChange={6.47} date="5/1/2024" />
          </div>
          <div className="grid grid-rows-1 grid-flow-col gap-4 mt-10 hidden md:grid">
            <div className="col">
              <h1 className="text-2xl font-normal mb-8">Top 10 Cities with Most New Jobs</h1>
              <CompanyJobStats companyName="Visiting Angels" newJobs={8000} percentageChange={6.47} />
              <CompanyJobStats companyName="Visiting Angels" newJobs={8000} percentageChange={6.47} />
              <CompanyJobStats companyName="Visiting Angels" newJobs={8000} percentageChange={6.47} />
            </div>
            <div className="col">
              <h1 className="text-2xl font-normal mb-8">Top 10 Core Title Most New Jobs</h1>
              <CompanyJobStats companyName="Visiting Angels" newJobs={8000} percentageChange={6.47} />
              <CompanyJobStats companyName="Visiting Angels" newJobs={8000} percentageChange={6.47} />
              <CompanyJobStats companyName="Visiting Angels" newJobs={8000} percentageChange={6.47} />
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
      {jobLocationsNearbyData && jobLocationsNearbyData.length > 0 && (
        <section className="p-4 md:p-8 space-y-5">
          <div className="m-4 md:m-12 md:mt-12  max-w-7xl md:mx-auto">
            <h2 className="text-2xl font-normal mb-8">Locations near by</h2>
            <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 mt-10 PopularJobwrapper">
              {jobLocationsNearbyData && jobLocationsNearbyData.length > 0 && jobLocationsNearbyData.map((jobSearch, index) => (
                <div key={index}>
                  <h4>{jobSearch.localityName}, {jobSearch.regionName}, {jobSearch.countryIsoCode}</h4>
                </div>
              ))}
            </div>
            {/* <div className="grid grid-rows-1 grid-col-1 md:grid-col-3 grid-flow-col gap-4 mt-10 PopularJobwrapper">
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
          </div> */}
          </div>
        </section>
      )}
      <section className="p-6 md:p-2 mb-6 md:px-8">
        <div className="max-w-7xl md:mx-auto">
          <div>
            <h2 className="text-2xl font-normal mb-8">FAQs</h2>
            {faqItems.length > 0 ? (
              <FaqAccordion faqs={faqItems} />
            ) : (
              <p>No FAQs available at the moment.</p>
            )}
          </div>
        </div>
      </section>
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

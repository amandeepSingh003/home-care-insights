// Root Home component

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

import JobSearch from "./components/JobSearch";
import { Card, CustomCard } from "./components/Card";
import CompanyJobStats from "./components/CompanyJobStats";
import FaqAccordion from "./components/Faq";
import { getLocationsAutoComplete } from "../services/actions/dashboardActions";
import { getPopularJobSearches } from "../services/actions/jobActions";
import { getFAQs } from "../services/actions/otherActions";

const JobsByStateMapWithImage = dynamic(
  () => import("./components/Map"),
  { ssr: false }
);

// Map legend data
const legendData = [
  { color: "#00838f", percentage: "13.76%" },
  { color: "#00acc1", percentage: "0.45% to 5.05%" },
  { color: "#29b6f6", percentage: "-4.62% to -0.07%" },
  { color: "#40c4ff", percentage: "-12.18% to -5.6%" },
  { color: "#00bcd4", percentage: "-100%" },
];

export default function Home() {
  const router = useRouter();

  const [data, setData] = useState({
    jobTitle: "",
    jobLocation: "",
    city: "",
    region: "",
    country: ""
  });

  const [searchResults, setSearchResults] = useState([]);
  const [popularJobSearches, setPopularJobSearches] = useState([]);
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const locationResults = await getLocationsAutoComplete(data.jobLocation);
      setSearchResults(locationResults || []);
    };

    fetchData();
  }, [data.jobLocation]);

  useEffect(() => {
    const fetchData = async () => {
      const jobSearches = await getPopularJobSearches();
      const faqs = await getFAQs();

      setPopularJobSearches(jobSearches || []);
      setFaqData(faqs.faq || []);
    };

    fetchData();
  }, []);

  // State handler
  const handleChange = ({ name, value }) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.jobLocation && !data.jobTitle) return;
    router.push(
      `/job?jobTitle=${data.jobTitle}&city=${data.city}&region=${data.region}&country=${data.country}&page=1`
    );
  };

  return (
    <>
      <section className="p-4 md:p-8">
        <div className="m-4 md:mt-12 max-w-7xl md:mx-auto">
          <div className="text-center MainHeading">
            <h2 className="text-2xl	md:text-5xl">
              Find a Better Job in the
              <br />
              <span className="text-2xl md:text-6xl">
                Home Health Industry.
              </span>
            </h2>
          </div>
          <div className="mt-12">
            {/* Job search section */}
            <JobSearch
              jobTitle={data.jobTitle}
              jobLocation={data.jobLocation}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              searchResults={searchResults}
            />
            <p className="mt-10 text-center md:w-9/12 md:mx-auto">
              Browse real-time insights and research your next job in the broad
              Home Health and Elderly Care Industry. The only platform focused
              only on jobs in Senior Living, Hospice & Palliative Care, Home
              Care employers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <Card totalJobs={601377} percentageChange={6.47} date="5/1/2024" />
            <Card totalJobs={601377} percentageChange={6.47} date="5/1/2024" />
            <Card totalJobs={601377} percentageChange={6.47} date="5/1/2024" />
          </div>
        </div>
      </section>

      {/* Top 10 section */}
      <section className="bg-gray-50 p-4 md:p-8 space-y-5">
        <div className="m-4 md:m-12 md:mt-12 max-w-7xl md:mx-auto">
          <h2 className="text-2xl font-normal mb-8">
            Top 10 Employers with the Most New Jobs
          </h2>
          <CompanyJobStats
            companyName="Visiting Angels"
            extraClass="flex gap-2 align-items-center"
            src=""
            rating={3}
            newJobs={8000}
            percentageChange={6.47}
          />
          <CompanyJobStats
            companyName="Visiting Angels"
            extraClass="flex gap-2 align-items-center"
            src=""
            rating={3}
            newJobs={8000}
            percentageChange={6.47}
          />
          <div className="grid grid-rows-1 grid-flow-col gap-4 mt-10 hidden md:grid">
            <div className="col">
              <h1 className="text-2xl font-normal mb-8">
                Top 10 Cities with Most New Jobs
              </h1>
              <CompanyJobStats
                companyName="Visiting Angels"
                rating={3}
                newJobs={8000}
                percentageChange={6.47}
              />
              <CompanyJobStats
                companyName="Visiting Angels"
                src=""
                rating={3}
                newJobs={8000}
                percentageChange={6.47}
              />
              <CompanyJobStats
                companyName="Visiting Angels"
                src=""
                rating={3}
                newJobs={8000}
                percentageChange={6.47}
              />
            </div>
            <div className="col">
              <h1 className="text-2xl font-normal mb-8">
                Top 10 Core Titles with Most New Jobs
              </h1>
              <CompanyJobStats
                companyName="Visiting Angels"
                src=""
                rating={3}
                newJobs={8000}
                percentageChange={6.47}
              />
              <CompanyJobStats
                companyName="Visiting Angels"
                src=""
                rating={3}
                newJobs={8000}
                percentageChange={6.47}
              />
              <CompanyJobStats
                companyName="Visiting Angels"
                src=""
                rating={3}
                newJobs={8000}
                percentageChange={6.47}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="p-4 md:p-8 space-y-5 ">
        <div className="m-4 md:m-12 md:mt-12 max-w-7xl md:mx-auto p-4 md:p-10 MapWrapper">
          <h2 className="text-2xl font-normal mb-8">New Jobs by State</h2>
          <JobsByStateMapWithImage
            legendData={legendData}
          />
        </div>
      </section>

      {/* Resources for Talent section */}
      <section className="bg-gray-50 p-4 md:p-8 space-y-5">
        <div className="m-4 md:m-12 md:mt-12 max-w-7xl md:mx-auto">
          <h2 className="text-2xl font-normal mb-8">
            Resources for Talent and Talent Acquisition Pros in the Home Health Industry
          </h2>
          <p className="font-medium">
            Daily, Weekly, and Monthly Industry Reports
          </p>

          <div className="md:grid grid-rows-none grid-cols-1 md:grid-rows-2 md:grid-cols-3 grid-flow-col gap-4 mt-10">
            {[...Array(6)].map((_, index) => (
              <CustomCard key={index}>
                <p className="text-primary">
                  Ranking of the most valuable Home Health company in public markets
                </p>
                <div className="text-end">
                  <span className="text-sm">05/01 - 05/07</span>
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Job Searches section */}
      <section className="p-4 md:p-8 space-y-5">
        <div className="m-4 md:m-12 md:mt-12 max-w-7xl md:mx-auto">
          <h2 className="text-2xl font-normal mb-8">
            Popular Job Searches in Home Health this week
          </h2>
          <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 mt-10 PopularJobwrapper">
            {/* Map first 15 popular job searches */}
            {popularJobSearches.industries?.slice(0, 15)?.map((industry, index) => (
              <div key={index}>
                <h4>{industry.term}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs section */}
      <section className="bg-gray-50 p-4 md:p-8 space-y-5">
        <div className="m-4 md:m-12 md:mt-12 max-w-7xl md:mx-auto">
          <h2 className="text-2xl font-normal mb-8">FAQs</h2>
          {faqData.length > 0 ? (
            <FaqAccordion faqs={faqData.slice(0, 10)} />
          ) : (
            <p>No FAQs available at the moment.</p>
          )}
        </div>
      </section>
    </>
  );
}

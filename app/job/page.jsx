import Breadcrumbs from "../components/BreadCrumbs";
import Button from "../components/Button";
import JobCard from "../components/JobCard";
import { Card } from "../components/Card";
import CompanyJobStats from "../components/CompanyJobStats";
import FaqAccordion from "../components/Faq";
import image from "../assets/images/image.png";
import { jobDetails, jobLocationsNearby, salaryHistogram, percentPerJobs } from "@/services/actions/jobActions";
import Link from "next/link";
import JobMarketAnalysis from "../components/JobMarketAnalysis";
import { getFAQs } from "@/services/actions/otherActions";

export default async function JobPageContent({ searchParams }) {
  const jobTitle = searchParams.jobTitle || "N/a";
  const city = searchParams.city || "";
  const region = searchParams.region || "";
  const country = searchParams.country || "";

  const buildLocationString = (city, region, country) => {
    let location = [];
    if (city) location.push(city);
    if (region) location.push(region);
    if (country) location.push(country);
    return location.join(', ');
  };

  const jobLocation = buildLocationString(city, region, country);

  let page = parseInt(searchParams.page || "1", 10);
  let totalPages = 2;

  const faqData = await getFAQs()
  const jobLocationsNearbyData = await jobLocationsNearby({ jobTitle })
  const salaryHistogramData = await salaryHistogram()
  const percentPerJobsData = await percentPerJobs()

  const jobDetailsData = await jobDetails({ jobTitle, page })

  const handleLoadMore = () => {
    const nextPage = page + 1;
    return `/job?jobTitle=${jobTitle}&city=${city}&region=${region}&country=${country}&page=${nextPage}`;
  };

  const totalItems = jobDetailsData?.pagination?.totalItems || 0;
  const itemsPerPage = jobDetailsData?.pagination?.totalPageItems || 10;
  totalPages = Math.ceil(totalItems / itemsPerPage);

  const faqItems = faqData.faq || [];

  const pieData = [
    { name: "Full-Time", color: "#5BEDF0" },
    { name: "Part-Time", color: "#4CC5C7" },
    { name: "Other", color: "#3C9C9E" },
    { name: "Contract", color: "#1D4C4D" },
    { name: "PRN", color: "#ACCFD1" },
  ];

  const colorMap = pieData.reduce((acc, item) => {
    acc[item.name] = item.color;
    return acc;
  }, {});

  const updatedPieData = percentPerJobsData.map(item => ({
    name: item.key,
    value: item.value,
    color: colorMap[item.key] || "#000000",
  }));

  const barData = [
    { color: "#5BEDF0" },
    { color: "#4CC5C7" },
    { color: "#4CC5C7" },
    { color: "#3C9C9E" },
    { color: "#ACCFD1" },
  ];

  const colorMapBar = barData.map(item => item.color);

  const updatedBarData = salaryHistogramData.map((item, index) => ({
    name: `$${item.key}`,
    value: item.value,
    color: colorMapBar[index % colorMapBar.length],
  }));

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
      {jobDetailsData?.items?.length > 0 && (
        <section className="p-6 md:p-2 mt-2 mb-6 md:px-8">
          <div className="max-w-7xl md:mx-auto">
            <div>{jobDetailsData?.items?.map((item, index) => (
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
              />))}
            </div>
            {page < totalPages && (
              <div className="flex justify-center">
                <Link href={handleLoadMore()}>
                  <Button label={`Load more ${jobTitle} jobs in ${jobLocation}`} />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
      {(!jobDetailsData?.items || jobDetailsData?.items?.length === 0) && (
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
            {jobTitle} Remote Jobs Market Analysis
          </h2>
          <JobMarketAnalysis pieData={updatedPieData} barData={updatedBarData} />
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
          </div>
        </section>
      )}
      <section className="bg-gray-50 p-4 md:p-8 space-y-5">
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


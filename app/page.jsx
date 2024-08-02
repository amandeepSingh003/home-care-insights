"use client";

import JobSearch from "./components/JobSearch";
import { Card, CustomCard } from "./components/Card";
import CompanyJobStats from "./components/CompanyJobStats";
import FaqAccordion from "./components/Faq";
// import JobsByStateMapWithImage from "../components/Map";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocationsAutoComplete } from "../redux/actions/dashboardActions";
import { getPopularJobSearches } from "../redux/actions/jobActions";
import { getFAQs } from "../redux/actions/otherActions";
import { allValidations } from "../utils/formValidations";
import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";

const JobsByStateMapWithImage = dynamic(
  () => import("./components/Map"),
  { ssr: false }
);

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

const legendData = [
  { color: "#00838f", percentage: "13.76%" },
  { color: "#00acc1", percentage: "0.45% to 5.05%" },
  { color: "#29b6f6", percentage: "-4.62% to -0.07%" },
  { color: "#40c4ff", percentage: "-12.18% to -5.6%" },
  { color: "#00bcd4", percentage: "-100%" },
];

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  let popularJobSearches = useSelector((state) => state.job.popularJobSearch);
  let faqData = useSelector((state) => state.otherReducer.faqData);

  const [data, setData] = useState({
    jobTitle: "",
    jobLocation: "",
  });

  useEffect(() => {
    dispatch(getLocationsAutoComplete("ca"));
    dispatch(getPopularJobSearches());
    dispatch(getFAQs());
  }, [dispatch]);

  const handleChange = ({ name, value }) => {
    const formErrors = allValidations(name, value, data);
    setData((prev) => ({ ...prev, [name]: value, formErrors }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.jobLocation && !data.jobTitle) return
    router.push(
      `/job?jobTitle=${data.jobTitle}&jobLocation=${data.jobLocation}`
    );
  };

  return (
    <>
      <section className="p-4 md:p-8">
        <div className="m-4 md:mt-12  max-w-7xl md:mx-auto">
          <div className="text-center MainHeading ">
            <h2 className="text-2xl	md:text-5xl	">
              Find a Better Job in the
              <br />
              <span className="text-2xl md:text-6xl">
                Home Health Industry.
              </span>
            </h2>
          </div>
          <div className="mt-12">
            <JobSearch
              jobTitle={data.jobTitle}
              jobLocation={data.jobLocation}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
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

      <section className="bg-gray-50 p-4 md:p-8 space-y-5">
        <div className="m-4 md:m-12 md:mt-12  max-w-7xl md:mx-auto">
          <h2 className="text-2xl font-normal mb-8">
            Top 10 Employer with the Most New Jobs
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
                Top 10 Core Title Most New Jobs
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

      <section className="p-4 md:p-8 space-y-5 ">
        <div className="m-4 md:m-12 md:mt-12  max-w-7xl md:mx-auto  p-4 md:p-10 MapWrapper ">
          <h2 className="text-2xl font-normal mb-8">New Jobs by State</h2>
          <JobsByStateMapWithImage
            // imageUrl="/us-map.png"
            legendData={legendData}
          />
        </div>
      </section>
      <section className="bg-gray-50 p-4 md:p-8 space-y-5">
        <div className="m-4 md:m-12 md:mt-12  max-w-7xl md:mx-auto">
          <h2 className="text-2xl font-normal mb-8">
            Resources the Talent and Talent Acquisition Pros in the Home Health
            Industry
          </h2>
          <p className="font-medium">
            Daily, Weekly and Monthly Industry Reports
          </p>

          <div className="md:grid grid-rows-none grid-cols-1 md:grid-rows-2 md:grid-cols-3 grid-flow-col gap-4 mt-10">
            <CustomCard>
              <p className="text-primary">
                Ranking of the most valuable Home Health company in public
                markets
              </p>
              <div className="text-end">
                <span className="text-sm">05/01 - 05/07</span>
              </div>
            </CustomCard>
            <CustomCard>
              <p className="text-primary">
                Ranking of the most valuable Home Health company in public
                markets
              </p>
              <div className="text-end">
                <span className="text-sm">05/01 - 05/07</span>
              </div>
            </CustomCard>

            <CustomCard>
              <p className="text-primary">
                Ranking of the most valuable Home Health company in public
                markets
              </p>
              <div className="text-end">
                <span className="text-sm">05/01 - 05/07</span>
              </div>
            </CustomCard>
            <CustomCard>
              <p className="text-primary">
                Ranking of the most valuable Home Health company in public
                markets
              </p>
              <div className="text-end">
                <span className="text-sm">05/01 - 05/07</span>
              </div>
            </CustomCard>

            <CustomCard>
              <p className="text-primary">
                Ranking of the most valuable Home Health company in public
                markets
              </p>
              <div className="text-end">
                <span className="text-sm">05/01 - 05/07</span>
              </div>
            </CustomCard>
            <CustomCard>
              <p className="text-primary">
                Ranking of the most valuable Home Health company in public
                markets
              </p>
              <div className="text-end">
                <span className="text-sm">05/01 - 05/07</span>
              </div>
            </CustomCard>
          </div>
        </div>
      </section>
      <section className="p-4 md:p-8 space-y-5">
        <div className="m-4 md:m-12 md:mt-12  max-w-7xl md:mx-auto">
          <h2 className="text-2xl font-normal mb-8">
            Popular Job Searches in Home Health this week
          </h2>
          <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 mt-10 PopularJobwrapper">
            {popularJobSearches.industries && popularJobSearches.industries.length > 0 && popularJobSearches.industries.map((industry, index) => (
              <div key={index}>
                <h4>{industry.term}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      {faqData.faq && faqData.faq.length && (
        <section className="bg-gray-50 p-4 md:p-8 space-y-5">
          <div className="m-4 md:m-12 md:mt-12  max-w-7xl md:mx-auto">
            <h2 className="text-2xl font-normal mb-8">
              Frequently asked questions about flying from New York to Paris
            </h2>
            <div>
              <FaqAccordion items={faqData?.faq} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

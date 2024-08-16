import api from "../../services/api";
import Constants from "../../services/constants";

// Job list action
const jobDetails = async ({
  jobTitle = "",
  city = "",
  region = "",
  country = "",
  page = 1,
  pageSize = 10,
}) => {
  try {
    const params = new URLSearchParams();

    if (jobTitle) params.append("jobTitle", jobTitle);
    if (city) params.append("city", city);
    if (region) params.append("region", region);
    if (country) params.append("country", country);
    params.append("page", page);
    params.append("pageSize", pageSize);
    params.append("industry", "Home Health");

    const queryString = params.toString();

    const res = await api(
      "get",
      `${Constants.END_POINT.JOB_SEARCH}?${queryString}`
    );
    return {
      items: res.items,
      pagination: res.pagination,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Popular job searches action
const getPopularJobSearches = async () => {
  try {
    const res = await api(
      "get",
      `${Constants.END_POINT.POPULAR_JOB_SEARCHES}/Home Health`
    );
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Job locations nearby action
const jobLocationsNearby = async () => {
  try {
    // const res = await api(
    //   "get",
    //   `${Constants.END_POINT.JOB_LOCATIONS_NEARBY}?localityName=Conyers&regionName=Georgia`,
    //   {},
    //   {},
    //   { "X-Auth-Token": "1652bbc0-d9f8-453a-a724-ec1a424ed430" }
    // );

    const res = {
      data: [
        {
          localityName: "Milstead",
          regionName: "Georgia",
          countryIsoCode: "US",
        },
        {
          localityName: "Hi Roc Shores",
          regionName: "Georgia",
          countryIsoCode: "US",
        },
        {
          localityName: "Lakeview Estates",
          regionName: "Georgia",
          countryIsoCode: "US",
        },
        {
          localityName: "Lake Capri",
          regionName: "Georgia",
          countryIsoCode: "US",
        },
        {
          localityName: "Almon",
          regionName: "Georgia",
          countryIsoCode: "US",
        },
        {
          localityName: "Collinsville",
          regionName: "Georgia",
          countryIsoCode: "US",
        },
      ],
    };
    return res?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Salary Histogram action
const salaryHistogram = async () => {
  try {
    // const res = await api(
    //   "get",
    //   `${Constants.END_POINT.SALARY_HISTOGRAM}`,
    // );

    const res = {
      results: [
        {
          key: 10,
          value: 4,
        },
        {
          key: 20,
          value: 33,
        },
        {
          key: 30,
          value: 57,
        },
        {
          key: 40,
          value: 12,
        },
        {
          key: 50,
          value: 12,
        },
      ],
    };
    return res?.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Percent Per jobs action
const percentPerJobs = async () => {
  try {
    // const res = await api(
    //   "get",
    //   `${Constants.END_POINT.PERCENT_PER_JOBS}`,
    // );

    const res = {
      results: [
        {
          key: "Full-Time",
          value: 1143,
        },
        {
          key: "Part-Time",
          value: 209,
        },
        {
          key: "Other",
          value: 81,
        },
        {
          key: "Contract",
          value: 29,
        },
        {
          key: "PRN",
          value: 2,
        },
      ],
    };
    return res?.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export {
  jobDetails,
  getPopularJobSearches,
  jobLocationsNearby,
  salaryHistogram,
  percentPerJobs,
};

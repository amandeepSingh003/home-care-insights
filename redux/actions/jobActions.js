import api from "../../services/api";
import { types } from "../types/types";
import Constants from "../../services/constants";
import { hideLoaderAction, showLoaderAction } from "./loaderAction";

const jobDetails =
  ({
    jobTitle = "",
    city = "",
    region = "",
    country = "",
    page = 1,
    pageSize = 10,
  }) =>
  async (dispatch) => {
    dispatch(showLoaderAction());

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
    dispatch({
      type: types.JOB_SEARCH,
      payload: {
        items: res.items,
        pagination: res.pagination,
      },
    });
    dispatch(hideLoaderAction());
  };

const getPopularJobSearches = () => async (dispatch) => {
  dispatch(showLoaderAction());

  try {
    const res = await api(
      "get",
      `${Constants.END_POINT.POPULAR_JOB_SEARCHES}/Home Health`
    );
    dispatch({
      type: types.POPULAR_JOB_SEARCHES,
      payload: res,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    dispatch(hideLoaderAction());
  }
};

const jobLocationsNearby = () => async (dispatch) => {
  dispatch(showLoaderAction());

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

    dispatch({
      type: types.JOB_LOCATIONS_NEARBY,
      payload: res,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    dispatch(hideLoaderAction());
  }
};

const salaryHistogram = () => async (dispatch) => {
  dispatch(showLoaderAction());

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

    dispatch({
      type: types.SALARY_HISTOGRAM,
      payload: res,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    dispatch(hideLoaderAction());
  }
};

const percentPerJobs = () => async (dispatch) => {
  dispatch(showLoaderAction());

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

    dispatch({
      type: types.PERCENT_PER_JOBS,
      payload: res,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    dispatch(hideLoaderAction());
  }
};

export {
  jobDetails,
  getPopularJobSearches,
  jobLocationsNearby,
  salaryHistogram,
  percentPerJobs,
};

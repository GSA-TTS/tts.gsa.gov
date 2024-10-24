const { sortJobs } = require("../js/positions");

describe("sortJobs", () => {
  const jobs = [
    {
      title: "Job 1",
      opens: "2024-10-10",
      closes: "2034-10-20",
      external_url: "",
      url: "/job1",
      max_applications: 0,
    },
    {
      title: "Job 2",
      opens: "2034-10-20",
      closes: "",
      external_url: "",
      url: "/job2",
      max_applications: 0,
    },
    {
      title: "Job 3",
      opens: "",
      closes: "",
      external_url: "",
      url: "/job3",
      max_applications: 0,
    },
  ];

  it("correctly sorts jobs into open and upcoming arrays", () => {
    const result = sortJobs(jobs);

    expect(result.openJobs).toEqual([jobs[0]]);
    expect(result.upcomingJobs).toEqual([jobs[1], jobs[2]]);
  });
});

const now = new Date();
const currentTimestamp = Math.floor(now.getTime() / 1000);

function sortJobs(allJobs) {
  const openJobs = [];
  const upcomingJobs = [];
  const today = formatDate(now);

  allJobs.forEach((job) => {
    const opens = job.opens || "";
    const closes = job.closes || "";

    // Push to openJobs if conditions are met
    if (
      opens &&
      ((today >= opens && today <= closes) || (today >= opens && !closes)) &&
      job.title
    ) {
      openJobs.push(job);
    }

    // Push to upcomingJobs if conditions are met
    if (
      (opens > today && closes > today) ||
      (opens > today && !closes) ||
      (!opens && !closes) ||
      (opens > today && closes > today) &&
      job.title
    ) {
      upcomingJobs.push(job);
    }
  });

  if (typeof document === "undefined") {
    return { openJobs, upcomingJobs };
  } else {
    // Set content placeholders before loading actual content
    addPlaceholderContent();

    // Populate content after sorting
    addOpenJobsToDOM(openJobs);
    addUpcomingJobsToDOM(upcomingJobs);
  }
}

function addPlaceholderContent() {
  // Placeholder for open jobs
  const openJobsSection = document.querySelector(".open-jobs");
  openJobsSection.innerHTML = '<p>Loading open positions...</p>';

  // Placeholder for upcoming jobs
  const upcomingJobsSection = document.querySelector(".upcoming-jobs");
  upcomingJobsSection.innerHTML = '<p>Loading upcoming positions...</p>';
}

function addOpenJobsToDOM(openJobs) {
  const openJobsSection = document.querySelector(".open-jobs");
  const jobList = document.createElement("ul");
  jobList.style.paddingLeft = "3ch";

  if (openJobs.length > 0) {
    openJobs.forEach((job) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");

      listItem.style.marginBottom = "0.25em";
      link.style.color = "#005ea2";

      let linkUrl = job.external_url || job.url;
      if (linkUrl === job.url && window.location.href.includes("pages.cloud.gov")) {
        linkUrl = `${window.location.href}${job.url.replace("/join/", "")}`;
      }

      link.href = linkUrl;
      if (job.external_url) link.target = "_blank";
      link.textContent = job.title;

      const closesDate = new Date(job.closes).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });

      const openUntilMessage = job.max_applications
        ? ` (Open now through ${closesDate} at 11:59pm ET or until ${job.max_applications} applications have been received.)`
        : ` (Open now through ${closesDate} at 11:59pm ET.)`;

      listItem.appendChild(link);
      link.insertAdjacentHTML("afterend", openUntilMessage);
      jobList.appendChild(listItem);

      if (job.info_sessions?.length > 0) {
        renderInfoSessions(job.info_sessions, listItem, job.title);
      }
    });
    openJobsSection.innerHTML = ''; // Clear placeholder
    openJobsSection.appendChild(jobList);
  } else {
    openJobsSection.innerHTML =
      'No open positions at this time. Sign up for <a href="/join/newsletter/">job alerts!</a>';
  }
}

function addUpcomingJobsToDOM(upcomingJobs) {
  const upcomingJobsSection = document.querySelector(".upcoming-jobs");
  const jobList = document.createElement("ul");
  jobList.style.paddingLeft = "3ch";

  if (upcomingJobs.length > 0) {
    upcomingJobs.forEach((job) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");

      listItem.style.marginBottom = "0.25em";
      link.style.color = "#005ea2";

      let linkUrl = job.external_url || job.url;
      if (linkUrl === job.url && window.location.href.includes("pages.cloud.gov")) {
        linkUrl = `${window.location.href}${job.url.replace("/join/", "")}`;
      }

      link.href = linkUrl;
      if (job.external_url) link.target = "_blank";
      link.textContent = job.title;

      listItem.appendChild(link);
      jobList.appendChild(listItem);

      if (job.info_sessions?.length > 0) {
        renderInfoSessions(job.info_sessions, listItem, job.title);
      }
    });
    upcomingJobsSection.innerHTML = ''; // Clear placeholder
    upcomingJobsSection.appendChild(jobList);
  } else {
    upcomingJobsSection.innerHTML =
      'No upcoming positions at this time. Sign up for <a href="/join/newsletter/">job alerts!</a>';
  }
}

function renderInfoSessions(infoSessions, linkItem, title = "") {
  const infoSessionsList = document.createElement("ul");

  infoSessions.forEach((session) => {
    const sessionSimpleDate = session["date"] ? session["date"].split("T")[0] : "";
    const sessionTime = session["time"];
    const [startTime, endTime] = sessionTime.split("-");
    const endTimeFormatted = endTime.replace("pm", " PM").replace("am", " AM");
    const [time, modifier] = endTimeFormatted.split(" ");
    let [hours, minutes] = time.split(":");

    if (modifier === "PM" && hours !== "12") hours = String(+hours + 12);
    else if (modifier === "AM" && hours === "12") hours = "00";

    const formattedDateTime = `${sessionSimpleDate}T${hours}:${minutes}:00`;
    const sessionEndDateTime = new Date(formattedDateTime);
    const nowTimestamp = now.getTime();

    if (sessionEndDateTime.getTime() > nowTimestamp) {
      const infoSession = document.createElement("li");

      const sessionDate = new Date(sessionSimpleDate).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });

      const formattedTime = formatSessionTimes(sessionTime);

      const infoSessionLink = document.createElement("a");
      infoSessionLink.href = session.link;
      infoSessionLink.target = "_blank";
      infoSessionLink.rel = "noopener noreferrer";
      infoSessionLink.innerText = sessionDate;

      const sessionText = document.createElement("p");
      sessionText.appendChild(infoSessionLink);
      sessionText.appendChild(document.createTextNode(" at " + formattedTime));

      infoSession.appendChild(sessionText);
      infoSessionsList.appendChild(infoSession);
    }
  });

  if (infoSessionsList.childElementCount !== 0) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("usa-summary-box");

    const headline = document.createElement("h3");
    headline.innerHTML = `Attend an information session for this position`;

    const subHeadline = document.createElement("p");
    subHeadline.innerText = `Attend an information session to learn more about these roles, working at TTS, and our application process. Register for a session using the links below.`;

    wrapper.appendChild(headline);
    wrapper.appendChild(subHeadline);
    wrapper.appendChild(infoSessionsList);

    linkItem.appendChild(wrapper);
  }
}

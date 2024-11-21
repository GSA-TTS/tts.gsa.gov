const now = new Date();
const currentTimestamp = Math.floor(new Date(now).getTime() / 1000);

function sortJobs(allJobs) {
  const openJobs = [];
  const upcomingJobs = [];
  const today = formatDate(now);

  allJobs.forEach((job) => {
    const opens = job.opens !== "" ? job.opens : "";

    const closes = job.closes !== "" ? job.closes : "";

    // If there is an opens date and;
    // If today is after or equal to the opens date and before the closes date, add the job to the openJobs array.
    // Also add it if today is after or equal to the opens date and there is no close date.
    if (
      opens !== "" &&
      ((today >= opens && closes >= today) || (today >= opens && closes === ""))
    ) {
      // Make sure it doesn't push the base index page.
      if (job.title !== "") {
        openJobs.push(job);
      }
    }

    // If today is before the opens date and before the closes date, add the job to the upcomingJobs array.
    // Also add it if no dates are added to the opens and closes fields
    // Also add it if today is before the opens date and there is no close date
    if (
      (opens > today && closes > today) ||
      (opens > today && closes === "") ||
      (opens === "" && closes === "") ||
      (opens > today && closes > today)
    ) {
      // Make sure it doesn't push the base index page.
      if (job.title !== "") {
        upcomingJobs.push(job);
      }
    }
  });

  if (typeof document === "undefined") {
    return { openJobs, upcomingJobs };
  } else {
    addOpenJobsToDOM(openJobs);
    addUpcomingJobsToDOM(upcomingJobs);
  }
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

      // Set the link URL
      let linkUrl = job.external_url !== "" ? job.external_url : job.url;
      if (linkUrl === job.url) {
        if (window.location.href.includes("pages.cloud.gov")) {
          // Remove '/join/' from job.url if it exists and append to window.location.href
          linkUrl = job.url.replace("/join/", "");
          linkUrl = `${window.location.href}${linkUrl}`;
        } else {
          // Just return job.url if not on pages.cloud.gov
          linkUrl = job.url;
        }
      }

      link.href = linkUrl;

      // Set the target attribute for external links to open in a new window
      if (job.external_url !== "") {
        link.target = "_blank"; // Open in a new window
      }

      // Set the text content to the job title.
      link.textContent = job.title;

      // Format the job closes date
      const closesDate = new Date(job.closes).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });

      // Add the open until message.
      let openUntilMessage = "";
      if (job.max_applications !== 0) {
        openUntilMessage = ` (Open now through ${closesDate} at 11:59pm ET or until ${job.max_applications} applications have been received.)`;
      } else {
        openUntilMessage = ` (Open now through ${closesDate} at 11:59pm ET.)`;
      }

      // Append the link to the list item, and the list item to the list
      listItem.appendChild(link);

      // nosemgrep: typescript.react.security.audit.react-unsanitized-method.react-unsanitized-method
      link.insertAdjacentHTML("afterend", openUntilMessage);
      jobList.appendChild(listItem);

      // Let's add the future info sessions under this item.
      const infoSessions = job.info_sessions;
      if (infoSessions && infoSessions.length > 0) {
        renderInfoSessions(infoSessions, listItem, job.title);
      }
    });

    openJobsSection.appendChild(jobList);
  } else {
    const noJobsText = document.createElement("p");
    noJobsText.innerHTML =
      'No open positions at this time. <a href="/join/newsletter/">Sign up for job alerts!</a>';

    openJobsSection.appendChild(noJobsText);
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

      // Set the link URL
      let linkUrl = job.external_url !== "" ? job.external_url : job.url;
      if (linkUrl === job.url) {
        if (window.location.href.includes("pages.cloud.gov")) {
          // Remove '/join/' from job.url if it exists and append to window.location.href
          linkUrl = job.url.replace("/join/", "");
          linkUrl = `${window.location.href}${linkUrl}`;
        } else {
          // Just return job.url if not on pages.cloud.gov
          linkUrl = job.url;
        }
      }

      link.href = linkUrl;

      // Set the target attribute for external links to open in a new window
      if (job.external_url !== "") {
        link.target = "_blank"; // Open in a new window
      }

      // Set the text content to the job title
      link.textContent = job.title;

      // Append the link to the list item, and the list item to the list
      listItem.appendChild(link);
      jobList.appendChild(listItem);

      // Let's add the future info sessions under this item.
      const infoSessions = job.info_sessions;
      if (infoSessions && infoSessions.length > 0) {
        renderInfoSessions(infoSessions, listItem, job.title);
      }
    });

    upcomingJobsSection.appendChild(jobList);
  } else {
    const noJobsText = document.createElement("p");
    noJobsText.innerHTML =
      'No upcoming positions at this time. Sign up for <a href="/join/newsletter/">job alerts!</a>';

    openJobsSection.appendChild(noJobsText);
  }
}

function renderInfoSessions(
  infoSessions,
  linkItem,
  title = "",
  layout = "position",
) {
  // Create the unordered list that the info sessions will be assigned to.
  const infoSessionsList = document.createElement("ul");

  // Iterate through all the info sessions.
  infoSessions &&
    infoSessions.forEach((session) => {
      // Lets get all our variables together for converting the end time into a timestamp.
      const sessionSimpleDate = session["date"]
        ? session["date"].split("T")[0]
        : "";
      const sessionTime = session["time"];
      const [startTime, endTime] = sessionTime.split("-");
      const endTimeFormatted = endTime
        .replace("pm", " PM")
        .replace("am", " AM");
      const [time, modifier] = endTimeFormatted.split(" ");
      let [hours, minutes] = time.split(":");

      if (modifier === "PM" && hours !== "12") {
        hours = String(+hours + 12);
      } else if (modifier === "AM" && hours === "12") {
        hours = "00";
      }

      const formattedDateTime = `${sessionSimpleDate}T${hours}:${minutes}:00`;

      // Convert the end date and time into a UTC timestamp and get the current time as a UTC timestamp.
      const sessionEndDateTime = new Date(formattedDateTime);
      const sessionEndTimestamp = sessionEndDateTime.getTime();
      const now = new Date();
      const nowTimestamp = now.getTime();

      // If the session hasn't ended, show it.
      if (sessionEndTimestamp > nowTimestamp) {
        const infoSession = document.createElement("li");

        const sessionDate = new Date(sessionSimpleDate).toLocaleDateString(
          "en-US",
          {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          },
        );

        const formattedTime = formatSessionTimes(sessionTime);

        const infoSessionLink = document.createElement("a");
        infoSessionLink.href = session.link;
        infoSessionLink.target = "_blank";
        infoSessionLink.rel = "noopener noreferrer";
        infoSessionLink.innerText = sessionDate;

        const sessionText = document.createElement("p");
        sessionText.appendChild(infoSessionLink);

        // Add the text for the time after the link
        sessionText.appendChild(
          document.createTextNode(" at " + formattedTime),
        );

        // Append the paragraph to the list item
        infoSession.appendChild(sessionText);

        // Finally, append the list item to the infoSessionsList
        infoSessionsList.appendChild(infoSession);
      }
    });

  // If there are info sessions any info sessions in the list, generate the HTML to display them
  if (infoSessionsList.childElementCount !== 0) {
    if (layout.includes("join")) {
      const wrapper = document.createElement("aside");
      wrapper.classList.add("usa-alert-info");
      wrapper.classList.add("usa-alert");
      const innerDiv = document.createElement("div");
      innerDiv.classList.add("usa-alert-body");
      const headline = document.createElement("p");

      // nosemgrep javascript.browser.security.insecure-document-method.insecure-document-method
      headline.innerHTML = `Upcoming or ongoing info sessions for ${title}`;
      wrapper.appendChild(innerDiv);
      innerDiv.appendChild(headline);

      innerDiv.appendChild(infoSessionsList);

      linkItem.appendChild(wrapper);
    } else {
      const wrapper = document.createElement("div");
      wrapper.classList.add("info-session-summary-box");
      const headline = document.createElement("p");
      headline.innerHTML = `Attend an information session for this position`;
      wrapper.appendChild(headline);
      wrapper.appendChild(infoSessionsList);
      linkItem.appendChild(wrapper);
    }
  }
}

function renderGlobalInfoSessions(infoSessions) {
  const globalInfoSessionsWrapper = document.getElementById(
    "global-info-sessions-wrapper",
  );
  const infoSessionsList = document.createElement("ul");

  // Iterate through all the info sessions.
  infoSessions &&
    infoSessions.forEach((session) => {
      // Lets get all our variables together for converting the end time into a timestamp.
      const sessionSimpleDate = session["date"].split("T")[0];
      const sessionTime = session["time"];
      const [startTime, endTime] = sessionTime.split("-");
      const endTimeFormatted = endTime
        .replace("pm", " PM")
        .replace("am", " AM");
      const [time, modifier] = endTimeFormatted.split(" ");
      let [hours, minutes] = time.split(":");

      if (modifier === "PM" && hours !== "12") {
        hours = String(+hours + 12);
      } else if (modifier === "AM" && hours === "12") {
        hours = "00";
      }

      const formattedDateTime = `${sessionSimpleDate}T${hours}:${minutes}:00`;

      // Convert the end date and time into a UTC timestamp and get the current time as a UTC timestamp.
      const sessionEndDateTime = new Date(formattedDateTime);
      const sessionEndTimestamp = sessionEndDateTime.getTime();
      const now = new Date();
      const nowTimestamp = now.getTime();

      // If the session hasn't ended, show it.
      if (sessionEndTimestamp > nowTimestamp) {
        const infoSession = document.createElement("li");

        const sessionDate = new Date(sessionSimpleDate).toLocaleDateString(
          "en-US",
          {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          },
        );

        const formattedTime = formatSessionTimes(sessionTime);

        const infoSessionLink = document.createElement("a");
        infoSessionLink.href = session.link;
        infoSessionLink.target = "_blank";
        infoSessionLink.rel = "noopener noreferrer";
        infoSessionLink.innerText = sessionDate;

        const sessionText = document.createElement("p");
        sessionText.style.marginTop = "0";

        // Add the text for the time after the link
        sessionText.innerText = formattedTime;

        // Append the paragraph to the list item
        infoSession.appendChild(infoSessionLink);
        infoSession.appendChild(sessionText);

        // Finally, append the list item to the infoSessionsList
        infoSessionsList.appendChild(infoSession);
      }
    });

  if (infoSessionsList.childElementCount !== 0) {
    globalInfoSessionsWrapper.appendChild(infoSessionsList);
  }
}

// Function to format dates.
function formatDate(date) {
  const year = date.getFullYear(); // Get the four-digit year
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Get the month (0-11) and add 1; pad with 0 if needed
  const day = String(date.getDate()).padStart(2, "0"); // Get the day of the month; pad with 0 if needed

  return `${year}-${month}-${day}`; // Format as 'yyyy-mm-dd'
}

// Function to format the session times into a readable string with Eastern and Pacific times
function formatSessionTimes(sessionTime) {
  const [startTime, endTime] = sessionTime.split("-");

  // Convert the start and end times to both Eastern Time (ET) and Pacific Time (PT)
  const startET = convertTimeToZone(startTime, "America/New_York");
  const endET = convertTimeToZone(endTime, "America/New_York");
  const startPT = convertTimeToZone(startTime, "America/Los_Angeles");
  const endPT = convertTimeToZone(endTime, "America/Los_Angeles");

  // Format the result: ET times with PT equivalents
  return `${startET}-${endET} ET (${startPT}-${endPT} PT)`;
}

// Helper function to convert the time to a specific timezone
function convertTimeToZone(time, timeZone) {
  const [hours, minutes, period] = time.match(/(\d+):(\d+)([ap]m)/i).slice(1);

  let hours24 = parseInt(hours, 10);
  let timePeriod = period;
  if (period.toLowerCase() === "pm" && hours24 !== 12) {
    hours24 += 12;
  } else if (period.toLowerCase() === "am" && hours24 === 12) {
    hours24 = 0;
  }

  // Set the PT offset
  const ptOffset = timeZone !== "America/New_York" ? 3 : 0;
  const ptHours = hours24 - ptOffset;

  // Make sure the time period changes to AM if the Pacific Time is before noon
  if (timeZone === "America/Los_Angeles" && hours24 >= 12 && ptHours < 12) {
    timePeriod = "AM";
  }

  hours24 = hours24 - ptOffset;

  if (hours24 > 12) {
    hours24 += -12;
  }

  return `${hours24}:${minutes} ${timePeriod.toUpperCase()}`;
}

if (typeof window !== "undefined") {
  window.sortJobs = sortJobs;
  window.renderGlobalInfoSessions = renderGlobalInfoSessions;
  window.renderInfoSessions = renderInfoSessions;
}

// Export for testing
module.exports = {
  sortJobs,
  formatDate,
  formatSessionTimes,
  convertTimeToZone,
  renderGlobalInfoSessions,
  renderInfoSessions,
};

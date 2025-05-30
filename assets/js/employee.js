// Current date tracking
let currentDate = new Date(); // Start with today's date
// Set to Monday of current week
const day = currentDate.getDay();
const diff = currentDate.getDate() - day + (day === 0 ? -6 : 1);
currentDate.setDate(diff);

let draggedShift = null;

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  updateDateDisplay(); // Update date first
  initializeDropdowns();
  bindEventListeners();
  renderStaffData(currentDate);
  initializeShiftBlockHandlers(); // Add this line to ensure handlers are attached on initial load
});

// Dropdown functionality
function initializeDropdowns() {
  const dropdowns = document.querySelectorAll(".filter-dropdown");

  dropdowns.forEach((dropdown) => {
    const selectedText = dropdown.querySelector(".selected-text");
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    const arrow = dropdown.querySelector(".dropdown-arrow");
    const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');
    const allCheckbox = dropdown.querySelector('input[value="all"]');

    // Toggle dropdown on click
    dropdown.addEventListener("click", function (e) {
      if (e.target.type !== "checkbox") {
        e.stopPropagation();
        dropdownContent.classList.toggle("show");
        arrow.classList.toggle("open");

        // Close other dropdowns
        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== dropdown) {
            const otherContent =
              otherDropdown.querySelector(".dropdown-content");
            const otherArrow = otherDropdown.querySelector(".dropdown-arrow");
            if (otherContent) otherContent.classList.remove("show");
            if (otherArrow) otherArrow.classList.remove("open");
          }
        });
      }
    });

    // Handle checkbox changes
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function (e) {
        e.stopPropagation();

        if (checkbox.value === "all") {
          // When "All" is clicked, update other checkboxes
          checkboxes.forEach((cb) => {
            if (cb !== checkbox) {
              cb.checked = checkbox.checked;
            }
          });
          // Update selected text to show "All sites" or "All types"
          selectedText.textContent = checkbox.parentElement.textContent.trim();
        } else {
          // When individual option is clicked
          const nonAllCheckboxes = Array.from(checkboxes).filter(
            (cb) => cb.value !== "all"
          );
          const allChecked = nonAllCheckboxes.every((cb) => cb.checked);
          const anyChecked = nonAllCheckboxes.some((cb) => cb.checked);

          // Update "All" checkbox
          if (allCheckbox) {
            allCheckbox.checked = allChecked;
          }

          // Update selected text
          if (allChecked) {
            // If all individual options are checked, show "All sites" or "All types"
            selectedText.textContent =
              allCheckbox.parentElement.textContent.trim();
          } else if (!anyChecked) {
            // If none are checked, default to "All sites" or "All types"
            selectedText.textContent =
              allCheckbox.parentElement.textContent.trim();
            allCheckbox.checked = true;
            checkboxes.forEach((cb) => {
              cb.checked = true;
            });
          } else {
            // Show selected items
            const checkedItems = nonAllCheckboxes
              .filter((cb) => cb.checked)
              .map((cb) => cb.parentElement.textContent.trim());
            selectedText.textContent = checkedItems.join(", ");
          }
        }

        applyFilters();
      });
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".filter-dropdown")) {
      dropdowns.forEach((dropdown) => {
        const content = dropdown.querySelector(".dropdown-content");
        const arrow = dropdown.querySelector(".dropdown-arrow");
        if (content) content.classList.remove("show");
        if (arrow) arrow.classList.remove("open");
      });
    }
  });
}

function applyFilters() {
  const siteCheckboxes = document.querySelectorAll(
    '#siteFilter input[type="checkbox"]:checked'
  );
  const employeeCheckboxes = document.querySelectorAll(
    '#employeeFilter input[type="checkbox"]:checked'
  );

  const selectedSites = Array.from(siteCheckboxes).map((cb) => cb.value);
  const selectedEmployees = Array.from(employeeCheckboxes).map(
    (cb) => cb.value
  );

  const staffRows = document.querySelectorAll(".staff-row");
  staffRows.forEach((row) => {
    const employeeType = row.getAttribute("data-employee-type");
    const showRow =
      selectedEmployees.includes("all") ||
      selectedEmployees.includes(employeeType);

    row.style.display = showRow ? "grid" : "none";

    if (showRow) {
      const shifts = row.querySelectorAll(".shift-block");
      shifts.forEach((shift) => {
        const shiftSite = shift.textContent.toLowerCase();
        const showShift =
          selectedSites.includes("all") ||
          selectedSites.some((site) => shiftSite.includes(site.toLowerCase()));

        shift.style.opacity = showShift ? "1" : "0.3";
        shift.style.pointerEvents = showShift ? "auto" : "none";
      });
    }
  });
}

// Helper function to get dates for the current week
function getCurrentWeekDates() {
  const today = new Date();
  const currentDay = today.getDay();
  const diff = today.getDate() - currentDay + (currentDay === 0 ? -6 : 1);
  const monday = new Date(today.setDate(diff));

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    weekDates.push(formatDate(date));
  }
  return weekDates;
}

// Get current week dates
const weekDates = getCurrentWeekDates();

const staffData = [
  {
    name: "Greg Lane",
    hours: "21h 30 min",
    employeeType: "technologist",
    shifts: {
      [weekDates[0]]: [
        {
          site: "Edmondson Park | US01",
          room: "US01",
          from: "08:00",
          to: "11:00",
        },
      ],
      [weekDates[1]]: [
        {
          site: "Edmondson Park | US02",
          room: "US02",
          from: "08:00",
          to: "11:00",
        },
        {
          site: "Edmondson Park | US03",
          room: "US03",
          from: "13:00",
          to: "17:00",
        },
      ],
      [weekDates[2]]: [
        {
          site: "Ingleburn | US01",
          room: "US01",
          from: "8:00",
          to: "11:00",
        },
      ],
      [weekDates[3]]: [
        {
          site: "Ingleburn | US02",
          room: "US02",
          from: "8:00",
          to: "11:00",
        },
      ],
      [weekDates[4]]: [
        {
          site: "Edmondson Park | US03",
          room: "US03",
          from: "8:00",
          to: "11:00",
        },
      ],
    },
  },
  {
    name: "Arlene Richards",
    hours: "32h",
    employeeType: "technologist",
    shifts: {
      [weekDates[0]]: [
        {
          site: "Edmondson Park | CT",
          room: "CT",
          from: "09:00",
          to: "17:00",
        },
      ],
      [weekDates[2]]: [
        {
          site: "Ingleburn | CT",
          room: "CT",
          from: "09:00",
          to: "17:00",
        },
      ],
      [weekDates[4]]: [
        {
          site: "Edmondson Park | CT",
          room: "CT",
          from: "09:00",
          to: "17:00",
        },
      ],
    },
  },
  {
    name: "Cameron Edwards",
    hours: "40h",
    employeeType: "technologist",
    shifts: {
      [weekDates[1]]: [
        {
          site: "Edmondson Park | US01",
          room: "US01",
          from: "08:00",
          to: "17:00",
        },
      ],
      [weekDates[3]]: [
        {
          site: "Ingleburn | US02",
          room: "US02",
          from: "08:00",
          to: "17:00",
        },
      ],
      [weekDates[4]]: [
        {
          site: "Edmondson Park | X-Ray",
          room: "X-Ray",
          from: "08:00",
          to: "14:00",
        },
      ],
    },
  },
  {
    name: "Marjorie Hawkins",
    hours: "35h",
    employeeType: "technologist",
    shifts: {
      [weekDates[0]]: [
        {
          site: "Edmondson Park | US01",
          room: "US01",
          from: "11:00",
          to: "17:00",
        },
      ],
      [weekDates[2]]: [
        {
          site: "Edmondson Park | CT",
          room: "CT",
          from: "08:00",
          to: "17:00",
        },
      ],
      [weekDates[4]]: [
        {
          site: "Ingleburn | US02",
          room: "US02",
          from: "08:00",
          to: "14:00",
        },
      ],
    },
  },
  {
    name: "Sarah Chen",
    hours: "28h",
    employeeType: "radiologist",
    shifts: {
      [weekDates[1]]: [
        {
          site: "Edmondson Park | US03",
          room: "US03",
          from: "08:00",
          to: "15:00",
        },
      ],
      [weekDates[3]]: [
        {
          site: "Ingleburn | US01",
          room: "US01",
          from: "09:00",
          to: "16:00",
        },
      ],
    },
  },
  {
    name: "Michael Torres",
    hours: "24h",
    employeeType: "technologist",
    shifts: {
      [weekDates[0]]: [
        {
          site: "Edmondson Park | CT",
          room: "CT",
          from: "13:00",
          to: "17:00",
        },
      ],
      [weekDates[2]]: [
        {
          site: "Ingleburn | US01",
          room: "US01",
          from: "08:00",
          to: "16:00",
        },
      ],
    },
  },
  {
    name: "Emily Parker",
    hours: "40h",
    employeeType: "technologist",
    shifts: {
      [weekDates[1]]: [
        {
          site: "Edmondson Park | X-Ray",
          room: "X-Ray",
          from: "08:00",
          to: "17:00",
        },
      ],
      [weekDates[3]]: [
        {
          site: "Ingleburn | X-Ray",
          room: "X-Ray",
          from: "08:00",
          to: "17:00",
        },
      ],
    },
  },
];

function updateDateDisplay() {
  const startDate = new Date(currentDate);
  const endDate = new Date(currentDate);
  endDate.setDate(endDate.getDate() + 6);

  const startDay = startDate.getDate();
  const endDay = endDate.getDate();
  const month = startDate.toLocaleDateString("en-US", { month: "short" });
  const year = startDate.getFullYear();

  // Update the document title and date range
  document.title = `QUBS - Staff Rostering (${startDay}-${endDay} ${month} ${year})`;
  const dateRangeElement = document.querySelector(".date-range");
  if (dateRangeElement) {
    dateRangeElement.textContent = `${startDay}-${endDay} ${month} ${year}`;
  }

  // Update day headers
  const dayHeaders = document.querySelectorAll(".day-header");
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    if (dayHeaders[i]) {
      const headerDiv = dayHeaders[i];
      const dayNameDiv = headerDiv.querySelector(".day-name");
      const dayNumberDiv = headerDiv.querySelector(".day-number");

      if (dayNameDiv) dayNameDiv.textContent = dayNames[i] + ",";
      if (dayNumberDiv) dayNumberDiv.textContent = date.getDate();
    }
  }

  // Render staff data for the selected week
  renderStaffData(startDate);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Add variables to track selected date and staff for adding shifts
let selectedDate = null;
let selectedStaff = null;

function openModal(date = null, staffName = null) {
  const modal = document.getElementById("addShiftModal");
  // First make the modal visible without animation
  modal.classList.add("show");

  // Force a reflow to ensure the initial transform is applied
  modal.offsetHeight;

  // Then add the active class to trigger the animation
  requestAnimationFrame(() => {
    modal.classList.add("active");
  });

  // Store selected date and staff
  selectedDate = date;
  selectedStaff = staffName;

  // Pre-select the staff in dropdown if provided
  const staffSelect = document.getElementById("staffSelect");
  if (staffName && staffSelect) {
    const option = Array.from(staffSelect.options).find(
      (opt) => opt.value === staffName
    );
    if (option) {
      staffSelect.value = staffName;
    }
  }

  // Update modal title to show selected date
  const modalTitle = modal.querySelector(".modal-title");
  if (modalTitle && date) {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    modalTitle.textContent = `Add working hours`;
  } else {
    modalTitle.textContent = "Add working hours";
  }
}

// Add time conversion helper function
function convertTimeToMinutes(timeStr) {
  if (!timeStr) return 0;
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes;
}

// Add time calculation helper functions
function calculateShiftDuration(fromTime, toTime) {
  const startMinutes = convertTimeToMinutes(fromTime);
  const endMinutes = convertTimeToMinutes(toTime);
  let duration = endMinutes - startMinutes;

  // If end time is less than start time, assume it's next day
  if (duration < 0) {
    duration += 24 * 60; // Add 24 hours in minutes
  }

  return duration / 60; // Convert to hours
}

function formatHours(totalHours) {
  if (totalHours === 0) return "0h";

  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);

  if (minutes === 0) {
    return `${hours}h`;
  } else if (hours === 0) {
    return `${minutes}min`;
  }
  return `${hours}h ${minutes}min`;
}

function calculateStaffTotalHours(staff, startDate, endDate) {
  let totalMinutes = 0;

  // Convert dates to string format used in shifts
  const currentDate = new Date(startDate);
  const endDateObj = new Date(endDate);

  while (currentDate <= endDateObj) {
    const dateStr = formatDate(currentDate);
    if (staff.shifts && staff.shifts[dateStr]) {
      staff.shifts[dateStr].forEach((shift) => {
        if (shift && shift.from && shift.to) {
          const startMinutes = convertTimeToMinutes(shift.from);
          const endMinutes = convertTimeToMinutes(shift.to);
          let duration = endMinutes - startMinutes;

          // If end time is less than start time, assume it's next day
          if (duration < 0) {
            duration += 24 * 60; // Add 24 hours in minutes
          }

          if (!isNaN(duration) && duration > 0) {
            totalMinutes += duration;
          } else {
            console.warn(
              `Invalid duration for shift: ${shift.from} - ${shift.to}`
            );
          }
        }
      });
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // Convert total minutes to hours for formatting
  const totalHours = totalMinutes / 60;
  return formatHours(totalHours);
}

// Add a debug function to help verify calculations
function debugTimeCalculation(fromTime, toTime) {
  console.log(`Calculating duration for: ${fromTime} - ${toTime}`);
  console.log(`Start minutes: ${convertTimeToMinutes(fromTime)}`);
  console.log(`End minutes: ${convertTimeToMinutes(toTime)}`);
  console.log(`Duration: ${calculateShiftDuration(fromTime, toTime)} hours`);
}

function renderStaffData(startDate) {
  console.log("renderStaffData", staffData);
  const scheduleGrid = document.querySelector(".schedule-grid");
  if (!scheduleGrid) return;

  // Calculate end date (7 days from start)
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);

  // Clear existing staff rows except header
  const existingRows = scheduleGrid.querySelectorAll(".staff-row");
  existingRows.forEach((row) => row.remove());

  try {
    // Create staff rows
    staffData.forEach((staff, staffIndex) => {
      const staffRow = document.createElement("div");
      staffRow.className = "staff-row";
      staffRow.setAttribute("data-employee-type", staff.employeeType);

      // Calculate total hours for the current week
      const totalHours = calculateStaffTotalHours(staff, startDate, endDate);

      // Add staff info
      const staffInfo = document.createElement("div");
      staffInfo.className = "staff-info";
      staffInfo.innerHTML = `
              <div class="staff-name">${staff.name}</div>
              <div class="staff-hours">${totalHours}</div>
          `;
      staffRow.appendChild(staffInfo);

      // Add day cells
      for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        const dateStr = formatDate(currentDate);

        const dayCell = document.createElement("div");
        dayCell.className = "day-cell";
        dayCell.dataset.date = dateStr;
        dayCell.dataset.staffName = staff.name;
        dayCell.id = `cell-${staffIndex}-${i}`;

        // Add drag and drop event listeners
        dayCell.addEventListener("dragover", handleDragOver);
        dayCell.addEventListener("dragenter", handleDragEnter);
        dayCell.addEventListener("dragleave", handleDragLeave);
        dayCell.addEventListener("drop", handleDrop);

        // Add shifts for this day if they exist
        if (staff.shifts && staff.shifts[dateStr]) {
          staff.shifts[dateStr].forEach((shift) => {
            if (shift) {
              try {
                const shiftBlock = renderShiftBlock(shift, dateStr, staff.name);
                dayCell.appendChild(shiftBlock);
              } catch (error) {
                console.error("Error creating shift block:", error);
              }
            }
          });
        }

        // Add "+" button to all cells
        const addButton = document.createElement("div");
        addButton.className = "add-shift-btn";
        addButton.textContent = "+";
        addButton.addEventListener("click", () =>
          openModal(dateStr, staff.name)
        );
        dayCell.appendChild(addButton);

        staffRow.appendChild(dayCell);
      }

      scheduleGrid.appendChild(staffRow);
    });

    // Re-initialize tooltips
    initializeTooltips();

    // Calculate and update workload
    calculateWorkload(startDate);

    // Add this line to reinitialize handlers after rendering
    initializeShiftBlockHandlers();
  } catch (error) {
    console.error("Error rendering staff data:", error);
  }
}

// Helper function to get room from site text
function getShiftRoom(siteText) {
  if (!siteText) return "";
  try {
    if (siteText.includes("US01")) return "US01";
    if (siteText.includes("US02")) return "US02";
    if (siteText.includes("US03")) return "US03";
    if (siteText.includes("CT")) return "CT";
    if (siteText.includes("X-Ray")) return "X-Ray";
    return "";
  } catch (error) {
    console.error("Error getting shift room:", error);
    return "";
  }
}

// Add workloadData as a global variable
let workloadData = {
  "Edmondson Park": {
    total: { current: 0, max: 200 },
    US01: { current: 0, max: 40 },
    US02: { current: 0, max: 40 },
    US03: { current: 0, max: 40 },
    CT: { current: 0, max: 40 },
    "X-Ray": { current: 0, max: 40 },
  },
  Ingleburn: {
    total: { current: 0, max: 200 },
    US01: { current: 0, max: 40 },
    US02: { current: 0, max: 40 },
    US03: { current: 0, max: 40 },
    CT: { current: 0, max: 40 },
    "X-Ray": { current: 0, max: 40 },
  },
};

// Update calculateWorkload function to use global workloadData
function calculateWorkload(startDate) {
  // Convert startDate to Date object if it's a string
  startDate = startDate instanceof Date ? startDate : new Date(startDate);

  // Reset workload data
  Object.keys(workloadData).forEach((site) => {
    Object.keys(workloadData[site]).forEach((room) => {
      workloadData[site][room].current = 0;
    });
  });

  // Calculate end date
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);

  try {
    // Process staff data
    staffData.forEach((staff) => {
      if (staff.shifts) {
        Object.entries(staff.shifts).forEach(([dateStr, shifts]) => {
          const shiftDate = new Date(dateStr);
          // Normalize dates for comparison (ignore time)
          const normalizedShiftDate = new Date(
            shiftDate.getFullYear(),
            shiftDate.getMonth(),
            shiftDate.getDate()
          );
          const normalizedStartDate = new Date(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate()
          );
          const normalizedEndDate = new Date(
            endDate.getFullYear(),
            endDate.getMonth(),
            endDate.getDate()
          );

          if (
            normalizedShiftDate >= normalizedStartDate &&
            normalizedShiftDate <= normalizedEndDate &&
            Array.isArray(shifts)
          ) {
            shifts.forEach((shift) => {
              if (shift && shift.site && shift.from && shift.to) {
                // Extract site and room from shift data
                let site, room;
                if (shift.site.includes(" | ")) {
                  [site, room] = shift.site.split(" | ");
                } else {
                  site = shift.site;
                  room = shift.room || getShiftRoom(shift.site);
                }

                // Calculate duration
                const duration = calculateShiftDuration(shift.from, shift.to);

                // Update workload if site and room exist in workloadData
                if (workloadData[site] && workloadData[site][room]) {
                  workloadData[site][room].current += duration;
                  workloadData[site].total.current += duration;
                }
              }
            });
          }
        });
      }
    });

    // Update the display
    updateWorkloadDisplay(workloadData);
  } catch (error) {
    console.error("Error calculating workload:", error);
  }
}

// Update the sidebar workload display
function updateWorkloadDisplay(workloadData) {
  const sidebar = document.querySelector(".sidebar");
  sidebar.innerHTML = ""; // Clear existing content

  // Create sections for each site
  Object.keys(workloadData).forEach((site) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "workload-section";

    // Get total data and calculate percentage
    const totalData = workloadData[site].total;
    const totalPercentage = Math.min(
      (totalData.current / totalData.max) * 100,
      100
    );

    // Create the section header with total workload
    sectionDiv.innerHTML = `
    <div class="workload-header-section">
      <div class="section-title">${site}</div>
      <div class="workload-item total-workload">
        <div class="workload-header">
          <div class="workload-subtitle">Site Workload</div>
          <div class="workload-hours-container">
            <span class="workload-hours-current">${formatHours(
              totalData.current
            )}</span>
            <span class="workload-total-current">/ ${formatHours(
              totalData.max
            )}</span>
          </div>
        </div>
        <div class="workload-total-bar">
          <div class="workload-total-fill" style="width: ${totalPercentage}%"></div>
        </div>
      </div>
    </div>
    <div class="workload-content"></div>
  `;

    const workloadContent = sectionDiv.querySelector(".workload-content");

    // Add workload items for each room (excluding 'total')
    Object.entries(workloadData[site])
      .filter(([room]) => room !== "total")
      .forEach(([room, data]) => {
        const percentage = Math.min((data.current / data.max) * 100, 100);
        const roomDiv = document.createElement("div");
        roomDiv.className = "workload-item";
        roomDiv.setAttribute("data-room", room);
        roomDiv.innerHTML = `
        <div class="workload-header">
          <div class="workload-room">${room}</div>
          <div class="workload-hours-container">
            <span class="workload-hours">${formatHours(data.current)}</span>
            <span class="workload-total">/ ${formatHours(data.max)}</span>
          </div>
        </div>
        <div class="workload-bar">
          <div class="workload-fill" style="width: ${percentage}%"></div>
        </div>
      `;
        workloadContent.appendChild(roomDiv);
      });

    sidebar.appendChild(sectionDiv);
  });
}

function getWorkloadColorClass(percentage) {
  if (percentage >= 90) return "workload-pink";
  if (percentage >= 70) return "workload-blue";
  if (percentage >= 50) return "workload-purple";
  return "workload-green";
}

// Initialize tooltips
initializeTooltips();

// Update the JavaScript function that creates shift blocks
function getShiftRoom(siteText) {
  if (siteText.includes("US01")) return "US01";
  if (siteText.includes("US02")) return "US02";
  if (siteText.includes("US03")) return "US03";
  if (siteText.includes("CT")) return "CT";
  if (siteText.includes("X-Ray")) return "X-Ray";
  return "";
}

// Update the addShift function to include data-room
function addShift(e) {
  e.preventDefault();
  e.stopPropagation();

  // Clear any active states
  document.querySelectorAll(".shift-block").forEach((block) => {
    block.classList.remove("active");
  });
  // Clear the active shift ID
  delete document.body.dataset.activeShiftId;

  // Reset previous errors
  document.querySelectorAll(".form-group").forEach((group) => {
    group.classList.remove("error");
  });

  const staffSelect = document.getElementById("staffSelect");
  const siteSelect = document.getElementById("siteSelect");
  const roomSelect = document.getElementById("roomSelect");
  const fromTime = document.getElementById("fromTime");
  const toTime = document.getElementById("toTime");

  let hasError = false;

  // Validate each field
  if (!staffSelect.value) {
    staffSelect.parentElement.classList.add("error");
    hasError = true;
  }
  if (!siteSelect.value) {
    siteSelect.parentElement.classList.add("error");
    hasError = true;
  }
  if (!roomSelect.value) {
    roomSelect.parentElement.classList.add("error");
    hasError = true;
  }
  if (!fromTime.value) {
    fromTime.parentElement.classList.add("error");
    hasError = true;
  }
  if (!toTime.value) {
    toTime.parentElement.classList.add("error");
    hasError = true;
  }

  if (hasError) {
    return false;
  }

  try {
    // Find the staff member
    const staffMember = staffData.find(
      (staff) => staff.name === staffSelect.value
    );
    if (!staffMember) {
      showNotification("Staff member not found");
      return false;
    }

    // Initialize shifts if needed
    if (!staffMember.shifts) {
      staffMember.shifts = {};
    }

    const targetDate = selectedDate || formatDate(currentDate);
    if (!staffMember.shifts[targetDate]) {
      staffMember.shifts[targetDate] = [];
    }

    // Create the new shift object
    const newShift = {
      id: generateUniqueId(),
      site: `${siteSelect.value} | ${roomSelect.value}`,
      room: roomSelect.value,
      from: fromTime.value,
      to: toTime.value,
      type: `shift-${roomSelect.value.toLowerCase()}`,
    };

    // Add the new shift
    staffMember.shifts[targetDate].push(newShift);

    // Sort shifts by start time
    staffMember.shifts[targetDate].sort((a, b) => {
      return convertTimeToMinutes(a.from) - convertTimeToMinutes(b.from);
    });

    // Close modal first
    closeModal();

    // Then re-render and show notification
    renderStaffData(currentDate);
    calculateWorkload(currentDate); // Recalculate workload after adding shift
    showNotification("Shift added successfully!");
    return false;
  } catch (error) {
    console.error("Error adding shift:", error);
    showNotification("Error adding shift. Please try again.");
    return false;
  }
}

// Update the renderStaffData function to include data-room
function renderShiftBlock(shift) {
  const shiftBlock = document.createElement("div");
  shiftBlock.className = "shift-block";
  shiftBlock.setAttribute("data-room", getShiftRoom(shift.site));
  shiftBlock.innerHTML = `
          <div class="shift-title">${shift.site}</div>
          <div class="shift-time">${shift.from} - ${shift.to}</div>
      `;
  shiftBlock.draggable = true;
  return shiftBlock;
}

function handleDragStart(e) {
  console.log("handleDragStart", e.target);
  if (e.target.classList.contains("disabled")) {
    e.preventDefault();
    return;
  }

  draggedShift = e.target;

  setTimeout(() => {
    draggedShift.classList.add("dragging");
  }, 0);

  // Store the original cell and shift data
  draggedShift.dataset.originalCell = draggedShift.parentNode.id;

  // Ensure we have valid shift data
  try {
    const shiftData = JSON.parse(draggedShift.dataset.shiftData);
    if (!shiftData.id) {
      shiftData.id = generateUniqueId();
      draggedShift.dataset.shiftData = JSON.stringify(shiftData);
    }
  } catch (error) {
    console.error("Error preparing shift for drag:", error);
    e.preventDefault();
    return;
  }

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", "");

  const dragImage = draggedShift.cloneNode(true);
  dragImage.style.opacity = "0.5";
  dragImage.style.position = "absolute";
  dragImage.style.top = "-1000px";
  document.body.appendChild(dragImage);
  e.dataTransfer.setDragImage(dragImage, 0, 0);
  setTimeout(() => document.body.removeChild(dragImage), 0);
}

function handleDragEnd(e) {
  console.log("handleDragEnd");
  // Remove dragging class
  e.target.classList.remove("dragging");

  // Remove drag-over class from all cells
  document.querySelectorAll(".drag-over").forEach((cell) => {
    cell.classList.remove("drag-over");
  });

  draggedShift = null;
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  const cell = e.currentTarget;

  // Only add drag-over class if not already present
  if (!cell.classList.contains("drag-over")) {
    cell.classList.add("drag-over");
  }

  e.dataTransfer.dropEffect = "move";
  return false;
}

function handleDragEnter(e) {
  e.preventDefault();
  // Remove drag-over class from all other cells
  document.querySelectorAll(".drag-over").forEach((cell) => {
    if (cell !== e.currentTarget) {
      cell.classList.remove("drag-over");
    }
  });
}

function handleDragLeave(e) {
  // Only remove the class if we're leaving the cell (not entering a child element)
  if (!e.currentTarget.contains(e.relatedTarget)) {
    e.currentTarget.classList.remove("drag-over");
  }
}

function handleDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove("drag-over");
  if (!draggedShift || draggedShift.classList.contains("disabled")) return;

  const targetCell = e.currentTarget;
  const sourceCell = draggedShift.parentNode;

  const targetDate = targetCell.dataset.date;
  const targetStaffName = targetCell.dataset.staffName;
  const sourceDate = draggedShift.dataset.date;
  const sourceStaffName = draggedShift.dataset.staffName;
  const shiftId = draggedShift.dataset.shiftId;
  console.log(
    draggedShift.dataset,
    sourceDate,
    targetDate,
    sourceStaffName,
    targetStaffName
  );
  if (sourceDate === targetDate && sourceStaffName === targetStaffName) {
    return;
  }

  try {
    const shiftData = JSON.parse(draggedShift.dataset.shiftData);

    // Ensure room and type are preserved
    shiftData.room = shiftData.room || getShiftRoom(shiftData.site);
    shiftData.type = `shift-${shiftData.room.toLowerCase()}`;

    // Find source staff member and remove the shift
    const sourceStaff = staffData.find(
      (staff) => staff.name === sourceStaffName
    );
    if (sourceStaff && sourceStaff.shifts[sourceDate]) {
      // Remove only the specific shift by ID
      sourceStaff.shifts[sourceDate] = sourceStaff.shifts[sourceDate].filter(
        (shift) => {
          // If we have an ID, use it for exact matching
          if (shiftId && shift.id) {
            return shift.id !== shiftId;
          }
          // Fallback to time/room matching only if no ID is available
          return !(
            shift.from === shiftData.from &&
            shift.to === shiftData.to &&
            shift.room === shiftData.room
          );
        }
      );

      // Clean up empty date entry
      if (sourceStaff.shifts[sourceDate].length === 0) {
        delete sourceStaff.shifts[sourceDate];
      }
    }

    // Find target staff member and add the shift
    const targetStaff = staffData.find(
      (staff) => staff.name === targetStaffName
    );
    if (!targetStaff) {
      console.error("Target staff not found");
      return;
    }

    // Initialize shifts array if needed
    if (!targetStaff.shifts[targetDate]) {
      targetStaff.shifts[targetDate] = [];
    }

    // Ensure the shift has an ID and preserve room information
    if (!shiftData.id) {
      shiftData.id = generateUniqueId();
    }

    // Add the shift to target staff with preserved styling
    targetStaff.shifts[targetDate].push({
      ...shiftData,
      room: shiftData.room,
      type: `shift-${shiftData.room.toLowerCase()}`,
    });

    // Sort shifts by start time
    targetStaff.shifts[targetDate].sort((a, b) => {
      return convertTimeToMinutes(a.from) - convertTimeToMinutes(b.from);
    });

    // Re-render the schedule
    renderStaffData(currentDate);
    calculateWorkload(currentDate); // Recalculate workload after moving shift
  } catch (error) {
    console.error("Error moving shift:", error);
  }
}

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Add time conversion helper function
function convertTo24Hour(time) {
  const [timeStr, meridiem] = time.toLowerCase().split(" ");
  let [hours, minutes] = timeStr.split(":").map(Number);

  if (meridiem === "pm" && hours !== 12) {
    hours += 12;
  } else if (meridiem === "am" && hours === 12) {
    hours = 0;
  }

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

function closeModal() {
  // Clear any active states
  document.querySelectorAll(".shift-block").forEach((block) => {
    block.classList.remove("active");
  });
  document.querySelectorAll(".shift-suggestion").forEach((block) => {
    block.classList.remove("active");
  });
  // Clear the active shift ID
  delete document.body.dataset.activeShiftId;

  const modal = document.getElementById("addShiftModal");
  modal.classList.remove("active");

  // Wait for the animation to complete before hiding the modal
  setTimeout(() => {
    modal.classList.remove("show");
  }, 300); // Match the transition duration

  // Reset selected date and staff
  selectedDate = null;
  selectedStaff = null;
}

function bindEventListeners() {
  // Navigation arrows
  document.querySelectorAll(".nav-arrow").forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
      if (index === 0) {
        // Previous week
        currentDate.setDate(currentDate.getDate() - 7);
      } else {
        // Next week
        currentDate.setDate(currentDate.getDate() + 7);
      }
      updateDateDisplay();
      renderStaffData(currentDate);
      calculateWorkload(currentDate); // Recalculate workload for the new week
    });
  });

  // Today button
  document.querySelector(".today-btn").addEventListener("click", () => {
    currentDate = new Date();
    // Set to Monday of current week
    const day = currentDate.getDay();
    const diff = currentDate.getDate() - day + (day === 0 ? -6 : 1);
    currentDate.setDate(diff);
    updateDateDisplay();
    renderStaffData(currentDate);
    calculateWorkload(currentDate); // Recalculate workload when returning to current week
  });

  // Add shift buttons - only attach to the + button
  document.querySelectorAll(".add-shift-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation(); // Prevent event bubbling
      const cell = e.target.closest(".day-cell");
      if (cell) {
        const date = cell.dataset.date;
        const staffName = cell.dataset.staffName;
        openModal(date, staffName);
      }
    });
  });

  // Remove any click handlers from day cells that might trigger the add modal
  document.querySelectorAll(".day-cell").forEach((cell) => {
    cell.addEventListener("click", (e) => {
      // Only open add modal if clicking directly on the cell (not on a shift)
      if (e.target === cell) {
        const date = cell.dataset.date;
        const staffName = cell.dataset.staffName;
        openModal(date, staffName);
      }
    });
  });
}

function filterSchedule(dropdown) {
  const value = dropdown.value;
  const staffRows = document.querySelectorAll(".staff-row");

  if (dropdown.options[0].text.includes("employee types")) {
    // Filter by employee type (simplified - show/hide rows)
    staffRows.forEach((row, index) => {
      if (value === "All employee types") {
        row.style.display = "grid";
      } else {
        // Simple logic - hide some staff based on filter
        row.style.display = index % 2 === 0 ? "grid" : "none";
      }
    });
  } else if (dropdown.options[0].text.includes("sites")) {
    // Filter by site - highlight relevant shifts
    const shiftBlocks = document.querySelectorAll(".shift-block");
    shiftBlocks.forEach((block) => {
      if (value === "All sites") {
        block.style.opacity = "1";
      } else {
        const isRelevant = block.textContent
          .toLowerCase()
          .includes(value.toLowerCase());
        block.style.opacity = isRelevant ? "1" : "1";
      }
    });
  }
}

function updateWorkload() {
  // Animate workload bars
  const workloadFills = document.querySelectorAll(".workload-fill");
  workloadFills.forEach((fill) => {
    const currentWidth = fill.style.width;
    fill.style.width = "0%";
    setTimeout(() => {
      fill.style.width = currentWidth;
    }, 100);
  });
}

function showNotification(message) {
  // Create and show notification
  const notification = document.createElement("div");
  notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: white;
          color: #10b981;
          padding: 12px 20px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 2000;
          transform: translateX(100%);
          transition: transform 0.3s ease;
      `;
  notification.textContent = message;
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Responsive handling
function handleResize() {
  const sidebar = document.querySelector(".sidebar");
  const scheduleSection = document.querySelector(".schedule-section");

  if (window.innerWidth <= 768) {
    sidebar.style.height = "auto";
    scheduleSection.style.height = "auto";
  }
}

window.addEventListener("resize", handleResize);
handleResize(); // Initial call

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal(); // Close modal on ESC
  }
  if (e.key === "n" && e.ctrlKey) {
    e.preventDefault();
    openModal(); // Ctrl + N to open Add Shift modal
  }
  if (e.key === "ArrowLeft" && e.altKey) {
    // Alt + Left Arrow: Previous week
    currentDate.setDate(currentDate.getDate() - 7);
    updateDateDisplay();
  }
  if (e.key === "ArrowRight" && e.altKey) {
    // Alt + Right Arrow: Next week
    currentDate.setDate(currentDate.getDate() + 7);
    updateDateDisplay();
  }
  if (e.key === "t" && e.ctrlKey) {
    // Ctrl + T: Go to current week
    e.preventDefault();
    currentDate = new Date();
    const day = currentDate.getDay();
    const diff = currentDate.getDate() - day + (day === 0 ? -6 : 1);
    currentDate.setDate(diff);
    updateDateDisplay();
  }
});

// Auto-save functionality (simulated)
let autoSaveTimeout;
function triggerAutoSave() {
  clearTimeout(autoSaveTimeout);
  autoSaveTimeout = setTimeout(() => {
    console.log("Auto-saving schedule...");
    // Here you would typically send data to server
  }, 2000);
}

// Color coding for different shift types
function getShiftColor(siteText) {
  if (siteText.includes("Edmondson Park | US01")) return "shift-edmondson";
  if (siteText.includes("Edmondson Park | US02")) return "shift-green";
  if (siteText.includes("Edmondson Park | US03")) return "shift-edmondson";
  if (siteText.includes("Site | Room")) return "shift-site";
  return "shift-purple";
}

// Initialize tooltips for shift blocks
function initializeTooltips() {
  document.querySelectorAll(".shift-block").forEach((block) => {
    block.title = `Click to edit shift details\nDrag to move to different day`;
  });
}

// Add the fillShiftDetails function
function fillShiftDetails(event, site, room, fromTime, toTime) {
  const siteSelect = document.getElementById("siteSelect");
  const roomSelect = document.getElementById("roomSelect");
  const fromTimeSelect = document.getElementById("fromTime");
  const toTimeSelect = document.getElementById("toTime");

  // Set site value first
  siteSelect.value = site;

  // Update room options based on the selected site
  updateRoomOptions(null, siteSelect, roomSelect);

  // Set room value after options are updated
  roomSelect.value = room;
  fromTimeSelect.value = fromTime;
  toTimeSelect.value = toTime;

  // Remove 'active' class from all suggestions
  const suggestions = document.querySelectorAll(".shift-suggestion");
  suggestions.forEach((s) => s.classList.remove("active"));

  // Add 'active' class to the clicked element
  event.currentTarget.classList.add("active");
}

// Add variables to store current shift being edited
let currentEditingShift = null;
let currentEditingDate = null;

// Function to open edit modal
function openEditModal(shift, date, staffName) {
  console.log("Opening edit modal with:", { shift, date, staffName }); // Debug log

  if (!shift || !date || !staffName) {
    console.error("Missing required data:", { shift, date, staffName });
    return;
  }

  const modal = document.getElementById("editShiftModal");
  currentEditingShift = shift;
  currentEditingDate = date;

  // Show the modal
  modal.classList.add("show");
  requestAnimationFrame(() => {
    modal.classList.add("active");
  });

  try {
    // Get form elements
    const editStaffSelect = document.getElementById("editStaffSelect");
    const editSiteSelect = document.getElementById("editSiteSelect");
    const editRoomSelect = document.getElementById("editRoomSelect");
    const editFromTime = document.getElementById("editFromTime");
    const editToTime = document.getElementById("editToTime");

    if (
      !editStaffSelect ||
      !editSiteSelect ||
      !editRoomSelect ||
      !editFromTime ||
      !editToTime
    ) {
      console.error("Missing form elements");
      return;
    }

    // Set staff and store original staff name
    editStaffSelect.value = staffName;
    editStaffSelect.dataset.originalStaff = staffName;

    // Update site options using workload data
    updateSiteOptions(null, editSiteSelect);

    // Parse site and room from shift data
    let site = "";
    let room = "";

    if (shift.site && shift.site.includes(" | ")) {
      [site, room] = shift.site.split(" | ");
    } else if (shift.site) {
      // Handle cases where site is in different format
      if (shift.site.includes("Edmondson Park")) {
        site = "Edmondson Park";
      } else if (shift.site.includes("Ingleburn")) {
        site = "Ingleburn";
      }
      // Extract room from shift data
      room = shift.room || getShiftRoom(shift.site);
    }

    // Set site and update room options
    if (site) {
      editSiteSelect.value = site;
      updateRoomOptions(null, editSiteSelect, editRoomSelect);
    } else {
      // Default to Edmondson Park if no site is found
      editSiteSelect.value = "Edmondson Park";
      updateRoomOptions(null, editSiteSelect, editRoomSelect);
    }

    // Set room after options are updated
    if (room) {
      editRoomSelect.value = room;
    }

    // Handle time values
    let fromTime = shift.from || "";
    let toTime = shift.to || "";

    // Convert times to 24-hour format if needed
    if (fromTime.includes("am") || fromTime.includes("pm")) {
      fromTime = convertTo24Hour(fromTime);
    }
    if (toTime.includes("am") || toTime.includes("pm")) {
      toTime = convertTo24Hour(toTime);
    }

    // Ensure times are in HH:mm format
    fromTime = fromTime.padStart(5, "0");
    toTime = toTime.padStart(5, "0");

    editFromTime.value = fromTime;
    editToTime.value = toTime;

    // Update modal title with date
    const modalTitle = modal.querySelector(".modal-title");
    if (modalTitle && date) {
      const dateObj = new Date(date);
      const formattedDate = dateObj.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      modalTitle.textContent = `Edit working hours`;
    }
  } catch (error) {
    console.error("Error in openEditModal:", error);
  }
}

// Function to close edit modal
function closeEditModal() {
  // Remove active class from all shift blocks
  document.querySelectorAll(".shift-block").forEach((block) => {
    block.classList.remove("active");
  });
  // Remove active class from all suggestions
  document.querySelectorAll(".shift-suggestion").forEach((block) => {
    block.classList.remove("active");
  });
  const modal = document.getElementById("editShiftModal");
  modal.classList.remove("active");
  setTimeout(() => {
    modal.classList.remove("show");
  }, 300);
  currentEditingShift = null;
  currentEditingDate = null;
}

// Function to fill edit form from suggestions
function fillEditShiftDetails(event, site, room, fromTime, toTime) {
  const editStaffSelect = document.getElementById("editStaffSelect");
  const editSiteSelect = document.getElementById("editSiteSelect");
  const editRoomSelect = document.getElementById("editRoomSelect");
  const editFromTime = document.getElementById("editFromTime");
  const editToTime = document.getElementById("editToTime");

  // Set site value first
  editSiteSelect.value = site;

  // Update room options based on the selected site
  updateRoomOptions(editStaffSelect, editSiteSelect, editRoomSelect);

  // Set other form values
  editRoomSelect.value = room;
  editFromTime.value = fromTime;
  editToTime.value = toTime;

  // Add visual feedback for suggestions
  // const suggestions = document.querySelectorAll(".shift-suggestion");
  // suggestions.forEach((suggestion) => {
  //   suggestion.style.opacity = "0.7";
  // });

  // Remove 'active' class from all suggestions
  const suggestions = document.querySelectorAll(".shift-suggestion");
  suggestions.forEach((s) => s.classList.remove("active"));
  // Add 'active' class to the clicked element
  event.currentTarget.classList.add("active");

  // Highlight the selected suggestion
  // event.currentTarget.style.opacity = "1";
}

// Function to handle shift edit
function handleShiftEdit(e) {
  e.preventDefault();

  if (!currentEditingShift || !currentEditingDate) {
    console.error("No shift selected for editing");
    showNotification("Error: No shift selected");
    return;
  }

  try {
    const oldStaffName =
      document.getElementById("editStaffSelect").dataset.originalStaff;
    const newStaffName = document.getElementById("editStaffSelect").value;
    const site = document.getElementById("editSiteSelect").value;
    const room = document.getElementById("editRoomSelect").value;
    const fromTime = document.getElementById("editFromTime").value;
    const toTime = document.getElementById("editToTime").value;

    console.log("Editing shift:", {
      currentEditingShift,
      oldStaffName,
      newStaffName,
      site,
      room,
      fromTime,
      toTime,
    });

    // Validate inputs
    if (!newStaffName || !site || !room || !fromTime || !toTime) {
      showNotification("Please fill in all fields");
      return;
    }

    // Create the updated shift object with the same ID
    const updatedShift = {
      ...currentEditingShift, // Preserve any existing properties
      id: currentEditingShift.id,
      site: `${site} | ${room}`,
      room: room,
      from: fromTime,
      to: toTime,
      type: `shift-${room.toLowerCase()}`,
    };

    // Find both staff members
    const originalStaffMember = staffData.find(
      (staff) => staff.name === oldStaffName
    );
    const targetStaffMember = staffData.find(
      (staff) => staff.name === newStaffName
    );

    if (!targetStaffMember) {
      console.error("Target staff member not found:", newStaffName);
      showNotification("Error: Selected staff member not found");
      return;
    }

    console.log(
      "Before update - Target staff shifts:",
      JSON.parse(JSON.stringify(targetStaffMember.shifts[currentEditingDate]))
    );

    // Initialize shifts for target staff member if needed
    if (!targetStaffMember.shifts) {
      targetStaffMember.shifts = {};
    }
    if (!targetStaffMember.shifts[currentEditingDate]) {
      targetStaffMember.shifts[currentEditingDate] = [];
    }

    // If same staff member, update in place
    if (oldStaffName === newStaffName) {
      console.log("Updating shift for same staff member");
      const shiftIndex = targetStaffMember.shifts[currentEditingDate].findIndex(
        (s) => s.id === currentEditingShift.id
      );

      console.log("Found shift at index:", shiftIndex);

      if (shiftIndex !== -1) {
        // Replace the shift at the found index
        targetStaffMember.shifts[currentEditingDate][shiftIndex] = updatedShift;
        console.log("Updated shift in place");
      } else {
        // If we couldn't find the shift by ID, try finding it by matching properties
        const alternateIndex = targetStaffMember.shifts[
          currentEditingDate
        ].findIndex(
          (s) =>
            s.from === currentEditingShift.from &&
            s.to === currentEditingShift.to &&
            s.room === currentEditingShift.room
        );

        if (alternateIndex !== -1) {
          targetStaffMember.shifts[currentEditingDate][alternateIndex] =
            updatedShift;
          console.log("Updated shift using alternate matching");
        } else {
          console.error("Could not find original shift to update");
          return;
        }
      }
    } else {
      // Different staff member - remove from original and add to target
      console.log("Moving shift to different staff member");

      // Remove from original staff member
      if (
        originalStaffMember &&
        originalStaffMember.shifts[currentEditingDate]
      ) {
        const originalLength =
          originalStaffMember.shifts[currentEditingDate].length;
        originalStaffMember.shifts[currentEditingDate] =
          originalStaffMember.shifts[currentEditingDate].filter(
            (s) => s.id !== currentEditingShift.id
          );

        console.log(
          `Removed shift from original staff member (${originalLength} -> ${originalStaffMember.shifts[currentEditingDate].length})`
        );

        if (originalStaffMember.shifts[currentEditingDate].length === 0) {
          delete originalStaffMember.shifts[currentEditingDate];
        }
      }

      // Add to target staff member
      targetStaffMember.shifts[currentEditingDate].push(updatedShift);
      console.log("Added shift to target staff member");
    }

    // Sort shifts by start time
    targetStaffMember.shifts[currentEditingDate].sort((a, b) => {
      return convertTimeToMinutes(a.from) - convertTimeToMinutes(b.from);
    });

    console.log(
      "After update - Target staff shifts:",
      JSON.parse(JSON.stringify(targetStaffMember.shifts[currentEditingDate]))
    );

    // Force a complete re-render
    renderStaffData(currentDate);
    calculateWorkload(currentDate);

    // Close modal and show success message
    closeEditModal();
    showNotification("Shift updated successfully!");

    // Force a refresh of shift blocks
    setTimeout(() => {
      initializeShiftBlockHandlers();
    }, 100);
  } catch (error) {
    console.error("Error updating shift:", error);
    showNotification("Error updating shift. Please try again.");
  }
}

// Function to delete shift
function deleteShift() {
  if (!currentEditingShift || !currentEditingDate) {
    console.error("No shift selected for deletion");
    return;
  }

  try {
    const staffName = document.getElementById("editStaffSelect").value;
    const staffMember = staffData.find((staff) => staff.name === staffName);

    if (!staffMember) {
      console.error("Staff member not found:", staffName);
      showNotification("Error: Staff member not found");
      return;
    }

    if (!staffMember.shifts[currentEditingDate]) {
      console.error("No shifts found for date:", currentEditingDate);
      showNotification("Error: No shifts found for this date");
      return;
    }

    // Find the shift to delete by matching time and room
    const shiftToDelete = staffMember.shifts[currentEditingDate].find(
      (shift) => {
        // Normalize times for comparison
        const normalizeTime = (time) => {
          if (!time) return "";
          // Convert 12-hour format to 24-hour if needed
          if (
            time.toLowerCase().includes("am") ||
            time.toLowerCase().includes("pm")
          ) {
            return convertTo24Hour(time);
          }
          return time;
        };

        const shiftFrom = normalizeTime(shift.from);
        const shiftTo = normalizeTime(shift.to);
        const currentFrom = normalizeTime(currentEditingShift.from);
        const currentTo = normalizeTime(currentEditingShift.to);

        // Get room from site if not directly available
        const shiftRoom = shift.room || getShiftRoom(shift.site);
        const currentRoom =
          currentEditingShift.room || getShiftRoom(currentEditingShift.site);

        const timeMatch = shiftFrom === currentFrom && shiftTo === currentTo;
        const roomMatch = shiftRoom === currentRoom;

        return timeMatch && roomMatch;
      }
    );

    if (!shiftToDelete) {
      console.error("Shift not found for deletion");
      showNotification("Error: Shift not found");
      return;
    }

    // Remove the shift using the normalized comparison
    staffMember.shifts[currentEditingDate] = staffMember.shifts[
      currentEditingDate
    ].filter((shift) => {
      const normalizeTime = (time) => {
        if (!time) return "";
        if (
          time.toLowerCase().includes("am") ||
          time.toLowerCase().includes("pm")
        ) {
          return convertTo24Hour(time);
        }
        return time;
      };

      const shiftRoom = shift.room || getShiftRoom(shift.site);
      const deleteRoom = shiftToDelete.room || getShiftRoom(shiftToDelete.site);

      return (
        normalizeTime(shift.from) !== normalizeTime(shiftToDelete.from) ||
        normalizeTime(shift.to) !== normalizeTime(shiftToDelete.to) ||
        shiftRoom !== deleteRoom
      );
    });

    // Clean up empty date entries
    if (staffMember.shifts[currentEditingDate].length === 0) {
      delete staffMember.shifts[currentEditingDate];
    }

    // Close modal first
    closeEditModal();

    // Then re-render the schedule
    renderStaffData(currentDate);

    // Show success message
    showNotification("Shift deleted successfully");
  } catch (error) {
    console.error("Error deleting shift:", error);
    showNotification("Error deleting shift. Please try again.");
  }
}

// Update the shift block click handler
function initializeShiftBlockHandlers() {
  document.querySelectorAll(".shift-block").forEach((block) => {
    // Remove existing listeners by cloning
    const oldClone = block.cloneNode(true);
    const newBlock = block.parentNode.replaceChild(oldClone, block);

    // Add drag event listeners
    oldClone.addEventListener("dragstart", handleDragStart);
    oldClone.addEventListener("dragend", handleDragEnd);

    const date = oldClone.dataset.date;
    const staffName = oldClone.dataset.staffName;
    let shiftData;

    try {
      shiftData = oldClone.dataset.shiftData
        ? JSON.parse(oldClone.dataset.shiftData)
        : null;
    } catch (error) {
      console.warn("Invalid shift data:", oldClone.dataset.shiftData);
      return;
    }

    if (!shiftData) return;

    oldClone.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Remove active class from all shift blocks
      document.querySelectorAll(".shift-block").forEach((block) => {
        block.classList.remove("active");
      });

      // Add active class to clicked shift block
      oldClone.classList.add("active");

      openEditModal(shiftData, date, staffName);
    });
  });
}

// Add form submit handler
document.addEventListener("DOMContentLoaded", function () {
  const editForm = document.getElementById("editShiftForm");
  if (editForm) {
    editForm.addEventListener("submit", handleShiftEdit);
  }
  initializeShiftBlockHandlers();
});

// Add staff-room mapping
const staffRoomMapping = {
  "Greg Lane": ["US01", "US02", "US03", "CT", "X-Ray"],
  "Arlene Richards": ["US01", "US02", "US03", "CT", "X-Ray"],
  "Cameron Edwards": ["US01", "US02", "US03", "CT", "X-Ray"],
  "Marjorie Hawkins": ["US01", "US02", "US03", "CT", "X-Ray"],
};

// Function to update site options based on workload data
function updateSiteOptions(staffSelect, siteSelect) {
  if (!siteSelect) return;

  // Clear existing options
  siteSelect.innerHTML = '<option value="">Select Site</option>';

  // Get sites from workload data
  const workloadSites = Object.keys(workloadData);
  workloadSites.forEach((site) => {
    const option = document.createElement("option");
    option.value = site;
    option.textContent = site;
    siteSelect.appendChild(option);
  });
}

// Function to update room options based on selected site from workload data
function updateRoomOptions(staffSelect, siteSelect, roomSelect) {
  if (!siteSelect || !roomSelect) return;

  const selectedSite = siteSelect.value;

  // Clear existing options
  roomSelect.innerHTML = '<option value="">Select Room</option>';

  if (selectedSite && workloadData[selectedSite]) {
    // Get all rooms from workload data for the selected site
    const rooms = Object.keys(workloadData[selectedSite]).filter(
      (room) => room !== "total"
    );
    rooms.forEach((room) => {
      const option = document.createElement("option");
      option.value = room;
      option.textContent = room;
      roomSelect.appendChild(option);
    });
  }
}

// Initialize form handlers for both add and edit modals
document.addEventListener("DOMContentLoaded", function () {
  // Add modal form handlers
  const addStaffSelect = document.getElementById("staffSelect");
  const addSiteSelect = document.getElementById("siteSelect");
  const addRoomSelect = document.getElementById("roomSelect");

  if (addStaffSelect) {
    addStaffSelect.addEventListener("change", () => {
      updateSiteOptions(null, addSiteSelect);
      updateRoomOptions(null, addSiteSelect, addRoomSelect);
    });
  }

  if (addSiteSelect) {
    addSiteSelect.addEventListener("change", () => {
      updateRoomOptions(null, addSiteSelect, addRoomSelect);
    });
  }

  // Edit modal dependencies
  const editStaffSelect = document.getElementById("editStaffSelect");
  const editSiteSelect = document.getElementById("editSiteSelect");
  const editRoomSelect = document.getElementById("editRoomSelect");

  if (editStaffSelect && editSiteSelect && editRoomSelect) {
    // Initialize site options
    updateSiteOptions(null, editSiteSelect);

    // Initialize room options with default site
    if (editSiteSelect.value) {
      updateRoomOptions(null, editSiteSelect, editRoomSelect);
    } else {
      editSiteSelect.value = "Edmondson Park";
      updateRoomOptions(null, editSiteSelect, editRoomSelect);
    }

    // Add event listeners
    editStaffSelect.addEventListener("change", () => {
      updateSiteOptions(null, editSiteSelect);
      updateRoomOptions(null, editSiteSelect, editRoomSelect);
    });

    editSiteSelect.addEventListener("change", () => {
      updateRoomOptions(null, editSiteSelect, editRoomSelect);
    });
  }
});

// Update the renderShiftBlock function
function renderShiftBlock(shift, date, staffName) {
  const shiftBlock = document.createElement("div");
  shiftBlock.className = "shift-block";
  shiftBlock.setAttribute("data-room", shift.room || getShiftRoom(shift.site));

  // Ensure times are in 24-hour format
  let fromTime = shift.from;
  let toTime = shift.to;

  if (fromTime.includes("am") || fromTime.includes("pm")) {
    fromTime = convertTo24Hour(fromTime);
  }
  if (toTime.includes("am") || toTime.includes("pm")) {
    toTime = convertTo24Hour(toTime);
  }

  // Create standardized shift data with all necessary properties
  const standardizedShift = {
    ...shift,
    site: shift.site,
    room: shift.room || getShiftRoom(shift.site),
    from: fromTime,
    to: toTime,
    id: shift.id || generateUniqueId(),
  };

  shiftBlock.innerHTML = `
          <div class="shift-title">${standardizedShift.site}</div>
          <div class="shift-time">${fromTime} - ${toTime}</div>
      `;
  shiftBlock.draggable = true;

  // Store complete shift data
  shiftBlock.dataset.shiftData = JSON.stringify(standardizedShift);
  shiftBlock.dataset.date = date;
  shiftBlock.dataset.staffName = staffName;

  return shiftBlock;
}

// Remove old click handlers and initialize new ones
function initializeShiftBlockHandlers() {
  document.querySelectorAll(".shift-block").forEach((block) => {
    // Remove existing listeners by cloning
    const oldClone = block.cloneNode(true);
    const newBlock = block.parentNode.replaceChild(oldClone, block);

    // Add drag event listeners
    oldClone.addEventListener("dragstart", handleDragStart);
    oldClone.addEventListener("dragend", handleDragEnd);

    const date = oldClone.dataset.date;
    const staffName = oldClone.dataset.staffName;
    let shiftData;

    try {
      shiftData = oldClone.dataset.shiftData
        ? JSON.parse(oldClone.dataset.shiftData)
        : null;
    } catch (error) {
      console.warn("Invalid shift data:", oldClone.dataset.shiftData);
      return;
    }

    if (!shiftData) return;

    oldClone.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Remove active class from all shift blocks
      document.querySelectorAll(".shift-block").forEach((block) => {
        block.classList.remove("active");
      });

      // Add active class to clicked shift block
      oldClone.classList.add("active");

      openEditModal(shiftData, date, staffName);
    });
  });
}

// Update the openEditModal function
function openEditModal(shift, date, staffName) {
  console.log("Opening edit modal with:", { shift, date, staffName }); // Debug log

  if (!shift || !date || !staffName) {
    console.error("Missing required data:", { shift, date, staffName });
    return;
  }

  const modal = document.getElementById("editShiftModal");
  currentEditingShift = shift;
  currentEditingDate = date;

  // Show the modal
  modal.classList.add("show");
  requestAnimationFrame(() => {
    modal.classList.add("active");
  });

  try {
    // Get form elements
    const editStaffSelect = document.getElementById("editStaffSelect");
    const editSiteSelect = document.getElementById("editSiteSelect");
    const editRoomSelect = document.getElementById("editRoomSelect");
    const editFromTime = document.getElementById("editFromTime");
    const editToTime = document.getElementById("editToTime");

    if (
      !editStaffSelect ||
      !editSiteSelect ||
      !editRoomSelect ||
      !editFromTime ||
      !editToTime
    ) {
      console.error("Missing form elements");
      return;
    }

    // Set staff and store original staff name
    editStaffSelect.value = staffName;
    editStaffSelect.dataset.originalStaff = staffName;

    // Update site options using workload data
    updateSiteOptions(null, editSiteSelect);

    // Parse site and room from shift data
    let site = "";
    let room = "";

    if (shift.site && shift.site.includes(" | ")) {
      [site, room] = shift.site.split(" | ");
    } else if (shift.site) {
      // Handle cases where site is in different format
      if (shift.site.includes("Edmondson Park")) {
        site = "Edmondson Park";
      } else if (shift.site.includes("Ingleburn")) {
        site = "Ingleburn";
      }
      // Extract room from shift data
      room = shift.room || getShiftRoom(shift.site);
    }

    // Set site and update room options
    if (site) {
      editSiteSelect.value = site;
      updateRoomOptions(null, editSiteSelect, editRoomSelect);
    } else {
      // Default to Edmondson Park if no site is found
      editSiteSelect.value = "Edmondson Park";
      updateRoomOptions(null, editSiteSelect, editRoomSelect);
    }

    // Set room after options are updated
    if (room) {
      editRoomSelect.value = room;
    }

    // Handle time values
    let fromTime = shift.from || "";
    let toTime = shift.to || "";

    // Convert times to 24-hour format if needed
    if (fromTime.includes("am") || fromTime.includes("pm")) {
      fromTime = convertTo24Hour(fromTime);
    }
    if (toTime.includes("am") || toTime.includes("pm")) {
      toTime = convertTo24Hour(toTime);
    }

    // Ensure times are in HH:mm format
    fromTime = fromTime.padStart(5, "0");
    toTime = toTime.padStart(5, "0");

    editFromTime.value = fromTime;
    editToTime.value = toTime;

    // Update modal title with date
    const modalTitle = modal.querySelector(".modal-title");
    if (modalTitle && date) {
      const dateObj = new Date(date);
      const formattedDate = dateObj.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      modalTitle.textContent = `Edit working hours`;
    }
  } catch (error) {
    console.error("Error in openEditModal:", error);
  }
}

// Update the fillEditShiftDetails function
function fillEditShiftDetails(event, site, room, fromTime, toTime) {
  const editStaffSelect = document.getElementById("editStaffSelect");
  const editSiteSelect = document.getElementById("editSiteSelect");
  const editRoomSelect = document.getElementById("editRoomSelect");
  const editFromTime = document.getElementById("editFromTime");
  const editToTime = document.getElementById("editToTime");

  // Set site value first (handle both formats: "Site | Room" or just "Site")
  const actualSite = site.includes(" | ") ? site.split(" | ")[0] : site;
  editSiteSelect.value = actualSite;

  // Update room options based on the selected site and staff
  updateRoomOptions(editStaffSelect, editSiteSelect, editRoomSelect);

  // Set other form values after room options are updated
  editRoomSelect.value = room;
  editFromTime.value = fromTime;
  editToTime.value = toTime;

  // Add visual feedback for suggestions
  // const suggestions = document.querySelectorAll(".shift-suggestion");
  // suggestions.forEach((suggestion) => {
  //   suggestion.style.opacity = "0.7";
  // });

  // Highlight the selected suggestion
  // event.currentTarget.style.opacity = "1";

  // Remove 'active' class from all suggestions
  const suggestions = document.querySelectorAll(".shift-suggestion");
  suggestions.forEach((s) => s.classList.remove("active"));

  // Add 'active' class to the clicked element
  event.currentTarget.classList.add("active");
}

// Update the staff config to include all staff members
const staffConfig = {
  "Greg Lane": {
    type: "technologist",
    sites: ["Edmondson Park", "Ingleburn"],
    rooms: {
      "Edmondson Park": ["US01", "US02", "US03", "CT", "X-Ray"],
      Ingleburn: ["US01", "US02", "US03", "CT", "X-Ray"],
    },
  },
  "Arlene Richards": {
    sites: ["Edmondson Park", "Ingleburn"],
    rooms: {
      "Edmondson Park": ["US01", "US02", "US03", "CT", "X-Ray"],
      Ingleburn: ["US01", "US02", "US03", "CT", "X-Ray"],
    },
  },
  "Cameron Edwards": {
    sites: ["Edmondson Park", "Ingleburn"],
    rooms: {
      "Edmondson Park": ["US01", "US02", "US03", "CT", "X-Ray"],
      Ingleburn: ["US01", "US02", "US03", "CT", "X-Ray"],
    },
  },
  "Marjorie Hawkins": {
    sites: ["Edmondson Park", "Ingleburn"],
    rooms: {
      "Edmondson Park": ["US01", "US02", "US03", "CT", "X-Ray"],
      Ingleburn: ["US01", "US02", "US03", "CT", "X-Ray"],
    },
  },
  "Sarah Chen": {
    sites: ["Edmondson Park", "Ingleburn"],
    rooms: {
      "Edmondson Park": ["US01", "US02", "US03", "CT", "X-Ray"],
      Ingleburn: ["US01", "US02", "US03", "CT", "X-Ray"],
    },
  },
  "Michael Torres": {
    sites: ["Edmondson Park", "Ingleburn"],
    rooms: {
      "Edmondson Park": ["US01", "US02", "US03", "CT", "X-Ray"],
      Ingleburn: ["US01", "US02", "US03", "CT", "X-Ray"],
    },
  },
  "Emily Parker": {
    sites: ["Edmondson Park", "Ingleburn"],
    rooms: {
      "Edmondson Park": ["US01", "US02", "US03", "CT", "X-Ray"],
      Ingleburn: ["US01", "US02", "US03", "CT", "X-Ray"],
    },
  },
  "David Wong": {
    sites: ["Edmondson Park", "Ingleburn"],
    rooms: {
      "Edmondson Park": ["US01", "US02", "US03", "CT", "X-Ray"],
      Ingleburn: ["US01", "US02", "US03", "CT", "X-Ray"],
    },
  },
  "Rachel Martinez": {
    sites: ["Edmondson Park", "Ingleburn"],
    rooms: {
      "Edmondson Park": ["US01", "US02", "US03", "CT", "X-Ray"],
      Ingleburn: ["US01", "US02", "US03", "CT", "X-Ray"],
    },
  },
  "James Wilson": {
    sites: ["Edmondson Park", "Ingleburn"],
    rooms: {
      "Edmondson Park": ["US01", "US02", "US03", "CT", "X-Ray"],
      Ingleburn: ["US01", "US02", "US03", "CT", "X-Ray"],
    },
  },
  "Lisa Thompson": {
    sites: ["Edmondson Park", "Ingleburn"],
    rooms: {
      "Edmondson Park": ["US01", "US02", "US03", "CT", "X-Ray"],
      Ingleburn: ["US01", "US02", "US03", "CT", "X-Ray"],
    },
  },
  "Robert Kim": {
    sites: ["Edmondson Park", "Ingleburn"],
    rooms: {
      "Edmondson Park": ["US01", "US02", "US03", "CT", "X-Ray"],
      Ingleburn: ["US01", "US02", "US03", "CT", "X-Ray"],
    },
  },
  "Amanda Foster": {
    sites: ["Edmondson Park", "Ingleburn"],
    rooms: {
      "Edmondson Park": ["US01", "US02", "US03", "CT", "X-Ray"],
      Ingleburn: ["US01", "US02", "US03", "CT", "X-Ray"],
    },
  },
  "Daniel Lee": {
    sites: ["Edmondson Park", "Ingleburn"],
    rooms: {
      "Edmondson Park": ["US01", "US02", "US03", "CT", "X-Ray"],
      Ingleburn: ["US01", "US02", "US03", "CT", "X-Ray"],
    },
  },
  "Sophie Anderson": {
    sites: ["Edmondson Park", "Ingleburn"],
    rooms: {
      "Edmondson Park": ["US01", "US02", "US03", "CT", "X-Ray"],
      Ingleburn: ["US01", "US02", "US03", "CT", "X-Ray"],
    },
  },
};

// Helper function to get room from shift data
function getShiftRoom(siteText) {
  if (!siteText) return "";

  const roomPatterns = {
    US01: /US01|US 01/i,
    US02: /US02|US 02/i,
    US03: /US03|US 03/i,
    CT: /CT/i,
    "X-Ray": /X-Ray|XRay|X Ray/i,
  };

  for (const [room, pattern] of Object.entries(roomPatterns)) {
    if (pattern.test(siteText)) {
      return room;
    }
  }
  return "";
}

function generateTimeOptions(startHour, endHour) {
  const options = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    const hourStr = hour.toString().padStart(2, "0");
    options.push(`<option value="${hourStr}:00">${hourStr}:00</option>`);
    options.push(`<option value="${hourStr}:30">${hourStr}:30</option>`);
  }
  return options.join("\n");
}

// Time calculation helper functions
function calculateShiftDuration(fromTime, toTime) {
  const startMinutes = convertTimeToMinutes(fromTime);
  const endMinutes = convertTimeToMinutes(toTime);
  let duration = endMinutes - startMinutes;

  // If end time is less than start time, assume it's next day
  if (duration < 0) {
    duration += 24 * 60; // Add 24 hours in minutes
  }

  return duration / 60; // Convert to hours
}

function formatHours(totalHours) {
  if (totalHours === 0) return "0h";

  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);

  if (minutes === 0) {
    return `${hours}h`;
  } else if (hours === 0) {
    return `${minutes}min`;
  }
  return `${hours}h ${minutes}min`;
}

// Update the time dropdowns when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const fromTimeSelects = document.querySelectorAll("#fromTime, #editFromTime");
  const toTimeSelects = document.querySelectorAll("#toTime, #editToTime");

  fromTimeSelects.forEach((select) => {
    select.innerHTML = `<option value="">Start Time</option>${generateTimeOptions(
      8,
      17
    )}`;
  });

  toTimeSelects.forEach((select) => {
    select.innerHTML = `<option value="">End Time</option>${generateTimeOptions(
      11,
      20
    )}`;
  });
});

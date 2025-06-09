const tableData = {
  headerComments: {
    "12 wk – 13 wks 5 days Week Nuchal Translucency": {
      hasComment: true,
      comment: "Requires special certification and precise timing window",
    },
    "2nd Trimester Morphology +/- Uterine Arteries": {
      hasComment: true,
      comment: "Detailed anatomy scan requiring extended time and expertise",
    },
  },
  timeOptions: [
    "10 min",
    "15 min",
    "20 min",
    "25 min",
    "30 min",
    "35 min",
    "40 min",
    "45 min",
    "50 min",
    "60 min",
    "70 min",
    "80 min",
    "90 min",
  ],
  scanTypes: [
    "Abdomen",
    "Male/Female Renal/Prostate",
    "Thyroid/Neck",
    "Lumps/bumps",
    "Scrotal",
    "Female Pelvic",
    "Buttocks",
    "Breast – Unilateral/Bilateral",
    "1st Trimester/ Dating",
    "10– 16 week Well Being",
    "12 wk – 13 wks 5 days Week Nuchal Translucency",
    "2nd Trimester Morphology +/- Uterine Arteries",
    "3rd Trimester/ Cervical Length Assessment",
    "3D/4D Imaging – Foetus",
    "3D/4D Imaging – Gynaecologic structures",
    "Doppler DVT Leg",
    "Doppler CVI Leg (Single) Venous",
    "Doppler DVT Arm",
  ],
  employees: {
    "Jasmine Ta": {
      scans: {
        Abdomen: { duration: "30 min" },
        "Male/Female Renal/Prostate": { duration: "30 min" },
        "Thyroid/Neck": { duration: "30 min" },
        "Lumps/bumps": { duration: "30 min" },
        Scrotal: { duration: "30 min" },
        "Female Pelvic": { duration: "30 min" },
        "Breast – Unilateral/Bilateral": { duration: "30 min" },
        "1st Trimester/ Dating": { duration: "30 min" },
        "10– 16 week Well Being": { duration: "30 min" },
        "12 wk – 13 wks 5 days Week Nuchal Translucency": {
          duration: "30 min",
          hasComment: true,
          comment: "Requires special certification",
        },
        "2nd Trimester Morphology +/- Uterine Arteries": {
          duration: "60 min",
          hasComment: true,
          comment: "Extended time needed for detailed anatomy scan",
        },
        "3rd Trimester/ Cervical Length Assessment": { duration: "30 min" },
        "3D/4D Imaging – Foetus": { duration: "30 min" },
        "Doppler DVT Leg": { duration: "30 min" },
        "Doppler CVI Leg (Single) Venous": { duration: "30 min" },
        "Doppler DVT Arm": { duration: "30 min" },
      },
    },
    "Fiona Gillen": {
      scans: {
        Abdomen: { duration: "30 min" },
        "Male/Female Renal/Prostate": { duration: "25 min" },
        "Thyroid/Neck": { duration: "30 min" },
        "Lumps/bumps": { duration: "30 min" },
        Scrotal: { duration: "30 min" },
        "Female Pelvic": { duration: "30 min" },
        Buttocks: { duration: "30 min" },
        "Breast – Unilateral/Bilateral": { duration: "30 min" },
        "1st Trimester/ Dating": { duration: "30 min" },
        "10– 16 week Well Being": { duration: "30 min" },
        "12 wk – 13 wks 5 days Week Nuchal Translucency": {
          duration: "30 min",
        },
        "2nd Trimester Morphology +/- Uterine Arteries": { duration: "60 min" },
        "3rd Trimester/ Cervical Length Assessment": { duration: "30 min" },
        "3D/4D Imaging – Foetus": { duration: "30 min" },
        "3D/4D Imaging – Gynaecologic structures": { duration: "30 min" },
        "Doppler DVT Leg": { duration: "30 min" },
      },
    },
    Chantelle: {
      scans: {
        Abdomen: { duration: "30 min" },
        "Male/Female Renal/Prostate": { duration: "30 min" },
        "Thyroid/Neck": { duration: "30 min" },
        "Lumps/bumps": { duration: "30 min" },
        Scrotal: { duration: "30 min" },
        "Female Pelvic": { duration: "30 min" },
        Buttocks: {
          duration: "30 min",
          hasComment: true,
          comment: "Special positioning required",
        },
        "Breast – Unilateral/Bilateral": { duration: "30 min" },
        "1st Trimester/ Dating": { duration: "30 min" },
        "10– 16 week Well Being": { duration: "30 min" },
        "2nd Trimester Morphology +/- Uterine Arteries": { duration: "60 min" },
        "3rd Trimester/ Cervical Length Assessment": { duration: "30 min" },
        "3D/4D Imaging – Foetus": {
          duration: "30 min",
          hasComment: true,
          comment: "Advanced equipment needed",
        },
        "Doppler DVT Leg": { duration: "30 min" },
        "Doppler CVI Leg (Single) Venous": {
          duration: "30 min",
          hasComment: true,
          comment: "Requires vascular expertise",
        },
        "Doppler DVT Arm": { duration: "30 min" },
      },
    },
    Carlos: {
      scans: {
        Abdomen: { duration: "30 min" },
        "Male/Female Renal/Prostate": { duration: "25 min" },
        "Thyroid/Neck": { duration: "30 min" },
        "Lumps/bumps": { duration: "30 min" },
        Scrotal: { duration: "30 min" },
        "Female Pelvic": { duration: "30 min" },
        Buttocks: { duration: "30 min" },
        "Breast – Unilateral/Bilateral": { duration: "30 min" },
        "1st Trimester/ Dating": { duration: "30 min" },
        "10– 16 week Well Being": { duration: "30 min" },
        "12 wk – 13 wks 5 days Week Nuchal Translucency": {
          duration: "30 min",
        },
        "2nd Trimester Morphology +/- Uterine Arteries": { duration: "60 min" },
        "3rd Trimester/ Cervical Length Assessment": { duration: "30 min" },
        "Doppler DVT Leg": { duration: "30 min" },
        "Doppler CVI Leg (Single) Venous": {
          duration: "30 min",
          hasComment: true,
        },
        "Doppler DVT Arm": { duration: "30 min" },
      },
    },
    Ellie: {
      scans: {
        Abdomen: { duration: "30 min" },
        "Male/Female Renal/Prostate": { duration: "20 min" },
        "Thyroid/Neck": { duration: "30 min" },
        "Lumps/bumps": { duration: "30 min" },
        Scrotal: { duration: "30 min" },
        "Female Pelvic": { duration: "30 min" },
        Buttocks: { duration: "30 min" },
        "Breast – Unilateral/Bilateral": { duration: "30 min" },
        "1st Trimester/ Dating": { duration: "30 min" },
        "10– 16 week Well Being": { duration: "30 min" },
        "12 wk – 13 wks 5 days Week Nuchal Translucency": {
          duration: "30 min",
        },
        "2nd Trimester Morphology +/- Uterine Arteries": { duration: "60 min" },
        "3rd Trimester/ Cervical Length Assessment": { duration: "30 min" },
        "Doppler DVT Leg": { duration: "30 min" },
        "Doppler CVI Leg (Single) Venous": {
          duration: "30 min",
          hasComment: true,
        },
        "Doppler DVT Arm": { duration: "30 min" },
      },
    },
    Shane: {
      scans: {
        Abdomen: { duration: "30 min" },
        "Male/Female Renal/Prostate": { duration: "30 min" },
        "Thyroid/Neck": { duration: "30 min" },
        "Lumps/bumps": { duration: "30 min" },
        Scrotal: { duration: "30 min" },
        "Female Pelvic": { duration: "30 min" },
        Buttocks: { duration: "30 min" },
        "Breast – Unilateral/Bilateral": { duration: "30 min" },
        "1st Trimester/ Dating": { duration: "30 min" },
        "10– 16 week Well Being": { duration: "30 min" },
        "2nd Trimester Morphology +/- Uterine Arteries": { duration: "60 min" },
        "3rd Trimester/ Cervical Length Assessment": { duration: "30 min" },
        "3D/4D Imaging – Foetus": {
          duration: "NA",
          hasComment: true,
          comment: "Not qualified for this scan type",
        },
        "Doppler DVT Leg": { duration: "30 min" },
        "Doppler DVT Arm": { duration: "30 min" },
      },
    },
    Kiren: {
      scans: {
        Abdomen: { duration: "30 min" },
        "Male/Female Renal/Prostate": { duration: "25 min" },
        "Thyroid/Neck": { duration: "30 min" },
        "Lumps/bumps": { duration: "30 min" },
        Scrotal: { duration: "30 min" },
        "Female Pelvic": { duration: "30 min" },
        Buttocks: { duration: "30 min" },
        "Breast – Unilateral/Bilateral": { duration: "30 min" },
        "1st Trimester/ Dating": { duration: "30 min" },
        "10– 16 week Well Being": { duration: "30 min" },
        "12 wk – 13 wks 5 days Week Nuchal Translucency": {
          duration: "30 min",
        },
        "2nd Trimester Morphology +/- Uterine Arteries": { duration: "60 min" },
        "3rd Trimester/ Cervical Length Assessment": { duration: "30 min" },
        "Doppler DVT Leg": { duration: "30 min" },
        "Doppler CVI Leg (Single) Venous": { duration: "30 min" },
        "Doppler DVT Arm": { duration: "30 min" },
      },
    },
    Dupinder: {
      scans: {
        Abdomen: { duration: "30 min" },
        "Male/Female Renal/Prostate": { duration: "30 min" },
        "Thyroid/Neck": { duration: "30 min" },
        "Lumps/bumps": { duration: "30 min" },
        Scrotal: { duration: "30 min" },
        "Female Pelvic": { duration: "30 min" },
        Buttocks: { duration: "30 min" },
        "Breast – Unilateral/Bilateral": { duration: "30 min" },
        "1st Trimester/ Dating": { duration: "30 min" },
        "10– 16 week Well Being": { duration: "30 min" },
        "12 wk – 13 wks 5 days Week Nuchal Translucency": {
          duration: "30 min",
        },
        "2nd Trimester Morphology +/- Uterine Arteries": { duration: "60 min" },
        "3rd Trimester/ Cervical Length Assessment": { duration: "30 min" },
        "Doppler DVT Leg": { duration: "30 min" },
        "Doppler DVT Arm": { duration: "30 min" },
      },
    },
  },
};

function renderTable() {
  const table = document.getElementById("employeeTable");

  const headerRow = document.createElement("tr");
  headerRow.className = "header-row";

  const scanHeader = document.createElement("th");
  scanHeader.className = "header-cell scan-header";

  const searchContainer = document.createElement("div");
  searchContainer.className = "search-container";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.className = "scan-search";
  searchInput.placeholder = "Search scan";

  const searchIcon = document.createElement("img");
  searchIcon.src = "../assets/search_black.png";
  searchIcon.className = "search-icon";

  const closeIcon = document.createElement("img");
  closeIcon.src = "../assets/thin_close_black.png";
  closeIcon.className = "close-icon";

  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchIcon);
  searchContainer.appendChild(closeIcon);
  scanHeader.appendChild(searchContainer);

  searchInput.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    searchContainer.classList.toggle("has-value", searchText.length > 0);

    const rows = table.querySelectorAll("tr:not(.header-row)");

    rows.forEach((row) => {
      const scanCell = row.querySelector(".row-header");
      const textSpan = scanCell.querySelector(".row-header-text");
      const scanText = textSpan.textContent;

      if (searchText === "") {
        row.classList.remove("hidden");
        textSpan.textContent = scanText;
      } else if (scanText.toLowerCase().includes(searchText)) {
        row.classList.remove("hidden");
        const regex = new RegExp(`(${searchText})`, "gi");
        const highlightedText = scanText.replace(
          regex,
          '<span class="highlight">$1</span>'
        );
        textSpan.innerHTML = highlightedText;
      } else {
        row.classList.add("hidden");
      }
    });
  });

  closeIcon.addEventListener("click", () => {
    searchInput.value = "";
    searchContainer.classList.remove("has-value");
    const event = new Event("input");
    searchInput.dispatchEvent(event);
  });

  headerRow.appendChild(scanHeader);

  Object.keys(tableData.employees).forEach((employeeName) => {
    const th = document.createElement("th");
    th.className = "header-cell";

    const headerContent = document.createElement("div");
    headerContent.className = "header-content";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = employeeName;

    const threeDots = document.createElement("img");
    threeDots.src = "../assets/three_dots_vertical_white.png";
    threeDots.className = "three-dots";

    headerContent.appendChild(nameSpan);
    headerContent.appendChild(threeDots);
    th.appendChild(headerContent);

    const dropdown = document.createElement("div");
    dropdown.className = "header-dropdown";

    const dropdownHeader = document.createElement("div");
    dropdownHeader.className = "dropdown-header";
    dropdownHeader.textContent = "Copy skills from:";
    dropdown.appendChild(dropdownHeader);

    Object.keys(tableData.employees).forEach((otherEmployee) => {
      if (otherEmployee !== employeeName) {
        const option = document.createElement("div");
        option.className = "employee-option";
        option.textContent = otherEmployee;
        option.addEventListener("click", (e) => {
          e.stopPropagation();
          const sourceEmployee = otherEmployee;
          const targetEmployee = employeeName;

          tableData.scanTypes.forEach((scanType) => {
            if (tableData.employees[sourceEmployee].scans[scanType]) {
              tableData.employees[targetEmployee].scans[scanType] = {
                ...tableData.employees[sourceEmployee].scans[scanType],
              };
            }
          });

          dropdown.classList.remove("active");
          const table = document.getElementById("employeeTable");
          table.innerHTML = "";
          renderTable();
        });
        dropdown.appendChild(option);
      }
    });

    th.appendChild(dropdown);

    threeDots.addEventListener("click", (e) => {
      e.stopPropagation();
      const allDropdowns = document.querySelectorAll(".header-dropdown");
      allDropdowns.forEach((d) => {
        if (d !== dropdown) {
          d.classList.remove("active");
        }
      });
      dropdown.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target) && !threeDots.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });

    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  tableData.scanTypes.forEach((scanType) => {
    const tr = document.createElement("tr");

    const scanCell = document.createElement("td");
    scanCell.className = "row-header";
    if (tableData.headerComments[scanType]?.hasComment) {
      scanCell.classList.add("has-comment");

      const selectedMarker = tableData.headerComments[scanType]?.selectedMarker;
      if (selectedMarker && tableData.headerComments[scanType]?.comment) {
        const marker = headerMarkers.find((m) => m.name === selectedMarker);
        if (marker) {
          scanCell.classList.add("has-marker");
          scanCell.style.borderLeftColor = marker.color;
        }
      } else {
        scanCell.style.borderLeftColor = "#039AE0";
      }
    }

    const headerContent = document.createElement("div");
    headerContent.className = "row-header-content";

    const textSpan = document.createElement("span");
    textSpan.className = "row-header-text";
    textSpan.textContent = scanType;
    headerContent.appendChild(textSpan);

    const iconWrapper = document.createElement("div");
    iconWrapper.className = "header-icon-wrapper";

    const headerCommentIcon = document.createElement("div");
    const hasComment = tableData.headerComments[scanType]?.hasComment;
    headerCommentIcon.className = `header-comment-icon ${
      hasComment ? "has-comment" : "no-comment"
    }`;

    headerCommentIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      showHeaderCommentModal(scanCell, scanType);
    });

    if (hasComment) {
      const marker = tableData.headerComments[scanType].selectedMarker
        ? headerMarkers.find(
            (m) => m.name === tableData.headerComments[scanType].selectedMarker
          )
        : null;
      addTooltipHandlers(
        headerCommentIcon,
        tableData.headerComments[scanType].comment,
        true,
        marker
      );
    }

    iconWrapper.appendChild(headerCommentIcon);
    headerContent.appendChild(iconWrapper);
    scanCell.appendChild(headerContent);
    tr.appendChild(scanCell);

    Object.keys(tableData.employees).forEach((employeeName) => {
      const employee = tableData.employees[employeeName];
      const td = document.createElement("td");

      const scanData = employee.scans[scanType];

      if (scanData) {
        const cellData = scanData.duration;
        const hasComment = scanData.hasComment;
        const comment = scanData.comment;

        td.className = "data-cell";
        td.setAttribute("data-employee", employeeName);
        td.setAttribute("data-scan", scanType);

        if (cellData === "NA") {
          td.innerHTML = `
                        <div class="time-wrapper">
                            <div class="time-content">
                                <span class="na-text">NA</span>
                                <span class="dropdown-arrow"></span>
                            </div>
                            <div class="icon-wrapper">
                                ${
                                  hasComment
                                    ? '<div class="comment-indicator"></div>'
                                    : ""
                                }
                                <div class="comment-icon ${
                                  hasComment ? "has-comment" : "no-comment"
                                }"></div>
                            </div>
                        </div>`;

          if (hasComment) {
            td.classList.add("yellow-bg");
          } else {
            td.classList.add("red-bg");
          }
        } else {
          td.classList.add("green-bg");
          td.innerHTML = `
                        <div class="time-wrapper">
                            <div class="time-content">
                                ${cellData}
                                <span class="dropdown-arrow"></span>
                            </div>
                            <div class="icon-wrapper">
                                ${
                                  hasComment
                                    ? '<div class="comment-indicator"></div>'
                                    : ""
                                }
                                <div class="comment-icon ${
                                  hasComment ? "has-comment" : "no-comment"
                                }"></div>
                            </div>
                        </div>`;

          if (hasComment) {
            td.classList.remove("green-bg");
            td.classList.add("yellow-bg");
          }
        }

        const commentIcon = td.querySelector(".comment-icon");
        commentIcon.addEventListener("click", (e) => {
          const cell = e.currentTarget.closest(".data-cell");
          if (cell.classList.contains("active")) {
            e.stopPropagation();
            e.preventDefault();
            showCommentModal(cell);
          }
        });

        if (hasComment) {
          addTooltipHandlers(commentIcon, comment);
        }

        td.addEventListener("mouseenter", handleCellHover);
        td.addEventListener("mouseleave", handleCellLeave);
        td.addEventListener("click", handleTimeClick);
      } else {
        td.className = "data-cell red-bg";
        td.setAttribute("data-employee", employeeName);
        td.setAttribute("data-scan", scanType);
        td.innerHTML = `
                    <div class="time-wrapper">
                        <div class="time-content">
                            <span class="na-text">NA</span>
                            <span class="dropdown-arrow"></span>
                        </div>
                        <div class="icon-wrapper">
                            <div class="comment-icon no-comment"></div>
                        </div>
                    </div>`;

        if (!tableData.employees[employeeName].scans[scanType]) {
          tableData.employees[employeeName].scans[scanType] = {
            duration: "NA",
            hasComment: false,
          };
        }

        const commentIcon = td.querySelector(".comment-icon");
        commentIcon.addEventListener("click", (e) => {
          const cell = e.currentTarget.closest(".data-cell");
          if (cell.classList.contains("active")) {
            e.stopPropagation();
            e.preventDefault();
            showCommentModal(cell);
          }
        });

        td.addEventListener("mouseenter", handleCellHover);
        td.addEventListener("mouseleave", handleCellLeave);
        td.addEventListener("click", handleTimeClick);
      }

      tr.appendChild(td);
    });

    table.appendChild(tr);
  });
}

function handleCellHover(event) {
  const cell = event.currentTarget;
  const columnIndex = cell.cellIndex;
  const rowIndex = cell.parentElement.rowIndex;
  const table = cell.closest("table");

  document
    .querySelectorAll(".header-cell.active-column, .row-header.active-row")
    .forEach((header) => {
      header.classList.remove("active-column", "active-row");
    });

  if (!cell.classList.contains("has-dropdown")) {
    cell.classList.add("active");
  }

  if (table.rows[0].cells[columnIndex]) {
    table.rows[0].cells[columnIndex].classList.add("active-column");
  }
  if (table.rows[rowIndex]) {
    const rowHeader = table.rows[rowIndex].cells[0];
    if (rowHeader) rowHeader.classList.add("active-row");
  }
}

function handleCellLeave(event) {
  const cell = event.currentTarget;
  const relatedTarget = event.relatedTarget;

  if (
    relatedTarget &&
    (cell.contains(relatedTarget) || relatedTarget.closest(".time-dropdown"))
  ) {
    return;
  }

  const columnIndex = cell.cellIndex;
  const rowIndex = cell.parentElement.rowIndex;
  const table = cell.closest("table");

  if (!cell.classList.contains("has-dropdown")) {
    cell.classList.remove("active");
  }

  if (table.rows[0].cells[columnIndex]) {
    table.rows[0].cells[columnIndex].classList.remove("active-column");
  }
  if (table.rows[rowIndex]) {
    const rowHeader = table.rows[rowIndex].cells[0];
    if (rowHeader) rowHeader.classList.remove("active-row");
  }
}

function handleTimeClick(event) {
  const cell = event.currentTarget;
  const timeWrapper = cell.querySelector(".time-wrapper");
  const dropdownArrow = cell.querySelector(".dropdown-arrow");

  const timeContent = cell.querySelector(".time-content");
  if (!timeContent.contains(event.target)) {
    return;
  }

  document.querySelectorAll(".data-cell").forEach((otherCell) => {
    if (otherCell !== cell) {
      const dropdown = otherCell.querySelector(".time-dropdown");
      if (dropdown) {
        dropdown.remove();
        otherCell.classList.remove("has-dropdown", "active");
        const arrow = otherCell.querySelector(".dropdown-arrow");
        if (arrow) arrow.style.transform = "";
      }
    }
  });

  const existingDropdown = cell.querySelector(".time-dropdown");
  if (existingDropdown) {
    existingDropdown.remove();
    cell.classList.remove("has-dropdown", "active");
    const arrow = cell.querySelector(".dropdown-arrow");
    if (arrow) arrow.style.transform = "";
  } else {
    cell.classList.add("has-dropdown", "active");
    showDropdown(cell);
  }
}

function showDropdown(cell) {
  const employeeName = cell.getAttribute("data-employee");
  const scanType = cell.getAttribute("data-scan");
  const currentTime =
    tableData.employees[employeeName].scans[scanType]?.duration || "NA";

  const existingDropdown = cell.querySelector(".time-dropdown");
  if (existingDropdown) {
    existingDropdown.remove();
  }

  const dropdown = document.createElement("div");
  dropdown.className = "time-dropdown";

  const naOption = document.createElement("div");
  naOption.className =
    "time-option" + (currentTime === "NA" ? " selected" : "");
  naOption.textContent = "NA";
  dropdown.appendChild(naOption);

  tableData.timeOptions.forEach((time) => {
    const option = document.createElement("div");
    option.className =
      "time-option" + (currentTime === time ? " selected" : "");
    option.textContent = time;
    dropdown.appendChild(option);
  });

  const scrollContainer = document.querySelector(".table-scroll-container");
  const scrollRect = scrollContainer.getBoundingClientRect();
  const cellRect = cell.getBoundingClientRect();

  const spaceBelow = scrollRect.bottom - cellRect.bottom;
  const spaceAbove = cellRect.top - scrollRect.top;
  const DROPDOWN_HEIGHT = 250; // Fixed height of dropdown

  const openUpward =
    spaceBelow < DROPDOWN_HEIGHT && spaceAbove >= DROPDOWN_HEIGHT;

  if (openUpward) {
    dropdown.classList.add("dropdown-up");
    cell.querySelector(".dropdown-arrow").style.transform = "rotate(360deg)";
  } else {
    dropdown.classList.add("dropdown-down");
    cell.querySelector(".dropdown-arrow").style.transform = "rotate(180deg)";
  }

  cell.appendChild(dropdown);
  cell.classList.add("has-dropdown");

  dropdown.addEventListener("mouseenter", () => {
    cell.classList.add("active");
    cell.classList.add("has-dropdown");
  });

  dropdown.addEventListener("mouseleave", (e) => {
    if (!cell.contains(e.relatedTarget)) {
      cell.classList.remove("active");
      dropdown.remove();
      cell.classList.remove("has-dropdown");
      const arrow = cell.querySelector(".dropdown-arrow");
      if (arrow) arrow.style.transform = "";
    }
  });

  naOption.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!tableData.employees[employeeName].scans[scanType]) {
      tableData.employees[employeeName].scans[scanType] = {};
    }
    const hasComment =
      tableData.employees[employeeName].scans[scanType].hasComment;
    tableData.employees[employeeName].scans[scanType].duration = "NA";

    const timeContent = cell.querySelector(".time-content");
    timeContent.innerHTML = `<span class="na-text">NA</span><span class="dropdown-arrow"></span>`;

    cell.classList.remove("green-bg", "yellow-bg", "red-bg");
    if (hasComment) {
      cell.classList.add("yellow-bg");

      let commentIndicator = cell.querySelector(".comment-indicator");
      if (!commentIndicator) {
        commentIndicator = document.createElement("div");
        commentIndicator.className = "comment-indicator";
        cell.appendChild(commentIndicator);
      }
    } else {
      cell.classList.add("red-bg");
    }

    dropdown.remove();
    cell.classList.remove("has-dropdown", "active");
    const arrow = cell.querySelector(".dropdown-arrow");
    if (arrow) arrow.style.transform = "";
  });

  tableData.timeOptions.forEach((time, index) => {
    dropdown.children[index + 1].addEventListener("click", (e) => {
      e.stopPropagation();
      if (!tableData.employees[employeeName].scans[scanType]) {
        tableData.employees[employeeName].scans[scanType] = {};
      }
      const hasComment =
        tableData.employees[employeeName].scans[scanType].hasComment;
      tableData.employees[employeeName].scans[scanType].duration = time;

      const timeContent = cell.querySelector(".time-content");
      timeContent.innerHTML = `${time}<span class="dropdown-arrow"></span>`;

      cell.classList.remove("red-bg", "green-bg", "yellow-bg");
      if (hasComment) {
        cell.classList.add("yellow-bg");
        let commentIndicator = cell.querySelector(".comment-indicator");
        if (!commentIndicator) {
          commentIndicator = document.createElement("div");
          commentIndicator.className = "comment-indicator";
          cell.appendChild(commentIndicator);
        }
      } else {
        cell.classList.add("green-bg");
      }

      dropdown.remove();
      cell.classList.remove("has-dropdown", "active");
      const arrow = cell.querySelector(".dropdown-arrow");
      if (arrow) arrow.style.transform = "";
    });
  });
}

function showCommentModal(cell) {
  const employeeName = cell.getAttribute("data-employee");
  const scanType = cell.getAttribute("data-scan");

  const existingDropdown = cell.querySelector(".time-dropdown");
  if (existingDropdown) {
    existingDropdown.remove();
    cell.classList.remove("has-dropdown");
    const arrow = cell.querySelector(".dropdown-arrow");
    if (arrow) arrow.style.transform = "";
  }

  if (!tableData.employees[employeeName].scans[scanType]) {
    tableData.employees[employeeName].scans[scanType] = {
      duration: "NA",
      hasComment: false,
    };
  }

  const currentComment =
    tableData.employees[employeeName].scans[scanType].comment || "";
  const hasExistingComment =
    tableData.employees[employeeName].scans[scanType].hasComment;

  const activeCommentIcon = cell.querySelector(".comment-icon");
  activeCommentIcon.classList.add("modal-open");

  cell.classList.add("has-modal", "active");

  const commentIndicator = cell.querySelector(".comment-indicator");
  if (commentIndicator) {
    commentIndicator.style.display = "none";
  }
  activeCommentIcon.style.display = "block";

  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  modalOverlay.style.background = "transparent";
  modalOverlay.style.alignItems = "flex-start";
  modalOverlay.style.justifyContent = "flex-start";

  modalOverlay.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  const modal = document.createElement("div");
  modal.className = "comment-modal";

  const cellRect = cell.getBoundingClientRect();
  const tableContainer = document.querySelector(".table-container");
  const tableRect = tableContainer.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  let leftPosition = cellRect.left + scrollLeft;

  if (leftPosition - 20 >= tableRect.left) {
    leftPosition -= 20;
  }

  modal.style.position = "absolute";
  modal.style.top = `${cellRect.bottom + scrollTop}px`;
  modal.style.left = `${leftPosition}px`;
  modal.style.transform = "none";

  const modalContent = `
        <div class="modal-header">
            <div class="modal-title">Comment</div>
            <button class="close-button">
                <img src="../assets/close_black.png" alt="Close">
            </button>
        </div>
        <input type="text" class="comment-input" placeholder="Comment" value="${currentComment}">
        <button class="save-button">
            <img src="../assets/check_white.png" alt="Save">
            Save
        </button>
    `;

  modal.innerHTML = modalContent;
  modalOverlay.appendChild(modal);
  document.body.appendChild(modalOverlay);

  const closeModal = () => {
    restoreIconState();
    modalOverlay.remove();
    document.removeEventListener("keydown", handleEscKey);

    cell.classList.remove("has-modal");

    if (!cell.classList.contains("has-dropdown")) {
      cell.classList.remove("active");

      const commentIndicator = cell.querySelector(".comment-indicator");
      if (commentIndicator) {
        commentIndicator.style.display = "";
      }
      activeCommentIcon.style.display = "";
    }
  };

  const restoreIconState = () => {
    activeCommentIcon.classList.remove("modal-open");
  };

  const modalRect = modal.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  if (modalRect.right > viewportWidth) {
    modal.style.left = `${viewportWidth - modalRect.width - 16}px`; // 16px margin from viewport edge
  }

  if (modalRect.bottom > viewportHeight) {
    modal.style.top = `${cellRect.top + scrollTop - modalRect.height}px`;
  }

  modal.querySelector(".close-button").addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  const handleEscKey = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };
  document.addEventListener("keydown", handleEscKey);

  modal.querySelector(".save-button").addEventListener("click", () => {
    const newComment = modal.querySelector(".comment-input").value.trim();

    if (!tableData.employees[employeeName].scans[scanType]) {
      tableData.employees[employeeName].scans[scanType] = {};
    }

    if (newComment) {
      tableData.employees[employeeName].scans[scanType].hasComment = true;
      tableData.employees[employeeName].scans[scanType].comment = newComment;

      cell.classList.remove("green-bg", "red-bg");
      cell.classList.add("yellow-bg");

      let commentIndicator = cell.querySelector(".comment-indicator");
      if (!commentIndicator) {
        commentIndicator = document.createElement("div");
        commentIndicator.className = "comment-indicator";
        cell.appendChild(commentIndicator);
      }

      activeCommentIcon.className = "comment-icon has-comment";
      addTooltipHandlers(activeCommentIcon, newComment);
    } else {
      tableData.employees[employeeName].scans[scanType].hasComment = false;
      delete tableData.employees[employeeName].scans[scanType].comment;

      const tooltipContainer = document.getElementById("tooltip-container");
      tooltipContainer
        .querySelectorAll(".comment-tooltip")
        .forEach((tooltip) => tooltip.remove());

      const newIcon = document.createElement("div");
      newIcon.className = "comment-icon no-comment";

      newIcon.addEventListener("click", (e) => {
        const cell = e.currentTarget.closest(".data-cell");
        if (cell.classList.contains("active")) {
          e.stopPropagation();
          e.preventDefault();
          showCommentModal(cell);
        }
      });

      activeCommentIcon.parentNode.replaceChild(newIcon, activeCommentIcon);

      const commentIndicator = cell.querySelector(".comment-indicator");
      if (commentIndicator) {
        commentIndicator.remove();
      }

      cell.classList.remove("yellow-bg");
      if (tableData.employees[employeeName].scans[scanType].duration === "NA") {
        cell.classList.add("red-bg");
      } else {
        cell.classList.add("green-bg");
      }
    }

    closeModal();
  });

  const input = modal.querySelector(".comment-input");
  const saveButton = modal.querySelector(".save-button");

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveButton.click();
    }
  });

  input.focus();
  input.selectionStart = input.selectionEnd = input.value.length;
}

let headerMarkers = [
  { color: "#FF4D4D", name: "CSEP Only" },
  { color: "#8B5CF6", name: "CSEP & Second" },
];

function showHeaderCommentModal(headerCell, scanType) {
  const currentComment = tableData.headerComments[scanType]?.comment || "";
  const hasExistingComment =
    tableData.headerComments[scanType]?.hasComment || false;
  const selectedMarker =
    tableData.headerComments[scanType]?.selectedMarker || "";

  const activeCommentIcon = headerCell.querySelector(".header-comment-icon");
  activeCommentIcon.classList.add("modal-open");
  headerCell.classList.add("modal-active");

  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  modalOverlay.style.background = "transparent";

  const modal = document.createElement("div");
  modal.className = "comment-modal header-modal";

  window.tempMarkers = [...headerMarkers];

  const modalContent = `
        <div class="modal-header">
            <div class="modal-title">Comment</div>
            <button class="close-button">
                <img src="../assets/close_black.png" alt="Close">
            </button>
        </div>
        <input type="text" class="comment-input" placeholder="Comment" value="${currentComment}">
        <div class="marker-section">
            <div class="marker-heading">Choose a marker or create one</div>
            <div class="marker-list">
                ${renderMarkers(selectedMarker, window.tempMarkers)}
            </div>
            <div class="marker-input-container">
                <div class="color-picker-wrapper">
                    <input type="color" class="color-picker" value="#4CAF50">
                    <img src="../assets/arrow_down_solid_black.png" alt="dropdown arrow" width="6.08" height="3.3">
                </div>
                <input type="text" class="marker-name-input" placeholder="Marker name">
                <button type="button" class="add-marker-button">
                    <img src="../assets/subdirectory_arrow_left_black.png" alt="Add">
                </button>
            </div>
        </div>
        <button class="save-button">
            <img src="../assets/check_white.png" alt="Save">
            Save
        </button>
    `;

  modal.innerHTML = modalContent;
  modalOverlay.appendChild(modal);
  document.body.appendChild(modalOverlay);

  setupMarkerListeners(modal, scanType);

  const cellRect = headerCell.getBoundingClientRect();
  const modalRect = modal.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  modal.style.position = "absolute";
  modal.style.left = `${cellRect.right + scrollLeft}px`;

  const clickY = cellRect.top + cellRect.height / 2;
  const totalSpaceNeeded = modalRect.height;
  const spaceAboveClick = clickY;
  const spaceBelowClick = viewportHeight - clickY;

  if (
    spaceAboveClick >= totalSpaceNeeded / 2 &&
    spaceBelowClick >= totalSpaceNeeded / 2
  ) {
    modal.style.top = `${clickY + scrollTop}px`;
    modal.style.transform = "translateY(-50%)";
  } else if (spaceBelowClick < totalSpaceNeeded / 2) {
    modal.style.bottom = `${
      window.innerHeight - clickY - scrollTop - cellRect.height + 23
    }px`;
    modal.style.top = "auto";
    modal.style.transform = "none";
  } else {
    modal.style.top = `${clickY + scrollTop - 23}px`;
    modal.style.transform = "none";
  }

  const modalNewRect = modal.getBoundingClientRect();
  if (modalNewRect.right > viewportWidth - 20) {
    modal.style.left = `${viewportWidth - modalRect.width - 20 + scrollLeft}px`;
    modal.style.transform = "none";
  }
  if (modalNewRect.left < 20) {
    modal.style.left = `${20 + scrollLeft}px`;
    modal.style.transform = "none";
  }

  const closeModal = () => {
    restoreIconState();
    modalOverlay.remove();
    document.removeEventListener("keydown", handleEscKey);
  };

  const restoreIconState = () => {
    activeCommentIcon.classList.remove("modal-open");
    headerCell.classList.remove("modal-active");
  };

  modal.querySelector(".close-button").addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  const handleEscKey = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };
  document.addEventListener("keydown", handleEscKey);

  const input = modal.querySelector(".comment-input");
  const saveButton = modal.querySelector(".save-button");

  saveButton.addEventListener("click", () => {
    const newComment = input.value.trim();
    const selectedMarkerElement = modal.querySelector(".marker-item.selected");
    const selectedMarkerName = selectedMarkerElement
      ? selectedMarkerElement.dataset.name
      : "";

    const deletedMarkers = headerMarkers
      .filter(
        (marker) => !window.tempMarkers.find((m) => m.name === marker.name)
      )
      .map((m) => m.name);

    headerMarkers = [...window.tempMarkers];

    if (deletedMarkers.length > 0) {
      Object.keys(tableData.headerComments).forEach((scanType) => {
        if (
          tableData.headerComments[scanType].selectedMarker &&
          deletedMarkers.includes(
            tableData.headerComments[scanType].selectedMarker
          )
        ) {
          delete tableData.headerComments[scanType].selectedMarker;

          const headerCell = document.querySelector(
            `tr:not(.header-row) td.row-header`
          );
          if (headerCell && headerCell.textContent.trim() === scanType) {
            headerCell.classList.remove("has-marker");
            headerCell.style.borderLeftColor = "#039AE0";
          }
        }
      });

      const table = document.getElementById("employeeTable");
      table.innerHTML = "";
      renderTable();
    }

    if (newComment) {
      if (!tableData.headerComments[scanType]) {
        tableData.headerComments[scanType] = {};
      }
      tableData.headerComments[scanType].hasComment = true;
      tableData.headerComments[scanType].comment = newComment;

      if (selectedMarkerName) {
        const marker = headerMarkers.find((m) => m.name === selectedMarkerName);
        if (marker) {
          tableData.headerComments[scanType].selectedMarker =
            selectedMarkerName;
          headerCell.classList.add("has-marker");
          headerCell.style.borderLeftColor = marker.color;
        }
      } else {
        delete tableData.headerComments[scanType].selectedMarker;
        headerCell.classList.remove("has-marker");
        headerCell.style.borderLeftColor = "#039AE0";
      }

      activeCommentIcon.className = "header-comment-icon has-comment";
      headerCell.classList.add("has-comment");
      const marker = selectedMarkerName
        ? headerMarkers.find((m) => m.name === selectedMarkerName)
        : null;
      addTooltipHandlers(activeCommentIcon, newComment, true, marker);
    } else {
      if (tableData.headerComments[scanType]) {
        delete tableData.headerComments[scanType];
      }

      activeCommentIcon.className = "header-comment-icon no-comment";
      headerCell.classList.remove("has-comment", "has-marker");
      headerCell.style.borderLeftColor = "transparent";

      const tooltipContainer = document.getElementById("tooltip-container");
      tooltipContainer
        .querySelectorAll(".header-comment-tooltip")
        .forEach((tooltip) => tooltip.remove());
      const iconTooltip = activeCommentIcon.querySelector(
        ".header-comment-tooltip"
      );
      if (iconTooltip) {
        iconTooltip.remove();
      }

      const newIcon = activeCommentIcon.cloneNode(true);
      activeCommentIcon.parentNode.replaceChild(newIcon, activeCommentIcon);
    }

    closeModal();
  });

  input.focus();
  input.selectionStart = input.selectionEnd = input.value.length;
}

function renderMarkers(selectedMarker = "", markers = headerMarkers) {
  return markers
    .map(
      (marker) => `
        <div class="marker-item ${
          marker.name === selectedMarker ? "selected" : ""
        }" 
             data-name="${marker.name}" 
             style="background-color: ${marker.color}">
            <img src="../assets/check_white.png" alt="Selected" class="check-icon">
            <span style="padding: 0 4px;">${marker.name}</span>
            <img src="../assets/delete_white_icon.svg" alt="Delete" class="delete-icon">
        </div>
    `
    )
    .join("");
}

function setupMarkerListeners(modal, scanType) {
  if (!window.tempMarkers) {
    window.tempMarkers = [...headerMarkers];
  }
  const markerItems = modal.querySelectorAll(".marker-item");
  const markerInput = modal.querySelector(".marker-name-input");
  const colorPicker = modal.querySelector(".color-picker");
  const colorPickerArrow = modal.querySelector(".color-picker-wrapper img");
  const addMarkerButton = modal.querySelector(".add-marker-button");

  colorPickerArrow.addEventListener("click", () => {
    colorPicker.click();
  });

  colorPickerArrow.style.cursor = "pointer";

  const addNewMarker = () => {
    const name = markerInput.value.trim();
    const color = colorPicker.value;

    if (name) {
      const newMarker = { color, name };
      headerMarkers.push(newMarker);

      modal.querySelector(".marker-list").innerHTML = renderMarkers(name);
      setupMarkerListeners(modal, scanType);
      markerInput.value = "";
    }
  };

  markerItems.forEach((item) => {
    const deleteIcon = item.querySelector(".delete-icon");
    deleteIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      const markerName = item.dataset.name;

      window.tempMarkers = window.tempMarkers.filter(
        (m) => m.name !== markerName
      );

      const currentSelection =
        modal.querySelector(".marker-item.selected")?.dataset.name || "";
      modal.querySelector(".marker-list").innerHTML = renderMarkers(
        currentSelection,
        window.tempMarkers
      );
      setupMarkerListeners(modal, scanType);
    });

    item.addEventListener("click", () => {
      markerItems.forEach((otherItem) =>
        otherItem.classList.remove("selected")
      );
      item.classList.add("selected");
    });
  });

  markerInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addNewMarker();
    }
  });

  addMarkerButton.addEventListener("click", (e) => {
    e.preventDefault();
    addNewMarker();
  });
}

function updateTooltipPosition(tooltip, targetElement, position = "right") {
  const tooltipContainer = document.getElementById("tooltip-container");
  if (!tooltipContainer.contains(tooltip)) {
    tooltipContainer.appendChild(tooltip);
  }

  tooltip.style.visibility = "hidden";
  tooltip.style.opacity = "0";
  tooltip.style.top = "";
  tooltip.style.bottom = "";
  tooltip.style.left = "";
  tooltip.style.right = "";
  tooltip.style.transform = "";

  tooltip.classList.remove(
    "tooltip-right",
    "tooltip-top-end",
    "tooltip-bottom-end"
  );

  tooltip.offsetHeight;

  const targetRect = targetElement.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();

  const spaceRight = window.innerWidth - targetRect.right;
  const spaceTop = targetRect.top;
  const spaceBottom = window.innerHeight - targetRect.bottom;

  if (position === "right" && spaceRight >= 220) {
    tooltip.classList.add("tooltip-right");
    tooltip.style.left = `${targetRect.right + 8}px`;
    tooltip.style.top = `${targetRect.top + targetRect.height / 2}px`;
    tooltip.style.transform = "translateY(-50%)";
    tooltip.style.right = "auto";
    tooltip.style.bottom = "auto";
  } else if (spaceTop >= tooltipRect.height + 8) {
    tooltip.classList.add("tooltip-top-end");
    tooltip.style.bottom = `${window.innerHeight - targetRect.top + 8}px`;
    tooltip.style.right = `${window.innerWidth - targetRect.right - 4}px`;
    tooltip.style.left = "auto";
    tooltip.style.top = "auto";
    tooltip.style.transform = "none";
  } else {
    tooltip.classList.add("tooltip-bottom-end");
    tooltip.style.top = `${targetRect.bottom + 8}px`;
    tooltip.style.right = `${window.innerWidth - targetRect.right - 8}px`;
    tooltip.style.left = "auto";
    tooltip.style.bottom = "auto";
    tooltip.style.transform = "none";
  }

  requestAnimationFrame(() => {
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1";
  });
}

function addTooltipHandlers(
  commentIcon,
  comment,
  isHeaderComment = false,
  marker = null
) {
  const tooltipContainer = document.getElementById("tooltip-container");
  const tooltipClass = isHeaderComment
    ? ".header-comment-tooltip"
    : ".comment-tooltip";
  tooltipContainer
    .querySelectorAll(tooltipClass)
    .forEach((tooltip) => tooltip.remove());

  const existingTooltip = commentIcon.querySelector(tooltipClass);
  if (existingTooltip) {
    existingTooltip.remove();
  }

  if (!comment) return;

  const tooltip = document.createElement("div");
  tooltip.className = isHeaderComment
    ? "header-comment-tooltip"
    : "comment-tooltip";

  const iconId = Math.random().toString(36).substr(2, 9);
  commentIcon.dataset.iconId = iconId;
  tooltip.dataset.forIcon = iconId;

  if (isHeaderComment && marker) {
    const markerChip = document.createElement("div");
    markerChip.className = "marker-chip";
    markerChip.style.backgroundColor = marker.color;
    markerChip.textContent = marker.name;
    tooltip.appendChild(markerChip);
  }

  const textSpan = document.createElement("span");
  textSpan.textContent = comment;
  tooltip.appendChild(textSpan);

  let isHovered = false;
  let tooltipTimeout;
  let resizeTimeout;

  const showTooltip = () => {
    clearTimeout(tooltipTimeout);
    isHovered = true;
    const tooltipContainer = document.getElementById("tooltip-container");

    const existingTooltips = tooltipContainer.querySelectorAll(
      ".comment-tooltip, .header-comment-tooltip"
    );
    existingTooltips.forEach((t) => t.remove());

    if (!tooltipContainer.contains(tooltip)) {
      tooltipContainer.appendChild(tooltip);
    }
    updateTooltipPosition(tooltip, commentIcon);
  };

  const hideTooltip = () => {
    isHovered = false;
    tooltipTimeout = setTimeout(() => {
      if (!isHovered) {
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "0";
        const tooltipContainer = document.getElementById("tooltip-container");
        if (tooltipContainer.contains(tooltip)) {
          tooltipContainer.removeChild(tooltip);
        }
      }
    }, 100);
  };

  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (isHovered) {
        updateTooltipPosition(tooltip, commentIcon);
      }
    }, 100);
  };

  commentIcon.removeEventListener("mouseover", showTooltip);
  commentIcon.removeEventListener("mouseout", hideTooltip);
  window.removeEventListener("resize", handleResize);

  commentIcon.addEventListener("mouseover", showTooltip);
  commentIcon.addEventListener("mouseout", hideTooltip);
  window.addEventListener("resize", handleResize);

  tooltip.addEventListener("mouseover", () => {
    isHovered = true;
    clearTimeout(tooltipTimeout);
  });
  tooltip.addEventListener("mouseout", hideTooltip);
}

document.addEventListener("DOMContentLoaded", () => {
  renderTable();

  const siteFilter = document.getElementById("siteFilter");
  const dropdownContent = siteFilter.querySelector(".dropdown-content");
  const dropdownArrow = siteFilter.querySelector(".dropdown-arrow");

  siteFilter.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle("show");
    dropdownArrow.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!siteFilter.contains(e.target)) {
      dropdownContent.classList.remove("show");
      dropdownArrow.classList.remove("open");
    }
  });

  const checkboxes = dropdownContent.querySelectorAll('input[type="checkbox"]');
  const allSitesCheckbox = dropdownContent.querySelector('input[value="all"]');
  const selectedText = siteFilter.querySelector(".selected-text");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      e.stopPropagation();

      if (checkbox.value === "all") {
        checkboxes.forEach((cb) => {
          if (cb !== allSitesCheckbox) {
            cb.checked = false;
          }
        });
        selectedText.textContent = "All sites";
      } else {
        allSitesCheckbox.checked = false;

        const checkedSites = Array.from(checkboxes)
          .filter((cb) => cb.checked && cb.value !== "all")
          .map((cb) => cb.parentElement.textContent.trim());

        selectedText.textContent =
          checkedSites.length > 0 ? checkedSites.join(", ") : "All sites";

        if (checkedSites.length === 0) {
          allSitesCheckbox.checked = true;
        }
      }
    });
  });
});

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
        "3rd Trimester/ Cervical Length Assessment": {
          duration: "30 min",
        },
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
        "2nd Trimester Morphology +/- Uterine Arteries": {
          duration: "60 min",
        },
        "3rd Trimester/ Cervical Length Assessment": {
          duration: "30 min",
        },
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
        "2nd Trimester Morphology +/- Uterine Arteries": {
          duration: "60 min",
        },
        "3rd Trimester/ Cervical Length Assessment": {
          duration: "30 min",
        },
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
        "2nd Trimester Morphology +/- Uterine Arteries": {
          duration: "60 min",
        },
        "3rd Trimester/ Cervical Length Assessment": {
          duration: "30 min",
        },
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
        "2nd Trimester Morphology +/- Uterine Arteries": {
          duration: "60 min",
        },
        "3rd Trimester/ Cervical Length Assessment": {
          duration: "30 min",
        },
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
        "2nd Trimester Morphology +/- Uterine Arteries": {
          duration: "60 min",
        },
        "3rd Trimester/ Cervical Length Assessment": {
          duration: "30 min",
        },
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
        "2nd Trimester Morphology +/- Uterine Arteries": {
          duration: "60 min",
        },
        "3rd Trimester/ Cervical Length Assessment": {
          duration: "30 min",
        },
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
        "2nd Trimester Morphology +/- Uterine Arteries": {
          duration: "60 min",
        },
        "3rd Trimester/ Cervical Length Assessment": {
          duration: "30 min",
        },
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
  scanHeader.textContent = "Scan";
  headerRow.appendChild(scanHeader);

  Object.keys(tableData.employees).forEach((employeeName) => {
    const th = document.createElement("th");
    th.className = "header-cell";
    th.textContent = employeeName;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  tableData.scanTypes.forEach((scanType) => {
    const tr = document.createElement("tr");

    const scanCell = document.createElement("td");
    scanCell.className = "row-header";
    if (tableData.headerComments[scanType]?.hasComment) {
      scanCell.classList.add("has-comment");
    }
    scanCell.textContent = scanType;

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
      addTooltipHandlers(
        headerCommentIcon,
        tableData.headerComments[scanType].comment
      );
    }

    scanCell.appendChild(headerCommentIcon);
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
          td.innerHTML = `<span class="time-wrapper"><span class="na-text">NA</span><span class="dropdown-arrow"></span></span>`;

          if (hasComment) {
            td.classList.add("yellow-bg");
            const commentIndicator = document.createElement("div");
            commentIndicator.className = "comment-indicator";
            td.appendChild(commentIndicator);
          } else {
            td.classList.add("red-bg");
          }

          const commentIcon = document.createElement("div");
          commentIcon.className = hasComment
            ? "comment-icon has-comment"
            : "comment-icon no-comment";

          commentIcon.addEventListener("click", (e) => {
            if (
              e.currentTarget.closest(".data-cell").classList.contains("active")
            ) {
              e.stopPropagation();
              showCommentModal(e.currentTarget.closest(".data-cell"));
            }
          });

          if (hasComment) {
            addTooltipHandlers(commentIcon, comment);
          }
          td.appendChild(commentIcon);

          if (hasComment) {
            td.classList.remove("green-bg");
            td.classList.add("yellow-bg");

            const commentIndicator = document.createElement("div");
            commentIndicator.className = "comment-indicator";
            td.appendChild(commentIndicator);
          }

          td.addEventListener("click", handleCellClick);
        } else {
          td.classList.add("green-bg");
          td.innerHTML = `<span class="time-wrapper">${cellData}<span class="dropdown-arrow"></span></span>`;

          const commentIcon = document.createElement("div");
          commentIcon.className = hasComment
            ? "comment-icon has-comment"
            : "comment-icon no-comment";

          commentIcon.addEventListener("click", (e) => {
            if (
              e.currentTarget.closest(".data-cell").classList.contains("active")
            ) {
              e.stopPropagation();
              showCommentModal(e.currentTarget.closest(".data-cell"));
            }
          });

          if (hasComment) {
            addTooltipHandlers(commentIcon, comment);
          }
          td.appendChild(commentIcon);

          if (hasComment) {
            td.classList.remove("green-bg");
            td.classList.add("yellow-bg");

            const commentIndicator = document.createElement("div");
            commentIndicator.className = "comment-indicator";
            td.appendChild(commentIndicator);
          }

          td.addEventListener("click", handleCellClick);
        }
      } else {
        td.className = "data-cell red-bg";
        td.setAttribute("data-employee", employeeName);
        td.setAttribute("data-scan", scanType);
        td.innerHTML = `<span class="time-wrapper"><span class="na-text">NA</span><span class="dropdown-arrow"></span></span>`;

        if (!tableData.employees[employeeName].scans[scanType]) {
          tableData.employees[employeeName].scans[scanType] = {
            duration: "NA",
            hasComment: false,
          };
        }

        const commentIcon = document.createElement("div");
        commentIcon.className = "comment-icon no-comment";

        commentIcon.addEventListener("click", (e) => {
          if (
            e.currentTarget.closest(".data-cell").classList.contains("active")
          ) {
            e.stopPropagation();
            showCommentModal(e.currentTarget.closest(".data-cell"));
          }
        });

        td.appendChild(commentIcon);

        td.addEventListener("click", handleCellClick);
      }

      tr.appendChild(td);
    });

    table.appendChild(tr);
  });
}

function handleCellClick(event) {
  const cell = event.currentTarget;
  const timeWrapper = cell.querySelector(".time-wrapper");
  const clickedElement = event.target;

  const isTimeClick =
    clickedElement.closest(".time-wrapper") || clickedElement === timeWrapper;

  const columnIndex = cell.cellIndex;
  const rowIndex = cell.parentElement.rowIndex;
  const table = cell.closest("table");

  document
    .querySelectorAll(".header-cell.active-column, .row-header.active-row")
    .forEach((header) => {
      header.classList.remove("active-column", "active-row");
    });

  document.querySelectorAll(".data-cell").forEach((otherCell) => {
    if (otherCell !== cell) {
      const dropdown = otherCell.querySelector(".time-dropdown");
      if (dropdown) {
        dropdown.remove();
        otherCell.classList.remove("has-dropdown");
        const arrow = otherCell.querySelector(".dropdown-arrow");
        if (arrow) arrow.style.transform = "";
      }
      otherCell.classList.remove("active");

      const otherColumnIndex = otherCell.cellIndex;
      const otherRowIndex = otherCell.parentElement.rowIndex;
      table.rows[0].cells[otherColumnIndex].classList.remove("active-column");
      if (table.rows[otherRowIndex]) {
        const rowHeader = table.rows[otherRowIndex].cells[0];
        if (rowHeader) rowHeader.classList.remove("active-row");
      }
    }
  });

  if (isTimeClick) {
    const existingDropdown = cell.querySelector(".time-dropdown");

    if (existingDropdown) {
      existingDropdown.remove();
      cell.classList.remove("has-dropdown");
      const arrow = cell.querySelector(".dropdown-arrow");
      if (arrow) arrow.style.transform = "";
    } else {
      cell.classList.add("has-dropdown");
      showDropdown(cell);
    }
  }

  cell.classList.add("active");

  if (table.rows[0].cells[columnIndex]) {
    table.rows[0].cells[columnIndex].classList.add("active-column");
  }
  if (table.rows[rowIndex]) {
    const rowHeader = table.rows[rowIndex].cells[0];
    if (rowHeader) rowHeader.classList.add("active-row");
  }
}

function showDropdown(cell) {
  const employeeName = cell.getAttribute("data-employee");
  const scanType = cell.getAttribute("data-scan");
  const currentTime =
    tableData.employees[employeeName].scans[scanType]?.duration || "NA";

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

  naOption.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!tableData.employees[employeeName].scans[scanType]) {
      tableData.employees[employeeName].scans[scanType] = {};
    }
    const hasComment =
      tableData.employees[employeeName].scans[scanType].hasComment;
    tableData.employees[employeeName].scans[scanType].duration = "NA";

    const timeWrapper = cell.querySelector(".time-wrapper");
    timeWrapper.innerHTML = `<span class="na-text">NA</span><span class="dropdown-arrow"></span>`;

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

      const timeWrapper = cell.querySelector(".time-wrapper");
      timeWrapper.innerHTML = `${time}<span class="dropdown-arrow"></span>`;

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

  document.addEventListener("click", function closeDropdown(e) {
    if (!dropdown.contains(e.target) && !cell.contains(e.target)) {
      dropdown.remove();
      cell.classList.remove("has-dropdown", "active");
      const arrow = cell.querySelector(".dropdown-arrow");
      if (arrow) arrow.style.transform = "";
      document.removeEventListener("click", closeDropdown);
    }
  });
}

function showCommentModal(cell) {
  const employeeName = cell.getAttribute("data-employee");
  const scanType = cell.getAttribute("data-scan");

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

  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  modalOverlay.style.background = "transparent";
  modalOverlay.style.alignItems = "flex-start";
  modalOverlay.style.justifyContent = "flex-start";

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

      const commentIndicator = cell.querySelector(".comment-indicator");
      if (commentIndicator) {
        commentIndicator.remove();
      }

      activeCommentIcon.className = "comment-icon no-comment";
      const tooltip = activeCommentIcon.querySelector(".comment-tooltip");
      if (tooltip) {
        tooltip.remove();
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

function showHeaderCommentModal(headerCell, scanType) {
  const currentComment = tableData.headerComments[scanType]?.comment || "";
  const hasExistingComment =
    tableData.headerComments[scanType]?.hasComment || false;

  const activeCommentIcon = headerCell.querySelector(".header-comment-icon");
  activeCommentIcon.classList.add("modal-open");

  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  modalOverlay.style.background = "transparent";
  modalOverlay.style.alignItems = "flex-start";
  modalOverlay.style.justifyContent = "flex-start";

  const modal = document.createElement("div");
  modal.className = "comment-modal";

  const cellRect = headerCell.getBoundingClientRect();
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
  };

  const restoreIconState = () => {
    activeCommentIcon.classList.remove("modal-open");
  };

  const modalRect = modal.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  if (modalRect.right > viewportWidth) {
    modal.style.left = `${viewportWidth - modalRect.width - 16}px`;
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

    if (newComment) {
      if (!tableData.headerComments[scanType]) {
        tableData.headerComments[scanType] = {};
      }
      tableData.headerComments[scanType].hasComment = true;
      tableData.headerComments[scanType].comment = newComment;

      activeCommentIcon.className = "header-comment-icon has-comment";
      addTooltipHandlers(activeCommentIcon, newComment);

      headerCell.classList.add("has-comment");
    } else {
      if (tableData.headerComments[scanType]) {
        tableData.headerComments[scanType].hasComment = false;
        delete tableData.headerComments[scanType].comment;
      }

      activeCommentIcon.className = "header-comment-icon no-comment";
      const tooltip = activeCommentIcon.querySelector(".comment-tooltip");
      if (tooltip) {
        tooltip.remove();
      }

      headerCell.classList.remove("has-comment");
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

function addTooltipHandlers(commentIcon, comment) {
  const existingTooltip = commentIcon.querySelector(".comment-tooltip");
  if (existingTooltip) {
    existingTooltip.remove();
  }

  const tooltip = document.createElement("div");
  tooltip.className = "comment-tooltip";
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

    const existingTooltips =
      tooltipContainer.querySelectorAll(".comment-tooltip");
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

document.addEventListener("DOMContentLoaded", renderTable);

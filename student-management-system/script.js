/**
 * EduPulse — Modern Student Management System Logic
 * Handles interactive tabs, attendance marking, profile switching,
 * search filtering, modals, and responsive features.
 */

// 1. Initial Mock Dataset of Students
const initialStudents = [
  {
    id: "CS-2023-882",
    name: "Alex Rivera",
    email: "alex.rivera@university.edu",
    phone: "+1 (555) 234-8901",
    department: "Computer Science",
    deptCode: "CS",
    year: "3rd Year (Junior)",
    semester: "6th",
    cgpa: 3.92,
    attendanceRate: "97.4%",
    status: "Active",
    residence: "North Quad Dorm, Hall B - Room 314",
    bloodGroup: "O Positive (O+)",
    guardianName: "Carlos Rivera",
    guardianPhone: "+1 (555) 789-2234",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=250&q=80",
    attendanceStatus: "P", // P: Present, L: Late, A: Absent, E: Excused
    remarks: "Top performer in Algorithms",
    honorRoll: true,
    courses: [
      { code: "CS301", name: "Advanced Algorithms & Complexity", credits: 4.0, instructor: "Prof. D. Martinez", attendance: "98%", grade: "A" },
      { code: "CS304", name: "Distributed Database Architecture", credits: 3.5, instructor: "Dr. S. Connor", attendance: "94%", grade: "A-" },
      { code: "AI310", name: "Deep Neural Networks", credits: 4.0, instructor: "Prof. M. Chen", attendance: "100%", grade: "A+" },
      { code: "SE320", name: "Cloud Native Systems & DevOps", credits: 3.0, instructor: "Dr. K. Patel", attendance: "91%", grade: "A" },
      { code: "HU205", name: "Ethics in Artificial Intelligence", credits: 2.0, instructor: "Prof. L. Howard", attendance: "96%", grade: "B+" }
    ]
  },
  {
    id: "AI-2024-319",
    name: "Sophia Patel",
    email: "sophia.patel@university.edu",
    phone: "+1 (555) 345-6789",
    department: "Artificial Intelligence",
    deptCode: "AI",
    year: "2nd Year (Sophomore)",
    semester: "4th",
    cgpa: 3.86,
    attendanceRate: "94.2%",
    status: "Active",
    residence: "West Wing Residency, Suite 102",
    bloodGroup: "A Positive (A+)",
    guardianName: "Sunita Patel",
    guardianPhone: "+1 (555) 678-1290",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=250&q=80",
    attendanceStatus: "P",
    remarks: "Robotics Club Lead",
    honorRoll: true,
    courses: [
      { code: "AI201", name: "Machine Learning Foundations", credits: 4.0, instructor: "Dr. Robert Lang", attendance: "96%", grade: "A" },
      { code: "MA202", name: "Linear Algebra & Probability", credits: 3.5, instructor: "Prof. Clara Wu", attendance: "92%", grade: "A" },
      { code: "CS203", name: "Object Oriented Design", credits: 4.0, instructor: "Dr. Evan Wright", attendance: "95%", grade: "A-" }
    ]
  },
  {
    id: "DS-2022-104",
    name: "Marcus Zhang",
    email: "marcus.zhang@university.edu",
    phone: "+1 (555) 456-7890",
    department: "Data Science",
    deptCode: "DS",
    year: "4th Year (Senior)",
    semester: "8th",
    cgpa: 3.65,
    attendanceRate: "89.5%",
    status: "Active",
    residence: "Off-Campus Apartments, Apt 4C",
    bloodGroup: "B Positive (B+)",
    guardianName: "David Zhang",
    guardianPhone: "+1 (555) 890-4321",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    attendanceStatus: "L",
    remarks: "Capstone Project under review",
    honorRoll: false,
    courses: [
      { code: "DS401", name: "Big Data Analytics & Spark", credits: 4.0, instructor: "Prof. S. Rao", attendance: "88%", grade: "B+" },
      { code: "DS405", name: "Time Series & Predictive Modeling", credits: 3.5, instructor: "Dr. K. Novak", attendance: "91%", grade: "A-" }
    ]
  },
  {
    id: "SE-2023-556",
    name: "Emma Watson-Cole",
    email: "emma.watson@university.edu",
    phone: "+1 (555) 567-8901",
    department: "Software Engineering",
    deptCode: "SE",
    year: "3rd Year (Junior)",
    semester: "6th",
    cgpa: 3.98,
    attendanceRate: "99.1%",
    status: "Active",
    residence: "South Quad Dorm, Hall A - Room 210",
    bloodGroup: "O Negative (O-)",
    guardianName: "Helen Cole",
    guardianPhone: "+1 (555) 901-2345",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80",
    attendanceStatus: "P",
    remarks: "Valedictorian Nominee",
    honorRoll: true,
    courses: [
      { code: "SE301", name: "Software Design Patterns", credits: 4.0, instructor: "Dr. James Ford", attendance: "100%", grade: "A+" },
      { code: "SE305", name: "Microservices Architecture", credits: 3.5, instructor: "Prof. Elena Rios", attendance: "98%", grade: "A+" }
    ]
  },
  {
    id: "CS-2024-411",
    name: "Liam Johnson",
    email: "liam.j@university.edu",
    phone: "+1 (555) 678-9012",
    department: "Computer Science",
    deptCode: "CS",
    year: "1st Year (Freshman)",
    semester: "2nd",
    cgpa: 2.85,
    attendanceRate: "72.4%",
    status: "Probation",
    residence: "Freshman Commons, Tower 1",
    bloodGroup: "AB Positive (AB+)",
    guardianName: "Robert Johnson",
    guardianPhone: "+1 (555) 012-3456",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
    attendanceStatus: "A",
    remarks: "Academic counseling scheduled",
    honorRoll: false,
    courses: [
      { code: "CS101", name: "Intro to Programming", credits: 4.0, instructor: "Prof. Arthur Pendelton", attendance: "70%", grade: "C+" },
      { code: "MA101", name: "Calculus I", credits: 4.0, instructor: "Dr. Sarah Bright", attendance: "74%", grade: "C" }
    ]
  },
  {
    id: "AI-2023-744",
    name: "Chloe Bennett",
    email: "chloe.b@university.edu",
    phone: "+1 (555) 789-0123",
    department: "Artificial Intelligence",
    deptCode: "AI",
    year: "3rd Year (Junior)",
    semester: "5th",
    cgpa: 3.78,
    attendanceRate: "93.0%",
    status: "Active",
    residence: "West Wing Residency, Suite 305",
    bloodGroup: "A Negative (A-)",
    guardianName: "Gary Bennett",
    guardianPhone: "+1 (555) 123-4567",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80",
    attendanceStatus: "E",
    remarks: "Representing university at AI Summit",
    honorRoll: true,
    courses: [
      { code: "AI302", name: "Natural Language Processing", credits: 4.0, instructor: "Prof. M. Chen", attendance: "94%", grade: "A" },
      { code: "CS304", name: "Distributed Systems", credits: 3.5, instructor: "Dr. S. Connor", attendance: "92%", grade: "A-" }
    ]
  },
  {
    id: "DS-2024-912",
    name: "Noah Morales",
    email: "noah.morales@university.edu",
    phone: "+1 (555) 890-1234",
    department: "Data Science",
    deptCode: "DS",
    year: "2nd Year (Sophomore)",
    semester: "3rd",
    cgpa: 3.42,
    attendanceRate: "88.6%",
    status: "Active",
    residence: "North Quad Dorm, Hall C - Room 118",
    bloodGroup: "O Positive (O+)",
    guardianName: "Teresa Morales",
    guardianPhone: "+1 (555) 234-5678",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=250&q=80",
    attendanceStatus: "P",
    remarks: "Applied for Data Analytics Internship",
    honorRoll: false,
    courses: [
      { code: "DS201", name: "Applied Statistics", credits: 4.0, instructor: "Dr. K. Novak", attendance: "89%", grade: "B+" },
      { code: "CS201", name: "Data Structures", credits: 4.0, instructor: "Prof. D. Martinez", attendance: "88%", grade: "B+" }
    ]
  }
];

let students = [...initialStudents];
let currentSelectedStudentId = "CS-2023-882";

// 2. DOM Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initDashboardTable();
  initAttendanceTable();
  initProfileSelector();
  loadStudentProfile(currentSelectedStudentId);
  initEventListeners();
});

// 3. Section / Tab Switching Logic
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link[data-tab]");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const tabId = link.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Profile inner subtabs
  const profileTabButtons = document.querySelectorAll(".p-tab-btn");
  profileTabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      profileTabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const ptabKey = btn.getAttribute("data-ptab");
      document.querySelectorAll(".profile-sub-section").forEach(sec => {
        sec.classList.remove("active");
      });
      const targetSec = document.getElementById(`ptab-${ptabKey}`);
      if (targetSec) targetSec.classList.add("active");
    });
  });
}

function switchTab(tabName) {
  // Update sidebar active link
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("data-tab") === tabName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Switch content sections
  document.querySelectorAll(".content-section").forEach(sec => {
    sec.classList.remove("active");
  });

  const targetSection = document.getElementById(`${tabName}Section`);
  if (targetSection) {
    targetSection.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Close mobile sidebar if open
  document.getElementById("sidebar")?.classList.remove("open");
}

// 4. Render Dashboard Students Table
function initDashboardTable(filterMajor = "all", searchQuery = "") {
  const tbody = document.getElementById("dashboardTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const filtered = students.filter(student => {
    const matchesMajor = filterMajor === "all" || student.deptCode === filterMajor;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      student.name.toLowerCase().includes(q) || 
      student.id.toLowerCase().includes(q) || 
      student.department.toLowerCase().includes(q);
    return matchesMajor && matchesSearch;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 32px; color: var(--text-muted);">No student records found matching your filters.</td></tr>`;
    return;
  }

  filtered.forEach(student => {
    const tr = document.createElement("tr");

    let statusClass = "active";
    if (student.status === "Probation") statusClass = "probation";
    else if (student.status === "Pending") statusClass = "pending";

    tr.innerHTML = `
      <td>
        <div class="student-row-cell">
          <img src="${student.avatar}" alt="${student.name}" class="student-cell-avatar">
          <div class="student-cell-names">
            <strong>${student.name}</strong>
            <span>${student.id}</span>
          </div>
        </div>
      </td>
      <td>
        <strong>${student.department}</strong>
        <div style="font-size: 0.75rem; color: var(--text-muted);">${student.year}</div>
      </td>
      <td>
        <div style="display: flex; align-items: center; gap: 8px;">
          <div class="progress-bar-small" style="width: 75px; background: var(--border-color);">
            <div class="fill ${parseFloat(student.attendanceRate) >= 90 ? 'bg-emerald' : parseFloat(student.attendanceRate) >= 75 ? 'bg-indigo' : 'bg-rose'}" style="width: ${student.attendanceRate};"></div>
          </div>
          <strong style="font-size: 0.8rem;">${student.attendanceRate}</strong>
        </div>
      </td>
      <td><strong>${student.cgpa}</strong> <span style="font-size: 0.75rem; color: var(--text-muted);">/ 4.0</span></td>
      <td>
        <span class="status-pill ${statusClass}">
          <i class="fa-solid fa-circle" style="font-size: 6px;"></i> ${student.status}
        </span>
      </td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="viewStudentProfile('${student.id}')" title="View Full Profile">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Details
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// 5. Render Attendance Management Table
function initAttendanceTable() {
  const tbody = document.getElementById("attendanceTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  students.forEach(student => {
    const tr = document.createElement("tr");
    tr.id = `att-row-${student.id}`;

    tr.innerHTML = `
      <td><strong>${student.id}</strong></td>
      <td>
        <div class="student-row-cell">
          <img src="${student.avatar}" alt="${student.name}" class="student-cell-avatar">
          <div class="student-cell-names">
            <strong>${student.name}</strong>
            <span>${student.department}</span>
          </div>
        </div>
      </td>
      <td>${student.year} • Sem ${student.semester}</td>
      <td>
        <strong>${student.attendanceRate}</strong>
      </td>
      <td>
        <div class="attendance-toggle-group">
          <button type="button" class="attendance-opt opt-p ${student.attendanceStatus === 'P' ? 'selected' : ''}" onclick="setAttendance('${student.id}', 'P')">P</button>
          <button type="button" class="attendance-opt opt-l ${student.attendanceStatus === 'L' ? 'selected' : ''}" onclick="setAttendance('${student.id}', 'L')">L</button>
          <button type="button" class="attendance-opt opt-a ${student.attendanceStatus === 'A' ? 'selected' : ''}" onclick="setAttendance('${student.id}', 'A')">A</button>
          <button type="button" class="attendance-opt opt-e ${student.attendanceStatus === 'E' ? 'selected' : ''}" onclick="setAttendance('${student.id}', 'E')">E</button>
        </div>
      </td>
      <td>
        <span style="font-size: 0.8rem; color: var(--text-muted);">${student.remarks}</span>
      </td>
    `;
    tbody.appendChild(tr);
  });

  recalculateAttendanceMetrics();
}

function setAttendance(studentId, status) {
  const student = students.find(s => s.id === studentId);
  if (student) {
    student.attendanceStatus = status;
    const row = document.getElementById(`att-row-${studentId}`);
    if (row) {
      const btns = row.querySelectorAll(".attendance-opt");
      btns.forEach(b => b.classList.remove("selected"));
      const targetBtn = row.querySelector(`.opt-${status.toLowerCase()}`);
      if (targetBtn) targetBtn.classList.add("selected");
    }
    recalculateAttendanceMetrics();
  }
}

function recalculateAttendanceMetrics() {
  let p = 0, l = 0, a = 0, e = 0;
  students.forEach(s => {
    if (s.attendanceStatus === "P") p++;
    else if (s.attendanceStatus === "L") l++;
    else if (s.attendanceStatus === "A") a++;
    else if (s.attendanceStatus === "E") e++;
  });

  const presentCount = document.getElementById("presentCount");
  const lateCount = document.getElementById("lateCount");
  const absentCount = document.getElementById("absentCount");
  const excusedCount = document.getElementById("excusedCount");

  if (presentCount) presentCount.textContent = p;
  if (lateCount) lateCount.textContent = l;
  if (absentCount) absentCount.textContent = a;
  if (excusedCount) excusedCount.textContent = e;
}

// 6. Profile Section Handling
function initProfileSelector() {
  const select = document.getElementById("profileStudentSelect");
  if (!select) return;
  select.innerHTML = "";

  students.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s.id;
    opt.textContent = `${s.name} (${s.id} - ${s.deptCode})`;
    if (s.id === currentSelectedStudentId) opt.selected = true;
    select.appendChild(opt);
  });

  select.addEventListener("change", (e) => {
    loadStudentProfile(e.target.value);
  });
}

function viewStudentProfile(studentId) {
  currentSelectedStudentId = studentId;
  const select = document.getElementById("profileStudentSelect");
  if (select) select.value = studentId;
  loadStudentProfile(studentId);
  switchTab("profile");
}

function loadStudentProfile(studentId) {
  const student = students.find(s => s.id === studentId);
  if (!student) return;

  // Identity Card Elements
  document.getElementById("profileAvatar").src = student.avatar;
  document.getElementById("profileName").textContent = student.name;
  document.getElementById("profileRollNo").textContent = `Roll No: ${student.id}`;
  document.getElementById("profileDept").textContent = `B.Tech - ${student.department}`;
  document.getElementById("profileGPA").textContent = student.cgpa.toFixed(2);
  document.getElementById("profileAttendance").textContent = student.attendanceRate;

  // Contact Elements
  document.getElementById("profileEmail").textContent = student.email;
  document.getElementById("profilePhone").textContent = student.phone;
  document.getElementById("profileResidence").textContent = student.residence;
  document.getElementById("profileBlood").textContent = student.bloodGroup;

  // Courses table
  const coursesBody = document.getElementById("enrolledCoursesTableBody");
  if (coursesBody && student.courses) {
    coursesBody.innerHTML = "";
    student.courses.forEach(c => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${c.code}</strong></td>
        <td>${c.name}</td>
        <td>${c.credits.toFixed(1)}</td>
        <td>${c.instructor}</td>
        <td><span class="badge badge-success">${c.attendance}</span></td>
        <td><span class="grade-pill high">${c.grade}</span></td>
      `;
      coursesBody.appendChild(tr);
    });
  }
}

// 7. General UI Events, Modals & Toast
function initEventListeners() {
  // Mobile sidebar toggle
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebarClose = document.getElementById("sidebarClose");

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => sidebar.classList.add("open"));
  }
  if (sidebarClose && sidebar) {
    sidebarClose.addEventListener("click", () => sidebar.classList.remove("open"));
  }

  // Global search input
  const searchInput = document.getElementById("globalSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value;
      const deptFilter = document.getElementById("departmentFilter")?.value || "all";
      initDashboardTable(deptFilter, query);
    });
  }

  // Department filter dropdown
  const deptFilter = document.getElementById("departmentFilter");
  if (deptFilter) {
    deptFilter.addEventListener("change", (e) => {
      const query = document.getElementById("globalSearchInput")?.value || "";
      initDashboardTable(e.target.value, query);
    });
  }

  // Theme switcher
  const themeToggle = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      if (currentTheme === "dark") {
        document.documentElement.removeAttribute("data-theme");
        themeIcon.classList.replace("fa-sun", "fa-moon");
        showToast("Switched to Light Theme", "info");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        themeIcon.classList.replace("fa-moon", "fa-sun");
        showToast("Switched to Dark Theme", "info");
      }
    });
  }

  // Attendance actions
  const markAllBtn = document.getElementById("markAllPresentBtn");
  if (markAllBtn) {
    markAllBtn.addEventListener("click", () => {
      students.forEach(s => s.attendanceStatus = "P");
      initAttendanceTable();
      showToast("All students marked Present!", "success");
    });
  }

  const saveAttBtn = document.getElementById("saveAttendanceBtn");
  if (saveAttBtn) {
    saveAttBtn.addEventListener("click", () => {
      const dateVal = document.getElementById("attendanceDatePicker")?.value || "Today";
      showToast(`Attendance register successfully saved & locked for ${dateVal}!`, "success");
    });
  }

  // Keyboard shortcut Cmd/Ctrl + K to focus search
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      searchInput?.focus();
    }
  });

  // Notification bell click
  const notifBtn = document.getElementById("notificationBtn");
  if (notifBtn) {
    notifBtn.addEventListener("click", () => {
      showToast("You have 3 unread campus administrative notices.", "info");
    });
  }

  // Header quick profile pill
  const quickProfile = document.getElementById("quickProfileBtn");
  if (quickProfile) {
    quickProfile.addEventListener("click", () => {
      viewStudentProfile("CS-2023-882");
    });
  }
}

// 8. Student Enrollment Modal & Actions
function openStudentModal() {
  const modal = document.getElementById("enrollStudentModal");
  if (modal) modal.classList.add("active");
}

function closeStudentModal() {
  const modal = document.getElementById("enrollStudentModal");
  if (modal) modal.classList.remove("active");
}

function handleEnrollStudent(e) {
  e.preventDefault();
  const name = document.getElementById("newStudentName").value;
  const dept = document.getElementById("newStudentDept").value;
  const roll = document.getElementById("newStudentRoll").value;
  const year = document.getElementById("newStudentYear").value;
  const email = document.getElementById("newStudentEmail").value;
  const phone = document.getElementById("newStudentPhone").value || "+1 (555) 000-0000";

  let deptCode = "CS";
  if (dept.includes("Artificial")) deptCode = "AI";
  else if (dept.includes("Data")) deptCode = "DS";
  else if (dept.includes("Software")) deptCode = "SE";

  const newStudent = {
    id: roll,
    name: name,
    email: email,
    phone: phone,
    department: dept,
    deptCode: deptCode,
    year: year,
    semester: "1st",
    cgpa: 3.80,
    attendanceRate: "100%",
    status: "Active",
    residence: "Campus Hall Freshmen Dormitory",
    bloodGroup: "O Positive (O+)",
    guardianName: "Parent of " + name,
    guardianPhone: phone,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=250&q=80",
    attendanceStatus: "P",
    remarks: "Newly enrolled student",
    honorRoll: false,
    courses: [
      { code: "CS101", name: "Introduction to Computer Science", credits: 4.0, instructor: "Prof. D. Martinez", attendance: "100%", grade: "A" }
    ]
  };

  students.unshift(newStudent);
  closeStudentModal();
  document.getElementById("enrollStudentForm").reset();

  initDashboardTable();
  initAttendanceTable();
  initProfileSelector();
  showToast(`Student ${name} successfully enrolled!`, "success");
}

// 9. Toast Notification Helper
function showToast(message, type = "success") {
  const toast = document.getElementById("toastNotification");
  const msg = document.getElementById("toastMessage");
  if (!toast || !msg) return;

  msg.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// 10. Additional Utility Actions
function exportDirectoryCSV() {
  showToast("Exporting student directory roster as CSV...", "info");
}

function exportStudentReport() {
  window.print();
}

function toggleEditProfile() {
  showToast("Profile editing mode enabled. You can now modify student records.", "info");
}

// --- Static Data ---
const towerData = {
    "A Block": ["A1", "A2", "A3", "A4", "A5", "A6", "A7"],
    "B Block": ["B1A", "B1", "B2", "B3", "B4", "B5", "B6"]
};

// --- DOM Elements ---
const block = document.getElementById("block");
const locationFields = document.getElementById("locationFields");
const paymentFields = document.getElementById("paymentFields");
const typeField = document.getElementById("type");
const currentLocation = document.getElementById("currentLocation");
const form = document.getElementById("pujaForm");

let originalLocationHTML = locationFields.innerHTML;
let originalPaymentHTML = paymentFields.innerHTML;

// --- Initialization ---
window.addEventListener("DOMContentLoaded", initForm);

function initForm() {
    document.getElementById("date").value = new Date().toISOString().split("T")[0];
    preserveFormState(["flatNumber", "name", "mobile"]);
    setupAutoAdvance();
    block.addEventListener("change", handleBlockChange);
    typeField.addEventListener("change", handleTypeChange);
    form.addEventListener("submit", submitForm);
}

// --- Preserve Form State ---
function preserveFormState(exclude = []) {
    document.querySelectorAll("input, select, textarea").forEach(field => {
        if (!exclude.includes(field.id)) {
            const savedValue = localStorage.getItem(field.id);
            if (savedValue) field.value = savedValue;
            field.addEventListener("change", () => {
                localStorage.setItem(field.id, field.value);
            });
        }
    });
}

// --- Auto-Focus ---
function setupAutoAdvance() {
    const flatField = document.getElementById("flatNumber");
    const nameField = document.getElementById("name");
    flatField?.focus();
    flatField?.addEventListener("input", () => {
        if (flatField.value.length === 4) nameField?.focus();
    });
}

// --- Update Flats ---
function updateFlats() {
    const tower = document.getElementById("tower");
    const floor = document.getElementById("floor");
    const flat = document.getElementById("flatNumber");
    flat.innerHTML = '<option value="">Select Flat Number</option>';
    const t = tower?.value;
    const f = floor?.value;
    if (flatData[t] && flatData[t][f]) {
        flatData[t][f].forEach(num => {
            const opt = document.createElement("option");
            opt.value = num;
            opt.textContent = num;
            flat.appendChild(opt);
        });
    }
    updateLocationDisplay();
}

// --- Update Location Display ---
function updateLocationDisplay() {
    const tower = document.getElementById("tower");
    const floor = document.getElementById("floor");
    const loc = `${block.value} / ${tower?.value || ""} / Floor ${floor?.value || ""}`;
    currentLocation.textContent = loc.includes("Select") ? "" : `📍 Current Location: ${loc}`;
}

// --- Block Change Handler ---
function handleBlockChange() {
    const value = block.value;
    const isGuest = value === "Sponsor/Guest";

    if (isGuest) {
        locationFields.innerHTML = "";
        currentLocation.textContent = "";
        typeField.innerHTML = "";
    } else {
        locationFields.innerHTML = originalLocationHTML;
        typeField.innerHTML = `
      <option value="">Select Type</option>
      <option value="Owner">Owner</option>
      <option value="Tenant">Tenant</option>
      <option value="Vacant">Vacant</option>
      <option value="Locked">Locked</option>
      <option value="NotInterested">NotInterested</option>
    `;

        const tower = document.getElementById("tower");
        const flat = document.getElementById("flatNumber");

        tower.innerHTML = '<option value="">Select Tower</option>';
        flat.innerHTML = '<option value="">Select Flat Number</option>';
        (towerData[value] || []).forEach(t => {
            const opt = document.createElement("option");
            opt.value = t;
            opt.textContent = t;
            tower.appendChild(opt);
        });

        tower.addEventListener("change", updateFlats);
        document.getElementById("floor").addEventListener("change", updateFlats);
        updateLocationDisplay();
    }
}

function setISTDate() {
    const nowUTC = new Date();

    // Convert UTC to IST (UTC + 5:30)
    const istOffset = 60 * 60 * 1000;
    const istDate = new Date(nowUTC.getTime() + istOffset);

    const year = istDate.getFullYear();
    const month = String(istDate.getMonth() + 1).padStart(2, '0');
    const day = String(istDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    document.getElementById("date").value = formattedDate;
}

// Call this on page load or form init
setISTDate();

// --- Type Change Handler ---
function handleTypeChange() {
    const type = typeField.value;
    const isExempt = ["Vacant", "Locked", "NotInterested"].includes(type);

    if (isExempt) {
        paymentFields.innerHTML = "";
    } else {
        paymentFields.innerHTML = originalPaymentHTML;
        document.getElementById("date").value = new Date().toISOString().split("T")[0];
        setupUPIToggle(); // Reattach UPI toggle logic
    }
}

// --- UPI Toggle Logic ---
function setupUPIToggle() {
    const modeField = document.getElementById("mode");
    const upiContainer = document.getElementById("upiDetailsContainer");

    if (!modeField || !upiContainer) return;

    modeField.addEventListener("change", () => {
        const selectedMode = modeField.value;

        if (selectedMode === "UPI") {
            upiContainer.style.display = "block";
        } else {
            upiContainer.style.display = "none";
            document.getElementById("transactionId").value = "";
            document.getElementById("upiScreenshot").value = "";
        }
    });
}


function getISTTimestamp() {
    const nowUTC = new Date();

    // Get UTC components
    const utcYear = nowUTC.getUTCFullYear();
    const utcMonth = nowUTC.getUTCMonth();
    const utcDate = nowUTC.getUTCDate();
    const utcHours = nowUTC.getUTCHours();
    const utcMinutes = nowUTC.getUTCMinutes();
    const utcSeconds = nowUTC.getUTCSeconds();

    // Add IST offset (5 hours 30 minutes)
    const istDate = new Date(Date.UTC(
        utcYear,
        utcMonth,
        utcDate,
        utcHours,
        utcMinutes,
        utcSeconds
    ));

    const day = String(istDate.getDate()).padStart(2, '0');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[istDate.getMonth()];
    const year = istDate.getFullYear();

    const hours = String(istDate.getHours()).padStart(2, '0');
    const minutes = String(istDate.getMinutes()).padStart(2, '0');
    const seconds = String(istDate.getSeconds()).padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}


// --- Form Submission ---
async function submitForm(e) {
    e.preventDefault();

    const blockValue = block.value;
    const typeValue = typeField.value;

    const payload = {
        block: blockValue,
        tower: document.getElementById("tower")?.value || "",
        floor: document.getElementById("floor")?.value || "",
        flatNumber: document.getElementById("flatNumber")?.value || "",
        type: typeValue,
        transactionId: document.getElementById("transactionId")?.value || "",
        screenshotName: document.getElementById("upiScreenshot")?.files[0]?.name || "",
        name: document.getElementById("name")?.value || "",
        amount: document.getElementById("amount")?.value || "",
        mode: document.getElementById("mode")?.value || "",
        date: document.getElementById("date")?.value || "",
        mobile: document.getElementById("mobile")?.value || "",
        status: document.getElementById("status")?.value || "",
        collector: document.getElementById("collector")?.value || "",
        note: document.getElementById("note")?.value || "",
        timestamp: getISTTimestamp()
    };

    try {
        const response = await fetch("https://defaultcd8c5723b4824c3b9a224d29218864.66.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/bc47253f396d42619213cdd25ade1909/triggers/manual/paths/invoke/?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=E72wI6BzzmK0nLnD9C5MHAKiyd_djdYCBGKMTPeHIaM", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("✅ Submission successful!");

            localStorage.setItem("collectorBlock", blockValue);
            localStorage.setItem("collectorTower", document.getElementById("tower")?.value || "");
            localStorage.setItem("collectorFloor", document.getElementById("floor")?.value || "");

            ["flatNumber", "name", "mobile"].forEach(id => {
                const field = document.getElementById(id);
                if (field) field.value = "";
            });

            block.value = blockValue;

            if (blockValue !== "Sponsor/Guest") {
                handleBlockChange();
                document.getElementById("tower").value = localStorage.getItem("collectorTower");
                document.getElementById("floor").value = localStorage.getItem("collectorFloor");
                updateFlats();
                updateLocationDisplay();
            } else {
                locationFields.innerHTML = "";
                typeField.innerHTML = "";
                currentLocation.textContent = "";
            }

            document.getElementById("date").value = new Date().toISOString().split("T")[0];
            preserveFormState(["flatNumber", "name", "mobile"]);
            document.getElementById("flatNumber")?.focus();
        } else {
            const errorText = await response.text();
            alert(`⚠️ Submission failed. Server responded with:\n${errorText}`);
        }
    } catch (err) {
        alert(`❌ Network or server error:\n${err.message}`);
    }
}
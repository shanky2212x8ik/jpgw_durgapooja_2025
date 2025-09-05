const towerData = {
    "A Block": ["A1", "A2", "A3", "A4", "A5", "A6", "A7"],
    "B Block": ["B1A", "B1", "B2", "B3", "B4", "B5", "B6"]
};

const block = document.getElementById("block");
const locationFields = document.getElementById("locationFields");
const paymentFields = document.getElementById("paymentFields");
const typeField = document.getElementById("type");

let originalLocationHTML = locationFields.innerHTML;
let originalPaymentHTML = paymentFields.innerHTML;

// --- Preserve Form State Except Flat, Name, Mobile ---
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

// --- Auto-Focus and Auto-Advance ---
function setupAutoAdvance() {
    const flatField = document.getElementById("flatNumber");
    const nameField = document.getElementById("name");

    flatField.focus();

    flatField.addEventListener("input", () => {
        if (flatField.value.length === 4) {
            nameField.focus();
        }
    });
}

function updateFlats() {
    const tower = document.getElementById("tower");
    const floor = document.getElementById("floor");
    const flat = document.getElementById("flatNumber");

    flat.innerHTML = '<option value="">Select Flat Number</option>';
    const t = tower.value;
    const f = floor.value;
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

function updateLocationDisplay() {
    const tower = document.getElementById("tower");
    const floor = document.getElementById("floor");
    const loc = `${block.value} / ${tower?.value || ""} / Floor ${floor?.value || ""}`;
    document.getElementById("currentLocation").textContent = loc.includes("Select") ? "" : `📍 Current Location: ${loc}`;
}

block.addEventListener("change", () => {
    const value = block.value;
    const isGuest = value === "Sponser/Guest";

    if (isGuest) {
        locationFields.innerHTML = "";
        document.getElementById("currentLocation").textContent = "";
    } else {
        locationFields.innerHTML = originalLocationHTML;

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

        document.getElementById("tower").addEventListener("change", updateFlats);
        document.getElementById("floor").addEventListener("change", updateFlats);

        updateLocationDisplay();
    }
});

typeField.addEventListener("change", () => {
    const type = typeField.value;
    const isExempt = ["Vacant", "Locked", "NotInterested"].includes(type);

    if (isExempt) {
        paymentFields.innerHTML = "";
    } else {
        paymentFields.innerHTML = originalPaymentHTML;
        document.getElementById("date").value = new Date().toISOString().split("T")[0];
    }
});

document.getElementById("mode").addEventListener("change", () => {
    const mode = document.getElementById("mode").value;
    const txnField = document.getElementById("transactionIdField");

    if (mode === "UPI") {
        txnField.style.display = "block";
    } else {
        txnField.style.display = "none";
        document.getElementById("transactionId").value = "";
    }
});


window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("date").value = new Date().toISOString().split("T")[0];
    preserveFormState(["flatNumber", "name", "mobile"]);
    setupAutoAdvance();
});

// -------------- Submit Logic -------------------
document.getElementById("pujaForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const blockValue = document.getElementById("block").value;
    const typeValue = document.getElementById("type").value;

    const payload = {
        block: blockValue,
        tower: document.getElementById("tower")?.value || "",
        floor: document.getElementById("floor")?.value || "",
        flatNumber: document.getElementById("flatNumber")?.value || "",
        type: typeValue,
        name: document.getElementById("name")?.value || "",
        amount: document.getElementById("amount")?.value || "",
        mode: document.getElementById("mode")?.value || "",
        transactionId: document.getElementById("transactionId")?.value || "",
        date: document.getElementById("date")?.value || "",
        mobile: document.getElementById("mobile")?.value || "",
        status: document.getElementById("status")?.value || "",
        collector: document.getElementById("collector")?.value || "",
        note: document.getElementById("note")?.value || "",
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch("https://0d8a4b4f149be0119bee8bdf5f649e.a6.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/591a30de2ed2418591a8822d672eb532/triggers/manual/paths/invoke/?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=I2II0sg0gBbp5o5WPxd5cnU05O0NEKFQcsNxxHVy7ww", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("✅ Submission successful!");

            // Save persistent location fields
            localStorage.setItem("collectorBlock", blockValue);
            localStorage.setItem("collectorTower", document.getElementById("tower")?.value || "");
            localStorage.setItem("collectorFloor", document.getElementById("floor")?.value || "");

            // Clear only Flat Number, Name, Mobile
            ["flatNumber", "name", "mobile"].forEach(id => {
                const field = document.getElementById(id);
                if (field) field.value = "";
            });

            // Restore persistent location fields
            const savedBlock = localStorage.getItem("collectorBlock");
            const savedTower = localStorage.getItem("collectorTower");
            const savedFloor = localStorage.getItem("collectorFloor");

            document.getElementById("block").value = savedBlock;

            if (savedBlock !== "Sponser/Guest") {
                locationFields.innerHTML = originalLocationHTML;

                const tower = document.getElementById("tower");
                const flat = document.getElementById("flatNumber");

                tower.innerHTML = '<option value="">Select Tower</option>';
                flat.innerHTML = '<option value="">Select Flat Number</option>';
                (towerData[savedBlock] || []).forEach(t => {
                    const opt = document.createElement("option");
                    opt.value = t;
                    opt.textContent = t;
                    tower.appendChild(opt);
                });

                document.getElementById("tower").value = savedTower;
                document.getElementById("floor").value = savedFloor;

                document.getElementById("tower").addEventListener("change", updateFlats);
                document.getElementById("floor").addEventListener("change", updateFlats);

                updateFlats();
                updateLocationDisplay();
            } else {
                locationFields.innerHTML = "";
                document.getElementById("currentLocation").textContent = "";
            }

            // Reset date to today
            document.getElementById("date").value = new Date().toISOString().split("T")[0];

            // Reapply persistent values
            preserveFormState(["flatNumber", "name", "mobile"]);

            // Auto-focus on Flat Number
            document.getElementById("flatNumber").focus();
        } else {
            const errorText = await response.text();
            alert(`⚠️ Submission failed. Server responded with:\n${errorText}`);
        }
    } catch (err) {
        alert(`❌ Network or server error:\n${err.message}`);
    }
});
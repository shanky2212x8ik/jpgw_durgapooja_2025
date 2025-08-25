 const towerData = {
      "A Block": ["A1", "A2", "A3", "A4", "A5", "A6", "A7"],
      "B Block": ["B1A", "B1", "B2", "B3", "B4", "B5", "B6"]
    };

    const flatData = {
    "A1": {
    "1": ["A1-101","A1-102","A1-103","A1-104","A1-105","A1-106","A1-107"],
    "2": ["A1-201","A1-202","A1-203","A1-204","A1-205","A1-206","A1-207"],
    "3": ["A1-301","A1-302","A1-303","A1-304","A1-305","A1-306","A1-307"],
    "4": ["A1-401","A1-402","A1-403","A1-404","A1-405","A1-406","A1-407"]
  },
  "A2": {
    "1": ["A2-108","A2-109","A2-110","A2-111","A2-112","A2-113","A2-114","A2-115"],
    "2": ["A2-208","A2-209","A2-210","A2-211","A2-212","A2-213","A2-214","A2-215"],
    "3": ["A2-308","A2-309","A2-310","A2-311","A2-312","A2-313","A2-314","A2-315"],
    "4": ["A2-408","A2-409","A2-410","A2-411","A2-412","A2-413","A2-414","A2-415"]
  },
  "A3": {
    "1": ["A3-116","A3-117","A3-118","A3-119","A3-120","A3-121","A3-122","A3-123"],
    "2": ["A3-216","A3-217","A3-218","A3-219","A3-220","A3-221","A3-222","A3-223"],
    "3": ["A3-316","A3-317","A3-318","A3-319","A3-320","A3-321","A3-322","A3-323"],
    "4": ["A3-416","A3-417","A3-418","A3-419","A3-420","A3-421","A3-422","A3-423"]
  },
  "A4": {
    "1": ["A4-124","A4-125","A4-126","A4-127","A4-128","A4-129"],
    "2": ["A4-224","A4-225","A4-226","A4-227","A4-228","A4-229"],
    "3": ["A4-324","A4-325","A4-326","A4-327","A4-328","A4-329"],
    "4": ["A4-424","A4-425","A4-426","A4-427","A4-428","A4-429"]
  },
  "A5": {
    "1": ["A5-130","A5-131","A5-132","A5-133","A5-134","A5-135"],
    "2": ["A5-230","A5-231","A5-232","A5-233","A5-234","A5-235"],
    "3": ["A5-330","A5-331","A5-332","A5-333","A5-334","A5-335"],
    "4": ["A5-430","A5-431","A5-432","A5-433","A5-434","A5-435"]
  },
  "A6": {
    "1": ["A6-136","A6-137","A6-138","A6-139","A6-140","A6-141"],
    "2": ["A6-236","A6-237","A6-238","A6-239","A6-240","A6-241"],
    "3": ["A6-336","A6-337","A6-338","A6-339","A6-340","A6-341"],
    "4": ["A6-436","A6-437","A6-438","A6-439","A6-440","A6-441"]
  },
  "A7": {
    "1": ["A7-142","A7-143","A7-144","A7-145","A7-146"],
    "2": ["A7-242","A7-243","A7-244","A7-245","A7-246"],
    "3": ["A7-342","A7-343","A7-344","A7-345","A7-346"],
    "4": ["A7-442","A7-443","A7-444","A7-445","A7-446"]
  },
  "B1A": {
    "1": ["B1A-101","B1A-102","B1A-103"],
    "2": ["B1A-201","B1A-202","B1A-203"],
    "3": ["B1A-301","B1A-302","B1A-303"],
    "4": ["B1A-401","B1A-402","B1A-403"]
  },
  "B1": {
    "1": ["B1-104","B1-105","B1-106","B1-107","B1-108","B1-109","B1-110","B1-111"],
    "2": ["B1-204","B1-205","B1-206","B1-207","B1-208","B1-209","B1-210","B1-211"],
    "3": ["B1-304","B1-305","B1-306","B1-307","B1-308","B1-309","B1-310","B1-311"],
    "4": ["B1-404","B1-405","B1-406","B1-407","B1-408","B1-409","B1-410","B1-411"]
  },
  "B2": {
    "1": ["B2-112","B2-113","B2-114","B2-115","B2-116","B2-117","B2-118","B2-119"],
    "2": ["B2-212","B2-213","B2-214","B2-215","B2-216","B2-217","B2-218","B2-219"],
    "3": ["B2-312","B2-313","B2-314","B2-315","B2-316","B2-317","B2-318","B2-319"],
    "4": ["B2-412","B2-413","B2-414","B2-415","B2-416","B2-417","B2-418","B2-419"]
  },
  "B3": {
    "1": ["B3-120","B3-121","B3-122","B3-123","B3-124","B3-125"],
    "2": ["B3-220","B3-221","B3-222","B3-223","B3-224","B3-225"],
    "3": ["B3-320","B3-321","B3-322","B3-323","B3-324","B3-325"],
    "4": ["B3-420","B3-421","B3-422","B3-423","B3-424","B3-425"]
  },
  "B4": {
    "1": ["B4-126","B4-127","B4-128","B4-129","B4-130","B4-131"],
    "2": ["B4-226","B4-227","B4-228","B4-229","B4-230","B4-231"],
    "3": ["B4-326","B4-327","B4-328","B4-329","B4-330","B4-331"],
    "4": ["B4-426","B4-427","B4-428","B4-429","B4-430","B4-431"]
  },
    "B5": {
    "1": ["B5-132", "B5-133", "B5-134", "B5-135", "B5-136", "B5-137"],
    "2": ["B5-232", "B5-233", "B5-234", "B5-235", "B5-236", "B5-237"],
    "3": ["B5-332", "B5-333", "B5-334", "B5-335", "B5-336", "B5-337"],
    "4": ["B5-432", "B5-433", "B5-434", "B5-435", "B5-436", "B5-437"]
  },
  "B6": {
    "1": ["B6-138", "B6-139", "B6-140", "B6-141", "B6-142", "B6-143"],
    "2": ["B6-238", "B6-239", "B6-240", "B6-241", "B6-242", "B6-243"],
    "3": ["B6-338", "B6-339", "B6-340", "B6-341", "B6-342", "B6-343"],
    "4": ["B6-438", "B6-439", "B6-440", "B6-441", "B6-442", "B6-443"]
  }
    };

    const block = document.getElementById("block");
    const locationFields = document.getElementById("locationFields");
    const paymentFields = document.getElementById("paymentFields");
    const typeField = document.getElementById("type");

    let originalLocationHTML = locationFields.innerHTML;
    let originalPaymentHTML = paymentFields.innerHTML;

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

    window.addEventListener("DOMContentLoaded", () => {
      document.getElementById("date").value = new Date().toISOString().split("T")[0];
    });
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
        date: document.getElementById("date")?.value || "",
        mobile: document.getElementById("mobile")?.value || "",
        status: document.getElementById("status")?.value || "",
        collector: document.getElementById("collector")?.value || "",
        note: document.getElementById("note")?.value || "",
        timestamp: new Date().toISOString()
      };

      try {
        const response = await fetch("https://defaultcd8c5723b4824c3b9a224d29218864.66.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/bc47253f396d42619213cdd25ade1909/triggers/manual/paths/invoke/?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=E72wI6BzzmK0nLnD9C5MHAKiyd_djdYCBGKMTPeHIaM", {
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

          e.target.reset();

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
        } else {
          const errorText = await response.text();
          alert(`⚠️ Submission failed. Server responded with:\n${errorText}`);
        }
      } catch (err) {
        alert(`❌ Network or server error:\n${err.message}`);
      }
    });
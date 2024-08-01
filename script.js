document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let inputDate = new Date(document.getElementById("date-input").value);
  const todayDate = new Date();
  const ageInMilliseconds = todayDate - inputDate;
  const ageDate = new Date(ageInMilliseconds);
  const ageYears = ageDate.getUTCFullYear() - 1970;
  const ageMonths = ageDate.getUTCMonth();
  const ageDays = ageDate.getUTCDate() - 1;

  console.log("ageYears", typeof ageYears);
  console.log("ageMonths", typeof ageMonths);
  console.log("ageDays", typeof ageDays);

  if (ageYears < 0) {
    alert("Not Born Yet");
    return;
  }

  document.getElementById("years").textContent = ageYears;
  document.getElementById("months").textContent = ageMonths;
  document.getElementById("days").textContent = ageDays;
});

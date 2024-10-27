console.log("Presenting ValidateX - Email Validator");

document.getElementById("emailForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    const email = document.getElementById("email").value;
    const resultCont = document.getElementById("resultCont");

    // Reset the container and apply initial styles for the loading animation
    resultCont.classList.remove("result-hidden");
    resultCont.innerHTML = `<img src="loading.svg" width="108px" alt="loading results" class="center">`;
    resultCont.style.opacity = "1";
    resultCont.style.transform = "translateY(0)";
    resultCont.style.backgroundColor = "#fff";

    const apiKey = "ema_live_TGT3E9gurmiY3E2jas7ea0R7lLHOORHQ2NO4gRTz";
    const url = `https://api.emailvalidation.io/v1/info?apikey=${apiKey}&email=${email}`;

    try {
        const res = await fetch(url);
        const result = await res.json();
        let output = `<h3 class="result-content">Validation Results:</h3>`;

        Object.keys(result).forEach(key => {
            if (result[key] !== "" && result[key] !== " ") {
                output += `<div class="result-content"><strong>${key}: </strong> ${result[key]}</div>`;
            }
        });

        resultCont.innerHTML = output;
        resultCont.classList.add("result-visible");
        resultCont.style.backgroundColor = "#e1f5c4";
    } catch (error) {
        resultCont.innerHTML = `<div class="result-content" style="color:red;">Error fetching results. Please try again later.</div>`;
        resultCont.style.backgroundColor = "#f9d5d3";
    }
});

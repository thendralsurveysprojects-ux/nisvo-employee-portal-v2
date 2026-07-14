function loginEmployee() {

    const name = document.getElementById("employeeName").value.trim();
    const email = document.getElementById("employeeEmail").value.trim();
    const error = document.getElementById("error");

    if (name === "" || email === "") {
        error.innerHTML = "Please enter your Name and Email.";
        return;
    }

    error.innerHTML = "";

    // Store login details
    sessionStorage.setItem("employeeName", name);
    sessionStorage.setItem("employeeEmail", email);

    // Show loading animation
    document.getElementById("loading").style.display = "block";

    setTimeout(function () {

        // Google Form URL with Employee Name pre-filled
        const formURL =
            "https://docs.google.com/forms/d/e/1FAIpQLSd0G0nMzfI6gF_B92Muz8TH0VUx9370PKSAuYzNqAo9tlcnFw/viewform?usp=pp_url&entry.1138378266="
            + encodeURIComponent(name);

        window.location.href = formURL;

    }, 2000);

}

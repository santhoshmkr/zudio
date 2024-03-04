document.addEventListener("DOMContentLoaded", () => {
    let state = document.getElementById("state");
    let cityDefault = document.getElementById("cityDefault");
    let cityAndhra = document.getElementById("cityAndhra");
    let cityAsam = document.getElementById("cityAsam");
    let cityBangalore = document.getElementById("cityBangalore");
    let cityBihar = document.getElementById("cityBihar");
    let cityGoa = document.getElementById("cityGoa");
    let cityManipur = document.getElementById("cityManipor");
    let cityTamilNadu = document.getElementById("cityTamilnatu");
    let path = document.getElementById("path");
    let pathTwo = document.getElementById("pathTwo");

    let select = () => {
        let array = [cityDefault, cityAndhra, cityAsam, cityBangalore, cityBihar, cityGoa, cityManipur, cityTamilNadu];
        for (let i = 0; i < array.length; i++) {
            array[i].style.display = "none"; // Hide all city dropdowns by default
        }

        let selectedState = state.value;
        switch (selectedState) {
            case "option2": // Andhra Pradesh
                cityAndhra.style.display = "block";
                path.innerHTML = "Andhra Pradesh"
                path.setAttribute("href", "#cityAndhra")
                cityAndhra.addEventListener("change", () => {
                    let andhra = cityAndhra.value;
                    pathTwo.innerHTML = "&#187;" + andhra;
                })
                break;
            case "option3": // Assam
                cityAsam.style.display = "block";
                path.innerHTML = "Assam"
                path.setAttribute("href", "#cityAsam")
                cityAsam.addEventListener("change", () => {
                    let asam = cityAsam.value;
                    pathTwo.innerHTML = "&#187;" + asam;
                })
                break;
            case "option4": // Bangalore
                cityBangalore.style.display = "block";
                path.innerHTML = "Bangalore"
                path.setAttribute("href", "#cityBangalore")
                cityBangalore.addEventListener("change", () => {
                    let bangalore = cityBangalore.value;
                    pathTwo.innerHTML = "&#187;" + bangalore;
                })
                break;
            case "option5": // Bihar
                cityBihar.style.display = "block";
                path.innerHTML = "Bihar"
                path.setAttribute("href", "#cityBihar")
                cityBihar.addEventListener("change", () => {
                    let bihar = cityBihar.value;
                    pathTwo.innerHTML = "&#187;" + bihar;
                })
                break;
            case "option6": // Goa
                cityGoa.style.display = "block";
                path.innerHTML = "Goa"
                path.setAttribute("href", "#cityGoa")
                cityGoa.addEventListener("change", () => {
                    let goa = cityGoa.value;
                    pathTwo.innerHTML = "&#187;" + goa;
                })
                break;
            case "option7": // Manipur
                cityManipur.style.display = "block";
                path.innerHTML = "Manipur"
                path.setAttribute("href", "#cityManipur")
                cityManipur.addEventListener("change", () => {
                    let manipur = cityManipur.value;
                    pathTwo.innerHTML = "&#187;" + manipur;
                })
                break;
            case "option8": // Tamil Nadu
                cityTamilNadu.style.display = "block";
                path.innerHTML = "Tamilnadu"
                path.setAttribute("href", "#cityTaminadu")
                cityTamilNadu.addEventListener("change", () => {
                    let tamilnadu = cityTamilNadu.value;
                    pathTwo.innerHTML = "&#187;" + tamilnadu;
                })
                break;
            default: // Default case: Select State
                cityDefault.style.display = "block"; // Show default city if state not matched
        }
    };

    // Call select function when the state selection changes
    state.addEventListener("change", select);

    // Call select function initially to set the initial city dropdown display based on the default selected state
    select();
});
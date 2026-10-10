async function fetchData() {
    const loadingText = document.getElementById("loading");
    const dataText = document.getElementById("data");

    loadingText.style.display = "block"; // show loading msg..
    dataText.textContent = "";

    try{
        const response = await new Promise(resolve => { 
            setTimeout(() => resolve("Data loading successfully"), 3000);
        })

        dataText.textContent = response;
    } catch(error) {
        dataText.textContent = "Error Loading Data"
    } finally {
        loadingText.style.display = "none";
    }
}
console.log("we good")


const getParkInfo = () => fetch("http://localhost:8088/parks")
        .then(response => response.json())

//     .then(response => {
//         console.log(response)
//     })
// }

const createParkHTML = allParks => {

    console.log("how about here?")

    const mainContainer = document.querySelector(".mainContainer")

    mainContainer.innerHTML = ""
    console.log("is this working")
    allParks.forEach(eachPark => {

        const parkContainer = document.createElement("div")
        const parkName = document.createElement("h3")
        const state = document.createElement("p")
        const lat = document.createElement("p")
        const long = document.createElement("p")
        const visited = document.createElement("p")

        parkContainer.classList.add("parkContainer")
        parkName.textContent = `${eachPark.name}`
        state.textContent = `State: ${eachPark.state}`
        lat.textContent = `Lat: ${eachPark.latitude}`
        long.textContent = `Long: ${eachPark.longitude}`
        if (eachPark.visited) {
            visited.textContent = "Have visited"
            parkContainer.classList.add("visited")
        } else {
            visited.textContent = "Have not visited"
            parkContainer.classList.add("notVisited")
        }

        console.log(parkName)
        parkContainer.appendChild(parkName)
        parkContainer.appendChild(state)
        parkContainer.appendChild(lat)
        parkContainer.appendChild(long)
        parkContainer.appendChild(visited)
        mainContainer.appendChild(parkContainer)


    })

}


getParkInfo()
    .then(response => {
        createParkHTML(response)})



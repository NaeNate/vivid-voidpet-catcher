document.getElementById("collect").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: collect,
  })
})

const collect = () => {
  const scare = () => {
    const pets = Array.from(
      document.querySelector("#__next > div.h-full.w-full").childNodes
    ).filter((element) => element.className === "absolute")

    pets.forEach((pet) => {
      pet.firstChild.click()
    })

    const modals = Array.from(
      document.body.getElementsByClassName("ReactModalPortal")
    ).filter((modal) => modal.firstChild !== null)

    modals.forEach((modal, i) => {
      setTimeout(() => {
        modal.firstChild.firstChild.firstChild.lastChild.click()
      }, i * 300)
    })
  }

  scare()

  setTimeout(() => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }))
    document.dispatchEvent(new KeyboardEvent("keyup", { key: "ArrowDown" }))

    setTimeout(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }))
      document.dispatchEvent(new KeyboardEvent("keyup", { key: "ArrowUp" }))
    }, 800)
  }, 1000)
}

document.getElementById("all").addEventListener("click", async () => {
  document
    .getElementById("boxes")
    .querySelectorAll("input[type=checkbox]")
    .forEach((checkbox) => {
      checkbox.checked = true
    })
})

document.getElementById("none").addEventListener("click", async () => {
  document
    .getElementById("boxes")
    .querySelectorAll("input[type=checkbox]")
    .forEach((checkbox) => {
      checkbox.checked = false
    })
})

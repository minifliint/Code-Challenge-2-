const form = document.querySelector("#guest-form");
const guestList = document.querySelector("#guest-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const input = document.querySelector("#create_item");
  const guestName = input.value.trim();

  if (guestName === "") return;

  // Limit check
  if (guestList.children.length >= 10) {
    alert("Guest list full!");
    return;
  }

  // Create guest list item
  const li = document.createElement("li");
  li.textContent = guestName;

  // RSVP Button
  const rsvpBtn = document.createElement("button");
  rsvpBtn.className = "rsvp-btn";
  rsvpBtn.textContent = "Not Attending";
  rsvpBtn.addEventListener("click", () => {
    rsvpBtn.textContent =
      rsvpBtn.textContent === "Attending" ? "Not Attending" : "Attending";
  });

  // Remove Button
  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  // Add buttons to list item
  li.appendChild(rsvpBtn);
  li.appendChild(removeBtn);

  // Add list item to the list
  guestList.appendChild(li);

  // Clear the input field
  input.value = "";
});
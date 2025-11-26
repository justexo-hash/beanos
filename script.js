const copyBtn = document.querySelector("#copy-btn");
const addressElement = document.querySelector("#contract-address");

if (copyBtn && addressElement) {
  const contract =
    copyBtn.dataset.address || addressElement.textContent.trim();

  const resetLabel = () => {
    setTimeout(() => {
      copyBtn.textContent = "Copy";
      copyBtn.classList.remove("copied");
    }, 1800);
  };

  copyBtn.addEventListener("click", async () => {
    if (!contract) {
      return;
    }

    try {
      await navigator.clipboard.writeText(contract);
      copyBtn.textContent = "Copied!";
      copyBtn.classList.add("copied");
      resetLabel();
    } catch (error) {
      window.prompt("Copy this address:", contract);
    }
  });
}

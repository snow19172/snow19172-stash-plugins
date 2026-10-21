(function() {
 // Adds a "Expand/Collapse All" button to the Available Plugins and Available Scrapers sections
 
  let allExpanded = false; // Tracks global expand/collapse state

  /**
   * Toggles the expanded/collapsed state of a single row button
   * @param {HTMLButtonElement} btn - The collapse button in the row
   * @param {boolean} expand - Whether to expand (true) or collapse (false)
   */
  const toggleRow = (btn, expand) => {
    const isExpanded = btn.dataset.expanded === "true";
    if ((expand && !isExpanded) || (!expand && isExpanded)) {
      btn.click();
      btn.dataset.expanded = expand.toString();
    }
  };

  /**
   * Toggles all rows in the table
   * @param {HTMLElement} tbody - The table body containing rows
   */
  const toggleAllRows = tbody => {
    tbody.querySelectorAll('.source-collapse button').forEach(btn => {
      toggleRow(btn, !allExpanded); // Expand if currently collapsed, collapse if expanded
    });
    allExpanded = !allExpanded; // Flip global state
  };

  /**
   * Creates and adds the "Expand/Collapse All" button to the toolbar
   * @param {HTMLElement} tbody - The table body containing rows
   * @param {HTMLElement} toolbar - The toolbar container for buttons
   */
  const addMasterToggleButton = (tbody, toolbar) => {
    if (toolbar.querySelector('.master-toggle-btn')) return; // Avoid duplicates

    const btn = document.createElement('button');
    btn.textContent = "Expand All";                       // Initial text
    btn.className = "master-toggle-btn btn btn-primary btn-sm";
    btn.style.marginLeft = "2px";                         // Slight spacing

    btn.addEventListener('click', () => {
      toggleAllRows(tbody);                               // Toggle all rows
      btn.textContent = allExpanded ? "Collapse All" : "Expand All"; // Update text
    });

    toolbar.appendChild(btn);
  };

  /**
   * Initializes the feature for the Available Plugins / Scrapers section
   */
  const initialize = () => {
    const section = document.querySelector('.available-packages');
    if (!section) return false; // Section not yet loaded

    const tbody = section.querySelector('tbody');
    const toolbar = section.querySelector('.package-manager-toolbar');
    if (!tbody || !toolbar) return false;

    addMasterToggleButton(tbody, toolbar);
    return true;
  };

  // Poll until the section loads, then initialize
  const interval = setInterval(() => {
    if (initialize()) clearInterval(interval);
  }, 500);
})();

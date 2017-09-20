(function() {
    const STORAGE_KEY_SELECTED_FILE = "ex6_selected_file";

    let m_cboSelectFile = null;
    let m_divConsoleMessages = null;
    let m_oLastScriptElement = null;

    /**
     * Add a global error handler
     */
    window.onerror = (...arguments) => {
        // Check for errors to skip
        if (arguments && arguments.length === 1 && arguments[0].isTrusted) { return; }

        // Log error
        console.error("WINDOW ERROR", ...arguments);
    };

    /**
     * Logs a message to the screen
     * @param {string} logType - Identifies the log type
     * @param {string} iconName - Identifies the icon name
     * @param {any[]} arguments - The arguments to log
     */
    function logMessage(logType, iconName, ...arguments) {
        let szData = "";
        for (let oItem of arguments) {
            if (szData.length > 0) { szData += "\n"; }
            if (typeof oItem === "string") {
                szData += oItem;
            } else {
                szData += JSON.stringify(oItem);
            }
        }
        
        let ctrMessage = document.createElement("div");
        ctrMessage.innerHTML = `<span class="glyphicon glyphicon-${iconName}"></span>${szData}`;
        ctrMessage.className = `log slide-in alert alert-${logType}`;
        m_divConsoleMessages.appendChild(ctrMessage);
    }

    /**
     * Clears console messages
     */
    function clearMessages() {
        m_divConsoleMessages.innerHTML = "";
    }

    /**
     * Overrides console functions to also log the messages to the screen
     */
    function interceptConsoleMessages() {
        let fxConsoleLog = console.log;
        let fxConsoleInfo = console.info;
        let fxConsoleWarn = console.warn;
        let fxConsoleError = console.error;
        let fxConsoleClear = console.clear;

        console.log = (...arguments) => { logMessage("success", "ok-sign", ...arguments); fxConsoleLog(...arguments); };
        console.info = (...arguments) => { logMessage("info", "info-sign", ...arguments); fxConsoleInfo(...arguments); };
        console.warn = (...arguments) => { logMessage("warning", "warning-sign", ...arguments); fxConsoleWarn(...arguments); };
        console.error = (...arguments) => { logMessage("danger", "alert", ...arguments); fxConsoleError(...arguments); };  
        console.clear = () => { clearMessages(); fxConsoleClear(); }
    }

    /**
     * Loads and runs the selected script file
     */
    function loadSelectedScript() {
        // Clear console messages
        console.clear();

        // Remove the last script element
        if (m_oLastScriptElement) {
            document.body.removeChild(m_oLastScriptElement);
            m_oLastScriptElement = null;
        }

        // Create the script element
        let ctrScript = document.createElement("script");
        ctrScript.setAttribute("src", `JS/${m_cboSelectFile.value}`);

        // Add the script to the body
        document.body.appendChild(ctrScript);
        m_oLastScriptElement = ctrScript;
    }

    /**
     * Add client event handler to the script drop-down list
     */
    function addScriptHandler() {
        let ctrSelectFile = document.getElementById("cboSelectFile");
        ctrSelectFile.addEventListener("change", () => {
            // Store the selected script
            localStorage.setItem(STORAGE_KEY_SELECTED_FILE, m_cboSelectFile.value);

            // Display the selected script
            loadSelectedScript();
        });
    }

    /**
     * Set up page logic when DOM content has loaded
     */
    document.addEventListener("DOMContentLoaded", () => {
        // Grab element references
        m_cboSelectFile = document.getElementById("cboSelectFile");
        m_divConsoleMessages = document.getElementById("divConsoleMessages");

        // Set the selected file
        let szFile = localStorage.getItem(STORAGE_KEY_SELECTED_FILE);
        if (szFile) { m_cboSelectFile.value = szFile; }

        // Other set-up
        interceptConsoleMessages();
        addScriptHandler();
        loadSelectedScript();
    });
})();
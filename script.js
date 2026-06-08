// ========== Shared Helper Functions ==========

function showStatus(elId, msg, type) {
    const div = document.getElementById(elId);
    if (!div) return;
    div.innerHTML = `<div class="status-message status-${type}">${msg}</div>`;
    setTimeout(() => {
        if (div.firstChild) div.innerHTML = '';
    }, 4000);
}

function updateUploadArea(areaId, fileName) {
    const area = document.getElementById(areaId);
    if (!area) return;
    if (fileName) {
        area.classList.add('has-file');
        let badge = area.querySelector('.filename-badge');
        if (!badge) {
            badge = document.createElement('div');
            badge.className = 'filename-badge';
            area.appendChild(badge);
        }
        badge.textContent = `✓ ${fileName}`;
    } else {
        area.classList.remove('has-file');
        const badge = area.querySelector('.filename-badge');
        if (badge) badge.remove();
    }
}

function copyText(elId) {
    const el = document.getElementById(elId);
    if (!el || !el.value) {
        alert('Nothing to copy');
        return;
    }
    navigator.clipboard.writeText(el.value);
    showStatus('ocrStatus', 'Copied!', 'success');
}

function copyPassword() {
    const pass = document.getElementById('generatedPass');
    if (!pass || !pass.value) {
        alert('Generate a password first');
        return;
    }
    navigator.clipboard.writeText(pass.value);
    showStatus('passResult', '✅ Password copied!', 'success');
}

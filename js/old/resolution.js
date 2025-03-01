function updateResolutionOptions() {
    const aspectRatio = document.getElementById('aspect-ratio').value;
    const resolutionBox = document.getElementById('resolution-box');
    const customResolutionContainer = document.getElementById('custom-resolution-container');
    const resolutionSelect = document.getElementById('resolution');
    let options = [];

    if (aspectRatio === '4:3') {
        options = ['640x480', '720x576', '800x600', '1024x768', '1152x864', '1280x960', '1400x1050', '1600x1200', '1920x1440'];
        resolutionBox.style.display = 'block';
        customResolutionContainer.style.display = 'none';
    } else if (aspectRatio === '16:9') {
        options = ['1176x664', '1280x720', '1360x768', '1366x768', '1600x900', '1920x1080', '2560x1440', '1834x786'];
        resolutionBox.style.display = 'block';
        customResolutionContainer.style.display = 'none';
    } else if (aspectRatio === '16:10') {
        options = ['720x480', '1280x768', '1280x800', '1440x900', '1600x1024', '1680x1050', '1920x1200', '1440x960'];
        resolutionBox.style.display = 'block';
        customResolutionContainer.style.display = 'none';
    } else if (aspectRatio === 'custom') {
        resolutionBox.style.display = 'none';
        customResolutionContainer.style.display = 'flex';
    }

    resolutionSelect.innerHTML = '';
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.innerHTML = option;
        resolutionSelect.appendChild(opt);
    });
}

// Initialize the resolution options on page load document.addEventListener('DOMContentLoaded', updateResolutionOptions);
function resolution_update () {
    const aspectRatio = document.getElementById('aspect_ratio_select').value;
    const resolution_select = document.getElementById('resolution_select');
    const input_container = document.getElementById('custom_resolution');
    const label = document.getElementById('label_resolution');
    let options = [];

    if (aspectRatio === '4:3') {
        options = ['640x480', '720x576', '800x600', '1024x768', '1152x864', '1280x960', '1400x1050', '1600x1200', '1920x1440'];
        input_container.style.display = 'none';
        resolution_select.style.display = 'flex';
        label.style.display = 'flex';
    } else if (aspectRatio === '16:9') {
        options = ['1176x664', '1280x720', '1360x768', '1366x768', '1600x900', '1920x1080', '2560x1440', '1834x786'];
        input_container.style.display = 'none';
        resolution_select.style.display = 'flex';
        label.style.display = 'flex';
    } else if (aspectRatio === '16:10') {
        options = ['720x480', '1280x768', '1280x800', '1440x900', '1600x1024', '1680x1050', '1920x1200', '1440x960'];
        input_container.style.display = 'none';
        resolution_select.style.display = 'flex';
        label.style.display = 'flex';
    } else if (aspectRatio === 'custom') {
        input_container.style.display = 'block';
        resolution_select.style.display = 'none';
        label.style.display = 'none';
    }

    resolution_select.innerHTML = '';
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.innerHTML = option;
        resolution_select.appendChild(opt)
    })
}

document.addEventListener('DOMContentLoaded', resolution_update);
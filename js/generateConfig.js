function generateConfig() {
    const aspectRatio = document.getElementById('aspect-ratio').value;
    var width, height;
    var antiAliasing_;
    var cmaa2 = 0;
    var globalShadow_;
    var dynamicShadows_;
    var textureDetail_;
    var shaderDetail_;
    var particleDetail_;
    var ambientOcclusion_;
    var hdr_;
    var fidelityFX_;

    if (aspectRatio === 'custom') {
        width = document.getElementById('width-input').value || '1920';
        height = document.getElementById('height-input').value || '1080';
    } else {
        const resolution = document.getElementById('resolution').value || '1920x1080';
        [width, height] = resolution.split('x');
    }

    const refresh_rate = document.getElementById('refresh_rate_input').value || '60';
	
    const antiAliasing = document.getElementById('select1').value;
    const globalShadow = document.getElementById('select2').value;
    const dynamicShadows = document.getElementById('select3').value;
    const textureDetail = document.getElementById('select4').value;
    const texturefilter = document.getElementById('select10').value;
    const shaderDetail = document.getElementById('select5').value;
    const particleDetail = document.getElementById('select6').value;
    const ambientOcclusion = document.getElementById('select7').value;
    const hdr = document.getElementById('select8').value;
    const fidelityFX = document.getElementById('select9').value;

    if (antiAliasing === 'None') {
        antiAliasing_ = 0;
    } else if (antiAliasing === 'CMAA2') {
        antiAliasing_ = 0;
        cmaa2 = 1;
    } else if (antiAliasing === '2x MSAA') {
        antiAliasing_ = 2;
    } else if (antiAliasing === '4x MSAA') {
        antiAliasing_ = 4;
    } else if (antiAliasing === '8x MSAA') {
        antiAliasing_ = 8;
    }

    const shadowLevels = { 'Low': 0, 'Medium': 1, 'High': 2, 'Very High': 3 };
    globalShadow_ = shadowLevels[globalShadow] || 0;

    const dynamicShadowLevels = { 'Sun Only': 0, 'All': 1 };
    dynamicShadows_ = dynamicShadowLevels[dynamicShadows] || 0;

    const textureDetailLevels = { 'Low': 0, 'Medium': 1, 'High': 2 };
    textureDetail_ = textureDetailLevels[textureDetail] || 0;

    const texturefilterLevels = { 'Bilinear' : 0, 'Trilinear' : 1, 'Anisotropic 2x' : 2, 'Anisotropic 4x' : 3, 'Anisotropic 8x' : 4, 'Anisotropic 16x' : 5 };
    texturefilter_ = texturefilterLevels[texturefilter] || 0;

    const shaderDetailLevels = { 'Low': 0, 'High': 1 };
    shaderDetail_ = shaderDetailLevels[shaderDetail] || 0;

    const particleDetailLevels = { 'Low': 0, 'Medium': 1, 'High': 2, 'Very High': 3 };
    particleDetail_ = particleDetailLevels[particleDetail] || 0;

    const ambientOcclusionLevels = { 'Disabled': 0, 'Medium': 1, 'High': 2 };
    ambientOcclusion_ = ambientOcclusionLevels[ambientOcclusion] || 0;

    const hdrLevels = { 'Quality': -1, 'Performance': 3 };
    hdr_ = hdrLevels[hdr] || -1;

    const fidelityFXLevels = { 'Disabled (Highest Quality)': 0, 'Ultra Quality': 1, 'Quality': 2, 'Balanced' : 3, 'Performance': 4 };
    fidelityFX_ = fidelityFXLevels[fidelityFX] || 0;

    const configContent = `
    "video.cfg"
{
    "setting.defaultres"        "${width}"             // Width
    "setting.defaultresheight"        "${height}"         // Height
    "setting.refreshrate_numerator"        "${refresh_rate}"        // refreshrate
    "setting.refreshrate_denominator"        "0"     // For round up
    "setting.fullscreen"        "0"                // 0 - Windowed or noborder; 1 - Fullscreen
    "setting.mat_vsync"        "1"                    // V-sync
    "Version"        "15"
    "VendorID"        "4318"
    "DeviceID"        "7944"
    "setting.cpu_level"        "2"
    "setting.gpu_mem_level"        "3"
    "setting.gpu_level"        "3"
    "setting.knowndevice"        "1"
    "setting.nowindowborder"        "0"
    "setting.fullscreen_min_on_focus_loss"        "0"
    "setting.high_dpi"        "0"
    "setting.coop_fullscreen"        "0"
    "setting.videocfg_shadow_quality"        "${globalShadow_}"
    "setting.videocfg_texture_detail"        "${textureDetail_}"
    "setting.videocfg_ao_detail"        "${ambientOcclusion_}"
    "setting.videocfg_particle_detail"        "${particleDetail_}"
    "setting.videocfg_fsr_detail"        "${fidelityFX_}"
    "setting.videocfg_hdr_detail"        "${hdr_}"
    "setting.r_texturefilteringquality"        "${texturefilter_}"
    "setting.r_low_latency"        "0"
    "setting.r_csgo_cmaa_enable"        "${cmaa2}"
    "AutoConfig"        "2"
    "setting.msaa_samples"        "${antiAliasing_}"
    "setting.shaderquality"        "${shaderDetail_}"
    "setting.aspectratiomode"        "1"
    "setting.videocfg_dynamic_shadows"        "${dynamicShadows_}"
    "setting.monitor_index"        "0"
}
    `;

    document.getElementById('config-output').value = configContent;
}

function downloadConfig() {


	if (isNaN(document.getElementById('width-input').value) || isNaN(document.getElementById('height-input').value)) {
		alert('Please enter a valid number for custom resolution width and height.');
		return;
	}

    if ((document.getElementById('width-input').value === '' || document.getElementById('height-input').value === '') && (document.getElementById('aspect-ratio').value === 'custom')) {
		alert('Please enter a custom resolution. \n\nWeight and Height cannot be empty.');
		return;
	}

	if (isNaN(document.getElementById('refresh_rate_input').value)) {
		alert('Please enter a valid number for refresh rate.');
		return;
	}
	
	if (document.getElementById('refresh_rate_input').value === '') {
		alert('Enter a refresh rate. \n\nRefresh rate cannot be empty.');
		return;
	}

    const configContent = document.getElementById('config-output').value;
    const blob = new Blob([configContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'settings.txt';
    link.click();
}

function update_preview() {
    const ids = ['aspect-ratio', 'resolution', 'refresh_rate_input', 'v_sync', 'reflex', 'width-input', 'height-input', 'select1', 'select2', 'select3', 'select4', 'select5', 'select6', 'select7', 'select8', 'select9', 'select10'];

    for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', generateConfig);
            element.addEventListener('input', generateConfig);
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateResolutionOptions();
    generateConfig();
    update_preview();
});
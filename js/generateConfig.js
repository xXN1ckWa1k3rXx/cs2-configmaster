function generateConfig() {
    const aspectRatio = document.getElementById('aspect_ratio_select').value;
    var width, height;
    var fullscreen;
    var noborder;
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
        width = document.getElementById('width_input').value || '1920';
        height = document.getElementById('height_input').value || '1080';
    } else {
        const resolution = document.getElementById('resolution_select').value || '1920x1080';
        [width, height] = resolution.split('x');
    }

    const refresh_rate = document.getElementById('refresh_input').value || '60';

    const fullscreen_ = document.getElementById('display_mode_select').value;

    const antiAliasing = document.getElementById('anti_aliasing_select').value;
    const globalShadow = document.getElementById('global_shadow_select').value;
    const dynamicShadows = document.getElementById('dynamic_shadows_select').value;
    const textureDetail = document.getElementById('model_texture_detail_select').value;
    const texturefilter = document.getElementById('texture_filtering_select').value;
    const shaderDetail = document.getElementById('shader_detail_select').value;
    const particleDetail = document.getElementById('particle_detail_select').value;
    const ambientOcclusion = document.getElementById('ambient_occlusion_select').value;
    const hdr = document.getElementById('hdr_select').value;
    const fidelityFX = document.getElementById('fsr_select').value;

    if (antiAliasing === 'None') {
        antiAliasing_ = 0;
    } else if (antiAliasing === 'CMAA2') {
        antiAliasing_ = 0;
        cmaa2 = 1;
    } else if (antiAliasing === '2xMSAA') {
        antiAliasing_ = 2;
    } else if (antiAliasing === '4xMSAA') {
        antiAliasing_ = 4;
    } else if (antiAliasing === '8xMSAA') {
        antiAliasing_ = 8;
    }

    if (fullscreen_ === 'fullscreen') {
        fullscreen = 1;
        noborder = 0;
    } else if (fullscreen_ === 'noborder') {
        fullscreen = 0;
        noborder = 1;
    } else {
        fullscreen = 0;
        noborder = 0;
    }

    const shadowLevels = { 'low': 0, 'Medium': 1, 'High': 2, 'Very_high': 3 };
    globalShadow_ = shadowLevels[globalShadow] || 0;

    const dynamicShadowLevels = { 'sun_only': 0, 'all': 1 };
    dynamicShadows_ = dynamicShadowLevels[dynamicShadows] || 0;

    const textureDetailLevels = { 'low': 0, 'Medium': 1, 'High': 2 };
    textureDetail_ = textureDetailLevels[textureDetail] || 0;

    const texturefilterLevels = { 'Bilinear': 0, 'Trilinear': 1, '2x': 2, '4x': 3, '8x': 4, '16x': 5 };
    texturefilter_ = texturefilterLevels[texturefilter] || 0;

    const shaderDetailLevels = { 'low': 0, 'high': 1 };
    shaderDetail_ = shaderDetailLevels[shaderDetail] || 0;

    const particleDetailLevels = { 'low': 0, 'Medium': 1, 'High': 2, 'Very_high': 3 };
    particleDetail_ = particleDetailLevels[particleDetail] || 0;

    const ambientOcclusionLevels = { 'disable': 0, 'medium': 1, 'high': 2 };
    ambientOcclusion_ = ambientOcclusionLevels[ambientOcclusion] || 0;

    const hdrLevels = { 'quailty': -1, 'performance': 3 };
    hdr_ = hdrLevels[hdr] || -1;

    const fidelityFXLevels = { 'Disabled': 0, 'Ultra_Quality': 1, 'Quality': 2, 'Balanced': 3, 'Performance': 4 };
    fidelityFX_ = fidelityFXLevels[fidelityFX] || 0;

    const configContent = `
    "video.cfg"
{
    "setting.defaultres"        "${width}"             // Width
    "setting.defaultresheight"        "${height}"         // Height
    "setting.refreshrate_numerator"        "${refresh_rate}"        // refreshrate
    "setting.refreshrate_denominator"        "0"     // For round up
    "setting.fullscreen"        "${fullscreen}"                // 0 - Windowed or noborder; 1 - Fullscreen
    "setting.mat_vsync"        "${document.getElementById('v_sync_select').checked ? 1 : 0}"                    // V-sync
    "Version"        "15"
    "VendorID"        "4318"
    "DeviceID"        "7944"
    "setting.cpu_level"        "2"
    "setting.gpu_mem_level"        "3"
    "setting.gpu_level"        "3"
    "setting.knowndevice"        "1"
    "setting.nowindowborder"        "${noborder}"
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
    return configContent;
}
function downloadConfig() {
    const configContent = generateConfig();
    const showModal = (message) => {
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.id = 'errorModal';
        modal.tabIndex = '-1';
        modal.setAttribute('role', 'dialog');
        modal.innerHTML = `
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                      <h4 class="modal-title">Error</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    <!-- Modal body -->
                    <div class="modal-body">
                      ${message}
                    </div>
                    
                    <!-- Modal footer -->
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
        modal.addEventListener('hidden.bs.modal', () => {
            modal.remove();
        });
    };

    if (isNaN(document.getElementById('width_input').value) || isNaN(document.getElementById('height_input').value)) {
        showModal('Please enter a valid number for custom resolution width and height.');
        return;
    }

    if ((document.getElementById('width_input').value === '' || document.getElementById('height_input').value === '') && (document.getElementById('aspect_ratio_select').value === 'custom')) {
        showModal('Please enter a custom resolution. \n\nWidth and Height cannot be empty.');
        return;
    }

    if (isNaN(document.getElementById('refresh_input').value)) {
        showModal('Please enter a valid number for refresh rate.');
        return;
    }

    if (document.getElementById('refresh_input').value === '') {
        showModal('Enter a refresh rate. \n\nRefresh rate cannot be empty.');
        return;
    }

    const blob = new Blob([configContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'settings.txt';
    link.click();
}

document.addEventListener('DOMContentLoaded', (event) => {
    generateConfig();
});
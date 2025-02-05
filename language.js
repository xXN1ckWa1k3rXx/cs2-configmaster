function changeLanguage() {
    const language = document.getElementById('language-select').value;
    if (language === 'en') {
        document.getElementById('version').innerText = 'Version: 0.1b';
        document.getElementById('width').innerText = 'Width';
        document.getElementById('height').innerText = 'Height';
        document.getElementById('anti_aliasing').innerText = 'Anti-Aliasing';
        document.getElementById('global_shadow').innerText = 'Global Shadow Quality';
        document.getElementById('dynamic_shadows').innerText = 'Dynamic Shadows';
        document.getElementById('texture_detail').innerText = 'Model / Texture Detail';
        document.getElementById('shader_detail').innerText = 'Shader Detail';
        document.getElementById('particle_detail').innerText = 'Particle Detail';
        document.getElementById('ambient_occlusion').innerText = 'Ambient Occlusion';
        document.getElementById('hdr').innerText = 'High Dynamic Range';
        document.getElementById('FidelityFX_Super_Resolution').innerText = 'FidelityFX';
    } else if (language === 'zh') {
        document.getElementById('version').innerText = '当前版本: 0.1b';
        document.getElementById('width').innerText = '窗口宽度';
        document.getElementById('height').innerText = '窗口高度';
        document.getElementById('anti_aliasing').innerText = '抗锯齿';
        document.getElementById('global_shadow').innerText = '全局阴影质量';
        document.getElementById('dynamic_shadows').innerText = '动态阴影';
        document.getElementById('texture_detail').innerText = '模型/纹理细节';
        document.getElementById('shader_detail').innerText = '着色器细节';
        document.getElementById('particle_detail').innerText = '粒子详细信息';
        document.getElementById('ambient_occlusion').innerText = '环境遮挡';
        document.getElementById('hdr').innerText = '高动态范围';
        document.getElementById('FidelityFX_Super_Resolution').innerText = 'FidelityFX';
    }
}

export function scale(){
    const designWidth=1920;
    const designHeight=1080;

    // 计算缩放比例
    const scaleX = window.innerWidth / designWidth;
    const scaleY = window.innerHeight / designHeight;
    // 取较小的缩放比例 4:3 要取小的比例
    const scale = Math.min(scaleX, scaleY);
    return scale
}
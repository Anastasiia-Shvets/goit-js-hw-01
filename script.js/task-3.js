'use strict';
function getElementWidth(content, padding, border) {
    const isContent = perseFloat(content);
    const isPadding = perseFloat(padding) * 2;
    const isBorder = perseFloat(border) * 2;
    
    return isContent + isPadding + isBorder;
}
console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));


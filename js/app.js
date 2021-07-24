const range = document.getElementById('range');

range.addEventListener('input', (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;
    // console.log(label);

    const rangewidth = getComputedStyle(e.target).getPropertyValue('width');

    // console.log(rangewidth);

    const labelwidth = getComputedStyle(label).getPropertyValue('width');

    const numrangewidth = +rangewidth.substr(0,rangewidth.length - 2);
    // console.log(numrangewidth);
    // console.log(typeof numrangewidth);

    const numlabelwidth = +labelwidth.substr(0, labelwidth.length - 2);

    const min = +e.target.min;
    const max = +e.target.max;

    const leftright = value * (numrangewidth / max) -numlabelwidth / 2 + scale(value,min,max,10,-10);
    label.style.left = `${leftright}px`;
    label.textContent = value;


});

const scale = (num, inmin, inmax, outmin, outmax) => {
    return (num - inmin) * (outmax - outmin) / (inmax- inmin) + outmin;
}
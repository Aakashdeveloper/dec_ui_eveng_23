const loadCoupon = () => {
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('main').style.opacity = '0.7'
}

const closeCoupon = () => {
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('main').style.opacity = '1'
}
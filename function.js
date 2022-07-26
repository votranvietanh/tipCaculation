function getEle(id) {
    return document.getElementById(id);
}

function calTip() {
    // lay du lieu
    var tongBill = getEle('billamt').value;
    var serviceQual = getEle('serviceQual').value;
    var soNguoi = getEle('peopleamt').value;
    //validation
    getEle('totalTip').style.display = 'block';
    if (tongBill === "" || serviceQual == 0) {
        alert('Please fill in the blank');
        getEle('totalTip').style.display = 'none';
    }

    if (soNguoi === "" || soNguoi <= 1) {
        soNguoi = 1;
        getEle('each').style.display = 'none';
    } else {
        getEle('each').style.display = 'block';
    }
    // tính toán
    var result = (tongBill * serviceQual) / soNguoi;
    result = Math.round(result * 100) / 100; // lam tron` 2 chu so thap phan
    result = result.toFixed(2);

    getEle('tip').innerHTML = result;


}
getEle('calculate').onclick = function () {

    calTip();
}

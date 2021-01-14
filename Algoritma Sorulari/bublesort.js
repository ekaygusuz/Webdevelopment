function bubbleSort(inputArr){
    let n = inputArr.length; // dizimizin uzunluğunu buluyoruz
    for(let i; i<n; i++){
        for(let j =0; j<n; j++){
            if(inputArr[j] > inputArr[j+1]){
                let tmp = inputArr[j]; // yerdeğiştireceğimiz değişkeni akılda tutuyoruz
                inputArr[j] = inputArr[j+1]; // yerdeğiştirme işlemi yapıyoruz
                inputArr[j+1] = tmp; // akılda tuttuğumuz değişkeni yeri değişen değişkenin adresine yerleştiriyoruz
            }
        }
    }
    return inputArr; // elde etmiş olduğumuz sıralı diziyi dönmemiz gerekiyor
}
let inputArr = [5, 1, 4, 2, 8, 3, 11, 7, 9, 17, 23, 10]; //dizimizi tanımladık
bubbleSort(inputArr); //dizimizi fonksiyonumuza parametre olarak gönderdik
console.log(inputArr); // sıralı dizimizi konsola
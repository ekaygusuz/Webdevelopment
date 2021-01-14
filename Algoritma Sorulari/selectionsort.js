function selectionsort(inputArr){
    let n = inputArr.length; //dizimizin eleman sayısını söylüyor
    for(let i=0; i<n; i++){
        let min = i; // dizinin ilk elemanı en küçük eleman varsayımımız
        for(let j=i+1; j<n; j++){
            if(inputArr[j]<inputArr[min]){
                min=j;
            }
        }
        if(min!=i){ // varsaydığımız dizinin ilk elemanı en küçük eleman değilse
            let tmp = inputArr[i]; //geçici olarak i nci değeri tmp ye atadık
            inputArr[i] = inputArr[min];// küçük değerin yer değiştirme işlemini gerçekleştiriyoruz
            inputArr[min]=tmp; //değerimizi in ci sırada olan elemanın konumuna yerleştiriyoruz
        }
    }
    return inputArr; //elde etmiş olmuş olduğumuz diziyi sonuç olarak döndğrmemiz
}
let inputArr = [5, 2, 4, 6, 1, 3, 6, 9, 7, 8, 13, 11, 10]; // dizimizi tanımladık
selectionsort(inputArr); // dizimizi tanımlamış olduğumuz fonksiyona parametre olarak gönderdik
console.log(inputArr); // fonksiyonumuzun sonuç dizisi dönecek